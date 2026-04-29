# Temporal API

Les nodes **Temporal** permettent de manipuler dates, heures et durées dans votre logique.

## Types disponibles

| Type | Exemple |
|------|---------|
| **Date** | `2026-04-28` |
| **Time** | `14:30:00` |
| **DateTime** | `2026-04-28T14:30:00` |
| **Duration** | `PT3H25M` |

## Opérations

Pour chaque type, un ensemble de nodes couvre les opérations courantes. Exemple pour **Date** :

| Node | Effet |
|------|-------|
| `Create Date` | Crée une date depuis ses composants (année, mois, jour). |
| `Date From` | Parse une date depuis une chaîne. |
| `Date Now` | Date courante. |
| `Date Add` | Ajoute une `Duration` à la date. |
| `Substract` | Soustrait une `Duration`. |
| `Compare` | Compare deux dates. |
| `Since` / `Until` | Calcule la durée entre deux dates. |
| `To Date Time` | Convertit la date en `DateTime`. |

Les types **Time**, **DateTime** et **Duration** suivent la même convention de nommage (`Create DateTime`, `DateTime Add`, etc.).

Le node `Create Duration` se distingue : ses entrées sont optionnelles. Vous cochez les unités voulues (`years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`) et chaque case ajoute une entrée numérique sur le node. La sortie est une `Duration` ISO.

SCREEN_HERE: nodes Temporal dans le menu d'insertion.

SCREEN_HERE: node Create Duration avec quelques unités cochées et leurs entrées.
