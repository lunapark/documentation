# Éditeur de Luna Park

Le **Builder** Luna Park vous permet de construire votre application en utilisant des mises en page et une logique visuelle. Il est composé de plusieurs panneaux qui servent à différentes fins.

![Capture d'écran de l'éditeur Luna Park](../../../assets/layout-editor/luna-park-editor-assets/screen1.png)

## Panneau de l'explorateur

Le panneau de l'explorateur est situé en haut à gauche de l'éditeur. Il vous permet de créer un nouveau fichier avec un <Highlight text="clic droit"/>, de le sélectionner avec un <Highlight text="double clic"/>, et de le supprimer avec la touche <Highlight text="suppr"/>. Vous pouvez créer des dossiers pour mieux organiser votre projet, mais la structure n'affecte pas la logique de votre application.

![Capture d'écran de l'éditeur Luna Park](../../../assets/layout-editor/luna-park-editor-assets/screen2.png)

## Panneau d'options

Le panneau d'options se trouve en bas à gauche de l'éditeur. Il affiche diverses informations relatives au fichier en cours d'utilisation. Dans ce cas, un composant de mise en page est le fichier en cours, et le panneau d'options affiche son arbre de mise en page. Pour définir un fichier comme fichier de travail, vous devez <Highlight text="double cliquer"/> dessus dans le panneau de l'explorateur.

![Capture d'écran de l'éditeur Luna Park](../../../assets/layout-editor/luna-park-editor-assets/screen3.png)

## Panneau d'inspection

Le panneau d'inspection est situé sur le côté droit de l'éditeur. Il affiche diverses informations relatives à l'élément sélectionné (un fichier, un élément de mise en page, un nœud logique, etc.). Dans ce cas, un élément de mise en page est sélectionné, et l'inspecteur affiche tout ce qui le définit.

![Capture d'écran de l'éditeur Luna Park](../../../assets/layout-editor/luna-park-editor-assets/screen4.png)

## Panneau de la console

Le panneau de la console est situé en bas de l'éditeur. Il vous permet de journaliser des valeurs pour déboguer votre application. Pour afficher une valeur dedans, vous devez utiliser le nœud <Highlight text="Log"/> dans l'éditeur de logique. Gardez à l'esprit que la valeur sera également enregistrée dans la console de votre navigateur.

![Capture d'écran de l'éditeur Luna Park](../../../assets/layout-editor/luna-park-editor-assets/screen5.png)

## Vue

Enfin, la vue est la partie principale de l'éditeur. Elle affiche une visualisation du fichier de travail. Dans ce cas, le mode constructeur d'un composant de mise en page est sélectionné, donc elle affiche le constructeur visuel de la mise en page.

![Capture d'écran de l'éditeur Luna Park](../../../assets/layout-editor/luna-park-editor-assets/screen6.png)

# Mises en page de page

Les mises en page (Layout) sont un type spécial de composants. Elles sont utilisées pour définir la structure d'une page et seront accessibles depuis votre application.

![Capture d'écran de l'éditeur Luna Park](../../../assets/layout-editor/page-layouts-assets/screen1.png)

## Configuration du composant

Pour définir un composant comme composant de mise en page, il suffit de définir le **type** sur **page** dans le panneau d'inspection. Vous pourrez alors définir un **chemin** pour accéder à la page. La page principale de votre application doit être définie sur **/**.

![Capture d'écran de l'éditeur Luna Park](../../../assets/layout-editor/page-layouts-assets/gif1.gif)