# Node Description Batch 121 of 148

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

- "generated_client_index_d_workspacepdffinduniqueargs": "WorkspacePdfFindUniqueArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33571 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdffinduniqueorthrowargs": "WorkspacePdfFindUniqueOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33589 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfgetpayload": "WorkspacePdfGetPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33165 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfgroupbyargs": "WorkspacePdfGroupByArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32975 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfgroupbyoutputtype": "WorkspacePdfGroupByOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32989 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfinclude": "WorkspacePdfInclude" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33118 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfmaxaggregateinputtype": "WorkspacePdfMaxAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32830 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfmaxaggregateoutputtype": "WorkspacePdfMaxAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32692 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfmaxorderbyaggregateinput": "WorkspacePdfMaxOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42651 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfminaggregateinputtype": "WorkspacePdfMinAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32794 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfminaggregateoutputtype": "WorkspacePdfMinAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32656 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfminorderbyaggregateinput": "WorkspacePdfMinOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42687 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfnullablerelationfilter": "WorkspacePdfNullableRelationFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40473 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdforderbywithaggregationinput": "WorkspacePdfOrderByWithAggregationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37211 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdforderbywithrelationinput": "WorkspacePdfOrderByWithRelationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37134 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfpayload": "$WorkspacePdfPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33122 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfscalarfieldenum": "WorkspacePdfScalarFieldEnum" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34411 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfscalarwherewithaggregatesinput": "WorkspacePdfScalarWhereWithAggregatesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37252 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfselect": "WorkspacePdfSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33044 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfselectscalar": "WorkspacePdfSelectScalar" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33082 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfsumaggregateinputtype": "WorkspacePdfSumAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32780 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfsumaggregateoutputtype": "WorkspacePdfSumAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32642 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfsumorderbyaggregateinput": "WorkspacePdfSumOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42723 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfuncheckedcreateinput": "WorkspacePdfUncheckedCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40154 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfuncheckedcreatenestedonewithoutworkspaceinput": "WorkspacePdfUncheckedCreateNestedOneWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42869 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfuncheckedcreatewithoutworkspaceinput": "WorkspacePdfUncheckedCreateWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45683 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfuncheckedupdateinput": "WorkspacePdfUncheckedUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40225 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfuncheckedupdatemanyinput": "WorkspacePdfUncheckedUpdateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40331 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfuncheckedupdateonewithoutworkspacenestedinput": "WorkspacePdfUncheckedUpdateOneWithoutWorkspaceNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43161 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfuncheckedupdatewithoutworkspaceinput": "WorkspacePdfUncheckedUpdateWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46154 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupdateargs": "WorkspacePdfUpdateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33775 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupdateinput": "WorkspacePdfUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40190 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupdatemanyargs": "WorkspacePdfUpdateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33797 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupdatemanymutationinput": "WorkspacePdfUpdateManyMutationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40297 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupdateonewithoutworkspacenestedinput": "WorkspacePdfUpdateOneWithoutWorkspaceNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43025 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupdatetoonewithwherewithoutworkspaceinput": "WorkspacePdfUpdateToOneWithWhereWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46115 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupdatewithoutworkspaceinput": "WorkspacePdfUpdateWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46120 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupsertargs": "WorkspacePdfUpsertArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33811 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfupsertwithoutworkspaceinput": "WorkspacePdfUpsertWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46109 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfwhereinput": "WorkspacePdfWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37094 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-120.json

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
