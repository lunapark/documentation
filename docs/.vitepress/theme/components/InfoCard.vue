<template>
    <div class="cards-container">
        <div v-for="(card, index) in cards" :key="index" class="info-card">
            <span class="title">{{ card.title }}</span>
            <ul class="info-list">
                <li v-for="(info, idx) in card.infoPairs" :key="idx" class="info-item">
                    <span class="info-label">{{ info.label }}</span>
                    <span :class="info.styleClass">{{ info.value }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    cards: {
        type: Array,
        required: true
    }
})
</script>

<style scoped lang="scss">
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

.info-card {
    background-color: var(--color-background-1);
    border: 1px solid var(--color-background-3);
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    flex-basis: calc(33.33% - 20px); /* 3 cartes par ligne */
    transition: background-color 0.3s ease;

    span.title {
        color: var(--color-primary);
        margin: 0;
        text-shadow: 0 0 32px var(--color-primary);
    }

    .ul{
        margin:0;
    }

    ul.info-list {
        list-style: none;
        padding: 0;

        li.info-item {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            flex-direction: column;

            .info-label {
                color: var(--color-content-litest);
            }

            .danger {
                color: var(--color-error-content);
            }

            .info-value {
                color: var(--color-content);
            }

        }
    }
}


</style>