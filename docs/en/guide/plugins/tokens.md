---
description: "Expose reusable design tokens from a Luna Park plugin."
---

# Design tokens

A plugin can expose its own design tokens, in addition to those defined in the project. Once the plugin is installed, they appear in the editor's style panel, grouped by plugin, and are used like [any other token](../fundamentals/interface/styling#tokens-de-design).

## Supported types

| Type     | Examples                                  |
|----------|-------------------------------------------|
| `color`  | `#FF6B35`, `rgb(255, 107, 53)`            |
| `length` | `16px`, `1rem`, `2em`                     |
| `font`   | `Inter`, `Roboto`                         |
| `other`  | animation duration, opacity, radius       |

## Declaring tokens

Tokens are declared in the plugin definition:

```ts
import { makePlugin } from '@luna-park/plugin';

export default makePlugin({
    /* ... */
    tokens: {
        colors: {
            primary: '#FF6B35',
            secondary: '#004E89'
        },
        lengths: {
            spacing: '16px',
            radius: '4px'
        },
        fonts: {
            heading: 'Inter'
        }
    }
});
```
