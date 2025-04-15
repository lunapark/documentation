<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
import {graphLog} from "/assets/examples/graphLog.ts";
import {graphWire} from "/assets/examples/graphWire.ts";
</script>

<style>
.shortcut {
    display: inline-flex;
    align-items: center;
    gap: var(--length-xs);
}
</style>

# Le Graphe

Le graphe est la base de la logique visuelle dans Luna Park. C'est ici que vous construirez la logique de votre application. Il se compose de nœuds, de liens et d'ancrages qui interagissent pour créer des flux logiques.

- **Nœuds** : Un nœud représente une action, une condition ou une opération.
- **Ancrages** : Chaque nœud possède des ancrages d'entrée et de sortie. Les ancrages d'entrée servent à recevoir des données, tandis que les ancrages de sortie envoient des données.
- **Fils** : Les fils connectent les ancrages entre eux, formant un flux logique.

<DExampleEditor :graph="graphLog" editor-id="graph-log" animation :zoomLevel="0"/>

| Icône                      | Action                    | Description                       |
|----------------------------|---------------------------|-----------------------------------|
| <LMouseIcon left />        | Clic gauche sur le graphe  | Sélectionner le graphe (nécessaire pour zoomer) |
| <LMouseIcon move right />  | Maintenir le clic droit et déplacer | Déplacer le graphe le long des axes X et Y |
| <LMouseIcon scroll />      | Faire défiler sur le graphe | Zoomer avant et arrière          |
| <LMouseIcon left move />   | Maintenir le clic gauche et déplacer | Dessiner une boîte de sélection |

## Nœuds

Les nœuds sont les blocs de construction logique de base qui peuvent être placés sur le graphe. Il existe deux types principaux de nœuds :

- **Nœuds de Fonction** : Ces nœuds ont un fond bleu. Ils possèdent des ancrages d'exécution d'entrée et/ou de sortie. Ils s'exécutent lorsque leur ancrage d'exécution d'entrée est déclenché.
- **Nœuds d'Opération** : Ces nœuds ont un fond gris foncé. Ils ne possèdent pas d'ancrages d'exécution d'entrée et/ou de sortie. Ils s'exécutent lorsque leur ancrage de résultat est appelé par un nœud de fonction.

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/graph/screen2.png)

| Icône                                                                                         | Action                    | Description               |
|-----------------------------------------------------------------------------------------------|---------------------------|---------------------------|
| <LMouseIcon left />                                                                           | Clic gauche sur un nœud   | Sélectionner le nœud      |
| <LMouseIcon move left />                                                                      | Maintenir le clic gauche et déplacer | Déplacer le nœud         |
| <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LMouseIcon left /></div>               | Clic Ctrl sur un nœud      | Ajouter/retirer de la sélection |
| <div class="shortcut"><LKeyIcon key-name="Delete" />/<LKeyIcon key-name="Backspace" /></div> | Supprimer avec le nœud sélectionné | Supprimer le nœud       |

## Ancrages

Les ancrages sont les interfaces des nœuds. Les ancrages d'entrée sont affichés à gauche, et les ancrages de sortie à droite. Il existe deux types d'ancrages :

- **Ancrages d'Exécution** (<DAnchorIcon :schema="LogicType.exec()" />)
  Ces ancrages sont affichés avec une forme carrée arrondie à droite. Ils sont destinés à être connectés au flux d'exécution. Un nœud de fonction sera exécuté lorsque le flux d'exécution menant à ses ancrages d'exécution est déclenché. Ensuite, après son exécution, le nœud déclenchera son ancrage d'exécution de sortie.

- **Ancrages de Valeur** (<DAnchorIcon :schema="LogicType.unknown()" /> / <DAnchorIcon :schema="LogicType.array(LogicType.unknown())" />)
  Ces ancrages sont affichés avec une forme circulaire lorsqu'ils contiennent une seule valeur, ou une forme carrée lorsqu'ils contiennent une liste (appelée tableau) de valeurs. Lors de l'utilisation des ancrages d'entrée, vous pouvez spécifier certains types, comme du texte ou un nombre, dans l'entrée à côté de l'ancrage. La couleur de l'ancrage dépend du type de valeur qu'il contient.

| Type                                                                                                                                                                                            | Exemple                                             | Type                                                                                                                                                                                                                              | Exemple                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| <DAnchorIcon :schema="LogicType.boolean()"/> <DSchemaType :schema="LogicType.boolean()" />                                                                                                      | <DSchemaValue :value="true" />                      | <DAnchorIcon :schema="LogicType.array(LogicType.boolean())" /> <DSchemaType :schema="LogicType.array(LogicType.boolean())" />                                                                                                     | <DSchemaValue :value="[true, false, false]" />                                       |
| <DAnchorIcon :schema="LogicType.number()"/> <DSchemaType :schema="LogicType.number()" />                                                                                                        | <DSchemaValue :value="1980" />                      | <DAnchorIcon :schema="LogicType.array(LogicType.number())" /> <DSchemaType :schema="LogicType.array(LogicType.number())" />                                                                                                       | <DSchemaValue :value="[1980, 2020]" />                                               |
| <DAnchorIcon :schema="LogicType.string()"/> <DSchemaType :schema="LogicType.string()" />                                                                                                        | <DSchemaValue :value="'Hello World'" />             | <DAnchorIcon :schema="LogicType.array(LogicType.string())" /> <DSchemaType :schema="LogicType.array(LogicType.string())" />                                                                                                       | <DSchemaValue :value="['Hello', 'World']" />                                         |
| <DAnchorIcon :schema="LogicType.object({name: LogicType.string(), age: LogicType.number()})" /> <DSchemaType :schema="LogicType.object({name: LogicType.string(), age: LogicType.number()})" /> | <DSchemaValue :value="{ name: 'John', age: 30 }" /> | <DAnchorIcon :schema="LogicType.array(LogicType.object({name: LogicType.string(), age: LogicType.number()}))" /> <DSchemaType :schema="LogicType.array(LogicType.object({name: LogicType.string(), age: LogicType.number()}))" /> | <DSchemaValue :value="[{'name': 'John', 'age': 30}, {'name': 'Jane', 'age': 25}]" /> |
| <DAnchorIcon :schema="LogicType.unknown()" /> <DSchemaType :schema="LogicType.unknown()" />                                                                                                     | <DSchemaValue value="Hello world" />                | <DAnchorIcon :schema="LogicType.array(LogicType.unknown())" /> <DSchemaType :schema="LogicType.array(LogicType.unknown())" />                                                                                                     | <DSchemaValue :value="['Hello', 1234]" />                                            |

## Fils

Les fils sont les lignes qui connectent les ancrages entre eux dans un graphe logique. Leur apparence change en fonction de leur rôle :

- **Flux d'Exécution** : Ils sont blancs et en gras pour représenter un flux d'exécution logique.
- **Flux de Valeur** : Ils prennent la couleur du type de valeur qu'ils transportent (par exemple, vert pour un nombre, jaune pour du texte).

<DExampleEditor :graph="graphWire" editor-id="graph-wire" animation :zoomLevel="2"/>

*Notez que ce n'est pas un graphe logique bien conçu, il sert uniquement à présenter les fils, l'empilement des fils et les ancrages de réacheminement. Un graphe logique bien conçu devrait avoir un fil d'exécution aussi droit que possible, le rendant plus facile à lire.*

| Icône                                                                                         | Action                            | Description                             |
|---------------------------------------------------------------------------------------------|-----------------------------------|-----------------------------------------|
| <LMouseIcon left move />                                                                     | Clic gauche sur un ancrage et déplacer | Créer un fil partant de cet ancrage    |
| <LMouseIcon double left />                                                                   | Double clic sur un fil            | Créer un nœud de réacheminement         |
| <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LMouseIcon left /></div>               | Clic Ctrl sur un fil              | Supprimer le fil survolé               |
| <div class="shortcut"><LKeyIcon key-name="Delete" />/<LKeyIcon key-name="Backspace" /></div> | Supprimer avec le fil sélectionné | Supprimer le fil                       |

## Connexion des Ancrages

Les fils permettent de connecter des ancrages de types compatibles :
Généralement, vous connecterez des ancrages d'entrée et de sortie du même type.

Cependant, vous pouvez également connecter un ancrage de sortie à un ancrage d'entrée moins défini. Par exemple, il est possible de connecter un ancrage de sortie d'un tableau de nombres à un ancrage d'entrée d'un tableau de type inconnu.

## Exemple de Logique dans le Graphe

Dans cet exemple, nous avons une logique simple construite avec des nœuds et des fils dans le graphe.

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/graph/screen3.png)

### Étape par Étape

1. **Déclencheur : "On Click (widget)"**
    - Ce nœud représente un événement qui démarre l'exécution lorsqu'un utilisateur clique sur un élément de votre interface (par exemple, un bouton).
    - Le fil blanc (flux d'exécution) commence à partir de ce nœud et déclenche les actions suivantes.
2. **Lecture Set score**
    - Ce nœud de fonction met à jour une valeur appelée `score`.
    - Il est exécuté par le flux d'exécution provenant de "On Click".
    - La connexion verte de score (flux de données) envoie une nouvelle valeur de `score` provenant d'un autre nœud, nous remontons donc la chaîne pour récupérer la valeur.
3. **Addition (+)**
    - Ce nœud d'opération additionne deux valeurs :
        - `A` (lié à un autre nœud).
        - `1` (une valeur fixe ajoutée directement).
    - La connexion verte de `A` (flux de données) nécessite de remonter un peu plus loin dans la chaîne pour récupérer sa valeur.
4. **Get score**
    - Ce nœud d'opération récupère la valeur actuelle de `score`.
    - Il peut ensuite être utilisé pour ajouter `1` dans le nœud d'opération d'addition.
5. **Exécution de Set score**
    - Une fois que les nœuds d'opération sont exécutés pour récupérer la nouvelle valeur de score, la valeur de `score` est mise à jour avec le résultat de l'addition.
    - Le fil blanc (flux d'exécution) commence à partir de ce nœud et déclenche les actions suivantes.
6. **Lecture Log**
    - Ce nœud de fonction affiche ou enregistre une valeur pour le débogage.
    - Il est exécuté après "Set score" via le flux blanc.
    - La connexion verte envoie la valeur actuelle de score pour l'afficher.
7. **Get score**
    - Ce nœud d'opération récupère la nouvelle valeur de `score`.
    - Il peut ensuite être utilisé pour l'afficher dans le nœud Log.
8. **Exécution de Log**
    - Une fois que le nœud d'opération est exécuté pour récupérer la nouvelle valeur de score, la nouvelle valeur peut être enregistrée.
    - Il n'y a pas de fil blanc (flux d'exécution) partant de ce nœud, car il n'y a pas d'autres actions à exécuter après cela.

### Résumé Visuel du Flux :

1. "On Click" → "Set score" → "Log".
    - Les fils blancs représentent l'ordre dans lequel les actions sont exécutées.
2. Les fils colorés transportent les données :
    - `score` est récupéré avec "Get score".
    - Il est modifié (+1) puis mis à jour avec "Set score".
    - Enfin, il est envoyé au "Log" pour être affiché.

## Inspection du Graphe

L'inspection permet de vérifier les **valeurs** et les **types** contenus par les ancrages via deux modes :

| Icône                                                                                                                                                                    | Description              |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LKeyIcon key-name="Alt" /></div>                                                                                  | Afficher l'inspection des types |
| <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LKeyIcon space /></div> (ou <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LKeyIcon key-name="Q" /></div>) | Afficher l'inspection des valeurs |

**Inspection des Types** : Pour visualiser les types de données. `Ctrl + Alt`

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/graph/screen4.png)

**Inspection des Valeurs** : Pour afficher les valeurs réelles des ancrages. `Ctrl + Espace` ou `Ctrl + Q`

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/graph/screen5.png)

Lors de l'utilisation de l'inspection des valeurs, les valeurs sont :

- Calculées en temps réel pour les nœuds d'opération.
- Prises à partir de la dernière exécution pour les nœuds de fonction.

<LContainer type="info">
<h2>Note</h2>
Si certaines valeurs apparaissent comme non définies, il peut être nécessaire d'exécuter votre logique une fois pour initialiser toutes les valeurs.
</LContainer>