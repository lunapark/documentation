---
description: "Déboguez vos scripts visuels dans Luna Park avec les points d'arrêt, l'exécution pas à pas, l'inspection des valeurs et la console."
---

<script setup lang="ts">
import SteppingVideo from '/assets/images/visual-scripting/debugging/stepping.webm';
import ToggleBreakpoint from '/assets/images/visual-scripting/debugging/toggle-breakpoint.png';
import Breakpoint from '/assets/images/visual-scripting/debugging/breakpoint.png';
import Paused from '/assets/images/visual-scripting/debugging/paused.png';
import StepInto from '/assets/images/visual-scripting/debugging/step-into.png';
import Console from '/assets/images/visual-scripting/debugging/console.png';
import {LogicType} from "@luna-park/logicnodes";
import {faBug, faEye, faPlay, faArrowRight, faArrowDownToLine, faArrowUpFromLine, faCrosshairs, faStop} from "@fortawesome/pro-solid-svg-icons";
</script>

# Débogage

Luna Park exécute votre logique directement dans l'éditeur. Mettez-la en pause sur un nœud avec un **point d'arrêt**, exécutez-la nœud par nœud et vérifiez les valeurs qu'elle transporte.

## Points d'arrêt

Faites un clic droit sur un nœud et choisissez <LIcon :icon="faBug" /> **Toggle breakpoint**. Seuls les nœuds avec une entrée d'exécution (<DSchemaType :schema="LogicType.exec()" />) peuvent porter un point d'arrêt.

<DImage
:src="ToggleBreakpoint" :width="1280" :height="720"
alt="Menu contextuel d'un nœud avec l'option Toggle breakpoint"
/>

Un badge rouge <LIcon :icon="faBug" /> marque le nœud. Cliquez sur le badge pour retirer le point d'arrêt.

<DImage
:src="Breakpoint" :width="1280" :height="720"
alt="Nœud de fonction avec un badge de point d'arrêt dans son coin supérieur gauche"
/>

Les points d'arrêt ne sont pas enregistrés avec le projet : ils disparaissent quand vous rechargez l'éditeur.

## Mettre l'exécution en pause

Lancez votre application comme d'habitude, dans le panneau **Preview** par exemple. Quand l'exécution atteint un nœud avec un point d'arrêt, elle se met en pause **avant** d'exécuter le nœud : l'éditeur ouvre la logique qui contient le nœud, l'encadre, et affiche la barre de débogage en bas de l'éditeur de logique, avec le nom du nœud en pause.

<DImage
:src="Paused" :width="1280" :height="720"
alt="Exécution en pause sur un nœud de fonction, avec la barre de débogage en bas de l'éditeur de logique"
/>

| Bouton | Action |
|---|---|
| <LIcon :icon="faPlay" /> **Continue** | Reprendre jusqu'au prochain point d'arrêt. |
| <LIcon :icon="faArrowRight" /> **Step** | S'arrêter sur le nœud suivant de la logique courante. Un appel de fonction s'exécute en entier. |
| <LIcon :icon="faArrowDownToLine" /> **Step into function** | S'arrêter sur le nœud suivant, à l'intérieur de la fonction appelée si le nœud en pause est un appel de fonction. |
| <LIcon :icon="faArrowUpFromLine" /> **Exit function** | Exécuter le reste de la fonction courante, et s'arrêter sur le nœud qui suit l'appel. |
| <LIcon :icon="faCrosshairs" /> **Show paused node** | Revenir au nœud en pause après avoir navigué ailleurs. |
| <LIcon :icon="faStop" /> **Stop** | Arrêter l'exécution. Le reste du flux ne s'exécute pas. |

<DImage
:src="StepInto" :width="1280" :height="720"
alt="Exécution en pause sur le premier nœud de la fonction appelée"
/>

<DImage
  :src="SteppingVideo" :width="1280" :height="720"
  alt="Le clic sur le bouton s'arrête sur le point d'arrêt, puis Step into function et Continue"
/>

Quand plusieurs flux atteignent un point d'arrêt en même temps, ils se mettent en pause l'un après l'autre.

## Inspecter les valeurs

Appuyez sur `Ctrl + Espace` (ou `Ctrl + Q`), ou cliquez sur le bouton <LIcon :icon="faEye" /> de l'éditeur de logique, pour afficher les valeurs des ancrages. Voir [Inspection du graphe](./graph#inspection-du-graphe).

## Afficher dans la console

Le nœud **Log** affiche une valeur dans la [console](../workspace/editor#la-console) en bas de l'éditeur, et dans la console de votre navigateur. Les logs permettent de suivre des valeurs sur plusieurs exécutions sans mettre en pause.

<DImage
:src="Console" :width="1280" :height="720"
alt="Nœud Log et la console affichant son message"
/>

## Arrêter une logique qui s'emballe

- Pendant l'exécution, l'indicateur **Computing** apparaît en bas de la vue principale. Cliquez sur son bouton <LIcon :icon="faStop" /> pour arrêter tous les flux en cours. La console indique le nœud où l'exécution s'est arrêtée.
- Le flag de session **Stack Limit** arrête un flux après trop d'exécutions de nœuds sans pause, ce qui signale généralement une boucle infinie. Il est activé par défaut. Les flags de session sont dans le menu **Flags** de la [barre supérieure](../workspace/editor#la-barre-superieure).
- Le flag de session **Animation** ralentit l'exécution et anime les fils, pour suivre le flux à l'œil.
