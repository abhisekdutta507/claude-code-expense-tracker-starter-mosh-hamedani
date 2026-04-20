---
name: Project Architecture
description: File locations, component roles, state ownership, and key dependencies for the expense tracker app
type: project
---

Vite + React 19 SPA. All component files live directly in `src/` (not `src/components/`):

- `src/App.jsx` — root; owns `transactions` array state; provides `handleAdd` and `handleDelete` to children
- `src/Summary.jsx` — stateless; receives `transactions`; computes totals with reduce inline (no useMemo)
- `src/TransactionForm.jsx` — owns form state (description, amount, type, category); calls `onAdd` on submit
- `src/TransactionList.jsx` — receives `transactions` + `onDelete`; owns filter state locally; renders a `<table>`
- `src/SpendingChart.jsx` — receives `transactions`; uses recharts; computes expensesByCategory with reduce inline
- `src/App.css` — all styling; uses CSS custom properties (var(--accent), var(--income), etc.) defined elsewhere (index.css)
- `src/index.css` — CSS variable definitions and global reset

Transaction shape: `{ id, description, amount (number), type ("income"|"expense"), category, date (ISO string) }`

**Why:** Needed to locate files correctly — CLAUDE.md says `src/components/` but actual files are in `src/` directly.
**How to apply:** Always resolve file paths via Glob before reading; do not assume components subdirectory.
