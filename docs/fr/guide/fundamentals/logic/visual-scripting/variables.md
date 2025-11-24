<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";

import Screen1 from '/assets/images/visual-scripting/variables/screen1.png';
import Screen2 from '/assets/images/visual-scripting/variables/screen2.png';
import Screen3 from '/assets/images/visual-scripting/variables/screen3.png';
import Gif1 from '/assets/images/visual-scripting/variables/gif1.gif';
</script>

# Variables

Les variables sont des conteneurs utilisés pour stocker des informations que vous pouvez utiliser et manipuler dans votre graphe.

Par exemple :

- un nom d'utilisateur (texte)
- un score (un nombre)
- une liste d'éléments (un tableau)

## Types de variables

Voici les types de données que vous pouvez utiliser :

- **Texte** (<DSchemaType :schema="LogicType.string()" />), une chaîne de caractères représentant du texte<br>
  exemple : <DSchemaValue value="Hello World" />
- **Nombre** (<DSchemaType :schema="LogicType.number()" />), un nombre, positif ou négatif, avec ou sans décimale<br>
  exemple : <DSchemaValue :value="42" />
- **Booléen** (<DSchemaType :schema="LogicType.boolean()" />), une valeur qui est soit `Vrai` soit `Faux`<br>
  exemple : <DSchemaValue :value="true" />
- **Tableau** (<DSchemaType :schema="LogicType.array(LogicType.number())" />), une liste ordonnée de valeurs<br>
  exemple : <DSchemaValue :value="[1, 2, 3]" />
- **Objet** (<DSchemaType :schema="LogicType.object({name: LogicType.string(), age: LogicType.number()})" />), un ensemble de propriétés et de valeurs<br>
  exemple : <DSchemaValue :value="{ name: 'John', age: 30 }" />

### Variables calculées

Les variables **calculées** sont des variables dont la valeur est automatiquement recalculée en fonction d'autres variables ou conditions. Elles sont également **réactives**.

## Définir, afficher et mettre à jour une variable

### 1. Définir une Variable

1. Sélectionnez un composant dans l'éditeur en cliquant dessus dans l'explorateur.
2. Dans le panneau d'inspection, ajoutez une variable en cliquant sur le bouton `+` dans la section **Variables**.
3. Donnez-lui un nom et un type (par exemple, `score` de type **Nombre**).
4. Donnez-lui une valeur initiale dans la section **Défaut** (par exemple, `0`).

<DImage
:src="Screen1"
alt="Capture d'écran de l'éditeur Luna Park"
/>

### 2. Ajouter un élément d'affichage

1. Insérez un élément **Variable** dans l'arborescence de votre composant.
2. Sélectionnez cet élément et liez-le à une variable dans le panneau d'inspection.

<DImage
:src="Screen2"
alt="Capture d'écran de l'éditeur Luna Park"
/>

### 3. Ajouter des boutons pour modifier la variable

1. Ajoutez deux boutons à l'interface, un pour **ajouter** et un pour **soustraire** un point au score.
2. Configurez les boutons pour déclencher un événement **On Click**.

<DImage
:src="Gif1"
alt="Capture d'écran de l'éditeur Luna Park"
/>

### 4. Créer la logique pour mettre à jour la variable

1. Utilisez le nœud On Click connecté au bouton `+`.
2. Ajoutez les nœuds suivants :
   - `Get score` pour récupérer la valeur actuelle du score.
   - `Add (+)` pour ajouter `1` à cette valeur.
   - `Set score` pour mettre à jour la variable avec le nouveau score.
3. Répétez le processus pour le bouton `-`, mais utilisez le nœud `Subtract (-)` au lieu de `Add (+)`.

<DImage
:src="Screen3"
alt="Capture d'écran de l'éditeur Luna Park"
/>

### 5. Tester et vérifier

- Passez en mode **Aperçu** pour tester votre application.
- Cliquez sur les boutons `+` et `-` dans l'interface.
- Vous devriez voir la valeur de la variable se mettre à jour en temps réel.

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/variables/gif2.gif)

## Réactivité des variables

### Dans l'interface

Les variables peuvent être utilisées pour afficher des informations dynamiques dans l'interface utilisateur. Si vous modifiez une variable, l'interface se met automatiquement à jour pour refléter ce changement.

### Variables calculées

Les variables **calculées** sont des variables dont la valeur est automatiquement recalculée en fonction d'autres variables ou conditions.

Comment cela fonctionne :

- Une variable **calculée** dépend d'une ou plusieurs autres variables.
- Lorsque ces variables changent, la valeur de la variable **calculée** est automatiquement mise à jour.

Imaginez que vous avez une variable `score` et que vous souhaitez afficher le double de ce score dans l'interface. Vous pouvez créer une variable **calculée** qui double la valeur de `score`.

Si `score` est `10`, la variable **calculée** affichera `20`. Si `score` change à `15`, la variable **calculée** affichera automatiquement `30`.
