---
description: "Compare Luna Park and FlutterFlow: web and mobile targets, logic, backend, code export, and pricing model."
---

# Luna Park vs FlutterFlow

FlutterFlow is a visual builder for **Flutter**, Google's framework for mobile apps. Luna Park is built on the **web** stack (Vue and Node.js). Both generate code you can export, and both produce native apps: the main question is which platform comes first in your project.

## At a glance

### Building

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | FlutterFlow |
|---|---|---|
| **Main target** | Web, then desktop and mobile | Mobile, then web and desktop |
| **Interface** | Component tree, CSS-based styling, design tokens | Flutter widget tree, themes |
| **Logic** | Visual scripting graphs | Action flows, custom Dart code |
| **Execution** | Compiled to JavaScript and Vue | Compiled to Flutter (Dart) |
| **Extensibility** | npm packages, TypeScript functions, plugins | Dart packages, custom widgets and actions |
| **AI** | Sidekick, external agents through MCP | AI generation, DreamFlow |

</DTable>

### Data and backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | FlutterFlow |
|---|---|---|
| **Backend** | Built-in: routes, crons, PostgreSQL | Firebase or Supabase, APIs, cloud functions |
| **Database access** | Routes query PostgreSQL directly, on the same server | From the app, through Firebase or Supabase APIs |
| **Server logic** | Visual, same language as the interface | Cloud functions, written in code |

</DTable>

### Ownership and costs

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | FlutterFlow |
|---|---|---|
| **Code export** | Readable source code (paid plans) | Flutter code (paid plans) |
| **Hosting** | Anywhere | App stores, FlutterFlow web hosting, or your choice |
| **Pricing model** | Fixed subscription | Seats |
| **Platforms** | Web (single-page app, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Mobile (Android, iOS), web, desktop |

</DTable>

::: info
This comparison reflects our understanding of FlutterFlow as of October 2026. FlutterFlow evolves fast: check [flutterflow.io](https://flutterflow.io) for its current features and prices.
:::

## Where FlutterFlow is stronger

- **Mobile-first**: Flutter draws every pixel itself, so mobile apps look and behave the same on Android and iOS, with smooth animations.
- **Mobile tooling**: app store publishing, push notifications, device features, and offline data are well covered.
- **Firebase integration**: authentication, Firestore, storage, and cloud functions are deeply integrated.
- **Mature ecosystem**: a large community, many templates, and the whole Flutter ecosystem behind it.

## Where Luna Park is stronger

### Built for the web

Flutter web apps draw on a canvas instead of producing HTML. This affects search engine indexing, initial load size, text selection, and accessibility. Luna Park generates a regular Vue application: HTML and CSS that browsers, search engines, and assistive technologies understand natively, and that stays light.

### Backend included

FlutterFlow relies on Firebase or Supabase for data and server logic, and complex server logic goes to cloud functions written in code. In Luna Park, [routes](../../fundamentals/data/routes), [crons](../../fundamentals/data/cron), and the PostgreSQL [database](../../fundamentals/data/database) are part of the project, built with the same visual scripting as the interface.

### The database next to your logic

With Firebase or Supabase, the app queries the data through their APIs, over the network. Firestore is a document database: no joins, and limited aggregates. Supabase is PostgreSQL, but complex queries need SQL functions written by hand.

In Luna Park, a [route](../../fundamentals/data/routes) runs on the same server as PostgreSQL and talks to it directly. One call from the app can run several queries, with joins, aggregates, and [transactions](../../fundamentals/data/database#specialized-nodes), and your logic in between, all built visually.

### Logic without switching to code

In FlutterFlow, logic that goes beyond the built-in actions is often written as custom Dart code. Luna Park's [visual scripting](../../fundamentals/logic/visual-scripting/introduction) covers loops, functions, typed data, and async calls, so complex logic can stay visual. You can still write [TypeScript functions](../../fundamentals/logic/scripts#code-functions) when you prefer.

### The web ecosystem

Luna Park uses [npm](../../integrations/npm), the largest library of code: the functions of a package become nodes, and Vue component packages add components.

## Things to know before switching

- **Native apps are web-based.** Luna Park's [mobile apps](../../deployment/mobile) run your web frontend in a native shell. They are lightweight and work well for most business apps, but FlutterFlow is a better fit for graphics-heavy mobile apps or apps that use many device features.
- **You host the backend.** Routes, database, and crons run on your own server (see [Self-hosting](../../deployment/deployment)).
- **Native builds need the desktop app** and an Edu or Pro license.

## From FlutterFlow concepts to Luna Park

<DTable :widths="['50%', '50%']">

| FlutterFlow | Luna Park |
|---|---|
| Page | [Page](../../fundamentals/interface/components#pages) |
| Component | [Component](../../fundamentals/interface/components) |
| Page state / component state | [Variable](../../fundamentals/logic/variables) |
| App state | [Store](../../fundamentals/logic/store) |
| Action flow | Logic graph |
| Custom function / custom action | [Function](../../fundamentals/logic/scripts) (graph or TypeScript) |
| Custom widget | [Plugin](../../plugins/introduction) component |
| Firestore collection / Supabase table | [Database](../../fundamentals/data/database) table |
| Cloud function | [Route](../../fundamentals/data/routes) |
| API call | `Fetch` node |
| Theme | [Design tokens](../../fundamentals/interface/styling#design-tokens) |

</DTable>

## Which one to choose?

**Choose FlutterFlow** if your product is a mobile app first, with a rich native experience, and the web is secondary.

**Choose Luna Park** if your product is a web application first (SaaS, dashboard, internal tool) that you also want on desktop and mobile, with the backend built in the same tool.
