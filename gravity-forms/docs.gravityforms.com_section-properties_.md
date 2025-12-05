---
url: "https://docs.gravityforms.com/section-properties/"
title: "Section Properties - Gravity Forms Documentation"
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

# Section Properties

- [Introduction](https://docs.gravityforms.com/section-properties/#h-introduction)
- [Examples](https://docs.gravityforms.com/section-properties/#h-examples)
- [Resources](https://docs.gravityforms.com/section-properties/#h-resources)

## Introduction

The `plugin_settings_fields()` and `feed_setting_fields()` functions expect an array of sections to be returned. Each section is configured with an array containing the following properties:

| Property | Type | Description |
| --- | --- | --- |
| title | [string](https://docs.gravityforms.com/string/) | The section title. |
| description | [string](https://docs.gravityforms.com/string/) | The section description. |
| id | [string](https://docs.gravityforms.com/string/) | The value of the id attribute of the div element containing this section. |
| class | [string](https://docs.gravityforms.com/string/) | The value to be appended to the class attribute of the div element containing this section. |
| style | [string](https://docs.gravityforms.com/string/) | The value to be appended to the style attribute of the div element containing this section. |
| tooltip | [string](https://docs.gravityforms.com/string/) | The content to be included in the tooltip for this section. |
| tooltip\_class | [string](https://docs.gravityforms.com/string/) | The tooltip class; the value to be appended to the class attribute of the element containing this sections tooltip. |
| dependency | [string](https://docs.gravityforms.com/string/) \| [array](https://docs.gravityforms.com/array/) | See Dependency below. |
| fields | [array](https://docs.gravityforms.com/array/) | The section fields; see Field Properties below. |

## Examples

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12 | `array``(`<br>```array``(`<br>```'title'``=>``'This is the title for Section 1'``,`<br>```'description'``=>``'This is a description of the purpose of Section 1'``,`<br>```'fields'``=>``array``()`<br>```),`<br>```array``(`<br>```'title'``=>``'This is the title for Section 2'``,`<br>```'description'``=>``'This is a description of the purpose of Section 2'``,`<br>```'fields'``=>``array``()`<br>```),`<br>`);` |

## Resources

- ### [Additional Properties](https://docs.gravityforms.com/additional-properties/)

- ### [Basics Of The Settings API](https://docs.gravityforms.com/settings-api-basics/)

- ### [Creating a Feed Settings Page](https://docs.gravityforms.com/creating-a-feed-settings-page/)

- ### [Creating a Plugin Settings Page](https://docs.gravityforms.com/creating-a-plugin-settings-page/)

- ### [Dependency](https://docs.gravityforms.com/dependency/)

- ### [Field Properties](https://docs.gravityforms.com/field-properties/)

- ### [Section Properties](https://docs.gravityforms.com/section-properties/)


- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/section-properties/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)