# Node Description Batch 10 of 150

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

- "runtime_edge_esm_getorcreate": "getOrCreate()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, getAllComputedFields(), getAllModelExtensions(), getAllQueryCallbacks(), get(), r()]
- "runtime_edge_esm_ispreviewfeatureon": "isPreviewFeatureOn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, An(), mu(), nu(), qo(), Ut()]
- "runtime_edge_esm_kr": "kr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, Dr(), hc(), renderAllMessages(), toString(), write()]
- "runtime_edge_esm_kt": "kt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, co(), mu(), uu(), wu(), yu()]
- "runtime_edge_esm_nestselection": "nestSelection()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, fu(), lu(), e(), findField(), u()]
- "runtime_edge_esm_ut": "Ut()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, Cn(), fu(), lu(), isPreviewFeatureOn(), qo()]
- "runtime_edge_esm_wa": "wa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, si(), be(), on(), rn(), Xr()]
- "runtime_edge_esm_withindent": "withIndent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, indent(), unindent(), write(), writeWithContents(), writeWithItems()]
- "runtime_edge_esm_yn": "yn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, hr(), me(), ne(), po(), S()]
- "runtime_edge_getdeepfield": "getDeepField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, cu(), getField(), getDeepFieldValue(), iu(), zc()]
- "runtime_edge_getdeepselectionparent": "getDeepSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, bu(), getFieldValue(), getSelectionParent(), xu(), yu()]
- "runtime_edge_getglobaltracinghelper": "getGlobalTracingHelper()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, createEngineSpan(), getActiveContext(), getTraceParent(), isEnabled(), runInChildSpan()]
- "runtime_edge_getorcreate": "getOrCreate()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, getAllComputedFields(), getAllModelExtensions(), getAllQueryCallbacks(), get(), r()]
- "runtime_edge_handlerequesterror": "handleRequestError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, handleAndLogRequestError(), Fr(), sanitizeMessage(), st(), Xs()]
- "runtime_edge_in": "In()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Gu(), getSelectionPath(), isPreviewFeatureOn(), throwValidationError(), ju()]
- "runtime_edge_ispreviewfeatureon": "isPreviewFeatureOn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, In(), u(), Uo(), Vt(), vu()]
- "runtime_edge_mt": "Mt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, Au(), cu(), ro(), xu(), yu()]
- "runtime_edge_nr": "Nr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Fr(), renderAllMessages(), toString(), write(), zc()]
- "runtime_edge_ru": "ru()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue(), markAsError()]
- "runtime_edge_sa": "Sa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Ba(), hi(), La(), Na(), qa()]
- "runtime_edge_tu": "tu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, addErrorMessage(), asObject(), getDeepSubSelectionValue(), getField(), markAsError()]
- "runtime_edge_u": "u()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, g(), getSelectionPath(), Gu(), isPreviewFeatureOn(), throwValidationError()]
- "runtime_edge_vt": "Vt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Gu(), ju(), qr(), isPreviewFeatureOn(), Uo()]
- "runtime_edge_we": "we()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Gu(), ju(), ps(), qu(), Uo()]
- "runtime_edge_withindent": "withIndent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, indent(), unindent(), write(), writeWithContents(), writeWithItems()]
- "runtime_edge_xe": "xe()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Aa(), on(), rn(), Ta(), va()]
- "runtime_library_dp": "dp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, addErrorMessage(), addSuggestion(), Fe(), removeAllFields(), wt()]
- "runtime_library_ed": "ed()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getSelectionPath(), isPreviewFeatureOn(), td(), throwValidationError(), mr()]
- "runtime_library_en": "en()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, renderAllMessages(), toString(), write(), Si(), Tc()]
- "runtime_library_fu": "Fu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, mt(), otherwise(), when(), with(), Lu()]
- "runtime_library_getdeepfield": "getDeepField()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, Bp(), getField(), getDeepFieldValue(), om(), _p()]
- "runtime_library_getdeepselectionparent": "getDeepSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, Fp(), getFieldValue(), getSelectionParent(), op(), _p()]
- "runtime_library_getglobaltracinghelper": "getGlobalTracingHelper()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, createEngineSpan(), getActiveContext(), getTraceParent(), isEnabled(), runInChildSpan()]
- "runtime_library_getorcreate": "getOrCreate()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getAllComputedFields(), getAllModelExtensions(), getAllQueryCallbacks(), get(), r()]
- "runtime_library_he": "He()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, K(), nn(), rr(), slice(), y()]
- "runtime_library_instantiatelibrary": "instantiateLibrary()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, constructor(), getCurrentBinaryTarget(), loadEngine(), Qn(), version()]
- "runtime_library_ip": "ip()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, addErrorMessage(), asObject(), getDeepSubSelectionValue(), getField(), markAsError()]
- "runtime_library_ir": "ir()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, Fp(), Hs(), op(), _p(), qp()]
- "runtime_library_ispreviewfeatureon": "isPreviewFeatureOn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, aa(), ed(), I(), mr(), td()]
- "runtime_library_ji": "ji()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getAllModelExtensions(), gr(), qd(), Se(), Vd()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-009.json

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
