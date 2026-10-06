---
description: "Découvrez comment distribuer des plugins Luna Park en privé ou publiquement."
---

# Déploiement

Construisez votre plugin avec `pnpm run build`. L'éditeur charge les plugins comme modules ES depuis [esm.sh](https://esm.sh), en gardant `vue`, `vue-router` et `@luna-park/design` externes : déclarez-les comme peer dependencies.

## Distribution restreinte

Si vous souhaitez distribuer votre plugin de manière privée, vous pouvez l'héberger sur GitHub et utiliser un service comme [pkg.pr.new](https://pkg.pr.new/). Les utilisateurs devront saisir manuellement l'URL de votre plugin dans le champ **Install from URL**.

## Distribution publique

Pour rendre votre plugin découvrable dans la recherche de plugins de Luna Park, publiez-le sur npm avec les mots-clés `luna-park` et `plugin` dans son `package.json` :

```json
{
    "keywords": ["luna-park", "plugin"]
}
```

Les plugins publiés hors du scope `@luna-park/` affichent une confirmation avant d'être installés.

## Dans les applications compilées

À la compilation d'un projet, les options `build` du plugin sont appliquées : dépendances, variables d'environnement et injections de code (voir [Backend et build](./backend#build)). Vérifiez que chaque nœud, composant et guard que les utilisateurs peuvent ajouter a ce qu'il faut pour fonctionner hors de l'éditeur :

- nœuds : une méthode autonome ou `build.generate` (voir [Nœuds personnalisés](./nodes#code-compile)) ;
- composants : `build.imports` (voir [Composants personnalisés](./components#application-compilee)) ;
- guards : `build.generate`.
