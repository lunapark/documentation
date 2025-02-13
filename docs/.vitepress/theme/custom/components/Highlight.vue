<template>
    <span class="highlight">{{ text }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string
}>();
</script>

<style scoped>
.highlight {
    background: var(--color-background-3);
    border-radius: var(--length-radius-s);
    padding: 0 var(--length-padding-xs);
}

</style>