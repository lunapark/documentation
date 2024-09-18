// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import QuickAccess from './components/QuickAccess.vue';
import InfoCard from './components/InfoCard.vue';
import TypeTable from './components/TypeTable.vue';
import Warning from './components/Warning.vue';
import Highlight from './components/Highlight.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './style.css';
import './styles/custom.scss';
import './styles/light_colors.scss';
import './styles/dark_colors.scss';
import './styles/length.scss';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Slots supplémentaires si nécessaires
    });
  },
  enhanceApp({ app, router, siteData }) {
    // Enregistrer les composants personnalisés
    app.component('QuickAccess', QuickAccess);
    app.component('InfoCard', InfoCard);
    app.component('TypeTable', TypeTable);
    app.component('Warning', Warning);
    app.component('Highlight', Highlight);
    app.component('font-awesome-icon', FontAwesomeIcon);
  }
} satisfies Theme;