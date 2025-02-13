<script lang="ts" setup>
import { ref } from "vue";
import { useFlyout } from "../composables/flyout";
import VPMenu from "./VPMenu.vue";

defineProps<{
  button?: string
  icon?: string
  items?: Array<any>
  label?: string
}>();

const open = ref(false);
const el = ref<HTMLElement>();

useFlyout({ el, onBlur });

function onBlur() {
    open.value = false;
}
</script>

<template>
    <div
        ref="el"
        class="VPFlyout"
        @mouseenter="open = true"
        @mouseleave="open = false"
    >
        <button
            :aria-expanded="open"
            aria-haspopup="true"
            :aria-label="label"
            class="button"
            type="button"
            @click="open = !open"
        >
            <span
                v-if="button || icon"
                class="text"
            >
                <span
                    v-if="icon"
                    :class="[icon, 'option-icon']"
                />
                <span
                    v-if="button"
                    v-html="button"
                />
                <span class="vpi-chevron-down text-icon" />
            </span>

            <span
                v-else
                class="vpi-more-horizontal icon"
            />
        </button>

        <div class="menu">
            <VPMenu :items="items">
                <slot />
            </VPMenu>
        </div>
    </div>
</template>

<style scoped>
.VPFlyout {
  position: relative;
}

.VPFlyout:hover {
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}

.VPFlyout:hover .text {
  color: var(--color-content-liter);
}

.VPFlyout:hover .icon {
  fill: var(--color-content-liter);
}

.VPFlyout.active .text {
  color: var(--vp-c-brand-1);
}

.VPFlyout.active:hover .text {
  color: var(--vp-c-brand-2);
}

.button[aria-expanded="false"] + .menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
}

.VPFlyout:hover .menu,
.button[aria-expanded="true"] + .menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: var(--vp-nav-height);
  color: var(--color-content-lite);
  transition: color 0.5s;
}

.text {
  display: flex;
  align-items: center;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-lite);
  transition: color 0.25s;
}

.option-icon {
  margin-right: 0px;
  font-size: 16px;
}

.text-icon {
  margin-left: 4px;
  font-size: 14px;
}

.icon {
  font-size: 20px;
  transition: fill 0.25s;
}

.menu {
  position: absolute;
  top: calc(var(--vp-nav-height) / 2 + 20px);
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0.25s, transform 0.25s;
}
</style>
