<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
import {graphLogLog} from "/assets/examples/graphLogLog.ts";
import {graphIf} from "/assets/examples/graphIf.ts";
import {graphFor} from "/assets/examples/graphFor.ts";
</script>

# Contrôle de flux

Le flux logique est l'ordre dans lequel vos nœuds sont exécutés. Habituellement, le flux commence sur un événement déclenché (nœud de lecture manuelle, nœud au chargement, fonction...). Ensuite, il suit le fil d'exécution représenté par un lien blanc en gras.

<DExampleEditor graph="loglog" animation :zoomLevel="1"/>

Le contrôle de flux permet de définir l'**ordre d'exécution** des nœuds dans votre graphe et de gérer les **conditions** ou les **répétitions** des actions.

Le contrôle de flux est divisé en trois catégories principales :
- **Déclencheurs** : Démarrent le flux d'exécution.
- **Nœuds conditionnels** : Modifient le flux d'exécution en fonction d'une condition.
- **Boucles** : Répètent des actions en fonction d'un critère donné.

## Déclencheurs

Les nœuds déclencheurs démarrent l'exécution de la logique lorsqu'un événement spécifique se produit.

Exemple : **Déclencher l'incrémentation d'un score**

1. Ajoutez un nœud **On Click** connecté à un bouton dans votre interface.
2. Connectez-le à un nœud **Log**.

Lorsque l'utilisateur clique sur le bouton, le nœud **On Click** déclenche l'exécution de la logique, et le nœud **Log** affiche un message dans la console.

## Nœuds conditionnels (If)

Les nœuds conditionnels permettent de tester une condition et d'exécuter différentes actions en fonction du résultat.
Un nœud conditionnel possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée de condition (<DSchemaType :schema="LogicType.boolean()" />)
- Une sortie vraie (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie fausse (<DSchemaType :schema="LogicType.exec()" />)

<DExampleEditor graph="if" animation :zoomLevel="1"/>

## Nœuds de boucle (For, While)

Les nœuds de boucle permettent de répéter une action plusieurs fois en fonction d'une condition ou d'une liste.

### Boucle For

Un nœud de boucle For possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée de tableau (<DSchemaType :schema="LogicType.array(LogicType.unknown())" />)
- Une sortie d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie d'élément (du type d'élément du tableau)
- Une sortie d'index (<DSchemaType :schema="LogicType.number()" />)
- Une sortie de fin (<DSchemaType :schema="LogicType.exec()" />)

<DExampleEditor graph="for" animation :zoomLevel="1"/>

### Boucle While

Un nœud de boucle While possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée de condition (<DSchemaType :schema="LogicType.boolean()" />)
- Une sortie d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie de fin (<DSchemaType :schema="LogicType.exec()" />)
