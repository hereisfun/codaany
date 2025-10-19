/**
 * 公式表达式到执行计划的完整分析流程
 * 详细展示如何从复杂的公式字符串解析出执行层级
 */

/**
 * 公式解析器 - 将公式字符串转换为可执行的计划
 */
class FormulaToExecutionPlanAnalyzer {
  constructor() {
    this.debugMode = true;
  }

  /**
   * 主入口：从公式表达式创建执行计划
   * @param {string} formulaExpression - 公式表达式
   * @returns {Object} 执行计划
   */
  analyzeFormula(formulaExpression) {
    console.log(`🔍 开始分析公式: ${formulaExpression}`);
    
    // 第一步：词法分析 - 将字符串分解为token
    const tokens = this.tokenizeFormula(formulaExpression);
    console.log(`📝 词法分析结果:`, tokens);
    
    // 第二步：语法分析 - 构建AST
    const ast = this.parseTokensToAST(tokens);
    console.log(`🌳 AST构建完成:`, JSON.stringify(ast, null, 2));
    
    // 第三步：依赖分析 - 从AST提取执行依赖
    const dependencies = this.extractDependenciesFromAST(ast);
    console.log(`🔗 依赖分析结果:`, dependencies);
    
    // 第四步：执行任务生成 - 将依赖转换为可执行任务
    const executionTasks = this.generateExecutionTasks(dependencies);
    console.log(`⚙️ 执行任务生成:`, executionTasks);
    
    // 第五步：依赖图构建 - 建立任务间的依赖关系
    const dependencyGraph = this.buildDependencyGraph(executionTasks);
    console.log(`📊 依赖图构建完成`);
    
    // 第六步：层级计算 - 计算执行层级
    const executionLayers = this.calculateExecutionLayers(dependencyGraph);
    console.log(`🏗️ 执行层级计算完成: ${executionLayers.length} 层`);
    
    return {
      originalFormula: formulaExpression,
      tokens: tokens,
      ast: ast,
      dependencies: dependencies,
      executionTasks: executionTasks,
      dependencyGraph: dependencyGraph,
      executionLayers: executionLayers,
      analysis: this.generateAnalysisReport(executionLayers)
    };
  }

  /**
   * 第一步：词法分析 - 识别公式中的特殊标记
   * @param {string} formula - 公式字符串
   * @returns {Array} token数组
   */
  tokenizeFormula(formula) {
    console.log(`\n🔤 开始词法分析...`);
    
    const tokens = [];
    let position = 0;
    
    // 移除开头的等号
    const cleanFormula = formula.startsWith('=') ? formula.slice(1) : formula;
    
    while (position < cleanFormula.length) {
      const char = cleanFormula[position];
      
      // 跳过空白字符
      if (/\s/.test(char)) {
        position++;
        continue;
      }
      
      // 识别Pack引用标记 $$[...]
      if (char === '$' && cleanFormula[position + 1] === '$' && cleanFormula[position + 2] === '[') {
        const packRef = this.extractPackReference(cleanFormula, position);
        tokens.push({
          type: 'PACK_REFERENCE',
          value: packRef.value,
          rawValue: packRef.raw,
          details: this.parsePackReference(packRef.raw)
        });
        position = packRef.endPosition;
        continue;
      }
      
      // 识别函数调用
      if (/[a-zA-Z]/.test(char)) {
        const identifier = this.extractIdentifier(cleanFormula, position);
        
        // 检查是否是函数调用（后面跟着括号）
        if (this.peekAhead(cleanFormula, identifier.endPosition, '(')) {
          tokens.push({
            type: 'FUNCTION_CALL',
            value: identifier.value,
            position: position
          });
        } else {
          tokens.push({
            type: 'IDENTIFIER',
            value: identifier.value,
            position: position
          });
        }
        
        position = identifier.endPosition;
        continue;
      }
      
      // 识别操作符和分隔符
      if ('()[]{},.+-*/:'.includes(char)) {
        tokens.push({
          type: 'OPERATOR',
          value: char,
          position: position
        });
        position++;
        continue;
      }
      
      // 识别字符串字面量
      if (char === '"' || char === "'") {
        const stringLiteral = this.extractStringLiteral(cleanFormula, position);
        tokens.push({
          type: 'STRING_LITERAL',
          value: stringLiteral.value,
          position: position
        });
        position = stringLiteral.endPosition;
        continue;
      }
      
      // 识别数字
      if (/\d/.test(char)) {
        const number = this.extractNumber(cleanFormula, position);
        tokens.push({
          type: 'NUMBER',
          value: number.value,
          position: position
        });
        position = number.endPosition;
        continue;
      }
      
      // 未识别的字符，跳过
      console.warn(`⚠️ 未识别的字符: ${char} at position ${position}`);
      position++;
    }
    
    console.log(`✅ 词法分析完成，识别出 ${tokens.length} 个token`);
    return tokens;
  }

  /**
   * 提取Pack引用
   * @param {string} formula - 公式字符串
   * @param {number} startPos - 开始位置
   * @returns {Object} Pack引用信息
   */
  extractPackReference(formula, startPos) {
    const start = startPos;
    let pos = startPos + 3; // 跳过 $$[
    let bracketCount = 1;
    
    while (pos < formula.length && bracketCount > 0) {
      if (formula[pos] === '[') {
        bracketCount++;
      } else if (formula[pos] === ']') {
        bracketCount--;
      }
      pos++;
    }
    
    const raw = formula.substring(start, pos);
    const content = formula.substring(start + 3, pos - 1); // 去掉 $$[ 和 ]
    
    return {
      raw: raw,
      value: content,
      endPosition: pos
    };
  }

  /**
   * 解析Pack引用的详细信息
   * @param {string} packRef - Pack引用字符串
   * @returns {Object} 解析后的Pack信息
   */
  parsePackReference(packRef) {
    console.log(`🔍 解析Pack引用: ${packRef}`);
    
    // 移除 $$[ 和 ] 
    const content = packRef.slice(3, -1);
    
    // 解析不同类型的Pack引用
    if (content.startsWith('pack:')) {
      // $$[pack:packId:::isAsync:isAction:packName]
      const parts = content.split(':');
      return {
        type: 'PACK_FORMULA',
        packId: parts[1],
        isAsync: parts[4] === 'true',
        isAction: parts[5] === 'true',
        packName: parts[6]
      };
    } else if (content.startsWith('packConnectionReference:')) {
      // $$[packConnectionReference:connectionId:packId:version:isAsync:isAction:connectionName]
      const parts = content.split(':');
      return {
        type: 'PACK_CONNECTION_REFERENCE',
        connectionId: parts[1],
        packId: parts[2],
        version: parts[3],
        isAsync: parts[4] === 'true',
        isAction: parts[5] === 'true',
        connectionName: parts[6]
      };
    } else if (content.startsWith('variable:')) {
      // $$[variable::::isAsync:isAction:variableName]
      const parts = content.split(':');
      return {
        type: 'VARIABLE_REFERENCE',
        isAsync: parts[4] === 'true',
        isAction: parts[5] === 'true',
        variableName: parts[6]
      };
    }
    
    return {
      type: 'UNKNOWN',
      raw: content
    };
  }

  /**
   * 第二步：语法分析 - 构建抽象语法树
   * @param {Array} tokens - token数组
   * @returns {Object} AST
   */
  parseTokensToAST(tokens) {
    console.log(`\n🌳 开始语法分析，构建AST...`);
    
    const parser = new FormulaASTParser(tokens);
    const ast = parser.parse();
    
    console.log(`✅ AST构建完成`);
    return ast;
  }

  /**
   * 第三步：从AST提取依赖关系
   * @param {Object} ast - 抽象语法树
   * @returns {Array} 依赖数组
   */
  extractDependenciesFromAST(ast) {
    console.log(`\n🔗 开始依赖分析...`);
    
    const dependencies = [];
    const visited = new Set();
    
    // 深度优先遍历AST，提取所有依赖
    this.traverseAST(ast, (node, path) => {
      if (this.isPackReference(node)) {
        const dependency = this.createDependencyFromPackRef(node, path);
        
        // 避免重复依赖
        const key = this.getDependencyKey(dependency);
        if (!visited.has(key)) {
          dependencies.push(dependency);
          visited.add(key);
          console.log(`  📌 发现依赖: ${key}`);
        }
      }
    });
    
    console.log(`✅ 依赖分析完成，发现 ${dependencies.length} 个依赖`);
    return dependencies;
  }

  /**
   * 遍历AST节点
   * @param {Object} node - AST节点
   * @param {Function} visitor - 访问者函数
   * @param {Array} path - 当前路径
   */
  traverseAST(node, visitor, path = []) {
    if (!node || typeof node !== 'object') return;
    
    // 访问当前节点
    visitor(node, path);
    
    // 递归访问子节点
    for (const [key, value] of Object.entries(node)) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          this.traverseAST(item, visitor, [...path, key, index]);
        });
      } else if (value && typeof value === 'object') {
        this.traverseAST(value, visitor, [...path, key]);
      }
    }
  }

  /**
   * 检查节点是否是Pack引用
   * @param {Object} node - AST节点
   * @returns {boolean}
   */
  isPackReference(node) {
    return node && node.type === 'PACK_REFERENCE';
  }

  /**
   * 从Pack引用创建依赖对象
   * @param {Object} packRefNode - Pack引用节点
   * @param {Array} path - AST路径
   * @returns {Object} 依赖对象
   */
  createDependencyFromPackRef(packRefNode, path) {
    const details = packRefNode.details;
    
    switch (details.type) {
      case 'PACK_FORMULA':
        return {
          id: `pack_${details.packId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          type: 'PACK_FORMULA',
          packId: details.packId,
          packName: details.packName,
          isAsync: details.isAsync,
          isAction: details.isAction,
          path: path,
          requiresNetwork: true,
          estimatedDuration: details.isAsync ? 1000 : 100
        };
        
      case 'PACK_CONNECTION_REFERENCE':
        return {
          id: `connection_${details.connectionId}`,
          type: 'CONNECTION_RESOLUTION',
          connectionId: details.connectionId,
          packId: details.packId,
          version: details.version,
          connectionName: details.connectionName,
          path: path,
          estimatedDuration: 50
        };
        
      case 'VARIABLE_REFERENCE':
        return {
          id: `variable_${details.variableName}_${Date.now()}`,
          type: 'VARIABLE_RESOLUTION',
          variableName: details.variableName,
          isAsync: details.isAsync,
          path: path,
          estimatedDuration: 5
        };
        
      default:
        return {
          id: `unknown_${Date.now()}`,
          type: 'UNKNOWN',
          details: details,
          path: path,
          estimatedDuration: 100
        };
    }
  }

  /**
   * 第四步：生成执行任务
   * @param {Array} dependencies - 依赖数组
   * @returns {Array} 执行任务数组
   */
  generateExecutionTasks(dependencies) {
    console.log(`\n⚙️ 开始生成执行任务...`);
    
    const executionTasks = [];
    
    dependencies.forEach(dependency => {
      const task = {
        id: dependency.id,
        type: dependency.type,
        dependency: dependency,
        
        // 执行配置
        executionMode: this.determineExecutionMode(dependency),
        priority: this.calculateTaskPriority(dependency),
        estimatedDuration: dependency.estimatedDuration || 100,
        
        // 依赖关系（稍后填充）
        dependsOn: [],
        dependents: [],
        
        // 执行状态
        status: 'pending',
        layer: -1 // 稍后计算
      };
      
      executionTasks.push(task);
      console.log(`  ⚙️ 任务生成: ${task.id} (${task.type})`);
    });
    
    console.log(`✅ 执行任务生成完成，共 ${executionTasks.length} 个任务`);
    return executionTasks;
  }

  /**
   * 第五步：构建依赖图
   * @param {Array} executionTasks - 执行任务数组
   * @returns {Map} 依赖图
   */
  buildDependencyGraph(executionTasks) {
    console.log(`\n📊 开始构建依赖图...`);
    
    const dependencyGraph = new Map();
    
    // 1. 初始化任务映射
    executionTasks.forEach(task => {
      dependencyGraph.set(task.id, {
        task: task,
        dependsOn: new Set(),
        dependents: new Set()
      });
    });
    
    // 2. 分析任务间的依赖关系
    this.analyzeDependencyRelationships(executionTasks, dependencyGraph);
    
    console.log(`✅ 依赖图构建完成`);
    this.logDependencyGraph(dependencyGraph);
    
    return dependencyGraph;
  }

  /**
   * 分析任务间的依赖关系
   * @param {Array} executionTasks - 执行任务
   * @param {Map} dependencyGraph - 依赖图
   */
  analyzeDependencyRelationships(executionTasks, dependencyGraph) {
    console.log(`  🔍 分析任务依赖关系...`);
    
    // 创建AST路径到任务ID的映射
    const pathToTaskMap = new Map();
    executionTasks.forEach(task => {
      const pathKey = JSON.stringify(task.dependency.path);
      pathToTaskMap.set(pathKey, task.id);
    });
    
    // 分析每个任务的依赖
    executionTasks.forEach(task => {
      const taskNode = dependencyGraph.get(task.id);
      
      // 基于AST路径分析依赖
      const dependencies = this.findTaskDependencies(task, executionTasks);
      
      dependencies.forEach(depTaskId => {
        if (dependencyGraph.has(depTaskId)) {
          // 添加依赖关系
          taskNode.dependsOn.add(depTaskId);
          dependencyGraph.get(depTaskId).dependents.add(task.id);
          
          console.log(`    🔗 ${task.id} 依赖 ${depTaskId}`);
        }
      });
    });
  }

  /**
   * 查找任务的依赖
   * @param {Object} task - 当前任务
   * @param {Array} allTasks - 所有任务
   * @returns {Array} 依赖的任务ID数组
   */
  findTaskDependencies(task, allTasks) {
    const dependencies = [];
    
    // 基于任务类型和AST路径分析依赖
    switch (task.type) {
      case 'PACK_FORMULA':
        // Pack公式可能依赖连接和变量
        const connectionDeps = allTasks.filter(t => 
          t.type === 'CONNECTION_RESOLUTION' && 
          this.isInSameBranch(task.dependency.path, t.dependency.path)
        );
        
        const variableDeps = allTasks.filter(t => 
          t.type === 'VARIABLE_RESOLUTION' && 
          this.isUsedByTask(t, task)
        );
        
        dependencies.push(...connectionDeps.map(t => t.id));
        dependencies.push(...variableDeps.map(t => t.id));
        break;
        
      case 'VARIABLE_RESOLUTION':
        // 变量解析可能依赖连接
        const requiredConnections = allTasks.filter(t => 
          t.type === 'CONNECTION_RESOLUTION' && 
          this.isInSameBranch(task.dependency.path, t.dependency.path)
        );
        
        dependencies.push(...requiredConnections.map(t => t.id));
        break;
        
      case 'CONNECTION_RESOLUTION':
        // 连接解析通常是叶子节点
        break;
    }
    
    return dependencies;
  }

  /**
   * 检查两个路径是否在同一分支
   * @param {Array} path1 - 路径1
   * @param {Array} path2 - 路径2
   * @returns {boolean}
   */
  isInSameBranch(path1, path2) {
    if (!path1 || !path2) return false;
    
    const minLength = Math.min(path1.length, path2.length);
    for (let i = 0; i < minLength; i++) {
      if (path1[i] !== path2[i]) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * 检查变量是否被任务使用
   * @param {Object} variableTask - 变量任务
   * @param {Object} usingTask - 使用任务
   * @returns {boolean}
   */
  isUsedByTask(variableTask, usingTask) {
    // 简化的实现：检查路径包含关系
    const varPath = JSON.stringify(variableTask.dependency.path);
    const taskPath = JSON.stringify(usingTask.dependency.path);
    
    return taskPath.includes(varPath) || this.isInSameBranch(
      variableTask.dependency.path, 
      usingTask.dependency.path
    );
  }

  /**
   * 第六步：计算执行层级
   * @param {Map} dependencyGraph - 依赖图
   * @returns {Array} 执行层级数组
   */
  calculateExecutionLayers(dependencyGraph) {
    console.log(`\n🏗️ 开始计算执行层级...`);
    
    const layers = [];
    const inDegree = new Map();
    const processedTasks = new Set();
    
    // 1. 计算入度
    for (const [taskId, taskNode] of dependencyGraph) {
      inDegree.set(taskId, taskNode.dependsOn.size);
      console.log(`  📊 任务 ${taskId} 入度: ${taskNode.dependsOn.size}`);
    }
    
    let currentLayer = 0;
    
    // 2. 层级计算主循环
    while (processedTasks.size < dependencyGraph.size) {
      console.log(`\n  🏗️ 计算第 ${currentLayer} 层...`);
      
      // 找出当前层级可执行的任务（入度为0）
      const currentLayerTasks = [];
      
      for (const [taskId, degree] of inDegree) {
        if (degree === 0 && !processedTasks.has(taskId)) {
          currentLayerTasks.push(taskId);
        }
      }
      
      if (currentLayerTasks.length === 0) {
        console.error(`💥 检测到循环依赖！`);
        this.logRemainingTasks(dependencyGraph, processedTasks, inDegree);
        throw new Error('Circular dependency detected');
      }
      
      console.log(`    ⚡ 第 ${currentLayer} 层任务: ${currentLayerTasks.join(', ')}`);
      
      // 构建层级任务对象
      const layerTaskObjects = currentLayerTasks.map(taskId => {
        const taskNode = dependencyGraph.get(taskId);
        const task = taskNode.task;
        
        // 更新任务的层级信息
        task.layer = currentLayer;
        
        return {
          id: taskId,
          type: task.type,
          task: task,
          estimatedDuration: task.estimatedDuration,
          dependencies: Array.from(taskNode.dependsOn),
          layer: currentLayer
        };
      });
      
      layers.push(layerTaskObjects);
      
      // 3. 更新依赖关系
      currentLayerTasks.forEach(taskId => {
        processedTasks.add(taskId);
        
        // 减少依赖该任务的其他任务的入度
        const taskNode = dependencyGraph.get(taskId);
        taskNode.dependents.forEach(dependentTaskId => {
          const currentInDegree = inDegree.get(dependentTaskId);
          inDegree.set(dependentTaskId, currentInDegree - 1);
          
          console.log(`      📉 ${dependentTaskId} 入度: ${currentInDegree} → ${currentInDegree - 1}`);
        });
      });
      
      currentLayer++;
      
      if (currentLayer > 50) {
        throw new Error('层级计算超过最大深度限制');
      }
    }
    
    console.log(`✅ 执行层级计算完成: ${layers.length} 层`);
    return layers;
  }

  /**
   * 生成分析报告
   * @param {Array} executionLayers - 执行层级
   * @returns {Object} 分析报告
   */
  generateAnalysisReport(executionLayers) {
    const totalTasks = executionLayers.reduce((sum, layer) => sum + layer.length, 0);
    const maxParallelism = Math.max(...executionLayers.map(layer => layer.length));
    const totalEstimatedTime = executionLayers.reduce((sum, layer) => {
      const layerTime = Math.max(...layer.map(task => task.estimatedDuration));
      return sum + layerTime;
    }, 0);
    
    const taskTypeDistribution = {};
    executionLayers.forEach(layer => {
      layer.forEach(task => {
        taskTypeDistribution[task.type] = (taskTypeDistribution[task.type] || 0) + 1;
      });
    });
    
    return {
      totalLayers: executionLayers.length,
      totalTasks: totalTasks,
      maxParallelism: maxParallelism,
      totalEstimatedTime: totalEstimatedTime,
      averageTasksPerLayer: Math.round(totalTasks / executionLayers.length * 100) / 100,
      taskTypeDistribution: taskTypeDistribution,
      parallelizationEfficiency: Math.round((totalTasks / (executionLayers.length * maxParallelism)) * 100)
    };
  }

  // ========== 辅助方法 ==========

  extractIdentifier(formula, startPos) {
    let pos = startPos;
    while (pos < formula.length && /[a-zA-Z0-9_]/.test(formula[pos])) {
      pos++;
    }
    
    return {
      value: formula.substring(startPos, pos),
      endPosition: pos
    };
  }

  extractStringLiteral(formula, startPos) {
    const quote = formula[startPos];
    let pos = startPos + 1;
    let value = '';
    
    while (pos < formula.length && formula[pos] !== quote) {
      if (formula[pos] === '\\') {
        pos++; // 跳过转义字符
      }
      value += formula[pos];
      pos++;
    }
    
    return {
      value: value,
      endPosition: pos + 1
    };
  }

  extractNumber(formula, startPos) {
    let pos = startPos;
    while (pos < formula.length && /[\d.]/.test(formula[pos])) {
      pos++;
    }
    
    return {
      value: parseFloat(formula.substring(startPos, pos)),
      endPosition: pos
    };
  }

  peekAhead(formula, pos, expectedChar) {
    while (pos < formula.length && /\s/.test(formula[pos])) {
      pos++;
    }
    return pos < formula.length && formula[pos] === expectedChar;
  }

  determineExecutionMode(dependency) {
    if (dependency.isAsync || dependency.requiresNetwork) {
      return 'ASYNC_WORKER';
    } else if (dependency.type === 'PACK_FORMULA') {
      return 'ASYNC_MAIN_THREAD';
    } else {
      return 'SYNC';
    }
  }

  calculateTaskPriority(dependency) {
    let priority = 100;
    
    if (dependency.requiresNetwork) priority += 50;
    if (dependency.isAsync) priority += 30;
    if (dependency.type === 'CONNECTION_RESOLUTION') priority += 100; // 连接优先
    
    return priority;
  }

  getDependencyKey(dependency) {
    return `${dependency.type}_${dependency.id}`;
  }

  logDependencyGraph(dependencyGraph) {
    console.log(`\n📊 依赖图概览:`);
    
    for (const [taskId, taskNode] of dependencyGraph) {
      const dependsOn = Array.from(taskNode.dependsOn);
      const dependents = Array.from(taskNode.dependents);
      
      console.log(`  📌 ${taskId}:`);
      console.log(`    依赖: [${dependsOn.join(', ') || 'none'}]`);
      console.log(`    被依赖: [${dependents.join(', ') || 'none'}]`);
    }
  }

  logRemainingTasks(dependencyGraph, processedTasks, inDegree) {
    console.log(`💥 循环依赖检测结果:`);
    
    for (const [taskId, degree] of inDegree) {
      if (!processedTasks.has(taskId)) {
        const taskNode = dependencyGraph.get(taskId);
        console.log(`  🔄 ${taskId} (入度: ${degree})`);
        console.log(`    依赖: [${Array.from(taskNode.dependsOn).join(', ')}]`);
      }
    }
  }
}

/**
 * AST解析器
 */
class FormulaASTParser {
  constructor(tokens) {
    this.tokens = tokens;
    this.position = 0;
  }

  parse() {
    return this.parseExpression();
  }

  parseExpression() {
    // 简化的表达式解析
    const expressions = [];
    
    while (this.position < this.tokens.length) {
      const token = this.currentToken();
      
      if (token.type === 'PACK_REFERENCE') {
        expressions.push(this.parsePackReference());
      } else if (token.type === 'FUNCTION_CALL') {
        expressions.push(this.parseFunctionCall());
      } else {
        this.advance();
      }
    }
    
    return {
      type: 'FORMULA_EXPRESSION',
      expressions: expressions
    };
  }

  parsePackReference() {
    const token = this.currentToken();
    this.advance();
    
    return {
      type: 'PACK_REFERENCE',
      details: token.details,
      rawValue: token.rawValue
    };
  }

  parseFunctionCall() {
    const functionName = this.currentToken().value;
    this.advance();
    
    const args = [];
    
    // 跳过开括号
    if (this.currentToken()?.value === '(') {
      this.advance();
      
      // 解析参数
      while (this.position < this.tokens.length && this.currentToken()?.value !== ')') {
        if (this.currentToken().type === 'PACK_REFERENCE') {
          args.push(this.parsePackReference());
        } else {
          args.push({
            type: 'LITERAL',
            value: this.currentToken().value
          });
          this.advance();
        }
        
        // 跳过逗号
        if (this.currentToken()?.value === ',') {
          this.advance();
        }
      }
      
      // 跳过闭括号
      if (this.currentToken()?.value === ')') {
        this.advance();
      }
    }
    
    return {
      type: 'FUNCTION_CALL',
      name: functionName,
      arguments: args
    };
  }

  currentToken() {
    return this.tokens[this.position];
  }

  advance() {
    this.position++;
  }
}

/**
 * 实际案例演示
 */
class FormulaAnalysisDemo {
  static runComplexFormulaAnalysis() {
    console.log(`\n🎯 复杂公式分析演示`);
    console.log(`===========================================\n`);
    
    const analyzer = new FormulaToExecutionPlanAnalyzer();
    
    // 复杂的GitHub公式
    const complexFormula = `$$[pack:1013:::false:false:GitHub]::Repo($$[pack:1013:::false:false:GitHub]::Repos($$[packConnectionReference:8e11cd1b-c2e1-4306-9dac-0bd95ecd5084:1013:85.0.7:false:false:hereisfun]).First().$$[variable::::true:false:Url], account: $$[packConnectionReference:8e11cd1b-c2e1-4306-9dac-0bd95ecd5084:1013:85.0.7:false:false:hereisfun]).$$[variable::::true:false:FullName] + '测试')`;
    
    const result = analyzer.analyzeFormula(complexFormula);
    
    console.log(`\n📋 最终执行计划:`);
    console.log(`===============`);
    
    result.executionLayers.forEach((layer, index) => {
      console.log(`\n第 ${index} 层 (${layer.length} 个任务):`);
      layer.forEach(task => {
        console.log(`  - ${task.id}`);
        console.log(`    类型: ${task.type}`);
        console.log(`    预估时间: ${task.estimatedDuration}ms`);
        console.log(`    依赖: [${task.dependencies.join(', ') || 'none'}]`);
      });
    });
    
    console.log(`\n📊 分析报告:`);
    console.log(`===========`);
    const report = result.analysis;
    console.log(`总层数: ${report.totalLayers}`);
    console.log(`总任务数: ${report.totalTasks}`);
    console.log(`最大并行度: ${report.maxParallelism}`);
    console.log(`预估总时间: ${report.totalEstimatedTime}ms`);
    console.log(`平均每层任务数: ${report.averageTasksPerLayer}`);
    console.log(`并行化效率: ${report.parallelizationEfficiency}%`);
    console.log(`任务类型分布:`, report.taskTypeDistribution);
    
    return result;
  }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FormulaToExecutionPlanAnalyzer,
    FormulaASTParser,
    FormulaAnalysisDemo
  };
} else if (typeof window !== 'undefined') {
  window.FormulaToExecutionPlanAnalyzer = FormulaToExecutionPlanAnalyzer;
  window.FormulaAnalysisDemo = FormulaAnalysisDemo;
}

// 自动运行演示（如果在浏览器环境中）
if (typeof window !== 'undefined') {
  console.log('🚀 Formula Analysis Demo loaded. Run: FormulaAnalysisDemo.runComplexFormulaAnalysis()');
}