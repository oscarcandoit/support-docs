---
url: "https://docs.gravityforms.com/getting-fields-with-the-gfapi/"
title: "Getting Fields with the GFAPI - Gravity Forms Documentation"
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

# Getting Fields with the GFAPI

- [Introduction](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#h-introduction)
- [Getting fields of specific types](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-fields-by-type)
- [Method Overview](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-fields-by-type-source-code)
- [Parameters](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-fields-by-type-parameters)
- [Returns](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-fields-by-type-returns)
- [Usage Example](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-fields-by-type-usage-example)
- [Getting a specific field](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-field)
- [Method Overview](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#h-method-overview-0)
- [Since](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-field-source-code)
- [Source Code](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-field-source-code)
- [Parameters](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-field-parameters)
- [Returns](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-field-returns)
- [Usage Example](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-field-usage-example)

## Introduction

The **GFAPI::get\_fields\_by\_type()** and **GFAPI::get\_field()** methods are used to get form fields.

## Getting fields of specific types

The **GFAPI::get\_fields\_by\_type()** method is used to get all fields that match the specified type(s) from a specific form.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_fields\_by\_type** |
| Parameters | [see\_below](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-fields-by-type-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-fields-by-type-returns) |

### Source Code

|     |
| --- |
| `public``static``function``get_fields_by_type(``$form``,``$types``,``$use_input_type``= false ) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form** | [array](https://docs.gravityforms.com/array) | An associative array containing the form settings, fields, notifications, confirmations, and other properties (e.g. add-on settings). See [Form Object](https://docs.gravityforms.com/form-object/). |
| **$types** | [array](https://docs.gravityforms.com/array) \| [string](https://docs.gravityforms.com/string) | The field types to get. Using a string for a single type or an array to get multiple types. |
| **$use\_input\_type** | [boolean](https://docs.gravityforms.com/boolean) | Optional.<br>Indicates if the field `inputType` property should be checked.<br>Default: `false` |

### Returns

An [array](https://docs.gravityforms.com/array) of [Field Objects](https://docs.gravityforms.com/field-object/) of matching type(s).

### Usage Example

|     |
| --- |
| `$result``= GFAPI::get_fields_by_type(``$form``,``array``(``'checkbox'``), true );` |

## Getting a specific field

The **GFAPI::get\_field()** method is used to get a specific field from a specific form.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_field** |
| Parameters | [see\_below](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-field-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/getting-fields-with-the-gfapi/#get-field-returns) |

### Since

The **GFAPI::get\_field()** method was added in version 2.3.

### Source Code

|     |
| --- |
| `public``static``function``get_field(``$form_or_id``,``$field_id``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_or\_id** | [integer](https://docs.gravityforms.com/integer) \| [array](https://docs.gravityforms.com/array) | The form ID or [Object](https://docs.gravityforms.com/form-object/). |
| **$field\_id** | [integer](https://docs.gravityforms.com/integer) | The field or input ID. |

### Returns

A [Field Object](https://docs.gravityforms.com/field-object/) or [boolean](https://docs.gravityforms.com/boolean) (`false`) if the field can’t be found.

### Usage Example

|     |
| --- |
| `// Passing the form object with the field id.`<br>`$field_one``= GFAPI::get_field(``$form``, 1 );`<br>``<br>`// Passing the form id with the field id.`<br>`$field_one``= GFAPI::get_field( 2, 1 );`<br>``<br>`// Passing the form id with the input id.`<br>`$field_one``= GFAPI::get_field( 2,``'1.3'``);` |

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

[Algolia](https://docs.gravityforms.com/getting-fields-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)