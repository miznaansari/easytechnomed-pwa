# Node Description Batch 36 of 148

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

- "next_config": "next.config.mjs" | kind=code-symbol | source=next.config.mjs:L1 | neighbors=[252e194 e, nextConfig]
- "offline_db_appdatabase_deleteoffline": ".deleteOffline()" | kind=code-symbol | source=lib/offline/db.js:L104 | neighbors=[AppDatabase, .updateOffline()]
- "offline_db_appdatabase_getallpendingrecords": ".getAllPendingRecords()" | kind=code-symbol | source=lib/offline/db.js:L167 | neighbors=[AppDatabase, .getPendingCount()]
- "offline_db_appdatabase_getpendingcount": ".getPendingCount()" | kind=code-symbol | source=lib/offline/db.js:L196 | neighbors=[AppDatabase, .getAllPendingRecords()]
- "offline_db_appdatabase_updateoffline": ".updateOffline()" | kind=code-symbol | source=lib/offline/db.js:L73 | neighbors=[AppDatabase, .deleteOffline()]
- "offline_network_networkmonitor_checkconnection": ".checkConnection()" | kind=code-symbol | source=lib/offline/network.js:L52 | neighbors=[NetworkMonitor, .handleStatusChange()]
- "offline_network_networkmonitor_constructor": ".constructor()" | kind=code-symbol | source=lib/offline/network.js:L7 | neighbors=[NetworkMonitor, .startHeartbeat()]
- "offline_network_networkmonitor_notifylisteners": ".notifyListeners()" | kind=code-symbol | source=lib/offline/network.js:L25 | neighbors=[NetworkMonitor, .handleStatusChange()]
- "offline_network_networkmonitor_startheartbeat": ".startHeartbeat()" | kind=code-symbol | source=lib/offline/network.js:L81 | neighbors=[NetworkMonitor, .constructor()]
- "offline_offlinepdfgenerator_isoutofrange": "isOutOfRange()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L73 | neighbors=[offlinePdfGenerator.js, isQualitativeAbnormal()]
- "offline_offlinepdfgenerator_isqualitativeabnormal": "isQualitativeAbnormal()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L10 | neighbors=[offlinePdfGenerator.js, isOutOfRange()]
- "offline_offlinepdfgenerator_layoutmarkdownlines": "layoutMarkdownLines()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L164 | neighbors=[offlinePdfGenerator.js, generateReportPdfOffline()]
- "offline_offlinepdfgenerator_parsemarkdowntokens": "parseMarkdownTokens()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L126 | neighbors=[offlinePdfGenerator.js, generateReportPdfOffline()]
- "offline_offlineprint_formatdate": "formatDate()" | kind=code-symbol | source=lib/offline/offlinePrint.js:L4 | neighbors=[offlinePrint.js, printBillOffline()]
- "offline_offlineprint_numbertowords": "numberToWords()" | kind=code-symbol | source=lib/offline/offlinePrint.js:L17 | neighbors=[offlinePrint.js, printBillOffline()]
- "offline_reloginmodal": "ReLoginModal.jsx" | kind=code-symbol | source=components/offline/ReLoginModal.jsx:L1 | neighbors=[9f59247 expire token, ReLoginModal()]
- "offline_timestamps_isservernewer": "isServerNewer()" | kind=code-symbol | source=lib/offline/timestamps.js:L49 | neighbors=[timestamps.js, syncManager.js]
- "offline_timestamps_toutciso": "toUtcIso()" | kind=code-symbol | source=lib/offline/timestamps.js:L20 | neighbors=[timestamps.js, syncManager.js]
- "offline_unsyncedlogoutmodal": "UnsyncedLogoutModal.jsx" | kind=code-symbol | source=components/offline/UnsyncedLogoutModal.jsx:L1 | neighbors=[2b2534c f, UnsyncedLogoutModal()]
- "parameters_route_get": "GET()" | kind=code-symbol | source=app/api/registrations/[id]/parameters/route.js:L43 | neighbors=[route.js, serializeRegistration()]
- "parameters_route_serializeregistration": "serializeRegistration()" | kind=code-symbol | source=app/api/registrations/[id]/parameters/route.js:L6 | neighbors=[route.js, GET()]
- "payment_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/payment/route.js:L1 | neighbors=[252e194 e, POST()]
- "paymentid_route_formatdate": "formatDate()" | kind=code-symbol | source=app/api/print-subscription-invoice/[paymentId]/route.js:L7 | neighbors=[route.js, GET()]
- "paymentid_route_formatdatetime": "formatDateTime()" | kind=code-symbol | source=app/api/print-subscription-invoice/[paymentId]/route.js:L18 | neighbors=[route.js, GET()]
- "paymentid_route_numbertowords": "numberToWords()" | kind=code-symbol | source=app/api/print-subscription-invoice/[paymentId]/route.js:L33 | neighbors=[route.js, GET()]
- "payments_route": "route.js" | kind=code-symbol | source=app/api/settings/payments/route.js:L1 | neighbors=[252e194 e, GET()]
- "postcss_config": "postcss.config.mjs" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[252e194 e, config]
- "preview_pdf_route_formatdate": "formatDate()" | kind=code-symbol | source=app/api/settings/preview-pdf/route.js:L13 | neighbors=[route.js, GET()]
- "preview_pdf_route_get": "GET()" | kind=code-symbol | source=app/api/settings/preview-pdf/route.js:L25 | neighbors=[route.js, formatDate()]
- "prisma_process_dynamic_parameters_main": "main()" | kind=code-symbol | source=prisma/process-dynamic-parameters.js:L142 | neighbors=[process-dynamic-parameters.js, processTestParameters()]
- "prisma_process_dynamic_parameters_processtestparameters": "processTestParameters()" | kind=code-symbol | source=prisma/process-dynamic-parameters.js:L4 | neighbors=[process-dynamic-parameters.js, main()]
- "prisma_seed_getdepartmentname": "getDepartmentName()" | kind=code-symbol | source=prisma/seed.js:L413 | neighbors=[seed.js, main()]
- "prisma_seed_processtestparameters": "processTestParameters()" | kind=code-symbol | source=prisma/seed.js:L282 | neighbors=[seed.js, main()]
- "prisma_seed_seedlimsformulasandconfigurations": "seedLimsFormulasAndConfigurations()" | kind=code-symbol | source=prisma/seed.js:L534 | neighbors=[seed.js, main()]
- "register_route": "route.js" | kind=code-symbol | source=app/api/authas/register/route.js:L1 | neighbors=[252e194 e, POST()]
- "registrationid_route_formatdate": "formatDate()" | kind=code-symbol | source=app/api/print-report/[registrationId]/route.js:L79 | neighbors=[route.js, GET()]
- "registrationid_route_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=app/api/print-report/[registrationId]/route.js:L56 | neighbors=[route.js, GET()]
- "registrationid_route_isoutofrange": "isOutOfRange()" | kind=code-symbol | source=app/api/print-report/[registrationId]/route.js:L44 | neighbors=[route.js, isQualitativeAbnormal()]
- "registrationid_route_isqualitativeabnormal": "isQualitativeAbnormal()" | kind=code-symbol | source=app/api/print-report/[registrationId]/route.js:L14 | neighbors=[route.js, isOutOfRange()]
- "registrationid_route_numbertowords": "numberToWords()" | kind=code-symbol | source=app/api/print-bill/[registrationId]/route.js:L19 | neighbors=[route.js, GET()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-035.json

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
