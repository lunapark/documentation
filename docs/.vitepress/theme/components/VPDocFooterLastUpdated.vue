<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import { useData } from "../composables/data";

const { lang, page, theme } = useData();

const date = computed(
    () => new Date(page.value.lastUpdated!)
);
const isoDatetime = computed(() => date.value.toISOString());
const datetime = ref("");

// set time on mounted hook to avoid hydration mismatch due to
// potential differences in timezones of the server and clients
onMounted(() => {
    watchEffect(() => {
        datetime.value = new Intl.DateTimeFormat(
            theme.value.lastUpdated?.formatOptions?.forceLocale ? lang.value : undefined,
            theme.value.lastUpdated?.formatOptions ?? {
                dateStyle: "short",
                timeStyle: "short"
            }
        ).format(date.value);
    });
});
</script>

<template>
    <p class="VPLastUpdated">
        {{ theme.lastUpdated?.text || theme.lastUpdatedText || 'Last updated' }}:
        <time :datetime="isoDatetime">{{ datetime }}</time>
    </p>
</template>

<style scoped>
.VPLastUpdated {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-content-liter);
}

@media (min-width: 640px) {
  .VPLastUpdated {
    line-height: 32px;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
