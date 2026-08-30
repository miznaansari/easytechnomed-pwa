# Project Memory & Architectural Knowledge Base

## 1. Project Overview
- **Name**: EasyTechnoMed PWA / LIMS (Laboratory Information Management System)
- **Current Version**: `v3.1.32`
- **Framework**: Next.js (App Router), React 19, Material-UI (MUI v7), Dexie.js (v4.4+), Prisma ORM, MySQL, pdf-lib, qrcode.









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


### B. Client-Side Offline PDF & Bill Print Engine (`lib/offline/print/`)
- **Report PDF Generation (`lib/offline/print/reportPdfGenerator.js` & `lib/offline/offlinePdfGenerator.js`)**:
  - Uses browser-compatible `pdf-lib` to generate identical pathology report PDFs locally in 0ms from IndexedDB (`db.registrations`, `db.patientResults`, `db.testParameters`, `db.workspacePdf`, `db.doctors`).
  - Embeds 100% offline QR codes generated locally via `lib/offline/print/qrGenerator.js` pointing to public encrypted verification route `/q?v=...`.
  - Completely eliminates server-side DNS lookups (`ERR_NAME_NOT_RESOLVED`) by generating in-memory `Blob` and opening via `URL.createObjectURL(blob)`.
- **Bill / Receipt Generation (`lib/offline/print/billHtmlGenerator.js` & `lib/offline/offlinePrint.js`)**:
  - Itemizes investigations, calculated payments, number-to-words currency, and triggers print dialogs locally without server reliance.


### C. Synchronization Engine (`lib/offline/sync/syncManager.js` & `modelRegistry.js`)
- **Flags**:
   - `isDirty: true` — Newly created locally, pending POST sync.
   - `isModified: true` — Existing record edited locally, pending PUT sync.
   - `isDirty: false, isModified: false, isError: false` (or `0`) — Synced with server.
- **Sync Workflow**:
   - `processPostOperations`: Pushes locally created dirty records via POST (handles `registrations`, `registrationPayments`, `doctors`, `tests`, etc.).
   - `processPutOperations`: Pushes locally modified records via PUT (numbers are sanitized/coerced with `parseFloat`/`parseInt`).
   - `processPendingPatientResults`: Batch upserts results to `/api/registrations/[id]/results`.
   - `markSynced`: Clears dirty/modified flags on Dexie records after server confirmation.
   - `Registration ID Cascade`: When server assigns new authoritative ID to a registration, cascades ID updates to `patientResults`, `registrationTests`, and `registrationPayments` in Dexie.
- **401 Unauthorized Interception**:
  - When sync endpoints return `401 Unauthorized`, `triggerAuthRequired()` fires `easytechnomed:auth-required`.
  - Opens `ReLoginModal.jsx`, takes password, posts to `/api/auth/login`, saves new session, and resumes sync.

### D. Real-Time Reactivity (`Dexie.liveQuery`)
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
| `v3.1.32` | 2026-08-30 | Fix Auto-Save Race Condition on Test Report Completion: When user clicks "Save Results & Complete", immediately clears pending auto-save debounce timers and aborts in-flight draft requests; Added DB-level status check in `resultEntry.jsx` ensuring that subsequent auto-saves never overwrite or revert an already `"Completed"` status back to `"Pending"`. |
| `v3.1.31` | 2026-08-30 | Fix Redundant Multi-API Calls on Report Update: Excluded `patientResults` from individual row-by-row `processPostOperations()` and `processPutOperations()` in `lib/offline/sync/syncManager.js`; Ensured all parameter values, notes, and report status for a patient are synced in exactly 1 consolidated batch HTTP request via `processPendingPatientResults()` instead of firing 10+ separate requests per parameter. |
| `v3.1.30` | 2026-08-30 | Fix Premature "Completed" Registration Status & Desktop/Mobile Drawer Click Sync: Corrected default registration status in `registration/page.js` to always remain `"Pending"` regardless of whether the patient paid the full amount; Synchronized MUI media query evaluation with `{ noSsr: true }` and client screen width (`window.innerWidth >= 900`) in `AdminLayoutClient.js` for instant 1-click drawer toggle on both desktop & mobile. |
| `v3.1.29` | 2026-08-30 | Fix First-Load Drawer Opening Delay: Added `prevPathnameRef` guard in `AdminLayoutClient.js` to prevent the route change `useEffect` from triggering on initial mount and resetting `mobileOpen` back to `false` during the first user tap. |
| `v3.1.28` | 2026-08-30 | Fix Mobile Drawer 1-Tap Opening: Disabled MUI modal restore focus and auto-focus traps (`disableRestoreFocus`, `disableAutoFocus`, `disableEnforceFocus`) that intercepted initial mobile tap events; Expanded touch target area (`minWidth: 44, minHeight: 44, touchAction: manipulation`) and added direct `window.innerWidth < 900` fallback detection for instant 100% 1-tap mobile drawer response. |
| `v3.1.27` | 2026-08-30 | Fix Mobile Drawer Multi-Tap Issue: Removed fragile `isClosing` transition locks in `AdminLayoutClient.js` that previously caused the mobile hamburger menu icon (3-lines) to require 2-3 clicks; Enabled instant 1st-tap drawer open/close reactivity with automatic route-change auto-close. |
| `v3.1.26` | 2026-08-30 | Fix ReferenceError for Dexie db in `AdminLayoutClient.js`: Added missing `import db from "@/lib/offline/db"` for local admin hydration and missing data verification. |
| `v3.1.25` | 2026-08-30 | Graceful IndexedDB Missing Data Recovery & Non-blocking In-App Re-Login: Built automatic background data restoration in `AdminLayoutClient.js`; If IndexedDB records are missing and user is online, triggers silent background bootstrap without full page reloads; If offline and local data is missing, displays a non-blocking `DataMissingWarning` alert and `ReLoginModal` enabling 1-click credential re-authentication and sync recovery without infinite reload loops. |
| `v3.1.24` | 2026-08-30 | Fix ReferenceError for permissions destructuring in `dashboard/page.js`: Destructured `{ hasPermission, role, permissions = [] }` from `useAdminPermissions()`. |
| `v3.1.23` | 2026-08-30 | Resolved Infinite Redirect Loop on Dashboard & Root: Fixed permissions check in `dashboard/page.js` where string-based `role: "Admin"` was incorrectly parsed as an empty object causing false `hasDashboardView = false` unauthorized redirect bounce back to login; Explicitly whitelisted super roles (`Admin`, `Owner`) without redirect interference. |
| `v3.1.22` | 2026-08-30 | PWA Install Prompt on Login with Device-Specific Guides: Built `components/pwa/PWAInstallModal.jsx` that automatically triggers when a user logs in (via `pwa_show_install_on_login` flag in `LoginPageClient.js`); Checks standalone display mode and NEVER prompts if PWA is already installed; Provides simple, visual instructions tailored for iOS (Safari Share -> Add to Home Screen), Android (Direct Install App CTA), and Windows/Mac Desktop (Native Desktop Install CTA); Added manual "Install App" triggers in top bar and profile menu for browser sessions. |
| `v3.1.21` | 2026-08-30 | Customer Auth Modernization & Forgot Password Integration: Upgraded `app/(customer)/auth` to the latest UI from `pathlab`; Integrated modal-based Forgot Password flow in `LoginPageClient.js` connected to `/api/auth/forgot-password`; Added dedicated secure password reset page `/auth/reset-password` (`ResetPasswordClient.js`) and API `/api/auth/reset-password`; Updated `RegisterPageClient.js` with modern MUI inputs and 5-day trial header; Configured EasyTechnoMed branded reset emails in `lib/mail.js` while maintaining offline-first session caching and sync bootstrap. |
| `v3.1.18` | 2026-08-30 | Fixed Bill PDF Bottom Layout & Vector Barcode: Replaced the fixed grey box with true Code 39 vector barcode lines drawn in `billPdfGenerator.js`; Fixed text clipping on registration number; Perfectly centered QR code captions and balanced the Authorized Signatory section across the footer. |
| `v3.1.17` | 2026-08-30 | Native PDF Format for Money Receipt & Bill Print: Built `generateOfflineBillPdf()` with `pdf-lib` in `lib/offline/print/billPdfGenerator.js`; Bills and Money Receipts now generate and open as genuine `application/pdf` binary documents in the browser's built-in PDF viewer with zoom, download, and print controls matching the medical test report PDF experience. |
| `v3.1.16` | 2026-08-30 | 1:1 Offline Money Receipt & Bill Print Engine: Fully replicated the official `/api/print-bill/[registrationId]` HTML/CSS print template into client-side `lib/offline/print/billHtmlGenerator.js`; Includes exact laboratory header branding, patient info grid, investigations table, financial calculations, barcode (`Libre Barcode 39`), report & payment QR codes (`/q?v=...`), and authorized signatory; Integrated `openOfflineBillPrint()` into `MoneyRecipt.jsx` for instant 0ms offline receipt printing. |
| `v3.1.15` | 2026-08-30 | Money Receipt "Other Payments" Display Fix: Loaded local `db.registrationPayments` records in `loadReceiptDetails()` and added fallback to the initial registration payment (`receivedAmount > 0`), ensuring initial and chunk payments always display in desktop and mobile receipt dialogs instead of showing "No payments recorded". |
| `v3.1.14` | 2026-08-30 | Interactive Sync Conflict & Error Resolution UI: Added "Resolve All", "Resolve & Retry", and "Clear Errors" controls in `SyncIndicator.jsx`; Implemented `clearAllSyncErrors()` and `resolveSyncError()` in `lib/offline/db.js` and `lib/offline/sync/syncManager.js` allowing users to cleanly clear conflict states and force-resolve failed queue records with 1 click. |
| `v3.1.13` | 2026-08-30 | Fixed Payment Sync & Idempotency: Added idempotency check in `/api/registrations/[id]/payment` so that payments already recorded during initial registration creation or prior syncs return success instead of `400 Bad Request` ("Received amount cannot exceed net due amount of ₹0.00"); Updated `syncManager.js` to automatically mark initial payments clean upon successful registration creation. |
| `v3.1.12` | 2026-08-30 | Fixed slow load and blocking loader on Registration page (`/registration`): Removed full-screen blocking `CircularProgress` on initial mount; Made 10,000+ Indian cities dataset from `country-state-city` load lazily in the background instead of locking the JavaScript thread during module evaluation; Page structure and form fields now render instantly with 0ms delay. |
| `v3.1.11` | 2026-08-30 | Removed redundant `/api/profile` background fetches on page navigations: Removed `fetch("/api/profile")` from `useAdminPermissions()` in `lib/clientAuth.js`; Permissions and session state now resolve 100% offline-first from local `sessionStorage` and IndexedDB with 0ms latency and 0 network requests on page switches. |
| `v3.1.10` | 2026-08-30 | Test Report Auto-Save & Sync Deduplication: Grouped `patientResults` by `registrationId` in `getAllPendingRecords()` and `getPendingCount()` in `lib/offline/db.js` so that multiple parameter auto-saves count as 1 logical pending report; Updated `processPendingPatientResults()` in `lib/offline/sync/syncManager.js` to send the single latest consolidated snapshot of all parameters & notes to `/api/registrations/:id/results` and atomically clear all parameters and registration status flags; Skipped redundant separate registration PUT calls during test report syncing. |
| `v3.1.5` | 2026-08-30 | Removed hardcoded dummy data ("PathLab Admin", "admin@pathlab.local", "admin@pathlab.com", "System Admin"): Removed `DEFAULT_OFFLINE_ADMIN` in `lib/auth/offlineAuth.js` so only authentic sessions from login/IndexedDB are loaded; Updated `AdminLayoutClient.js` profile avatar, user name, and email displays to use live authenticated admin attributes only. |
| `v3.1.4` | 2026-08-30 | Production release with database versioning, "What's New" PWA update dialog, cache-busting hard reload engine, and `/` landing page session expired suppression. |
| `v3.1.3` | 2026-08-30 | Suppressed "Session Expired" / `ReLoginModal` popup on root `/` and auth routes: Added `usePathname` route guards in `OfflineProvider.jsx` and `ReLoginModal.jsx`; Prevented background sync bootstrap attempts when unauthenticated on public landing/login pages; Fixed MUI icon import in `VersionUpdateNotifier.jsx`. |
| `v3.1.2` | 2026-08-30 | Database-Driven App Version Tracking, "What's New" Changelog Display & PWA Hard Refresh: Added `AppVersion` model in MySQL Prisma + `appVersions` Dexie store; Implemented `/api/version` endpoint with auto-seeding; Built `<VersionUpdateNotifier />` client modal displaying update highlights ("Naya kya aaya" list) and one-click "Hard Refresh & Update Now" button with complete CacheStorage and ServiceWorker cache purge (`SKIP_WAITING` + `CLEAR_ALL_CACHES`). |
| `v3.1.1` | 2026-08-29 | Complete client-side storage & IndexedDB purge on user logout: Added `db.clearAllData()` in `lib/offline/db.js` clearing all 17+ Dexie tables (`workspaces`, `admins`, `doctors`, `tests`, `parameters`, `registrations`, `patientResults`, `workspacePdf`, etc.); Updated `clearLocalSession()` in `lib/auth/offlineAuth.js` to execute full IndexedDB wipe, `sessionStorage.clear()`, and `localStorage.clear()` (retaining only `etm_logged_out: 1`); Integrated in `AdminLayoutClient`, `ExpiredPlanView`, `UserApproveTable`, and `UnsyncedLogoutModal`. |
| `v3.0.23` | 2026-08-29 | Integrated latest high-performance Dashboard UI design from `pathlab` into `new/components`; Updated Header Bar with minimal direct styling & button RangeSelector, 4 Core Metric cards (Total Patients, Pending Tests with warning badge, Completed Tests, Collections with due balance badge), Patient Volume BarChart, Test Department Split Donut + progress bar breakdown, and Recent Activity Breakdown table with 0ms IndexedDB offline-first calculation. |
| `v3.0.21` | 2026-08-28 | Fixed iOS Safari WebKit error *"The response served by the ServiceWorker has a redirect"* by sanitizing all redirected fetch/cache responses in `public/sw.js` (v11); Fully optimized `site.webmanifest`, `manifest.json`, and `app/layout.js` with `apple-touch-icon.png` (180x180), `startupImage`, and Apple PWA standalone headers. |
| `v3.0.20` | 2026-08-28 | Fixed iOS Safari Service Worker registration in `PWARegister.js` for instant hydration (`document.readyState`), added persistent storage grant request (`navigator.storage.persist()`), and added web app manifest metadata in `layout.js` & `manifest.json`. |
| `v3.0.18` | 2026-08-28 | Enforced `text-sm` and anti-zoom viewport settings across `LoginPageClient.js`, `RegisterPageClient.js`, and `Input.js` to eliminate unexpected mobile zoom on field focus. |
| `v3.0.17` | 2026-08-28 | 100% Ditto copy offline PDF generator in `reportPdfGenerator.js` matching `/api/print-report` feature-by-feature; Full support for `framePdfBase64`/`framePdfBytes`, CBC sorting, hierarchical parent-child test parameters, dynamic column widths, and markdown summary remarks. |
| `v3.0.16` | 2026-08-28 | Fixed `handleExecutePrint` async definition in `test-report/page.js`; Integrated `framePdfBase64` & `framePdfBytes` letterhead templates in `reportPdfGenerator.js`. |
| `v3.0.15` | 2026-08-28 | Implemented 100% Client-Side Offline PDF Report & Money Receipt Print Engine (`pdf-lib` + IndexedDB); Fixed `ERR_NAME_NOT_RESOLVED` on print actions when offline; Integrated seamless offline PDF generation in `test-report`, `showResult`, `showResultMobile`, `MoneyRecipt`, and `doctor-summary`. |
| `v3.0.12` | 2026-08-28 | Unified Navbar Sync Indicator with full PWA standalone support; Enhanced popover with Offline Information Banner, PWA/Web status, queued changes counter, and zero-API offline protection. |
| `v3.0.10` | 2026-08-28 | Enforced strict zero-API offline guards across `syncManager.js` and `OfflineProvider.jsx`; Filtered out network disconnect errors so offline mode operates with zero network traffic and zero red error banners. |
| `v3.0.9` | 2026-08-28 | Fixed auto-redirect loop on login page after logout; Guarded `LoginPageClient.js` and `offlineAuth.js` with `etm_logged_out` flag so logged-out users stay securely on the login screen. |
| `v3.0.7` | 2026-08-28 | Fixed logout flow in `AdminLayoutClient.js` with hard window redirect to `/auth/login` and offline safety fallback. |
| `v3.0.6` | 2026-08-28 | Fixed missing `useEffect` import in `SyncIndicator.jsx` that was triggering `ReferenceError: useEffect is not defined` inside `AdminLayoutClient`. |
| `v3.0.5` | 2026-08-28 | Added direct native `window.addEventListener('online'/'offline')` reactive subscription inside `SyncIndicator.jsx` to guarantee instantaneous icon & popover switch to Offline Mode when internet disconnects. |
| `v3.0.4` | 2026-08-28 | Production deployment & git synchronization of native in-built browser online event architecture; Knowledge graph refreshed (5,908 nodes, 8,928 edges). |
| `v3.0.3` | 2026-08-28 | Switched `networkMonitor` to 100% native browser events (`navigator.onLine`, `window.online`/`offline`) with 0ms latency; Removed noisy `/api/auth/check` 15s polling heartbeat to eliminate false network errors when offline. |
| `v3.0.2` | 2026-08-28 | Enforced automated version bump, `memory.md` sync, and Graphify AST refresh protocol in `AGENTS.md` and agent rules; MySQL schema confirmed. |
| `v3.0.1` | 2026-08-28 | Unified Navbar Sync Indicator online state with Popover; Switched heartbeat to `GET` for ServiceWorker resilience; Integrated Graphify AST Knowledge Graph (5,906 nodes, 8,924 edges); Configured Dexie `liveQuery` reactive table updates; Standardized Zod numeric coercion (`z.coerce.number()`); Enforced MySQL + IndexedDB memory rules. |
| `v3.0.0` | 2026-08-27 | Initial dual-layer offline sync architecture release with Dexie `EasyTechnoMedOfflineDB` and Prisma ORM. |










