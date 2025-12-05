---
url: "https://docs.gravityforms.com/gform_entry_list_action/"
title: "gform_entry_list_action - Gravity Forms Documentation"
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
      - [Entry Change Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-change-actions/)
      - [Entry Detail Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-detail-actions/)
      - [Entry List Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-list-actions/)        - [gform\_entry\_list\_action](https://docs.gravityforms.com/gform_entry_list_action/ "gform_entry_list_action")
        - [gform\_pre\_entry\_list](https://docs.gravityforms.com/gform_pre_entry_list/ "gform_pre_entry_list")
        - [gform\_post\_entry\_list](https://docs.gravityforms.com/gform_post_entry_list/ "gform_post_entry_list")
        - [gform\_entries\_first\_column](https://docs.gravityforms.com/gform_entries_first_column/ "gform_entries_first_column")
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

# gform\_entry\_list\_action

- [Description](https://docs.gravityforms.com/gform_entry_list_action/#h-description)
- [Usage](https://docs.gravityforms.com/gform_entry_list_action/#h-usage)
- [Example(s)](https://docs.gravityforms.com/gform_entry_list_action/#h-example-s)
- [Trigger Twilio Feed](https://docs.gravityforms.com/gform_entry_list_action/#h-trigger-twilio-feed)
- [Trigger Zoho CRM Feed](https://docs.gravityforms.com/gform_entry_list_action/#h-trigger-zoho-crm-feed)
- [Trigger Zapier Feed](https://docs.gravityforms.com/gform_entry_list_action/#h-trigger-zapier-feed)
- [Trigger User Registration Feed](https://docs.gravityforms.com/gform_entry_list_action/#h-trigger-user-registration-feed)
- [Trigger Advanced Post Creation Feed](https://docs.gravityforms.com/gform_entry_list_action/#h-trigger-advanced-post-creation-feed)
- [Trigger Webhooks Feed](https://docs.gravityforms.com/gform_entry_list_action/#h-trigger-webhooks-feed)
- [Placement](https://docs.gravityforms.com/gform_entry_list_action/#h-placement)
- [Since](https://docs.gravityforms.com/gform_entry_list_action/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_entry_list_action/#h-source-code)

## Description

The “gform\_entry\_list\_action” action in Gravity Forms fires after the default entry list actions have been processed.

## Usage

The following would apply to all forms:

|     |
| --- |
| `add_action(``'gform_entry_list_action'``,``'your_function_name'``, 10, 3 );` |

To limit the scope of your function to a specific action, append the action name to the end of the hook name. (format:gform\_entry\_list\_action\_ACTION)

|     |
| --- |
| `add_action(``'gform_entry_list_action_trash'``,``'your_function_name'``, 10, 3 );` |

To limit the scope of your function to a specific action and form, append the action name and form id to the end of the hook name. (format:gform\_entry\_list\_action\_ACTION\_FORMID)

|     |
| --- |
| `add_action(``'gform_entry_list_action_trash_21'``,``'your_function_name'``, 10, 3 );` |

## Parameters

- **$action** [string](https://docs.gravityforms.com/string)
Action being performed.

Possible Gravity Forms actions:


  - delete
  - change\_columns
  - trash
  - restore
  - unspam
  - spam
  - mark\_read
  - mark\_unread
  - add\_star
  - remove\_star

Add-Ons may also use this hook by passing its own action. For instance, gform\_entry\_list\_action\_helpscout.

- **$entries** [array](https://docs.gravityforms.com/array)

An array of entry ids on which the action is being applied.

- **$form\_id** [int](https://docs.gravityforms.com/int)

The current form id.


## Example(s)

### Trigger Twilio Feed

This example shows how you can add an action to manually trigger Twilio feeds for the entries selected. Requires the use of [gform\_entry\_list\_bulk\_actions](https://docs.gravityforms.com/gform_entry_list_bulk_actions/) to add the ‘trigger\_twilio’ action to the Bulk Actions menu.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `add_action(``'gform_entry_list_action'``,``'gf_trigger_twilio'``, 10, 3 );`<br>`function``gf_trigger_twilio(``$action``,``$entries``,``$form_id``) {`<br>```if``(``$action``!==``'trigger_twilio'``|| ! function_exists(``'gf_twilio'``) ) {`<br>```return``;`<br>```}`<br>```$form``= GFAPI::get_form(``$form_id``);`<br>```if``( !``$form``) {`<br>```return``;`<br>```}`<br>```foreach``(``$entries``as``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```if``( is_wp_error(``$entry``) ) {`<br>```continue``;`<br>```}`<br>```gf_twilio()->maybe_process_feed(``$entry``,``$form``);`<br>```}`<br>```gf_feed_processor()->save()->dispatch();`<br>`}` |

### Trigger Zoho CRM Feed

This example shows how you can add an action to manually trigger Zoho CRM feeds for the entries selected. Requires the use of [gform\_entry\_list\_bulk\_actions](https://docs.gravityforms.com/gform_entry_list_bulk_actions/) to add the ‘trigger\_zohocrm’ action to the Bulk Actions menu.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `add_action(``'gform_entry_list_action'``,``'gf_trigger_zohocrm'``, 10, 3 );`<br>`function``gf_trigger_zohocrm(``$action``,``$entries``,``$form_id``) {`<br>```if``(``$action``!==``'trigger_zohocrm'``|| ! function_exists(``'gf_zohocrm'``) ) {`<br>```return``;`<br>```}`<br>```$form``= GFAPI::get_form(``$form_id``);`<br>```if``( !``$form``) {`<br>```return``;`<br>```}`<br>```foreach``(``$entries``as``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```if``( is_wp_error(``$entry``) ) {`<br>```continue``;`<br>```}`<br>```gf_zohocrm()->maybe_process_feed(``$entry``,``$form``);`<br>```}`<br>```gf_feed_processor()->save()->dispatch();`<br>`}` |

### Trigger Zapier Feed

This example shows how you can add an action to manually trigger Zapier feeds for the entries selected. Requires the use of [gform\_entry\_list\_bulk\_actions](https://docs.gravityforms.com/gform_entry_list_bulk_actions/) to add the ‘trigger\_zapier’ action to the Bulk Actions menu.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `add_action(``'gform_entry_list_action'``,``'gf_trigger_zapier'``, 10, 3 );`<br>`function``gf_trigger_zapier(``$action``,``$entries``,``$form_id``) {`<br>```if``(``$action``!==``'trigger_zapier'``|| ! function_exists(``'gf_zapier'``) ) {`<br>```return``;`<br>```}`<br>```$form``= GFAPI::get_form(``$form_id``);`<br>```if``( !``$form``) {`<br>```return``;`<br>```}`<br>```foreach``(``$entries``as``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```if``( is_wp_error(``$entry``) ) {`<br>```continue``;`<br>```}`<br>```gf_zapier()->maybe_process_feed(``$entry``,``$form``);`<br>```}`<br>```gf_feed_processor()->save()->dispatch();`<br>`}` |

### Trigger User Registration Feed

This example shows how you can add an action to manually trigger User Registration feeds for the entries selected. Requires the use of [gform\_entry\_list\_bulk\_actions](https://docs.gravityforms.com/gform_entry_list_bulk_actions/) to add the ‘trigger\_user\_registration’ action to the Bulk Actions menu.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `add_action(``'gform_entry_list_action'``,``'gf_trigger_user_registration'``, 10, 3 );`<br>`function``gf_trigger_user_registration(``$action``,``$entries``,``$form_id``) {`<br>```if``(``$action``!==``'trigger_user_registration'``|| ! function_exists(``'gf_user_registration'``) ) {`<br>```return``;`<br>```}`<br>```$form``= GFAPI::get_form(``$form_id``);`<br>```if``( !``$form``) {`<br>```return``;`<br>```}`<br>```foreach``(``$entries``as``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```if``( is_wp_error(``$entry``) ) {`<br>```continue``;`<br>```}`<br>```gf_user_registration()->maybe_process_feed(``$entry``,``$form``);`<br>```}`<br>```gf_feed_processor()->save()->dispatch();`<br>`}` |

### Trigger Advanced Post Creation Feed

This example shows how you can add an action to manually trigger Advanced Post Creation feeds for the entries selected. Requires the use of [gform\_entry\_list\_bulk\_actions](https://docs.gravityforms.com/gform_entry_list_bulk_actions/) to add the ‘trigger\_apc’ action to the Bulk Actions menu.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `add_action(``'gform_entry_list_action'``,``'gf_trigger_apc'``, 10, 3 );`<br>`function``gf_trigger_apc(``$action``,``$entries``,``$form_id``) {`<br>```if``(``$action``!==``'trigger_apc'``|| ! function_exists(``'gf_advancedpostcreation'``) ) {`<br>```return``;`<br>```}`<br>```$form``= GFAPI::get_form(``$form_id``);`<br>```if``( !``$form``) {`<br>```return``;`<br>```}`<br>```foreach``(``$entries``as``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```if``( is_wp_error(``$entry``) ) {`<br>```continue``;`<br>```}`<br>```gf_advancedpostcreation()->maybe_process_feed(``$entry``,``$form``);`<br>```}`<br>```gf_feed_processor()->save()->dispatch();`<br>`}` |

### Trigger Webhooks Feed

This example shows how you can add an action to manually trigger Webhooks feeds for the entries selected. Requires the use of [gform\_entry\_list\_bulk\_actions](https://docs.gravityforms.com/gform_entry_list_bulk_actions/) to add the ‘trigger\_webhooks’ action to the Bulk Actions menu.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21 | `add_action(``'gform_entry_list_action'``,``'gf_trigger_webhooks'``, 10, 3 );`<br>`function``gf_trigger_webhooks(``$action``,``$entries``,``$form_id``) {`<br>```if``(``$action``!==``'trigger_webhooks'``|| ! function_exists(``'gf_webhooks'``) ) {`<br>```return``;`<br>```}`<br>```$form``= GFAPI::get_form(``$form_id``);`<br>```if``( !``$form``) {`<br>```return``;`<br>```}`<br>```foreach``(``$entries``as``$entry_id``) {`<br>```$entry``= GFAPI::get_entry(``$entry_id``);`<br>```if``( is_wp_error(``$entry``) ) {`<br>```continue``;`<br>```}`<br>```gf_webhooks()->maybe_process_feed(``$entry``,``$form``);`<br>```}`<br>```gf_feed_processor()->save()->dispatch();`<br>`}` |

## Placement

Your code snippet should be placed in the [functions.php](https://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Since

Gravity Forms Version 2.2.4.

## Source Code

This filter is located in the GF\_Entry\_List\_Table::process\_action() in _gravityforms/entry\_list.php_.

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 4, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_entry_list_action/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)