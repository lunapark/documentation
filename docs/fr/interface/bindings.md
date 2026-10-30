---
description: "Liez les propriétés, styles, classes, conditions et boucles des éléments à des variables, et transformez les valeurs avec des opérations, sans écrire de logique."
---

<script setup lang="ts">
import Picker from '/assets/images/layout/bindings/picker.png';
import AddOperation from '/assets/images/layout/bindings/add-operation.png';
import Operations from '/assets/images/layout/bindings/operations.png';
import {faBolt, faEquals, faLink} from "@fortawesome/pro-solid-svg-icons";
</script>

# Liaisons

La plupart des champs de l'inspector du Builder acceptent une valeur fixe ou suivent une variable. Un champ qui suit une variable est **lié** : quand la variable change, l'interface se met à jour.

Les liaisons sont disponibles dans :

- le panneau **Properties** (propriétés des éléments et des composants, et les emplacements `{nom}` des **Custom text** et **Custom HTML**) ;
- le panneau **Rendering** (**Condition** et **Loop**) ;
- les **Classes** du panneau **Element** ;
- le panneau **Style** et les panneaux de style rapide ;
- les paramètres d'événements, les scopes de slots et l'élément **Variable**.

## Types de valeur

Survolez un champ : un petit onglet apparaît dans son coin inférieur droit. Survolez l'onglet pour choisir d'où vient la valeur du champ :

| Type | Valeur |
|---|---|
| <LIcon :icon="faEquals" /> **Constant** | Une valeur fixe, saisie dans le champ. |
| <LIcon :icon="faLink" /> **Token** | Un [design token](../styling/tokens) (couleurs, longueurs, polices...) ou une [classe de composant](../styling/classes). Uniquement pour les champs qui acceptent des tokens. |
| <LIcon :icon="faBolt" /> **Variable** | Une valeur du composant, choisie dans une liste. Elle met à jour le champ quand elle change. |

::: warning
Changer le type d'un champ supprime ses [opérations](#operations).
:::

## Choisir une variable

Avec le type **Variable**, cliquez sur le champ pour ouvrir la liste. Elle contient :

- les **Variables**, **Properties**, valeurs **Computed** et **Functions** du composant ;
- l'élément de chaque **Loop** englobante, nommé d'après l'élément répété, avec son **Index** et sa **Value** ;
- les scopes de slots, et le **Model** du composant (voir [Composants](./components#model)) ;
- les [stores](../logic/store), les fichiers média et les [fichiers de configuration](../logic/scripts#fichiers-de-configuration) Frontend ou Shared ;
- `route` > `params` sur les pages avec des [segments dynamiques](./navigation#segments-dynamiques).

Les objets ouvrent un sous-menu pour choisir une de leurs propriétés. Maintenez `Ctrl` pour ouvrir aussi les tableaux (`[item]`, `length`), les textes (`[char]`, `length`, `trim()`) et les fonctions (leurs sorties).

Les valeurs qui ne peuvent pas devenir du type du champ sont grisées. Tapez dans le champ de recherche pour filtrer la liste.

<DImage
  :src="Picker" :width="1280" :height="720"
  alt="Liste de variables de la propriété label, avec les variables price, age et productName et New variable"
/>

Le bas de la liste propose un raccourci :

- **New variable** crée dans le composant une variable du type du champ, nommée d'après le champ, et la lie.
- **New function** (pour les champs qui attendent une fonction, comme certaines propriétés de plugins) crée une fonction avec les entrées correspondantes et une sortie `result`, et la lie.

## Opérations

Une opération transforme la valeur liée avant qu'elle n'atteigne le champ : la comparer, la formater, calculer avec. Les opérations remplacent les petites [variables calculées](../logic/variables#variables-calculees) dans les cas simples.

- Avec le type **Variable**, cliquez sur le bouton **+** (**Add operation**) à côté de la liste.
- Avec le type **Constant**, faites un clic droit sur la valeur.

Le menu ne propose que les opérations qui peuvent mener au type du champ, les plus proches en premier.

<DImage
  :src="AddOperation" :width="1280" :height="720"
  alt="Menu Add operation ouvert sur un label lié à price, avec Item at, Lowercase, Equals, Length, To number..."
/>

| Opération | S'applique à | Arguments | Résultat |
|---|---|---|---|
| **Equals**, **Not equal** | Booléen, nombre, texte | Value | Booléen |
| **Greater than**, **Greater or equal**, **Less than**, **Less or equal** | Nombre, texte | Value | Booléen |
| **Starts with**, **Ends with** | Texte | Prefix / Suffix | Booléen |
| **Includes** | Texte, tableau | Value | Booléen |
| **Item at** | Texte, tableau | Index (négatif : depuis la fin) | Caractère / élément |
| **Join** | Tableau | Separator | Texte |
| **Lowercase**, **Uppercase**, **Trim** | Texte | | Texte |
| **Length** | Texte, tableau | | Nombre |
| **Not** | Booléen | | Booléen |
| **And** | Booléen | Value | Booléen |
| **Or** | Booléen, nombre, texte | Value | Même type : la valeur si l'entrée est vide, `0` ou `false` |
| **Plus** | Nombre, texte | Value | Même type (les textes sont mis bout à bout) |
| **Minus**, **Multiply**, **Divide**, **Modulo** | Nombre | Value | Nombre |
| **If / else** | Booléen | True, False | La valeur de l'argument correspondant |
| **To text**, **To number**, **To boolean** | Booléen, nombre, texte | | Valeur convertie |
| **Call** | Fonction | Une par entrée de la fonction | La sortie de la fonction |

### Enchaîner

Les opérations s'exécutent dans l'ordre : chacune reçoit le résultat de la précédente. Par exemple, pour n'afficher un badge qu'aux adultes, liez sa **Condition** à `age`, puis ajoutez **Greater or equal** `18`. Pour afficher `Gratuit` ou le prix, liez le texte à `price`, ajoutez **Equals** `0`, puis **If / else** avec `Gratuit` et le prix.

<DImage
  :src="Operations" :width="1280" :height="720"
  alt="Label lié à price avec une opération Equals 0 et un If / else entre Free et Buy now, qui donne un String"
/>

Chaque opération a :

- une liste pour la remplacer par une autre opération (les arguments compatibles sont conservés) ;
- un sélecteur de propriété quand son résultat est un objet (une fonction qui renvoie un objet, un **Item at** sur une liste d'objets) ;
- un bouton **×** (**Remove operation**).

Les arguments sont eux aussi des valeurs liées : constantes, tokens ou variables, avec leurs propres opérations.

Sous les opérations, une flèche indique le type du résultat. Elle devient un avertissement rouge quand le résultat ne correspond pas au champ : corrigez ou supprimez la dernière opération.

::: tip
Les opérations ne peuvent pas être réordonnées. Supprimer une opération au milieu supprime aussi les suivantes qui n'acceptent plus leur nouvelle entrée.
:::

### Appeler une fonction

Choisissez une fonction du composant dans la liste, ajoutez **Call**, puis remplissez un argument par entrée de la fonction. Le champ affiche le résultat de la fonction. Utilisez-le pour un formatage qui demande plus que quelques opérations, écrit une fois sous forme de [fonction](../logic/scripts#fonctions).
