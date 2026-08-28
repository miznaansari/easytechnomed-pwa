# Node Description Batch 26 of 149

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

- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@c5cbecd35dab9843171e92af854db27d4a2695d8": "c5cbecd 3.0.1" | kind=Commit | source=git | neighbors=[af73a19 fixed, main, 5ce0a2e fixed]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@c82cfd75cd7430b8abc8461383578f5995fa86e1": "c82cfd7 3.0.10" | kind=Commit | source=git | neighbors=[165f057 f, main, b5dedb0 f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@cc4c42700f90d3aaec33239797a4bf165ff759d3": "cc4c427 1.1.26" | kind=Commit | source=git | neighbors=[6fcf015 f, main, 56f4d63 f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@dad94e154d28d52e1022bfb4ad46b292c0217a63": "dad94e1 2.0.18" | kind=Commit | source=git | neighbors=[37ee548 f, main, 9e25c19 f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@dbe17328a3c0ed13c2d1fc9400bad8257f433f7c": "dbe1732 1.1.25" | kind=Commit | source=git | neighbors=[main, 6fcf015 f, eb8b1e5 f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@e7103414d8890eb785205bb901bf456f01bd4be6": "e710341 1.1.32" | kind=Commit | source=git | neighbors=[91c4f7a feat: complete offline support …, main, a409645 fix: resolve Chrome reload loop…]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@e9caab3ea343ad7030c27e2201023719ed930428": "e9caab3 2.0.15" | kind=Commit | source=git | neighbors=[cb86968 fixed, main, bcee6c8 fi]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@e9f3af911d7a7f7a10c4bf02f044a25f7b5e1801": "e9f3af9 2.0.6" | kind=Commit | source=git | neighbors=[6618261 f, main, 4ba60cc fixed]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@eacdd5b5a368efd90df33fc605fbe79e09534fa7": "eacdd5b 2.0.23" | kind=Commit | source=git | neighbors=[9f59247 expire token, main, d446d11 fixed code]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@eb42395202ac782c1a11135566e9898cc7c47bf1": "eb42395 2.0.16" | kind=Commit | source=git | neighbors=[cfa3879 f, main, 1ba5187 2.0.17]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@ec70d212b2fec4c5300d745eee7db01d78d8e21e": "ec70d21 2.0.7" | kind=Commit | source=git | neighbors=[4ba60cc fixed, main, 37dcb32 fixed]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@f4e1e655ae80cf80b6058913d91248ead25763a3": "f4e1e65 2.0.21" | kind=Commit | source=git | neighbors=[f3857f9 f, main, 14fa292 f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@f9a9e52ab881f37b37845b3f25a164a999f6ce02": "f9a9e52 1.1.28" | kind=Commit | source=git | neighbors=[532b740 fixed, main, d87cf87 d]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@f9e9bea93a9679482a23f68dc2d2df3c6b3c9c17": "f9e9bea 2.0.8" | kind=Commit | source=git | neighbors=[37dcb32 fixed, main, cea69a2 d]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@fae0b0a32e7f1f425fc024c87b3f94a501c8a16c": "fae0b0a graphify added." | kind=Commit | source=git | neighbors=[98ad5ca 2.0.24, main, 14ed805 3.0.0]
- "component_differentialcounttracker_calculatedifferentialsummary": "calculateDifferentialSummary()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L91 | neighbors=[DifferentialCountTracker.jsx, DifferentialHeaderBadge(), validateDifferentialOnSave()]
- "component_differentialcounttracker_differentialheaderbadge": "DifferentialHeaderBadge()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L197 | neighbors=[DifferentialCountTracker.jsx, calculateDifferentialSummary(), isDifferentialHeader()]
- "component_moneyreciptmobile": "MoneyReciptMobile.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/MoneyReciptMobile.jsx:L1 | neighbors=[252e194 e, MoneyRecipt.jsx, MoneyReciptMobile()]
- "component_resultentrymobile": "resultEntryMobile.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/resultEntryMobile.jsx:L1 | neighbors=[252e194 e, resultEntry.jsx, ResultEntryMobile()]
- "components_adddoctordrawer": "AddDoctorDrawer.js" | kind=code-symbol | source=components/AddDoctorDrawer.js:L1 | neighbors=[252e194 e, 84a8ff2 full indexeddb based, AddDoctorDrawer()]
- "doctor_summary_route": "route.js" | kind=code-symbol | source=app/api/doctor-summary/route.js:L1 | neighbors=[252e194 e, GET(), serializeData()]
- "id_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L7 | neighbors=[route.js, GET(), PUT()]
- "improve_route": "route.js" | kind=code-symbol | source=app/api/ai/improve/route.js:L1 | neighbors=[252e194 e, callGemini(), POST()]
- "lib_formulautils_addpatientcontexttovaluesmap": "addPatientContextToValuesMap()" | kind=code-symbol | source=lib/formulaUtils.js:L278 | neighbors=[formulaEngine.js, formulaUtils.js, calculateAllDependents()]
- "lib_formulautils_addvaluetovaluesmap": "addValueToValuesMap()" | kind=code-symbol | source=lib/formulaUtils.js:L10 | neighbors=[formulaEngine.js, formulaUtils.js, calculateAllDependents()]
- "lib_formulautils_isoutofrange": "isOutOfRange()" | kind=code-symbol | source=lib/formulaUtils.js:L550 | neighbors=[formulaEngine.js, formulaUtils.js, isQualitativeAbnormal()]
- "lib_formulautils_isqualitativeabnormal": "isQualitativeAbnormal()" | kind=code-symbol | source=lib/formulaUtils.js:L517 | neighbors=[formulaEngine.js, formulaUtils.js, isOutOfRange()]
- "lib_r2": "r2.js" | kind=code-symbol | source=lib/r2.js:L1 | neighbors=[252e194 e, s3Client, uploadFileToR2()]
- "logout_redirect_route": "route.js" | kind=code-symbol | source=app/api/auth/logout-redirect/route.js:L1 | neighbors=[252e194 e, 5e3d9ef d, GET()]
- "logout_route": "route.js" | kind=code-symbol | source=app/api/authas/logout/route.js:L1 | neighbors=[252e194 e, 5e3d9ef d, POST()]
- "offline_network_networkmonitor_handlestatuschange": ".handleStatusChange()" | kind=code-symbol | source=lib/offline/network.js:L17 | neighbors=[NetworkMonitor, .checkConnection(), .notifyListeners()]
- "offline_offlineprint_printbilloffline": "printBillOffline()" | kind=code-symbol | source=lib/offline/offlinePrint.js:L57 | neighbors=[offlinePrint.js, formatDate(), numberToWords()]
- "offline_timestamps_getutcisonow": "getUtcIsoNow()" | kind=code-symbol | source=lib/offline/timestamps.js:L10 | neighbors=[db.js, timestamps.js, syncManager.js]
- "payments_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/payments/page.js:L1 | neighbors=[252e194 e, SettingsPaymentsPage(), paymentsClient.jsx]
- "pdf_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/pdf/page.js:L1 | neighbors=[252e194 e, SettingsPdfPage(), pdfClient.jsx]
- "preview_pdf_route": "route.js" | kind=code-symbol | source=app/api/settings/preview-pdf/route.js:L1 | neighbors=[252e194 e, formatDate(), GET()]
- "profile_route": "route.js" | kind=code-symbol | source=app/api/profile/route.js:L1 | neighbors=[252e194 e, GET(), PUT()]
- "registrations_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/registrations/route.js:L7 | neighbors=[route.js, GET(), POST()]
- "runtime_edge_a": "a()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, g(), l()]
- "runtime_edge_ac": "ac()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, ht(), ts()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-025.json

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
