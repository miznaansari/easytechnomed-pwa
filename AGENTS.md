<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Assistant Context & Memory Rules
- **Memory First**: Always consult `memory.md` and `.graphify/graph.json` before answering questions or making architectural changes.
- **Graphify Traversal**: Leverage the Graphify knowledge graph (`.graphify/`) and Graphify skill commands (`query`, `tree`, `explain`) to understand component relationships, dependency paths, and offline sync flows.
- **IndexedDB-First Forms & UI**: ALL forms, user inputs, reports, and data mutations MUST write and read directly from local IndexedDB (Dexie `EasyTechnoMedOfflineDB`) with 0ms latency. Forms must NEVER directly make blocking API requests on submit.
- **Sync Engine Decides Cloud Routing**: The background sync coordinator (`syncManager` & `/api/offline/sync`) solely determines and executes `POST` (for `isDirty` new records), `PUT` (for `isModified` records), and `GET` (for cloud deltas) to sync with MySQL Prisma.
- **Maintain Sync Integrity**: Adhere strictly to the dual-layer storage patterns and conventions recorded in `memory.md`.
- **Version Bump, Graphify Refresh & Memory Update On Complete**: ALWAYS at the end of completing code changes or features:
  1. Increment `package.json` version (e.g. `npm version patch --no-git-tag-version`).
  2. Record the new version and changelog entry in `memory.md`.
  3. Re-run Graphify update (`npm run graphify:update` / `npx @sentropic/graphify update .`) to keep the knowledge graph in sync.





