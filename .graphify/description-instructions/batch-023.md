# Node Description Batch 24 of 148

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

- "runtime_wasm_ze": "ze()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, Ct(), di(), si()]
- "samples_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/samples/route.js:L1 | neighbors=[252e194 e, GET(), POST(), serializeData()]
- "scratch_backfill": "scratch-backfill.js" | kind=code-symbol | source=scratch-backfill.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_backfill_incentives": "scratch-backfill-incentives.js" | kind=code-symbol | source=scratch-backfill-incentives.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_bootstrap_dates": "bootstrap-dates.js" | kind=code-symbol | source=scratch/bootstrap-dates.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_data": "check-data.js" | kind=code-symbol | source=scratch/check-data.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_formulas": "check-formulas.js" | kind=code-symbol | source=scratch/check-formulas.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_formulas_2398": "check-formulas-2398.js" | kind=code-symbol | source=scratch/check-formulas-2398.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_kft_all": "check-kft-all.js" | kind=code-symbol | source=scratch/check-kft-all.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_reg_17": "check-reg-17.js" | kind=code-symbol | source=scratch/check-reg-17.js:L1 | neighbors=[252e194 e, runFormulaEngine(), main(), prisma]
- "scratch_cleanup_cbc": "cleanup-cbc.js" | kind=code-symbol | source=scratch/cleanup-cbc.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_inspect_cbc": "inspect-cbc.js" | kind=code-symbol | source=scratch/inspect-cbc.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_inspect_kft": "inspect-kft.js" | kind=code-symbol | source=scratch/inspect-kft.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_sync_expiry_to_workspace": "sync-expiry-to-workspace.js" | kind=code-symbol | source=scratch/sync-expiry-to-workspace.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_sync_kft_formulas": "sync-kft-formulas.js" | kind=code-symbol | source=scratch/sync-kft-formulas.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_test_fix_reg_17": "test-fix-reg-17.js" | kind=code-symbol | source=scratch/test-fix-reg-17.js:L1 | neighbors=[252e194 e, runFormulaEngine(), main(), prisma]
- "scratch_test_formula_run": "test-formula-run.js" | kind=code-symbol | source=scratch/test-formula-run.js:L1 | neighbors=[252e194 e, runFormulaEngine(), main(), prisma]
- "scratch_test_prisma": "test-prisma.js" | kind=code-symbol | source=scratch/test-prisma.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_test_whatsapp_url": "test-whatsapp-url.mjs" | kind=code-symbol | source=scratch/test-whatsapp-url.mjs:L1 | neighbors=[252e194 e, getRegistrationWhatsappUrl(), sampleReg, url]
- "scratch_trigger_sync": "trigger-sync.js" | kind=code-symbol | source=scratch/trigger-sync.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "ui_button": "Button.js" | kind=code-symbol | source=components/ui/Button.js:L1 | neighbors=[252e194 e, Button(), Loader.js, Loader()]
- "userapprove_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/userApprove/page.js:L1 | neighbors=[252e194 e, aae6bad fixed, AdminUserApprovePage(), UserApproveTable.js]
- "address_route": "route.js" | kind=code-symbol | source=app/api/settings/address/route.js:L1 | neighbors=[GET(), POST(), 252e194 e]
- "auth_offlineauth_getorcreateofflinesession": "getOrCreateOfflineSession()" | kind=code-symbol | source=lib/auth/offlineAuth.js:L49 | neighbors=[offlineAuth.js, getCachedSession(), saveAuthenticatedSession()]
- "auth_offlineauth_saveauthenticatedsession": "saveAuthenticatedSession()" | kind=code-symbol | source=lib/auth/offlineAuth.js:L21 | neighbors=[offlineAuth.js, getCachedSession(), getOrCreateOfflineSession()]
- "by_mobile_route": "route.js" | kind=code-symbol | source=app/api/registrations/by-mobile/route.js:L1 | neighbors=[GET(), serializeData(), 252e194 e]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@026962b54f367ae791af9ea1c3acccabe3b7999a": "026962b 1.1.33" | kind=Commit | source=git | neighbors=[main, 53ca5c1 stable version 1, a409645 fix: resolve Chrome reload loop…]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@05ff30789c62158472747a1d4720bfa72699ce66": "05ff307 2.0.3" | kind=Commit | source=git | neighbors=[main, b0c8bf9 full indexeddb based, 84a8ff2 full indexeddb based]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@0afb0aca16b0b7c60827b470364b7139f68d0373": "0afb0ac 2.0.19" | kind=Commit | source=git | neighbors=[main, d84f15f f, 9e25c19 f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@1064f6b19f43957380f01f884545e43d863fb4f4": "1064f6b 2.0.10" | kind=Commit | source=git | neighbors=[main, aae6bad fixed, 5e3d9ef d]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@14ed805173d8f620130ddae59fa09191a53a56d3": "14ed805 3.0.0" | kind=Commit | source=git | neighbors=[main, af73a19 fixed, fae0b0a graphify added.]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@1ba5187ee6d2c914df8e27fd4139a8596d6081cc": "1ba5187 2.0.17" | kind=Commit | source=git | neighbors=[main, 37ee548 f, eb42395 2.0.16]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@2291b5b219512923f56c9243207e09ed0fbbd6c7": "2291b5b 2.0.2" | kind=Commit | source=git | neighbors=[main, 84a8ff2 full indexeddb based, cf2bb98 new]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@2476fb6811bfd0ea0c2be69c2f0e6584978025f6": "2476fb6 2.0.9" | kind=Commit | source=git | neighbors=[main, 5e3d9ef d, cea69a2 d]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@2ef3785b62d6e83ce6505a9dc81cc501e8efe8eb": "2ef3785 2.0.1" | kind=Commit | source=git | neighbors=[main, cf2bb98 new, 3c7e66b f]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@3f7f1b43875414ebdec1c6b147ae0a582a83e374": "3f7f1b4 2.0.0" | kind=Commit | source=git | neighbors=[main, 3c7e66b f, 53ca5c1 stable version 1]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@42773a17f7fafb1a10eb65d51c6d58114960246b": "42773a1 1.1.31" | kind=Commit | source=git | neighbors=[main, 91c4f7a feat: complete offline support …, a4caf17 fix: ensure Service Worker only…]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@48cc7ec32defe0b9c99dc02a05d23b2bfcbc86f7": "48cc7ec 2.0.22" | kind=Commit | source=git | neighbors=[14fa292 f, main, 9f59247 expire token]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@5ce0a2ea8942fa32ba4e3e1cffce040572cdebda": "5ce0a2e fixed" | kind=Commit | source=git | neighbors=[main, 9a50d76 3.0.2, c5cbecd 3.0.1]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@5ff27349a85485707e8d6ec1dbdf3a9164b29d0c": "5ff2734 2.0.11" | kind=Commit | source=git | neighbors=[main, 4d7570f fixed, aae6bad fixed]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-023.json

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
