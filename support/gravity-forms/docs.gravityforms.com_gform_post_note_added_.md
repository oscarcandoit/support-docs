---
url: "https://docs.gravityforms.com/gform_post_note_added/"
title: "gform_post_note_added - Gravity Forms Documentation"
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

# gform\_post\_note\_added

- [Description](https://docs.gravityforms.com/gform_post_note_added/#h-description)
- [Usage](https://docs.gravityforms.com/gform_post_note_added/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_post_note_added/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_post_note_added/#h-examples)
- [Log failed entry](https://docs.gravityforms.com/gform_post_note_added/#h-log-failed-entry)
- [Send notifications configured for the custom event note\_added](https://docs.gravityforms.com/gform_post_note_added/#h-send-notifications-configured-for-the-custom-event-note-added)
- [Source Code](https://docs.gravityforms.com/gform_post_note_added/#h-source-code)

## Description

The “gform\_post\_note\_added” action is triggered after a note is added to an entry in Gravity Forms, allowing further actions to be performed.

## Usage

|     |
| --- |
| `add_action(``'gform_post_note_added'``,``'your_function_name'``, 10, 7 );` |

## Parameters

- **$note\_id** [integer](https://docs.gravityforms.com/integer/)

The ID assigned to the note by the database.
- **$entry\_id** [integer](https://docs.gravityforms.com/integer/)

The ID of the entry the note was added to.
- **$user\_id** [integer](https://docs.gravityforms.com/integer/)

Zero or the ID of the user who added the note.
- **$user\_name** [string](https://docs.gravityforms.com/string/)

The name of the plugin or the user\_name of the user who added the note.
- **$note** [string](https://docs.gravityforms.com/string/)

The note that was added.
- **$note\_type** [string](https://docs.gravityforms.com/string/)

The type of the note that was added.
- **$sub\_type** [string](https://docs.gravityforms.com/string/)

The subtype of the note that was added.

## Examples

### Log failed entry

Occasionally, a database error can occur when saving the field values for an entry. This code snippet can be used to create a draft entry from the submitted values and write it to the core log.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17 | `add_action(``'gform_post_note_added'``,``function``(``$note_id``,``$entry_id``,``$user_id``,``$user_name``,``$note``,``$note_type``,``$sub_type``) {`<br>```if``(``$note_type``!==``'save_entry'``||``$sub_type``!==``'error'``) {`<br>```return``;`<br>```}`<br>```$entry``= GFFormsModel::get_current_lead();`<br>```$log_entry``= json_encode(``$entry``, JSON_INVALID_UTF8_SUBSTITUTE );`<br>```if``( !``$log_entry``) {`<br>```$log_entry``=``$entry``;`<br>```}`<br>```GFCommon::log_debug(``"gform_post_note_added: Draft entry based on values for failed entry (#{$entry_id}) => "``. print_r(``$log_entry``, true ) );`<br>```global``$wpdb``;`<br>```GFCommon::log_debug(``'gform_post_note_added: gf_entry_meta meta_value charset = '``. print_r(``$wpdb``->get_col_charset( GFFormsModel::get_entry_meta_table_name(),``'meta_value'``), true ) );`<br>`}, 10, 7 );` |

### Send notifications configured for the custom event note\_added

The following example assumes you have already added a custom notification event with the filter [gform\_notification\_events](https://docs.gravityforms.com/gform_notification_events/) defined as ‘note\_added’. It will check if there’s any active notification configured for that event, and process them if any.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `add_action(``'gform_post_note_added'``,``'send_note_added_notifications'``, 10, 2 );`<br>`function``send_note_added_notifications(``$insert_id``,``$entry_id``) {`<br>```GFCommon::log_debug(``__METHOD__``.``"(): Running for entry id {$entry_id}"``);`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```$form_id``= rgar(``$entry``,``'form_id'``);`<br>```$form``= GFAPI::get_form(``$form_id``);`<br>```// Replace note_added with the name you have used to define your event`<br>```$event``=``'note_added'``;`<br>```$notifications_to_send``= GFCommon::get_notifications_to_send(``$event``,``$form``,``$entry``);`<br>```$log_notification_event``=``empty``(``$notifications_to_send``) ?``'No notifications to process'``:``'Processing notifications'``;`<br>```GFCommon::log_debug(``"gform_post_note_added: {$log_notification_event} for {$event} event."``);`<br>```if``( !``empty``(``$notifications_to_send``) ) {`<br>```GFAPI::send_notifications(``$form``,``$entry``,``$event``);`<br>```}`<br>`}` |

## Source Code

This action hook is located in _forms\_model.php_.

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 19, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_post_note_added/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)