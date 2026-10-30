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
                        link: "/fr/getting-started/introduction",
                        text: "Commencer"
                    }
                ],
                sidebar: [
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/getting-started/introduction", text: "Introduction" },
                            { link: "/fr/getting-started/quick-start", text: "Démarrage Rapide" },
                            { link: "/fr/getting-started/first-interaction", text: "Votre première interaction" },
                            { link: "/fr/getting-started/desktop-app", text: "Application Desktop" },
                            { link: "/fr/getting-started/find-help", text: "Obtenir de l'aide" }
                        ],
                        text: "Pour Commencer"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/why-luna-park/target-users", text: "Utilisateurs cible" },
                            { link: "https://luna-park.app/fr/compare", text: "Comparaison aux autres outils" }
                        ],
                        text: "Pourquoi Luna Park"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/workspace/editor", text: "Éditeur" },
                            { link: "/fr/workspace/project-files", text: "Fichiers du projet" },
                            { link: "/fr/workspace/sidekick", text: "Sidekick" }
                        ],
                        text: "Éditeur & Espace de travail"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/interface/builder", text: "Builder" },
                            { link: "/fr/interface/components", text: "Composants" },
                            { link: "/fr/interface/events", text: "Événements" },
                            { link: "/fr/interface/navigation", text: "Pages et navigation" },
                            { link: "/fr/interface/templates", text: "Conditions et boucles" }
                        ],
                        text: "Créer des interfaces"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/styling/overview", text: "Vue d'ensemble" },
                            { link: "/fr/styling/tokens", text: "Tokens et variables de style" },
                            { link: "/fr/styling/typography", text: "Typographie" },
                            { link: "/fr/styling/alignment", text: "Disposition et alignement" },
                            { link: "/fr/styling/visual-effects", text: "Effets visuels" },
                            { link: "/fr/styling/advanced-style", text: "Style avancé (Classes CSS & Tailwind)" }
                        ],
                        text: "Style"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/visual-scripting/introduction", text: "Introduction" },
                            { link: "/fr/visual-scripting/graph", text: "Le Graphe" },
                            { link: "/fr/visual-scripting/flow-control", text: "Contrôle de Flux" },
                            { link: "/fr/visual-scripting/debugging", text: "Débogage" },
                            { link: "/fr/visual-scripting/libraries", text: "Bibliothèques de nœuds" },
                            { link: "/fr/visual-scripting/temporal-api", text: "Temporal API" }
                        ],
                        text: "Script Visuel"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/logic/variables", text: "Variables" },
                            { link: "/fr/logic/store", text: "Store" },
                            { link: "/fr/logic/scripts", text: "Scripts et fonctions" }
                        ],
                        text: "Logique & État"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/backend-data/database", text: "BDD" },
                            { link: "/fr/backend-data/routes", text: "Routes" },
                            { link: "/fr/backend-data/cron", text: "Cron" },
                            { link: "/fr/backend-data/auth", text: "Auth" }
                        ],
                        text: "Backend & Données"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/integrations/npm", text: "NPM" },
                            { link: "/fr/integrations/plugins", text: "Plugins" },
                            { link: "/fr/integrations/ai-agents", text: "Agents IA (MCP)" }
                        ],
                        text: "Intégrations"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/deployment/compilation", text: "Compilation" },
                            { link: "/fr/deployment/web", text: "Application web" },
                            { link: "/fr/deployment/seo", text: "SEO" },
                            { link: "/fr/deployment/desktop", text: "Applications desktop" },
                            { link: "/fr/deployment/mobile", text: "Applications mobiles" },
                            { link: "/fr/deployment/prerequisites", text: "Prérequis" },
                            { link: "/fr/deployment/deployment", text: "Auto-hébergement" }
                        ],
                        text: "Déploiement & Exportation"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/fr/plugins/introduction", text: "Introduction" },
                            { link: "/fr/plugins/setup", text: "Configuration de l'environnement" },
                            { link: "/fr/plugins/basics", text: "Bases" },
                            { link: "/fr/plugins/typing", text: "Typage" },
                            { link: "/fr/plugins/components", text: "Composants personnalisés" },
                            { link: "/fr/plugins/nodes", text: "Nœuds personnalisés" },
                            { link: "/fr/plugins/tokens", text: "Tokens" },
                            { link: "/fr/plugins/backend", text: "Backend et build" },
                            { link: "/fr/plugins/deployment", text: "Déploiement" }
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
                        link: "/getting-started/introduction",
                        text: "Get Started"
                    }
                ],
                sidebar: [
                    {
                        collapsed: true,
                        items: [
                            { link: "/getting-started/introduction", text: "Introduction" },
                            { link: "/getting-started/quick-start", text: "Quick Start" },
                            { link: "/getting-started/first-interaction", text: "Your First Interaction" },
                            { link: "/getting-started/desktop-app", text: "Desktop App" },
                            { link: "/getting-started/find-help", text: "Get Help" }
                        ],
                        text: "Getting Started"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/why-luna-park/target-users", text: "Target Users" },
                            { link: "https://luna-park.app/compare", text: "Comparison" }
                        ],
                        text: "Why Luna Park"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/workspace/editor", text: "Editor" },
                            { link: "/workspace/project-files", text: "Project Files" },
                            { link: "/workspace/sidekick", text: "Sidekick" }
                        ],
                        text: "Editor & Workspace"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/interface/builder", text: "Builder" },
                            { link: "/interface/components", text: "Components" },
                            { link: "/interface/events", text: "Events" },
                            { link: "/interface/navigation", text: "Pages and Navigation" },
                            { link: "/interface/templates", text: "Conditions and Loops" }
                        ],
                        text: "Building Interfaces"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/styling/overview", text: "Overview" },
                            { link: "/styling/tokens", text: "Tokens" },
                            { link: "/styling/typography", text: "Typography" },
                            { link: "/styling/alignment", text: "Alignment" },
                            { link: "/styling/visual-effects", text: "Visual Effects" },
                            { link: "/styling/advanced-style", text: "Advanced Styling" }
                        ],
                        text: "Styling"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/visual-scripting/introduction", text: "Introduction" },
                            { link: "/visual-scripting/graph", text: "The Graph" },
                            { link: "/visual-scripting/flow-control", text: "Flow Control" },
                            { link: "/visual-scripting/debugging", text: "Debugging" },
                            { link: "/visual-scripting/libraries", text: "Node Libraries" },
                            { link: "/visual-scripting/temporal-api", text: "Temporal API" }
                        ],
                        text: "Visual Scripting"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/logic/variables", text: "Variables" },
                            { link: "/logic/store", text: "Store" },
                            { link: "/logic/scripts", text: "Scripts and Functions" }
                        ],
                        text: "Logic & State"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/backend-data/database", text: "Database" },
                            { link: "/backend-data/routes", text: "Routes" },
                            { link: "/backend-data/cron", text: "Cron" },
                            { link: "/backend-data/auth", text: "Auth" }
                        ],
                        text: "Backend & Data"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/integrations/npm", text: "NPM" },
                            { link: "/integrations/plugins", text: "Plugins" },
                            { link: "/integrations/ai-agents", text: "AI Agents (MCP)" }
                        ],
                        text: "Integrations"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/deployment/compilation", text: "Compilation" },
                            { link: "/deployment/web", text: "Web App" },
                            { link: "/deployment/seo", text: "SEO" },
                            { link: "/deployment/desktop", text: "Desktop Apps" },
                            { link: "/deployment/mobile", text: "Mobile Apps" },
                            { link: "/deployment/prerequisites", text: "Prerequisites" },
                            { link: "/deployment/deployment", text: "Self-hosting" }
                        ],
                        text: "Deployment & Export"
                    },
                    {
                        collapsed: true,
                        items: [
                            { link: "/plugins/introduction", text: "Introduction" },
                            { link: "/plugins/setup", text: "Environment setup" },
                            { link: "/plugins/basics", text: "Basics" },
                            { link: "/plugins/typing", text: "Typing" },
                            { link: "/plugins/components", text: "Custom components" },
                            { link: "/plugins/nodes", text: "Custom nodes" },
                            { link: "/plugins/tokens", text: "Tokens" },
                            { link: "/plugins/backend", text: "Backend and Build" },
                            { link: "/plugins/deployment", text: "Deployment" }
                        ],
                        text: "Develop a plugin"
                    }
                ]
            }
        }
    },
    markdown: {
        config: (md) => {
            md.renderer.rules.table_open = () => "<div class=\"table-wrapper\"><table>\n";
            md.renderer.rules.table_close = () => "</table></div>\n";
        },
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
