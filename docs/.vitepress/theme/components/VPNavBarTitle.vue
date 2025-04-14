<template>
    <div
        class="VPNavBarTitle"
        :class="{ 'has-sidebar': hasSidebar }"
    >
        <a
            class="title"
            href="https://luna-park.app"
        >
            <slot name="nav-bar-title-before" />
            <LIcon
                class="icon"
                :icon="faLunaPark"
            />
            <span
                v-if="theme.siteTitle"
                v-html="theme.siteTitle"
            />
            <span v-else-if="theme.siteTitle === undefined">{{ site.title }}</span>
            <slot name="nav-bar-title-after" />
        </a>
    </div>
</template>

<script setup lang="ts">
import { useData } from "../composables/data";
import { useSidebar } from "../composables/sidebar";
import { faLunaPark, LIcon } from "@luna-park/design";

const { site, theme } = useData();
const { hasSidebar } = useSidebar();

</script>

<style scoped>
.title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;
    width: 100%;
    height: var(--vp-nav-height);
    font-size: 16px;
    font-weight: 600;
    color: var(--color-content-lite);
    transition: opacity 0.25s;
    gap: var(--length-xs);

    .icon {
        color: var(--color-primary);
    }
}

@media (min-width: 960px) {
    .title {
        flex-shrink: 0;
    }

    .VPNavBarTitle.has-sidebar .title {
        border-bottom-color: var(--vp-c-divider);
    }
}

:deep(.logo) {
    margin-right: 8px;
    height: var(--vp-nav-logo-height);
}
</style>
