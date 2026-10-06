---
description: "Découvrez les panneaux, la barre supérieure, les modes et les raccourcis clavier de l'éditeur Luna Park."
---

<script setup lang="ts">
import Screen1 from '/assets/images/layout/editor/screen1.png';
import Screen2 from '/assets/images/layout/editor/screen2.png';
import Screen3 from '/assets/images/layout/editor/screen3.png';
import Screen4 from '/assets/images/layout/editor/screen4.png';
import Screen5 from '/assets/images/layout/editor/screen5.png';
import Screen6 from '/assets/images/layout/editor/screen6.png';
import ImmersiveMode from '/assets/images/layout/editor/immersive-mode.png';
</script>

# Éditeur

L'éditeur vous permet de construire votre application en utilisant des mises en page et une logique visuelle. Il se compose de plusieurs panneaux qui servent différents objectifs. Chaque panneau est redimensionnable, et sa taille est mémorisée.

<DImage
:src="Screen1" :width="1280" :height="720"
alt="Vue d'ensemble de l'éditeur Luna Park"
/>

## L'Explorateur

L'explorateur est situé en haut à gauche de l'éditeur. Il liste les [fichiers de votre projet](../project-files). Créez un nouveau fichier avec un `clic droit`, ouvrez-le avec un `double-clic`, renommez-le avec `F2` et supprimez-le avec la touche `Suppr`. Vous pouvez créer des dossiers pour mieux organiser votre projet, mais la structure n'affecte pas la logique de votre application.

Le bouton de tri bascule entre un tri par type et un tri par nom.

<DImage
:src="Screen2" :width="1280" :height="720"
alt="Panneau de l'explorateur avec les fichiers du projet"
/>

## Panneau des Options

Le panneau des options est situé en bas à gauche de l'éditeur. Son contenu dépend du fichier ouvert :

- pour une page ou un composant, il affiche l'**arborescence de mise en page** (utilisez **Collapse layout** pour la replier) ;
- pour un script, une route ou un store, il liste ses variables locales (**Local Variables**) et ses fonctions (**Functions**).

<DImage
:src="Screen3" :width="1280" :height="720"
alt="Panneau des options affichant l'arborescence d'un composant"
/>

## Onglets

Chaque fichier ouvert a un onglet au-dessus de la vue principale. Faites un clic droit sur un onglet pour le fermer (**Close**), fermer les autres (**Close other tabs**) ou tous les fermer (**Close all tabs**).

## L'Inspecteur

L'inspecteur est situé sur le côté droit de l'éditeur. Il affiche les informations de l'élément sélectionné (un fichier, un élément de mise en page, un nœud logique, etc.). Utilisez le bouton d'épingle pour le garder sur l'élément courant pendant que vous en sélectionnez d'autres.

<DImage
:src="Screen4" :width="1280" :height="720"
alt="Inspecteur affichant les propriétés d'un élément de mise en page"
/>

## La Console

La console est située en bas de l'éditeur. Elle vous permet d'afficher des valeurs pour déboguer votre application. Pour afficher une valeur, utilisez le nœud `Log` dans l'éditeur de logique. La valeur est aussi envoyée à la console de votre navigateur.

Le panneau du bas a un second onglet, **Templates**, qui liste les blocs prêts à l'emploi fournis par vos plugins. Glissez-en un dans votre mise en page pour l'utiliser.

Pointez votre curseur sur la bordure du panneau et faites-la glisser pour le redimensionner, ou utilisez le bouton de bascule pour le masquer.

<DImage
:src="Screen5" :width="1280" :height="720"
alt="Panneau de la console avec des valeurs affichées"
/>

## La Vue Principale

La vue principale est la partie centrale de l'éditeur. Elle affiche le fichier de travail. Pour une page ou un composant, trois modes sont disponibles :

| Mode | Description |
|---|---|
| **Builder** | Modifiez la mise en page visuellement. Des panneaux latéraux donnent accès à **Quick style**, **Properties**, **Events**, **Rendering**, **Classes**, **Style**, **Media query** et **Hover**. |
| **Preview** | Utilisez le composant comme dans l'application finale. |
| **Logic** | Modifiez le graphe de script visuel du composant. |

D'autres options permettent d'ouvrir l'aperçu dans une nouvelle fenêtre (**Open preview in new window**), de bloquer les interactions (**Block interactions**), de verrouiller le mode aperçu (**Lock preview mode**) et d'afficher ou masquer le mode insertion.

<DImage
:src="Screen6" :width="1280" :height="720"
alt="Vue principale en mode builder"
/>

## Navigator et Finder

Appuyez deux fois sur `Shift` pour ouvrir le **Navigator** :

- appuyez sur `F` pour le **Finder** : cherchez n'importe quel fichier ou élément du projet, déplacez-vous avec les flèches et ouvrez avec `Entrée`. Raccourci : `Ctrl + Shift + F` ;
- appuyez sur `S` pour [Sidekick](../../getting-started/sidekick-settings), l'assistant IA. Raccourci : `Ctrl + Shift + X`.

`Échap` le ferme.

## La Barre Supérieure

| Bouton | Contenu |
|---|---|
| Save / Auto-save | Sauvegarder le projet, ou activer la sauvegarde automatique. |
| Undo / Redo | Annuler ou rétablir la dernière modification. |
| **Palette** | Les design [tokens](./styling/tokens) (couleurs, longueurs, polices), l'injection de code et la stratégie responsive. Voir [Palette](./styling/palette). |
| **Stores** | Réinitialiser tous les [stores](../logic/store), ou effacer leurs valeurs enregistrées dans le navigateur. |
| **Libraries** | Activer des [bibliothèques de nœuds](../logic/visual-scripting/libraries), installer des [plugins](../../integrations/plugins) et des [packages npm](../../integrations/npm). |
| **Sidekick AI** | Ouvrir [Sidekick](../../getting-started/sidekick-settings) et configurer son fournisseur. |
| **General Settings** | Nom de l'application, PWA et mode d'historique (voir [Compilation](../../deployment/compilation)). |
| **Backend Settings** | **Proxy** sortant, **Cookie salt** et cookies stockés par le backend de l'éditeur. |
| **Compile** | Déployer ou exporter l'application (voir [Compilation](../../deployment/compilation)). |
| Plugins | Un bouton par plugin installé, avec sa configuration (**Config**) et ses réglages (**Settings**). |
| **History** | Instantanés locaux du fichier courant. Ils ne sont pas sauvegardés. |
| **Debug** | **Import/Export** : copier tout le projet dans le presse-papiers, ou en coller un. |
| **Flags** | Options de l'éditeur (**Autosave**, **Immersive**, **Light Mode**) et de session (animations, affichage de débogage...). |
| **Help** | Liens vers Discord, YouTube et cette documentation. |

L'[application desktop](../../getting-started/desktop-app) ajoute les boutons **MCP server** et **Native app**.

## Raccourcis Clavier

| Contexte | Raccourci | Action |
|---|---|---|
| Partout | `Ctrl + S` | Sauvegarder |
| Partout | `Ctrl + Z` / `Ctrl + Y` | Annuler / Rétablir |
| Partout | `Shift` `Shift` | Navigator |
| Partout | `Ctrl + Shift + F` | Finder |
| Partout | `Ctrl + Shift + X` | Sidekick |
| Explorateur, arborescence, variables | `Ctrl + X` / `C` / `V` | Couper / Copier / Coller |
| Explorateur, arborescence, variables | `F2` | Renommer |
| Explorateur, arborescence, variables | `Suppr` | Supprimer |
| Builder | Maintenir `Ctrl` | Déplacer rapidement les éléments |
| Graphe de logique | Voir [Le Graphe](../logic/visual-scripting/graph) | |

Faites un clic droit sur un élément de mise en page pour plus d'actions : **Create before**, **Create after**, **Create inside**, **Wrap in component**, **Unwrap and delete**, **Copy Style** et **Paste Style**.

## Mode Immersif

Le **mode immersif** masque les panneaux latéraux (explorateur, inspecteur, console) pour maximiser l'espace disponible sur le canevas. Les panneaux réapparaissent lorsque vous en avez besoin.

Activez-le en cochant **Immersive** dans le menu **Flags** de la barre supérieure.

Une fois fermés, les panneaux apparaissent comme une fine barre avec leur nom sur les bords de l'écran. Survolez la barre d'un panneau pour le rouvrir.

Le mode immersif est idéal lorsque vous travaillez sur des mises en page complexes ou que vous souhaitez une vue dégagée du canevas.

<DImage :src="ImmersiveMode" :width="2560" :height="1440" alt="Éditeur en mode immersif avec panneaux cachés" />
