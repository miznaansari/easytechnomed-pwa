# Node Description Batch 17 of 148

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

- "context_offlinesynccontext": "OfflineSyncContext.js" | kind=code-symbol | source=context/OfflineSyncContext.js:L1 | neighbors=[2b2534c f, 9f59247 expire token, OfflineSyncContext, useOfflineSync()]
- "customer_layout": "layout.jsx" | kind=code-symbol | source=app/(customer)/layout.jsx:L1 | neighbors=[252e194 e, 5e3d9ef d, CustomerLayout(), theme]
- "dashboard_error": "error.js" | kind=code-symbol | source=app/(customer)/(dashboard)/error.js:L1 | neighbors=[5e3d9ef d, cf2bb98 new, eb8b1e5 f, DashboardErrorBoundary()]
- "doctors_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/doctors/route.js:L6 | neighbors=[route.js, GET(), POST(), PUT()]
- "generated_client_index_browser": "index-browser.js" | kind=code-symbol | source=scratch/generated-client/index-browser.js:L1 | neighbors=[252e194 e, {
  Decimal,
  objectEnumValues,
  make…, Prisma, PrismaClient]
- "generated_client_wasm": "wasm.js" | kind=code-symbol | source=scratch/generated-client/wasm.js:L1 | neighbors=[252e194 e, {
  Decimal,
  objectEnumValues,
  make…, Prisma, PrismaClient]
- "hooks_useofflinedata": "useOfflineData.js" | kind=code-symbol | source=hooks/useOfflineData.js:L1 | neighbors=[2b2534c f, useOfflineData(), useSync.js, useSync()]
- "hooks_usesync": "useSync.js" | kind=code-symbol | source=hooks/useSync.js:L1 | neighbors=[2b2534c f, 9f59247 expire token, useOfflineData.js, useSync()]
- "lib_firebase": "firebase.js" | kind=code-symbol | source=lib/firebase.js:L1 | neighbors=[252e194 e, auth, firebaseConfig, googleProvider]
- "lib_formulautils_checkformuladependencies": "checkFormulaDependencies()" | kind=code-symbol | source=lib/formulaUtils.js:L422 | neighbors=[formulaEngine.js, formulaUtils.js, calculateAllDependents(), test-formula-verification.mjs]
- "lib_formulautils_evaluateexpression": "evaluateExpression()" | kind=code-symbol | source=lib/formulaUtils.js:L332 | neighbors=[formulaEngine.js, formulaUtils.js, calculateAllDependents(), test-formula-verification.mjs]
- "lib_saasinvoice": "saasInvoice.js" | kind=code-symbol | source=lib/saasInvoice.js:L1 | neighbors=[252e194 e, decodePaymentUid(), encodePaymentUid(), KEY]
- "login_page": "page.js" | kind=code-symbol | source=app/(customer)/auth/login/page.js:L1 | neighbors=[252e194 e, LoginPageClient.js, metadata, Page()]
- "members_route": "route.js" | kind=code-symbol | source=app/api/members/route.js:L1 | neighbors=[252e194 e, GET(), PATCH(), POST()]
- "offline_offlinepdfgenerator_generatereportpdfoffline": "generateReportPdfOffline()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L271 | neighbors=[offlinePdfGenerator.js, layoutMarkdownLines(), parseMarkdownTokens(), offlinePrint.js]
- "offline_syncstatusicon": "SyncStatusIcon.jsx" | kind=code-symbol | source=components/offline/SyncStatusIcon.jsx:L1 | neighbors=[2b2534c f, 6fcf015 f, d446d11 fixed code, SyncStatusIcon()]
- "parameters_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/parameters/route.js:L1 | neighbors=[252e194 e, GET(), POST(), serializeRegistration()]
- "paymentid_route_get": "GET()" | kind=code-symbol | source=app/api/print-subscription-invoice/[paymentId]/route.js:L74 | neighbors=[route.js, formatDate(), formatDateTime(), numberToWords()]
- "prisma_seed_main": "main()" | kind=code-symbol | source=prisma/seed.js:L5 | neighbors=[seed.js, getDepartmentName(), processTestParameters(), seedLimsFormulasAndConfigurations()]
- "register_page": "page.js" | kind=code-symbol | source=app/(customer)/auth/register/page.js:L1 | neighbors=[252e194 e, metadata, Page(), RegisterPageClient.js]
- "register_registerpageclient": "RegisterPageClient.js" | kind=code-symbol | source=app/(customer)/auth/register/RegisterPageClient.js:L1 | neighbors=[252e194 e, page.js, CustomerRegisterPage(), registerSchema]
- "registrationid_route_get": "GET()" | kind=code-symbol | source=app/api/print-report/[registrationId]/route.js:L94 | neighbors=[route.js, formatDate(), getReferenceRange(), numberToWords()]
- "results_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/results/route.js:L1 | neighbors=[252e194 e, d446d11 fixed code, POST(), PUT()]
- "runtime_edge_addfield": "addField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Au(), ko(), xu()]
- "runtime_edge_afternextnewline": "afterNextNewline()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, write(), writeWithContents(), writeWithItems()]
- "runtime_edge_bc": "bc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, te(), Ve(), cs()]
- "runtime_edge_build": "build()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, buildCaptureSettings(), getTraceParent(), isEnabled()]
- "runtime_edge_cr": "Cr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, bo(), toString(), Do()]
- "runtime_edge_de": "de()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Ca(), fi(), pi()]
- "runtime_edge_emit": "emit()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, forEach(), handleAndLogRequestError(), withRetry()]
- "runtime_edge_esm_addfield": "addField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, Io(), mu(), wu()]
- "runtime_edge_esm_afternextnewline": "afterNextNewline()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, write(), writeWithContents(), writeWithItems()]
- "runtime_edge_esm_au": "Au()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, addSuggestion(), hasField(), hu()]
- "runtime_edge_esm_br": "Br()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, as(), e(), ss()]
- "runtime_edge_esm_build": "build()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, buildCaptureSettings(), getTraceParent(), isEnabled()]
- "runtime_edge_esm_cl": "cl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, e(), Pr(), tt()]
- "runtime_edge_esm_da": "Da()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Pt(), ze(), yi()]
- "runtime_edge_esm_de": "de()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, si(), ui(), ya()]
- "runtime_edge_esm_ee": "Ee()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, Gt(), N(), os()]
- "runtime_edge_esm_emit": "emit()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, forEach(), handleAndLogRequestError(), withRetry()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-016.json

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
