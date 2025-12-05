---
url: "https://docs.gravityforms.com/updating-entries-with-the-gfapi/"
title: "Updating Entries with the GFAPI - Gravity Forms Documentation"
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

# Updating Entries with the GFAPI

- [Introduction](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#h-introduction)
- [Updating a single entry](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry)
- [Method Overview](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-source-code)
- [Parameters](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-parameters)
- [Returns](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-returns)
- [Usage Example](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-usage-example)
- [Updating multiple entries](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entries)
- [Method Overview](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#h-method-overview-0)
- [Source Code](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entries-source-code)
- [Parameters](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entries-parameters)
- [Returns](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entries-returns)
- [Usage Example](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entries-usage-example)
- [Updating an entry property](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-property)
- [Method Overview](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#h-method-overview-1)
- [Source Code](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-property-source-code)
- [Parameters](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-property-parameters)
- [Returns](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-property-returns)
- [Usage Example](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-property-usage-example)
- [Updating an entry field value](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-field)
- [Method Overview](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#h-method-overview-2)
- [Source Code](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-field-source-code)
- [Parameters](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-field-parameters)
- [Returns](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-field-returns)
- [Usage Example](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-field-usage-example)

## Introduction

The **GFAPI::update\_entry()**, **GFAPI::update\_entries()**, **GFAPI::update\_entry\_property()**, and **GFAPI::update\_entry\_field()** methods are used to update entries in the database.

## Updating a single entry

The **GFAPI::update\_entry()** method is used to update a single entry.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_entry** |
| Parameters | [see below](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-parameters) |
| Returns | [see below](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_entry(``$entry``,``$entry_id``= null ) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$entry** | [array](https://docs.gravityforms.com/array) | See [Entry Object](https://docs.gravityforms.com/entry-object/). |
| **$entry\_id** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) | Optional.<br>The entry to be updated, overrides the `$entry['id']`. |

### Returns

[Boolean](https://docs.gravityforms.com/boolean), true on success, or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::update_entry(``$entry``);` |

## Updating multiple entries

The **GFAPI::update\_entries()** method is used to update multiple entries.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_entries** |
| Parameters | [see below](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entries-parameters) |
| Returns | [see below](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entries-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_entries(``$entries``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$entries** | [array\[\]](https://docs.gravityforms.com/array) | An array containing the entries to be updated.<br>See [Entry Object](https://docs.gravityforms.com/entry-object/). |

### Returns

[Boolean](https://docs.gravityforms.com/boolean), true on success, or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::update_entries(``array``(``$entry_1``,``$entry_2``) );` |

## Updating an entry property

The **GFAPI::update\_entry\_property()** method is used to update a property of a single entry.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_entry\_property** |
| Parameters | [see below](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-form-parameters) |
| Returns | [see below](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-property-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_entry_property(``$entry_id``,``$property``,``$value``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry the property is to be updated for. |
| **$property** | [string](https://docs.gravityforms.com/string) | The name of the column in the database to be updated.<br>Possible values: `form_id`, `post_id`, `date_created`, `date_updated`, `is_starred`, `is_read`, `ip`, `source_url`, `user_agent`, `currency`, `payment_status`, `payment_date`, `payment_amount`, `payment_method`, `transaction_id`, `is_fulfilled`, `created_by`, `transaction_type`, or `status` |
| **$value** | [null](https://docs.gravityforms.com/null) \| [string](https://docs.gravityforms.com/string) \| [integer](https://docs.gravityforms.com/integer) \| [float](https://docs.gravityforms.com/float) | The new value of the property. |

### Returns

[Boolean](https://docs.gravityforms.com/boolean), the result of the update query.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::update_entry_property(``$entry_id``,``$property``,``$value``);` |

## Updating an entry field value

The **GFAPI::update\_entry\_field()** method is used to update a field or input value of a single entry.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_entry\_field** |
| Parameters | [see below](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-field-parameters) |
| Returns | [see below](https://docs.gravityforms.com/updating-entries-with-the-gfapi/#update-entry-field-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_entry_field(``$entry_id``,``$input_id``,``$value``,``$item_index``=``''``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry the field or input value is to be updated for. |
| **$input\_id** | [integer](https://docs.gravityforms.com/integer) \| [string](https://docs.gravityforms.com/string) | The ID of the field or input the value is to be updated for. |
| **$value** | [null](https://docs.gravityforms.com/null) \| [string](https://docs.gravityforms.com/string) \| [integer](https://docs.gravityforms.com/integer) \| [float](https://docs.gravityforms.com/float) | The new value of the field or input. |
| **$item\_index** | [string](https://docs.gravityforms.com/string) | The item index if the field or input is a child of a Repeater field. |

### Returns

[Boolean](https://docs.gravityforms.com/boolean) or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::update_entry_field(``$entry_id``,``$input_id``,``$value``);` |

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/updating-entries-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)