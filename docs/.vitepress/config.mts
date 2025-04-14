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
                            { link: "/fr/guide/getting-started/quick-start", text: "Démarrage Rapide" },
                            { link: "/fr/guide/getting-started/find-help", text: "Obtenir de l'Aide" }
                        ],
                        text: "Pour Commencer"
                    },
                    {
                        items: [
                            { link: "/fr/guide/layout/editor", text: "Éditeur" },
                            { link: "/fr/guide/layout/components", text: "Composants" },
                            { link: "/fr/guide/layout/templates", text: "Modèles" },
                            { link: "/fr/guide/layout/styling", text: "Stylisation" }
                        ],
                        text: "Éditeur de Mise en Page"
                    },
                    {
                        items: [
                            { link: "/fr/guide/visual-scripting/introduction", text: "Introduction" },
                            { link: "/fr/guide/visual-scripting/graph", text: "Le Graphe" },
                            { link: "/fr/guide/visual-scripting/flow-control", text: "Contrôle de Flux" },
                            { link: "/fr/guide/visual-scripting/variables", text: "Variables" }
                        ],
                        text: "Script Visuel"
                    },
                    {
                        items: [
                            { link: "/fr/guide/export/compilation", text: "Compilation" },
                            { link: "/fr/guide/export/prerequisites", text: "Prérequis" }
                        ],
                        text: "Exportation"
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
                            { "link": "/en/guide/layout/styling", "text": "Styling" }
                        ],
                        "text": "Layout Editor"
                    },
                    {
                        "items": [
                            { "link": "/en/guide/visual-scripting/introduction", "text": "Introduction" },
                            { "link": "/en/guide/visual-scripting/graph", "text": "The Graph" },
                            { "link": "/en/guide/visual-scripting/flow-control", "text": "Flow Control" },
                            { "link": "/en/guide/visual-scripting/variables", "text": "Variables" }
                        ],
                        "text": "Visual Scripting"
                    },
                    {
                        "items": [
                            { "link": "/en/guide/export/compilation", "text": "Compilation" },
                            { "link": "/en/guide/export/prerequisites", "text": "Prerequisites" }
                        ],
                        "text": "Export"
                    }
                ]
            }
        }
    },
    themeConfig: {
        socialLinks: [
            { icon: "github", link: "https://github.com/lunapark/lunapark" }
        ]
    }
});
