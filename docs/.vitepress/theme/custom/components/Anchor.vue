<template>
    <span class="anchor-wrapper">
        <svg
            v-if="type === 'execution'"
            height="20"
            viewBox="0 0 20 20"
            width="20"
        >
            <path
                class="border"
                d="M5 5 L 10 5 S 15 5, 15 10 S 10 15, 10 15 L 5 15 Z"
                :stroke="color"
            />
        </svg>
        <svg
            v-if="type === 'array'"
            height="20"
            viewBox="0 0 20 20"
            width="20"
        >
            <rect
                class="border"
                height="10"
                :stroke="color"
                width="10"
                x="5"
                y="5"
            />
            <path
                class="fill"
                d="M20 10 L 15 13 L 15 7 Z"
                :fill="color"
            />
        </svg>
        <svg
            v-if="type === 'value'"
            height="20"
            viewBox="0 0 20 20"
            width="20"
        >
            <circle
                class="border"
                cx="10"
                cy="10"
                r="5"
                :stroke="color"
            />
            <path
                class="fill"
                d="M20 10 L 15 13 L 15 7 Z"
                :fill="color"
            />
        </svg>
    </span>
</template>

<script setup lang="ts">
defineProps<{
    type: string;
    color?: string;
}>();
</script>

<style scoped>
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
