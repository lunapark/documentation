---
description: "Add user accounts, sessions, roles, and OAuth sign-in to a Luna Park application with the Users plugin."
---

# Authentication

Authentication is provided by the official **Users** plugin (`@luna-park/plugin-users`). It adds accounts, sessions, roles and permissions, and OAuth sign-in, without writing auth code. The same logic runs in the editor preview and in the exported app.

## Install the plugin

1. Open **Libraries > Plugins > Install plugins**.
2. Search for **Users** and install it.

The plugin creates:

- a `Users` table and a `Sessions` table;
- a `User Store` holding the connected user in the frontend;
- a default admin account (login `admin`, password `admin`).

::: danger Default account
The default admin is only there to get you started. Delete it or change its password before going live.
:::

## Settings

The plugin adds a button to the top bar with two tabs:

- **General**: how users are identified (username or email), the password policy (minimum length, required characters), and the **roles** and **permissions** grid.
- **OAuth2**: the sign-in providers (see [below](#oauth-sign-in)).

## Sign up, log in, log out

In a page's logic:

- `user/connect` logs in, signs up, or both (`login`, `signup`, `both`) with a login and a password. It outputs the user and throws an error on failure: wrap it in a `Try` node to show a message.
- `user/disconnect` logs out from this device (`logout`) or from every device (`all`).
- `user/current` gives the connected user and whether someone is connected.
- `user/check-password` checks a password against the policy, to give feedback on a sign-up form.

Sessions are stored in signed, `httpOnly` cookies, one per device.

## Protect routes

Every backend [route](./routes) receives the connected user as the `user` input (`id`, `login`, `roles`). Visitors who are not logged in get the `anonymous` role.

Add a guard in the **Guards** section of the route's Inspector:

| Guard | Effect |
|---|---|
| **Authenticated** | Only logged-in users can call the route (otherwise `401`). |
| **Permission** | Only users whose roles grant the chosen permission can call it (`401` if anonymous, `403` otherwise). |

Routes without guards stay public.

## Roles and permissions

Define roles and permissions in the **General** settings, then check them in backend logic:

| Node | Description |
|---|---|
| `roles/has-permission` | Checks if a user has a permission. |
| `roles/assert-permission` | Stops with an error if a user lacks a permission. |
| `roles/set-roles` | Replaces a user's roles. |

## Passwords and sessions

Backend nodes:

| Node | Description |
|---|---|
| `user/change-password` | Changes the connected user's password and logs out their other devices. |
| `user/request-password-reset` | Creates a one-hour, single-use reset token. Send it to the user yourself (for example with the Mail plugin). |
| `user/reset-password` | Sets a new password from a reset token. |
| `user/list-sessions` / `user/revoke-session` | Lists or closes the connected user's sessions. |
| `user/connect-by-id` / `user/disconnect-by-id` | Connects as, or disconnects, any user (magic links, admin tools). Protect the route with a guard. |
| `user/delete` | Deletes a user and their sessions. |
| `hash/hash-argon2` / `hash/verify-argon2` | Hashes a string with Argon2id, or checks it. |

## OAuth sign-in

In the **OAuth2** settings, click **Add a provider** and pick a preset: **Google**, **Discord**, **GitHub**, **Microsoft**, or **GitLab** (or any OAuth2 provider). A guide links to the provider's console and gives the redirect URIs to register. Paste the client ID and secret, with separate development and production values.

In the frontend:

- `oauth/connect` opens the provider's sign-in popup, then connects the user;
- `oauth/link` links a provider account to the connected user.

In production, register this redirect URI with the provider:

```
https://<your-domain>/api/_users/oauth/callback
```

::: info Secrets
Client secrets are not written in the code: each one goes to the exported app's `.env` file as `USERS_OAUTH_SECRET_<PROVIDER_ID>`.
:::
