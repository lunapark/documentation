<template>
    <span class="highlight">{{ text }}</span>
</template>

<script setup>
const props = defineProps({
    text: String
})

</script>

<style scoped lang="scss">
.highlight {
    background: var(--color-background-3);
    border-radius: var(--length-radius-s);
    padding: 0 var(--length-padding-xs);
}

</style>