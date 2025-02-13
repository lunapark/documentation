<script setup lang="ts">
import type { DefaultTheme } from "vitepress/theme";
import { withBase } from "vitepress";

defineProps<{
  alt?: string
  image: DefaultTheme.ThemeableImage
}>();

defineOptions({ inheritAttrs: false });
</script>

<template>
    <template v-if="image">
        <img
            v-if="typeof image === 'string' || 'src' in image"
            v-bind="typeof image === 'string' ? $attrs : { ...image, ...$attrs }"
            :alt="alt ?? (typeof image === 'string' ? '' : image.alt || '')"
            class="VPImage"
            :src="withBase(typeof image === 'string' ? image : image.src)"
        >
        <template v-else>
            <VPImage
                :alt="image.alt"
                class="dark"
                :image="image.dark"
                v-bind="$attrs"
            />
            <VPImage
                :alt="image.alt"
                class="light"
                :image="image.light"
                v-bind="$attrs"
            />
        </template>
    </template>
</template>

<style scoped>
html:not(.dark) .VPImage.dark {
  display: none;
}
.dark .VPImage.light {
  display: none;
}
</style>
