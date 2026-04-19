# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

No test suite is configured.

## Architecture

A Vite + React 19 app decomposed into four components:

- **`App.jsx`** — root component; owns the `transactions` array (id, description, amount, type, category, date) as the single source of truth and passes it down. Provides `handleAdd` callback to `AddTransaction`.
- **`Summary.jsx`** — receives `transactions`, computes `totalIncome`, `totalExpenses`, and `balance` via `reduce` internally.
- **`AddTransaction.jsx`** — manages its own form state (description, amount, type, category); calls `onAdd(transaction)` on submit; `amount` is stored as a `parseFloat` number.
- **`TransactionList.jsx`** — receives `transactions`, manages its own filter state (filterType, filterCategory) internally.

`categories` is a local constant duplicated in `AddTransaction` and `TransactionList` (not yet shared).

Styling is in `src/App.css` with CSS classes `income-amount`, `expense-amount`, and `balance-amount` for color-coding.
