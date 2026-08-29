# Node Description Batch 68 of 150

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

- "generated_client_index_d_doctorfindfirstorthrowargs": "DoctorFindFirstOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L15501 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorfindmanyargs": "DoctorFindManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L15549 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorfinduniqueargs": "DoctorFindUniqueArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L15417 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorfinduniqueorthrowargs": "DoctorFindUniqueOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L15435 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorgetpayload": "DoctorGetPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L15028 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorgroupbyargs": "DoctorGroupByArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L14907 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorgroupbyoutputtype": "DoctorGroupByOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L14921 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentive": "DoctorIncentive" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L155 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentiveaggregateargs": "DoctorIncentiveAggregateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31787 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentiveargs": "DoctorIncentiveArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54426 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentiveavgaggregateinputtype": "DoctorIncentiveAvgAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31753 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentiveavgaggregateoutputtype": "DoctorIncentiveAvgAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31718 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentiveavgorderbyaggregateinput": "DoctorIncentiveAvgOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42570 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecountaggregateinputtype": "DoctorIncentiveCountAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31779 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecountaggregateoutputtype": "DoctorIncentiveCountAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31744 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecountargs": "DoctorIncentiveCountArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31935 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecountorderbyaggregateinput": "DoctorIncentiveCountOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42563 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreateargs": "DoctorIncentiveCreateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32485 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreateinput": "DoctorIncentiveCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40074 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreatemanyargs": "DoctorIncentiveCreateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32503 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreatemanydoctorinput": "DoctorIncentiveCreateManyDoctorInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L53291 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreatemanydoctorinputenvelope": "DoctorIncentiveCreateManyDoctorInputEnvelope" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L47810 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreatemanyinput": "DoctorIncentiveCreateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L40100 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreatenestedmanywithoutdoctorinput": "DoctorIncentiveCreateNestedManyWithoutDoctorInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43785 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreateorconnectwithoutdoctorinput": "DoctorIncentiveCreateOrConnectWithoutDoctorInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L47805 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivecreatewithoutdoctorinput": "DoctorIncentiveCreateWithoutDoctorInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L47794 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivedefaultargs": "DoctorIncentiveDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32604 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivedelegate": "DoctorIncentiveDelegate" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31940 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivedeleteargs": "DoctorIncentiveDeleteArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32576 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivedeletemanyargs": "DoctorIncentiveDeleteManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32594 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivefieldrefs": "DoctorIncentiveFieldRefs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32298 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivefindfirstargs": "DoctorIncentiveFindFirstArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32346 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivefindfirstorthrowargs": "DoctorIncentiveFindFirstOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32394 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivefindmanyargs": "DoctorIncentiveFindManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32442 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivefinduniqueargs": "DoctorIncentiveFindUniqueArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32310 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivefinduniqueorthrowargs": "DoctorIncentiveFindUniqueOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32328 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivegetpayload": "DoctorIncentiveGetPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31933 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivegroupbyargs": "DoctorIncentiveGroupByArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31859 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentivegroupbyoutputtype": "DoctorIncentiveGroupByOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31873 | neighbors=[index.d.ts]
- "generated_client_index_d_doctorincentiveinclude": "DoctorIncentiveInclude" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31915 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-067.json

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
