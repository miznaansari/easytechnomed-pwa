# Node Description Batch 130 of 150

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

- "runtime_edge_esm_qa": "qa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_re": "re()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_registernewerror": "registerNewError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js]
- "runtime_edge_esm_requestargstomiddlewareargs": "requestArgsToMiddlewareArgs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js]
- "runtime_edge_esm_rl": "Rl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_ro": "ro()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_rs": "rs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js]
- "runtime_edge_esm_sc": "sc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js]
- "runtime_edge_esm_set": "set()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js]
- "runtime_edge_esm_sr": "Sr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js]
- "runtime_edge_esm_statement": "statement()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js]
- "runtime_edge_esm_stop": "stop()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js]
- "runtime_edge_esm_symbol_tostringtag": "[Symbol.toStringTag]()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_tl": "tl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_tographqlinputtype": "_toGraphQLInputType()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js]
- "runtime_edge_esm_un": "un()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_use": "use()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js]
- "runtime_edge_esm_version": "version()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js]
- "runtime_edge_esm_vi": "vi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_vl": "vl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_vo": "vo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js]
- "runtime_edge_esm_vt": "Vt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js]
- "runtime_edge_esm_we": "we()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js]
- "runtime_edge_esm_wl": "wl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_ws": "ws()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L8 | neighbors=[edge-esm.js]
- "runtime_edge_esm_xi": "xi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_xn": "xn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js]
- "runtime_edge_esm_yo": "yo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js]
- "runtime_edge_esm_ys": "ys()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js]
- "runtime_edge_esm_za": "Za()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_fe": "Fe()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_fl": "Fl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_fn": "fn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_getlocation": "getLocation()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_gl": "Gl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_gn": "gn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_ha": "Ha()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_has": "has()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js]
- "runtime_edge_hc": "hc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_ho": "ho()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-129.json

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
