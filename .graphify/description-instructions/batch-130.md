# Node Description Batch 131 of 150

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

- "runtime_edge_hr": "Hr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L13 | neighbors=[edge.js]
- "runtime_edge_ie": "Ie()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_ifundefined": "ifUndefined()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_ii": "ii()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js]
- "runtime_edge_inspect": "inspect()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_io": "io()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_jo": "jo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_js": "Js()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js]
- "runtime_edge_jt": "jt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_kl": "kl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_length": "length()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js]
- "runtime_edge_ll": "ll()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_middlewareargstorequestargs": "middlewareArgsToRequestArgs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js]
- "runtime_edge_ml": "Ml()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_nextid": "nextId()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L29 | neighbors=[edge.js]
- "runtime_edge_nl": "Nl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_ns": "ns()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_onbeforeexit": "onBeforeExit()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js]
- "runtime_edge_or": "Or()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js]
- "runtime_edge_pa": "Pa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_pc": "pc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_pl": "Pl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_ra": "Ra()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_re": "re()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_registernewerror": "registerNewError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_requestargstomiddlewareargs": "requestArgsToMiddlewareArgs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js]
- "runtime_edge_ri": "Ri()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_rs": "rs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_set": "set()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_sl": "sl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_statement": "statement()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_stop": "stop()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js]
- "runtime_edge_symbol_tostringtag": "[Symbol.toStringTag]()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_ti": "ti()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js]
- "runtime_edge_tl": "tl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_to": "To()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js]
- "runtime_edge_tographqlinputtype": "_toGraphQLInputType()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js]
- "runtime_edge_uc": "uc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_ui": "ui()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_ul": "ul()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-130.json

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
