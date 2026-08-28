# Node Description Batch 125 of 149

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

- "generated_client_index_prismaclient": "PrismaClient" | kind=code-symbol | source=scratch/generated-client/index.js:L654 | neighbors=[index.js]
- "generated_client_index_prismaclientknownrequesterror_prismaclientunknownrequesterror_prismaclientrustpanicerror_prismaclientinitializationerror_prismaclientvalidationerror_notfounderror_getprismaclient_sqltag_empty_join_raw_skip_decimal_debug_objectenumvalues_makestrictenum_extensions_warnonce_definedmmfproperty_public_getruntime": "{\n  PrismaClientKnownRequestError,\n  PrismaClientUnknownRequestError,\n  PrismaC…" | kind=code-symbol | source=scratch/generated-client/index.js:L4 | neighbors=[index.js]
- "generated_client_index_warnenvconflicts": "{ warnEnvConflicts }" | kind=code-symbol | source=scratch/generated-client/index.js:L647 | neighbors=[index.js]
- "generated_client_wasm_decimal_objectenumvalues_makestrictenum_public_getruntime_skip": "{\n  Decimal,\n  objectEnumValues,\n  makeStrictEnum,\n  Public,\n  getRuntime,\n  sk…" | kind=code-symbol | source=scratch/generated-client/wasm.js:L4 | neighbors=[wasm.js]
- "generated_client_wasm_prisma": "Prisma" | kind=code-symbol | source=scratch/generated-client/wasm.js:L14 | neighbors=[wasm.js]
- "generated_client_wasm_prismaclient_constructor": ".constructor()" | kind=code-symbol | source=scratch/generated-client/wasm.js:L608 | neighbors=[PrismaClient]
- "google_route_post": "POST()" | kind=code-symbol | source=app/api/authas/google/route.js:L5 | neighbors=[route.js]
- "hooks_useoffline_useoffline": "useOffline()" | kind=code-symbol | source=hooks/useOffline.js:L5 | neighbors=[useOffline.js]
- "hooks_useofflinedata_useofflinedata": "useOfflineData()" | kind=code-symbol | source=hooks/useOfflineData.js:L7 | neighbors=[useOfflineData.js]
- "id_route_delete": "DELETE()" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L252 | neighbors=[route.js]
- "id_route_registrationschema": "registrationSchema" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L12 | neighbors=[route.js]
- "leads_route_post": "POST()" | kind=code-symbol | source=app/api/leads/route.js:L4 | neighbors=[route.js]
- "lib_auth_signtoken": "signToken()" | kind=code-symbol | source=lib/auth.js:L8 | neighbors=[auth.js]
- "lib_clientauth_useadminpermissions": "useAdminPermissions()" | kind=code-symbol | source=lib/clientAuth.js:L4 | neighbors=[clientAuth.js]
- "lib_firebase_auth": "auth" | kind=code-symbol | source=lib/firebase.js:L15 | neighbors=[firebase.js]
- "lib_firebase_firebaseconfig": "firebaseConfig" | kind=code-symbol | source=lib/firebase.js:L4 | neighbors=[firebase.js]
- "lib_firebase_googleprovider": "googleProvider" | kind=code-symbol | source=lib/firebase.js:L16 | neighbors=[firebase.js]
- "lib_formulautils_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=lib/formulaUtils.js:L446 | neighbors=[formulaUtils.js]
- "lib_mail_sendapprovalemail": "sendApprovalEmail()" | kind=code-symbol | source=lib/mail.js:L54 | neighbors=[mail.js]
- "lib_mail_sendrejectionemail": "sendRejectionEmail()" | kind=code-symbol | source=lib/mail.js:L87 | neighbors=[mail.js]
- "lib_mail_sendverificationemail": "sendVerificationEmail()" | kind=code-symbol | source=lib/mail.js:L19 | neighbors=[mail.js]
- "lib_mail_transporter": "transporter" | kind=code-symbol | source=lib/mail.js:L8 | neighbors=[mail.js]
- "lib_r2_s3client": "s3Client" | kind=code-symbol | source=lib/r2.js:L3 | neighbors=[r2.js]
- "lib_r2_uploadfiletor2": "uploadFileToR2()" | kind=code-symbol | source=lib/r2.js:L13 | neighbors=[r2.js]
- "lib_saasinvoice_decodepaymentuid": "decodePaymentUid()" | kind=code-symbol | source=lib/saasInvoice.js:L46 | neighbors=[saasInvoice.js]
- "lib_saasinvoice_encodepaymentuid": "encodePaymentUid()" | kind=code-symbol | source=lib/saasInvoice.js:L16 | neighbors=[saasInvoice.js]
- "lib_saasinvoice_key": "KEY" | kind=code-symbol | source=lib/saasInvoice.js:L7 | neighbors=[saasInvoice.js]
- "login_loginpageclient_loginschema": "loginSchema" | kind=code-symbol | source=app/(customer)/auth/login/LoginPageClient.js:L17 | neighbors=[LoginPageClient.js]
- "login_page_metadata": "metadata" | kind=code-symbol | source=app/(customer)/auth/login/page.js:L3 | neighbors=[page.js]
- "login_page_page": "Page()" | kind=code-symbol | source=app/(customer)/auth/login/page.js:L11 | neighbors=[page.js]
- "login_route_post": "POST()" | kind=code-symbol | source=app/api/authas/login/route.js:L9 | neighbors=[route.js]
- "logout_redirect_route_get": "GET()" | kind=code-symbol | source=app/api/auth/logout-redirect/route.js:L4 | neighbors=[route.js]
- "logout_route_post": "POST()" | kind=code-symbol | source=app/api/authas/logout/route.js:L5 | neighbors=[route.js]
- "members_page_workspacememberspage": "WorkspaceMembersPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/members/page.js:L36 | neighbors=[page.js]
- "members_route_get": "GET()" | kind=code-symbol | source=app/api/members/route.js:L6 | neighbors=[route.js]
- "members_route_patch": "PATCH()" | kind=code-symbol | source=app/api/members/route.js:L74 | neighbors=[route.js]
- "members_route_post": "POST()" | kind=code-symbol | source=app/api/members/route.js:L34 | neighbors=[route.js]
- "next_config_nextconfig": "nextConfig" | kind=code-symbol | source=next.config.mjs:L2 | neighbors=[next.config.mjs]
- "offline_db_appdatabase_constructor": ".constructor()" | kind=code-symbol | source=lib/offline/db.js:L5 | neighbors=[AppDatabase]
- "offline_db_appdatabase_getallerrorrecords": ".getAllErrorRecords()" | kind=code-symbol | source=lib/offline/db.js:L205 | neighbors=[AppDatabase]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-124.json

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
