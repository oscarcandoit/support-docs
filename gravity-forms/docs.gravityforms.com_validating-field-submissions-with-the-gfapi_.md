---
url: "https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/"
title: "Validating Field Submissions with GFAPI"
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
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)      - [Creating Forms with the GFAPI](https://docs.gravityforms.com/creating-forms-with-the-gfapi/ "Creating Forms with the GFAPI")
      - [Duplicating Forms with the GFAPI](https://docs.gravityforms.com/duplicating-forms-with-the-gfapi/ "Duplicating Forms with the GFAPI")
      - [Updating Forms with the GFAPI](https://docs.gravityforms.com/updating-forms-with-the-gfapi/ "Updating Forms with the GFAPI")
      - [Getting Forms with the GFAPI](https://docs.gravityforms.com/getting-forms-with-the-gfapi/ "Getting Forms with the GFAPI")
      - [Deleting Forms with the GFAPI](https://docs.gravityforms.com/deleting-forms-with-the-gfapi/ "Deleting Forms with the GFAPI")
      - [Submitting Forms with the GFAPI](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/ "Submitting Forms with the GFAPI")
      - [GFAPI Class](https://docs.gravityforms.com/api-functions/ "GFAPI Class")
      - [Validating Form Submissions with the GFAPI](https://docs.gravityforms.com/validating-forms-with-the-gfapi/ "Validating Form Submissions with the GFAPI")
      - [Creating Entries with the GFAPI](https://docs.gravityforms.com/creating-entries-with-the-gfapi/ "Creating Entries with the GFAPI")
      - [Updating Entries with the GFAPI](https://docs.gravityforms.com/updating-entries-with-the-gfapi/ "Updating Entries with the GFAPI")
      - [Searching and Getting Entries with the GFAPI](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/ "Searching and Getting Entries with the GFAPI")
      - [Deleting Entries with the GFAPI](https://docs.gravityforms.com/deleting-entries-with-the-gfapi/ "Deleting Entries with the GFAPI")
      - [Managing Add-On Feeds with the GFAPI](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/ "Managing Add-On Feeds with the GFAPI")
      - [Sending Notifications with the GFAPI](https://docs.gravityforms.com/sending-notifications-with-the-gfapi/ "Sending Notifications with the GFAPI")
      - [Getting Fields with the GFAPI](https://docs.gravityforms.com/getting-fields-with-the-gfapi/ "Getting Fields with the GFAPI")
      - [Validating Field Submissions with the GFAPI](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/ "Validating Field Submissions with the GFAPI")
      - [Managing Notes with the GFAPI](https://docs.gravityforms.com/managing-notes-with-the-gfapi/ "Managing Notes with the GFAPI")
      - [GFAPI Examples for Forms and Entries](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/ "GFAPI Examples for Forms and Entries")
      - [gf\_has\_action](https://docs.gravityforms.com/gf_has_action/ "gf_has_action")
      - [gf\_has\_filters](https://docs.gravityforms.com/gf_has_filters/ "gf_has_filters")
      - [Helper Functions](https://docs.gravityforms.com/helper-functions/ "Helper Functions")
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Validating Field Submissions with the GFAPI

- [Introduction](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#introduction)
- [Method Overview](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#source-code)
- [Parameters](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#parameters)
- [Returns](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#returns)
- [Usage Examples](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#usage-examples)
- [Validate multi-input field type](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#validate-multi-input-field-type)
- [Compare value against another field](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#compare-value-against-another-field)
- [Since](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#h-since)

## Introduction

The **GFAPI::validate\_field()** method, added in Gravity Forms 2.7, is used to validate the input values of a specific field. This method can trigger the following filters:

- [gform\_is\_duplicate](https://docs.gravityforms.com/gform_is_duplicate/)
- [gform\_duplicate\_message](https://docs.gravityforms.com/gform_duplicate_message/)
- [gform\_field\_validation](https://docs.gravityforms.com/gform_field_validation/)

If you need to validate all or most fields of a form see [Validating Form Submissions with the GFAPI](https://docs.gravityforms.com/validating-forms-with-the-gfapi/).

## Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **validate\_field** |
| Parameters | [see\_below](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/#returns) |

## Source Code

|     |
| --- |
| `public``static``function``validate_field(``$form_id``,``$field_id``,``$input_values``=``array``() ) {}` |

This method is located in /includes/ _api.php_.

## Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the form this submission belongs to. |
| **$field\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the field to be validated. |
| **$input\_values** | [array](https://docs.gravityforms.com/array) | An associative array containing the values to be validated using the field input names as the keys. <br>Will be merged into the `$_POST`.<br>The expected input names are identical to the input names found in the form markup. If you have any doubts about the name of an input, use your browsers developer tools to inspect the inputs via the form preview page. |

## Returns

An associative [array](https://docs.gravityforms.com/array) containing the result properties or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if the form can’t be found, isn’t active, is trashed, doesn’t have any fields, the field can’t be found, or the field doesn’t support validation.

| Key | Type | Description |
| --- | --- | --- |
| **is\_valid** | [bool](https://docs.gravityforms.com/bool) | The field validation result. |
| **message** | [string](https://docs.gravityforms.com/string) | The field validation message, if invalid. |

## Usage Examples

This is a basic usage example showing how to pass the parameters and how to handle the returned result.

|     |
| --- |
| `$result``= GFAPI::validate_field(``$form_id``,``$field_id``,``$input_values``);`<br>`if``( is_wp_error(``$result``) ) {`<br>```$error_message``=``$result``->get_error_message();`<br>```// Do something with the error message.`<br>`}``elseif``( ! rgar(``$result``,``'is_valid'``) ) {`<br>```$error_message``= rgar(``$result``,``'message'``);`<br>```// Do something with the error message.`<br>`}``else``{`<br>```// Do something with the valid values.`<br>`}` |

### Validate multi-input field type

This example shows how you would define the parameters when needing to validate a multi-input field type. In this case a name field with the id 2 belonging to form id 1.

|     |
| --- |
| `$form_id``= 1;`<br>`$field_id``= 2;`<br>`$input_values``=``array``();`<br>`$input_values``[``'input_2_3'``] =``'First name'``;`<br>`$input_values``[``'input_2_6'``] =``'Last name'``;`<br>`$result``= GFAPI::validate_field(``$form_id``,``$field_id``,``$input_values``);` |

### Compare value against another field

Submitting the values from multiple fields is supported but out of the box only the values of the field matching the specified `$field_id` will be validated. This can be used to allow the [gform\_field\_validation](https://docs.gravityforms.com/gform_field_validation/) filter (e.g. [example 5](https://docs.gravityforms.com/gform_field_validation/#h-5-compare-value-against-another-field)) to compare the values of multiple fields.

|     |
| --- |
| `$form_id``= 10;`<br>`$field_id``= 2;`<br>`$input_values``=``array``();`<br>`$input_values``[``'input_1'``] =``'field 1 value'``;`<br>`$input_values``[``'input_2'``] =``'field 2 value'``;`<br>`$result``= GFAPI::validate_field(``$form_id``,``$field_id``,``$input_values``);` |

## Since

This method was added in Gravity Forms 2.7.

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 22, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)