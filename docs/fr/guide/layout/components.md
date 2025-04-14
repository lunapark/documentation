<script setup>
import {faSquare} from "@fortawesome/pro-regular-svg-icons";
import { faBolt, faBox, faGear, faPuzzlePiece, faQuoteLeft, faSprayCan, faCode } from "@fortawesome/pro-solid-svg-icons";
</script>

# Composants

Les fichiers de **composant** sont utilisés pour définir l'interface de votre application. Ils vous permettent de créer des éléments visuels réutilisables dans tout votre projet.

<DImage
src="/assets/layout-editor/page-layouts-assets/screen1.png"
alt="Capture d'écran de l'éditeur Luna Park"
/>

## Configuration des composants

Lorsque vous sélectionnez un fichier de composant, vous obtenez quelques options de configuration dans le panneau d'inspection. Voici les plus courantes :

- **Composant** - Cela vous permet de basculer entre le mode page et composant, ainsi que de changer le mode d'aperçu.
- **Propriétés** - Ici, vous pouvez ajouter des propriétés personnalisées qui seront disponibles en tant que variables dans votre composant.
- **Variables** - Ce sont les variables que vous souhaitez utiliser, mais qui ne sont pas exposées en tant que propriétés.
- **Calculées** - Les variables calculées sont des variables dont la valeur est automatiquement recalculée en fonction d'autres variables ou conditions.
- **Événements** - C'est ici que vous pouvez définir les événements qui peuvent être déclenchés par votre composant.
- **Défaut** - Dans cette section, vous pouvez écrire la valeur par défaut de vos propriétés et variables.

## Arborescence de la mise en page

L'arborescence de la mise en page accessible dans le panneau des options vous permet de construire l'architecture de votre composant. Pour ajouter un élément à l'arborescence, cliquez simplement sur le bouton. Certains éléments peuvent avoir des enfants. Ces emplacements pour les enfants sont appelés slots.

Voici quelques options à votre disposition pour chaque élément de mise en page, voici les plus courantes :

- <LIcon :icon="faSquare" /> **Bloc** - Type d'élément le plus basique, c'est juste une boîte qui peut avoir des enfants.
- <LIcon :icon="faSprayCan" /> **Bibliothèque UI** - Éléments UI préfabriqués pour accélérer la construction de votre application.
- <LIcon :icon="faBox" /> **Composant** - Utilisez l'un des composants personnalisés que vous avez créés.
- <LIcon :icon="faPuzzlePiece" /> **Slot** - Indique où les enfants de ce composant doivent aller.
- <LIcon :icon="faGear" /> **Modèle** - Cela vous permet de faire des rendus conditionnels ou en boucle.
- <LIcon :icon="faQuoteLeft" /> **Texte personnalisé** - Écrivez du texte en Markdown.
- <LIcon :icon="faCode" /> **HTML personnalisé** - Écrivez du code HTML personnalisé.
- <LIcon :icon="faBolt" /> **Variable** - Utilisez ce type d'élément pour afficher une variable.

## Pages

Pour définir un composant comme une **page**, changez simplement son type dans l'inspecteur. Vous pouvez ensuite définir un chemin pour accéder à la page. La page principale de votre application sera toujours `/` (sans rien après).

![Capture d'écran de l'éditeur Luna Park](/assets/layout-editor/page-layouts-assets/gif1.gif)
