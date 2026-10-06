---
description: "Schedule recurring backend jobs in Luna Park with cron files: daily reports, cleanups, and periodic data syncs."
---

# Cron

A **cron** runs backend logic on a schedule: send a daily report, clean expired sessions every hour, sync data every 5 minutes...

## Create a cron

In the **Explorer**, right-click and pick **New > Cron**. Its graph starts from the **Cron Input** node, which fires at each scheduled time. Wire your logic after it: [database](./database) nodes, `Fetch`, backend [functions](../logic/scripts)...

Crons run on the server, like [routes](./routes). They can use any backend node.

## Schedule

Select the cron to edit its schedule in the **Inspector**, under **Cron settings**.

**Cron Time** has six fields:

| Field | Meaning | Values |
|---|---|---|
| sec | second | 0 - 59 |
| min | minute | 0 - 59 |
| hour | hour | 0 - 23 |
| day | day of the month | 1 - 31 |
| mth | month | 1 - 12 |
| week | day of the week (0 = Sunday) | 0 - 6 |

Each field accepts:

- `*`: any value;
- `*/n`: every n values;
- `n/m`: every m values starting at n;
- `n`: a specific value;
- `n-m`: a range of values.

The **Quick setup** menu fills common schedules (every minute, every 5 minutes, every hour, day, week, month, year), and **Description** spells out the current schedule in plain English.

| Expression | Runs |
|---|---|
| `0 * * * * *` | Every minute |
| `0 */5 * * * *` | Every 5 minutes |
| `0 0 9 * * 1-5` | At 9:00 on weekdays |
| `0 0 0 1 * *` | On the first day of each month, at midnight |

## Test in the editor

Under **Cron trigger**:

| Option | Description |
|---|---|
| **Active** | Whether the cron is active. |
| **Trigger** | Whether the cron should also fire while the editor is open. **Next trigger** then shows when it will run. |
| **Manual trigger** | Runs the cron right now. |

::: tip
Keep **Trigger** off while you work, and use **Manual trigger** to test the cron when you need it.
:::

In the exported app, crons start with the backend server.
