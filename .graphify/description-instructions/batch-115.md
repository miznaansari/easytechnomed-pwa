# Node Description Batch 116 of 150

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

- "generated_client_index_d_userrolepermissionupsertargs": "UserRolePermissionUpsertArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L10602 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionupsertwithwhereuniquewithoutroleinput": "UserRolePermissionUpsertWithWhereUniqueWithoutRoleInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46731 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionwhereinput": "UserRolePermissionWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34951 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolepermissionwhereuniqueinput": "UserRolePermissionWhereUniqueInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34968 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolerelationfilter": "UserRoleRelationFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40776 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolescalarfieldenum": "UserRoleScalarFieldEnum" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33972 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolescalarwherewithaggregatesinput": "UserRoleScalarWhereWithAggregatesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34943 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleselect": "UserRoleSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9018 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleselectscalar": "UserRoleSelectScalar" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9027 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolesumaggregateinputtype": "UserRoleSumAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8888 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolesumaggregateoutputtype": "UserRoleSumAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8863 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolesumorderbyaggregateinput": "UserRoleSumOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40958 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleuncheckedcreateinput": "UserRoleUncheckedCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37757 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleuncheckedcreatewithoutpermissionsinput": "UserRoleUncheckedCreateWithoutPermissionsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46761 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleuncheckedcreatewithoutusersinput": "UserRoleUncheckedCreateWithoutUsersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46366 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleuncheckedupdateinput": "UserRoleUncheckedUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37770 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleuncheckedupdatemanyinput": "UserRoleUncheckedUpdateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37786 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleuncheckedupdatewithoutpermissionsinput": "UserRoleUncheckedUpdateWithoutPermissionsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46788 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleuncheckedupdatewithoutusersinput": "UserRoleUncheckedUpdateWithoutUsersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46466 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdateargs": "UserRoleUpdateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9631 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdateinput": "UserRoleUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37764 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdatemanyargs": "UserRoleUpdateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9653 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdatemanymutationinput": "UserRoleUpdateManyMutationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37782 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdateonerequiredwithoutpermissionsnestedinput": "UserRoleUpdateOneRequiredWithoutPermissionsNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43457 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdateonerequiredwithoutusersnestedinput": "UserRoleUpdateOneRequiredWithoutUsersNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43299 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdatetoonewithwherewithoutpermissionsinput": "UserRoleUpdateToOneWithWhereWithoutPermissionsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46778 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdatetoonewithwherewithoutusersinput": "UserRoleUpdateToOneWithWhereWithoutUsersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46456 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdatewithoutpermissionsinput": "UserRoleUpdateWithoutPermissionsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46783 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupdatewithoutusersinput": "UserRoleUpdateWithoutUsersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46461 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupsertargs": "UserRoleUpsertArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9667 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupsertwithoutpermissionsinput": "UserRoleUpsertWithoutPermissionsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46772 | neighbors=[index.d.ts]
- "generated_client_index_d_userroleupsertwithoutusersinput": "UserRoleUpsertWithoutUsersInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46450 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolewhereinput": "UserRoleWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34906 | neighbors=[index.d.ts]
- "generated_client_index_d_userrolewhereuniqueinput": "UserRoleWhereUniqueInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34923 | neighbors=[index.d.ts]
- "generated_client_index_d_userscalarfieldenum": "UserScalarFieldEnum" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33951 | neighbors=[index.d.ts]
- "generated_client_index_d_userscalarwhereinput": "UserScalarWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45925 | neighbors=[index.d.ts]
- "generated_client_index_d_userscalarwherewithaggregatesinput": "UserScalarWhereWithAggregatesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34816 | neighbors=[index.d.ts]
- "generated_client_index_d_userselect": "UserSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7094 | neighbors=[index.d.ts]
- "generated_client_index_d_userselectscalar": "UserSelectScalar" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7119 | neighbors=[index.d.ts]
- "generated_client_index_d_usersession": "UserSession" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-115.json

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
