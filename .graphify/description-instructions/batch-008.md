# Node Description Batch 9 of 150

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
Write every description in Portuguese (pt). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "runtime_wasm_ds": "ds()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, at(), addErrorMessage(), ei(), getDeepSelectionParent(), isEmpty()]
- "runtime_wasm_fill": "fill()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, alloc(), from(), nn(), slice(), V()]
- "runtime_wasm_getselectionpath": "getSelectionPath()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, aa(), di(), Dr(), fi(), ia()]
- "runtime_wasm_gs": "gs()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue(), getFields()]
- "runtime_wasm_ispreviewfeatureon": "isPreviewFeatureOn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, Dr(), fi(), includes(), na(), ra()]
- "runtime_wasm_it": "It()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, compare(), equals(), ae(), D(), slice()]
- "runtime_wasm_ms": "Ms()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, addErrorMessage(), asObject(), getDeepSubSelectionValue(), getField(), markAsError()]
- "runtime_wasm_nestselection": "nestSelection()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ia(), concat(), e(), findField(), oa()]
- "runtime_wasm_ns": "Ns()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, addErrorMessage(), ei(), Ks(), markAsError(), ti()]
- "runtime_wasm_oi": "oi()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, addField(), Pa(), si(), t(), va()]
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
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@4d7570f34d922bf4ce09e2e9653537c79141d117": "4d7570f fixed" | kind=Commit | source=git | neighbors=[offlineAuth.js, main, 7ec76ba 2.0.12, clientAuth.js, LoginPageClient.js, 5ff2734 2.0.11]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@6812ab9e9aa4366d92085aae7d5357b3d2acc99d": "6812ab9 new ui dashboard" | kind=Commit | source=git | neighbors=[main, 44ad6b2 new ui dashboard, DashboardCharts.js, page.js, RangeSelector.js, 9d71afc 3.0.22]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@a712d0ec90e4494b2f72928b5f7b27f9e8b414d8": "a712d0e ios issue pwa" | kind=Commit | source=git | neighbors=[20dc303 3.0.19, layout.js, main, a09f0a9 3.0.21, PWARegister.js, Input.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@b5dedb0193beae683457aa771ab1058ec8687da3": "b5dedb0 f" | kind=Commit | source=git | neighbors=[main, c41a815 3.0.11, SyncIndicator.jsx, OfflineProvider.jsx, syncManager.js, c82cfd7 3.0.10]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@bcee6c81e72a8453b6902e188d64625b1f3bda36": "bcee6c8 fi" | kind=Commit | source=git | neighbors=[main, cfa3879 f, AdminLayoutClient.js, layout.js, LoginPageClient.js, e9caab3 2.0.15]
- "component_differentialcounttracker": "DifferentialCountTracker.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L1 | neighbors=[252e194 e, calculateDifferentialSummary(), DifferentialHeaderBadge(), DLC_DEFINITIONS, isDifferentialHeader(), validateDifferentialOnSave()]
- "doctors_route": "route.js" | kind=code-symbol | source=app/api/doctors/route.js:L1 | neighbors=[252e194 e, DELETE(), GET(), POST(), PUT(), serializeData()]
- "generated_client_edge": "edge.js" | kind=code-symbol | source=scratch/generated-client/edge.js:L1 | neighbors=[252e194 e, config, Prisma, PrismaClient, {
  PrismaClientKnownRequestError,
  Pr…, empty()]
- "lib_pdftheme": "pdfTheme.js" | kind=code-symbol | source=lib/pdfTheme.js:L1 | neighbors=[252e194 e, computeColumnLayout(), DEFAULT_COLUMNS, getFontFamilyDefinitions(), hexToRgb(), PDF_THEME_PRESETS]
- "lib_reportsecurity": "reportSecurity.js" | kind=code-symbol | source=lib/reportSecurity.js:L1 | neighbors=[6c2dfe4 test, decryptReportToken(), deriveBufferKey(), generateReportToken(), getKeyRing(), verifyReportToken()]
- "pdf_route": "route.js" | kind=code-symbol | source=app/api/settings/pdf/route.js:L1 | neighbors=[252e194 e, f3857f9 f, DEFAULT_COLUMN_ORDER, DEFAULT_PDF_SETTINGS, GET(), POST()]
- "proxy": "proxy.js" | kind=code-symbol | source=proxy.js:L1 | neighbors=[252e194 e, 5e3d9ef d, c070c55 fixed, config, JWT_SECRET, proxy()]
- "runtime_edge_constructor": "constructor()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, get(), _getName(), _getNamespace(), Ut(), ys()]
- "runtime_edge_esm_be": "be()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ga(), ha(), tn(), wa(), Xr()]
- "runtime_edge_esm_dr": "Dr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, kr(), ot(), Tr(), handleRequestError(), throwValidationError()]
- "runtime_edge_esm_du": "du()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, cu(), addErrorMessage(), getDeepSelectionParent(), isEmpty(), removeAllFields()]
- "runtime_edge_esm_getdeepfield": "getDeepField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, getField(), getDeepFieldValue(), hc(), xu(), yu()]
- "runtime_edge_esm_getdeepselectionparent": "getDeepSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, du(), getFieldValue(), getSelectionParent(), mu(), uu()]
- "runtime_edge_esm_getglobaltracinghelper": "getGlobalTracingHelper()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, createEngineSpan(), getActiveContext(), getTraceParent(), isEnabled(), runInChildSpan()]

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
