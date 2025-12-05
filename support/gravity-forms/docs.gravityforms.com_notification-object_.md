---
url: "https://docs.gravityforms.com/notification-object/"
title: "Notification (deprecated) - Gravity Forms Documentation"
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

# Notification (deprecated)

- [Introduction](https://docs.gravityforms.com/notification-object/#h-introduction)
- [Usage](https://docs.gravityforms.com/notification-object/#h-usage)
- [Properties](https://docs.gravityforms.com/notification-object/#h-properties)

## Introduction

The Notification object contains the settings for the administrator’s notification, such as destination email address, email subject and body. It is defined as an associative array. For more details on managing your notifications, see the [Notifications](https://docs.gravityforms.com/getting-started/notifications/) page.

This article relates to the Notification object used in Gravity Forms 1.6 and earlier. The [Notifications Object](https://docs.gravityforms.com/notifications-object) was introduced in Gravity Forms 1.7.

## Usage

|     |     |
| --- | --- |
| 1<br>2 | `$form``[&quot;notification&quot;][&quot;bcc&quot;];``//returns the BCC email address`<br>`$form``[&quot;notification&quot;][&quot;subject&quot;];``//returns the email subject` |

## Properties

- **to** [string](https://docs.gravityforms.com/string)
Contains the notification destination email address(es). For multiple emails, separate them with a comma (,) (i.e. email1@test.com, email2@test.com).

- **from** [string](https://docs.gravityforms.com/string)

If specified, forces the email to be sent from this address. If not specified, the email address configured in WordPress will be used.

- **fromField** [string](https://docs.gravityforms.com/string)

Id of an email field on the form whose value should be used as the from address.

- **replyTo** [string](https://docs.gravityforms.com/string)

Contains the email address to be used as the reply to email address.

- **replyToField** [string](https://docs.gravityforms.com/string)

Id of an email field on the form whose value should be used as the reply to email address.

- **bcc** [string](https://docs.gravityforms.com/string)

Contains the email address to be used as the bcc email address.

- **subject** [string](https://docs.gravityforms.com/string)

Contains the subject of the email.

- **message** [string](https://docs.gravityforms.com/string)

Contains the body/content of the email.

- **disableAutoformat** [boolean](https://docs.gravityforms.com/boolean)

Determines if the email message should be formatted so that paragraphs are automatically added for new lines. 1 disables auto-formatting, 0 enables auto-formatting.

- **routing** [array](https://docs.gravityforms.com/array)

Allows notifications to be routed to different email addresses based on field values entered on the form. This array contains multiple routing rules. Each rule is evaluated separately and the notification will be sent to all rules that match.





|     |     |
| --- | --- |
| 1 | `$form``[&quot;notification&quot;][&quot;routing&quot;][0][&quot;email&quot;];``//returns the email of the first routing rule` |





Following are the properties or each routing rule
  - **fieldId** [integer](https://docs.gravityforms.com/integer)
    Target field Id. Field that will have it’s value compared with the _value_ property to determine if this rule is a match

  - **operator** [string](https://docs.gravityforms.com/string)

    Operator to be used when evaluating this rule.

    _Possible values:_ is, isnot
    - **is:** Evaluates this rule to **true** when the _value_ property is **equal** to the value of field specified by _fieldId_.
    - **isnot:** Evaluates this rule to **true** when the _value_ property is **not equal** to the value of field specified by _fieldId_.
  - **value** [string](https://docs.gravityforms.com/string)
    The value to compare with the field specified by _fieldId_

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 11, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/notification-object/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)