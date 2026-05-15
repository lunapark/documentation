import type { Plugin } from "vite";
import path from "path";

type TImportMapPluginOptions = {
    imports: Record<string, string>;
};

const localImportPrefixes = ["./", "../", "/"];

export function importMapPlugin({
    imports = {}
}: TImportMapPluginOptions): Plugin {
    const chunkReferenceMap = new Map<string, string>();
    let base = "/";
    let root = process.cwd();

    return {
        name: "vite-import-map",

        async buildStart() {
            if (this.meta.watchMode) {
                return;
            }

            for (const [key, value] of Object.entries(imports)) {
                if (localImportPrefixes.some((prefix) => value.startsWith(prefix))) {
                    const localImportPath = value.startsWith("/") ? `.${ value }` : value;
                    const resolvedImport = await this.resolve(path.resolve(root, localImportPath));

                    if (!resolvedImport) {
                        this.error(`Could not resolve import map entry "${ value }".`);
                    }

                    const fileRef = this.emitFile({
                        id: resolvedImport.id,
                        type: "chunk",
                        preserveSignature: "strict"
                    });
                    chunkReferenceMap.set(key, fileRef);
                }
            }
        },

        configResolved(config) {
            base = config.base;
            root = config.root;
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
