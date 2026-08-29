# Node Description Batch 27 of 150

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

- "component_differentialcounttracker_calculatedifferentialsummary": "calculateDifferentialSummary()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L91 | neighbors=[DifferentialCountTracker.jsx, DifferentialHeaderBadge(), validateDifferentialOnSave()]
- "component_differentialcounttracker_differentialheaderbadge": "DifferentialHeaderBadge()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L197 | neighbors=[DifferentialCountTracker.jsx, calculateDifferentialSummary(), isDifferentialHeader()]
- "component_moneyreciptmobile": "MoneyReciptMobile.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/MoneyReciptMobile.jsx:L1 | neighbors=[252e194 e, MoneyRecipt.jsx, MoneyReciptMobile()]
- "component_resultentrymobile": "resultEntryMobile.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/resultEntryMobile.jsx:L1 | neighbors=[252e194 e, resultEntry.jsx, ResultEntryMobile()]
- "components_adddoctordrawer": "AddDoctorDrawer.js" | kind=code-symbol | source=components/AddDoctorDrawer.js:L1 | neighbors=[252e194 e, 84a8ff2 full indexeddb based, AddDoctorDrawer()]
- "components_expiredplanview": "ExpiredPlanView.jsx" | kind=code-symbol | source=components/ExpiredPlanView.jsx:L1 | neighbors=[252e194 e, 6236f60 new update, ExpiredPlanView()]
- "doctor_summary_route": "route.js" | kind=code-symbol | source=app/api/doctor-summary/route.js:L1 | neighbors=[252e194 e, GET(), serializeData()]
- "id_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L7 | neighbors=[route.js, GET(), PUT()]
- "improve_route": "route.js" | kind=code-symbol | source=app/api/ai/improve/route.js:L1 | neighbors=[252e194 e, callGemini(), POST()]
- "lib_formulautils_addpatientcontexttovaluesmap": "addPatientContextToValuesMap()" | kind=code-symbol | source=lib/formulaUtils.js:L278 | neighbors=[formulaEngine.js, formulaUtils.js, calculateAllDependents()]
- "lib_formulautils_addvaluetovaluesmap": "addValueToValuesMap()" | kind=code-symbol | source=lib/formulaUtils.js:L10 | neighbors=[formulaEngine.js, formulaUtils.js, calculateAllDependents()]
- "lib_formulautils_isoutofrange": "isOutOfRange()" | kind=code-symbol | source=lib/formulaUtils.js:L550 | neighbors=[formulaEngine.js, formulaUtils.js, isQualitativeAbnormal()]
- "lib_formulautils_isqualitativeabnormal": "isQualitativeAbnormal()" | kind=code-symbol | source=lib/formulaUtils.js:L517 | neighbors=[formulaEngine.js, formulaUtils.js, isOutOfRange()]
- "lib_r2": "r2.js" | kind=code-symbol | source=lib/r2.js:L1 | neighbors=[252e194 e, s3Client, uploadFileToR2()]
- "lib_reportsecurity_getkeyring": "getKeyRing()" | kind=code-symbol | source=lib/reportSecurity.js:L12 | neighbors=[reportSecurity.js, decryptReportToken(), generateReportToken()]
- "logout_redirect_route": "route.js" | kind=code-symbol | source=app/api/auth/logout-redirect/route.js:L1 | neighbors=[252e194 e, 5e3d9ef d, GET()]
- "logout_route": "route.js" | kind=code-symbol | source=app/api/authas/logout/route.js:L1 | neighbors=[252e194 e, 5e3d9ef d, POST()]
- "offline_network_networkmonitor_handlestatuschange": ".handleStatusChange()" | kind=code-symbol | source=lib/offline/network.js:L17 | neighbors=[NetworkMonitor, .checkConnection(), .notifyListeners()]
- "offline_offlineprint_printbilloffline": "printBillOffline()" | kind=code-symbol | source=lib/offline/offlinePrint.js:L57 | neighbors=[offlinePrint.js, formatDate(), numberToWords()]
- "offline_registrationidentity_generaterandomsuffix": "generateRandomSuffix()" | kind=code-symbol | source=lib/offline/registrationIdentity.js:L8 | neighbors=[registrationIdentity.js, generateNextRegistrationIdentity(), test_identity_and_qr.mjs]
- "offline_timestamps_getutcisonow": "getUtcIsoNow()" | kind=code-symbol | source=lib/offline/timestamps.js:L10 | neighbors=[db.js, timestamps.js, syncManager.js]
- "offline_unsyncedlogoutmodal": "UnsyncedLogoutModal.jsx" | kind=code-symbol | source=components/offline/UnsyncedLogoutModal.jsx:L1 | neighbors=[2b2534c f, 6236f60 new update, UnsyncedLogoutModal()]
- "payments_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/payments/page.js:L1 | neighbors=[252e194 e, SettingsPaymentsPage(), paymentsClient.jsx]
- "pdf_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/pdf/page.js:L1 | neighbors=[252e194 e, SettingsPdfPage(), pdfClient.jsx]
- "preview_pdf_route": "route.js" | kind=code-symbol | source=app/api/settings/preview-pdf/route.js:L1 | neighbors=[252e194 e, formatDate(), GET()]
- "print_qrgenerator_generateqrcodepngbytes": "generateQrCodePngBytes()" | kind=code-symbol | source=lib/offline/print/qrGenerator.js:L11 | neighbors=[qrGenerator.js, reportPdfGenerator.js, test_identity_and_qr.mjs]
- "profile_route": "route.js" | kind=code-symbol | source=app/api/profile/route.js:L1 | neighbors=[252e194 e, GET(), PUT()]
- "registrations_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/registrations/route.js:L7 | neighbors=[route.js, GET(), POST()]
- "runtime_edge_a": "a()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, g(), l()]
- "runtime_edge_ac": "ac()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, ht(), ts()]
- "runtime_edge_ai": "ai()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, l(), gi()]
- "runtime_edge_append": "append()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, e(), us()]
- "runtime_edge_bi": "bi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Ei(), write()]
- "runtime_edge_bs": "Bs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L13 | neighbors=[edge.js, ls(), qs()]
- "runtime_edge_buildcapturesettings": "buildCaptureSettings()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, build(), isEnabled()]
- "runtime_edge_createenginespan": "createEngineSpan()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js, getGlobalTracingHelper(), propagateResponseExtensions()]
- "runtime_edge_da": "Da()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, mr(), vi()]
- "runtime_edge_di": "di()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, on(), va()]
- "runtime_edge_ei": "Ei()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, bi(), xi()]
- "runtime_edge_empty": "empty()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, edge.js, e()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-026.json

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
