---
description: "Connectez Claude Code, Codex ou n'importe quel agent de code compatible MCP à un projet Luna Park desktop."
---

# Agents IA (MCP)

En plus du [Sidekick](../getting-started/sidekick-settings) intégré, vous pouvez laisser un agent de code externe (Claude Code, Codex, Cursor, Gemini CLI...) construire votre application. L'[application desktop](../getting-started/desktop-app) expose un **serveur MCP** (Model Context Protocol) qui apprend à l'agent les formats de fichiers de Luna Park et lui permet de tester son travail.

::: info Desktop uniquement
Le serveur MCP n'est disponible que dans l'application desktop, où les projets sont des dossiers que l'agent peut modifier.
:::

## Fonctionnement

1. L'agent modifie directement les fichiers du projet sur le disque (voir [Fichiers du projet](../fundamentals/project-files#format-sur-disque)).
2. Il utilise le serveur MCP de Luna Park pour lire la documentation, lister les nœuds et composants disponibles, et vérifier ses fichiers.
3. L'éditeur recharge en direct les fichiers modifiés. Les fichiers invalides sont signalés et ne sont pas chargés.

## Activer le serveur

1. Ouvrez votre projet dans l'application desktop.
2. Cliquez sur le bouton **MCP server** de la barre supérieure, puis sur **Activate**.
3. Cliquez sur **Copy MCP configuration** et ajoutez-la aux réglages MCP de votre agent.

La configuration ressemble à ceci :

```json
{
  "mcpServers": {
    "luna-park": {
      "type": "http",
      "url": "http://127.0.0.1:<port>/mcp",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}
```

Le serveur n'écoute que sur votre machine et exige son jeton. Cliquez sur le bouton d'arrêt pour le désactiver.

À l'activation, Luna Park écrit aussi deux fichiers à la racine du projet :

- `.mcp.json` : la connexion, lue automatiquement par des agents comme Claude Code. Il est supprimé quand vous désactivez le serveur.
- `AGENTS.md` : les instructions pour l'agent (formats de fichiers, méthode de travail). Il n'est créé que s'il n'existe pas, vous pouvez donc le modifier.

::: tip Claude Code
Lancez Claude Code depuis le dossier du projet : il prend en compte `.mcp.json` et `AGENTS.md` tout seul.
:::

## Outils exposés

| Outil | Description |
|---|---|
| `documentation` | Les formats de fichiers et concepts de Luna Park. |
| `getNodes` | Les nœuds logiques disponibles dans le projet, avec leurs ports. |
| `getComponents` | Les composants fournis par les plugins. |
| `getTokens` | Les design tokens du projet. |
| `listPlugins` | Les plugins installés, leurs réglages et leurs guards de route. |
| `validateFiles` | Vérifie les fichiers modifiés et signale chaque problème. |
| `runRoutes` | Exécute des routes backend dans l'éditeur. Les modifications de la base de données sont annulées. |
| `interact` | Pilote l'aperçu de l'éditeur comme un utilisateur (cliquer, remplir, lire). Les cookies et les modifications de la base de données sont annulés. |

La méthode recommandée, décrite dans `AGENTS.md` : lire la `documentation`, chercher les nœuds avec `getNodes`, écrire les fichiers, lancer `validateFiles` jusqu'à ce qu'ils soient valides, puis tester les routes avec `runRoutes` et les pages avec `interact`.

## Agents dans Sidekick

Vous pouvez aussi lancer un agent local depuis Luna Park : dans les réglages de Sidekick, la section **Local agents** liste les agents compatibles ACP installés sur votre machine. Le serveur MCP est alors connecté pour vous. Voir [Sidekick](../getting-started/sidekick-settings#agents-locaux).
