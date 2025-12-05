---
url: "https://docs.gravityforms.com/gform_after_update_entry/"
title: "gform_after_update_entry - Gravity Forms Documentation"
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

# gform\_after\_update\_entry

- [Description](https://docs.gravityforms.com/gform_after_update_entry/#h-description)
- [Usage](https://docs.gravityforms.com/gform_after_update_entry/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_after_update_entry/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_after_update_entry/#h-examples)
- [1\. Update entry properties.](https://docs.gravityforms.com/gform_after_update_entry/#h-1-update-entry-properties)
- [2\. Log the entry before and after update.](https://docs.gravityforms.com/gform_after_update_entry/#h-2-log-the-entry-before-and-after-update)
- [3\. Trigger Zapier Feed](https://docs.gravityforms.com/gform_after_update_entry/#h-3-trigger-zapier-feed)
- [4\. Trigger Mailchimp Feed](https://docs.gravityforms.com/gform_after_update_entry/#h-4-trigger-mailchimp-feed)
- [5\. Trigger Webhooks Feed](https://docs.gravityforms.com/gform_after_update_entry/#h-5-trigger-webhooks-feed)
- [6\. Add note](https://docs.gravityforms.com/gform_after_update_entry/#h-6-add-note)
- [Placement](https://docs.gravityforms.com/gform_after_update_entry/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_after_update_entry/#h-source-code)

## Description

This hook fires after the entry has been updated via the entry detail page.

## Usage

The following would run for any form:

|     |
| --- |
| `add_action(``'gform_after_update_entry'``,``'your_function_name'``, 10, 2 );` |

To target a specific form, append the form id to the hook name. (format: gform\_after\_update\_entry\_FORMID)

|     |
| --- |
| `add_action(``'gform_after_update_entry_10'``,``'your_function_name'``, 10, 2 );` |

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The form object for the entry.
- **$entry\_id** [integer](https://docs.gravityforms.com/integer)

The entry ID.
- **$original\_entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The entry before being updated. Since 1.9.12.9.

## Examples

### 1\. Update entry properties.

This example sets the entry as unread and stars it.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_action(``'gform_after_update_entry'``,``'update_entry'``, 10, 2 );`<br>`function``update_entry(``$form``,``$entry_id``) {`<br>```GFAPI::update_entry_property(``$entry_id``,``'is_read'``, 0 );`<br>```GFAPI::update_entry_property(``$entry_id``,``'is_starred'``, 1 );`<br>`}` |

### 2\. Log the entry before and after update.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `add_action(``'gform_after_update_entry'``,``'log_post_update_entry'``, 10, 3 );`<br>`function``log_post_update_entry(``$form``,``$entry_id``,``$original_entry``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```GFCommon::log_debug(``'gform_after_update_entry: original_entry => '``. print_r(``$original_entry``, 1 ) );`<br>```GFCommon::log_debug(``'gform_after_update_entry: updated entry => '``. print_r(``$entry``, 1 ) );`<br>`}` |

### 3\. Trigger Zapier Feed

This example shows how you can send the updated entry to Zapier.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_action(``'gform_after_update_entry'``,``'send_to_zapier_on_update'``, 10, 2 );`<br>`function``send_to_zapier_on_update(``$form``,``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```GFAPI::maybe_process_feeds(``$entry``,``$form``,``'gravityformszapier'``, true );`<br>`}` |

### 4\. Trigger Mailchimp Feed

This example shows how you can send the updated entry to Mailchimp.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_action(``'gform_after_update_entry'``,``'send_to_mailchimp_on_update'``, 10, 2 );`<br>`function``send_to_mailchimp_on_update(``$form``,``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```GFAPI::maybe_process_feeds(``$entry``,``$form``,``'gravityformsmailchimp'``, true );`<br>`}` |

You can use this same snippet for other similar add-ons like Zoho CRM, AgileCRM, ActiveCampaign, etc… Replacing `gravityformsmailchimp` above with the corresponding [add-on slug](https://docs.gravityforms.com/gravity-forms-add-on-slugs/).

### 5\. Trigger Webhooks Feed

This example shows how you can trigger processing of Webhooks feeds which use the background (async) processing feature.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action(``'gform_after_update_entry'``,``function``(``$form``,``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```GFAPI::maybe_process_feeds(``$entry``,``$form``,``'gravityformswebhooks'``, true );`<br>`}, 10, 2 );` |

### 6\. Add note

This example shows how you can add a note to the entry.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action(``'gform_after_update_entry'``,``function``(``$form``,``$entry_id``) {`<br>```$current_user``= wp_get_current_user();`<br>```GFAPI::add_note(``$entry_id``,``$current_user``->ID,``$current_user``->display_name,``'the note to be added'``);`<br>`}, 10, 2 );` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This filter is located in GFEntryDetail::lead\_detail\_page() in _entry\_detail.php_.

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: January 23, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_after_update_entry/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)