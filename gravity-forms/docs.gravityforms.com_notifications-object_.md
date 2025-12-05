---
url: "https://docs.gravityforms.com/notifications-object/"
title: "Notifications Object - Gravity Forms Documentation"
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

# Notifications Object

- [Introduction](https://docs.gravityforms.com/notifications-object/#introduction)
- [Usage](https://docs.gravityforms.com/notifications-object/#usage)
- [Notification Properties](https://docs.gravityforms.com/notifications-object/#notification-properties)
- [Routing Rule Properties](https://docs.gravityforms.com/notifications-object/#routing-rule-properties)
- [Notification JSON](https://docs.gravityforms.com/notifications-object/#notification-json)

## Introduction

The Notifications object is an associative array containing the properties for all the email notifications which exist for a form. On a default installation when a new form is created a single notification, named Admin Notification, is created for the form. There is no limit to the number of additional notifications you can create.

See the [Configuring Notifications In Gravity Forms](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms) article for a tutorial showing how you can configure notifications in the admin.

|     |
| --- |
| `$form``[``'notifications'``] =``array``(`<br>```'558a90489ced3'``=>``array``(`<br>```'isActive'``=> true,`<br>```'id'``=>``'558a90489ced3'``,`<br>```'name'``=>``'Admin Notification'``,`<br>```'event'``=>``'form_submission'``,`<br>```'to'``=>``'{admin_email}'``,`<br>```'toType'``=>``'email'``,`<br>```'subject'``=>``'New submission from {form_title}'``,`<br>```'message'``=>``'{all_fields}'``,`<br>```'from'``=>``'{admin_email}'``,`<br>```'disableAutoformat'``=> false,`<br>```'enableAttachments'``=> false`<br>```),`<br>```'558a905b98b18'``=>``array``(`<br>```'isActive'``=> true,`<br>```'id'``=>``'558a905b98b18'``,`<br>```'name'``=>``'User Notification'``,`<br>```'event'``=>``'form_submission'``,`<br>```'to'``=>``'2'``,`<br>```'toType'``=>``'field'``,`<br>```'subject'``=>``'Thanks for your form submission'``,`<br>```'message'``=>``'{all_fields}'``,`<br>```'from'``=>``'{admin_email}'``,`<br>```'conditionalLogic'``=>``array``(`<br>```'actionType'``=>``'show'``,`<br>```'logicType'``=>``'all'``,`<br>```'rules'``=>``array``(`<br>```array``(`<br>```'fieldId'``=>``'3'``,`<br>```'operator'``=>``'is'``,`<br>```'value'``=>``'Email me a copy'``,`<br>```),`<br>```),`<br>```),`<br>```'disableAutoformat'``=> false,`<br>```'enableAttachments'``=> false`<br>```),`<br>`);` |

## Usage

The notifications are part of the [Form Object](https://docs.gravityforms.com/form-object) and so are most commonly accessed like so:

|     |
| --- |
| `$notifications``= rgar(``$form``,``'notifications'``);` |

## Notification Properties

| Prop | Type | Description |
| --- | --- | --- |
| **isActive** | [boolean](https://docs.gravityforms.com/boolean) | Indicates the notification status, active or inactive.<br>Default: `true` |
| **id** | [string](https://docs.gravityforms.com/string) | The notification ID. <br>A 13 character unique ID generated by the PHP [uniqid](https://www.php.net/manual/en/function.uniqid.php) function. |
| **name** | [string](https://docs.gravityforms.com/string) | The notification name. |
| **service** | [string](https://docs.gravityforms.com/string) | The name of the service to be used when sending this notification. <br>Default: `wordpress` |
| **event** | [string](https://docs.gravityforms.com/string) | The name of the event the notification should be sent on.<br>Default: `form_submission` |
| **to** | [integer](https://docs.gravityforms.com/integer) \| [string](https://docs.gravityforms.com/string) | The ID of an email field, an email address or merge tag to be used as the email to address. |
| **toType** | [string](https://docs.gravityforms.com/string) | Identifies what to use for the notification to. <br>Possible values: `email`, `field`, `routing`, or `hidden` |
| **bcc** | [string](https://docs.gravityforms.com/string) | The email or merge tags to be used as the email bcc address. |
| **subject** | [string](https://docs.gravityforms.com/string) | The email subject line.<br>Merge tags supported. |
| **message** | [string](https://docs.gravityforms.com/string) | The email body/content.<br>Merge tags supported. |
| **from** | [string](https://docs.gravityforms.com/string) | The email or merge tag to be used as the email from address. |
| **fromName** | [string](https://docs.gravityforms.com/string) | The text or merge tag to be used as the email from name. |
| **replyTo** | [string](https://docs.gravityforms.com/string) | The email or merge tags to be used as the email reply to address. |
| **routing** | [null](https://docs.gravityforms.com/null) \| [array](https://docs.gravityforms.com/array) | An indexed array containing the routing rules.<br>See [Routing Rule Properties](https://docs.gravityforms.com/notifications-object/#routing-rule-properties) properties for each rule. |
| **conditionalLogic** | [null](https://docs.gravityforms.com/null) \| [array](https://docs.gravityforms.com/array) | An associative array containing the conditional logic rules.<br>See the [Conditional Logic Object](https://docs.gravityforms.com/conditional-logic-object) for more details. |
| **disableAutoformat** | [boolean](https://docs.gravityforms.com/boolean) | Determines if the email message should be formatted so that paragraphs are automatically added for new lines.<br>Default: `false` (auto-formatting enabled) |
| **enableAttachments** | [boolean](https://docs.gravityforms.com/boolean) | Determines if files uploaded on the form should be attached to the notification email when sent. |

## Routing Rule Properties

|     |
| --- |
| `array``(`<br>```'fieldId'``=>``'3'``,`<br>```'operator'``=>``'is'``,`<br>```'value'``=>``'Email me a copy'``,`<br>```'email'``=>``'{admin_email}'``,`<br>`)` |

| Prop | Type | Description |
| --- | --- | --- |
| **fieldId** | [integer](https://docs.gravityforms.com/integer) \| [string](https://docs.gravityforms.com/string) | The target field ID. <br>The field that will have it’s value compared with `value` to determine if this rule is a match. |
| **operator** | [string](https://docs.gravityforms.com/string) | Operator to be used when evaluating this rule.<br>Possible values: `is`, `isnot`, `>`, `<`, `contains`, `starts_with`, or `ends_with`. |
| **value** | [string](https://docs.gravityforms.com/string) | The value to compare with the field specified by `fieldId`. |
| **email** | [string](https://docs.gravityforms.com/string) | The email or merge tag to be used as the email To address if this rule is a match. |

## Notification JSON

This example shows how a basic notification array would look when formatted as JSON for use by the [Gravity Forms CLI Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/wp-cli-add-on/).

|     |
| --- |
| `{`<br>```"id"``:``"5acf8e9cf2b40"``,`<br>```"to"``:``"{admin_email}"``,`<br>```"name"``:``"Admin Notification"``,`<br>```"event"``:``"form_submission"``,`<br>```"toType"``:``"email"``,`<br>```"subject"``:``"New submission from {form_title}"``,`<br>```"message"``:``"{all_fields}"`<br>`}` |

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 4, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/notifications-object/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)