# Node Description Batch 34 of 148

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

- "runtime_wasm_vt": "vt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, tt(), Wr()]
- "runtime_wasm_wt": "wt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, constructor(), hi()]
- "runtime_wasm_xs": "Xs()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, si(), addItem()]
- "runtime_wasm_ya": "ya()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, Ir(), mr()]
- "runtime_wasm_za": "za()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, be(), xo()]
- "scratch_test_calc_calculatealldependents": "calculateAllDependents()" | kind=code-symbol | source=scratch/test-calc.js:L76 | neighbors=[test-calc.js, checkFormulaDependencies(), evaluateExpression()]
- "scratch_test_calc_export": "test-calc-export.js" | kind=code-symbol | source=scratch/test-calc-export.js:L1 | neighbors=[252e194 e, calculateDifferentialSummary(), DLC_DEFINITIONS]
- "scratch_test_reg_15": "test-reg-15.js" | kind=code-symbol | source=scratch/test-reg-15.js:L1 | neighbors=[252e194 e, runFormulaEngine(), main()]
- "seed_parameters_route": "route.js" | kind=code-symbol | source=app/api/seed-parameters/route.js:L1 | neighbors=[252e194 e, GET(), processTestParameters()]
- "settings_route": "route.js" | kind=code-symbol | source=app/api/settings/route.js:L1 | neighbors=[252e194 e, GET(), POST()]
- "suggestion_route": "route.js" | kind=code-symbol | source=app/api/ai/suggestion/route.js:L1 | neighbors=[252e194 e, callGeminiModels(), POST()]
- "sync_route": "route.js" | kind=code-symbol | source=app/api/offline/sync/route.js:L1 | neighbors=[2b2534c f, 7d8c494 fxed, POST()]
- "sync_syncmanager_syncmanager_notifystate": ".notifyState()" | kind=code-symbol | source=lib/offline/sync/syncManager.js:L45 | neighbors=[SyncManager, .subscribe(), .sync()]
- "tests_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/tests/page.js:L1 | neighbors=[252e194 e, SettingsTestsPage(), testsClient.jsx]
- "tests_route_serializesingletest": "serializeSingleTest()" | kind=code-symbol | source=app/api/tests/route.js:L37 | neighbors=[route.js, POST(), PUT()]
- "ui_dropdown": "Dropdown.js" | kind=code-symbol | source=components/ui/Dropdown.js:L1 | neighbors=[252e194 e, Dropdown(), DropdownItem()]
- "ui_loader": "Loader.js" | kind=code-symbol | source=components/ui/Loader.js:L1 | neighbors=[252e194 e, Button.js, Loader()]
- "userapprove_userapprovetable": "UserApproveTable.js" | kind=code-symbol | source=app/(customer)/(dashboard)/userApprove/UserApproveTable.js:L1 | neighbors=[252e194 e, page.js, UserApproveTable()]
- "admin_route": "route.js" | kind=code-symbol | source=app/api/tracking/admin/route.js:L1 | neighbors=[POST(), 252e194 e]
- "app_robots": "robots.js" | kind=code-symbol | source=app/robots.js:L1 | neighbors=[robots(), 252e194 e]
- "app_sitemap": "sitemap.js" | kind=code-symbol | source=app/sitemap.js:L1 | neighbors=[sitemap(), 252e194 e]
- "approvals_route": "route.js" | kind=code-symbol | source=app/api/approvals/route.js:L1 | neighbors=[GET(), 252e194 e]
- "approve_route": "route.js" | kind=code-symbol | source=app/api/approvals/approve/route.js:L1 | neighbors=[POST(), 252e194 e]
- "auth_offlineauth_islocalsessionvalid": "isLocalSessionValid()" | kind=code-symbol | source=lib/auth/offlineAuth.js:L110 | neighbors=[offlineAuth.js, getCachedSession()]
- "by_mobile_route_get": "GET()" | kind=code-symbol | source=app/api/registrations/by-mobile/route.js:L10 | neighbors=[route.js, serializeData()]
- "by_mobile_route_serializedata": "serializeData()" | kind=code-symbol | source=app/api/registrations/by-mobile/route.js:L6 | neighbors=[route.js, GET()]
- "change_role_route": "route.js" | kind=code-symbol | source=app/api/approvals/change-role/route.js:L1 | neighbors=[POST(), 252e194 e]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@9a50d76fdc96edbbcfaff30fb952ad24910efa0a": "9a50d76 3.0.2" | kind=Commit | source=git | neighbors=[5ce0a2e fixed, main]
- "component_differentialcounttracker_isdifferentialheader": "isDifferentialHeader()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L76 | neighbors=[DifferentialCountTracker.jsx, DifferentialHeaderBadge()]
- "component_differentialcounttracker_validatedifferentialonsave": "validateDifferentialOnSave()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/DifferentialCountTracker.jsx:L178 | neighbors=[DifferentialCountTracker.jsx, calculateDifferentialSummary()]
- "component_showresult_isoutofrange": "isOutOfRange()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L92 | neighbors=[showResult.jsx, isQualitativeAbnormal()]
- "component_showresult_isqualitativeabnormal": "isQualitativeAbnormal()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L62 | neighbors=[showResult.jsx, isOutOfRange()]
- "component_showresultmobile_isoutofrange": "isOutOfRange()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L74 | neighbors=[showResultMobile.jsx, isQualitativeAbnormal()]
- "component_showresultmobile_isqualitativeabnormal": "isQualitativeAbnormal()" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResultMobile.jsx:L48 | neighbors=[showResultMobile.jsx, isOutOfRange()]
- "components_expiredplanview": "ExpiredPlanView.jsx" | kind=code-symbol | source=components/ExpiredPlanView.jsx:L1 | neighbors=[252e194 e, ExpiredPlanView()]
- "components_toastprovider": "ToastProvider.js" | kind=code-symbol | source=components/ToastProvider.js:L1 | neighbors=[252e194 e, ToastProvider()]
- "contact_route": "route.js" | kind=code-symbol | source=app/api/contact/route.js:L1 | neighbors=[252e194 e, POST()]
- "dashboard_dashboardcharts_departmentdistributionchart": "DepartmentDistributionChart()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L156 | neighbors=[DashboardCharts.js, page.js]
- "dashboard_dashboardcharts_referralchart": "ReferralChart()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L201 | neighbors=[DashboardCharts.js, page.js]
- "dashboard_dashboardcharts_registrationchart": "RegistrationChart()" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L58 | neighbors=[DashboardCharts.js, page.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-033.json

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
