import { computed } from "vue";
import { useData } from "./data";

export function useEditLink() {
    const { page, theme } = useData();

    return computed(() => {
        const { pattern = "", text = "Edit this page" } = theme.value.editLink || {};
        let url: string;
        if (typeof pattern === "function") {
            url = pattern(page.value);
        }
        else {
            url = pattern.replace(/:path/g, page.value.filePath);
        }

        return { text, url };
    });
}
