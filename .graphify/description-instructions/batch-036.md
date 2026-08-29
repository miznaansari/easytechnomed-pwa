# Node Description Batch 37 of 150

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

- "lib_pdftheme_getfontfamilydefinitions": "getFontFamilyDefinitions()" | kind=code-symbol | source=lib/pdfTheme.js:L30 | neighbors=[pdfTheme.js, test-pdf-customization.mjs]
- "lib_pdftheme_hextorgb": "hexToRgb()" | kind=code-symbol | source=lib/pdfTheme.js:L6 | neighbors=[pdfTheme.js, test-pdf-customization.mjs]
- "lib_pdftheme_pdf_theme_presets": "PDF_THEME_PRESETS" | kind=code-symbol | source=lib/pdfTheme.js:L114 | neighbors=[pdfTheme.js, test-pdf-customization.mjs]
- "login_loginpageclient_customerloginpage": "CustomerLoginPage()" | kind=code-symbol | source=app/(customer)/auth/login/LoginPageClient.js:L31 | neighbors=[LoginPageClient.js, isLikelyMobile()]
- "login_loginpageclient_islikelymobile": "isLikelyMobile()" | kind=code-symbol | source=app/(customer)/auth/login/LoginPageClient.js:L15 | neighbors=[LoginPageClient.js, CustomerLoginPage()]
- "login_route": "route.js" | kind=code-symbol | source=app/api/authas/login/route.js:L1 | neighbors=[252e194 e, POST()]
- "next_config": "next.config.mjs" | kind=code-symbol | source=next.config.mjs:L1 | neighbors=[252e194 e, nextConfig]
- "offline_db_appdatabase_deleteoffline": ".deleteOffline()" | kind=code-symbol | source=lib/offline/db.js:L105 | neighbors=[AppDatabase, .updateOffline()]
- "offline_db_appdatabase_getallpendingrecords": ".getAllPendingRecords()" | kind=code-symbol | source=lib/offline/db.js:L168 | neighbors=[AppDatabase, .getPendingCount()]
- "offline_db_appdatabase_getpendingcount": ".getPendingCount()" | kind=code-symbol | source=lib/offline/db.js:L197 | neighbors=[AppDatabase, .getAllPendingRecords()]
- "offline_db_appdatabase_updateoffline": ".updateOffline()" | kind=code-symbol | source=lib/offline/db.js:L74 | neighbors=[AppDatabase, .deleteOffline()]
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
- "offline_registrationidentity_generatenextregistrationidentity": "generateNextRegistrationIdentity()" | kind=code-symbol | source=lib/offline/registrationIdentity.js:L32 | neighbors=[registrationIdentity.js, generateRandomSuffix()]
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
- "print_billhtmlgenerator_formatdate": "formatDate()" | kind=code-symbol | source=lib/offline/print/billHtmlGenerator.js:L3 | neighbors=[billHtmlGenerator.js, generateOfflineBillHtml()]
- "print_billhtmlgenerator_numbertowords": "numberToWords()" | kind=code-symbol | source=lib/offline/print/billHtmlGenerator.js:L18 | neighbors=[billHtmlGenerator.js, generateOfflineBillHtml()]
- "print_qrgenerator_generateqrcodedataurl": "generateQrCodeDataUrl()" | kind=code-symbol | source=lib/offline/print/qrGenerator.js:L50 | neighbors=[qrGenerator.js, test_identity_and_qr.mjs]
- "print_reportpdfgenerator_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=lib/offline/print/reportPdfGenerator.js:L87 | neighbors=[reportPdfGenerator.js, generateOfflineReportPdf()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-036.json

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
