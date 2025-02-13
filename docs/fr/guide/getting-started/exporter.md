<script setup lang="ts">
import {faLink, faGear, faHammer} from "@fortawesome/pro-solid-svg-icons";
</script>

# Exporter pour le web

Pour exporter pour le web, cliquez simplement sur l'icône <font-awesome-icon :icon="faHammer"/> (Compiler) dans la barre supérieure.

Ensuite, cliquez soit sur <Highlight text="télécharger"/> pour obtenir le code de votre application que vous pouvez héberger n'importe où, soit sur <Highlight text="déployer"/> pour rendre votre application accessible via un lien Luna Park (cette option est uniquement pour des tests pour le moment).

Pour accéder à votre application déployée sur Luna Park, cliquez simplement sur l'icône <Highlight text="ouvrir"/> à côté du bouton <Highlight text="déployer"/>. Le lien est également disponible dans le menu Hébergement (icône <font-awesome-icon :icon="faLink"/> dans la barre supérieure).

## Paramètres

Les paramètres sont disponibles dans l'onglet <Highlight text="paramètres"/> du panneau d'inspection (icône <font-awesome-icon :icon="faGear"/> dans la barre supérieure). Vous pouvez y modifier le nom de votre application, ainsi que définir si vous souhaitez qu'elle soit une PWA (Progressive Web App). Cela signifie que votre application peut être installée directement sur des navigateurs compatibles.

<Warning title="PWA non disponible" content="Le mode PWA n'est pas encore prêt" />

Vous pouvez également choisir le mode d'historique parmi ces types :

- **Mode Hash** (par défaut) : Génère des liens comme <Highlight text="monApp.com/#accueil/dashboard"/>. Ce mode fonctionne dans la plupart des cas, mais n'est pas optimal pour le SEO et ne fonctionne pas avec les ancres de page.
- **Mode Web** : Génère des liens comme <Highlight text="monApp.com/accueil/dashboard"/>. Ce mode est meilleur pour le SEO mais nécessite une configuration sur votre serveur pour rediriger toutes les 404 vers le fichier <Highlight text="index"/>.
- **Mode Mémoire** : Génère des liens comme <Highlight text="monApp.com/"/> (le chemin est caché). Ce mode fonctionne dans toutes les conditions mais est le pire pour le SEO et l'UX.

# Exporter pour le bureau

Pour exporter pour le bureau, cliquez simplement sur l'icône <font-awesome-icon :icon="faHammer"/> (Compiler) dans la barre supérieure. Ensuite, choisissez l'OS sur lequel vous souhaitez exporter (Windows, Linux ou Mac) dans la section <Highlight text="portable"/> ou <Highlight text="installateur"/>.

- **Portable** : Génère un exécutable unique qui peut être lancé directement. Utile pour des tests rapides, mais pas recommandé pour la distribution car il peut ne pas fonctionner sur les anciens systèmes.
- **Installateur** : Génère un installateur pour installer votre application. Recommandé pour la distribution, il prend en charge les mises à jour et peut être installé n'importe où.

<Warning title="Compilation MacOS non disponible" content="L'exportation pour MacOS n'est pas encore prête." />

## Paramètres

Les paramètres sont disponibles dans l'onglet <Highlight text="paramètres"/> du panneau d'inspection (icône <font-awesome-icon :icon="faGear"/> dans la barre supérieure).

- **Nom du package** : Utilisé pour les mises à jour, il doit rester le même. Il est actuellement généré automatiquement à partir du nom de votre application.
- **Version** : Utilisée pour les mises à jour, suivez le format semver (ex : 1.0.0).
- **Dimensions** : Taille par défaut de la fenêtre de votre application.
- **Redimensionnable** : Indique si la fenêtre peut être redimensionnée ou non.
- **Plein écran** : Indique si la fenêtre doit être en plein écran par défaut.

# Exporter pour mobile

<br/>

<Warning title="Exportation mobile non disponible" content="L'exportation pour mobile n'est pas encore prête." />
