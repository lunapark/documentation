---
description: "Share reactive state between pages and components with Luna Park stores, optionally saved in the browser."
---

# Store

A **store** holds global state: data shared by every page and component of your app (the connected user, a cart, a theme...). It is reactive: when a value changes, every element that displays it updates.

::: info Variables or store?
A [variable](./variables) belongs to one component. A store is global. Use a store when several components need the same data.
:::

## Create a store

In the **Explorer**, right-click and pick **New > Store**. The store editor shows two views:

- **Default**: the initial value of the store;
- **Preview**: its live value while you test the app.

## Store settings

Select the store to edit its settings in the **Inspector**:

| Setting | Description |
|---|---|
| **Type** | Where the value lives (see below). |
| **Schema** | The shape of the store. It is always an object, with typed fields. |
| Reset this store | Puts the default value back. |

| Type | Behavior |
|---|---|
| **Memory** | The value lives in memory and resets when the page is reloaded. |
| **Session** | The value is saved in the browser's session storage and survives reloads until the tab is closed. |
| **Local** | The value is saved in the browser's local storage and survives restarts. |

::: tip
Use **Local** for user preferences (theme, language) and **Memory** for temporary data.
:::

## Use a store

- **In a layout**: bind any text or property to `stores.<store>.<field>`, for example <code v-pre>{{stores.theme.darkMode}}</code>, or a condition such as `stores.theme.darkMode`.
- **In logic**: use the store's **Get** node to read it, and set its fields like any object. A **Reset** node restores the default value.

## Store functions

A store can contain [functions](./scripts#functions), listed in the options panel. Use them to group the operations on the store (add to cart, clear cart...) in one place. A store never has a main logic.

## Reset stores

The **Stores** button in the top bar lets you:

- **Reset all** stores to their default values;
- **Clear** the values saved in browser storage by Session and Local stores.
