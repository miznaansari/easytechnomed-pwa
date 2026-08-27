# Node Description Batch 35 of 148

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

- "doctors_route_put": "PUT()" | kind=code-symbol | source=app/api/doctors/route.js:L114 | neighbors=[route.js, serializeData()]
- "draft_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/results/draft/route.js:L1 | neighbors=[252e194 e, POST()]
- "eslint_config": "eslint.config.mjs" | kind=code-symbol | source=eslint.config.mjs:L1 | neighbors=[252e194 e, eslintConfig]
- "generated_client_default": "default.js" | kind=code-symbol | source=scratch/generated-client/default.js:L1 | neighbors=[252e194 e, edge.d.ts]
- "generated_client_default_d": "default.d.ts" | kind=code-symbol | source=scratch/generated-client/default.d.ts:L1 | neighbors=[252e194 e, index.js]
- "generated_client_edge_d": "edge.d.ts" | kind=code-symbol | source=scratch/generated-client/edge.d.ts:L1 | neighbors=[252e194 e, default.js]
- "generated_client_index_browser_prismaclient": "PrismaClient" | kind=code-symbol | source=scratch/generated-client/index-browser.js:L607 | neighbors=[index-browser.js, .constructor()]
- "generated_client_wasm_d": "wasm.d.ts" | kind=code-symbol | source=scratch/generated-client/wasm.d.ts:L1 | neighbors=[252e194 e, index.js]
- "generated_client_wasm_prismaclient": "PrismaClient" | kind=code-symbol | source=scratch/generated-client/wasm.js:L607 | neighbors=[wasm.js, .constructor()]
- "google_route": "route.js" | kind=code-symbol | source=app/api/authas/google/route.js:L1 | neighbors=[252e194 e, POST()]
- "hooks_useoffline": "useOffline.js" | kind=code-symbol | source=hooks/useOffline.js:L1 | neighbors=[2b2534c f, useOffline()]
- "hooks_usesync_usesync": "useSync()" | kind=code-symbol | source=hooks/useSync.js:L5 | neighbors=[useOfflineData.js, useSync.js]
- "id_route_get": "GET()" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L42 | neighbors=[route.js, serializeData()]
- "id_route_put": "PUT()" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L79 | neighbors=[route.js, serializeData()]
- "improve_route_callgemini": "callGemini()" | kind=code-symbol | source=app/api/ai/improve/route.js:L6 | neighbors=[route.js, POST()]
- "improve_route_post": "POST()" | kind=code-symbol | source=app/api/ai/improve/route.js:L44 | neighbors=[route.js, callGemini()]
- "indexeddb_db": "db.js" | kind=code-symbol | source=app/indexedDB/db.js:L1 | neighbors=[252e194 e, 2b2534c f]
- "leads_route": "route.js" | kind=code-symbol | source=app/api/leads/route.js:L1 | neighbors=[252e194 e, POST()]
- "lib_auth_requireadmin": "requireAdmin()" | kind=code-symbol | source=lib/auth.js:L81 | neighbors=[auth.js, verifyToken()]
- "lib_auth_requiresuperadmin": "requireSuperAdmin()" | kind=code-symbol | source=lib/auth.js:L156 | neighbors=[auth.js, verifyToken()]
- "lib_auth_requireuser": "requireUser()" | kind=code-symbol | source=lib/auth.js:L23 | neighbors=[auth.js, verifyToken()]
- "lib_auth_verifysuperadminapi": "verifySuperAdminAPI()" | kind=code-symbol | source=lib/auth.js:L190 | neighbors=[auth.js, verifyToken()]
- "lib_db": "db.js" | kind=code-symbol | source=lib/db.js:L1 | neighbors=[252e194 e, auth.js]
- "lib_formulautils_determineflag": "determineFlag()" | kind=code-symbol | source=lib/formulaUtils.js:L565 | neighbors=[formulaEngine.js, formulaUtils.js]
- "lib_formulautils_getrangeandcriticalthresholds": "getRangeAndCriticalThresholds()" | kind=code-symbol | source=lib/formulaUtils.js:L479 | neighbors=[formulaEngine.js, formulaUtils.js]
- "lib_formulautils_validatedifferentialcount": "validateDifferentialCount()" | kind=code-symbol | source=lib/formulaUtils.js:L771 | neighbors=[formulaEngine.js, formulaUtils.js]
- "lib_pdftheme_computecolumnlayout": "computeColumnLayout()" | kind=code-symbol | source=lib/pdfTheme.js:L68 | neighbors=[pdfTheme.js, test-pdf-customization.mjs]
- "lib_pdftheme_default_columns": "DEFAULT_COLUMNS" | kind=code-symbol | source=lib/pdfTheme.js:L57 | neighbors=[pdfTheme.js, test-pdf-customization.mjs]
- "lib_pdftheme_getfontfamilydefinitions": "getFontFamilyDefinitions()" | kind=code-symbol | source=lib/pdfTheme.js:L30 | neighbors=[pdfTheme.js, test-pdf-customization.mjs]
- "lib_pdftheme_hextorgb": "hexToRgb()" | kind=code-symbol | source=lib/pdfTheme.js:L6 | neighbors=[pdfTheme.js, test-pdf-customization.mjs]
- "lib_pdftheme_pdf_theme_presets": "PDF_THEME_PRESETS" | kind=code-symbol | source=lib/pdfTheme.js:L114 | neighbors=[pdfTheme.js, test-pdf-customization.mjs]
- "login_loginpageclient_customerloginpage": "CustomerLoginPage()" | kind=code-symbol | source=app/(customer)/auth/login/LoginPageClient.js:L31 | neighbors=[LoginPageClient.js, isLikelyMobile()]
- "login_loginpageclient_islikelymobile": "isLikelyMobile()" | kind=code-symbol | source=app/(customer)/auth/login/LoginPageClient.js:L15 | neighbors=[LoginPageClient.js, CustomerLoginPage()]
- "login_route": "route.js" | kind=code-symbol | source=app/api/authas/login/route.js:L1 | neighbors=[252e194 e, POST()]
- "next_config": "next.config.mjs" | kind=code-symbol | source=next.config.mjs:L1 | neighbors=[252e194 e, nextConfig]
- "offline_db_appdatabase_deleteoffline": ".deleteOffline()" | kind=code-symbol | source=lib/offline/db.js:L104 | neighbors=[AppDatabase, .updateOffline()]
- "offline_db_appdatabase_getallpendingrecords": ".getAllPendingRecords()" | kind=code-symbol | source=lib/offline/db.js:L167 | neighbors=[AppDatabase, .getPendingCount()]
- "offline_db_appdatabase_getpendingcount": ".getPendingCount()" | kind=code-symbol | source=lib/offline/db.js:L196 | neighbors=[AppDatabase, .getAllPendingRecords()]
- "offline_db_appdatabase_updateoffline": ".updateOffline()" | kind=code-symbol | source=lib/offline/db.js:L73 | neighbors=[AppDatabase, .deleteOffline()]
- "offline_network_networkmonitor_checkconnection": ".checkConnection()" | kind=code-symbol | source=lib/offline/network.js:L54 | neighbors=[NetworkMonitor, .handleStatusChange()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-034.json

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
