import './styles/vars.css'
import './styles/base.css'
import './styles/icons.css'
import './styles/utils.css'
import './styles/components/custom-block.css'
import './styles/components/vp-code.css'
import './styles/components/vp-code-group.css'
import './styles/components/vp-doc.css'
import './styles/components/vp-sponsor.css'

import './custom/style.css'
import './custom/styles/index.css'

import type {Theme} from 'vitepress'
import VPBadge from './components/VPBadge.vue'
import Layout from './Layout.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import QuickAccess from "./custom/components/QuickAccess.vue";
import InfoCard from "./custom/components/InfoCard.vue";
import TypeTable from "./custom/components/TypeTable.vue";
import Warning from "./custom/components/Warning.vue";
import SystemRequirements from "./custom/components/SystemRequirements.vue";
import BrowserCompatibility from "./custom/components/BrowserCompatibility.vue";
import GenericTable from "./custom/components/GenericTable.vue";
import Anchor from "./custom/components/Anchor.vue";
import Highlight from "./custom/components/Highlight.vue";

export {default as VPBadge} from './components/VPBadge.vue'
export {default as VPButton} from './components/VPButton.vue'
export {default as VPDocAsideSponsors} from './components/VPDocAsideSponsors.vue'
export {default as VPFeatures} from './components/VPFeatures.vue'
export {default as VPHomeContent} from './components/VPHomeContent.vue'
export {default as VPHomeFeatures} from './components/VPHomeFeatures.vue'
export {default as VPHomeHero} from './components/VPHomeHero.vue'
export {default as VPHomeSponsors} from './components/VPHomeSponsors.vue'
export {default as VPImage} from './components/VPImage.vue'
export {default as VPLink} from './components/VPLink.vue'
export {default as VPNavBarSearch} from './components/VPNavBarSearch.vue'
export {default as VPSocialLink} from './components/VPSocialLink.vue'
export {default as VPSocialLinks} from './components/VPSocialLinks.vue'
export {default as VPSponsors} from './components/VPSponsors.vue'
export {default as VPTeamMembers} from './components/VPTeamMembers.vue'
export {default as VPTeamPage} from './components/VPTeamPage.vue'
export {default as VPTeamPageSection} from './components/VPTeamPageSection.vue'
export {default as VPTeamPageTitle} from './components/VPTeamPageTitle.vue'

export {useLocalNav} from './composables/local-nav'
export {useSidebar} from './composables/sidebar'

const theme: Theme = {
    Layout,
    enhanceApp: ({app}) => {
        app.component('Badge', VPBadge)

        app.component('QuickAccess', QuickAccess);
        app.component('InfoCard', InfoCard);
        app.component('TypeTable', TypeTable);
        app.component('Warning', Warning);
        app.component('Highlight', Highlight);
        app.component('SystemRequirements', SystemRequirements);
        app.component('BrowserCompatibility', BrowserCompatibility);
        app.component('GenericTable', GenericTable);
        app.component('font-awesome-icon', FontAwesomeIcon);
        app.component('Anchor', Anchor);
    }
}

export default theme
