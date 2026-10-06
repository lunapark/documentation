---
description: "Host the exported code of a Luna Park application on your own server, with Node.js and PostgreSQL."
---

# Self-hosting

The exported code of a Luna Park application (see [Compilation](./compilation)) is a standard Node.js project. You can run it on any server: a VPS, a dedicated server, or a container platform.

## What you need

- **Node.js** 24 or newer, and **pnpm**.
- A **PostgreSQL** database. Tables are created automatically on first launch, with the rows you entered in the editor.

## Project structure

| Folder | Content |
|---|---|
| `frontend` | The Vue application (Vite). |
| `backend` | The API server (Fastify): your routes, crons, and database access. It also serves the frontend. |
| `utils` | An interactive tool to configure and launch the server. |
| `.env` | The server configuration. |

## Configuration

The `.env` file at the root of the project holds the configuration:

| Variable | Default | Description |
|---|---|---|
| `DATABASE_URL` | | PostgreSQL connection string (`postgresql://user:password@host:5432/database`). Required. |
| `HOST` | `127.0.0.1` | Address the server listens on. Use `0.0.0.0` to accept outside connections. |
| `PORT` | `3080` | Port of the server. |
| `PREFIX` | `/api` | Path prefix of the routes. |
| `STATIC` | `frontend/dist` | Folder of the built frontend, served by the backend. Leave it empty to host the frontend elsewhere. |
| `COOKIE_SECRET` | generated | Secret used to sign cookies. Keep it private. |
| `PROXY` | | Optional proxy for outgoing requests. |

Plugins can add their own variables (OAuth or SMTP secrets, for example).

::: warning HTTPS
Cookies are `secure`: serve your app over HTTPS, otherwise browsers won't keep them (sessions, for example).
:::

## Run with the utils tool

From the project folder:

```bash
pnpm install
pnpm run utils
```

The menu lets you:

- **Configure server**: port, database URL, and the backend URL used by the frontend;
- **Launch server**, or **Launch dev server (watch mode)**;
- **Launch permanent server (using PM2)**, which keeps it running and restarts it on failure, and **Stop permanent server**.

On Windows, `launch-windows.bat` installs the requirements and opens this menu.

## Run manually

```bash
pnpm install
pnpm build
pnpm start
```

The server prints its address on start. `GET /api/health` answers `{ "status": "ok" }` when it is running.

## Run with Docker

The export contains a `run_basic.dockerfile` that builds the app and serves it with nginx on port 80:

```bash
docker build -f run_basic.dockerfile -t my-app .
docker run -p 80:80 --env-file .env my-app
```

## Updating

Download or generate the new code, replace the files (keep your `.env`), then build and restart the server.
