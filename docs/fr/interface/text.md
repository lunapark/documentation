---
description: "Écrivez du texte mis en forme dans Luna Park : le balisage des Custom text, les variables dans le texte, le Custom HTML et les fichiers Text."
---

<script setup lang="ts">
import EditingImage from '/assets/images/interface/text/editing.png';
import TypingVideo from '/assets/images/interface/text/typing.webm';
import PreviewTextImage from '/assets/images/interface/text/preview-text.png';
import TextFileImage from '/assets/images/interface/text/text-file.png';
</script>

# Texte

L'élément **Custom text** contient du texte écrit directement sur le canevas, avec mise en forme et variables. Ajoutez-en un depuis la liste des éléments de l'[arborescence](./builder#la-liste-des-elements), et choisissez sa **Tag** HTML dans le panneau **Element** : `span` (par défaut), `p`, `div`, `h1`, `h2` ou `h3`.

## Écrire sur le canevas

En [mode Builder](./preview#mode-builder), cliquez sur un Custom text du canevas pour le modifier sur place. Les marqueurs de mise en forme restent visibles pendant l'édition : vous voyez toujours ce que vous avez tapé.

<DImage
  :src="TypingVideo" :width="1280" :height="720"
  alt="Saisie à la fin d'un Custom text sur le canevas : le marqueur de gras est mis en forme pendant la saisie"
/>

Pour voir le texte comme les visiteurs, activez **Preview text** dans la barre d'outils sous la vue principale, ou passez en mode **Preview**.

<DImage
  :src="PreviewTextImage" :width="1280" :height="720"
  alt="Preview text activé : les marqueurs de mise en forme sont masqués et les emplacements stock et price affichent leurs valeurs"
/>

## Mise en forme

Entourez des mots d'un marqueur pour les mettre en forme :

| Vous tapez | Résultat |
|---|---|
| `*gras*` | **gras** |
| `/italique/` | *italique* |
| `_souligné_` | <u>souligné</u> |
| `~barré~` | ~~barré~~ |
| `=surligné=` | <mark>surligné</mark> |
| `` `code` `` | `code` |
| `[Luna Park](https://luna-park.app)` | un lien, ouvert dans un nouvel onglet |
| `https://luna-park.app` | un lien automatique |

Ce n'est pas du Markdown standard : `**gras**`, `_italique_` ou `# Titre` ne sont pas des mises en forme dans un Custom text. Pour un titre, choisissez plutôt une **Tag** `h1`, `h2` ou `h3`.

## Variables dans le texte

Tapez un nom entre accolades, comme `{price}`, pour insérer une valeur dans le texte. Chaque emplacement apparaît comme une propriété de l'élément dans le panneau **Properties** : [liez-la](./bindings) à une variable, une propriété du composant, un élément de boucle, ou donnez-lui une valeur constante.

```text
Plus que {stock} en stock, à partir de {price} €
```

<DImage
  :src="EditingImage" :width="1280" :height="720"
  alt="Custom text avec les emplacements stock et price, liés aux variables stock et price dans le panneau Properties"
/>

- Les noms contiennent des lettres, des chiffres, `_` et `$`.
- Renommer un emplacement conserve sa liaison.
- Les emplacements fonctionnent aussi dans les liens : `[Voir le produit](https://shop.example.com/{slug})`.
- Les valeurs sont insérées comme du texte : du HTML dans une valeur s'affiche tel quel, il n'est pas interprété.

En mode Builder, les emplacements affichent leur nom. **Preview text** affiche leurs valeurs.

## Custom HTML

L'élément **Custom HTML** affiche du HTML brut, pour du balisage que les autres éléments ne couvrent pas (une intégration, un SVG, un tableau). Modifiez-le dans l'éditeur de code de l'élément.

Insérez des valeurs avec des doubles accolades, comme `{{price}}`. Comme pour un Custom text, chaque emplacement devient une propriété à lier dans le panneau **Properties**. Contrairement au Custom text, les valeurs sont insérées comme du HTML : ne mettez jamais de valeurs saisies par les visiteurs dans un élément Custom HTML.

## Fichiers Text

Un fichier **Text** (**New > Text** dans l'Explorer) est un document fait de blocs, pour un contenu de plus de quelques lignes : un guide, des conditions d'utilisation, des notes de version. `Entrée` commence un nouveau bloc, et `Retour arrière` au début d'un bloc le fusionne avec le précédent.

Les fichiers Text utilisent la même mise en forme que les Custom text, plus un marqueur au début d'un bloc pour changer son type :

| Le bloc commence par | Résultat |
|---|---|
| `#` | Titre |
| `##` | Sous-titre |
| `###` | Petit titre |
| `"` | Citation |
| `-` | Liste à puces |
| `.` | Liste numérotée |
| `$` | Bloc de code |
| `\` | Paragraphe |

Écrivez le marqueur sans espace après : `#Notes de version`, `-Premier élément`. Dans une liste ou un bloc de code, un simple retour à la ligne ajoute un élément ou une ligne.

<DImage
  :src="TextFileImage" :width="1280" :height="720"
  alt="Fichier Text avec un titre, un paragraphe, un sous-titre, une liste, une citation et un bloc de code"
/>
