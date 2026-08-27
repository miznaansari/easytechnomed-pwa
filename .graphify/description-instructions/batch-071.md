# Node Description Batch 72 of 148

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

- "generated_client_index_d_getworkspacepdfaggregatetype": "GetWorkspacePdfAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32964 | neighbors=[index.d.ts]
- "generated_client_index_d_getworkspacepdfgroupbypayload": "GetWorkspacePdfGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33030 | neighbors=[index.d.ts]
- "generated_client_index_d_has": "Has" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L937 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrule": "InterpretationRule" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L150 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrule_workspaceargs": "InterpretationRule$workspaceArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31679 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruleaggregateargs": "InterpretationRuleAggregateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L30834 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruleargs": "InterpretationRuleArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54422 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruleavgaggregateinputtype": "InterpretationRuleAvgAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L30786 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruleavgaggregateoutputtype": "InterpretationRuleAvgAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L30737 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruleavgorderbyaggregateinput": "InterpretationRuleAvgOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42522 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecountaggregateinputtype": "InterpretationRuleCountAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L30822 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecountaggregateoutputtype": "InterpretationRuleCountAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L30773 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecountargs": "InterpretationRuleCountArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31004 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecountorderbyaggregateinput": "InterpretationRuleCountOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42511 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreateargs": "InterpretationRuleCreateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31560 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreateinput": "InterpretationRuleCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40003 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatemanyargs": "InterpretationRuleCreateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31578 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatemanyinput": "InterpretationRuleCreateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40045 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatemanyparameterinput": "InterpretationRuleCreateManyParameterInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L53983 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatemanyparameterinputenvelope": "InterpretationRuleCreateManyParameterInputEnvelope" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49357 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatemanytestinput": "InterpretationRuleCreateManyTestInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L53625 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatemanytestinputenvelope": "InterpretationRuleCreateManyTestInputEnvelope" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L48141 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatemanyworkspaceinput": "InterpretationRuleCreateManyWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L51960 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatemanyworkspaceinputenvelope": "InterpretationRuleCreateManyWorkspaceInputEnvelope" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45644 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatenestedmanywithoutparameterinput": "InterpretationRuleCreateNestedManyWithoutParameterInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44369 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatenestedmanywithouttestinput": "InterpretationRuleCreateNestedManyWithoutTestInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43948 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatenestedmanywithoutworkspaceinput": "InterpretationRuleCreateNestedManyWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42793 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreateorconnectwithoutparameterinput": "InterpretationRuleCreateOrConnectWithoutParameterInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49352 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreateorconnectwithouttestinput": "InterpretationRuleCreateOrConnectWithoutTestInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L48136 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreateorconnectwithoutworkspaceinput": "InterpretationRuleCreateOrConnectWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45639 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatewithoutparameterinput": "InterpretationRuleCreateWithoutParameterInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49333 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatewithouttestinput": "InterpretationRuleCreateWithoutTestInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L48117 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulecreatewithoutworkspaceinput": "InterpretationRuleCreateWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45620 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruledefaultargs": "InterpretationRuleDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31694 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruledelegate": "InterpretationRuleDelegate" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31009 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruledeleteargs": "InterpretationRuleDeleteArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31651 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationruledeletemanyargs": "InterpretationRuleDeleteManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31669 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulefieldrefs": "InterpretationRuleFieldRefs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31369 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulefindfirstargs": "InterpretationRuleFindFirstArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31421 | neighbors=[index.d.ts]
- "generated_client_index_d_interpretationrulefindfirstorthrowargs": "InterpretationRuleFindFirstOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31469 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-071.json

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
