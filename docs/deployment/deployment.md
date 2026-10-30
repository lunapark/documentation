---
description: "Host the exported code of a Luna Park application on your own server, with Node.js and PostgreSQL."
---

# Self-hosting

The exported code of a Luna Park application (see [Compilation](./compilation)) is a standard Node.js project. You can run it on any server: a VPS, a dedicated server, or a container platform.

## What you need

- **Node.js** 24 or newer, and **pnpm**.
- A **PostgreSQL** database. Tables are created and kept in sync automatically at each start (see [Database schema](#database-schema)), with the rows you entered in the editor as initial data.

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
| `UPLOAD_MAX_SIZE` | `10` | Maximum size of an uploaded file, in MB. |
| `UPLOAD_MAX_FILES` | `10` | Maximum number of files in one request. |
| `DATABASE_BACKUP` | `true` | Set to `false` to turn off the [automatic backups](#backups). |

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

Download or generate the new code, replace the files (keep your `.env` and the `.backup` folder), then build and restart the server.

## Database schema

At each start, the server compares the database with the tables of the project and updates it:

- new tables and columns are created, renamed tables and columns are renamed (their data is kept);
- **tables and columns removed from the project are deleted, with their data**;
- columns whose type changed are converted: values that can't be converted are emptied;
- constraints and indexes are added or removed. When **Required** is turned on, empty values get the default value of the type. A constraint that can't be applied is logged, and the server keeps running.

The rows entered in the editor are only inserted when a table is created. Existing tables keep their data.

::: warning
Removing a Database file or a column from the project deletes its data on the next start. A backup is taken just before (see below).
:::

## Backups

The server backs up the database to the `.backup` folder, next to `.env`:

- at each start, before updating the schema;
- every day, as long as the server runs.

Each backup is a SQL file named after its date and time (UTC). The server keeps the backups of the last 7 days that have some, and at most 5 per day.

Set `DATABASE_BACKUP=false` to turn backups off, for example when your host already backs up the database. If a backup fails at startup, the server doesn't start.

With Docker, the `.backup` folder is inside the container: mount a volume on `/app/.backup` to keep the backups when the container is replaced.

To restore a backup, run it on an empty database, for example with `psql "$DATABASE_URL" -f .backup/<file>.sql`.
