<template>
    <ClientOnly>
        <div
            v-if="ready"
            class="example-editor"
        >
            <LLogicEditor
                class="editor"
                :editor-id="editorId"
                :graph="graph"
                playground
            />
            <div class="console-wrapper">
                <div class="console-title">
                    Console
                </div>
                <LEditorConsole
                    class="console"
                    :editor-id="editorId"
                />
            </div>
        </div>
    </ClientOnly>
</template>


<script setup lang="ts">
import { LEditorConsole, LLogicEditor, useCanvasStore, useEditorStore, useLogicStore } from "@luna-park/editor";
import { nextTick, onMounted, ref } from "vue";

const props = withDefaults(defineProps<{
    animation?: boolean;
    editorId: string;
    graph: unknown;
    zoomLevel?: number;
}>(), {
    zoomLevel: 0
});

const ready = ref(false);

onMounted(async () => {
    await useLogicStore(props.editorId).loadLibs(["standard", "string"]);
    useEditorStore(props.editorId).flags.animation = props.animation;

    ready.value = true;
    await nextTick();
    useCanvasStore(props.editorId).zoomFloat = props.zoomLevel;
});
</script>

<style scoped>
.example-editor {
    display: flex;
    flex-direction: column;

    .editor {
        position: relative;
        z-index: 1;
        flex-grow: 1;
        border-radius: var(--length-radius-m) var(--length-radius-m) 0 0;
        height: 200px;
    }

    .console-wrapper {
        position: relative;
        border-top: 2px solid var(--color-background-0);

        .console-title {
            font-size: 1.2rem;
            pointer-events: none;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--color-soft);
            right: 0;
            position: absolute;
            padding: 0 var(--length-s);
        }
    }

    .console {
        height: 80px;
        border-radius: 0 0 var(--length-radius-m) var(--length-radius-m);
        flex-grow: 0;
        flex-shrink: 0;
    }
}
</style>
