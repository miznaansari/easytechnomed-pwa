# Graph Report - .  (2026-08-29)

## Corpus Check
- Large corpus: 375 files · ~554,456 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 5972 nodes · 9085 edges · 122 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 5644 · calls: 2697 · MODIFIES: 400 · ON_BRANCH: 107 · PARENT_OF: 106 · imports: 49 · imports_from: 37 · method: 30 · inherits: 13 · implements: 2


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 375 · Candidates: 627
- Excluded: 24 untracked · 121608 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `e01658c`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `_d()` - 334 edges
2. `e()` - 24 edges
3. `e()` - 21 edges
4. `write()` - 20 edges
5. `write()` - 19 edges
6. `write()` - 19 edges
7. `addErrorMessage()` - 19 edges
8. `write()` - 19 edges
9. `t()` - 19 edges
10. `addErrorMessage()` - 18 edges

## Surprising Connections (you probably didn't know these)
- `GET()` --calls--> `numberToWords()`  [EXTRACTED]
  app/api/print-report/[registrationId]/route.js → app/api/print-bill/[registrationId]/route.js

## Communities

### Community 58 - "Community 58"
Cohesion: 0.19
Nodes (8): RegistrationChart(), DepartmentDistributionChart(), quickRanges, 44ad6b2 new ui dashboard, 6812ab9 new ui dashboard, b95c5bd 3.0.24, RevenueChart(), ReferralChart()

### Community 9 - "Community 9"
Cohesion: 0.06
Nodes (21): filter, indianStatesMap, indianCities, COMMON_LAB_UNITS, OfflineSyncContext, useSync(), db, MODEL_REGISTRY (+13 more)

### Community 37 - "Community 37"
Cohesion: 0.10
Nodes (9): theme, verifyToken(), requireUser(), requireAdmin(), requireSuperAdmin(), verifySuperAdminAPI(), JWT_SECRET, config (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.05
Nodes (74): theme, PRECACHE_ROUTES, 005eea6 f, 05ff307 2.0.3, 0afb0ac 2.0.19, 124b88b 3.0.13, 14ed805 3.0.0, 14fa292 f (+66 more)

### Community 13 - "Community 13"
Cohesion: 0.06
Nodes (19): isQualitativeAbnormal(), isOutOfRange(), isQualitativeAbnormal(), isOutOfRange(), menuButtonStyle, activeMenuButtonStyle, dangerMenuButtonStyle, exportColumns (+11 more)

### Community 88 - "Community 88"
Cohesion: 0.53
Nodes (5): DLC_DEFINITIONS, isDifferentialHeader(), calculateDifferentialSummary(), validateDifferentialOnSave(), DifferentialHeaderBadge()

### Community 2 - "Community 2"
Cohesion: 0.02
Nodes (26): callGemini(), POST(), serializeData(), GET(), serializeData(), GET(), formatDate(), GET() (+18 more)

### Community 41 - "Community 41"
Cohesion: 0.11
Nodes (12): isLikelyMobile(), loginSchema, CustomerLoginPage(), metadata, metadata, DEFAULT_OFFLINE_ADMIN, saveAuthenticatedSession(), getOrCreateOfflineSession() (+4 more)

### Community 40 - "Community 40"
Cohesion: 0.10
Nodes (13): registerSchema, metadata, outfit, metadata, viewport, Input, 20dc303 3.0.19, 2582be7 fixed zoom issue (+5 more)

### Community 12 - "Community 12"
Cohesion: 0.06
Nodes (29): serializeData(), registrationSchema, GET(), POST(), isQualitativeAbnormal(), isOutOfRange(), parseMarkdownTokens(), layoutMarkdownLines() (+21 more)

### Community 123 - "Community 123"
Cohesion: 1.00
Nodes (2): callGeminiModels(), POST()

### Community 89 - "Community 89"
Cohesion: 0.53
Nodes (4): serializeData(), GET(), POST(), PUT()

### Community 92 - "Community 92"
Cohesion: 0.40
Nodes (2): parseNullableString(), POST()

### Community 80 - "Community 80"
Cohesion: 0.48
Nodes (6): formatDate(), numberToWords(), GET(), isQualitativeAbnormal(), isOutOfRange(), getReferenceRange()

### Community 96 - "Community 96"
Cohesion: 0.70
Nodes (4): formatDate(), formatDateTime(), numberToWords(), GET()

### Community 103 - "Community 103"
Cohesion: 0.67
Nodes (2): serializeRegistration(), GET()

### Community 121 - "Community 121"
Cohesion: 1.00
Nodes (2): POST(), PUT()

### Community 90 - "Community 90"
Cohesion: 0.47
Nodes (4): serializeData(), registrationSchema, GET(), PUT()

### Community 105 - "Community 105"
Cohesion: 0.67
Nodes (2): serializeData(), GET()

### Community 122 - "Community 122"
Cohesion: 1.00
Nodes (2): processTestParameters(), GET()

### Community 97 - "Community 97"
Cohesion: 0.40
Nodes (2): DEFAULT_COLUMN_ORDER, DEFAULT_PDF_SETTINGS

### Community 85 - "Community 85"
Cohesion: 0.43
Nodes (5): serializeTests(), serializeSingleTest(), GET(), POST(), PUT()

### Community 33 - "Community 33"
Cohesion: 0.13
Nodes (20): addValueToValuesMap(), addPatientContextToValuesMap(), evaluateExpression(), checkFormulaDependencies(), getRangeAndCriticalThresholds(), isQualitativeAbnormal(), isOutOfRange(), determineFlag() (+12 more)

### Community 65 - "Community 65"
Cohesion: 0.17
Nodes (4): runFormulaEngine(), prisma, prisma, prisma

### Community 95 - "Community 95"
Cohesion: 0.40
Nodes (1): transporter

### Community 68 - "Community 68"
Cohesion: 0.22
Nodes (1): AppDatabase

### Community 74 - "Community 74"
Cohesion: 0.36
Nodes (1): NetworkMonitor

### Community 67 - "Community 67"
Cohesion: 0.27
Nodes (1): SyncManager

### Community 73 - "Community 73"
Cohesion: 0.39
Nodes (5): hexToRgb(), getFontFamilyDefinitions(), DEFAULT_COLUMNS, computeColumnLayout(), PDF_THEME_PRESETS

### Community 98 - "Community 98"
Cohesion: 0.50
Nodes (4): { PrismaClient }, prisma, processTestParameters(), main()

### Community 75 - "Community 75"
Cohesion: 0.36
Nodes (7): { PrismaClient }, prisma, bcrypt, main(), processTestParameters(), getDepartmentName(), seedLimsFormulasAndConfigurations()

### Community 101 - "Community 101"
Cohesion: 0.50
Nodes (4): { PrismaClient }, prisma, generateRandomSuffix(), main()

### Community 106 - "Community 106"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 107 - "Community 107"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 108 - "Community 108"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 109 - "Community 109"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 110 - "Community 110"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 111 - "Community 111"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 112 - "Community 112"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 113 - "Community 113"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 29 - "Community 29"
Cohesion: 0.09
Nodes (26): {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
}, Prisma, config, PrismaClient, Ua(), ze(), Tt(), rl() (+18 more)

### Community 93 - "Community 93"
Cohesion: 0.40
Nodes (3): {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
}, Prisma, PrismaClient

### Community 0 - "Community 0"
Cohesion: 0.00
Nodes (2904): PrismaPromise, Workspace, SuperAdmin, SuperAdminSession, User, UserSession, UserRole, UserRolePermission (+2896 more)

### Community 6 - "Community 6"
Cohesion: 0.02
Nodes (43): a(), l(), g(), ba(), ci(), ri(), xa(), Aa() (+35 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (53): u(), co(), to(), fl(), Nl(), tu(), makeRequired(), markAsError() (+45 more)

### Community 23 - "Community 23"
Cohesion: 0.09
Nodes (33): h(), v(), S(), e(), Y(), ne(), St(), hr() (+25 more)

### Community 38 - "Community 38"
Cohesion: 0.12
Nodes (24): be(), T(), si(), ai(), ga(), tn(), ha(), Xr() (+16 more)

### Community 48 - "Community 48"
Cohesion: 0.11
Nodes (20): pi(), Ra(), pn(), r(), wo(), su(), he(), Do() (+12 more)

### Community 24 - "Community 24"
Cohesion: 0.09
Nodes (31): fi(), gi(), hi(), ru(), nu(), ot(), write(), writeJoined() (+23 more)

### Community 30 - "Community 30"
Cohesion: 0.13
Nodes (26): constructor(), lo(), nt(), vr(), iu(), ou(), toString(), addItem() (+18 more)

### Community 45 - "Community 45"
Cohesion: 0.11
Nodes (21): emit(), Lr(), bs(), forEach(), build(), buildCaptureSettings(), propagateResponseExtensions(), uploadSchema() (+13 more)

### Community 77 - "Community 77"
Cohesion: 0.25
Nodes (8): Ct(), isEmpty(), getAllQueryCallbacks(), Br(), ss(), as(), cs(), ps()

### Community 81 - "Community 81"
Cohesion: 0.29
Nodes (7): el(), ce(), eo(), mo(), getPrintWidth(), No(), values()

### Community 71 - "Community 71"
Cohesion: 0.22
Nodes (9): xe(), yl(), rt(), qt(), getGlobalOmit(), shouldApplyGlobalOmit(), ts(), uc() (+1 more)

### Community 56 - "Community 56"
Cohesion: 0.17
Nodes (17): N(), getOrCreate(), getAllComputedFields(), getAllClientExtensions(), getAllModelExtensions(), jt(), te(), Ve() (+9 more)

### Community 5 - "Community 5"
Cohesion: 0.02
Nodes (41): a(), l(), g(), Sa(), Be(), gi(), ai(), Ia() (+33 more)

### Community 53 - "Community 53"
Cohesion: 0.23
Nodes (19): u(), qu(), we(), qr(), Vt(), ju(), Gu(), Uo() (+11 more)

### Community 49 - "Community 49"
Cohesion: 0.14
Nodes (20): h(), v(), S(), Y(), kt(), O(), me(), xr() (+12 more)

### Community 42 - "Community 42"
Cohesion: 0.14
Nodes (22): xe(), T(), pi(), di(), va(), on(), Ta(), rn() (+14 more)

### Community 51 - "Community 51"
Cohesion: 0.16
Nodes (19): Ei(), bi(), xi(), write(), writeJoined(), writeLine(), newLine(), withIndent() (+11 more)

### Community 34 - "Community 34"
Cohesion: 0.10
Nodes (25): constructor(), N(), _getNamespace(), get(), getOrCreate(), Ut(), getAllComputedFields(), getAllClientExtensions() (+17 more)

### Community 52 - "Community 52"
Cohesion: 0.12
Nodes (19): emit(), forEach(), build(), buildCaptureSettings(), propagateResponseExtensions(), uploadSchema(), request(), requestBatch() (+11 more)

### Community 15 - "Community 15"
Cohesion: 0.13
Nodes (46): Rt(), ol(), ro(), eu(), tu(), ru(), nu(), iu() (+38 more)

### Community 91 - "Community 91"
Cohesion: 0.33
Nodes (6): Pe(), nt(), getGlobalOmit(), shouldApplyGlobalOmit(), Kr(), jc()

### Community 28 - "Community 28"
Cohesion: 0.10
Nodes (29): yn(), it(), Cr(), ot(), uu(), st(), bo(), xo() (+21 more)

### Community 78 - "Community 78"
Cohesion: 0.25
Nodes (8): wr(), vr(), po(), Pn(), yl(), no(), ye(), gc()

### Community 76 - "Community 76"
Cohesion: 0.25
Nodes (8): text(), gt(), rc(), Qe(), Fc(), ks(), _c(), ni()

### Community 54 - "Community 54"
Cohesion: 0.12
Nodes (18): AnyNull, NullTypesEnumValue, Args, DbNull, Constructor, Instance, Rounding, Modulo (+10 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (33): constructor(), _getName(), toString(), _getNamespace(), Re(), be(), O(), x() (+25 more)

### Community 1 - "Community 1"
Cohesion: 0.01
Nodes (320): _d(), AccelerateEngineConfig, Action, ActiveConnectorType, Aggregate, AllModelsToStringIndex, ApplyOmit, Args (+312 more)

### Community 99 - "Community 99"
Cohesion: 0.40
Nodes (5): AnyNull, NullTypesEnumValue, DbNull, JsonNull, ObjectEnumValue

### Community 100 - "Community 100"
Cohesion: 0.40
Nodes (5): DriverAdapter, Queryable, ErrorCapturingDriverAdapter, Transaction, TransactionContext

### Community 104 - "Community 104"
Cohesion: 0.50
Nodes (4): ErrorWithBatchIndex, NotFoundError, PrismaClientKnownRequestError, PrismaClientUnknownRequestError

### Community 4 - "Community 4"
Cohesion: 0.02
Nodes (56): ei(), ti(), Qu(), enabled(), Ru(), Qn(), pe(), Au() (+48 more)

### Community 62 - "Community 62"
Cohesion: 0.19
Nodes (13): Qo(), ri(), nc(), K(), rr(), y(), we(), nn() (+5 more)

### Community 14 - "Community 14"
Cohesion: 0.06
Nodes (47): ci(), ic(), oc(), e(), So(), qr(), Bu(), ie() (+39 more)

### Community 20 - "Community 20"
Cohesion: 0.11
Nodes (35): I(), Br(), Pt(), vt(), addItem(), zs(), It(), _getName() (+27 more)

### Community 43 - "Community 43"
Cohesion: 0.14
Nodes (22): mt(), with(), when(), otherwise(), Lo(), Fu(), Lu(), Mu() (+14 more)

### Community 55 - "Community 55"
Cohesion: 0.12
Nodes (18): rs(), zt(), sc(), ns(), is(), ac(), toString(), cc() (+10 more)

### Community 25 - "Community 25"
Cohesion: 0.09
Nodes (31): Yt(), lc(), hi(), xi(), t(), sp(), write(), writeJoined() (+23 more)

### Community 31 - "Community 31"
Cohesion: 0.10
Nodes (26): Yr(), rp(), getPrintWidth(), isEmpty(), get(), getOrCreate(), ra(), na() (+18 more)

### Community 60 - "Community 60"
Cohesion: 0.14
Nodes (14): Fe(), wt(), pp(), dp(), xt(), removeAllFields(), getGlobalOmit(), shouldApplyGlobalOmit() (+6 more)

### Community 18 - "Community 18"
Cohesion: 0.16
Nodes (38): ks(), ws(), np(), ip(), op(), lp(), up(), gp() (+30 more)

### Community 63 - "Community 63"
Cohesion: 0.21
Nodes (13): Tt(), Ot(), wn(), ha(), wa(), qa(), On(), Xe() (+5 more)

### Community 46 - "Community 46"
Cohesion: 0.13
Nodes (21): prometheus(), json(), consumeError(), Ft(), st(), fd(), nl(), start() (+13 more)

### Community 57 - "Community 57"
Cohesion: 0.14
Nodes (16): forEach(), build(), buildCaptureSettings(), stop(), propagateResponseExtensions(), uploadSchema(), handleError(), fm() (+8 more)

### Community 3 - "Community 3"
Cohesion: 0.02
Nodes (52): constructor(), Pa(), Ta(), Ca(), Aa(), ai(), li(), Ia() (+44 more)

### Community 19 - "Community 19"
Cohesion: 0.07
Nodes (36): a(), l(), g(), h(), P(), S(), xa(), oi() (+28 more)

### Community 16 - "Community 16"
Cohesion: 0.12
Nodes (43): u(), fn(), eo(), nu(), iu(), lu(), uu(), du() (+35 more)

### Community 47 - "Community 47"
Cohesion: 0.15
Nodes (21): Oe(), T(), ti(), ri(), ha(), Hr(), ya(), Wr() (+13 more)

### Community 50 - "Community 50"
Cohesion: 0.15
Nodes (20): ui(), ci(), pi(), au(), write(), writeJoined(), writeLine(), newLine() (+12 more)

### Community 66 - "Community 66"
Cohesion: 0.18
Nodes (12): emit(), ut(), renderAllMessages(), gt(), Rr(), Sr(), Vo(), handleAndLogRequestError() (+4 more)

### Community 39 - "Community 39"
Cohesion: 0.13
Nodes (23): e(), Al(), r(), Xi(), Sl(), it(), gr(), zl() (+15 more)

### Community 26 - "Community 26"
Cohesion: 0.08
Nodes (30): ar(), prometheus(), json(), consumeError(), Lr(), query(), startTransaction(), commitTransaction() (+22 more)

### Community 64 - "Community 64"
Cohesion: 0.15
Nodes (13): Fe(), st(), at(), lt(), getGlobalOmit(), shouldApplyGlobalOmit(), ss(), Zt() (+5 more)

### Community 59 - "Community 59"
Cohesion: 0.13
Nodes (15): de(), Vi(), to(), Dl(), addItem(), xo(), _getName(), Xu() (+7 more)

### Community 36 - "Community 36"
Cohesion: 0.10
Nodes (25): ro(), su(), so(), getPrintWidth(), isEmpty(), get(), getOrCreate(), getAllComputedFields() (+17 more)

### Community 35 - "Community 35"
Cohesion: 0.19
Nodes (25): fo(), Te(), Fr(), Wt(), nc(), ic(), oc(), sc() (+17 more)

### Community 7 - "Community 7"
Cohesion: 0.03
Nodes (50): constructor(), isEncoding(), includes(), lastIndexOf(), indexOf(), sn(), r(), emit() (+42 more)

### Community 21 - "Community 21"
Cohesion: 0.08
Nodes (34): gr(), on(), nn(), Yo(), alloc(), allocUnsafe(), allocUnsafeSlow(), isBuffer() (+26 more)

### Community 44 - "Community 44"
Cohesion: 0.14
Nodes (22): It(), compare(), slice(), subarray(), reverse(), equals(), un(), ae() (+14 more)

### Community 27 - "Community 27"
Cohesion: 0.11
Nodes (30): V(), B(), Y(), readIntBE(), readIntLE(), readUIntBE(), readUIntLE(), writeIntBE() (+22 more)

### Community 32 - "Community 32"
Cohesion: 0.19
Nodes (26): concat(), de(), xt(), ra(), na(), ia(), oa(), sa() (+18 more)

### Community 22 - "Community 22"
Cohesion: 0.07
Nodes (34): get(), enabled(), as(), Ss(), getPrintWidth(), isEmpty(), getOrCreate(), li() (+26 more)

### Community 82 - "Community 82"
Cohesion: 0.29
Nodes (7): es(), be(), Ve(), getGlobalOmit(), shouldApplyGlobalOmit(), za(), xo()

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (43): t(), us(), ls(), ds(), fs(), gs(), hs(), Or() (+35 more)

### Community 61 - "Community 61"
Cohesion: 0.20
Nodes (14): qt(), prometheus(), json(), consumeError(), transaction(), parseEngineResponse(), parseRequestError(), start() (+6 more)

### Community 69 - "Community 69"
Cohesion: 0.20
Nodes (10): renderAllMessages(), Ye(), oi(), Ht(), zt(), ci(), Pa(), va() (+2 more)

### Community 94 - "Community 94"
Cohesion: 0.40
Nodes (3): {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
}, Prisma, PrismaClient

### Community 114 - "Community 114"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 115 - "Community 115"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 116 - "Community 116"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 117 - "Community 117"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 79 - "Community 79"
Cohesion: 0.25
Nodes (6): DLC_DEFINITIONS, calculateDifferentialSummary(), { calculateDifferentialSummary }, params, values1, values2

### Community 72 - "Community 72"
Cohesion: 0.28
Nodes (8): STANDARD_CODE_FALLBACKS, evaluateExpression(), checkFormulaDependencies(), calculateAllDependents(), tests, initialValues, overrides, result

### Community 83 - "Community 83"
Cohesion: 0.29
Nodes (4): valuesFemale, valuesMale, resF, resM

### Community 102 - "Community 102"
Cohesion: 0.40
Nodes (3): valuesMap1, valuesMap2, valuesMap3

### Community 118 - "Community 118"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

### Community 84 - "Community 84"
Cohesion: 0.29
Nodes (3): regPayload, inputValues, valuesMap

### Community 70 - "Community 70"
Cohesion: 0.20
Nodes (6): userParams, formulas, typedValues, valuesMap, res, evaluatedFormulas

### Community 119 - "Community 119"
Cohesion: 0.50
Nodes (2): sampleReg, url

### Community 120 - "Community 120"
Cohesion: 0.50
Nodes (2): { PrismaClient }, prisma

## Knowledge Gaps
- **3369 isolated node(s):** `quickRanges`, `filter`, `indianStatesMap`, `indianCities`, `COMMON_LAB_UNITS` (+3364 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 123`** (2 nodes): `callGeminiModels()`, `POST()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 92`** (2 nodes): `parseNullableString()`, `POST()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 103`** (2 nodes): `serializeRegistration()`, `GET()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 121`** (2 nodes): `POST()`, `PUT()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 105`** (2 nodes): `serializeData()`, `GET()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 122`** (2 nodes): `processTestParameters()`, `GET()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 97`** (2 nodes): `DEFAULT_COLUMN_ORDER`, `DEFAULT_PDF_SETTINGS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 95`** (1 nodes): `transporter`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (1 nodes): `AppDatabase`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `NetworkMonitor`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (1 nodes): `SyncManager`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 109`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 110`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 111`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 112`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 113`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 114`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 115`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 117`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 118`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 119`** (2 nodes): `sampleReg`, `url`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 120`** (2 nodes): `{ PrismaClient }`, `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `_d()` connect `Community 1` to `Community 2`, `Community 4`, `Community 99`, `Community 100`, `Community 104`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `SyncManager` connect `Community 67` to `Community 9`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `AppDatabase` connect `Community 68` to `Community 9`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `quickRanges`, `filter`, `indianStatesMap` to the rest of the system?**
  _3369 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 9` be split into smaller, more focused modules?**
  _Cohesion score 0.05701754385964912 - nodes in this community are weakly interconnected._
- **Should `Community 37` be split into smaller, more focused modules?**
  _Cohesion score 0.09782608695652174 - nodes in this community are weakly interconnected._
- **Should `Community 8` be split into smaller, more focused modules?**
  _Cohesion score 0.045965270684371805 - nodes in this community are weakly interconnected._