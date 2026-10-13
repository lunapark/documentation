---
description: "Utilisez des tokens de style réutilisables pour garder une apparence cohérente."
---

<script setup lang="ts">
import TokensWorkspace from '/assets/images/layout/styling/tokens-workspace.png';
import FontPicker from '/assets/images/layout/styling/font-picker.png';
import Gif1 from '/assets/images/layout/styling/gif1.gif';
import Gif2 from '/assets/images/layout/styling/gif2.gif';
import {faLink, faBolt, faSwatchbook} from "@fortawesome/pro-solid-svg-icons";
</script>

# Tokens et variables de style

Les **tokens** sont des valeurs réutilisables qui définissent les fondations visuelles de votre application : couleurs, polices et longueurs (espacements, arrondis, tailles).
Ils garantissent **la cohérence des styles** et permettent de modifier l'apparence globale sans avoir à éditer chaque composant individuellement.

Par exemple, si vous modifiez le token de couleur `Brand`, toutes les zones qui l'utilisent seront mises à jour instantanément.

## Le workspace Tokens

Cliquez sur <LIcon :icon="faSwatchbook" /> **Tokens** dans le [Workspace](../editor#le-workspace) pour ouvrir les tokens de votre projet. Ils sont regroupés en trois sections : **Colors**, **Fonts** et **Lengths**. La barre d'outils permet d'aller à une section, et le champ de recherche filtre les tokens par nom ou par valeur.

<DImage
:src="TokensWorkspace" :width="1280" :height="720"
alt="Workspace Tokens avec les tokens de couleur, et le token sélectionné dans l'inspecteur"
/>

- Cliquez sur **Add color**, **Add font** ou **Add length** pour créer un token.
- Cliquez sur un token pour modifier son **Name** et sa **Value** dans l'inspecteur. Le champ **Variable** donne sa variable CSS, pour l'utiliser dans du [CSS personnalisé](./advanced-style).
- Glissez un token pour le réordonner.
- Survolez un token et cliquez sur son icône de corbeille pour le supprimer (maintenez `Ctrl` pour passer la confirmation).

### Polices

Utilisez le champ **Search fonts...** de la section **Fonts** pour ajouter une police de [Fontsource](https://fontsource.org/), filtrée par catégorie (**Sans**, **Serif**, **Mono**, **Display**, **Handwriting**). La police est chargée depuis le CDN Fontsource, dans l'éditeur et dans votre application.

<DImage
:src="FontPicker" :width="1280" :height="720"
alt="Sélecteur de police de la section Fonts, avec les catégories et les aperçus"
/>

Dans l'inspecteur, un token de police a deux options de plus :

| Option | Description |
|---|---|
| **Fontsource** | Charge la feuille de style de la police depuis le CDN Fontsource. Décochez-la pour une police déjà disponible (police système, ou chargée par [injection de code](./advanced-style)). |
| **Default** | Applique cette police à toute l'application. Une seule police peut être celle par défaut. |

### Stratégie responsive

L'option **Responsive** de la barre d'outils définit le sens des media queries appliquées dans vos styles : **Desktop** (desktop first) ou **Mobile** (mobile first).

Pour un breakpoint fixé à `1024px` :

- **Mobile first** : la règle s'applique aux écrans **≥ 1024**.
- **Desktop first** : la règle s'applique aux écrans **≤ 1024**.

## Utiliser un token de design

1. Passez la souris sur la valeur que vous souhaitez modifier.
2. Cliquez sur l'icône **<LIcon :icon="faLink" />** pour activer le mode de sélection de token.
3. Sélectionnez le token de design que vous souhaitez utiliser.

<DImage
:src="Gif1" :width="990" :height="369"
alt="Exemple d'utilisation de token"
/>

_Note : Les tokens remplacent les valeurs en dur et servent de base à la personnalisation globale du style. Les [plugins](../../../integrations/plugins) peuvent ajouter leurs propres tokens._

## Variables de style

Les **variables de style** permettent de rendre vos composants dynamiques : une couleur, une taille ou une propriété peut changer en fonction de l'état ou des données de votre application.

Contrairement aux tokens, qui sont statiques et globaux, les variables sont **contextuelles et réactives**. Elles servent à adapter visuellement les composants selon la logique de votre application (ex. : si `loggedIn = true`, alors `couleur = success-color`).

### Utiliser une variable de style

1. Passez la souris sur la valeur que vous souhaitez lier à une variable.
2. Cliquez sur l'icône **<LIcon :icon="faBolt" />** pour passer en mode de sélection de variable.
3. Sélectionnez la variable que vous souhaitez utiliser.

<DImage
:src="Gif2" :width="990" :height="504"
alt="Exemple d'utilisation de variable"
/>


_Note : Seules les variables compatibles avec le type de propriété apparaîtront dans la liste. Par exemple, une variable numérique ne sera disponible que pour une propriété de type nombre._
