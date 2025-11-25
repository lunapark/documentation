<script setup lang="ts">
import {faPalette, faTowerCell} from "@fortawesome/pro-solid-svg-icons";
import Screen9 from "/assets/images/fundamentals/styling/screen9.png";
import Screen10 from "/assets/images/fundamentals/styling/screen10.png";
</script>

# Styles avancés

Section destinée aux utilisateurs avancés qui veulent dépasser l'édition visuelle native de Luna Park.  
L'utilisation des classes CSS et de Tailwind nécessite d'injecter du code (CSS ou JS) dans l'application. Ces mécanismes offrent beaucoup de puissance, mais augmentent la responsabilité sur la maintenance, le scope et la cohérence visuelle.

---

## Classes CSS

### À quoi ça sert
- Créer des règles réutilisables (`.btn-primary`, `.card-elevated`) que vous appliquez via le champ `Classes` d'un composant.
- Surcharger des styles générés automatiquement par l'éditeur.
- Implémenter des patterns visuels non pris en charge nativement par l'UI.

### Comment faire (exemple)
- **<LIcon :icon="faPalette" />** Palette => **update tokens** =>  **<LIcon :icon="faTowerCell" />** Inject => **CSS Injection**
- Collez le code ci-dessous

::: warning Pour les utilisateurs de Firefox
Vérifiez que layout.css.at-scope.enabled est à `true` dans about:config
:::


```css
/* injection.css */
.btn-primary {
  background-color: blue;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  transition: transform 160ms ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
}
```
Vous pouvez désormais utiliser votre classe dans n'importe quel composant!

<DImage
:src="Screen9"
alt="Exemple d'utilisation de classe CSS"
/>


---

## Tailwind

### À quoi ça sert

- Utiliser la bibliothèque utilitaire Tailwind pour style déclaratif via classes (ex. `p-4`, `text-sm`, `bg-blue-500`).
- Permet aux utilisateurs techniques d'écrire rapidement des layouts cohérents sans créer manuellement chaque règle CSS.

### Comment faire (exemple)

- **<LIcon :icon="faPalette" />** Palette => **update tokens** =>  **<LIcon :icon="faTowerCell" />** Inject => **JS Injection**
- Collez le code ci-dessous

```js
import scope from 'https://esm.sh/@luna-park/tailwind-scope';
scope({ from: '.fw-body' });
```
- Cliquez sur `Trigger`

Vous pouvez désormais utiliser Tailwind dans n'importe quel composant!

<DImage
:src="Screen10"
alt="Exemple d'utilisation de classe Tailwind"
/>
