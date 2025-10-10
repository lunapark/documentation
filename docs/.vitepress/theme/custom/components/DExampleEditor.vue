<template>
    <iframe :src="target" allowTransparency="true" @load="onLoad" :class="{loading: !loaded}"/>
</template>


<script setup lang="ts">
import { LEditorConsole, LLogicEditor, useCanvasStore, useEditorStore, useLogicStore } from "@luna-park/editor";
import {computed, nextTick, onMounted, ref} from "vue";

const props = withDefaults(defineProps<{
    animation?: boolean;
    editorId: string;
    graph: unknown;
    zoomLevel?: number;
}>(), {
    zoomLevel: 0
});

const loaded = ref(false);

const target = computed(() => {
    const searchParams = new URLSearchParams();
    searchParams.set("graph", props.graph);
    searchParams.set("animation", props.animation ? "1" : "0");
    searchParams.set("zoomLevel", props.zoomLevel.toString());

    return `/editor?${searchParams.toString()}`;
});

function onLoad() {
    loaded.value = true;
}
</script>

<style scoped>
iframe {
    height: 282px;
    width: 100%;
    border: none;
    background: transparent;

    &.loading {
        opacity: 0;
    }
}
</style>
