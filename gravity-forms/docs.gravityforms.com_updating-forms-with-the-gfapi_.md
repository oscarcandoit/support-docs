---
url: "https://docs.gravityforms.com/updating-forms-with-the-gfapi/"
title: "Updating Forms with the GFAPI - Gravity Forms Documentation"
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

# Updating Forms with the GFAPI

- [Introduction](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#h-introduction)
- [Updating a single form](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form)
- [Method Overview](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-source-code)
- [Parameters](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-parameters)
- [Returns](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-returns)
- [Usage Example](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-usage-example)
- [Updating multiple forms](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms)
- [Method Overview](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#h-method-overview-0)
- [Source Code](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-source-code)
- [Parameters](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-parameters)
- [Returns](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-returns)
- [Usage Example](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-usage-example)
- [Updating a form property](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-property)
- [Method Overview](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#h-method-overview-1)
- [Source Code](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-property-source-code)
- [Parameters](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-property-parameters)
- [Returns](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-property-returns)
- [Usage Example](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-property-usage-example)
- [Updating a property for multiple forms](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-property)
- [Method Overview](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#h-method-overview-2)
- [Source Code](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-property-source-code)
- [Parameters](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-property-parameters)
- [Returns](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-property-returns)
- [Usage Example](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-property-usage-example)

## Introduction

The **GFAPI::update\_form()**, **GFAPI::update\_forms()**, **GFAPI::update\_form\_property()**, and **GFAPI::update\_forms\_property()** methods are used to update forms and their properties.

## Updating a single form

The **GFAPI::update\_form()** method is used to update a single form.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_form** |
| Parameters | [see below](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-parameters) |
| Returns | [see below](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_form(``$form``,``$form_id``= null ) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form** | [array](https://docs.gravityforms.com/array) | An associative array containing the form settings, fields, notifications, confirmations, and other properties (e.g. add-on settings). See [Form Object](https://docs.gravityforms.com/form-object/). |
| **$form\_id** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) | Optional.<br>The form to be updated, overrides the `$form['id']`. |

### Returns

[Boolean](https://docs.gravityforms.com/boolean), true on success, or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::update_form(``$form``);` |

## Updating multiple forms

The **GFAPI::update\_forms()** method is used to update multiple forms.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_forms** |
| Parameters | [see below](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-parameters) |
| Returns | [see below](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_forms(``$forms``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$forms** | [array\[\]](https://docs.gravityforms.com/array) | An array containing the forms to be updated.<br>Each form is an associative array containing the form settings, fields, notifications, confirmations, and other properties (e.g. add-on settings). See [Form Object](https://docs.gravityforms.com/form-object/). |

### Returns

[Boolean](https://docs.gravityforms.com/boolean), true on success, or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::update_forms(``array``(``$form_1``,``$form_2``) );` |

## Updating a form property

The **GFAPI::update\_form\_property()** method is used to update a property of a single form.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_form\_property** |
| Parameters | [see below](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-property-parameters) |
| Returns | [see below](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-form-property-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_form_property(``$form_id``,``$property_key``,``$value``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the form the property is to be updated for. |
| **$property\_key** | [string](https://docs.gravityforms.com/string) | The name of the column in the database to be updated.<br>Possible values: `is_trash`, `is_active`, or `title`. |
| **$value** | [string](https://docs.gravityforms.com/string) \| [boolean](https://docs.gravityforms.com/boolean) | The new value of the property. |

### Returns

The result of the query, [mixed](https://docs.gravityforms.com/mixed), or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::update_form_property(``$form_id``,``$property_key``,``$value``);` |

## Updating a property for multiple forms

The **GFAPI::update\_forms\_property()** method is used to update a property of multiple forms.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_forms\_property** |
| Parameters | [see below](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-property-parameters) |
| Returns | [see below](https://docs.gravityforms.com/updating-forms-with-the-gfapi/#update-forms-property-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_forms_property(``$form_ids``,``$property_key``,``$value``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_ids** | [integer](https://docs.gravityforms.com/integer) [\[\]](https://docs.gravityforms.com/array) | An array of form IDs the property is to be updated for. |
| **$property\_key** | [string](https://docs.gravityforms.com/string) | The name of the column in the database to be updated.<br>Possible values: `is_trash`, `is_active`, or `title`. |
| **$value** | [string](https://docs.gravityforms.com/string) \| [boolean](https://docs.gravityforms.com/boolean) | The new value of the property. |

### Returns

The result of the query, [mixed](https://docs.gravityforms.com/mixed), or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::update_forms_property(``array``(``$form_1_id``,``$form_2_id``) ),``$property_key``,``$value``);` |

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/updating-forms-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)