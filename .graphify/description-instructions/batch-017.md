# Node Description Batch 18 of 150

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

- "lib_reportsecurity_verifyreporttoken": "verifyReportToken()" | kind=code-symbol | source=lib/reportSecurity.js:L173 | neighbors=[reportSecurity.js, decryptReportToken(), generateReportToken(), test_identity_and_qr.mjs]
- "lib_saasinvoice": "saasInvoice.js" | kind=code-symbol | source=lib/saasInvoice.js:L1 | neighbors=[252e194 e, decodePaymentUid(), encodePaymentUid(), KEY]
- "login_page": "page.js" | kind=code-symbol | source=app/(customer)/auth/login/page.js:L1 | neighbors=[252e194 e, LoginPageClient.js, metadata, Page()]
- "members_route": "route.js" | kind=code-symbol | source=app/api/members/route.js:L1 | neighbors=[252e194 e, GET(), PATCH(), POST()]
- "offline_offlinepdfgenerator_generatereportpdfoffline": "generateReportPdfOffline()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L271 | neighbors=[offlinePdfGenerator.js, layoutMarkdownLines(), parseMarkdownTokens(), offlinePrint.js]
- "offline_registrationidentity": "registrationIdentity.js" | kind=code-symbol | source=lib/offline/registrationIdentity.js:L1 | neighbors=[6c2dfe4 test, db.js, generateNextRegistrationIdentity(), generateRandomSuffix()]
- "offline_reloginmodal": "ReLoginModal.jsx" | kind=code-symbol | source=components/offline/ReLoginModal.jsx:L1 | neighbors=[6236f60 new update, 78dd976 fixed, 9f59247 expire token, ReLoginModal()]
- "offline_syncstatusicon": "SyncStatusIcon.jsx" | kind=code-symbol | source=components/offline/SyncStatusIcon.jsx:L1 | neighbors=[2b2534c f, 6fcf015 f, d446d11 fixed code, SyncStatusIcon()]
- "parameters_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/parameters/route.js:L1 | neighbors=[252e194 e, GET(), POST(), serializeRegistration()]
- "paymentid_route_get": "GET()" | kind=code-symbol | source=app/api/print-subscription-invoice/[paymentId]/route.js:L74 | neighbors=[route.js, formatDate(), formatDateTime(), numberToWords()]
- "print_billhtmlgenerator_generateofflinebillhtml": "generateOfflineBillHtml()" | kind=code-symbol | source=lib/offline/print/billHtmlGenerator.js:L60 | neighbors=[billHtmlGenerator.js, formatDate(), numberToWords(), openPrint.js]
- "print_qrgenerator": "qrGenerator.js" | kind=code-symbol | source=lib/offline/print/qrGenerator.js:L1 | neighbors=[6c2dfe4 test, generateQrCodeDataUrl(), generateQrCodePngBytes(), reportPdfGenerator.js]
- "print_reportpdfgenerator_generateofflinereportpdf": "generateOfflineReportPdf()" | kind=code-symbol | source=lib/offline/print/reportPdfGenerator.js:L131 | neighbors=[offlinePrint.js, openPrint.js, reportPdfGenerator.js, getReferenceRange()]
- "prisma_seed_main": "main()" | kind=code-symbol | source=prisma/seed.js:L5 | neighbors=[seed.js, getDepartmentName(), processTestParameters(), seedLimsFormulasAndConfigurations()]
- "register_page": "page.js" | kind=code-symbol | source=app/(customer)/auth/register/page.js:L1 | neighbors=[252e194 e, metadata, Page(), RegisterPageClient.js]
- "registrationid_route_get": "GET()" | kind=code-symbol | source=app/api/print-report/[registrationId]/route.js:L96 | neighbors=[route.js, formatDate(), getReferenceRange(), numberToWords()]
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
- "runtime_edge_esm_er": "Er()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, e(), O(), ke()]
- "runtime_edge_esm_fc": "fc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, te(), Ve(), N()]
- "runtime_edge_esm_ga": "ga()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ai(), be(), enabled()]
- "runtime_edge_esm_getallcomputedfields": "getAllComputedFields()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, getOrCreate(), getComputedFields(), os()]
- "runtime_edge_esm_getargumentname": "getArgumentName()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, lo(), qo(), qu()]
- "runtime_edge_esm_getargumentpath": "getArgumentPath()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, lo(), qo(), qu()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-017.json

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
