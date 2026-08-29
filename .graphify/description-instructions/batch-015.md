# Node Description Batch 16 of 150

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
- "runtime_react_native_zr": "zr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ba(), Hr(), Wr(), toString()]
- "runtime_wasm_ae": "ae()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, Pe(), cn(), It(), ke()]
- "runtime_wasm_alloc": "alloc()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, allocUnsafe(), fill(), nn(), concat()]
- "runtime_wasm_as": "as()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, enabled(), get(), Ss(), values()]
- "runtime_wasm_ce": "Ce()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L8 | neighbors=[wasm.js, Ar(), includes(), loadLibrary(), to()]
- "runtime_wasm_compare": "compare()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, B(), It(), slice(), V()]
- "runtime_wasm_constructor": "constructor()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, _getName(), _getNamespace(), instantiateLibrary(), wt()]
- "runtime_wasm_ei": "ei()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, ds(), addSuggestion(), hasField(), Ns()]
- "runtime_wasm_findfield": "findField()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ia(), nestSelection(), oa(), sa()]
- "runtime_wasm_ge": "ge()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ga(), tt(), ui(), Wr()]
- "runtime_wasm_getexternaladaptererror": "getExternalAdapterError()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L12 | neighbors=[wasm.js, buildQueryError(), consumeError(), qt(), transaction()]
- "runtime_wasm_getselectionparent": "getSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, getDeepSelectionParent(), asObject(), getField(), getSubSelectionValue()]
- "runtime_wasm_h": "H()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, da(), ia(), tt(), Wr()]
- "runtime_wasm_instantiatelibrary": "instantiateLibrary()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, constructor(), getCurrentBinaryTarget(), loadEngine(), version()]
- "runtime_wasm_metrics": "metrics()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L12 | neighbors=[wasm.js, json(), parseEngineResponse(), start(), prometheus()]
- "runtime_wasm_nestargument": "nestArgument()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, aa(), fi(), concat(), e()]
- "runtime_wasm_ni": "ni()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, append(), e(), r(), si()]
- "runtime_wasm_qe": "Qe()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, Ct(), di(), isDecimal(), si()]
- "runtime_wasm_ri": "ri()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, Bs(), js(), addSuggestion(), hasField()]
- "runtime_wasm_runinchildspan": "runInChildSpan()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, getGlobalTracingHelper(), t(), start(), stop()]
- "runtime_wasm_tojson": "toJSON()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, ao(), di(), so(), from()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-015.json

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
