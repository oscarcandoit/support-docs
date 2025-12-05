---
url: "https://docs.gravityforms.com/radio-field/"
title: "Radio Field Type - Gravity Forms Documentation"
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
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)      - [Classes](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/classes/)
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)        - [Additional Properties](https://docs.gravityforms.com/additional-properties/ "Additional Properties")
        - [Basics Of The Settings API](https://docs.gravityforms.com/settings-api-basics/ "Basics Of The Settings API")
        - [Create a Custom Field Type](https://docs.gravityforms.com/custom-field-types/ "Create a Custom Field Type")
        - [Creating a Feed Settings Page](https://docs.gravityforms.com/creating-a-feed-settings-page/ "Creating a Feed Settings Page")
        - [Creating a Plugin Settings Page](https://docs.gravityforms.com/creating-a-plugin-settings-page/ "Creating a Plugin Settings Page")
        - [Dependency](https://docs.gravityforms.com/dependency/ "Dependency")
        - [Field Properties](https://docs.gravityforms.com/field-properties/ "Field Properties")
        - [List of Settings API Field Types](https://docs.gravityforms.com/field-types/ "List of Settings API Field Types")
        - [List of Settings API Helper Functions](https://docs.gravityforms.com/settings-api-helpers/ "List of Settings API Helper Functions")
        - [Post Select Field Type](https://docs.gravityforms.com/post-select-field-type/ "Post Select Field Type")
        - [Section Properties](https://docs.gravityforms.com/section-properties/ "Section Properties")
        - [User Select Field Type](https://docs.gravityforms.com/user-select-field-type/ "User Select Field Type")
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Radio Field Type

- [Introduction](https://docs.gravityforms.com/radio-field/#h-introduction)
- [Example](https://docs.gravityforms.com/radio-field/#h-example)
- [Uses](https://docs.gravityforms.com/radio-field/#h-uses)

## Introduction

The **radio** type field, part of the [Settings API](https://docs.gravityforms.com/settings-api), renders a radio type input for each of the field choices.

## Example

The radio button has a **default\_value** of “choice2value” so the second choice will be selected. Because **horizontal** is set to true, the radio buttons will be displayed side-by-side instead of the default one per line.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26 | `array``(`<br>```'title'``=>``'Radio Field'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'type'``=>``'radio'``,`<br>```'name'``=>``'myradio'``,`<br>```'label'``=> esc_html__(``'This is the main label for the radio buttons.'``,``'sometextdomain'``),`<br>```'default_value'``=>``'choice2value'``,`<br>```'horizontal'``=> true,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'name'``=>``'choice1'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip for choice1 option.'``,``'sometextdomain'``),`<br>```'label'``=> esc_html__(``'This is the label for choice1 option.'``,``'sometextdomain'``),`<br>```'value'``=>``'choice1value'`<br>```),`<br>```array``(`<br>```'name'``=>``'choice2'``,`<br>```'tooltip'``=> esc_html__(``'This is the tooltip for choice2 option.'``,``'sometextdomain'``),`<br>```'label'``=> esc_html__(``'This is the label for choice2 option.'``,``'sometextdomain'``),`<br>```'value'``=>``'choice2value'`<br>```),`<br>```)`<br>```)`<br>```)`<br>`)` |

The code above will render the radio button field similar to the following:

![](https://docs.gravityforms.com/wp-content/uploads/2022/07/image-7-1024x194.png)

## Uses

- [settings\_radio()](https://docs.gravityforms.com/helper-functions/#settings_radio)
- [choices\_have\_icon()](https://docs.gravityforms.com/helper-functions/#choices_have_icon)
- [get\_choice\_attributes()](https://docs.gravityforms.com/helper-functions/#get_choice_attributes)

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 12, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/radio-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)