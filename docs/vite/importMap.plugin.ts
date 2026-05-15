import type { Plugin } from "vite";
import path from "path";

interface ImportMapPluginOptions {
    imports: Record<string, string>;
}

export function importMapPlugin({
    imports = {}
}: ImportMapPluginOptions): Plugin {
    const chunkReferenceMap = new Map<string, string>();
    let base = "/";

    return {
        name: "vite-import-map",

        buildStart() {
            if (this.meta.watchMode) {
                return;
            }

            for (const [key, value] of Object.entries(imports)) {
                if (["./", "../", "/"].some((prefix) => value.startsWith(prefix))) {
                    const resolvedPath = path.resolve(`./${ value }`);
                    const fileRef = this.emitFile({
                        id: resolvedPath,
                        type: "chunk",
                        preserveSignature: "strict"
                    });
                    chunkReferenceMap.set(key, fileRef);
                }
            }
        },

        configResolved(config) {
            base = config.base;
        },

        generateBundle() {
            for (const [key, value] of chunkReferenceMap) {
                chunkReferenceMap.set(key, base + this.getFileName(value));
            }
        },

        transformIndexHtml() {
            const importMap = Object.fromEntries(Object.entries(imports).map(([key, value]) => {
                if (chunkReferenceMap.has(key)) {
                    return [key, chunkReferenceMap.get(key)];
                }
                return [key, value];
            }));

            return [
                {
                    attrs: {
                        type: "importmap"
                    },
                    children: JSON.stringify({
                        imports: importMap
                    }),
                    injectTo: "head",
                    tag: "script"
                }
            ];
        }
    };
}
