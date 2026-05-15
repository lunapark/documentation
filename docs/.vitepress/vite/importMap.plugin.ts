import path from "path";
import type { Plugin } from "vite";
import type { HeadConfig } from "vitepress";

type TImportMapPluginOptions = {
    imports: Record<string, string>;
};

type TImportMapPlugin = Plugin & {
    createImportMap: () => Record<string, string>;
};

const localImportPrefixes = ["./", "../", "/"];

export function importMapPlugin({
    imports = {}
}: TImportMapPluginOptions): TImportMapPlugin {
    const chunkReferenceMap = new Map<string, string>();
    let base = "/";
    let root = process.cwd();

    function createImportMap() {
        return Object.fromEntries(Object.entries(imports).map(([key, value]) => [
            key,
            chunkReferenceMap.get(key) ?? value
        ]));
    }

    return {

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
                        preserveSignature: "strict",
                        type: "chunk"
                    });
                    chunkReferenceMap.set(key, fileRef);
                }
            }
        },

        configResolved(config) {
            base = config.base;
            root = config.root;
        },
        createImportMap,

        generateBundle() {
            for (const [key, value] of chunkReferenceMap) {
                chunkReferenceMap.set(key, base + this.getFileName(value));
            }
        },
        name: "vite-import-map"
    };
}
