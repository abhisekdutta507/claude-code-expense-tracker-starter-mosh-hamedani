# Expense Tracker

> Starter project for the [Claude Code course](https://codewithmosh.com/p/claude-code) by Mosh Hamedani.
> A React expense tracker intentionally built with a bug, rough UI, and messy code — fixed together throughout the course.

---

## Getting Started

```bash
npm install
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## Claude Code Reference

### Launch Claude CLI

```bash
# Start a new session
claude

# Resume a previous session
claude --resume
```

### Essential Commands

| Command | Description |
|---|---|
| `/model` | Set the AI model |
| `/terminal-setup` | Enable multiline input in terminal |
| `/init` | Initialize Claude Code memory in project root |
| `/cost` | View API usage cost (Pay-as-you-go) |
| `/context` | Check context window usage |

### Managing Context & Cost

| Command | Behavior |
|---|---|
| `/clear` | Wipe conversation history and start fresh |
| `/compact` | Summarize history to free context while preserving continuity |

### Switching Modes

Press `Shift + Tab` to cycle through:

- **Normal** — standard interaction
- **Plan** — review before acting
- **Auto-Accept** — approve all actions automatically
- **Bypass** — skip confirmation prompts

---

## MCP Tools

### Connect context7 (local)

Visit [context7.com/dashboard](https://context7.com/dashboard) to get your API key, then:

```bash
claude mcp add --scope user context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

List connected servers:

```bash
/mcp
```

---

## Skills

### Create a custom skill

```
create a custom skill called <skill-name>. <description of what it does>
```

Run it:

```bash
/deploy
```

### Add a skill from the marketplace

Browse at [skillsmp.com](https://skillsmp.com/) or install via CLI:

```bash
npx skills add anthropics/claude-code
```

**Example** — install and run the `frontend-design` skill:

```bash
# Install from: https://skillsmp.com/skills/anthropics-claude-code-plugins-frontend-design-skills-frontend-design-skill-md

/frontend-design improve the look and feel of the app. make it modern and polished. give me some suggestions on light themes.
```

---

## Checkpointing

Claude Code automatically tracks file edits so you can rewind to any earlier state.

Press `Esc` + `Esc` or run `/rewind` to open the rewind menu. Select a prompt from your session history, then choose an action:

| Action | Effect |
|---|---|
| **Restore code and conversation** | Revert both code and chat to that point |
| **Restore conversation** | Rewind chat only, keep current code |
| **Restore code** | Revert code only, keep the conversation |
| **Summarize from here** | Compress conversation from this point to free context |
| **Never mind** | Cancel and return to the list |

---

## Sub-agents

### Creating a new agent

```bash
/agents
```

- Use `←` / `→` to navigate between **Running** and **Library** tabs
- Select **Create new agent** from the available options

**Example** — create a code-reviewer sub-agent.

```bash
help me review my code, identify issues and suggest improvements for readability, performance and best practices.
```

### Run the sub agent

```bash
use the code-review subagent to review my code
``` 
