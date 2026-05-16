<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
</script>

# Contrôle de flux

Le flux logique est l'ordre dans lequel vos nœuds sont exécutés. Habituellement, le flux commence sur un événement déclenché (nœud de lecture manuelle, nœud au chargement, fonction...). Ensuite, il suit le fil d'exécution représenté par un lien blanc en gras.

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#tVHbDoIwDP2XPmNkRBPDF_gBJj6SOaqZjpXAUJHw73bDRCUYnnzpejk9O207UNJeZQ1pB4aUdJqs9--QxhG0bPsIHkQFpII9SzkGbOxNLp30r2pqR8WuLYeathkdzqicD6wsEFJ4JfqeSbR1WFlpBmzZuHEX7KkyOYOjsaZN0LRIQuWkFWNzPDSnJUfASfFXWVs0hqZkLdYzupJPXVmtH_x56BTDlldTpOLntKWRbdBx09XHPY6Vv1MHF-Q2oMZleEcFw9k4k3gpjt4QHu4bIQJr2OIcGUNnyGK_1_4J"/>

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

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#tZLBboMwDIbfxWdQCe20idv2DLujNIQqW4gRhLUU8e6zk0lrC9W0Qy8hcX5__mMzgZLuS_ZQTGBRSW_Q8f4ERZbASOucwBmxgULQzmGlgzbjpZJe8lcNvcfmfWzjnXEl7j-08nxwstFQwE9gnglinNedkzZq28HfZsEbCZNbPy_BD7uweDCKZJXeD4cNnYCC4tJR2ZszlQ15Ij5kt4JMxXO4S_MFtbVyZGwevd1xrNBVJgJ9N-i1Ek_LCrXF48bUjN8-tI-v9_uY7tYbSdGj6S6GXHc8_Ak-NWUBDr7UJ60g_gsUEfwMj78SMnCtyAM1zGcJE7W0vb4S_4HLAi7MZYnLeAz_oW25l_M3"/>

## Nœud Switch

Le nœud **Switch** route l'exécution selon la valeur d'une entrée, comme un `switch` en JavaScript. Pour chaque cas déclaré, une sortie d'exécution dédiée est exposée ; une sortie `default` capture les valeurs non matchées.

Un nœud Switch possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée de valeur (<DSchemaType :schema="LogicType.union([LogicType.string(), LogicType.number()])" />)
- Une sortie d'exécution par cas déclaré (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie `default` (<DSchemaType :schema="LogicType.exec()" />)

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

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#pZJBboMwEEXP0lkTBUNUVax7hO6RY0zk1ngQmAaCuHvHJm0oJs2iG2ObP28-fxhBcPPJW8hG0Ci4VWjcvocsjmCgdYrgglhBxmhnsJBeG7ul4Ja7p-hai9XbUM_vlMnx-C6FdQfDKwkZXC-miSDKWNkYrmdt3dl1FbyikU8kjtaeXrwn50TjSQmSFvLYnfZ0Arpk_3C12Wl3uNcqWbbKW3Uhni9kc26HDeaOXalJQK01Hxw2na3eCUhgZ8h_usV-DtGlxvO-xMYneVbNYnRl40Y6woekIsDO5kyZQvYwz5juUmfH4k10C_BHwzzZpx4CY41Y_82TvRRrmg82pP2WJg9h1O47zhCWyF4tPuOxtdj9I9MX"/>

### Boucle While

Un nœud de boucle While possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée de condition (<DSchemaType :schema="LogicType.boolean()" />)
- Une sortie d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie de fin (<DSchemaType :schema="LogicType.exec()" />)

## Opérations asynchrones

Le flux d'exécution gère nativement les opérations **async**. Quand un nœud doit attendre un résultat qui prend du temps (appel API, requête BDD, etc.), le flux se met en pause jusqu'à ce que ce résultat soit prêt ; il reprend ensuite avec la valeur disponible sur la sortie du nœud.

_Pour les développeurs JavaScript : c'est l'équivalent d'un `await` sur une promise._