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

This is a single-component React app (Vite + React 19). All state and logic live in `src/App.jsx`:

- **State**: `transactions` array (id, description, amount, type, category, date) plus form and filter state
- **Summary**: income/expenses/balance computed inline via `reduce` — `amount` is stored as a string, causing string concatenation instead of numeric addition (intentional bug)
- **Filtering**: `filteredTransactions` derived synchronously from `filterType` and `filterCategory` state
- **Add form**: `handleSubmit` appends a new transaction; amount is stored as the raw string from the input

Styling is in `src/App.css` with CSS classes `income-amount`, `expense-amount`, and `balance-amount` for color-coding.
