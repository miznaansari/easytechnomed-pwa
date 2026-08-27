# Project Memory & Architectural Knowledge Base

## 1. Project Overview
- **Name**: EasyTechnoMed PWA / LIMS (Laboratory Information Management System)
- **Current Version**: `v3.0.6`
- **Framework**: Next.js (App Router), React 19, Material-UI (MUI v7), Dexie.js (v4.4+), Prisma ORM, MySQL.





- **Purpose**: Diagnostic laboratory & clinic management system supporting offline-first operations, patient registration, sample collection, test report generation, print engine, financial receipting, and background synchronization.


---

## 2. Core Architecture & Offline-First Design

### A. Dual-Layer Storage Architecture
1. **Local Layer (IndexedDB via Dexie.js)**:
   - Database name: `EasyTechnoMedOfflineDB` (defined in `lib/offline/db.js`).
   - Tables: `workspaces`, `admins`, `doctors`, `tests`, `parameters`, `testParameters`, `testDepartments`, `testFormulas`, `interpretationRules`, `registrations`, `registrationTests`, `patientResults`, `registrationPayments`, `workspacePdf`, `offlineSession`, `syncLog`.
   - UI reads and mutations execute directly against IndexedDB (0ms latency).

2. **Cloud Layer (MySQL via Prisma)**:
   - Server-side authoritative storage with multi-tenant workspace isolation.


### B. Synchronization Engine (`lib/offline/sync/syncManager.js` & `modelRegistry.js`)
- **Flags**:
  - `isDirty: true` — Newly created locally, pending POST sync.
  - `isModified: true` — Existing record edited locally, pending PUT sync.
  - `isDirty: false, isModified: false, isError: false` (or `0`) — Synced with server.
- **Sync Workflow**:
  - `processPostOperations`: Pushes locally created dirty records via POST.
  - `processPutOperations`: Pushes locally modified records via PUT (numbers are sanitized/coerced with `parseFloat`/`parseInt`).
  - `processPendingPatientResults`: Batch upserts results to `/api/registrations/[id]/results`.
  - `markSynced`: Clears dirty/modified flags on Dexie records after server confirmation.
- **401 Unauthorized Interception**:
  - When sync endpoints return `401 Unauthorized`, `triggerAuthRequired()` fires `easytechnomed:auth-required`.
  - Opens `ReLoginModal.jsx`, takes password, posts to `/api/auth/login`, saves new session, and resumes sync.

### C. Real-Time Reactivity (`Dexie.liveQuery`)
- Pages like `test-report/page.js` use `liveQuery(() => db.registrations.filter(...).toArray())`.
- Provides instant UI updates without whole-page reloading or loading flash when background sync or local edits occur.

---

## 3. Key Components & File Map

### Offline & Sync Core
- `lib/offline/db.js`: Dexie schema, offline CRUD helpers (`insertOffline`, `updateOffline`, `deleteOffline`, `markSynced`).
- `lib/offline/network.js`: Network connectivity monitor with 15s heartbeat check to `/api/auth/check`.
- `lib/offline/sync/syncManager.js`: Central sync coordinator with queueing, 401 handling, and state subscriptions.
- `lib/offline/sync/modelRegistry.js`: Model definitions, API endpoint mappings, and `serializePost`/`serializePut` transformers.
- `components/providers/OfflineProvider.jsx`: Context provider maintaining online status, sync status, and `ReLoginModal`.
- `components/offline/SyncIndicator.jsx`: Navbar sync indicator popover and status icon.
- `components/offline/SyncStatusIcon.jsx`: Per-row table sync indicator (Green check for synced, Amber upload/clock for pending, Blue spinner for syncing, Red error for failed).
- `components/offline/ReLoginModal.jsx`: Offline re-authentication modal for expired sessions.

### Application Pages & Modules
- `app/(customer)/(dashboard)/registration/page.js`: Patient registration form, payment recording, barcode generation, WhatsApp integration.
- `app/(customer)/(dashboard)/test-report/page.js`: Test report list, reactive `liveQuery` table, date filtering, print dialog, action menus.
- `app/(customer)/(dashboard)/test-report/component/resultEntry.jsx`: Test result entry dialog, range evaluation, and formula calculation.
- `app/(customer)/(dashboard)/test-report/component/showResult.jsx`: Result preview drawer.
- `app/(customer)/(dashboard)/test-report/component/MoneyRecipt.jsx`: Money receipt generator and payment drawer.
- `app/api/auth/check/route.js`: Session validation and `HEAD` heartbeat endpoint.
- `app/api/registrations/route.js`: Registration list (GET) and creation (POST) with `z.coerce.number()`.
- `app/api/registrations/[id]/route.js`: Registration detail (GET), update (PUT), delete (DELETE).
- `app/api/registrations/[id]/results/route.js`: Test results batch save/update (POST & PUT).
- `app/api/offline/sync/route.js`: Offline data sync bootstrap and delta sync endpoint.

---

## 4. Critical Conventions & Rules

1. **Zod Validation**: Always use `z.coerce.number()` for numeric fields to safely handle numbers sent as strings.
2. **Safe Error Access**: In Zod catch blocks, access `(error.issues && error.issues[0]?.message) || (error.errors && error.errors[0]?.message) || error.message` (compatible with Zod 4).
3. **No Unnecessary Component Reloads**: Do not attach `sync-state-change` listeners to trigger `setLoading(true)` in list views; rely on Dexie's reactive `liveQuery`.
4. **Method Handlers**: Always export both `POST` and `PUT` where update operations might be performed by sync engines.
5. **Heartbeat Endpoints**: Ensure `/api/auth/check` supports `HEAD` requests for lightweight connectivity checks.
6. **IndexedDB-First Forms & UI Operations**: ALL UI forms (patient registration, doctor creation, tests, results entry, money receipts, settings) MUST write directly to IndexedDB (`insertOffline` / `updateOffline` / `deleteOffline`). Forms NEVER make direct blocking API calls to the cloud on user submit.
7. **Sync Engine Cloud Decider**: Background `syncManager` (`/api/offline/sync` & `modelRegistry.js`) decides whether to perform `POST` (new `isDirty` records), `PUT` (edited `isModified` records), or `GET` (cloud deltas) to synchronize with MySQL Prisma.
8. **Version Bump, Graphify Refresh & Memory Update**: ALWAYS at the end of every completed task or feature change:
   - Increment the `package.json` version (patch bump).
   - Update `memory.md` with the new version and changelog entry.
   - Run Graphify update (`npm run graphify:update` / `npx @sentropic/graphify update .`) to keep the graph and project version synchronized.

---

## 5. Version History & Changelog

| Version | Date | Key Changes & Milestones |
| :--- | :--- | :--- |
| `v3.0.6` | 2026-08-28 | Fixed missing `useEffect` import in `SyncIndicator.jsx` that was triggering `ReferenceError: useEffect is not defined` inside `AdminLayoutClient`. |
| `v3.0.5` | 2026-08-28 | Added direct native `window.addEventListener('online'/'offline')` reactive subscription inside `SyncIndicator.jsx` to guarantee instantaneous icon & popover switch to Offline Mode when internet disconnects. |
| `v3.0.4` | 2026-08-28 | Production deployment & git synchronization of native in-built browser online event architecture; Knowledge graph refreshed (5,908 nodes, 8,928 edges). |
| `v3.0.3` | 2026-08-28 | Switched `networkMonitor` to 100% native browser events (`navigator.onLine`, `window.online`/`offline`) with 0ms latency; Removed noisy `/api/auth/check` 15s polling heartbeat to eliminate false network errors when offline. |
| `v3.0.2` | 2026-08-28 | Enforced automated version bump, `memory.md` sync, and Graphify AST refresh protocol in `AGENTS.md` and agent rules; MySQL schema confirmed. |
| `v3.0.1` | 2026-08-28 | Unified Navbar Sync Indicator online state with Popover; Switched heartbeat to `GET` for ServiceWorker resilience; Integrated Graphify AST Knowledge Graph (5,906 nodes, 8,924 edges); Configured Dexie `liveQuery` reactive table updates; Standardized Zod numeric coercion (`z.coerce.number()`); Enforced MySQL + IndexedDB memory rules. |
| `v3.0.0` | 2026-08-27 | Initial dual-layer offline sync architecture release with Dexie `EasyTechnoMedOfflineDB` and Prisma ORM. |






