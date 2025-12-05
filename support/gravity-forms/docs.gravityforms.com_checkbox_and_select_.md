---
url: "https://docs.gravityforms.com/checkbox_and_select/"
title: "Checkbox and Select Field Type - Gravity Forms Documentation"
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

# Checkbox and Select Field Type

- [Introduction](https://docs.gravityforms.com/checkbox_and_select/#h-introduction)
- [Example](https://docs.gravityforms.com/checkbox_and_select/#h-example)
- [Uses](https://docs.gravityforms.com/checkbox_and_select/#h-uses)

## Introduction

The **checkbox\_and\_select** type field, part of the [Settings API](https://docs.gravityforms.com/settings-api), renders a checkbox which when checked will display a drop down with additional options.

## Example

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27 | `array``(`<br>```'title'``=>``'Checkbox and Select Field'``,`<br>```'fields'``=>``array``(`<br>```array``(`<br>```'name'``=>``'updateContact'``,`<br>```'label'``=> esc_html__(``'Update Contact'``,``'sometextdomain'``),`<br>```'type'``=>``'checkbox_and_select'``,`<br>```'checkbox'``=>``array``(`<br>```'name'``=>``'updateContactEnable'``,`<br>```'label'``=> esc_html__(``'Update Contact if already exists'``,``'sometextdomain'``),`<br>```),`<br>```'select'``=>``array``(`<br>```'name'``=>``'updateContactAction'``,`<br>```'choices'``=>``array``(`<br>```array``(`<br>```'label'``=> esc_html__(``'and replace existing data'``,``'sometextdomain'``),`<br>```'value'``=>``'replace'`<br>```),`<br>```array``(`<br>```'label'``=> esc_html__(``'and append new data'``,``'sometextdomain'``),`<br>```'value'``=>``'append'`<br>```)`<br>```)`<br>```)`<br>```)`<br>```)`<br>`);` |

The above code would render a field similar to the following:

![](https://docs.gravityforms.com/wp-content/uploads/2022/07/image-1-1024x214.png)

## Uses

- [settings\_checkbox\_and\_select()](https://docs.gravityforms.com/helper-functions/#settings_checkbox_and_select)
- [settings\_checkbox()](https://docs.gravityforms.com/helper-functions/#settings_checkbox)
- [settings\_select()](https://docs.gravityforms.com/helper-functions/#settings_select)

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 12, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/checkbox_and_select/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)