<template>
  <span class="anchor-wrapper">
    <svg width="20" height="20" viewBox="0 0 20 20" v-if="type === 'execution'">
      <path
          class="border"
          d="M5 5 L 10 5 S 15 5, 15 10 S 10 15, 10 15 L 5 15 Z"
          :stroke="color"
      ></path>
    </svg>
      <svg width="20" height="20" viewBox="0 0 20 20"  v-if="type === 'array'">
          <rect class="border" x="5" y="5" :stroke="color" height="10" width="10"></rect>
          <path class="fill" d="M20 10 L 15 13 L 15 7 Z" :fill="color"></path>
      </svg>
      <svg width="20" height="20" viewBox="0 0 20 20"  v-if="type === 'value'">
          <circle class="border" cx="10" cy="10" r="5" :stroke="color"></circle>
          <path class="fill" d="M20 10 L 15 13 L 15 7 Z" :fill="color"></path>
      </svg>
  </span>
</template>

<script setup lang="ts">
defineProps<{
    type: string;
    color?: string;
}>()
</script>

<style scoped lang="scss">
.anchor-wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    transform: translateY(-2px);
}

.border {
    fill: none;
    stroke-width: 2;
}
</style>
