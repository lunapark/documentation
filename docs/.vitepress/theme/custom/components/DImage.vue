<template>
    <div class="image">
        <img
            :alt="alt"
            loading="lazy"
            :src="src"
            @click="openModal"
            class="clickable-image"
        >
    </div>

    <Teleport to="body">
        <Transition name="modal">
            <div v-if="isModalOpen" class="image-modal" @click="closeModal">
                <div class="modal-content" @click.stop>
                    <button class="close-button" @click="closeModal" aria-label="Fermer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <img :src="src" :alt="alt" class="modal-image">
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
    alt: string;
    src: string;
}>();

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = '';
};

const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isModalOpen.value) {
        closeModal();
    }
};

onMounted(() => {
    document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
});
</script>

<style scoped>
.image {
    display: flex;
    justify-content: center;

    img {
        border-radius: var(--length-radius-m);
        border: 1px solid var(--color-background-3);
        box-shadow: 0 0 32px var(--color-background-litest);
        max-width: 640px;
    }
}

.clickable-image {
    cursor: zoom-in;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.clickable-image:hover {
    transform: scale(1.02);
    box-shadow: 0 0 48px var(--color-background-litest) !important;
}

.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 2rem;
    cursor: zoom-out;
}

.modal-content {
    position: relative;
    max-width: 95vw;
    max-height: 95vh;
    cursor: default;
}

.modal-image {
    max-width: 100%;
    max-height: 95vh;
    object-fit: contain;
    border-radius: var(--length-radius-m);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
}

.close-button {
    position: absolute;
    top: -3rem;
    right: 0;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
}

.close-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
    transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
    transform: scale(0.9);
}
</style>
