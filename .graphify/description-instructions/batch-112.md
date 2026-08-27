# Node Description Batch 113 of 148

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

- "generated_client_index_d_userrolepermissioncreatemanyroleinput": "UserRolePermissionCreateManyRoleInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L52749 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissioncreatemanyroleinputenvelope": "UserRolePermissionCreateManyRoleInputEnvelope" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46710 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissioncreatenestedmanywithoutroleinput": "UserRolePermissionCreateNestedManyWithoutRoleInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43374 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissioncreateorconnectwithoutroleinput": "UserRolePermissionCreateOrConnectWithoutRoleInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46705 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissioncreatewithoutroleinput": "UserRolePermissionCreateWithoutRoleInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46696 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissiondefaultargs": "UserRolePermissionDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10656 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissiondelegate": "UserRolePermissionDelegate" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9993 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissiondeleteargs": "UserRolePermissionDeleteArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10628 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissiondeletemanyargs": "UserRolePermissionDeleteManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10646 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionfieldrefs": "UserRolePermissionFieldRefs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10351 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionfindfirstargs": "UserRolePermissionFindFirstArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10398 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionfindfirstorthrowargs": "UserRolePermissionFindFirstOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10446 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionfindmanyargs": "UserRolePermissionFindManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10494 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionfinduniqueargs": "UserRolePermissionFindUniqueArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10362 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionfinduniqueorthrowargs": "UserRolePermissionFindUniqueOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10380 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissiongetpayload": "UserRolePermissionGetPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9986 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissiongroupbyargs": "UserRolePermissionGroupByArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9916 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissiongroupbyoutputtype": "UserRolePermissionGroupByOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9930 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissioninclude": "UserRolePermissionInclude" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9969 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionlistrelationfilter": "UserRolePermissionListRelationFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40929 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionmaxaggregateinputtype": "UserRolePermissionMaxAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9831 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionmaxaggregateoutputtype": "UserRolePermissionMaxAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9801 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionmaxorderbyaggregateinput": "UserRolePermissionMaxOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40978 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionminaggregateinputtype": "UserRolePermissionMinAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9825 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionminaggregateoutputtype": "UserRolePermissionMinAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9795 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionminorderbyaggregateinput": "UserRolePermissionMinOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40984 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionorderbyrelationaggregateinput": "UserRolePermissionOrderByRelationAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40935 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionorderbywithaggregationinput": "UserRolePermissionOrderByWithAggregationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34979 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionorderbywithrelationinput": "UserRolePermissionOrderByWithRelationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34961 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionpayload": "$UserRolePermissionPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9973 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionroleidpermissioncompounduniqueinput": "UserRolePermissionRoleIdPermissionCompoundUniqueInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40962 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionscalarfieldenum": "UserRolePermissionScalarFieldEnum" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33981 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionscalarwhereinput": "UserRolePermissionScalarWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46747 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionscalarwherewithaggregatesinput": "UserRolePermissionScalarWhereWithAggregatesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34990 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionselect": "UserRolePermissionSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9955 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionselectscalar": "UserRolePermissionSelectScalar" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9963 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionsumaggregateinputtype": "UserRolePermissionSumAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9820 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionsumaggregateoutputtype": "UserRolePermissionSumAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9790 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionsumorderbyaggregateinput": "UserRolePermissionSumOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40990 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionuncheckedcreateinput": "UserRolePermissionUncheckedCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37796 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-112.json

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
