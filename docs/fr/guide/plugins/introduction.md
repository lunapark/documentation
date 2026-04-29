# Introduction

Cette section couvre la création de plugins pour Luna Park. Si vous cherchez plutôt à installer et utiliser un plugin existant, voir [Intégrations > Plugins](/fr/guide/integrations/plugins).

## Ce qu'un plugin peut étendre

Un plugin peut exposer :

- **Composants personnalisés** : des composants Vue qui apparaissent dans la palette de l'éditeur, avec leurs props, slots, événements et modèles typés.
- **Nœuds logiques personnalisés** : des opérations et fonctions disponibles dans le graphe de script visuel.
- **Design tokens** : des valeurs de style réutilisables (couleurs, longueurs, polices) qui apparaissent dans le panneau de style.
- **Hooks de cycle de vie** : du code qui s'exécute au montage, à la mise à jour ou au démontage du plugin.
- **Injections** : du CSS ou du JavaScript injecté dans l'éditeur.
- **Fenêtres personnalisées** : des panneaux d'interface sur mesure ouverts depuis votre plugin.
- **Templates** : des compositions prêtes à l'emploi que les utilisateurs peuvent importer dans leurs projets.

## Prérequis

- **TypeScript** pour la définition du plugin.
- **Vue** si vous exposez des composants personnalisés.

## Démarrer

1. [Configuration de l'environnement](./setup) pour initialiser un projet de plugin.
2. [Bases](./basics) pour la structure d'un plugin (id, config, état interne, hooks).
3. Les sections suivantes couvrent les composants, nœuds, tokens, et le déploiement.
