# Node Description Batch 34 of 149

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

- "runtime_wasm_getallclientextensions": "getAllClientExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, get(), tt()]
- "runtime_wasm_getallmodelextensions": "getAllModelExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, getOrCreate(), Wr()]
- "runtime_wasm_getallquerycallbacks": "getAllQueryCallbacks()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, getOrCreate(), qi()]
- "runtime_wasm_getsubselectionvalue": "getSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, getDeepSubSelectionValue(), getSelectionParent()]
- "runtime_wasm_gi": "gi()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, Fr(), r()]
- "runtime_wasm_hs": "hs()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, addSuggestion(), hasField()]
- "runtime_wasm_i": "_i()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, Ct(), Fa()]
- "runtime_wasm_io": "io()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L14 | neighbors=[wasm.js, al(), rt()]
- "runtime_wasm_isbuffer": "isBuffer()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, si(), so()]
- "runtime_wasm_isdecimal": "isDecimal()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, Qe(), so()]
- "runtime_wasm_israwaction": "isRawAction()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, includes(), na()]
- "runtime_wasm_ka": "ka()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, concat(), Wr()]
- "runtime_wasm_li": "li()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ai(), Zs()]
- "runtime_wasm_loadlibrary": "loadLibrary()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, loadEngine(), Ce()]
- "runtime_wasm_makerequired": "makeRequired()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, fs(), _s()]
- "runtime_wasm_nn": "nn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, alloc(), fill()]
- "runtime_wasm_on": "on()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, gr(), toString()]
- "runtime_wasm_oo": "oo()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L14 | neighbors=[wasm.js, ao(), toString()]
- "runtime_wasm_or": "Or()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, t(), Os()]
- "runtime_wasm_os": "Os()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, Kn(), Or()]
- "runtime_wasm_pa": "Pa()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, oi(), tt()]
- "runtime_wasm_pe": "Pe()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, ae(), ke()]
- "runtime_wasm_removeallfields": "removeAllFields()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, ds(), _s()]
- "runtime_wasm_reverse": "reverse()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, mn(), un()]
- "runtime_wasm_setcolor": "setColor()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, write(), writeEmpty()]
- "runtime_wasm_shouldapplyglobalomit": "shouldApplyGlobalOmit()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, getGlobalOmit(), be()]
- "runtime_wasm_sn": "sn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, indexOf(), slice()]
- "runtime_wasm_ss": "Ss()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, as(), concat()]
- "runtime_wasm_to": "to()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L12 | neighbors=[wasm.js, at(), Ce()]
- "runtime_wasm_ve": "Ve()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, getGlobalOmit(), ls()]
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
