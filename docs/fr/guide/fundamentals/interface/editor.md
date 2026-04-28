<script setup>
import Screen1 from '/assets/images/layout/editor/screen1.png';
import Screen2 from '/assets/images/layout/editor/screen2.png';
import Screen3 from '/assets/images/layout/editor/screen3.png';
import Screen4 from '/assets/images/layout/editor/screen4.png';
import Screen5 from '/assets/images/layout/editor/screen5.png';
import Screen6 from '/assets/images/layout/editor/screen6.png';
</script>

# Éditeur

L'éditeur vous permet de construire votre application en utilisant des mises en page et une logique visuelle. Il se compose de plusieurs panneaux qui servent différents objectifs.

<DImage
:src="Screen1"
alt="Capture d'écran de l'éditeur Luna Park"
/>

## L'Explorateur

L'explorateur est situé en haut à gauche de l'éditeur. Il vous permet de créer un nouveau fichier avec un `clic droit`, de le sélectionner avec un `double-clic`, et de le supprimer avec la touche `supprimer`. Vous pouvez créer des dossiers pour mieux organiser votre projet, mais la structure n'affecte pas la logique de votre application.

<DImage
:src="Screen2"
alt="Capture d'écran de l'éditeur Luna Park"
/>

## Panneau des Options

Le panneau des options est situé en bas à gauche de l'éditeur. Il affiche diverses informations relatives au fichier actuellement en cours d'utilisation. Ici, un composant de mise en page est ouvert, et le panneau des options affiche son arborescence de mise en page. Pour définir un fichier comme fichier de travail, vous devez le `double-cliquer` dans le panneau de l'explorateur.

<DImage
:src="Screen3"
alt="Capture d'écran de l'éditeur Luna Park"
/>

## L'Inspecteur

L'inspecteur est situé sur le côté droit de l'éditeur. Il affiche diverses informations relatives à l'élément sélectionné (un fichier, un élément de mise en page, un nœud logique, etc.). Ici, un élément de mise en page est sélectionné, et l'inspecteur affiche ses propriétés.

<DImage
:src="Screen4"
alt="Capture d'écran de l'éditeur Luna Park"
/>

## La Console

La console est située en bas de l'éditeur. Elle vous permet d'enregistrer des valeurs pour déboguer votre application. Pour afficher une valeur dans celle-ci, vous devez utiliser le nœud `log` dans l'éditeur de logique. Notez que la valeur sera également envoyée à la console de votre navigateur.

<DImage
:src="Screen5"
alt="Capture d'écran de l'éditeur Luna Park"
/>

### Redimensionner le Panneau de la Console

Le panneau de la console peut être redimensionné verticalement pour adapter l'espace qu'il occupe à vos besoins. Pointez votre curseur sur la bordure inférieure du panneau (elle devient une poignée de redimensionnement) et faites-la glisser vers le haut ou vers le bas pour ajuster la hauteur.

SCREEN_HERE: panneau de la console avec la poignée de redimensionnement visible sur la bordure inférieure.

## La Vue Principale

Enfin, la vue principale est la partie centrale de l'éditeur. Elle affiche une visualisation du fichier de travail. Dans ce cas, le mode constructeur d'un composant de mise en page est sélectionné, donc il affiche le constructeur visuel de la mise en page.

<DImage
:src="Screen6"
alt="Capture d'écran de l'éditeur Luna Park"
/>

## Indicateurs de Progression du Chargement

Lors de l'initialisation d'un projet, l'éditeur affiche des messages de progression détaillant chaque étape du processus:

- **Sanitizing** - Validation et nettoyage des structures du projet.
- **Migrating** - Migration vers le format actuel si nécessaire.
- **Populating** - Chargement des données du projet dans l'éditeur.

Ces messages vous donnent une meilleure visibilité sur le statut actuel du chargement.

SCREEN_HERE: fenêtre d'initialisation du projet montrant les messages de progression.

## Mode Immersif

Le **mode immersif** masque les panneaux latéraux (explorateur, inspecteur, console) pour maximiser l'espace disponible sur le canevas. Les panneaux réapparaissent lorsque vous en avez besoin.

Pour accéder aux panneaux en mode immersif:

- Appuyez sur `Tab` pour afficher ou masquer les panneaux rapidement.
- Cliquez sur les poignées situées sur les bords de l'écran pour faire glisser les panneaux.

Le mode immersif est idéal lorsque vous travaillez sur des mises en page complexes ou que vous souhaiter une vue dégagée du canevas.

SCREEN_HERE: éditeur en mode immersif avec panneaux cachés.

## Partage de Projets par URL

Les projets Luna Park peuvent être partagés en les encodant directement dans l'adresse URL du navigateur. Cette approche ne nécessite pas de sauvegarder le projet sur le serveur backend, ce qui est idéal pour partager rapidement des brouillons et des travaux en cours.

En mode hors ligne, cliquez sur le bouton d'enregistrement pour générer une URL partageable contenant votre projet compressé. Cette URL peut être partagée directement avec d'autres utilisateurs qui l'ouvriront sans avoir besoin d'une infrastructure serveur.

Pour partager un projet:

1. Terminez vos modifications en mode hors ligne.
2. Cliquez sur le bouton d'enregistrement.
3. Une URL partageable est générée et placée dans la barre d'adresse.
4. Copiez l'URL et partagez-la avec d'autres utilisateurs.
5. Les destinataires ouvrent l'URL directement dans le navigateur pour accéder au projet.

SCREEN_HERE: barre d'adresse montrant l'URL encodée contenant le projet.

## Icônes de Catégorie dans l'Inspecteur

Les titres des panneaux d'inspection affichent désormais des icônes visuelles pour identifier rapidement le type de panneau. Chaque catégorie a sa propre icône:

- **Explorateur** - icône d'arborescence pour identifier les fichiers et dossiers.
- **Variables** - icône de variable pour accéder à l'état du composant.
- **Nœuds** - icône de graphe pour identifier les panneaux de logique visuelle.
- **Propriétés** - icône de paramètres pour les options de mise en page et de style.

Ces icônes aident à naviguer rapidement entre les différents types d'inspecteur et rendent l'interface plus intuitive.

SCREEN_HERE: panneau d'inspection avec icônes de catégorie affichées à côté des titres.