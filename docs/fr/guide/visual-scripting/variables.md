<script setup lang="ts">
import {LEditorConsoleValue, LEditorConsoleType} from "@luna-park/editor";
import {LogicType} from "@luna-park/logicnodes";
</script>

# Les variables

Les variables sont des conteneurs permettant de stocker des informations que vous pouvez utiliser et manipuler dans votre graphe.

Par exemple :

- un nom d'utilisateur (du texte)
- un score (un nombre)
- une liste d'articles (un tableau)

## Les types de variables

Voici les types données que vous pouvez utiliser :

- **Texte** (<LEditorConsoleType :schema="LogicType.string()" />), une chaine de caractères représentant du texte<br>
exemple : <LEditorConsoleValue value="Hello World" />
- **Nombre** (<LEditorConsoleType :schema="LogicType.number()" />), un nombre, positif ou négatif, avec ou sans virgule<br>
exemple : <LEditorConsoleValue :value="42" />
- **Booléen** (<LEditorConsoleType :schema="LogicType.boolean()" />), une valeur qui vaut `Vrai` ou `Faux`<br>
exemple : <LEditorConsoleValue :value="true" />
- **Tableau** (<LEditorConsoleType :schema="LogicType.array(LogicType.number())" />), une liste ordonnée de valeurs<br>
exemple : <LEditorConsoleValue :value="[1, 2, 3]" />
- **Object** (<LEditorConsoleType :schema="LogicType.object({name: LogicType.string(), age: LogicType.number()})" />), un ensemble de propriétés et de valeurs<br>
exemple : <LEditorConsoleValue :value="{ name: 'John', age: 30 }" />

### Les variables computed

Les variables **computed** sont des variables dont la valeur est automatiquement recalculée en fonction d'autres variables ou conditions. Elles sont également **réactives**.

## Définir, afficher et mettre à jour une variable

### 1. Définir une variable

1. Sélectionnez un composant dans l’éditeur en cliquant dessus dans l'explorateur
2. Dans le panneau d'inspection, ajoutez une variable en cliquant sur le bouton `+` dans la section **Variables**.
3. Donnez-lui un nom et un type (ex. : `score` de type **Nombre**).
4. Donnez-lui une valeur initiale dans la section **Default** (ex. : `0`).

![Capture d'écran de l'éditeur Luna Park](../../../assets/visual-scripting/variables/screen1.png)


### 2. Ajouter un élément d'affichage

1. Insérez un élément **Variable** dans l'arbre de votre composant.
2. Sélectionnez cet élément et associez-le à une variable dans le panneau d'inspection.

![Capture d'écran de l'éditeur Luna Park](../../../assets/visual-scripting/variables/screen2.png)

### 3. Ajouter des boutons pour modifier la variable

1. Ajoutez deux boutons dans l’interface, un pour **ajouter** et un pour **soustraire** un point au score.
2. Configurez les boutons pour qu’ils déclenchent un événement **On Click**.

![Capture d'écran de l'éditeur Luna Park](../../../assets/visual-scripting/variables/gif1.gif)


### 4. Créer la logique de mise à jour de la variable

1. Utilisez le nœud On Click connecté au bouton `+`.
2. Ajoutez les nœuds suivants :
   - `Get score` pour récupérer la valeur actuelle du score.
   - `Add (+)` pour ajouter `1` à cette valeur.
   - `Set score` pour mettre à jour la variable avec le nouveau score.
3. Répétez le processus pour le bouton `-`, mais utilisez le nœud `Subtract (-)` au lieu de `Add (+)`.

![Capture d'écran de l'éditeur Luna Park](../../../assets/visual-scripting/variables/screen3.png)


### 5. Tester et vérifier

- Passer en mode `Preview` pour tester votre application.
- Cliquez sur les boutons `+` et `-` dans l’interface.
- Vous devriez voir la valeur de la variable se mettre à jour en temps réel.

![Capture d'écran de l'éditeur Luna Park](../../../assets/visual-scripting/variables/gif2.gif)

## Réactivité des variables

### Dans l'interface

Les variables peuvent être utilisées pour afficher des informations dynamiques dans l'interface utilisateur. Si vous modifiez une variable, l'interface se met à jour automatiquement pour refléter cette modification.

### Les variables computed

Les variables **computed** sont des variables dont la valeur est automatiquement recalculée en fonction d’autres variables ou conditions.

Fonctionnement :

- Une variable **computed** dépend d’une ou plusieurs autres variables.
- Lorsque ces variables changent, la valeur de la variable **computed** est mise à jour automatiquement.

Imaginons que vous ayez une variable `score` et que vous souhaitiez afficher le double de ce score dans l'interface. Vous pouvez créer une variable **computed** qui double la valeur de `score`.

Si `score` est `10`, la variable **computed** affichera `20`. Si `score` change à `15`, la variable **computed** affichera automatiquement `30`.
