---
description: "Créez des composants visuels réutilisables pour les interfaces Luna Park."
---

<script setup>
import TypeToPageVideo from '/assets/images/layout/components/type-to-page.webm';
import Model from '/assets/images/layout/components/model.png';
import ModelBinding from '/assets/images/layout/components/model-binding.png';
import {faSquare} from "@fortawesome/pro-regular-svg-icons";
import { faBolt, faBox, faGear, faPuzzlePiece, faQuoteLeft, faCode } from "@fortawesome/pro-solid-svg-icons";

import Screen1 from '/assets/images/layout/components/editor.png';
</script>

# Composants

Les fichiers de **composant** sont utilisés pour définir l'interface de votre application. Ils vous permettent de créer des éléments visuels réutilisables dans tout votre projet.

<DImage
:src="Screen1" :width="1280" :height="720"
alt="Éditeur avec le composant Layout ouvert : explorateur, arbre des éléments, aperçu et inspecteur"
/>

## Configuration des composants

Lorsque vous sélectionnez un fichier de composant, vous obtenez quelques options de configuration dans le panneau d'inspection. Voici les plus courantes :

- **Composant** - Cela vous permet de basculer entre le mode page et composant, ainsi que de changer le mode d'aperçu (voir [Aperçu](./preview)), et d'ajouter un [model](#model).
- **Propriétés** - Ici, vous pouvez ajouter des propriétés personnalisées qui seront disponibles en tant que variables dans votre composant.
- **Variables** - Ce sont les variables que vous souhaitez utiliser, mais qui ne sont pas exposées en tant que propriétés.
- **Calculées** - Les variables calculées sont des variables dont la valeur est automatiquement recalculée en fonction d'autres variables ou conditions.
- **Événements** - C'est ici que vous pouvez définir les événements qui peuvent être déclenchés par votre composant.
- **Défaut** - Dans cette section, vous pouvez écrire la valeur par défaut de vos propriétés et variables.

## Arborescence de la mise en page

L'arborescence de la mise en page accessible dans le panneau des options vous permet de construire l'architecture de votre composant. Pour ajouter un élément à l'arborescence, cliquez simplement sur le bouton (voir [Builder](./builder) pour toutes les façons d'insérer des éléments). Certains éléments peuvent avoir des enfants. Ces emplacements pour les enfants sont appelés slots.

Voici quelques options à votre disposition pour chaque élément de mise en page, voici les plus courantes :

- <LIcon :icon="faSquare" /> **Bloc** - Type d'élément le plus basique, c'est juste une boîte qui peut avoir des enfants.
- <LIcon :icon="faBox" /> **Composant** - Utilisez l'un des composants personnalisés que vous avez créés.
- <LIcon :icon="faPuzzlePiece" /> **Slot** - Indique où les enfants de ce composant doivent aller.
- <LIcon :icon="faGear" /> **Modèle** - Cela vous permet de faire des rendus conditionnels ou en boucle.
- <LIcon :icon="faQuoteLeft" /> **Texte personnalisé** - Écrivez du texte mis en forme, avec des variables (voir [Texte](./text)).
- <LIcon :icon="faCode" /> **HTML personnalisé** - Écrivez du code HTML personnalisé.
- <LIcon :icon="faBolt" /> **Variable** - Utilisez ce type d'élément pour afficher une variable.

## Model

Un **model** est une valeur partagée dans les deux sens entre un composant et le composant qui l'utilise, comme la valeur d'un champ texte : le parent fournit une variable, le composant la lit et peut la modifier, et la variable du parent suit. Utilisez-le pour les composants qui modifient une valeur : une note, un sélecteur de couleur, un champ personnalisé.

### Ajouter un model

1. Cliquez sur le composant dans l'**Explorer**. Dans la section **Component** de l'inspector, cliquez sur **Add model** dans la ligne **Model**.
2. Choisissez son type (par exemple **Number** pour une note).

Un composant a un seul model. Les pages n'en ont pas. Le **×** de la ligne le supprime.

<DImage
  :src="Model" :width="1280" :height="720"
  alt="Section Component du composant Rating avec un model Number"
/>

### L'utiliser dans le composant

- Dans la logique, le node **Get Model** lit le model, et **Set Model** le modifie.
- Dans les [liaisons](./bindings#choisir-une-variable), le model apparaît sous le nom `<Nom du composant> Model`.

### Le lier depuis un parent

Sélectionnez une instance du composant dans l'arborescence du parent. Le panneau **Element** affiche une ligne **Model** : choisissez la variable à partager. **New variable** dans la liste en crée une du bon type.

Quand le composant appelle **Set Model**, la variable du parent change, et quand le parent modifie sa variable, le model du composant suit.

<DImage
  :src="ModelBinding" :width="1280" :height="720"
  alt="Instance de Rating sélectionnée dans une page, avec sa ligne Model liée à la variable score"
/>

La même ligne **Model** lie la valeur d'un élément **Input**, et des composants de plugins qui ont une valeur (une liste, une case à cocher...). Certains composants de plugins ont plusieurs models : ajoutez les autres avec le **+** de la ligne **Models**.

::: tip
Le model n'a pas de valeur par défaut dans l'application exportée : liez-le toujours dans le parent. Dans l'éditeur, un model non lié démarre à la valeur par défaut de son type.
:::

## Pages

Pour définir un composant comme une **page**, changez simplement son type dans l'inspecteur. Vous pouvez ensuite définir un chemin pour accéder à la page. La page principale de votre application sera toujours `/` (sans rien après). Voir [Pages et navigation](./navigation) pour les chemins, les segments dynamiques et les liens entre pages.

<DImage
  :src="TypeToPageVideo" :width="1280" :height="720"
  alt="Changement du type d'un composant en Page dans l'inspecteur"
/>
