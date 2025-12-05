---
url: "https://docs.gravityforms.com/gform_post_update_entry/"
title: "gform_post_update_entry - Gravity Forms Documentation"
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
      - [Entry Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-actions/)
      - [Entry Change Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-change-actions/)        - [gform\_post\_update\_entry\_property](https://docs.gravityforms.com/gform_post_update_entry_property/ "gform_post_update_entry_property")
        - [gform\_pre\_note\_deleted](https://docs.gravityforms.com/gform_pre_note_deleted/ "gform_pre_note_deleted")
        - [gform\_post\_note\_added](https://docs.gravityforms.com/gform_post_note_added/ "gform_post_note_added")
        - [gform\_delete\_entries](https://docs.gravityforms.com/gform_delete_entries/ "gform_delete_entries")
        - [gform\_post\_add\_entry](https://docs.gravityforms.com/gform_post_add_entry/ "gform_post_add_entry")
        - [gform\_post\_update\_entry](https://docs.gravityforms.com/gform_post_update_entry/ "gform_post_update_entry")
        - [gform\_entry\_created](https://docs.gravityforms.com/gform_entry_created/ "gform_entry_created")
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

# gform\_post\_update\_entry

- [Description](https://docs.gravityforms.com/gform_post_update_entry/#h-description)
- [Usage](https://docs.gravityforms.com/gform_post_update_entry/#h-usage)
- [Example](https://docs.gravityforms.com/gform_post_update_entry/#h-example)
- [Source Code](https://docs.gravityforms.com/gform_post_update_entry/#h-source-code)

## Description

This hook fires after the entry has been updated via [GFAPI::update\_entry()](https://www.gravityhelp.com/documentation/article/api-functions/#update_entry).

## Usage

The following would run for any form:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_update_entry'``,``'your_function_name'``, 10, 2 );` |

To target a specific form append the form id to the hook name. (format: gform\_post\_update\_entry\_FORMID)

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_update_entry_10'``,``'your_function_name'``, 10, 2 );` |

## Parameters

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)
The entry after being updated.

- **$original\_entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The entry before being updated.


## Example

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_action(``'gform_post_update_entry'``,``'log_post_update_entry'``, 10, 2 );`<br>`function``log_post_update_entry(``$entry``,``$original_entry``) {`<br>`GFCommon::log_debug(``'gform_post_update_entry: original_entry => '``. print_r(``$original_entry``, 1 ) );`<br>`GFCommon::log_debug(``'gform_post_update_entry: updated entry => '``. print_r(``$entry``, 1 ) );`<br>`}` |

## Source Code

This filter is located in GFAPI::update\_entry() in _includes/api.php_.

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 7, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_post_update_entry/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)