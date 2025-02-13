<script setup lang="ts">
import type { Sponsors } from "./VPSponsors.vue";
import type { Sponsor } from "./VPSponsorsGrid.vue";
import VPSponsors from "./VPSponsors.vue";

defineProps<{
  data: Array<Sponsors> | Array<Sponsor>
  size?: "xmini" | "mini" | "small"
  tier?: string
}>();
</script>

<template>
    <div class="VPDocAsideSponsors">
        <VPSponsors
            :data="data"
            mode="aside"
            :size="size"
            :tier="tier"
        />
    </div>
</template>
