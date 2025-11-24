<template>
    <div class="example-editor-container">
        <LLoading
            v-if="!loaded"
            class="loader"
        />
        <iframe
            allowTransparency="true"
            :class="{loading: !loaded}"
            :src="target"
            @load="onLoad"
        />
    </div>
</template>

<script setup lang="ts">
import { LLoading } from "@luna-park/design";
import { computed, ref } from "vue";

const props = withDefaults(defineProps<{
    animation?: boolean;
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

    return `/editor?${ searchParams.toString() }`;
});

function onLoad() {
    loaded.value = true;
}
</script>

<style scoped>
.example-editor-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 282px;

    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

iframe {
    height: 100%;
    width: 100%;
    border: none;
    background: transparent;

    &.loading {
        opacity: 0;
    }
}
</style>
