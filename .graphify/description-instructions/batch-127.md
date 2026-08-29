# Node Description Batch 128 of 150

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

- "register_page_metadata": "metadata" | kind=code-symbol | source=app/(customer)/auth/register/page.js:L3 | neighbors=[page.js]
- "register_page_page": "Page()" | kind=code-symbol | source=app/(customer)/auth/register/page.js:L11 | neighbors=[page.js]
- "register_registerpageclient_customerregisterpage": "CustomerRegisterPage()" | kind=code-symbol | source=app/(customer)/auth/register/RegisterPageClient.js:L25 | neighbors=[RegisterPageClient.js]
- "register_registerpageclient_registerschema": "registerSchema" | kind=code-symbol | source=app/(customer)/auth/register/RegisterPageClient.js:L15 | neighbors=[RegisterPageClient.js]
- "register_route_post": "POST()" | kind=code-symbol | source=app/api/authas/register/route.js:L7 | neighbors=[route.js]
- "registration_page_filter": "filter" | kind=code-symbol | source=app/(customer)/(dashboard)/registration/page.js:L55 | neighbors=[page.js]
- "registration_page_getindiancities": "getIndianCities()" | kind=code-symbol | source=app/(customer)/(dashboard)/registration/page.js:L74 | neighbors=[page.js]
- "registration_page_getlocalisostring": "getLocalIsoString()" | kind=code-symbol | source=app/(customer)/(dashboard)/registration/page.js:L60 | neighbors=[page.js]
- "registration_page_indiancities": "indianCities" | kind=code-symbol | source=app/(customer)/(dashboard)/registration/page.js:L82 | neighbors=[page.js]
- "registration_page_indianstatesmap": "indianStatesMap" | kind=code-symbol | source=app/(customer)/(dashboard)/registration/page.js:L72 | neighbors=[page.js]
- "registration_page_registrationpage": "RegistrationPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/registration/page.js:L96 | neighbors=[page.js]
- "registration_page_toutcstring": "toUtcString()" | kind=code-symbol | source=app/(customer)/(dashboard)/registration/page.js:L66 | neighbors=[page.js]
- "registrations_route_generaterandomsuffix": "generateRandomSuffix()" | kind=code-symbol | source=app/api/registrations/route.js:L11 | neighbors=[route.js]
- "registrations_route_registrationschema": "registrationSchema" | kind=code-symbol | source=app/api/registrations/route.js:L21 | neighbors=[route.js]
- "reject_route_post": "POST()" | kind=code-symbol | source=app/api/approvals/reject/route.js:L6 | neighbors=[route.js]
- "roles_route_get": "GET()" | kind=code-symbol | source=app/api/roles/route.js:L5 | neighbors=[route.js]
- "runtime_edge_al": "al()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_an": "an()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_apikey": "apiKey()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js]
- "runtime_edge_applypendingmigrations": "applyPendingMigrations()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js]
- "runtime_edge_as": "as()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_bl": "bl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_cc": "cc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js]
- "runtime_edge_ci": "Ci()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_cl": "Cl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_co": "co()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_consumeerror": "consumeError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_delete": "delete()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js]
- "runtime_edge_disable": "disable()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_dispatchbatches": "dispatchBatches()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L20 | neighbors=[edge.js]
- "runtime_edge_dl": "Dl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_ee": "Ee()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js]
- "runtime_edge_el": "el()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_enable": "enable()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js]
- "runtime_edge_eo": "Eo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js]
- "runtime_edge_esm_ac": "ac()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js]
- "runtime_edge_esm_al": "Al()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]
- "runtime_edge_esm_apikey": "apiKey()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js]
- "runtime_edge_esm_applypendingmigrations": "applyPendingMigrations()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js]
- "runtime_edge_esm_bi": "bi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-127.json

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
