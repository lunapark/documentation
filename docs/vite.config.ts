import vue from "@vitejs/plugin-vue";
import * as path from "path";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import { importMapPlugin } from "./vite/importMap.plugin";


const alias = {
    "@": path.resolve(__dirname, "src")
};

export default defineConfig(({ command }) => {
    const config: UserConfig = {
        plugins: [
            importMapPlugin({
                imports: {
                    "@electric-sql/pglite": "https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js",
                    "@luna-park/design": "/vite/import-map/design",
                    "typescript": "https://esm.sh/typescript",
                    "vue": "/vite/import-map/vue",
                    "vue-router": "/vite/import-map/vue-router"
                }
            })
        ],
        resolve: {
            alias,
            dedupe: ["vue", "pinia", "@luna-park/logicnodes"]
        }
    };

    return config;
});
