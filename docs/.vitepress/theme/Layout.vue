<template>
    <DLayoutHome v-if="frontmatter.layout !== false" />
    <Content v-else />
</template>

<script setup lang="ts">
import { useData } from "./composables/data";
import DLayoutHome from "./layouts/DLayoutHome.vue";

const { frontmatter } = useData();
</script>

<style scoped>
</style>
