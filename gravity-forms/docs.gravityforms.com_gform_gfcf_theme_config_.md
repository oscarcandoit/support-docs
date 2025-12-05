---
url: "https://docs.gravityforms.com/gform_gfcf_theme_config/"
title: "gform_gfcf_theme_config - Gravity Forms Documentation"
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
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_gfcf\_theme\_config

- [Description](https://docs.gravityforms.com/gform_gfcf_theme_config/#h-description)
- [Usage](https://docs.gravityforms.com/gform_gfcf_theme_config/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_gfcf_theme_config/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_gfcf_theme_config/#h-examples)
- [Customize animation settings for conversational forms.](https://docs.gravityforms.com/gform_gfcf_theme_config/#h-customize-animation-settings-for-conversational-forms)
- [Placement](https://docs.gravityforms.com/gform_gfcf_theme_config/#h-placement)
- [Since](https://docs.gravityforms.com/gform_gfcf_theme_config/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_gfcf_theme_config/#h-source-code)

## Description

The `gform_gfcf_theme_config` filter can be used to modify the global JavaScript configuration object for conversational forms before it’s localized to the frontend.

## Usage

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_gfcf_theme_config'``,``'your_function_name'``, 10, 2 );` |

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$strings** | array | The global JavaScript configuration object containing animation settings, form data, and internationalization strings. |
| **$form\_id** | int | The ID of the current conversational form. |

## Examples

### Customize animation settings for conversational forms.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14 | `add_filter(``'gform_gfcf_theme_config'``,``'customize_conversational_animations'``, 10, 2 );`<br>`function``customize_conversational_animations(``$strings``,``$form_id``) {`<br>```// Modify field animation delay`<br>```$strings``[``'data'``][``'animation_settings'``][``'fields'``][``'delay'``] = 50;`<br>``<br>```// Change animation duration`<br>```$strings``[``'data'``][``'animation_settings'``][``'fields'``][``'duration'``] = 300;`<br>``<br>```// Customize welcome screen animation`<br>```$strings``[``'data'``][``'animation_settings'``][``'welcome'``][``'in_duration'``] = 800;`<br>``<br>```return``$strings``;`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Since

This filter was added in Gravity Forms Conversational Forms v1.0.0

## Source Code

This filter is located in /class-gf-conversational-forms.php.

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_gfcf_theme_config/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)