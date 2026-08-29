# Node Description Batch 137 of 150

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

- "runtime_library_d_internalargs": "InternalArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1782 | neighbors=[_d()]
- "runtime_library_d_internalrequestparams": "InternalRequestParams" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1817 | neighbors=[_d()]
- "runtime_library_d_isolationlevel": "IsolationLevel" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1842 | neighbors=[_d()]
- "runtime_library_d_itxclientdenylist": "ITXClientDenyList" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1854 | neighbors=[_d()]
- "runtime_library_d_job": "Job" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1858 | neighbors=[_d()]
- "runtime_library_d_jsargs": "JsArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1869 | neighbors=[_d()]
- "runtime_library_d_jsinputvalue": "JsInputValue" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1876 | neighbors=[_d()]
- "runtime_library_d_jsonargumentvalue": "JsonArgumentValue" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1880 | neighbors=[_d()]
- "runtime_library_d_jsonarray": "JsonArray" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1888 | neighbors=[_d()]
- "runtime_library_d_jsonbatchquery": "JsonBatchQuery" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1891 | neighbors=[_d()]
- "runtime_library_d_jsonconvertible": "JsonConvertible" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1898 | neighbors=[_d()]
- "runtime_library_d_jsonfieldselection": "JsonFieldSelection" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1902 | neighbors=[_d()]
- "runtime_library_d_jsonobject": "JsonObject" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1915 | neighbors=[_d()]
- "runtime_library_d_jsonquery": "JsonQuery" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1919 | neighbors=[_d()]
- "runtime_library_d_jsonqueryaction": "JsonQueryAction" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1925 | neighbors=[_d()]
- "runtime_library_d_jsonselectionset": "JsonSelectionSet" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1927 | neighbors=[_d()]
- "runtime_library_d_jsonvalue": "JsonValue" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1938 | neighbors=[_d()]
- "runtime_library_d_jsoutputvalue": "JsOutputValue" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1940 | neighbors=[_d()]
- "runtime_library_d_jspromise": "JsPromise" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1944 | neighbors=[_d()]
- "runtime_library_d_knownerrorparams": "KnownErrorParams" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1946 | neighbors=[_d()]
- "runtime_library_d_link": "Link" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1968 | neighbors=[_d()]
- "runtime_library_d_loadedenv": "LoadedEnv" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1977 | neighbors=[_d()]
- "runtime_library_d_locationinfile": "LocationInFile" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1984 | neighbors=[_d()]
- "runtime_library_d_logdefinition": "LogDefinition" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L1990 | neighbors=[_d()]
- "runtime_library_d_logemitter": "LogEmitter" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2001 | neighbors=[_d()]
- "runtime_library_d_logevent": "LogEvent" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2007 | neighbors=[_d()]
- "runtime_library_d_logeventtype": "LogEventType" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2013 | neighbors=[_d()]
- "runtime_library_d_loglevel": "LogLevel" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2015 | neighbors=[_d()]
- "runtime_library_d_mappings": "Mappings" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L650 | neighbors=[_d()]
- "runtime_library_d_mergedextensionslist": "MergedExtensionsList" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2047 | neighbors=[_d()]
- "runtime_library_d_mergeextargs": "MergeExtArgs" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2061 | neighbors=[_d()]
- "runtime_library_d_metric": "Metric" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2063 | neighbors=[_d()]
- "runtime_library_d_metrichistogram": "MetricHistogram" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2070 | neighbors=[_d()]
- "runtime_library_d_metrichistogrambucket": "MetricHistogramBucket" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2076 | neighbors=[_d()]
- "runtime_library_d_metrics": "Metrics" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2078 | neighbors=[_d()]
- "runtime_library_d_metricsclient": "MetricsClient" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2084 | neighbors=[_d()]
- "runtime_library_d_metricsoptions": "MetricsOptions" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2104 | neighbors=[_d()]
- "runtime_library_d_metricsoptionscommon": "MetricsOptionsCommon" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2111 | neighbors=[_d()]
- "runtime_library_d_metricsoptionsjson": "MetricsOptionsJson" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2115 | neighbors=[_d()]
- "runtime_library_d_metricsoptionsprometheus": "MetricsOptionsPrometheus" | kind=code-symbol | source=scratch/generated-client/runtime/library.d.ts:L2119 | neighbors=[_d()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-136.json

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
