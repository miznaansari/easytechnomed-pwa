# Node Description Batch 78 of 150

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

- "generated_client_index_d_leadcontactupsertargs": "LeadContactUpsertArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L26769 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcontactwhereinput": "LeadContactWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L36590 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcontactwhereuniqueinput": "LeadContactWhereUniqueInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L36617 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcountaggregateinputtype": "LeadCountAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23167 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcountaggregateoutputtype": "LeadCountAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23136 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcountargs": "LeadCountArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23317 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcountorderbyaggregateinput": "LeadCountOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42140 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcreateargs": "LeadCreateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23846 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcreateinput": "LeadCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L39400 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcreatemanyargs": "LeadCreateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23860 | neighbors=[index.d.ts]
- "generated_client_index_d_leadcreatemanyinput": "LeadCreateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L39426 | neighbors=[index.d.ts]
- "generated_client_index_d_leaddefaultargs": "LeadDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23949 | neighbors=[index.d.ts]
- "generated_client_index_d_leaddelegate": "LeadDelegate" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23322 | neighbors=[index.d.ts]
- "generated_client_index_d_leaddeleteargs": "LeadDeleteArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23925 | neighbors=[index.d.ts]
- "generated_client_index_d_leaddeletemanyargs": "LeadDeleteManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23939 | neighbors=[index.d.ts]
- "generated_client_index_d_leadfieldrefs": "LeadFieldRefs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23679 | neighbors=[index.d.ts]
- "generated_client_index_d_leadfindfirstargs": "LeadFindFirstArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23719 | neighbors=[index.d.ts]
- "generated_client_index_d_leadfindfirstorthrowargs": "LeadFindFirstOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23763 | neighbors=[index.d.ts]
- "generated_client_index_d_leadfindmanyargs": "LeadFindManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23807 | neighbors=[index.d.ts]
- "generated_client_index_d_leadfinduniqueargs": "LeadFindUniqueArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23691 | neighbors=[index.d.ts]
- "generated_client_index_d_leadfinduniqueorthrowargs": "LeadFindUniqueOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23705 | neighbors=[index.d.ts]
- "generated_client_index_d_leadgetpayload": "LeadGetPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23315 | neighbors=[index.d.ts]
- "generated_client_index_d_leadgroupbyargs": "LeadGroupByArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23247 | neighbors=[index.d.ts]
- "generated_client_index_d_leadgroupbyoutputtype": "LeadGroupByOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23261 | neighbors=[index.d.ts]
- "generated_client_index_d_leadmaxaggregateinputtype": "LeadMaxAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23160 | neighbors=[index.d.ts]
- "generated_client_index_d_leadmaxaggregateoutputtype": "LeadMaxAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23129 | neighbors=[index.d.ts]
- "generated_client_index_d_leadmaxorderbyaggregateinput": "LeadMaxOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42151 | neighbors=[index.d.ts]
- "generated_client_index_d_leadminaggregateinputtype": "LeadMinAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23153 | neighbors=[index.d.ts]
- "generated_client_index_d_leadminaggregateoutputtype": "LeadMinAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23122 | neighbors=[index.d.ts]
- "generated_client_index_d_leadminorderbyaggregateinput": "LeadMinOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42158 | neighbors=[index.d.ts]
- "generated_client_index_d_leadorderbywithaggregationinput": "LeadOrderByWithAggregationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L36404 | neighbors=[index.d.ts]
- "generated_client_index_d_leadorderbywithrelationinput": "LeadOrderByWithRelationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L36387 | neighbors=[index.d.ts]
- "generated_client_index_d_leadpayload": "$LeadPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23303 | neighbors=[index.d.ts]
- "generated_client_index_d_leadscalarfieldenum": "LeadScalarFieldEnum" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34244 | neighbors=[index.d.ts]
- "generated_client_index_d_leadscalarwherewithaggregatesinput": "LeadScalarWhereWithAggregatesInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L36416 | neighbors=[index.d.ts]
- "generated_client_index_d_leadselect": "LeadSelect" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23287 | neighbors=[index.d.ts]
- "generated_client_index_d_leadselectscalar": "LeadSelectScalar" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23295 | neighbors=[index.d.ts]
- "generated_client_index_d_leadsumaggregateinputtype": "LeadSumAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23149 | neighbors=[index.d.ts]
- "generated_client_index_d_leadsumaggregateoutputtype": "LeadSumAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23118 | neighbors=[index.d.ts]
- "generated_client_index_d_leadsumorderbyaggregateinput": "LeadSumOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42165 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-077.json

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
