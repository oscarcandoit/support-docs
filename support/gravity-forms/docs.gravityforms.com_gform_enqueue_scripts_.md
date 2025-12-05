---
url: "https://docs.gravityforms.com/gform_enqueue_scripts/"
title: "gform_enqueue_scripts - Gravity Forms Documentation"
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
      - [Form Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-actions/)
      - [Form Activity Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-activity-actions/)
      - [Form Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-settings-actions/)
      - [Import/Export Actions](https://docs.gravityforms.com/category/developers/hooks/actions/importexport-actions/)
      - [Notifications Actions](https://docs.gravityforms.com/category/developers/hooks/actions/notifications-actions/)
      - [Payment Actions](https://docs.gravityforms.com/category/developers/hooks/actions/payment-actions/)
      - [Post Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/post-fields-actions/)
      - [Script/Style Actions](https://docs.gravityforms.com/category/developers/hooks/actions/scriptstyle-actions/)        - [gform\_enqueue\_scripts](https://docs.gravityforms.com/gform_enqueue_scripts/ "gform_enqueue_scripts")
        - [gform\_post\_enqueue\_scripts](https://docs.gravityforms.com/gform_post_enqueue_scripts/ "gform_post_enqueue_scripts")
        - [gform\_pre\_print\_scripts](https://docs.gravityforms.com/gform_pre_print_scripts/ "gform_pre_print_scripts")
        - [gform\_print\_scripts](https://docs.gravityforms.com/gform_print_scripts/ "gform_print_scripts")
        - [gform\_register\_init\_scripts](https://docs.gravityforms.com/gform_register_init_scripts/ "gform_register_init_scripts")
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

# gform\_enqueue\_scripts

- [Description](https://docs.gravityforms.com/gform_enqueue_scripts/#h-description)
- [Usage](https://docs.gravityforms.com/gform_enqueue_scripts/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_enqueue_scripts/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_enqueue_scripts/#h-examples)
- [1\. Enqueue custom script](https://docs.gravityforms.com/gform_enqueue_scripts/#h-1-enqueue-custom-script)
- [2\. Dequeue stylesheets](https://docs.gravityforms.com/gform_enqueue_scripts/#h-2-dequeue-stylesheets)
- [3\. Manually include RTL stylesheet](https://docs.gravityforms.com/gform_enqueue_scripts/#h-3-manually-include-rtl-stylesheet)
- [4\. Dequeue script](https://docs.gravityforms.com/gform_enqueue_scripts/#h-4-dequeue-script)
- [Placement](https://docs.gravityforms.com/gform_enqueue_scripts/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_enqueue_scripts/#h-source-code)

## Description

This filter is executed during the process of enqueuing scripts for each form in the current page. When developing custom field types that require extra scripts, this hook should be used to enqueue the custom scripts when appropriate.

## Usage

|     |
| --- |
| `add_action(``'gform_enqueue_scripts'``,``'your_function_name'``, 10, 2 );` |

You can also specify this per form by adding the form id after the hook name.

|     |
| --- |
| `add_action(``'gform_enqueue_scripts_6'``,``'your_function_name'``, 10, 2 );` |

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object)


The current form object.

- **$is\_ajax** [bool](https://docs.gravityforms.com/bool)
Specify if the form is configured to be submitted via AJAX.


## Examples

### 1\. Enqueue custom script

This example enqueues a custom script for all AJAX forms.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `add_action(``'gform_enqueue_scripts'``,``'enqueue_custom_script'``, 10, 2 );`<br>`function``enqueue_custom_script(``$form``,``$is_ajax``) {`<br>```if``(``$is_ajax``) {`<br>```wp_enqueue_script(``'custom_script'``,``'path/file.js'``);`<br>```}`<br>`}` |

### 2\. Dequeue stylesheets

This example shows how you can dequeue the stylesheets for a specific form.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `add_action(``'gform_enqueue_scripts_1'``,``'dequeue_gf_stylesheets'``, 11 );`<br>`function``dequeue_gf_stylesheets() {`<br>```wp_dequeue_style(``'gforms_reset_css'``);`<br>```wp_dequeue_style(``'gforms_datepicker_css'``);`<br>```wp_dequeue_style(``'gforms_formsmain_css'``);`<br>```wp_dequeue_style(``'gforms_ready_class_css'``);`<br>```wp_dequeue_style(``'gforms_browsers_css'``);`<br>`}` |

### 3\. Manually include RTL stylesheet

Gravity Forms will automatically include the RTL stylesheet if WordPress indicates an RTL language is in use. However, if you haven’t set the language yet and want to test with the RTL styles, you can use the following to include the stylesheet.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_action(``'gform_enqueue_scripts'``,``'enqueue_custom_script'``);`<br>`function``enqueue_custom_script() {`<br>```$min``= defined(``'SCRIPT_DEBUG'``) && SCRIPT_DEBUG || isset(``$_GET``[``'gform_debug'``] ) ?``''``:``'.min'``;`<br>```wp_enqueue_style(``'gforms_rtl_css'``, GFCommon::get_base_url() .``"/css/rtl{$min}.css"``, null, GFCommon::``$version``);`<br>`}` |

### 4\. Dequeue script

This example shows how you can dequeue a form script for a specific form.

|     |     |
| --- | --- |
| 1<br>2<br>3 | `add_action(``'gform_enqueue_scripts_1'``,``function``() {`<br>```wp_dequeue_script(``'gform_placeholder'``);`<br>`}, 11 );` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This filter is located in GFFormDisplay::enqueue\_form\_scripts() in _form\_display.php_.

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: December 20, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_enqueue_scripts/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)