# Node Description Batch 116 of 148

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

- "generated_client_index_d_usersessionfinduniqueorthrowargs": "UserSessionFindUniqueOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8559 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessiongetpayload": "UserSessionGetPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8161 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessiongroupbyargs": "UserSessionGroupByArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8075 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessiongroupbyoutputtype": "UserSessionGroupByOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8089 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessioninclude": "UserSessionInclude" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8140 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionlistrelationfilter": "UserSessionListRelationFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40786 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionmaxaggregateinputtype": "UserSessionMaxAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7982 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionmaxaggregateoutputtype": "UserSessionMaxAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7940 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionmaxorderbyaggregateinput": "UserSessionMaxOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40904 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionminaggregateinputtype": "UserSessionMinAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7972 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionminaggregateoutputtype": "UserSessionMinAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7930 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionminorderbyaggregateinput": "UserSessionMinOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40914 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionorderbyrelationaggregateinput": "UserSessionOrderByRelationAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40792 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionorderbywithaggregationinput": "UserSessionOrderByWithAggregationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34878 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionorderbywithrelationinput": "UserSessionOrderByWithRelationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34853 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionpayload": "$UserSessionPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8144 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionscalarfieldenum": "UserSessionScalarFieldEnum" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33964 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionscalarwhereinput": "UserSessionScalarWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46540 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionscalarwherewithaggregatesinput": "UserSessionScalarWhereWithAggregatesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34893 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionselect": "UserSessionSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8118 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionselectscalar": "UserSessionSelectScalar" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8130 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionsumaggregateinputtype": "UserSessionSumAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7967 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionsumaggregateoutputtype": "UserSessionSumAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7925 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionsumorderbyaggregateinput": "UserSessionSumOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40924 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionuncheckedcreateinput": "UserSessionUncheckedCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37694 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionuncheckedcreatenestedmanywithoutuserinput": "UserSessionUncheckedCreateNestedManyWithoutUserInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43292 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionuncheckedcreatewithoutuserinput": "UserSessionUncheckedCreateWithoutUserInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46431 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionuncheckedupdateinput": "UserSessionUncheckedUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37713 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionuncheckedupdatemanyinput": "UserSessionUncheckedUpdateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37741 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionuncheckedupdatemanywithoutuserinput": "UserSessionUncheckedUpdateManyWithoutUserInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L52721 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionuncheckedupdatemanywithoutusernestedinput": "UserSessionUncheckedUpdateManyWithoutUserNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43339 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionuncheckedupdatewithoutuserinput": "UserSessionUncheckedUpdateWithoutUserInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L52712 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionupdateargs": "UserSessionUpdateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8745 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionupdateinput": "UserSessionUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37704 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionupdatemanyargs": "UserSessionUpdateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8767 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionupdatemanymutationinput": "UserSessionUpdateManyMutationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37733 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionupdatemanywithoutusernestedinput": "UserSessionUpdateManyWithoutUserNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43317 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionupdatemanywithwherewithoutuserinput": "UserSessionUpdateManyWithWhereWithoutUserInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46535 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionupdatewithoutuserinput": "UserSessionUpdateWithoutUserInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L52704 | neighbors=[index.d.ts]
- "generated_client_index_d_usersessionupdatewithwhereuniquewithoutuserinput": "UserSessionUpdateWithWhereUniqueWithoutUserInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46530 | neighbors=[index.d.ts]

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
