<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
</script>

# Contrôle de flux

Le flux logique est l'ordre dans lequel vos nœuds sont exécutés. Habituellement, le flux commence sur un événement déclenché (nœud de lecture manuelle, nœud au chargement, fonction...). Ensuite, il suit le fil d'exécution représenté par un lien blanc en gras.

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#N4IgxghgdgbhDOIBcoA2B7SAXAluqyoAHsgAwA0IAnmQL6UBe66AtsgIz0hToAmApohTh27AGYAWCQE4A7AFpp0gMwR5EgExiArPIBGe3gDZ5RsJFKkJY-hKPLCIXhCwRHAJ0H8syMRFTw-JRgAK7wWKwAKlQADoKOOFAA+uh6AFb8YD7CUBAs-MggqRlZILTllIlY-O65qAlQMSFYQqCJKemZ2SAA6ujuqLxlXBjYeATCJEgAHJQ0SPIaI+gA5jhghQJ6ISsA9BgrZcFmfuy8EuoQ0nrq-LJi8tPsGmDyynrsykbTvNrKGipHM5XB4vNk-AEguAwhEWNE4q0QO1il1HLl8oUUaVylwqjU6g0mi0Gh0St0ABL8VAYYaUUYucaOKbybRzZCLZZrDZIJz8bZ7A5HECyaSkXjKMR6aSKIxiDTqGT8eQQfjKaaLP56CTTD68XgAoEuNzCJLwHAMAqTDgUajICRcTyBcH+QLLMb4Jns9izW0LJZ01brTZ8na7GKoCA0CogADuOEdjg0-FIRnYEnOiwkEBMElIeleemm-2VsggpBeelIynY0ktoDE7lYjgA1vx5kVmkl+ERMiBKDwBIURWKJVKZXKFbXlar1RpNdrdfrpEKIi224V2t3e-2+JbwCcIGcLlnrrd7o9nq93p9vr9-oDo8pZOLrJ95JBtMfSOxXtMNBB5Q0UhJFzcwIG0CAJEcBsm2EVt23QTstw2HdBx5MADyPS5TwkO4HieF43g+L4fj+AEHC4Vc4PXHlNx7FDuF3QowFEEC5EUFQ1E0HR9EMEwzAsKwbDsCicSAA"/>

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

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#N4IgxghgdgbhDOIBcoA2B7SAXAluqyoAHsgAwA0IAnmQL6UBe66AtsgIz0hToAmApohQgIAFjC9RAZikBOALT9SAdmXzRsqQCZ5AIzABWAGbypR2bN68wWrfyPLCIXhCwQnAJ0H8syIxFR4fkowAFd4LFYAFSoAB0EnHCgAfXRdACt+MF9hKAgWfmQQNMzskFoKyiSsfg881ESoWNCsIVAk1IysnJAAIXKuDGw8AmESJAAOShokTkoMAHMcMCKBXVCFgHpF8spSCYOIA10DeQMtIyl1XXYweQswE2VZMX2jfl5deycXNydk+A4BiFMYcCjUZCiLheII5fyBfiDTCuEZOcbydjKabIeRaJFLFZIZz8dZbWKoCA0LgANn40k0sju5y0d1EykM8iOulIuK0vGUpAMymkEBeP1c7mEMJ8fgCQS41Vq9UazVajWSYHwvBwuHwyCwHlCiKRwz1oKQZ2xFrx83QBKKRgwAHdNjgjLsQB8hfx2Lx2KZeAZTqIrBBOVJ9mdRBAuQY5B9dOK-lLvHC5cFwOFIiwYvE2iAOiVuk48gUikWyhUFVAanUAiqWvnC10ykSAIIDW2m0bEZBTCEWqG2+1EtYbbZ2zsgJ04GFOUi2KS3QPyUi6alh0T7XjyCb8CD+owuOwTOyCn1OIweVhOADW-BmxRayX4RCyIEoPAERX2h2Op3OS5rlue5GSeF4twmd5Pm+LhIjvB8ig6V930-PgQRAWl6TkJlbFZdlTi5HlbH5QVhSkUV3EqTDeCMMBTwmBRRH0YMtzDUV2H9TEIF0LRSF9UVRGpS9rzYYR70fdBn3YeEgg-bh0KKLC5Bws48PUAjOWOYi+QFIURTFOD0AQx9kLfFY0O-IkxAkaQ5EUFQ1A0bQ9EMEwzAsKwbDsBwp1IKR+HOMB9Hkal2SuLc43uUh+AUMBaQMX1lH4ZQDF4UgRJvcTEKJKSsGSUgDSNeSvww5SGVwlkNI5IjeVI-SKMMyh4Oy0yUhQiyFKsz1A2S31-SkQNg1DcNIwMaNY3jT4BgqIA"/>

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

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#N4IgxghgdgbhDOIBcoA2B7SAXAluqyoAHsgAwA0IAnmQL6UBe66AtsgIz0hToAmApohTgAzAA5SvCGICcAWn6kIEOQBZ27VXLEAzAGxaARv3Y6A7L15nSYGQFZCIKVgiOAToP5ZkOiKnj8lGAArvBYrAAqVAAOgo44UAD66IYAVvxg3sJQECz8yCAp6ZkgtGWUCVj8bjmo8VDRwVhCoAnJaRlZIAAi+PwAhKVcGNh4BMIkSGKUNEiclBgA5jhgBQKGwYsA9EullIaqqtIiJnJ6AEwnaucQvNqGdiJyEKZ67OcyYIZ6hmKOzq5hB4AllfP5AuBQuEWFFYi0QG0ip1HDk8gUkSUysNMBBcPhHJNptRkGpsctVkgnPwNttdlwdOJZHoIOc1Kpzjo1NZ2HJDGBzjzDIZxOxeDIROxSHYdP9cYDQIl4DgGPkJhwKMSkKouMCvD4-AFsaN8WqkHJ2ETZnJzmSVmtqZsttFUBAaFwxGBrDp+AI5GZ2NK1FYwLzrCoIDIZIYA2Y9KQdDJVaAAe5PKCDfwuJVqrV6o1mvVEmB0MEoFkROUQCNcWMCSS9DMSTaFuhyQUdBgAO5bHToNxDSidnDAxzM9hmVQiCVyUhid5qDRiXmPOxyMAiUjnMTbqeyJMgHRuViOADW-FmhSaiXYCQEJEoPAEBQ9Xp9-D9Ac5qmDoaUz0j0Z2LG8aJnsIDhKe54FIiHQlA+fCqiABxHGIJw8hcVzsrc9yPM8rzvJ83y-AOSGGLwehgAIPI6PGS6TiIZhyFGhikH6qjfByMjnD8Mh6I4h7HsIZ4XiWWCJKQGDoNEIDwU+lIvvGb4foG35mCGhhhv+UYxnGCb5FwEFCVBlJtPwRAZDJ3AIQUyHHKcGHvlhdxiA8TwvPoBFfD8fyVuYYDsCxE4KJ8IaHDIWgyLcdzsIoAWKCx5xmH8wgCWwRkiVeZkWbJiEMtuvEsmyHJcqQgr8oKwpzmKEpSjKBnoJBF6meZqw5c+nqKb6-oqT+Gl-hG2lAbpoGVtytzmCoYhxoYbJmJyMg6JYTGqGYdjxmYZgsjIvD8UeaWgMJ6JXucZk4N4bXyR13pdZ+QZqb+4YATpIH6ZQhkHcZCJJFlrVWXJogSFIsgKEoKjqJo2j6EYJjmJY1i2A4WK0EAA"/>

### Boucle While

Un nœud de boucle While possède :
- Une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une entrée de condition (<DSchemaType :schema="LogicType.boolean()" />)
- Une sortie d'exécution (<DSchemaType :schema="LogicType.exec()" />)
- Une sortie de fin (<DSchemaType :schema="LogicType.exec()" />)

## Opérations asynchrones

Le flux d'exécution gère nativement les opérations **async**. Quand un nœud doit attendre un résultat qui prend du temps (appel API, requête BDD, etc.), le flux se met en pause jusqu'à ce que ce résultat soit prêt ; il reprend ensuite avec la valeur disponible sur la sortie du nœud.

_Pour les développeurs JavaScript : c'est l'équivalent d'un `await` sur une promise._