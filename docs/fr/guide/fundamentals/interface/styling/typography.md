<script setup lang="ts">
import {faLink} from "@fortawesome/pro-solid-svg-icons";
</script>

# Typographie

La typographie dans Luna Park contrôle la manière dont le texte est affiché dans votre application : taille, graisse, police, espacement, alignement...

## Balises HTML

Chaque élément de texte peut être rendu avec une balise HTML différente selon son rôle dans la page :

- `div` : bloc générique (par défaut).
- `p` : paragraphe standard.
- `span` : texte en ligne, utilisé pour styliser une partie spécifique d'un texte.

<DImage
src="/assets/images/fundamentals/styling/screen1.png"
alt="Exemple d'utilisation de sémantique"
/>


_Note: Choisissez la balise selon la sémantique du contenu, pas selon son apparence._

## Propriétés typographiques

Les propriétés de texte se trouvent dans l'onglet **Style**. Elles sont divisées en deux catégories : **Font** et **Text**.

### Font

Ces propriétés contrôlent la base typographique de vos éléments.


| Propriété | Description |
|------------|--------------|
| **Color** | Définit la couleur du texte. |
| **Family** | Choisit la police utilisée (globale ou personnalisée). |
| **Letter Spacing** | Ajuste l'espacement entre les lettres. |
| **Line Height** | Définit la hauteur de ligne. |
| **Size** | Détermine la taille du texte. |
| **Style** | Définit le style de la police (normal, italique, etc.). |
| **Weight** | Contrôle l'épaisseur du texte (light, regular, bold, etc.). |

### Text

Ces propriétés contrôlent la disposition et les effets appliqués au texte.

| Propriété | Description |
|------------|--------------|
| **Align** | Aligne le texte (gauche, centre, droite, justifié). |
| **Decoration** | Applique une décoration (underline, line-through, etc.). |
| **Overflow** | Gère le débordement du texte (clip, ellipsis, etc.). |
| **Shadow** | Ajoute une ombre portée au texte. |
| **Transform** | Transforme le texte (uppercase, capitalize, lowercase). |
| **Wrap** | Définit si le texte se casse automatiquement ou reste sur une seule ligne. |

## Bonnes pratiques

Il est recommandé de définir un système cohérent, en l'occurrence :

- Une échelle de tailles régulière, en utilisant préférablement un token avec **<LIcon :icon="faLink" />**
- Une ou deux familles de polices maximum.
- Des règles constantes de graisse et d'espacement.

