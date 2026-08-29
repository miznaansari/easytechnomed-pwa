# Node Description Batch 39 of 150

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

- "runtime_edge_ep": "ep()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L30 | neighbors=[edge.js, Ua()]
- "runtime_edge_esm_aa": "Aa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ba()]
- "runtime_edge_esm_additem": "addItem()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, iu()]
- "runtime_edge_esm_addmarginsymbol": "addMarginSymbol()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, write()]
- "runtime_edge_esm_bl": "bl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ne()]
- "runtime_edge_esm_bs": "bs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L11 | neighbors=[edge-esm.js, withRetry()]
- "runtime_edge_esm_ca": "Ca()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, cr()]
- "runtime_edge_esm_cc": "Cc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L11 | neighbors=[edge-esm.js, vs()]
- "runtime_edge_esm_cn": "Cn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, Ut()]
- "runtime_edge_esm_cs": "cs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, ps()]
- "runtime_edge_esm_ct": "Ct()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ss()]
- "runtime_edge_esm_di": "di()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, yi()]
- "runtime_edge_esm_el": "el()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ce()]
- "runtime_edge_esm_empty": "empty()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, e()]
- "runtime_edge_esm_enabled": "enabled()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ga()]
- "runtime_edge_esm_eo": "eo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, mo()]
- "runtime_edge_esm_es": "Es()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L8 | neighbors=[edge-esm.js, qn()]
- "runtime_edge_esm_et": "Et()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L13 | neighbors=[edge-esm.js, ks()]
- "runtime_edge_esm_extracthostandapikey": "extractHostAndApiKey()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, get()]
- "runtime_edge_esm_fl": "fl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, co()]
- "runtime_edge_esm_getactivecontext": "getActiveContext()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, getGlobalTracingHelper()]
- "runtime_edge_esm_getallbatchquerycallbacks": "getAllBatchQueryCallbacks()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, get()]
- "runtime_edge_esm_getcurrentlinelength": "getCurrentLineLength()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, write()]
- "runtime_edge_esm_getfields": "getFields()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, vu()]
- "runtime_edge_esm_getnamespace": "_getNamespace()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, constructor()]
- "runtime_edge_esm_getoutputtypedescription": "getOutputTypeDescription()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, fu()]
- "runtime_edge_esm_getprintwidth": "getPrintWidth()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, values()]
- "runtime_edge_esm_h": "h()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, v()]
- "runtime_edge_esm_handleerror": "handleError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, uploadSchema()]
- "runtime_edge_esm_hn": "hn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ul()]
- "runtime_edge_esm_hs": "Hs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, uc()]
- "runtime_edge_esm_indent": "indent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, withIndent()]
- "runtime_edge_esm_israwaction": "isRawAction()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, nu()]
- "runtime_edge_esm_jr": "jr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, $c()]
- "runtime_edge_esm_json": "json()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, metrics()]
- "runtime_edge_esm_ju": "ju()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, Sn()]
- "runtime_edge_esm_ka": "ka()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ba()]
- "runtime_edge_esm_kl": "kl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, O()]
- "runtime_edge_esm_ks": "ks()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L13 | neighbors=[edge-esm.js, Et()]
- "runtime_edge_esm_ln": "ln()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Ol()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-038.json

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
