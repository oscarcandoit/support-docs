---
url: "https://docs.gravityforms.com/gform_field_standard_settings/"
title: "gform_field_standard_settings - Gravity Forms Documentation"
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
      - [Field Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-framework-actions/)        - [gform\_field\_advanced\_settings](https://docs.gravityforms.com/gform_field_advanced_settings/ "gform_field_advanced_settings")
        - [gform\_field\_appearance\_settings](https://docs.gravityforms.com/gform_field_appearance_settings/ "gform_field_appearance_settings")
        - [gform\_field\_standard\_settings](https://docs.gravityforms.com/gform_field_standard_settings/ "gform_field_standard_settings")
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

# gform\_field\_standard\_settings

- [Description](https://docs.gravityforms.com/gform_field_standard_settings/#h-description)
- [Usage](https://docs.gravityforms.com/gform_field_standard_settings/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_field_standard_settings/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_field_standard_settings/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_field_standard_settings/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_field_standard_settings/#h-source-code)

## Description

Use this action to create new field settings under the Standard tab. Useful when implementing a new custom field type that requires custom settings.

## Usage

|     |
| --- |
| `add_action(``'gform_field_standard_settings'``,``'my_standard_settings'``, 10, 2 );` |

## Parameters

- **$index** [integer](https://docs.gravityforms.com/integer)

Specify the position that the settings should be displayed. For a list of all available positions, search form\_detail.php for “gform\_field\_standard\_settings” or review the [Common Field Settings](https://docs.gravityforms.com/common-field-settings) article.
- **$form\_id** [integer](https://docs.gravityforms.com/integer)

The ID of the form from which the entry value was submitted.

## Examples

This example creates a new standard setting for Single Line Text fields on the field’s General tab at position 25 (right after the Field Label setting), that specifies if the field data should be encrypted.

|     |
| --- |
| `add_action(``'gform_field_standard_settings'``,``'my_standard_settings'``, 10, 2 );`<br>`function``my_standard_settings(``$position``,``$form_id``) {`<br>``<br>```//create settings on position 25 (right after Field Label)`<br>```if``(``$position``== 25 ) {`<br>```?>`<br>```<li``class``=``"encrypt_setting field_setting"``>`<br>```<input type=``"checkbox"``id=``"field_encrypt_value"``onclick=``"SetFieldProperty('encryptField', this.checked);"``/>`<br>```<label``for``=``"field_encrypt_value"``style=``"display:inline;"``>`<br>```<?php _e(``"Encrypt Field Value"``,``"your_text_domain"``); ?>`<br>```<?php gform_tooltip(``"form_field_encrypt_value"``) ?>`<br>```</label>`<br>```</li>`<br>```<?php`<br>```}`<br>`}`<br>`//Action to inject supporting script to the form editor page`<br>`add_action(``'gform_editor_js'``,``'editor_script'``);`<br>`function``editor_script(){`<br>```?>`<br>```<script type=``'text/javascript'``>`<br>```//adding setting to fields of type "text"`<br>```fieldSettings.text +=``', .encrypt_setting'``;`<br>```//binding to the load field settings event to initialize the checkbox`<br>```jQuery(document).on(``'gform_load_field_settings'``,``function``(event, field, form){`<br>```jQuery(``'#field_encrypt_value'``).prop(``'checked'``, Boolean( rgar( field,``'encryptField'``) ) );`<br>```});`<br>```</script>`<br>```<?php`<br>`}`<br>`//Filter to add a new tooltip`<br>`add_filter(``'gform_tooltips'``,``'add_encryption_tooltips'``);`<br>`function``add_encryption_tooltips(``$tooltips``) {`<br>```$tooltips``[``'form_field_encrypt_value'``] =``"<h6>Encryption</h6>Check this box to encrypt this field's data"``;`<br>```return``$tooltips``;`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in _form\_detail.php_.

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 5, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_field_standard_settings/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)