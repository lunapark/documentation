# Design tokens

Un plugin peut exposer ses propres design tokens, en plus de ceux définis dans le projet. Une fois le plugin installé, ils apparaissent dans le panneau de style de l'éditeur, groupés par plugin, et s'utilisent comme [n'importe quel token](../fundamentals/interface/styling#tokens-de-design).

## Types supportés

| Type     | Exemples                                  |
|----------|-------------------------------------------|
| `color`  | `#FF6B35`, `rgb(255, 107, 53)`            |
| `length` | `16px`, `1rem`, `2em`                     |
| `font`   | `Inter`, `Roboto`                         |
| `other`  | durée d'animation, opacité, rayon         |

## Déclarer des tokens

Les tokens sont déclarés dans la définition du plugin :

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

<!-- TODO: confirm exact API shape -->

SCREEN_HERE: panneau de style avec les tokens du plugin groupés.
