<template>
    <div class="image">
        <img
            :alt="alt"
            loading="lazy"
            :src="src"
            @click="openModal"
        >
    </div>

    <Teleport to="body">
        <Transition name="modal">
            <div
                v-if="isModalOpen"
                class="modal-wrapper"
                @click="closeModal"
            >
                <div
                    class="modal-content"
                    @click.stop
                >
                    <img
                        :alt="alt"
                        :src="src"
                    >
                    <LButton
                        class="close"
                        :icon="faClose"
                        @click="closeModal"
                    >
                        Close
                    </LButton>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { faClose } from "@fortawesome/pro-solid-svg-icons";
import { LButton } from "@luna-park/design";
import { ref } from "vue";

const props = defineProps<{
    alt: string;
    src: string;
}>();

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
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
        cursor: zoom-in;
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
            transform: scale(1.02);
        }
    }
}

.modal-wrapper {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: var(--length-xl);
    cursor: zoom-out;
}

.modal-content {
    position: relative;
    cursor: default;

    img {
        max-width: 100%;
        max-height: 95vh;
        object-fit: contain;
        border-radius: var(--length-radius-m);
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
    }

    .close {
        position: absolute;
        top: var(--length-s);
        right: var(--length-s);
    }

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
