---
url: "https://docs.gravityforms.com/gform_user_select_query_params/"
title: "gform_user_select_query_params - Gravity Forms Documentation"
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

# gform\_user\_select\_query\_params

- [Description](https://docs.gravityforms.com/gform_user_select_query_params/#h-description)
- [Usage](https://docs.gravityforms.com/gform_user_select_query_params/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_user_select_query_params/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_user_select_query_params/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_user_select_query_params/#h-placement)
- [Since](https://docs.gravityforms.com/gform_user_select_query_params/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_user_select_query_params/#h-source-code)

## Description

The `gform_user_select_query_params` allows to filter the parameters for the query for the initial list of users in the user select dropdown when the [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/) renders a field of type `user_select`.

## Usage

|     |
| --- |
| `add_filter(``'gform_user_select_query_params'``,``'your_function_name'``, 10, 1 );` |

## Parameters

- **$user\_query\_params** [array](https://docs.gravityforms.com/array)

Array of parameters for the query for the initial list of users in the user select dropdown.

## Examples

Only show the first five users in the drop down.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `apply_filter(``'gform_user_select_query_params'``,``'show_five_users'``);`<br>`function``show_five_users(``$query``) {`<br>```return``array``(``'number'``=> 5 );`<br>`}` |

Only show users with Administrator role.

|     |
| --- |
| `apply_filter(``'gform_user_select_query_params'``,``'only_show_admins'``);`<br>`function``only_show_admins(``$query``) {`<br>```$query``[``'role'``] =``'Administrator'``;`<br>```return``$query``;`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Since

This filter was added in Gravity Forms version 2.9.5.

## Source Code

This filter is located in GF\_Settings\_Config\_Admin::data() in includes/settings/config/class-gf-settings-config-admin.php

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 20, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_user_select_query_params/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)