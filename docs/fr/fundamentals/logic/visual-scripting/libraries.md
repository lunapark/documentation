---
description: "Activez les bibliothèques de nœuds de Luna Park et découvrez les nœuds les plus utiles : événements, HTTP, cookies, erreurs et utilitaires."
---

# Bibliothèques de nœuds

Les nœuds sont regroupés en **bibliothèques**. Activez-les ou désactivez-les par projet avec le bouton **Libraries** de la barre supérieure. Les bibliothèques désactivées n'apparaissent pas dans la recherche de nœuds.

Faites un clic droit sur le graphe pour chercher un nœud par son nom.

## Bibliothèques disponibles

| Bibliothèque | Contenu | Activée par défaut |
|---|---|---|
| Standard | Contrôle de flux, erreurs, objets, booléens, requêtes HTTP. | Oui |
| Array | Créer et transformer des tableaux. | Oui |
| Date | Les dates et la [Temporal API](./temporal-api). | Oui |
| Dom | Boîtes de dialogue (`Alert`, `Confirm`, `Prompt`), parsing HTML/XML, méthodes du DOM. | Oui |
| Json | Lire et écrire du JSON. | Oui |
| Math | Arithmétique, comparaisons, arrondis, nombres. | Oui |
| Misc | Cookies et erreurs HTTP pour le backend. | Oui |
| Regex | Expressions régulières. | Oui |
| String | Opérations sur le texte. | Oui |
| Url | Construire et lire des URL. | Oui |
| Reactivity | Utilitaires de temps réactifs. | Non |
| Utils | Presse-papiers, hachage, UUID, téléchargement de fichier... | Non |
| Bigint | Entiers de précision arbitraire. | Non |

Les [packages npm](../../../integrations/npm) et les [plugins](../../../integrations/plugins) installés ajoutent leurs propres nœuds.

## Événements

Les événements démarrent l'exécution d'un graphe.

| Nœud | Déclenché quand |
|---|---|
| `On Mounted` | Le composant est affiché. |
| `On Unmounted` | Le composant est retiré. |
| `On Load` | La logique est chargée. |
| `On Click`, `On Key Down`, `On Mouse Enter`... | L'utilisateur interagit avec un élément de mise en page (créez-les depuis le panneau **Events** de l'élément). |
| `Manual Play` | Vous cliquez dessus dans l'éditeur (utile pour tester). |

## Requêtes HTTP

`Fetch` envoie une requête HTTP (`GET`, `POST`, `PUT`, `DELETE`) vers n'importe quelle URL, avec des en-têtes et un corps. Il renvoie le **text** de la réponse, le **json** décodé et le **status**.

::: tip CORS
Dans l'éditeur, activez l'option **Proxy** de `Fetch` si l'API bloque les requêtes venant du navigateur (erreurs CORS). Le proxy n'est utilisé que dans l'éditeur.
:::

Pour appeler votre propre backend, utilisez plutôt le nœud généré pour chaque [route](../../data/routes).

## Erreurs

| Nœud | Description |
|---|---|
| `Try` | Exécute la branche try. Si elle lève une erreur, exécute catch avec l'erreur. `finally` s'exécute toujours. |
| `Throw` | Lève une erreur avec un message optionnel, ce qui interrompt l'exécution. |
| `Get Message` | Renvoie le message d'une erreur. |
| `Error` | Backend uniquement : arrête une route et renvoie un code d'erreur HTTP (400, 401, 403, 404...). |

## Cookies

Nœuds backend de la bibliothèque **Misc** : `Get Cookie`, `Set Cookie` et `Clear Cookie`. Les cookies sont signés avec le **Cookie salt** défini dans **Backend Settings**.

## Navigation

`Navigate` ouvre une autre page de votre application. `Get Router` donne accès au routeur (route courante, paramètres).

## Utilitaires

| Nœud | Bibliothèque | Description |
|---|---|---|
| `Clipboard Read` / `Clipboard Write` | Utils | Lire ou écrire le presse-papiers. |
| `Hash` | Utils | Hacher une chaîne. |
| `UUID` | Utils | Générer un identifiant unique. |
| `File Download` | Utils | Faire télécharger un fichier par le navigateur. |
| `Use Now` | Reactivity | La date courante, rafraîchie à intervalle régulier. |
| `Use Date Format` | Reactivity | Une date mise en forme avec un motif, tenue à jour. |
| `Use Time Ago` | Reactivity | Une date relative (« il y a 3 minutes »), tenue à jour. |
| `Log` | Intégré | Affiche une valeur dans la console. |
| `Comment` | Intégré | Une note dans le graphe. |
