---
url: "https://docs.gravityforms.com/theme-layers-view-classes/"
title: "Theme Layers View Classes - Gravity Forms Documentation"
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

# Theme Layers View Classes

- [Introduction](https://docs.gravityforms.com/theme-layers-view-classes/#h-introduction)
- [Usage](https://docs.gravityforms.com/theme-layers-view-classes/#h-usage)
- [Settings Reference](https://docs.gravityforms.com/theme-layers-view-classes/#h-settings-reference)

## Introduction

View classes are essential for modifying the markup within Gravity Forms. They require a specific structure to ensure proper handling of markup elements. To implement a View class, developers must extend the base Gravity\_Forms\\Gravity\_Forms\\Theme\_Layers\\API\\View and define the get\_markup() method.

## Usage

The `get_markup()` method needs to return a string representing the final markup to be rendered. The method can either completely replace the markup with something unique, or modify the markup with new values, depending on the developer’s needs.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `// An example of a View that adds the Form ID to the end of every Text input`<br>`public``function``get_markup(``$content``,``$form``,``$value``,``$lead_id``,``$form_id``) {`<br>```$new_content``=``$content``.``'<h3>'``.``$form_id``.``'</h3>'``;`<br>```return``$new_content``;`<br>`}` |

## Settings Reference

`get_markup()` arguments.

| Argument | Description |
| --- | --- |
| **$content** | The current markup for the field/form |
| **$object** | The field or form object being rendered |
| **$value** | The value of the field, or null if dealing with a form |
| **$lead\_id** | The lead\_id being dealt with, if applicable |
| **$form\_id** | The ID of the form being rendered |
|  |  |

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 6, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/theme-layers-view-classes/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)