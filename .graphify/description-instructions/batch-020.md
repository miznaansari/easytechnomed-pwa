# Node Description Batch 21 of 150

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

- "runtime_index_browser_be": "be()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, e(), i(), Re()]
- "runtime_index_browser_ee": "Ee()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, O(), p(), x()]
- "runtime_index_browser_j": "j()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, e(), sn(), un()]
- "runtime_index_browser_ke": "ke()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, F(), ie(), Ve()]
- "runtime_index_browser_l": "L()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, e(), p(), mn()]
- "runtime_index_browser_on": "on()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, ie(), p(), ue()]
- "runtime_index_browser_se": "se()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, B(), e(), p()]
- "runtime_index_browser_un": "un()" | kind=code-symbol | source=scratch/generated-client/runtime/index-browser.js:L1 | neighbors=[index-browser.js, e(), fe(), j()]
- "runtime_library_addfield": "addField()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, Fp(), qp(), zs()]
- "runtime_library_afternextnewline": "afterNextNewline()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, write(), writeWithContents(), writeWithItems()]
- "runtime_library_build": "build()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, buildCaptureSettings(), getTraceParent(), isEnabled()]
- "runtime_library_createenginespan": "createEngineSpan()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, getGlobalTracingHelper(), logger(), propagateResponseExtensions()]
- "runtime_library_ct": "ct()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, r(), to(), um()]
- "runtime_library_d_queryable": "Queryable" | kind=code-symbol | neighbors=[_d(), DriverAdapter, Transaction, TransactionContext]
- "runtime_library_ea": "ea()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, Lt(), t(), ta()]
- "runtime_library_et": "Et()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, e(), Rc(), vc()]
- "runtime_library_getallcomputedfields": "getAllComputedFields()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getOrCreate(), getComputedFields(), Oa()]
- "runtime_library_getargumentname": "getArgumentName()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, aa(), od(), sa()]
- "runtime_library_getargumentpath": "getArgumentPath()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, aa(), od(), sa()]
- "runtime_library_getcomputedfields": "getComputedFields()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getAllComputedFields(), id(), nd()]
- "runtime_library_getfieldvalue": "getFieldValue()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, getDeepSelectionParent(), getField(), Hs()]
- "runtime_library_getglobalomit": "getGlobalOmit()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, shouldApplyGlobalOmit(), xt(), nd()]
- "runtime_library_getname": "_getName()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, constructor(), sa(), Xs()]
- "runtime_library_highlight": "highlight()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L23 | neighbors=[library.js, e(), _s(), toString()]
- "runtime_library_i": "I()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, getSelectionPath(), isPreviewFeatureOn(), throwValidationError()]
- "runtime_library_ia": "Ia()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, append(), e(), r()]
- "runtime_library_indentedcurrentline": "indentedCurrentLine()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, slice(), newLine(), toString()]
- "runtime_library_isempty": "isEmpty()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, da(), na(), _p()]
- "runtime_library_isenabled": "isEnabled()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, build(), buildCaptureSettings(), getGlobalTracingHelper()]
- "runtime_library_it": "It()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, Br(), sa(), Xs()]
- "runtime_library_k": "K()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, He(), ri(), we()]
- "runtime_library_kd": "kd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, hi(), Lt(), xa()]
- "runtime_library_li": "li()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L6 | neighbors=[library.js, slice(), toString(), za()]
- "runtime_library_loadengine": "loadEngine()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L112 | neighbors=[library.js, instantiateLibrary(), loadLibrary(), parseInitError()]
- "runtime_library_lp": "lp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, addErrorMessage(), Hs(), markAsError()]
- "runtime_library_lt": "Lt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, ea(), id(), kd()]
- "runtime_library_maplineat": "mapLineAt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, e(), r(), wp()]
- "runtime_library_maplines": "mapLines()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, e(), prependSymbolAt(), wp()]
- "runtime_library_nestargument": "nestArgument()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, aa(), e(), od()]
- "runtime_library_newline": "newLine()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, indentedCurrentLine(), t(), writeLine()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-020.json

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
