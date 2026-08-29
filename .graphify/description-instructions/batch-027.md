# Node Description Batch 28 of 150

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

- "runtime_edge_es": "es()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, oc(), sc()]
- "runtime_edge_esm_a": "a()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, g(), l()]
- "runtime_edge_esm_ai": "ai()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ga(), tn()]
- "runtime_edge_esm_append": "append()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, e(), is()]
- "runtime_edge_esm_as": "as()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, Br(), isEmpty()]
- "runtime_edge_esm_bt": "bt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L25 | neighbors=[edge-esm.js, Ra(), T()]
- "runtime_edge_esm_buildcapturesettings": "buildCaptureSettings()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, build(), isEnabled()]
- "runtime_edge_esm_c": "$c()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, jr(), handleRequestError()]
- "runtime_edge_esm_ci": "ci()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, on(), ri()]
- "runtime_edge_esm_createenginespan": "createEngineSpan()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, getGlobalTracingHelper(), propagateResponseExtensions()]
- "runtime_edge_esm_do": "Do()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, he(), ko()]
- "runtime_edge_esm_ds": "ds()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, constructor(), toString()]
- "runtime_edge_esm_dt": "Dt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, e(), po()]
- "runtime_edge_esm_en": "en()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Pa(), ui()]
- "runtime_edge_esm_fi": "fi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, gi(), hi()]
- "runtime_edge_esm_foreach": "forEach()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, emit(), propagateResponseExtensions()]
- "runtime_edge_esm_g": "g()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, a(), u()]
- "runtime_edge_esm_gc": "gc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, Ve(), Gt()]
- "runtime_edge_esm_getallclientextensions": "getAllClientExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, get(), Gt()]
- "runtime_edge_esm_getallmodelextensions": "getAllModelExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, getOrCreate(), N()]
- "runtime_edge_esm_getallquerycallbacks": "getAllQueryCallbacks()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, getOrCreate(), ps()]
- "runtime_edge_esm_getsubselectionvalue": "getSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, getDeepSubSelectionValue(), getSelectionParent()]
- "runtime_edge_esm_gettraceparent": "getTraceParent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, build(), getGlobalTracingHelper()]
- "runtime_edge_esm_gi": "gi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, fi(), write()]
- "runtime_edge_esm_gs": "Gs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, qc(), unpack()]
- "runtime_edge_esm_he": "he()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, dc(), Do()]
- "runtime_edge_esm_hi": "hi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, fi(), write()]
- "runtime_edge_esm_hr": "hr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ul(), yn()]
- "runtime_edge_esm_ia": "Ia()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ba(), Zc()]
- "runtime_edge_esm_ic": "ic()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, ft(), zo()]
- "runtime_edge_esm_indentedcurrentline": "indentedCurrentLine()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, newLine(), toString()]
- "runtime_edge_esm_it": "It()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, zl(), unpack()]
- "runtime_edge_esm_jt": "jt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, Gt(), N()]
- "runtime_edge_esm_l": "l()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, a(), ri()]
- "runtime_edge_esm_li": "li()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, si(), ya()]
- "runtime_edge_esm_makerequired": "makeRequired()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, mu(), wu()]
- "runtime_edge_esm_metrics": "metrics()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, json(), prometheus()]
- "runtime_edge_esm_ne": "ne()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, bl(), yn()]
- "runtime_edge_esm_newline": "newLine()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, indentedCurrentLine(), writeLine()]
- "runtime_edge_esm_no": "No()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, values(), u()]

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
