# Node Description Batch 138 of 150

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

- "runtime_library_d_middlewareargsmapper": "MiddlewareArgsMapper" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2123 | neighbors=[_d()]
- "runtime_library_d_middlewarehandler": "MiddlewareHandler" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2128 | neighbors=[_d()]
- "runtime_library_d_model": "Model" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L689 | neighbors=[_d()]
- "runtime_library_d_modelaction": "ModelAction" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L851 | neighbors=[_d()]
- "runtime_library_d_modelarg": "ModelArg" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2136 | neighbors=[_d()]
- "runtime_library_d_modelargs": "ModelArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2140 | neighbors=[_d()]
- "runtime_library_d_modelkey": "ModelKey" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2146 | neighbors=[_d()]
- "runtime_library_d_modelmapping": "ModelMapping" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L829 | neighbors=[_d()]
- "runtime_library_d_modelqueryoptionscb": "ModelQueryOptionsCb" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2148 | neighbors=[_d()]
- "runtime_library_d_modelqueryoptionscbargs": "ModelQueryOptionsCbArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2150 | neighbors=[_d()]
- "runtime_library_d_modulo": "Modulo" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L331 | neighbors=[_d()]
- "runtime_library_d_nameargs": "NameArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2157 | neighbors=[_d()]
- "runtime_library_d_narrow": "Narrow" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2161 | neighbors=[_d()]
- "runtime_library_d_narrowable": "Narrowable" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2165 | neighbors=[_d()]
- "runtime_library_d_nevertounknown": "NeverToUnknown" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2167 | neighbors=[_d()]
- "runtime_library_d_nodeheaders": "NodeHeaders" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2179 | neighbors=[_d()]
- "runtime_library_d_objectenumvalue": "ObjectEnumValue" | kind=code-symbol | neighbors=[NullTypesEnumValue]
- "runtime_library_d_omission": "Omission" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2234 | neighbors=[_d()]
- "runtime_library_d_omit_2": "Omit_2" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2236 | neighbors=[_d()]
- "runtime_library_d_omitvalue": "OmitValue" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2241 | neighbors=[_d()]
- "runtime_library_d_operation": "Operation" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2243 | neighbors=[_d()]
- "runtime_library_d_operationpayload": "OperationPayload" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2245 | neighbors=[_d()]
- "runtime_library_d_optional": "Optional" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2258 | neighbors=[_d()]
- "runtime_library_d_optionalflat": "OptionalFlat" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2264 | neighbors=[_d()]
- "runtime_library_d_optionalkeys": "OptionalKeys" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2268 | neighbors=[_d()]
- "runtime_library_d_options": "Options" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2272 | neighbors=[_d()]
- "runtime_library_d_options_2": "Options_2" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2278 | neighbors=[_d()]
- "runtime_library_d_or": "Or" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2282 | neighbors=[_d()]
- "runtime_library_d_otheroperationmappings": "OtherOperationMappings" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L657 | neighbors=[_d()]
- "runtime_library_d_outputtype": "OutputType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L793 | neighbors=[_d()]
- "runtime_library_d_outputtyperef": "OutputTypeRef" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L805 | neighbors=[_d()]
- "runtime_library_d_patchflat": "PatchFlat" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2293 | neighbors=[_d()]
- "runtime_library_d_path": "Path" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2295 | neighbors=[_d()]
- "runtime_library_d_payload": "Payload" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2297 | neighbors=[_d()]
- "runtime_library_d_payloadtoresult": "PayloadToResult" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2305 | neighbors=[_d()]
- "runtime_library_d_pick_2": "Pick_2" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2309 | neighbors=[_d()]
- "runtime_library_d_primarykey": "PrimaryKey" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L685 | neighbors=[_d()]
- "runtime_library_d_prismaclientinitializationerror": "PrismaClientInitializationError" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2314 | neighbors=[_d()]
- "runtime_library_d_prismaclientoptions": "PrismaClientOptions" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2331 | neighbors=[_d()]
- "runtime_library_d_prismaclientrustpanicerror": "PrismaClientRustPanicError" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2388 | neighbors=[_d()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-137.json

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
