<template>
    <div class="table-container">
        <table class="type-table">
            <thead>
            <tr>
                <th v-for="(col, index) in columns" :key="index">{{ col.title }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                <td
                    v-for="(col, colIndex) in columns"
                    :key="colIndex"
                    :class="getClass(row[col.key].value)">
                    <Anchor
                        v-if="colIndex === 0 || colIndex === 2"
                        :type="colIndex === 0 ? 'value' : 'array'"
                        :color="getColor(row[col.key].value)"
                        class="anchor"
                    />

                    <span v-html="getClass(row[col.key].value) === 'object' ? renderObject(row[col.key].value) : row[col.key].value"></span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>


<script setup>
import {defineProps} from 'vue';
import Anchor from "./Anchor.vue";

const props = defineProps({
    columns: {
        type: Array,
        required: true
    },
    rows: {
        type: Array,
        required: true
    }
});

function getColor(content) {
    const colorMapping = {
        boolean: 'var(--color-type-boolean)',
        number: 'var(--color-type-number)',
        string: 'var(--color-type-string)',
        object: 'var(--color-type-object)',
        default: 'white'
    };

    if (content.startsWith('{')) {
        return colorMapping.object;
    }
    if (content.startsWith('boolean')) {
        return colorMapping.boolean;
    }
    if (content.startsWith('number')) {
        return colorMapping.number;
    }
    if (content.startsWith('string')) {
        return colorMapping.string;
    }


    return colorMapping.default;
}


function getClass(value) {



    if (value.startsWith('{') || value.endsWith(']')) {
        return 'object'; // Classe pour les objets
    }

    // Vérifier si c'est une chaîne de caractères
    if (/^".*"$/.test(value) || value.startsWith('string')) {
        return 'string';
    }
    // Vérifier si c'est un booléen "true" ou "false"
    else if (value === 'true' || value === 'false' || value.startsWith("boolean")) {
        return 'boolean';
    }
    // Vérifier si c'est un nombre
    else if (/^\d+$/.test(value) || value.startsWith("number")) {
        return 'number';
    }
    return '';
}

function renderObject(value) {
    // Diviser la chaîne en conservant les séparateurs (espaces, accolades, crochets, virgules, etc.)
    const words = value.split(/([{}\[\]\s,:]+)/); // Garde les séparateurs

    let result = '';

    // Parcourt chaque mot ou séparateur
    words.forEach((word) => {
        if (/^[\s,:{}\[\]]+$/.test(word)) {
            // Si c'est un séparateur ou des crochets, ajouter la classe 'bracket'
            result += `<span class="unknown">${word}</span>`;
        } else {
            // Sinon, utiliser getClass pour appliquer la classe appropriée
            result += `<span class="${getClass(word)}">${word}</span>`;
        }
    });

    return result; // Retourne la chaîne HTML complète
}

</script>


<style scoped lang="scss">

.anchor {
    padding: 0 10px;
}
.table-container {
    margin: 20px;
}

.type-table {
    width: 100%;
    border-collapse: collapse;
}

.type-table th, .type-table td {
    padding: 10px;
    border: 1px solid var(--color-background-3);
    text-align: left;
}

:deep(.boolean) {
    color: var(--color-type-boolean);
}

:deep(.number) {
    color: var(--color-type-number);
}

:deep(.string) {
    color: var(--color-type-string);
}

:deep(.unknown) {
    color: var(--color-content-liter);
}


</style>