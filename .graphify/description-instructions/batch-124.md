# Node Description Batch 125 of 148

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

- "next_config_nextconfig": "nextConfig" | kind=code-symbol | source=next.config.mjs:L2 | neighbors=[next.config.mjs]
- "offline_db_appdatabase_constructor": ".constructor()" | kind=code-symbol | source=lib/offline/db.js:L5 | neighbors=[AppDatabase]
- "offline_db_appdatabase_getallerrorrecords": ".getAllErrorRecords()" | kind=code-symbol | source=lib/offline/db.js:L205 | neighbors=[AppDatabase]
- "offline_db_appdatabase_insertoffline": ".insertOffline()" | kind=code-symbol | source=lib/offline/db.js:L47 | neighbors=[AppDatabase]
- "offline_db_appdatabase_marksynced": ".markSynced()" | kind=code-symbol | source=lib/offline/db.js:L129 | neighbors=[AppDatabase]
- "offline_db_appdatabase_marksyncerror": ".markSyncError()" | kind=code-symbol | source=lib/offline/db.js:L152 | neighbors=[AppDatabase]
- "offline_db_db": "db" | kind=code-symbol | source=lib/offline/db.js:L236 | neighbors=[db.js]
- "offline_network_networkmonitor_stopheartbeat": ".stopHeartbeat()" | kind=code-symbol | source=lib/offline/network.js:L90 | neighbors=[NetworkMonitor]
- "offline_network_networkmonitor_subscribe": ".subscribe()" | kind=code-symbol | source=lib/offline/network.js:L42 | neighbors=[NetworkMonitor]
- "offline_offlinepdfgenerator_formatdate": "formatDate()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L108 | neighbors=[offlinePdfGenerator.js]
- "offline_offlinepdfgenerator_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L85 | neighbors=[offlinePdfGenerator.js]
- "offline_offlinepdfgenerator_wrapplaintextlines": "wrapPlainTextLines()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L209 | neighbors=[offlinePdfGenerator.js]
- "offline_offlineprint_printreportoffline": "printReportOffline()" | kind=code-symbol | source=lib/offline/offlinePrint.js:L195 | neighbors=[offlinePrint.js]
- "offline_reloginmodal_reloginmodal": "ReLoginModal()" | kind=code-symbol | source=components/offline/ReLoginModal.jsx:L30 | neighbors=[ReLoginModal.jsx]
- "offline_syncindicator_syncindicator": "SyncIndicator()" | kind=code-symbol | source=components/offline/SyncIndicator.jsx:L32 | neighbors=[SyncIndicator.jsx]
- "offline_syncstatusicon_syncstatusicon": "SyncStatusIcon()" | kind=code-symbol | source=components/offline/SyncStatusIcon.jsx:L13 | neighbors=[SyncStatusIcon.jsx]
- "offline_timestamps_compareutc": "compareUtc()" | kind=code-symbol | source=lib/offline/timestamps.js:L37 | neighbors=[timestamps.js]
- "offline_timestamps_formatlocaldisplay": "formatLocalDisplay()" | kind=code-symbol | source=lib/offline/timestamps.js:L61 | neighbors=[timestamps.js]
- "offline_unsyncedlogoutmodal_unsyncedlogoutmodal": "UnsyncedLogoutModal()" | kind=code-symbol | source=components/offline/UnsyncedLogoutModal.jsx:L20 | neighbors=[UnsyncedLogoutModal.jsx]
- "parameters_route_post": "POST()" | kind=code-symbol | source=app/api/registrations/[id]/parameters/route.js:L93 | neighbors=[route.js]
- "payment_route_post": "POST()" | kind=code-symbol | source=app/api/registrations/[id]/payment/route.js:L5 | neighbors=[route.js]
- "payments_page_settingspaymentspage": "SettingsPaymentsPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/payments/page.js:L7 | neighbors=[page.js]
- "payments_paymentsclient_paymentsclient": "PaymentsClient()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/payments/paymentsClient.jsx:L35 | neighbors=[paymentsClient.jsx]
- "payments_route_get": "GET()" | kind=code-symbol | source=app/api/settings/payments/route.js:L6 | neighbors=[route.js]
- "pdf_page_settingspdfpage": "SettingsPdfPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/pdf/page.js:L8 | neighbors=[page.js]
- "pdf_pdfclient_pdfsettingsclient": "PdfSettingsClient()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/pdf/pdfClient.jsx:L62 | neighbors=[pdfClient.jsx]
- "pdf_route_default_column_order": "DEFAULT_COLUMN_ORDER" | kind=code-symbol | source=app/api/settings/pdf/route.js:L5 | neighbors=[route.js]
- "pdf_route_default_pdf_settings": "DEFAULT_PDF_SETTINGS" | kind=code-symbol | source=app/api/settings/pdf/route.js:L13 | neighbors=[route.js]
- "pdf_route_get": "GET()" | kind=code-symbol | source=app/api/settings/pdf/route.js:L45 | neighbors=[route.js]
- "pdf_route_post": "POST()" | kind=code-symbol | source=app/api/settings/pdf/route.js:L122 | neighbors=[route.js]
- "postcss_config_config": "config" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[postcss.config.mjs]
- "prisma_process_dynamic_parameters_prisma": "prisma" | kind=code-symbol | source=prisma/process-dynamic-parameters.js:L2 | neighbors=[process-dynamic-parameters.js]
- "prisma_process_dynamic_parameters_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=prisma/process-dynamic-parameters.js:L1 | neighbors=[process-dynamic-parameters.js]
- "prisma_seed_bcrypt": "bcrypt" | kind=code-symbol | source=prisma/seed.js:L3 | neighbors=[seed.js]
- "prisma_seed_prisma": "prisma" | kind=code-symbol | source=prisma/seed.js:L2 | neighbors=[seed.js]
- "prisma_seed_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=prisma/seed.js:L1 | neighbors=[seed.js]
- "profile_route_get": "GET()" | kind=code-symbol | source=app/api/profile/route.js:L6 | neighbors=[route.js]
- "profile_route_put": "PUT()" | kind=code-symbol | source=app/api/profile/route.js:L53 | neighbors=[route.js]
- "providers_offlineprovider_offlineprovider": "OfflineProvider()" | kind=code-symbol | source=components/providers/OfflineProvider.jsx:L10 | neighbors=[OfflineProvider.jsx]
- "proxy_config": "config" | kind=code-symbol | source=proxy.js:L33 | neighbors=[proxy.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-124.json

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
