<template>
    <div
        class="d-table"
        :style="columnStyle"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    widths: Array<string>;
}>();

const columnStyle = computed(() => Object.fromEntries(props.widths.map((width, index) => [`--d-table-col-${ index + 1 }`, width])));
</script>

<style scoped>
.d-table :deep(table) {
    min-width: 480px;
    table-layout: fixed;
}

.d-table :deep(th:nth-child(1)) {
    width: var(--d-table-col-1, auto);
}

.d-table :deep(th:nth-child(2)) {
    width: var(--d-table-col-2, auto);
}

.d-table :deep(th:nth-child(3)) {
    width: var(--d-table-col-3, auto);
}

.d-table :deep(th:nth-child(4)) {
    width: var(--d-table-col-4, auto);
}
</style>
