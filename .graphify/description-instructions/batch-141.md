# Node Description Batch 142 of 150

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

- "runtime_library_jl": "Jl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L131 | neighbors=[library.js]
- "runtime_library_js": "js()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js]
- "runtime_library_kl": "kl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js]
- "runtime_library_lastlinenumber": "lastLineNumber()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_ld": "ld()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_length": "length()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js]
- "runtime_library_m": "M()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js]
- "runtime_library_mc": "mc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_mi": "mi()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L18 | neighbors=[library.js]
- "runtime_library_middlewareargstorequestargs": "middlewareArgsToRequestArgs()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js]
- "runtime_library_nextid": "nextId()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L130 | neighbors=[library.js]
- "runtime_library_oi": "Oi()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js]
- "runtime_library_onbeforeexit": "onBeforeExit()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js]
- "runtime_library_pa": "pa()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_pd": "pd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_po": "po()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js]
- "runtime_library_qi": "Qi()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js]
- "runtime_library_ql": "Ql()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L130 | neighbors=[library.js]
- "runtime_library_registernewerror": "registerNewError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_requestargstomiddlewareargs": "requestArgsToMiddlewareArgs()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js]
- "runtime_library_returntype": "returnType()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js]
- "runtime_library_set": "set()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_sm": "sm()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js]
- "runtime_library_statement": "statement()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_symbol_tostringtag": "[Symbol.toStringTag]()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_tographqlinputtype": "_toGraphQLInputType()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js]
- "runtime_library_uo": "uo()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L114 | neighbors=[library.js]
- "runtime_library_use": "use()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js]
- "runtime_library_ve": "Ve()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js]
- "runtime_library_vi": "Vi()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_w": "w()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_wc": "Wc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_xc": "Xc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_yc": "Yc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_ye": "ye()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js]
- "runtime_library_yi": "yi()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_yl": "Yl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L130 | neighbors=[library.js]
- "runtime_library_yo": "yo()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js]
- "runtime_library_ze": "Ze()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js]
- "runtime_library_zl": "Zl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L131 | neighbors=[library.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-141.json

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
