---
url: "https://docs.gravityforms.com/css-api/"
title: "CSS API - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)    - [Theme Layers APIs](https://docs.gravityforms.com/category/developers/theme-framework/theme-layers-apis/)
    - [Theme Framework Introduction](https://docs.gravityforms.com/theme-framework-introduction/ "Theme Framework Introduction")
    - [Quick Start Guide](https://docs.gravityforms.com/quick-start-guide/ "Quick Start Guide")
    - [Core Concepts](https://docs.gravityforms.com/theme-framework/ "Core Concepts")
    - [CSS API](https://docs.gravityforms.com/css-api/ "CSS API")
    - [Theme Layers](https://docs.gravityforms.com/theme-layers/ "Theme Layers")
    - [Theme Framework Frequently Asked Questions](https://docs.gravityforms.com/theme-framework-faq/ "Theme Framework Frequently Asked Questions")
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# CSS API

- [Introduction](https://docs.gravityforms.com/css-api/#h-introduction)
- [CSS API](https://docs.gravityforms.com/css-api/#h-css-api)
- [Global CSS API](https://docs.gravityforms.com/css-api/#h-global-css-api)
- [Local CSS API](https://docs.gravityforms.com/css-api/#h-local-css-api)

## Introduction

The CSS API is a set of native CSS custom properties that can be shared across the Gravity Forms Ecosystem.

The Orbital form theme is the default implementation of the Gravity Forms Theme Framework. It can be customized and extended through various methods: code, block settings, WordPress Full Site Editing, Global Styles, stylesheets, and inline styles.

We will be providing much more extensive documentation for the CSS API in the near future to share what is available, how to work with it, and additional examples. So stay tuned!

## CSS API

The CSS API itself consists of a set of globally- and locally-scoped custom properties. These can be overridden and customized wherever needed as long as they are scoped to the right selector where they were created. If you are new to CSS custom properties you can [read](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) [about](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) [them](https://css-tricks.com/a-complete-guide-to-custom-properties/)!

Our approach is to favor the global scope as much as possible. You can think of the API has having two primary layers:

### Global CSS API

Custom properties globally-scoped to the applicable form wrapper class (`gform-theme--foundation` or `gform-theme--framework`). These are properties that need to be available and used across the entire framework. They are the primary and recommended focus whether you want to customize a theme programmatically or via settings by overriding some of these properties. They provide the simplest path to do so without having to worry about writing out a pile of CSS and tracking down specific selectors to be at the right scope. Their default value is set to implement the Orbital form theme.

The syntax and structure for the global custom property names are as follows:

`--gf-{area of focus; top level directory if not in /api/ (control, field, form, etc.)}-{css property name}-{state}`

Which works like this in practice:

`--gf-color-primary`

`--gf-control-bg-color-focus`

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `.gform-theme--framework {`<br>```--gf-ctrl-bg-``color``: var(--gf-color-in-ctrl);`<br>```--gf-ctrl-radius: var(--gf-radius);`<br>```--gf-ctrl-shadow: var(--gform-theme-box-shadow-sm);`<br>```--gf-ctrl-``color``: var(--gf-color-in-ctrl-contrast);`<br>`}` |

### Local CSS API

Custom properties locally-scoped to the relevant elements. These apply to more specific selectors such as a control type or form field type and are based on CSS properties themselves. This allows for a more granular, but shared level of local control across selectors. Their default value is set to use the appropriate global CSS API custom property.

The syntax and structure for the local custom property names are as follows:

`--gf-local-{css property name}-{state}`

Which works like this in practice:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19 | `.gform-theme--framework .gform-theme-field-control {`<br>```/* Local CSS API – which uses the global properties */`<br>```--gf-local-bg-``color``: var(--gf-ctrl-bg-color);`<br>```--gf-local-radius: var(--gf-ctrl-radius);`<br>```--gf-local-shadow: var(--gf-ctrl-shadow);`<br>```--gf-local-``color``: var(--gf-ctrl-color);`<br>```/* Styles – which use the local properties */`<br>```background-color``: var(--gf-local-bg-color);`<br>```border-radius``: var(--gf-local-radius);`<br>```box-shadow``: var(--gf-local-shadow);`<br>```color``: var(--gf-local-color);`<br>`}`<br>`.gform-theme--framework .gform-theme-field-control:hover {`<br>```/* Local CSS API Overrides – which once again use different state based global properties */`<br>```--gf-local-bg-``color``: var(--gf-ctrl-bg-color-hover);`<br>```--gf-local-``color``: var(--gf-ctrl-color-hover);`<br>`}` |

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 6, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/css-api/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)