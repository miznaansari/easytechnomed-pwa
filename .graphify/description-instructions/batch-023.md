# Node Description Batch 24 of 149

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
- "scratch_check_kft_all": "check-kft-all.js" | kind=code-symbol | source=scratch/check-kft-all.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_check_reg_17": "check-reg-17.js" | kind=code-symbol | source=scratch/check-reg-17.js:L1 | neighbors=[252e194 e, runFormulaEngine(), main(), prisma]
- "scratch_cleanup_cbc": "cleanup-cbc.js" | kind=code-symbol | source=scratch/cleanup-cbc.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_inspect_cbc": "inspect-cbc.js" | kind=code-symbol | source=scratch/inspect-cbc.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_inspect_kft": "inspect-kft.js" | kind=code-symbol | source=scratch/inspect-kft.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_sync_expiry_to_workspace": "sync-expiry-to-workspace.js" | kind=code-symbol | source=scratch/sync-expiry-to-workspace.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_sync_kft_formulas": "sync-kft-formulas.js" | kind=code-symbol | source=scratch/sync-kft-formulas.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_test_fix_reg_17": "test-fix-reg-17.js" | kind=code-symbol | source=scratch/test-fix-reg-17.js:L1 | neighbors=[252e194 e, runFormulaEngine(), main(), prisma]
- "scratch_test_formula_run": "test-formula-run.js" | kind=code-symbol | source=scratch/test-formula-run.js:L1 | neighbors=[252e194 e, runFormulaEngine(), main(), prisma]
- "scratch_test_prisma": "test-prisma.js" | kind=code-symbol | source=scratch/test-prisma.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "scratch_test_whatsapp_url": "test-whatsapp-url.mjs" | kind=code-symbol | source=scratch/test-whatsapp-url.mjs:L1 | neighbors=[252e194 e, getRegistrationWhatsappUrl(), sampleReg, url]
- "scratch_trigger_sync": "trigger-sync.js" | kind=code-symbol | source=scratch/trigger-sync.js:L1 | neighbors=[252e194 e, main(), prisma, { PrismaClient }]
- "ui_button": "Button.js" | kind=code-symbol | source=components/ui/Button.js:L1 | neighbors=[252e194 e, Button(), Loader.js, Loader()]
- "ui_input": "Input.js" | kind=code-symbol | source=components/ui/Input.js:L1 | neighbors=[252e194 e, 2582be7 fixed zoom issue, a712d0e ios issue pwa, Input]

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
