<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";

import Screen2 from '/assets/images/layout/templates/screen2.png';
import Screen3 from '/assets/images/layout/templates/screen3.png';
import Screen6 from '/assets/images/layout/templates/screen6.png';
</script>

# Modèles (ou `Templates`)

## Templates If

Le Template `If` permet d'afficher ou de masquer des éléments de l'interface en fonction d'une condition.

Exemple : Afficher un message conditionnel avec une variable calculée

Dans cet exemple, nous allons afficher un message "Vous avez gagné" lorsque le score dépasse une certaine valeur. Pour ce faire, nous allons :

1. **Créer une variable `Computed`** pour vérifier si le score est supérieur à `10`.
2. **Utiliser cette variable `Computed`** pour afficher ou masquer un message dans l'interface.

### 1. Définir la Variable Calculée (ou `Computed`)

1. Sélectionnez le composant **Layout**.
2. Dans le panneau **Inspecteur**, ajoutez une variable `Computed` appelée `afficherVictoire`.
3. Définissez-la comme un **booléen** (vrai ou faux).

![Capture d'écran de l'éditeur Luna Park](/assets/images/layout/templates/screen1.png)

### 2. Utiliser la Variable `Computed` dans l'Interface

1. Ajoutez un élément `Template` à l'interface.
2. À l'intérieur du `Template`, insérez un composant de texte avec le message "Vous avez gagné".
3. Dans le panneau d'inspection, liez le composant `Template` à la condition `afficherVictoire`.
    - Si `afficherVictoire` est vrai, le message sera affiché.
    - Si `afficherVictoire` est faux, le message ne sera pas affiché.

<DImage
:src="Screen2"
alt="Screenshot of the Luna Park editor"
/>

### 3. Définir la Logique pour la Variable Calculée

1. Dans le graphe, ajoutez un nœud `Get score` pour récupérer la valeur actuelle de la variable `score`.
2. Utilisez un nœud **Condition** (`A >= B`) pour vérifier si le score est supérieur ou égal à `10`.
3. Connectez le résultat de cette condition à la **variable `Computed` afficherVictoire**.

<DImage
:src="Screen3"
alt="Screenshot of the Luna Park editor"
/>

### 4. Tester Votre Logique

- Modifiez le score en utilisant les boutons de l'interface.
- Lorsque le score atteint ou dépasse `10`, le message "Vous avez gagné" devrait apparaître automatiquement.

![Capture d'écran de l'éditeur Luna Park](/assets/images/layout/templates/gif1.gif)

## Template For

Le Template `For` permet de répéter un élément plusieurs fois en fonction d'un tableau ou d'une liste. Il est utile pour afficher dynamiquement des éléments similaires dans l'interface.

Exemple : Afficher une liste d'articles

### 1. Créer la Page et la Variable Articles

1. Créez une nouvelle page nommée **Articles**.
2. Dans le panneau **Inspecteur**, ajoutez une variable de type **Tableau** (array) appelée `articles`.
3. Remplissez cette variable avec des valeurs, par exemple : <br/> <DSchemaValue :value='["sushi", "onigiri", "takoyaki", "tsukune"]'/>.

![Capture d'écran de l'éditeur Luna Park](/assets/images/layout/templates/screen4.png)

### 2. Configurer la Logique de Boucle

1. Ajoutez un composant `Template` à l'interface.
2. Configurez le `Template` avec la logique **For** et liez-le à la variable `articles`.
3. La logique For permet d'itérer sur chaque élément du tableau `articles`.
4. Le `Template` exécutera son contenu une fois pour chaque article.

![Capture d'écran de l'éditeur Luna Park](/assets/images/layout/templates/screen5.png)

### 3. Afficher les Éléments dans l'Interface

1. À l'intérieur du `Template`, ajoutez un `Block`.
2. Insérez un composant `Variable` dans ce `Block`.
3. Liez cette variable à `Template[].Value`, qui correspond à chaque élément du tableau itéré.
4. Maintenant, lorsque vous visualisez la page **Articles** dans l'interface, vous verrez chaque élément du tableau `articles` affiché dans un nouveau bloc.

<DImage
:src="Screen6"
alt="Screenshot of the Luna Park editor"
/>
