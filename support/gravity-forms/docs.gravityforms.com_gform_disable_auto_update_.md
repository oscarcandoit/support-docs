---
url: "https://docs.gravityforms.com/gform_disable_auto_update/"
title: "gform_disable_auto_update - Gravity Forms Documentation"
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
      - [Conditional Logic Filters](https://docs.gravityforms.com/category/developers/hooks/filters/conditional-logic-filters/)
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
      - [System Status Filters](https://docs.gravityforms.com/category/developers/hooks/filters/system-status/)        - [gform\_disable\_auto\_update](https://docs.gravityforms.com/gform_disable_auto_update/ "gform_disable_auto_update")
        - [gform\_system\_report](https://docs.gravityforms.com/gform_system_report/ "gform_system_report")
        - [gform\_system\_status\_menu](https://docs.gravityforms.com/gform_system_status_menu/ "gform_system_status_menu")
        - [gform\_updates\_list](https://docs.gravityforms.com/gform_updates_list/ "gform_updates_list")
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

# gform\_disable\_auto\_update

- [Description](https://docs.gravityforms.com/gform_disable_auto_update/#h-description)
- [Usage](https://docs.gravityforms.com/gform_disable_auto_update/#h-usage)
- [Example](https://docs.gravityforms.com/gform_disable_auto_update/#h-example)
- [Source Code](https://docs.gravityforms.com/gform_disable_auto_update/#h-source-code)

## Description

The “gform\_disable\_auto\_update” filter allows automatic updates to be turned off in Gravity Forms.

## Usage

|     |
| --- |
| `add_filter(``'gform_disable_auto_update'``,``'__return_true'``);` |

## Parameters

- **$disabled** [bool](https://docs.gravityforms.com/bool)


Set to ‘true’ to disable automatic updates. False to enable them. Defaults to the inverse of the gform\_enable\_background\_updates option.

## Example

|     |
| --- |
| `add_filter(``'gform_disable_auto_update'``,``'__return_true'``);` |

## Source Code

This action hook is located in _gravityforms.php_

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 26, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_disable_auto_update/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)