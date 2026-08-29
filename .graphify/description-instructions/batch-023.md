# Node Description Batch 24 of 150

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

- "runtime_wasm_getfieldvalue": "getFieldValue()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, getDeepSelectionParent(), getField(), ti()]
- "runtime_wasm_getglobalomit": "getGlobalOmit()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, shouldApplyGlobalOmit(), Ve(), oa()]
- "runtime_wasm_getname": "_getName()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, constructor(), di(), si()]
- "runtime_wasm_handleandlogrequesterror": "handleAndLogRequestError()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, emit(), handleRequestError(), request()]
- "runtime_wasm_handlerequesterror": "handleRequestError()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, handleAndLogRequestError(), sanitizeMessage(), zt()]
- "runtime_wasm_ie": "Ie()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, da(), ia(), la()]
- "runtime_wasm_indentedcurrentline": "indentedCurrentLine()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, slice(), newLine(), toString()]
- "runtime_wasm_isempty": "isEmpty()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, bi(), ds(), qi()]
- "runtime_wasm_je": "je()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, Ct(), di(), so()]
- "runtime_wasm_ke": "ke()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, ae(), Pe(), slice()]
- "runtime_wasm_kn": "Kn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, addErrorMessage(), Os(), t()]
- "runtime_wasm_ko": "ko()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L26 | neighbors=[wasm.js, includes(), nt(), r()]
- "runtime_wasm_ks": "Ks()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, addSuggestion(), hasField(), Ns()]
- "runtime_wasm_la": "la()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, di(), concat(), Ie()]
- "runtime_wasm_loadengine": "loadEngine()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, instantiateLibrary(), loadLibrary(), parseInitError()]
- "runtime_wasm_logger": "logger()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, createEngineSpan(), emit(), parseEngineResponse()]
- "runtime_wasm_mn": "mn()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, D(), reverse(), slice()]
- "runtime_wasm_newline": "newLine()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, indentedCurrentLine(), t(), writeLine()]
- "runtime_wasm_nt": "nt()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L26 | neighbors=[wasm.js, ko(), tl(), t()]
- "runtime_wasm_readintbe": "readIntBE()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, B(), V(), Y()]
- "runtime_wasm_readintle": "readIntLE()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, B(), V(), Y()]
- "runtime_wasm_readuintbe": "readUIntBE()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, B(), V(), Y()]
- "runtime_wasm_readuintle": "readUIntLE()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, B(), V(), Y()]
- "runtime_wasm_requestbatch": "requestBatch()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L12 | neighbors=[wasm.js, buildQueryError(), parseEngineResponse(), start()]
- "runtime_wasm_sr": "sr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L6 | neighbors=[wasm.js, bi(), qi(), e()]
- "runtime_wasm_un": "un()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, D(), reverse(), slice()]
- "runtime_wasm_underline": "underline()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, cs(), write(), writeEmpty()]
- "runtime_wasm_unpack": "unpack()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, mapQueryEngineResult(), values(), wo()]
- "runtime_wasm_us": "us()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, addErrorMessage(), markAsError(), ti()]
- "runtime_wasm_writeempty": "writeEmpty()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, write(), setColor(), underline()]
- "runtime_wasm_ws": "ws()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, e(), addSuggestion(), hasField()]
- "runtime_wasm_yr": "yr()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, It(), D(), e()]
- "runtime_wasm_ze": "ze()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, Ct(), di(), si()]
- "samples_route": "route.js" | kind=code-symbol | source=app/api/registrations/[id]/samples/route.js:L1 | neighbors=[252e194 e, GET(), POST(), serializeData()]
- "scratch_backfill": "scratch-backfill.js" | kind=code-symbol | source=scratch-backfill.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_backfill_incentives": "scratch-backfill-incentives.js" | kind=code-symbol | source=scratch-backfill-incentives.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_bootstrap_dates": "bootstrap-dates.js" | kind=code-symbol | source=scratch/bootstrap-dates.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_data": "check-data.js" | kind=code-symbol | source=scratch/check-data.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_formulas": "check-formulas.js" | kind=code-symbol | source=scratch/check-formulas.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_formulas_2398": "check-formulas-2398.js" | kind=code-symbol | source=scratch/check-formulas-2398.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-023.json

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
