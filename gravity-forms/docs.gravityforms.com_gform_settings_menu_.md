---
url: "https://docs.gravityforms.com/gform_settings_menu/"
title: "gform_settings_menu - Gravity Forms Documentation"
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

# gform\_settings\_menu

- [Description](https://docs.gravityforms.com/gform_settings_menu/#h-description)
- [Usage](https://docs.gravityforms.com/gform_settings_menu/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_settings_menu/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_settings_menu/#h-examples)
- [1\. Add tab](https://docs.gravityforms.com/gform_settings_menu/#h-1-add-tab)
- [2\. Remove tab](https://docs.gravityforms.com/gform_settings_menu/#h-2-remove-tab)
- [Placement](https://docs.gravityforms.com/gform_settings_menu/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_settings_menu/#h-source-code)

## Description

Use this filter to add/remove tabs to/form the main Gravity Forms settings page.

If creating a Gravity Forms Add-On, consider using the [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework) instead as it provides many other features.

## Usage

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_settings_menu'``,``'add_custom_settings_tab'``);` |

## Parameters

- **$tabs** [array](https://docs.gravityforms.com/array)
An array of tabs to be filtered, in the following format:





|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `array``(`<br>```array``(``'name'``=>``'tab1'``,``'label'``=>``'Settings 1'``),`<br>```array``(``'name'``=>``'tab2'``,``'label'``=>``'Settings 2'``)`<br>`)` |


## Examples

### 1\. Add tab

The following example demonstrates how to add a custom settings tab.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_filter(``'gform_settings_menu'``,``'add_custom_settings_tab'``);`<br>`function``add_custom_settings_tab(``$tabs``) {`<br>```$tabs``[] =``array``(``'name'``=>``'my_tab'``,``'label'``=>``'My Settings'``);`<br>```return``$tabs``;`<br>`}` |

### 2\. Remove tab

The following example shows how tabs can be removed. For add-ons which extend the offical Gravity Forms add-on framework the tab name will be the [add-on slug](https://docs.gravityforms.com/gravity-forms-add-on-slugs/).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13 | `add_filter(``'gform_settings_menu'``,``function``(``$tabs``) {`<br>```$remove_names``=``array``(`<br>```'gravityformsuserregistration'``,`<br>```);`<br>```foreach``(``$tabs``as``$key``=>``$tab``) {`<br>```if``( in_array(``$tab``[``'name'``],``$remove_names``) ) {`<br>```unset(``$tabs``[``$key``] );`<br>```}`<br>```}`<br>```return``$tabs``;`<br>`} );` |

## Placement

This code should be placed in the [functions.php file](http://codex.wordpress.org/Theme_Development#Functions_File) of your active theme.

## Source Code

This filter is located in GFSettings::page\_header() in _settings.php_.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 21, 2020

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_settings_menu/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)