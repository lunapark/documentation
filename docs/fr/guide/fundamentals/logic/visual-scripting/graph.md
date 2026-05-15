<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
</script>

<style>
.shortcut {
    display: inline-flex;
    align-items: center;
    gap: var(--length-xs);
}
</style>

# Le graphe

Le graphe est la base de la logique visuelle dans Luna Park. C'est ici que vous construirez la logique de votre application. Il se compose de nœuds, de liens et d'ancrages qui interagissent pour créer des flux logiques.

- **Nœuds** : Un nœud représente une action, une condition ou une opération.
- **Ancrages** : Chaque nœud possède des ancrages d'entrée et de sortie. Les ancrages d'entrée servent à recevoir des données, tandis que les ancrages de sortie envoient des données.
- **Fils** : Les fils connectent les ancrages entre eux, formant un flux logique.

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#N4IgxghgdgbhDOIBcoA2B7SAXAluqyoAHsgAwA0IAnmQL6UBe66AtnZVOgCYCmiKIAEYQAjADMeADhEiAtABYAzJICsCyAHZZELiMWyVgjWJERSXYWMWEQXCFgg2A+vBwMeNkkhEVqyefQgAE58PFjIYhCo8DyBGNh4BAJesiIATJQ0SLJpcegA5jhgyLY8ggCu+QD0AA6oEDSBFqSCaZBcqRAaPAppPFpGAJwAbLKDEBCKivLDZdJpNnYONiEx4UiR0TyUYOXwWKwAKlQ1fDY4UE7oggBWPGDroFAQLB5IINd3DyC0v5QXWB4QWeqHOUBq5Sw-FAFyut3u6xAAAkeKgMAACADu6CCqC4AEIfnkEvhPMgMn5srlKBhCsV3rwKtVaUTKJicKsbGJxhAVFxhoJZEYePp5DxIrJJFwNJJZGI0mlSJJhioxGJhmARFygqwbABrHhZD6Qpw8Ij3EAcbhvISiCTSORKVTqLraXT6QzGUzmSzWQIHfWGkqws0Wq28ErNVrtTrdXr9IUaEZjCZTGZzdJE35AA"/>

| Icône                      | Action                    | Description                       |
|----------------------------|---------------------------|-----------------------------------|
| <LMouseIcon left />        | Clic gauche sur le graphe  | Sélectionner le graphe (nécessaire pour zoomer) |
| <LMouseIcon move right />  | Maintenir le clic droit et déplacer | Déplacer le graphe le long des axes X et Y |
| <LMouseIcon scroll />      | Faire défiler sur le graphe | Zoomer avant et arrière          |
| <LMouseIcon left move />   | Maintenir le clic gauche et déplacer | Dessiner une boîte de sélection |

## Nœuds

Les nœuds sont les blocs de construction logique de base qui peuvent être placés sur le graphe. Il existe deux types principaux de nœuds :

- **Nœuds de fonction** : Ces nœuds ont un fond bleu. Ils possèdent des ancrages d'exécution d'entrée et/ou de sortie. Ils s'exécutent lorsque leur ancrage d'exécution d'entrée est déclenché.
- **Nœuds d'opération** : Ces nœuds ont un fond gris foncé. Ils ne possèdent pas d'ancrages d'exécution d'entrée et/ou de sortie. Ils s'exécutent lorsque leur ancrage de résultat est appelé par un nœud de fonction.

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/graph/screen2.png)

| Icône                                                                                         | Action                    | Description               |
|-----------------------------------------------------------------------------------------------|---------------------------|---------------------------|
| <LMouseIcon left />                                                                           | Clic gauche sur un nœud   | Sélectionner le nœud      |
| <LMouseIcon move left />                                                                      | Maintenir le clic gauche et déplacer | Déplacer le nœud         |
| <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LMouseIcon left /></div>               | Clic Ctrl sur un nœud      | Ajouter/retirer de la sélection |
| <div class="shortcut"><LKeyIcon key-name="Delete" />/<LKeyIcon key-name="Backspace" /></div> | Supprimer avec le nœud sélectionné | Supprimer le nœud       |

## Ancrages

Les ancrages sont les interfaces des nœuds. Les ancrages d'entrée sont affichés à gauche, et les ancrages de sortie à droite. Il existe deux types d'ancrages :

- **Ancrages d'exécution** (<DAnchorIcon :schema="LogicType.exec()" />)
  Ces ancrages sont affichés avec une forme carrée arrondie à droite. Ils sont destinés à être connectés au flux d'exécution. Un nœud de fonction sera exécuté lorsque le flux d'exécution menant à ses ancrages d'exécution est déclenché. Ensuite, après son exécution, le nœud déclenchera son ancrage d'exécution de sortie.

- **Ancrages de valeur** (<DAnchorIcon :schema="LogicType.unknown()" /> / <DAnchorIcon :schema="LogicType.array(LogicType.unknown())" />)
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

- **Flux d'exécution** : Ils sont blancs et en gras pour représenter un flux d'exécution logique.
- **Flux de valeur** : Ils prennent la couleur du type de valeur qu'ils transportent (par exemple, vert pour un nombre, jaune pour du texte).

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#N4IgxghgdgbhDOIBcoA2B7SAXAluqyoAHsgAwA0IAnmQL6UBe66AtsgEz0hToAmApohQgAHAGYxARkj8wAWjCSARgFY5AFhWTJcgJylSANjntJuiBADsIkfxGWlhELwhYITgE6D+WZADMIVHh+SjAAV3gsVgAVKgAHQSccKAB9dCUAK1lfYSgIFn5kEHSssF9aCsoMbDwCYRIkOTFKGiROKvQAcxwwIoElMM6AegxOkC5eQzFLUiVeHTN1CA1dPz85EQhJUib1XRV1Q34lw1J2Jxc3JxT4HAZC+o4Wji4vYJyAoP4uatdapwackszyQYh+XR6RTiySG-CIsnGlEM7FIlkUhjUpD82g0ljE8iUlhRclIq0k7DxfkMSnUjmEl3cwhudwexCe1BelDePn8gWC4Jq+AByCaINI4O6vSQIGhUFh8N6EyUYGRSn0ckMknUvA07BEOhEShE8j8yr2YHYul0et4F1cjNAzPuwraIPaIG5Hz53w6grqbMaIhB6glkOlsqGkWgLg8tq4pDA+N0hkM60J-GW6jA-DUum0-DkWms-FWSz8llZzntnm8Xq+oQiURYsQSQlA6DCWBS0gAFjhULbcvkHiAcFh+GwKgK-kLHo11CCNaGpSA-BgAO5DPzoDwAUQgYB7iJAugrGN4FpJ6mJ6lkYjkqj8OqsujEfmOqjEpLtV2Ent59bgI2MTxIkwjJGkmTZE4eQFEUJTQVOvozv6IANLoi7uqMYbOPwAzDKMx6kBmhIGOoch+GIEDGLSIg7CIKiviSYCKKeBjYpsP4OiATqVg02zBq8tYAfyyG4LOAZyGYi4hh0kp9HhgxDHEqAQDQExgK+hySCIJJKBA5G0uo95KCWOxZmsYjJrotguFxNbvCJIRAZEIGtkkqTBHEEAeK4O4wcORReT5fkeOMlSjlA44eHkqAeXEnZtpFKRuB4nQ8tKAAS-CoBgAAE647gOICUBBwW+VEYXSnl4Vif8c5SRhHJIJIy5BVgHjJMM8AqWOtUgOuOBvE4YAqGAfhjUoOykJMOhLLo5G6EaugPkoVlKJI-CkDYihOH4HisE4ADW-CtMUnYpG8YSoL4lA8AIfSaWI2m6bMBkaDSJlmRo42UdZtnuFwUTHadRQQSV3B8COvDKqq6qatqur6hsRommaugWlaNr9Sm2bHJYK3UUo6wnEoGynuR1G8EYihgLSkgqHtB1sMIJ1nR2XYQ-d0Ow+wao7AjOrXsjhrGhR6OY9aIhxpQwOs6D0oQQhZRc1DRTiFIMjyIoqgaFoOj6EYJhmBY1i2PYjgRSIhypvp978BIBbGaZeglpYTTHIYFgWxNUqgPth3y+zF2kBg6BxKrD3SgmSYpmmFaZtmub5oWkjFqWEDloUQPoCDZ0QXCCJ3Wr0qnvw56XqQ17mXeD4qE+cgvm+H4qF+uj9ZpqyWJY71THiGiSOWD7qNIjemhaaySJMYCWEzgegGz8EXYXvTF1HIDERApFVxRVE0Ua9GMfeCasTMWI6YDsu50HYOpJH0N97M8yNUsKxrBsWw7M9+yHMc1FnP1GwpIIA5jmqSGiKhpZ6C9u7ckawtoGQdlYOeLMF4K3OpzNeD9phPwWAtTMqx1ibG2LsH+RwTgAJznnW+KQV733VhIaQIDtbKDUJoHEhtjCmHMFYGwdgHD9RzOoCacwCySEMJsDQM13b6EsMYfESxeCTVONtFB1DpQc0uoIa6t1IbrwvFpTUr19KGU+g+b6Fk-qGBsvwOyVCb6K1SD5XyNAsFFBjppOOD4E4-RzHoFORZbAZyzv1HuVprEHgfDYe82pUyN34SSL22Z2B2AgMmSQaiHEYO7Iefsto3HR0TJ4uJ6ZE5+LzJtVO6c-BlgrMeOWaD86pGVro7mRQy4V3YFeG8tdHzPgJs3WkrdvwRVOD3FQLgunsBUJYIWFZ5DSwdnIXgAhxE1ORBYP2q5mbqOyXQgpohGFawUKwvWHCDBcJNrw82Aj7GNJofQ6UyJUTokxNiOaeICREmmmSCkb5qS0kEXzWkLFDL7BWuoUgWoP4iC6VvDa1IMRKCUJaTJ9yNEXUeSAZ5aJxFvJxOoT53jiSkmxH8qkNJLZX12QXBUWKPHJhKT4rM5SAlpyCTUzOdSpy0CAA"/>

*Notez que ce n'est pas un graphe logique bien conçu, il sert uniquement à présenter les fils, l'empilement des fils et les ancrages de réacheminement. Un graphe logique bien conçu devrait avoir un fil d'exécution aussi droit que possible, le rendant plus facile à lire.*

| Icône                                                                                         | Action                            | Description                             |
|---------------------------------------------------------------------------------------------|-----------------------------------|-----------------------------------------|
| <LMouseIcon left move />                                                                     | Clic gauche sur un ancrage et déplacer | Créer un fil partant de cet ancrage    |
| <LMouseIcon double left />                                                                   | Double clic sur un fil            | Créer un nœud de réacheminement         |
| <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LMouseIcon left /></div>               | Clic Ctrl sur un fil              | Supprimer le fil survolé               |
| <div class="shortcut"><LKeyIcon key-name="Delete" />/<LKeyIcon key-name="Backspace" /></div> | Supprimer avec le fil sélectionné | Supprimer le fil                       |

## Connexion des ancrages

Les fils permettent de connecter des ancrages de types compatibles :
Généralement, vous connecterez des ancrages d'entrée et de sortie du même type.

Cependant, vous pouvez également connecter un ancrage de sortie à un ancrage d'entrée moins défini. Par exemple, il est possible de connecter un ancrage de sortie d'un tableau de nombres à un ancrage d'entrée d'un tableau de type inconnu.

## Exemple de logique dans le graphe

Dans cet exemple, nous avons une logique simple construite avec des nœuds et des fils dans le graphe.

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/graph/screen3.png)

### Étape par étape

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

## Inspection du graphe

L'inspection permet de vérifier les **valeurs** et les **types** contenus par les ancrages via deux modes :

| Icône                                                                                                                                                                    | Description              |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LKeyIcon key-name="Alt" /></div>                                                                                  | Afficher l'inspection des types |
| <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LKeyIcon space /></div> (ou <div class="shortcut"><LKeyIcon key-name="Ctrl" /> + <LKeyIcon key-name="Q" /></div>) | Afficher l'inspection des valeurs |

**Inspection des types** : Pour visualiser les types de données. `Ctrl + Alt`

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/graph/screen4.png)

**Inspection des valeurs** : Pour afficher les valeurs réelles des ancrages. `Ctrl + Espace` ou `Ctrl + Q`

![Capture d'écran de l'éditeur Luna Park](/assets/images/visual-scripting/graph/screen5.png)

Lors de l'utilisation de l'inspection des valeurs, les valeurs sont :

- Calculées en temps réel pour les nœuds d'opération.
- Prises à partir de la dernière exécution pour les nœuds de fonction.

::: info Note
Si certaines valeurs apparaissent comme non définies, il peut être nécessaire d'exécuter votre logique une fois pour initialiser toutes les valeurs.
:::
