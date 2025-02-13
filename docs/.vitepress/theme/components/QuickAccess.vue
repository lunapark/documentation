<template>
    <div class="quick-access">
        <div v-for="item in items" :key="item.title" class="card">
            <a :href="item.link" class="card-link">
                <span class="card-title">{{ item.title }}</span>
                <p>{{ item.description }}</p>
            </a>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});

</script>

<style scoped>
.quick-access {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    border: 1px solid var(--color-background-3);
    border-radius: 10px;
    padding: 20px;
    text-align: left;
    background: var(--color-background-1);
    cursor: pointer;

    .card-link, p {
        transition: color 0.3s ease; /* Transition de 1 seconde */
    }

    &:hover {

        /* Lorsque l'on passe la souris sur la carte, on modifie les couleurs */
        .card-link {
            color: white;
        }

        p {
            color: var(--color-content-liter);
        }
    }
}

.card-link {
    text-decoration: none;
    color: var(--color-primary);
}

.card-title {
    text-shadow: 0 0 32px var(--color-primary);
}

h3 {
    margin-bottom: 10px;
    color: #42b983;
}

p {
    font-size: 0.8rem;
    color: var(--color-content-litest);
    line-height: 1.2rem;
    margin: 0;
}

/* 2 items par ligne quand la largeur de la fenêtre est inférieure à 1220px */
.card {
    width: calc(50% - 20px);
}


/* 1 item par ligne quand la largeur de la fenêtre est inférieure à 930px */
@media (max-width: 930px) {
    .card {
        width: 100%;
    }
}

</style>
