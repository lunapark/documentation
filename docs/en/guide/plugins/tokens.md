---
description: "Expose reusable design tokens from a Luna Park plugin."
---

# Design tokens

A plugin can expose its own design tokens, in addition to those defined in the project. Once the plugin is installed, they appear in the editor's style panel, grouped by plugin, and are used like [any other token](../fundamentals/interface/styling/tokens).

## Supported types

| Type (`ETokenType`) | Examples |
|---|---|
| `Color` | `#FF6B35`, `rgb(255, 107, 53)` |
| `Length` | `16px`, `1rem` |
| `FontSize` | `14px`, `1.25rem` |
| `FontWeight` | `400`, `bold` |
| `FontFamily` | `Inter, sans-serif` |
| `Time` | `200ms`, `0.3s` |

## Declaring tokens

Tokens are declared in `editor.tokens`. Each token has an `id`, a `type`, a `value`, and an optional display `name`:

```ts
import { ETokenType, makePlugin } from '@luna-park/plugin';

export default makePlugin({
    /* ... */
    editor: {
        tokens: [
            { id: 'primary', name: 'Primary color', type: ETokenType.Color, value: '#FF6B35' },
            { id: 'spacing', name: 'Spacing', type: ETokenType.Length, value: '16px' },
            { id: 'heading', name: 'Heading font', type: ETokenType.FontFamily, value: 'Inter, sans-serif' }
        ]
    }
});
```

A token's value can reference a CSS variable defined by your plugin (for example `var(--my-plugin-primary)`), injected with `inject.css` and [`build.injections`](./backend#code-injections). This way, the token follows your plugin's configuration.

Like other options, `tokens` can be a function of the [environment](./basics#option-format), to compute tokens from the plugin's configuration.
