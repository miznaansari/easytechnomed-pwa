# Node Description Batch 17 of 150

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

- "runtime_wasm_transaction": "transaction()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, getExternalAdapterError(), ja(), parseEngineResponse(), start()]
- "runtime_wasm_writeline": "writeLine()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, write(), newLine(), writeWithContents(), writeWithItems()]
- "runtime_wasm_writeuintbe": "writeUIntBE()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, writeIntBE(), B(), V(), Y()]
- "runtime_wasm_writeuintle": "writeUIntLE()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, writeIntLE(), B(), V(), Y()]
- "runtime_wasm_writewithcontents": "writeWithContents()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_wasm_writewithitems": "writeWithItems()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_wasm_ye": "Ye()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ci(), nl(), oi(), zt()]
- "scratch_backfill_counters": "scratch-backfill-counters.js" | kind=code-symbol | source=scratch-backfill-counters.js:L1 | neighbors=[252e194 e, generateRandomSuffix(), main(), prisma, { PrismaClient }]
- "scratch_test_patient_context": "test-patient-context.js" | kind=code-symbol | source=scratch/test-patient-context.js:L1 | neighbors=[252e194 e, addPatientContextToValuesMap(), valuesMap1, valuesMap2, valuesMap3]
- "scratch_test_user_cbc": "test-user-cbc.js" | kind=code-symbol | source=scratch/test-user-cbc.js:L1 | neighbors=[252e194 e, calculateAllDependents(), inputValues, result, testDefinition]
- "auth_offlineauth_getcachedsession": "getCachedSession()" | kind=code-symbol | source=lib/auth/offlineAuth.js:L56 | neighbors=[offlineAuth.js, saveAuthenticatedSession(), getOrCreateOfflineSession(), isLocalSessionValid()]
- "check_route": "route.js" | kind=code-symbol | source=app/api/auth/check/route.js:L1 | neighbors=[GET(), HEAD(), 252e194 e, d446d11 fixed code]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@14fa292a5b0d0d359673fa5f43e1a99e00e1fd9d": "14fa292 f" | kind=Commit | source=git | neighbors=[main, 48cc7ec 2.0.22, LoginPageClient.js, f4e1e65 2.0.21]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@2daebb8689d13f76c6f393560192812886da597a": "2daebb8 f" | kind=Commit | source=git | neighbors=[main, 8065d22 3.0.8, AdminLayoutClient.js, 3e84241 3.0.7]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@37ee548f75528c10f3b6dc026a6c0127527cf9ff": "37ee548 f" | kind=Commit | source=git | neighbors=[1ba5187 2.0.17, main, dad94e1 2.0.18, AdminLayoutClient.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@3c7e66b6e8b2bb160a8c8250a028cfcc607c94d8": "3c7e66b f" | kind=Commit | source=git | neighbors=[main, 2ef3785 2.0.1, syncManager.js, 3f7f1b4 2.0.0]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@66182613cbf1407454f175eca3ebc193d824cf50": "6618261 f" | kind=Commit | source=git | neighbors=[main, e9f3af9 2.0.6, sw.js, a4a950a 2.0.5]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@78dd9766836ff1b3213705698b82d1204bdd95d2": "78dd976 fixed" | kind=Commit | source=git | neighbors=[3917c34 3.1.7, main, 74d638d 3.1.9, ReLoginModal.jsx]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@8184d3220868fc63d1733f795d71eba6e0d66694": "8184d32 f" | kind=Commit | source=git | neighbors=[main, 124b88b 3.0.13, SyncIndicator.jsx, c41a815 3.0.11]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@a356e4110184f7632ae4a93517343d1f4f4f4b4e": "a356e41 f" | kind=Commit | source=git | neighbors=[462f542 3.0.4, main, 005eea6 f, SyncIndicator.jsx]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@c15ae1e299fea68996b95acc05fb409a770f9fb0": "c15ae1e fixed" | kind=Commit | source=git | neighbors=[9a50d76 3.0.2, main, 462f542 3.0.4, network.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@c6b79b3c499a6bcbc28fc6cd35d2774333ca8d06": "c6b79b3 f" | kind=Commit | source=git | neighbors=[005eea6 f, main, 3e84241 3.0.7, SyncIndicator.jsx]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@cea69a2d1359d130ffb3efc703dd40b8d9119e94": "cea69a2 d" | kind=Commit | source=git | neighbors=[main, 2476fb6 2.0.9, sw.js, f9e9bea 2.0.8]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@cfa38796993167732f743648a5ba5eb5185d81b5": "cfa3879 f" | kind=Commit | source=git | neighbors=[bcee6c8 fi, main, eb42395 2.0.16, layout.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@d87cf8780d5acfad16d6d403dbb15777bcfebd11": "d87cf87 d" | kind=Commit | source=git | neighbors=[main, 7134058 1.1.29, sw.js, f9a9e52 1.1.28]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@fafa3d9183637b6a594e9828f4bb2d45607463f1": "fafa3d9 f" | kind=Commit | source=git | neighbors=[9deec8f 2.0.4, main, a4a950a 2.0.5, sw.js]
- "components_pwaregister": "PWARegister.js" | kind=code-symbol | source=components/PWARegister.js:L1 | neighbors=[252e194 e, a712d0e ios issue pwa, eb8b1e5 f, PWARegister()]
- "context_offlinesynccontext": "OfflineSyncContext.js" | kind=code-symbol | source=context/OfflineSyncContext.js:L1 | neighbors=[2b2534c f, 9f59247 expire token, OfflineSyncContext, useOfflineSync()]
- "customer_layout": "layout.jsx" | kind=code-symbol | source=app/(customer)/layout.jsx:L1 | neighbors=[252e194 e, 5e3d9ef d, CustomerLayout(), theme]
- "dashboard_error": "error.js" | kind=code-symbol | source=app/(customer)/(dashboard)/error.js:L1 | neighbors=[5e3d9ef d, cf2bb98 new, eb8b1e5 f, DashboardErrorBoundary()]
- "doctors_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/doctors/route.js:L6 | neighbors=[route.js, GET(), POST(), PUT()]
- "generated_client_index_browser": "index-browser.js" | kind=code-symbol | source=scratch/generated-client/index-browser.js:L1 | neighbors=[252e194 e, {
  Decimal,
  objectEnumValues,
  make…, Prisma, PrismaClient]
- "generated_client_wasm": "wasm.js" | kind=code-symbol | source=scratch/generated-client/wasm.js:L1 | neighbors=[252e194 e, {
  Decimal,
  objectEnumValues,
  make…, Prisma, PrismaClient]
- "hooks_useofflinedata": "useOfflineData.js" | kind=code-symbol | source=hooks/useOfflineData.js:L1 | neighbors=[2b2534c f, useOfflineData(), useSync.js, useSync()]
- "hooks_usesync": "useSync.js" | kind=code-symbol | source=hooks/useSync.js:L1 | neighbors=[2b2534c f, 9f59247 expire token, useOfflineData.js, useSync()]
- "lib_firebase": "firebase.js" | kind=code-symbol | source=lib/firebase.js:L1 | neighbors=[252e194 e, auth, firebaseConfig, googleProvider]
- "lib_formulautils_checkformuladependencies": "checkFormulaDependencies()" | kind=code-symbol | source=lib/formulaUtils.js:L422 | neighbors=[formulaEngine.js, formulaUtils.js, calculateAllDependents(), test-formula-verification.mjs]
- "lib_formulautils_evaluateexpression": "evaluateExpression()" | kind=code-symbol | source=lib/formulaUtils.js:L332 | neighbors=[formulaEngine.js, formulaUtils.js, calculateAllDependents(), test-formula-verification.mjs]
- "lib_reportsecurity_decryptreporttoken": "decryptReportToken()" | kind=code-symbol | source=lib/reportSecurity.js:L115 | neighbors=[reportSecurity.js, getKeyRing(), verifyReportToken(), test_identity_and_qr.mjs]
- "lib_reportsecurity_generatereporttoken": "generateReportToken()" | kind=code-symbol | source=lib/reportSecurity.js:L74 | neighbors=[reportSecurity.js, getKeyRing(), verifyReportToken(), test_identity_and_qr.mjs]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-016.json

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
