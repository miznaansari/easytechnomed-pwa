# Node Description Batch 133 of 150

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

- "runtime_library_ba": "Ba()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L31 | neighbors=[library.js]
- "runtime_library_bc": "Bc()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_bo": "bo()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js]
- "runtime_library_c": "_c()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_ca": "ca()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_ce": "Ce()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L29 | neighbors=[library.js]
- "runtime_library_cs": "Cs()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L21 | neighbors=[library.js]
- "runtime_library_cu": "Cu()" | kind=code-symbol | source=scratch/generated-client/runtime/library.js:L3 | neighbors=[library.js]
- "runtime_library_d_accelerateengineconfig": "AccelerateEngineConfig" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L6 | neighbors=[_d()]
- "runtime_library_d_action": "Action" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L24 | neighbors=[_d()]
- "runtime_library_d_activeconnectortype": "ActiveConnectorType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L26 | neighbors=[_d()]
- "runtime_library_d_aggregate": "Aggregate" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L28 | neighbors=[_d()]
- "runtime_library_d_allmodelstostringindex": "AllModelsToStringIndex" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L30 | neighbors=[_d()]
- "runtime_library_d_applyomit": "ApplyOmit" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L41 | neighbors=[_d()]
- "runtime_library_d_args": "Args" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L45 | neighbors=[_d()]
- "runtime_library_d_args_3": "Args_3" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L57 | neighbors=[_d()]
- "runtime_library_d_argtype": "ArgType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L64 | neighbors=[_d()]
- "runtime_library_d_attributes": "Attributes" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L71 | neighbors=[_d()]
- "runtime_library_d_attributevalue": "AttributeValue" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L80 | neighbors=[_d()]
- "runtime_library_d_basedmmf": "BaseDMMF" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L82 | neighbors=[_d()]
- "runtime_library_d_batchargs": "BatchArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L86 | neighbors=[_d()]
- "runtime_library_d_batchinternalparams": "BatchInternalParams" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L93 | neighbors=[_d()]
- "runtime_library_d_batchquery": "BatchQuery" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L98 | neighbors=[_d()]
- "runtime_library_d_batchqueryengineresult": "BatchQueryEngineResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L104 | neighbors=[_d()]
- "runtime_library_d_batchqueryoptionscb": "BatchQueryOptionsCb" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L106 | neighbors=[_d()]
- "runtime_library_d_batchqueryoptionscbargs": "BatchQueryOptionsCbArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L108 | neighbors=[_d()]
- "runtime_library_d_batchtransactionoptions": "BatchTransactionOptions" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L114 | neighbors=[_d()]
- "runtime_library_d_binarytargetsenvvalue": "BinaryTargetsEnvValue" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L118 | neighbors=[_d()]
- "runtime_library_d_call": "Call" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L124 | neighbors=[_d()]
- "runtime_library_d_callsite": "CallSite" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L128 | neighbors=[_d()]
- "runtime_library_d_cast": "Cast" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L132 | neighbors=[_d()]
- "runtime_library_d_client": "Client" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L134 | neighbors=[_d()]
- "runtime_library_d_clientarg": "ClientArg" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L136 | neighbors=[_d()]
- "runtime_library_d_clientargs": "ClientArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L140 | neighbors=[_d()]
- "runtime_library_d_clientbuiltinprop": "ClientBuiltInProp" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L144 | neighbors=[_d()]
- "runtime_library_d_clientoptiondef": "ClientOptionDef" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L146 | neighbors=[_d()]
- "runtime_library_d_clientotherops": "ClientOtherOps" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L150 | neighbors=[_d()]
- "runtime_library_d_columntype": "ColumnType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L159 | neighbors=[_d()]
- "runtime_library_d_compute": "Compute" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L196 | neighbors=[_d()]
- "runtime_library_d_computedeep": "ComputeDeep" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L200 | neighbors=[_d()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-132.json

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
