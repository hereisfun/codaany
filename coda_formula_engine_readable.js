/**
 * Coda Formula Engine - 可读版本源码分析
 * 基于 calc_client.a7f34509781620e1e7da.chunk.js 和 browser.6611b23ea80de0482abc.entry.js
 * 
 * 核心组件：
 * 1. BrowserCalculationServiceClient - 浏览器计算服务客户端
 * 2. AsyncExecutionCoordinator - 异步执行协调器
 * 3. PackFormulaExecutor - Pack 公式执行器
 * 4. WorkerMessageHandler - Worker 消息处理器
 */

// ==================== 1. 浏览器计算服务客户端 ====================

/**
 * 浏览器计算服务客户端 - 负责协调公式执行
 */
class BrowserCalculationServiceClient {
  constructor(serviceHost, userId, options = {}) {
    // gRPC 客户端，用于与计算服务通信
    this._client = new CalcServiceGRPCClient(serviceHost, {
      transport: options.transport
    });
    
    // 用户标识
    this._userId = userId;
    
    // 调用源标识（浏览器）
    this._source = options.invocationSource || InvocationSource.BROWSER;
    
    // 请求映射，用于缓存和去重
    this._requestMap = options.requestMap || new NoopRequestMap();
    
    // 重试配置
    this._retryConfig = options.retryConfig;
    
    // 文档引用
    this._document = null;
    
    // 是否执行后处理
    this._performModelPostProcessingPackFormulas = options.performModelPostProcessing ?? false;
    
    // 额外的 Pack 请求映射
    this._additionalPacksRequestMaps = [];
  }

  /**
   * 执行普通公式函数（同步/异步）
   * @param {Object} contextInfo - 执行上下文信息
   * @param {Object} formulaInfo - 公式信息 {packId, packVersion, namespace, name, schema}
   * @param {Array} parameters - 参数列表
   * @param {Object} options - 选项 {connectionInfo, preserveInternalErrorMessages}
   */
  async invokeFunction(contextInfo, formulaInfo, parameters, options = {}) {
    console.log(`🧮 Invoking formula: ${formulaInfo.name} (Pack: ${formulaInfo.packId})`);
    
    // 1. 构建 gRPC 请求
    const request = new InvokeFormulaRequest();
    
    // 添加上下文信息
    this.addContext(contextInfo, request);
    
    // 2. 参数验证和序列化
    try {
      this._addParameters(contextInfo, parameters, request);
    } catch (error) {
      return {
        type: 'ERROR',
        errorType: 'BAD_PARAMETERS',
        reason: error.message
      };
    }
    
    // 添加连接信息（如果需要认证）
    this._addConnection(options.connectionInfo?.connectionId, request);
    
    // 3. 构建公式信息
    const formula = new Formula();
    formula.setPackId(formulaInfo.packId);
    formula.setPackVersion(formulaInfo.packVersion);
    
    if (formulaInfo.namespace) {
      formula.setNamespace(formulaInfo.namespace);
    }
    
    formula.setName(formulaInfo.name);
    request.setFormula(formula);
    
    if (formulaInfo.schema) {
      request.setSchema(JSON.stringify(formulaInfo.schema));
    }
    
    // 4. 检查缓存
    const cachedResult = await this.lookupPreviouslyValidResult(
      this._additionalPacksRequestMaps,
      request,
      contextInfo,
      { connectionInfo: options.connectionInfo }
    );
    
    if (cachedResult) {
      console.log(`✅ Cache hit for ${formulaInfo.name}`);
      return cachedResult;
    }
    
    // 5. 发送事件通知
    this.emit('CalcServiceInvoked', { packId: formulaInfo.packId });
    
    // 6. 执行请求（带重试）
    try {
      const result = await this.runCalcServerRequestWithBackoff(
        contextInfo,
        async (contextWithAttempt, previousAttemptError) => {
          // 如果有前一次的尝试错误，添加到请求中
          if (previousAttemptError) {
            request.setPreviousAttemptError(this.createExecutionError(previousAttemptError));
          }
          
          // 发送请求到计算服务
          const response = await this.dispatchInvokeFunction(request);
          
          // 处理响应
          return this.handleResult(request, response, formulaInfo.schema, options.preserveInternalErrorMessages);
        },
        { logErrors: false }
      );
      
      // 7. 缓存结果
      this.noteCalculationResult(request, contextInfo, result, { connectionInfo: options.connectionInfo });
      
      return result;
      
    } catch (error) {
      // 8. 错误处理
      const errorResult = await this.handleFormulaInvocationError(error, request);
      this.noteCalculationResult(request, contextInfo, errorResult, { connectionInfo: options.connectionInfo });
      
      return errorResult;
    }
  }

  /**
   * 执行同步表函数（异步）
   * @param {Object} contextInfo - 执行上下文
   * @param {Object} syncFormulaInfo - 同步公式信息 {packId, packVersion, name}
   * @param {Array} parameters - 参数列表
   * @param {Object} options - 选项
   */
  async invokeSyncFunction(contextInfo, syncFormulaInfo, parameters, options = {}) {
    console.log(`🔄 Invoking sync formula: ${syncFormulaInfo.name} (Pack: ${syncFormulaInfo.packId})`);
    
    // 构建同步公式请求
    const request = new InvokeSyncFormulaRequest();
    
    this.addContext(contextInfo, request);
    this._addParameters(contextInfo, parameters, request);
    this._addConnection(options.connectionId, request);
    
    // 构建同步公式信息
    const syncFormula = new SyncFormula();
    syncFormula.setPackId(syncFormulaInfo.packId);
    syncFormula.setPackVersion(syncFormulaInfo.packVersion);
    syncFormula.setName(syncFormulaInfo.name);
    request.setFormula(syncFormula);
    
    // 处理继续标记（分页）
    if (options.continuation) {
      const continuationToken = new ContinuationToken();
      continuationToken.setObjectVal(JSON.stringify(options.continuation));
      request.setContinuation(continuationToken);
    }
    
    // 处理之前的完成状态
    if (options.previousCompletion) {
      const completionToken = new CompletionToken();
      completionToken.setObjectVal(JSON.stringify(options.previousCompletion));
      request.setPreviousCompletion(completionToken);
    }
    
    // 设置权限同步模式
    if (options.permissionSyncMode) {
      request.setPermissionSyncMode(options.permissionSyncMode);
    }
    
    // 设置 Schema
    if (options.schema) {
      request.setSchema(JSON.stringify(options.schema));
    }
    
    // 设置动态 URL
    if (options.dynamicUrl) {
      request.setDynamicUrl(options.dynamicUrl);
    }
    
    // 设置前一次尝试的错误
    if (options.previousAttemptError) {
      request.setPreviousAttemptError(this.createExecutionError(options.previousAttemptError));
    }
    
    // 发送事件通知
    this.emit('CalcServiceInvoked', { packId: syncFormulaInfo.packId });
    
    try {
      // 发送请求
      const response = await this.dispatchInvokeSyncFunction(request);
      
      // 处理响应
      return await this.handleResult(request, response, options.schema, options.preserveInternalErrorMessages);
      
    } catch (error) {
      return this.handleFormulaInvocationError(error, request);
    }
  }

  /**
   * 带退避的计算服务请求执行
   * @param {Object} contextInfo - 上下文信息
   * @param {Function} requestExecutor - 请求执行器
   * @param {Object} options - 选项
   */
  async runCalcServerRequestWithBackoff(contextInfo, requestExecutor, options = {}) {
    let previousAttemptError;
    
    return await retryWithBackoff(async (attemptNumber) => {
      console.log(`🔄 Calc server request attempt ${attemptNumber}`);
      
      // 克隆上下文信息并添加尝试次数
      const contextWithAttempt = this._cloneContextInfoWithAttempt(contextInfo, attemptNumber);
      
      // 执行请求
      const result = await requestExecutor(contextWithAttempt, previousAttemptError);
      
      if (result.type === 'SUCCESS') {
        return result;
      }
      
      // 记录错误信息
      previousAttemptError = result;
      
      const errorInfo = contextInfo?.calcServiceContext.type === 'CsbIngestion'
        ? `${result.errorType} ${result.reason}, CsbIngestionExecutionId: ${contextInfo?.calcServiceContext.ingestionExecutionId}`
        : `${result.errorType} ${result.reason}`;
      
      // 判断是否可重试
      if (this.isRetryable(result, attemptNumber)) {
        throw new RetryableError(`${options.errorMessage || ''}Error Info ${errorInfo}`);
      }
      
      // 对于第一次尝试的非致命错误，抛出异常以便重试
      if (result.type === 'ERROR' && attemptNumber === 1 && !this.isFatalError(result.errorType, contextInfo?.isAction)) {
        throw new Error(errorInfo);
      }
      
      return result;
    }, {
      isErrorRetryable: (error, attemptNumber) => {
        // Action 不重试
        if (contextInfo?.isAction) return false;
        
        // 检查是否过期
        if (this._isPastDeadline?.()) return false;
        
        // 第一次尝试或者是可重试错误
        return attemptNumber === 1 || error instanceof RetryableError;
      },
      logErrors: options.logErrors ?? true,
      maxWaitTimeMsec: this._retryConfig && (() => this._retryConfig.retryAfterMs),
      minWaitTimeMsec: this._retryConfig && (() => 0.8 * this._retryConfig.retryAfterMs)
    });
  }

  /**
   * 处理执行结果
   * @param {Object} request - 原始请求
   * @param {Object} response - gRPC 响应
   * @param {Object} schema - 结果 Schema
   * @param {boolean} preserveInternalErrorMessages - 是否保留内部错误消息
   */
  async handleResult(request, response, schema, preserveInternalErrorMessages) {
    // 成功响应处理
    if (response.hasValue()) {
      // 获取继续标记（用于分页）
      const continuation = response instanceof InvokeSyncFormulaResponse
        ? response.getContinuation()
        : undefined;
      
      let continuationObject;
      if (continuation?.getObjectVal()) {
        continuationObject = JSON.parse(continuation.getObjectVal());
      }
      
      // 获取完成标记
      const completion = response instanceof InvokeSyncFormulaResponse
        ? response.getCompletion()
        : undefined;
      
      let completionObject;
      if (completion?.getObjectVal()) {
        completionObject = JSON.parse(completion.getObjectVal());
      }
      
      // 获取已删除项目ID列表
      const deletedItemIds = response instanceof InvokeSyncFormulaResponse
        ? response.getDeletedItemIdsList()
        : undefined;
      
      // 解码结果值
      let value = this.decodeResultValue(response.getValue());
      let warnings;
      
      // 对于非元数据请求，进行结果包装
      if (!(request instanceof InvokeMetadataFormulaRequest)) {
        const documentContext = this._getDocumentContext(request.getContext());
        const packId = request.getFormula()?.getPackId();
        
        // 使用 PackResultWrapper 包装结果
        value = await PackResultWrapper.wrapObject({
          value: value,
          schema: schema,
          context: documentContext,
          packId: packId,
          allowYielding: true
        });
        
        // 解析 Pack 结果注解
        const annotations = this._parsePackResultAnnotations(response.getAnnotations());
        
        // 对于同步表或需要后处理的情况
        if (schema && (response instanceof InvokeSyncFormulaResponse || this._performModelPostProcessingPackFormulas)) {
          const processedResult = await this.translateResult({
            result: value,
            annotations: annotations
          }, schema, packId, response instanceof InvokeSyncFormulaResponse);
          
          value = processedResult.value;
          warnings = processedResult.warnings;
        }
      }
      
      return {
        type: 'SUCCESS',
        value: value,
        continuation: continuationObject,
        completion: completionObject,
        deletedItemIds: deletedItemIds,
        warnings: warnings
      };
    }
    
    // 错误响应处理
    if (response.hasError()) {
      const error = response.getError();
      return this._handleExecutionError(error, preserveInternalErrorMessages);
    }
    
    // 未知响应类型
    return {
      type: 'ERROR',
      errorType: 'UNKNOWN',
      reason: JSON.stringify(response)
    };
  }

  /**
   * 分发调用函数请求
   * @param {Object} request - gRPC 请求
   */
  async dispatchInvokeFunction(request) {
    // 设置调用源
    if (this._source) {
      request.setSource(this._source);
    }
    
    // 调用 gRPC 客户端
    return this._client.invokeFormula(request, this._getMetadata());
  }

  /**
   * 分发调用同步函数请求
   * @param {Object} request - gRPC 请求
   */
  async dispatchInvokeSyncFunction(request) {
    // 设置调用源
    if (this._source) {
      request.setSource(this._source);
    }
    
    // 调用 gRPC 客户端
    return this._client.invokeSyncFormula(request, this._getMetadata());
  }

  /**
   * 判断错误是否可重试
   * @param {Object} result - 执行结果
   * @param {number} attemptNumber - 尝试次数
   */
  isRetryable(result, attemptNumber) {
    return result.type === 'ERROR' && result.errorType === 'DUPLICATED_FORMULA_REQUEST';
  }
}

// ==================== 2. 异步执行协调器 ====================

/**
 * 异步执行协调器 - 管理复杂公式的异步执行
 */
class AsyncExecutionCoordinator {
  constructor() {
    // 执行队列
    this.executionQueue = new PriorityQueue();
    
    // 活跃执行映射
    this.activeExecutions = new Map();
    
    // 依赖图
    this.dependencyGraph = new ExecutionDependencyGraph();
    
    // 结果缓存
    this.resultCache = new AsyncResultCache();
    
    // 执行状态
    this.executionStates = new Map();
  }

  /**
   * 执行异步公式
   * @param {string} packId - Pack ID
   * @param {string} formulaName - 公式名称
   * @param {Array} args - 参数
   * @param {Object} options - 执行选项
   */
  async executeAsync(packId, formulaName, args, options = {}) {
    console.log(`🚀 Starting async execution: ${formulaName}`);
    
    // 1. 创建执行任务
    const task = this.createExecutionTask(packId, formulaName, args, options);
    
    // 2. 检查缓存
    const cached = await this.resultCache.get(task.cacheKey);
    if (cached) {
      console.log(`🎯 Cache hit: ${task.id}`);
      return cached;
    }
    
    // 3. 检查去重
    const existing = this.activeExecutions.get(task.cacheKey);
    if (existing) {
      console.log(`🔄 Deduplicating: ${task.id}`);
      return existing.promise;
    }
    
    // 4. 分析依赖
    const dependencies = await this.analyzeDependencies(task);
    
    // 5. 创建执行计划
    const executionPlan = this.createExecutionPlan(task, dependencies);
    
    // 6. 开始异步执行
    return this.startAsyncExecution(executionPlan);
  }

  /**
   * 开始异步执行
   * @param {Object} executionPlan - 执行计划
   */
  async startAsyncExecution(executionPlan) {
    const executionState = {
      id: executionPlan.rootTask.id,
      status: 'running',
      startTime: Date.now(),
      promise: null,
      dependencies: executionPlan.dependencies
    };
    
    // 创建执行 Promise
    const promise = this.executeExecutionPlan(executionPlan);
    executionState.promise = promise;
    
    // 注册到活跃执行映射
    this.activeExecutions.set(executionPlan.rootTask.cacheKey, executionState);
    
    try {
      const result = await promise;
      
      // 缓存结果
      await this.resultCache.set(
        executionPlan.rootTask.cacheKey,
        result,
        this.calculateCacheTTL(executionPlan.rootTask)
      );
      
      executionState.status = 'completed';
      console.log(`✅ Async execution completed: ${executionPlan.rootTask.id}`);
      
      return result;
      
    } catch (error) {
      executionState.status = 'failed';
      console.error(`❌ Async execution failed: ${executionPlan.rootTask.id}`, error);
      throw error;
      
    } finally {
      this.activeExecutions.delete(executionPlan.rootTask.cacheKey);
    }
  }

  /**
   * 执行执行计划
   * @param {Object} executionPlan - 执行计划
   */
  async executeExecutionPlan(executionPlan) {
    const results = new Map();
    
    console.log(`📋 Executing plan with ${executionPlan.executionLayers.length} layers`);
    
    // 按层级执行（支持并行）
    for (let layerIndex = 0; layerIndex < executionPlan.executionLayers.length; layerIndex++) {
      const layer = executionPlan.executionLayers[layerIndex];
      
      console.log(`⚡ Executing layer ${layerIndex + 1} with ${layer.length} tasks`);
      
      // 并行执行同一层级的任务
      const layerPromises = layer.map(async (task) => {
        // 等待依赖完成
        await this.waitForDependencies(task.dependencies, results);
        
        console.log(`🔧 Executing task: ${task.id} (type: ${task.type})`);
        
        // 执行任务
        const result = await this.executeTask(task, results);
        results.set(task.id, result);
        
        console.log(`✅ Task completed: ${task.id}`);
        
        return { taskId: task.id, result };
      });
      
      // 等待当前层级的所有任务完成
      await Promise.all(layerPromises);
    }
    
    // 返回根任务的结果
    return results.get(executionPlan.rootTask.id);
  }

  /**
   * 执行单个任务
   * @param {Object} task - 任务
   * @param {Map} previousResults - 之前的结果
   */
  async executeTask(task, previousResults) {
    switch (task.type) {
      case 'pack_formula':
        return this.executePackFormula(
          task.packId,
          task.formulaName,
          this.resolveArguments(task.args, previousResults),
          task.context
        );
        
      case 'builtin_function':
        return this.executeBuiltinFunction(
          task.formulaName,
          this.resolveArguments(task.args, previousResults)
        );
        
      case 'variable_resolution':
        return this.resolveVariable(
          task.variableName,
          task.context
        );
        
      case 'connection_resolution':
        return this.resolveConnection(
          task.connectionId,
          task.context
        );
        
      default:
        throw new Error(`Unknown task type: ${task.type}`);
    }
  }

  /**
   * 等待依赖完成
   * @param {Array} dependencyIds - 依赖 ID 列表
   * @param {Map} results - 结果映射
   */
  async waitForDependencies(dependencyIds, results) {
    if (!dependencyIds || dependencyIds.length === 0) {
      return;
    }
    
    console.log(`⏳ Waiting for dependencies: ${dependencyIds.join(', ')}`);
    
    // 轮询等待依赖完成
    while (true) {
      const missingDependencies = dependencyIds.filter(id => !results.has(id));
      
      if (missingDependencies.length === 0) {
        console.log(`✅ All dependencies satisfied`);
        break;
      }
      
      // 短暂等待
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }
}

// ==================== 3. Pack 公式执行器 ====================

/**
 * Pack 公式执行器 - 处理 Pack 公式的具体执行
 */
class PackFormulaExecutor {
  constructor(packRuntimeManager) {
    this.packRuntimeManager = packRuntimeManager;
    this.executionMetrics = new Map();
  }

  /**
   * 执行 Pack 公式
   * @param {string} packId - Pack ID
   * @param {string} formulaName - 公式名称
   * @param {Array} args - 参数
   * @param {Object} context - 执行上下文
   */
  async executePackFormula(packId, formulaName, args, context) {
    const startTime = Date.now();
    
    try {
      console.log(`📦 Executing Pack formula: ${packId}::${formulaName}`);
      
      // 1. 获取 Pack 运行时
      const packRuntime = await this.packRuntimeManager.getPackRuntime(packId);
      
      if (!packRuntime) {
        throw new Error(`Pack runtime not found: ${packId}`);
      }
      
      // 2. 验证公式存在
      const formulaDefinition = packRuntime.getFormula(formulaName);
      
      if (!formulaDefinition) {
        throw new Error(`Formula not found: ${formulaName} in pack ${packId}`);
      }
      
      // 3. 验证参数
      this.validateArguments(formulaDefinition, args);
      
      // 4. 构建执行上下文
      const packContext = await this.buildPackContext(packRuntime, context);
      
      // 5. 判断执行模式
      const isAsync = formulaDefinition.isAsync || this.requiresAsyncExecution(formulaDefinition, args);
      
      let result;
      if (isAsync) {
        // 异步执行
        console.log(`⚡ Executing async Pack formula: ${formulaName}`);
        result = await this.executeAsyncPackFormula(packRuntime, formulaName, args, packContext);
      } else {
        // 同步执行
        console.log(`🔧 Executing sync Pack formula: ${formulaName}`);
        result = await this.executeSyncPackFormula(packRuntime, formulaName, args, packContext);
      }
      
      // 6. 验证和格式化结果
      const formattedResult = await this.validateAndFormatResult(result, formulaDefinition);
      
      // 7. 记录执行指标
      const duration = Date.now() - startTime;
      this.recordExecutionMetrics(packId, formulaName, duration, true);
      
      console.log(`✅ Pack formula completed: ${formulaName} (${duration}ms)`);
      
      return formattedResult;
      
    } catch (error) {
      // 8. 错误处理
      const duration = Date.now() - startTime;
      this.recordExecutionMetrics(packId, formulaName, duration, false);
      
      console.error(`❌ Pack formula failed: ${formulaName} (${duration}ms)`, error);
      
      throw new PackFormulaExecutionError(
        `Pack formula execution failed: ${formulaName}`,
        error,
        { packId, formulaName, args }
      );
    }
  }

  /**
   * 执行异步 Pack 公式
   * @param {Object} packRuntime - Pack 运行时
   * @param {string} formulaName - 公式名称
   * @param {Array} args - 参数
   * @param {Object} context - 上下文
   */
  async executeAsyncPackFormula(packRuntime, formulaName, args, context) {
    // 获取或创建 Worker
    const worker = await packRuntime.getOrCreateWorker();
    
    // 构建 Worker 消息
    const message = {
      type: 'EXECUTE_PACK_FORMULA',
      packId: packRuntime.packId,
      formulaName: formulaName,
      args: args,
      context: context,
      requestId: this.generateRequestId()
    };
    
    // 发送到 Worker 并等待响应
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Pack formula execution timeout: ${formulaName}`));
      }, 30000); // 30 秒超时
      
      const messageHandler = (event) => {
        const { requestId, result, error } = event.data;
        
        if (requestId === message.requestId) {
          clearTimeout(timeout);
          worker.removeEventListener('message', messageHandler);
          
          if (error) {
            reject(new Error(error));
          } else {
            resolve(result);
          }
        }
      };
      
      worker.addEventListener('message', messageHandler);
      worker.postMessage(message);
    });
  }

  /**
   * 执行同步 Pack 公式
   * @param {Object} packRuntime - Pack 运行时
   * @param {string} formulaName - 公式名称
   * @param {Array} args - 参数
   * @param {Object} context - 上下文
   */
  async executeSyncPackFormula(packRuntime, formulaName, args, context) {
    // 直接在主线程执行（适用于简单、快速的公式）
    const formula = packRuntime.getFormula(formulaName);
    
    return await formula.execute(args, context);
  }

  /**
   * 判断是否需要异步执行
   * @param {Object} formulaDefinition - 公式定义
   * @param {Array} args - 参数
   */
  requiresAsyncExecution(formulaDefinition, args) {
    // 1. 公式明确标记为异步
    if (formulaDefinition.isAsync) {
      return true;
    }
    
    // 2. 公式需要网络请求
    if (formulaDefinition.requiresNetwork) {
      return true;
    }
    
    // 3. 参数复杂度高
    const complexity = this.calculateComplexity(args);
    if (complexity > 1000) { // 复杂度阈值
      return true;
    }
    
    // 4. 公式是 Action（通常涉及外部状态修改）
    if (formulaDefinition.isAction) {
      return true;
    }
    
    return false;
  }

  /**
   * 构建 Pack 执行上下文
   * @param {Object} packRuntime - Pack 运行时
   * @param {Object} baseContext - 基础上下文
   */
  async buildPackContext(packRuntime, baseContext) {
    return {
      // 网络请求器
      fetcher: packRuntime.createSecureFetcher(),
      
      // 临时存储
      temporaryBlobStorage: new TemporaryBlobStorage(),
      
      // 认证信息
      authentication: baseContext.authentication,
      
      // 连接信息
      connections: baseContext.connections,
      
      // 用户信息
      user: baseContext.user,
      
      // 文档上下文
      document: baseContext.document,
      
      // 时区和本地化
      timezone: baseContext.timezone,
      locale: baseContext.locale,
      
      // 调用位置
      invocationLocation: baseContext.invocationLocation,
      
      // 同步上下文（如果是同步表公式）
      sync: baseContext.sync
    };
  }
}

// ==================== 4. Worker 消息处理器 ====================

/**
 * Worker 消息处理器 - 处理来自主线程的消息
 * 此代码运行在 Web Worker 中
 */
class WorkerMessageHandler {
  constructor() {
    // Pack 运行时缓存
    this.packRuntimes = new Map();
    
    // 执行上下文缓存
    this.executionContexts = new Map();
    
    // 消息监听器
    self.addEventListener('message', this.handleMessage.bind(this));
  }

  /**
   * 处理来自主线程的消息
   * @param {MessageEvent} event - 消息事件
   */
  async handleMessage(event) {
    const { type, requestId } = event.data;
    
    try {
      let result;
      
      switch (type) {
        case 'EXECUTE_PACK_FORMULA':
          result = await this.handleExecutePackFormula(event.data);
          break;
          
        case 'LOAD_PACK':
          result = await this.handleLoadPack(event.data);
          break;
          
        case 'UNLOAD_PACK':
          result = await this.handleUnloadPack(event.data);
          break;
          
        default:
          throw new Error(`Unknown message type: ${type}`);
      }
      
      // 发送成功响应
      self.postMessage({
        requestId: requestId,
        result: result,
        error: null
      });
      
    } catch (error) {
      // 发送错误响应
      self.postMessage({
        requestId: requestId,
        result: null,
        error: error.message
      });
    }
  }

  /**
   * 处理执行 Pack 公式消息
   * @param {Object} data - 消息数据
   */
  async handleExecutePackFormula(data) {
    const { packId, formulaName, args, context } = data;
    
    console.log(`🔧 Worker executing: ${packId}::${formulaName}`);
    
    // 1. 获取或加载 Pack 运行时
    let packRuntime = this.packRuntimes.get(packId);
    
    if (!packRuntime) {
      packRuntime = await this.loadPackRuntime(packId);
      this.packRuntimes.set(packId, packRuntime);
    }
    
    // 2. 创建隔离执行环境
    const isolatedContext = this.createIsolatedContext(context);
    
    // 3. 执行公式
    const result = await this.executeWithTimeout(
      () => packRuntime.executeFormula(formulaName, args, isolatedContext),
      context.timeout || 30000 // 默认 30 秒超时
    );
    
    // 4. 验证和格式化结果
    return this.validateAndFormatResult(result, formulaName);
  }

  /**
   * 在超时控制下执行函数
   * @param {Function} fn - 要执行的函数
   * @param {number} timeout - 超时时间（毫秒）
   */
  async executeWithTimeout(fn, timeout) {
    return Promise.race([
      fn(),
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error(`Execution timeout after ${timeout}ms`));
        }, timeout);
      })
    ]);
  }

  /**
   * 创建隔离执行上下文
   * @param {Object} baseContext - 基础上下文
   */
  createIsolatedContext(baseContext) {
    return {
      // 安全的网络请求器
      fetch: this.createSecureFetch(baseContext.allowedDomains),
      
      // 临时存储
      temporaryBlobStorage: new WorkerTemporaryBlobStorage(),
      
      // 认证信息（只读）
      authentication: Object.freeze({ ...baseContext.authentication }),
      
      // 执行限制
      limits: {
        memoryLimit: 128 * 1024 * 1024, // 128MB
        executionTime: baseContext.timeout,
        networkRequests: 100
      },
      
      // 上下文数据（只读）
      variables: Object.freeze({ ...baseContext.variables }),
      connections: Object.freeze({ ...baseContext.connections }),
      
      // 同步上下文
      sync: baseContext.sync
    };
  }

  /**
   * 创建安全的 fetch 函数
   * @param {Array} allowedDomains - 允许的域名列表
   */
  createSecureFetch(allowedDomains) {
    return async (url, options = {}) => {
      // 1. 验证 URL
      const urlObj = new URL(url);
      const isAllowed = allowedDomains.some(domain => 
        urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
      );
      
      if (!isAllowed) {
        throw new Error(`Domain not allowed: ${urlObj.hostname}`);
      }
      
      // 2. 设置默认选项
      const fetchOptions = {
        method: 'GET',
        timeout: 10000, // 10 秒超时
        ...options
      };
      
      // 3. 执行请求
      const response = await fetch(url, fetchOptions);
      
      // 4. 检查响应
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      // 5. 解析响应体
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        return {
          ...response,
          body: await response.json()
        };
      } else {
        return {
          ...response,
          body: await response.text()
        };
      }
    };
  }
}

// ==================== 5. 同步 vs 异步执行的关键差异 ====================

/**
 * 同步公式执行流程
 */
class SyncFormulaExecution {
  static async execute(formula, args, context) {
    console.log(`🔧 Sync execution: ${formula.name}`);
    
    // 1. 直接在当前线程执行
    const startTime = Date.now();
    
    try {
      // 2. 参数验证
      this.validateArgs(formula, args);
      
      // 3. 执行公式函数（阻塞）
      const result = await formula.execute(args, context);
      
      // 4. 结果验证
      this.validateResult(formula, result);
      
      const duration = Date.now() - startTime;
      console.log(`✅ Sync execution completed: ${formula.name} (${duration}ms)`);
      
      return result;
      
    } catch (error) {
      const duration = Date.now() - startTime;
      console.error(`❌ Sync execution failed: ${formula.name} (${duration}ms)`, error);
      throw error;
    }
  }
}

/**
 * 异步公式执行流程
 */
class AsyncFormulaExecution {
  static async execute(formula, args, context) {
    console.log(`⚡ Async execution: ${formula.name}`);
    
    // 1. 创建执行任务
    const task = {
      id: this.generateTaskId(),
      formula: formula,
      args: args,
      context: context,
      startTime: Date.now()
    };
    
    try {
      // 2. 检查是否需要 Worker
      if (this.shouldUseWorker(formula, args)) {
        return await this.executeInWorker(task);
      } else {
        return await this.executeInMainThread(task);
      }
      
    } catch (error) {
      const duration = Date.now() - task.startTime;
      console.error(`❌ Async execution failed: ${formula.name} (${duration}ms)`, error);
      throw error;
    }
  }

  /**
   * 在 Worker 中执行
   */
  static async executeInWorker(task) {
    const { formula, args, context } = task;
    
    // 1. 获取或创建 Worker
    const worker = await WorkerPool.getWorker();
    
    try {
      // 2. 发送执行消息
      const message = {
        type: 'EXECUTE_FORMULA',
        requestId: task.id,
        formula: this.serializeFormula(formula),
        args: this.serializeArgs(args),
        context: this.serializeContext(context)
      };
      
      // 3. 等待 Worker 响应
      const result = await this.sendMessageToWorker(worker, message);
      
      const duration = Date.now() - task.startTime;
      console.log(`✅ Worker execution completed: ${formula.name} (${duration}ms)`);
      
      return result;
      
    } finally {
      // 4. 释放 Worker
      WorkerPool.releaseWorker(worker);
    }
  }

  /**
   * 在主线程中执行（非阻塞）
   */
  static async executeInMainThread(task) {
    const { formula, args, context } = task;
    
    // 1. 使用 setTimeout 确保非阻塞
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          // 2. 执行公式
          const result = await formula.execute(args, context);
          
          const duration = Date.now() - task.startTime;
          console.log(`✅ Main thread async execution completed: ${formula.name} (${duration}ms)`);
          
          resolve(result);
          
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
  }

  /**
   * 判断是否应该使用 Worker
   */
  static shouldUseWorker(formula, args) {
    // 1. 公式明确要求异步
    if (formula.requiresWorker) {
      return true;
    }
    
    // 2. 涉及网络请求
    if (formula.requiresNetwork) {
      return true;
    }
    
    // 3. 计算复杂度高
    const complexity = this.estimateComplexity(formula, args);
    if (complexity > 100) {
      return true;
    }
    
    // 4. 是 Pack 公式
    if (formula.isPack) {
      return true;
    }
    
    return false;
  }
}

// 初始化 Worker 消息处理器（仅在 Worker 环境中）
if (typeof self !== 'undefined' && typeof window === 'undefined') {
  // 这里是 Worker 环境
  new WorkerMessageHandler();
}

// 导出主要类（仅在主线程环境中）
if (typeof window !== 'undefined') {
  window.CodaFormulaEngine = {
    BrowserCalculationServiceClient,
    AsyncExecutionCoordinator,
    PackFormulaExecutor,
    SyncFormulaExecution,
    AsyncFormulaExecution
  };
}