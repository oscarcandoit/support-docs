---
url: "https://docs.gravityforms.com/gform_slug_error/"
title: "gform_{$SHORT_SLUG}_error - Gravity Forms Documentation"
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
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)      - [Add-On Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/addon-framework-actions/)        - [gform\_{$SHORT\_SLUG}\_error](https://docs.gravityforms.com/gform_slug_error/ "gform_{$SHORT_SLUG}_error")
        - [gform\_addon\_app\_PAGE\_TAB](https://docs.gravityforms.com/gform_addon_app_page_tab/ "gform_addon_app_PAGE_TAB")
        - [gform\_post\_process\_feed](https://docs.gravityforms.com/gform_post_process_feed/ "gform_post_process_feed")
        - [gform\_post\_save\_feed\_settings](https://docs.gravityforms.com/gform_post_save_feed_settings/ "gform_post_save_feed_settings")
        - [gform\_pre\_delete\_feed](https://docs.gravityforms.com/gform_pre_delete_feed/ "gform_pre_delete_feed")
        - [gform\_user\_select\_query\_params](https://docs.gravityforms.com/gform_user_select_query_params/ "gform_user_select_query_params")
      - [Confirmations Actions](https://docs.gravityforms.com/category/developers/hooks/actions/confirmations-actions/)
      - [Editor Actions](https://docs.gravityforms.com/category/developers/hooks/actions/editor-actions/)
      - [Email Actions](https://docs.gravityforms.com/category/developers/hooks/actions/email-actions/)
      - [Entry Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-actions/)
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

# gform\_{$SHORT\_SLUG}\_error

- [Description](https://docs.gravityforms.com/gform_slug_error/#h-description)
- [Short Slugs](https://docs.gravityforms.com/gform_slug_error/#h-short-slugs)
- [Usage](https://docs.gravityforms.com/gform_slug_error/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_slug_error/#h-parameters)
- [Example](https://docs.gravityforms.com/gform_slug_error/#h-example)
- [Notify if Mailchimp API Fails](https://docs.gravityforms.com/gform_slug_error/#h-notify-if-mailchimp-api-fails)
- [Placement](https://docs.gravityforms.com/gform_slug_error/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_slug_error/#h-source-code)
- [Since](https://docs.gravityforms.com/gform_slug_error/#h-since)

## Description

This action hook can be used to perform a custom action when an [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework) based add-on experiences an error when processing a feed.

## Short Slugs

The [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article lists the short slugs for the available add-ons.

## Usage

The base hook which would run for all feeds and would be used like so:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_mailchimp_error'``,``'your_function_name'``, 10, 4 );` |

This runs the hook for the Agile CRM add-on:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_agilecrm_error'``,``'your_function_name'``, 10, 4 );` |

To target feeds for a specific form, append the form id to the hook name. (format: gform\_{$SHORT\_SLUG}\_error\_FORMID)

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_mailchimp_error_10'``,``'your_function_name'``, 10, 4 );` |

## Parameters

- **$feed** [Feed Object](https://docs.gravityforms.com/feed-object)

The feed currently being processed.
- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The entry currently being processed.
- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The form currently being processed.
- **$error** [string](https://docs.gravityforms.com/string)

The error message.

## Example

### Notify if Mailchimp API Fails

This example shows how you can trigger the sending of a notification if the Mailchimp API could not be initialized. You can adapt this example for use with any other Add-On Framework-based add-on by replacing `mailchimp` with any other supported add-on slug.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action(``'gform_mailchimp_error'``,``'send_mailchimp_error_email'``, 10, 4 );`<br>`function``send_mailchimp_error_email(``$feed``,``$entry``,``$form``,``$error_message``) {`<br>```GFAPI::send_notifications(``$form``,``$entry``,``'mailchimp_api_issue'``);`<br>`}` |

The mailchimp\_api\_issue notification event would be added via the [gform\_notification\_events](https://docs.gravityforms.com/gform_notification_events) filter.

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This hook is located in GFFeedAddOn::add\_feed\_error() in _includes/addon/class-gf-feed-addon.php_.

## Since

This hook was added in Gravity Forms 1.9.11.9.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 2, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_slug_error/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)