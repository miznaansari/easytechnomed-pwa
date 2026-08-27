# Node Description Batch 16 of 148

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
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in Portuguese (pt). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "runtime_wasm_ae": "ae()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, Pe(), cn(), It(), ke()]
- "runtime_wasm_alloc": "alloc()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, allocUnsafe(), fill(), nn(), concat()]
- "runtime_wasm_as": "as()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, enabled(), get(), Ss(), values()]
- "runtime_wasm_ce": "Ce()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L8 | neighbors=[wasm.js, Ar(), includes(), loadLibrary(), to()]
- "runtime_wasm_compare": "compare()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, B(), It(), slice(), V()]
- "runtime_wasm_constructor": "constructor()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, _getName(), _getNamespace(), instantiateLibrary(), wt()]
- "runtime_wasm_ei": "ei()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, ds(), addSuggestion(), hasField(), Ns()]
- "runtime_wasm_findfield": "findField()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ia(), nestSelection(), oa(), sa()]
- "runtime_wasm_ge": "ge()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ga(), tt(), ui(), Wr()]
- "runtime_wasm_getexternaladaptererror": "getExternalAdapterError()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L12 | neighbors=[wasm.js, buildQueryError(), consumeError(), qt(), transaction()]
- "runtime_wasm_getselectionparent": "getSelectionParent()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, getDeepSelectionParent(), asObject(), getField(), getSubSelectionValue()]
- "runtime_wasm_h": "H()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, da(), ia(), tt(), Wr()]
- "runtime_wasm_instantiatelibrary": "instantiateLibrary()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, constructor(), getCurrentBinaryTarget(), loadEngine(), version()]
- "runtime_wasm_metrics": "metrics()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L12 | neighbors=[wasm.js, json(), parseEngineResponse(), start(), prometheus()]
- "runtime_wasm_nestargument": "nestArgument()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, aa(), fi(), concat(), e()]
- "runtime_wasm_ni": "ni()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, append(), e(), r(), si()]
- "runtime_wasm_qe": "Qe()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, Ct(), di(), isDecimal(), si()]
- "runtime_wasm_ri": "ri()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L4 | neighbors=[wasm.js, Bs(), js(), addSuggestion(), hasField()]
- "runtime_wasm_runinchildspan": "runInChildSpan()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L21 | neighbors=[wasm.js, getGlobalTracingHelper(), t(), start(), stop()]
- "runtime_wasm_tojson": "toJSON()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, ao(), di(), so(), from()]
- "runtime_wasm_transaction": "transaction()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L11 | neighbors=[wasm.js, getExternalAdapterError(), ja(), parseEngineResponse(), start()]
- "runtime_wasm_writeline": "writeLine()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L2 | neighbors=[wasm.js, write(), newLine(), writeWithContents(), writeWithItems()]
- "runtime_wasm_writeuintbe": "writeUIntBE()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, writeIntBE(), B(), V(), Y()]
- "runtime_wasm_writeuintle": "writeUIntLE()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L1 | neighbors=[wasm.js, writeIntLE(), B(), V(), Y()]
- "runtime_wasm_writewithcontents": "writeWithContents()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_wasm_writewithitems": "writeWithItems()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L3 | neighbors=[wasm.js, write(), afterNextNewline(), withIndent(), writeLine()]
- "runtime_wasm_ye": "Ye()" | kind=code-symbol | source=scratch/generated-client/runtime/wasm.js:L5 | neighbors=[wasm.js, ci(), nl(), oi(), zt()]
- "scratch_backfill_counters": "scratch-backfill-counters.js" | kind=code-symbol | source=scratch-backfill-counters.js:L1 | neighbors=[252e194 e, generateRandomSuffix(), main(), prisma, { PrismaClient }]
- "scratch_test_patient_context": "test-patient-context.js" | kind=code-symbol | source=scratch/test-patient-context.js:L1 | neighbors=[252e194 e, addPatientContextToValuesMap(), valuesMap1, valuesMap2, valuesMap3]
- "scratch_test_user_cbc": "test-user-cbc.js" | kind=code-symbol | source=scratch/test-user-cbc.js:L1 | neighbors=[252e194 e, calculateAllDependents(), inputValues, result, testDefinition]
- "auth_offlineauth_getcachedsession": "getCachedSession()" | kind=code-symbol | source=lib/auth/offlineAuth.js:L71 | neighbors=[offlineAuth.js, saveAuthenticatedSession(), getOrCreateOfflineSession(), isLocalSessionValid()]
- "check_route": "route.js" | kind=code-symbol | source=app/api/auth/check/route.js:L1 | neighbors=[GET(), HEAD(), 252e194 e, d446d11 fixed code]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@14fa292a5b0d0d359673fa5f43e1a99e00e1fd9d": "14fa292 f" | kind=Commit | source=git | neighbors=[main, 48cc7ec 2.0.22, LoginPageClient.js, f4e1e65 2.0.21]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@37ee548f75528c10f3b6dc026a6c0127527cf9ff": "37ee548 f" | kind=Commit | source=git | neighbors=[1ba5187 2.0.17, main, dad94e1 2.0.18, AdminLayoutClient.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@3c7e66b6e8b2bb160a8c8250a028cfcc607c94d8": "3c7e66b f" | kind=Commit | source=git | neighbors=[main, 2ef3785 2.0.1, syncManager.js, 3f7f1b4 2.0.0]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@66182613cbf1407454f175eca3ebc193d824cf50": "6618261 f" | kind=Commit | source=git | neighbors=[main, e9f3af9 2.0.6, sw.js, a4a950a 2.0.5]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@cea69a2d1359d130ffb3efc703dd40b8d9119e94": "cea69a2 d" | kind=Commit | source=git | neighbors=[main, 2476fb6 2.0.9, sw.js, f9e9bea 2.0.8]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@cfa38796993167732f743648a5ba5eb5185d81b5": "cfa3879 f" | kind=Commit | source=git | neighbors=[bcee6c8 fi, main, eb42395 2.0.16, layout.js]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@d87cf8780d5acfad16d6d403dbb15777bcfebd11": "d87cf87 d" | kind=Commit | source=git | neighbors=[main, 7134058 1.1.29, sw.js, f9a9e52 1.1.28]
- "commit:repo:github.com-personal/miznaansari/easytechnomed-pwa@fafa3d9183637b6a594e9828f4bb2d45607463f1": "fafa3d9 f" | kind=Commit | source=git | neighbors=[9deec8f 2.0.4, main, a4a950a 2.0.5, sw.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-015.json

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
