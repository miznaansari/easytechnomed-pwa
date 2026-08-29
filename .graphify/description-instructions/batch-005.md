# Node Description Batch 6 of 150

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

- "runtime_edge_esm_uu": "uu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge-esm.js:L3 | neighbors=[edge-esm.js, Tr(), addErrorMessage(), addSuggestion(), getDeepSelectionParent(), getField()]
- "runtime_edge_gu": "Gu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, findField(), getComputedFields(), In(), nestSelection(), Vt()]
- "runtime_edge_hasfield": "hasField()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Ao(), du(), getField(), mu(), nu()]
- "runtime_edge_ou": "ou()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue(), Pe()]
- "runtime_edge_pi": "pi()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Aa(), Ca(), de(), mi(), Ta()]
- "runtime_edge_qu": "qu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, no(), getArgumentName(), getArgumentPath(), getSelectionPath(), nestArgument()]
- "runtime_edge_r": "r()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L1 | neighbors=[edge.js, Aa(), getOrCreate(), mo(), Qe(), us()]
- "runtime_edge_throwvalidationerror": "throwValidationError()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L5 | neighbors=[edge.js, bo(), In(), ju(), qu(), Fr()]
- "runtime_edge_yu": "yu()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L3 | neighbors=[edge.js, Ar(), addErrorMessage(), addSuggestion(), getDeepSelectionParent(), getField()]
- "runtime_edge_zc": "zc()" | kind=code-symbol | source=scratch/generated-client/runtime/edge.js:L25 | neighbors=[edge.js, addErrorMessage(), dt(), getDeepField(), getDeepFieldValue(), getField()]
- "runtime_library_hasfield": "hasField()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, getField(), jp(), kp(), ks(), qp()]
- "runtime_library_hs": "Hs()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, asObject(), getDeepSubSelectionValue(), getField(), getFieldValue(), ir()]
- "runtime_library_id": "id()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, findField(), getComputedFields(), Lt(), mr(), nestSelection()]
- "runtime_library_nd": "nd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, findField(), getComputedFields(), getGlobalOmit(), na(), nestSelection()]
- "runtime_library_od": "od()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getArgumentName(), getArgumentPath(), getSelectionPath(), nestArgument(), Re()]
- "runtime_library_pn": "pn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, Bp(), jp(), kp(), Mp(), qp()]
- "runtime_library_throwvalidationerror": "throwValidationError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, aa(), ed(), I(), od(), rd()]
- "runtime_library_with": "with()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, Fu(), Mu(), ui(), Vu(), e()]
- "runtime_react_native_ac": "ac()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, Cn(), findField(), getComputedFields(), nestSelection(), Te()]
- "runtime_react_native_be": "be()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, dr(), eo(), k(), Nt(), slice()]
- "runtime_react_native_du": "du()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, addErrorMessage(), addField(), addSuggestion(), asObject(), getDeepSelectionParent()]
- "runtime_react_native_get": "get()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, getAllBatchQueryCallbacks(), getAllClientExtensions(), getOrCreate(), sql(), su()]
- "runtime_react_native_getdeepfieldvalue": "getDeepFieldValue()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, getDeepField(), gu(), hp(), qu(), uu()]
- "runtime_react_native_hasfield": "hasField()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, eo(), getField(), Hu(), ku(), u()]
- "runtime_react_native_hp": "hp()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L74 | neighbors=[react-native.js, addErrorMessage(), getDeepField(), getDeepFieldValue(), getField(), gt()]
- "runtime_react_native_lc": "lc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, fo(), getArgumentName(), getArgumentPath(), getSelectionPath(), nestArgument()]
- "runtime_react_native_qu": "qu()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L9 | neighbors=[react-native.js, br(), addErrorMessage(), asObject(), getDeepField(), getDeepFieldValue()]
- "runtime_react_native_sc": "sc()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, ic(), Cn(), findField(), getComputedFields(), getGlobalOmit()]
- "runtime_react_native_throwvalidationerror": "throwValidationError()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, Cn(), fo(), lc(), Mo(), nc()]
- "runtime_react_native_transaction": "transaction()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, commitTransaction(), getExternalAdapterError(), parseEngineResponse(), rollbackTransaction(), rp()]
- "runtime_react_native_yn": "Yn()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, oi(), k(), l(), Nt(), P()]
- "runtime_wasm_aa": "aa()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, de(), di(), getArgumentName(), getArgumentPath(), getSelectionPath()]
- "runtime_wasm_get": "get()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, as(), getAllBatchQueryCallbacks(), getAllClientExtensions(), getOrCreate(), sql()]
- "runtime_wasm_getdeepfieldvalue": "getDeepFieldValue()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, Bs(), getDeepField(), gs(), js(), nl()]
- "runtime_wasm_hasfield": "hasField()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, ei(), getField(), hs(), Ks(), ls()]
- "runtime_wasm_is": "Is()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, addErrorMessage(), addSuggestion(), getDeepSelectionParent(), getField(), markAsError()]
- "runtime_wasm_js": "js()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, addErrorMessage(), asObject(), getDeepFieldValue(), getDeepSubSelectionValue(), markAsError()]
- "runtime_wasm_ls": "ls()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, addErrorMessage(), asObject(), getDeepSubSelectionValue(), getField(), hasField()]
- "runtime_wasm_nl": "nl()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L26 | neighbors=[wasm.js, addErrorMessage(), getDeepField(), getDeepFieldValue(), getField(), Ht()]
- "runtime_wasm_qs": "qs()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, addErrorMessage(), asObject(), getDeepField(), getDeepSubSelectionValue(), getField()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-005.json

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
