# Typing system

Luna Park typing system looks a bit like TypeBox or Zod, with some twists.

## Types

Here a small comparison between Luna Park types and Typescript types.

| Typescript type     | Luna Park type                                               |
|---------------------|--------------------------------------------------------------|
| `string`            | `LogicType.string()`                                         |
| `number`            | `LogicType.number()`                                         |
| `boolean`           | `LogicType.boolean()`                                        |
| `number \| boolean` | `LogicType.union([LogicType.number(), LogicType.boolean()])` |
| `unknown`           | `LogicType.unknown()`                                        |
| `Date`              | `LogicType.interface("Date")`                                |
| `Array<string>`     | `LogicType.array(LogicType.string())`                        |
| `{foo:string}`      | `LogicType.object({foo: LogicType.string()})`                |


You can also use type functions like `(foo: string, bar: number) => boolean` :
```ts
LogicType.function(
    [
        LogicType.string(), 
        LogicType.number()
    ],
    LogicType.boolean() // `LogicType.void()` is also available
)
```

## Arguments

All types have an argument parameter to customize their behaviour.

Here's an example with a name, a description, and a default value:
```ts
LogicType.number({
    name: age,
    description: "The users's age",
    default: 25
});
```

Here's a list of some arguments:
- `name` : the name of the type
- `description` : a description of the type
- `default` : the default value of the type
- `customizable` : if the type can be customized by the user (usually for unknown types)
- `enum` : an array of possible values for the type
- `example` : an example of a value for the type
- `optional` : if the type is optional
- `required` : if the type is required (used only on component arguments)

## Utilities

You can use some utilities to create types:
- `LogicType.omit()` : remove some keys from an object type
- `LogicType.pick()` : keep only some keys from an object type
- `LogicType.partial()` : make all keys of an object type optional
- `LogicType.required()` : make all keys of an object type required
