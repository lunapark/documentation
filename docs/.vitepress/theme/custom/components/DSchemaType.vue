<template>
    <ClientOnly>
        <DSchemaType :schema="schema" />
    </ClientOnly>
</template>

<script setup lang="ts">
import { LEditorConsoleType } from "@luna-park/editor";
import { TSchema } from "@luna-park/logicnodes";

const props = defineProps<{
    schema: TSchema
}>();
</script>

<style scoped>

</style>
