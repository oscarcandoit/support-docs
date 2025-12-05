---
url: "https://docs.gravityforms.com/gform_pre_delete_feed/"
title: "gform_pre_delete_feed - Gravity Forms Documentation"
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

# gform\_pre\_delete\_feed

- [Description](https://docs.gravityforms.com/gform_pre_delete_feed/#h-description)
- [Usage](https://docs.gravityforms.com/gform_pre_delete_feed/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_pre_delete_feed/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_pre_delete_feed/#h-examples)
- [1\. Get feed before it is deleted](https://docs.gravityforms.com/gform_pre_delete_feed/#h-1-get-feed-before-it-is-deleted)
- [Source Code](https://docs.gravityforms.com/gform_pre_delete_feed/#h-source-code)
- [Since](https://docs.gravityforms.com/gform_pre_delete_feed/#h-since)

## Description

The gform\_pre\_delete\_feed hook can be used to perform a custom action just before a feed is deleted from the database.

## Usage

The hook which would run for all add-ons would be used like so:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_pre_delete_feed'``,``'your_function_name'``, 10, 2 );` |

You can target a specific add-on with the following variation of this hook:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_{SHORT_SLUG}_pre_delete_feed'``,``'your_function_name'``, 10, 2 );` |

See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible short slugs.

## Parameters

- **$id** [int](https://docs.gravityforms.com/int)
The ID of the feed being deleted.

- **$addon** [object](https://docs.gravityforms.com/object)

The current instance of the add-on object which extends [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon) or [GFPaymentAddOn](https://docs.gravityforms.com/gfpaymentaddon) (i.e. [GFCoupons](https://docs.gravityforms.com/gfcoupons), [GF\_User\_Registration](https://docs.gravityforms.com/gf_user_registration), [GFStripe](https://docs.gravityforms.com/gfstripe)).


## Examples

### 1\. Get feed before it is deleted

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_action(``'gform_pre_delete_feed'``,``'pre_delete_feed'``, 10, 2 );`<br>`function``pre_delete_feed(``$id``,``$addon``) {`<br>```$feed``=``$addon``->get_feed(``$id``);`<br>```// Do something with the $feed.`<br>`}` |

## Source Code

This action hook is located in `GFFeedAddOn::delete_feed()` in _/includes/addons/class-gf-feed-addon.php_.

## Since

This hook was added in Gravity Forms 2.4.20.4

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 10, 2020

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_pre_delete_feed/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)