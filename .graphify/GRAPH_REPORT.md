# Graph Report - .  (2026-08-29)

## Corpus Check
- Large corpus: 378 files · ~556,954 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 5988 nodes · 9121 edges · 123 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 5650 · calls: 2697 · MODIFIES: 414 · ON_BRANCH: 115 · PARENT_OF: 114 · imports: 49 · imports_from: 37 · method: 30 · inherits: 13 · implements: 2


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 378 · Candidates: 657
- Excluded: 4 untracked · 121807 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `74d638d`
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

### Community 0 - "Community 0"
Cohesion: 0.00
Nodes (2904): Admin, Admin$addressArgs, Admin$registrationsArgs, Admin$sessionsArgs, Admin$trackingsArgs, Admin$workspaceArgs, AdminAddress, AdminAddressAggregateArgs (+2896 more)

### Community 1 - "Community 1"
Cohesion: 0.01
Nodes (320): _d(), AccelerateEngineConfig, Action, ActiveConnectorType, Aggregate, AllModelsToStringIndex, ApplyOmit, Args (+312 more)

### Community 2 - "Community 2"
Cohesion: 0.01
Nodes (26): GET(), serializeData(), 252e194 e, TrackingContext, GET(), serializeData(), eslintConfig, config (+18 more)

### Community 3 - "Community 3"
Cohesion: 0.02
Nodes (52): Aa(), ai(), Ao(), ap(), As(), bs(), Ca(), co() (+44 more)

### Community 4 - "Community 4"
Cohesion: 0.02
Nodes (56): Au(), Bl(), bs(), cm(), Cn(), constructor(), ct(), Dl() (+48 more)

### Community 5 - "Community 5"
Cohesion: 0.02
Nodes (41): a(), ac(), ai(), Ba(), Be(), bt(), dc(), ds() (+33 more)

### Community 6 - "Community 6"
Cohesion: 0.02
Nodes (43): a(), Aa(), ba(), Cc(), ci(), Da(), di(), Et() (+35 more)

### Community 7 - "Community 7"
Cohesion: 0.03
Nodes (50): al(), Ar(), at(), bo(), Ce(), constructor(), createEngineSpan(), emit() (+42 more)

### Community 8 - "Community 8"
Cohesion: 0.04
Nodes (40): 05ff307 2.0.3, 1064f6b 2.0.10, 2291b5b 2.0.2, 2b2534c f, 2ef3785 2.0.1, 3c7e66b f, 3f7f1b4 2.0.0, 532b740 fixed (+32 more)

### Community 9 - "Community 9"
Cohesion: 0.05
Nodes (72): main, 005eea6 f, 026962b 1.1.33, 0afb0ac 2.0.19, 124b88b 3.0.13, 14ed805 3.0.0, 14fa292 f, 165f057 f (+64 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (33): Ae(), B(), be(), constructor(), e(), Ee(), F(), fe() (+25 more)

### Community 11 - "Community 11"
Cohesion: 0.11
Nodes (53): addErrorMessage(), addField(), addSuggestion(), An(), Ao(), asObject(), Au(), bu() (+45 more)

### Community 12 - "Community 12"
Cohesion: 0.06
Nodes (47): _a(), an(), append(), As(), Bu(), Cd(), ci(), e() (+39 more)

### Community 13 - "Community 13"
Cohesion: 0.13
Nodes (46): addErrorMessage(), addField(), addSuggestion(), Ao(), Ar(), asObject(), Au(), bu() (+38 more)

### Community 14 - "Community 14"
Cohesion: 0.12
Nodes (43): addErrorMessage(), addField(), addSuggestion(), asObject(), bo(), br(), bu(), _c() (+35 more)

### Community 15 - "Community 15"
Cohesion: 0.13
Nodes (43): addErrorMessage(), addField(), addSuggestion(), asObject(), Bs(), ds(), ei(), fs() (+35 more)

### Community 16 - "Community 16"
Cohesion: 0.16
Nodes (38): addErrorMessage(), addField(), addSuggestion(), asObject(), Bp(), Fp(), getDeepField(), getDeepFieldValue() (+30 more)

### Community 17 - "Community 17"
Cohesion: 0.09
Nodes (21): 6c2dfe4 test, 8b1f3d8 a, decryptReportToken(), generateReportToken(), getKeyRing(), verifyReportToken(), generateNextRegistrationIdentity(), generateRandomSuffix() (+13 more)

### Community 18 - "Community 18"
Cohesion: 0.07
Nodes (36): a(), be(), bl(), bn(), cu(), dr(), Fa(), fu() (+28 more)

### Community 19 - "Community 19"
Cohesion: 0.11
Nodes (35): aa(), ad(), addItem(), Am(), Br(), ed(), findField(), getArgumentName() (+27 more)

### Community 20 - "Community 20"
Cohesion: 0.08
Nodes (34): addItem(), alloc(), allocUnsafe(), allocUnsafeSlow(), ao(), Bt(), byteLength(), construct() (+26 more)

### Community 21 - "Community 21"
Cohesion: 0.07
Nodes (34): _a(), ai(), as(), bi(), da(), ea(), enabled(), et() (+26 more)

### Community 22 - "Community 22"
Cohesion: 0.09
Nodes (33): append(), bl(), cl(), Dt(), e(), empty(), Er(), gn() (+25 more)

### Community 23 - "Community 23"
Cohesion: 0.09
Nodes (31): addMarginSymbol(), afterNextNewline(), $c(), Dr(), fi(), getCurrentLineLength(), gi(), handleRequestError() (+23 more)

### Community 24 - "Community 24"
Cohesion: 0.09
Nodes (31): addMarginSymbol(), afterNextNewline(), ea(), getCurrentLineLength(), hi(), hl(), indent(), indentedCurrentLine() (+23 more)

### Community 25 - "Community 25"
Cohesion: 0.08
Nodes (30): applyPendingMigrations(), ar(), buildQueryError(), commitTransaction(), consumeError(), createEngineSpan(), ep(), getActiveContext() (+22 more)

### Community 26 - "Community 26"
Cohesion: 0.11
Nodes (30): addMarginSymbol(), afterNextNewline(), B(), copy(), cs(), getCurrentLineLength(), indent(), indentedCurrentLine() (+22 more)

### Community 27 - "Community 27"
Cohesion: 0.10
Nodes (29): addItem(), bo(), Bs(), Cr(), Do(), dt(), Fr(), fu() (+21 more)

### Community 28 - "Community 28"
Cohesion: 0.09
Nodes (26): config, Prisma, PrismaClient, {
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
}, append(), ce(), e(), empty() (+18 more)

### Community 29 - "Community 29"
Cohesion: 0.09
Nodes (9): DEFAULT_OFFLINE_ADMIN, getCachedSession(), getOrCreateOfflineSession(), isLocalSessionValid(), saveAuthenticatedSession(), 10501e3 fixed, 6236f60 new update, 6adf550 3.1.4 (+1 more)

### Community 30 - "Community 30"
Cohesion: 0.13
Nodes (26): addItem(), constructor(), ds(), extractHostAndApiKey(), get(), getAllBatchQueryCallbacks(), getArgumentName(), getArgumentPath() (+18 more)

### Community 31 - "Community 31"
Cohesion: 0.10
Nodes (26): Bd(), da(), dd(), extractHostAndApiKey(), Gd(), get(), getAllBatchQueryCallbacks(), getAllClientExtensions() (+18 more)

### Community 32 - "Community 32"
Cohesion: 0.19
Nodes (26): aa(), concat(), de(), di(), Dr(), fi(), findField(), getArgumentName() (+18 more)

### Community 33 - "Community 33"
Cohesion: 0.13
Nodes (20): addPatientContextToValuesMap(), addValueToValuesMap(), calculateAllDependents(), checkFormulaDependencies(), determineFlag(), evaluateExpression(), getRangeAndCriticalThresholds(), isOutOfRange() (+12 more)

### Community 34 - "Community 34"
Cohesion: 0.10
Nodes (25): bc(), constructor(), cs(), extractHostAndApiKey(), get(), getAllBatchQueryCallbacks(), getAllClientExtensions(), getAllComputedFields() (+17 more)

### Community 35 - "Community 35"
Cohesion: 0.19
Nodes (25): ac(), cc(), Cn(), findField(), fo(), Fr(), getArgumentName(), getArgumentPath() (+17 more)

### Community 36 - "Community 36"
Cohesion: 0.10
Nodes (25): Ae(), get(), getAllBatchQueryCallbacks(), getAllClientExtensions(), getAllComputedFields(), getAllModelExtensions(), getAllQueryCallbacks(), getOrCreate() (+17 more)

### Community 37 - "Community 37"
Cohesion: 0.12
Nodes (24): ai(), be(), bt(), Ca(), cr(), de(), en(), enabled() (+16 more)

### Community 38 - "Community 38"
Cohesion: 0.10
Nodes (10): 5e3d9ef d, theme, metadata, requireAdmin(), requireSuperAdmin(), requireUser(), verifySuperAdminAPI(), verifyToken() (+2 more)

### Community 39 - "Community 39"
Cohesion: 0.13
Nodes (23): Al(), append(), Bt(), e(), empty(), fromContent(), gr(), ho() (+15 more)

### Community 40 - "Community 40"
Cohesion: 0.12
Nodes (14): 1ba5187 2.0.17, 37ee548 f, 9e25c19 f, bcee6c8 fi, cb86968 fixed, cfa3879 f, dad94e1 2.0.18, e9caab3 2.0.15 (+6 more)

### Community 41 - "Community 41"
Cohesion: 0.14
Nodes (22): Aa(), Ca(), Da(), de(), di(), fi(), ja(), ka() (+14 more)

### Community 42 - "Community 42"
Cohesion: 0.14
Nodes (22): Fu(), ii(), In(), ju(), li(), Lo(), loadLibrary(), Lu() (+14 more)

### Community 43 - "Community 43"
Cohesion: 0.14
Nodes (22): ae(), append(), cn(), compare(), D(), dt(), e(), empty() (+14 more)

### Community 44 - "Community 44"
Cohesion: 0.11
Nodes (21): bs(), build(), buildCaptureSettings(), createEngineSpan(), emit(), forEach(), getActiveContext(), getGlobalTracingHelper() (+13 more)

### Community 45 - "Community 45"
Cohesion: 0.13
Nodes (21): buildQueryError(), consumeError(), fd(), Ft(), getExternalAdapterError(), handleAndLogRequestError(), hm(), json() (+13 more)

### Community 46 - "Community 46"
Cohesion: 0.15
Nodes (21): An(), ba(), Ea(), ha(), highlight(), Hr(), ii(), io() (+13 more)

### Community 47 - "Community 47"
Cohesion: 0.11
Nodes (20): dc(), Do(), ft(), he(), ic(), ko(), nc(), oc() (+12 more)

### Community 48 - "Community 48"
Cohesion: 0.14
Nodes (20): fo(), getPrintWidth(), h(), He(), Il(), ke(), kt(), mapQueryEngineResult() (+12 more)

### Community 49 - "Community 49"
Cohesion: 0.15
Nodes (20): addMarginSymbol(), afterNextNewline(), au(), ci(), getCurrentLineLength(), indent(), indentedCurrentLine(), newLine() (+12 more)

### Community 50 - "Community 50"
Cohesion: 0.12
Nodes (10): metadata, outfit, viewport, 20dc303 3.0.19, 2582be7 fixed zoom issue, 7ec66e7 3.0.18, a712d0e ios issue pwa, metadata (+2 more)

### Community 51 - "Community 51"
Cohesion: 0.16
Nodes (19): addMarginSymbol(), afterNextNewline(), bi(), Ei(), getCurrentLineLength(), indent(), indentedCurrentLine(), newLine() (+11 more)

### Community 52 - "Community 52"
Cohesion: 0.12
Nodes (19): build(), buildCaptureSettings(), createEngineSpan(), emit(), forEach(), getActiveContext(), getGlobalTracingHelper(), getTraceParent() (+11 more)

### Community 53 - "Community 53"
Cohesion: 0.23
Nodes (19): findField(), getArgumentName(), getArgumentPath(), getComputedFields(), getOutputTypeDescription(), getSelectionPath(), Gu(), In() (+11 more)

### Community 54 - "Community 54"
Cohesion: 0.12
Nodes (18): AnyNull, Args, Config, Constructor, DbNull, Decimal, Exact, GetRuntimeOutput (+10 more)

### Community 55 - "Community 55"
Cohesion: 0.12
Nodes (18): ac(), cc(), highlight(), hp(), is(), ln(), ns(), pc() (+10 more)

### Community 56 - "Community 56"
Cohesion: 0.17
Nodes (17): Ee(), Es(), fc(), gc(), getAllClientExtensions(), getAllComputedFields(), getAllModelExtensions(), getOrCreate() (+9 more)

### Community 57 - "Community 57"
Cohesion: 0.18
Nodes (10): 905ef50 fixed, a14c9b8 2.0.14, generateReportPdfOffline(), isOutOfRange(), isQualitativeAbnormal(), layoutMarkdownLines(), parseMarkdownTokens(), formatDate() (+2 more)

### Community 58 - "Community 58"
Cohesion: 0.14
Nodes (16): build(), buildCaptureSettings(), createEngineSpan(), fm(), forEach(), getActiveContext(), getGlobalTracingHelper(), getTraceParent() (+8 more)

### Community 59 - "Community 59"
Cohesion: 0.19
Nodes (8): 44ad6b2 new ui dashboard, 6812ab9 new ui dashboard, b95c5bd 3.0.24, DepartmentDistributionChart(), ReferralChart(), RegistrationChart(), RevenueChart(), quickRanges

### Community 60 - "Community 60"
Cohesion: 0.13
Nodes (15): addItem(), de(), Dl(), Gc(), getLocation(), _getName(), He(), jc() (+7 more)

### Community 61 - "Community 61"
Cohesion: 0.14
Nodes (14): dp(), Fe(), getGlobalOmit(), _l(), Ll(), mapQueryEngineResult(), pp(), removeAllFields() (+6 more)

### Community 62 - "Community 62"
Cohesion: 0.20
Nodes (14): buildQueryError(), consumeError(), getExternalAdapterError(), ja(), json(), metrics(), parseEngineResponse(), parseRequestError() (+6 more)

### Community 63 - "Community 63"
Cohesion: 0.19
Nodes (13): ap(), cp(), He(), K(), nc(), nn(), Qo(), ri() (+5 more)

### Community 64 - "Community 64"
Cohesion: 0.21
Nodes (13): Dn(), ha(), handleRequestError(), Ja(), kn(), On(), Ot(), qa() (+5 more)

### Community 65 - "Community 65"
Cohesion: 0.15
Nodes (13): at(), Fe(), Fs(), getGlobalOmit(), ks(), lt(), Ms(), np() (+5 more)

### Community 66 - "Community 66"
Cohesion: 0.17
Nodes (4): runFormulaEngine(), prisma, prisma, prisma

### Community 67 - "Community 67"
Cohesion: 0.18
Nodes (12): cp(), emit(), gt(), handleAndLogRequestError(), handleRequestError(), pp(), renderAllMessages(), Rr() (+4 more)

### Community 68 - "Community 68"
Cohesion: 0.27
Nodes (1): SyncManager

### Community 69 - "Community 69"
Cohesion: 0.22
Nodes (1): AppDatabase

### Community 70 - "Community 70"
Cohesion: 0.20
Nodes (10): ci(), handleRequestError(), Ht(), oi(), Pa(), renderAllMessages(), sanitizeMessage(), va() (+2 more)

### Community 71 - "Community 71"
Cohesion: 0.20
Nodes (6): evaluatedFormulas, formulas, res, typedValues, userParams, valuesMap

### Community 72 - "Community 72"
Cohesion: 0.22
Nodes (9): getGlobalOmit(), Hs(), qt(), rt(), shouldApplyGlobalOmit(), ts(), uc(), xe() (+1 more)

### Community 73 - "Community 73"
Cohesion: 0.28
Nodes (8): calculateAllDependents(), checkFormulaDependencies(), evaluateExpression(), initialValues, overrides, result, STANDARD_CODE_FALLBACKS, tests

### Community 74 - "Community 74"
Cohesion: 0.39
Nodes (5): computeColumnLayout(), DEFAULT_COLUMNS, getFontFamilyDefinitions(), hexToRgb(), PDF_THEME_PRESETS

### Community 75 - "Community 75"
Cohesion: 0.36
Nodes (1): NetworkMonitor

### Community 76 - "Community 76"
Cohesion: 0.36
Nodes (7): bcrypt, getDepartmentName(), main(), prisma, { PrismaClient }, processTestParameters(), seedLimsFormulasAndConfigurations()

### Community 77 - "Community 77"
Cohesion: 0.25
Nodes (8): _c(), Fc(), gt(), ks(), ni(), Qe(), rc(), text()

### Community 78 - "Community 78"
Cohesion: 0.25
Nodes (8): as(), Br(), cs(), Ct(), getAllQueryCallbacks(), isEmpty(), ps(), ss()

### Community 79 - "Community 79"
Cohesion: 0.25
Nodes (8): gc(), no(), Pn(), po(), vr(), wr(), ye(), yl()

### Community 80 - "Community 80"
Cohesion: 0.25
Nodes (6): calculateDifferentialSummary(), DLC_DEFINITIONS, { calculateDifferentialSummary }, params, values1, values2

### Community 81 - "Community 81"
Cohesion: 0.48
Nodes (6): formatDate(), GET(), getReferenceRange(), isOutOfRange(), isQualitativeAbnormal(), numberToWords()

### Community 82 - "Community 82"
Cohesion: 0.29
Nodes (7): ce(), el(), eo(), getPrintWidth(), mo(), No(), values()

### Community 83 - "Community 83"
Cohesion: 0.29
Nodes (7): be(), es(), getGlobalOmit(), shouldApplyGlobalOmit(), Ve(), xo(), za()

### Community 84 - "Community 84"
Cohesion: 0.29
Nodes (4): resF, resM, valuesFemale, valuesMale

### Community 85 - "Community 85"
Cohesion: 0.29
Nodes (3): inputValues, regPayload, valuesMap

### Community 86 - "Community 86"
Cohesion: 0.43
Nodes (5): GET(), POST(), PUT(), serializeSingleTest(), serializeTests()

### Community 89 - "Community 89"
Cohesion: 0.53
Nodes (5): calculateDifferentialSummary(), DifferentialHeaderBadge(), DLC_DEFINITIONS, isDifferentialHeader(), validateDifferentialOnSave()

### Community 90 - "Community 90"
Cohesion: 0.53
Nodes (4): GET(), POST(), PUT(), serializeData()

### Community 91 - "Community 91"
Cohesion: 0.47
Nodes (4): GET(), PUT(), registrationSchema, serializeData()

### Community 92 - "Community 92"
Cohesion: 0.33
Nodes (6): getGlobalOmit(), jc(), Kr(), nt(), Pe(), shouldApplyGlobalOmit()

### Community 93 - "Community 93"
Cohesion: 0.40
Nodes (2): parseNullableString(), POST()

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

### Community 95 - "Community 95"
Cohesion: 0.40
Nodes (3): {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
}, Prisma, PrismaClient

### Community 96 - "Community 96"
Cohesion: 0.40
Nodes (1): transporter

### Community 97 - "Community 97"
Cohesion: 0.70
Nodes (4): formatDate(), formatDateTime(), GET(), numberToWords()

### Community 98 - "Community 98"
Cohesion: 0.40
Nodes (2): DEFAULT_COLUMN_ORDER, DEFAULT_PDF_SETTINGS

### Community 99 - "Community 99"
Cohesion: 0.50
Nodes (4): main(), prisma, { PrismaClient }, processTestParameters()

### Community 100 - "Community 100"
Cohesion: 0.40
Nodes (5): AnyNull, DbNull, JsonNull, NullTypesEnumValue, ObjectEnumValue

### Community 101 - "Community 101"
Cohesion: 0.40
Nodes (5): DriverAdapter, ErrorCapturingDriverAdapter, Queryable, Transaction, TransactionContext

### Community 102 - "Community 102"
Cohesion: 0.50
Nodes (4): generateRandomSuffix(), main(), prisma, { PrismaClient }

### Community 103 - "Community 103"
Cohesion: 0.40
Nodes (3): valuesMap1, valuesMap2, valuesMap3

### Community 104 - "Community 104"
Cohesion: 0.67
Nodes (2): GET(), serializeRegistration()

### Community 105 - "Community 105"
Cohesion: 0.50
Nodes (4): ErrorWithBatchIndex, NotFoundError, PrismaClientKnownRequestError, PrismaClientUnknownRequestError

### Community 106 - "Community 106"
Cohesion: 0.67
Nodes (2): GET(), serializeData()

### Community 107 - "Community 107"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 108 - "Community 108"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 109 - "Community 109"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 110 - "Community 110"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 111 - "Community 111"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 112 - "Community 112"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 113 - "Community 113"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 114 - "Community 114"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 115 - "Community 115"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 116 - "Community 116"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 117 - "Community 117"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 118 - "Community 118"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 119 - "Community 119"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 120 - "Community 120"
Cohesion: 0.50
Nodes (2): sampleReg, url

### Community 121 - "Community 121"
Cohesion: 0.50
Nodes (2): prisma, { PrismaClient }

### Community 122 - "Community 122"
Cohesion: 1.00
Nodes (2): POST(), PUT()

### Community 123 - "Community 123"
Cohesion: 1.00
Nodes (2): GET(), processTestParameters()

### Community 124 - "Community 124"
Cohesion: 1.00
Nodes (2): callGeminiModels(), POST()

## Knowledge Gaps
- **3370 isolated node(s):** `quickRanges`, `filter`, `COMMON_LAB_UNITS`, `DLC_DEFINITIONS`, `menuButtonStyle` (+3365 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 68`** (1 nodes): `SyncManager`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (1 nodes): `AppDatabase`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `NetworkMonitor`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 93`** (2 nodes): `parseNullableString()`, `POST()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 96`** (1 nodes): `transporter`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 98`** (2 nodes): `DEFAULT_COLUMN_ORDER`, `DEFAULT_PDF_SETTINGS`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (2 nodes): `GET()`, `serializeRegistration()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (2 nodes): `GET()`, `serializeData()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 107`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 108`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 109`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 110`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 111`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 112`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 113`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 114`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 115`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 116`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 117`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 118`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 119`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 120`** (2 nodes): `sampleReg`, `url`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 121`** (2 nodes): `prisma`, `{ PrismaClient }`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 122`** (2 nodes): `POST()`, `PUT()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 123`** (2 nodes): `GET()`, `processTestParameters()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 124`** (2 nodes): `callGeminiModels()`, `POST()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `_d()` connect `Community 1` to `Community 2`, `Community 4`, `Community 100`, `Community 101`, `Community 105`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Why does `SyncManager` connect `Community 68` to `Community 8`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `AppDatabase` connect `Community 69` to `Community 8`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `quickRanges`, `filter`, `COMMON_LAB_UNITS` to the rest of the system?**
  _3370 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0006884681583476765 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.00625 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.014983518130056937 - nodes in this community are weakly interconnected._