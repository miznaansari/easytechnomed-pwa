# Node Description Batch 29 of 148

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

- "runtime_edge_shouldapplyglobalomit": "shouldApplyGlobalOmit()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, getGlobalOmit(), Pe()]
- "runtime_edge_t": "T()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, on(), pi()]
- "runtime_edge_text": "text()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Fc(), rc()]
- "runtime_edge_tr": "Tr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, hl(), wl()]
- "runtime_edge_ts": "ts()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, ac(), lc()]
- "runtime_edge_uploadschema": "uploadSchema()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, handleError(), runInChildSpan()]
- "runtime_edge_ut": "Ut()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, constructor(), Vo()]
- "runtime_edge_va": "va()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, di(), xe()]
- "runtime_edge_vi": "vi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Da(), fi()]
- "runtime_edge_wc": "wc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, Qt(), Ve()]
- "runtime_edge_wr": "wr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, vn(), yl()]
- "runtime_edge_xi": "xi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Ei(), write()]
- "runtime_edge_ye": "ye()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, gc(), no()]
- "runtime_edge_ze": "ze()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Tt(), Ua()]
- "runtime_edge_zs": "zs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, unpack(), He()]
- "runtime_index_browser_constructor": "constructor()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, _getName(), _getNamespace()]
- "runtime_index_browser_fe": "fe()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, sn(), un()]
- "runtime_index_browser_ie": "ie()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, ke(), on()]
- "runtime_index_browser_u": "U()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, F(), O()]
- "runtime_index_browser_ue": "ue()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, on(), e()]
- "runtime_index_browser_ve": "Ve()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, F(), ke()]
- "runtime_index_browser_x": "x()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, B(), Ee()]
- "runtime_library_append": "append()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, e(), Ia()]
- "runtime_library_bu": "Bu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L6 | neighbors=[library.js, e(), qr()]
- "runtime_library_buildcapturesettings": "buildCaptureSettings()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, build(), isEnabled()]
- "runtime_library_ci": "ci()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js, slice(), oc()]
- "runtime_library_d_driveradapter": "DriverAdapter" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L875 | neighbors=[_d(), Queryable, ErrorCapturingDriverAdapter]
- "runtime_library_d_errorwithbatchindex": "ErrorWithBatchIndex" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1208 | neighbors=[_d(), PrismaClientKnownRequestError, PrismaClientUnknownRequestError]
- "runtime_library_d_prismaclientknownrequesterror": "PrismaClientKnownRequestError" | kind=code-symbol | neighbors=[_d(), NotFoundError, ErrorWithBatchIndex]
- "runtime_library_dn": "Dn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L43 | neighbors=[library.js, ha(), Ja()]
- "runtime_library_empty": "empty()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[index.js, library.js, e()]
- "runtime_library_foreach": "forEach()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, oc(), propagateResponseExtensions()]
- "runtime_library_fromcontent": "fromContent()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, e(), read()]
- "runtime_library_getallclientextensions": "getAllClientExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, get(), Yr()]
- "runtime_library_getallmodelextensions": "getAllModelExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getOrCreate(), ji()]
- "runtime_library_getallquerycallbacks": "getAllQueryCallbacks()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getOrCreate(), na()]
- "runtime_library_getcurrentbinarytarget": "getCurrentBinaryTarget()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, nt(), instantiateLibrary()]
- "runtime_library_getlocation": "getLocation()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, ya(), wp()]
- "runtime_library_getsubselectionvalue": "getSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, getDeepSubSelectionValue(), getSelectionParent()]
- "runtime_library_gettraceparent": "getTraceParent()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, build(), getGlobalTracingHelper()]

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
