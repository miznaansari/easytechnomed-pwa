# Node Description Batch 53 of 150

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

- "generated_client_index_browser_prisma": "Prisma" | kind=code-symbol | source=scratch/generated-client/index-browser.js:L14 | neighbors=[index-browser.js]
- "generated_client_index_browser_prismaclient_constructor": ".constructor()" | kind=code-symbol | source=scratch/generated-client/index-browser.js:L608 | neighbors=[PrismaClient]
- "generated_client_index_config": "config" | kind=code-symbol | source=scratch/generated-client/index.js:L575 | neighbors=[index.js]
- "generated_client_index_d_admin": "Admin" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L55 | neighbors=[index.d.ts]
- "generated_client_index_d_admin_addressargs": "Admin$addressArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L11831 | neighbors=[index.d.ts]
- "generated_client_index_d_admin_registrationsargs": "Admin$registrationsArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L11886 | neighbors=[index.d.ts]
- "generated_client_index_d_admin_sessionsargs": "Admin$sessionsArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L11846 | neighbors=[index.d.ts]
- "generated_client_index_d_admin_trackingsargs": "Admin$trackingsArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L11866 | neighbors=[index.d.ts]
- "generated_client_index_d_admin_workspaceargs": "Admin$workspaceArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L11816 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddress": "AdminAddress" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L115 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressaggregateargs": "AdminAddressAggregateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24090 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressargs": "AdminAddressArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54394 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressavgaggregateinputtype": "AdminAddressAvgAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24030 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressavgaggregateoutputtype": "AdminAddressAvgAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23969 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressavgorderbyaggregateinput": "AdminAddressAvgOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42184 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscountaggregateinputtype": "AdminAddressCountAggregateInputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24074 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscountaggregateoutputtype": "AdminAddressCountAggregateOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24013 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscountargs": "AdminAddressCountArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24270 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscountorderbyaggregateinput": "AdminAddressCountOrderByAggregateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L42169 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscreateargs": "AdminAddressCreateArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24828 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscreateinput": "AdminAddressCreateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L39446 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscreatemanyargs": "AdminAddressCreateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24846 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscreatemanyinput": "AdminAddressCreateManyInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L39504 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscreatenestedonewithoutadmininput": "AdminAddressCreateNestedOneWithoutAdminInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L43477 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscreateorconnectwithoutadmininput": "AdminAddressCreateOrConnectWithoutAdminInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46887 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddresscreatewithoutadmininput": "AdminAddressCreateWithoutAdminInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L46860 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressdefaultargs": "AdminAddressDefaultArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24947 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressdelegate": "AdminAddressDelegate" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24275 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressdeleteargs": "AdminAddressDeleteArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24919 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressdeletemanyargs": "AdminAddressDeleteManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24937 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressfieldrefs": "AdminAddressFieldRefs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24633 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressfindfirstargs": "AdminAddressFindFirstArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24689 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressfindfirstorthrowargs": "AdminAddressFindFirstOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24737 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressfindmanyargs": "AdminAddressFindManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24785 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressfinduniqueargs": "AdminAddressFindUniqueArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24653 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressfinduniqueorthrowargs": "AdminAddressFindUniqueOrThrowArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24671 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressgetpayload": "AdminAddressGetPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24268 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressgroupbyargs": "AdminAddressGroupByArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24162 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressgroupbyoutputtype": "AdminAddressGroupByOutputType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24176 | neighbors=[index.d.ts]
- "generated_client_index_d_adminaddressinclude": "AdminAddressInclude" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24242 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-052.json

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
