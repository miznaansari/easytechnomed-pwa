# Node Description Batch 146 of 150

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

- "runtime_wasm_registernewerror": "registerNewError()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_requestargstomiddlewareargs": "requestArgsToMiddlewareArgs()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_rl": "rl()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L26 | neighbors=[wasm.js]
- "runtime_wasm_rr": "Rr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_set": "set()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_statement": "statement()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_swap16": "swap16()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_swap32": "swap32()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_swap64": "swap64()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_symbol_tostringtag": "[Symbol.toStringTag]()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_ta": "Ta()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js]
- "runtime_wasm_te": "Te()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js]
- "runtime_wasm_text": "text()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_tn": "tn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_tographqlinputtype": "_toGraphQLInputType()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js]
- "runtime_wasm_ts": "ts()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_ur": "ur()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L14 | neighbors=[wasm.js]
- "runtime_wasm_use": "use()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_vr": "Vr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_wi": "Wi()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js]
- "runtime_wasm_wn": "Wn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js]
- "runtime_wasm_xr": "Xr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js]
- "runtime_wasm_yi": "yi()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js]
- "runtime_wasm_ys": "ys()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js]
- "runtime_wasm_zi": "zi()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js]
- "runtime_wasm_zn": "Zn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js]
- "runtime_wasm_zr": "zr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L14 | neighbors=[wasm.js]
- "samples_route_post": "POST()" | kind=code-symbol | source=app/api/registrations/[id]/samples/route.js:L38 | neighbors=[route.js]
- "scratch_backfill_counters_prisma": "prisma" | kind=code-symbol | source=scratch-backfill-counters.js:L2 | neighbors=[scratch-backfill-counters.js]
- "scratch_backfill_counters_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch-backfill-counters.js:L1 | neighbors=[scratch-backfill-counters.js]
- "scratch_backfill_incentives_main": "main()" | kind=code-symbol | source=scratch-backfill-incentives.js:L4 | neighbors=[scratch-backfill-incentives.js]
- "scratch_backfill_incentives_prisma": "prisma" | kind=code-symbol | source=scratch-backfill-incentives.js:L2 | neighbors=[scratch-backfill-incentives.js]
- "scratch_backfill_incentives_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch-backfill-incentives.js:L1 | neighbors=[scratch-backfill-incentives.js]
- "scratch_backfill_main": "main()" | kind=code-symbol | source=scratch-backfill.js:L4 | neighbors=[scratch-backfill.js]
- "scratch_backfill_prisma": "prisma" | kind=code-symbol | source=scratch-backfill.js:L2 | neighbors=[scratch-backfill.js]
- "scratch_backfill_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch-backfill.js:L1 | neighbors=[scratch-backfill.js]
- "scratch_bootstrap_dates_main": "main()" | kind=code-symbol | source=scratch/bootstrap-dates.js:L4 | neighbors=[bootstrap-dates.js]
- "scratch_bootstrap_dates_prisma": "prisma" | kind=code-symbol | source=scratch/bootstrap-dates.js:L2 | neighbors=[bootstrap-dates.js]
- "scratch_bootstrap_dates_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/bootstrap-dates.js:L1 | neighbors=[bootstrap-dates.js]
- "scratch_check_data_main": "main()" | kind=code-symbol | source=scratch/check-data.js:L4 | neighbors=[check-data.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-145.json

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
