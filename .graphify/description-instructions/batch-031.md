# Node Description Batch 32 of 150

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
- "runtime_library_text": "text()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, tm(), um()]
- "runtime_library_to": "to()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, ct(), om()]
- "runtime_library_uploadschema": "uploadSchema()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, handleError(), runInChildSpan()]
- "runtime_library_vm": "vm()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, Fe(), Ll()]
- "runtime_library_vs": "Vs()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, pn(), addErrorMessage()]
- "runtime_library_wl": "wl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L114 | neighbors=[library.js, pl(), toString()]
- "runtime_library_ws": "ws()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, addSuggestion(), hasField()]
- "runtime_library_xa": "xa()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, kd(), t()]
- "runtime_library_xi": "xi()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, sp(), t()]
- "runtime_library_xp": "xp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L25 | neighbors=[library.js, wp(), slice()]
- "runtime_library_xt": "xt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, getGlobalOmit(), kp()]
- "runtime_library_yn": "Yn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L5 | neighbors=[library.js, loadLibrary(), Mo()]
- "runtime_library_zd": "Zd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L64 | neighbors=[library.js, za(), nt()]
- "runtime_library_zp": "zp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, Xs(), addItem()]
- "runtime_library_zs": "zs()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, Xs(), addField()]
- "runtime_react_native_a": "a()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, g(), l()]
- "runtime_react_native_aa": "Aa()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L1 | neighbors=[react-native.js, Da(), nr()]
- "runtime_react_native_ao": "Ao()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, ec(), Pe()]
- "runtime_react_native_append": "append()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L10 | neighbors=[react-native.js, e(), rs()]
- "runtime_react_native_au": "au()" | kind=code-symbol | source=scratch/generated-client/runtime/react-native.js:L2 | neighbors=[react-native.js, toString(), underline()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-031.json

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
