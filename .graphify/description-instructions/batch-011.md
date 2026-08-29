# Node Description Batch 12 of 150

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "runtime_wasm_getorcreate": "getOrCreate()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, getAllComputedFields(), getAllModelExtensions(), getAllQueryCallbacks(), get(), r()] | lang=en
- "runtime_wasm_gr": "gr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, byteLength(), from(), on(), slice(), write()] | lang=en
- "runtime_wasm_ht": "Ht()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, renderAllMessages(), toString(), write(), nl(), zt()] | lang=en
- "runtime_wasm_indexof": "indexOf()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, F(), includes(), from(), lastIndexOf(), sn()] | lang=en
- "runtime_wasm_na": "na()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ia(), isPreviewFeatureOn(), isRawAction(), oa(), ra()] | lang=en
- "runtime_wasm_parseengineresponse": "parseEngineResponse()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, logger(), metrics(), request(), requestBatch(), transaction()] | lang=en
- "runtime_wasm_pt": "pt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, Bs(), fs(), Is(), _s(), ti()] | lang=en
- "runtime_wasm_qi": "qi()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, de(), getAllQueryCallbacks(), isEmpty(), ji(), sr()] | lang=en
- "runtime_wasm_r": "r()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, getOrCreate(), gi(), ko(), ni(), write()] | lang=en
- "runtime_wasm_request": "request()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, buildQueryError(), handleAndLogRequestError(), parseEngineResponse(), parseRequestError(), start()] | lang=en
- "runtime_wasm_start": "start()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, metrics(), request(), requestBatch(), runInChildSpan(), transaction()] | lang=en
- "runtime_wasm_wr": "Wr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, ge(), getAllModelExtensions(), H(), ka(), vt()] | lang=en
- "runtime_wasm_zt": "zt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, handleRequestError(), throwValidationError(), Ht(), xt(), Ye()] | lang=en
- "scratch_test_dlc_calc": "test-dlc-calc.js" | kind=code-symbol | source=scratch/test-dlc-calc.js:L1 | neighbors=[252e194 e, calculateDifferentialSummary(), { calculateDifferentialSummary }, params, values1, values2] | lang=en
- "sync_syncmanager_syncmanager_triggerauthrequired": ".triggerAuthRequired()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L72 | neighbors=[SyncManager, .bootstrapInitialData(), .processGetOperations(), .processPendingPatientResults(), .processPostOperations(), .processPutOperations()] | lang=en
- "test_route": "route.js" | kind=code-symbol | source=app/api/n8n/test/route.js:L1 | neighbors=[252e194 e, GET(), parseNullableFloat(), parseNullableOptions(), parseNullableString(), POST()] | lang=en
- "address_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/address/page.js:L1 | neighbors=[AddressSettingsPage(), 252e194 e, 84a8ff2 full indexeddb based, aae6bad fixed, cf2bb98 new] | lang=en
- "app_manifest": "manifest.js" | kind=code-symbol | source=app/manifest.js:L1 | neighbors=[manifest(), 252e194 e, 37dcb32 fixed, 4ba60cc fixed, 5e3d9ef d] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@10501e3454d7177be010f1cff61c9e80f5a3c199": "10501e3 fixed" | kind=Commit | source=git | neighbors=[offlineAuth.js, main, 36209a9 3.1.6, AdminLayoutClient.js, 6adf550 3.1.4] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@165f0578340e3cacf36b181128a45d5d4cb3be36": "165f057 f" | kind=Commit | source=git | neighbors=[offlineAuth.js, main, c82cfd7 3.0.10, LoginPageClient.js, 8065d22 3.0.8] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@37dcb32f78d04df212ec59d53db20e631fe28445": "37dcb32 fixed" | kind=Commit | source=git | neighbors=[manifest.js, main, f9e9bea 2.0.8, AdminLayoutClient.js, ec70d21 2.0.7] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@47b203242f9b38ab41626f6c5e7a4bab998b6664": "47b2032 ios issue pwa" | kind=Commit | source=git | neighbors=[layout.js, main, 9d71afc 3.0.22, sw.js, a09f0a9 3.0.21] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@4ba60cc54091accaf3a5e235ffb096bfc635a7c2": "4ba60cc fixed" | kind=Commit | source=git | neighbors=[manifest.js, main, ec70d21 2.0.7, LoginPageClient.js, e9f3af9 2.0.6] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@67434f223f7b1252ab6060c933993a8931b9cceb": "67434f2 payment issue only" | kind=Commit | source=git | neighbors=[main, e01658c 3.1.0, modelRegistry.js, syncManager.js, a3fc29c 3.0.25] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@91c4f7af40a2d44bc187b24e524af3343a1bcd2b": "91c4f7a feat: complete offline support for all routes in (customer)/(dashboard)" | kind=Commit | source=git | neighbors=[42773a1 1.1.31, main, e710341 1.1.32, sw.js, syncManager.js] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@a409645460f2c4149bc071edaf14308a60d4a49d": "a409645 fix: resolve Chrome reload loop and ensure robust offline App Shell loa…" | kind=Commit | source=git | neighbors=[main, 026962b 1.1.33, sw.js, syncManager.js, e710341 1.1.32] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@a4caf17584a6cf627f136cd64750c4d8b931fd34": "a4caf17 fix: ensure Service Worker only returns text/html on navigation and iso…" | kind=Commit | source=git | neighbors=[7fcf804 1.1.30, main, 42773a1 1.1.31, sw.js, syncManager.js] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@af73a19e998a7c39b96ac4674fe923b709cd6936": "af73a19 fixed" | kind=Commit | source=git | neighbors=[14ed805 3.0.0, main, c5cbecd 3.0.1, network.js, SyncIndicator.jsx] | lang=pt
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@b0c8bf993fd21f27406261e74a93fb832cc3fbb8": "b0c8bf9 full indexeddb based" | kind=Commit | source=git | neighbors=[05ff307 2.0.3, main, 9deec8f 2.0.4, MoneyRecipt.jsx, testsClient.jsx] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@b5ea15ffd18f840ca1b38f612bb136ee0a3ef904": "b5ea15f d" | kind=Commit | source=git | neighbors=[7134058 1.1.29, main, 7fcf804 1.1.30, sw.js, syncManager.js] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@c070c558cb02bec0f637d5d6bc279aaf24ef1ffa": "c070c55 fixed" | kind=Commit | source=git | neighbors=[7ec76ba 2.0.12, main, 720f016 2.0.13, proxy.js, sw.js] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@cb869689d52f455ca2c62b21fd82de49a0c6c331": "cb86968 fixed" | kind=Commit | source=git | neighbors=[a14c9b8 2.0.14, main, e9caab3 2.0.15, AdminLayoutClient.js, syncManager.js] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@d84f15f0e1581570a66f2427e735b9ac8d3eba9f": "d84f15f f" | kind=Commit | source=git | neighbors=[0afb0ac 2.0.19, main, 6325ac4 2.0.20, SyncIndicator.jsx, sw.js] | lang=en
- "context_trackingcontext": "TrackingContext.js" | kind=code-symbol | source=app/context/TrackingContext.js:L1 | neighbors=[252e194 e, generateSessionId(), TrackingContext, TrackingProvider(), useTracking()] | lang=en
- "customer_page": "page.jsx" | kind=code-symbol | source=app/(customer)/page.jsx:L1 | neighbors=[252e194 e, 5e3d9ef d, metadata, RootPage(), LoginPageClient.js] | lang=en
- "dashboard_layout": "layout.js" | kind=code-symbol | source=app/(customer)/(dashboard)/layout.js:L1 | neighbors=[252e194 e, 5e3d9ef d, bcee6c8 fi, cfa3879 f, AdminDashboardLayout()] | lang=en
- "dashboard_rangeselector": "RangeSelector.js" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/RangeSelector.js:L1 | neighbors=[252e194 e, 6812ab9 new ui dashboard, page.js, DashboardRangeSelector(), quickRanges] | lang=en
- "lib_auth_verifytoken": "verifyToken()" | kind=code-symbol | source=lib/auth.js:L12 | neighbors=[auth.js, requireAdmin(), requireSuperAdmin(), requireUser(), verifySuperAdminAPI()] | lang=en
- "lib_clientauth": "clientAuth.js" | kind=code-symbol | source=lib/clientAuth.js:L1 | neighbors=[252e194 e, 4d7570f fixed, 84a8ff2 full indexeddb based, cf2bb98 new, useAdminPermissions()] | lang=en
- "lib_formulaengine_runformulaengine": "runFormulaEngine()" | kind=code-symbol | source=lib/formulaEngine.js:L33 | neighbors=[formulaEngine.js, check-reg-17.js, test-fix-reg-17.js, test-formula-run.js, test-reg-15.js] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-011.json

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
