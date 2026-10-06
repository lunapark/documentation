<template>
    <LButton
        border
        class="cta-button"
    >
        <slot />
    </LButton>
</template>

<script setup lang="ts">
import { LButton } from "@luna-park/design";
</script>

<style scoped>
@property --cta-bg-border {
    syntax: '<color>';
    initial-value: #000000;
    inherits: false;
}

@property --cta-bg-center {
    syntax: '<color>';
    initial-value: #000000;
    inherits: false;
}

.cta-button {
    --cta-bg-border: var(--color-primary-darker);
    --cta-bg-center: var(--color-primary-dark);
    --button-background: radial-gradient(circle at center, var(--cta-bg-center) 0%, var(--cta-bg-border) 100%);
    --button-background-hover: var(--button-background);
    --button-border: var(--color-primary-lite);
    --button-content: var(--color-content);

    transition: --cta-bg-border var(--duration-fast), --cta-bg-center var(--duration-fast), transform var(--duration-fast);
    box-shadow: 0 0 16px var(--color-primary-liter), 0 0 64px var(--color-primary-litest);

    &:deep(.icon) {
        color: var(--color-primary-content-lite);
    }

    &:hover {
        --cta-bg-border: var(--color-primary-dark);
        --cta-bg-center: var(--color-primary-lite);
    }
}
</style>
