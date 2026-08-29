# Node Description Batch 33 of 150

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

- "runtime_react_native_getlocation": "getLocation()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, Qo(), pu()]
- "runtime_react_native_getsubselectionvalue": "getSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, getDeepSubSelectionValue(), getSelectionParent()]
- "runtime_react_native_gr": "gr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, Al(), Sl()]
- "runtime_react_native_ha": "ha()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Oe(), ri()]
- "runtime_react_native_ht": "Ht()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, $n(), Yt()]
- "runtime_react_native_is": "is()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, Te(), r()]
- "runtime_react_native_jc": "jc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, He(), xo()]
- "runtime_react_native_jt": "Jt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, constructor(), _o()]
- "runtime_react_native_kc": "kc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, He(), Qo()]
- "runtime_react_native_kr": "Kr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ii(), Pa()]
- "runtime_react_native_ks": "ks()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L62 | neighbors=[react-native.js, Ms(), toString()]
- "runtime_react_native_l": "l()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, a(), Yn()]
- "runtime_react_native_ma": "Ma()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, slice(), xa()]
- "runtime_react_native_makerequired": "makeRequired()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, du(), uu()]
- "runtime_react_native_ms": "Ms()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L62 | neighbors=[react-native.js, Fs(), ks()]
- "runtime_react_native_mt": "Mt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, As(), ml()]
- "runtime_react_native_newline": "newLine()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, indentedCurrentLine(), writeLine()]
- "runtime_react_native_ni": "ni()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ti(), wa()]
- "runtime_react_native_nt": "Nt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, be(), Yn()]
- "runtime_react_native_pa": "Pa()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Kr(), nr()]
- "runtime_react_native_pe": "Pe()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, Ao(), Vc()]
- "runtime_react_native_pi": "pi()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ui(), write()]
- "runtime_react_native_prependsymbolat": "prependSymbolAt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, mapLines(), pu()]
- "runtime_react_native_query": "query()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, request(), requestBatch()]
- "runtime_react_native_ra": "Ra()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, slice(), xa()]
- "runtime_react_native_read": "read()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, pu(), fromContent()]
- "runtime_react_native_removeallfields": "removeAllFields()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, lu(), nu()]
- "runtime_react_native_ri": "ri()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ha(), Hr()]
- "runtime_react_native_s": "S()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, bn(), P()]
- "runtime_react_native_sa": "Sa()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, slice(), si()]
- "runtime_react_native_se": "se()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, bn(), nu()]
- "runtime_react_native_setcolor": "setColor()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, write(), writeEmpty()]
- "runtime_react_native_shouldapplyglobalomit": "shouldApplyGlobalOmit()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, getGlobalOmit(), Fe()]
- "runtime_react_native_si": "si()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Sa(), xa()]
- "runtime_react_native_so": "so()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, slice(), values()]
- "runtime_react_native_st": "st()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, getGlobalOmit(), u()]
- "runtime_react_native_su": "su()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, get(), values()]
- "runtime_react_native_ta": "Ta()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Na(), nr()]
- "runtime_react_native_tt": "Tt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Ia(), et()]
- "runtime_react_native_ui": "ui()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ci(), pi()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-032.json

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
