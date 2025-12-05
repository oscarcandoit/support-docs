---
url: "https://docs.gravityforms.com/gform_post_update_entry_property/"
title: "gform_post_update_entry_property - Gravity Forms Documentation"
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

# gform\_post\_update\_entry\_property

- [Description](https://docs.gravityforms.com/gform_post_update_entry_property/#h-description)
- [Usage](https://docs.gravityforms.com/gform_post_update_entry_property/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_post_update_entry_property/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_post_update_entry_property/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_post_update_entry_property/#h-placement)
- [Since](https://docs.gravityforms.com/gform_post_update_entry_property/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_post_update_entry_property/#h-source-code)

## Description

Runs after an entry property is updated.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_update_entry_property'``,``'your_function_name'``, 10, 4 );` |

## Parameters

- **$entry\_id** [int](https://docs.gravityforms.com/int)
The current entry ID.

- **$property\_name** [string](https://docs.gravityforms.com/string)

The property that was updated.

- **$property\_value** [string](https://docs.gravityforms.com/string)

The new value of the property that was updated.

- **$previous\_value** [string](https://docs.gravityforms.com/string)

The previous property value before the update.


## Examples

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `add_action(``'gform_post_update_entry_property'``,``'after_entry_property_updated'``, 10, 4 );`<br>`function``after_entry_property_updated (``$entry_id``,``$property_name``,``$property_value``,``$previous_value``){`<br>```//do not allow entries to be trashed`<br>```if``(``$property_name``==``'status'``&&``$property_value``==``'trash'``){`<br>```GFFormsModel::update_entry_property(``$entry_id``,``'status'``,``'active'``);`<br>```}`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Since

This filter was added in Gravity Forms version 2.3.3.9.

## Source Code

This filter is located in GFFormsModel::update\_entry\_property() in _forms\_model.php_.

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 13, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_post_update_entry_property/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)