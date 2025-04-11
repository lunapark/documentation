<template>
    <ClientOnly>
        <DSchemaValue :value="value" />
    </ClientOnly>
</template>

<script setup lang="ts">
import { LEditorConsoleValue } from "@luna-park/editor";

const props = defineProps<{
    value: unknown
}>();
</script>

<style scoped>

</style>
