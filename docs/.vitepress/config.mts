import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Luna Park",

    appearance: "force-dark",
    description: "Luna Park Documentation",
    head: [
        [
            "link",
            {
                href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
                rel: "stylesheet"
            }
        ]
    ],
    locales: {
        fr: {
            label: "Français",
            lang: "fr",
            link: "/fr/",
            themeConfig: {
                nav: [
                    { link: "/fr/", text: "Accueil" },
                    { link: "/fr/markdown-examples", text: "Exemples" },
                    { link: "/fr/guide/introduction/what-is-luna-park", text: "Commencer" }
                ],
                sidebar: [
                    {
                        items: [
                            { link: "/fr/guide/introduction/what-is-luna-park", text: "Qu’est-ce que Luna Park ?" }
                        ],
                        text: "Introduction"
                    },
                    {
                        items: [
                            { link: "/fr/guide/getting-started/layout-editor", text: "Éditeur de mise en page" },
                            { link: "/fr/guide/getting-started/elements-styling", text: "Stylisation" },
                            { link: "/fr/guide/getting-started/exporter", text: "Exportateur" }
                        ],
                        text: "Prise en main"
                    },
                    {
                        items: [
                            { link: "/fr/guide/visual-scripting/introduction", text: "Introduction" },
                            { link: "/fr/guide/visual-scripting/graph-basis", text: "Bases du graphe" },
                            { link: "/fr/guide/visual-scripting/variables", text: "Variables" },
                            {
                                link: "/fr/guide/visual-scripting/logic-flow-control",
                                text: "Logique et contrôle de flux"
                            },
                            { link: "/fr/guide/visual-scripting/api-calls", text: "Appels API" }
                        ],
                        text: "Programmation visuelle"
                    },
                    {
                        items: [
                            { link: "/fr/configuration/prerequisites", text: "Prérequis" }
                        ],
                        text: "Configuration"
                    }
                ]
            }
        },
        root: {
            label: "English",
            lang: "en",
            link: "/en/",
            themeConfig: {
                nav: [
                    { link: "/en/", text: "Home" },
                    { link: "/en/markdown-examples", text: "Examples" },
                    { link: "/en/guide/introduction", text: "Getting Started" }
                ],
                sidebar: [
                    {
                        items: [
                            { link: "/en/guide/introduction", text: "Introduction" },
                            { link: "/en/guide/layout-editor", text: "Layout editor" },
                            { link: "/en/guide/elements-styling", text: "Styling" },
                            { link: "/en/guide/visual-scripting", text: "Visual scripting" },
                            { link: "/en/guide/exporter", text: "Exporter" }
                        ],
                        text: "Guide"
                    },
                    {
                        items: [
                            { link: "/en/configuration/prerequisites", text: "Prerequisites" }
                        ],
                        text: "Configuration"
                    }
                ]
            }
        }
    },
    themeConfig: {
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" }
        ]
    }
});
