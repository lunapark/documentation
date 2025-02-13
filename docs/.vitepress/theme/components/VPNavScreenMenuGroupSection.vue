<script lang="ts" setup>
import type { DefaultTheme } from "vitepress/theme";
import VPNavScreenMenuGroupLink from "./VPNavScreenMenuGroupLink.vue";

defineProps<{
  items: Array<DefaultTheme.NavItemWithLink>
  text?: string
}>();
</script>

<template>
    <div class="VPNavScreenMenuGroupSection">
        <p
            v-if="text"
            class="title"
        >
            {{ text }}
        </p>
        <VPNavScreenMenuGroupLink
            v-for="item in items"
            :key="item.text"
            :item="item"
        />
    </div>
</template>

<style scoped>
.VPNavScreenMenuGroupSection {
  display: block;
}

.title {
  line-height: 32px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-content-liter);
  transition: color 0.25s;
}
</style>
