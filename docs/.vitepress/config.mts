import path from "path";
import { searchForWorkspaceRoot } from "vite";
import { defineConfig, type HeadConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

const hostname = "https://luna-park.app/docs";
const ogLocales = { en: "en_US", fr: "fr_FR" };

export default defineConfig({
    appearance: "force-dark",
    base: "/docs/",
    cleanUrls: true,
    description: "Luna Park documentation: build fast, scalable web applications with visual scripting.",
    head: [
        ["link", { href: "https://fonts.googleapis.com", rel: "preconnect" }],
        ["link", { crossorigin: "", href: "https://fonts.gstatic.com", rel: "preconnect" }],
        ["link", { href: "/docs/favicon.png", rel: "icon", type: "image/png" }],
        ["meta", { content: "#0b1a3a", name: "theme-color" }],
        ["meta", { content: "website", property: "og:type" }],
        ["meta", { content: "Luna Park Documentation", property: "og:site_name" }],
        ["meta", { content: `${ hostname }/og-image.jpg`, property: "og:image" }],
        ["meta", { content: "1200", property: "og:image:width" }],
        ["meta", { content: "630", property: "og:image:height" }],
        ["meta", { content: "summary_large_image", name: "twitter:card" }],
        ["meta", { content: `${ hostname }/og-image.jpg`, name: "twitter:image" }]
    ],
    lastUpdated: true,
    locales: {
        fr: {
            description: "Documentation Luna Park : créez des applications web rapides et évolutives avec le scripting visuel.",
            label: "Français",
            lang: "fr",
            link: "/fr/",
            themeConfig: {
                docFooter: {
                    next: "Page suivante",
                    prev: "Page précédente"
                },
                lastUpdated: {
                    text: "Mis à jour le"
                },
                outline: {
                    label: "Sur cette page"
                },
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
                                link: "/fr/guide/getting-started/desktop-app",
                                text: "Application Desktop"
                            },
                            {
                                link: "/fr/guide/getting-started/sidekick-settings",
                                text: "Sidekick"
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
                                link: "/fr/guide/fundamentals/project-files",
                                text: "Fichiers du projet"
                            },
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
                                        link: "/fr/guide/fundamentals/interface/styling",
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
                                                link: "/fr/guide/fundamentals/logic/visual-scripting/libraries",
                                                text: "Bibliothèques de nœuds"
                                            },
                                            {
                                                link: "/fr/guide/fundamentals/logic/visual-scripting/temporal-api",
                                                text: "Temporal API"
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
                                    },
                                    {
                                        link: "/fr/guide/fundamentals/logic/scripts",
                                        text: "Scripts et fonctions"
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
                                        link: "/fr/guide/fundamentals/data/cron",
                                        text: "Cron"
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
                            { link: "/fr/guide/integrations/npm", text: "NPM" },
                            { link: "/fr/guide/integrations/plugins", text: "Plugins" },
                            {
                                link: "/fr/guide/integrations/ai-agents",
                                text: "Agents IA (MCP)"
                            }
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
                                link: "/fr/guide/deployment/native-apps",
                                text: "Applications natives"
                            },
                            {
                                link: "/fr/guide/deployment/prerequisites",
                                text: "Prérequis"
                            },
                            {
                                link: "/fr/guide/deployment/deployment",
                                text: "Auto-hébergement"
                            }
                        ],
                        text: "Déploiement & Exportation"
                    },
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/fr/guide/plugins/introduction",
                                text: "Introduction"
                            },
                            {
                                link: "/fr/guide/plugins/setup",
                                text: "Configuration de l'environnement"
                            },
                            {
                                link: "/fr/guide/plugins/basics",
                                text: "Bases"
                            },
                            {
                                link: "/fr/guide/plugins/typing",
                                text: "Typage"
                            },
                            {
                                link: "/fr/guide/plugins/components",
                                text: "Composants personnalisés"
                            },
                            {
                                link: "/fr/guide/plugins/nodes",
                                text: "Nœuds personnalisés"
                            },
                            {
                                link: "/fr/guide/plugins/tokens",
                                text: "Tokens"
                            },
                            {
                                link: "/fr/guide/plugins/backend",
                                text: "Backend et build"
                            },
                            {
                                link: "/fr/guide/plugins/deployment",
                                text: "Déploiement"
                            }
                        ],
                        text: "Développer un plugin"
                    }
                ]
            }
        },
        root: {
            description: "Luna Park documentation: build fast, scalable web applications with visual scripting.",
            label: "English",
            lang: "en",
            link: "/",
            themeConfig: {
                nav: [
                    {
                        link: "/",
                        text: "Home"
                    },
                    {
                        link: "/guide/getting-started/introduction",
                        text: "Get Started"
                    }
                ],
                sidebar: [
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/guide/getting-started/introduction",
                                text: "Introduction"
                            },
                            {
                                link: "/guide/getting-started/comparison",
                                text: "Comparison"
                            },
                            {
                                link: "/guide/getting-started/target-users",
                                text: "Target Users"
                            },
                            {
                                link: "/guide/getting-started/quick-start",
                                text: "Quick Start"
                            },
                            {
                                link: "/guide/getting-started/desktop-app",
                                text: "Desktop App"
                            },
                            {
                                link: "/guide/getting-started/sidekick-settings",
                                text: "Sidekick"
                            },
                            {
                                link: "/guide/getting-started/find-help",
                                text: "Get Help"
                            }
                        ],
                        text: "Getting Started"
                    },
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/guide/fundamentals/project-files",
                                text: "Project Files"
                            },
                            {
                                collapsed: true,
                                items: [
                                    {
                                        link: "/guide/fundamentals/interface/editor",
                                        text: "Editor"
                                    },
                                    {
                                        link: "/guide/fundamentals/interface/components",
                                        text: "Components"
                                    },
                                    {
                                        link: "/guide/fundamentals/interface/templates",
                                        text: "Conditions and Loops"
                                    },
                                    {
                                        collapsed: true,
                                        link: "/guide/fundamentals/interface/styling",
                                        items: [
                                            {
                                                link: "/guide/fundamentals/interface/styling/palette",
                                                text: "Palette"
                                            },
                                            {
                                                link: "/guide/fundamentals/interface/styling/tokens",
                                                text: "Tokens"
                                            },
                                            {
                                                link: "/guide/fundamentals/interface/styling/typography",
                                                text: "Typography"
                                            },
                                            {
                                                link: "/guide/fundamentals/interface/styling/alignment",
                                                text: "Alignment"
                                            },
                                            {
                                                link: "/guide/fundamentals/interface/styling/visual-effects",
                                                text: "Visual Effects"
                                            },
                                            {
                                                link: "/guide/fundamentals/interface/styling/advanced-style",
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
                                                link: "/guide/fundamentals/logic/visual-scripting/introduction",
                                                text: "Introduction"
                                            },
                                            {
                                                link: "/guide/fundamentals/logic/visual-scripting/graph",
                                                text: "The Graph"
                                            },
                                            {
                                                link: "/guide/fundamentals/logic/visual-scripting/flow-control",
                                                text: "Flow Control"
                                            },
                                            {
                                                link: "/guide/fundamentals/logic/visual-scripting/libraries",
                                                text: "Node Libraries"
                                            },
                                            {
                                                link: "/guide/fundamentals/logic/visual-scripting/temporal-api",
                                                text: "Temporal API"
                                            }
                                        ],
                                        text: "Visual Scripting"
                                    },
                                    {
                                        link: "/guide/fundamentals/logic/store",
                                        text: "Store"
                                    },
                                    {
                                        link: "/guide/fundamentals/logic/variables",
                                        text: "Variables"
                                    },
                                    {
                                        link: "/guide/fundamentals/logic/scripts",
                                        text: "Scripts and Functions"
                                    }
                                ],
                                text: "Logic"
                            },
                            {
                                collapsed: true,
                                items: [
                                    {
                                        link: "/guide/fundamentals/data/database",
                                        text: "Database"
                                    },
                                    {
                                        link: "/guide/fundamentals/data/routes",
                                        text: "Routes"
                                    },
                                    {
                                        link: "/guide/fundamentals/data/cron",
                                        text: "Cron"
                                    },
                                    {
                                        link: "/guide/fundamentals/data/auth",
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
                            {
                                link: "/guide/integrations/npm",
                                text: "NPM"
                            },
                            {
                                link: "/guide/integrations/plugins",
                                text: "Plugins"
                            },
                            {
                                link: "/guide/integrations/ai-agents",
                                text: "AI Agents (MCP)"
                            }
                        ],
                        text: "Integrations"
                    },
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/guide/deployment/compilation",
                                text: "Compilation"
                            },
                            {
                                link: "/guide/deployment/native-apps",
                                text: "Native Apps"
                            },
                            {
                                link: "/guide/deployment/prerequisites",
                                text: "Prerequisites"
                            },
                            {
                                link: "/guide/deployment/deployment",
                                text: "Self-hosting"
                            }
                        ],
                        text: "Deployment & Export"
                    },
                    {
                        collapsed: true,
                        items: [
                            {
                                link: "/guide/plugins/introduction",
                                text: "Introduction"
                            },
                            {
                                link: "/guide/plugins/setup",
                                text: "Environment setup"
                            },
                            {
                                link: "/guide/plugins/basics",
                                text: "Basics"
                            },
                            {
                                link: "/guide/plugins/typing",
                                text: "Typing"
                            },
                            {
                                link: "/guide/plugins/components",
                                text: "Custom components"
                            },
                            {
                                link: "/guide/plugins/nodes",
                                text: "Custom nodes"
                            },
                            {
                                link: "/guide/plugins/tokens",
                                text: "Tokens"
                            },
                            {
                                link: "/guide/plugins/backend",
                                text: "Backend and Build"
                            },
                            {
                                link: "/guide/plugins/deployment",
                                text: "Deployment"
                            }
                        ],
                        text: "Develop a plugin"
                    }
                ]
            }
        }
    },
    markdown: {
        image: {
            lazyLoading: true
        }
    },
    sitemap: {
        hostname: `${ hostname }/`
    },
    themeConfig: {
        search: {
            options: {
                locales: {
                    fr: {
                        translations: {
                            button: {
                                buttonAriaLabel: "Rechercher",
                                buttonText: "Rechercher"
                            },
                            modal: {
                                backButtonTitle: "Fermer la recherche",
                                displayDetails: "Afficher la liste détaillée",
                                footer: {
                                    closeText: "fermer",
                                    navigateText: "naviguer",
                                    selectText: "sélectionner"
                                },
                                noResultsText: "Aucun résultat pour",
                                resetButtonTitle: "Réinitialiser la recherche"
                            }
                        }
                    }
                }
            },
            provider: "local"
        },
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/lunapark/lunapark"
            }
        ]
    },
    title: "Luna Park",
    transformHead({ description, pageData, title }) {
        if (pageData.isNotFound) {
            return [];
        }

        const pagePath = pageData.relativePath.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");
        const lang = pagePath.startsWith("fr/") ? "fr" : "en";
        const enPath = lang === "fr" ? pagePath.slice(3) : pagePath;
        const url = `${ hostname }/${ pagePath }`;
        const enUrl = `${ hostname }/${ enPath }`;
        const frUrl = `${ hostname }/fr/${ enPath }`;
        const isHome = enPath === "";

        const head: HeadConfig[] = [
            ["link", { href: url, rel: "canonical" }],
            ["link", { href: enUrl, hreflang: "en", rel: "alternate" }],
            ["link", { href: frUrl, hreflang: "fr", rel: "alternate" }],
            ["link", { href: enUrl, hreflang: "x-default", rel: "alternate" }],
            ["meta", { content: url, property: "og:url" }],
            ["meta", { content: title, property: "og:title" }],
            ["meta", { content: description, property: "og:description" }],
            ["meta", { content: ogLocales[lang], property: "og:locale" }],
            ["meta", { content: ogLocales[lang === "fr" ? "en" : "fr"], property: "og:locale:alternate" }]
        ];

        const jsonLd = isHome
            ? {
                "@context": "https://schema.org",
                "@type": "WebSite",
                description,
                inLanguage: lang,
                name: title,
                publisher: {
                    "@type": "Organization",
                    logo: `${ hostname }/favicon.png`,
                    name: "Luna Park",
                    url: "https://luna-park.app"
                },
                url
            }
            : {
                "@context": "https://schema.org",
                "@type": "TechArticle",
                dateModified: pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : undefined,
                description,
                headline: pageData.title,
                image: `${ hostname }/og-image.jpg`,
                inLanguage: lang,
                isPartOf: {
                    "@type": "WebSite",
                    name: "Luna Park Documentation",
                    url: lang === "fr" ? `${ hostname }/fr/` : `${ hostname }/`
                },
                publisher: {
                    "@type": "Organization",
                    name: "Luna Park",
                    url: "https://luna-park.app"
                },
                url
            };

        head.push(["script", { type: "application/ld+json" }, JSON.stringify(jsonLd)]);

        return head;
    },
    vite: {
        plugins: [llmstxt({
            ignoreFiles: ["fr/**"]
        })],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            },
            dedupe: ["vue", "pinia", "@luna-park/logicnodes"]
        },
        server: {
            fs: {
                allow: [
                    searchForWorkspaceRoot(process.cwd()),
                    `${ searchForWorkspaceRoot(process.cwd()) }/../core/packages/design`
                ]
            }
        }
    }
});
