# Routes

Une **route** est un endpoint HTTP défini dans Luna Park. Elle encapsule de la logique côté serveur (requêtes en base, calculs, transformations) et l'expose à l'interface, qui peut l'appeler comme une fonction.

## Création d'une route

Créez une route depuis le panneau **Routes**. Deux propriétés principales :

- **Nom** : sert d'identifiant et de chemin (ex : `get-articles`).
- **Méthode HTTP** : `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.

SCREEN_HERE: panneau Routes avec une route get-articles et ses propriétés.

## Anatomie d'une route

Le graphe d'une route va d'un node d'**input** à un node d'**output**. Entre les deux, vous branchez la logique : nodes BDD, opérations, conditions, etc.

### Input

Le node d'input expose les données reçues par la route, sur quatre ancrages optionnels :

- `headers` : entêtes HTTP (auth, content-type...).
- `body` : corps de la requête (typique pour `POST`, `PUT`, `PATCH`).
- `query` : paramètres de query string (`?id=5&limit=10`).
- `params` : paramètres de chemin (`/articles/:id`).

Vous récupérez ce dont vous avez besoin pour le passer aux nodes suivants. Par exemple, un `id` venant de `params` peut alimenter un `DB Find by Id`.

SCREEN_HERE: node d'input d'une route avec ses ancrages headers/body/query/params.

### Output

Le node d'output reçoit ce que la route renvoie au caller. Tout ce que vous branchez sur son ancrage devient le corps de la réponse HTTP.

SCREEN_HERE: node d'output d'une route branché sur le résultat d'un DB Find.

## Appeler une route depuis l'interface

À chaque création de route, Luna Park génère automatiquement un node nommé comme la route (`get-articles`, `create-user`...). Vous l'utilisez directement dans le graphe d'un composant frontend : sa sortie contient la réponse, prête à brancher sur l'interface (par exemple un `Template` pour boucler dessus).

SCREEN_HERE: node get-articles auto-généré dans le graphe d'un composant frontend.

::: info Exemple complet
La page [Base de données](./database) contient un exemple guidé qui enchaîne toutes les étapes : créer une table, créer une route qui l'interroge, appeler la route depuis l'interface.
:::
