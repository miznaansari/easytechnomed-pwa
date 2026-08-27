# Node Description Batch 49 of 148

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

- "scratch_test_calc_checkformuladependencies": "checkFormulaDependencies()" | kind=code-symbol | source=scratch/test-calc.js:L64 | neighbors=[test-calc.js, calculateAllDependents()]
- "scratch_test_calc_evaluateexpression": "evaluateExpression()" | kind=code-symbol | source=scratch/test-calc.js:L21 | neighbors=[test-calc.js, calculateAllDependents()]
- "scratch_test_calc_export_calculatedifferentialsummary": "calculateDifferentialSummary()" | kind=code-symbol | source=scratch/test-calc-export.js:L67 | neighbors=[test-calc-export.js, test-dlc-calc.js]
- "scratch_test_db": "test-db.mjs" | kind=code-symbol | source=scratch/test-db.mjs:L1 | neighbors=[252e194 e, main()]
- "scratch_test_report_security": "test-report-security.mjs" | kind=code-symbol | source=scratch/test-report-security.mjs:L1 | neighbors=[252e194 e, runSecurityTests()]
- "scratch_test_sync_bootstrap": "test-sync-bootstrap.mjs" | kind=code-symbol | source=scratch/test-sync-bootstrap.mjs:L1 | neighbors=[7d8c494 fxed, verifyBackendEndpoints()]
- "seed_parameters_route_get": "GET()" | kind=code-symbol | source=app/api/seed-parameters/route.js:L163 | neighbors=[route.js, processTestParameters()]
- "seed_parameters_route_processtestparameters": "processTestParameters()" | kind=code-symbol | source=app/api/seed-parameters/route.js:L4 | neighbors=[route.js, GET()]
- "suggestion_route_callgeminimodels": "callGeminiModels()" | kind=code-symbol | source=app/api/ai/suggestion/route.js:L4 | neighbors=[route.js, POST()]
- "suggestion_route_post": "POST()" | kind=code-symbol | source=app/api/ai/suggestion/route.js:L50 | neighbors=[route.js, callGeminiModels()]
- "sync_modelregistry_model_registry": "MODEL_REGISTRY" | kind=code-symbol | source=lib/offline/sync/modelRegistry.js:L6 | neighbors=[modelRegistry.js, syncManager.js]
- "sync_syncmanager_syncmanager_bootstrapinitialdata": ".bootstrapInitialData()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L136 | neighbors=[SyncManager, .triggerAuthRequired()]
- "sync_syncmanager_syncmanager_processgetoperations": ".processGetOperations()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L793 | neighbors=[SyncManager, .triggerAuthRequired()]
- "sync_syncmanager_syncmanager_processpendingpatientresults": ".processPendingPatientResults()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L955 | neighbors=[SyncManager, .triggerAuthRequired()]
- "sync_syncmanager_syncmanager_processpostoperations": ".processPostOperations()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L665 | neighbors=[SyncManager, .triggerAuthRequired()]
- "sync_syncmanager_syncmanager_processputoperations": ".processPutOperations()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L737 | neighbors=[SyncManager, .triggerAuthRequired()]
- "sync_syncmanager_syncmanager_subscribe": ".subscribe()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L37 | neighbors=[SyncManager, .notifyState()]
- "sync_syncmanager_syncmanager_sync": ".sync()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L546 | neighbors=[SyncManager, .notifyState()]
- "test_route_parsenullablestring": "parseNullableString()" | kind=code-symbol | source=app/api/n8n/test/route.js:L16 | neighbors=[route.js, POST()]
- "test_route_post": "POST()" | kind=code-symbol | source=app/api/n8n/test/route.js:L61 | neighbors=[route.js, parseNullableString()]
- "tests_route_get": "GET()" | kind=code-symbol | source=app/api/tests/route.js:L68 | neighbors=[route.js, serializeTests()]
- "tests_route_post": "POST()" | kind=code-symbol | source=app/api/tests/route.js:L165 | neighbors=[route.js, serializeSingleTest()]
- "tests_route_put": "PUT()" | kind=code-symbol | source=app/api/tests/route.js:L265 | neighbors=[route.js, serializeSingleTest()]
- "tests_route_serializetests": "serializeTests()" | kind=code-symbol | source=app/api/tests/route.js:L6 | neighbors=[route.js, GET()]
- "ui_alert": "Alert.js" | kind=code-symbol | source=components/ui/Alert.js:L1 | neighbors=[252e194 e, Alert()]
- "ui_avatar": "Avatar.js" | kind=code-symbol | source=components/ui/Avatar.js:L1 | neighbors=[252e194 e, Avatar()]
- "ui_badge": "Badge.js" | kind=code-symbol | source=components/ui/Badge.js:L1 | neighbors=[252e194 e, Badge()]
- "ui_dialog": "Dialog.js" | kind=code-symbol | source=components/ui/Dialog.js:L1 | neighbors=[252e194 e, Dialog()]
- "ui_input": "Input.js" | kind=code-symbol | source=components/ui/Input.js:L1 | neighbors=[252e194 e, Input]
- "ui_label": "Label.js" | kind=code-symbol | source=components/ui/Label.js:L1 | neighbors=[252e194 e, Label()]
- "ui_loader_loader": "Loader()" | kind=code-symbol | source=components/ui/Loader.js:L3 | neighbors=[Button.js, Loader.js]
- "ui_skeleton": "Skeleton.js" | kind=code-symbol | source=components/ui/Skeleton.js:L1 | neighbors=[252e194 e, Skeleton()]
- "upload_frame_route": "route.js" | kind=code-symbol | source=app/api/settings/upload-frame/route.js:L1 | neighbors=[252e194 e, POST()]
- "utils_debounce": "debounce.js" | kind=code-symbol | source=app/utils/debounce.js:L1 | neighbors=[252e194 e, debounce()]
- "verify_email_route": "route.js" | kind=code-symbol | source=app/api/authas/verify-email/route.js:L1 | neighbors=[252e194 e, GET()]
- "address_page_addresssettingspage": "AddressSettingsPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/address/page.js:L22 | neighbors=[page.js]
- "address_route_get": "GET()" | kind=code-symbol | source=app/api/settings/address/route.js:L5 | neighbors=[route.js]
- "address_route_post": "POST()" | kind=code-symbol | source=app/api/settings/address/route.js:L30 | neighbors=[route.js]
- "admin_route_post": "POST()" | kind=code-symbol | source=app/api/tracking/admin/route.js:L5 | neighbors=[route.js]
- "app_layout_metadata": "metadata" | kind=code-symbol | source=app/layout.js:L13 | neighbors=[layout.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-048.json

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
