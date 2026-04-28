<script setup>
import { faCalendar, faClock, faHourglassEnd } from '@fortawesome/pro-solid-svg-icons'
</script>

# Temporal API

The **Temporal API** provides a set of `nodes` to manipulate dates and times with precision. It replaces the traditional JavaScript `Date` approach by offering distinct types for dates, times, and durations, without the complications related to time zones or implementation.

## Using Temporal nodes

Temporal `nodes` integrate into your visual logic like any other `node`. You can combine them to build complex time management operations.

- <LIcon :icon="faCalendar" /> **PlainDate** - Represents a specific date (year, month, day) without time or time zone.
- <LIcon :icon="faClock" /> **PlainTime** - Represents a specific time (hours, minutes, seconds, milliseconds) without date or time zone.
- <LIcon :icon="faCalendar" /> **PlainDateTime** - Combines a date and time into a single value, without time zone.
- <LIcon :icon="faHourglassEnd" /> **Duration** - Represents a period of time (years, months, weeks, days, hours, minutes, seconds).

## PlainDate

The **PlainDate** `node` creates or manipulates a date. You can use it to store dates in your `store` or pass them to other parts of your application.

Common operations include:

- Create a date from a year, month, and day.
- Add or subtract a duration from a date.
- Compare two dates.
- Access date components (day of the week, week number, etc.).

## PlainTime

The **PlainTime** `node` represents a time without a date. Use it to store schedules, opening hours, or time limits.

Common operations include:

- Create a time from hours, minutes, seconds.
- Add or subtract a duration.
- Compare two times.
- Access time components (hour, minute, second).

## PlainDateTime

The **PlainDateTime** `node` combines a date and time. Use it when you need a complete date and time value, but without a time zone.

Common operations include:

- Create a date-time from a date and time.
- Add or subtract a duration.
- Compare two date-times.
- Split a date-time into its date and time components.

## Duration

The **Duration** `node` represents a period of time. Use it to express intervals, calculate differences between dates, or add time to Temporal values.

Common operations include:

- Create a duration from different units (days, hours, minutes, seconds).
- Add a duration to a date, time, or date-time.
- Calculate the difference between two dates or times.
- Access duration components (days, hours, minutes).