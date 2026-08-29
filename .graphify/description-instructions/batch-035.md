# Node Description Batch 36 of 150

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

- "app_sitemap": "sitemap.js" | kind=code-symbol | source=app/sitemap.js:L1 | neighbors=[sitemap(), 252e194 e]
- "approvals_route": "route.js" | kind=code-symbol | source=app/api/approvals/route.js:L1 | neighbors=[GET(), 252e194 e]
- "approve_route": "route.js" | kind=code-symbol | source=app/api/approvals/approve/route.js:L1 | neighbors=[POST(), 252e194 e]
- "auth_offlineauth_islocalsessionvalid": "isLocalSessionValid()" | kind=code-symbol | source=lib/auth/offlineAuth.js:L100 | neighbors=[offlineAuth.js, getCachedSession()]
- "by_mobile_route_get": "GET()" | kind=code-symbol | source=app/api/registrations/by-mobile/route.js:L10 | neighbors=[route.js, serializeData()]
- "by_mobile_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/registrations/by-mobile/route.js:L6 | neighbors=[route.js, GET()]
- "change_role_route": "route.js" | kind=code-symbol | source=app/api/approvals/change-role/route.js:L1 | neighbors=[POST(), 252e194 e]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@74d638d5e3b95cf9a5df4de84e4f874fd5e9c024": "74d638d 3.1.9" | kind=Commit | source=git | neighbors=[main, 78dd976 fixed]
- "component_differentialcounttracker_isdifferentialheader": "isDifferentialHeader()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L76 | neighbors=[DifferentialCountTracker.jsx, DifferentialHeaderBadge()]
- "component_differentialcounttracker_validatedifferentialonsave": "validateDifferentialOnSave()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L178 | neighbors=[DifferentialCountTracker.jsx, calculateDifferentialSummary()]
- "component_showresult_isoutofrange": "isOutOfRange()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L92 | neighbors=[showResult.jsx, isQualitativeAbnormal()]
- "component_showresult_isqualitativeabnormal": "isQualitativeAbnormal()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L62 | neighbors=[showResult.jsx, isOutOfRange()]
- "component_showresultmobile_isoutofrange": "isOutOfRange()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L74 | neighbors=[showResultMobile.jsx, isQualitativeAbnormal()]
- "component_showresultmobile_isqualitativeabnormal": "isQualitativeAbnormal()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L48 | neighbors=[showResultMobile.jsx, isOutOfRange()]
- "components_toastprovider": "ToastProvider.js" | kind=code-symbol | source=components/ToastProvider.js:L1 | neighbors=[252e194 e, ToastProvider()]
- "contact_route": "route.js" | kind=code-symbol | source=app/api/contact/route.js:L1 | neighbors=[252e194 e, POST()]
- "dashboard_dashboardcharts_departmentdistributionchart": "DepartmentDistributionChart()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L88 | neighbors=[DashboardCharts.js, page.js]
- "dashboard_dashboardcharts_referralchart": "ReferralChart()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L201 | neighbors=[DashboardCharts.js, page.js]
- "dashboard_dashboardcharts_registrationchart": "RegistrationChart()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L52 | neighbors=[DashboardCharts.js, page.js]
- "dashboard_dashboardcharts_revenuechart": "RevenueChart()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L104 | neighbors=[DashboardCharts.js, page.js]
- "doctor_summary_route_get": "GET()" | kind=code-symbol | source=app/api/doctor-summary/route.js:L10 | neighbors=[route.js, serializeData()]
- "doctor_summary_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/doctor-summary/route.js:L6 | neighbors=[route.js, GET()]
- "doctors_route_get": "GET()" | kind=code-symbol | source=app/api/doctors/route.js:L10 | neighbors=[route.js, serializeData()]
- "doctors_route_post": "POST()" | kind=code-symbol | source=app/api/doctors/route.js:L24 | neighbors=[route.js, serializeData()]
- "doctors_route_put": "PUT()" | kind=code-symbol | source=app/api/doctors/route.js:L114 | neighbors=[route.js, serializeData()]
- "draft_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/results/draft/route.js:L1 | neighbors=[252e194 e, POST()]
- "eslint_config": "eslint.config.mjs" | kind=code-symbol | source=eslint.config.mjs:L1 | neighbors=[252e194 e, eslintConfig]
- "generated_client_default": "default.js" | kind=code-symbol | source=scratch/generated-client/default.js:L1 | neighbors=[252e194 e, edge.d.ts]
- "generated_client_default_d": "default.d.ts" | kind=code-symbol | source=scratch/generated-client/default.d.ts:L1 | neighbors=[252e194 e, index.js]
- "generated_client_edge_d": "edge.d.ts" | kind=code-symbol | source=scratch/generated-client/edge.d.ts:L1 | neighbors=[252e194 e, default.js]
- "generated_client_index_browser_prismaclient": "PrismaClient" | kind=code-symbol | source=scratch/generated-client/index-browser.js:L607 | neighbors=[index-browser.js, .constructor()]
- "generated_client_wasm_d": "wasm.d.ts" | kind=code-symbol | source=scratch/generated-client/wasm.d.ts:L1 | neighbors=[252e194 e, index.js]
- "generated_client_wasm_prismaclient": "PrismaClient" | kind=code-symbol | source=scratch/generated-client/wasm.js:L607 | neighbors=[wasm.js, .constructor()]
- "google_route": "route.js" | kind=code-symbol | source=app/api/authas/google/route.js:L1 | neighbors=[252e194 e, POST()]
- "hooks_useoffline": "useOffline.js" | kind=code-symbol | source=hooks/useOffline.js:L1 | neighbors=[2b2534c f, useOffline()]
- "hooks_usesync_usesync": "useSync()" | kind=code-symbol | source=hooks/useSync.js:L5 | neighbors=[useOfflineData.js, useSync.js]
- "id_route_get": "GET()" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L42 | neighbors=[route.js, serializeData()]
- "id_route_put": "PUT()" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L79 | neighbors=[route.js, serializeData()]
- "improve_route_callgemini": "callGemini()" | kind=code-symbol | source=app/api/ai/improve/route.js:L6 | neighbors=[route.js, POST()]
- "improve_route_post": "POST()" | kind=code-symbol | source=app/api/ai/improve/route.js:L44 | neighbors=[route.js, callGemini()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-035.json

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
