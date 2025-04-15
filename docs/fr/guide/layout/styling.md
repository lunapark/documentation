# Stylisation

## Stylisation Globale

La stylisation globale de votre application est accessible depuis le bouton `Palette` de la barre supérieure de l'éditeur. Vous pouvez mettre à jour les couleurs primaires et de contenu, les nuances seront automatiquement générées.

Notez que vous pouvez faire correspondre les couleurs de l'éditeur avec celles de votre application en utilisant l'option de correspondance de l'éditeur. Cela peut rendre la construction plus facile pour vos yeux.

<DImage
src="../../../assets/layout-editor/styling-assets/screen3.png"
alt="Capture d'écran de l'éditeur Luna Park"
/>

## Stylisation des Éléments

Chaque élément de votre projet peut être stylisé individuellement dans l'inspecteur, sous l'onglet **style**. Cela vous permet de personnaliser l'apparence de chaque composant de votre application, comme le texte, les images ou les boutons.

Pour ajouter une catégorie de style (par exemple, couleur, typographie, taille), cliquez simplement sur le bouton **+** dans l'onglet style. Vous pouvez activer ou désactiver chaque propriété en cliquant sur son nom.

<DImage
src="../../../assets/layout-editor/styling-assets/screen2.png"
alt="Capture d'écran de l'éditeur Luna Park"
/>

_Note : Toutes les règles de stylisation disponibles dans Luna Park correspondent aux règles CSS trouvées dans les standards du web._

## Jetons de Design

Luna Park permet également l'utilisation de jetons de design. Ce sont des valeurs réutilisables qui garantissent un style cohérent dans toute l'application. Par exemple, vous pouvez définir une couleur principale et l'utiliser partout dans votre application. Cela facilite la gestion des styles et permet des modifications globales rapides.

<DImage
src="../../../assets/layout-editor/styling-assets/screen1.png"
alt="Capture d'écran de l'éditeur Luna Park"
/>

_Note : Pour l'instant, les jetons de design sont fixes. Il n'est pas encore possible de les modifier ou d'en ajouter dans l'éditeur._

Pour utiliser un jeton de design :

1. Passez la souris sur la valeur que vous souhaitez modifier.
2. Cliquez sur l'icône de lien pour passer en mode de sélection de jeton de design.
3. Sélectionnez le jeton de design que vous souhaitez utiliser.

![Capture d'écran de l'éditeur Luna Park](/assets/layout-editor/styling-assets/gif1.gif)

## Variables de Style

Il est également possible d'utiliser des variables pour styliser vos composants. Ces variables peuvent être utilisées dans les propriétés de style de vos composants. Cela vous permet de créer des styles dynamiques qui changent en fonction de l'état de votre application.

Pour utiliser une variable dans une propriété de votre composant :

1. Passez la souris sur la valeur que vous souhaitez lier à une variable.
2. Cliquez sur l'icône d'éclair pour passer en mode de sélection de variable.
3. Sélectionnez la variable que vous souhaitez utiliser.

![Capture d'écran de l'éditeur Luna Park](/assets/layout-editor/styling-assets/gif2.gif)

_Note : Seules les variables correspondant au type attendu pour cette propriété seront disponibles dans la liste. Par exemple, une variable numérique n'apparaîtra que pour une propriété attendue comme étant un nombre._
