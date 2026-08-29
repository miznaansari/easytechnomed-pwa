# Node Description Batch 45 of 150

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

- "runtime_library_pc": "pc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L20 | neighbors=[library.js, toString()]
- "runtime_library_pm": "pm()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, dm()]
- "runtime_library_pp": "pp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, wt()]
- "runtime_library_prometheus": "prometheus()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, metrics()]
- "runtime_library_qc": "qc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, ln()]
- "runtime_library_qn": "Qn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, instantiateLibrary()]
- "runtime_library_qo": "Qo()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L1 | neighbors=[library.js, ri()]
- "runtime_library_qs": "qs()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, or()]
- "runtime_library_qt": "qt()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L110 | neighbors=[library.js, or()]
- "runtime_library_removefield": "removeField()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L27 | neighbors=[library.js, qp()]
- "runtime_library_renderallmessages": "renderAllMessages()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L28 | neighbors=[library.js, en()]
- "runtime_library_rm": "rm()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L110 | neighbors=[library.js, sl()]
- "runtime_library_ru": "Ru()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js, enabled()]
- "runtime_library_run": "run()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L4 | neighbors=[library.js, exhaustive()]
- "runtime_library_sanitizemessage": "sanitizeMessage()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, handleRequestError()]
- "runtime_library_sd": "sd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, sa()]
- "runtime_library_single": "single()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, e()]
- "runtime_library_sl": "sl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L110 | neighbors=[library.js, rm()]
- "runtime_library_sn": "sn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, Tc()]
- "runtime_library_sp": "sp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, xi()]
- "runtime_library_sql": "sql()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, get()]
- "runtime_library_stop": "stop()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, runInChildSpan()]
- "runtime_library_ti": "ti()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L1 | neighbors=[library.js, Qu()]
- "runtime_library_tl": "tl()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L66 | neighbors=[library.js, rl()]
- "runtime_library_tp": "tp()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, y()]
- "runtime_library_ua": "ua()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, pr()]
- "runtime_library_uc": "Uc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js, y()]
- "runtime_library_ud": "Ud()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, Oa()]
- "runtime_library_ul": "ul()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, um()]
- "runtime_library_unindent": "unindent()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, withIndent()]
- "runtime_library_url": "url()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, start()]
- "runtime_library_uu": "Uu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L6 | neighbors=[library.js, Lo()]
- "runtime_library_va": "va()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, Cn()]
- "runtime_library_vd": "Vd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, ji()]
- "runtime_library_version": "version()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L111 | neighbors=[library.js, instantiateLibrary()]
- "runtime_library_vn": "vn()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js, mr()]
- "runtime_library_writejoined": "writeJoined()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L26 | neighbors=[library.js, write()]
- "runtime_library_xm": "xm()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L121 | neighbors=[library.js, _l()]
- "runtime_library_yd": "yd()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js, ya()]
- "runtime_library_ym": "ym()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L114 | neighbors=[library.js, xl()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-044.json

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
