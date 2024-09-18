# Get started

Welcome to the Luna Park documentation. If you want to quickly try out the logic editor, we suggest you take a try at the [Luna Park challenge](https://luna-park.app/challenge) , a series of puzzles meant to introduce visual scripting notions in a gamified way.
## Quick Access

Here are a list of shortcuts for quick documentation access.

<QuickAccess :items="[
{ title: 'LUNA PARK', link: '/what-is-luna-park', description: 'Discover what makes Luna Park unique compared to other no-code solutions.' },
{ title: 'EDITOR', link: '/editor', description: 'Discover all the editor panels and their functionalities.' },
{ title: 'LAYOUTS', link: '/layouts', description: 'Learn how to build and use page layouts.' },
{ title: 'STYLING', link: '/styling', description: 'Learn how to style all the elements of your app.' },
{ title: 'COMPONENTS', link: '/custom-components', description: 'Learn how to build and use custom components.' },
{ title: 'VARIABLES', link: '/variables', description: 'Learn how to create and use reactive variables.' },
{ title: 'VISUAL SCRIPTING', link: '/visual-scripting-editor', description: 'Discover the visual scripting editor and its functionalities.' },
{ title: 'LOGIC FLOW', link: '/logic-flow', description: 'Learn how to create logic flows using branches, loops, etc.' },
{ title: 'EXPORT', link: '/export', description: 'Learn how to export your app to a standalone website.' }
]" /> 

<br/>

# What is Luna park?

Luna Park is a **visual scripting framework**. It's just like any famous JS framework (like React, Vue or Angular), but without code. You get all the advanced and powerful features of a traditional framework, with the simplicity and speed of a visual editor.

## How does Luna Park differ from other app builders?

Traditional no-code solutions are usually hosting companies, meaning they host your project, locking you down, and you'll pay according the bandwidth usage. Luna Park, on the other hand, is a development environment. The code output is yours, so you can host it anywhere, or distribute your compiled software, with **no strings attached**.

The other difference is that the **Luna Park layout editor** is more low-level than other no-code solutions. This means that, while being a bit less simple to learn, it allows you to do much more and have **native performance**: your app will be as performant as if it were coded by an experienced dev team.


<InfoCard
:cards="[
{
title: 'APP BUILDER',
infoPairs: [
{ label: 'Learning', value: 'A couple of hours', styleClass: 'info' },
{ label: 'Building', value: 'A few hours', styleClass: 'success' },
{ label: 'Features', value: 'Static', styleClass: 'danger' },
{ label: 'Performance', value: 'Bad', styleClass: 'danger' }
]
},
{
title: 'LAYOUT EDITOR',
infoPairs: [
{ label: 'Learning', value: 'A couple of days', styleClass: 'info' },
{ label: 'Building', value: 'A few days', styleClass: 'success' },
{ label: 'Features', value: 'Modern reactivity', styleClass: 'success' },
{ label: 'Performance', value: 'Native', styleClass: 'success' }
]
},
{
title: 'JS FRAMEWORK',
infoPairs: [
{ label: 'Learning', value: 'Several months', styleClass: 'danger' },
{ label: 'Building', value: 'A few months', styleClass: 'danger' },
{ label: 'Features', value: 'Modern reactivity', styleClass: 'success' },
{ label: 'Performance', value: 'Native', styleClass: 'success' }
]
}
]"
/>

## How does visual scripting differ from other no-code logic?

The **Luna Park visual scripting engine** allows you to build any kind of logic possible in code, with native performance. Period. There's no limit to complexity, nor any slow-down introduce by other no-code logic builder.

Technically speaking, the logic your build with the visual scripting editor is compiled to **actual JS code**, as each node is equivalent to a line of code. In production, it is not read by a heavy interpreter as other tools do, making it extremely small and performant.

<InfoCard
:cards="[
{
title: 'NO-CODE',
infoPairs: [
{ label: 'Learning', value: 'A couple of hours' },
{ label: 'Building', value: 'A few hours' },
{ label: 'Freedom', value: 'Specific use-cases', styleClass: 'danger' },
{ label: 'Performance', value: 'Bad', styleClass: 'danger' }
]
},
{
title: 'VISUAL SCRIPTING',
infoPairs: [
{ label: 'Learning', value: 'A couple of days' },
{ label: 'Building', value: 'A few days' },
{ label: 'Freedom', value: 'Almost everything', styleClass: 'success' },
{ label: 'Performance', value: 'Native', styleClass: 'success' }
]
},
{
title: 'CODE',
infoPairs: [
{ label: 'Learning', value: 'Several months', styleClass: 'danger' },
{ label: 'Building', value: 'A few months', styleClass: 'danger' },
{ label: 'Freedom', value: 'Everything', styleClass: 'success' },
{ label: 'Performance', value: 'Native', styleClass: 'success' }
]
}
]"
/>