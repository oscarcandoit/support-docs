---
url: "https://docs.gravityforms.com/gform_editor_js/"
title: "gform_editor_js - Gravity Forms Documentation"
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

# gform\_editor\_js

- [Description](https://docs.gravityforms.com/gform_editor_js/#h-description)
- [Usage](https://docs.gravityforms.com/gform_editor_js/#h-usage)
- [Examples](https://docs.gravityforms.com/gform_editor_js/#h-examples)
- [1\. Basic example](https://docs.gravityforms.com/gform_editor_js/#h-1-basic-example)
- [2\. Adding a custom setting to all field types](https://docs.gravityforms.com/gform_editor_js/#h-2-adding-a-custom-setting-to-all-field-types)
- [3\. Set default date format](https://docs.gravityforms.com/gform_editor_js/#h-3-set-default-date-format)
- [Placement](https://docs.gravityforms.com/gform_editor_js/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_editor_js/#h-source-code)

## Description

This action hook can be used to inject JavaScript into the form editor page.

## Usage

|     |
| --- |
| `add_action(``'gform_editor_js'``,``'editor_script'``);` |

## Examples

### 1\. Basic example

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_action(``'gform_editor_js'``,``'editor_script'``);`<br>`function``editor_script() {`<br>```echo``'<script type="text/javascript">//do something</script>'``;`<br>`}` |

### 2\. Adding a custom setting to all field types

This example adds a custom setting, which has been implemented using [gform\_field\_standard\_settings](https://docs.gravityforms.com/gform_field_standard_settings), [gform\_field\_appearance\_settings](https://docs.gravityforms.com/gform_field_appearance_settings), or [gform\_field\_advanced\_settings](https://docs.gravityforms.com/gform_field_advanced_settings), to the fields.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `add_action(``'gform_editor_js'``,``function``() {`<br>```echo``'<script type="text/javascript">'``. PHP_EOL;`<br>```foreach``( GF_Fields::get_all()``as``$gf_field``) {`<br>```echo``'fieldSettings.'``.``$gf_field``->type .``' += ", .encrypt_setting";'``. PHP_EOL;`<br>```}`<br>```echo``'</script>'``. PHP_EOL;`<br>`} );` |

### 3\. Set default date format

This example sets the default date format for date type fields to dmy\_dot.

|     |     |
| --- | --- |
| 1<br>2<br>3 | `add_action(``'gform_editor_js'``,``function``() {`<br>```echo``'<script type="text/javascript">function SetDefaultValues_date(field){field.dateFormat = "dmy_dot";}</script>'``. PHP_EOL;`<br>`} );` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This filter is located in _js.php_.

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: June 10, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_editor_js/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)