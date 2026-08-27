# Node Description Batch 120 of 148

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

- "generated_client_index_d_workspacefinduniqueorthrowargs": "WorkspaceFindUniqueOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L4418 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacegetpayload": "WorkspaceGetPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L4009 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacegroupbyargs": "WorkspaceGroupByArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3886 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacegroupbyoutputtype": "WorkspaceGroupByOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3900 | neighbors=[index.d.ts]
- "generated_client_index_d_workspaceinclude": "WorkspaceInclude" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3967 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacemaxaggregateinputtype": "WorkspaceMaxAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3789 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacemaxaggregateoutputtype": "WorkspaceMaxAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3741 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacemaxorderbyaggregateinput": "WorkspaceMaxOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40536 | neighbors=[index.d.ts]
- "generated_client_index_d_workspaceminaggregateinputtype": "WorkspaceMinAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3777 | neighbors=[index.d.ts]
- "generated_client_index_d_workspaceminaggregateoutputtype": "WorkspaceMinAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3729 | neighbors=[index.d.ts]
- "generated_client_index_d_workspaceminorderbyaggregateinput": "WorkspaceMinOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40548 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacenullablerelationfilter": "WorkspaceNullableRelationFilter" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40781 | neighbors=[index.d.ts]
- "generated_client_index_d_workspaceorderbywithaggregationinput": "WorkspaceOrderByWithAggregationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34552 | neighbors=[index.d.ts]
- "generated_client_index_d_workspaceorderbywithrelationinput": "WorkspaceOrderByWithRelationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L34505 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepayload": "$WorkspacePayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3981 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdf": "WorkspacePdf" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L160 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfaggregateargs": "WorkspacePdfAggregateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32903 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfargs": "WorkspacePdfArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54430 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfavgaggregateinputtype": "WorkspacePdfAvgAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32766 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfavgaggregateoutputtype": "WorkspacePdfAvgAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32628 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfavgorderbyaggregateinput": "WorkspacePdfAvgOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42637 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcountaggregateinputtype": "WorkspacePdfCountAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32866 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcountaggregateoutputtype": "WorkspacePdfCountAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32728 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcountargs": "WorkspacePdfCountArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33167 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcountorderbyaggregateinput": "WorkspacePdfCountOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42601 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcreateargs": "WorkspacePdfCreateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33746 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcreateinput": "WorkspacePdfCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40119 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcreatemanyargs": "WorkspacePdfCreateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33764 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcreatemanyinput": "WorkspacePdfCreateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40261 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcreatenestedonewithoutworkspaceinput": "WorkspacePdfCreateNestedOneWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42800 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcreateorconnectwithoutworkspaceinput": "WorkspacePdfCreateOrConnectWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45718 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfcreatewithoutworkspaceinput": "WorkspacePdfCreateWithoutWorkspaceInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L45649 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfdefaultargs": "WorkspacePdfDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33865 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfdelegate": "WorkspacePdfDelegate" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33172 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfdeleteargs": "WorkspacePdfDeleteArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33837 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdfdeletemanyargs": "WorkspacePdfDeleteManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33855 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdffieldrefs": "WorkspacePdfFieldRefs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33530 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdffindfirstargs": "WorkspacePdfFindFirstArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33607 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdffindfirstorthrowargs": "WorkspacePdfFindFirstOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33655 | neighbors=[index.d.ts]
- "generated_client_index_d_workspacepdffindmanyargs": "WorkspacePdfFindManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33703 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-119.json

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
