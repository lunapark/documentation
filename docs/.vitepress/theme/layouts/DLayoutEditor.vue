<template>
    <ClientOnly>
        <div
            v-if="ready"
            class="example-editor"
        >
            <LLogicEditor
                class="editor"
                :graph="graph"
                playground
            />
            <div class="console-wrapper">
                <div class="console-title">
                    Console
                </div>
                <LEditorConsole class="console" />
            </div>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import { LEditorConsole, LLogicEditor, useEditorStore, useLogicStore } from "@luna-park/editor";
import { onMounted, ref } from "vue";

const query = new URLSearchParams(window.location.search);

const animation = query.get("animation") === "1";
const zoomLevel = Number(query.get("zoomLevel")) || 0;

const graph = ref();
const ready = ref(false);

onMounted(async () => {
    graph.value = await (async () => {
        switch (query.get("graph")) {
            case "for":
                return (await import("./examples/graphFor.json", { assert: { type: "json" } })).default;
            case "if":
                return (await import("./examples/graphIf.json", { assert: { type: "json" } })).default;
            case "log":
                return (await import("./examples/graphLog.json", { assert: { type: "json" } })).default;
            case "loglog":
                return (await import("./examples/graphLogLog.json", { assert: { type: "json" } })).default;
            case "wire":
                return (await import("./examples/graphWire.json", { assert: { type: "json" } })).default;
            default:
                return { nodes: {}, wires: {} };
        }
    })();

    graph.value.canvas = {
        location: { x: 0, y: 0 },
        zoom: zoomLevel
    };

    await useLogicStore().loadLibs(["standard", "string"]);
    useEditorStore().flags.animation = animation;

    ready.value = true;
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
