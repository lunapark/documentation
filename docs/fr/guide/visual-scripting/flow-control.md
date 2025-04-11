<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
</script>

# Contrôle de flux

Le contrôle de flux permet de définir **l’ordre d’exécution** des nœuds dans votre graphe et de gérer les **conditions** ou **répétitions** d’actions.

Le contrôle de flux se divise en trois catégories principales :
- **Déclencheurs** : Démarrent le flux d'exécution.
- **Nœuds conditionnels** : Change le flux d'exécution selon une condition.
- **Boucles** : Répètent des actions selon un critère donné.

## Déclencheurs

Les nœuds déclencheurs démarrent l'exécution de la logique lorsqu'un événement spécifique se produit.

Exemple : **Déclencher l’incrémentation d'un score**

1. Ajoutez un nœud **On Click** relié à un bouton de votre interface.
2. Connectez-le à un nœud **Log**.

Lorsque l’utilisateur clique sur le bouton, le nœud **On Click** déclenche l’exécution de la logique, et le nœud **Log** affiche un message dans la console.

## Nœuds conditionnels (If)

Les nœuds conditionnels permettent de tester une condition et d'exécuter différentes actions en fonction du résultat.
Un nœud conditionnel possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée condition (<DSchemaType :schema="LogicType.boolean()" />)
- Une sortie vraie (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie fausse (<DSchemaType :schema="LogicType.exec()" />)


## Noeuds de boucle (For, While)

Les nœuds de boucle permettent de répéter une action plusieurs fois en fonction d'une condition ou d'une liste.

### Boucle For

Un nœud de boucle For possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée de tableau (<DSchemaType :schema="LogicType.array(LogicType.unknown())" />)
- Une sortie d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie d'élément (du type d'élément du tableau)
- Une sortie d'index (<DSchemaType :schema="LogicType.number()" />)
- Une sortie de fin (<DSchemaType :schema="LogicType.exec()" />)

### Boucle While

Un nœud de boucle While possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée de condition (<DSchemaType :schema="LogicType.boolean()" />)
- Une sortie d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie de fin (<DSchemaType :schema="LogicType.exec()" />)
