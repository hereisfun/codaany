# 构造类 Coda Pack 功能的完整技术方案

## 概述

基于对 Coda Pack 系统的深入分析，本文档提供了构建类似功能的完整技术方案，包括架构设计、核心模块实现、部署策略和最佳实践。

## 系统架构设计

### 1. 总体架构

```mermaid
graph TB
    subgraph "客户端层 (Browser)"
        A1[Formula Editor]
        A2[Pack Manager] 
        A3[Connection UI]
        A4[Result Viewer]
    end
    
    subgraph "应用服务层 (App Service)"
        B1[Formula Parser Service]
        B2[Pack Execution Engine] 
        B3[Connection Manager]
        B4[Cache Manager]
        B5[Auth Service]
    end
    
    subgraph "核心计算层 (Compute Layer)"
        C1[Web Worker Pool]
        C2[Task Scheduler]
        C3[Dependency Resolver]
        C4[Error Handler]
    end
    
    subgraph "数据存储层 (Data Layer)"
        D1[Pack Registry DB]
        D2[Connection Store]
        D3[Result Cache DB]
        D4[Execution Logs]
    end
    
    subgraph "外部集成层 (External APIs)"
        E1[GitHub API]
        E2[Google APIs]
        E3[Slack API]
        E4[Custom APIs]
    end
    
    A1 --> B1
    A2 --> B2
    A3 --> B3
    A4 --> B4
    
    B1 --> C2
    B2 --> C1
    B3 --> B5
    B4 --> D3
    
    C1 --> C3
    C2 --> C4
    
    B2 --> D1
    B3 --> D2
    B4 --> D4
    
    B2 --> E1
    B2 --> E2  
    B2 --> E3
    B2 --> E4
```

### 2. 技术栈选择

#### **前端技术栈**
```json
{
  "framework": "React 18+ with TypeScript",
  "state_management": "Zustand + React Query", 
  "ui_library": "Material-UI or Chakra UI",
  "formula_editor": "Monaco Editor with custom language",
  "workers": "Comlink for Worker communication",
  "caching": "React Query + IndexedDB",
  "bundler": "Vite with SWC"
}
```

#### **后端技术栈**
```json
{
  "runtime": "Node.js 18+ with TypeScript",
  "framework": "Fastify or Express with Helmet",
  "database": "PostgreSQL with Prisma ORM",
  "cache": "Redis with Redis Streams",
  "queue": "Bull/BullMQ for job processing",
  "auth": "OAuth 2.0 with Passport.js",
  "api": "GraphQL with type-graphql",
  "monitoring": "Prometheus + Grafana"
}
```

## 核心模块实现

### 1. Pack 定义系统

```typescript
// types/pack.ts
export interface PackDefinition {
  id: number;
  name: string;
  version: string;
  description: string;
  icon: string;
  
  // 认证配置
  authentication: AuthConfig;
  
  // 函数定义
  functions: PackFunction[];
  
  // 配置选项
  config: PackConfig;
  
  // 元数据
  metadata: PackMetadata;
}

export interface PackFunction {
  name: string;
  description: string;
  
  // 参数定义
  parameters: Parameter[];
  
  // 返回类型
  returnType: DataType;
  
  // 执行选项
  options: ExecutionOptions;
  
  // 实现代码
  implementation: string; // JavaScript 代码字符串
}

export interface Parameter {
  name: string;
  type: DataType;
  description: string;
  required: boolean;
  defaultValue?: any;
  validation?: ValidationRule[];
}

export interface ExecutionOptions {
  isAsync: boolean;
  timeout: number;
  retries: number;
  cacheTTL: number;
  rateLimit?: RateLimit;
}

// pack-registry.ts
export class PackRegistry {
  private packs: Map<number, PackDefinition> = new Map();
  
  register(pack: PackDefinition): void {
    // 验证 Pack 定义
    this.validatePack(pack);
    
    // 编译函数实现
    const compiledFunctions = this.compileFunctions(pack.functions);
    
    // 注册到系统
    this.packs.set(pack.id, {
      ...pack,
      functions: compiledFunctions
    });
    
    console.log(`Pack registered: ${pack.name} (ID: ${pack.id})`);
  }
  
  getPack(id: number): PackDefinition | null {
    return this.packs.get(id) || null;
  }
  
  getFunction(packId: number, functionName: string): PackFunction | null {
    const pack = this.getPack(packId);
    if (!pack) return null;
    
    return pack.functions.find(f => f.name === functionName) || null;
  }
  
  private compileFunctions(functions: PackFunction[]): CompiledPackFunction[] {
    return functions.map(func => ({
      ...func,
      compiledCode: this.compileFunction(func.implementation),
      signature: this.generateSignature(func)
    }));
  }
  
  private compileFunction(code: string): Function {
    // 在安全的沙箱环境中编译函数
    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
    
    try {
      return new AsyncFunction('params', 'connection', 'context', `
        "use strict";
        
        // 提供安全的 API 上下文
        const api = context.api;
        const cache = context.cache;
        const logger = context.logger;
        
        // 用户代码
        ${code}
      `);
    } catch (error) {
      throw new PackCompilationError(`Failed to compile function: ${error.message}`);
    }
  }
}
```

### 2. 公式解析引擎

```typescript
// formula-parser.ts
export class PackFormulaParser {
  private tokens: Token[] = [];
  private position: number = 0;
  
  parse(formula: string): FormulaAST {
    // 1. 词法分析
    this.tokens = this.tokenize(formula);
    this.position = 0;
    
    // 2. 语法分析
    const ast = this.parseExpression();
    
    // 3. Pack 引用解析
    return this.resolvePackReferences(ast);
  }
  
  private tokenize(formula: string): Token[] {
    const tokens: Token[] = [];
    let current = 0;
    
    while (current < formula.length) {
      let char = formula[current];
      
      // 跳过空白
      if (/\s/.test(char)) {
        current++;
        continue;
      }
      
      // Pack 引用: $$[pack:1013:::false:false:GitHub]
      if (formula.substring(current, current + 7) === '$$[pack:') {
        const packRef = this.parsePackReference(formula, current);
        tokens.push({
          type: 'PACK_REFERENCE',
          value: packRef.value,
          position: current
        });
        current = packRef.endPosition;
        continue;
      }
      
      // 连接引用: $$[packConnectionReference:...]
      if (formula.substring(current, current + 25) === '$$[packConnectionReference:') {
        const connRef = this.parseConnectionReference(formula, current);
        tokens.push({
          type: 'CONNECTION_REFERENCE', 
          value: connRef.value,
          position: current
        });
        current = connRef.endPosition;
        continue;
      }
      
      // 变量引用: $$[variable::::true:false:Url]
      if (formula.substring(current, current + 13) === '$$[variable::::') {
        const varRef = this.parseVariableReference(formula, current);
        tokens.push({
          type: 'VARIABLE_REFERENCE',
          value: varRef.value,
          position: current
        });
        current = varRef.endPosition;
        continue;
      }
      
      // 标准 Token (标识符、操作符、括号等)
      const standardToken = this.parseStandardToken(formula, current);
      if (standardToken) {
        tokens.push(standardToken.token);
        current = standardToken.endPosition;
      } else {
        throw new ParseError(`Unexpected character: ${char} at position ${current}`);
      }
    }
    
    return tokens;
  }
  
  private parsePackReference(formula: string, start: number): ParseResult {
    // 解析 $$[pack:1013:::false:false:GitHub]::FunctionName 格式
    const match = formula.substring(start).match(
      /^\$\$\[pack:(\d+):(.*?)\]::(\w+)/
    );
    
    if (!match) {
      throw new ParseError(`Invalid pack reference at position ${start}`);
    }
    
    const [fullMatch, packId, params, functionName] = match;
    
    return {
      value: {
        type: 'pack_function_call',
        packId: parseInt(packId),
        parameters: params.split(':'),
        functionName
      },
      endPosition: start + fullMatch.length
    };
  }
  
  private parseConnectionReference(formula: string, start: number): ParseResult {
    // 解析 $$[packConnectionReference:uuid:packId:version:flags:name]
    const match = formula.substring(start).match(
      /^\$\$\[packConnectionReference:([^:]+):(\d+):([^:]+):([^:]*):([^\]]*)\]/
    );
    
    if (!match) {
      throw new ParseError(`Invalid connection reference at position ${start}`);
    }
    
    const [fullMatch, connectionId, packId, version, flags, name] = match;
    
    return {
      value: {
        type: 'pack_connection_reference',
        connectionId,
        packId: parseInt(packId),
        version,
        flags: flags.split(':'),
        connectionName: name
      },
      endPosition: start + fullMatch.length
    };
  }
  
  private resolvePackReferences(ast: FormulaAST): ResolvedAST {
    // 遍历 AST，解析 Pack 引用并构建执行计划
    return this.walkAST(ast, (node) => {
      if (node.type === 'pack_function_call') {
        return this.resolvePackFunctionCall(node);
      }
      if (node.type === 'pack_connection_reference') {
        return this.resolveConnectionReference(node);
      }
      return node;
    });
  }
}
```

### 3. 异步执行引擎

```typescript
// execution-engine.ts
export class PackExecutionEngine {
  private taskScheduler: TaskScheduler;
  private workerPool: WorkerPool;
  private cacheManager: CacheManager;
  private connectionManager: ConnectionManager;
  
  constructor() {
    this.taskScheduler = new TaskScheduler({
      maxConcurrency: 10,
      timeout: 30000,
      retryPolicy: {
        maxRetries: 3,
        backoffStrategy: 'exponential'
      }
    });
    
    this.workerPool = new WorkerPool({
      size: 4, // 4 个 Worker 线程
      workerScript: '/workers/pack-executor.worker.js'
    });
    
    this.cacheManager = new MultiLevelCacheManager();
    this.connectionManager = new ConnectionManager();
  }
  
  async executeFormula(
    formula: string, 
    context: ExecutionContext
  ): Promise<ExecutionResult> {
    
    const executionId = generateId();
    const startTime = Date.now();
    
    try {
      // 1. 解析公式
      const parser = new PackFormulaParser();
      const ast = parser.parse(formula);
      
      // 2. 构建执行计划
      const executionPlan = await this.buildExecutionPlan(ast, context);
      
      // 3. 优化执行计划
      const optimizedPlan = this.optimizeExecutionPlan(executionPlan);
      
      // 4. 执行计划
      const result = await this.executePlan(optimizedPlan, context);
      
      // 5. 记录成功指标
      this.recordMetrics({
        executionId,
        duration: Date.now() - startTime,
        success: true,
        formula,
        resultType: typeof result
      });
      
      return {
        value: result,
        executionId,
        duration: Date.now() - startTime
      };
      
    } catch (error) {
      // 记录失败指标
      this.recordMetrics({
        executionId,
        duration: Date.now() - startTime,
        success: false,
        formula,
        error: error.message
      });
      
      throw error;
    }
  }
  
  private async buildExecutionPlan(
    ast: ResolvedAST, 
    context: ExecutionContext
  ): Promise<ExecutionPlan> {
    
    const plan = new ExecutionPlan();
    const dependencies = new Map<string, string[]>();
    
    // 深度优先遍历，收集所有 Pack 函数调用
    this.walkAST(ast, (node, path) => {
      if (node.type === 'pack_function_call') {
        const taskId = `pack_${node.packId}_${node.functionName}_${path.join('_')}`;
        
        plan.addTask({
          id: taskId,
          type: 'pack_function',
          packId: node.packId,
          functionName: node.functionName,
          arguments: node.arguments,
          connectionRef: this.findConnectionReference(node.arguments),
          priority: this.calculatePriority(node, context)
        });
        
        // 分析参数依赖
        const argDependencies = this.analyzeDependencies(node.arguments);
        dependencies.set(taskId, argDependencies);
      }
    });
    
    // 构建依赖图
    for (const [taskId, deps] of dependencies) {
      for (const depId of deps) {
        plan.addDependency(taskId, depId);
      }
    }
    
    return plan;
  }
  
  private async executePlan(
    plan: ExecutionPlan, 
    context: ExecutionContext
  ): Promise<any> {
    
    const results = new Map<string, any>();
    const errors = new Map<string, Error>();
    
    // 拓扑排序获取执行层级
    const levels = plan.getExecutionLevels();
    
    for (const level of levels) {
      // 并行执行同一层级的任务
      const promises = level.map(async (task) => {
        try {
          const result = await this.executeTask(task, results, context);
          results.set(task.id, result);
          return { taskId: task.id, result };
        } catch (error) {
          errors.set(task.id, error);
          throw error;
        }
      });
      
      // 等待当前层级所有任务完成
      await Promise.all(promises);
    }
    
    // 返回根任务的结果
    return results.get(plan.rootTaskId);
  }
  
  private async executeTask(
    task: ExecutionTask,
    results: Map<string, any>,
    context: ExecutionContext
  ): Promise<any> {
    
    // 1. 解析连接
    const connection = await this.connectionManager.getConnection(
      task.connectionRef.connectionId
    );
    
    // 2. 获取 Pack 和函数定义
    const pack = PackRegistry.instance.getPack(task.packId);
    const functionDef = pack?.getFunction(task.functionName);
    
    if (!functionDef) {
      throw new PackError(`Function ${task.functionName} not found in pack ${task.packId}`);
    }
    
    // 3. 检查缓存
    const cacheKey = this.generateCacheKey(task, connection);
    const cached = await this.cacheManager.get(cacheKey);
    if (cached && !this.isCacheExpired(cached, functionDef.options.cacheTTL)) {
      return cached.value;
    }
    
    // 4. 准备参数
    const args = await this.resolveArguments(task.arguments, results, context);
    
    // 5. 在 Worker 中执行
    const result = await this.workerPool.execute({
      packId: task.packId,
      functionName: task.functionName,
      functionCode: functionDef.compiledCode,
      arguments: args,
      connection: this.sanitizeConnection(connection),
      options: functionDef.options
    });
    
    // 6. 缓存结果
    if (functionDef.options.cacheTTL > 0) {
      await this.cacheManager.set(cacheKey, {
        value: result,
        timestamp: Date.now(),
        ttl: functionDef.options.cacheTTL
      });
    }
    
    return result;
  }
}
```

### 4. Worker 执行环境

```typescript
// workers/pack-executor.worker.ts
import { expose } from 'comlink';

class PackExecutorWorker {
  async execute(task: WorkerExecutionTask): Promise<any> {
    const {
      packId,
      functionName, 
      functionCode,
      arguments: args,
      connection,
      options
    } = task;
    
    try {
      // 1. 创建安全的执行上下文
      const executionContext = this.createExecutionContext(connection, options);
      
      // 2. 设置超时
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new TimeoutError(`Function ${functionName} timed out`)), options.timeout);
      });
      
      // 3. 执行函数
      const executionPromise = functionCode.call(null, args, connection, executionContext);
      
      // 4. 等待结果或超时
      const result = await Promise.race([executionPromise, timeoutPromise]);
      
      return result;
      
    } catch (error) {
      // 包装错误以便主线程处理
      throw new WorkerExecutionError({
        packId,
        functionName,
        message: error.message,
        stack: error.stack
      });
    }
  }
  
  private createExecutionContext(
    connection: SanitizedConnection,
    options: ExecutionOptions
  ): ExecutionContext {
    
    return {
      // API 客户端
      api: this.createApiClient(connection),
      
      // 缓存接口（只读）
      cache: {
        get: async (key: string) => {
          // 通过 postMessage 与主线程通信获取缓存
          return this.requestFromMainThread('cache:get', { key });
        }
      },
      
      // 日志接口
      logger: {
        info: (message: string, data?: any) => {
          this.sendToMainThread('log:info', { message, data });
        },
        warn: (message: string, data?: any) => {
          this.sendToMainThread('log:warn', { message, data });
        },
        error: (message: string, data?: any) => {
          this.sendToMainThread('log:error', { message, data });
        }
      },
      
      // 实用工具
      utils: {
        sleep: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),
        retry: this.createRetryFunction(options.retries)
      }
    };
  }
  
  private createApiClient(connection: SanitizedConnection): ApiClient {
    return new ApiClient({
      baseURL: connection.baseURL,
      headers: {
        'Authorization': `Bearer ${connection.accessToken}`,
        'User-Agent': 'Pack-System/1.0'
      },
      timeout: 10000
    });
  }
}

// 暴露给主线程
expose(new PackExecutorWorker());
```

### 5. 连接管理系统

```typescript
// connection-manager.ts
export class ConnectionManager {
  private connections: Map<string, Connection> = new Map();
  private authProviders: Map<string, AuthProvider> = new Map();
  private encryptionService: EncryptionService;
  
  constructor() {
    this.encryptionService = new EncryptionService();
    
    // 注册认证提供者
    this.registerAuthProvider('oauth2', new OAuth2Provider());
    this.registerAuthProvider('api_key', new ApiKeyProvider());
    this.registerAuthProvider('basic', new BasicAuthProvider());
  }
  
  async createConnection(
    packId: number,
    userId: string,
    authConfig: AuthConfig
  ): Promise<Connection> {
    
    const pack = PackRegistry.instance.getPack(packId);
    if (!pack) {
      throw new PackNotFoundError(`Pack ${packId} not found`);
    }
    
    const provider = this.authProviders.get(pack.authentication.type);
    if (!provider) {
      throw new AuthProviderError(`Auth provider ${pack.authentication.type} not supported`);
    }
    
    // 执行认证流程
    const authResult = await provider.authenticate(pack.authentication, authConfig);
    
    // 创建连接对象
    const connection: Connection = {
      id: generateUUID(),
      packId,
      userId,
      connectionName: authConfig.connectionName,
      
      // 加密存储敏感信息
      accessToken: await this.encryptionService.encrypt(authResult.accessToken),
      refreshToken: authResult.refreshToken 
        ? await this.encryptionService.encrypt(authResult.refreshToken)
        : null,
      
      expiresAt: authResult.expiresAt,
      scopes: authResult.scopes,
      
      createdAt: new Date(),
      updatedAt: new Date(),
      lastUsedAt: null,
      
      status: 'active',
      metadata: authResult.metadata || {}
    };
    
    // 保存到数据库
    await this.saveConnection(connection);
    
    // 缓存到内存
    this.connections.set(connection.id, connection);
    
    console.log(`Connection created: ${connection.connectionName} (${connection.id})`);
    
    return connection;
  }
  
  async getConnection(connectionId: string): Promise<Connection> {
    // 从内存缓存获取
    if (this.connections.has(connectionId)) {
      const connection = this.connections.get(connectionId)!;
      
      // 检查连接状态
      if (connection.status !== 'active') {
        throw new ConnectionInactiveError(`Connection ${connectionId} is not active`);
      }
      
      // 检查令牌是否过期
      if (this.isTokenExpired(connection)) {
        await this.refreshConnection(connection);
      }
      
      // 更新最后使用时间
      connection.lastUsedAt = new Date();
      
      return connection;
    }
    
    // 从数据库加载
    const connection = await this.loadConnection(connectionId);
    if (!connection) {
      throw new ConnectionNotFoundError(`Connection ${connectionId} not found`);
    }
    
    // 检查并刷新令牌
    if (this.isTokenExpired(connection)) {
      await this.refreshConnection(connection);
    }
    
    this.connections.set(connectionId, connection);
    return connection;
  }
  
  private async refreshConnection(connection: Connection): Promise<void> {
    const pack = PackRegistry.instance.getPack(connection.packId);
    const provider = this.authProviders.get(pack!.authentication.type);
    
    if (!provider || !connection.refreshToken) {
      throw new TokenRefreshError(`Cannot refresh connection ${connection.id}`);
    }
    
    try {
      const refreshToken = await this.encryptionService.decrypt(connection.refreshToken);
      const newTokens = await provider.refreshTokens(refreshToken, pack!.authentication);
      
      // 更新连接信息
      connection.accessToken = await this.encryptionService.encrypt(newTokens.accessToken);
      if (newTokens.refreshToken) {
        connection.refreshToken = await this.encryptionService.encrypt(newTokens.refreshToken);
      }
      connection.expiresAt = newTokens.expiresAt;
      connection.updatedAt = new Date();
      
      // 保存到数据库
      await this.saveConnection(connection);
      
      console.log(`Connection refreshed: ${connection.connectionName} (${connection.id})`);
      
    } catch (error) {
      connection.status = 'expired';
      await this.saveConnection(connection);
      
      throw new TokenRefreshError(`Failed to refresh connection ${connection.id}: ${error.message}`);
    }
  }
  
  // 获取连接的安全副本（用于 Worker）
  getSanitizedConnection(connection: Connection): SanitizedConnection {
    return {
      id: connection.id,
      packId: connection.packId,
      accessToken: connection.accessToken, // 已加密，Worker 中解密
      baseURL: this.getPackBaseURL(connection.packId),
      scopes: connection.scopes,
      metadata: connection.metadata
    };
  }
}
```

### 6. 缓存系统

```typescript
// cache-manager.ts
export class MultiLevelCacheManager {
  private l1Cache: Map<string, CacheEntry> = new Map(); // 内存缓存
  private l2Cache: IndexedDBCache; // 浏览器持久化
  private l3Cache?: RemoteCache; // 远程缓存（可选）
  
  private readonly L1_MAX_SIZE = 1000;
  private readonly L1_MAX_MEMORY = 50 * 1024 * 1024; // 50MB
  
  constructor() {
    this.l2Cache = new IndexedDBCache('pack-cache');
    
    // 定期清理过期缓存
    setInterval(() => this.cleanup(), 60000); // 每分钟清理一次
  }
  
  async get(key: string): Promise<CacheEntry | null> {
    // L1 内存缓存
    if (this.l1Cache.has(key)) {
      const entry = this.l1Cache.get(key)!;
      if (!this.isExpired(entry)) {
        entry.lastAccessed = Date.now();
        entry.hitCount++;
        return entry;
      }
      this.l1Cache.delete(key);
    }
    
    // L2 IndexedDB 缓存
    const l2Entry = await this.l2Cache.get(key);
    if (l2Entry && !this.isExpired(l2Entry)) {
      // 提升到 L1
      this.setL1(key, l2Entry);
      return l2Entry;
    }
    
    // L3 远程缓存
    if (this.l3Cache) {
      const l3Entry = await this.l3Cache.get(key);
      if (l3Entry && !this.isExpired(l3Entry)) {
        // 提升到 L1 和 L2
        this.setL1(key, l3Entry);
        await this.l2Cache.set(key, l3Entry);
        return l3Entry;
      }
    }
    
    return null;
  }
  
  async set(key: string, value: any, ttl: number = 300): Promise<void> {
    const entry: CacheEntry = {
      key,
      value,
      createdAt: Date.now(),
      expiresAt: Date.now() + (ttl * 1000),
      lastAccessed: Date.now(),
      hitCount: 0,
      size: this.estimateSize(value),
      version: 1
    };
    
    // 写入所有缓存层
    this.setL1(key, entry);
    await this.l2Cache.set(key, entry);
    
    if (this.l3Cache) {
      await this.l3Cache.set(key, entry);
    }
  }
  
  private setL1(key: string, entry: CacheEntry): void {
    // 检查内存限制
    while (this.shouldEvict()) {
      this.evictLRU();
    }
    
    this.l1Cache.set(key, entry);
  }
  
  private shouldEvict(): boolean {
    if (this.l1Cache.size >= this.L1_MAX_SIZE) return true;
    
    const totalMemory = Array.from(this.l1Cache.values())
      .reduce((sum, entry) => sum + entry.size, 0);
    
    return totalMemory >= this.L1_MAX_MEMORY;
  }
  
  private evictLRU(): void {
    let oldestKey: string | null = null;
    let oldestTime = Infinity;
    
    for (const [key, entry] of this.l1Cache) {
      if (entry.lastAccessed < oldestTime) {
        oldestTime = entry.lastAccessed;
        oldestKey = key;
      }
    }
    
    if (oldestKey) {
      this.l1Cache.delete(oldestKey);
    }
  }
  
  private estimateSize(value: any): number {
    return JSON.stringify(value).length * 2; // 粗略估算
  }
  
  private isExpired(entry: CacheEntry): boolean {
    return Date.now() > entry.expiresAt;
  }
  
  private cleanup(): void {
    // 清理 L1 过期条目
    for (const [key, entry] of this.l1Cache) {
      if (this.isExpired(entry)) {
        this.l1Cache.delete(key);
      }
    }
    
    // 清理 L2 过期条目（异步）
    this.l2Cache.cleanup().catch(console.error);
  }
}
```

## 部署和运维

### 1. Docker 化部署

```yaml
# docker-compose.yml
version: '3.8'

services:
  pack-engine:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@postgres:5432/packdb
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
      - ENCRYPTION_KEY=${ENCRYPTION_KEY}
    depends_on:
      - postgres
      - redis
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: packdb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./migrations:/docker-entrypoint-initdb.d
    ports:
      - "5432:5432"
      
  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes --maxmemory 1gb --maxmemory-policy allkeys-lru
    volumes:
      - redis-data:/data
    ports:
      - "6379:6379"
      
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - pack-engine

volumes:
  postgres-data:
  redis-data:
```

### 2. Kubernetes 部署

```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pack-engine
spec:
  replicas: 3
  selector:
    matchLabels:
      app: pack-engine
  template:
    metadata:
      labels:
        app: pack-engine
    spec:
      containers:
      - name: pack-engine
        image: pack-engine:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: pack-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: pack-secrets  
              key: redis-url
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: pack-engine-service
spec:
  selector:
    app: pack-engine
  ports:
  - port: 80
    targetPort: 3000
  type: ClusterIP
```

### 3. 监控和日志

```typescript
// monitoring/metrics.ts
import { createPrometheusMetrics } from 'prom-client';

export class PackMetrics {
  private static instance: PackMetrics;
  
  // 计数器
  private packExecutionTotal = new Counter({
    name: 'pack_execution_total',
    help: 'Total pack function executions',
    labelNames: ['pack_id', 'function_name', 'status']
  });
  
  // 直方图
  private packExecutionDuration = new Histogram({
    name: 'pack_execution_duration_seconds',
    help: 'Pack function execution duration',
    labelNames: ['pack_id', 'function_name'],
    buckets: [0.1, 0.5, 1, 2, 5, 10, 30]
  });
  
  // 缓存指标
  private cacheHitRate = new Counter({
    name: 'pack_cache_requests_total', 
    help: 'Cache requests',
    labelNames: ['cache_level', 'result']
  });
  
  // API 调用指标
  private apiCallDuration = new Histogram({
    name: 'pack_api_call_duration_seconds',
    help: 'External API call duration',
    labelNames: ['pack_id', 'api_endpoint', 'status_code']
  });
  
  recordPackExecution(packId: number, functionName: string, duration: number, success: boolean) {
    this.packExecutionTotal.labels(
      packId.toString(),
      functionName, 
      success ? 'success' : 'error'
    ).inc();
    
    this.packExecutionDuration.labels(
      packId.toString(),
      functionName
    ).observe(duration / 1000);
  }
  
  recordCacheAccess(level: string, hit: boolean) {
    this.cacheHitRate.labels(
      level,
      hit ? 'hit' : 'miss'
    ).inc();
  }
  
  recordApiCall(packId: number, endpoint: string, duration: number, statusCode: number) {
    this.apiCallDuration.labels(
      packId.toString(),
      endpoint,
      statusCode.toString()
    ).observe(duration / 1000);
  }
}
```

### 4. 安全措施

```typescript
// security/sandbox.ts
export class PackExecutionSandbox {
  // 创建安全的执行环境
  createSecureContext(): vm.Context {
    const context = vm.createContext({
      // 只提供安全的全局对象
      console: {
        log: this.createSecureLogger('log'),
        warn: this.createSecureLogger('warn'), 
        error: this.createSecureLogger('error')
      },
      
      // 安全的 setTimeout/setInterval（有限制）
      setTimeout: this.createLimitedSetTimeout(),
      setInterval: this.createLimitedSetInterval(),
      
      // HTTP 客户端（受限）
      fetch: this.createSecureFetch(),
      
      // 工具函数
      JSON: JSON,
      Date: Date,
      Math: Math,
      
      // 禁用危险功能
      eval: undefined,
      Function: undefined,
      require: undefined,
      process: undefined,
      global: undefined,
      window: undefined
    });
    
    return context;
  }
  
  private createSecureFetch() {
    return async (url: string, options?: RequestInit) => {
      // 验证 URL 白名单
      if (!this.isUrlAllowed(url)) {
        throw new SecurityError(`URL not allowed: ${url}`);
      }
      
      // 限制请求选项
      const secureOptions = {
        ...options,
        timeout: Math.min(options?.timeout || 10000, 30000)
      };
      
      return fetch(url, secureOptions);
    };
  }
  
  private isUrlAllowed(url: string): boolean {
    const allowedDomains = [
      'api.github.com',
      'graph.microsoft.com', 
      'slack.com',
      'api.notion.com'
      // ... 其他允许的域名
    ];
    
    try {
      const urlObj = new URL(url);
      return allowedDomains.some(domain => urlObj.hostname.endsWith(domain));
    } catch {
      return false;
    }
  }
}

// security/encryption.ts 
export class EncryptionService {
  private algorithm = 'aes-256-gcm';
  private key: Buffer;
  
  constructor(secretKey: string) {
    this.key = crypto.scryptSync(secretKey, 'salt', 32);
  }
  
  async encrypt(text: string): Promise<string> {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipher(this.algorithm, this.key);
    cipher.setAAD(Buffer.from('pack-system'));
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return iv.toString('hex') + ':' + authTag.toString('hex') + ':' + encrypted;
  }
  
  async decrypt(encryptedText: string): Promise<string> {
    const parts = encryptedText.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const authTag = Buffer.from(parts[1], 'hex');
    const encrypted = parts[2];
    
    const decipher = crypto.createDecipher(this.algorithm, this.key);
    decipher.setAAD(Buffer.from('pack-system'));
    decipher.setAuthTag(authTag);
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}
```

## 最佳实践和注意事项

### 1. 性能优化建议

1. **智能缓存策略**
   - 根据数据更新频率设置不同的 TTL
   - 使用多级缓存提高命中率
   - 实现缓存预热和智能失效

2. **并发控制** 
   - 使用连接池管理 API 调用
   - 实现请求去重避免重复调用
   - 设置合理的并发限制

3. **资源管理**
   - Worker 线程池动态调整
   - 内存使用监控和清理
   - 数据库连接池优化

### 2. 安全最佳实践

1. **沙箱执行**
   - Pack 函数在隔离环境中执行
   - 限制可访问的 API 和资源
   - 防止恶意代码执行

2. **数据保护**
   - 敏感信息加密存储
   - API 令牌定期轮换
   - 访问日志和审计

3. **网络安全**
   - HTTPS 强制使用
   - API 白名单控制
   - 请求频率限制

### 3. 可维护性

1. **代码组织**
   - 模块化设计
   - 清晰的接口定义
   - 完善的类型定义

2. **测试覆盖**
   - 单元测试
   - 集成测试
   - 端到端测试

3. **监控运维**
   - 全面的指标收集
   - 实时告警机制
   - 性能分析和优化

## 总结

构建类 Coda Pack 功能需要在以下几个方面做好平衡：

### 🎯 **技术挑战**
- **异步执行复杂性**：多层嵌套的异步依赖管理
- **性能优化**：大量外部 API 调用的优化
- **安全性**：用户代码的安全执行环境
- **可扩展性**：支持不断增加的 Pack 和功能

### 🚀 **解决方案**
- **分层架构**：清晰的职责分离和模块化设计
- **事件驱动**：松耦合的组件通信机制  
- **多级缓存**：从内存到持久化的全方位缓存
- **Worker Pool**：隔离执行环境保证性能和安全

### 💡 **核心价值**
- **开发者友好**：简单的 Pack 定义和开发流程
- **用户体验**：无缝的公式语法集成
- **企业级**：高可用、高性能、安全可靠
- **生态开放**：支持第三方 Pack 开发和分享

通过以上技术方案，可以构建一个功能完整、性能优异的类 Coda Pack 系统，为用户提供强大的外部服务集成能力。