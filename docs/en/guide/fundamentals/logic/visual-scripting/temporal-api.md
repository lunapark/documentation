---
description: "Schedule and coordinate delayed or asynchronous operations with the Temporal API."
---

<script setup lang="ts">
import CreateDuration from "/assets/images/temporal-api/create-duration.png";
</script>

# Temporal API

The **Temporal** nodes let you manipulate dates, times, and durations in your logic.

## Available types

| Type | Example |
|------|---------|
| **Date** | `2026-04-28` |
| **Time** | `14:30:00` |
| **DateTime** | `2026-04-28T14:30:00` |
| **Duration** | `PT3H25M` |

## Operations

For each type, a set of nodes covers the common operations. Example for **Date**:

| Node | Effect |
|------|--------|
| `Create Date` | Creates a date from its components (year, month, day). |
| `Date From` | Parses a date from a string. |
| `Date Now` | Current date. |
| `Date Add` | Adds a `Duration` to the date. |
| `Substract` | Subtracts a `Duration`. |
| `Compare` | Compares two dates. |
| `Since` / `Until` | Computes the duration between two dates. |
| `To Date Time` | Converts the date to a `DateTime`. |

The **Time**, **DateTime**, and **Duration** types follow the same naming convention (`Create DateTime`, `DateTime Add`, etc.).

The `Create Duration` node is different: its inputs are optional. You check the units you want (`years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`) and each check adds a numeric input on the node. The output is an ISO `Duration`.

<DImage :src="CreateDuration" alt="Create Duration node with some units checked and their inputs" />
