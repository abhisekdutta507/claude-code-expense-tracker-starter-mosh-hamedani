---
name: Recurring Patterns and Anti-patterns
description: Known bugs, anti-patterns, and performance issues identified in first review (2026-04-20)
type: project
---

## Identified issues (first review, 2026-04-20)

### Bugs
- `App.jsx` line 14: seed transaction "Freelance Work" is typed as `"expense"` but categorized as `"salary"` — likely should be `"income"`. This causes the Summary balance to read $3,430 instead of the expected $4,230.
- `TransactionForm.jsx` line 13: validation only checks truthiness of `amount`; `parseFloat("0")` is falsy in the original check path but `"0"` is not an empty string — actually `!amount` when amount is `"0"` is false (OK), but `parseFloat` of a non-numeric string like `"abc"` produces `NaN` which is stored silently.
- `App.jsx` lines 21/25: `handleAdd` and `handleDelete` use stale-closure array reference (`...transactions`) instead of functional updater `prev => [...]` — can cause dropped updates if called in rapid succession.
- `TransactionList.jsx` line 54: `window.confirm` blocks the main thread and is unavailable in some embedded/WebView environments; inline arrow creates a new function on every render.
- `SpendingChart.jsx` line 54: `Cell` uses array index as `key`, not a stable identifier.

### Performance
- `Summary.jsx` lines 2–10: two chained filter+reduce calls on every render, no `useMemo`.
- `SpendingChart.jsx` lines 6–13: reduce + Object.entries on every render, no `useMemo`.
- `App.jsx` lines 20–25: `handleAdd` and `handleDelete` recreated on every render; not wrapped in `useCallback`.
- `TransactionList.jsx` lines 9–11: filter computation is inline on every render with no memoization.

### Architecture
- `categories` constant duplicated verbatim in `TransactionForm.jsx` line 3 and `TransactionList.jsx` line 3 — should be extracted to `src/constants/categories.js` or `src/categories.js`.
- `App.css` has a duplicate section for `.spending-chart h2` and `.section-title` that both define the same styles (lines 131–147) — the `.section-title` rule is unused in JSX.
- No `empty state` rendering in `TransactionList` when filtered results are empty.
- `TransactionForm` resets category to `"food"` after submit regardless of what the user last selected — inconsistent UX.

### Status
- None of the above have been fixed as of this review.
