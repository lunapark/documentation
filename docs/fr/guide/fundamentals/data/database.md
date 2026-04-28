<script setup>
import { faDatabase, faCodeBranch, faEye } from '@fortawesome/pro-solid-svg-icons'
</script>

# Base de données

La **base de données** dans Luna Park permet de récupérer et manipuler des données depuis votre backend. Les queries de base de données s'intègrent dans votre logique visuelle par des nodes dédiés qui connectent votre application aux endpoints de votre API.

## Requêtes de base de données

Une requête de base de données est un appel structuré à votre backend pour récupérer, créer, mettre à jour ou supprimer des données. Dans Luna Park, vous construisez ces requêtes via des nodes visuels dans le graphe de logique.

- <LIcon :icon="faDatabase" /> **Database Query** - Node qui exécute une requête vers votre backend et retourne les données récupérées.
- <LIcon :icon="faCodeBranch" /> **Paramètres** - Les valeurs dynamiques que vous passez à votre requête (filtres, identifiants, etc.).
- <LIcon :icon="faEye" /> **SQL Preview** - Affichage en temps réel du SQL généré par votre requête, avec coloration syntaxique et interpolation des valeurs.

## Construction de requêtes

Pour construire une requête de base de données, vous utilisez le node `Database Query` dans votre graphe de logique. Ce node vous permet de définir:

- La cible de votre requête (l'endpoint API ou la table visée).
- Les paramètres dynamiques à passer à la requête.
- Les conditions et filtres à appliquer.

Une fois configurée, la requête peut être connectée à d'autres nodes pour traiter les résultats ou déclencher d'autres actions.

SCREEN_HERE: node Database Query dans le graphe avec ses connecteurs d'entrée et de sortie.

## Aperçu SQL

Luna Park génère automatiquement le SQL correspondant à votre requête visuelle. Lorsque vous activez le mode `Preview` (aperçu), le node **Database Query** affiche un panneau latéral montrant:

- Le **SQL généré** - la requête SQL complète construite à partir de votre configuration visuelle.
- **Coloration syntaxique** - les mots-clés SQL (SELECT, FROM, WHERE, etc.) sont mis en évidence pour une meilleure lisibilité.
- **Valeurs interpolées** - les paramètres dynamiques sont affichés avec leurs valeurs réelles, ce qui vous permet de vérifier que votre requête envoie les bonnes données.

Cet aperçu SQL est utile pour:

- **Déboguer** - vérifier que la requête générée correspond à ce que vous attendez.
- **Optimiser** - identifier les requêtes inefficaces ou mal construites.
- **Comprendre** - voir exactement quel SQL votre configuration visuelle produit.

SCREEN_HERE: aperçu SQL affiché dans le mode Preview avec coloration syntaxique et valeurs interpolées.

## Exemple guidé: Récupérer et afficher des données

### 1. Créer une requête de base de données

1. Ouvrez votre composant et accédez au graphe de logique visuelle.
2. Insérez un node `Database Query` dans votre graphe.
3. Configurez la cible de la requête (l'endpoint ou la table).
4. Définissez les paramètres nécessaires (filtres, identifiants).

SCREEN_HERE: node Database Query configuré avec ses paramètres.

### 2. Connecter le résultat à un élément d'affichage

1. Connectez la sortie du node `Database Query` à un élément qui affiche les données (une liste, un tableau, etc.).
2. Mappez les champs retournés par la requête aux propriétés d'affichage de votre élément.

SCREEN_HERE: connexion du node Database Query à un élément d'affichage.

### 3. Activer le mode Preview et vérifier le SQL

1. Basculez en mode `Preview`.
2. Observez le panneau SQL dans le node `Database Query`.
3. Vérifiez que le SQL généré est correct et que les valeurs interpolées correspondent à vos attentes.

SCREEN_HERE: aperçu SQL affiché avec coloration syntaxique.

### 4. Tester et valider

- Exécutez votre application en mode Preview.
- Vérifiez que les données s'affichent correctement.
- Consultez l'aperçu SQL pour confirmer que chaque requête utilise les bons paramètres.