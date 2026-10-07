---
title: "Alternative à Lovable et Bolt : Luna Park vs constructeurs IA"
description: "Vous cherchez une alternative à Lovable ou Bolt ? Comparez Luna Park aux constructeurs d'applications IA : contrôle, maintenance, backend, propriété du code et modèle de prix."
---

# Luna Park vs constructeurs d'applications IA

Vous cherchez une **alternative à Lovable** ou une **alternative à Bolt** qui vous laisse le contrôle de votre application ? Luna Park utilise l'IA pour construire une logique visuelle que vous pouvez lire et modifier, dans une application Vue et Node.js full-stack qui vous appartient.

Les constructeurs d'applications IA comme **Lovable** ou **Bolt** génèrent une application complète à partir d'une conversation. Vous décrivez ce que vous voulez, l'IA écrit le code (en général du React avec un backend Supabase ou équivalent), et vous voyez le résultat en quelques minutes.

Luna Park utilise aussi l'IA, mais différemment : l'IA construit **une logique visuelle que vous pouvez lire et modifier vous-même**, plutôt que du code auquel vous devez faire confiance.

## En un coup d'œil

### Construction

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Constructeurs IA |
|---|---|---|
| **Comment vous construisez** | Éditeur visuel, avec un assistant IA | Conversation avec une IA |
| **Ce que l'IA produit** | Composants, graphes de logique visuelle, routes, tables | Code TypeScript / React |
| **Modifier sans l'IA** | Visuellement, sans savoir coder | Uniquement en modifiant le code |
| **Modèle d'IA** | Au choix : fournisseur hébergé, modèle local ou agent local | Choisi par la plateforme |

</DTable>

### Données et backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Constructeurs IA |
|---|---|---|
| **Backend** | Intégré : routes, crons, PostgreSQL | Supabase ou le backend de la plateforme |
| **Accès à la base** | Les routes interrogent PostgreSQL directement, sur le même serveur | Souvent depuis le navigateur, via l'API HTTP de Supabase |

</DTable>

### Propriété et coûts

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Constructeurs IA |
|---|---|---|
| **Propriété du code** | Code Vue + Node.js lisible | Oui, souvent synchronisé avec GitHub |
| **Hébergement** | Où vous voulez | La plateforme, ou au choix |
| **Modèle de prix** | Abonnement fixe, IA avec votre propre clé ou modèles locaux (desktop) | Crédits ou tokens consommés par l'IA ([Lovable](https://docs.lovable.dev/introduction/plans-and-credits), [Bolt](https://support.bolt.new/best-practices/maximizing-token-efficiency)) |
| **Plateformes** | Web (application monopage, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Surtout web |

</DTable>

::: info
Cette comparaison reflète notre compréhension de ces outils en octobre 2026. Ils évoluent très vite : consultez leurs sites pour les fonctionnalités et prix actuels.
:::

## Les points forts des constructeurs IA

- **Vitesse jusqu'à une première version** : un prototype fonctionnel en quelques minutes, à partir d'un seul prompt.
- **Aucun outil à apprendre** : il suffit de décrire ce que vous voulez.
- **Code standard** : le résultat est un projet React classique que n'importe quel développeur peut reprendre.

## Les points forts de Luna Park

### Vous comprenez votre application

Avec un constructeur IA, l'application est du code. Tant que l'IA fait juste, tout va bien. Quand ce n'est pas le cas, ou quand le projet grandit, il faut lire ce code, ou continuer à envoyer des prompts en espérant que la prochaine correction ne casse rien d'autre.

Dans Luna Park, tout ce que l'IA construit est visuel : [composants](../../fundamentals/interface/components), [graphes de logique](../../fundamentals/logic/visual-scripting/introduction), [routes](../../fundamentals/data/routes), [tables](../../fundamentals/data/database). Vous voyez ce qu'elle a fait, le comprenez et le corrigez vous-même, sans savoir coder.

### Une IA qui vérifie son travail

Le [Sidekick](../sidekick-settings) ne se contente pas d'écrire des fichiers : il exécute vos routes backend et clique dans l'aperçu comme un utilisateur pour tester ce qu'il a construit. Les modifications de la base de données et des cookies faites pendant ces tests sont annulées. Il affiche le diff de chaque modification, et ses modes **Plan** et **Review** lui permettent de proposer ou d'inspecter avant de toucher à quoi que ce soit.

### La base de données à côté de votre logique

Les applications générées interrogent généralement Supabase depuis le navigateur, via son API HTTP. Chaque requête est un aller-retour réseau, les règles d'accès aux données vivent dans des policies de la base, et les requêtes complexes finissent en fonctions SQL ou en edge functions.

Dans Luna Park, une [route](../../fundamentals/data/routes) tourne sur le même serveur que PostgreSQL et lui parle directement. Un seul appel depuis l'interface peut exécuter plusieurs requêtes, avec jointures, agrégats et [transactions](../../fundamentals/data/database#nodes-specialises), et votre logique entre les deux, protégée par des [guards](../../fundamentals/data/auth#proteger-les-routes) que vous pouvez lire.

### Votre IA, vos coûts

Les constructeurs IA facturent l'usage de l'IA : Lovable [compte des crédits par message](https://docs.lovable.dev/introduction/plans-and-credits), et Bolt [compte des tokens](https://support.bolt.new/best-practices/maximizing-token-efficiency), qui couvrent aussi la lecture de votre projet par l'IA. Dans Luna Park, vous connectez le fournisseur et le modèle d'IA de votre choix avec votre propre clé, utilisez un modèle local dans l'application desktop, ou laissez votre propre agent de code (Claude Code, Codex, Cursor...) travailler sur le projet via [MCP](../../integrations/ai-agents). Et quand vous n'avez pas besoin de l'IA, éditer ne coûte rien : vous utilisez simplement l'éditeur.

### Pensé pour être maintenu

Le code généré a tendance à grandir dans tous les sens à chaque prompt. Les projets Luna Park suivent une structure fixe ([fichiers du projet](../../fundamentals/project-files)), des données typées partagées entre frontend et backend, et un compilateur qui produit un code cohérent. Votre application reste organisée en grandissant, quel que soit celui (humain ou IA) qui travaille dessus.

## À savoir avant de changer

- **La prise en main est plus longue.** Il faut apprendre l'éditeur et les bases du visual scripting (voir [Est-ce que Luna Park est fait pour moi ?](../target-users)).
- **Vous hébergez le backend.** Les routes, la base de données et les crons tournent sur votre propre serveur (voir [Auto-hébergement](../../deployment/deployment)).
- **L'IA demande un fournisseur.** Sidekick utilise votre propre clé d'API ou un modèle local (voir [Sidekick](../sidekick-settings#configurer-un-fournisseur)).

## Lequel choisir ?

**Choisissez un constructeur IA** pour tester une idée en un après-midi, ou si vous êtes développeur et à l'aise pour reprendre le code généré.

**Choisissez Luna Park** si vous voulez la vitesse de l'IA sans perdre le contrôle : une application que vous pouvez comprendre, modifier et maintenir vous-même à mesure qu'elle grandit.
