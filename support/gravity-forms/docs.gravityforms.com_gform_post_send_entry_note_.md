---
url: "https://docs.gravityforms.com/gform_post_send_entry_note/"
title: "gform_post_send_entry_note - Gravity Forms Documentation"
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
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)      - [Add-On Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/addon-framework-actions/)
      - [Confirmations Actions](https://docs.gravityforms.com/category/developers/hooks/actions/confirmations-actions/)
      - [Editor Actions](https://docs.gravityforms.com/category/developers/hooks/actions/editor-actions/)
      - [Email Actions](https://docs.gravityforms.com/category/developers/hooks/actions/email-actions/)
      - [Entry Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-actions/)        - [gform\_update\_status](https://docs.gravityforms.com/gform_update_status-dynamic/ "gform_update_status")
        - [gform\_delete\_entry](https://docs.gravityforms.com/gform_delete_entry/ "gform_delete_entry")
        - [gform\_post\_send\_entry\_note](https://docs.gravityforms.com/gform_post_send_entry_note/ "gform_post_send_entry_note")
        - [gform\_update\_PROPERTY\_NAME](https://docs.gravityforms.com/gform_update_status/ "gform_update_PROPERTY_NAME")
        - [gform\_entries\_column](https://docs.gravityforms.com/gform_entries_column/ "gform_entries_column")
        - [gform\_after\_update\_entry](https://docs.gravityforms.com/gform_after_update_entry/ "gform_after_update_entry")
      - [Entry Change Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-change-actions/)
      - [Entry Detail Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-detail-actions/)
      - [Entry List Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-list-actions/)
      - [Entry Printing Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-printing-actions/)
      - [Field Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-framework-actions/)
      - [Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-actions/)
      - [Gravity Forms Core Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-core-actions/)
      - [Gravity Forms Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-settings-actions/)
      - [Form Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-actions/)
      - [Form Activity Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-activity-actions/)
      - [Form Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-settings-actions/)
      - [Import/Export Actions](https://docs.gravityforms.com/category/developers/hooks/actions/importexport-actions/)
      - [Notifications Actions](https://docs.gravityforms.com/category/developers/hooks/actions/notifications-actions/)
      - [Payment Actions](https://docs.gravityforms.com/category/developers/hooks/actions/payment-actions/)
      - [Post Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/post-fields-actions/)
      - [Script/Style Actions](https://docs.gravityforms.com/category/developers/hooks/actions/scriptstyle-actions/)
      - [Submission Actions](https://docs.gravityforms.com/category/developers/hooks/actions/submission-actions/)
      - [System Status Actions](https://docs.gravityforms.com/category/developers/hooks/actions/system-status-actions/)
    - [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)
    - [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
    - [Deprecated](https://docs.gravityforms.com/category/developers/hooks/deprecated/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_post\_send\_entry\_note

- [Description](https://docs.gravityforms.com/gform_post_send_entry_note/#h-description)
- [Usage](https://docs.gravityforms.com/gform_post_send_entry_note/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_post_send_entry_note/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_post_send_entry_note/#h-examples)
- [Source Code](https://docs.gravityforms.com/gform_post_send_entry_note/#h-source-code)

## Description

The “gform\_post\_send\_entry\_note” action is triggered after an entry note is emailed, allowing further actions to be performed.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_send_entry_note'``,``'my_function'``, 10, 7 );` |

## Parameters

- **$result** [string](https://docs.gravityforms.com/string)
The success or failure message, based on if the email was sent successfully or not.

- **$email\_to** [string](https://docs.gravityforms.com/string)

The address that the email was sent to.

- **$email\_from** [string](https://docs.gravityforms.com/string)

The email address that the email was sent from.

- **$email\_subject** [string](https://docs.gravityforms.com/string)

The subject of the email sent.

- **$body** [Mixed](https://docs.gravityforms.com/mixed)

The body of the email sent.

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The current form object.

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The current entry object.


## Examples

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `function``my_function() {`<br>```//Do something here`<br>`}`<br>`add_action(``'gform_post_send_entry_note'``,``'my_function'``, 10, 7 );` |

## Source Code

This action hook is located in _entry\_detail.php_.

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 13, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_post_send_entry_note/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)