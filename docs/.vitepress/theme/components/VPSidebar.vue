<template>
    <aside
        v-if="hasSidebar"
        ref="navEl"
        class="VPSidebar"
        :class="{ open }"
        @click.stop
    >
        <div class="curtain" />

        <nav
            id="VPSidebarNav"
            aria-labelledby="sidebar-aria-label"
            class="nav"
            tabindex="-1"
        >
            <span
                id="sidebar-aria-label"
                class="visually-hidden"
            >
                Sidebar Navigation
            </span>

            <slot name="sidebar-nav-before" />
            <VPSidebarGroup
                :key="key"
                :items="sidebarGroups"
            />
            <slot name="sidebar-nav-after" />
        </nav>
    </aside>
</template>

<script lang="ts" setup>
import { useScrollLock } from "@vueuse/core";
import { inBrowser } from "vitepress";
import { ref, watch } from "vue";
import { useSidebar } from "../composables/sidebar";
import VPSidebarGroup from "./VPSidebarGroup.vue";

const { hasSidebar, sidebarGroups } = useSidebar();

const props = defineProps<{
    open: boolean
}>();

// a11y: focus Nav element when menu has opened
const navEl = ref<HTMLElement | null>(null);
const isLocked = useScrollLock(inBrowser ? document.body : null);

watch(
    [props, navEl],
    () => {
        if (props.open) {
            isLocked.value = true;
            navEl.value?.focus();
        }
        else isLocked.value = false;
    },
    { flush: "post", immediate: true }
);

const key = ref(0);

watch(
    sidebarGroups,
    () => {
        key.value += 1;
    },
    { deep: true }
);
</script>

<style scoped>
.VPSidebar {
    position: fixed;
    top: var(--vp-layout-top-height, 0px);
    bottom: 0;
    left: 0;
    z-index: var(--vp-z-index-sidebar);
    padding: 32px 32px 96px;
    width: calc(100vw - 64px);
    max-width: 320px;
    background-color: var(--color-background-darker);
    opacity: 0;
    box-shadow: var(--vp-c-shadow-3);
    overflow-x: hidden;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: opacity 0.5s, transform 0.25s ease;
    overscroll-behavior: contain;
}

.VPSidebar.open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    transition: opacity 0.25s,
    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.dark .VPSidebar {
    box-shadow: var(--vp-shadow-1);
}

@media (min-width: 960px) {
    .VPSidebar {
        padding-top: var(--vp-nav-height);
        width: var(--vp-sidebar-width);
        max-width: 100%;
        opacity: 1;
        visibility: visible;
        box-shadow: none;
        transform: translateX(0);
    }
}

@media (min-width: 1440px) {
    .VPSidebar {
        padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
        width: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px);
    }
}

@media (min-width: 960px) {
    .curtain {
        position: sticky;
        top: -64px;
        left: 0;
        z-index: 1;
        margin-top: calc(var(--vp-nav-height) * -1);
        margin-right: -32px;
        margin-left: -32px;
        height: var(--vp-nav-height);
        background-color: var(--color-background-darker);
    }
}

.nav {
    outline: 0;
}
</style>
