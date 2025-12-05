---
url: "https://docs.gravityforms.com/gform_field_settings_tab_content/"
title: "gform_field_settings_tab_content - Gravity Forms Documentation"
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
      - [Editor Actions](https://docs.gravityforms.com/category/developers/hooks/actions/editor-actions/)        - [gform\_editor\_js\_set\_default\_values](https://docs.gravityforms.com/gform_editor_js_set_default_values/ "gform_editor_js_set_default_values")
        - [gform\_editor\_js](https://docs.gravityforms.com/gform_editor_js/ "gform_editor_js")
        - [gform\_field\_settings\_tab\_content](https://docs.gravityforms.com/gform_field_settings_tab_content/ "gform_field_settings_tab_content")
        - [gform\_editor\_sidebar\_panel\_content](https://docs.gravityforms.com/gform_editor_sidebar_panel_content/ "gform_editor_sidebar_panel_content")
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

# gform\_field\_settings\_tab\_content

- [Description](https://docs.gravityforms.com/gform_field_settings_tab_content/#h-description)
- [Usage](https://docs.gravityforms.com/gform_field_settings_tab_content/#h-usage)
- [Examples](https://docs.gravityforms.com/gform_field_settings_tab_content/#h-examples)
- [1\. Add content to your custom tab](https://docs.gravityforms.com/gform_field_settings_tab_content/#h-1-add-content-to-your-custom-tab)
- [Placement](https://docs.gravityforms.com/gform_field_settings_tab_content/#h-placement)
- [Since](https://docs.gravityforms.com/gform_field_settings_tab_content/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_field_settings_tab_content/#h-source-code)

## Description

The gform\_field\_settings\_tab\_content action hook is used to echo the content for a custom field settings tab in the form editor. Use the [gform\_field\_settings\_tabs](https://docs.gravityforms.com/gform_field_settings_tabs) filter to register the tab.

## Usage

The base action which would run for all forms and all custom tabs would be used like so:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_field_settings_tab_content'``,``'your_function_name'``, 10, 2 );` |

You can target a specific tab by adding the tab id after the hook name.

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_field_settings_tab_content_thetabid'``,``'your_function_name'``, 10, 2 );` |

You can target a specific tab and form by adding the id’s after the hook name.

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_field_settings_tab_content_thetabid_6'``,``'your_function_name'``, 10, 2 );` |

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object/)
The form currently being edited.

- **$tab\_id** [string](https://codex.wordpress.org/How_to_Pass_Tag_Parameters#String)

The unique ID of the tab being displayed.


## Examples

### 1\. Add content to your custom tab

|     |     |
| --- | --- |
| 1<br>2<br>3 | `add_action(``'gform_field_settings_tab_content_my_custom_tab_1'``,``function``(``$form``,``$tab_id``) {`<br>```echo``'<li>the content of my custom tab.</li>'``;`<br>`}, 10, 2 );` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme or a custom functions plugin.

## Since

This action hook was added in Gravity Forms v2.5.

## Source Code

This action hook is located in GFFormDetail::forms\_page() in _form\_detail.php_

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 27, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_field_settings_tab_content/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)