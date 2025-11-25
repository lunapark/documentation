# Système de typage

Le système de typage de Luna Park est similaire à TypeBox ou Zod, mais avec quelques fonctionnalités uniques.

## Types

Ci-dessous une comparaison entre les types Luna Park et les types TypeScript.

| Type TypeScript     | Type Luna Park                                               |
|---------------------|--------------------------------------------------------------|
| `string`            | `LogicType.string()`                                         |
| `number`            | `LogicType.number()`                                         |
| `boolean`           | `LogicType.boolean()`                                        |
| `number \| boolean` | `LogicType.union([LogicType.number(), LogicType.boolean()])` |
| `unknown`           | `LogicType.unknown()`                                        |
| `Date`              | `LogicType.interface("Date")`                                |
| `Array<string>`     | `LogicType.array(LogicType.string())`                        |
| `{foo:string}`      | `LogicType.object({foo: LogicType.string()})`                |


Vous pouvez également définir des types de fonction, tels que `(foo: string, bar: number) => boolean` :
```ts
LogicType.function(
    [
        LogicType.string(), 
        LogicType.number()
    ],
    LogicType.boolean() // `LogicType.void()` est aussi disponible
)
```

## Arguments

Tous les types acceptent un objet d'options pour personnaliser leur comportement.

Exemple avec un nom, une description et une valeur par défaut :
```ts
LogicType.number({
    name: 'age',
    description: "L'âge de l'utilisateur",
    default: 25
});
```

Les arguments disponibles incluent :
- `name` : Le nom du type.
- `description` : Une description du type.
- `default` : La valeur par défaut.
- `customizable` : Si le type peut être personnalisé par l'utilisateur (généralement pour les types inconnus).
- `enum` : Un tableau de valeurs possibles.
- `example` : Une valeur d'exemple.
- `optional` : Si le type est optionnel.
- `required` : Si le type est requis (utilisé uniquement pour les props de composants).

## Utilitaires

Les utilitaires suivants sont disponibles pour créer des types :
- `LogicType.omit()` : Supprime des clés spécifiques d'un type objet.
- `LogicType.pick()` : Sélectionne des clés spécifiques d'un type objet.
- `LogicType.partial()` : Rend toutes les clés d'un type objet optionnelles.
- `LogicType.required()` : Rend toutes les clés d'un type objet requises.
