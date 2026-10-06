---
description: "Compare Luna Park and Webflow: websites versus applications, logic, data, code export, and hosting."
---

# Luna Park vs Webflow

Webflow and Luna Park are rarely competing for the same project. Webflow is made for **websites**: marketing pages, blogs, portfolios, content managed in a CMS. Luna Park is made for **applications**: logic, user accounts, data that users create and modify.

## At a glance

### Building

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Webflow |
|---|---|---|
| **Made for** | Web applications | Websites and content |
| **Interface** | Component tree, CSS-based styling, design tokens | Visual canvas mapped to HTML and CSS, interactions and animations |
| **Logic** | Visual scripting graphs, compiled to JavaScript | Interactions, custom code, external tools |

</DTable>

### Data and backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Webflow |
|---|---|---|
| **Data** | PostgreSQL database, read and written by your app | CMS collections, edited by your team |
| **Backend** | Built-in: routes, crons | No visual backend. Webflow Cloud hosts code-based apps |
| **User accounts** | Users plugin (sessions, roles, OAuth2) | Third-party tools (Memberstack, Outseta...) |

</DTable>

### Ownership and costs

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Webflow |
|---|---|---|
| **Code export** | Full application | Static HTML, CSS, and JavaScript, without CMS content |
| **Hosting** | Anywhere | Webflow hosting |
| **Pricing model** | Fixed subscription | Site plans + workspace plans |
| **Platforms** | Web (single-page app, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Web (websites) |

</DTable>

::: info
This comparison reflects our understanding of Webflow as of October 2026. Webflow evolves fast: check [webflow.com](https://webflow.com) for its current features and prices.
:::

## Where Webflow is stronger

- **Design freedom**: pixel-precise control over layout, typography, and animations, with a canvas close to what designers expect.
- **Content management**: the CMS lets editors publish content without touching the design.
- **SEO and marketing**: server-rendered pages, SEO settings, localization, forms, and fast global hosting.
- **Ecosystem**: many templates, designers, and agencies.

## Where Luna Park is stronger

### Application logic

Webflow retired its visual automation tool (Logic) in 2025 and its User Accounts in 2026. App logic now relies on external tools such as Zapier or Make, or on custom code. In Luna Park, logic is at the core: [visual scripting](../../fundamentals/logic/visual-scripting/introduction) runs in the interface and in the backend.

### Data owned by your app

A Webflow CMS is a place for your team's content. Luna Park's [database](../../fundamentals/data/database) stores what your users create: orders, messages, profiles, with relations, constraints, and transactions. [Routes](../../fundamentals/data/routes) and [authentication](../../fundamentals/data/auth) control who reads and writes what.

### A complete export

Webflow's code export leaves out everything dynamic: CMS content, forms, user accounts. Luna Park [exports](../../deployment/compilation) the complete application, frontend and backend, ready to [self-host](../../deployment/deployment).

## Things to know before switching

- **Luna Park is not a CMS.** For a blog or a marketing site, Webflow remains a better tool.
- **SEO**: Luna Park generates a single-page application. Use the **Web** history mode for clean URLs (see [Web App](../../deployment/web#general-settings)). For content-heavy sites that rely on search traffic, a site builder like Webflow is better suited.
- **Use both**: many products have a Webflow marketing site and an application built with another tool. Luna Park fits well behind your "Log in" button.

## Which one to choose?

**Choose Webflow** for a website: marketing pages, blog, portfolio, content edited by your team.

**Choose Luna Park** for an application: SaaS, dashboard, marketplace, internal tool, anything with user accounts and logic.
