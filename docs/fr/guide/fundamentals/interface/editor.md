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

## La Vue Principale

Enfin, la vue principale est la partie centrale de l'éditeur. Elle affiche une visualisation du fichier de travail. Dans ce cas, le mode constructeur d'un composant de mise en page est sélectionné, donc il affiche le constructeur visuel de la mise en page.

<DImage
:src="Screen6"
alt="Capture d'écran de l'éditeur Luna Park"
/>
