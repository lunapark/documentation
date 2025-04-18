import { onMounted, onUnmounted, type Ref } from "vue";
import { throttleAndDebounce } from "../support/utils";

export type GridSetting = Record<string, Array<[number, number]>>;

export type GridSize = "xmini" | "mini" | "small" | "medium" | "big"

export interface UseSponsorsGridOptions {
  el: Ref<HTMLElement | null>
  size?: GridSize
}

/**
 * Defines grid configuration for each sponsor size in tuple.
 *
 * [Screen width, Column size]
 *
 * It sets grid size on matching screen size. For example, `[768, 5]` will
 * set 5 columns when screen size is bigger or equal to 768px.
 *
 * Column will set only when item size is bigger than the column size. For
 * example, even we define 5 columns, if we only have 1 sponsor yet, we would
 * like to show it in 1 column to make it stand out.
 */
const GridSettings: GridSetting = {
    big: [
        [832, 3],
        [640, 2]
    ],
    medium: [
        [960, 5],
        [832, 4],
        [640, 3],
        [480, 2]
    ],
    mini: [],
    small: [
        [920, 6],
        [768, 5],
        [640, 4],
        [480, 3],
        [0, 2]
    ],
    xmini: [[0, 2]]
};

export function useSponsorsGrid({
    el,
    size = "medium"
}: UseSponsorsGridOptions) {
    const onResize = throttleAndDebounce(manage, 100);

    onMounted(() => {
        manage();
        window.addEventListener("resize", onResize);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", onResize);
    });

    function manage() {
        adjustSlots(el.value!, size);
    }
}

function adjustSlots(el: HTMLElement, size: GridSize) {
    const tsize = el.children.length;
    const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;

    const grid = setGrid(el, size, asize);

    manageSlots(el, grid, tsize, asize);
}

function setGrid(el: HTMLElement, size: GridSize, items: number) {
    const settings = GridSettings[size];
    const screen = window.innerWidth;

    let grid = 1;

    settings.some(([breakpoint, value]) => {
        if (screen >= breakpoint) {
            grid = items < value ? items : value;
            return true;
        }
    });

    setGridData(el, grid);

    return grid;
}

function setGridData(el: HTMLElement, value: number) {
    el.dataset.vpGrid = String(value);
}

function manageSlots(
    el: HTMLElement,
    grid: number,
    tsize: number,
    asize: number
) {
    const diff = tsize - asize;
    const rem = asize % grid;
    const drem = rem === 0 ? rem : grid - rem;

    neutralizeSlots(el, drem - diff);
}

function neutralizeSlots(el: HTMLElement, count: number) {
    if (count === 0) {
        return;
    }

    count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}

function addSlots(el: HTMLElement, count: number) {
    for (let i = 0; i < count; i++) {
        const slot = document.createElement("div");

        slot.classList.add("vp-sponsor-grid-item", "empty");

        el.append(slot);
    }
}

function removeSlots(el: HTMLElement, count: number) {
    for (let i = 0; i < count; i++) {
        el.removeChild(el.lastElementChild!);
    }
}
