---
url: "https://docs.gravityforms.com/gform_uninstalling/"
title: "gform_uninstalling - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

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
      - [Gravity Forms Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-settings-actions/)        - [gform\_currency\_setting\_message](https://docs.gravityforms.com/gform_currency_setting_message/ "gform_currency_setting_message")
        - [gform\_plugin\_settings\_fields](https://docs.gravityforms.com/gform_plugin_settings_fields/ "gform_plugin_settings_fields")
        - [gform\_settings\_display\_license\_details](https://docs.gravityforms.com/gform_settings_display_license_details/ "gform_settings_display_license_details")
        - [gform\_settings\_menu](https://docs.gravityforms.com/gform_settings_menu/ "gform_settings_menu")
        - [gform\_settings\_save\_button](https://docs.gravityforms.com/gform_settings_save_button/ "gform_settings_save_button")
        - [gform\_settings\_SUBVIEW](https://docs.gravityforms.com/gform_settings_subview/ "gform_settings_SUBVIEW")
        - [gform\_uninstalling](https://docs.gravityforms.com/gform_uninstalling/ "gform_uninstalling")
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

# gform\_uninstalling

- [Description](https://docs.gravityforms.com/gform_uninstalling/#description)
- [Usage](https://docs.gravityforms.com/gform_uninstalling/#usage)
- [Parameters](https://docs.gravityforms.com/gform_uninstalling/#parameters)
- [Examples](https://docs.gravityforms.com/gform_uninstalling/#examples)
- [Delete an option on uninstall](https://docs.gravityforms.com/gform_uninstalling/#h-delete-an-option-on-uninstall)
- [Placement](https://docs.gravityforms.com/gform_uninstalling/#h-placement)
- [Since](https://docs.gravityforms.com/gform_uninstalling/#since)
- [Source Code](https://docs.gravityforms.com/gform_uninstalling/#source-code)

## Description

The `gform_uninstalling` action hook can be used to perform any clean-up tasks when the uninstall button has been clicked on the Forms > Settings > Uninstall page.

## Usage

The action hook which runs during uninstall would be used like so:

```

```

## Parameters

This hook has no parameters.

## Examples

### Delete an option on uninstall

This example shows how you can delete custom options from the wp\_options table when Gravity Forms is uninstalled.

```

```

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Since

This action hook was added in Gravity Forms v2.6.9.

## Source Code

This action hook is located in `GFSettings::settings_uninstall_page()` in _settings.php_.

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: December 28, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)