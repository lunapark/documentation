---
title: "WeWeb alternative with full-stack export: Luna Park vs WeWeb"
description: "Looking for a WeWeb alternative? Compare Luna Park and WeWeb: frontend and backend, logic, code export, hosting, pricing model, and native apps."
---

# Luna Park vs WeWeb

Looking for a **WeWeb alternative** that exports the backend too? Luna Park builds the interface, the logic, the routes, and the PostgreSQL database in one project, and exports the complete Vue and Node.js application.

WeWeb started as a frontend builder that plugs into backends such as Xano or Supabase, and added its own backend in 2026. Like Luna Park, it generates **Vue.js** code that you can export. The differences lie in how logic is built, how the backend fits in, and where your app runs.

## At a glance

### Building

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | WeWeb |
|---|---|---|
| **Interface** | Component tree, CSS-based styling, design tokens | Visual canvas, rich design features |
| **Logic** | Visual scripting graphs, front and back | Workflows (list of actions) and formulas |
| **Execution** | Compiled to JavaScript and Vue | Vue app running WeWeb's workflow engine |
| **Extensibility** | npm packages, TypeScript functions, plugins | Custom coded components, custom JavaScript |
| **AI** | Sidekick, external agents through MCP | WeWeb AI (pages, data, workflows, testing) |

</DTable>

### Data and backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | WeWeb |
|---|---|---|
| **Backend** | Built-in: routes, crons, PostgreSQL | WeWeb's own backend, or Xano, Supabase, Airtable, any API |
| **Frontend and backend** | One project, one logic language | One or two tools, depending on your setup |
| **Database access** | Routes query PostgreSQL directly, on the same server | Through the backend's HTTP API |

</DTable>

### Ownership and costs

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | WeWeb |
|---|---|---|
| **Code export** | Full application: frontend and backend | Frontend single-page application ([paid plans](https://docs.weweb.io/settings-billing-code-export/pricing.html)) |
| **Hosting** | Anywhere | WeWeb Cloud, or self-hosted frontend |
| **Pricing model** | Fixed subscription | Seats + hosting plan per app on WeWeb Cloud ([source](https://docs.weweb.io/settings-billing-code-export/pricing.html)) |
| **Platforms** | Web (single-page app, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Web, PWA |

</DTable>

::: info
This comparison reflects our understanding of WeWeb as of October 2026. WeWeb evolves fast: check [weweb.io](https://www.weweb.io) for its current features and prices.
:::

## Where WeWeb is stronger

- **Design tooling**: the WeWeb editor is polished, and building a good-looking interface is fast.
- **Backend choice**: native integrations with Xano, Supabase, Airtable, and REST APIs make it a natural pick when you already have a backend, or when your team uses a dedicated backend tool.
- **Managed hosting**: WeWeb Cloud publishes your app in one click, with no server to run.
- **AI**: WeWeb AI generates pages, data bindings, and workflows, and can test your app.

## Where Luna Park is stronger

### The whole stack in one place

In Luna Park, the interface, the [routes](../../fundamentals/data/routes), the [database](../../fundamentals/data/database), the [crons](../../fundamentals/data/cron), and [authentication](../../fundamentals/data/auth) live in the same project. The same [types](../../fundamentals/logic/scripts#type-files) describe your data on both sides, and the interface calls a route like a function. There is no second tool to learn, connect, and pay for.

### One logic language, front and back

Workflows are made of predefined actions, completed by formulas and custom JavaScript when they fall short. Luna Park's [visual scripting](../../fundamentals/logic/visual-scripting/introduction) is a full programming model: loops, functions, typed data, async calls, each [npm package](../../integrations/npm) as nodes. You use it everywhere: in components, stores, routes, and crons.

### The database next to your logic

When WeWeb is connected to Supabase or Xano, your app reaches the data through an HTTP API: each request is a network round trip, and complex queries must be written in the backend tool, as SQL functions or endpoints.

In Luna Park, a [route](../../fundamentals/data/routes) runs on the same server as PostgreSQL and talks to it directly. One call from the interface can run several queries, with joins, aggregates, and [transactions](../../fundamentals/data/database#specialized-nodes), and your logic in between. Fewer round trips mean faster pages, and the whole query stays visual.

### Logic compiled to JavaScript

In WeWeb, workflows and formulas are configured in the editor and run by WeWeb's workflow engine in the published app. In Luna Park, the logic itself is compiled: each node becomes a line of JavaScript, in the frontend and in the backend. The exported code contains your logic as plain functions, readable by any developer.

### Export the full application

WeWeb's code export is the frontend single-page application. Luna Park's [export](../../deployment/compilation) is the complete application, backend included, ready to [self-host](../../deployment/deployment) with Node.js and PostgreSQL, or to run with Docker.

### Cost that doesn't grow with your apps

On WeWeb Cloud, each published app needs its own hosting plan on top of the editor seats (see [WeWeb's pricing](https://docs.weweb.io/settings-billing-code-export/pricing.html)). With Luna Park, the subscription covers the editor, and you host as many apps as you want on your own servers.

### Every platform from the same project

Like WeWeb, Luna Park exports a single-page web app and a PWA. With the [desktop app](../desktop-app), the same project also becomes a native app for Windows, macOS, Linux ([desktop](../../deployment/desktop)), Android, and iOS ([mobile](../../deployment/mobile)).

## Things to know before switching

- **You host the backend.** Luna Park can deploy your frontend for testing, but the backend runs on your own server (see [Self-hosting](../../deployment/deployment)).
- **Less ready-made design.** WeWeb offers more templates and design features out of the box. In Luna Park, design relies on [design tokens](../../fundamentals/interface/styling#design-tokens) and UI libraries such as [Ferris Wheel or Nuxt UI](../../integrations/plugins#official-plugins).
- **Visual scripting takes a little longer to learn** than workflows, and pays off on complex logic.

## From WeWeb concepts to Luna Park

<DTable :widths="['50%', '50%']">

| WeWeb | Luna Park |
|---|---|
| Page | [Page](../../fundamentals/interface/components#pages) |
| Component | [Component](../../fundamentals/interface/components) |
| Variable | [Variable](../../fundamentals/logic/variables), or [Store](../../fundamentals/logic/store) for global state |
| Formula | [Computed variable](../../fundamentals/logic/variables#computed-variables), or operation nodes |
| Workflow | Logic graph |
| Global workflow | [Function](../../fundamentals/logic/scripts) in a script |
| Collection / data source | [Route](../../fundamentals/data/routes) called from the interface |
| Backend table | [Database](../../fundamentals/data/database) table |
| Custom coded component | [Plugin](../../plugins/introduction) component |

</DTable>

## Which one to choose?

**Choose WeWeb** if you already have a backend you want to keep, if design speed is your priority, or if you want managed hosting.

**Choose Luna Park** if you want one tool and one logic language for the whole application, the complete code of both frontend and backend, and native apps from the same project.
