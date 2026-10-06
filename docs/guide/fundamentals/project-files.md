---
description: "Discover the file types of a Luna Park project and what each one is used for."
---

# Project Files

A Luna Park project is a tree of files shown in the **Explorer**. Right-click in the Explorer and pick **New** to create one.

## File types

| Type | Purpose | Learn more |
|---|---|---|
| Folder | Groups files. Folders don't change how the app works. | |
| Media | An uploaded image, video, or other asset. | |
| Component | A reusable piece of interface with its own logic. | [Components](./interface/components) |
| Page | A component reachable through a URL. | [Components](./interface/components) |
| Store | Global state shared by all components. | [Store](./logic/store) |
| Text | Rich text written in Luna Park's markdown, displayed with the **Custom text** element. | |
| Route | A backend HTTP endpoint. | [Routes](./data/routes) |
| Database | A table and its rows. | [Database](./data/database) |
| Cron | A backend job that runs on a schedule. | [Cron](./data/cron) |
| Configuration | Static values (URLs, settings, keys) for the frontend, the backend, or both. | [Scripts and Functions](./logic/scripts#configuration-files) |
| Script | Reusable logic functions without interface. | [Scripts and Functions](./logic/scripts) |
| Type | Reusable data types shared across the project. | [Scripts and Functions](./logic/scripts#type-files) |

Explorer actions: **Cut** (`Ctrl + X`), **Copy** (`Ctrl + C`), **Paste** (`Ctrl + V`), **Rename** (`F2`), and **Delete** (`Del`). Double-click a file to open it.

## Scopes

Logic files (scripts, configurations) have a **Scope** in the Inspector. It decides where the code runs:

| Scope | Runs in | Can use |
|---|---|---|
| Frontend | The browser | Frontend and Shared files |
| Backend | The server | Backend and Shared files |
| Shared | Both | Shared files |
| Desktop | Native desktop apps | Desktop, Frontend, and Shared files |

Routes, crons, and databases are always backend. Pages, components, and stores are always frontend.

::: warning Secrets
Never put secrets (API keys, passwords) in a Frontend or Shared file: they end up in the code sent to the browser. Use a Backend configuration instead.
:::

## On-disk format

In the [desktop app](../getting-started/desktop-app), a project is a folder. The `luna.config.json` file sits at the root and sources live in `src/`, with one file per Explorer item:

| File | Name on disk |
|---|---|
| Page or component | `<name>.lpml` |
| Route | `<name>.route.lpl` |
| Script | `<name>.lpl` |
| Store | `<name>.lps` |
| Database | `<name>.db.json` |
| Configuration | `<name>.json` |
| Text | `<name>.md` |
| Cron | `<name>.cron.lpl` |
| Type | `<name>.type.json` |
| Media | The binary file, e.g. `photo.beef1234.jpg` |

Design tokens are stored in `src/.tokens/` and plugin settings in `src/.plugins/`. These text formats work well with Git and with [AI agents](../integrations/ai-agents).
