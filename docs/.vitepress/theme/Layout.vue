<template>
    <ClientOnly v-if="frontmatter.layout === 'editor'">
        <DLayoutEditor />
    </ClientOnly>
    <DLayoutHome v-else-if="frontmatter.layout !== false"   />
    <Content v-else />
</template>

<script setup lang="ts">
import DLayoutHome from "./layouts/DLayoutHome.vue";
import {useData} from "./composables/data";
import DLayoutEditor from "./layouts/DLayoutEditor.vue";

const { frontmatter } = useData();
</script>

<style scoped>
</style>
