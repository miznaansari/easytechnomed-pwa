# Node Description Batch 40 of 150

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

- "runtime_edge_esm_nc": "nc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, ko()]
- "runtime_edge_esm_nl": "Nl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, co()]
- "runtime_edge_esm_nr": "nr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L11 | neighbors=[edge-esm.js, wt()]
- "runtime_edge_esm_oa": "Oa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ba()]
- "runtime_edge_esm_oc": "oc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, zo()]
- "runtime_edge_esm_ol": "Ol()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ln()]
- "runtime_edge_esm_ou": "ou()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, iu()]
- "runtime_edge_esm_pn": "pn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, su()]
- "runtime_edge_esm_prometheus": "prometheus()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, metrics()]
- "runtime_edge_esm_qc": "qc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, Gs()]
- "runtime_edge_esm_ql": "ql()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, O()]
- "runtime_edge_esm_qr": "qr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, wo()]
- "runtime_edge_esm_removefield": "removeField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, wu()]
- "runtime_edge_esm_renderallmessages": "renderAllMessages()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, kr()]
- "runtime_edge_esm_sa": "Sa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ba()]
- "runtime_edge_esm_sanitizemessage": "sanitizeMessage()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, handleRequestError()]
- "runtime_edge_esm_single": "single()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, e()]
- "runtime_edge_esm_sl": "Sl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, O()]
- "runtime_edge_esm_sn": "Sn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, ju()]
- "runtime_edge_esm_sql": "sql()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, get()]
- "runtime_edge_esm_start": "start()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, url()]
- "runtime_edge_esm_transaction": "transaction()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, withRetry()]
- "runtime_edge_esm_ts": "ts()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, uc()]
- "runtime_edge_esm_unindent": "unindent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, withIndent()]
- "runtime_edge_esm_url": "url()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, start()]
- "runtime_edge_esm_va": "va()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, cr()]
- "runtime_edge_esm_vc": "Vc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, handleRequestError()]
- "runtime_edge_esm_vs": "vs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L11 | neighbors=[edge-esm.js, Cc()]
- "runtime_edge_esm_wc": "wc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, ls()]
- "runtime_edge_esm_writejoined": "writeJoined()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, write()]
- "runtime_edge_esm_wt": "wt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L11 | neighbors=[edge-esm.js, nr()]
- "runtime_edge_esm_xa": "xa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, on()]
- "runtime_edge_esm_xl": "xl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, O()]
- "runtime_edge_esm_xs": "xs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L11 | neighbors=[edge-esm.js, constructor()]
- "runtime_edge_esm_yl": "yl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, xe()]
- "runtime_edge_esm_zc": "Zc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L30 | neighbors=[edge-esm.js, Ia()]
- "runtime_edge_esm_zl": "zl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, It()]
- "runtime_edge_fa": "Fa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, hi()]
- "runtime_edge_getactivecontext": "getActiveContext()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, getGlobalTracingHelper()]
- "runtime_edge_getallbatchquerycallbacks": "getAllBatchQueryCallbacks()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, get()]

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
