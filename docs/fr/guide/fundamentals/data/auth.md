---
description: "Ajoutez des comptes utilisateurs, des sessions, des rôles et la connexion OAuth à une application Luna Park avec le plugin Users."
---

# Authentification

L'authentification est fournie par le plugin officiel **Users** (`@luna-park/plugin-users`). Il ajoute les comptes, les sessions, les rôles et permissions, et la connexion OAuth, sans écrire de code d'authentification. La même logique tourne dans l'aperçu de l'éditeur et dans l'application exportée.

## Installer le plugin

1. Ouvrez **Libraries > Plugins > Install plugins**.
2. Cherchez **Users** et installez-le.

Le plugin crée :

- une table `Users` et une table `Sessions` ;
- un `User Store` qui contient l'utilisateur connecté côté frontend ;
- un compte administrateur par défaut (login `admin`, mot de passe `admin`).

::: danger Compte par défaut
L'administrateur par défaut ne sert qu'à démarrer. Supprimez-le ou changez son mot de passe avant la mise en ligne.
:::

## Réglages

Le plugin ajoute un bouton à la barre supérieure, avec deux onglets :

- **General** : comment les utilisateurs sont identifiés (nom d'utilisateur ou email), la politique de mot de passe (longueur minimale, caractères requis) et la grille des **rôles** et **permissions**.
- **OAuth2** : les fournisseurs de connexion (voir [plus bas](#connexion-oauth)).

## Inscription, connexion, déconnexion

Dans la logique d'une page :

- `user/connect` connecte, inscrit, ou les deux (`login`, `signup`, `both`) avec un login et un mot de passe. Il renvoie l'utilisateur et lève une erreur en cas d'échec : entourez-le d'un nœud `Try` pour afficher un message.
- `user/disconnect` déconnecte de cet appareil (`logout`) ou de tous les appareils (`all`).
- `user/current` donne l'utilisateur connecté et indique si quelqu'un est connecté.
- `user/check-password` vérifie un mot de passe par rapport à la politique, pour guider l'utilisateur dans un formulaire d'inscription.

Les sessions sont stockées dans des cookies signés et `httpOnly`, une par appareil.

## Protéger les routes

Chaque [route](./routes) backend reçoit l'utilisateur connecté dans l'entrée `user` (`id`, `login`, `roles`). Les visiteurs non connectés ont le rôle `anonymous`.

Ajoutez un guard dans la section **Guards** de l'Inspector de la route :

| Guard | Effet |
|---|---|
| **Authenticated** | Seuls les utilisateurs connectés peuvent appeler la route (sinon `401`). |
| **Permission** | Seuls les utilisateurs dont les rôles donnent la permission choisie peuvent l'appeler (`401` si anonyme, `403` sinon). |

Les routes sans guard restent publiques.

## Rôles et permissions

Définissez les rôles et permissions dans les réglages **General**, puis vérifiez-les dans la logique backend :

| Nœud | Description |
|---|---|
| `roles/has-permission` | Vérifie si un utilisateur a une permission. |
| `roles/assert-permission` | S'arrête avec une erreur si un utilisateur n'a pas une permission. |
| `roles/set-roles` | Remplace les rôles d'un utilisateur. |

## Mots de passe et sessions

Nœuds backend :

| Nœud | Description |
|---|---|
| `user/change-password` | Change le mot de passe de l'utilisateur connecté et déconnecte ses autres appareils. |
| `user/request-password-reset` | Crée un jeton de réinitialisation à usage unique, valable une heure. Envoyez-le vous-même à l'utilisateur (par exemple avec le plugin Mail). |
| `user/reset-password` | Définit un nouveau mot de passe à partir d'un jeton de réinitialisation. |
| `user/list-sessions` / `user/revoke-session` | Liste ou ferme les sessions de l'utilisateur connecté. |
| `user/connect-by-id` / `user/disconnect-by-id` | Connecte en tant que n'importe quel utilisateur, ou le déconnecte (liens magiques, outils d'administration). Protégez la route avec un guard. |
| `user/delete` | Supprime un utilisateur et ses sessions. |
| `hash/hash-argon2` / `hash/verify-argon2` | Hache une chaîne avec Argon2id, ou la vérifie. |

## Connexion OAuth

Dans les réglages **OAuth2**, cliquez sur **Add a provider** et choisissez un préréglage : **Google**, **Discord**, **GitHub**, **Microsoft** ou **GitLab** (ou n'importe quel fournisseur OAuth2). Un guide renvoie vers la console du fournisseur et donne les URI de redirection à enregistrer. Collez l'identifiant et le secret client, avec des valeurs distinctes pour le développement et la production.

Côté frontend :

- `oauth/connect` ouvre la fenêtre de connexion du fournisseur, puis connecte l'utilisateur ;
- `oauth/link` lie un compte du fournisseur à l'utilisateur connecté.

En production, enregistrez cette URI de redirection auprès du fournisseur :

```
https://<votre-domaine>/api/_users/oauth/callback
```

::: info Secrets
Les secrets clients ne sont pas écrits dans le code : chacun va dans le fichier `.env` de l'application exportée, sous le nom `USERS_OAUTH_SECRET_<PROVIDER_ID>`.
:::
