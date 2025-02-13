<script setup lang="ts">
import type { GridSize } from "../composables/sponsor-grid";
import type { Sponsor } from "./VPSponsorsGrid.vue";
import { computed } from "vue";
import VPSponsorsGrid from "./VPSponsorsGrid.vue";

export interface Sponsors {
  items: Array<Sponsor>
  size?: GridSize
  tier?: string
}
interface Props {
  data: Array<Sponsors> | Array<Sponsor>
  mode?: "normal" | "aside"
  size?: GridSize
  tier?: string
}
const props = withDefaults(defineProps<Props>(), {
    mode: "normal"
});

const sponsors = computed(() => {
    const isSponsors = props.data.some((s) => {
        return "items" in s;
    });

    if (isSponsors) {
        return props.data as Array<Sponsors>;
    }

    return [
        { items: props.data as Array<Sponsor>, size: props.size, tier: props.tier }
    ];
});
</script>

<template>
    <div
        class="VPSponsors vp-sponsor"
        :class="[mode]"
    >
        <section
            v-for="(sponsor, index) in sponsors"
            :key="index"
            class="vp-sponsor-section"
        >
            <h3
                v-if="sponsor.tier"
                class="vp-sponsor-tier"
            >
                {{ sponsor.tier }}
            </h3>
            <VPSponsorsGrid
                :data="sponsor.items"
                :size="sponsor.size"
            />
        </section>
    </div>
</template>
