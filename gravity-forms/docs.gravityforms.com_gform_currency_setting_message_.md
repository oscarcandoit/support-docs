---
url: "https://docs.gravityforms.com/gform_currency_setting_message/"
title: "gform_currency_setting_message - Gravity Forms Documentation"
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

# gform\_currency\_setting\_message

- [Description](https://docs.gravityforms.com/gform_currency_setting_message/#h-description)
- [Usage](https://docs.gravityforms.com/gform_currency_setting_message/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_currency_setting_message/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_currency_setting_message/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_currency_setting_message/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_currency_setting_message/#h-source-code)

## Description

The gform\_currency\_setting\_message action hook is used to add a message after the currency drop down within the Settings page.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_currency_setting_message'``,``'currency_message'``);` |

## Parameters

- **$message** [string](https://docs.gravityforms.com/string)
The default message. An empty string.


## Examples

This example adds a message below the currency drop down.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action(``'gform_currency_setting_message'``,``'currency_message'``);`<br>`function``currency_message() {`<br>```esc_html_e(``'US Dollars is the only supported currency by this payment gateway.'``,``'your_text_domain_here'``);`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This action hook was originally located in GFSettings::gravityforms\_settings\_page() in _settings.php_. In Gravity Forms 2.5 it was moved to GFSetting::currency\_message\_callback().

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 2, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_currency_setting_message/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)