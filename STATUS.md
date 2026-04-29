# Status — Refonte de la doc générée par Haiku

Suivi page par page de la réécriture / restructuration de la doc générée par IA sur la branche `doc-generated`.

## Pages FR

### Validées
- [x] `docs/fr/guide/fundamentals/data/database.md`
- [x] `docs/fr/guide/fundamentals/data/routes.md` *(hors commit IA, créée pour soutenir l'exemple de database)*
- [x] `docs/fr/guide/fundamentals/interface/components.md` *(Tooltip retiré : composant interne)*
- [x] `docs/fr/guide/fundamentals/interface/editor.md` *(sections "Indicateurs Chargement", "Partage URL", "Icônes Catégorie" virées)*
- [x] `docs/fr/guide/fundamentals/interface/styling.md` *("Mise en évidence" virée, "Propriétés à deux valeurs" tightened et mergée dans "Stylisation des Éléments")*
- [x] `docs/fr/guide/fundamentals/interface/styling/palette.md` *("Responsive strategy" → "Stratégie responsive", étoffée avec le comportement des breakpoints)*
- [x] `docs/fr/guide/fundamentals/interface/styling/quick-style-panels.md` *(page orpheline supprimée FR + EN, contenu mergé en section courte dans `styling.md`)*
- [x] `docs/fr/guide/fundamentals/interface/styling/visual-effects.md` *(section "Ombres" tightened pour matcher le style terse du reste de la page)*
- [x] `docs/fr/guide/fundamentals/logic/visual-scripting/flow-control.md` *(section Switch tightened, comparaison JS ajoutée, section "Opérations asynchrones" ajoutée, déplacée de l'introduction)*
- [x] `docs/fr/guide/fundamentals/logic/visual-scripting/introduction.md` *("Opérations asynchrones" déplacée vers flow-control, condensée en bullet d'avantage)*
- [x] `docs/fr/guide/fundamentals/logic/visual-scripting/temporal-api.md` *(restructurée : intro + table des types + table d'opérations, plus de répétition. Ajoutée à la sidebar FR)*
- [x] `docs/fr/guide/getting-started/quick-start.md` *(remplacement des instructions de téléchargement par un message "temporairement indisponible", contenu IA accepté tel quel)*
- [x] `docs/fr/guide/getting-started/sidekick-settings.md` *(70 lignes IA → 15 lignes : raccourci, popup, 3 providers, ajoutée à la sidebar FR sous "Démarrage Rapide")*
- [x] `docs/fr/guide/deployment/compilation.md` *(section "Composants et fonctionnalités des applications web générées" / `LRouterLink` virée : interne à Luna Park, useless côté user)*
- [x] `docs/fr/guide/plugins/components.md` *(section "Documentation des composants" / propriété `documentation.url` virée : interne)*
- [x] `docs/fr/guide/plugins/tokens.md` *(118 → ~40 lignes : "Qu'est-ce qu'un token", "Avantages", "Exemple guidé" et section "Utiliser les tokens" virés (déjà couverts par `styling.md` et `integrations/plugins.md`). Reste : intro courte avec lien vers styling, table des types, exemple `makePlugin` avec bloc `tokens`. TODO API shape conservé.)*
- [x] `docs/fr/guide/plugins/basics.md` *(passe complète : H1 fautif "# Personnalisation" → H2 "Format des options" avec table des args (config/internal/mode/app), prose tightened partout, exemples raccourcis (`makePlugin({...})` au lieu de réimporter à chaque bloc), Injections CSS+JS mergées en un seul exemple, Fenêtres + Templates conservées avec TODO lisibles.)*

### En cours
- [ ] —

## Screens à capturer

Tous les `SCREEN_HERE: <description>` qui restent dans les pages FR. Pour chaque entrée : capturer le screen, l'enregistrer sous le chemin proposé. Une fois tous uploadés, les `SCREEN_HERE: ...` seront remplacés par des `<DImage>`.

Les chemins sont relatifs à `docs/` (donc référencés `/assets/images/...` dans le markdown).

### `getting-started/sidekick-settings.md`
- `assets/images/getting-started/sidekick/popup.png` — popup ouverte sur l'onglet Sidekick.
- `assets/images/getting-started/sidekick/provider-config.png` — configuration d'un provider avec API Key et choix du modèle.

### `fundamentals/interface/editor.md`
- `assets/images/layout/editor/console-resize.png` — panneau de la console avec la poignée de redimensionnement visible sur sa bordure.
- `assets/images/layout/editor/immersive-mode.png` — éditeur en mode immersif avec panneaux cachés.

### `fundamentals/interface/styling.md`
- `assets/images/layout/styling/quick-style-panels.png` — quick style panels affichés à côté d'un élément sélectionné dans le layout builder.

### `fundamentals/interface/styling/visual-effects.md`
- `assets/images/fundamentals/styling/shadow-panel.png` — panneau de configuration des propriétés d'ombre dans l'éditeur.

### `fundamentals/data/database.md`
- `assets/images/data/database/panel.png` — panneau Database avec une table et ses colonnes affichées.
- `assets/images/data/database/find-node.png` — node DB Find configuré sur une table, avec ses paramètres et son ancrage de sortie.
- `assets/images/data/database/find-sql-preview.png` — aperçu SQL d'un node DB Find avec valeurs interpolées.
- `assets/images/data/database/articles-table.png` — table articles avec ses 3 colonnes et 2-3 lignes d'exemple.
- `assets/images/data/database/get-articles-graph.png` — graphe de la route get-articles avec le DB Find branché sur l'output.
- `assets/images/data/database/articles-rendered.png` — composant frontend appelant get-articles, avec la liste rendue.

### `fundamentals/data/routes.md`
- `assets/images/data/routes/panel.png` — panneau Routes avec une route get-articles et ses propriétés.
- `assets/images/data/routes/input-node.png` — node d'input d'une route avec ses ancrages headers/body/query/params.
- `assets/images/data/routes/output-node.png` — node d'output d'une route branché sur le résultat d'un DB Find.
- `assets/images/data/routes/route-call-node.png` — node get-articles auto-généré dans le graphe d'un composant frontend.

### `fundamentals/logic/visual-scripting/temporal-api.md`
- `assets/images/visual-scripting/temporal-api/menu.png` — nodes Temporal dans le menu d'insertion.
- `assets/images/visual-scripting/temporal-api/create-duration.png` — node Create Duration avec quelques unités cochées et leurs entrées.

### `plugins/tokens.md`
- `assets/images/plugins/tokens/style-panel.png` — panneau de style avec les tokens du plugin groupés.

## Traductions EN

À faire à la toute fin, une fois toutes les pages FR validées.

## Conventions retenues

- Style direct, ton tech, pas d'em-dash (`—`), pas de bloat IA.
- Placeholders screens : `SCREEN_HERE: <description>`.
- Cohérence des exemples : reprendre les noms d'entités déjà utilisés (`articles`, `score`...).

## Restructurations annexes

- Sidebar FR : section "API Plugin" renommée en "Développer un plugin" (audience explicite).
- Sidebar FR : entrée "Plugins" ajoutée sous Intégrations.
- Page `docs/fr/guide/integrations/plugins.md` créée (user-facing : c'est quoi, plugins officiels, installation avec screens, lien vers dev).
- Page `docs/fr/guide/plugins/introduction.md` recentrée 100% dev (ce qu'un plugin peut étendre, prérequis, parcours setup → basics → ...). Le contenu "Installation de plugins" + screens a été déménagé vers `integrations/plugins.md`.
- TODO EN : ajouter l'entrée "Plugins" sous Integrations dans la sidebar EN (`docs/.vitepress/config.mts`).
