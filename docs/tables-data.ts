export const visualScriptingEditorTableData = [
    {
        type: { value: 'boolean', class: 'boolean' },
        example: { value: 'true' },
        type2: { value: 'boolean[]', class: 'boolean' },
        example2: { value: '[true, false, false]' }
    },
    {
        type: { value: 'number', class: 'number' },
        example: { value: '1980' },
        type2: { value: 'number[]', class: 'number' },
        example2: { value: '[1980, 2020]' }

    },
    {
        type: { value: 'string', class: 'string' },
        example: { value: '"Hello World!"' },
        type2: { value: 'string[]', class: 'string' },
        example2: { value: '["Hello", "World!"]' }
    },
    {
        type: { value: '{id: number}', class: 'object' },
        example: { value: '{id: 42}' },
        type2: { value: '{id: number}[]', class: 'object' },
        example2: { value: '[{id: 42}, {id: 80}]' }
    },
    {
        type: { value: 'unknown', class: 'unknown' },
        example: { value: '"Hello World!"' },
        type2: { value: 'unknown', class: 'unknown' },
        example2: { value: '["Hello", 42,{world: true}]' }
    }
];