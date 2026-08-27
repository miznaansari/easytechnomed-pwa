# Node Description Batch 13 of 148

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
- "runtime_edge_esm_xr": "Xr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, wa(), be(), rn(), ya()]
- "runtime_edge_esm_y": "Y()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, gn(), ke(), me(), Oe()]
- "runtime_edge_esm_ya": "ya()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L1 | neighbors=[edge-esm.js, si(), de(), li(), Xr()]
- "runtime_edge_eu": "eu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, addErrorMessage(), addSuggestion(), O(), removeAllFields()]
- "runtime_edge_fc": "Fc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L12 | neighbors=[edge.js, _c(), Qe(), text(), ks()]
- "runtime_edge_fi": "fi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, de(), nn(), vi(), Ta()]
- "runtime_edge_getselectionparent": "getSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, getDeepSelectionParent(), asObject(), getField(), getSubSelectionValue()]
- "runtime_edge_ke": "ke()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, kt(), O(), xr(), Y()]
- "runtime_edge_ln": "ln()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Aa(), gi(), Ia(), ql()]
- "runtime_edge_me": "me()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, fo(), Oe(), Y(), vn()]
- "runtime_edge_mo": "mo()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, jl(), e(), r(), vl()]
- "runtime_edge_mr": "mr()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Da(), ka(), Ma(), Oa()]
- "runtime_edge_n": "N()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, gc(), getAllModelExtensions(), te(), yc()]
- "runtime_edge_nestselection": "nestSelection()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, Gu(), ju(), e(), findField()]
- "runtime_edge_on": "on()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, di(), sn(), xe(), T()]
- "runtime_edge_pe": "Pe()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ht(), jc(), ou(), shouldApplyGlobalOmit()]
- "runtime_edge_pu": "pu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, cu(), addErrorMessage(), Ao(), markAsError()]
- "runtime_edge_qt": "Qt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, getAllClientExtensions(), te(), wc(), us()]
- "runtime_edge_rn": "rn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Aa(), Ca(), sn(), xe()]
- "runtime_edge_rt": "Rt()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ms(), iu(), ol(), ou()]

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
