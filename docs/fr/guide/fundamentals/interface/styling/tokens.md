<script setup lang="ts">
import Screen1 from '/assets/images/layout/styling/screen1.png';
import Screen2 from '/assets/images/layout/styling/screen2.png';
import Screen3 from '/assets/images/layout/styling/screen3.png';
import {faLink, faBolt} from "@fortawesome/pro-solid-svg-icons";
</script>

# Tokens et variables de style

Les **tokens** sont des valeurs réutilisables qui définissent les fondations visuelles de votre application (couleurs, tailles, espacements, polices, etc.).
Ils garantissent **la cohérence des styles** et permettent de modifier l'apparence globale sans avoir à éditer chaque composant individuellement.

Par exemple, si vous modifiez le token `primary-color`, toutes les zones qui l'utilisent seront mises à jour instantanément.

<DImage
:src="Screen1"
alt="Capture d'écran de l'éditeur Luna Park"
/>


### Utiliser un token de design

1. Passez la souris sur la valeur que vous souhaitez modifier.
2. Cliquez sur l'icône **<LIcon :icon="faLink" />**  pour activer le mode de sélection de token.
3. Sélectionnez le token de design que vous souhaitez utiliser.

<DImage
src="/assets/images/layout/styling/gif1.gif"
alt="Exemple d'utilisation de token"
/>

_Note: Les tokens remplacent les valeurs en dur et servent de base à la personnalisation globale du style._

## Variables de style

Les **variables de style** permettent de rendre vos composants dynamiques : une couleur, une taille ou une propriété peut changer en fonction de l'état ou des données de votre application.

Contrairement aux tokens, qui sont statiques et globaux, les variables sont **contextuelles et réactives**. Elles servent à adapter visuellement les composants selon la logique de votre application (ex. : si `loggedIn = true`, alors `couleur = success-color`).

### Utiliser une variable de style

1. Passez la souris sur la valeur que vous souhaitez lier à une variable.
2. Cliquez sur l'icône **<LIcon :icon="faBolt" />**  pour passer en mode de sélection de variable.
3. Sélectionnez la variable que vous souhaitez utiliser.

<DImage
src="/assets/images/layout/styling/gif2.gif"
alt="Exemple d'utilisation de token"
/>


_Note : Seules les variables compatibles avec le type de propriété apparaîtront dans la liste. Par exemple, une variable numérique ne sera disponible que pour une propriété de type nombre._
