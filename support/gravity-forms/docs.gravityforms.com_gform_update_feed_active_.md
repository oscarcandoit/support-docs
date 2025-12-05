---
url: "https://docs.gravityforms.com/gform_update_feed_active/"
title: "gform_update_feed_active - Gravity Forms Documentation"
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
      - [Entry List Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-list-actions/)
      - [Entry Printing Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-printing-actions/)
      - [Field Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-framework-actions/)
      - [Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-actions/)
      - [Gravity Forms Core Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-core-actions/)
      - [Gravity Forms Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-settings-actions/)
      - [Form Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-actions/)        - [gform\_post\_add\_feed](https://docs.gravityforms.com/gform_post_add_feed/ "gform_post_add_feed")
        - [gform\_post\_paging](https://docs.gravityforms.com/gform_post_paging/ "gform_post_paging")
        - [gform\_preview\_body\_open](https://docs.gravityforms.com/gform_preview_body_open/ "gform_preview_body_open")
        - [gform\_preview\_footer](https://docs.gravityforms.com/gform_preview_footer/ "gform_preview_footer")
        - [gform\_preview\_header](https://docs.gravityforms.com/gform_preview_header/ "gform_preview_header")
        - [gform\_preview\_init](https://docs.gravityforms.com/gform_preview_init/ "gform_preview_init")
        - [gform\_update\_feed\_active](https://docs.gravityforms.com/gform_update_feed_active/ "gform_update_feed_active")
        - [gform\_view](https://docs.gravityforms.com/gform_view/ "gform_view")
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

# gform\_update\_feed\_active

- [Description](https://docs.gravityforms.com/gform_update_feed_active/#h-description)
- [Usage](https://docs.gravityforms.com/gform_update_feed_active/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_update_feed_active/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_update_feed_active/#h-examples)
- [Log feed activation changes](https://docs.gravityforms.com/gform_update_feed_active/#h-log-feed-activation-changes)
- [Placement](https://docs.gravityforms.com/gform_update_feed_active/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_update_feed_active/#h-source-code)
- [Since](https://docs.gravityforms.com/gform_update_feed_active/#h-since)

## Description

The `gform_update_feed_active` action fires immediately after a feed’s **active** status is updated.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_update_feed_active'``,``'your_function_name'``, 10, 3 );` |

## Parameters

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| **$id** | [int](https://docs.gravityforms.com/integer/) | The ID of the feed being updated. |
| **$is\_active** | [bool](https://docs.gravityforms.com/bool/) | The new active status of the feed (true = active, false = inactive). |
| **$this** | [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon/) | The current instance of the add-on performing the update. In callbacks, this will be passed as the $addon argument. |

## Examples

### Log feed activation changes

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action(``'gform_update_feed_active'``,``'test_update_feed_active'``, 10, 3 );`<br>`function``test_update_feed_active(``$feed_id``,``$status``,``$addon``) {`<br>```GFCommon::log_debug(``__METHOD__``.``'(): Feed with id '``.``$feed_id``.``' changed to status '``. (``$status``?``'active'``:``'inactive'``) .``' by the '``.``$addon``->slug .``' add-on.'``);`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This action is located in includes/addon/class-gf-feed-addon.php

## Since

This action was added in Gravity Forms 2.9.20

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 16, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_update_feed_active/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)