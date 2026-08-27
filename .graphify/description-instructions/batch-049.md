# Node Description Batch 50 of 148

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

- "app_layout_outfit": "outfit" | kind=code-symbol | source=app/layout.js:L7 | neighbors=[layout.js]
- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=app/layout.js:L44 | neighbors=[layout.js]
- "app_layout_viewport": "viewport" | kind=code-symbol | source=app/layout.js:L40 | neighbors=[layout.js]
- "app_manifest_manifest": "manifest()" | kind=code-symbol | source=app/manifest.js:L1 | neighbors=[manifest.js]
- "app_robots_robots": "robots()" | kind=code-symbol | source=app/robots.js:L1 | neighbors=[robots.js]
- "app_sitemap_sitemap": "sitemap()" | kind=code-symbol | source=app/sitemap.js:L1 | neighbors=[sitemap.js]
- "approvals_route_get": "GET()" | kind=code-symbol | source=app/api/approvals/route.js:L5 | neighbors=[route.js]
- "approve_route_post": "POST()" | kind=code-symbol | source=app/api/approvals/approve/route.js:L6 | neighbors=[route.js]
- "auth_offlineauth_checkunsynceddatabeforelogout": "checkUnsyncedDataBeforeLogout()" | kind=code-symbol | source=lib/auth/offlineAuth.js:L126 | neighbors=[offlineAuth.js]
- "auth_offlineauth_clearlocalsession": "clearLocalSession()" | kind=code-symbol | source=lib/auth/offlineAuth.js:L141 | neighbors=[offlineAuth.js]
- "auth_offlineauth_default_offline_admin": "DEFAULT_OFFLINE_ADMIN" | kind=code-symbol | source=lib/auth/offlineAuth.js:L7 | neighbors=[offlineAuth.js]
- "change_role_route_post": "POST()" | kind=code-symbol | source=app/api/approvals/change-role/route.js:L5 | neighbors=[route.js]
- "check_route_get": "GET()" | kind=code-symbol | source=app/api/auth/check/route.js:L5 | neighbors=[route.js]
- "check_route_head": "HEAD()" | kind=code-symbol | source=app/api/auth/check/route.js:L40 | neighbors=[route.js]
- "component_differentialcounttracker_dlc_definitions": "DLC_DEFINITIONS" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L7 | neighbors=[DifferentialCountTracker.jsx]
- "component_moneyrecipt_moneyrecipt": "MoneyRecipt()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/MoneyRecipt.jsx:L42 | neighbors=[MoneyRecipt.jsx]
- "component_moneyreciptmobile_moneyreciptmobile": "MoneyReciptMobile()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/MoneyReciptMobile.jsx:L38 | neighbors=[MoneyReciptMobile.jsx]
- "component_resultentry_resultentry": "ResultEntry()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/resultEntry.jsx:L65 | neighbors=[resultEntry.jsx]
- "component_resultentrymobile_resultentrymobile": "ResultEntryMobile()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/resultEntryMobile.jsx:L49 | neighbors=[resultEntryMobile.jsx]
- "component_showresult_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L39 | neighbors=[showResult.jsx]
- "component_showresult_showresult": "ShowResult()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L104 | neighbors=[showResult.jsx]
- "component_showresultmobile_getreferencerange": "getReferenceRange()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L25 | neighbors=[showResultMobile.jsx]
- "component_showresultmobile_showresultmobile": "ShowResultMobile()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L86 | neighbors=[showResultMobile.jsx]
- "components_adddoctordrawer_adddoctordrawer": "AddDoctorDrawer()" | kind=code-symbol | source=components/AddDoctorDrawer.js:L28 | neighbors=[AddDoctorDrawer.js]
- "components_adminlayoutclient_adminlayoutclient": "AdminLayoutClient()" | kind=code-symbol | source=components/AdminLayoutClient.js:L134 | neighbors=[AdminLayoutClient.js]
- "components_adminlayoutclient_getexpirymessage": "getExpiryMessage()" | kind=code-symbol | source=components/AdminLayoutClient.js:L100 | neighbors=[AdminLayoutClient.js]
- "components_adminlayoutclient_theme": "theme" | kind=code-symbol | source=components/AdminLayoutClient.js:L54 | neighbors=[AdminLayoutClient.js]
- "components_expiredplanview_expiredplanview": "ExpiredPlanView()" | kind=code-symbol | source=components/ExpiredPlanView.jsx:L29 | neighbors=[ExpiredPlanView.jsx]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-049.json

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
