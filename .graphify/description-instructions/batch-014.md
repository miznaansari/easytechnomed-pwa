# Node Description Batch 15 of 148

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

- "runtime_library_tc": "Tc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, en(), slice(), sn(), Ss()]
- "runtime_library_tt": "Tt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, handleRequestError(), vp(), wp(), wn()]
- "runtime_library_u": "$u()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, Lo(), Do(), ko(), Nu()]
- "runtime_library_um": "um()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, ul(), cm(), ct(), text()]
- "runtime_library_unpack": "unpack()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, mapQueryEngineResult(), _l(), values(), wt()]
- "runtime_library_up": "up()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue()]
- "runtime_library_vc": "vc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, an(), e(), Et(), toString()]
- "runtime_library_vt": "vt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, Br(), sa(), Am(), Xs()]
- "runtime_library_writeline": "writeLine()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, write(), newLine(), writeWithContents(), writeWithItems()]
- "runtime_library_writewithcontents": "writeWithContents()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_library_writewithitems": "writeWithItems()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_library_xe": "Xe()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L35 | neighbors=[library.js, ha(), Ja(), qa(), wa()]
- "runtime_library_xl": "xl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L114 | neighbors=[library.js, Pt(), toString(), ym(), zt()]
- "runtime_library_ya": "ya()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L30 | neighbors=[library.js, getLocation(), Cd(), qr(), yd()]
- "runtime_library_zt": "zt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L9 | neighbors=[library.js, xl(), is(), ns(), sc()]
- "runtime_react_native_ae": "Ae()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, hc(), $n(), ns(), Yt()]
- "runtime_react_native_al": "Al()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, e(), gr(), it(), toString()]
- "runtime_react_native_ba": "ba()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Oe(), Wr(), zr(), ti()]
- "runtime_react_native_br": "br()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, ju(), po(), qu(), Sr()]
- "runtime_react_native_bu": "bu()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, addErrorMessage(), bo(), markAsError(), io()]
- "runtime_react_native_de": "de()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, e(), k(), Dl(), to()]
- "runtime_react_native_eo": "eo()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, be(), bn(), addSuggestion(), hasField()]
- "runtime_react_native_fe": "Fe()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, gu(), shouldApplyGlobalOmit(), up(), Zt()]
- "runtime_react_native_findfield": "findField()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, ac(), nestSelection(), oc(), sc()]
- "runtime_react_native_fs": "Fs()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L62 | neighbors=[react-native.js, at(), Ms(), np(), toString()]
- "runtime_react_native_getexternaladaptererror": "getExternalAdapterError()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L61 | neighbors=[react-native.js, buildQueryError(), ar(), consumeError(), transaction()]
- "runtime_react_native_getselectionparent": "getSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, getDeepSelectionParent(), asObject(), getField(), getSubSelectionValue()]
- "runtime_react_native_ii": "ii()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, fi(), Kr(), ye(), ya()]
- "runtime_react_native_instantiatelibrary": "instantiateLibrary()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, constructor(), getCurrentBinaryTarget(), loadEngine(), version()]
- "runtime_react_native_ku": "ku()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, addSuggestion(), fn(), hasField(), po()]
- "runtime_react_native_metrics": "metrics()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, json(), parseEngineResponse(), start(), prometheus()]
- "runtime_react_native_n": "$n()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, Ae(), getAllModelExtensions(), Ht(), Vc()]
- "runtime_react_native_ot": "ot()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, gu(), mu(), rt(), unpack()]
- "runtime_react_native_rs": "rs()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, append(), e(), r(), Yt()]
- "runtime_react_native_wa": "wa()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ti(), ni(), Wr(), ye()]
- "runtime_react_native_wr": "Wr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ba(), wa(), Oe(), zr()]
- "runtime_react_native_writeline": "writeLine()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, write(), newLine(), writeWithContents(), writeWithItems()]
- "runtime_react_native_writewithcontents": "writeWithContents()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_react_native_writewithitems": "writeWithItems()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_react_native_xi": "Xi()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, e(), r(), Xl(), zl()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-014.json

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
