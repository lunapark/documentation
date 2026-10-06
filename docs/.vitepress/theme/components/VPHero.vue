<template>
    <div
        class="VPHero"
        :class="{ 'has-image': image || heroImageSlotExists }"
    >
        <div class="container">
            <div class="main">
                <slot name="home-hero-info-before" />
                <slot name="home-hero-info">
                    <h1 class="heading">
                        <span
                            v-if="name"
                            class="name clip"
                            v-html="name"
                        />
                        <span
                            v-if="text"
                            class="text"
                            v-html="text"
                        />
                    </h1>
                    <p
                        v-if="tagline"
                        class="tagline"
                        v-html="tagline"
                    />
                </slot>
                <slot name="home-hero-info-after" />

                <div
                    v-if="actions"
                    class="actions"
                >
                    <div
                        v-for="action in actions"
                        :key="action.link"
                        class="action"
                    >
                        <DCtaButton
                            v-if="action.theme === 'brand'"
                            big
                            :href="normalizeLink(action.link)"
                            :rel="action.rel"
                            :target="action.target"
                        >
                            {{ action.text }}
                        </DCtaButton>
                        <LButton
                            v-else
                            big
                            border
                            class="alt-button"
                            :href="normalizeLink(action.link)"
                            :rel="action.rel"
                            :target="action.target"
                        >
                            {{ action.text }}
                        </LButton>
                    </div>
                </div>
                <slot name="home-hero-actions-after" />
            </div>

            <div
                v-if="image || heroImageSlotExists"
                class="image"
            >
                <div class="image-container">
                    <div class="image-bg" />
                    <slot name="home-hero-image">
                        <VPImage
                            v-if="image"
                            class="image-src"
                            :image="image"
                        />
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from "vue";
import type { DefaultTheme } from "vitepress/theme";
import VPImage from "./VPImage.vue";
import { LButton } from "@luna-park/design";
import { normalizeLink } from "../support/utils";
import DCtaButton from "../custom/components/DCtaButton.vue";

export interface HeroAction {
    link: string
    rel?: string
    target?: string
    text: string
    theme?: "brand" | "alt"
}

defineProps<{
    name?: string
    actions?: Array<HeroAction>
    image?: DefaultTheme.ThemeableImage
    tagline?: string
    text?: string
}>();

const heroImageSlotExists = inject("hero-image-slot-exists") as Ref<boolean>;
</script>

<style scoped>
.VPHero {
    margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
}

@media (min-width: 640px) {
    .VPHero {
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
    }
}

@media (min-width: 960px) {
    .VPHero {
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
    }
}

.container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1152px;
}

@media (min-width: 960px) {
    .container {
        flex-direction: row;
    }
}

.main {
    position: relative;
    z-index: 10;
    order: 2;
    flex-grow: 1;
    flex-shrink: 0;
}

.VPHero.has-image .container {
    text-align: center;
}

@media (min-width: 960px) {
    .VPHero.has-image .container {
        text-align: left;
    }
}

@media (min-width: 960px) {
    .main {
        order: 1;
        width: calc((100% / 3) * 2);
    }

    .VPHero.has-image .main {
        max-width: 592px;
    }
}

.heading {
    --hero-font-size: 32px;
    display: flex;
    flex-direction: column;
    gap: var(--length-xs);
}

.VPHero:not(.has-image) {
    .main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .heading {
        align-items: center;
    }

    .actions {
        justify-content: center;
    }
}

.name,
.text {
    width: fit-content;
    letter-spacing: -0.4px;
    line-height: 1.2;
    font-size: var(--hero-font-size);
    font-weight: 600;
    white-space: pre-wrap;
    color: var(--color-content);
    text-shadow: 0 0 32px var(--color-primary-darker);
}

.VPHero.has-image .name,
.VPHero.has-image .text {
    margin: 0 auto;
}

.text {
    font-size: calc(var(--hero-font-size) * 0.7);
}

.name,
.text :deep(.strong) {
    text-shadow: 0 0 64px var(--color-content-liter), 0 0 32px var(--color-primary), 0 0 16px var(--color-primary);
}


@media (min-width: 640px) {
    .heading {
        --hero-font-size: 48px;
    }
}

@media (min-width: 960px) {
    .heading {
        --hero-font-size: 64px;
    }

    .VPHero.has-image .name,
    .VPHero.has-image .text {
        margin: 0;
    }
}

.tagline {
    padding-top: 8px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
    color: var(--color-content-liter);
}

.VPHero.has-image .tagline {
    margin: 0 auto;
}

@media (min-width: 640px) {
    .tagline {
        padding-top: 12px;
        line-height: 32px;
        font-size: 20px;
    }
}

@media (min-width: 960px) {
    .tagline {
        line-height: 36px;
        font-size: 24px;
    }

    .VPHero.has-image .tagline {
        margin: 0;
    }
}

.actions {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
    padding-top: 24px;
}

.VPHero.has-image .actions {
    justify-content: center;
}

@media (min-width: 640px) {
    .actions {
        padding-top: 32px;
    }
}

@media (min-width: 960px) {
    .VPHero.has-image .actions {
        justify-content: flex-start;
    }
}

.action {
    flex-shrink: 0;
    padding: 6px;

    .alt-button {
        --button-background: var(--color-background-litest);
        --button-background-hover: var(--color-background-liter);
        --button-border: var(--color-primary-liter);
        backdrop-filter: blur(16px);

        &:hover {
            --button-border: var(--color-primary-lite);
        }
    }
}

.image {
    order: 1;
    margin: -76px -24px -48px;
}

@media (min-width: 640px) {
    .image {
        margin: -108px -24px -48px;
    }
}

@media (min-width: 960px) {
    .image {
        flex-grow: 1;
        order: 2;
        margin: 0;
        min-height: 100%;
    }
}

.image-container {
    position: relative;
    margin: 0 auto;
    width: 320px;
    height: 320px;
}

@media (min-width: 640px) {
    .image-container {
        width: 392px;
        height: 392px;
    }
}

@media (min-width: 960px) {
    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        /*rtl:ignore*/
        transform: translate(-32px, -32px);
    }
}

.image-bg {
    position: absolute;
    top: 50%;
    /*rtl:ignore*/
    left: 50%;
    border-radius: 50%;
    width: 192px;
    height: 192px;
    background-image: var(--vp-home-hero-image-background-image);
    filter: var(--vp-home-hero-image-filter);
    /*rtl:ignore*/
    transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
    .image-bg {
        width: 256px;
        height: 256px;
    }
}

@media (min-width: 960px) {
    .image-bg {
        width: 320px;
        height: 320px;
    }
}

:deep(.image-src) {
    position: absolute;
    top: 50%;
    /*rtl:ignore*/
    left: 50%;
    max-height: 192px;
    /*rtl:ignore*/
    transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
    :deep(.image-src) {
        max-width: 256px;
        max-height: 256px;
    }
}

@media (min-width: 960px) {
    :deep(.image-src) {
        max-height: 320px;
    }
}
</style>
