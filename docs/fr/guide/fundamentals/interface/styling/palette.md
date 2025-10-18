<script setup lang="ts">
import Screen3 from '/assets/images/layout/styling/screen3.png';
import {faPalette} from "@fortawesome/pro-solid-svg-icons";
</script>

# Palette

La `palette` définit les couleurs globales de votre application. Elle contrôle toutes les teintes utilisées par les composants, les fonds et le texte.

Vous pouvez accéder à la `palette` via le bouton <LIcon :icon="faPalette" />  dans la barre supérieure de l'éditeur.
Les couleurs principales (primaire, secondaire, contenu) peuvent être modifiées à tout moment. Les nuances et dégradés associés sont **générés automatiquement** pour assurer la **cohérence visuelle** sur l'ensemble de l'application.

L'option `Match editor` permet d'appliquer les mêmes couleurs à l'interface de l'éditeur. Utile pour **réduire la fatigue visuelle** pendant la conception.
<DImage
:src="Screen3"
alt="Capture d'écran de l'éditeur Luna Park"
/>

_Note : La palette sert de base à vos tokens de couleur : toute modification globale s'y répercute automatiquement._