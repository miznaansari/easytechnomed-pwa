# Node Description Batch 132 of 150

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

- "runtime_edge_un": "Un()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_use": "use()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js]
- "runtime_edge_version": "version()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js]
- "runtime_edge_vs": "vs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L8 | neighbors=[edge.js]
- "runtime_edge_wi": "wi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_wo": "wo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js]
- "runtime_edge_xl": "xl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_xt": "xt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L13 | neighbors=[edge.js]
- "runtime_edge_yi": "yi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_zl": "zl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_zo": "zo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_zu": "Zu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_index_browser_an": "an()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_bn": "bn()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_ce": "Ce()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_cn": "cn()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_d_args": "Args" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L4 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_config": "Config" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L27 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_constructor": "Constructor" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L20 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_decimal": "Decimal" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L40 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_exact": "Exact" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L286 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_getruntimeoutput": "GetRuntimeOutput" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L292 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_instance": "Instance" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L21 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_modulo": "Modulo" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L23 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_narrowable": "Narrowable" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L319 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_objectenumvalue": "ObjectEnumValue" | kind=code-symbol | neighbors=[NullTypesEnumValue]
- "runtime_index_browser_d_operation": "Operation" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L348 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_rounding": "Rounding" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L22 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_runtime": "Runtime" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L357 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_d_value": "Value" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.d.ts:L24 | neighbors=[index-browser.d.ts]
- "runtime_index_browser_dn": "dn()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_en": "En()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_fn": "fn()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_gn": "gn()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_he": "He()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_hn": "hn()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_in": "In()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_kn": "kn()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_me": "me()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]
- "runtime_index_browser_n": "n()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-131.json

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
