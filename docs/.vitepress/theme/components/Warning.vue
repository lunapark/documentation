<template>
    <div class="container">
        <div class="side-line" />
        <div class="icon">
            <FontAwesomeIcon :icon="faTriangleExclamation"/>
        </div>
        <div class="content">
            <span class="warning-title">{{ title }}</span>
            <span class="warning-content">{{ content }}</span>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faTriangleExclamation} from "@fortawesome/pro-solid-svg-icons";

const props = defineProps({
    title: String,
    content: String
});
</script>

<style scoped>
.container {
    background: var(--color-warning-background);
    background-image: linear-gradient(135deg, var(--color-background-1), var(--color-warning-background));
    border-radius: var(--length-radius-s);
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 100%;
    position: relative;

    .side-line {
        background: var(--color-warning);
        width: 4px;
        height: 100%;
        flex-shrink: 0;
        position: absolute;
        top: 0;
        bottom: 0;
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: var(--length-padding-m);
        .warning-title {
            color: var(--color-content);
            font-size: 1.2rem;
            font-weight: 600;
        }
        .warning-content {
            color: var(--color-content-liter);
            font-size: 0.8rem;
            font-weight: 400;
        }
    }

    .icon {
        color: var(--color-content-litest);
        font-size: 2rem;
        padding:var(--length-padding-l);
    }
}
</style>