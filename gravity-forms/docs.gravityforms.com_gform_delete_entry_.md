---
url: "https://docs.gravityforms.com/gform_delete_entry/"
title: "gform_delete_entry - Gravity Forms Documentation"
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

# gform\_delete\_entry

- [Description](https://docs.gravityforms.com/gform_delete_entry/#h-description)
- [Usage](https://docs.gravityforms.com/gform_delete_entry/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_delete_entry/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_delete_entry/#h-examples)
- [Delete Post](https://docs.gravityforms.com/gform_delete_entry/#h-delete-post)
- [Delete user signup](https://docs.gravityforms.com/gform_delete_entry/#h-delete-user-signup)
- [Delete user](https://docs.gravityforms.com/gform_delete_entry/#h-delete-user)
- [Source Code](https://docs.gravityforms.com/gform_delete_entry/#h-source-code)

## Description

The “gform\_delete\_entry” action fires right before an entry is deleted and is used to perform actions when an entry is deleted.

**Note**: This filter replaces the “gform\_delete\_lead” hook.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_delete_entry'``,``'your_function_name'``, 10, 1 );` |

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [integer](https://docs.gravityforms.com/integer/) | The ID of the entry that is about to be deleted. |

## Examples

### Delete Post

This example deletes the post associated with the deleted entry.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11 | `add_action(``'gform_delete_entry'``,``'delete_entry_post'``);`<br>`function``delete_entry_post(``$entry_id``) {`<br>```GFCommon::log_debug(``__METHOD__``.``'(): running.'``);`<br>```// Getting entry object.`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```// If entry is associated with a post, delete it.`<br>```if``( isset(``$entry``[``'post_id'``] ) ) {`<br>```GFCommon::log_debug(``__METHOD__``.``'(): Deleting post ID '``.``$entry``[``'post_id'``] );`<br>```wp_delete_post(``$entry``[``'post_id'``] );`<br>```}`<br>`}` |

### Delete user signup

The following example shows how the record associated with an entry can be deleted from the WordPress signups table when the entry is deleted.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12 | `add_action(``'gform_delete_entry'``,``function``(``$entry_id``) {`<br>```if``( ! function_exists(``'gf_user_registration'``) ) {`<br>```return``;`<br>```}`<br>```require_once``( gf_user_registration()->get_base_path() .``'/includes/signups.php'``);`<br>```GFUserSignups::prep_signups_functionality();`<br>```$activation_key``= GFUserSignups::get_lead_activation_key(``$entry_id``);`<br>```if``(``$activation_key``) {`<br>```GFUserSignups::delete_signup(``$activation_key``);`<br>```}`<br>`} );` |

### Delete user

The following example shows how the user can be deleted when the entry is deleted.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `add_action(``'gform_delete_entry'``,``function``(``$entry_id``) {`<br>```if``( ! function_exists(``'gf_user_registration'``) ) {`<br>```return``;`<br>```}`<br>```$user_id``= gf_user_registration()->get_user_by_entry_id(``$entry_id``, true );`<br>```wp_delete_user(``$user_id``);`<br>`} );` |

## Source Code

This filter is located in GFFormsModel::delete\_entry() in _forms\_model.php_.

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_delete_entry/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)