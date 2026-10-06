---
description: "Install and use the Luna Park desktop editor to work on local projects, run them, and build native apps."
---

# Desktop App

Luna Park Desktop is the same editor as the cloud version, packaged as a native application. Projects live in a folder on your computer, so you can version them with Git, open them in your IDE, and let local AI agents work on them.

::: warning Beta
The desktop app is in beta. Keep a backup or a Git history of important projects.
:::

## What the desktop app adds

| Feature | Description |
|---|---|
| Local projects | Projects are plain folders on disk (see [Project files](../fundamentals/project-files#on-disk-format)). |
| Local servers | Generate the project and run it locally, with hot reload (see [Compilation](../deployment/compilation#compile-in-the-desktop-app)). |
| Native apps | Build desktop, Android, and iOS apps (see [Desktop Apps](../deployment/desktop) and [Mobile Apps](../deployment/mobile)). |
| Local AI | Use local models or local coding agents in the [Sidekick](./sidekick-settings#desktop-only-local-models-and-agents). |
| MCP server | Let an external agent such as Claude Code work on the project (see [AI Agents](../integrations/ai-agents)). |

## Supported systems

- Windows 10/11 x64.
- macOS 13 or newer (Intel or Apple Silicon).
- Recent x64 Linux distributions (AppImage).

Windows ARM and Linux ARM are not supported yet.

## License

The app opens immediately while the license is checked. Activate it with your license key and a machine name. Editing and saving work offline; Pro features (generating and native builds) need an online check.

| License | Desktop features |
|---|---|
| Free | Editing only (no commercial use). |
| Edu / Pro | Everything, including code generation and native builds. |

You can detach a license from a machine in the **Subscription** page of your account settings.

## Projects

Use the **File** menu to create (`New Project`) or open (`Open`) a project folder. The first time you open a project you didn't create, Luna Park shows a trust warning: projects can contain custom code, plugins, and remote dependencies. Only open projects you trust.

::: info Saving
Saves are written atomically. The previous version of the `src` folder is kept as `.luna-source-backup`, so you can restore it if a save is interrupted.
:::

## Menu and shortcuts

| Menu | Action | Shortcut |
|---|---|---|
| File | New Project | `Ctrl + N` |
| File | Open | `Ctrl + O` |
| File | Save | `Ctrl + S` |
| File | Save As | `Ctrl + Shift + S` |
| Edit | Undo | `Ctrl + Z` |
| Edit | Redo | `Ctrl + Shift + Z` |
| Help | Documentation, Challenge (tutorial), Discord | |

**File > Settings** contains app-level preferences such as the interface **Scale**.

## Requirements to run a project

Editing and saving need nothing else. To generate and run a project, install:

- **Node.js** 24 to 26;
- **pnpm** 12 or newer.

Luna Park detects the installed versions and never installs global tools for you. On macOS and Linux, restart the app after installing them.
