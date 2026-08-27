# Node Description Batch 28 of 148

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

- "runtime_edge_esm_text": "text()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, dc(), tc()]
- "runtime_edge_esm_uploadschema": "uploadSchema()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, handleError(), runInChildSpan()]
- "runtime_edge_esm_ze": "ze()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Da(), Pt()]
- "runtime_edge_esm_zo": "zo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, ic(), oc()]
- "runtime_edge_extracthostandapikey": "extractHostAndApiKey()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, get(), yt()]
- "runtime_edge_foreach": "forEach()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, emit(), propagateResponseExtensions()]
- "runtime_edge_fu": "fu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, bo(), yn()]
- "runtime_edge_g": "g()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, a(), u()]
- "runtime_edge_gc": "gc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, ye(), N()]
- "runtime_edge_getallclientextensions": "getAllClientExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, get(), Qt()]
- "runtime_edge_getallmodelextensions": "getAllModelExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, getOrCreate(), N()]
- "runtime_edge_getallquerycallbacks": "getAllQueryCallbacks()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, getOrCreate(), hs()]
- "runtime_edge_getsubselectionvalue": "getSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, getDeepSubSelectionValue(), getSelectionParent()]
- "runtime_edge_gettraceparent": "getTraceParent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, build(), getGlobalTracingHelper()]
- "runtime_edge_gi": "gi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ai(), ln()]
- "runtime_edge_go": "go()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ce(), ro()]
- "runtime_edge_gt": "gt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, cs(), rc()]
- "runtime_edge_hi": "hi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Fa(), Sa()]
- "runtime_edge_indentedcurrentline": "indentedCurrentLine()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, newLine(), toString()]
- "runtime_edge_jc": "jc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, Kr(), Pe()]
- "runtime_edge_ka": "ka()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ja(), mr()]
- "runtime_edge_kn": "kn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, kc(), ku()]
- "runtime_edge_ks": "ks()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, Fc(), ni()]
- "runtime_edge_kt": "kt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ke(), xn()]
- "runtime_edge_ls": "ls()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, Bs(), toString()]
- "runtime_edge_lu": "Lu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Do(), addItem()]
- "runtime_edge_makerequired": "makeRequired()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, Au(), xu()]
- "runtime_edge_metrics": "metrics()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, json(), prometheus()]
- "runtime_edge_mi": "mi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Ca(), pi()]
- "runtime_edge_newline": "newLine()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, indentedCurrentLine(), writeLine()]
- "runtime_edge_nn": "nn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, fi(), Oa()]
- "runtime_edge_oa": "Oa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, mr(), nn()]
- "runtime_edge_oc": "oc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, es(), ht()]
- "runtime_edge_oe": "Oe()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, me(), Y()]
- "runtime_edge_propagateresponseextensions": "propagateResponseExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, createEngineSpan(), forEach()]
- "runtime_edge_ps": "ps()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, jr(), we()]
- "runtime_edge_qe": "Qe()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, Fc(), r()]
- "runtime_edge_removeallfields": "removeAllFields()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, bu(), eu()]
- "runtime_edge_request": "request()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, handleAndLogRequestError(), requestInternal()]
- "runtime_edge_runinchildspan": "runInChildSpan()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, getGlobalTracingHelper(), uploadSchema()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-027.json

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
