<template>
    <div class="cards-container">
        <div
            v-for="(card, index) in cards"
            :key="index"
            :class="['info-card', card.accent ? 'accent' : '']"
        >
            <span class="title">{{ card.title }}</span>
            <ul class="info-list">
                <li
                    v-for="(info, idx) in card.infoPairs"
                    :key="idx"
                    class="info-item"
                >
                    <span class="info-label">{{ info.label }}</span>
                    <span :class="info.styleClass">{{ info.value }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    cards: Array<{
        title: string,
        accent: boolean,
        infoPairs: Array<{
            label: string,
            styleClass: string,
            value: string
        }>
    }>;
}>();
</script>

<style scoped>
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

.info-card {
    background-color: var(--color-background-dark);
    border: 1px solid var(--color-background-3);
    border-radius: var(--length-radius-m);
    box-shadow: 0 0 32px var(--color-background-litest);
    padding: var(--length-m) var(--length-l);
    flex: 1 1 0;

    &.accent {
        background-color: var(--color-background-0);
        border: 1px solid var(--color-primary-dark-lite);
    }

    span.title {
        color: var(--color-primary);
        margin: 0;
        text-shadow: 0 0 32px var(--color-primary);
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
                color: var(--color-content-lite);
            }

            .danger {
                color: var(--color-error-content);
            }

            .success {
                color: var(--color-success-content);
            }

            .info {
                color: var(--color-warning-content);
            }
        }
    }
}


</style>
