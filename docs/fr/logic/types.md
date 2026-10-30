---
description: "Définissez la forme de vos données dans Luna Park : tous les types du sélecteur, propriétés d'objets, fichiers de types, options, types inférés et générés, et valeurs par défaut."
---

<script setup lang="ts">
import TypeSelector from '/assets/images/logic/types/type-selector.png';
import TypeFile from '/assets/images/logic/types/type-file.png';
import {LogicType} from "@luna-park/logicnodes";
</script>

# Types de données

Chaque valeur de Luna Park a un type : variables, propriétés, entrées et sorties de fonctions, schémas de stores, entrées et sorties de routes, colonnes de bases de données. Les types permettent à l'éditeur de proposer les bons champs et les bons nodes, de colorer les ancrages du graphe et de générer du code typé.

## Le sélecteur de type

À côté du nom d'une valeur, le sélecteur de type (`Type...`) propose :

| Type | Valeur |
|---|---|
| **String** | Du texte. <DSchemaType :schema="LogicType.string()" /> |
| **Number** | Un nombre, avec ou sans décimales. <DSchemaType :schema="LogicType.number()" /> |
| **Boolean** | `true` ou `false`. <DSchemaType :schema="LogicType.boolean()" /> |
| **Object** | Des propriétés nommées, chacune avec son type : `{ name: String, age: Number }`. |
| **Record** | Un nombre libre de clés, toutes avec le même type de valeur : un score par nom de joueur. Les clés sont String ou Number. |
| **Interface** | Un objet d'une classe intégrée, choisie dans une seconde liste : **Date**, **URL**, **File**... Les bibliothèques et les plugins ajoutent les leurs. |
| **Type** | Une référence à un type nommé (voir [Fichiers de types](#fichiers-de-types)). |
| **Array** | Une liste ordonnée de valeurs du même type. <DSchemaType :schema="LogicType.array(LogicType.number())" /> |
| **Combine** > **Union** | Un type parmi plusieurs : un String ou un Number. |
| **Combine** > **Intersection** | Plusieurs types objets, combinés en un seul. |
| **Function** | Une fonction, avec ses entrées (un Object) et sa sortie. |
| **Void** | Aucune valeur. Uniquement pour les sorties : sorties de fonctions, événements, valeurs calculées. |
| **Unknown** | N'importe quelle valeur. |

<DImage
  :src="TypeSelector" :width="1280" :height="720"
  alt="Sélecteur de type ouvert sur une propriété, avec String, Number, Boolean, Object, Record, Interface, Type, Array, Combine, Function et Unknown"
/>

Certains endroits ajoutent leurs propres entrées : **Execute** pour les ancrages d'exécution des entrées et sorties de [macros](./scripts#reglages-d-une-fonction), **Foreign Key** pour les [colonnes de base de données](../backend-data/database#types-de-colonnes).

Changer le type d'une valeur réinitialise ce qui est propre à l'ancien type (propriétés, type des éléments...).

## Objets

Sous un **Object**, le bouton **+** ajoute une propriété : donnez-lui un nom et un type. Les propriétés peuvent elles-mêmes être des objets, sans limite de profondeur.

- Renommer une propriété conserve la logique et les liaisons qui l'utilisent.
- Faites glisser une propriété par son sélecteur de type pour la réordonner parmi ses voisines.
- **×** la supprime.
- `↑` et `↓` passent d'un champ de nom à l'autre.

Certains objets sont en partie verrouillés : les paramètres d'une route, les colonnes automatiques d'une table.

## Fichiers de types

Un fichier de **type** contient des types nommés, pour définir une forme une fois et l'utiliser partout. Créez-en un avec **New > Type** dans l'Explorer.

- **Add type** crée un type. Nommez-le, puis définissez-le avec le sélecteur de type.
- Le bouton **Preview code** d'un type affiche sa définition TypeScript.
- **×** supprime un type.

<DImage
  :src="TypeFile" :width="1280" :height="720"
  alt="Fichier de types avec un type objet Product et l'aperçu de son code TypeScript"
/>

Pour utiliser un type nommé, choisissez **Type** dans n'importe quel sélecteur de type, puis le type dans la liste. La liste propose aussi :

- chaque **Database** : la forme d'une de ses lignes ;
- chaque **Route** : son **Input body** ou son **Output**.

Une référence suit sa cible : quand vous modifiez le type dans son fichier, toutes les valeurs qui l'utilisent changent. Utilisez-les pour garder le frontend et le backend synchronisés, par exemple en typant une variable avec l'**Output** de la route qui la remplit.

## Options

Dans les fichiers de types, le bouton d'options à côté d'un type (ou d'une propriété) règle :

| Option | Effet |
|---|---|
| **Description** | Affichée en info-bulle dans les formulaires et sur les ancrages du graphe. |
| **Optional** | La valeur peut être absente. Marquée par `?`. Les propriétés optionnelles sont omises des valeurs par défaut ; ajoutez-les avec le **+** du formulaire de valeur. |
| **Default** | La valeur initiale. String, Number et Boolean uniquement. |
| **Format** | Pour String : `color` affiche un sélecteur de couleur dans les formulaires de valeur. `date-time` et `email` indiquent le format attendu. |
| **Values** | Les seules valeurs autorisées, pour String et Number. Les formulaires de valeur les proposent dans une liste, et un String avec des valeurs devient une union de ces textes dans le code généré. |

Faites un clic droit sur n'importe quel sélecteur de type pour copier un type (**Copy**), le coller sur une autre valeur (**Paste**) ou ouvrir ses **Options**.

## Infer et Generate

Le sélecteur de type des entrées et sorties de fonctions, des sorties de routes et de certains ancrages de nodes a deux entrées en plus :

- **Infer** copie le type de l'ancrage correspondant : l'ancrage du même nom de l'autre côté du node, ou la `response` de la route.
- **Generate** construit le type à partir d'une vraie valeur : exécutez la logique une fois, puis choisissez **Generate** pour typer un ancrage avec la valeur qu'il a reçue. Pratique pour la réponse d'une API appelée avec `Fetch`.

## Valeurs et valeurs par défaut

La section **Default** d'un composant, les valeurs des fichiers de configuration et les valeurs des nodes utilisent des formulaires construits à partir des types :

- Les types simples ont un champ texte, un champ nombre, un interrupteur, une liste (avec **Values**) ou un sélecteur de couleur (avec le format `color`).
- Les tableaux ont un **+** pour ajouter des éléments, et des boutons pour déplacer ou supprimer chaque élément.
- Les objets et les records ont un **+** pour ajouter des clés. Cliquez sur une clé pour la renommer.
- Les valeurs Unknown et Union font d'abord choisir le genre de valeur.
- **Edit as JSON** modifie un objet ou un tableau en texte JSON. **Save** l'applique.
- **Reset to default** remet la valeur **Default** du type.
- **Generate with Sidekick** remplit la valeur avec des données d'exemple, quand [Sidekick](../workspace/sidekick) est connecté.

## Les types dans le graphe

Les ancrages du graphe sont colorés selon leur type : une couleur pour String, Number, Boolean, les objets, les interfaces et l'exécution. Les tableaux ont leur propre forme, avec la couleur de leurs éléments. Les ancrages Unknown et Union sont neutres.

Maintenez `Ctrl + Alt` pour afficher le nom et le type de chaque ancrage. Relier des ancrages de types incompatibles trace un fil rouge.
