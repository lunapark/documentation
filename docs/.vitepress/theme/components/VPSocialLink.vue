<script lang="ts" setup>
import type { DefaultTheme } from "vitepress/theme";
import { computed, nextTick, onMounted, ref, useSSRContext } from "vue";
import type { SSGContext } from "../shared";

const props = defineProps<{
  ariaLabel?: string
  icon: DefaultTheme.SocialLinkIcon
  link: string
}>();

const el = ref<HTMLAnchorElement>();

onMounted(async () => {
    await nextTick();
    const span = el.value?.children[0];
    if (
        span instanceof HTMLElement &&
    span.className.startsWith("vpi-social-") &&
    (getComputedStyle(span).maskImage ||
      getComputedStyle(span).webkitMaskImage) === "none"
    ) {
        span.style.setProperty(
            "--icon",
            `url('https://api.iconify.design/simple-icons/${ props.icon }.svg')`
        );
    }
});

const svg = computed(() => {
    if (typeof props.icon === "object") return props.icon.svg;
    return `<span class="vpi-social-${ props.icon }"></span>`;
});

if (import.meta.env.SSR) {
    typeof props.icon === "string" &&
    useSSRContext<SSGContext>()?.vpSocialIcons.add(props.icon);
}
</script>

<template>
    <a
        ref="el"
        :aria-label="ariaLabel ?? (typeof icon === 'string' ? icon : '')"
        class="VPSocialLink no-icon"
        :href="link"
        rel="noopener"
        target="_blank"
        v-html="svg"
    />
</template>

<style scoped>
.VPSocialLink {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: var(--color-content-liter);
  transition: color 0.5s;
}

.VPSocialLink:hover {
  color: var(--color-content-lite);
  transition: color 0.25s;
}

.VPSocialLink > :deep(svg),
.VPSocialLink > :deep([class^="vpi-social-"]) {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
