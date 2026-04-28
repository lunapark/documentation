<script setup>
// Import images when available
// import Screen1 from '/assets/images/getting-started/sidekick-provider-select.png'
// import Screen2 from '/assets/images/getting-started/sidekick-settings-panel.png'
</script>

# Configurer le Sidekick

Le **Sidekick** est l'assistant d'IA intégré dans l'éditeur Luna Park. Il vous aide à accélérer votre flux de travail en proposant des suggestions, en générant du code, et en expliquant les composants. Pour exploiter au mieux cette fonctionnalité, vous pouvez choisir et configurer le fournisseur d'IA qui alimente le Sidekick.

## Sélectionner un fournisseur d'IA

Luna Park supporte plusieurs fournisseurs d'IA. Vous pouvez basculer entre eux selon vos préférences, votre quota d'utilisation, ou les capacités que vous recherchez.

1. Ouvrez les paramètres du projet en cliquant sur l'icône des paramètres dans le coin supérieur droit de l'éditeur.
2. Naviguez jusqu'à la section `Sidekick`.
3. Sous `Provider`, sélectionnez le fournisseur que vous souhaitez utiliser dans la liste déroulante.

SCREEN_HERE: menu déroulant des fournisseurs d'IA disponibles.

## Configurer les paramètres du fournisseur

Chaque fournisseur d'IA a ses propres paramètres de configuration. Ces paramètres vous permettent d'ajuster le comportement du Sidekick pour correspondre à vos besoins.

### Clé d'API

Vous devez fournir une clé d'API valide pour le fournisseur sélectionné. Cette clé permet à Luna Park d'authentifier vos demandes auprès du service d'IA.

1. Dans la section `Sidekick` des paramètres, localisez le champ `API Key`.
2. Entrez votre clé d'API pour le fournisseur choisi.
3. Cliquez sur `Enregistrer` pour valider la clé.

Si vous n'avez pas de clé d'API, consultez la documentation du fournisseur pour apprendre comment en créer une.

### Modèle et paramètres avancés

Certains fournisseurs permettent de sélectionner un modèle spécifique ou de régler des paramètres avancés comme la température ou la longueur maximale des réponses.

1. Sous le champ `API Key`, recherchez la section `Configuration du modèle`.
2. Sélectionnez le modèle que vous souhaitez utiliser, ou laissez la valeur par défaut.
3. Ajustez les paramètres avancés si nécessaire (par exemple, `Température` pour contrôler la créativité des réponses).
4. Cliquez sur `Enregistrer`.

SCREEN_HERE: panneau de configuration du modèle et des paramètres avancés.

## Utiliser plusieurs fournisseurs

Vous pouvez configurer plusieurs fournisseurs d'IA et basculer entre eux à tout moment. Cela vous permet d'expérimenter avec différents services pour trouver celui qui convient le mieux à votre cas d'usage.

- Chaque fournisseur conserve ses paramètres de configuration propres (clé d'API, modèle, paramètres avancés).
- Le changement de fournisseur dans les paramètres prend effet immédiatement dans l'éditeur.
- Les suggestions antérieures du Sidekick restent visibles, mais les nouvelles suggestions utiliseront le fournisseur actuellement sélectionné.

## Dépannage

### La clé d'API est rejetée

Vérifiez que:
- La clé d'API est correctement copiée et collée (sans espaces supplémentaires).
- La clé d'API est valide et non expirée pour le fournisseur sélectionné.
- Votre compte associé à la clé d'API dispose des permissions nécessaires.

### Le Sidekick ne répond pas

Si le Sidekick ne génère pas de suggestions:
- Vérifiez votre connexion Internet.
- Assurez-vous que le fournisseur d'IA est actuellement opérationnel (consultez son tableau de bord de statut).
- Vérifiez que votre compte ne s'est pas heurté à un quota d'utilisation ou à une limite de taux.

Pour obtenir de l'aide supplémentaire, consultez la page [Obtenir de l'aide](/fr/guide/getting-started/find-help).