import {defineConfig} from 'vitepress';

export default defineConfig({
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            themeConfig: {
                nav: [
                    {text: 'Home', link: '/en/'},
                    {text: 'Examples', link: '/en/markdown-examples'},
                    {text: 'Getting Started', link: '/en/guide/introduction'}
                ],
                sidebar: [
                    {
                        text: 'Guide',
                        items: [
                            {text: 'Introduction', link: '/en/guide/introduction'},
                            {text: 'Layout editor', link: '/en/guide/layout-editor'},
                            {text: 'Styling', link: '/en/guide/elements-styling'},
                            {text: 'Visual scripting', link: '/en/guide/visual-scripting'},
                            {text: 'Exporter', link: '/en/guide/exporter'}
                        ]
                    },
                    {
                        text: 'Configuration',
                        items: [
                            {text: 'Prerequisites', link: '/en/configuration/prerequisites'},
                        ]
                    }
                ],
            }
        },
        fr: {
            label: 'Français',
            lang: 'fr',
            link: '/fr/',
            themeConfig: {
                nav: [
                    {text: 'Accueil', link: '/fr/'},
                    {text: 'Exemples', link: '/fr/markdown-examples'},
                    {text: 'Commencer', link: '/fr/guide/introduction/what-is-luna-park'}
                ],
                sidebar: [
                    {
                        text: 'Introduction',
                        items: [
                            {text: 'Qu’est-ce que Luna Park ?', link: '/fr/guide/introduction/what-is-luna-park'},
                        ]
                    },
                    {
                        text: 'Prise en main',
                        items: [
                            {text: 'Éditeur de mise en page', link: '/fr/guide/getting-started/layout-editor'},
                            {text: 'Stylisation', link: '/fr/guide/getting-started/elements-styling'},
                            {text: 'Exportateur', link: '/fr/guide/getting-started/exporter'}
                        ]
                    },
                    {
                        text: 'Programmation visuelle',
                        items: [
                            {text: 'Introduction', link: '/fr/guide/visual-scripting/introduction'},
                            {text: 'Bases du graphe', link: '/fr/guide/visual-scripting/graph-basis'},
                            {text: 'Variables', link: '/fr/guide/visual-scripting/variables'},
                            {
                                text: 'Logique et contrôle de flux',
                                link: '/fr/guide/visual-scripting/logic-flow-control'
                            },
                            {text: 'Appels API', link: '/fr/guide/visual-scripting/api-calls'},
                        ]
                    },
                    {
                        text: 'Configuration',
                        items: [
                            {text: 'Prérequis', link: '/fr/configuration/prerequisites'},
                        ]
                    }
                ]
            }
        },
    },
    head: [
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
            }
        ]
    ],
    title: "Luna Park",
    description: "Luna Park Documentation",
    themeConfig: {
        appearance: 'dark',
        appearanceSwitch: false,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
});
