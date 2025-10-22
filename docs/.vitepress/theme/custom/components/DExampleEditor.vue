<template>
    <div class="example-editor-container">
        <div class="loader-container" v-if="!loaded">
            <div class="loader"></div>
        </div>
        <iframe :src="target" allowTransparency="true" @load="onLoad" :class="{loading: !loaded}"/>
    </div>
</template>


<script setup lang="ts">
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
.example-editor-container {
    position: relative;
    width: 100%;
    border: 2px solid rgba(0, 122, 255, 0.6);
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 122, 255, 0.4),
                0 0 40px rgba(0, 122, 255, 0.2),
                inset 0 0 20px rgba(0, 122, 255, 0.1);
    overflow: hidden;
}

.interactive-hint :deep(svg) {
    width: 16px;
    height: 16px;
}


.loader {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(0, 122, 255, 0.2);
    border-top-color: rgba(0, 122, 255, 0.8);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

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
