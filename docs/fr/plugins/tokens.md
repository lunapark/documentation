---
description: "Exposez des design tokens réutilisables depuis un plugin Luna Park pour les retrouver dans le panneau de style de l'éditeur."
---

# Design tokens

Un plugin peut exposer ses propres design tokens, en plus de ceux définis dans le projet. Une fois le plugin installé, ils apparaissent dans le panneau de style de l'éditeur, groupés par plugin, et s'utilisent comme [n'importe quel token](../fundamentals/interface/styling/tokens).

## Types supportés

| Type (`ETokenType`) | Exemples |
|---|---|
| `Color` | `#FF6B35`, `rgb(255, 107, 53)` |
| `Length` | `16px`, `1rem` |
| `FontSize` | `14px`, `1.25rem` |
| `FontWeight` | `400`, `bold` |
| `FontFamily` | `Inter, sans-serif` |
| `Time` | `200ms`, `0.3s` |

## Déclarer des tokens

Les tokens sont déclarés dans `editor.tokens`. Chaque token a un `id`, un `type`, une `value` et un `name` d'affichage optionnel :

```ts
import { ETokenType, makePlugin } from '@luna-park/plugin';

export default makePlugin({
    /* ... */
    editor: {
        tokens: [
            { id: 'primary', name: 'Couleur primaire', type: ETokenType.Color, value: '#FF6B35' },
            { id: 'spacing', name: 'Espacement', type: ETokenType.Length, value: '16px' },
            { id: 'heading', name: 'Police des titres', type: ETokenType.FontFamily, value: 'Inter, sans-serif' }
        ]
    }
});
```

La valeur d'un token peut référencer une variable CSS définie par votre plugin (par exemple `var(--my-plugin-primary)`), injectée avec `inject.css` et [`build.injections`](./backend#injections-de-code). Ainsi, le token suit la configuration de votre plugin.

Comme les autres options, `tokens` peut être une fonction de l'[environnement](./basics#format-des-options), pour calculer les tokens à partir de la configuration du plugin.
