Themes
Themes affect the visual appearance of pages by specifying colors and fonts, or by augmenting default styles. Framework includes several built-in themes, but you can also design your own themes by specifying a custom stylesheet.

The theme is typically set via the theme config option, such as:


theme: "cotton"
You can also apply a theme to an individual page via the front matter:

```md
---
theme: [glacier, slate]
---
```

Here is an overview of the available themes.

## Light mode
The built-in light-mode color themes are:

air (default)
cotton
glacier
parchment




## Dark mode
The built-in dark-mode color themes are:

coffee
deep-space
ink
midnight
near-midnight (default)
ocean-floor
slate
stark
sun-faded









## Auto mode
When both a light and a dark mode theme are specified, theme styles are applied selectively based on the user’s preferred color scheme. This is implemented via prefers-color-scheme and typically relies on the user’s operating system settings.

On macOS, you can create a menubar shortcut to quickly toggle between light and dark mode. This is useful for testing.
Designing charts that work well in both light and dark mode can be challenging. If you’d prefer to design for only one mode, set the theme explicitly to light or dark.

## Modifiers
Theme modifiers are intended to compose with the above color themes. They are:

alt - swap the page and card background colors
wide - make the main column full-width

The alt theme swaps the page and card background colors. This brings cards to the foreground and is recommended for dashboards.

The wide theme removes the maximum width constraint of the main column, which is normally 1440 pixels, allowing it to span the full width of the page. This is recommended for dashboards and is typically combined with the alt theme modifier and toc: false to disable the table of contents.


The dashboard theme alias composes the default light and dark themes (air and near-midnight) with the alt and wide modifiers. On its own, dashboard is equivalent to [light, dark, alt, wide].


## Aliases
In addition to themes and theme modifiers, there are special aliases:

default - either light or dark depending on user preference
dashboard - [light, dark] if needed, plus alt and wide
light - an alias for air
dark - an alias for near-midnight

On its own, default is equivalent to [light, dark] (or [air, near-midnight]). The default theme is applied by default if you don’t specify any color theme. You can also use default to combine a specific light or dark theme with the default theme of the opposing mode; for example [cotton, default] is equivalent to [cotton, dark], and [coffee, default] is equivalent to [coffee, light].

## Colors
The following custom properties are defined by the current theme:

| Name | Color | Description |
|------|-------|-------------|
| --theme-foreground | | page foreground color |
| --theme-background | | page background color |
| --theme-background-alt | | block background color |
| --theme-foreground-alt | | heading foreground color |
| --theme-foreground-muted | | secondary text foreground color |
| --theme-foreground-faint | | faint border color |
| --theme-foreground-fainter | | fainter border color |
| --theme-foreground-faintest | | faintest border color |
| --theme-foreground-focus | | emphasis foreground color |

You can use these properties anywhere you like. For example, to style a line chart to match the focus color:

60
70
80
90
100
110
120
130
140
150
160
170
180
190
2014 2015 2016 2017 2018

Plot.lineY(aapl, {x: "Date", y: "Close", stroke: "var(--theme-foreground-focus)"}).plot()
A handful of color classes are also provided:

I am red text.

<div class="red">I am red text.</div>
I am yellow text.

<div class="yellow">I am yellow text.</div>
I am green text.

<div class="green">I am green text.</div>
I am blue text.

<div class="blue">I am blue text.</div>
I am muted text.

<div class="muted">I am muted text.</div>

