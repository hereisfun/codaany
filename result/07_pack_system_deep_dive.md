# Coda Pack 系统深入分析

## 目录
- [1. Pack 系统概览](#1-pack-系统概览)
- [2. Pack 核心能力](#2-pack-核心能力)
- [3. 主要类与架构](#3-主要类与架构)
- [4. Pack 执行流程](#4-pack-执行流程)
- [5. UML 类图](#5-uml-类图)
- [6. 时序图与流程图](#6-时序图与流程图)

---

## 1. Pack 系统概览

### 1.1 什么是 Pack

Pack 是 Coda 的扩展系统，允许开发者创建自定义的集成和功能。Pack 可以：
- 连接外部 API 和服务
- 创建自定义公式函数
- 实现数据同步表（Sync Tables）
- 执行自动化操作（Actions）

### 1.2 Pack 分层架构

```mermaid
graph TB
    subgraph 用户层
        A[Doc/Formula]
        B[Button/Automation]
    end
    
    subgraph Pack运行时层
        C[Pack Runtime]
        D[Formula Executor]
        E[Action Executor]
        F[Sync Engine]
    end
    
    subgraph Pack定义层
        G[Pack Manifest]
        H[Pack Code/Handlers]
        I[Pack Schema]
    end
    
    subgraph 沙箱层
        J[V8 Isolate]
        K[Security Context]
        L[Resource Limits]
    end
    
    subgraph 外部服务层
        M[External APIs]
        N[OAuth Providers]
        O[Data Sources]
    end
    
    A --> C
    B --> C
    C --> D
    C --> E
    C --> F
    D --> G
    E --> G
    F --> G
    G --> H
    H --> I
    C --> J
    J --> K
    K --> L
    H --> M
    H --> N
    H --> O
```

---

## 2. Pack 核心能力

### 2.1 四大核心功能模块

#### 2.1.1 公式函数 (Pack Formulas)

自定义公式函数，可在 Coda 公式中调用。

**特点**：
- 支持同步和异步执行
- 可访问外部 API
- 参数类型化
- 返回值类型化

**示例**：
```typescript
pack.addFormula({
  name: "GetWeather",
  description: "Get current weather for a city",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: "city",
      description: "City name"
    })
  ],
  resultType: coda.ValueType.String,
  execute: async function([city], context) {
    const response = await context.fetcher.fetch({
      method: "GET",
      url: `https://api.weather.com/v1/current?city=${city}`
    });
    return response.body.temperature;
  }
});
```

#### 2.1.2 同步表 (Sync Tables)

双向数据同步表，可以从外部数据源同步数据到 Coda。

**特点**：
- 自动同步机制
- 增量更新支持
- Schema 定义
- 双向同步（部分支持）

**示例**：
```typescript
pack.addSyncTable({
  name: "Tasks",
  description: "Sync tasks from external service",
  identityName: "Task",
  schema: TaskSchema,
  formula: {
    name: "SyncTasks",
    description: "Sync tasks",
    parameters: [],
    execute: async function([], context) {
      const response = await context.fetcher.fetch({
        method: "GET",
        url: "https://api.tasks.com/v1/tasks"
      });
      return {
        result: response.body.tasks
      };
    }
  }
});
```

#### 2.1.3 操作 (Pack Actions)

可执行的操作，通常用于按钮或自动化。

**特点**：
- 修改外部数据
- 触发外部流程
- 返回执行结果
- 支持副作用

**示例**：
```typescript
pack.addFormula({
  name: "CreateTask",
  description: "Create a new task",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: "title",
      description: "Task title"
    })
  ],
  resultType: coda.ValueType.String,
  isAction: true,
  execute: async function([title], context) {
    const response = await context.fetcher.fetch({
      method: "POST",
      url: "https://api.tasks.com/v1/tasks",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });
    return response.body.id;
  }
});
```

#### 2.1.4 认证 (Authentication)

处理外部服务的身份验证。

**支持的认证类型**：
- OAuth2
- API Key / Token
- Custom (自定义)
- None (无认证)

**示例**：
```typescript
pack.setUserAuthentication({
  type: coda.AuthenticationType.OAuth2,
  authorizationUrl: "https://service.com/oauth/authorize",
  tokenUrl: "https://service.com/oauth/token",
  scopes: ["read", "write"],
  additionalParams: {
    access_type: "offline"
  }
});
```

---

## 3. 主要类与架构

### 3.1 核心类结构

```typescript
/**
 * Pack Definition - Pack 定义
 */
interface PackDefinition {
  // 基本信息
  id: string;
  name: string;
  description: string;
  version: string;
  
  // 网络配置
  networkDomains: string[];
  
  // 认证配置
  authentication?: AuthenticationConfig;
  
  // 功能定义
  formulas: FormulaDefinition[];
  syncTables: SyncTableDefinition[];
  
  // 元数据
  manifest: PackManifest;
}

/**
 * Pack Runtime - Pack 运行时
 */
class PackRuntime {
  private packId: string;
  private manifest: PackManifest;
  private isolate: V8Isolate;
  private executionContext: ExecutionContext;
  
  constructor(packId: string, manifest: PackManifest) {
    this.packId = packId;
    this.manifest = manifest;
    this.isolate = this.createIsolate();
    this.executionContext = this.createExecutionContext();
  }
  
  /**
   * 执行 Pack 公式
   */
  async executeFormula(
    formulaName: string,
    args: any[],
    context: FormulaContext
  ): Promise<FormulaResult> {
    // 1. 验证权限
    this.validatePermissions(formulaName);
    
    // 2. 准备执行上下文
    const execContext = this.prepareContext(context);
    
    // 3. 在沙箱中执行
    const result = await this.isolate.execute(
      () => this.manifest.formulas[formulaName].execute(args, execContext)
    );
    
    // 4. 验证返回值
    this.validateResult(result);
    
    return result;
  }
  
  /**
   * 同步表数据
   */
  async syncTable(
    tableName: string,
    context: SyncContext
  ): Promise<SyncResult> {
    // 1. 获取上次同步状态
    const lastSync = context.sync.continuation;
    
    // 2. 执行同步公式
    const syncFormula = this.manifest.syncTables[tableName].formula;
    const result = await this.executeFormula(
      syncFormula.name,
      [],
      { ...context, sync: { continuation: lastSync } }
    );
    
    // 3. 处理返回数据
    return this.processSyncResult(result);
  }
  
  /**
   * 执行 Action
   */
  async executeAction(
    actionName: string,
    args: any[],
    context: ActionContext
  ): Promise<ActionResult> {
    // 1. 验证是 Action
    if (!this.manifest.formulas[actionName].isAction) {
      throw new Error(`${actionName} is not an action`);
    }
    
    // 2. 执行
    const result = await this.executeFormula(actionName, args, context);
    
    // 3. 触发副作用处理
    await this.handleSideEffects(result);
    
    return result;
  }
  
  /**
   * 创建 V8 隔离环境
   */
  private createIsolate(): V8Isolate {
    return new V8Isolate({
      memoryLimit: 128 * 1024 * 1024, // 128MB
      timeoutMs: 30000, // 30 seconds
      cpuLimit: 1.0
    });
  }
  
  /**
   * 创建执行上下文
   */
  private createExecutionContext(): ExecutionContext {
    return {
      fetcher: new SecureFetcher(this.manifest.networkDomains),
      temporaryBlobStorage: new TemporaryBlobStorage(),
      sync: new SyncContext(),
      invocationLocation: this.getInvocationLocation()
    };
  }
}

/**
 * Pack Formula Definition - Pack 公式定义
 */
interface FormulaDefinition {
  // 基本信息
  name: string;
  description: string;
  
  // 参数定义
  parameters: ParameterDefinition[];
  
  // 返回类型
  resultType: ValueType;
  
  // 是否为 Action
  isAction?: boolean;
  
  // 执行函数
  execute: (
    args: any[],
    context: ExecutionContext
  ) => Promise<any> | any;
  
  // 缓存配置
  cacheTtlSecs?: number;
  
  // 网络请求
  isSystem?: boolean;
  
  // 连接需求
  connectionRequirement?: ConnectionRequirement;
}

/**
 * Sync Table Definition - 同步表定义
 */
interface SyncTableDefinition {
  // 表名
  name: string;
  description: string;
  
  // 身份定义
  identityName: string;
  
  // Schema
  schema: Schema;
  
  // 同步公式
  formula: SyncFormulaDefinition;
  
  // 动态 Schema
  dynamicOptions?: DynamicSyncTableOptions;
  
  // 增量同步
  getter?: {
    // 获取数据
    getRows: (context: SyncContext) => Promise<SyncResult>;
    
    // 最大批量
    maxUpdateBatchSize?: number;
  };
}

/**
 * Execution Context - 执行上下文
 */
interface ExecutionContext {
  // 网络请求器
  fetcher: Fetcher;
  
  // 临时 Blob 存储
  temporaryBlobStorage: TemporaryBlobStorage;
  
  // 同步上下文
  sync?: SyncContext;
  
  // 调用位置
  invocationLocation: InvocationLocation;
  
  // 时区
  timezone?: string;
  
  // 用户区域设置
  locale?: string;
}

/**
 * Secure Fetcher - 安全的网络请求器
 */
class SecureFetcher {
  private allowedDomains: string[];
  private rateLimiter: RateLimiter;
  
  constructor(allowedDomains: string[]) {
    this.allowedDomains = allowedDomains;
    this.rateLimiter = new RateLimiter();
  }
  
  /**
   * 执行网络请求
   */
  async fetch(request: FetchRequest): Promise<FetchResponse> {
    // 1. 验证域名
    this.validateDomain(request.url);
    
    // 2. 速率限制
    await this.rateLimiter.checkLimit();
    
    // 3. 添加认证
    const authedRequest = await this.addAuthentication(request);
    
    // 4. 执行请求
    const response = await fetch(authedRequest.url, {
      method: authedRequest.method,
      headers: authedRequest.headers,
      body: authedRequest.body
    });
    
    // 5. 处理响应
    return this.processResponse(response);
  }
  
  /**
   * 验证域名
   */
  private validateDomain(url: string): void {
    const domain = new URL(url).hostname;
    if (!this.allowedDomains.some(allowed => domain.endsWith(allowed))) {
      throw new Error(`Domain ${domain} is not allowed`);
    }
  }
}

/**
 * Pack Manifest - Pack 清单
 */
interface PackManifest {
  // Pack 元数据
  id: string;
  name: string;
  description: string;
  version: string;
  
  // 作者信息
  author: {
    name: string;
    email?: string;
    website?: string;
  };
  
  // 网络域名白名单
  networkDomains: string[];
  
  // 公式列表
  formulas: Record<string, FormulaDefinition>;
  
  // 同步表列表
  syncTables: Record<string, SyncTableDefinition>;
  
  // 认证配置
  authentication?: AuthenticationConfig;
  
  // 系统版本要求
  systemVersionRequirement?: string;
  
  // 默认认证
  defaultAuthentication?: string;
}

/**
 * Pack Manager - Pack 管理器
 */
class PackManager {
  private installedPacks: Map<string, PackRuntime> = new Map();
  private packRegistry: PackRegistry;
  
  constructor(registry: PackRegistry) {
    this.packRegistry = registry;
  }
  
  /**
   * 安装 Pack
   */
  async installPack(packId: string, docId: string): Promise<void> {
    // 1. 从注册表获取 Pack 定义
    const manifest = await this.packRegistry.getManifest(packId);
    
    // 2. 验证权限
    await this.validatePermissions(manifest, docId);
    
    // 3. 创建运行时
    const runtime = new PackRuntime(packId, manifest);
    
    // 4. 注册到文档
    this.installedPacks.set(packId, runtime);
    
    // 5. 初始化认证
    await this.initializeAuthentication(packId, manifest);
  }
  
  /**
   * 卸载 Pack
   */
  async uninstallPack(packId: string): Promise<void> {
    const runtime = this.installedPacks.get(packId);
    if (!runtime) return;
    
    // 1. 清理资源
    await runtime.cleanup();
    
    // 2. 移除引用
    this.installedPacks.delete(packId);
  }
  
  /**
   * 执行 Pack 公式
   */
  async executePackFormula(
    packId: string,
    formulaName: string,
    args: any[],
    context: FormulaContext
  ): Promise<any> {
    const runtime = this.installedPacks.get(packId);
    if (!runtime) {
      throw new Error(`Pack ${packId} is not installed`);
    }
    
    return await runtime.executeFormula(formulaName, args, context);
  }
  
  /**
   * 同步 Pack 表
   */
  async syncPackTable(
    packId: string,
    tableName: string,
    context: SyncContext
  ): Promise<SyncResult> {
    const runtime = this.installedPacks.get(packId);
    if (!runtime) {
      throw new Error(`Pack ${packId} is not installed`);
    }
    
    return await runtime.syncTable(tableName, context);
  }
}

/**
 * Pack Registry - Pack 注册表
 */
class PackRegistry {
  private apiClient: APIClient;
  private cache: Map<string, PackManifest> = new Map();
  
  /**
   * 获取 Pack 清单
   */
  async getManifest(packId: string): Promise<PackManifest> {
    // 1. 检查缓存
    if (this.cache.has(packId)) {
      return this.cache.get(packId)!;
    }
    
    // 2. 从服务器获取
    const manifest = await this.apiClient.getPackManifest(packId);
    
    // 3. 缓存
    this.cache.set(packId, manifest);
    
    return manifest;
  }
  
  /**
   * 搜索 Pack
   */
  async searchPacks(query: string): Promise<PackSearchResult[]> {
    return await this.apiClient.searchPacks(query);
  }
  
  /**
   * 获取 Pack 列表
   */
  async listPacks(category?: string): Promise<PackListItem[]> {
    return await this.apiClient.listPacks(category);
  }
}
```

---

## 4. Pack 执行流程

### 4.1 Pack 公式执行流程

```
用户调用公式
    ↓
公式引擎识别 Pack 公式
    ↓
Pack Manager 查找对应 Pack
    ↓
验证权限和参数
    ↓
创建执行上下文
    ↓
在 V8 Isolate 中执行
    ↓
处理网络请求（如需要）
    ↓
验证返回值
    ↓
缓存结果
    ↓
返回给用户
```

### 4.2 Sync Table 同步流程

```
触发同步（手动/自动）
    ↓
获取上次同步状态
    ↓
调用 Sync Formula
    ↓
获取数据（可能分页）
    ↓
转换为 Schema 格式
    ↓
计算差异（增删改）
    ↓
更新本地数据
    ↓
保存同步状态
    ↓
触发依赖重算
```

### 4.3 Pack Action 执行流程

```
用户触发 Action（按钮/自动化）
    ↓
验证 Action 权限
    ↓
准备参数
    ↓
执行 Action 公式
    ↓
调用外部 API
    ↓
处理响应
    ↓
更新相关数据（可选）
    ↓
返回执行结果
    ↓
显示成功/失败消息
```

---

## 5. UML 类图

### 5.1 Pack 核心类图

```mermaid
classDiagram
    class PackDefinition {
        +string id
        +string name
        +string description
        +string version
        +string[] networkDomains
        +AuthenticationConfig authentication
        +FormulaDefinition[] formulas
        +SyncTableDefinition[] syncTables
        +PackManifest manifest
    }
    
    class PackRuntime {
        -string packId
        -PackManifest manifest
        -V8Isolate isolate
        -ExecutionContext executionContext
        +executeFormula(name, args, context): Promise~FormulaResult~
        +syncTable(tableName, context): Promise~SyncResult~
        +executeAction(name, args, context): Promise~ActionResult~
        -createIsolate(): V8Isolate
        -createExecutionContext(): ExecutionContext
        -validatePermissions(formulaName): void
        -prepareContext(context): ExecutionContext
        -validateResult(result): void
        -processSyncResult(result): SyncResult
        -handleSideEffects(result): Promise~void~
    }
    
    class PackManager {
        -Map~string,PackRuntime~ installedPacks
        -PackRegistry packRegistry
        +installPack(packId, docId): Promise~void~
        +uninstallPack(packId): Promise~void~
        +executePackFormula(packId, name, args, context): Promise~any~
        +syncPackTable(packId, tableName, context): Promise~SyncResult~
        -validatePermissions(manifest, docId): Promise~void~
        -initializeAuthentication(packId, manifest): Promise~void~
    }
    
    class PackRegistry {
        -APIClient apiClient
        -Map~string,PackManifest~ cache
        +getManifest(packId): Promise~PackManifest~
        +searchPacks(query): Promise~PackSearchResult[]~
        +listPacks(category): Promise~PackListItem[]~
    }
    
    class FormulaDefinition {
        +string name
        +string description
        +ParameterDefinition[] parameters
        +ValueType resultType
        +boolean isAction
        +Function execute
        +number cacheTtlSecs
        +ConnectionRequirement connectionRequirement
    }
    
    class SyncTableDefinition {
        +string name
        +string description
        +string identityName
        +Schema schema
        +SyncFormulaDefinition formula
        +DynamicSyncTableOptions dynamicOptions
        +SyncGetter getter
    }
    
    class ExecutionContext {
        +Fetcher fetcher
        +TemporaryBlobStorage temporaryBlobStorage
        +SyncContext sync
        +InvocationLocation invocationLocation
        +string timezone
        +string locale
    }
    
    class SecureFetcher {
        -string[] allowedDomains
        -RateLimiter rateLimiter
        +fetch(request): Promise~FetchResponse~
        -validateDomain(url): void
        -addAuthentication(request): Promise~FetchRequest~
        -processResponse(response): FetchResponse
    }
    
    class V8Isolate {
        -number memoryLimit
        -number timeoutMs
        -number cpuLimit
        +execute(fn): Promise~any~
        +dispose(): void
    }
    
    PackDefinition --* FormulaDefinition
    PackDefinition --* SyncTableDefinition
    PackRuntime --> PackDefinition
    PackRuntime --> V8Isolate
    PackRuntime --> ExecutionContext
    PackManager --> PackRuntime
    PackManager --> PackRegistry
    ExecutionContext --> SecureFetcher
    SecureFetcher --> RateLimiter
```

### 5.2 Pack 公式执行相关类图

```mermaid
classDiagram
    class FormulaEngine {
        -Document document
        -PackManager packManager
        -FormulaExecutor executor
        +executeFormula(cellRef, formula): Promise~FormulaResult~
        +executePackFormula(packId, name, args): Promise~any~
    }
    
    class PackFormula {
        +string packId
        +string formulaName
        +any[] arguments
        +ExecutionContext context
    }
    
    class FormulaParser {
        +parse(formula): AST
        +isPackFormula(node): boolean
        +extractPackInfo(node): PackFormulaInfo
    }
    
    class PackFormulaExecutor {
        -PackManager packManager
        +execute(packFormula): Promise~FormulaResult~
        -prepareArguments(args): any[]
        -handleError(error): FormulaError
    }
    
    FormulaEngine --> PackManager
    FormulaEngine --> FormulaParser
    FormulaEngine --> PackFormulaExecutor
    PackFormulaExecutor --> PackFormula
    PackFormulaExecutor --> PackManager
```

---

## 6. 时序图与流程图

### 6.1 Pack 公式执行时序图

```mermaid
sequenceDiagram
    participant U as User
    participant FE as FormulaEngine
    participant PM as PackManager
    participant PR as PackRuntime
    participant VI as V8Isolate
    participant SF as SecureFetcher
    participant API as External API
    
    U->>FE: 输入公式 =PackName.FormulaName(args)
    FE->>FE: 解析公式
    FE->>FE: 识别为 Pack 公式
    FE->>PM: executePackFormula(packId, name, args)
    
    PM->>PM: 查找 PackRuntime
    PM->>PR: executeFormula(name, args, context)
    
    PR->>PR: validatePermissions()
    PR->>PR: prepareContext()
    
    PR->>VI: execute(formula function)
    activate VI
    
    VI->>SF: fetch(request)
    SF->>SF: validateDomain()
    SF->>SF: addAuthentication()
    SF->>API: HTTP Request
    API-->>SF: HTTP Response
    SF-->>VI: FetchResponse
    
    VI-->>PR: execution result
    deactivate VI
    
    PR->>PR: validateResult()
    PR->>PR: cache result
    
    PR-->>PM: FormulaResult
    PM-->>FE: result
    FE-->>U: 显示结果
```

### 6.2 Sync Table 同步时序图

```mermaid
sequenceDiagram
    participant U as User
    participant ST as SyncTable
    participant PM as PackManager
    participant PR as PackRuntime
    participant SF as SecureFetcher
    participant API as External API
    participant Grid as Grid/Table
    
    U->>ST: 触发同步
    ST->>ST: 获取上次同步状态
    
    ST->>PM: syncPackTable(packId, tableName, context)
    PM->>PR: syncTable(tableName, context)
    
    PR->>PR: 构建 SyncContext
    PR->>SF: 执行 Sync Formula
    
    loop 分页获取数据
        SF->>API: 请求数据页
        API-->>SF: 返回数据页
        SF->>SF: 转换为 Schema 格式
    end
    
    SF-->>PR: SyncResult { rows, continuation }
    
    PR->>PR: 处理同步结果
    PR-->>PM: SyncResult
    PM-->>ST: SyncResult
    
    ST->>Grid: 更新表格数据
    Grid->>Grid: 计算差异（增删改）
    Grid->>Grid: 应用更新
    Grid->>Grid: 触发依赖失效
    
    ST->>ST: 保存同步状态
    ST-->>U: 同步完成
```

### 6.3 Pack Action 执行时序图

```mermaid
sequenceDiagram
    participant U as User
    participant Btn as Button
    participant PM as PackManager
    participant PR as PackRuntime
    participant VI as V8Isolate
    participant API as External API
    participant Grid as Grid/Table
    
    U->>Btn: 点击按钮
    Btn->>Btn: 获取 Action 参数
    
    Btn->>PM: executePackFormula(packId, actionName, args)
    PM->>PR: executeAction(actionName, args, context)
    
    PR->>PR: 验证是 Action
    PR->>VI: execute(action function)
    
    activate VI
    VI->>API: POST/PUT/DELETE Request
    API-->>VI: Response
    deactivate VI
    
    VI-->>PR: ActionResult
    
    PR->>PR: handleSideEffects()
    
    alt 需要更新本地数据
        PR->>Grid: 更新相关数据
        Grid->>Grid: 触发依赖重算
    end
    
    PR-->>PM: ActionResult
    PM-->>Btn: result
    Btn-->>U: 显示成功/失败消息
```

### 6.4 Pack 安装流程图

```mermaid
flowchart TD
    Start([用户选择安装 Pack]) --> SearchPack[搜索/浏览 Pack]
    SearchPack --> SelectPack[选择 Pack]
    SelectPack --> CheckPermissions{检查权限}
    
    CheckPermissions -->|无权限| ShowUpgrade[显示升级提示]
    ShowUpgrade --> End1([结束])
    
    CheckPermissions -->|有权限| FetchManifest[获取 Pack Manifest]
    FetchManifest --> ReviewPermissions[展示 Pack 权限和域名]
    ReviewPermissions --> UserConfirm{用户确认?}
    
    UserConfirm -->|取消| End2([取消安装])
    UserConfirm -->|确认| CheckAuth{需要认证?}
    
    CheckAuth -->|是| InitAuth[初始化认证]
    InitAuth --> AuthFlow{认证类型}
    
    AuthFlow -->|OAuth2| OAuth[OAuth 流程]
    AuthFlow -->|API Key| APIKey[输入 API Key]
    AuthFlow -->|Custom| Custom[自定义认证]
    
    OAuth --> SaveAuth[保存认证信息]
    APIKey --> SaveAuth
    Custom --> SaveAuth
    
    CheckAuth -->|否| CreateRuntime[创建 Pack Runtime]
    SaveAuth --> CreateRuntime
    
    CreateRuntime --> InitIsolate[初始化 V8 Isolate]
    InitIsolate --> RegisterPack[注册到 PackManager]
    RegisterPack --> UpdateDoc[更新文档引用]
    UpdateDoc --> Success([安装成功])
```

### 6.5 Pack 公式解析流程图

```mermaid
flowchart TD
    Start([公式输入]) --> Parse[解析公式]
    Parse --> CheckType{公式类型?}
    
    CheckType -->|普通公式| NormalFormula[执行普通公式]
    NormalFormula --> End1([结束])
    
    CheckType -->|Pack 公式| ExtractInfo[提取 Pack 信息]
    ExtractInfo --> GetPackId[获取 Pack ID]
    GetPackId --> GetFormulaName[获取公式名称]
    GetFormulaName --> GetArgs[获取参数]
    
    GetArgs --> CheckInstalled{Pack 已安装?}
    CheckInstalled -->|否| ShowError1[显示未安装错误]
    ShowError1 --> End2([结束])
    
    CheckInstalled -->|是| ValidateArgs{参数类型正确?}
    ValidateArgs -->|否| ShowError2[显示参数错误]
    ShowError2 --> End3([结束])
    
    ValidateArgs -->|是| CheckAuth{需要认证?}
    CheckAuth -->|是且未认证| ShowAuthPrompt[提示认证]
    ShowAuthPrompt --> End4([结束])
    
    CheckAuth -->|否或已认证| PrepareContext[准备执行上下文]
    PrepareContext --> ExecuteInIsolate[在 Isolate 中执行]
    
    ExecuteInIsolate --> CheckCache{结果已缓存?}
    CheckCache -->|是| ReturnCached[返回缓存结果]
    ReturnCached --> End5([结束])
    
    CheckCache -->|否| ExecuteFormula[执行公式]
    ExecuteFormula --> CheckNetwork{需要网络请求?}
    
    CheckNetwork -->|是| ValidateDomain[验证域名]
    ValidateDomain --> CheckRateLimit{速率限制?}
    CheckRateLimit -->|超限| ShowError3[显示速率限制错误]
    ShowError3 --> End6([结束])
    
    CheckRateLimit -->|未超限| MakeRequest[发起请求]
    MakeRequest --> ProcessResponse[处理响应]
    
    CheckNetwork -->|否| ComputeResult[计算结果]
    ProcessResponse --> ComputeResult
    
    ComputeResult --> ValidateResult{结果有效?}
    ValidateResult -->|否| ShowError4[显示执行错误]
    ShowError4 --> End7([结束])
    
    ValidateResult -->|是| CacheResult[缓存结果]
    CacheResult --> ReturnResult[返回结果]
    ReturnResult --> End8([结束])
```

### 6.6 Sync Table 同步详细流程图

```mermaid
flowchart TD
    Start([触发同步]) --> CheckTrigger{触发类型}
    
    CheckTrigger -->|手动| ManualSync[用户手动触发]
    CheckTrigger -->|自动| AutoSync[定时自动触发]
    CheckTrigger -->|依赖| DependencySync[依赖变化触发]
    
    ManualSync --> LoadState[加载同步状态]
    AutoSync --> LoadState
    DependencySync --> LoadState
    
    LoadState --> CheckLastSync{有上次同步?}
    CheckLastSync -->|否| FullSync[全量同步]
    CheckLastSync -->|是| CheckInterval{同步间隔?}
    
    CheckInterval -->|未到时间| Skip([跳过同步])
    CheckInterval -->|已到时间| IncrementalSync[增量同步]
    
    FullSync --> PrepareContext[准备同步上下文]
    IncrementalSync --> PrepareContext
    
    PrepareContext --> ExecuteSyncFormula[执行 Sync Formula]
    
    ExecuteSyncFormula --> CheckPagination{需要分页?}
    CheckPagination -->|否| ProcessData[处理数据]
    CheckPagination -->|是| FetchPage[获取数据页]
    
    FetchPage --> AppendData[追加数据]
    AppendData --> CheckMore{还有更多?}
    CheckMore -->|是| FetchPage
    CheckMore -->|否| ProcessData
    
    ProcessData --> TransformSchema[转换为 Schema 格式]
    TransformSchema --> ValidateData{数据有效?}
    
    ValidateData -->|否| HandleError[处理错误]
    HandleError --> End1([同步失败])
    
    ValidateData -->|是| ComputeDiff[计算数据差异]
    ComputeDiff --> ApplyChanges[应用变更]
    
    ApplyChanges --> UpdateAdded[添加新行]
    UpdateAdded --> UpdateModified[修改已有行]
    UpdateModified --> UpdateDeleted[删除行]
    
    UpdateDeleted --> InvalidateDeps[失效依赖]
    InvalidateDeps --> SaveState[保存同步状态]
    SaveState --> UpdateMetadata[更新元数据]
    UpdateMetadata --> NotifyComplete[通知完成]
    NotifyComplete --> End2([同步成功])
```

---

## 7. Pack 安全机制

### 7.1 沙箱隔离

```typescript
/**
 * V8 Isolate 沙箱配置
 */
interface IsolateConfig {
  // 内存限制
  memoryLimit: number;  // 128MB
  
  // 超时限制
  timeoutMs: number;    // 30秒
  
  // CPU 限制
  cpuLimit: number;     // 1.0 (100%)
  
  // 禁止的全局对象
  disabledGlobals: string[];  // ['eval', 'Function']
  
  // 网络限制
  networkRestrictions: {
    allowedDomains: string[];
    maxConcurrentRequests: number;
    requestTimeout: number;
  };
}
```

### 7.2 权限控制

```typescript
/**
 * Pack 权限级别
 */
enum PackPermission {
  // 只读数据
  ReadData = 'READ_DATA',
  
  // 写入数据
  WriteData = 'WRITE_DATA',
  
  // 网络访问
  Network = 'NETWORK',
  
  // 执行 Actions
  ExecuteActions = 'EXECUTE_ACTIONS',
  
  // 文件存储
  FileStorage = 'FILE_STORAGE'
}

/**
 * 权限验证
 */
class PermissionValidator {
  validateFormulaExecution(
    pack: PackDefinition,
    formula: FormulaDefinition,
    context: ExecutionContext
  ): boolean {
    // 1. 检查 Pack 权限
    if (!pack.permissions.includes(PackPermission.Network) && 
        formula.requiresNetwork) {
      throw new PermissionError('Network access not allowed');
    }
    
    // 2. 检查 Action 权限
    if (formula.isAction && 
        !pack.permissions.includes(PackPermission.ExecuteActions)) {
      throw new PermissionError('Action execution not allowed');
    }
    
    // 3. 检查用户权限
    if (!context.user.canUsePack(pack.id)) {
      throw new PermissionError('User not authorized to use this Pack');
    }
    
    return true;
  }
}
```

### 7.3 速率限制

```typescript
/**
 * 速率限制器
 */
class RateLimiter {
  private requests: Map<string, Request[]> = new Map();
  
  // 限制配置
  private limits = {
    perSecond: 10,
    perMinute: 100,
    perHour: 1000
  };
  
  /**
   * 检查速率限制
   */
  async checkLimit(packId: string): Promise<boolean> {
    const now = Date.now();
    const requests = this.getRequests(packId, now);
    
    // 检查每秒限制
    const lastSecond = requests.filter(r => now - r.timestamp < 1000);
    if (lastSecond.length >= this.limits.perSecond) {
      throw new RateLimitError('Too many requests per second');
    }
    
    // 检查每分钟限制
    const lastMinute = requests.filter(r => now - r.timestamp < 60000);
    if (lastMinute.length >= this.limits.perMinute) {
      throw new RateLimitError('Too many requests per minute');
    }
    
    // 检查每小时限制
    const lastHour = requests.filter(r => now - r.timestamp < 3600000);
    if (lastHour.length >= this.limits.perHour) {
      throw new RateLimitError('Too many requests per hour');
    }
    
    // 记录请求
    this.recordRequest(packId, now);
    
    return true;
  }
}
```

---

## 8. Pack 开发最佳实践

### 8.1 公式设计

```typescript
// ✅ 好的实践
pack.addFormula({
  name: "GetUserProfile",
  description: "Get user profile by ID",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: "userId",
      description: "User ID"
    })
  ],
  resultType: coda.ValueType.Object,
  schema: UserProfileSchema,
  cacheTtlSecs: 300,  // 缓存 5 分钟
  execute: async function([userId], context) {
    // 参数验证
    if (!userId) {
      throw new coda.UserVisibleError("User ID is required");
    }
    
    // 执行请求
    const response = await context.fetcher.fetch({
      method: "GET",
      url: `/users/${userId}`,
      cacheTtlSecs: 300
    });
    
    // 返回结构化数据
    return {
      id: response.body.id,
      name: response.body.name,
      email: response.body.email,
      avatar: response.body.avatar_url
    };
  }
});

// ❌ 不好的实践
pack.addFormula({
  name: "DoEverything",  // 功能过于宽泛
  parameters: [],  // 缺少参数
  resultType: coda.ValueType.String,  // 返回类型不明确
  execute: async function([], context) {
    // 没有错误处理
    // 没有缓存
    // 返回格式不一致
    const data = await context.fetcher.fetch({ url: "/api" });
    return JSON.stringify(data);  // 不应返回 JSON 字符串
  }
});
```

### 8.2 Sync Table 设计

```typescript
// ✅ 好的实践
pack.addSyncTable({
  name: "Tasks",
  description: "Sync tasks from project management tool",
  identityName: "Task",
  schema: TaskSchema,
  formula: {
    name: "SyncTasks",
    description: "Sync tasks",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "projectId",
        description: "Project ID",
        optional: false
      })
    ],
    execute: async function([projectId], context) {
      // 增量同步支持
      const continuation = context.sync.continuation;
      const url = continuation?.nextUrl || `/projects/${projectId}/tasks`;
      
      const response = await context.fetcher.fetch({
        method: "GET",
        url: url
      });
      
      const tasks = response.body.tasks.map(task => ({
        id: task.id,
        title: task.title,
        status: task.status,
        assignee: task.assignee,
        dueDate: task.due_date
      }));
      
      return {
        result: tasks,
        continuation: response.body.next_url ? {
          nextUrl: response.body.next_url
        } : undefined
      };
    }
  }
});
```

### 8.3 错误处理

```typescript
// ✅ 好的错误处理
async function execute([arg], context) {
  try {
    const response = await context.fetcher.fetch({
      method: "GET",
      url: `/api/resource/${arg}`
    });
    
    return response.body;
    
  } catch (error) {
    // 区分不同类型的错误
    if (error.statusCode === 404) {
      throw new coda.UserVisibleError(`Resource ${arg} not found`);
    } else if (error.statusCode === 401) {
      throw new coda.UserVisibleError("Authentication failed. Please reconnect your account.");
    } else if (error.statusCode === 429) {
      throw new coda.UserVisibleError("Rate limit exceeded. Please try again later.");
    } else {
      throw new coda.UserVisibleError(`Failed to fetch data: ${error.message}`);
    }
  }
}
```

---

## 9. 总结

### 9.1 Pack 系统特点

1. **模块化扩展**：通过 Pack 系统，Coda 实现了强大的可扩展性
2. **安全隔离**：V8 Isolate 提供了强大的安全保障
3. **类型安全**：Schema 和参数定义保证了数据类型安全
4. **性能优化**：缓存、速率限制等机制保证了系统性能
5. **开发友好**：清晰的 API 和丰富的功能支持

### 9.2 主要组件总结

| 组件 | 职责 | 关键类 |
|------|------|--------|
| **Pack Runtime** | Pack 执行环境 | `PackRuntime`, `V8Isolate` |
| **Pack Manager** | Pack 生命周期管理 | `PackManager`, `PackRegistry` |
| **Formula Execution** | 公式执行 | `FormulaEngine`, `PackFormulaExecutor` |
| **Sync Engine** | 数据同步 | `SyncEngine`, `SyncTableManager` |
| **Security** | 安全控制 | `SecureFetcher`, `PermissionValidator` |
| **Authentication** | 认证管理 | `AuthManager`, `OAuth2Handler` |

### 9.3 技术亮点

1. **V8 Isolate 沙箱**：完全隔离的执行环境
2. **声明式 API**：Schema-driven 的开发方式
3. **增量同步**：高效的数据同步机制
4. **智能缓存**：多层缓存策略
5. **速率限制**：保护系统资源
6. **错误恢复**：优雅的错误处理

---

## 参考资料

- [Coda Pack SDK 文档](https://coda.io/packs)
- [V8 Isolate 文档](https://v8.dev/docs/embed)
- [OAuth 2.0 规范](https://oauth.net/2/)
- Coda 源码分析

