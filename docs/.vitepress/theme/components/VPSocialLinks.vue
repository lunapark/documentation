<script lang="ts" setup>
import type { DefaultTheme } from "vitepress/theme";
import VPSocialLink from "./VPSocialLink.vue";

defineProps<{
  links: Array<DefaultTheme.SocialLink>
}>();
</script>

<template>
    <div class="VPSocialLinks">
        <VPSocialLink
            v-for="{ link, icon, ariaLabel } in links"
            :key="link"
            :aria-label="ariaLabel"
            :icon="icon"
            :link="link"
        />
    </div>
</template>

<style scoped>
.VPSocialLinks {
  display: flex;
  justify-content: center;
}
</style>
