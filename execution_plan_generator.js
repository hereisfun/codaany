/**
 * Coda 执行计划生成器 - 深度解析
 * 负责将复杂的公式调用转换为可并行执行的层级结构
 */

/**
 * 执行计划生成器
 */
class ExecutionPlanGenerator {
  constructor(dependencyGraph, packManager) {
    this.dependencyGraph = dependencyGraph;
    this.packManager = packManager;
    
    // 调试模式
    this.debugMode = false;
  }

  /**
   * 核心方法：创建执行计划
   * @param {Object} rootTask - 根任务
   * @param {Array} allDependencies - 所有依赖项
   * @returns {Object} 执行计划
   */
  createExecutionPlan(rootTask, allDependencies) {
    console.log(`📋 Creating execution plan for: ${rootTask.id}`);
    
    // 1. 构建依赖图
    const dependencyMap = this.buildDependencyMap(allDependencies);
    
    // 2. 创建执行任务节点
    const taskNodes = this.createTaskNodes(rootTask, allDependencies, dependencyMap);
    
    // 3. 计算执行层级（核心算法）
    const executionLayers = this.calculateExecutionLayers(taskNodes, dependencyMap);
    
    // 4. 优化并行执行
    const optimizedLayers = this.optimizeParallelExecution(executionLayers);
    
    // 5. 估算执行时间
    const estimatedDuration = this.estimateExecutionDuration(optimizedLayers);
    
    // 6. 构建最终的执行计划
    const executionPlan = {
      rootTask: rootTask,
      dependencies: allDependencies,
      taskNodes: taskNodes,
      executionLayers: optimizedLayers,
      totalTasks: taskNodes.length,
      maxParallelism: Math.max(...optimizedLayers.map(layer => layer.length)),
      estimatedDuration: estimatedDuration,
      createdAt: Date.now()
    };
    
    if (this.debugMode) {
      this.debugExecutionPlan(executionPlan);
    }
    
    console.log(`✅ Execution plan created: ${executionLayers.length} layers, ${taskNodes.length} tasks`);
    
    return executionPlan;
  }

  /**
   * 构建依赖映射
   * @param {Array} dependencies - 依赖列表
   * @returns {Map} 依赖映射
   */
  buildDependencyMap(dependencies) {
    console.log(`🔗 Building dependency map for ${dependencies.length} dependencies`);
    
    const dependencyMap = new Map();
    
    dependencies.forEach(dep => {
      const taskId = this.generateTaskId(dep);
      
      if (!dependencyMap.has(taskId)) {
        dependencyMap.set(taskId, {
          id: taskId,
          dependency: dep,
          dependsOn: new Set(),  // 这个任务依赖的其他任务
          dependents: new Set(), // 依赖这个任务的其他任务
          layer: -1,             // 执行层级（-1 表示未计算）
          executionTime: this.estimateTaskExecutionTime(dep)
        });
      }
    });
    
    // 建立依赖关系
    this.establishDependencyRelationships(dependencyMap);
    
    return dependencyMap;
  }

  /**
   * 建立依赖关系
   * @param {Map} dependencyMap - 依赖映射
   */
  establishDependencyRelationships(dependencyMap) {
    for (const [taskId, taskInfo] of dependencyMap) {
      const dependency = taskInfo.dependency;
      
      // 分析这个任务的输入依赖
      const inputDependencies = this.analyzeInputDependencies(dependency);
      
      inputDependencies.forEach(inputDep => {
        const inputTaskId = this.generateTaskId(inputDep);
        
        if (dependencyMap.has(inputTaskId)) {
          // 建立依赖关系
          taskInfo.dependsOn.add(inputTaskId);
          dependencyMap.get(inputTaskId).dependents.add(taskId);
        }
      });
    }
    
    console.log(`🔗 Established ${this.countTotalDependencies(dependencyMap)} dependency relationships`);
  }

  /**
   * 核心算法：计算执行层级
   * 使用改进的拓扑排序算法，支持并行执行
   * @param {Array} taskNodes - 任务节点
   * @param {Map} dependencyMap - 依赖映射
   * @returns {Array} 执行层级数组
   */
  calculateExecutionLayers(taskNodes, dependencyMap) {
    console.log(`🧮 Calculating execution layers for ${taskNodes.length} tasks`);
    
    // 1. 初始化数据结构
    const layers = [];
    const inDegree = new Map(); // 入度计算
    const processedTasks = new Set(); // 已处理的任务
    
    // 2. 计算每个任务的入度
    for (const [taskId, taskInfo] of dependencyMap) {
      inDegree.set(taskId, taskInfo.dependsOn.size);
    }
    
    console.log(`📊 Initial in-degrees calculated:`, 
      Array.from(inDegree.entries()).map(([id, degree]) => `${id}:${degree}`).join(', '));
    
    // 3. 层级计算主循环
    let currentLayer = 0;
    
    while (processedTasks.size < dependencyMap.size) {
      console.log(`\n🏗️ Processing layer ${currentLayer}`);
      
      // 找出当前层级可以执行的任务（入度为0的任务）
      const currentLayerTasks = [];
      
      for (const [taskId, degree] of inDegree) {
        if (degree === 0 && !processedTasks.has(taskId)) {
          currentLayerTasks.push(taskId);
        }
      }
      
      if (currentLayerTasks.length === 0) {
        // 检测循环依赖
        const remainingTasks = Array.from(inDegree.entries())
          .filter(([taskId, degree]) => !processedTasks.has(taskId))
          .map(([taskId, degree]) => `${taskId}(${degree})`);
        
        throw new Error(`Circular dependency detected! Remaining tasks: ${remainingTasks.join(', ')}`);
      }
      
      console.log(`  ⚡ Layer ${currentLayer} tasks: ${currentLayerTasks.join(', ')}`);
      
      // 将当前层级的任务添加到执行计划
      const layerTaskObjects = currentLayerTasks.map(taskId => {
        const taskInfo = dependencyMap.get(taskId);
        taskInfo.layer = currentLayer;
        
        return {
          id: taskId,
          type: this.getTaskType(taskInfo.dependency),
          dependency: taskInfo.dependency,
          estimatedDuration: taskInfo.executionTime,
          dependencies: Array.from(taskInfo.dependsOn),
          layer: currentLayer
        };
      });
      
      layers.push(layerTaskObjects);
      
      // 4. 更新依赖关系
      currentLayerTasks.forEach(taskId => {
        processedTasks.add(taskId);
        
        // 更新依赖这个任务的其他任务的入度
        const taskInfo = dependencyMap.get(taskId);
        taskInfo.dependents.forEach(dependentTaskId => {
          const currentInDegree = inDegree.get(dependentTaskId);
          inDegree.set(dependentTaskId, currentInDegree - 1);
          
          console.log(`    📉 Updated ${dependentTaskId} in-degree: ${currentInDegree} -> ${currentInDegree - 1}`);
        });
      });
      
      currentLayer++;
      
      // 防止无限循环
      if (currentLayer > 100) {
        throw new Error('Execution layer calculation exceeded maximum depth (100)');
      }
    }
    
    console.log(`✅ Execution layers calculated: ${layers.length} layers`);
    this.logLayerSummary(layers);
    
    return layers;
  }

  /**
   * 创建任务节点
   * @param {Object} rootTask - 根任务
   * @param {Array} dependencies - 依赖列表
   * @param {Map} dependencyMap - 依赖映射
   * @returns {Array} 任务节点数组
   */
  createTaskNodes(rootTask, dependencies, dependencyMap) {
    const taskNodes = [];
    
    // 添加根任务
    taskNodes.push({
      id: rootTask.id,
      type: 'root',
      task: rootTask,
      isRoot: true
    });
    
    // 添加依赖任务
    dependencies.forEach(dep => {
      const taskId = this.generateTaskId(dep);
      const taskType = this.getTaskType(dep);
      
      taskNodes.push({
        id: taskId,
        type: taskType,
        dependency: dep,
        isRoot: false
      });
    });
    
    return taskNodes;
  }

  /**
   * 分析输入依赖
   * @param {Object} dependency - 依赖对象
   * @returns {Array} 输入依赖列表
   */
  analyzeInputDependencies(dependency) {
    const inputDependencies = [];
    
    switch (dependency.type) {
      case 'PACK_FORMULA':
        // Pack 公式的参数可能依赖其他结果
        if (dependency.args) {
          dependency.args.forEach(arg => {
            if (arg.type === 'DEPENDENCY_REFERENCE') {
              inputDependencies.push(arg.referencedDependency);
            }
          });
        }
        break;
        
      case 'BUILTIN_FUNCTION':
        // 内置函数的参数依赖
        if (dependency.args) {
          dependency.args.forEach(arg => {
            if (arg.type === 'DEPENDENCY_REFERENCE') {
              inputDependencies.push(arg.referencedDependency);
            }
          });
        }
        break;
        
      case 'VARIABLE_RESOLUTION':
        // 变量解析可能依赖连接
        if (dependency.connectionDependency) {
          inputDependencies.push(dependency.connectionDependency);
        }
        break;
        
      case 'CONNECTION_RESOLUTION':
        // 连接解析通常是叶子节点，没有依赖
        break;
        
      default:
        console.warn(`Unknown dependency type: ${dependency.type}`);
    }
    
    return inputDependencies;
  }

  /**
   * 优化并行执行
   * @param {Array} layers - 原始层级
   * @returns {Array} 优化后的层级
   */
  optimizeParallelExecution(layers) {
    console.log(`⚡ Optimizing parallel execution for ${layers.length} layers`);
    
    return layers.map((layer, layerIndex) => {
      console.log(`  🔧 Optimizing layer ${layerIndex}: ${layer.length} tasks`);
      
      // 1. 按执行时间排序（长任务优先，减少整体等待时间）
      const sortedTasks = [...layer].sort((a, b) => {
        return (b.estimatedDuration || 0) - (a.estimatedDuration || 0);
      });
      
      // 2. 按任务类型分组优化
      const taskGroups = this.groupTasksByType(sortedTasks);
      
      // 3. Pack 公式任务优先（通常需要网络请求）
      const optimizedTasks = [
        ...taskGroups.pack_formula || [],
        ...taskGroups.connection_resolution || [],
        ...taskGroups.variable_resolution || [],
        ...taskGroups.builtin_function || [],
        ...taskGroups.other || []
      ];
      
      console.log(`    ✅ Layer ${layerIndex} optimized: ${optimizedTasks.length} tasks`);
      
      return optimizedTasks;
    });
  }

  /**
   * 按类型分组任务
   * @param {Array} tasks - 任务列表
   * @returns {Object} 按类型分组的任务
   */
  groupTasksByType(tasks) {
    const groups = {};
    
    tasks.forEach(task => {
      const type = task.type;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(task);
    });
    
    return groups;
  }

  /**
   * 估算任务执行时间
   * @param {Object} dependency - 依赖对象
   * @returns {number} 估算时间（毫秒）
   */
  estimateTaskExecutionTime(dependency) {
    switch (dependency.type) {
      case 'PACK_FORMULA':
        // Pack 公式执行时间取决于复杂度和网络请求
        const baseTime = 100; // 基础时间 100ms
        const networkTime = dependency.requiresNetwork ? 1000 : 0; // 网络请求 1s
        const complexityTime = (dependency.complexity || 1) * 50; // 复杂度影响
        
        return baseTime + networkTime + complexityTime;
        
      case 'BUILTIN_FUNCTION':
        // 内置函数通常很快
        return 10;
        
      case 'VARIABLE_RESOLUTION':
        // 变量解析快速
        return 5;
        
      case 'CONNECTION_RESOLUTION':
        // 连接解析可能需要验证
        return 50;
        
      default:
        return 100;
    }
  }

  /**
   * 估算总执行时间
   * @param {Array} layers - 执行层级
   * @returns {number} 估算总时间（毫秒）
   */
  estimateExecutionDuration(layers) {
    let totalTime = 0;
    
    layers.forEach((layer, index) => {
      // 每层的执行时间是该层最长任务的时间（并行执行）
      const layerTime = Math.max(...layer.map(task => task.estimatedDuration || 100));
      totalTime += layerTime;
      
      console.log(`⏱️ Layer ${index} estimated time: ${layerTime}ms`);
    });
    
    console.log(`⏱️ Total estimated execution time: ${totalTime}ms`);
    
    return totalTime;
  }

  /**
   * 生成任务 ID
   * @param {Object} dependency - 依赖对象
   * @returns {string} 任务 ID
   */
  generateTaskId(dependency) {
    switch (dependency.type) {
      case 'PACK_FORMULA':
        return `pack_${dependency.packId}_${dependency.formulaName}_${this.hashArgs(dependency.args)}`;
        
      case 'BUILTIN_FUNCTION':
        return `builtin_${dependency.functionName}_${this.hashArgs(dependency.args)}`;
        
      case 'VARIABLE_RESOLUTION':
        return `var_${dependency.variableName}_${dependency.context || 'default'}`;
        
      case 'CONNECTION_RESOLUTION':
        return `conn_${dependency.connectionId}`;
        
      default:
        return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  }

  /**
   * 获取任务类型
   * @param {Object} dependency - 依赖对象
   * @returns {string} 任务类型
   */
  getTaskType(dependency) {
    return dependency.type?.toLowerCase() || 'unknown';
  }

  /**
   * 计算参数哈希
   * @param {Array} args - 参数数组
   * @returns {string} 哈希值
   */
  hashArgs(args) {
    if (!args || args.length === 0) {
      return 'no_args';
    }
    
    // 简单的哈希算法
    const str = JSON.stringify(args);
    let hash = 0;
    
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 转换为 32 位整数
    }
    
    return Math.abs(hash).toString(36);
  }

  /**
   * 计算总依赖数
   * @param {Map} dependencyMap - 依赖映射
   * @returns {number} 总依赖数
   */
  countTotalDependencies(dependencyMap) {
    let total = 0;
    
    for (const [taskId, taskInfo] of dependencyMap) {
      total += taskInfo.dependsOn.size;
    }
    
    return total;
  }

  /**
   * 记录层级摘要
   * @param {Array} layers - 执行层级
   */
  logLayerSummary(layers) {
    console.log('\n📊 Execution Plan Summary:');
    console.log('┌────────┬─────────────┬──────────────┬─────────────┐');
    console.log('│ Layer  │ Task Count  │ Avg Duration │ Task Types  │');
    console.log('├────────┼─────────────┼──────────────┼─────────────┤');
    
    layers.forEach((layer, index) => {
      const taskCount = layer.length;
      const avgDuration = layer.reduce((sum, task) => sum + (task.estimatedDuration || 0), 0) / taskCount;
      const taskTypes = [...new Set(layer.map(task => task.type))].join(', ');
      
      console.log(`│ ${String(index).padStart(6)} │ ${String(taskCount).padStart(11)} │ ${String(Math.round(avgDuration)).padStart(12)} │ ${taskTypes.padEnd(11)} │`);
    });
    
    console.log('└────────┴─────────────┴──────────────┴─────────────┘');
  }

  /**
   * 调试执行计划
   * @param {Object} executionPlan - 执行计划
   */
  debugExecutionPlan(executionPlan) {
    console.log('\n🐛 DEBUG: Execution Plan Details');
    console.log('=====================================');
    
    executionPlan.executionLayers.forEach((layer, layerIndex) => {
      console.log(`\nLayer ${layerIndex}:`);
      
      layer.forEach((task, taskIndex) => {
        console.log(`  Task ${taskIndex}: ${task.id}`);
        console.log(`    Type: ${task.type}`);
        console.log(`    Duration: ${task.estimatedDuration}ms`);
        console.log(`    Dependencies: [${task.dependencies.join(', ')}]`);
        
        if (task.dependency) {
          console.log(`    Details:`, JSON.stringify(task.dependency, null, 2));
        }
      });
    });
    
    console.log('\n=====================================\n');
  }

  /**
   * 启用调试模式
   */
  enableDebugMode() {
    this.debugMode = true;
    console.log('🐛 Debug mode enabled for ExecutionPlanGenerator');
  }

  /**
   * 禁用调试模式
   */
  disableDebugMode() {
    this.debugMode = false;
    console.log('🐛 Debug mode disabled for ExecutionPlanGenerator');
  }
}

/**
 * 复杂公式的执行计划示例
 * 
 * 原始公式:
 * $$[pack:1013:::false:false:GitHub]::Repo(
 *   $$[pack:1013:::false:false:GitHub]::Repos(
 *     $$[packConnectionReference:8e11cd1b-c2e1-4306-9dac-0bd95ecd5084:1013:85.0.7:false:false:hereisfun]
 *   ).First().$$[variable::::true:false:Url], 
 *   account: $$[packConnectionReference:8e11cd1b-c2e1-4306-9dac-0bd95ecd5084:1013:85.0.7:false:false:hereisfun]).$$[variable::::true:false:FullName] + '测试'
 * )
 */
class ComplexFormulaExecutionPlan {
  static createExamplePlan() {
    const generator = new ExecutionPlanGenerator();
    
    // 定义根任务
    const rootTask = {
      id: 'root_github_repo',
      type: 'PACK_FORMULA',
      packId: '1013',
      formulaName: 'Repo',
      args: [
        { type: 'DEPENDENCY_REFERENCE', referencedDependency: 'github_repos_first_url' },
        { type: 'DEPENDENCY_REFERENCE', referencedDependency: 'account_name_with_suffix' }
      ]
    };
    
    // 定义所有依赖
    const allDependencies = [
      // 层级 0：基础依赖（连接解析）
      {
        id: 'connection_resolution',
        type: 'CONNECTION_RESOLUTION',
        connectionId: '8e11cd1b-c2e1-4306-9dac-0bd95ecd5084'
      },
      
      // 层级 1：使用连接的操作
      {
        id: 'github_repos',
        type: 'PACK_FORMULA',
        packId: '1013',
        formulaName: 'Repos',
        args: [
          { type: 'DEPENDENCY_REFERENCE', referencedDependency: 'connection_resolution' }
        ],
        requiresNetwork: true,
        complexity: 3
      },
      {
        id: 'fullname_variable',
        type: 'VARIABLE_RESOLUTION',
        variableName: 'FullName',
        connectionDependency: 'connection_resolution'
      },
      
      // 层级 2：基于前面结果的操作
      {
        id: 'github_repos_first',
        type: 'BUILTIN_FUNCTION',
        functionName: 'First',
        args: [
          { type: 'DEPENDENCY_REFERENCE', referencedDependency: 'github_repos' }
        ]
      },
      {
        id: 'account_name_with_suffix',
        type: 'BUILTIN_FUNCTION',
        functionName: 'Concatenate',
        args: [
          { type: 'DEPENDENCY_REFERENCE', referencedDependency: 'fullname_variable' },
          { type: 'LITERAL', value: '测试' }
        ]
      },
      
      // 层级 3：获取 URL
      {
        id: 'github_repos_first_url',
        type: 'VARIABLE_RESOLUTION',
        variableName: 'Url',
        objectDependency: 'github_repos_first'
      }
    ];
    
    // 生成执行计划
    const executionPlan = generator.createExecutionPlan(rootTask, allDependencies);
    
    console.log('\n🎯 Complex Formula Execution Plan:');
    console.log('===================================');
    
    executionPlan.executionLayers.forEach((layer, index) => {
      console.log(`\nLayer ${index} (${layer.length} tasks):`);
      layer.forEach(task => {
        console.log(`  - ${task.id} (${task.type}, ~${task.estimatedDuration}ms)`);
      });
    });
    
    return executionPlan;
  }
}

/**
 * 执行计划可视化器
 */
class ExecutionPlanVisualizer {
  /**
   * 生成 Mermaid 图表
   * @param {Object} executionPlan - 执行计划
   * @returns {string} Mermaid 图表代码
   */
  static generateMermaidDiagram(executionPlan) {
    let mermaid = 'graph TB\n';
    
    // 为每层添加子图
    executionPlan.executionLayers.forEach((layer, layerIndex) => {
      mermaid += `  subgraph "Layer ${layerIndex}"\n`;
      
      layer.forEach(task => {
        const nodeId = task.id.replace(/[^a-zA-Z0-9]/g, '_');
        const nodeLabel = `${task.id}\\n(${task.estimatedDuration}ms)`;
        
        // 根据任务类型设置样式
        let nodeStyle = '';
        switch (task.type) {
          case 'pack_formula':
            nodeStyle = '[' + nodeLabel + ']';
            break;
          case 'builtin_function':
            nodeStyle = '(' + nodeLabel + ')';
            break;
          case 'variable_resolution':
            nodeStyle = '{' + nodeLabel + '}';
            break;
          case 'connection_resolution':
            nodeStyle = '[[' + nodeLabel + ']]';
            break;
          default:
            nodeStyle = '[' + nodeLabel + ']';
        }
        
        mermaid += `    ${nodeId}${nodeStyle}\n`;
      });
      
      mermaid += '  end\n\n';
    });
    
    // 添加依赖关系箭头
    executionPlan.executionLayers.forEach((layer, layerIndex) => {
      layer.forEach(task => {
        const taskNodeId = task.id.replace(/[^a-zA-Z0-9]/g, '_');
        
        task.dependencies.forEach(depId => {
          const depNodeId = depId.replace(/[^a-zA-Z0-9]/g, '_');
          mermaid += `  ${depNodeId} --> ${taskNodeId}\n`;
        });
      });
    });
    
    // 添加样式
    mermaid += '\n  classDef packFormula fill:#ff9800,stroke:#f57c00\n';
    mermaid += '  classDef builtinFunction fill:#4caf50,stroke:#388e3c\n';
    mermaid += '  classDef variableResolution fill:#2196f3,stroke:#1976d2\n';
    mermaid += '  classDef connectionResolution fill:#9c27b0,stroke:#7b1fa2\n';
    
    return mermaid;
  }
  
  /**
   * 生成时间线图表
   * @param {Object} executionPlan - 执行计划
   * @returns {string} 时间线描述
   */
  static generateTimeline(executionPlan) {
    let timeline = 'Execution Timeline:\n';
    timeline += '==================\n\n';
    
    let currentTime = 0;
    
    executionPlan.executionLayers.forEach((layer, layerIndex) => {
      const layerDuration = Math.max(...layer.map(task => task.estimatedDuration || 100));
      
      timeline += `Time ${currentTime}ms - ${currentTime + layerDuration}ms: Layer ${layerIndex}\n`;
      
      layer.forEach(task => {
        timeline += `  ├─ ${task.id} (${task.estimatedDuration}ms)\n`;
      });
      
      timeline += '\n';
      currentTime += layerDuration;
    });
    
    timeline += `Total Duration: ${currentTime}ms\n`;
    
    return timeline;
  }
}

// 导出类
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ExecutionPlanGenerator,
    ComplexFormulaExecutionPlan,
    ExecutionPlanVisualizer
  };
} else if (typeof window !== 'undefined') {
  window.ExecutionPlanGenerator = ExecutionPlanGenerator;
  window.ComplexFormulaExecutionPlan = ComplexFormulaExecutionPlan;
  window.ExecutionPlanVisualizer = ExecutionPlanVisualizer;
}

// 演示用法
if (typeof module === 'undefined') {
  console.log('🚀 ExecutionPlanGenerator loaded. Try:');
  console.log('const plan = ComplexFormulaExecutionPlan.createExamplePlan();');
}