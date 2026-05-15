<script setup lang="ts">
import InputNode from "/assets/images/data/input-node.png";
import OutputNode from "/assets/images/data/output-node.png";
import GetArticlesGraph from "/assets/images/data/get-articles-graph.png";
import ArticlesVariable from "/assets/images/data/articles-variable.png";
import OnMountedGraph from "/assets/images/data/onmounted-graph.png";
import TemplateComponent from "/assets/images/data/template-component.png";
import TemplateTitle from "/assets/images/data/template-title.png";
</script>

# Routes

Une **route** est un endpoint HTTP défini dans Luna Park. Elle encapsule de la logique côté serveur (requêtes en base, calculs, transformations) et l'expose à l'interface, qui peut l'appeler comme une fonction.

## Création d'une route

Dans l'**Explorer**, faites un clic droit puis **New → Route**. Deux propriétés principales :

- **Méthode HTTP** : `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.
- **Path** : le chemin de l'endpoint. Par défaut, il reprend le nom de la route (une route `get-articles` est exposée sur `/api/get-articles`).

## Anatomie d'une route

Le graphe d'une route va d'un node d'**input** à un node d'**output**. Entre les deux, vous branchez la logique : nodes BDD, opérations, conditions, etc.

### Input

Le node d'input expose les données reçues par la route, sur quatre ancrages optionnels :

- `headers` : entêtes HTTP (auth, content-type...).
- `body` : corps de la requête (typique pour `POST`, `PUT`, `PATCH`).
- `query` : paramètres de query string (`?id=5&limit=10`).
- `params` : paramètres de chemin (`/articles/:id`).

Vous récupérez ce dont vous avez besoin pour le passer aux nodes suivants. Par exemple, un `id` venant de `params` peut alimenter un `DB Find by Id`.

<DImage :src="InputNode" alt="Node d'input d'une route avec ses ancrages headers/body/query/params" />

### Output

Le node d'output reçoit ce que la route renvoie au caller. Tout ce que vous branchez sur son ancrage devient le corps de la réponse HTTP.

<DImage :src="OutputNode" alt="Node d'output d'une route branché sur le résultat d'un DB Find" />

## Appeler une route depuis l'interface

À chaque création de route, Luna Park génère automatiquement un node nommé comme la route (`get-articles`, `create-user`...). Vous l'utilisez directement dans le graphe d'un composant frontend : sa sortie contient la réponse, prête à brancher sur l'interface (par exemple un `Template` pour boucler dessus).

## Exemple guidé : afficher une liste d'articles

Cet exemple part d'une table `articles` (voir [Base de données](./database#préparer-la-table-articles) pour la créer), crée une route `get-articles` qui la lit, et affiche les résultats dans l'interface.

### 1. Créer la route `get-articles`

1. Créez une route nommée `get-articles`.
2. Dans ses propriétés, sélectionnez la méthode `GET`.
3. Dans le graphe de la route, ajoutez un node **DB Find** sur la table `articles`.
4. Branchez la sortie du **DB Find** sur l'output de la route.
5. Définissez la `Response` de l'output comme étant un `Array` d'`Object`.

<DImage :src="GetArticlesGraph" alt="Graphe de la route get-articles avec le DB Find branché sur l'output" />

### 2. Appeler la route depuis l'interface

1. Dans la page, créez une variable `articles` de type `Array` d'`Object` avec un champ `title` (string). Cela permettra de n'afficher que les titres dans l'interface, sans `id`, `created_at` ni `updated_at`.

   <DImage :src="ArticlesVariable" alt="Panneau des variables avec la variable articles définie comme Array d'Object avec le champ title" />

2. Dans le graphe, ajoutez un node `On Mounted` pour déclencher l'appel au chargement de la page, puis ajoutez le node `get-articles` et branchez sa sortie sur `Set articles`.

   <DImage :src="OnMountedGraph" alt="Graphe avec On Mounted branché sur get-articles, dont la sortie est branchée sur Set articles" />

3. Ajoutez un composant `Template` (boucle `For`) dans l'interface et liez-le à la variable `articles`.

   <DImage :src="TemplateComponent" alt="Composant Template dans l'interface, lié à la variable articles" />

4. À l'intérieur du template, créez un `Block` dans lequel vous allez mettre une variable que vous allez lier à `Template[].value.title` pour afficher le titre de chaque article.

   <DImage :src="TemplateTitle" alt="Texte à l'intérieur du template lié à Template[].value.title, avec la liste des titres rendue" />
