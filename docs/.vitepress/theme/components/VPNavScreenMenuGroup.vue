<script lang="ts" setup>
import { computed, ref } from "vue";
import VPNavScreenMenuGroupLink from "./VPNavScreenMenuGroupLink.vue";
import VPNavScreenMenuGroupSection from "./VPNavScreenMenuGroupSection.vue";

const props = defineProps<{
  items: Array<any>
  text: string
}>();

const isOpen = ref(false);

const groupId = computed(
    () => `NavScreenGroup-${ props.text.replace(" ", "-").toLowerCase() }`
);

function toggle() {
    isOpen.value = !isOpen.value;
}
</script>

<template>
    <div
        class="VPNavScreenMenuGroup"
        :class="{ open: isOpen }"
    >
        <button
            :aria-controls="groupId"
            :aria-expanded="isOpen"
            class="button"
            @click="toggle"
        >
            <span
                class="button-text"
                v-html="text"
            />
            <span class="vpi-plus button-icon" />
        </button>

        <div
            :id="groupId"
            class="items"
        >
            <template
                v-for="item in items"
                :key="JSON.stringify(item)"
            >
                <div
                    v-if="'link' in item"
                    class="item"
                >
                    <VPNavScreenMenuGroupLink :item="item" />
                </div>

                <div
                    v-else-if="'component' in item"
                    class="item"
                >
                    <component
                        :is="item.component"
                        v-bind="item.props"
                        screen-menu
                    />
                </div>

                <div
                    v-else
                    class="group"
                >
                    <VPNavScreenMenuGroupSection
                        :items="item.items"
                        :text="item.text"
                    />
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
.VPNavScreenMenuGroup {
  border-bottom: 1px solid var(--vp-c-divider);
  height: 48px;
  overflow: hidden;
  transition: border-color 0.5s;
}

.VPNavScreenMenuGroup .items {
  visibility: hidden;
}

.VPNavScreenMenuGroup.open .items {
  visibility: visible;
}

.VPNavScreenMenuGroup.open {
  padding-bottom: 10px;
  height: auto;
}

.VPNavScreenMenuGroup.open .button {
  padding-bottom: 6px;
  color: var(--vp-c-brand-1);
}

.VPNavScreenMenuGroup.open .button-icon {
  /*rtl:ignore*/
  transform: rotate(45deg);
}

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 11px 0;
  width: 100%;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-lite);
  transition: color 0.25s;
}

.button:hover {
  color: var(--vp-c-brand-1);
}

.button-icon {
  transition: transform 0.25s;
}

.group:first-child {
  padding-top: 0px;
}

.group + .group,
.group + .item {
  padding-top: 4px;
}
</style>
