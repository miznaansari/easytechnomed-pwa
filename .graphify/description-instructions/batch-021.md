# Node Description Batch 22 of 149

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

- "runtime_library_we": "we()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, Si(), K(), slice()]
- "runtime_library_withretry": "withRetry()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, requestInternal(), transaction(), nl()]
- "runtime_library_writeempty": "writeEmpty()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, write(), setColor(), underline()]
- "runtime_library_wt": "wt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, unpack(), dp(), pp()]
- "runtime_library_yt": "Yt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L18 | neighbors=[library.js, hl(), lc(), t()]
- "runtime_react_native_addfield": "addField()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, du(), po(), uu()]
- "runtime_react_native_afternextnewline": "afterNextNewline()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L7 | neighbors=[react-native.js, write(), writeWithContents(), writeWithItems()]
- "runtime_react_native_at": "at()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, fo(), Fs(), Zt()]
- "runtime_react_native_buildqueryerror": "buildQueryError()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L61 | neighbors=[react-native.js, getExternalAdapterError(), request(), requestBatch()]
- "runtime_react_native_ci": "ci()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, slice(), ui(), write()]
- "runtime_react_native_di": "di()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, ai(), Ia(), li()]
- "runtime_react_native_dr": "dr()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, be(), e(), k()]
- "runtime_react_native_fi": "fi()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Ca(), La(), ii()]
- "runtime_react_native_getallcomputedfields": "getAllComputedFields()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, getOrCreate(), getComputedFields(), ns()]
- "runtime_react_native_getargumentname": "getArgumentName()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, fo(), lc(), Mo()]
- "runtime_react_native_getargumentpath": "getArgumentPath()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, fo(), lc(), Mo()]
- "runtime_react_native_getcomputedfields": "getComputedFields()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, ac(), getAllComputedFields(), sc()]
- "runtime_react_native_getfieldvalue": "getFieldValue()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, bo(), getDeepSelectionParent(), getField()]
- "runtime_react_native_getglobalomit": "getGlobalOmit()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, shouldApplyGlobalOmit(), st(), sc()]
- "runtime_react_native_getname": "_getName()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L9 | neighbors=[react-native.js, constructor(), fo(), to()]
- "runtime_react_native_gt": "gt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, hp(), Sr(), Vo()]
- "runtime_react_native_handleandlogrequesterror": "handleAndLogRequestError()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L69 | neighbors=[react-native.js, emit(), handleRequestError(), request()]
- "runtime_react_native_he": "He()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, Gc(), jc(), kc()]
- "runtime_react_native_highlight": "highlight()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L4 | neighbors=[react-native.js, e(), io(), toString()]
- "runtime_react_native_hu": "Hu()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L9 | neighbors=[react-native.js, addSuggestion(), hasField(), u()]
- "runtime_react_native_ia": "Ia()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, di(), et(), Tt()]
- "runtime_react_native_indentedcurrentline": "indentedCurrentLine()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, slice(), newLine(), toString()]
- "runtime_react_native_io": "io()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, highlight(), An(), bu()]
- "runtime_react_native_isempty": "isEmpty()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L8 | neighbors=[react-native.js, nu(), os(), us()]
- "runtime_react_native_it": "it()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, Al(), e(), Sl()]
- "runtime_react_native_loadengine": "loadEngine()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L60 | neighbors=[react-native.js, instantiateLibrary(), loadLibrary(), parseInitError()]
- "runtime_react_native_lt": "lt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, fo(), to(), Zt()]
- "runtime_react_native_lu": "lu()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, addErrorMessage(), addSuggestion(), removeAllFields()]
- "runtime_react_native_maplineat": "mapLineAt()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, e(), r(), pu()]
- "runtime_react_native_maplines": "mapLines()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, e(), prependSymbolAt(), pu()]
- "runtime_react_native_nestargument": "nestArgument()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, lc(), Mo(), e()]
- "runtime_react_native_ns": "ns()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, Ae(), getAllComputedFields(), values()]
- "runtime_react_native_p": "P()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, h(), S(), Yn()]
- "runtime_react_native_ps": "ps()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L12 | neighbors=[react-native.js, bs(), r(), vs()]
- "runtime_react_native_qo": "Qo()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L11 | neighbors=[react-native.js, getLocation(), kc(), xc()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-021.json

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
