# Introduction

Visual scripting (visual programming) is a way to develop logic without code. Instead of writing traditional language code, you connect graphical blocks representing actions, conditions, or data.

## What are the benefits?

- **Performance**: The created logic is compiled into JS code, offering performance equivalent to a manually coded application.
- **Freedom**: Most functions available in code are accessible in visual scripting, allowing you to create complex logic.
- **Accessibility**: Removing the syntactic aspect of code reduces learning time and makes it easier to create logic.

## What you will learn in this section

In this section, you will discover how to use the visual programming editor to:
- Build and connect logical blocks (nodes).
- Manage dynamic variables and data flows.
- Implement conditions, loops, and API calls.

## Asynchronous operations

Your visual logics can include **async** operations and handle **promises** natively. This means you can perform operations that take time, such as API calls or database queries, without blocking your application's execution.

In your visual graph, nodes can wait for the result of a `promise` before continuing execution. This capability makes it easier to build workflows that depend on external or asynchronous operations.