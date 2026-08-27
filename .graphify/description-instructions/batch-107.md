# Node Description Batch 108 of 148

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

- "generated_client_index_d_testpayload": "$TestPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16212 | neighbors=[index.d.ts]
- "generated_client_index_d_testrelationfilter": "TestRelationFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L41722 | neighbors=[index.d.ts]
- "generated_client_index_d_testscalarfieldenum": "TestScalarFieldEnum" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34089 | neighbors=[index.d.ts]
- "generated_client_index_d_testscalarwhereinput": "TestScalarWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45882 | neighbors=[index.d.ts]
- "generated_client_index_d_testscalarwherewithaggregatesinput": "TestScalarWhereWithAggregatesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L35569 | neighbors=[index.d.ts]
- "generated_client_index_d_testselect": "TestSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16146 | neighbors=[index.d.ts]
- "generated_client_index_d_testselectscalar": "TestSelectScalar" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16178 | neighbors=[index.d.ts]
- "generated_client_index_d_testsumaggregateinputtype": "TestSumAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L15929 | neighbors=[index.d.ts]
- "generated_client_index_d_testsumaggregateoutputtype": "TestSumAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L15825 | neighbors=[index.d.ts]
- "generated_client_index_d_testsumorderbyaggregateinput": "TestSumOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L41459 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreateinput": "TestUncheckedCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L38334 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreatenestedmanywithoutdepartmentinput": "TestUncheckedCreateNestedManyWithoutDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44680 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreatenestedmanywithoutworkspaceinput": "TestUncheckedCreateNestedManyWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42827 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreatewithoutdepartmentinput": "TestUncheckedCreateWithoutDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50739 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreatewithoutformulasinput": "TestUncheckedCreateWithoutFormulasInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50864 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreatewithoutinterpretationrulesinput": "TestUncheckedCreateWithoutInterpretationRulesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L51258 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreatewithoutparametersinput": "TestUncheckedCreateWithoutParametersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49647 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreatewithoutregistrationsinput": "TestUncheckedCreateWithoutRegistrationsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49003 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedcreatewithoutworkspaceinput": "TestUncheckedCreateWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45357 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdateinput": "TestUncheckedUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L38389 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatemanyinput": "TestUncheckedUpdateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L38462 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatemanywithoutdepartmentinput": "TestUncheckedUpdateManyWithoutDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54239 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatemanywithoutdepartmentnestedinput": "TestUncheckedUpdateManyWithoutDepartmentNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44701 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatemanywithoutworkspaceinput": "TestUncheckedUpdateManyWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L52289 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatemanywithoutworkspacenestedinput": "TestUncheckedUpdateManyWithoutWorkspaceNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43077 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatewithoutdepartmentinput": "TestUncheckedUpdateWithoutDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54212 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatewithoutformulasinput": "TestUncheckedUpdateWithoutFormulasInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L51069 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatewithoutinterpretationrulesinput": "TestUncheckedUpdateWithoutInterpretationRulesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L51463 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatewithoutparametersinput": "TestUncheckedUpdateWithoutParametersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49874 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatewithoutregistrationsinput": "TestUncheckedUpdateWithoutRegistrationsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49172 | neighbors=[index.d.ts]
- "generated_client_index_d_testuncheckedupdatewithoutworkspaceinput": "TestUncheckedUpdateWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L52262 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdateargs": "TestUpdateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16851 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdateinput": "TestUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L38362 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdatemanyargs": "TestUpdateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16873 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdatemanymutationinput": "TestUpdateManyMutationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L38441 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdatemanywithoutdepartmentnestedinput": "TestUpdateManyWithoutDepartmentNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44687 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdatemanywithoutworkspacenestedinput": "TestUpdateManyWithoutWorkspaceNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42941 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdatemanywithwherewithoutdepartmentinput": "TestUpdateManyWithWhereWithoutDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50787 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdatemanywithwherewithoutworkspaceinput": "TestUpdateManyWithWhereWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45877 | neighbors=[index.d.ts]
- "generated_client_index_d_testupdateonerequiredwithoutformulasnestedinput": "TestUpdateOneRequiredWithoutFormulasNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44743 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-107.json

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
