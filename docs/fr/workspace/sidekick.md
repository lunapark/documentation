---
description: "Utilisez Sidekick, l'assistant IA intégré à Luna Park : connectez un fournisseur d'IA ou un agent de code, choisissez un mode et vérifiez ses modifications."
---

<script setup lang="ts">
import Welcome from "/assets/images/getting-started/sidekick/welcome.png";
import Connections from "/assets/images/getting-started/sidekick/connections.png";
import ProviderForm from "/assets/images/getting-started/sidekick/provider-form.png";
import Modes from "/assets/images/getting-started/sidekick/modes.png";
import ModelSelector from "/assets/images/getting-started/sidekick/model-selector.png";
import Mention from "/assets/images/getting-started/sidekick/mention.png";
</script>

# Sidekick

**Sidekick** est l'assistant IA intégré à Luna Park. Il lit votre projet, crée et modifie des fichiers (pages, composants, routes, bases de données, stores...), teste ce qu'il construit, et peut vous apprendre à faire les choses vous-même.

## Ouvrir Sidekick

- Appuyez sur `Ctrl + Shift + X` ;
- ou appuyez deux fois sur `Shift` pour ouvrir le **Navigator**, puis `S` ;
- ou cliquez sur le bouton **Sidekick AI** de la barre supérieure.

Sidekick s'ouvre dans un espace redimensionnable à droite de l'éditeur. Le même raccourci ou bouton le ferme.

<DImage
:src="Welcome" :width="1280" :height="720"
alt="Espace Sidekick sans IA connectée, avec le bouton Connect an AI"
/>

Son en-tête affiche le titre et l'état de la conversation (**Running**, **Complete**, **Waiting for answers**...), ainsi que ces boutons :

| Bouton | Action |
|---|---|
| **Conversation history** | Rechercher, renommer, supprimer ou rouvrir une conversation passée. |
| **New chat** | Démarrer une nouvelle conversation. |
| **Manage connections** | Ajouter ou modifier les IA que Sidekick peut utiliser. |
| **Export debug session** | Copier la conversation dans le presse-papiers, pour signaler un problème. |
| **Close Sidekick** | Fermer l'espace. |

## Connecter une IA

Sidekick a besoin d'une IA pour fonctionner. Cliquez sur **Connect an AI** (ou **Manage connections** dans l'en-tête) pour ouvrir la fenêtre des connexions. Vos connexions sont listées à gauche ; **Add** ouvre la galerie :

- **Coding agents** : Claude, Codex, Gemini CLI... lancés sur votre machine (application desktop uniquement) ;
- **Local models** : Ollama, LM Studio ou un autre serveur sur votre machine (application desktop uniquement) ;
- **API providers** : connectez un fournisseur hébergé avec une clé d'API.

<DImage
:src="Connections" :width="1280" :height="720"
alt="Fenêtre des connexions de Sidekick avec la galerie des agents de code et des fournisseurs d'API"
/>

### Fournisseurs d'API

1. Choisissez un fournisseur dans la galerie.
2. Renseignez votre **API key** (et l'**API URL** pour un endpoint personnalisé).
3. Sidekick teste la connexion et charge les modèles disponibles. Choisissez-en un dans **Model**, ou saisissez son identifiant.
4. Cliquez sur **Use in chat**.

<DImage
:src="ProviderForm" :width="1280" :height="720"
alt="Formulaire de connexion Mistral avec les champs Name, API key, Connection et Model"
/>

Fournisseurs supportés : Anthropic, Cerebras, DeepSeek, Gemini, Mistral, Moonshot AI, OpenAI, OpenRouter, Qwen, Together AI, xAI, et **Custom endpoint** pour toute API compatible OpenAI (la clé est alors optionnelle).

Vous pouvez ajouter plusieurs connexions, même vers le même fournisseur : donnez-leur un nom (**Name**) pour les distinguer. La connexion utilisée est marquée **In use**. Supprimez une connexion avec le bouton corbeille de son panneau.

::: info Confidentialité
Les clés d'API sont stockées dans votre navigateur et envoyées uniquement au fournisseur sélectionné.
:::

### Agents de code

Dans l'[application desktop](../getting-started/desktop-app), Sidekick peut déléguer le travail à un agent de code installé sur votre machine, avec sa configuration existante : Claude, Codex, Gemini CLI, Mistral Vibe et d'autres agents compatibles avec l'**Agent Client Protocol** (ACP). Tapez dans la recherche de la galerie pour trouver d'autres agents du registre ACP. Les agents pas encore installés ont un bouton **Install**.

Sélectionnez un agent, puis cliquez sur **Use in chat**. Son panneau affiche les options de modèle (**Model**), d'effort et de permissions (**Permissions**) de l'agent. Luna Park donne automatiquement à l'agent l'accès à son serveur MCP (voir [Agents IA](../integrations/ai-agents)).

Pour utiliser un autre agent compatible ACP, choisissez **Custom agent** et renseignez son nom (**Name**), sa commande (**Command**, dans votre `PATH` ou un chemin absolu), ses arguments (**Arguments**) et son environnement (**Environment**, une ligne `CLE=valeur` par variable).

Quand un agent demande une autorisation, ou a besoin que vous vous connectiez, Sidekick affiche la demande dans la conversation.

### Modèles locaux

Dans l'[application desktop](../getting-started/desktop-app), **Local models** liste les serveurs de modèles détectés sur votre machine (**Ollama**, **LM Studio**). Choisissez un modèle et cliquez sur **Use**. Sous **Custom endpoint**, saisissez l'**API URL** d'un autre serveur, puis **Connect**.

En mode **Build**, le modèle doit supporter l'appel d'outils (tool calling).

## Modes

Quand la conversation est vide, Sidekick affiche une carte par mode. Survolez une carte pour lire sa description. Pendant une conversation, changez de mode avec la liste sous le prompt.

<DImage
:src="Modes" :width="1280" :height="720"
alt="Introduction de Sidekick avec les cartes des modes Build, Plan, Review et Guide"
/>

| Mode | Ce que fait Sidekick |
|---|---|
| **Build** | Discute avec vous et modifie votre application. |
| **Plan** | Explore votre application et propose un plan avant toute modification. |
| **Review** | Inspecte votre application et donne des suggestions sans rien modifier. |
| **Guide** | Vous apprend à faire quelque chose dans votre projet, étape par étape. Vous faites chaque modification. |

### Mode Guide

En mode **Guide**, Sidekick ne modifie jamais vos fichiers. Posez-lui une question (« Quelle est la différence entre un store et une base de données ? »), demandez-lui comment faire quelque chose (« Comment faire pour que ce bouton ouvre une modale ? »), ou de vous guider dans un petit projet.

Sidekick donne une étape à la fois, avec des liens vers la documentation. Sous chaque étape :

- **Show me where** met en évidence l'endroit de l'éditeur où se passe l'étape ;
- **Done** indique à Sidekick que vous avez fait la modification. Quand il le peut, Sidekick surveille vos fichiers et passe à la suite tout seul (**Nice, that's done!**) ;
- **Why?** demande plus de détails sur l'étape ;
- **Skip** passe à la suite sans la faire.

Vous pouvez aussi répondre dans le prompt, par exemple pour dire ce que vous voyez à la place.

## Discuter avec Sidekick

Le sélecteur de modèle sous le prompt affiche l'IA utilisée. Cliquez dessus pour passer à une autre connexion, changer le modèle (**Model**) ou l'effort (**Effort**, agents uniquement), ou ouvrir **Manage connections...**.

<DImage
:src="ModelSelector" :width="1280" :height="720"
alt="Sélecteur de modèle ouvert sous le prompt de Sidekick, avec les listes AI et Model"
/>

- Tapez `@` dans le prompt pour mentionner un fichier, puis choisissez-le avec les flèches et `Entrée`.
- Le fichier ouvert dans l'éditeur est envoyé comme contexte (**Context**). Cliquez sur sa pastille pour le retirer du prompt.
- Sidekick connaît aussi le panneau courant et l'élément ou les nœuds sélectionnés : vous pouvez lui parler de « ce bouton ».

<DImage
:src="Mention" :width="1280" :height="720"
alt="Liste de fichiers ouverte en tapant @ dans le prompt de Sidekick"
/>

Pendant que Sidekick travaille, cliquez sur **Stop Sidekick** pour l'interrompre. Les messages envoyés entre-temps sont mis en file d'attente et envoyés quand il a terminé. Sidekick affiche son raisonnement, son plan et le diff de chaque modification, et peut vous poser des questions via un petit formulaire.

## Vérifier et annuler les modifications

À la fin d'une exécution, un résumé liste les fichiers modifiés. Cliquez sur **Review** pour les voir, ouvrir un fichier, ou cliquez sur **Undo run** pour annuler toutes les modifications de cette exécution. Si vous avez modifié certains de ces fichiers entre-temps, Sidekick s'arrête et propose d'annuler uniquement les fichiers inchangés (**Undo unchanged files**).

## Ce que Sidekick peut faire

Dans tous les modes, Sidekick peut lire l'arborescence, chercher dans les fichiers, lister les nœuds, composants, tokens et plugins, et chercher dans la documentation de Luna Park.

En mode **Build**, il peut aussi :

- créer et modifier des fichiers, et mettre à jour les design tokens ;
- **exécuter des routes** pour tester le backend. Les modifications de la base de données sont toujours annulées ;
- **interagir** avec l'aperçu comme un utilisateur (cliquer, remplir des champs, lire des valeurs). Les cookies et les modifications de la base de données sont annulés.

::: tip Générer des valeurs
Les formulaires de données (valeurs par défaut, lignes de table...) ont un bouton **Generate** : décrivez le contenu attendu, et Sidekick remplit les valeurs.
:::
