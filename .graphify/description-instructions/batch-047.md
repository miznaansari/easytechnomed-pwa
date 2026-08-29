# Node Description Batch 48 of 150

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

- "runtime_react_native_single": "single()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, e()]
- "runtime_react_native_sql": "sql()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, get()]
- "runtime_react_native_ss": "ss()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, Zt()]
- "runtime_react_native_starttransaction": "startTransaction()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, transaction()]
- "runtime_react_native_stop": "stop()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, runInChildSpan()]
- "runtime_react_native_tp": "tp()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, logger()]
- "runtime_react_native_tu": "tu()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, slice()]
- "runtime_react_native_uc": "uc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, fo()]
- "runtime_react_native_unindent": "unindent()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, withIndent()]
- "runtime_react_native_up": "up()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, Fe()]
- "runtime_react_native_version": "version()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, instantiateLibrary()]
- "runtime_react_native_vi": "Vi()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, to()]
- "runtime_react_native_wc": "wc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, nr()]
- "runtime_react_native_writejoined": "writeJoined()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, write()]
- "runtime_react_native_ws": "ws()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L14 | neighbors=[react-native.js, ys()]
- "runtime_react_native_xc": "xc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, Qo()]
- "runtime_react_native_xl": "Xl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, Xi()]
- "runtime_react_native_xn": "Xn()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, slice()]
- "runtime_react_native_ys": "ys()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L14 | neighbors=[react-native.js, ws()]
- "runtime_react_native_ze": "ze()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, vs()]
- "runtime_react_native_zl": "zl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, Xi()]
- "runtime_react_native_zs": "Zs()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L74 | neighbors=[react-native.js, gp()]
- "runtime_wasm_a": "_a()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, ui()]
- "runtime_wasm_additem": "addItem()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, Xs()]
- "runtime_wasm_addmarginsymbol": "addMarginSymbol()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, write()]
- "runtime_wasm_al": "al()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L31 | neighbors=[wasm.js, io()]
- "runtime_wasm_allocunsafeslow": "allocUnsafeSlow()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, from()]
- "runtime_wasm_ar": "Ar()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, Ce()]
- "runtime_wasm_bo": "bo()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, en()]
- "runtime_wasm_bytelength": "byteLength()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, gr()]
- "runtime_wasm_construct": "construct()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, from()]
- "runtime_wasm_consumeerror": "consumeError()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, getExternalAdapterError()]
- "runtime_wasm_ea": "ea()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, tt()]
- "runtime_wasm_empty": "empty()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, e()]
- "runtime_wasm_en": "en()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, bo()]
- "runtime_wasm_enabled": "enabled()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, as()]
- "runtime_wasm_equals": "equals()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, It()]
- "runtime_wasm_et": "et()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ui()]
- "runtime_wasm_f": "F()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, indexOf()]
- "runtime_wasm_fa": "Fa()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, _i()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-047.json

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
