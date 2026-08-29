# Node Description Batch 14 of 150

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
- "runtime_edge_sn": "sn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Aa(), on(), rn(), toString()]
- "runtime_edge_so": "So()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L4 | neighbors=[edge.js, cu(), ou(), addSuggestion(), hasField()]
- "runtime_edge_st": "st()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, Fr(), handleRequestError(), cu(), uu()]
- "runtime_edge_ta": "Ta()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, pi(), fi(), write(), xe()]
- "runtime_edge_te": "te()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, bc(), N(), Qt(), yc()]
- "runtime_edge_ua": "Ua()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, pi(), ep(), Tt(), ze()]
- "runtime_edge_us": "us()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L6 | neighbors=[edge.js, append(), e(), Qt(), r()]
- "runtime_edge_vn": "vn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, fo(), me(), S(), wr()]
- "runtime_edge_writeline": "writeLine()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L2 | neighbors=[edge.js, write(), newLine(), writeWithContents(), writeWithItems()]
- "runtime_edge_writewithcontents": "writeWithContents()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_edge_writewithitems": "writeWithItems()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_edge_xn": "xn()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, kt(), O(), v(), Y()]
- "runtime_edge_y": "Y()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, ke(), me(), xn(), Oe()]
- "runtime_edge_yl": "yl()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Pn(), po(), vr(), wr()]
- "runtime_index_browser_b": "B()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, O(), p(), se(), x()]
- "runtime_index_browser_d_nulltypesenumvalue": "NullTypesEnumValue" | kind=code-symbol | neighbors=[index-browser.d.ts, AnyNull, DbNull, JsonNull, ObjectEnumValue]
- "runtime_index_browser_f": "F()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, O(), U(), Ve(), ke()]
- "runtime_index_browser_o": "O()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, B(), Ee(), F(), U()]
- "runtime_index_browser_sn": "sn()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, e(), fe(), j(), toString()]
- "runtime_library_an": "an()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, e(), ka(), Rc(), vc()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-013.json

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
