# Node Description Batch 134 of 150

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
- "runtime_library_d_computedfield": "ComputedField" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L204 | neighbors=[_d()]
- "runtime_library_d_computedfieldsmap": "ComputedFieldsMap" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L210 | neighbors=[_d()]
- "runtime_library_d_config": "Config" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L335 | neighbors=[_d()]
- "runtime_library_d_connectioninfo": "ConnectionInfo" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L214 | neighbors=[_d()]
- "runtime_library_d_connectortype": "ConnectorType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L219 | neighbors=[_d()]
- "runtime_library_d_constructor": "Constructor" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L328 | neighbors=[_d()]
- "runtime_library_d_context": "Context" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L221 | neighbors=[_d()]
- "runtime_library_d_context_2": "Context_2" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L245 | neighbors=[_d()]
- "runtime_library_d_count": "Count" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L265 | neighbors=[_d()]
- "runtime_library_d_customdataproxyfetch": "CustomDataProxyFetch" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L269 | neighbors=[_d()]
- "runtime_library_d_dataloader": "DataLoader" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L271 | neighbors=[_d()]
- "runtime_library_d_dataloaderoptions": "DataLoaderOptions" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L283 | neighbors=[_d()]
- "runtime_library_d_datamodel": "Datamodel" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L675 | neighbors=[_d()]
- "runtime_library_d_datamodelenum": "DatamodelEnum" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L661 | neighbors=[_d()]
- "runtime_library_d_datasource": "Datasource" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L290 | neighbors=[_d()]
- "runtime_library_d_datasources": "Datasources" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L294 | neighbors=[_d()]
- "runtime_library_d_decimal": "Decimal" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L348 | neighbors=[_d()]
- "runtime_library_d_decimaljslike": "DecimalJsLike" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L599 | neighbors=[_d()]
- "runtime_library_d_defaultargs": "DefaultArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L606 | neighbors=[_d()]
- "runtime_library_d_defaultselection": "DefaultSelection" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L608 | neighbors=[_d()]
- "runtime_library_d_deprecation": "Deprecation" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L806 | neighbors=[_d()]
- "runtime_library_d_devtypemapdef": "DevTypeMapDef" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L624 | neighbors=[_d()]
- "runtime_library_d_devtypemapfndef": "DevTypeMapFnDef" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L638 | neighbors=[_d()]
- "runtime_library_d_document": "Document" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L645 | neighbors=[_d()]
- "runtime_library_d_dynamicclientextensionargs": "DynamicClientExtensionArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L887 | neighbors=[_d()]
- "runtime_library_d_dynamicclientextensionthis": "DynamicClientExtensionThis" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L897 | neighbors=[_d()]
- "runtime_library_d_dynamicclientextensionthisbuiltin": "DynamicClientExtensionThisBuiltin" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L911 | neighbors=[_d()]
- "runtime_library_d_dynamicmodelextensionargs": "DynamicModelExtensionArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L928 | neighbors=[_d()]
- "runtime_library_d_dynamicmodelextensionfluentapi": "DynamicModelExtensionFluentApi" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L951 | neighbors=[_d()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-133.json

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
