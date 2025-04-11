<template>
    <ClientOnly>
        <LEditorAnchorIcon
            :anchor="anchor"
            class="anchor"
        />
    </ClientOnly>
</template>

<script setup lang="ts">
import { Anchor, LEditorAnchorIcon } from "@luna-park/editor";
import { TSchema } from "@luna-park/logicnodes";
import { computed } from "vue";

const props = defineProps<{
    schema: TSchema;
}>();

const anchor = computed(() => {
    return new Anchor.CSingleAnchor({
        connections: [],
        dbAnchor: {
            name: "test",
            schema: props.schema
        }
    });
});
</script>

<style scoped>
.anchor {
    display: inline-block;
    padding: 0 var(--length-xxs)
}
</style>
