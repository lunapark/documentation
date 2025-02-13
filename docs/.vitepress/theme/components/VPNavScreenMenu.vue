<script lang="ts" setup>
import { useData } from "../composables/data";
import VPNavScreenMenuLink from "./VPNavScreenMenuLink.vue";
import VPNavScreenMenuGroup from "./VPNavScreenMenuGroup.vue";

const { theme } = useData();
</script>

<template>
    <nav
        v-if="theme.nav"
        class="VPNavScreenMenu"
    >
        <template
            v-for="item in theme.nav"
            :key="JSON.stringify(item)"
        >
            <VPNavScreenMenuLink
                v-if="'link' in item"
                :item="item"
            />
            <component
                :is="item.component"
                v-else-if="'component' in item"
                v-bind="item.props"
                screen-menu
            />
            <VPNavScreenMenuGroup
                v-else
                :items="item.items"
                :text="item.text || ''"
            />
        </template>
    </nav>
</template>
