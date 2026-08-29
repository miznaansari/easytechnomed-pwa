# Node Description Batch 85 of 150

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

- "generated_client_index_d_patientresultupdateinput": "PatientResultUpdateInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L39349 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatemanyargs": "PatientResultUpdateManyArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23022 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatemanymutationinput": "PatientResultUpdateManyMutationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L39381 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatemanywithoutregistrationnestedinput": "PatientResultUpdateManyWithoutRegistrationNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44197 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatemanywithouttestparameternestedinput": "PatientResultUpdateManyWithoutTestParameterNestedInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L44541 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatemanywithwherewithoutregistrationinput": "PatientResultUpdateManyWithWhereWithoutRegistrationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L48604 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatemanywithwherewithouttestparameterinput": "PatientResultUpdateManyWithWhereWithoutTestParameterInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49742 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatewithoutregistrationinput": "PatientResultUpdateWithoutRegistrationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L53846 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatewithouttestparameterinput": "PatientResultUpdateWithoutTestParameterInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L54134 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatewithwhereuniquewithoutregistrationinput": "PatientResultUpdateWithWhereUniqueWithoutRegistrationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L48599 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupdatewithwhereuniquewithouttestparameterinput": "PatientResultUpdateWithWhereUniqueWithoutTestParameterInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49737 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupsertargs": "PatientResultUpsertArgs" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23036 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupsertwithwhereuniquewithoutregistrationinput": "PatientResultUpsertWithWhereUniqueWithoutRegistrationInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L48593 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultupsertwithwhereuniquewithouttestparameterinput": "PatientResultUpsertWithWhereUniqueWithoutTestParameterInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L49731 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultwhereinput": "PatientResultWhereInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L36301 | neighbors=[index.d.ts]
- "generated_client_index_d_patientresultwhereuniqueinput": "PatientResultWhereUniqueInput" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L36330 | neighbors=[index.d.ts]
- "generated_client_index_d_pickenumerable": "PickEnumerable" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L1001 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_adminaddressclient": "Prisma__AdminAddressClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L24602 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_adminclient": "Prisma__AdminClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L11454 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_adminroleclient": "Prisma__AdminRoleClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L13415 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_adminrolepermissionclient": "Prisma__AdminRolePermissionClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L14352 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_adminsessionclient": "Prisma__AdminSessionClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L12505 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_admintrackingclient": "Prisma__AdminTrackingClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L27434 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_doctorclient": "Prisma__DoctorClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L15362 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_doctorincentiveclient": "Prisma__DoctorIncentiveClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L32267 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_interpretationruleclient": "Prisma__InterpretationRuleClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L31336 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_leadclient": "Prisma__LeadClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L23649 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_leadcontactclient": "Prisma__LeadContactClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L26510 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_parameterclient": "Prisma__ParameterClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L20546 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_patientresultclient": "Prisma__PatientResultClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L22748 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_pick": "Prisma__Pick" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L741 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_registrationclient": "Prisma__RegistrationClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L18052 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_registrationpaymentclient": "Prisma__RegistrationPaymentClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L25560 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_registrationtestclient": "Prisma__RegistrationTestClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L19221 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_superadminclient": "Prisma__SuperAdminClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L5479 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_superadminsessionclient": "Prisma__SuperAdminSessionClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L6458 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_superadmintrackingclient": "Prisma__SuperAdminTrackingClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L28414 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_testclient": "Prisma__TestClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L16582 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_testdepartmentclient": "Prisma__TestDepartmentClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L29338 | neighbors=[index.d.ts]
- "generated_client_index_d_prisma_testformulaclient": "Prisma__TestFormulaClient" | kind=code-symbol | source=scratch/generated-client/index.d.ts:L30352 | neighbors=[index.d.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-084.json

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
