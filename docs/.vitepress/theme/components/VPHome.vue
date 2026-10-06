<template>
    <component :is="'style'">
        :root { --color-chroma: 20%; }
    </component>
    <div
        class="VPHome"
        :class="{
            'external-link-icon-enabled': theme.externalLinkIcon
        }"
    >
        <LStarsBackground class="background" />
        <DGridHero class="grid" />
        <slot name="home-hero-before" />
        <VPHomeHero>
            <template #home-hero-info-before>
                <slot name="home-hero-info-before" />
            </template>
            <template #home-hero-info>
                <slot name="home-hero-info" />
            </template>
            <template #home-hero-info-after>
                <slot name="home-hero-info-after" />
            </template>
            <template #home-hero-actions-after>
                <slot name="home-hero-actions-after" />
            </template>
            <template #home-hero-image>
                <slot name="home-hero-image" />
            </template>
        </VPHomeHero>
        <slot name="home-hero-after" />

        <slot name="home-features-before" />
        <VPHomeFeatures />
        <slot name="home-features-after" />

        <VPHomeContent v-if="frontmatter.markdownStyles !== false">
            <Content />
        </VPHomeContent>
        <Content v-else />
    </div>
</template>

<script setup lang="ts">
import { LStarsBackground } from "@luna-park/design";

import { useData } from "../composables/data";
import DGridHero from "../custom/components/DGridHero.vue";
import VPHomeContent from "./VPHomeContent.vue";
import VPHomeFeatures from "./VPHomeFeatures.vue";
import VPHomeHero from "./VPHomeHero.vue";

const { frontmatter, theme } = useData();
</script>

<style scoped>
.VPHome {
    position: relative;
    isolation: isolate;
    padding-bottom: 96px;
    min-height: 100dvh;

    background: radial-gradient(ellipse 75vw 80vh at center 35vh,
    oklch(50% 60% var(--primary-hue)) 0%,
    oklch(25% calc(1.5 * var(--color-chroma)) var(--primary-hue)) 50%,
    oklch(15% calc(0.75 * var(--color-chroma)) var(--color-hue)) 90%
    );

    .background {
        height: 100vh;
        z-index: -1;
        mask-image: linear-gradient(180deg,
        transparent 0%,
        black 25%,
        black 75%,
        transparent 100%);
    }

    .grid {
        height: 100%;
        z-index: -1;
        pointer-events: none;
    }
}

@media (min-width: 768px) {
    .VPHome {
        padding-bottom: 128px;
    }
}
</style>
