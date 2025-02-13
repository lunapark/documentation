export const visualScriptingEditorTableData = [
    {
        type: { class: "boolean", value: "boolean" },
        example: { value: "true" },
        example2: { value: "[true, false, false]" },
        type2: { class: "boolean", value: "boolean[]" }
    },
    {
        type: { class: "number", value: "number" },
        example: { value: "1980" },
        example2: { value: "[1980, 2020]" },
        type2: { class: "number", value: "number[]" }

    },
    {
        type: { class: "string", value: "string" },
        example: { value: "\"Hello World!\"" },
        example2: { value: "[\"Hello\", \"World!\"]" },
        type2: { class: "string", value: "string[]" }
    },
    {
        type: { class: "object", value: "{id: number}" },
        example: { value: "{id: 42}" },
        example2: { value: "[{id: 42}, {id: 80}]" },
        type2: { class: "object", value: "{id: number}[]" }
    },
    {
        type: { class: "unknown", value: "unknown" },
        example: { value: "\"Hello World!\"" },
        example2: { value: "[\"Hello\", 42,{world: true}]" },
        type2: { class: "unknown", value: "unknown" }
    }
];
