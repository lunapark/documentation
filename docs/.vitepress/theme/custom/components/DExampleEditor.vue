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
import { ref } from "vue";

const props = defineProps<{
    target: string;
}>();

const loaded = ref(false);

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
    border-radius: var(--length-m);

    &.loading {
        opacity: 0;
    }
}
</style>
