<script setup>
import { faCalendar, faClock, faHourglassEnd } from '@fortawesome/pro-solid-svg-icons'
</script>

# Temporal API

La **Temporal API** fournit un ensemble de `nodes` pour manipuler les dates et heures avec précision. Elle remplace l'approche traditionnelle de JavaScript `Date` en offrant des types distincts pour les dates, les heures et les durées, sans les complications liées aux fuseaux horaires ou à l'implémentation.

## Utiliser les nodes Temporal

Les `nodes` Temporal s'intègrent dans votre logique visuelle comme n'importe quel autre `node`. Vous pouvez les combiner pour construire des opérations complexes de gestion du temps.

- <LIcon :icon="faCalendar" /> **PlainDate** - Représente une date spécifique (année, mois, jour) sans heure ni fuseau horaire.
- <LIcon :icon="faClock" /> **PlainTime** - Représente une heure spécifique (heures, minutes, secondes, millisecondes) sans date ni fuseau horaire.
- <LIcon :icon="faCalendar" /> **PlainDateTime** - Combine une date et une heure en une seule valeur, sans fuseau horaire.
- <LIcon :icon="faHourglassEnd" /> **Duration** - Représente une période de temps (années, mois, semaines, jours, heures, minutes, secondes).

## PlainDate

Le `node` **PlainDate** crée ou manipule une date. Vous pouvez l'utiliser pour stocker des dates dans votre `store` ou les transmettre à d'autres parties de votre application.

Les opérations courantes incluent :

- Créer une date à partir d'une année, un mois et un jour.
- Ajouter ou soustraire une durée à une date.
- Comparer deux dates.
- Accéder aux composants d'une date (jour de la semaine, numéro de la semaine, etc.).

## PlainTime

Le `node` **PlainTime** représente une heure sans date. Utilisez-le pour stocker des horaires, des heures d'ouverture ou des délais.

Les opérations courantes incluent :

- Créer une heure à partir d'heures, minutes, secondes.
- Ajouter ou soustraire une durée.
- Comparer deux heures.
- Accéder aux composants d'une heure (heure, minute, seconde).

## PlainDateTime

Le `node` **PlainDateTime** combine une date et une heure. Utilisez-le lorsque vous avez besoin d'une valeur de date et d'heure complète, mais sans fuseau horaire.

Les opérations courantes incluent :

- Créer une date-heure à partir d'une date et d'une heure.
- Ajouter ou soustraire une durée.
- Comparer deux dates-heures.
- Diviser une date-heure en ses composants date et heure.

## Duration

Le `node` **Duration** représente une période de temps. Utilisez-le pour exprimer des intervalles, calculer les différences entre dates, ou ajouter du temps aux valeurs Temporal.

Les opérations courantes incluent :

- Créer une durée à partir de différentes unités (jours, heures, minutes, secondes).
- Ajouter une durée à une date, heure ou date-heure.
- Calculer la différence entre deux dates ou heures.
- Accéder aux composants d'une durée (jours, heures, minutes).