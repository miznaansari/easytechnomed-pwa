# Node Description Batch 45 of 148

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

- "runtime_react_native_fn": "fn()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, ku()]
- "runtime_react_native_fr": "Fr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, Wt()]
- "runtime_react_native_fu": "fu()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, k()]
- "runtime_react_native_getactivecontext": "getActiveContext()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, getGlobalTracingHelper()]
- "runtime_react_native_getallbatchquerycallbacks": "getAllBatchQueryCallbacks()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, get()]
- "runtime_react_native_getcurrentbinarytarget": "getCurrentBinaryTarget()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, instantiateLibrary()]
- "runtime_react_native_getcurrentlinelength": "getCurrentLineLength()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, write()]
- "runtime_react_native_getfields": "getFields()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, wu()]
- "runtime_react_native_getnamespace": "_getNamespace()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L9 | neighbors=[react-native.js, constructor()]
- "runtime_react_native_getoutputtypedescription": "getOutputTypeDescription()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, oc()]
- "runtime_react_native_getprintwidth": "getPrintWidth()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, values()]
- "runtime_react_native_gettraceparent": "getTraceParent()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, getGlobalTracingHelper()]
- "runtime_react_native_gl": "Gl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, k()]
- "runtime_react_native_gp": "gp()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L74 | neighbors=[react-native.js, Zs()]
- "runtime_react_native_h": "h()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, P()]
- "runtime_react_native_hc": "hc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, Ae()]
- "runtime_react_native_ho": "ho()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L9 | neighbors=[react-native.js, Bt()]
- "runtime_react_native_indent": "indent()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, withIndent()]
- "runtime_react_native_isenabled": "isEnabled()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, getGlobalTracingHelper()]
- "runtime_react_native_israwaction": "isRawAction()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, ic()]
- "runtime_react_native_json": "json()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, metrics()]
- "runtime_react_native_ka": "ka()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, xa()]
- "runtime_react_native_kl": "kl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, ln()]
- "runtime_react_native_la": "La()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, fi()]
- "runtime_react_native_li": "li()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, di()]
- "runtime_react_native_lineat": "lineAt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, pu()]
- "runtime_react_native_ll": "ll()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, enabled()]
- "runtime_react_native_ln": "ln()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, kl()]
- "runtime_react_native_loadlibrary": "loadLibrary()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, loadEngine()]
- "runtime_react_native_lr": "Lr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, requestBatch()]
- "runtime_react_native_ls": "ls()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, us()]
- "runtime_react_native_mapqueryengineresult": "mapQueryEngineResult()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, unpack()]
- "runtime_react_native_ml": "ml()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, Mt()]
- "runtime_react_native_mp": "mp()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L74 | neighbors=[react-native.js, xt()]
- "runtime_react_native_mr": "mr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, Rl()]
- "runtime_react_native_na": "Na()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Ta()]
- "runtime_react_native_np": "np()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L62 | neighbors=[react-native.js, Fs()]
- "runtime_react_native_o": "_o()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, Jt()]
- "runtime_react_native_oa": "Oa()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, xa()]
- "runtime_react_native_oi": "oi()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Yn()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-044.json

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
