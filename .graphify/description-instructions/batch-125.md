# Node Description Batch 126 of 150

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
- "lib_reportsecurity_derivebufferkey": "deriveBufferKey()" | kind=code-symbol | source=lib/reportSecurity.js:L55 | neighbors=[reportSecurity.js]
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
- "offline_db_appdatabase_clearalldata": ".clearAllData()" | kind=code-symbol | source=lib/offline/db.js:L284 | neighbors=[AppDatabase]
- "offline_db_appdatabase_constructor": ".constructor()" | kind=code-symbol | source=lib/offline/db.js:L5 | neighbors=[AppDatabase]
- "offline_db_appdatabase_getallerrorrecords": ".getAllErrorRecords()" | kind=code-symbol | source=lib/offline/db.js:L249 | neighbors=[AppDatabase]
- "offline_db_appdatabase_insertoffline": ".insertOffline()" | kind=code-symbol | source=lib/offline/db.js:L48 | neighbors=[AppDatabase]
- "offline_db_appdatabase_marksynced": ".markSynced()" | kind=code-symbol | source=lib/offline/db.js:L130 | neighbors=[AppDatabase]
- "offline_db_appdatabase_marksyncerror": ".markSyncError()" | kind=code-symbol | source=lib/offline/db.js:L153 | neighbors=[AppDatabase]
- "offline_db_db": "db" | kind=code-symbol | source=lib/offline/db.js:L342 | neighbors=[db.js]
- "offline_network_networkmonitor_stopheartbeat": ".stopHeartbeat()" | kind=code-symbol | source=lib/offline/network.js:L90 | neighbors=[NetworkMonitor]
- "offline_network_networkmonitor_subscribe": ".subscribe()" | kind=code-symbol | source=lib/offline/network.js:L40 | neighbors=[NetworkMonitor]
- "offline_offlinepdfgenerator_formatdate": "formatDate()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L108 | neighbors=[offlinePdfGenerator.js]
- "offline_offlinepdfgenerator_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L85 | neighbors=[offlinePdfGenerator.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-125.json

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
