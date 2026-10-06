---
description: "Connect Claude Code, Codex, or any MCP-compatible coding agent to a Luna Park desktop project."
---

# AI Agents (MCP)

Besides the built-in [Sidekick](../getting-started/sidekick-settings), you can let an external coding agent (Claude Code, Codex, Cursor, Gemini CLI...) build your app. The [desktop app](../getting-started/desktop-app) exposes an **MCP server** (Model Context Protocol) that teaches the agent Luna Park's file formats and lets it test its work.

::: info Desktop only
The MCP server is only available in the desktop app, where projects are folders the agent can edit.
:::

## How it works

1. The agent edits the project files directly on disk (see [Project Files](../fundamentals/project-files#on-disk-format)).
2. It uses the Luna Park MCP server to read the documentation, list the available nodes and components, and check its files.
3. The editor reloads the changed files live. Invalid files are reported and not loaded.

## Activate the server

1. Open your project in the desktop app.
2. Click the **MCP server** button in the top bar, then **Activate**.
3. Click **Copy MCP configuration** and add it to your agent's MCP settings.

The configuration looks like this:

```json
{
  "mcpServers": {
    "luna-park": {
      "type": "http",
      "url": "http://127.0.0.1:<port>/mcp",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}
```

The server only listens on your machine and requires its token. Click the stop button to deactivate it.

When activated, Luna Park also writes two files at the root of the project:

- `.mcp.json`: the connection, read automatically by agents such as Claude Code. It is removed when you deactivate the server.
- `AGENTS.md`: instructions for the agent (file formats, workflow). It is only created if it doesn't exist, so you can edit it.

::: tip Claude Code
Start Claude Code from the project folder: it picks up `.mcp.json` and `AGENTS.md` by itself.
:::

## Tools exposed

| Tool | Description |
|---|---|
| `documentation` | Luna Park file formats and concepts. |
| `getNodes` | The logic nodes available in the project, with their ports. |
| `getComponents` | The components provided by plugins. |
| `getTokens` | The project's design tokens. |
| `listPlugins` | Installed plugins, their settings, and their route guards. |
| `validateFiles` | Checks changed files and reports every issue. |
| `runRoutes` | Runs backend routes in the editor. Database changes are rolled back. |
| `interact` | Drives the editor's preview like a user (click, fill, read). Cookies and database changes are rolled back. |

The recommended workflow, described in `AGENTS.md`: read the `documentation`, look up nodes with `getNodes`, write the files, run `validateFiles` until they are valid, then test routes with `runRoutes` and pages with `interact`.

## Agents inside Sidekick

You can also run a local agent from within Luna Park: in the Sidekick settings, the **Local agents** section lists the ACP-compatible agents installed on your machine. The MCP server is then connected for you. See [Sidekick](../getting-started/sidekick-settings#local-agents).
