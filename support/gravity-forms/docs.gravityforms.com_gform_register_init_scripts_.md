---
url: "https://docs.gravityforms.com/gform_register_init_scripts/"
title: "gform_register_init_scripts - Gravity Forms Documentation"
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

# gform\_register\_init\_scripts

- [Description](https://docs.gravityforms.com/gform_register_init_scripts/#h-description)
- [Usage](https://docs.gravityforms.com/gform_register_init_scripts/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_register_init_scripts/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_register_init_scripts/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_register_init_scripts/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_register_init_scripts/#h-source-code)

## Description

Tap into Gravity Forms “initialization scripts” functionality and register your own scripts to run inline with Gravity Forms. Scripts added via the **GFFormDisplay::add\_init\_script()** function will be output with the form(s) they are registered for.

## Usage

Applies to all forms.

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_register_init_scripts'``,``'my_custom_function'``, 10, 2 );` |

You can also specify this per form by adding the form id ( **123** in this example) after the hook name.

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_register_init_scripts_123'``,``'my_custom_function'``, 10, 2 );` |

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The current form.
- **$field\_values** [array](https://docs.gravityforms.com/array)

If any field values were provided in the shortcode or functional call responsible for displaying this form, they will be available here.

## Examples

[This example](http://gravitywiz.com/2012/05/24/format-field-as-currency/) (via Gravity Wiz), demonstrates how the gform\_register\_init\_scripts hook can be used to register your GF-related initialization scripts using the **GFFormDisplay::add\_init\_script()** function.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15 | `add_action(``'gform_register_init_scripts'``,``'gform_format_money'``);`<br>`function``gform_format_money(``$form``) {`<br>```$script``= <<<JS`<br>`(``function``($) {`<br>```$(``".gf_money input"``).each(``function``() {`<br>```$(this).val(gformFormatMoney($(this).val()));`<br>```}).change(``function``() {`<br>```$(this).val(gformFormatMoney($(this).val()));`<br>```});`<br>`})(jQuery);`<br>`JS;`<br>```GFFormDisplay::add_init_script(``$form``[``'id'``],``'format_money'``, GFFormDisplay::ON_PAGE_RENDER,``$script``);`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This filter is located in GFFormDisplay::register\_form\_init\_scripts() in _form\_display.php_.

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 13, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_register_init_scripts/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)