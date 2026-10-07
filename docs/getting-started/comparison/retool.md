---
title: "Retool alternative with code export: Luna Park vs Retool"
description: "Looking for a Retool alternative? Compare Luna Park and Retool: internal tools and customer-facing apps, logic, backend, code export, hosting, and pricing model."
---

# Luna Park vs Retool

Looking for a **Retool alternative** with code export and no per-user pricing? Luna Park builds the interface, the logic, and the backend of your app visually, and compiles it into a standard Vue and Node.js application that you own and host where you want.

Retool is the reference tool for **internal tools**: admin panels, dashboards, and back-office apps built on top of your existing databases and APIs. Luna Park builds **complete applications**, internal or customer-facing, with their own backend and database.

## At a glance

### Building

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Retool |
|---|---|---|
| **Made for** | Web applications: SaaS, dashboards, internal tools | Internal tools on top of existing data |
| **Interface** | Component tree, CSS-based styling, design tokens | Drag-and-drop grid of ready-made components |
| **Logic** | Visual scripting graphs, front and back | Queries (SQL, API), JavaScript, event handlers |
| **Execution** | Compiled to JavaScript and Vue | Run by the Retool platform |
| **AI** | Sidekick, external agents through MCP | Retool AI, agents |

</DTable>

### Data and backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Retool |
|---|---|---|
| **Data sources** | The project's PostgreSQL database, APIs through `Fetch` | Many connectors: databases, REST, GraphQL, SaaS tools |
| **Database** | PostgreSQL, part of the project | Your existing databases, or Retool Database |
| **Backend logic** | Routes, crons, backend scripts | Queries run by Retool, Workflows |
| **Authentication** | Users plugin (sessions, roles, OAuth2) for your own users | Retool accounts, permissions, SSO on higher plans |

</DTable>

### Ownership and costs

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Retool |
|---|---|---|
| **Code export** | Readable Vue + Node.js code | App definition (JSON or Toolscript), to import into Retool ([source](https://docs.retool.com/apps/guides/app-management/import-export)) |
| **Hosting** | Anywhere | Retool Cloud, self-hosted on Enterprise ([source](https://retool.com/pricing)) |
| **Pricing model** | Fixed subscription | Per builder and per user ([source](https://retool.com/pricing)) |
| **Platforms** | Web (single-page app, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Web, mobile (Retool Mobile) |

</DTable>

::: info
This comparison reflects our understanding of Retool as of October 2026. Retool evolves fast: check [retool.com](https://retool.com) for its current features and prices.
:::

## Where Retool is stronger

- **Speed on existing data**: connect a database or an API and get a working table, form, or admin panel in minutes.
- **Connectors**: a long list of ready-made integrations with databases, APIs, and SaaS tools.
- **Enterprise features**: SSO, audit logs, granular permissions, source control, and environments.
- **Maturity**: a large user base, many templates, and extensive documentation.

## Where Luna Park is stronger

### You own your application

Retool apps can be exported as JSON or Toolscript, but these files describe the app for the Retool platform: they are made to be [imported into another Retool instance](https://docs.retool.com/apps/guides/app-management/import-export). Luna Park [compiles](../../deployment/compilation) your project into a standard Vue frontend and a Node.js backend (Fastify and PostgreSQL). You can download the readable source code, host it where you want, and hand it to a development team.

### Pricing that doesn't grow with your team

Retool [bills per builder and per user](https://retool.com/pricing), and external users are billed on higher plans. With Luna Park, you pay a fixed subscription for the editor. Your app runs on your own server, at the price of that server, however many people use it.

### Customer-facing apps

Retool is designed for apps used by your team. Luna Park builds any web application: a SaaS for your customers, a marketplace, a client portal, with your own design, your own [authentication](../../fundamentals/data/auth), and your own domain. The same project can also serve your internal tools.

### Full control over the interface

Retool interfaces are assembled from its own component library on a grid. In Luna Park, you build your own [components](../../fundamentals/interface/components), style them with CSS and [design tokens](../../fundamentals/interface/styling#design-tokens), and use UI libraries or Vue component packages from [npm](../../integrations/npm).

### Logic without writing code

In Retool, logic is written as SQL queries, JavaScript transformers, and event handlers. Luna Park's [visual scripting](../../fundamentals/logic/visual-scripting/introduction) covers loops, conditions, functions, typed data, and async calls, in the interface and in the backend, without writing code. You can still write [TypeScript functions](../../fundamentals/logic/scripts#code-functions) when you prefer.

### Every platform from the same project

From a single project, Luna Park exports a single-page web app, a PWA, and, with the [desktop app](../desktop-app), native apps for Windows, macOS, Linux ([desktop](../../deployment/desktop)), Android, and iOS ([mobile](../../deployment/mobile)).

## Things to know before switching

- **Luna Park comes with its own database.** Your app's data lives in the project's PostgreSQL [database](../../fundamentals/data/database). To work with an existing database or internal API, call it from a [route](../../fundamentals/data/routes) with the `Fetch` node or an [npm](../../integrations/npm) client package: there is no catalog of ready-made connectors.
- **You host the backend.** Luna Park can deploy your frontend for testing, but routes, database, and crons run on your own server (see [Self-hosting](../../deployment/deployment)).
- **Building takes longer for a simple admin panel.** Retool's ready-made tables and forms are hard to beat for a quick CRUD screen on top of an existing database.

## From Retool concepts to Luna Park

<DTable :widths="['50%', '50%']">

| Retool | Luna Park |
|---|---|
| App | Project, with its [pages](../../fundamentals/interface/components#pages) |
| Component | [Component](../../fundamentals/interface/components) |
| Module | Reusable [component](../../fundamentals/interface/components) |
| Variable / temporary state | [Variable](../../fundamentals/logic/variables), or [Store](../../fundamentals/logic/store) for global state |
| Transformer | [Computed variable](../../fundamentals/logic/variables#computed-variables), or [function](../../fundamentals/logic/scripts) |
| Event handler | Logic graph of a component |
| Resource query | [Route](../../fundamentals/data/routes) called from the interface |
| REST API resource | `Fetch` node |
| Retool Database table | [Database](../../fundamentals/data/database) table |
| Workflow | [Route](../../fundamentals/data/routes) or [Cron](../../fundamentals/data/cron) |

</DTable>

## Which one to choose?

**Choose Retool** if you need internal tools on top of databases and APIs you already have, fast, and if per-user pricing and staying on Retool's platform suit your team.

**Choose Luna Park** if you are building an application that you want to own: customer-facing or internal, with its own backend, your own design, and costs that don't depend on the number of users.
