# Node Description Batch 52 of 150

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

- "component_resultentry_resultentry": "ResultEntry()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/resultEntry.jsx:L65 | neighbors=[resultEntry.jsx]
- "component_resultentrymobile_resultentrymobile": "ResultEntryMobile()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/resultEntryMobile.jsx:L49 | neighbors=[resultEntryMobile.jsx]
- "component_showresult_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L39 | neighbors=[showResult.jsx]
- "component_showresult_showresult": "ShowResult()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L104 | neighbors=[showResult.jsx]
- "component_showresultmobile_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L25 | neighbors=[showResultMobile.jsx]
- "component_showresultmobile_showresultmobile": "ShowResultMobile()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L86 | neighbors=[showResultMobile.jsx]
- "components_adddoctordrawer_adddoctordrawer": "AddDoctorDrawer()" | kind=code-symbol | source=components/AddDoctorDrawer.js:L28 | neighbors=[AddDoctorDrawer.js]
- "components_adminlayoutclient_adminlayoutclient": "AdminLayoutClient()" | kind=code-symbol | source=components/AdminLayoutClient.js:L135 | neighbors=[AdminLayoutClient.js]
- "components_adminlayoutclient_getexpirymessage": "getExpiryMessage()" | kind=code-symbol | source=components/AdminLayoutClient.js:L101 | neighbors=[AdminLayoutClient.js]
- "components_adminlayoutclient_theme": "theme" | kind=code-symbol | source=components/AdminLayoutClient.js:L55 | neighbors=[AdminLayoutClient.js]
- "components_expiredplanview_expiredplanview": "ExpiredPlanView()" | kind=code-symbol | source=components/ExpiredPlanView.jsx:L30 | neighbors=[ExpiredPlanView.jsx]
- "components_pwaregister_pwaregister": "PWARegister()" | kind=code-symbol | source=components/PWARegister.js:L6 | neighbors=[PWARegister.js]
- "components_toastprovider_toastprovider": "ToastProvider()" | kind=code-symbol | source=components/ToastProvider.js:L5 | neighbors=[ToastProvider.js]
- "contact_route_post": "POST()" | kind=code-symbol | source=app/api/contact/route.js:L4 | neighbors=[route.js]
- "context_offlinesynccontext_offlinesynccontext": "OfflineSyncContext" | kind=code-symbol | source=context/OfflineSyncContext.js:L5 | neighbors=[OfflineSyncContext.js]
- "context_offlinesynccontext_useofflinesync": "useOfflineSync()" | kind=code-symbol | source=context/OfflineSyncContext.js:L20 | neighbors=[OfflineSyncContext.js]
- "context_trackingcontext_generatesessionid": "generateSessionId()" | kind=code-symbol | source=app/context/TrackingContext.js:L8 | neighbors=[TrackingContext.js]
- "context_trackingcontext_trackingcontext": "TrackingContext" | kind=code-symbol | source=app/context/TrackingContext.js:L6 | neighbors=[TrackingContext.js]
- "context_trackingcontext_trackingprovider": "TrackingProvider()" | kind=code-symbol | source=app/context/TrackingContext.js:L12 | neighbors=[TrackingContext.js]
- "context_trackingcontext_usetracking": "useTracking()" | kind=code-symbol | source=app/context/TrackingContext.js:L258 | neighbors=[TrackingContext.js]
- "customer_layout_customerlayout": "CustomerLayout()" | kind=code-symbol | source=app/(customer)/layout.jsx:L64 | neighbors=[layout.jsx]
- "customer_layout_theme": "theme" | kind=code-symbol | source=app/(customer)/layout.jsx:L8 | neighbors=[layout.jsx]
- "customer_page_metadata": "metadata" | kind=code-symbol | source=app/(customer)/page.jsx:L3 | neighbors=[page.jsx]
- "customer_page_rootpage": "RootPage()" | kind=code-symbol | source=app/(customer)/page.jsx:L8 | neighbors=[page.jsx]
- "dashboard_dashboardcharts_customtooltip": "CustomTooltip()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L18 | neighbors=[DashboardCharts.js]
- "dashboard_error_dashboarderrorboundary": "DashboardErrorBoundary()" | kind=code-symbol | source=app/(customer)/(dashboard)/error.js:L8 | neighbors=[error.js]
- "dashboard_layout_admindashboardlayout": "AdminDashboardLayout()" | kind=code-symbol | source=app/(customer)/(dashboard)/layout.js:L7 | neighbors=[layout.js]
- "dashboard_page_admindashboardpage": "AdminDashboardPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/page.js:L789 | neighbors=[page.js]
- "dashboard_page_dashboardcontent": "DashboardContent()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/page.js:L40 | neighbors=[page.js]
- "dashboard_rangeselector_dashboardrangeselector": "DashboardRangeSelector()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/RangeSelector.js:L18 | neighbors=[RangeSelector.js]
- "dashboard_rangeselector_quickranges": "quickRanges" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/RangeSelector.js:L8 | neighbors=[RangeSelector.js]
- "doctor_summary_page_doctorsummarypage": "DoctorSummaryPage()" | kind=code-symbol | source=app/(customer)/(dashboard)/doctor-summary/page.js:L61 | neighbors=[page.js]
- "doctors_route_delete": "DELETE()" | kind=code-symbol | source=app/api/doctors/route.js:L170 | neighbors=[route.js]
- "draft_route_post": "POST()" | kind=code-symbol | source=app/api/registrations/[id]/results/draft/route.js:L5 | neighbors=[route.js]
- "eslint_config_eslintconfig": "eslintConfig" | kind=code-symbol | source=eslint.config.mjs:L4 | neighbors=[eslint.config.mjs]
- "generated_client_edge_config": "config" | kind=code-symbol | source=scratch/generated-client/edge.js:L574 | neighbors=[edge.js]
- "generated_client_edge_prisma": "Prisma" | kind=code-symbol | source=scratch/generated-client/edge.js:L29 | neighbors=[edge.js]
- "generated_client_edge_prismaclient": "PrismaClient" | kind=code-symbol | source=scratch/generated-client/edge.js:L639 | neighbors=[edge.js]
- "generated_client_edge_prismaclientknownrequesterror_prismaclientunknownrequesterror_prismaclientrustpanicerror_prismaclientinitializationerror_prismaclientvalidationerror_notfounderror_getprismaclient_sqltag_empty_join_raw_skip_decimal_debug_objectenumvalues_makestrictenum_extensions_warnonce_definedmmfproperty_public_getruntime": "{\n  PrismaClientKnownRequestError,\n  PrismaClientUnknownRequestError,\n  PrismaC…" | kind=code-symbol | source=scratch/generated-client/edge.js:L4 | neighbors=[edge.js]
- "generated_client_index_browser_decimal_objectenumvalues_makestrictenum_public_getruntime_skip": "{\n  Decimal,\n  objectEnumValues,\n  makeStrictEnum,\n  Public,\n  getRuntime,\n  sk…" | kind=code-symbol | source=scratch/generated-client/index-browser.js:L4 | neighbors=[index-browser.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-051.json

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
