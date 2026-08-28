# Node Description Batch 72 of 149

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

- "generated_client_index_d_getleadgroupbypayload": "GetLeadGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23273 | neighbors=[index.d.ts]
- "generated_client_index_d_getlogtype": "GetLogType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3054 | neighbors=[index.d.ts]
- "generated_client_index_d_getparameteraggregatetype": "GetParameterAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L19992 | neighbors=[index.d.ts]
- "generated_client_index_d_getparametergroupbypayload": "GetParameterGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L20060 | neighbors=[index.d.ts]
- "generated_client_index_d_getpatientresultaggregatetype": "GetPatientResultAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L22310 | neighbors=[index.d.ts]
- "generated_client_index_d_getpatientresultgroupbypayload": "GetPatientResultGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L22351 | neighbors=[index.d.ts]
- "generated_client_index_d_getregistrationaggregatetype": "GetRegistrationAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L17469 | neighbors=[index.d.ts]
- "generated_client_index_d_getregistrationgroupbypayload": "GetRegistrationGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L17542 | neighbors=[index.d.ts]
- "generated_client_index_d_getregistrationpaymentaggregatetype": "GetRegistrationPaymentAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L25125 | neighbors=[index.d.ts]
- "generated_client_index_d_getregistrationpaymentgroupbypayload": "GetRegistrationPaymentGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L25166 | neighbors=[index.d.ts]
- "generated_client_index_d_getregistrationtestaggregatetype": "GetRegistrationTestAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L18763 | neighbors=[index.d.ts]
- "generated_client_index_d_getregistrationtestgroupbypayload": "GetRegistrationTestGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L18809 | neighbors=[index.d.ts]
- "generated_client_index_d_getscalartype": "GetScalarType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L964 | neighbors=[index.d.ts]
- "generated_client_index_d_getsuperadminaggregatetype": "GetSuperAdminAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5047 | neighbors=[index.d.ts]
- "generated_client_index_d_getsuperadmingroupbypayload": "GetSuperAdminGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5086 | neighbors=[index.d.ts]
- "generated_client_index_d_getsuperadminsessionaggregatetype": "GetSuperAdminSessionAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L6027 | neighbors=[index.d.ts]
- "generated_client_index_d_getsuperadminsessiongroupbypayload": "GetSuperAdminSessionGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L6067 | neighbors=[index.d.ts]
- "generated_client_index_d_getsuperadmintrackingaggregatetype": "GetSuperAdminTrackingAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L27975 | neighbors=[index.d.ts]
- "generated_client_index_d_getsuperadmintrackinggroupbypayload": "GetSuperAdminTrackingGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L28017 | neighbors=[index.d.ts]
- "generated_client_index_d_gettestaggregatetype": "GetTestAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16078 | neighbors=[index.d.ts]
- "generated_client_index_d_gettestdepartmentaggregatetype": "GetTestDepartmentAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L28917 | neighbors=[index.d.ts]
- "generated_client_index_d_gettestdepartmentgroupbypayload": "GetTestDepartmentGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L28954 | neighbors=[index.d.ts]
- "generated_client_index_d_gettestformulaaggregatetype": "GetTestFormulaAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L29899 | neighbors=[index.d.ts]
- "generated_client_index_d_gettestformulagroupbypayload": "GetTestFormulaGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L29943 | neighbors=[index.d.ts]
- "generated_client_index_d_gettestgroupbypayload": "GetTestGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16132 | neighbors=[index.d.ts]
- "generated_client_index_d_gettestparameteraggregatetype": "GetTestParameterAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L21252 | neighbors=[index.d.ts]
- "generated_client_index_d_gettestparametergroupbypayload": "GetTestParameterGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L21304 | neighbors=[index.d.ts]
- "generated_client_index_d_getuseraggregatetype": "GetUserAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7030 | neighbors=[index.d.ts]
- "generated_client_index_d_getusergroupbypayload": "GetUserGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L7080 | neighbors=[index.d.ts]
- "generated_client_index_d_getuserroleaggregatetype": "GetUserRoleAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8969 | neighbors=[index.d.ts]
- "generated_client_index_d_getuserrolegroupbypayload": "GetUserRoleGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9004 | neighbors=[index.d.ts]
- "generated_client_index_d_getuserrolepermissionaggregatetype": "GetUserRolePermissionAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9905 | neighbors=[index.d.ts]
- "generated_client_index_d_getuserrolepermissiongroupbypayload": "GetUserRolePermissionGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L9941 | neighbors=[index.d.ts]
- "generated_client_index_d_getusersessionaggregatetype": "GetUserSessionAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8064 | neighbors=[index.d.ts]
- "generated_client_index_d_getusersessiongroupbypayload": "GetUserSessionGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L8104 | neighbors=[index.d.ts]
- "generated_client_index_d_getworkspaceaggregatetype": "GetWorkspaceAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3875 | neighbors=[index.d.ts]
- "generated_client_index_d_getworkspacegroupbypayload": "GetWorkspaceGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L3917 | neighbors=[index.d.ts]
- "generated_client_index_d_getworkspacepdfaggregatetype": "GetWorkspacePdfAggregateType" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32964 | neighbors=[index.d.ts]
- "generated_client_index_d_getworkspacepdfgroupbypayload": "GetWorkspacePdfGroupByPayload" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L33030 | neighbors=[index.d.ts]
- "generated_client_index_d_has": "Has" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L937 | neighbors=[index.d.ts]

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
