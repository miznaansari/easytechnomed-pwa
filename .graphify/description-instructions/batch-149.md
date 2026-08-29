# Node Description Batch 150 of 150

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

- "ui_card_card": "Card()" | kind=code-symbol | source=components/ui/Card.js:L3 | neighbors=[Card.js]
- "ui_card_cardcontent": "CardContent()" | kind=code-symbol | source=components/ui/Card.js:L44 | neighbors=[Card.js]
- "ui_card_carddescription": "CardDescription()" | kind=code-symbol | source=components/ui/Card.js:L33 | neighbors=[Card.js]
- "ui_card_cardfooter": "CardFooter()" | kind=code-symbol | source=components/ui/Card.js:L52 | neighbors=[Card.js]
- "ui_card_cardheader": "CardHeader()" | kind=code-symbol | source=components/ui/Card.js:L14 | neighbors=[Card.js]
- "ui_card_cardtitle": "CardTitle()" | kind=code-symbol | source=components/ui/Card.js:L22 | neighbors=[Card.js]
- "ui_dialog_dialog": "Dialog()" | kind=code-symbol | source=components/ui/Dialog.js:L4 | neighbors=[Dialog.js]
- "ui_dropdown_dropdown": "Dropdown()" | kind=code-symbol | source=components/ui/Dropdown.js:L5 | neighbors=[Dropdown.js]
- "ui_dropdown_dropdownitem": "DropdownItem()" | kind=code-symbol | source=components/ui/Dropdown.js:L45 | neighbors=[Dropdown.js]
- "ui_input_input": "Input" | kind=code-symbol | source=components/ui/Input.js:L3 | neighbors=[Input.js]
- "ui_label_label": "Label()" | kind=code-symbol | source=components/ui/Label.js:L3 | neighbors=[Label.js]
- "ui_skeleton_skeleton": "Skeleton()" | kind=code-symbol | source=components/ui/Skeleton.js:L3 | neighbors=[Skeleton.js]
- "ui_table_table": "Table()" | kind=code-symbol | source=components/ui/Table.js:L3 | neighbors=[Table.js]
- "ui_table_tablebody": "TableBody()" | kind=code-symbol | source=components/ui/Table.js:L21 | neighbors=[Table.js]
- "ui_table_tablecell": "TableCell()" | kind=code-symbol | source=components/ui/Table.js:L51 | neighbors=[Table.js]
- "ui_table_tablehead": "TableHead()" | kind=code-symbol | source=components/ui/Table.js:L29 | neighbors=[Table.js]
- "ui_table_tableheader": "TableHeader()" | kind=code-symbol | source=components/ui/Table.js:L13 | neighbors=[Table.js]
- "ui_table_tablerow": "TableRow()" | kind=code-symbol | source=components/ui/Table.js:L40 | neighbors=[Table.js]
- "upload_frame_route_post": "POST()" | kind=code-symbol | source=app/api/settings/upload-frame/route.js:L5 | neighbors=[route.js]
- "userapprove_page_adminuserapprovepage": "AdminUserApprovePage()" | kind=code-symbol | source=app/(customer)/(dashboard)/userApprove/page.js:L8 | neighbors=[page.js]
- "userapprove_userapprovetable_userapprovetable": "UserApproveTable()" | kind=code-symbol | source=app/(customer)/(dashboard)/userApprove/UserApproveTable.js:L16 | neighbors=[UserApproveTable.js]
- "utils_debounce_debounce": "debounce()" | kind=code-symbol | source=app/utils/debounce.js:L1 | neighbors=[debounce.js]
- "verify_email_route_get": "GET()" | kind=code-symbol | source=app/api/authas/verify-email/route.js:L4 | neighbors=[route.js]
- "version_route_default_initial_changes": "DEFAULT_INITIAL_CHANGES" | kind=code-symbol | source=app/api/version/route.js:L6 | neighbors=[route.js]
- "version_route_get": "GET()" | kind=code-symbol | source=app/api/version/route.js:L14 | neighbors=[route.js]
- "version_route_post": "POST()" | kind=code-symbol | source=app/api/version/route.js:L81 | neighbors=[route.js]
- "version_versionupdatenotifier_compareversions": "compareVersions()" | kind=code-symbol | source=components/version/VersionUpdateNotifier.jsx:L30 | neighbors=[VersionUpdateNotifier.jsx]
- "version_versionupdatenotifier_versionupdatenotifier": "VersionUpdateNotifier()" | kind=code-symbol | source=components/version/VersionUpdateNotifier.jsx:L47 | neighbors=[VersionUpdateNotifier.jsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\Atif Bhai\new\components\.graphify\description-instructions\batch-149.json

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
