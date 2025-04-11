export {};

declare module "vue" {
    export interface GlobalComponents {
        Content: typeof import("vitepress").Content
    }
}
