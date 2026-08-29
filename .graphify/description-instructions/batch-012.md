# Node Description Batch 13 of 150

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

- "lib_mail": "mail.js" | kind=code-symbol | source=lib/mail.js:L1 | neighbors=[252e194 e, sendApprovalEmail(), sendRejectionEmail(), sendVerificationEmail(), transporter]
- "members_page": "page.js" | kind=code-symbol | source=app/(customer)/(dashboard)/members/page.js:L1 | neighbors=[252e194 e, 84a8ff2 full indexeddb based, aae6bad fixed, cf2bb98 new, WorkspaceMembersPage()]
- "offline_network": "network.js" | kind=code-symbol | source=lib/offline/network.js:L1 | neighbors=[2b2534c f, af73a19 fixed, c15ae1e fixed, NetworkMonitor, syncManager.js]
- "paymentid_route": "route.js" | kind=code-symbol | source=app/api/print-subscription-invoice/[paymentId]/route.js:L1 | neighbors=[252e194 e, formatDate(), formatDateTime(), GET(), numberToWords()]
- "print_billhtmlgenerator": "billHtmlGenerator.js" | kind=code-symbol | source=lib/offline/print/billHtmlGenerator.js:L1 | neighbors=[8b1f3d8 a, formatDate(), generateOfflineBillHtml(), numberToWords(), openPrint.js]
- "prisma_process_dynamic_parameters": "process-dynamic-parameters.js" | kind=code-symbol | source=prisma/process-dynamic-parameters.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }, processTestParameters()]
- "register_registerpageclient": "RegisterPageClient.js" | kind=code-symbol | source=app/(customer)/auth/register/RegisterPageClient.js:L1 | neighbors=[252e194 e, 2582be7 fixed zoom issue, page.js, CustomerRegisterPage(), registerSchema]
- "runtime_edge_ao": "Ao()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, addSuggestion(), hasField(), bu(), pu()]
- "runtime_edge_ca": "Ca()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, de(), mi(), rn(), pi()]
- "runtime_edge_ce": "ce()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, e(), O(), go(), rl()]
- "runtime_edge_cs": "cs()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, bc(), getAllComputedFields(), gt(), values()]
- "runtime_edge_dt": "dt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, ko(), Fr(), Yo(), zc()]
- "runtime_edge_esm_ao": "Ao()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L4 | neighbors=[edge-esm.js, addSuggestion(), hasField(), pu(), yu()]
- "runtime_edge_esm_ce": "ce()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, e(), O(), el(), mo()]
- "runtime_edge_esm_cr": "cr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Ca(), Pa(), Ta(), va()]
- "runtime_edge_esm_dc": "dc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, he(), Qe(), text(), N()]
- "runtime_edge_esm_findfield": "findField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, fu(), lu(), nestSelection(), u()]
- "runtime_edge_esm_ft": "ft()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, tc(), ic(), rc(), wo()]
- "runtime_edge_esm_getselectionparent": "getSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, getDeepSelectionParent(), asObject(), getField(), getSubSelectionValue()]
- "runtime_edge_esm_gn": "gn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, O(), St(), v(), Y()]
- "runtime_edge_esm_ha": "ha()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, be(), ui(), write(), si()]
- "runtime_edge_esm_is": "is()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L6 | neighbors=[edge-esm.js, append(), e(), Gt(), r()]
- "runtime_edge_esm_ke": "ke()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Er(), O(), St(), Y()]
- "runtime_edge_esm_ll": "ll()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, e(), Pr(), toString(), tt()]
- "runtime_edge_esm_me": "me()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, Oe(), po(), Y(), yn()]
- "runtime_edge_esm_oo": "Oo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, Io(), iu(), _getName(), vr()]
- "runtime_edge_esm_ot": "ot()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, Dr(), handleRequestError(), ru(), tu()]
- "runtime_edge_esm_qt": "qt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, constructor(), nt(), xe(), vu()]
- "runtime_edge_esm_rn": "rn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, toString(), tn(), wa(), Xr()]
- "runtime_edge_esm_ru": "ru()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ot(), nu(), toString(), underline()]
- "runtime_edge_esm_te": "te()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L5 | neighbors=[edge-esm.js, fc(), Gt(), N(), yc()]
- "runtime_edge_esm_tn": "tn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, T(), ai(), be(), rn()]
- "runtime_edge_esm_ui": "ui()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, ha(), de(), en(), wi()]
- "runtime_edge_esm_ul": "ul()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, hn(), hr(), O(), uo()]
- "runtime_edge_esm_unpack": "unpack()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L20 | neighbors=[edge-esm.js, mapQueryEngineResult(), Gs(), It(), values()]
- "runtime_edge_esm_withretry": "withRetry()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L12 | neighbors=[edge-esm.js, requestInternal(), transaction(), bs(), emit()]
- "runtime_edge_esm_writeline": "writeLine()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L2 | neighbors=[edge-esm.js, write(), newLine(), writeWithContents(), writeWithItems()]
- "runtime_edge_esm_writewithcontents": "writeWithContents()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_edge_esm_writewithitems": "writeWithItems()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_edge_esm_xe": "xe()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, qt(), shouldApplyGlobalOmit(), uc(), yl()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-012.json

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
