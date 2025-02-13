<script setup lang="ts">
import type { GridSize } from "../composables/sponsor-grid";
import { ref } from "vue";
import { useSponsorsGrid } from "../composables/sponsor-grid";

export interface Sponsor {
  name: string
  img: string
  url: string
}
interface Props {
  data: Array<Sponsor>
  size?: GridSize
}
const props = withDefaults(defineProps<Props>(), {
    size: "medium"
});

const el = ref(null);

useSponsorsGrid({ el, size: props.size });
</script>

<template>
    <div
        ref="el"
        class="VPSponsorsGrid vp-sponsor-grid"
        :class="[size]"
    >
        <div
            v-for="sponsor in data"
            :key="sponsor.name"
            class="vp-sponsor-grid-item"
        >
            <a
                class="vp-sponsor-grid-link"
                :href="sponsor.url"
                rel="sponsored noopener"
                target="_blank"
            >
                <article class="vp-sponsor-grid-box">
                    <h4 class="visually-hidden">{{ sponsor.name }}</h4>
                    <img
                        :alt="sponsor.name"
                        class="vp-sponsor-grid-image"
                        :src="sponsor.img"
                    >
                </article>
            </a>
        </div>
    </div>
</template>
