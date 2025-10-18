# Coda 依赖失效和重算机制分析

## 1. 依赖失效流程概述

当一个数据发生变化时，Coda 会通过以下步骤来影响依赖该数据的公式：

1. **数据变更检测** → 2. **依赖查找** → 3. **失效队列** → 4. **依赖图构建** → 5. **公式重算** → 6. **结果更新**

## 2. 关键组件和文件位置

### 2.1 依赖图管理器 (DependencyGraph)
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
class DependencyGraph {
    constructor(resolver) {
        this._resolver = resolver;
        this.forwardReferences = new y.O;  // 前向依赖
        this.backReferences = new Map;     // 后向依赖
    }
    
    // 获取后向依赖（谁依赖了这个数据）
    getBackDependencies(e, {excludeStrippedIdentifierDependencies: t, excludeDeletedDependencies: n} = {}) {
        const o = m.n.fromReference(e, {stripIdentifier: !0});
        const r = m.n.fromReference(e, {stripIdentifier: !1});
        // 返回依赖该引用的所有对象
    }
}
```

### 2.2 失效处理器 (Resolver)
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
class Resolver {
    // 将失效请求加入队列
    _enqueueInvalidation(e) {
        this._shouldPrioritizeInInflightGraph(e) ? 
            this._addAsyncCallbackToInflightGraph(e) : 
            (this._queueForInvalidation.push(e), this._tryInvalidateGraph());
    }
    
    // 尝试处理失效图
    _tryInvalidateGraph(e) {
        if (this.shouldExplicitlyPreventGraphInvalidation) return;
        if (this._queueForInvalidationProcessing || this.isPaused || this._inflightGraph) return;
        // 开始处理失效队列
    }
}
```

## 3. 详细执行流程

### 3.1 数据变更触发点
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 当表格数据发生变化时
_onColumnDataChanged(e, {colId: t}) {
    const n = new i.WA("", this.target.id, t);
    e.addDependencyForInvalidation(m.n.fromReference(n));
}

// 当行数据更新时
_onRowUpdated(e, {userInitiated: t}) {
    const n = new i.Sw(this.target.id, rowId);
    e.addDependencyForInvalidation(m.n.fromReference(n), {rowId: rowId});
}
```

### 3.2 依赖失效事件
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 列依赖失效事件
_onColumnDependentsInvalidated(e, {colId: t, rowIds: n, recursive: o = !1}) {
    if (n) {
        // 特定行的失效
        for (const o of n) {
            const n = new i.Qg("", this.target.id, t, o);
            e.addDependencyForInvalidation(m.n.fromReference(n), {rowId: o});
        }
        o && e.setHasNodesDueToRecursion();
    } else {
        // 整列失效
        const n = new i.WA("", this.target.id, t);
        e.addDependencyForInvalidation(m.n.fromReference(n));
    }
}
```

### 3.3 依赖图构建
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 构建依赖关系
_buildDependency({parentNode: e, affectedRef: t, dependencyBackRefData: n, sourceRef: o, invalidationRowId: r}) {
    const i = "row" === n.scope;
    const s = o.objectId === t.objectId || n.context.eventType;
    // 构建具体的依赖节点
}

// 遍历依赖关系
forEachDependency(e, t, n, {pruneDeleted: o = !0} = {}) {
    const r = this.backReferences.get(t).get(e);
    if (r) {
        for (const t of Array.from(r.keys())) {
            if (o && this._deletedReferences.has(t)) continue;
            const i = r.get(t);
            // 对每个依赖执行回调
            for (const o of i) n(t, o, e);
        }
    }
}
```

## 4. 关键调试打点位置

### 4.1 数据变更检测点
```javascript
// 在浏览器控制台设置断点
// 位置：browser.6611b23ea80de0482abc.entry.js

// 1. 列数据变更检测
debugger; // 在 _onColumnDataChanged 函数开始处
console.log('Column data changed:', {colId: t, target: this.target.id});

// 2. 行数据更新检测  
debugger; // 在 _onRowUpdated 函数开始处
console.log('Row updated:', {rowId: rowId, target: this.target.id});
```

### 4.2 依赖失效队列监控
```javascript
// 位置：browser.6611b23ea80de0482abc.entry.js

// 在 _enqueueInvalidation 函数设置断点
debugger; // 在 _enqueueInvalidation 开始处
console.log('Enqueuing invalidation:', {
    args: e.args,
    queueLength: this._queueForInvalidation.length
});

// 在 _tryInvalidateGraph 函数设置断点
debugger; // 在 _tryInvalidateGraph 开始处
console.log('Trying to invalidate graph:', {
    queueLength: this._queueForInvalidation.length,
    isPaused: this.isPaused,
    hasInflightGraph: !!this._inflightGraph
});
```

### 4.3 依赖查找监控
```javascript
// 位置：browser.6611b23ea80de0482abc.entry.js

// 在 getBackDependencies 函数设置断点
debugger; // 在 getBackDependencies 开始处
console.log('Getting back dependencies for:', {
    reference: e,
    dependencies: result
});

// 在 addDependencyForInvalidation 函数设置断点
debugger; // 在 addDependencyForInvalidation 开始处
console.log('Adding dependency for invalidation:', {
    reference: e,
    rowId: options.rowId,
    requiredInvalidation: options.requiredInvalidation
});
```

### 4.4 公式重算监控
```javascript
// 位置：browser.6611b23ea80de0482abc.entry.js

// 在公式执行时设置断点
debugger; // 在 executeExpression 开始处
console.log('Executing formula:', {
    formula: e,
    objectId: t,
    context: options
});

// 监控计算状态变化
debugger; // 在 CalculationStarted 事件处
console.log('Calculation started:', {
    graphSize: data.graphSize,
    nodeIds: data.nodeIds
});
```

## 5. 浏览器控制台调试脚本

### 5.1 监控依赖关系
```javascript
// 获取某个对象的所有依赖
function getDependencies(objectId, fieldId) {
    const resolver = window.coda.documentModel.session.resolver;
    const reference = new resolver.constructor.Reference(objectId, fieldId);
    const backDeps = resolver.dependencyGraph.getBackDependencies(reference);
    console.table(backDeps.map(dep => ({
        objectId: dep.objectId,
        fieldId: dep.fieldId,
        identifier: dep.identifier
    })));
    return backDeps;
}

// 使用示例
getDependencies('grid-pGMwNYE-Z0', 'c-f_bxR6fSiZ');
```

### 5.2 监控失效队列
```javascript
// 监控当前失效队列状态
function getInvalidationQueueStatus() {
    const resolver = window.coda.documentModel.session.resolver;
    return {
        queueLength: resolver._queueForInvalidation?.length || 0,
        isPaused: resolver.isPaused,
        isCalculating: resolver.isCalculating,
        hasInflightGraph: !!resolver._inflightGraph
    };
}

// 定期检查队列状态
setInterval(() => {
    const status = getInvalidationQueueStatus();
    if (status.queueLength > 0) {
        console.log('Invalidation queue status:', status);
    }
}, 1000);
```

### 5.3 监控公式计算事件
```javascript
// 监听公式计算相关事件
const resolver = window.coda.documentModel.session.resolver;

resolver.on('calculationStarted', (data) => {
    console.log('🔄 Calculation started:', data);
});

resolver.on('calculationFinished', (data) => {
    console.log('✅ Calculation finished:', data);
});

resolver.on('columnDependentsInvalidated', (data) => {
    console.log('❌ Column dependents invalidated:', data);
});
```

## 6. 完整的依赖失效流程示例

假设有一个公式 `B1 = A1 + 1`，当 A1 的值从 5 改为 10 时：

1. **数据变更**: A1 单元格值更新
2. **触发事件**: `_onColumnDataChanged` 被调用
3. **查找依赖**: `getBackDependencies(A1_reference)` 找到 B1 依赖 A1
4. **加入队列**: `addDependencyForInvalidation(B1_reference)` 
5. **处理队列**: `_tryInvalidateGraph()` 开始处理
6. **构建图**: `_buildDependency()` 构建失效图
7. **执行公式**: `executeExpression("A1 + 1")` 重新计算 B1
8. **更新结果**: B1 的值更新为 11
9. **通知UI**: 发出事件通知UI重新渲染

## 7. 性能优化机制

### 7.1 批量处理
```javascript
// 批量处理失效，避免频繁重算
this._queueForInvalidation.push(e);
// 只有在队列空闲时才开始处理
this._tryInvalidateGraph();
```

### 7.2 递归检测
```javascript
// 检测递归依赖，防止无限循环
o && e.setHasNodesDueToRecursion();
```

### 7.3 优先级处理
```javascript
// 优先处理正在进行的计算图
this._shouldPrioritizeInInflightGraph(e) ? 
    this._addAsyncCallbackToInflightGraph(e) : 
    this._queueForInvalidation.push(e);
```

通过在这些关键位置设置断点和监控，你可以完整地追踪数据变化如何触发依赖公式的重新计算过程。