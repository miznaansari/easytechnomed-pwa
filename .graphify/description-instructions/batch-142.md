# Node Description Batch 143 of 150

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

- "runtime_react_native_bc": "Bc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_react_native_ce": "Ce()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js]
- "runtime_react_native_cl": "cl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_connect": "connect()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js]
- "runtime_react_native_dc": "Dc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_react_native_debugpanic": "debugPanic()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js]
- "runtime_react_native_deref": "deref()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_disable": "disable()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_disconnect": "disconnect()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js]
- "runtime_react_native_dispatchbatches": "dispatchBatches()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js]
- "runtime_react_native_dmmf": "dmmf()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js]
- "runtime_react_native_dn": "Dn()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_react_native_ds": "ds()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_react_native_enable": "enable()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_es": "es()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_react_native_eu": "eu()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]
- "runtime_react_native_fl": "Fl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]
- "runtime_react_native_ga": "ga()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_gi": "gi()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_go": "Go()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_react_native_gs": "gs()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_react_native_has": "has()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js]
- "runtime_react_native_hi": "hi()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_hl": "hl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]
- "runtime_react_native_hs": "hs()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L14 | neighbors=[react-native.js]
- "runtime_react_native_ifundefined": "ifUndefined()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js]
- "runtime_react_native_il": "Il()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]
- "runtime_react_native_in": "In()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js]
- "runtime_react_native_inspect": "inspect()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js]
- "runtime_react_native_ja": "ja()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_je": "Je()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js]
- "runtime_react_native_ji": "Ji()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]
- "runtime_react_native_jl": "jl()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]
- "runtime_react_native_jn": "Jn()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js]
- "runtime_react_native_jr": "jr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L62 | neighbors=[react-native.js]
- "runtime_react_native_js": "js()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js]
- "runtime_react_native_kn": "Kn()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js]
- "runtime_react_native_ko": "Ko()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js]
- "runtime_react_native_kt": "Kt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js]
- "runtime_react_native_lastlinenumber": "lastLineNumber()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-142.json

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
