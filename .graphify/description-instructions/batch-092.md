# Node Description Batch 93 of 148

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

- "generated_client_index_d_stringfilter": "StringFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40378 | neighbors=[index.d.ts]
- "generated_client_index_d_stringnullablefilter": "StringNullableFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40689 | neighbors=[index.d.ts]
- "generated_client_index_d_stringnullablewithaggregatesfilter": "StringNullableWithAggregatesFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40748 | neighbors=[index.d.ts]
- "generated_client_index_d_stringwithaggregatesfilter": "StringWithAggregatesFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40581 | neighbors=[index.d.ts]
- "generated_client_index_d_subset": "Subset" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L762 | neighbors=[index.d.ts]
- "generated_client_index_d_subsetintersection": "SubsetIntersection" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L784 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmin": "SuperAdmin" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L25 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmin_sessionsargs": "SuperAdmin$sessionsArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5819 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmin_trackingsargs": "SuperAdmin$trackingsArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5839 | neighbors=[index.d.ts]
- "generated_client_index_d_superadminaggregateargs": "SuperAdminAggregateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L4986 | neighbors=[index.d.ts]
- "generated_client_index_d_superadminargs": "SuperAdminArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54322 | neighbors=[index.d.ts]
- "generated_client_index_d_superadminavgaggregateinputtype": "SuperAdminAvgAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L4950 | neighbors=[index.d.ts]
- "generated_client_index_d_superadminavgaggregateoutputtype": "SuperAdminAvgAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L4913 | neighbors=[index.d.ts]
- "generated_client_index_d_superadminavgorderbyaggregateinput": "SuperAdminAvgOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40663 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountaggregateinputtype": "SuperAdminCountAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L4976 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountaggregateoutputtype": "SuperAdminCountAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L4939 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountargs": "SuperAdminCountArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5147 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountorderbyaggregateinput": "SuperAdminCountOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40654 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountoutputtype": "SuperAdminCountOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3240 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountoutputtypeargs": "SuperAdminCountOutputTypeArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54274 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountoutputtypecountsessionsargs": "SuperAdminCountOutputTypeCountSessionsArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3264 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountoutputtypecounttrackingsargs": "SuperAdminCountOutputTypeCountTrackingsArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3271 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountoutputtypedefaultargs": "SuperAdminCountOutputTypeDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3254 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincountoutputtypeselect": "SuperAdminCountOutputTypeSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3245 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreateargs": "SuperAdminCreateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5700 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreateinput": "SuperAdminCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37412 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreatemanyargs": "SuperAdminCreateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5718 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreatemanyinput": "SuperAdminCreateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L37454 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreatenestedonewithoutsessionsinput": "SuperAdminCreateNestedOneWithoutSessionsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43255 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreatenestedonewithouttrackingsinput": "SuperAdminCreateNestedOneWithoutTrackingsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44657 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreateorconnectwithoutsessionsinput": "SuperAdminCreateOrConnectWithoutSessionsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46326 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreateorconnectwithouttrackingsinput": "SuperAdminCreateOrConnectWithoutTrackingsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50678 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreatewithoutsessionsinput": "SuperAdminCreateWithoutSessionsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46307 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmincreatewithouttrackingsinput": "SuperAdminCreateWithoutTrackingsInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L50659 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmindefaultargs": "SuperAdminDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5859 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmindelegate": "SuperAdminDelegate" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5152 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmindeleteargs": "SuperAdminDeleteArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5791 | neighbors=[index.d.ts]
- "generated_client_index_d_superadmindeletemanyargs": "SuperAdminDeleteManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5809 | neighbors=[index.d.ts]
- "generated_client_index_d_superadminfieldrefs": "SuperAdminFieldRefs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5511 | neighbors=[index.d.ts]
- "generated_client_index_d_superadminfindfirstargs": "SuperAdminFindFirstArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5561 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-092.json

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
