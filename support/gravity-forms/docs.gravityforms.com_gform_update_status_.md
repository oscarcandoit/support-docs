---
url: "https://docs.gravityforms.com/gform_update_status/"
title: "gform_update_PROPERTY_NAME - Gravity Forms Documentation"
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

# gform\_update\_PROPERTY\_NAME

- [Description](https://docs.gravityforms.com/gform_update_status/#h-description)
- [Usage](https://docs.gravityforms.com/gform_update_status/#h-usage)
- [Examples](https://docs.gravityforms.com/gform_update_status/#h-examples)
- [Delete spam entry](https://docs.gravityforms.com/gform_update_status/#h-delete-spam-entry)
- [Send email](https://docs.gravityforms.com/gform_update_status/#h-send-email)
- [Process add-on feeds](https://docs.gravityforms.com/gform_update_status/#h-process-add-on-feeds)
- [Placement](https://docs.gravityforms.com/gform_update_status/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_update_status/#h-source-code)

## Description

Use this action hook to perform logic when entries’ basic information is updated.

## Usage

Specify the property name after the _gform\_update\__ hook name:

|     |
| --- |
| `add_action(``'gform_update_status'``,``'status_changed'``, 10, 3 );` |

## Parameters

- **$entry\_id** [integer](https://docs.gravityforms.com/integer)
Current entry ID.

- **$property\_value** [Mixed](https://docs.gravityforms.com/mixed)

New value of the entry’s property.

- **$previous\_value** [Mixed](https://docs.gravityforms.com/mixed)

Previous value of the entry’s property.


## Examples

### Delete spam entry

This example automatically deletes entries that are marked as Spam:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `add_filter(``'gform_update_status'``,``'delete_spam'``, 10, 3 );`<br>`function``delete_spam(``$entry_id``,``$property_value``,``$previous_value``) {`<br>```if``(``$property_value``==``'spam'``) {`<br>```GFAPI::delete_entry(``$entry_id``);`<br>```}`<br>`}` |

### Send email

This example sends an email to the admin whenever an entry’s status changes:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9 | `add_action(``'gform_update_status'``,``'check_lead_status'``, 10, 3 );`<br>`function``check_lead_status(``$entry_id``,``$property_value``,``$previous_value``) {`<br>```if``(``$previous_value``!=``$property_value``) {`<br>```$to``= get_bloginfo(``'admin_email'``);`<br>```$subject``=``"The status of entry {$entry_id} has changed."``;`<br>```$message``=``"The status of entry {$entry_id} has changed. Please review this entry."``;`<br>```wp_mail(``$to``,``$subject``,``$message``);`<br>```}`<br>`}` |

This example sends an email to the admin whenever an entry is starred:

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9 | `add_action(``'gform_update_is_starred'``,``'check_starred_status'``, 10, 3 );`<br>`function``check_starred_status(``$entry_id``,``$property_value``,``$previous_value``) {`<br>```if``(``$previous_value``!=``$property_value``&&``$property_value``== 1 ) {`<br>```$to``= get_bloginfo(``"admin_email"``);`<br>```$subject``=``"Entry {$entry_id} has been starred as important."``;`<br>```$message``=``"Entry {$entry_id} has been starred as important. Please review this entry."``;`<br>```wp_mail(``$to``,``$subject``,``$message``);`<br>```}`<br>`}` |

### Process add-on feeds

This example shows how you can process add-on feeds when the entry is marked as not spam.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24 | `add_action(``'gform_update_status'``,``function``(``$entry_id``,``$property_value``,``$previous_value``) {`<br>```if``(``$previous_value``!==``'spam'``||``$property_value``!==``'active'``|| !``class_exists``(``'GFFeedAddOn'``) ) {`<br>```return``;`<br>```}`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```if``( is_wp_error(``$entry``) ) {`<br>```return``;`<br>```}`<br>```$form``= GFAPI::get_form( rgar(``$entry``,``'form_id'``) );`<br>```$addons``= GFAddOn::get_registered_addons( true );`<br>```foreach``(``$addons``as``$addon``) {`<br>```if``(``$addon``instanceof``GFPaymentAddOn || !``$addon``instanceof``GFFeedAddOn ||``$addon``->get_slug() ===``'gravityformsuserregistration'``) {`<br>```continue``;`<br>```}`<br>```$addon``->log_debug(``'gform_update_status: triggering feed processing on "not spam" event.'``);`<br>```$addon``->maybe_process_feed(``$entry``,``$form``);`<br>```}`<br>```gf_feed_processor()->save()->dispatch();`<br>`}, 10, 3 );` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in GFFormsModel::update\_lead\_property() in _forms\_model.php_.

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 7, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_update_status/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)