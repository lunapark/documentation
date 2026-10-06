---
description: "Installez et utilisez l'éditeur desktop de Luna Park pour travailler sur des projets locaux, les exécuter et créer des applications natives."
---

# Application Desktop

Luna Park Desktop est le même éditeur que la version cloud, sous forme d'application native. Les projets sont des dossiers sur votre ordinateur : vous pouvez les versionner avec Git, les ouvrir dans votre IDE et laisser des agents IA locaux travailler dessus.

::: warning Bêta
L'application desktop est en bêta. Gardez une sauvegarde ou un historique Git de vos projets importants.
:::

## Ce qu'apporte l'application desktop

| Fonctionnalité | Description |
|---|---|
| Projets locaux | Les projets sont de simples dossiers sur le disque (voir [Fichiers du projet](../fundamentals/project-files#format-sur-disque)). |
| Serveurs locaux | Générez le projet et lancez-le en local, avec rechargement à chaud (voir [Compilation](../deployment/compilation#compiler-dans-l-application-desktop)). |
| Applications natives | Créez des applications desktop, Android et iOS (voir [Applications natives](../deployment/native-apps)). |
| IA locale | Utilisez des modèles ou des agents de code locaux dans le [Sidekick](./sidekick-settings#desktop-uniquement-modeles-et-agents-locaux). |
| Serveur MCP | Laissez un agent externe comme Claude Code travailler sur le projet (voir [Agents IA](../integrations/ai-agents)). |

## Systèmes supportés

- Windows 10/11 x64.
- macOS 13 ou plus récent (Intel ou Apple Silicon).
- Distributions Linux x64 récentes (AppImage).

Windows ARM et Linux ARM ne sont pas encore supportés.

## Licence

L'application s'ouvre immédiatement pendant la vérification de la licence. Activez-la avec votre clé de licence et un nom de machine. L'édition et la sauvegarde fonctionnent hors ligne ; les fonctionnalités Pro (génération du code et builds natifs) nécessitent une vérification en ligne.

| Licence | Fonctionnalités desktop |
|---|---|
| Free | Édition uniquement (pas d'usage commercial). |
| Edu / Pro | Tout, y compris la génération du code et les builds natifs. |

Vous pouvez détacher une licence d'une machine depuis la page **Subscription** des réglages de votre compte.

## Projets

Utilisez le menu **File** pour créer (`New Project`) ou ouvrir (`Open`) un dossier de projet. La première fois que vous ouvrez un projet que vous n'avez pas créé, Luna Park affiche un avertissement de confiance : un projet peut contenir du code personnalisé, des plugins et des dépendances distantes. N'ouvrez que des projets de confiance.

::: info Sauvegarde
Les sauvegardes sont atomiques. La version précédente du dossier `src` est conservée dans `.luna-source-backup`, pour la restaurer si une sauvegarde est interrompue.
:::

## Menu et raccourcis

| Menu | Action | Raccourci |
|---|---|---|
| File | New Project | `Ctrl + N` |
| File | Open | `Ctrl + O` |
| File | Save | `Ctrl + S` |
| File | Save As | `Ctrl + Shift + S` |
| Edit | Undo | `Ctrl + Z` |
| Edit | Redo | `Ctrl + Shift + Z` |
| Help | Documentation, Challenge (tutorial), Discord | |

**File > Settings** contient les préférences de l'application, comme l'échelle de l'interface (**Scale**).

## Prérequis pour exécuter un projet

L'édition et la sauvegarde ne demandent rien de plus. Pour générer et lancer un projet, installez :

- **Node.js** 24 à 26 ;
- **pnpm** 12 ou plus.

Luna Park détecte les versions installées et n'installe jamais d'outils globaux à votre place. Sous macOS et Linux, redémarrez l'application après les avoir installés.
