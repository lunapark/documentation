import { defineConfig } from 'vitepress';

export default defineConfig({
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
      }
    ],
  ],
  title: "Luna Park",
  description: "Luna Park Documentation",
  themeConfig: {
    appearance: 'dark',
    appearanceSwitch: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Getting Started', link: '/guide/introduction' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Layout editor', link: '/guide/layout-editor' },
          { text: 'Visual scripting', link: '/guide/visual-scripting' },
          { text: 'Exporter', link: '/guide/exporter' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
});
