---
description: "Planifiez des tâches backend récurrentes dans Luna Park avec les fichiers cron."
---

# Cron

Un **cron** exécute de la logique backend selon un planning : envoyer un rapport quotidien, nettoyer les sessions expirées toutes les heures, synchroniser des données toutes les 5 minutes...

## Créer un cron

Dans l'**Explorer**, faites un clic droit et choisissez **New > Cron**. Son graphe démarre du nœud **Cron Input**, qui se déclenche à chaque horaire prévu. Branchez votre logique à la suite : nœuds de [base de données](./database), `Fetch`, [fonctions](../logic/scripts) backend...

Les crons s'exécutent sur le serveur, comme les [routes](./routes). Ils peuvent utiliser n'importe quel nœud backend.

## Planning

Sélectionnez le cron pour modifier son planning dans l'**Inspector**, sous **Cron settings**.

**Cron Time** comporte six champs :

| Champ | Signification | Valeurs |
|---|---|---|
| sec | seconde | 0 - 59 |
| min | minute | 0 - 59 |
| hour | heure | 0 - 23 |
| day | jour du mois | 1 - 31 |
| mth | mois | 1 - 12 |
| week | jour de la semaine (0 = dimanche) | 0 - 6 |

Chaque champ accepte :

- `*` : n'importe quelle valeur ;
- `*/n` : toutes les n valeurs ;
- `n/m` : toutes les m valeurs à partir de n ;
- `n` : une valeur précise ;
- `n-m` : une plage de valeurs.

Le menu **Quick setup** remplit les plannings courants (toutes les minutes, toutes les 5 minutes, chaque heure, jour, semaine, mois, année), et **Description** explique le planning actuel en clair (en anglais).

| Expression | S'exécute |
|---|---|
| `0 * * * * *` | Toutes les minutes |
| `0 */5 * * * *` | Toutes les 5 minutes |
| `0 0 9 * * 1-5` | À 9h00 en semaine |
| `0 0 0 1 * *` | Le premier jour de chaque mois, à minuit |

## Tester dans l'éditeur

Sous **Cron trigger** :

| Option | Description |
|---|---|
| **Active** | Indique si le cron est actif. |
| **Trigger** | Indique si le cron doit aussi se déclencher pendant que l'éditeur est ouvert. **Next trigger** affiche alors sa prochaine exécution. |
| **Manual trigger** | Exécute le cron immédiatement. |

::: tip
Laissez **Trigger** désactivé pendant que vous travaillez, et utilisez **Manual trigger** pour tester le cron quand vous en avez besoin.
:::

Dans l'application exportée, les crons démarrent avec le serveur backend.
