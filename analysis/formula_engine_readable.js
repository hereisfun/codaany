/*
  Formula Engine (Worker) — Readable Core Extraction

  Notes:
  - This file rewrites selected minified/obfuscated worker code into clearer forms
    without changing logic. Each block is annotated with its original source range.
  - Source file: source-code/webworker.bb42d3635dc7b11ff373.entry.js

  IMPORTANT: Do not modify runtime behavior; naming is improved for readability only.
*/

// -----------------------------------------------------------------------------
// 1) Result wrapping and execution entry points
// -----------------------------------------------------------------------------

/* Source: L15272-L15281 */
function wrapExecutionResult(result, isStandalone, sourceTokenKey) {
  // Mirrors p(e, t, n): attaches metadata and clones when needed
  // - isStandalone: whether the formula/token acts standalone in execution graph
  // - sourceTokenKey: used to tag source of value for volatility/guarding
  return l.yR(result, (value) => {
    const shouldTag = !value.sourceTokenKey || sourceTokenKey === o.Aj;
    if (typeof value === "object" && Object.isFrozen(value) && (isStandalone || shouldTag)) {
      value = s.y(value);
    }
    if (shouldTag) value.sourceTokenKey = sourceTokenKey;
    if (isStandalone) value.isStandalone = isStandalone;
    return value;
  });
}

/* Source: L15284-L15318 */
function executeNodeOrToken(nodeOrToken, execContext) {
  // Mirrors m(e, t): executes a bound formula node or a literal/reference token
  let rawResult;
  if (c.HP(nodeOrToken)) {
    // Bound formula node (already wrapped with .execute)
    rawResult = nodeOrToken.execute(execContext);
  } else {
    const token = nodeOrToken;
    if (!u.P2(token)) {
      throw new Error(`Tried to execute an unsupported token ${h().inspect(token)}`);
    }
    switch (token.type) {
      case r.ru.REFERENCE:
        rawResult = execContext.resolver.fetch(i.Nn(token.ref), execContext);
        if (!rawResult.sourceTokenKey) rawResult.sourceTokenKey = o.Aj;
        break;
      case r.ru.STRING:
      case r.ru.BOOLEAN:
      case r.ru.NUMERIC:
        rawResult = a.mO(execContext.context, token.value);
        break;
      case r.ru.UNDEFINED:
        rawResult = a.mO(execContext.context, void 0);
        break;
      case r.ru.ATREF:
      default:
        i.pL(token); // unreachable/ensure
    }
  }
  const wasVolatile = execContext.isVolatile;
  execContext.resetVolatileGuard();
  return wrapExecutionResult(rawResult, c.IN(nodeOrToken), wasVolatile ? o.Aj : void 0);
}

/* Source: L15319-L15323 */
function executeWithCurrentValue(nodeOrToken, currentValue, execContext) {
  // Mirrors f(e, t, n): clone context, set current value, then execute
  const local = execContext.clone();
  local.setCurrentValue(currentValue);
  return executeNodeOrToken(nodeOrToken, local);
}

// -----------------------------------------------------------------------------
// 2) Standalone detection used during wrapping
// -----------------------------------------------------------------------------

/* Source: L16156-L16160 (export IN -> R) */
function isStandalone(nodeOrToken) {
  // Mirrors R(e): for bound nodes, return .isStandalone; otherwise check token shape
  return c.HP(nodeOrToken)
    ? nodeOrToken.isStandalone
    : !(C.Wg(nodeOrToken) || (C.$C(nodeOrToken) && (i.Uu.isVariableRef(nodeOrToken.ref) || (i.Uu.isColumnRef(nodeOrToken.ref) && nodeOrToken.ref?.willExecuteAsLoopVariable))));
}

// -----------------------------------------------------------------------------
// 3) Pack formula execution (translate-object style) via fetcher
// -----------------------------------------------------------------------------

/* Source: L841-L848 (makeTranslateObjectFormula.execute) */
function packTranslateObjectExecute(args, ctx, buildRequest, handleResponse, onError) {
  // Equivalent to: execute(args, ctx) { return ctx.fetcher.fetch(buildRequest(args)).catch(err => { onError?.(err); throw err; }).then(handleResponse); }
  return ctx.fetcher
    .fetch(buildRequest(args))
    .catch((err) => {
      if (onError) onError(err);
      throw err;
    })
    .then(handleResponse);
}

/* Source: L860-L863 (makeEmptyFormula.execute) */
function packEmptyExecute(args, ctx, buildRequest) {
  // Equivalent to: execute(args, ctx) { return ctx.fetcher.fetch(buildRequest(args)).then(() => ""); }
  return ctx.fetcher.fetch(buildRequest(args)).then(() => "");
}

// -----------------------------------------------------------------------------
// 4) Sync table getter wrapping pack formula result to schema
// -----------------------------------------------------------------------------

/* Source: L490-L524 (getter.execute within Y(...)) */
async function packSyncGetterExecute(args, ctx, callExecute, toObjectResponse, onError) {
  // Calls the pack getter, normalizes to object schema, forwards continuation/completion
  let raw;
  try {
    raw = (await callExecute(args, ctx)) || {};
  } catch (err) {
    if (onError) onError(err);
    throw err;
  }
  const gridSchema = ctx.sync.schema;
  const resultBody = toObjectResponse({ body: raw.result || [], status: 200, headers: {} }, gridSchema);
  const { continuation, completion, deletedItemIds, deletedRowIds, permissionsContext } = raw;
  const out = { result: resultBody };
  if (continuation) out.continuation = continuation;
  if (completion) out.completion = completion;
  if ((deletedRowIds ?? deletedItemIds)) {
    out.deletedRowIds = deletedRowIds ?? deletedItemIds;
    out.deletedItemIds = out.deletedRowIds;
  }
  if (permissionsContext) out.permissionsContext = permissionsContext;
  return out;
}

module.exports = {
  // Core
  wrapExecutionResult,
  executeNodeOrToken,
  executeWithCurrentValue,
  isStandalone,
  // Pack
  packTranslateObjectExecute,
  packEmptyExecute,
  packSyncGetterExecute,
};



