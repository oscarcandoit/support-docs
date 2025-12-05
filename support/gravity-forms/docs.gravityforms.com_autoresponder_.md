---
url: "https://docs.gravityforms.com/autoresponder/"
title: "Autoresponder (deprecated) - Gravity Forms Documentation"
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

# Autoresponder (deprecated)

- [Introduction](https://docs.gravityforms.com/autoresponder/#h-introduction)
- [Usage](https://docs.gravityforms.com/autoresponder/#h-usage)
- [Properties](https://docs.gravityforms.com/autoresponder/#h-properties)

## Introduction

The AutoResponder object contains the settings for the user’s notification, such as destination email field, email subject and body. It is defined as an associative array.

The AutoResponder object is deprecated as of Gravity Forms 1.7. It is replaced by the [Notifications Object](https://docs.gravityforms.com/notifications-object).

## Usage

|     |     |
| --- | --- |
| 1<br>2 | `$form``[``'autoResponder'``][``'bcc'``];``//returns the BCC email address`<br>`$form``[``'autoResponder'``][``'subjec'``];``//returns the email subject` |

## Properties

- **toField** [string](https://docs.gravityforms.com/string)
Id of an email field on the form whose value should be used as the destination email address.

- **from** [string](https://docs.gravityforms.com/string)

If specified, forces the email to be sent from this address. If not specified, the email address configured in WordPress will be used.

- **replyTo** [string](https://docs.gravityforms.com/string)

Contains the email address to be used as the reply to email address.

- **bcc** [string](https://docs.gravityforms.com/string)

Contains the email address to be used as the bcc email address.

- **subject** [string](https://docs.gravityforms.com/string)

Contains the subject of the email.

- **message** [string](https://docs.gravityforms.com/string)

Contains the body/content of the email.

- **disableAutoformat** [boolean](https://docs.gravityforms.com/boolean)

Determines if the email message should be formatted so that paragraphs are automatically added for new lines. 1 disables auto-formatting, 0 enables auto-formatting


- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 12, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/autoresponder/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)