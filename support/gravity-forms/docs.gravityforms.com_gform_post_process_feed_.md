---
url: "https://docs.gravityforms.com/gform_post_process_feed/"
title: "gform_post_process_feed - Gravity Forms Documentation"
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

# gform\_post\_process\_feed

- [Description](https://docs.gravityforms.com/gform_post_process_feed/#h-description)
- [Usage](https://docs.gravityforms.com/gform_post_process_feed/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_post_process_feed/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_post_process_feed/#h-examples)
- [1\. Send Notification](https://docs.gravityforms.com/gform_post_process_feed/#h-1-send-notification)
- [2\. Trigger Slack Feed](https://docs.gravityforms.com/gform_post_process_feed/#h-2-trigger-slack-feed)
- [Placement](https://docs.gravityforms.com/gform_post_process_feed/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_post_process_feed/#h-source-code)
- [Since](https://docs.gravityforms.com/gform_post_process_feed/#h-since)

## Description

The gform\_post\_process\_feed hook can be used to perform a custom action when a feed has been processed.

## Usage

The hook which would run for all add-on feeds would be used like so:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_process_feed'``,``'your_function_name'``, 10, 4 );` |

You can target a specific add-on with the following variation of this hook:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_{ADDON_SLUG}_post_process_feed'``,``'your_function_name'``, 10, 4 );` |

See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible slugs.

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed** | [Feed Object](https://docs.gravityforms.com/feed-object) | The [Feed Object](https://docs.gravityforms.com/feed-object) which was just processed. |
| **$entry** | [Entry Object](https://docs.gravityforms.com/entry-object) | The current entry object, which may have been modified by the processed feed. |
| **$form** | [Form Object](https://docs.gravityforms.com/form-object) | The current form object. |
| **$addon** | [object](https://docs.gravityforms.com/object) | The current instance of the GFAddOn object which extends<br> [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon) or<br> [GFPaymentAddOn](https://docs.gravityforms.com/gfpaymentaddon)<br> (i.e. [GFCoupons](https://docs.gravityforms.com/gfcoupons),<br> [GF\_User\_Registration](https://docs.gravityforms.com/gf_user_registration),<br> [GFStripe](https://docs.gravityforms.com/gfstripe)). |

## Examples

### 1\. Send Notification

The following example shows how you can send a notification once a feed has been processed. You can use the [gform\_notification\_events](https://docs.gravityforms.com/gform_notification_events) filter to make new events available for selection when users are configuring notifications.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action(``'gform_post_process_feed'``,``'post_process_feed'``, 10, 4 );`<br>`function``post_process_feed(``$feed``,``$entry``,``$form``,``$addon``) {`<br>```GFAPI::send_notifications(``$form``,``$entry``,``'some_event'``);`<br>`}` |

### 2\. Trigger Slack Feed

This example shows how you can trigger the processing of Slack feeds for this entry after the User Registration Add-On has created the pending activation.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `add_action(``'gform_gravityformsuserregistration_post_process_feed'``,``'process_slack_feeds_post_ur'``, 10, 3 );`<br>`function``process_slack_feeds_post_ur(``$feed``,``$entry``,``$form``) {`<br>```$key``= gform_get_meta(``$entry``[``'id'``],``'activation_key'``);`<br>```if``(``$key``&& function_exists(``'gf_slack'``) ) {`<br>```gf_slack()->maybe_process_feed(``$entry``,``$form``);`<br>```}`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This action hook is located in GFFeedAddOn::maybe\_process\_feed() in _/includes/addons/class-gf-feed-addon.php_.

## Since

This hook was added in Gravity Forms 2.0-beta-3.

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_post_process_feed/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)