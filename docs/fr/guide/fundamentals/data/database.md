# Base de données

Luna Park intègre une base de données SQL dans l'éditeur. Pas de serveur, pas de configuration : vous créez des tables, vous y stockez des lignes, vous les interrogez depuis le graphe.

::: info pglite
La BDD est une instance **pglite** (Postgres compilé en WebAssembly). Tout le SQL standard de Postgres marche : types, contraintes, jointures, sous-requêtes, CTE.
:::

## Tables

Une table contient des lignes typées par colonnes. Le panneau **Database** permet de :

- créer une table et définir ses colonnes (nom, type, contraintes) ;
- ajouter, modifier ou supprimer des lignes à la main ;
- inspecter le contenu en temps réel.

SCREEN_HERE: panneau Database avec une table et ses colonnes affichées.

## Interroger la base

Les nodes de base de données s'utilisent **dans le graphe d'une route** (voir [Routes](./routes)), pas directement dans le graphe d'un composant frontend. La route encapsule la requête et l'expose à l'interface.

### Nodes spécialisés

Luna Park fournit un node par opération SQL courante. La configuration est visuelle (table, paramètres, filtres), le SQL est généré derrière.

| Catégorie       | Nodes                                                |
|-----------------|------------------------------------------------------|
| **Lecture**     | `DB Find`, `DB Find by Id`, `DB Group By`, `DB Join` |
| **Écriture**    | `DB Insert`, `DB Update`                             |
| **Suppression** | `DB Delete`, `DB Delete by Id`                       |

Les paramètres se branchent sur les ancrages d'entrée : un id venant d'une variable, une valeur de filtre venant d'un input, etc.

SCREEN_HERE: node DB Find configuré sur une table, avec ses paramètres et son ancrage de sortie.

### Aperçu SQL

Pour voir le SQL réellement exécuté par un node, sélectionnez-le et cliquez sur **Preview** dans sa config. Les paramètres dynamiques (`$1`, `$2`...) sont remplacés par les vraies valeurs envoyées. Utile pour debug une requête qui ne renvoie pas ce qu'on attend.

SCREEN_HERE: aperçu SQL d'un node DB Find avec valeurs interpolées.

## Exemple guidé : afficher une liste d'articles

On liste tous les articles d'une table `articles`, triés par date de création.

### 1. Créer la table `articles`

1. Ouvrez le panneau **Database**.
2. Créez une table `articles` avec les colonnes :
   - `id` (entier, clé primaire) ;
   - `title` (texte) ;
   - `created_at` (timestamp).
3. Insérez quelques lignes de test.

SCREEN_HERE: table articles avec ses 3 colonnes et 2-3 lignes d'exemple.

### 2. Créer la route `get-articles`

1. Créez une route nommée `get-articles` (voir [Routes](./routes) pour le détail).
2. Dans ses propriétés, sélectionnez la méthode `GET`.
3. Dans le graphe de la route, ajoutez un node **DB Find** sur la table `articles`, trié par `created_at` en ordre descendant.
4. Branchez la sortie du **DB Find** sur l'output de la route.

SCREEN_HERE: graphe de la route get-articles avec le DB Find branché sur l'output.

### 3. Appeler la route depuis l'interface

1. Dans le graphe du composant qui doit afficher la liste, ajoutez le node `get-articles` (auto-généré à la création de la route).
2. Ajoutez un composant `Template` (boucle `For`) dans l'interface.
3. Branchez le `Template` sur la sortie du node `get-articles`.
4. À l'intérieur, mettez un texte lié à `Template[].title`.

SCREEN_HERE: composant frontend appelant get-articles, avec la liste rendue.

### 4. Vérifier la requête

En mode **Preview**, le node **DB Find** affiche le SQL généré :

```sql
SELECT * FROM articles ORDER BY created_at DESC
```

::: info Note
Avec un filtre dynamique (ex : ne garder que les articles d'un auteur passé en `query` de la route), l'aperçu remplace `$1` par la vraie valeur passée.
:::
