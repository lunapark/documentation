<template>
    <div class="image">
        <div
            v-if="isVideo"
            ref="player"
            class="player"
        >
            <video
                ref="video"
                :aria-label="alt"
                :height="height"
                loop
                muted
                playsinline
                preload="metadata"
                :src="src"
                :width="width"
                @click="openModal"
                @pause="playing = false"
                @play="playing = true"
            />
            <div
                class="controls"
                @click.stop
            >
                <LButton
                    :icon="playing ? faPause : faPlay"
                    small
                    square
                    :title="playing ? 'Pause' : 'Play'"
                    @click="toggle(video)"
                />
                <div
                    class="progress"
                    @pointerdown="seek($event, video)"
                >
                    <div
                        class="bar"
                        :style="{ width: `${ progress * 100 }%` }"
                    />
                </div>
            </div>
        </div>
        <img
            v-else
            :alt="alt"
            decoding="async"
            :height="height"
            loading="lazy"
            :src="src"
            :width="width"
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
                    <div
                        v-if="isVideo"
                        class="player"
                    >
                        <video
                            ref="modalVideo"
                            :aria-label="alt"
                            autoplay
                            loop
                            muted
                            playsinline
                            :src="src"
                            @loadedmetadata="startModal"
                            @pause="playing = false"
                            @play="playing = true"
                        />
                        <div class="controls">
                            <LButton
                                :icon="playing ? faPause : faPlay"
                                small
                                square
                                :title="playing ? 'Pause' : 'Play'"
                                @click="toggle(modalVideo)"
                            />
                            <div
                                class="progress"
                                @pointerdown="seek($event, modalVideo)"
                            >
                                <div
                                    class="bar"
                                    :style="{ width: `${ progress * 100 }%` }"
                                />
                            </div>
                        </div>
                    </div>
                    <img
                        v-else
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
import { faClose, faPause, faPlay } from "@fortawesome/pro-solid-svg-icons";
import { LButton } from "@luna-park/design";
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";

const props = defineProps<{
    alt: string;
    height?: number;
    src: string;
    width?: number;
}>();

const isModalOpen = ref(false);
const isVideo = computed(() => /\.(webm|mp4)(\?|#|$)/.test(props.src));

const player = useTemplateRef("player");
const video = useTemplateRef("video");
const modalVideo = useTemplateRef("modalVideo");

const playing = ref(false);
const progress = ref(0);
const pausedByUser = ref(false);
const visible = ref(false);

let observer: IntersectionObserver | undefined;
let frame = 0;

function current() {
    return isModalOpen.value ? modalVideo.value : video.value;
}

function track() {
    const element = current();
    if (element?.duration) {
        progress.value = element.currentTime / element.duration;
    }
    frame = requestAnimationFrame(track);
}

function toggle(element: HTMLVideoElement | null) {
    if (!element) {
        return;
    }

    if (element.paused) {
        pausedByUser.value = false;
        element.play().catch(() => undefined);
    }
    else {
        pausedByUser.value = true;
        element.pause();
    }
}

function seek(event: PointerEvent, element: HTMLVideoElement | null) {
    if (!element?.duration) {
        return;
    }

    const bar = event.currentTarget as HTMLElement;
    const update = (clientX: number) => {
        const rect = bar.getBoundingClientRect();
        const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
        element.currentTime = ratio * element.duration;
        progress.value = ratio;
    };
    const move = (moveEvent: PointerEvent) => update(moveEvent.clientX);
    const stop = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", stop);
    };

    update(event.clientX);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
}

function syncInline() {
    const element = video.value;
    if (!element) {
        return;
    }

    if (visible.value && !pausedByUser.value && !isModalOpen.value) {
        element.play().catch(() => undefined);
    }
    else {
        element.pause();
    }
}

function startModal() {
    const element = modalVideo.value;
    if (!element) {
        return;
    }

    element.currentTime = video.value?.currentTime ?? 0;
    if (pausedByUser.value) {
        element.pause();
    }
}

const openModal = () => {
    isModalOpen.value = true;
    video.value?.pause();
};

const closeModal = () => {
    if (video.value && modalVideo.value) {
        video.value.currentTime = modalVideo.value.currentTime;
    }
    isModalOpen.value = false;
    syncInline();
};

onMounted(() => {
    if (!isVideo.value || !player.value) {
        return;
    }

    pausedByUser.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    observer = new IntersectionObserver(([entry]) => {
        visible.value = entry.isIntersecting;
        syncInline();
    }, { threshold: 0.25 });
    observer.observe(player.value);
    frame = requestAnimationFrame(track);
});

onBeforeUnmount(() => {
    observer?.disconnect();
    cancelAnimationFrame(frame);
});
</script>

<style scoped>
.image {
    display: flex;
    justify-content: center;
    margin: var(--length-s);

    img,
    .player {
        border-radius: var(--length-radius-s);
        border: 1px solid var(--color-background-3);
        box-shadow: 0 0 32px var(--color-background-litest);
        max-width: min(640px, 100%);
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
            transform: scale(1.02);
        }
    }

    img {
        height: auto;
        cursor: zoom-in;
    }
}

.player {
    position: relative;
    overflow: hidden;

    video {
        display: block;
        width: 100%;
        height: auto;
        cursor: zoom-in;
    }

    .controls {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        gap: var(--length-s);
        padding: var(--length-xs) var(--length-s);
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
        opacity: 0;
        transition: opacity 0.2s ease;

        .progress {
            flex: 1;
            height: var(--length-xs);
            border-radius: var(--length-xs);
            background-color: var(--color-soft-lite);
            cursor: pointer;
            touch-action: none;

            .bar {
                height: 100%;
                border-radius: inherit;
                background-color: var(--color-primary);
            }
        }
    }

    &:hover .controls,
    &:focus-within .controls {
        opacity: 1;
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

    img,
    .player {
        max-width: 100%;
        max-height: 95vh;
        border-radius: var(--length-radius-m);
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
    }

    img {
        object-fit: contain;
    }

    .player {
        video {
            max-height: 95vh;
            cursor: default;
        }

        .controls {
            opacity: 1;
        }
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
