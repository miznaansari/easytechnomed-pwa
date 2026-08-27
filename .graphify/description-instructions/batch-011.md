# Node Description Batch 12 of 148

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

- "runtime_wasm_wr": "Wr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, ge(), getAllModelExtensions(), H(), ka(), vt()] | lang=en
- "runtime_wasm_zt": "zt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, handleRequestError(), throwValidationError(), Ht(), xt(), Ye()] | lang=en
- "scratch_test_dlc_calc": "test-dlc-calc.js" | kind=code-symbol | source=scratch/test-dlc-calc.js:L1 | neighbors=[252e194 e, calculateDifferentialSummary(), { calculateDifferentialSummary }, params, values1, values2] | lang=en
- "sync_syncmanager_syncmanager_triggerauthrequired": ".triggerAuthRequired()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L72 | neighbors=[SyncManager, .bootstrapInitialData(), .processGetOperations(), .processPendingPatientResults(), .processPostOperations(), .processPutOperations()] | lang=en
- "test_route": "route.js" | kind=code-symbol | source=app/api/n8n/test/route.js:L1 | neighbors=[252e194 e, GET(), parseNullableFloat(), parseNullableOptions(), parseNullableString(), POST()] | lang=en
- "address_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/address/page.js:L1 | neighbors=[AddressSettingsPage(), 252e194 e, 84a8ff2 full indexeddb based, aae6bad fixed, cf2bb98 new] | lang=en
- "app_manifest": "manifest.js" | kind=code-symbol | source=app/manifest.js:L1 | neighbors=[manifest(), 252e194 e, 37dcb32 fixed, 4ba60cc fixed, 5e3d9ef d] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@37dcb32f78d04df212ec59d53db20e631fe28445": "37dcb32 fixed" | kind=Commit | source=git | neighbors=[manifest.js, main, f9e9bea 2.0.8, AdminLayoutClient.js, ec70d21 2.0.7] | lang=en
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@4ba60cc54091accaf3a5e235ffb096bfc635a7c2": "4ba60cc fixed" | kind=Commit | source=git | neighbors=[manifest.js, main, ec70d21 2.0.7, LoginPageClient.js, e9f3af9 2.0.6] | lang=en
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
- "lib_auth_verifytoken": "verifyToken()" | kind=code-symbol | source=lib/auth.js:L12 | neighbors=[auth.js, requireAdmin(), requireSuperAdmin(), requireUser(), verifySuperAdminAPI()] | lang=en
- "lib_clientauth": "clientAuth.js" | kind=code-symbol | source=lib/clientAuth.js:L1 | neighbors=[252e194 e, 4d7570f fixed, 84a8ff2 full indexeddb based, cf2bb98 new, useAdminPermissions()] | lang=en
- "lib_formulaengine_runformulaengine": "runFormulaEngine()" | kind=code-symbol | source=lib/formulaEngine.js:L33 | neighbors=[formulaEngine.js, check-reg-17.js, test-fix-reg-17.js, test-formula-run.js, test-reg-15.js] | lang=en
- "lib_mail": "mail.js" | kind=code-symbol | source=lib/mail.js:L1 | neighbors=[252e194 e, sendApprovalEmail(), sendRejectionEmail(), sendVerificationEmail(), transporter] | lang=en
- "members_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/members/page.js:L1 | neighbors=[252e194 e, 84a8ff2 full indexeddb based, aae6bad fixed, cf2bb98 new, WorkspaceMembersPage()] | lang=en
- "paymentid_route": "route.js" | kind=code-symbol | source=app/api/print-subscription-invoice/[paymentId]/route.js:L1 | neighbors=[252e194 e, formatDate(), formatDateTime(), GET(), numberToWords()] | lang=en
- "prisma_process_dynamic_parameters": "process-dynamic-parameters.js" | kind=code-symbol | source=prisma/process-dynamic-parameters.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }, processTestParameters()] | lang=en
- "runtime_edge_ao": "Ao()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, addSuggestion(), hasField(), bu(), pu()] | lang=en
- "runtime_edge_ca": "Ca()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, de(), mi(), rn(), pi()] | lang=en
- "runtime_edge_ce": "ce()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, e(), O(), go(), rl()] | lang=en
- "runtime_edge_cs": "cs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, bc(), getAllComputedFields(), gt(), values()] | lang=en
- "runtime_edge_dt": "dt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, ko(), Fr(), Yo(), zc()] | lang=en
- "runtime_edge_esm_ao": "Ao()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, addSuggestion(), hasField(), pu(), yu()] | lang=en
- "runtime_edge_esm_ce": "ce()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, e(), O(), el(), mo()] | lang=en
- "runtime_edge_esm_cr": "cr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Ca(), Pa(), Ta(), va()] | lang=en
- "runtime_edge_esm_dc": "dc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, he(), Qe(), text(), N()] | lang=en
- "runtime_edge_esm_findfield": "findField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, fu(), lu(), nestSelection(), u()] | lang=en
- "runtime_edge_esm_ft": "ft()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, tc(), ic(), rc(), wo()] | lang=en
- "runtime_edge_esm_getselectionparent": "getSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, getDeepSelectionParent(), asObject(), getField(), getSubSelectionValue()] | lang=en

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
