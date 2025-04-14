<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
</script>

# Éléments de Modèle

## Modèles If

Les éléments de modèle If permettent d'afficher ou de masquer des éléments de l'interface en fonction d'une condition.

Exemple : Afficher un message conditionnel avec une variable calculée

Dans cet exemple, nous allons afficher un message "Vous avez gagné" lorsque le score dépasse une certaine valeur. Pour ce faire, nous allons :

1. **Créer une variable calculée** pour vérifier si le score est supérieur à `10`.
2. **Utiliser cette variable calculée** pour afficher ou masquer un message dans l'interface.

### 1. Définir la Variable Calculée

1. Sélectionnez le composant **Layout**.
2. Dans le panneau **Inspecteur**, ajoutez une variable calculée appelée `afficherVictoire`.
3. Définissez-la comme un **booléen** (vrai ou faux).

![Capture d'écran de l'éditeur Luna Park](/assets/visual-scripting/flow-control/screen1.png)

### 2. Utiliser la Variable Calculée dans l'Interface

1. Ajoutez un élément **Modèle** à l'interface.
2. À l'intérieur du Modèle, insérez un composant de texte avec le message "Vous avez gagné".
3. Dans le panneau d'inspection, liez le composant **Modèle** à la condition `afficherVictoire`.
    - Si `afficherVictoire` est vrai, le message sera affiché.
    - Si `afficherVictoire` est faux, le message ne sera pas affiché.

<DImage
  src="/assets/visual-scripting/flow-control/screen2.png"
  alt="Capture d'écran de l'éditeur Luna Park"
/>

### 3. Définir la Logique pour la Variable Calculée

1. Dans le graphe, ajoutez un nœud **Obtenir le score** pour récupérer la valeur actuelle de la variable `score`.
2. Utilisez un nœud **Condition** (`A >= B`) pour vérifier si le score est supérieur ou égal à `10`.
3. Connectez le résultat de cette condition à la **variable calculée afficherVictoire**.

<DImage
  src="/assets/visual-scripting/flow-control/screen3.png"
  alt="Capture d'écran de l'éditeur Luna Park"
/>

### 4. Tester Votre Logique

- Modifiez le score en utilisant les boutons de l'interface.
- Lorsque le score atteint ou dépasse `10`, le message "Vous avez gagné" devrait apparaître automatiquement.

![Capture d'écran de l'éditeur Luna Park](/assets/visual-scripting/flow-control/gif1.gif)

## Modèles For

Le modèle For permet de répéter un élément plusieurs fois en fonction d'un tableau ou d'une liste. Il est utile pour afficher dynamiquement des éléments similaires dans l'interface.

Exemple : Afficher une liste d'articles

### 1. Créer la Page et la Variable Articles

1. Créez une nouvelle page nommée **Articles**.
2. Dans le panneau **Inspecteur**, ajoutez une variable de type **Tableau** (array) appelée `articles`.
3. Remplissez cette variable avec des valeurs, par exemple : <br/> <DSchemaValue :value='["sushi", "onigiri", "takoyaki", "tsukune"]'/>.

![Capture d'écran de l'éditeur Luna Park](/assets/visual-scripting/flow-control/screen4.png)

### 2. Configurer la Logique de Boucle

1. Ajoutez un composant **Modèle** à l'interface.
2. Configurez le Modèle avec la logique **For** et liez-le à la variable `articles`.
3. La logique For permet d'itérer sur chaque élément du tableau `articles`.
4. Le Modèle exécutera son contenu une fois pour chaque article.

![Capture d'écran de l'éditeur Luna Park](/assets/visual-scripting/flow-control/screen5.png)

### 3. Afficher les Éléments dans l'Interface

1. À l'intérieur du Modèle, ajoutez un **Div**.
2. Insérez un composant **Variable** dans ce div.
3. Liez cette variable à `Template[].Value`, qui correspond à chaque élément du tableau itéré.
4. Maintenant, lorsque vous visualisez la page **Articles** dans l'interface, vous verrez chaque élément du tableau `articles` affiché dans un nouveau bloc.

![Capture d'écran de l'éditeur Luna Park](/assets/visual-scripting/flow-control/screen6.png)