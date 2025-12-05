---
url: "https://docs.gravityforms.com/gform_after_create_post/"
title: "gform_after_create_post - Gravity Forms Documentation"
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
      - [Post Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/post-fields-actions/)        - [gform\_after\_create\_post](https://docs.gravityforms.com/gform_after_create_post/ "gform_after_create_post")
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

# gform\_after\_create\_post

- [Description](https://docs.gravityforms.com/gform_after_create_post/#h-description)
- [Usage](https://docs.gravityforms.com/gform_after_create_post/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_after_create_post/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_after_create_post/#h-examples)
- [1\. Update the post](https://docs.gravityforms.com/gform_after_create_post/#h-1-update-the-post)
- [2\. Convert date to the format expected by an ACF datepicker field type](https://docs.gravityforms.com/gform_after_create_post/#h-2-convert-date-to-the-format-expected-by-an-acf-datepicker-field-type)
- [3\. Update a post custom field with serialized GF checkboxes](https://docs.gravityforms.com/gform_after_create_post/#h-3-update-a-post-custom-field-with-serialized-gf-checkboxes)
- [Placement](https://docs.gravityforms.com/gform_after_create_post/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_after_create_post/#h-source-code)
- [Since](https://docs.gravityforms.com/gform_after_create_post/#h-since)

## Description

This action hook is executed after the post has been created. It only applies to forms that have Post Fields.

## Usage

The following would apply to all forms.

|     |
| --- |
| `add_action(``'gform_after_create_post'``,``'your_function_name'``);` |

To limit the scope of your function to a specific form, append the form id to the end of the hook name. (format: gform\_after\_create\_post\_FORMID)

|     |
| --- |
| `add_action(``'gform_after_create_post_6'``,``'your_function_name'``);` |

## Parameters

- **$post\_id** [integer](https://docs.gravityforms.com/integer)

The ID of the post which was created from the form submission.
- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The entry currently being processed. Available from 1.9.13.
- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The form currently being processed. Available from 1.9.13.

## Examples

### 1\. Update the post

This example shows how you can update the post content, adding values from submitted fields, including an image field.

|     |
| --- |
| `add_action(``'gform_after_create_post'``,``'set_post_content'``, 10, 3 );`<br>`function``set_post_content(``$post_id``,``$entry``,``$form``) {`<br>``<br>```//getting post`<br>```$post``= get_post(``$post_id``);`<br>``<br>```//changing post content`<br>```$post``->post_content =``'Blender Version:'``. rgar(``$entry``,``'7'``) .``"<br/> <img src='"``. rgar(``$entry``, '8``' ) . "'``> <br/> <br/> " . rgar(``$entry``,``'13'``) .``" <br/> <img src='"``. rgar(``$entry``, '5``' ) . "'``>";`<br>``<br>```//updating post`<br>```wp_update_post(``$post``);`<br>`}` |

### 2\. Convert date to the format expected by an ACF datepicker field type

The example below would take the date saved for a Gravity Forms field with id 30, convert it to the format expected by the ACF datepicker field type, and save it to the custom field meta key acf\_date

Make sure to update the field id, the custom field meta key, and the form id number to make it work. Please read the snippet comments.

|     |
| --- |
| `// Change 12 below to your form id number.`<br>`add_action(``'gform_after_create_post_12'``,``'gf_date_to_acf'``, 10, 3 );`<br>`function``gf_date_to_acf(``$post_id``,``$entry``,``$form``) {`<br>```GFCommon::log_debug(``__METHOD__``.``'(): running.'``);`<br>```// Date as saved by GF. Change 30 to your date field id number.`<br>```$gf_date``= rgar(``$entry``,``'30'``);`<br>```// Date changed to format expected by ACF.`<br>```$acf_date``=``date``(``'Ymd'``,``strtotime``(``$gf_date``) );`<br>```GFCommon::log_debug(``__METHOD__``.``'(): Date for ACF: '``.``$acf_date``);`<br>```// Save converted date to the acf_date meta key. Change it to your custom field meta key.`<br>```update_post_meta(``$post_id``,``'acf_date'``,``$acf_date``);`<br>`}` |

### 3\. Update a post custom field with serialized GF checkboxes

This is useful for plugins like Advanced Custom Fields (ACF), Types and Pods where the values of the selections are stored in a serialized array. The scope of this example is limited to form id 1 and field id 18, you need to update these values to apply to your own form and field.

|     |
| --- |
| `// Change 1 in gform_after_create_post_1 to your form id number.`<br>`add_filter(``'gform_after_create_post_1'``,``'gf_post_acf_checkboxes'``, 10, 3 );`<br>`function``gf_post_acf_checkboxes(``$post_id``,``$entry``,``$form``) {`<br>``<br>```// Checkboxes field id. Change this value to your field id number.`<br>```$field_id``= 18;`<br>``<br>```// Get field object.`<br>```$field``= GFAPI::get_field(``$form``,``$field_id``);`<br>``<br>```if``(``$field``->type ==``'checkbox'``) {`<br>```// Get a comma separated list of checkboxes checked`<br>```$checked``=``$field``->get_value_export(``$entry``);`<br>``<br>```// Convert to array.`<br>```$values``=``explode``(``', '``,``$checked``);`<br>```}`<br>``<br>```// Replace my_custom_field_key with your custom field meta key.`<br>```update_post_meta(``$post_id``,``'my_custom_field_key'``,``$values``);`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

|     |
| --- |
| `gf_do_action(``'gform_after_create_post'``,``$form``[``'id'``],``$post_id``,``$lead``,``$form``)` |

This hook is located in GFFormsModel::create\_post() in _forms\_model.php_.

## Since

The form specific version of this hook was added in Gravity Forms 1.9.13.

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 15, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_after_create_post/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)