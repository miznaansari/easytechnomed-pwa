# Node Description Batch 22 of 150

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

- "runtime_library_nn": "nn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, He(), e(), y()]
- "runtime_library_np": "np()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, addErrorMessage(), Hs(), markAsError()]
- "runtime_library_ns": "ns()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L18 | neighbors=[library.js, ac(), rs(), zt()]
- "runtime_library_oc": "oc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js, ci(), forEach(), ic()]
- "runtime_library_ot": "Ot()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, ha(), om(), wn()]
- "runtime_library_pt": "Pt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, Br(), sa(), xl()]
- "runtime_library_rc": "Rc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, an(), e(), Et()]
- "runtime_library_requestinternal": "requestInternal()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, request(), requestBatch(), withRetry()]
- "runtime_library_rl": "rl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L66 | neighbors=[library.js, Lo(), So(), tl()]
- "runtime_library_ss": "Ss()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, e(), Es(), Tc()]
- "runtime_library_ta": "ta()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, ea(), Te(), Yp()]
- "runtime_library_tm": "tm()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L110 | neighbors=[library.js, or(), text(), values()]
- "runtime_library_underline": "underline()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, vp(), write(), writeEmpty()]
- "runtime_library_wa": "wa()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, On(), t(), Xe()]
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
