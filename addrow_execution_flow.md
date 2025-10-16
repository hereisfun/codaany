# AddRow 公式执行流程分析

## 公式示例
```
AddRow($$[grid:grid-pGMwNYE-Z0:::false:false:Table], $$[column:grid-pGMwNYE-Z0:c-f_bxR6fSiZ::false:false:Column 2], "aaa")
```

## 1. 公式解析阶段

### 1.1 公式引用解析
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 解析 $$[grid:...] 和 $$[column:...] 引用
// 这些引用会被解析为具体的对象ID和字段ID
const gridRef = "grid-pGMwNYE-Z0";  // 目标表格
const columnRef = "c-f_bxR6fSiZ";   // 目标列
const value = "aaa";                 // 要插入的值
```

### 1.2 公式执行入口
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// executeExpression 是公式执行的统一入口
async executeExpression(e, t, {
    bindFormulaBeforeExecute: n = !1,
    colId: o,
    currentValue: r,
    isAction: i,
    preventUIThreadFallback: s = !0,
    rowId: a,
    rowIds: l,
    variableMap: u
} = {}) {
    // 如果有公式引擎，则使用 Worker 异步执行
    if (this._formulaEngine) {
        return this._formulaEngine.executeExpression(e, t, {
            colId: o,
            currentValue: r,
            isAction: i,
            rowId: a,
            rowIds: l,
            variableMap: u
        });
    }
    // 否则回退到UI线程执行
}
```

## 2. AddRow 函数执行

### 2.1 AddRow 操作识别
**文件位置：** `/Users/gy/Downloads/coda/postload.6f4c20e443c95cbdfd2e.chunk.js`

```javascript
// AddRow 被识别为 Action 类型操作
switch(t.name) {
    case Re.a2.AddRow:
        const {target: n} = t.parameters;
        return `Add a row to ${(0,he.Nn)(n).getCurrentName(e.session.resolver, {includeDeleted:!0})}`;
    // ...
}
```

### 2.2 操作参数解析
**文件位置：** `/Users/gy/Downloads/coda/postload.6f4c20e443c95cbdfd2e.chunk.js`

```javascript
// 解析 AddRow 的参数
function se(s, n, a) {
    const {argumentTokens: a} = (0, _.b)({formula: e, document: t, objectId: n.objectId});
    const s = a.params.tableRef[0];  // 目标表格引用
    return {
        name: o.a2.AddRow,
        parameters: {
            target: s && s.ref,
            varArgs: $(e, a.varArgs)  // 列值参数
        }
    }
}
```

## 3. 操作创建阶段

### 3.1 未提交操作创建器
**文件位置：** `/Users/gy/Downloads/coda/postload.6f4c20e443c95cbdfd2e.chunk.js`

```javascript
// 通过 uncommittedOperationCreator 创建操作
bulkAddRows(e, t, n) {
    return this._document.uncommittedOperationCreator.withOperationSource(
        this._sourceCategory, 
        (() => e.bulkAddRows(t, {...n}))
    );
}
```

### 3.2 BULK_ADD_ROW 操作生成
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 创建 BULK_ADD_ROW 类型的操作
createBulkAddRowOperation(e, {parentCursor: t}, {viewId: n, undoLocationContext: r}, {isUndo: a} = {}) {
    return this.createOperation(s.S.BULK_ADD_ROW, {
        rows: e,
        undoData: {parentCursor: t, viewId: n, forceSoftDeleteOnUndo: a},
        ...r ? {isUndo: !0} : {},
        locationContext: i
    });
}
```

## 4. 操作分发阶段

### 4.1 操作分发入口
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// dispatchOperation 是操作分发的核心方法
dispatchOperation(e, {isLocal: t = !1, invalidateAfterOp: n = !1} = {}) {
    const o = this.isPaused;
    n && this.pause();
    this._isDispatchingOp = !0;
    
    try {
        return this._doDispatchOperation(e, {isLocal: t});
    } finally {
        this._isDispatchingOp = !1;
        !n || r || o || this.resume();
    }
}
```

### 4.2 操作应用到模型
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 操作被应用到具体的数据模型
applyOperation(e, t) {
    switch (e.type) {
        case it.S.BULK_ADD_ROW: {
            const o = Object.entries(e.data.rows);
            for (const [r, i] of o) {
                this._updateRowTimestamps(r, n, e.userId, e.data.sourceInfo?.delegateForUserId, !0, !1, 
                    [...this.columns.getIds()], i.rowNumber, t.isAcknow);
            }
            // 实际的行数据插入逻辑
            break;
        }
    }
}
```

## 5. 数据落地到 documentModel

### 5.1 表格存储更新
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 通过 TableStorage 更新表格数据
this.tableStorage.bulkUpdates((n => {
    for (const o of Object.keys(e)) {
        for (const r of Object.keys(e[o])) {
            this.tableStorage.setKeys(o, r, e[o][r], {
                systemObjectType: t,
                bulkUpdate: n
            });
        }
    }
}));
```

### 5.2 行数据结构更新
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 新行被添加到 documentModel 的行集合中
// 行数据包含：
const rowData = {
    id: "新生成的行ID",
    values: {
        [columnId]: {
            value: "aaa"  // 用户提供的值
        }
    },
    index: "行在表格中的位置",
    timestamp: "创建时间戳"
};

// 更新到 grid.rows 集合
this.rows.add(rowData);
```

### 5.3 依赖图更新
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 如果新行影响了其他公式，会触发依赖失效
this.resolver.dependencyGraph.addDataDependency(
    fromReference,
    toReference,
    {
        callback: () => {
            // 重新计算依赖的公式
            this.invalidate();
        }
    }
);
```

## 6. 事件通知和UI更新

### 6.1 操作完成事件
**文件位置：** `/Users/gy/Downloads/coda/browser.6611b23ea80de0482abc.entry.js`

```javascript
// 操作完成后发出事件通知
this.emit(a.QCO.AppliedOperation, {
    target: this,
    op: operation,
    options: {isLocal: true}
});

// 行添加事件
this.emit(a.QCO.RowAdded, {
    gridId: this.id,
    rowId: newRowId
});
```

### 6.2 UI重新渲染
**文件位置：** `/Users/gy/Downloads/coda/postload.6f4c20e443c95cbdfd2e.chunk.js`

```javascript
// UI组件监听数据变化事件并重新渲染
[N.QCO.RowAdded]: this._onRowAdded,
[N.QCO.ColumnDependentsInvalidated]: this._forceUpdate
```

## 7. 完整执行流程总结

1. **公式解析**: `AddRow($$[grid:...], $$[column:...], "aaa")` 被解析为具体的表格ID、列ID和值
2. **操作创建**: 通过 `uncommittedOperationCreator` 创建 `BULK_ADD_ROW` 操作
3. **操作分发**: `dispatchOperation` 将操作分发到对应的数据模型
4. **数据更新**: 操作被应用到 `Grid` 模型，新行数据写入 `TableStorage`
5. **依赖更新**: 如果有公式依赖，更新依赖图并触发重算
6. **事件通知**: 发出操作完成和行添加事件
7. **UI更新**: UI组件接收事件并重新渲染显示新行

## 8. 关键数据结构

```javascript
// 最终在 documentModel 中的数据结构
window.coda.documentModel = {
    session: {
        resolver: {
            typedGetters: {
                getGrid: (gridId) => {
                    // 返回包含新行的Grid对象
                    return {
                        id: "grid-pGMwNYE-Z0",
                        rows: {
                            // 包含新添加的行
                            [newRowId]: {
                                id: newRowId,
                                values: {
                                    "c-f_bxR6fSiZ": {
                                        value: "aaa"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
```

这个流程确保了从公式执行到数据落地的完整性和一致性，同时支持撤销/重做、协作同步等高级功能。