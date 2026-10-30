---
description: "Prévisualisez pages et composants dans l'éditeur : modes Builder et Preview, cadre de navigateur, tailles d'appareils, breakpoints, plein écran, captures d'écran et fenêtre d'aperçu détachée."
---

<script setup lang="ts">
import ResizeVideo from '/assets/images/layout/preview/resize.webm';
import DeviceSwitchVideo from '/assets/images/layout/preview/device-switch.webm';
import Frame from '/assets/images/layout/preview/frame.png';
import DeviceMenu from '/assets/images/layout/preview/device-menu.png';
import {faBan, faCode, faEye, faLock, faText, faWrench, faBolt} from "@fortawesome/pro-solid-svg-icons";
</script>

# Aperçu

La vue principale affiche en direct la page ou le composant en cours d'édition. La barre d'outils en bas à gauche choisit comment :

| Mode | Usage |
|---|---|
| <LIcon :icon="faWrench" /> **Builder** | Sélectionner, déplacer et modifier les éléments. Voir [Builder](./builder). |
| <LIcon :icon="faEye" /> **Preview** | Utiliser la page comme un visiteur : les événements s'exécutent, les conditions et boucles utilisent les vraies valeurs, les champs mettent à jour leurs variables. |
| <LIcon :icon="faBolt" /> **Logic** | Modifier le graphe du fichier. Voir [Le Graphe](../visual-scripting/graph). |

## Mode Builder

En mode Builder, le canevas est fait pour l'édition :

- survoler un élément le souligne, avec sa marge (vert) et son padding (bleu) ;
- l'élément sélectionné a un badge avec son nom et sa taille, et trois boutons : la poignée pour le déplacer, le **×** pour le supprimer et, sur une instance de composant, le crayon pour modifier son contenu sur place ;
- double-cliquez sur une instance de composant pour ouvrir son fichier ;
- maintenez `Ctrl` pour faire glisser n'importe quel élément directement ;
- maintenez `Ctrl + Alt` pour souligner tous les éléments sous le curseur, pas seulement le plus profond ;
- les boucles affichent leur premier élément et les conditions sont affichées, selon leur réglage **Simulation** (voir [Conditions et boucles](./templates)).

La barre d'outils a des boutons en plus en mode Builder :

| Bouton | Effet |
|---|---|
| **Show insert mode** | Affiche les points d'insertion sur le canevas. Voir [Builder](./builder#avec-le-mode-insertion). |
| <LIcon :icon="faBan" /> **Block interactions** | Activé par défaut : les clics sélectionnent les éléments, les événements ne s'exécutent pas, les liens ne naviguent pas et les champs ne modifient pas les variables. Désactivez-le pour essayer la page sans quitter le mode Builder. Les clics sélectionnent toujours les éléments. |
| <LIcon :icon="faText" /> **Preview text** | Affiche les éléments **Custom text** et **Variable** avec leur contenu et leurs valeurs finales, au lieu du texte modifiable et des noms de variables. |

## Boutons communs

| Bouton | Effet |
|---|---|
| <LIcon :icon="faLock" /> **Lock preview mode** | Garde le mode actuel quand vous ouvrez une autre page, depuis l'Explorer ou en suivant un lien. Sans lui, chaque page s'ouvre dans son dernier mode. |
| <LIcon :icon="faCode" /> **Preview code** | Affiche le code généré pour le fichier à côté de l'aperçu, en lecture seule. Disponible pour les composants, pages, scripts, stores, configurations, routes, crons, bases de données et médias. |
| **Detach** | Ouvre l'aperçu dans une nouvelle fenêtre, dans l'éditeur web. Voir [Aperçu détaché](#apercu-detache). |

## Le cadre de navigateur

Les pages s'affichent dans un cadre de navigateur.

<DImage
  :src="Frame" :width="1280" :height="720"
  alt="Page affichée dans le cadre de navigateur à 768 px, avec la barre d'adresse, la règle des breakpoints et la taille au-dessus du cadre"
/>

### Barre d'adresse

La barre d'adresse affiche le chemin de la page courante. Tapez un chemin et appuyez sur `Entrée` pour naviguer, par exemple `/articles/42` pour essayer une page avec un [segment dynamique](./navigation#segments-dynamiques). Quand vous ouvrez une page au chemin dynamique, ses paramètres contiennent les noms des segments (`:id`) jusqu'à ce que vous tapiez un vrai chemin.

Les liens dans le cadre font naviguer l'aperçu. Les liens vers d'autres sites s'ouvrent dans un nouvel onglet. En modes Preview et Logic, naviguer vers une autre page ouvre son fichier. En mode Builder, le fichier ouvert ne change pas, seule la route change.

### Appareil et taille

Le bouton d'appareil en haut du cadre (**Preview device**) choisit la taille du cadre :

| Appareil | Taille |
|---|---|
| **Fit** | La taille de la vue principale. |
| **Phone** | 390×844, dans un cadre d'appareil. |
| **Tablet** | 768×1024, dans un cadre d'appareil. |
| **Laptop** | 1280 px de large. |
| **Desktop** | 1920 px de large. |
| `xs` à `xxl` | La largeur d'un [breakpoint](../styling/tokens#strategie-responsive) : 480, 640, 768, 1024, 1280 ou 1440 px. |

<DImage
  :src="DeviceMenu" :width="1280" :height="720"
  alt="Menu Preview device avec Fit, Phone, Tablet, Laptop, Desktop et les breakpoints xs à xxl"
/>

<DImage
  :src="DeviceSwitchVideo" :width="1280" :height="720"
  alt="Passage de l'aperçu de Fit à Phone et retour avec le menu des appareils"
/>

<DImage
  :src="ResizeVideo" :width="1280" :height="720"
  alt="Glisser la poignée du cadre pour le redimensionner, avec l'indication de largeur et de breakpoint"
/>

- **Rotate** passe un téléphone ou une tablette en paysage.
- Faites glisser les poignées sur les côtés du cadre pour choisir n'importe quelle largeur (de 240 à 3840 px). La largeur s'aimante aux breakpoints, et une indication affiche la largeur et le breakpoint.
- La règle sous la barre d'adresse marque les breakpoints. Cliquez sur l'un d'eux pour donner sa largeur au cadre. Le breakpoint qui s'applique à la largeur actuelle est mis en évidence.

La taille, l'appareil et le zoom s'affichent au-dessus du cadre (`Phone - 390×844 - 62%`). Quand le cadre est plus grand que la vue principale, il est dézoomé : **Show at 100%** l'affiche à sa taille réelle (faites défiler pour voir le reste), **Fit to panel** le dézoome à nouveau.

L'appareil s'applique à toutes les pages, jusqu'à la réouverture du projet. Un projet avec une stratégie responsive mobile-first s'ouvre sur **Phone**, les autres sur **Fit**.

### Plein écran

**Expand to full screen** affiche l'aperçu sur tout l'éditeur. Appuyez sur `Échap` pour quitter.

### Capture d'écran

**Take a screenshot**, au-dessus du cadre, enregistre une image du cadre sous le nom `screenshot.png`. Le navigateur demande d'abord de partager l'onglet : acceptez pour prendre la capture. Le lien n'apparaît que dans les navigateurs qui prennent en charge le partage d'écran.

## Aperçu des composants

Les composants (pas les pages) s'affichent sur un canevas, sans cadre de navigateur. Deux réglages de la section **Component** de l'inspector contrôlent l'affichage :

| Réglage | Effet |
|---|---|
| **Preview** | **Compact** : le composant à sa taille naturelle, centré. **Stretch** : aussi large que le canevas. **Full** : tout le canevas. |
| **Container** | La largeur du conteneur autour du composant, pour le voir à une taille d'écran donnée : un appareil, un breakpoint ou une valeur personnalisée. Les styles responsive y réagissent. **Reset to default** l'efface. |
| **Panel** | Le mode d'ouverture du fichier : Builder, Preview ou Logic. |

Ces réglages sont enregistrés avec le composant.

## Aperçu détaché

Dans l'éditeur web, **Detach** ouvre la page ou le composant dans une nouvelle fenêtre, toujours en mode Preview. Placez-la sur un second écran pour voir le résultat pendant que vous modifiez : elle se met à jour en direct à chaque changement, sans enregistrer.

Si rien ne s'ouvre, autorisez les popups pour Luna Park dans votre navigateur, puis réessayez. La fenêtre détachée ne se met plus à jour quand l'éditeur est fermé.
