# Node Description Batch 7 of 149

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

- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@6fcf01513cf102294115509392d599808735935d": "6fcf015 f" | kind=Commit | source=git | neighbors=[main, cc4c427 1.1.26, page.js, SyncStatusIcon.jsx, syncManager.js, page.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@eb8b1e55a4ac0099b81b812ad72ed96f863a41b6": "eb8b1e5 f" | kind=Commit | source=git | neighbors=[7d8c494 fxed, main, dbe1732 1.1.25, PWARegister.js, error.js, page.js]
- "dashboard_dashboardcharts": "DashboardCharts.js" | kind=code-symbol | source=app/(customer)/(dashboard)/dashboard/DashboardCharts.js:L1 | neighbors=[252e194 e, CustomTooltip(), DepartmentDistributionChart(), RegistrationChart(), page.js, ReferralChart()]
- "id_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/route.js:L1 | neighbors=[252e194 e, d446d11 fixed code, DELETE(), GET(), PUT(), registrationSchema]
- "payments_paymentsclient": "paymentsClient.jsx" | kind=code-symbol | source=app/(customer)/(dashboard)/settings/payments/paymentsClient.jsx:L1 | neighbors=[252e194 e, 532b740 fixed, 53ca5c1 stable version 1, cf2bb98 new, page.js, PaymentsClient()]
- "print_openprint": "openPrint.js" | kind=code-symbol | source=lib/offline/print/openPrint.js:L1 | neighbors=[8b1f3d8 a, billHtmlGenerator.js, generateOfflineBillHtml(), openOfflineBillPrint(), openOfflineReportPrint(), reportPdfGenerator.js]
- "providers_offlineprovider": "OfflineProvider.jsx" | kind=code-symbol | source=components/providers/OfflineProvider.jsx:L1 | neighbors=[2b2534c f, 7d8c494 fxed, 84a8ff2 full indexeddb based, 9e25c19 f, 9f59247 expire token, b5dedb0 f]
- "registrationid_route": "route.js" | kind=code-symbol | source=app/api/print-report/[registrationId]/route.js:L1 | neighbors=[252e194 e, formatDate(), GET(), getReferenceRange(), isOutOfRange(), isQualitativeAbnormal()]
- "runtime_edge_aa": "Aa()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ln(), r(), rn(), sn(), xe()]
- "runtime_edge_bu": "bu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, addErrorMessage(), Ao(), getDeepSelectionParent(), isEmpty(), removeAllFields()]
- "runtime_edge_do": "Do()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Cr(), _getName(), ko(), Lu(), ot()]
- "runtime_edge_du": "du()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, bo(), addSuggestion(), get(), hasField(), mu()]
- "runtime_edge_esm_an": "An()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, getSelectionPath(), isPreviewFeatureOn(), throwValidationError(), fu(), lu()]
- "runtime_edge_esm_ba": "ba()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Aa(), Ia(), ka(), Oa(), pi()]
- "runtime_edge_esm_bu": "bu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue(), markAsError()]
- "runtime_edge_esm_constructor": "constructor()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ds(), get(), _getName(), _getNamespace(), qt()]
- "runtime_edge_esm_eu": "Eu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue(), markAsError()]
- "runtime_edge_esm_getselectionpath": "getSelectionPath()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, An(), fu(), lo(), mu(), qo()]
- "runtime_edge_esm_handlerequesterror": "handleRequestError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, handleAndLogRequestError(), $c(), Dr(), ot(), sanitizeMessage()]
- "runtime_edge_esm_hasfield": "hasField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, Ao(), Au(), cu(), getField(), to()]
- "runtime_edge_esm_iu": "iu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, addItem(), get(), Oo(), ou(), values()]
- "runtime_edge_esm_n": "N()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, dc(), Ee(), fc(), getAllModelExtensions(), jt()]
- "runtime_edge_esm_os": "os()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, Ee(), getAllComputedFields(), hc(), mt(), values()]
- "runtime_edge_esm_si": "si()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, de(), ha(), li(), wa(), ya()]
- "runtime_edge_esm_wo": "wo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, Tr(), addErrorMessage(), ft(), iu(), qr()]
- "runtime_edge_esm_xu": "xu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, Tr(), addErrorMessage(), asObject(), getDeepField(), getDeepSubSelectionValue()]
- "runtime_edge_esm_ye": "ye()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, fu(), lu(), qo(), qu(), ss()]
- "runtime_edge_fr": "Fr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Ar(), dt(), Nr(), st(), handleRequestError()]
- "runtime_edge_getselectionpath": "getSelectionPath()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, bo(), In(), ju(), qu(), u()]
- "runtime_edge_hu": "hu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Ar(), addErrorMessage(), asObject(), getDeepSubSelectionValue(), getField()]
- "runtime_edge_iu": "iu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, addErrorMessage(), asObject(), getDeepField(), getDeepSubSelectionValue(), markAsError()]
- "runtime_edge_ro": "ro()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, go(), asObject(), getDeepSubSelectionValue(), getField(), getFieldValue()]
- "runtime_edge_su": "Su()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, Ar(), addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue()]
- "runtime_edge_vu": "vu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, Ar(), addErrorMessage(), isPreviewFeatureOn(), isRawAction(), ju()]
- "runtime_library_bp": "Bp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, addErrorMessage(), asObject(), getDeepField(), getDeepSubSelectionValue(), markAsError()]
- "runtime_library_br": "Br()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, Fe(), It(), Pt(), slice(), vt()]
- "runtime_library_fe": "Fe()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, Br(), dp(), e(), y(), shouldApplyGlobalOmit()]
- "runtime_library_getselectionpath": "getSelectionPath()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, aa(), ed(), I(), od(), rd()]
- "runtime_library_gp": "gp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue(), getFields()]
- "runtime_library_ha": "ha()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, Dn(), kn(), Ot(), toString(), write()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-006.json

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
