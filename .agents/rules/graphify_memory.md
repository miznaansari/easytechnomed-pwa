# Graphify & Knowledge Base Context Instructions

1. **Context Priority**:
   - Whenever asked any question about codebase structure, component relationships, APIs, data models, or offline sync flows:
   - Always reference `memory.md` and `.graphify/graph.json`.
   
2. **Graph Intelligence & Architecture**:
   - Use Graphify's AST and node graph to trace callers, callees, and dependencies without full-file hallucinations.
   - Respect the offline-first LIMS architecture (Dexie IndexedDB -> Prisma MySQL).

3. **IndexedDB-First Forms & Sync Decider**:
   - ALL forms and UI mutations must write/read directly to Dexie IndexedDB (0ms latency).
   - Background `syncManager` (`/api/offline/sync`) solely determines `POST` (for `isDirty`), `PUT` (for `isModified`), and `GET` (for cloud sync deltas).


