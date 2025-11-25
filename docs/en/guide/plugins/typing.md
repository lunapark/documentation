# Typing System

The Luna Park typing system is similar to TypeBox or Zod, but with some unique features.

## Types

Below is a comparison between Luna Park types and TypeScript types.

| TypeScript Type     | Luna Park Type                                               |
|---------------------|--------------------------------------------------------------|
| `string`            | `LogicType.string()`                                         |
| `number`            | `LogicType.number()`                                         |
| `boolean`           | `LogicType.boolean()`                                        |
| `number \| boolean` | `LogicType.union([LogicType.number(), LogicType.boolean()])` |
| `unknown`           | `LogicType.unknown()`                                        |
| `Date`              | `LogicType.interface("Date")`                                |
| `Array<string>`     | `LogicType.array(LogicType.string())`                        |
| `{foo:string}`      | `LogicType.object({foo: LogicType.string()})`                |


You can also define function types, such as `(foo: string, bar: number) => boolean`:
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

All types accept an options object to customize their behavior.

Example with a name, description, and default value:
```ts
LogicType.number({
    name: 'age',
    description: "The user's age",
    default: 25
});
```

Available arguments include:
- `name`: The name of the type.
- `description`: A description of the type.
- `default`: The default value.
- `customizable`: Whether the type can be customized by the user (typically for unknown types).
- `enum`: An array of possible values.
- `example`: An example value.
- `optional`: Whether the type is optional.
- `required`: Whether the type is required (used only for component props).

## Utilities

The following utilities are available for creating types:
- `LogicType.omit()`: Removes specific keys from an object type.
- `LogicType.pick()`: Selects specific keys from an object type.
- `LogicType.partial()`: Makes all keys of an object type optional.
- `LogicType.required()`: Makes all keys of an object type required.
