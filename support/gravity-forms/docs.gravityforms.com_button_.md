---
url: "https://docs.gravityforms.com/button/"
title: "Button Object - Gravity Forms Documentation"
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
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)    - [Button Object](https://docs.gravityforms.com/button/ "Button Object")
    - [Conditional Logic Object](https://docs.gravityforms.com/conditional-logic-object/ "Conditional Logic Object")
    - [Confirmations Object](https://docs.gravityforms.com/confirmations-object/ "Confirmations Object")
    - [Entry Object](https://docs.gravityforms.com/entry-object/ "Entry Object")
    - [Field Object](https://docs.gravityforms.com/field-object/ "Field Object")
    - [Form Object](https://docs.gravityforms.com/form-object/ "Form Object")
    - [Notifications Object](https://docs.gravityforms.com/notifications-object/ "Notifications Object")
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Button Object

- [Introduction](https://docs.gravityforms.com/button/#h-introduction)
- [Usage](https://docs.gravityforms.com/button/#h-usage)
- [Properties](https://docs.gravityforms.com/button/#h-properties)

## Introduction

The Button Object is an an associative array. Part of the [Form Object](https://docs.gravityforms.com/form-object/) it controls the way a form button is displayed.

## Usage

|     |
| --- |
| `// Get the submit button type.`<br>`$type``= rgars(``$form``,``'button/type'``);`<br>`// Set the submit button text.`<br>`$form``[``'button'``][``'text'``] =``'the button text'``;`<br>`// Get the previous button type.`<br>`$previous_type``= rgars(``$form``,``'lastPageButton/text'``);` |

## Properties

| Param | Type | Description |
| --- | --- | --- |
| **type** | [string](https://docs.gravityforms.com/string) | Specifies the type of button to be displayed. <br>Possible values:<br>`text` **:** Displays a standard submit button (i.e. `<input type="submit" />`)<br>`image` **:** Displays an image button (i.e. `<input type="image" />`) |
| **text** | [string](https://docs.gravityforms.com/string) | Contains the button text.<br>Only applicable when `type` is set to `text`. |
| **imageUrl** | [string](https://docs.gravityforms.com/string) | Contains the URL for the image button.<br>Only applicable when `type` is set to `image`. |
| **conditionalLogic** | [null](https://docs.gravityforms.com/null) \| [array](https://docs.gravityforms.com/array) | Only applicable to the submit button.<br>Controls when the button should be visible based on values selected on the form.<br>See [Conditional Logic Object](https://docs.gravityforms.com/conditional-logic-object/) |
| **location** | [string](https://docs.gravityforms.com/string) | Since v2.6<br>Only applicable to the submit button.<br>The button location.<br>Possible values:<br>`inline`: Positions the button on the same row as the last field. _Note: The submit button cannot be placed inline with other content on a multi-page form._<br>`bottom`: The deafult position in the form footer. |
| **width** | [string](https://docs.gravityforms.com/string) | Since v2.6<br>Only applicable to the submit button.<br>The button width.<br>Possible values:<br>`auto`: the width matches that of the button text.<br>`full`: the width expands to fill 100% of the container. |
| **layoutGridColumnSpan** | [integer](https://docs.gravityforms.com/integer) | Since v2.6<br>Only applicable to the submit button.<br>The number of layout grid columns the button spans.<br>Possible values: `3`, `6`, `9`, or `12` |

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 29, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/button/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)