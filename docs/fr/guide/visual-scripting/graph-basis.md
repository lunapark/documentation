## Le graphe
Le graphe de Luna Park est l’outil central pour ajouter de la logique visuelle à votre application. Contrairement à l’éditeur visuel, qui sert à construire l’interface utilisateur, le graphe vous permet de définir les interactions et les workflows de manière intuitive.

Un graphe est composé de nœuds connectés par des liens représentant des flux de logique ou de données. Voici les éléments principaux d'un graphe :

- **Nœuds** : Chaque nœud représente une action, une condition, ou une opération.
- **Connexions** : Les liens entre les nœuds représentent le chemin logique ou les données échangées.
- **Entrées/Sorties** : Chaque nœud possède des points d'entrée et de sortie pour connecter les données ou la logique.

Voici un exemple de graphe simple dans Luna Park :

![Capture d'écran de l'éditeur Luna Park](../../../assets/visual-scripting/graph-basis/screen1.png)

## Nœuds

Les nœuds sont des briques logiques de base que l'on peut placer sur la grille. Il existe deux types principaux de nœuds :

- **Nœuds de fonction** : Ces nœuds ont un fond **bleu**. Ils ont des ancres d'exécution d'entrée et/ou de sortie. Ils **s’exécutent** lorsqu’ils sont **connectés** dans le flux logique par le **fil d'exécution**.
- **Nœuds d'opération** : Ces nœuds ont un fond **gris foncé**. Ils n'ont pas d'ancres d'exécution d'entrée et/ou de sortie. Ils servent à **manipuler** ou **transformer** des données et sont utilisés par les nœuds de fonction.

![Capture d'écran de l'éditeur Luna Park](../../../assets/visual-scripting/graph-basis/screen2.png)

<script setup>
import { visualScriptingEditorTableData } from '../../../tables-data'
</script>

## Ancres

Les ancres sont l'interface du nœud. Les ancres d'entrée sont affichées à gauche du nœud, les ancres de sortie à droite. Il existe deux types d'ancres :

- **Ancres d'exécution** (<Anchor color="white" type="execution"/>)
  Ces ancres sont affichées avec une forme carrée arrondie à gauche. Elles sont destinées à être reliées au fil d'exécution. Un nœud de fonction sera exécuté lorsque le fil d'exécution menant à ses ancres d'exécution sera déclenché. Ensuite, après son exécution, le nœud déclenchera son ancre d'exécution de sortie.

- **Ancres de valeur** (<Anchor color="white" type="value"/> / <Anchor color="white" type="array"/>)
  Ces ancres sont affichées avec une forme circulaire lorsqu'elles contiennent une seule valeur, ou une forme carrée lorsqu'elles contiennent une liste (appelée tableau) de valeurs. Lorsque vous utilisez des ancres d'entrée, vous pouvez spécifier certains types, comme chaîne ou nombre, dans l'entrée à côté de l'ancre. La couleur de l'ancre dépend du type de valeur qu'elle contient.


<TypeTable
:columns="[
{ title: 'Type', key: 'type' },
{ title: 'Exemple', key: 'example' },
{ title: 'Type', key: 'type2' },
{ title: 'Exemple', key: 'example2' }
]"
:rows="visualScriptingEditorTableData"
/>
