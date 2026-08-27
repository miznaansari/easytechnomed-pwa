# Node Description Batch 40 of 148

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

- "runtime_edge_json": "json()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, metrics()]
- "runtime_edge_kc": "kc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, kn()]
- "runtime_edge_kr": "Kr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, jc()]
- "runtime_edge_la": "La()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Sa()]
- "runtime_edge_lc": "lc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, ts()]
- "runtime_edge_ma": "Ma()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, mr()]
- "runtime_edge_mapqueryengineresult": "mapQueryEngineResult()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, unpack()]
- "runtime_edge_na": "Na()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Sa()]
- "runtime_edge_ni": "ni()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, ks()]
- "runtime_edge_ol": "ol()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Rt()]
- "runtime_edge_pn": "Pn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, yl()]
- "runtime_edge_prometheus": "prometheus()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, metrics()]
- "runtime_edge_qa": "qa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Sa()]
- "runtime_edge_ql": "ql()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ln()]
- "runtime_edge_qr": "qr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Vt()]
- "runtime_edge_removefield": "removeField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Au()]
- "runtime_edge_renderallmessages": "renderAllMessages()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, Nr()]
- "runtime_edge_requestbatch": "requestBatch()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, requestInternal()]
- "runtime_edge_rl": "rl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ce()]
- "runtime_edge_sanitizemessage": "sanitizeMessage()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, handleRequestError()]
- "runtime_edge_sc": "sc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, es()]
- "runtime_edge_single": "single()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, e()]
- "runtime_edge_sql": "sql()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, get()]
- "runtime_edge_ss": "ss()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, dc()]
- "runtime_edge_start": "start()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, url()]
- "runtime_edge_transaction": "transaction()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, withRetry()]
- "runtime_edge_unindent": "unindent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, withIndent()]
- "runtime_edge_url": "url()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, start()]
- "runtime_edge_uu": "uu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, st()]
- "runtime_edge_vl": "vl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, mo()]
- "runtime_edge_vo": "Vo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Ut()]
- "runtime_edge_vr": "vr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, yl()]
- "runtime_edge_writejoined": "writeJoined()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, write()]
- "runtime_edge_ws": "ws()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, r()]
- "runtime_edge_xa": "Xa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, enabled()]
- "runtime_edge_xc": "xc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, ms()]
- "runtime_edge_xs": "Xs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, handleRequestError()]
- "runtime_edge_yn": "yn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, fu()]
- "runtime_edge_ys": "ys()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, constructor()]
- "runtime_index_browser_ae": "Ae()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, e()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-039.json

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
