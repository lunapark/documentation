<template>
    <div class="grid-hero" />
</template>

<script setup lang="ts">

</script>

<style scoped>
.grid-hero {
    position: absolute;
    inset: 0;
    overflow: hidden;
    /* 50.001% => Fix a bug in Chrome where the background is offset by 1px*/
    background: url("../assets/grid.svg") repeat 50.001% top;
    background-size: 16px 16px;
    opacity: 0.1;
    mask-image: radial-gradient(ellipse closest-corner at center 60vh,
    black 0%,
    black 30%,
    transparent 80%);
    display: flex;
    justify-content: center;
}
</style>
