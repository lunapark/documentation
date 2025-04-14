<template>
    <div class="image">
        <img
            :alt="alt"
            loading="lazy"
            :src="src"
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    alt: string;
    src: string;
}>();
</script>

<style scoped>
.image {
    display: flex;
    justify-content: center;

    img {
        border-radius: var(--length-radius-m);
        border: 1px solid var(--color-background-3);
        box-shadow: 0 0 32px var(--color-background-litest);
        max-width: 640px;
    }
}
</style>
