# Node Description Batch 11 of 148

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "runtime_library_za": "za()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L64 | neighbors=[library.js, loadLibrary(), Ja(), li(), nt(), Zd()]
- "runtime_react_native_constructor": "constructor()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, cs(), _getName(), _getNamespace(), instantiateLibrary(), Jt()]
- "runtime_react_native_getdeepfield": "getDeepField()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, getField(), getDeepFieldValue(), hp(), ju(), qu()]
- "runtime_react_native_getdeepselectionparent": "getDeepSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, du(), getFieldValue(), getSelectionParent(), iu(), nu()]
- "runtime_react_native_getglobaltracinghelper": "getGlobalTracingHelper()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, createEngineSpan(), getActiveContext(), getTraceParent(), isEnabled(), runInChildSpan()]
- "runtime_react_native_getorcreate": "getOrCreate()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, getAllComputedFields(), getAllModelExtensions(), getAllQueryCallbacks(), get(), r()]
- "runtime_react_native_hr": "Hr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Oe(), ri(), toString(), zr(), T()]
- "runtime_react_native_ic": "ic()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, isPreviewFeatureOn(), isRawAction(), oc(), sc(), nc()]
- "runtime_react_native_ispreviewfeatureon": "isPreviewFeatureOn()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, Cn(), ic(), Mo(), nc(), Wt()]
- "runtime_react_native_logger": "logger()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, createEngineSpan(), emit(), ep(), parseEngineResponse(), tp()]
- "runtime_react_native_nestselection": "nestSelection()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, ac(), e(), findField(), oc(), sc()]
- "runtime_react_native_nr": "nr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Aa(), Ca(), wc(), Pa(), Ta()]
- "runtime_react_native_oe": "Oe()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ba(), ha(), Hr(), Wr(), ya()]
- "runtime_react_native_parseengineresponse": "parseEngineResponse()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, logger(), metrics(), request(), requestBatch(), transaction()]
- "runtime_react_native_po": "po()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, br(), addErrorMessage(), addField(), fo(), ku()]
- "runtime_react_native_requestbatch": "requestBatch()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L61 | neighbors=[react-native.js, buildQueryError(), Lr(), parseEngineResponse(), query(), start()]
- "runtime_react_native_rl": "Rl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, mr(), slice(), ur(), wn(), Zi()]
- "runtime_react_native_rr": "Rr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, hp(), renderAllMessages(), toString(), write(), Sr()]
- "runtime_react_native_withindent": "withIndent()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, indent(), unindent(), write(), writeWithContents(), writeWithItems()]
- "runtime_react_native_wo": "wo()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L9 | neighbors=[react-native.js, nu(), u(), addSuggestion(), _c(), hasField()]
- "runtime_react_native_ya": "ya()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ti(), ii(), Oe(), slice(), write()]
- "runtime_react_native_yt": "Yt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, rs(), Ae(), Gc(), getAllClientExtensions(), Ht()]
- "runtime_react_native_zt": "Zt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, ss(), at(), Fe(), lt(), slice()]
- "runtime_wasm_be": "be()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, t(), Ct(), es(), shouldApplyGlobalOmit(), za()]
- "runtime_wasm_ci": "ci()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, toString(), values(), write(), Ye(), oa()]
- "runtime_wasm_d": "D()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, cn(), It(), mn(), un(), yr()]
- "runtime_wasm_getdeepfield": "getDeepField()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, Bs(), getField(), getDeepFieldValue(), nl(), qs()]
- "runtime_wasm_getdeepselectionparent": "getDeepSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, ds(), fs(), getFieldValue(), getSelectionParent(), Is()]
- "runtime_wasm_getglobaltracinghelper": "getGlobalTracingHelper()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, createEngineSpan(), getActiveContext(), getTraceParent(), isEnabled(), runInChildSpan()]
- "runtime_wasm_getorcreate": "getOrCreate()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, getAllComputedFields(), getAllModelExtensions(), getAllQueryCallbacks(), get(), r()]
- "runtime_wasm_gr": "gr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, byteLength(), from(), on(), slice(), write()]
- "runtime_wasm_ht": "Ht()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, renderAllMessages(), toString(), write(), nl(), zt()]
- "runtime_wasm_indexof": "indexOf()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, F(), includes(), from(), lastIndexOf(), sn()]
- "runtime_wasm_na": "na()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ia(), isPreviewFeatureOn(), isRawAction(), oa(), ra()]
- "runtime_wasm_parseengineresponse": "parseEngineResponse()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, logger(), metrics(), request(), requestBatch(), transaction()]
- "runtime_wasm_pt": "pt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, Bs(), fs(), Is(), _s(), ti()]
- "runtime_wasm_qi": "qi()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, de(), getAllQueryCallbacks(), isEmpty(), ji(), sr()]
- "runtime_wasm_r": "r()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, getOrCreate(), gi(), ko(), ni(), write()]
- "runtime_wasm_request": "request()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, buildQueryError(), handleAndLogRequestError(), parseEngineResponse(), parseRequestError(), start()]
- "runtime_wasm_start": "start()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, metrics(), request(), requestBatch(), runInChildSpan(), transaction()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-010.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
