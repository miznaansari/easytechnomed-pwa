# Node Description Batch 30 of 148

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

- "runtime_library_getsubselectionvalue": "getSubSelectionValue()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, getDeepSubSelectionValue(), getSelectionParent()]
- "runtime_library_gettraceparent": "getTraceParent()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, build(), getGlobalTracingHelper()]
- "runtime_library_gr": "gr()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, ji(), Yr()]
- "runtime_library_handleandlogrequesterror": "handleAndLogRequestError()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, handleRequestError(), request()]
- "runtime_library_ic": "ic()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js, slice(), oc()]
- "runtime_library_ie": "ie()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, ep(), Si()]
- "runtime_library_im": "im()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, Bl(), om()]
- "runtime_library_is": "is()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L18 | neighbors=[library.js, sc(), zt()]
- "runtime_library_ka": "ka()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, an(), Re()]
- "runtime_library_kn": "kn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L42 | neighbors=[library.js, ha(), Ja()]
- "runtime_library_ko": "ko()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, No(), $u()]
- "runtime_library_ks": "ks()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, addSuggestion(), hasField()]
- "runtime_library_l": "_l()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, xm(), unpack()]
- "runtime_library_lu": "Lu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, Lo(), Fu()]
- "runtime_library_makerequired": "makeRequired()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, Fp(), qp()]
- "runtime_library_nc": "nc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L1 | neighbors=[library.js, toString(), y()]
- "runtime_library_no": "No()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, ko(), Nu()]
- "runtime_library_nu": "Nu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, No(), $u()]
- "runtime_library_on": "On()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L33 | neighbors=[library.js, qa(), wa()]
- "runtime_library_pl": "pl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, wl(), requestBatch()]
- "runtime_library_pr": "pr()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, constructor(), ua()]
- "runtime_library_prependsymbolat": "prependSymbolAt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, mapLines(), wp()]
- "runtime_library_propagateresponseextensions": "propagateResponseExtensions()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, createEngineSpan(), forEach()]
- "runtime_library_qa": "qa()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, On(), Xe()]
- "runtime_library_qd": "qd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, ji(), Te()]
- "runtime_library_qr": "qr()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, Bu(), ya()]
- "runtime_library_qu": "Qu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L1 | neighbors=[library.js, ei(), ti()]
- "runtime_library_ra": "ra()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, id(), values()]
- "runtime_library_read": "read()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, fromContent(), wp()]
- "runtime_library_removeallfields": "removeAllFields()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, dp(), _p()]
- "runtime_library_rp": "rp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, get(), values()]
- "runtime_library_rr": "rr()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, He(), ri()]
- "runtime_library_rs": "rs()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L9 | neighbors=[library.js, ns(), r()]
- "runtime_library_s": "_s()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, highlight(), hp()]
- "runtime_library_sc": "sc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L10 | neighbors=[library.js, is(), zt()]
- "runtime_library_setcolor": "setColor()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, write(), writeEmpty()]
- "runtime_library_shouldapplyglobalomit": "shouldApplyGlobalOmit()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, getGlobalOmit(), Fe()]
- "runtime_library_so": "So()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js, rl(), slice()]
- "runtime_library_st": "st()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, buildQueryError(), fd()]
- "runtime_library_te": "Te()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, qd(), ta()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-029.json

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
