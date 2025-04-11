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
        ],
        [
            "link",
            {
                type: "image/png",
                href: "/favicon.png",
                rel: "icon"
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
                    { link: "/fr/guide/getting-started/introduction", text: "Commencer" }
                ],
                sidebar: [
                    {
                        items: [
                            { link: "/fr/guide/getting-started/introduction", text: "Introduction" },
                            { link: "/fr/guide/getting-started/comparison", text: "Différences" },
                            { link: "/fr/guide/getting-started/quick-start", text: "Démarrage rapide" },
                            { link: "/fr/guide/getting-started/find-help", text: "Trouver de l'aide" }
                        ],
                        text: "Prise en main"
                    },
                    {
                        items: [
                            { link: "/fr/guide/layout/editor", text: "Éditeur" },
                            { link: "/fr/guide/layout/components", text: "Composants" },
                            { link: "/fr/guide/layout/templates", text: "Templates" },
                            { link: "/fr/guide/layout/styling", text: "Stylisation" },
                            { link: "/fr/guide/layout/exporter", text: "Exportation" }
                        ],
                        text: "Layout"
                    },
                    {
                        items: [
                            { link: "/fr/guide/visual-scripting/introduction", text: "Introduction" },
                            { link: "/fr/guide/visual-scripting/graph-basis", text: "Le graphe" },
                            { link: "/fr/guide/visual-scripting/variables", text: "Variables" },
                            { link: "/fr/guide/visual-scripting/flow-control", text: "Contrôle de flux" }
                        ],
                        text: "Visual scripting"
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
                "nav": [
                    { "link": "/en/", "text": "Home" },
                    { "link": "/en/guide/getting-started/introduction", "text": "Get Started" }
                ],
                "sidebar": [
                    {
                        "items": [
                            { "link": "/en/guide/getting-started/introduction", "text": "Introduction" },
                            { "link": "/en/guide/getting-started/comparison", "text": "Differences" },
                            { "link": "/en/guide/getting-started/quick-start", "text": "Quick Start" },
                            { "link": "/en/guide/getting-started/find-help", "text": "Get Help" }
                        ],
                        "text": "Getting Started"
                    },
                    {
                        "items": [
                            { "link": "/en/guide/layout/editor", "text": "Editor" },
                            { "link": "/en/guide/layout/components", "text": "Components" },
                            { "link": "/en/guide/layout/templates", "text": "Templates" },
                            { "link": "/en/guide/layout/styling", "text": "Styling" },
                            { "link": "/en/guide/layout/exporter", "text": "Export" }
                        ],
                        "text": "Layout"
                    },
                    {
                        "items": [
                            { "link": "/en/guide/visual-scripting/introduction", "text": "Introduction" },
                            { "link": "/en/guide/visual-scripting/graph-basis", "text": "The Graph" },
                            { "link": "/en/guide/visual-scripting/variables", "text": "Variables" },
                            { "link": "/en/guide/visual-scripting/flow-control", "text": "Flow Control" }
                        ],
                        "text": "Visual Scripting"
                    },
                    {
                        "items": [
                            { "link": "/en/configuration/prerequisites", "text": "Prerequisites" }
                        ],
                        "text": "Configuration"
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
