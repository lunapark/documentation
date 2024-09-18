# Éditeur de Luna Park

L'éditeur Luna Park vous permet de construire votre application en utilisant des mises en page et une logique visuelle. Il est composé de plusieurs panneaux qui servent à différentes fins.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/luna-park-editor-assets/screen1.png)

## Panneau de l'explorateur

Le panneau de l'explorateur est situé en haut à gauche de l'éditeur. Il vous permet de créer un nouveau fichier avec un <Highlight text="clic droit"/>, de le sélectionner avec un <Highlight text="double clic"/>, et de le supprimer avec la touche <Highlight text="suppr"/>. Vous pouvez créer des dossiers pour mieux organiser votre projet, mais la structure n'affecte pas la logique de votre application.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/luna-park-editor-assets/screen2.png)

## Panneau d'options

Le panneau d'options se trouve en bas à gauche de l'éditeur. Il affiche diverses informations relatives au fichier en cours d'utilisation. Dans ce cas, un composant de mise en page est le fichier en cours, et le panneau d'options affiche son arbre de mise en page. Pour définir un fichier comme fichier de travail, vous devez <Highlight text="double cliquer"/> dessus dans le panneau de l'explorateur.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/luna-park-editor-assets/screen3.png)

## Panneau d'inspection

Le panneau d'inspection est situé sur le côté droit de l'éditeur. Il affiche diverses informations relatives à l'élément sélectionné (un fichier, un élément de mise en page, un nœud logique, etc.). Dans ce cas, un élément de mise en page est sélectionné, et l'inspecteur affiche tout ce qui le définit.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/luna-park-editor-assets/screen4.png)

## Panneau de la console

Le panneau de la console est situé en bas de l'éditeur. Il vous permet de journaliser des valeurs pour déboguer votre application. Pour afficher une valeur dedans, vous devez utiliser le nœud <Highlight text="Log"/> dans l'éditeur de logique. Gardez à l'esprit que la valeur sera également enregistrée dans la console de votre navigateur.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/luna-park-editor-assets/screen5.png)

## Vue

Enfin, la vue est la partie principale de l'éditeur. Elle affiche une visualisation du fichier de travail. Dans ce cas, le mode constructeur d'un composant de mise en page est sélectionné, donc elle affiche le constructeur visuel de la mise en page.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/luna-park-editor-assets/screen6.png)

<br/>

# Mises en page de page

Les mises en page de page sont un type spécial de composants. Elles sont utilisées pour définir la structure d'une page et seront accessibles depuis votre application.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/page-layouts-assets/screen1.png)

## Configuration du composant

Pour définir un composant comme composant de mise en page, il suffit de définir le **type** sur **page** dans le panneau d'inspection. Vous pourrez alors définir un **chemin** pour accéder à la page. La page principale de votre application doit être définie sur **/**.

## Vue

La vue d'une mise en page de page prend la forme d'un navigateur virtuel. Vous pouvez basculer vers l'affichage mobile ou afficher votre application en plein écran en utilisant les boutons en haut à droite du navigateur.

<br/>

# Stylisation

Luna Park vous permet de styliser votre application comme vous le souhaitez. Vous pouvez utiliser le panneau d'inspection pour styliser n'importe quel élément. Vous pouvez également utiliser la palette pour personnaliser les couleurs globales.

## Stylisation globale

La stylisation globale de votre application est accessible depuis le bouton **palette** dans la barre supérieure de l'éditeur. Les valeurs de **chroma** peuvent être interprétées comme la saturation de la couleur et sont accompagnées de valeurs **hue**.

Notez que vous pouvez **faire correspondre les couleurs de l'éditeur** avec les couleurs de votre application en utilisant l'option de correspondance de l'éditeur. Cela peut rendre la construction plus facile pour vos yeux.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/styling-assets/screen1.png)

## Stylisation des éléments

Chaque élément peut être stylisé individuellement en utilisant le panneau d'inspection, sous l'onglet **style**. Pour ajouter une catégorie de style, il suffit de cliquer sur le bouton **+** de l'onglet. Vous pouvez ensuite activer les propriétés en cliquant sur leur nom.

Notez que certaines valeurs peuvent utiliser des jetons de conception globale. Pour y accéder, survolez une valeur, puis survolez le cercle bleu qui devrait apparaître en haut à droite de la valeur, et sélectionnez l'icône **place icon**.

![Capture d'écran de l'éditeur Luna Park](../../assets/layout-editor/styling-assets/screen2.png)

<br/>

# Variables dynamiques

Toutes les variables sont dynamiques. Cela signifie que si la valeur d'une variable est modifiée à tout moment, elle mettra à jour tout ce qui en dépend dans votre application.

Pour utiliser des variables, survolez une valeur, puis survolez le cercle bleu qui devrait apparaître en haut à droite de la valeur, et sélectionnez l'icône **place icon**. Vous pouvez ensuite sélectionner la variable que vous souhaitez utiliser. Gardez à l'esprit que seules les variables du type attendu seront disponibles.
