# Node Description Batch 149 of 150

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

- "scratch_test_user_lipid_checkformuladependencies": "checkFormulaDependencies()" | kind=code-symbol | source=scratch/test-user-lipid.js:L236 | neighbors=[test-user-lipid.js]
- "scratch_test_user_lipid_evaluatedformulas": "evaluatedFormulas" | kind=code-symbol | source=scratch/test-user-lipid.js:L290 | neighbors=[test-user-lipid.js]
- "scratch_test_user_lipid_evaluateexpression": "evaluateExpression()" | kind=code-symbol | source=scratch/test-user-lipid.js:L188 | neighbors=[test-user-lipid.js]
- "scratch_test_user_lipid_formulas": "formulas" | kind=code-symbol | source=scratch/test-user-lipid.js:L263 | neighbors=[test-user-lipid.js]
- "scratch_test_user_lipid_res": "res" | kind=code-symbol | source=scratch/test-user-lipid.js:L287 | neighbors=[test-user-lipid.js]
- "scratch_test_user_lipid_typedvalues": "typedValues" | kind=code-symbol | source=scratch/test-user-lipid.js:L273 | neighbors=[test-user-lipid.js]
- "scratch_test_user_lipid_userparams": "userParams" | kind=code-symbol | source=scratch/test-user-lipid.js:L251 | neighbors=[test-user-lipid.js]
- "scratch_test_user_lipid_valuesmap": "valuesMap" | kind=code-symbol | source=scratch/test-user-lipid.js:L279 | neighbors=[test-user-lipid.js]
- "scratch_test_whatsapp_url_getregistrationwhatsappurl": "getRegistrationWhatsappUrl()" | kind=code-symbol | source=scratch/test-whatsapp-url.mjs:L1 | neighbors=[test-whatsapp-url.mjs]
- "scratch_test_whatsapp_url_samplereg": "sampleReg" | kind=code-symbol | source=scratch/test-whatsapp-url.mjs:L29 | neighbors=[test-whatsapp-url.mjs]
- "scratch_test_whatsapp_url_url": "url" | kind=code-symbol | source=scratch/test-whatsapp-url.mjs:L40 | neighbors=[test-whatsapp-url.mjs]
- "scratch_trigger_sync_main": "main()" | kind=code-symbol | source=scratch/trigger-sync.js:L4 | neighbors=[trigger-sync.js]
- "scratch_trigger_sync_prisma": "prisma" | kind=code-symbol | source=scratch/trigger-sync.js:L2 | neighbors=[trigger-sync.js]
- "scratch_trigger_sync_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/trigger-sync.js:L1 | neighbors=[trigger-sync.js]
- "settings_page_settingscontent": "SettingsContent()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/page.js:L28 | neighbors=[page.js]
- "settings_page_settingspage": "SettingsPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/page.js:L298 | neighbors=[page.js]
- "settings_route_get": "GET()" | kind=code-symbol | source=app/api/settings/route.js:L5 | neighbors=[route.js]
- "settings_route_post": "POST()" | kind=code-symbol | source=app/api/settings/route.js:L36 | neighbors=[route.js]
- "sync_route_post": "POST()" | kind=code-symbol | source=app/api/offline/sync/route.js:L5 | neighbors=[route.js]
- "sync_syncmanager_model_sync_priority": "MODEL_SYNC_PRIORITY" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L7 | neighbors=[syncManager.js]
- "sync_syncmanager_syncmanager_buildsyncpayload": ".buildSyncPayload()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L91 | neighbors=[SyncManager]
- "sync_syncmanager_syncmanager_constructor": ".constructor()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L23 | neighbors=[SyncManager]
- "test_report_page_activemenubuttonstyle": "activeMenuButtonStyle" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/page.js:L135 | neighbors=[page.js]
- "test_report_page_dangermenubuttonstyle": "dangerMenuButtonStyle" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/page.js:L152 | neighbors=[page.js]
- "test_report_page_exportcolumns": "exportColumns" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/page.js:L266 | neighbors=[page.js]
- "test_report_page_getpaymentchip": "getPaymentChip()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/page.js:L174 | neighbors=[page.js]
- "test_report_page_gettestchip": "getTestChip()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/page.js:L230 | neighbors=[page.js]
- "test_report_page_menubuttonstyle": "menuButtonStyle" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/page.js:L103 | neighbors=[page.js]
- "test_report_page_testreportpage": "TestReportPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/page.js:L293 | neighbors=[page.js]
- "test_route_get": "GET()" | kind=code-symbol | source=app/api/n8n/test/route.js:L49 | neighbors=[route.js]
- "test_route_parsenullablefloat": "parseNullableFloat()" | kind=code-symbol | source=app/api/n8n/test/route.js:L5 | neighbors=[route.js]
- "test_route_parsenullableoptions": "parseNullableOptions()" | kind=code-symbol | source=app/api/n8n/test/route.js:L33 | neighbors=[route.js]
- "tests_page_settingstestspage": "SettingsTestsPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/tests/page.js:L7 | neighbors=[page.js]
- "tests_route_delete": "DELETE()" | kind=code-symbol | source=app/api/tests/route.js:L379 | neighbors=[route.js]
- "tests_testsclient_common_lab_units": "COMMON_LAB_UNITS" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/tests/testsClient.jsx:L50 | neighbors=[testsClient.jsx]
- "tests_testsclient_testsclient": "TestsClient()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/tests/testsClient.jsx:L81 | neighbors=[testsClient.jsx]
- "ui_alert_alert": "Alert()" | kind=code-symbol | source=components/ui/Alert.js:L4 | neighbors=[Alert.js]
- "ui_avatar_avatar": "Avatar()" | kind=code-symbol | source=components/ui/Avatar.js:L3 | neighbors=[Avatar.js]
- "ui_badge_badge": "Badge()" | kind=code-symbol | source=components/ui/Badge.js:L3 | neighbors=[Badge.js]
- "ui_button_button": "Button()" | kind=code-symbol | source=components/ui/Button.js:L4 | neighbors=[Button.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-148.json

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
