# Node Description Batch 3 of 150

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "runtime_edge_au": "Au()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, Ar(), addErrorMessage(), addField(), addSuggestion(), asObject()]
- "runtime_edge_esm_cu": "cu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, addErrorMessage(), addSuggestion(), asObject(), du(), getDeepSubSelectionValue()]
- "runtime_edge_esm_fu": "fu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, addErrorMessage(), An(), findField(), getOutputTypeDescription(), getSelectionPath()]
- "runtime_edge_esm_markaserror": "markAsError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, bu(), Eu(), fu(), gu(), hc()]
- "runtime_edge_esm_qo": "qo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, lo(), getArgumentName(), getArgumentPath(), getSelectionPath(), isPreviewFeatureOn()]
- "runtime_edge_esm_tostring": "toString()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, ds(), kr(), ll(), lo(), ms()]
- "runtime_edge_esm_wu": "wu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, Tr(), addErrorMessage(), addField(), addSuggestion(), asObject()]
- "runtime_edge_ju": "ju()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, findField(), getComputedFields(), getGlobalOmit(), getOutputTypeDescription(), getSelectionPath()]
- "runtime_edge_markaserror": "markAsError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, cu(), hu(), iu(), ku(), pu()]
- "runtime_edge_tostring": "toString()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, bo(), Cr(), cu(), hl(), ls()]
- "runtime_library_markaserror": "markAsError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, Bp(), gp(), ip(), jp(), lp()]
- "runtime_library_p": "_p()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, kp(), addErrorMessage(), asObject(), getDeepField(), getDeepFieldValue()]
- "runtime_library_r": "r()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, _a(), As(), ct(), getOrCreate(), Gl()]
- "runtime_library_wp": "wp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L25 | neighbors=[library.js, Tt(), addSuggestion(), getLocation(), hasField(), lineAt()]
- "runtime_react_native_asobject": "asObject()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, bo(), du(), getSelectionParent(), gu(), ju()]
- "runtime_react_native_u": "u()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, g(), addErrorMessage(), asObject(), bo(), getDeepSubSelectionValue()]
- "runtime_wasm_asobject": "asObject()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, Bs(), fs(), getSelectionParent(), gs(), js()]
- "sync_syncmanager_syncmanager": "SyncManager" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L22 | neighbors=[syncManager.js, .bootstrapInitialData(), .buildSyncPayload(), .constructor(), .notifyState(), .processGetOperations()]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@aae6bad9dc767cb5f6d4cb87cdfc1f43f4fc71f4": "aae6bad fixed" | kind=Commit | source=git | neighbors=[1064f6b 2.0.10, page.js, main, 5ff2734 2.0.11, MoneyRecipt.jsx, showResult.jsx]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@d446d113d3b863e73edd5a9a002bfcb601b249d8": "d446d11 fixed code" | kind=Commit | source=git | neighbors=[main, route.js, 98ad5ca 2.0.24, route.js, SyncIndicator.jsx, SyncStatusIcon.jsx]
- "component_moneyrecipt": "MoneyRecipt.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/MoneyRecipt.jsx:L1 | neighbors=[252e194 e, 532b740 fixed, 53ca5c1 stable version 1, 84a8ff2 full indexeddb based, 8b1f3d8 a, aae6bad fixed]
- "generated_client_index": "index.js" | kind=code-symbol | source=scratch/generated-client/index.js:L1 | neighbors=[252e194 e, default.d.ts, config, fs, path, Prisma]
- "offline_db": "db.js" | kind=code-symbol | source=lib/offline/db.js:L1 | neighbors=[2b2534c f, 6236f60 new update, 84a8ff2 full indexeddb based, AppDatabase, db, timestamps.js]
- "offline_db_appdatabase": "AppDatabase" | kind=code-symbol | source=lib/offline/db.js:L4 | neighbors=[db.js, .clearAllData(), .constructor(), .deleteOffline(), .getAllErrorRecords(), .getAllPendingRecords()]
- "offline_syncindicator": "SyncIndicator.jsx" | kind=code-symbol | source=components/offline/SyncIndicator.jsx:L1 | neighbors=[2b2534c f, 8184d32 f, 9f59247 expire token, a356e41 f, af73a19 fixed, b5dedb0 f]
- "print_reportpdfgenerator": "reportPdfGenerator.js" | kind=code-symbol | source=lib/offline/print/reportPdfGenerator.js:L1 | neighbors=[6c2dfe4 test, 8b1f3d8 a, offlinePrint.js, openPrint.js, qrGenerator.js, generateQrCodePngBytes()]
- "runtime_edge_esm_lo": "lo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, getArgumentName(), getArgumentPath(), _getName(), getSelectionPath(), nt()]
- "runtime_edge_o": "O()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ce(), eu(), Il(), ke(), l()]
- "runtime_library_t": "t()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, ea(), newLine(), otherwise(), runInChildSpan(), wa()]
- "runtime_react_native_getdeepsubselectionvalue": "getDeepSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, bo(), getSubSelectionValue(), gu(), ju(), mu()]
- "runtime_wasm_getdeepsubselectionvalue": "getDeepSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, Bs(), getSubSelectionValue(), gs(), js(), ls()]
- "runtime_wasm_markaserror": "markAsError()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, Bs(), gs(), Is(), js(), Ms()]
- "runtime_wasm_si": "si()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, oi(), Bt(), _getName(), isBuffer(), ni()]
- "runtime_wasm_v": "V()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, compare(), copy(), fill(), readIntBE(), readIntLE()]
- "scratch_test_formula_verification": "test-formula-verification.mjs" | kind=code-symbol | source=scratch/test-formula-verification.mjs:L1 | neighbors=[252e194 e, calculateAllDependents(), checkFormulaDependencies(), evaluateExpression(), overrides1, overrides2]
- "tests_testsclient": "testsClient.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/tests/testsClient.jsx:L1 | neighbors=[252e194 e, 56f4d63 f, 6c2dfe4 test, 7d8c494 fxed, 84a8ff2 full indexeddb based, 9e25c19 f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@9f59247de8e17ece3b64548107440d0473aa2d43": "9f59247 expire token" | kind=Commit | source=git | neighbors=[48cc7ec 2.0.22, main, eacdd5b 2.0.23, resultEntry.jsx, OfflineSyncContext.js, useSync.js]
- "component_showresultmobile": "showResultMobile.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L1 | neighbors=[252e194 e, 532b740 fixed, 53ca5c1 stable version 1, 8b1f3d8 a, aae6bad fixed, showResult.jsx]
- "doctor_summary_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/doctor-summary/page.js:L1 | neighbors=[252e194 e, 2b2534c f, 532b740 fixed, 53ca5c1 stable version 1, 6fcf015 f, 7d8c494 fxed]
- "runtime_edge_addsuggestion": "addSuggestion()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Ao(), Au(), du(), eu(), mu()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-002.json

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
