# Node Description Batch 2 of 150

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

- "components_adminlayoutclient": "AdminLayoutClient.js" | kind=code-symbol | source=components/AdminLayoutClient.js:L1 | neighbors=[10501e3 fixed, 252e194 e, 2b2534c f, 2daebb8 f, 37dcb32 fixed, 37ee548 f]
- "login_loginpageclient": "LoginPageClient.js" | kind=code-symbol | source=app/(customer)/auth/login/LoginPageClient.js:L1 | neighbors=[14fa292 f, 165f057 f, 252e194 e, 2582be7 fixed zoom issue, 2b2534c f, 4ba60cc fixed]
- "runtime_edge_esm_tr": "Tr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, Dr(), bu(), cu(), Eu(), fu()]
- "runtime_library_sa": "sa()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, aa(), od(), ad(), getArgumentName(), getArgumentPath()]
- "runtime_wasm_from": "from()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, allocUnsafe(), allocUnsafeSlow(), construct(), di(), es()]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@5e3d9ef5355e904e56b95aa9b89110b8f6a0b367": "5e3d9ef d" | kind=Commit | source=git | neighbors=[2476fb6 2.0.9, manifest.js, main, 1064f6b 2.0.10, AdminLayoutClient.js, layout.jsx]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@6236f60937580e146e17b87dd70331b5319be9ea": "6236f60 new update" | kind=Commit | source=git | neighbors=[offlineAuth.js, main, 6adf550 3.1.4, AdminLayoutClient.js, ExpiredPlanView.jsx, db.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@cf2bb98d5a4a7dd96d857dea768708eeaa0a1015": "cf2bb98 new" | kind=Commit | source=git | neighbors=[2ef3785 2.0.1, page.js, main, 2291b5b 2.0.2, MoneyRecipt.jsx, showResult.jsx]
- "offline_offlineprint": "offlinePrint.js" | kind=code-symbol | source=lib/offline/offlinePrint.js:L1 | neighbors=[532b740 fixed, 53ca5c1 stable version 1, 8b1f3d8 a, 905ef50 fixed, aae6bad fixed, db.js]
- "registration_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/registration/page.js:L1 | neighbors=[252e194 e, 2b2534c f, 56f4d63 f, 6c2dfe4 test, 7d8c494 fxed, 84a8ff2 full indexeddb based]
- "runtime_edge_asobject": "asObject()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Au(), cu(), getSelectionParent(), hu(), iu()]
- "runtime_edge_esm_asobject": "asObject()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, bu(), co(), cu(), Eu(), getSelectionParent()]
- "runtime_library_asobject": "asObject()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, Bp(), Fp(), getSelectionParent(), gp(), Hs()]
- "runtime_react_native_fo": "fo()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, at(), cc(), getArgumentName(), getArgumentPath(), _getName()]
- "auth_offlineauth": "offlineAuth.js" | kind=code-symbol | source=lib/auth/offlineAuth.js:L1 | neighbors=[checkUnsyncedDataBeforeLogout(), clearLocalSession(), getCachedSession(), getOrCreateOfflineSession(), isLocalSessionValid(), saveAuthenticatedSession()]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@532b740a81e13d660a2ccc8873d9351aa2506337": "532b740 fixed" | kind=Commit | source=git | neighbors=[main, f9a9e52 1.1.28, MoneyRecipt.jsx, showResult.jsx, showResultMobile.jsx, page.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@53ca5c17ec7efd39c4409a22eab1e95350f89d37": "53ca5c1 stable version 1" | kind=Commit | source=git | neighbors=[026962b 1.1.33, main, 3f7f1b4 2.0.0, MoneyRecipt.jsx, showResult.jsx, showResultMobile.jsx]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@8b1f3d82a7665ccd6a087f1ba16a8ef712f77dfe": "8b1f3d8 a" | kind=Commit | source=git | neighbors=[19d7012 3.0.14, main, 7ec66e7 3.0.18, MoneyRecipt.jsx, showResult.jsx, showResultMobile.jsx]
- "component_showresult": "showResult.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/test-report/component/showResult.jsx:L1 | neighbors=[252e194 e, 532b740 fixed, 53ca5c1 stable version 1, 84a8ff2 full indexeddb based, 8b1f3d8 a, aae6bad fixed]
- "offline_offlinepdfgenerator": "offlinePdfGenerator.js" | kind=code-symbol | source=lib/offline/offlinePdfGenerator.js:L1 | neighbors=[8b1f3d8 a, 905ef50 fixed, f3857f9 f, db.js, formatDate(), generateReportPdfOffline()]
- "runtime_edge_cu": "cu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, addErrorMessage(), asObject(), getDeepField(), getDeepFieldValue(), getDeepSubSelectionValue()]
- "runtime_edge_esm_getdeepsubselectionvalue": "getDeepSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, bu(), co(), cu(), Eu(), getSubSelectionValue()]
- "runtime_edge_esm_getfield": "getField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, co(), cu(), getDeepField(), getFieldValue(), getSelectionParent()]
- "runtime_edge_esm_lu": "lu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, addErrorMessage(), An(), asObject(), findField(), getComputedFields()]
- "runtime_edge_esm_mu": "mu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, cu(), addErrorMessage(), addField(), addSuggestion(), asObject()]
- "runtime_edge_getdeepsubselectionvalue": "getDeepSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Au(), cu(), getSubSelectionValue(), hu(), iu()]
- "runtime_edge_getfield": "getField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Au(), getDeepField(), getFieldValue(), getSelectionParent(), hasField()]
- "runtime_library_getdeepsubselectionvalue": "getDeepSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, Bp(), getSubSelectionValue(), gp(), Hs(), ip()]
- "runtime_library_getfield": "getField()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, Fp(), getDeepField(), getFieldValue(), getSelectionParent(), hasField()]
- "runtime_library_qp": "qp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, pn(), addErrorMessage(), addField(), addSuggestion(), asObject()]
- "runtime_react_native_getfield": "getField()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, bo(), du(), getDeepField(), getFieldValue(), getSelectionParent()]
- "runtime_react_native_tostring": "toString()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L5 | neighbors=[react-native.js, Al(), au(), fo(), Fs(), highlight()]
- "runtime_wasm_e": "e()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, append(), dt(), slice(), ws(), empty()]
- "runtime_wasm_getfield": "getField()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, fs(), getDeepField(), getFieldValue(), getSelectionParent(), hasField()]
- "runtime_wasm_ia": "ia()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, concat(), de(), Dr(), findField(), getOutputTypeDescription()]
- "runtime_wasm_s": "_s()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, ls(), addErrorMessage(), addField(), addSuggestion(), asObject()]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@9e25c1933a8413be5301515ae9f6999f5e5fc01f": "9e25c19 f" | kind=Commit | source=git | neighbors=[offlineAuth.js, main, 0afb0ac 2.0.19, AdminLayoutClient.js, page.js, LoginPageClient.js]
- "dashboard_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/page.js:L1 | neighbors=[252e194 e, 6812ab9 new ui dashboard, 9e25c19 f, cf2bb98 new, DashboardCharts.js, DepartmentDistributionChart()]
- "lib_formulaengine": "formulaEngine.js" | kind=code-symbol | source=lib/formulaEngine.js:L1 | neighbors=[252e194 e, runFormulaEngine(), addPatientContextToValuesMap(), addValueToValuesMap(), calculateAllDependents(), checkFormulaDependencies()]
- "lib_formulautils": "formulaUtils.js" | kind=code-symbol | source=lib/formulaUtils.js:L1 | neighbors=[252e194 e, addPatientContextToValuesMap(), addValueToValuesMap(), calculateAllDependents(), checkFormulaDependencies(), determineFlag()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-001.json

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
