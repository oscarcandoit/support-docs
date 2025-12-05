---
url: "https://docs.gravityforms.com/theme-layers-json-api/"
title: "Theme Layers JSON API - Gravity Forms Documentation"
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
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)    - [Theme Layers APIs](https://docs.gravityforms.com/category/developers/theme-framework/theme-layers-apis/)      - [Theme Layers Fluent API](https://docs.gravityforms.com/theme-layers-fluent-api/ "Theme Layers Fluent API")
      - [Theme Layers JSON API](https://docs.gravityforms.com/theme-layers-json-api/ "Theme Layers JSON API")
      - [Theme Layers View Classes](https://docs.gravityforms.com/theme-layers-view-classes/ "Theme Layers View Classes")
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

# Theme Layers JSON API

- [Introduction](https://docs.gravityforms.com/theme-layers-json-api/#h-introduction)
- [Usage](https://docs.gravityforms.com/theme-layers-json-api/#h-usage)

## Introduction

The JSON API allows developers to define Gravity Forms styles using **theme.json**. By adding a **gravityforms** section to the file, you can easily configure various styling options for forms directly in JSON.

When the theme.json is parsed, the system will grab its defined values and use them for the Theme Layer. This allows a much more streamlined process for registering a Theme Layer without the need for any actual coding.

## Usage

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26 | `{`<br>```"version"``: 2,`<br>```"settings"``: {`<br>```"appearanceTools"``:``false``,`<br>```...more theme-related settings,`<br>```"gravityforms"``: {`<br>```"settings"``: [`<br>```{`<br>```"name"``:``"enable"``,`<br>```"label"``:``"Enable Conversational Forms"``,`<br>```"type"``:``"toggle"``,`<br>```},`<br>```...more settings fields,`<br>```],`<br>```"styles"``: [`<br>```{`<br>```"name"``:``"conversational_forms_styles"``,`<br>```"url"``:``"https://gravity.local/assets/css/conversational/styles.css"``,`<br>```"condition"``: {`<br>```"source"``:``"enable"``,`<br>```"value"``:``true``,`<br>```}`<br>```},`<br>```...more styles`<br>```]`<br>```}` |

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 6, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/theme-layers-json-api/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)