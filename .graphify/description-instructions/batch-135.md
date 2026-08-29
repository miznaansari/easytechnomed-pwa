# Node Description Batch 136 of 150

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

- "runtime_library_d_fetch": "Fetch" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1351 | neighbors=[_d()]
- "runtime_library_d_field": "Field" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L702 | neighbors=[_d()]
- "runtime_library_d_fielddefault": "FieldDefault" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L726 | neighbors=[_d()]
- "runtime_library_d_fielddefaultscalar": "FieldDefaultScalar" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L730 | neighbors=[_d()]
- "runtime_library_d_fieldkind": "FieldKind" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L699 | neighbors=[_d()]
- "runtime_library_d_fieldlocation": "FieldLocation" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L701 | neighbors=[_d()]
- "runtime_library_d_fieldnamespace": "FieldNamespace" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L700 | neighbors=[_d()]
- "runtime_library_d_fieldref": "FieldRef" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1356 | neighbors=[_d()]
- "runtime_library_d_fieldrefallowtype": "FieldRefAllowType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L828 | neighbors=[_d()]
- "runtime_library_d_fieldreftype": "FieldRefType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L823 | neighbors=[_d()]
- "runtime_library_d_fluentoperation": "FluentOperation" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1363 | neighbors=[_d()]
- "runtime_library_d_fn": "Fn" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1365 | neighbors=[_d()]
- "runtime_library_d_generatorconfig": "GeneratorConfig" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1370 | neighbors=[_d()]
- "runtime_library_d_getaggregateresult": "GetAggregateResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1393 | neighbors=[_d()]
- "runtime_library_d_getbatchresult": "GetBatchResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1401 | neighbors=[_d()]
- "runtime_library_d_getcountresult": "GetCountResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1405 | neighbors=[_d()]
- "runtime_library_d_getfindresult": "GetFindResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1411 | neighbors=[_d()]
- "runtime_library_d_getgroupbyresult": "GetGroupByResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1425 | neighbors=[_d()]
- "runtime_library_d_getomit": "GetOmit" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1435 | neighbors=[_d()]
- "runtime_library_d_getpayloadresult": "GetPayloadResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1439 | neighbors=[_d()]
- "runtime_library_d_getpayloadresultextensionkeys": "GetPayloadResultExtensionKeys" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1441 | neighbors=[_d()]
- "runtime_library_d_getpayloadresultextensionobject": "GetPayloadResultExtensionObject" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1443 | neighbors=[_d()]
- "runtime_library_d_getprismaclientconfig": "GetPrismaClientConfig" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1593 | neighbors=[_d()]
- "runtime_library_d_getresult": "GetResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1666 | neighbors=[_d()]
- "runtime_library_d_getruntimeoutput": "GetRuntimeOutput" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1695 | neighbors=[_d()]
- "runtime_library_d_getselect": "GetSelect" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1701 | neighbors=[_d()]
- "runtime_library_d_globalomitoptions": "GlobalOmitOptions" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1705 | neighbors=[_d()]
- "runtime_library_d_handleerrorparams": "HandleErrorParams" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1711 | neighbors=[_d()]
- "runtime_library_d_hrtime": "HrTime" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1733 | neighbors=[_d()]
- "runtime_library_d_index": "Index" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L731 | neighbors=[_d()]
- "runtime_library_d_indexfield": "IndexField" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L742 | neighbors=[_d()]
- "runtime_library_d_indextype": "IndexType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L741 | neighbors=[_d()]
- "runtime_library_d_inputjsonarray": "InputJsonArray" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1739 | neighbors=[_d()]
- "runtime_library_d_inputjsonobject": "InputJsonObject" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1746 | neighbors=[_d()]
- "runtime_library_d_inputjsonvalue": "InputJsonValue" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1763 | neighbors=[_d()]
- "runtime_library_d_inputtype": "InputType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L811 | neighbors=[_d()]
- "runtime_library_d_inputtyperef": "InputTypeRef" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L784 | neighbors=[_d()]
- "runtime_library_d_instance": "Instance" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L329 | neighbors=[_d()]
- "runtime_library_d_interactivetransactioninfo": "InteractiveTransactionInfo" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1767 | neighbors=[_d()]
- "runtime_library_d_interactivetransactionoptions": "InteractiveTransactionOptions" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1780 | neighbors=[_d()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-135.json

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
