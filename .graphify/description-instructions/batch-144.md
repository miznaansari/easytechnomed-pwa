# Node Description Batch 145 of 150

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

- "runtime_react_native_wl": "wl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]
- "runtime_react_native_yi": "yi()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_yl": "yl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]
- "runtime_react_native_yo": "yo()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L9 | neighbors=[react-native.js]
- "runtime_react_native_yr": "Yr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_zo": "zo()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_wasm_an": "an()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_applypendingmigrations": "applyPendingMigrations()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js]
- "runtime_wasm_ca": "ca()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_debugpanic": "debugPanic()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js]
- "runtime_wasm_deref": "deref()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_disable": "disable()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_dispatchbatches": "dispatchBatches()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_do": "Do()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L31 | neighbors=[wasm.js]
- "runtime_wasm_enable": "enable()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_fe": "fe()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_fn": "fn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_getlocation": "getLocation()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js]
- "runtime_wasm_gn": "gn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_has": "has()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_hn": "hn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_ho": "ho()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_ifundefined": "ifUndefined()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_jo": "Jo()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_jr": "jr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_jt": "Jt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js]
- "runtime_wasm_k": "K()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_ki": "ki()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js]
- "runtime_wasm_length": "length()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_mi": "Mi()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js]
- "runtime_wasm_middlewareargstorequestargs": "middlewareArgsToRequestArgs()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_mo": "Mo()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L30 | neighbors=[wasm.js]
- "runtime_wasm_nextid": "nextId()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L30 | neighbors=[wasm.js]
- "runtime_wasm_nr": "Nr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_o": "_o()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L30 | neighbors=[wasm.js]
- "runtime_wasm_offset": "offset()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_onbeforeexit": "onBeforeExit()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js]
- "runtime_wasm_pn": "pn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_po": "po()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_qo": "Qo()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-144.json

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
