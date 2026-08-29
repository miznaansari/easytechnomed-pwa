# Node Description Batch 147 of 150

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

- "scratch_check_data_prisma": "prisma" | kind=code-symbol | source=scratch/check-data.js:L2 | neighbors=[check-data.js]
- "scratch_check_data_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/check-data.js:L1 | neighbors=[check-data.js]
- "scratch_check_formulas_2398_main": "main()" | kind=code-symbol | source=scratch/check-formulas-2398.js:L4 | neighbors=[check-formulas-2398.js]
- "scratch_check_formulas_2398_prisma": "prisma" | kind=code-symbol | source=scratch/check-formulas-2398.js:L2 | neighbors=[check-formulas-2398.js]
- "scratch_check_formulas_2398_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/check-formulas-2398.js:L1 | neighbors=[check-formulas-2398.js]
- "scratch_check_formulas_main": "main()" | kind=code-symbol | source=scratch/check-formulas.js:L4 | neighbors=[check-formulas.js]
- "scratch_check_formulas_prisma": "prisma" | kind=code-symbol | source=scratch/check-formulas.js:L2 | neighbors=[check-formulas.js]
- "scratch_check_formulas_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/check-formulas.js:L1 | neighbors=[check-formulas.js]
- "scratch_check_kft_all_main": "main()" | kind=code-symbol | source=scratch/check-kft-all.js:L4 | neighbors=[check-kft-all.js]
- "scratch_check_kft_all_prisma": "prisma" | kind=code-symbol | source=scratch/check-kft-all.js:L2 | neighbors=[check-kft-all.js]
- "scratch_check_kft_all_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/check-kft-all.js:L1 | neighbors=[check-kft-all.js]
- "scratch_check_reg_14_main": "main()" | kind=code-symbol | source=scratch/check-reg-14.js:L3 | neighbors=[check-reg-14.js]
- "scratch_check_reg_17_main": "main()" | kind=code-symbol | source=scratch/check-reg-17.js:L6 | neighbors=[check-reg-17.js]
- "scratch_check_reg_17_prisma": "prisma" | kind=code-symbol | source=scratch/check-reg-17.js:L4 | neighbors=[check-reg-17.js]
- "scratch_check_reg_22_main": "main()" | kind=code-symbol | source=scratch/check-reg-22.js:L3 | neighbors=[check-reg-22.js]
- "scratch_cleanup_cbc_main": "main()" | kind=code-symbol | source=scratch/cleanup-cbc.js:L4 | neighbors=[cleanup-cbc.js]
- "scratch_cleanup_cbc_prisma": "prisma" | kind=code-symbol | source=scratch/cleanup-cbc.js:L2 | neighbors=[cleanup-cbc.js]
- "scratch_cleanup_cbc_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/cleanup-cbc.js:L1 | neighbors=[cleanup-cbc.js]
- "scratch_inspect_cbc_main": "main()" | kind=code-symbol | source=scratch/inspect-cbc.js:L4 | neighbors=[inspect-cbc.js]
- "scratch_inspect_cbc_prisma": "prisma" | kind=code-symbol | source=scratch/inspect-cbc.js:L2 | neighbors=[inspect-cbc.js]
- "scratch_inspect_cbc_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/inspect-cbc.js:L1 | neighbors=[inspect-cbc.js]
- "scratch_inspect_kft_main": "main()" | kind=code-symbol | source=scratch/inspect-kft.js:L4 | neighbors=[inspect-kft.js]
- "scratch_inspect_kft_prisma": "prisma" | kind=code-symbol | source=scratch/inspect-kft.js:L2 | neighbors=[inspect-kft.js]
- "scratch_inspect_kft_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/inspect-kft.js:L1 | neighbors=[inspect-kft.js]
- "scratch_sync_expiry_to_workspace_main": "main()" | kind=code-symbol | source=scratch/sync-expiry-to-workspace.js:L4 | neighbors=[sync-expiry-to-workspace.js]
- "scratch_sync_expiry_to_workspace_prisma": "prisma" | kind=code-symbol | source=scratch/sync-expiry-to-workspace.js:L2 | neighbors=[sync-expiry-to-workspace.js]
- "scratch_sync_expiry_to_workspace_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/sync-expiry-to-workspace.js:L1 | neighbors=[sync-expiry-to-workspace.js]
- "scratch_sync_kft_formulas_main": "main()" | kind=code-symbol | source=scratch/sync-kft-formulas.js:L7 | neighbors=[sync-kft-formulas.js]
- "scratch_sync_kft_formulas_prisma": "prisma" | kind=code-symbol | source=scratch/sync-kft-formulas.js:L2 | neighbors=[sync-kft-formulas.js]
- "scratch_sync_kft_formulas_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/sync-kft-formulas.js:L1 | neighbors=[sync-kft-formulas.js]
- "scratch_test_calc_export_dlc_definitions": "DLC_DEFINITIONS" | kind=code-symbol | source=scratch/test-calc-export.js:L1 | neighbors=[test-calc-export.js]
- "scratch_test_calc_initialvalues": "initialValues" | kind=code-symbol | source=scratch/test-calc.js:L189 | neighbors=[test-calc.js]
- "scratch_test_calc_overrides": "overrides" | kind=code-symbol | source=scratch/test-calc.js:L190 | neighbors=[test-calc.js]
- "scratch_test_calc_result": "result" | kind=code-symbol | source=scratch/test-calc.js:L191 | neighbors=[test-calc.js]
- "scratch_test_calc_standard_code_fallbacks": "STANDARD_CODE_FALLBACKS" | kind=code-symbol | source=scratch/test-calc.js:L1 | neighbors=[test-calc.js]
- "scratch_test_calc_tests": "tests" | kind=code-symbol | source=scratch/test-calc.js:L171 | neighbors=[test-calc.js]
- "scratch_test_db_main": "main()" | kind=code-symbol | source=scratch/test-db.mjs:L3 | neighbors=[test-db.mjs]
- "scratch_test_dlc_calc_calculatedifferentialsummary": "{ calculateDifferentialSummary }" | kind=code-symbol | source=scratch/test-dlc-calc.js:L1 | neighbors=[test-dlc-calc.js]
- "scratch_test_dlc_calc_params": "params" | kind=code-symbol | source=scratch/test-dlc-calc.js:L4 | neighbors=[test-dlc-calc.js]
- "scratch_test_dlc_calc_values1": "values1" | kind=code-symbol | source=scratch/test-dlc-calc.js:L19 | neighbors=[test-dlc-calc.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-146.json

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
