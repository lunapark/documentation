<template>
    <div class="generic-table">
        <table>
            <thead>
            <tr>
                <!-- On parcourt les colonnes pour afficher les titres -->
                <th v-for="(col, index) in columns" :key="index">
                    {{ col.title }}
                </th>
            </tr>
            </thead>
            <tbody>
            <!-- Pour chaque ligne, on affiche les valeurs en fonction de la clé définie dans chaque colonne -->
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                <td v-for="(col, colIndex) in columns" :key="colIndex">
                    {{ row[col.field] }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    columns: {
        type: Array,
        default: () => []
    },
    rows: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped>
.generic-table {
    margin: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border: 1px solid var(--color-background-3);
    text-align: left;
}

thead {
    background-color: #333;
    color: white;
}

tbody td {
    background-color: #1c1c2e;
    color: white;
}
</style>
