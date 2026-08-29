# Node Description Batch 148 of 150

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

- "scratch_test_dlc_calc_values2": "values2" | kind=code-symbol | source=scratch/test-dlc-calc.js:L32 | neighbors=[test-dlc-calc.js]
- "scratch_test_fix_reg_17_main": "main()" | kind=code-symbol | source=scratch/test-fix-reg-17.js:L6 | neighbors=[test-fix-reg-17.js]
- "scratch_test_fix_reg_17_prisma": "prisma" | kind=code-symbol | source=scratch/test-fix-reg-17.js:L4 | neighbors=[test-fix-reg-17.js]
- "scratch_test_formula_calc_checkformuladependencies": "checkFormulaDependencies()" | kind=code-symbol | source=scratch/test-formula-calc.js:L87 | neighbors=[test-formula-calc.js]
- "scratch_test_formula_calc_evaluateexpression": "evaluateExpression()" | kind=code-symbol | source=scratch/test-formula-calc.js:L1 | neighbors=[test-formula-calc.js]
- "scratch_test_formula_calc_resf": "resF" | kind=code-symbol | source=scratch/test-formula-calc.js:L141 | neighbors=[test-formula-calc.js]
- "scratch_test_formula_calc_resm": "resM" | kind=code-symbol | source=scratch/test-formula-calc.js:L146 | neighbors=[test-formula-calc.js]
- "scratch_test_formula_calc_valuesfemale": "valuesFemale" | kind=code-symbol | source=scratch/test-formula-calc.js:L110 | neighbors=[test-formula-calc.js]
- "scratch_test_formula_calc_valuesmale": "valuesMale" | kind=code-symbol | source=scratch/test-formula-calc.js:L124 | neighbors=[test-formula-calc.js]
- "scratch_test_formula_run_main": "main()" | kind=code-symbol | source=scratch/test-formula-run.js:L6 | neighbors=[test-formula-run.js]
- "scratch_test_formula_run_prisma": "prisma" | kind=code-symbol | source=scratch/test-formula-run.js:L4 | neighbors=[test-formula-run.js]
- "scratch_test_formula_verification_overrides1": "overrides1" | kind=code-symbol | source=scratch/test-formula-verification.mjs:L44 | neighbors=[test-formula-verification.mjs]
- "scratch_test_formula_verification_overrides2": "overrides2" | kind=code-symbol | source=scratch/test-formula-verification.mjs:L58 | neighbors=[test-formula-verification.mjs]
- "scratch_test_formula_verification_result1": "result1" | kind=code-symbol | source=scratch/test-formula-verification.mjs:L45 | neighbors=[test-formula-verification.mjs]
- "scratch_test_formula_verification_result2": "result2" | kind=code-symbol | source=scratch/test-formula-verification.mjs:L59 | neighbors=[test-formula-verification.mjs]
- "scratch_test_formula_verification_testdef": "testDef" | kind=code-symbol | source=scratch/test-formula-verification.mjs:L4 | neighbors=[test-formula-verification.mjs]
- "scratch_test_formula_verification_values1": "values1" | kind=code-symbol | source=scratch/test-formula-verification.mjs:L43 | neighbors=[test-formula-verification.mjs]
- "scratch_test_formula_verification_values2": "values2" | kind=code-symbol | source=scratch/test-formula-verification.mjs:L57 | neighbors=[test-formula-verification.mjs]
- "scratch_test_identity_and_qr_runtests": "runTests()" | kind=code-symbol | source=scratch/test_identity_and_qr.mjs:L5 | neighbors=[test_identity_and_qr.mjs]
- "scratch_test_patient_context_addpatientcontexttovaluesmap": "addPatientContextToValuesMap()" | kind=code-symbol | source=scratch/test-patient-context.js:L1 | neighbors=[test-patient-context.js]
- "scratch_test_patient_context_valuesmap1": "valuesMap1" | kind=code-symbol | source=scratch/test-patient-context.js:L52 | neighbors=[test-patient-context.js]
- "scratch_test_patient_context_valuesmap2": "valuesMap2" | kind=code-symbol | source=scratch/test-patient-context.js:L56 | neighbors=[test-patient-context.js]
- "scratch_test_patient_context_valuesmap3": "valuesMap3" | kind=code-symbol | source=scratch/test-patient-context.js:L60 | neighbors=[test-patient-context.js]
- "scratch_test_pdf_customization_runtests": "runTests()" | kind=code-symbol | source=scratch/test-pdf-customization.mjs:L11 | neighbors=[test-pdf-customization.mjs]
- "scratch_test_prisma_main": "main()" | kind=code-symbol | source=scratch/test-prisma.js:L4 | neighbors=[test-prisma.js]
- "scratch_test_prisma_prisma": "prisma" | kind=code-symbol | source=scratch/test-prisma.js:L2 | neighbors=[test-prisma.js]
- "scratch_test_prisma_prismaclient": "{ PrismaClient }" | kind=code-symbol | source=scratch/test-prisma.js:L1 | neighbors=[test-prisma.js]
- "scratch_test_reg_15_main": "main()" | kind=code-symbol | source=scratch/test-reg-15.js:L4 | neighbors=[test-reg-15.js]
- "scratch_test_reg_17_addvaluetovaluesmap": "addValueToValuesMap()" | kind=code-symbol | source=scratch/test-reg-17.js:L1 | neighbors=[test-reg-17.js]
- "scratch_test_reg_17_checkformuladependencies": "checkFormulaDependencies()" | kind=code-symbol | source=scratch/test-reg-17.js:L313 | neighbors=[test-reg-17.js]
- "scratch_test_reg_17_evaluateexpression": "evaluateExpression()" | kind=code-symbol | source=scratch/test-reg-17.js:L256 | neighbors=[test-reg-17.js]
- "scratch_test_reg_17_inputvalues": "inputValues" | kind=code-symbol | source=scratch/test-reg-17.js:L367 | neighbors=[test-reg-17.js]
- "scratch_test_reg_17_regpayload": "regPayload" | kind=code-symbol | source=scratch/test-reg-17.js:L328 | neighbors=[test-reg-17.js]
- "scratch_test_reg_17_valuesmap": "valuesMap" | kind=code-symbol | source=scratch/test-reg-17.js:L379 | neighbors=[test-reg-17.js]
- "scratch_test_report_security_runsecuritytests": "runSecurityTests()" | kind=code-symbol | source=scratch/test-report-security.mjs:L3 | neighbors=[test-report-security.mjs]
- "scratch_test_sync_bootstrap_verifybackendendpoints": "verifyBackendEndpoints()" | kind=code-symbol | source=scratch/test-sync-bootstrap.mjs:L3 | neighbors=[test-sync-bootstrap.mjs]
- "scratch_test_user_cbc_inputvalues": "inputValues" | kind=code-symbol | source=scratch/test-user-cbc.js:L43 | neighbors=[test-user-cbc.js]
- "scratch_test_user_cbc_result": "result" | kind=code-symbol | source=scratch/test-user-cbc.js:L55 | neighbors=[test-user-cbc.js]
- "scratch_test_user_cbc_testdefinition": "testDefinition" | kind=code-symbol | source=scratch/test-user-cbc.js:L4 | neighbors=[test-user-cbc.js]
- "scratch_test_user_lipid_addvaluetovaluesmap": "addValueToValuesMap()" | kind=code-symbol | source=scratch/test-user-lipid.js:L1 | neighbors=[test-user-lipid.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-147.json

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
