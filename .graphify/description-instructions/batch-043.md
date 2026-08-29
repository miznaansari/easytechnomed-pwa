# Node Description Batch 44 of 150

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

- "runtime_library_gd": "Gd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, Oa()]
- "runtime_library_getactivecontext": "getActiveContext()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, getGlobalTracingHelper()]
- "runtime_library_getallbatchquerycallbacks": "getAllBatchQueryCallbacks()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, get()]
- "runtime_library_getcurrentlinelength": "getCurrentLineLength()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, write()]
- "runtime_library_getfields": "getFields()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, gp()]
- "runtime_library_getnamespace": "_getNamespace()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, constructor()]
- "runtime_library_getoutputtypedescription": "getOutputTypeDescription()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, rd()]
- "runtime_library_getprintwidth": "getPrintWidth()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, values()]
- "runtime_library_gl": "Gl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L126 | neighbors=[library.js, r()]
- "runtime_library_gm": "gm()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, logger()]
- "runtime_library_handleerror": "handleError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, uploadSchema()]
- "runtime_library_hi": "hi()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L18 | neighbors=[library.js, kd()]
- "runtime_library_hl": "hl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L113 | neighbors=[library.js, Yt()]
- "runtime_library_hm": "hm()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L113 | neighbors=[library.js, transaction()]
- "runtime_library_hp": "hp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, _s()]
- "runtime_library_ii": "ii()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L6 | neighbors=[library.js, ui()]
- "runtime_library_il": "il()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L110 | neighbors=[library.js, constructor()]
- "runtime_library_in": "In()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L33 | neighbors=[library.js, loadLibrary()]
- "runtime_library_indent": "indent()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, withIndent()]
- "runtime_library_israwaction": "isRawAction()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, td()]
- "runtime_library_iu": "Iu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, pe()]
- "runtime_library_j": "j()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, pe()]
- "runtime_library_json": "json()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, metrics()]
- "runtime_library_jt": "jt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L114 | neighbors=[library.js, El()]
- "runtime_library_ju": "ju()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, Mo()]
- "runtime_library_kc": "kc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, As()]
- "runtime_library_la": "la()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, Fi()]
- "runtime_library_lc": "lc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L18 | neighbors=[library.js, Yt()]
- "runtime_library_lineat": "lineAt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, wp()]
- "runtime_library_ll": "Ll()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, vm()]
- "runtime_library_ls": "Ls()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, slice()]
- "runtime_library_ma": "Ma()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, constructor()]
- "runtime_library_mapqueryengineresult": "mapQueryEngineResult()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, unpack()]
- "runtime_library_nl": "nl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L110 | neighbors=[library.js, withRetry()]
- "runtime_library_o": "$o()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L6 | neighbors=[library.js, Vu()]
- "runtime_library_ol": "ol()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L110 | neighbors=[library.js, constructor()]
- "runtime_library_oo": "Oo()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, pe()]
- "runtime_library_os": "Os()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, bs()]
- "runtime_library_parseiniterror": "parseInitError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L112 | neighbors=[library.js, loadEngine()]
- "runtime_library_parserequesterror": "parseRequestError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L112 | neighbors=[library.js, request()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-043.json

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
