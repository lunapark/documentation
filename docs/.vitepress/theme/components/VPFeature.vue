<script setup lang="ts">
import type { DefaultTheme } from "vitepress/theme";
import VPImage from "./VPImage.vue";
import VPLink from "./VPLink.vue";

defineProps<{
    title: string
    details?: string
    icon?: DefaultTheme.FeatureIcon
    link?: string
    linkText?: string
    rel?: string
    target?: string
}>();
</script>

<template>
    <VPLink
        class="VPFeature"
        :href="link"
        :no-icon="true"
        :rel="rel"
        :tag="link ? 'a' : 'div'"
        :target="target"
    >
        <article class="box">
            <div
                v-if="typeof icon === 'object' && icon.wrap"
                class="icon"
            >
                <VPImage
                    :alt="icon.alt"
                    :height="icon.height || 48"
                    :image="icon"
                    :width="icon.width || 48"
                />
            </div>
            <VPImage
                v-else-if="typeof icon === 'object'"
                :alt="icon.alt"
                :height="icon.height || 48"
                :image="icon"
                :width="icon.width || 48"
            />
            <div
                v-else-if="icon"
                class="icon"
                v-html="icon"
            />
            <h2
                class="title"
                v-html="title"
            />
            <p
                v-if="details"
                class="details"
                v-html="details"
            />

            <div
                v-if="linkText"
                class="link-text"
            >
                <p class="link-text-value">
                    {{ linkText }} <span class="vpi-arrow-right link-text-icon" />
                </p>
            </div>
        </article>
    </VPLink>
</template>

<style scoped>
.VPFeature {
    height: 100%;

    display: flex;
    align-items: center;
    backdrop-filter: blur(8px);
    flex: 1 1 0;
    border: 1px solid var(--color-primary-litest);
    border-radius: var(--length-radius-m);
    box-shadow: 0 16px 32px var(--color-background-litest);
}

.VPFeature.link:hover {
    border-color: var(--vp-c-brand-1);
}

.box {
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: 100%;
}

.box > :deep(.VPImage) {
    margin-bottom: 20px;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 6px;
    background-color: var(--vp-c-default-soft);
    width: 48px;
    height: 48px;
    font-size: 24px;
    transition: background-color 0.25s;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
}

.details {
    flex-grow: 1;
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--color-content-liter);
}

.link-text {
    padding-top: 8px;
}

.link-text-value {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
}

.link-text-icon {
    margin-left: 6px;
}
</style>
