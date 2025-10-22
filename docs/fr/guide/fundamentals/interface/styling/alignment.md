# Disposition et Alignement

La disposition contrôle la manière dont les éléments sont organisés dans l’espace.  
Luna Park reprend les principes du **CSS layout**, mais dans une interface visuelle.

---

## Conteneur et enfants

Chaque élément agit comme un **bloc conteneur** (parent) pouvant organiser ses **enfants**.  
Les propriétés de disposition s’appliquent donc au **parent**, tandis que l’alignement influence la position des enfants à l’intérieur.

<DImage
src="/assets/images/fundamentals/styling/screen2.png"
alt="Capture d'écran d'un conteneur avec plusieurs enfants"
/>

---

## Type de disposition

Vous pouvez définir le mode de disposition principal de l’élément :

| Mode | Description |
|------|--------------|
| **Block** | Les éléments se placent les uns sous les autres. |
| **Inline** | Les éléments s’affichent à la suite sur une ligne. |
| **Flex** | Organisation flexible des enfants (direction, wrap, alignement). |
| **Grid** | Organisation en grille avec colonnes et lignes définies. |

> Les modes *Flex* et *Grid* sont recommandés pour structurer les interfaces complexes.

<DImage
src="/assets/images/fundamentals/styling/screen3.png"
alt="Sélection du mode Flex dans le panneau de style"
/>

---

## Alignement (en mode Flex ou Grid)

Une fois un conteneur en mode Flex ou Grid, plusieurs propriétés contrôlent la position des enfants :

| Propriété | Description |
|------------|--------------|
| **Direction** | Définit le sens d’affichage : `row`, `column`, `row-reverse`, `column-reverse`. |
| **Justify Content** | Aligne les enfants sur l’axe principal (défini par `Direction`). |
| **Align Items** | Aligne les enfants sur l’axe secondaire. |
| **Gap** | Espace entre les enfants (horizontal et/ou vertical). |
| **Wrap** | Indique si les éléments doivent revenir à la ligne quand l’espace est insuffisant. |

<DImage
src="/assets/images/fundamentals/styling/screen4.png"
alt="Conteneur en flex avec direction, justify et align"
/>

---

## Positionnement absolu

Pour les cas nécessitant un placement libre (overlays, badges, tooltips), vous pouvez activer le **positionnement absolu**.

| Propriété | Description |
|------------|--------------|
| **Position** | Passe l’élément en `absolute` ou `relative`. |
| **Top / Right / Bottom / Left** | Définit la position exacte dans le parent. |
| **Z-index** | Gère la superposition entre éléments. |

<DImage
src="/assets/images/fundamentals/styling/screen5.png"
alt="Exemple de positionnement absolu dans Luna Park"
/>

---

## Bonnes pratiques

- Utilisez **Flex** pour les layouts simples (barres, colonnes, listes).
- Utilisez **Grid** pour les structures complexes (tableaux, dashboards).
- Évitez le positionnement absolu sauf cas d’UI spécifique.
- Préférez les **gaps** aux marges manuelles pour un rendu responsive cohérent.  

## Pour aller plus loin

Luna Park repose sur les mêmes principes que le CSS. Si vous souhaitez approfondir la logique derrière ces propriétés :

- [Guide Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Guide Grid - MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout)
- [Positionnement CSS - MDN](https://developer.mozilla.org/fr/docs/Web/CSS/position)
