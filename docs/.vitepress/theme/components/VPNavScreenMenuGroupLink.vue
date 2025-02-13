<script lang="ts" setup>
import type { DefaultTheme } from "vitepress/theme";
import { inject } from "vue";
import VPLink from "./VPLink.vue";

defineProps<{
  item: DefaultTheme.NavItemWithLink
}>();

const closeScreen = inject("close-screen") as () => void;
</script>

<template>
    <VPLink
        class="VPNavScreenMenuGroupLink"
        :href="item.link"
        :no-icon="item.noIcon"
        :rel="item.rel"
        :target="item.target"
        @click="closeScreen"
    >
        <span v-html="item.text" />
    </VPLink>
</template>

<style scoped>
.VPNavScreenMenuGroupLink {
  display: block;
  margin-left: 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-content-lite);
  transition: color 0.25s;
}

.VPNavScreenMenuGroupLink:hover {
  color: var(--vp-c-brand-1);
}
</style>
