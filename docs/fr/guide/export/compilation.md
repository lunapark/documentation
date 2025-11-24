<script setup lang="ts">
import {faLink, faGear, faHammer, faUpRightFromSquare} from "@fortawesome/pro-solid-svg-icons";
</script>

# Exporter pour le web

Pour exporter pour le web, cliquez simplement sur l'icône <LIcon :icon="faHammer"/> (Compiler) dans la barre supérieure.

Ensuite, cliquez soit sur `Télécharger` pour obtenir le code source ou le code d'export de votre application que vous pouvez héberger n'importe où, soit sur `Déployer` pour rendre votre application accessible via un lien Luna Park (uniquement pour tester le frontend).

Pour accéder à votre application déployée sur Luna Park, cliquez simplement sur l'icône <LIcon :icon="faUpRightFromSquare" /> à côté du bouton `Déployer`.

### Code source

Le code source est le projet npm complet de votre application. Il contient notamment les fichiers sources de votre interface (Luna Park génère des fichiers `.vue` pour chaque composant de votre application).

### Code d'export

Le code d'export est le résultat de la compilation de votre application. Il contient tous les fichiers nécessaires pour exécuter votre application, mais pas les fichiers sources. Il est optimisé pour être déployé sur un serveur web.

### Paramètres

Les paramètres sont disponibles dans l'onglet `Paramètres généraux` du panneau d'inspection (icône <LIcon :icon="faGear"/> dans la barre supérieure). Vous pouvez y modifier le nom de votre application, ainsi que définir si vous souhaitez qu'elle soit une PWA (Progressive Web App). Cela signifie que votre application peut être installée directement sur les navigateurs compatibles.

<LContainer type="warning">
<h2>PWA non disponible</h2>
Le mode PWA n'est pas encore prêt.
</LContainer>

Vous pouvez également choisir le mode d'historique parmi ces types :

- **Mode Hash** (par défaut) : Génère des liens comme `monApp.com/#/accueil/dashboard`. Ce mode fonctionne dans la plupart des cas, mais n'est pas optimal pour le SEO et ne fonctionne pas avec les ancres de page.
- **Mode Web** : Génère des liens comme `monApp.com/accueil/dashboard`. Ce mode est meilleur pour le SEO mais nécessite une configuration sur votre serveur pour rediriger toutes les 404 vers le fichier `index`.
- **Mode Mémoire** : Génère des liens comme `monApp.com/` (le chemin est caché). Ce mode fonctionne dans toutes les conditions mais n'est pas optimal pour le SEO.

## Exporter une application de bureau

Pour exporter une application de bureau, cliquez simplement sur l'icône <LIcon :icon="faHammer"/> (Compiler) dans la barre supérieure. Ensuite, choisissez l'OS sur lequel vous souhaitez exporter (Windows, Linux ou Mac) dans la section `portable` ou `installateur`.

- **Portable** : Génère un exécutable unique qui peut être lancé directement. Utile pour des tests rapides, mais n'est pas recommandé pour la distribution.
- **Installateur** : Génère un installateur qui peut être distribué. Il est recommandé pour la distribution de votre application.

<LContainer type="warning">
<h2>Compilation MacOS non disponible</h2>
L'exportation pour MacOS n'est pas encore prête.
</LContainer>

### Paramètres

Les paramètres sont disponibles dans l'onglet `Paramètres bureau` du panneau d'inspection (icône <LIcon :icon="faGear"/> dans la barre supérieure).

- **Nom du package** : Utilisé pour les mises à jour, il doit rester le même. Il est actuellement généré automatiquement à partir du nom de votre application.
- **Version** : Utilisée pour les mises à jour, suivez le format semver (ex : 1.0.0).
- **Dimensions** : Taille par défaut de la fenêtre de votre application.
- **Redimensionnable** : Indique si la fenêtre peut être redimensionnée ou non.
- **Plein écran** : Indique si la fenêtre doit être en plein écran par défaut.

## Exporter pour le mobile

<br/>

<LContainer type="warning">
<h2>Exportation mobile non disponible</h2>
L'exportation pour mobile n'est pas encore prête.
</LContainer>
