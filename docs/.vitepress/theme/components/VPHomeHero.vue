<script setup lang="ts">
import { useData } from "../composables/data";
import VPHero from "./VPHero.vue";

const { frontmatter: fm } = useData();
</script>

<template>
    <VPHero
        v-if="fm.hero"
        :actions="fm.hero.actions"
        class="VPHomeHero"
        :image="fm.hero.image"
        :name="fm.hero.name"
        :tagline="fm.hero.tagline"
        :text="fm.hero.text"
    >
        <template #home-hero-info-before>
            <slot name="home-hero-info-before" />
        </template>
        <template #home-hero-info>
            <slot name="home-hero-info" />
        </template>
        <template #home-hero-info-after>
            <slot name="home-hero-info-after" />
        </template>
        <template #home-hero-actions-after>
            <slot name="home-hero-actions-after" />
        </template>
        <template #home-hero-image>
            <slot name="home-hero-image" />
        </template>
    </VPHero>
</template>
