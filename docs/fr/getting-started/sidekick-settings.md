---
description: "Utilisez Sidekick, l'assistant IA intégré à Luna Park, et configurez son fournisseur d'IA."
---

<script setup lang="ts">
import Popup from "/assets/images/getting-started/sidekick/popup.png";
import ProviderConfig from "/assets/images/getting-started/sidekick/provider-config.png";
</script>

# Sidekick

**Sidekick** est l'assistant IA intégré à Luna Park. Il lit votre projet, crée et modifie des fichiers (pages, composants, routes, bases de données, stores...) et teste ce qu'il construit.

## Ouvrir Sidekick

- Appuyez sur `Ctrl + Shift + X` ;
- ou appuyez deux fois sur `Shift` pour ouvrir le **Navigator**, puis `S` ;
- ou cliquez sur le bouton **Sidekick AI** de la barre supérieure, puis **Open Sidekick**.

Sidekick s'ouvre dans un espace redimensionnable à droite de l'éditeur. Son en-tête permet de démarrer une nouvelle conversation (**New chat**), de parcourir l'historique (**Conversation history**) et de fermer le panneau.

<DImage :src="Popup" :width="757" :height="388" alt="Navigator ouvert sur l'onglet Sidekick" />

## Modes

Choisissez un mode dans la liste à côté du prompt :

| Mode | Ce que fait Sidekick |
|---|---|
| **Build** | Discute avec vous et modifie votre application. |
| **Plan** | Explore votre application et propose un plan avant toute modification. |
| **Review** | Inspecte votre application et donne des suggestions sans rien modifier. |

Tapez `@` dans le prompt pour mentionner un fichier. Cliquez sur **Stop Sidekick** pour interrompre une exécution.

Pendant qu'il travaille, Sidekick affiche son raisonnement, le diff de chaque modification, et peut vous poser des questions via un petit formulaire.

## Ce que Sidekick peut faire

Dans tous les modes, Sidekick peut lire l'arborescence, chercher dans les fichiers, lister les nœuds, composants, tokens et plugins, et lire la documentation de Luna Park.

En mode **Build**, il peut aussi :

- créer et modifier des fichiers, et mettre à jour les design tokens ;
- **exécuter des routes** pour tester le backend. Les modifications de la base de données sont toujours annulées ;
- **interagir** avec l'aperçu comme un utilisateur (cliquer, remplir des champs, lire des valeurs). Les cookies et les modifications de la base de données sont annulés.

::: tip Générer des valeurs
Les formulaires de données (valeurs par défaut, lignes de table...) ont un bouton **Generate** qui remplit les valeurs avec l'IA.
:::

## Configurer un fournisseur

Ouvrez le bouton **Sidekick AI** de la barre supérieure. Dans **Hosted providers** :

1. Sélectionnez le fournisseur.
2. Choisissez le modèle.
3. Renseignez votre `API Key` (et l'`API URL` si nécessaire).

<DImage :src="ProviderConfig" :width="762" :height="392" alt="Configuration d'un fournisseur avec API Key et choix du modèle" />

Fournisseurs hébergés supportés :

| Fournisseur | Notes |
|---|---|
| Mistral | Fournisseur par défaut. |
| Gemini | |
| Anthropic | |
| OpenAI | Saisissez n'importe quel nom de modèle. |
| OpenRouter | Saisissez n'importe quel nom de modèle. |
| OpenAI compatible | Tout serveur exposant une API compatible OpenAI. Nécessite une URL ; la clé est optionnelle. |

::: info Confidentialité
Les identifiants sont stockés dans votre navigateur et envoyés uniquement au fournisseur sélectionné.
:::

## Desktop uniquement : modèles et agents locaux

L'[application desktop](./desktop-app) ajoute deux sections aux réglages de Sidekick.

### Modèles locaux

Luna Park détecte **Ollama** et **LM Studio** lancés sur votre machine. Vous pouvez aussi saisir une URL personnalisée. En mode **Build**, le modèle doit supporter l'appel d'outils (tool calling).

### Agents locaux

Sidekick peut déléguer le travail à un agent de code installé sur votre machine, avec sa configuration existante : Claude, Codex, Gemini CLI, Mistral Vibe et d'autres agents compatibles avec l'**Agent Client Protocol** (ACP). D'autres agents peuvent être installés depuis le registre ACP, et vous pouvez en ajouter un personnalisé (nom, commande, arguments, environnement).

Chaque agent a ses propres options de modèle (**Model**), d'effort et de permissions (**Permissions**). Luna Park donne automatiquement à l'agent l'accès à son serveur MCP (voir [Agents IA](../integrations/ai-agents)).
