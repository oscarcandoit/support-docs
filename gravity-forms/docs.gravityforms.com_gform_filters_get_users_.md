---
url: "https://docs.gravityforms.com/gform_filters_get_users/"
title: "gform_filters_get_users - Gravity Forms Documentation"
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
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)
    - [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)      - [Add-On Framework Filters](https://docs.gravityforms.com/category/developers/hooks/filters/addon-framework-filters/)
      - [Add-On Filters](https://docs.gravityforms.com/category/developers/hooks/filters/filters-addons/)
      - [Admin Dashboard Filters](https://docs.gravityforms.com/category/developers/hooks/filters/admin-dashboard-filters/)
      - [Calculation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/calculation-filters/)
      - [Conditional Logic Filters](https://docs.gravityforms.com/category/developers/hooks/filters/conditional-logic-filters/)        - [gform\_has\_conditional\_logic](https://docs.gravityforms.com/gform_has_conditional_logic/ "gform_has_conditional_logic")
        - [gform\_entry\_meta\_pre\_evaluate\_conditional\_logic](https://docs.gravityforms.com/gform_entry_meta_pre_evaluate_conditional_logic/ "gform_entry_meta_pre_evaluate_conditional_logic")
        - [gform\_filters\_get\_users](https://docs.gravityforms.com/gform_filters_get_users/ "gform_filters_get_users")
      - [Confirmation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/confirmation-filters/)
      - [Editor Filters](https://docs.gravityforms.com/category/developers/hooks/filters/editor-filters/)
      - [Entry List Filters](https://docs.gravityforms.com/category/developers/hooks/filters/entry-list-filters/)
      - [Entry Filters](https://docs.gravityforms.com/category/developers/hooks/filters/entry-filters/)
      - [Field Filters](https://docs.gravityforms.com/category/developers/hooks/filters/field-filters/)
      - [Field Framework Filters](https://docs.gravityforms.com/category/developers/hooks/filters/field-framework-filters/)
      - [Form Component Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-component-filters/)
      - [Form List Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-list/)
      - [Form Object Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-object/)
      - [Form Settings Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-settings-filters/)
      - [Import/Export Filters](https://docs.gravityforms.com/category/developers/hooks/filters/importexport-filters/)
      - [Logging Filters](https://docs.gravityforms.com/category/developers/hooks/filters/logging/)
      - [Merge Tag Filters](https://docs.gravityforms.com/category/developers/hooks/filters/merge-tags/)
      - [Notification Filters](https://docs.gravityforms.com/category/developers/hooks/filters/notification-filters/)
      - [Payment Filters](https://docs.gravityforms.com/category/developers/hooks/filters/payment/)
      - [Post Creation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/post-creation/)
      - [REST API v1 Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rest-api-v1/)
      - [REST API v2 Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rest-api-v2/)
      - [Rich Text Editor Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rich-text-editor/)
      - [Save and Continue Filters](https://docs.gravityforms.com/category/developers/hooks/filters/save-and-continue/)
      - [Script Filters](https://docs.gravityforms.com/category/developers/hooks/filters/script-filters/)
      - [Styling/Theme/CSS Filters](https://docs.gravityforms.com/category/developers/hooks/filters/styling-filters/)
      - [System Status Filters](https://docs.gravityforms.com/category/developers/hooks/filters/system-status/)
      - [Upload Filters](https://docs.gravityforms.com/category/developers/hooks/filters/upload-filters/)
      - [Validation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/validation/)
    - [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
    - [Deprecated](https://docs.gravityforms.com/category/developers/hooks/deprecated/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_filters\_get\_users

- [Description](https://docs.gravityforms.com/gform_filters_get_users/#h-description)
- [Usage](https://docs.gravityforms.com/gform_filters_get_users/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_filters_get_users/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_filters_get_users/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_filters_get_users/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_filters_get_users/#h-source-code)

## Description

Use this filter to control the list of users available in the filters on the entry list, export entries conditional logic and results pages.

## Usage

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_filters_get_users'``,``'your_function_name'``);` |

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$args** | [array](https://developer.wordpress.org/reference/functions/get_users/) | The array of options to use when filtering the users. See the [get\_users()](https://developer.wordpress.org/reference/functions/get_users/) Function Reference for further details. |

## Examples

This example lists only the users from the role “administrator”.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_filter(``'gform_filters_get_users'``,``'filters_get_users_args'``);`<br>`function``filters_get_users_args(``$args``) {`<br>```$args``[``'role'``] =``'administrator'``;`<br>```return``$args``;`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

|     |     |
| --- | --- |
| 1 | `apply_filters(``'gform_filters_get_users'``,``array``(``'number'``=> 200 ) );` |

This filter is located in GFCommon::get\_entry\_info\_filter\_columns() in _common.php_

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 26, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_filters_get_users/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)