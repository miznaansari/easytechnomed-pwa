# Node Description Batch 14 of 148

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
- "runtime_library_as": "As()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, e(), r(), kc(), zc()]
- "runtime_library_buildqueryerror": "buildQueryError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L113 | neighbors=[library.js, getExternalAdapterError(), st(), request(), requestBatch()]
- "runtime_library_d_nulltypesenumvalue": "NullTypesEnumValue" | kind=code-symbol | neighbors=[_d(), AnyNull, DbNull, JsonNull, ObjectEnumValue]
- "runtime_library_findfield": "findField()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, id(), nd(), nestSelection(), rd()]
- "runtime_library_getexternaladaptererror": "getExternalAdapterError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L113 | neighbors=[library.js, buildQueryError(), consumeError(), Yr(), transaction()]
- "runtime_library_getselectionparent": "getSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, getDeepSelectionParent(), asObject(), getField(), getSubSelectionValue()]
- "runtime_library_handlerequesterror": "handleRequestError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, handleAndLogRequestError(), sanitizeMessage(), Tt(), wn()]
- "runtime_library_ja": "Ja()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L45 | neighbors=[library.js, Dn(), kn(), Xe(), za()]
- "runtime_library_ln": "ln()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, toString(), qc(), sa(), Xs()]
- "runtime_library_logger": "logger()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L112 | neighbors=[library.js, createEngineSpan(), fm(), gm(), parseEngineResponse()]
- "runtime_library_metrics": "metrics()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, json(), parseEngineResponse(), start(), prometheus()]
- "runtime_library_mt": "mt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, Fu(), Mu(), ui(), Vu()]
- "runtime_library_mu": "Mu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, Lo(), mt(), otherwise(), with()]
- "runtime_library_na": "na()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getAllQueryCallbacks(), isEmpty(), values(), nd()]
- "runtime_library_nt": "nt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, getCurrentBinaryTarget(), Mo(), za(), Zd()]
- "runtime_library_or": "or()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, e(), qt(), tm(), qs()]
- "runtime_library_pe": "pe()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, Au(), Iu(), j(), Oo()]
- "runtime_library_se": "Se()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, ji(), Oa(), dd(), Yr()]
- "runtime_library_si": "Si()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, en(), ie(), slice(), we()]

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
