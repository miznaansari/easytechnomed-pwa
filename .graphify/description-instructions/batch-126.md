# Node Description Batch 127 of 150

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

- "offline_offlinepdfgenerator_wrapplaintextlines": "wrapPlainTextLines()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L209 | neighbors=[offlinePdfGenerator.js]
- "offline_offlineprint_printreportoffline": "printReportOffline()" | kind=code-symbol | source=lib/offline/offlinePrint.js:L200 | neighbors=[offlinePrint.js]
- "offline_reloginmodal_reloginmodal": "ReLoginModal()" | kind=code-symbol | source=components/offline/ReLoginModal.jsx:L31 | neighbors=[ReLoginModal.jsx]
- "offline_syncindicator_syncindicator": "SyncIndicator()" | kind=code-symbol | source=components/offline/SyncIndicator.jsx:L34 | neighbors=[SyncIndicator.jsx]
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
- "print_openprint_openofflinebillprint": "openOfflineBillPrint()" | kind=code-symbol | source=lib/offline/print/openPrint.js:L36 | neighbors=[openPrint.js]
- "print_openprint_openofflinereportprint": "openOfflineReportPrint()" | kind=code-symbol | source=lib/offline/print/openPrint.js:L10 | neighbors=[openPrint.js]
- "print_reportpdfgenerator_formatdate": "formatDate()" | kind=code-symbol | source=lib/offline/print/reportPdfGenerator.js:L110 | neighbors=[reportPdfGenerator.js]
- "prisma_process_dynamic_parameters_prisma": "prisma" | kind=code-symbol | source=prisma/process-dynamic-parameters.js:L2 | neighbors=[process-dynamic-parameters.js]
- "prisma_process_dynamic_parameters_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=prisma/process-dynamic-parameters.js:L1 | neighbors=[process-dynamic-parameters.js]
- "prisma_seed_bcrypt": "bcrypt" | kind=code-symbol | source=prisma/seed.js:L3 | neighbors=[seed.js]
- "prisma_seed_prisma": "prisma" | kind=code-symbol | source=prisma/seed.js:L2 | neighbors=[seed.js]
- "prisma_seed_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=prisma/seed.js:L1 | neighbors=[seed.js]
- "profile_route_get": "GET()" | kind=code-symbol | source=app/api/profile/route.js:L6 | neighbors=[route.js]
- "profile_route_put": "PUT()" | kind=code-symbol | source=app/api/profile/route.js:L53 | neighbors=[route.js]
- "providers_offlineprovider_offlineprovider": "OfflineProvider()" | kind=code-symbol | source=components/providers/OfflineProvider.jsx:L11 | neighbors=[OfflineProvider.jsx]
- "proxy_config": "config" | kind=code-symbol | source=proxy.js:L33 | neighbors=[proxy.js]
- "proxy_jwt_secret": "JWT_SECRET" | kind=code-symbol | source=proxy.js:L4 | neighbors=[proxy.js]
- "proxy_proxy": "proxy()" | kind=code-symbol | source=proxy.js:L8 | neighbors=[proxy.js]
- "public_sw_createcleanresponse": "createCleanResponse()" | kind=code-symbol | source=public/sw.js:L50 | neighbors=[sw.js]
- "public_sw_extractassetsfromhtml": "extractAssetsFromHtml()" | kind=code-symbol | source=public/sw.js:L30 | neighbors=[sw.js]
- "public_sw_ishtmlresponse": "isHtmlResponse()" | kind=code-symbol | source=public/sw.js:L165 | neighbors=[sw.js]
- "public_sw_precache_routes": "PRECACHE_ROUTES" | kind=code-symbol | source=public/sw.js:L5 | neighbors=[sw.js]
- "public_sw_sanitizeresponse": "sanitizeResponse()" | kind=code-symbol | source=public/sw.js:L61 | neighbors=[sw.js]
- "q_route_get": "GET()" | kind=code-symbol | source=app/(printReport)/q/route.js:L4 | neighbors=[route.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-126.json

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
