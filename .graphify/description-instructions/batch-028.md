# Node Description Batch 29 of 150

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

- "runtime_edge_esm_oe": "Oe()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, me(), Y()]
- "runtime_edge_esm_pa": "Pa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, cr(), en()]
- "runtime_edge_esm_pi": "pi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ba(), Ra()]
- "runtime_edge_esm_pr": "Pr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, cl(), ll()]
- "runtime_edge_esm_propagateresponseextensions": "propagateResponseExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, createEngineSpan(), forEach()]
- "runtime_edge_esm_qe": "Qe()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, dc(), r()]
- "runtime_edge_esm_qn": "qn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L8 | neighbors=[edge-esm.js, Gt(), Es()]
- "runtime_edge_esm_rc": "rc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, ko(), ft()]
- "runtime_edge_esm_removeallfields": "removeAllFields()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, du(), pu()]
- "runtime_edge_esm_request": "request()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, handleAndLogRequestError(), requestInternal()]
- "runtime_edge_esm_requestbatch": "requestBatch()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, Lr(), requestInternal()]
- "runtime_edge_esm_ri": "ri()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ci(), l()]
- "runtime_edge_esm_rt": "rt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, cu(), getGlobalOmit()]
- "runtime_edge_esm_runinchildspan": "runInChildSpan()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, getGlobalTracingHelper(), uploadSchema()]
- "runtime_edge_esm_s": "S()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, v(), yn()]
- "runtime_edge_esm_setcolor": "setColor()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, write(), writeEmpty()]
- "runtime_edge_esm_shouldapplyglobalomit": "shouldApplyGlobalOmit()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, getGlobalOmit(), xe()]
- "runtime_edge_esm_st": "St()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, gn(), ke()]
- "runtime_edge_esm_su": "su()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, pn(), wo()]
- "runtime_edge_esm_ta": "Ta()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, cr(), wi()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-028.json

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
