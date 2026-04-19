# Expense Tracker

> This is the starter project used in my [Claude Code course](https://codewithmosh.com/p/claude-code).

A basic expense tracker app built with React. It intentionally has a bug, poor UI, and messy code — all of which we fix together throughout the course.

## Getting Started

```bash
npm install
npm run dev
```

Then open your browser at `http://localhost:5173`.

## Claude Code Commands

#### Set the AI model for Claude Code

```bash
/model
```

#### Setup terminal for multiline commands

```bash
/terminal-setup
```

#### Initialize Claude Code memory in the project's root

```bash
/init
```

#### Change Claude modes through CLI

Press SHIFT + TAB from Keyboard to toggle through different modes.

- Normal Mode
- Plan Mode
- Auto-Accept Mode
- Bypass Mode

#### How much will it cost?

If you are using Pay as you go API:

```bash
/cost
```

#### How can we reduce cost?

##### /clear Command

`/clear` starts a fresh conversation with an empty context, completely wiping your conversation history. This is useful when you're wrapping up a task and moving on to something entirely different.

##### /compact Command

`/compact` summarizes your entire conversation history to free up context space, then replaces the full message history with that condensed summary. Instead of erasing everything like `/clear` does, it lets you preserve continuity while reducing token usage.
