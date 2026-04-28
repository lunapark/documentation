<script setup>
import ApplyColorToken from "/assets/images/plugins/apply-color-token.png"
</script>

# Design tokens dans les plugins

Vos `plugins` peuvent définir des **design tokens** pour exposer vos propres valeurs de couleur, de longueur, de typographie et autres primitives de style. Ces tokens apparaissent dans l'éditeur de style à côté des tokens intégrés et peuvent être utilisés pour styliser les `composants`.

## Qu'est-ce qu'un design token de plugin ?

Un **design token** est une primitive de style réutilisable : une couleur, une dimension, une typographie, ou toute autre propriété de présentation que vous souhaitez normaliser. Quand vous exposez des tokens depuis un `plugin`, les utilisateurs de votre plugin peuvent les exploiter dans leurs compositions sans devoir connaître les valeurs exactes.

Par exemple, si votre plugin fournit une palette de marque complète, vous définissez les tokens une fois dans le plugin. Les utilisateurs qui installent votre plugin voient alors ces couleurs dans l'éditeur de style et peuvent les appliquer aux `composants`.

## Types de tokens supportés

Vous pouvez définir les types de tokens suivants :

- **Color** (Couleur), une valeur de couleur en hexadécimal ou RGB<br>
  exemple: `#FF6B35` ou `rgb(255, 107, 53)`
- **Length** (Longueur), une dimension en pixels ou d'autres unités CSS<br>
  exemple: `16px`, `1rem`, `2em`
- **Font** (Typographie), un nom de famille de police disponible dans votre plugin<br>
  exemple: `Inter`, `Roboto`, `Georgia`
- **Other** (Autre), pour tout autre type de valeur réutilisable<br>
  exemple: une durée d'animation, une opacité, un rayon de bordure

## Définir des design tokens dans votre plugin

Les tokens sont définis dans la configuration ou les métadonnées de votre plugin. Consultez la documentation de votre plugin pour connaître le format spécifique d'exposition des tokens.

### Exemple de structure de tokens

Un plugin expose typiquement ses tokens via une déclaration structurée. Voici la forme générale :

```
tokens: {
  colors: {
    primary: "#FF6B35",
    secondary: "#004E89",
    background: "#F5F5F5"
  },
  lengths: {
    spacing: "16px",
    borderRadius: "4px"
  },
  fonts: {
    heading: "Inter",
    body: "System"
  }
}
```

<!-- TODO: confirm exact API shape and configuration format -->

## Utiliser les design tokens d'un plugin

Une fois que le `plugin` est installé, ses **design tokens** apparaissent dans le panneau de style de l'éditeur. Vous pouvez sélectionner et appliquer ces tokens comme toute autre valeur de style.

### Accéder aux tokens du plugin

1. Sélectionnez un élément dans votre `composant`.
2. Ouvrez le panneau d'inspection et naviguez jusqu'à la section **Styling**.
3. Pour chaque propriété de style (couleur, dimension, typographie), cliquez sur le champ de valeur.
4. Une liste déroulante affiche les tokens disponibles, groupés par plugin et par type.
5. Sélectionnez le token que vous souhaitez appliquer.

SCREEN_HERE: panneau de style affichant la liste des tokens disponibles avec groupes de plugins.

## Avantages de l'exposition de tokens

- **Cohérence** : Les utilisateurs de votre plugin appliquent les mêmes valeurs de présentation de manière uniforme.
- **Maintenance** : Si vous mettez à jour un token dans votre plugin, tous les `composants` qui l'utilisent reflètent automatiquement le changement.
- **Découverte** : Les tokens apparaissent directement dans l'éditeur, sans documentation externe.
- **Intégration** : Les tokens se mélangent avec les primitives intégrées de Luna Park pour une expérience cohésive.

## Exemple guidé : Créer et utiliser une palette de couleurs de plugin

### 1. Définir les tokens de couleur dans votre plugin

1. Dans la configuration de votre `plugin`, déclarez une section `tokens` avec un groupe `colors`.
2. Énumérez les couleurs de votre palette (e.g., `primary: "#FF6B35"`, `secondary: "#004E89"`, etc.).
3. Donnez à chaque couleur un nom descriptif qui reflète son usage ou sa position dans la palette.

SCREEN_HERE: fichier de configuration du plugin avec tokens de couleur définis.

### 2. Installer le plugin

1. Dans Luna Park, accédez à la section **Plugins** de l'éditeur.
2. Cherchez ou téléchargez votre `plugin`.
3. Cliquez sur le bouton `Installer` pour enregistrer le plugin et charger ses tokens.

SCREEN_HERE: dialogue d'installation du plugin dans Luna Park.

### 3. Utiliser les couleurs du plugin dans un composant

1. Créez un nouveau `composant` ou ouvrez-en un existant.
2. Ajoutez un élément auquel vous souhaitez appliquer une couleur (e.g., un **Bloc** de type Container ou Text).
3. Sélectionnez cet élément et ouvrez le panneau d'inspection.
4. Accédez à la section **Styling** et trouvez la propriété `background-color` ou `color` selon vos besoins.
5. Cliquez sur le champ de valeur pour ouvrir la liste des tokens disponibles.
6. Sélectionnez un token de couleur depuis le groupe de votre plugin (e.g., `primary` ou `secondary`).

<DImage 
  :src="ApplyColorToken"
  alt="Panneau de style appliquant un token de couleur d'un plugin"
/>

### 4. Appliquer plusieurs tokens à un composant

1. Répétez l'étape 3 pour d'autres propriétés (border-color, shadow, etc.).
2. Vous pouvez combiner des tokens de plugins différents ou mélanger tokens et valeurs personnalisées selon vos besoins.

### 5. Test et vérification

- Basculez vers le mode `Preview` pour voir votre `composant` stylisé avec les tokens du plugin.
- Les couleurs appliquées via tokens doivent être cohérentes avec les définitions du plugin.
- Si vous modifiez la valeur d'un token dans le `plugin`, rechargez l'éditeur pour voir le changement reflété sur tous les `composants` qui l'utilisent.