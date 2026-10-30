import path from "path";
import sharp from "sharp";
import type { Plugin } from "vite";

export function webpImages(): Plugin {
    return {
        apply: "build",
        enforce: "pre",
        async load(id) {
            if (!id.endsWith(".png")) {
                return;
            }

            const source = await sharp(id).webp({ effort: 6, quality: 90 }).toBuffer();
            const reference = this.emitFile({ name: `${ path.basename(id, ".png") }.webp`, source, type: "asset" });
            return `export default import.meta.ROLLUP_FILE_URL_${ reference };`;
        },
        name: "luna-park:webp-images"
    };
}
