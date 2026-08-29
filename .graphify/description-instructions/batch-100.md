# Node Description Batch 101 of 150

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

- "generated_client_index_d_testcountoutputtypedefaultargs": "TestCountOutputTypeDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3507 | neighbors=[index.d.ts]
- "generated_client_index_d_testcountoutputtypeselect": "TestCountOutputTypeSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3496 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreateargs": "TestCreateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16822 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreateinput": "TestCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L38307 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatemanyargs": "TestCreateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16840 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatemanydepartmentinput": "TestCreateManyDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54163 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatemanydepartmentinputenvelope": "TestCreateManyDepartmentInputEnvelope" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50771 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatemanyinput": "TestCreateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L38417 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatemanyworkspaceinput": "TestCreateManyWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L51847 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatemanyworkspaceinputenvelope": "TestCreateManyWorkspaceInputEnvelope" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45389 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatenestedmanywithoutdepartmentinput": "TestCreateNestedManyWithoutDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44673 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatenestedmanywithoutworkspaceinput": "TestCreateNestedManyWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42758 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatenestedonewithoutformulasinput": "TestCreateNestedOneWithoutFormulasInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44721 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatenestedonewithoutinterpretationrulesinput": "TestCreateNestedOneWithoutInterpretationRulesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44765 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatenestedonewithoutparametersinput": "TestCreateNestedOneWithoutParametersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44518 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatenestedonewithoutregistrationsinput": "TestCreateNestedOneWithoutRegistrationsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44327 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreateorconnectwithoutdepartmentinput": "TestCreateOrConnectWithoutDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50766 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreateorconnectwithoutformulasinput": "TestCreateOrConnectWithoutFormulasInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50891 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreateorconnectwithoutinterpretationrulesinput": "TestCreateOrConnectWithoutInterpretationRulesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L51285 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreateorconnectwithoutparametersinput": "TestCreateOrConnectWithoutParametersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49674 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreateorconnectwithoutregistrationsinput": "TestCreateOrConnectWithoutRegistrationsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49030 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreateorconnectwithoutworkspaceinput": "TestCreateOrConnectWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45384 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatewithoutdepartmentinput": "TestCreateWithoutDepartmentInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50713 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatewithoutformulasinput": "TestCreateWithoutFormulasInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50838 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatewithoutinterpretationrulesinput": "TestCreateWithoutInterpretationRulesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L51232 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatewithoutparametersinput": "TestCreateWithoutParametersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49621 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatewithoutregistrationsinput": "TestCreateWithoutRegistrationsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L48977 | neighbors=[index.d.ts]
- "generated_client_index_d_testcreatewithoutworkspaceinput": "TestCreateWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45331 | neighbors=[index.d.ts]
- "generated_client_index_d_testdefaultargs": "TestDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L17051 | neighbors=[index.d.ts]
- "generated_client_index_d_testdelegate": "TestDelegate" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16255 | neighbors=[index.d.ts]
- "generated_client_index_d_testdeleteargs": "TestDeleteArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16913 | neighbors=[index.d.ts]
- "generated_client_index_d_testdeletemanyargs": "TestDeleteManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16931 | neighbors=[index.d.ts]
- "generated_client_index_d_testdepartment": "TestDepartment" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L140 | neighbors=[index.d.ts]
- "generated_client_index_d_testdepartment_testsargs": "TestDepartment$testsArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L29675 | neighbors=[index.d.ts]
- "generated_client_index_d_testdepartmentaggregateargs": "TestDepartmentAggregateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L28856 | neighbors=[index.d.ts]
- "generated_client_index_d_testdepartmentargs": "TestDepartmentArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54414 | neighbors=[index.d.ts]
- "generated_client_index_d_testdepartmentavgaggregateinputtype": "TestDepartmentAvgAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L28826 | neighbors=[index.d.ts]
- "generated_client_index_d_testdepartmentavgaggregateoutputtype": "TestDepartmentAvgAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L28795 | neighbors=[index.d.ts]
- "generated_client_index_d_testdepartmentavgorderbyaggregateinput": "TestDepartmentAvgOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42425 | neighbors=[index.d.ts]
- "generated_client_index_d_testdepartmentcountaggregateinputtype": "TestDepartmentCountAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L28848 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-100.json

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
