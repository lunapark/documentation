<script setup lang="ts">
import Screen6 from "/assets/images/fundamentals/styling/screen6.png";
import Screen7 from "/assets/images/fundamentals/styling/screen7.png";
import Screen8 from "/assets/images/fundamentals/styling/screen8.png";
import Gif1 from "/assets/images/fundamentals/styling/gif1.gif";
import Gif2 from "/assets/images/fundamentals/styling/gif2.gif";
</script>

# Effets visuels

Les effets visuels permettent d’ajouter de la profondeur et du relief à votre interface.
Ils influencent la perception des éléments sans modifier leur structure.

## Coins arrondis (`Radius`)

| Propriété | Description |
|------------|--------------|
| **Border Radius** | Définit le rayon de courbure des coins. Peut être appliqué uniformément ou individuellement (haut-gauche, haut-droit, etc.). |

<DImage
:src="Screen6"
alt="Exemple de coins arrondis sur différents éléments"
/>


---

## Bordures (`Border`)

| Propriété | Description |
|------------|--------------|
| **Width** | Épaisseur de la bordure. |
| **Color** | Couleur de la bordure. |
| **Style** | Type de bordure (solid, dashed, dotted). |

<DImage
:src="Screen7"
alt="Exemples de styles de bordures"
/>

---
## Opacité (`Opacity`)

| Propriété | Description                                                                                       |
|------------|---------------------------------------------------------------------------------------------------|
| **Opacity** | Définit la transparence de l'élément (de 0 à 100%). |

<DImage
:src="Screen8"
alt="Exemples de niveaux d'opacité"
/>

---

## Transformations (`Transform`)

Les transformations permettent de modifier la position, la taille et l’orientation d’un élément sans affecter son flux dans la page.  
Elles sont souvent utilisées pour créer des animations ou des effets visuels dynamiques.

| Propriété | Description                                                                    |
|------------|--------------------------------------------------------------------------------|
| **Translate** | Déplace un élément sur l’axe X, Y ou Z. Exemple : `translateX(50px)`.          |
| **Rotate** | Fait pivoter un élément autour de son centre. Exemple : `rotate(45deg)`.       |
| **Scale** | Agrandit ou réduit un élément. Exemple : `scale(110%)`.                        |

---

## Effets de survol (`Hover`)

Luna Park permet d'ajouter des styles spécifiques lorsqu'un élément est survolé.  
Pour activer le mode *hover*, cliquez sur l'icône en forme de **main** dans la barre des propriétés.  
Un nouvel état de style apparaît alors, vous permettant de modifier librement les propriétés (couleur, ombre, opacité, etc.) appliquées uniquement au survol.

<DImage
:src="Gif2"
alt="Activation du style hover dans l'éditeur Luna Park"
/>

---


## Transitions (`Transition`)

| Propriété | Description |
|------------|--------------|
| **Duration** | Définit la durée de l'animation (en ms). |
| **Timing Function** | Courbe de vitesse de transition (ease, linear, etc.). |
| **Delay** | Définit le délai avant le démarrage de l'effet. |

<DImage
:src="Gif1"
alt="Exemple de transition appliquée sur un bouton"
/>

## Pour aller plus loin

- [Liste complète des propriétés CSS – MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Properties)