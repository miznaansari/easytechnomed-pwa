# Node Description Batch 9 of 148

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
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "runtime_wasm_ra": "ra()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, getSelectionPath(), isPreviewFeatureOn(), na(), sa(), throwValidationError()]
- "runtime_wasm_ui": "ui()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, sa(), _a(), et(), ge(), getAllComputedFields()]
- "runtime_wasm_vs": "Vs()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, t(), addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue()]
- "runtime_wasm_withindent": "withIndent()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, indent(), t(), unindent(), write(), writeWithContents()]
- "runtime_wasm_xt": "xt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ia(), sa(), fi(), isPreviewFeatureOn(), ra()]
- "runtime_wasm_y": "Y()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, readIntBE(), readIntLE(), readUIntBE(), readUIntLE(), writeUIntBE()]
- "scratch_test_formula_calc": "test-formula-calc.js" | kind=code-symbol | source=scratch/test-formula-calc.js:L1 | neighbors=[252e194 e, checkFormulaDependencies(), evaluateExpression(), resF, resM, valuesFemale]
- "scratch_test_pdf_customization": "test-pdf-customization.mjs" | kind=code-symbol | source=scratch/test-pdf-customization.mjs:L1 | neighbors=[252e194 e, computeColumnLayout(), DEFAULT_COLUMNS, getFontFamilyDefinitions(), hexToRgb(), PDF_THEME_PRESETS]
- "scratch_test_reg_17": "test-reg-17.js" | kind=code-symbol | source=scratch/test-reg-17.js:L1 | neighbors=[252e194 e, addValueToValuesMap(), checkFormulaDependencies(), evaluateExpression(), inputValues, regPayload]
- "ui_card": "Card.js" | kind=code-symbol | source=components/ui/Card.js:L1 | neighbors=[252e194 e, Card(), CardContent(), CardDescription(), CardFooter(), CardHeader()]
- "ui_table": "Table.js" | kind=code-symbol | source=components/ui/Table.js:L1 | neighbors=[252e194 e, Table(), TableBody(), TableCell(), TableHead(), TableHeader()]
- "app_layout": "layout.js" | kind=code-symbol | source=app/layout.js:L1 | neighbors=[metadata, outfit, RootLayout(), viewport, 252e194 e, 2b2534c f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@4d7570f34d922bf4ce09e2e9653537c79141d117": "4d7570f fixed" | kind=Commit | source=git | neighbors=[offlineAuth.js, main, 7ec76ba 2.0.12, clientAuth.js, LoginPageClient.js, 5ff2734 2.0.11]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@bcee6c81e72a8453b6902e188d64625b1f3bda36": "bcee6c8 fi" | kind=Commit | source=git | neighbors=[main, cfa3879 f, AdminLayoutClient.js, layout.js, LoginPageClient.js, e9caab3 2.0.15]
- "component_differentialcounttracker": "DifferentialCountTracker.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L1 | neighbors=[252e194 e, calculateDifferentialSummary(), DifferentialHeaderBadge(), DLC_DEFINITIONS, isDifferentialHeader(), validateDifferentialOnSave()]
- "doctors_route": "route.js" | kind=code-symbol | source=app/api/doctors/route.js:L1 | neighbors=[252e194 e, DELETE(), GET(), POST(), PUT(), serializeData()]
- "generated_client_edge": "edge.js" | kind=code-symbol | source=scratch/generated-client/edge.js:L1 | neighbors=[252e194 e, config, Prisma, PrismaClient, {
  PrismaClientKnownRequestError,
  Pr…, empty()]
- "lib_pdftheme": "pdfTheme.js" | kind=code-symbol | source=lib/pdfTheme.js:L1 | neighbors=[252e194 e, computeColumnLayout(), DEFAULT_COLUMNS, getFontFamilyDefinitions(), hexToRgb(), PDF_THEME_PRESETS]
- "offline_syncindicator": "SyncIndicator.jsx" | kind=code-symbol | source=components/offline/SyncIndicator.jsx:L1 | neighbors=[2b2534c f, 9f59247 expire token, d446d11 fixed code, d84f15f f, f3857f9 f, SyncIndicator()]
- "pdf_route": "route.js" | kind=code-symbol | source=app/api/settings/pdf/route.js:L1 | neighbors=[252e194 e, f3857f9 f, DEFAULT_COLUMN_ORDER, DEFAULT_PDF_SETTINGS, GET(), POST()]
- "providers_offlineprovider": "OfflineProvider.jsx" | kind=code-symbol | source=components/providers/OfflineProvider.jsx:L1 | neighbors=[2b2534c f, 7d8c494 fxed, 84a8ff2 full indexeddb based, 9e25c19 f, 9f59247 expire token, OfflineProvider()]
- "proxy": "proxy.js" | kind=code-symbol | source=proxy.js:L1 | neighbors=[252e194 e, 5e3d9ef d, c070c55 fixed, config, JWT_SECRET, proxy()]
- "runtime_edge_constructor": "constructor()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, get(), _getName(), _getNamespace(), Ut(), ys()]
- "runtime_edge_esm_be": "be()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ga(), ha(), tn(), wa(), Xr()]
- "runtime_edge_esm_dr": "Dr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, kr(), ot(), Tr(), handleRequestError(), throwValidationError()]
- "runtime_edge_esm_du": "du()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, cu(), addErrorMessage(), getDeepSelectionParent(), isEmpty(), removeAllFields()]
- "runtime_edge_esm_getdeepfield": "getDeepField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, getField(), getDeepFieldValue(), hc(), xu(), yu()]
- "runtime_edge_esm_getdeepselectionparent": "getDeepSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, du(), getFieldValue(), getSelectionParent(), mu(), uu()]
- "runtime_edge_esm_getglobaltracinghelper": "getGlobalTracingHelper()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, createEngineSpan(), getActiveContext(), getTraceParent(), isEnabled(), runInChildSpan()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-008.json

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
