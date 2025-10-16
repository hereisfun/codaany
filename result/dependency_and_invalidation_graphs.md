# Coda 依赖图和失效图详解

## 1. 依赖图 (DependencyGraph) 

### 1.1 依赖图的作用
依赖图是一个**静态的数据结构**，用于记录整个文档中所有对象之间的依赖关系。它维护了两个方向的映射：
- **前向依赖 (forwardReferences)**: A依赖B，记录A→B
- **后向依赖 (backReferences)**: A依赖B，记录B←A

### 1.2 依赖图的数据结构

**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```json
{
  "dependencyGraph": {
    "forwardReferences": {
      "grid-123:column-A": {
        "DATA": {
          "grid-456:column-B": {
            "timestamp": 1640995200000,
            "context": {
              "callback": "function reference",
              "eventType": "CellValueChanged"
            }
          }
        },
        "LIFECYCLE": {
          "grid-789:column-C": {
            "timestamp": 1640995200000,
            "context": {
              "callback": "function reference",
              "eventType": "ObjectCreated"
            }
          }
        }
      }
    },
    "backReferences": {
      "grid-456:column-B": {
        "DATA": {
          "grid-123:column-A": {
            "timestamp": 1640995200000,
            "info": {
              "displayImpact": "Always",
              "fromReferenceType": "Column"
            }
          }
        }
      }
    },
    "deletedReferences": {
      "grid-old:column-deleted": {
        "timestamp": 1640995100000
      }
    },
    "generation": "Symbol(DependencyGraph Generation)"
  }
}
```

### 1.3 依赖图的关键方法

```javascript
// 获取后向依赖（谁依赖了这个对象）
getBackDependencies(reference, options = {}) {
  // 返回依赖该引用的所有对象列表
  return [
    {
      "objectId": "grid-123",
      "fieldId": "column-A", 
      "identifier": "row-456",
      "dependencyType": "DATA"
    }
  ];
}

// 添加依赖关系
addDataDependency(fromRef, toRef, context) {
  // 在依赖图中建立 fromRef → toRef 的依赖关系
}
```

## 2. 失效图 (InvalidationGraph)

### 2.1 失效图的作用
失效图是一个**动态的计算图**，当数据发生变化时临时创建，用于：
- 确定哪些公式需要重新计算
- 优化计算顺序
- 跟踪计算进度和性能

### 2.2 失效图的数据结构

**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```json
{
  "invalidationGraph": {
    "graphSize": 15,
    "nodeIds": [
      "grid-123:column-A:row-1",
      "grid-123:column-B:row-1", 
      "grid-456:formula-sum",
      "canvas-789:block-chart"
    ],
    "rootNodes": [
      {
        "id": "grid-123:column-A:row-1",
        "type": "CellReference",
        "objectId": "grid-123",
        "fieldId": "column-A",
        "identifier": "row-1",
        "dependencies": [
          {
            "targetId": "grid-123:column-B:row-1",
            "dependencyType": "DATA",
            "context": {
              "eventType": "CellValueChanged",
              "displayImpact": "Always"
            }
          }
        ],
        "executionTime": 0,
        "state": "pending"
      }
    ],
    "nodeMap": {
      "grid-123:column-A:row-1": {
        "id": "grid-123:column-A:row-1",
        "parentNodes": [],
        "childNodes": ["grid-123:column-B:row-1"],
        "executionTime": 0,
        "state": "pending",
        "priority": "normal"
      },
      "grid-123:column-B:row-1": {
        "id": "grid-123:column-B:row-1", 
        "parentNodes": ["grid-123:column-A:row-1"],
        "childNodes": ["grid-456:formula-sum"],
        "executionTime": 12,
        "state": "completed",
        "priority": "normal"
      }
    },
    "deferredNodes": [
      {
        "id": "canvas-789:block-chart",
        "reason": "LargeDataset",
        "context": {
          "rowCount": 10000,
          "threshold": 5000
        }
      }
    ],
    "asyncCallbacks": [
      {
        "ref": "grid-456:formula-sum",
        "callback": "function reference",
        "opts": {
          "prioritizeCalc": true,
          "timeout": 30000
        }
      }
    ],
    "hasNodesDueToRecursion": false,
    "totalExecutionTime": 145,
    "invalidationDuration": 89,
    "generationDuration": 56
  }
}
```

### 2.3 失效图的生命周期

```json
{
  "invalidationGraphLifecycle": {
    "1_creation": {
      "trigger": "数据变更事件",
      "event": "InvalidationGraphStarting",
      "data": {
        "graphSize": 15,
        "nodeIds": ["grid-123:column-A:row-1", "..."]
      }
    },
    "2_processing": {
      "events": [
        {
          "event": "InvalidationGraphProgressed", 
          "data": {
            "completedNodeIds": ["grid-123:column-A:row-1"],
            "totalNodes": 15,
            "completedNodes": 1
          }
        },
        {
          "event": "InvalidationGraphStartProcessingNode",
          "data": {
            "node": {
              "id": "grid-123:column-B:row-1",
              "type": "FormulaCell"
            }
          }
        }
      ]
    },
    "3_completion": {
      "event": "InvalidationGraphFinished",
      "data": {
        "timingGraph": {
          "totalTime": 145,
          "children": [
            {
              "id": "grid-123:column-B:row-1",
              "executionTime": 12,
              "totalChildren": 3
            }
          ],
          "seenNodes": {
            "grid-123:column-A:row-1": true,
            "grid-123:column-B:row-1": true
          }
        },
        "hasDeferredNodes": true
      }
    }
  }
}
```

## 3. 依赖图与失效图的协作流程

### 3.1 数据变更触发流程

```json
{
  "dataChangeFlow": {
    "step1_dataChange": {
      "description": "用户修改单元格A1的值",
      "trigger": {
        "objectId": "grid-123",
        "fieldId": "column-A", 
        "rowId": "row-1",
        "oldValue": 5,
        "newValue": 10
      }
    },
    "step2_dependencyLookup": {
      "description": "查询依赖图，找出谁依赖A1",
      "query": {
        "reference": "grid-123:column-A:row-1",
        "method": "getBackDependencies"
      },
      "result": [
        {
          "objectId": "grid-123",
          "fieldId": "column-B",
          "identifier": "row-1",
          "formula": "A1 + 1"
        },
        {
          "objectId": "grid-456", 
          "fieldId": "formula-sum",
          "identifier": "",
          "formula": "SUM(Table1.ColumnA)"
        }
      ]
    },
    "step3_invalidationGraphCreation": {
      "description": "创建失效图，规划重算顺序",
      "invalidationGraph": {
        "rootNodes": ["grid-123:column-A:row-1"],
        "affectedNodes": [
          "grid-123:column-B:row-1",
          "grid-456:formula-sum"
        ],
        "executionOrder": [
          "grid-123:column-B:row-1",
          "grid-456:formula-sum"
        ]
      }
    },
    "step4_execution": {
      "description": "按顺序执行公式重算",
      "execution": [
        {
          "nodeId": "grid-123:column-B:row-1",
          "formula": "A1 + 1",
          "newValue": 11,
          "executionTime": 2
        },
        {
          "nodeId": "grid-456:formula-sum", 
          "formula": "SUM(Table1.ColumnA)",
          "newValue": 105,
          "executionTime": 8
        }
      ]
    }
  }
}
```

### 3.2 性能监控数据

```json
{
  "performanceMetrics": {
    "timingGraph": {
      "totalTime": 145,
      "invalidationDuration": 89,
      "generationDuration": 56,
      "optimizationDuration": 12,
      "priorityCalcDuration": 23,
      "children": [
        {
          "id": "grid-123:column-B:row-1",
          "executionTime": 12,
          "totalChildren": 0,
          "childNodeIds": []
        },
        {
          "id": "grid-456:formula-sum",
          "executionTime": 133,
          "totalChildren": 2,
          "childNodeIds": [
            "grid-456:aggregation-node-1",
            "grid-456:aggregation-node-2"
          ]
        }
      ]
    },
    "nodeStateSummary": {
      "totalNodeCount": 15,
      "invalidatedNodeCount": 12,
      "prunedNodeCount": 2,
      "deferredNodeCount": 1,
      "inboundDeferredNodeCount": 0,
      "outboundDeferredNodeCount": 1
    }
  }
}
```

## 4. 调试和监控

### 4.1 浏览器控制台访问

```javascript
// 获取依赖图数据
const depGraphData = await window.coda.documentModel.session.resolver.getDependencyGraphData();
console.log('Dependency Graph:', JSON.stringify(depGraphData, null, 2));

// 监控失效图事件
const resolver = window.coda.documentModel.session.resolver;

resolver.on('InvalidationGraphStarting', (data) => {
  console.log('🔄 失效图开始:', {
    graphSize: data.graphSize,
    nodeIds: data.nodeIds
  });
});

resolver.on('InvalidationGraphFinished', (data) => {
  console.log('✅ 失效图完成:', {
    totalTime: data.timingGraph.totalTime,
    hasDeferredNodes: data.hasDeferredNodes,
    seenNodes: Object.keys(data.timingGraph.seenNodes).length
  });
});

// 获取当前失效图状态
function getCurrentInvalidationState() {
  const resolver = window.coda.documentModel.session.resolver;
  return {
    hasInflightGraph: !!resolver._inflightGraph,
    queueLength: resolver._queueForInvalidation?.length || 0,
    isPaused: resolver.isPaused,
    isCalculating: resolver.isCalculating
  };
}
```

### 4.2 依赖关系查询

```javascript
// 查询特定对象的依赖关系
function analyzeDependencies(objectId, fieldId) {
  const resolver = window.coda.documentModel.session.resolver;
  const reference = {objectId, fieldId};
  
  const backDeps = resolver.dependencyGraph.getBackDependencies(reference);
  const forwardDeps = resolver.dependencyGraph.getForwardDependencies?.(reference) || [];
  
  return {
    reference: `${objectId}:${fieldId}`,
    dependents: backDeps.map(dep => ({
      id: `${dep.objectId}:${dep.fieldId}`,
      type: dep.dependencyType,
      hasIdentifier: !!dep.identifier
    })),
    dependencies: forwardDeps.map(dep => ({
      id: `${dep.objectId}:${dep.fieldId}`,
      type: dep.dependencyType
    })),
    totalDependents: backDeps.length,
    totalDependencies: forwardDeps.length
  };
}

// 使用示例
const analysis = analyzeDependencies('grid-pGMwNYE-Z0', 'c-f_bxR6fSiZ');
console.table(analysis.dependents);
```

## 5. 关键区别总结

| 特性 | 依赖图 (DependencyGraph) | 失效图 (InvalidationGraph) |
|------|-------------------------|---------------------------|
| **性质** | 静态数据结构 | 动态计算图 |
| **生命周期** | 持久存在 | 临时创建，计算完成后销毁 |
| **用途** | 记录依赖关系 | 规划和执行重算 |
| **数据内容** | 前向/后向依赖映射 | 节点状态、执行顺序、性能数据 |
| **更新时机** | 公式绑定/解绑时 | 数据变更时 |
| **存储位置** | resolver.dependencyGraph | resolver._inflightGraph |

依赖图是"地图"，失效图是"导航路线"。依赖图告诉我们整个文档的依赖关系网络，而失效图则是在特定数据变更时，基于依赖图生成的具体执行计划。