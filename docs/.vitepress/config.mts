import { defineConfig } from "vitepress";

export default defineConfig({
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
                href: "/favicon.png",
                rel: "icon",
                type: "image/png"
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
                    {
                        link: "/fr/",
                        text: "Accueil"
                    },
                    {
                        link: "/fr/guide/getting-started/introduction",
                        text: "Commencer"
                    }
                ],
                sidebar: [
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/fr/guide/getting-started/introduction",
                                text: "Introduction"
                            },
                            {
                                link: "/fr/guide/getting-started/comparison",
                                text: "Comparaison aux autres outils"
                            },
                            {
                                link: "/fr/guide/getting-started/target-users",
                                text: "Utilisateurs cible"
                            },
                            {
                                link: "/fr/guide/getting-started/quick-start",
                                text: "Démarrage Rapide"
                            },
                            {
                                link: "/fr/guide/getting-started/find-help",
                                text: "Obtenir de l'aide"
                            }
                        ],
                        text: "Pour Commencer"
                    },
                    {
                        collapsed: true,
                        items: [
                            {
                                collapsed: true,
                                items: [
                                    {
                                        link: "/fr/guide/fundamentals/interface/editor",
                                        text: "Éditeur"
                                    },
                                    {
                                        link: "/fr/guide/fundamentals/interface/components",
                                        text: "Composants"
                                    },
                                    {
                                        link: "/fr/guide/fundamentals/interface/templates",
                                        text: "Conditions et boucles"
                                    },
                                    {
                                        collapsed: true,
                                        items: [
                                            {
                                                link: "/fr/guide/fundamentals/interface/styling/palette",
                                                text: "Palette et couleurs globales"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/interface/styling/tokens",
                                                text: "Tokens et variables de style"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/interface/styling/typography",
                                                text: "Typographie"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/interface/styling/alignment",
                                                text: "Disposition et alignement"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/interface/styling/visual-effects",
                                                text: "Effets visuels"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/interface/styling/advanced-style",
                                                text: "Style avancé (Classes CSS & Tailwind)"
                                            }
                                        ],
                                        text: "Style"
                                    }
                                ],
                                text: "Interface"
                            },
                            {
                                collapsed: true,
                                items: [
                                    {
                                        collapsed: true,
                                        items: [
                                            {
                                                link: "/fr/guide/fundamentals/logic/visual-scripting/introduction",
                                                text: "Introduction"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/logic/visual-scripting/graph",
                                                text: "Le Graphe"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/logic/visual-scripting/flow-control",
                                                text: "Contrôle de Flux"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/logic/visual-scripting/variables",
                                                text: "Variables"
                                            }
                                        ],
                                        text: "Script Visuel"
                                    },
                                    {
                                        link: "/fr/guide/fundamentals/logic/store",
                                        text: "Store"
                                    },
                                    {
                                        link: "/fr/guide/fundamentals/logic/variables",
                                        text: "Variables"
                                    }
                                ],
                                text: "Logique"
                            },
                            {
                                collapsed: true,
                                items: [
                                    {
                                        link: "/fr/guide/fundamentals/data/database",
                                        text: "BDD"
                                    },
                                    {
                                        link: "/fr/guide/fundamentals/data/routes",
                                        text: "Routes"
                                    },
                                    {
                                        link: "/fr/guide/fundamentals/data/auth",
                                        text: "Auth"
                                    }
                                ],
                                text: "Gestion des données"
                            }
                        ],
                        text: "Principes Fondamentaux"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/guide/integrations/npm", text: "NPM" }
                        ],
                        text: "Intégrations"
                    },
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/fr/guide/deployment/compilation",
                                text: "Compilation"
                            },
                            {
                                link: "/fr/guide/deployment/prerequisites",
                                text: "Prérequis"
                            },
                            {
                                link: "/fr/guide/deployment/deployment",
                                text: "Déploiement"
                            }
                        ],
                        text: "Déploiement & Exportation"
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
                    {
                        link: "/en/",
                        text: "Home"
                    },
                    {
                        link: "/en/guide/getting-started/introduction",
                        text: "Get Started"
                    }
                ],
                sidebar: [
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/en/guide/getting-started/introduction",
                                text: "Introduction"
                            },
                            {
                                link: "/en/guide/getting-started/comparison",
                                text: "Comparison"
                            },
                            {
                                link: "/en/guide/getting-started/target-users",
                                text: "Target Users"
                            },
                            {
                                link: "/en/guide/getting-started/quick-start",
                                text: "Quick Start"
                            },
                            {
                                link: "/en/guide/getting-started/find-help",
                                text: "Get Help"
                            }
                        ],
                        text: "Getting Started"
                    },
                    {
                        collapsed: true,
                        items: [
                            {
                                collapsed: true,
                                items: [
                                    {
                                        link: "/en/guide/fundamentals/interface/editor",
                                        text: "Editor"
                                    },
                                    {
                                        link: "/en/guide/fundamentals/interface/components",
                                        text: "Components"
                                    },
                                    {
                                        link: "/en/guide/fundamentals/interface/templates",
                                        text: "Conditions and Loops"
                                    },
                                    {
                                        collapsed: true,
                                        items: [
                                            {
                                                link: "/en/guide/fundamentals/interface/styling/palette",
                                                text: "Palette"
                                            },
                                            {
                                                link: "/en/guide/fundamentals/interface/styling/tokens",
                                                text: "Tokens"
                                            },
                                            {
                                                link: "/en/guide/fundamentals/interface/styling/typography",
                                                text: "Typography"
                                            },
                                            {
                                                link: "/en/guide/fundamentals/interface/styling/alignment",
                                                text: "Alignment"
                                            },
                                            {
                                                link: "/en/guide/fundamentals/interface/styling/visual-effects",
                                                text: "Visual Effects"
                                            },
                                            {
                                                link: "/en/guide/fundamentals/interface/styling/advanced-style",
                                                text: "Advanced Styling"
                                            }
                                        ],
                                        text: "Styling"
                                    }
                                ],
                                text: "Interface"
                            },
                            {
                                collapsed: true,
                                items: [
                                    {
                                        collapsed: true,
                                        items: [
                                            {
                                                link: "/en/guide/fundamentals/logic/visual-scripting/introduction",
                                                text: "Introduction"
                                            },
                                            {
                                                link: "/en/guide/fundamentals/logic/visual-scripting/graph",
                                                text: "The Graph"
                                            },
                                            {
                                                link: "/en/guide/fundamentals/logic/visual-scripting/flow-control",
                                                text: "Flow Control"
                                            },
                                            {
                                                link: "/en/guide/fundamentals/logic/visual-scripting/variables",
                                                text: "Variables"
                                            }
                                        ],
                                        text: "Visual Scripting"
                                    },
                                    {
                                        link: "/en/guide/fundamentals/logic/store",
                                        text: "Store"
                                    },
                                    {
                                        link: "/en/guide/fundamentals/logic/variables",
                                        text: "Variables"
                                    }
                                ],
                                text: "Logic"
                            },
                            {
                                collapsed: true,
                                items: [
                                    {
                                        link: "/en/guide/fundamentals/data/database",
                                        text: "Database"
                                    },
                                    {
                                        link: "/en/guide/fundamentals/data/routes",
                                        text: "Routes"
                                    },
                                    {
                                        link: "/en/guide/fundamentals/data/auth",
                                        text: "Auth"
                                    }
                                ],
                                text: "Data Management"
                            }
                        ],
                        text: "Fundamentals"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/en/guide/integrations/npm", text: "NPM" }
                        ],
                        text: "Integrations"
                    },
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/en/guide/deployment/compilation",
                                text: "Compilation"
                            },
                            {
                                link: "/en/guide/deployment/prerequisites",
                                text: "Prerequisites"
                            },
                            {
                                link: "/en/guide/deployment/deployment",
                                text: "Deployment"
                            }
                        ],
                        text: "Deployment & Export"
                    }
                ]
            }
        }
    },
    themeConfig: {
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/lunapark/lunapark"
            }
        ]
    },
    title: "Luna Park"
});
