# Node Description Batch 46 of 150

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

- "runtime_library_yp": "Yp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, ta()]
- "runtime_library_zc": "zc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, As()]
- "runtime_react_native_additem": "addItem()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, Xu()]
- "runtime_react_native_addmarginsymbol": "addMarginSymbol()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, write()]
- "runtime_react_native_ai": "ai()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, di()]
- "runtime_react_native_an": "An()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, io()]
- "runtime_react_native_ap": "ap()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, vs()]
- "runtime_react_native_applypendingmigrations": "applyPendingMigrations()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, start()]
- "runtime_react_native_ar": "ar()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, getExternalAdapterError()]
- "runtime_react_native_as": "As()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L61 | neighbors=[react-native.js, Mt()]
- "runtime_react_native_bl": "bl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, k()]
- "runtime_react_native_bs": "bs()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L14 | neighbors=[react-native.js, ps()]
- "runtime_react_native_c": "_c()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, wo()]
- "runtime_react_native_cc": "cc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, fo()]
- "runtime_react_native_co": "co()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, rt()]
- "runtime_react_native_committransaction": "commitTransaction()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, transaction()]
- "runtime_react_native_consumeerror": "consumeError()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, getExternalAdapterError()]
- "runtime_react_native_cp": "cp()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, handleRequestError()]
- "runtime_react_native_cs": "cs()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, constructor()]
- "runtime_react_native_cu": "cu()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, k()]
- "runtime_react_native_da": "Da()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Aa()]
- "runtime_react_native_dl": "Dl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, de()]
- "runtime_react_native_empty": "empty()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, e()]
- "runtime_react_native_enabled": "enabled()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ll()]
- "runtime_react_native_ep": "ep()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, logger()]
- "runtime_react_native_fa": "Fa()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, xa()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-045.json

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
