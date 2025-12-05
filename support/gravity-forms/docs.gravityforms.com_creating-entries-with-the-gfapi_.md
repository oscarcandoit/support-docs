---
url: "https://docs.gravityforms.com/creating-entries-with-the-gfapi/"
title: "Creating Entries with the GFAPI - Gravity Forms Documentation"
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

# Creating Entries with the GFAPI

- [Introduction](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#h-introduction)
- [Adding a single entry](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entry)
- [Method Overview](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entry-source-code)
- [Parameters](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entry-parameters)
- [Returns](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entry-returns)
- [Usage Example](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entry-usage-example)
- [Adding multiple entries](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entries)
- [Method Overview](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#h-method-overview-0)
- [Source Code](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entries-source-code)
- [Parameters](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entries-parameters)
- [Returns](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entries-returns)
- [Usage Example](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entries-usage-example)

## Introduction

The **GFAPI::add\_entry()** and **GFAPI::add\_entries()** methods are used to add entries directly to the database.

These methods do not trigger form submission processes such as validation, add-on feeds, notifications, or confirmations; to trigger those processes see [Submitting Forms with the GFAPI](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/).

## Adding a single entry

The **GFAPI::add\_entry()** method is used to add a single entry.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **add\_entry** |
| Parameters | [see below](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entry-parameters) |
| Returns | [see below](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entry-returns) |

### Source Code

|     |
| --- |
| `public``static``function``add_entry(``$entry``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$entry** | [array](https://docs.gravityforms.com/array) | See [Entry Object](https://docs.gravityforms.com/entry-object/). <br>If the `id` property is included it will be ignored.<br>The `form_id` property is required.<br>All other properties, meta, and field values are optional. |

### Returns

An [integer](https://docs.gravityforms.com/integer), the entry ID, or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::add_entry(``$entry``);` |

## Adding multiple entries

The **GFAPI::add\_entries()** method is used to add multiple entries.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **add\_entries** |
| Parameters | [see below](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entries-parameters) |
| Returns | [see below](https://docs.gravityforms.com/creating-entries-with-the-gfapi/#add-entries-returns) |

### Source Code

|     |
| --- |
| `public``static``function``add_entries(``$entries``,``$form_id``= null ) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$entries** | [array](https://docs.gravityforms.com/array) | An array containing one or more entry arrays.<br>See [Entry Object](https://docs.gravityforms.com/entry-object/).<br>If the `id` property is included it will be ignored.<br>The `form_id` property is required if the `$form_id` param is not specified.<br>All other properties, meta, and field values are optional. |
| **$form\_id** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) | Optional.<br>The ID of the form the entries are to be added to.<br>If specified the `form_id` property included in the entry arrays will be ignored. |

### Returns

An [array](https://docs.gravityforms.com/array) of [integers](https://docs.gravityforms.com/integer), the entry IDs, or a [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) instance if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::add_entries(``array``(``$entry_1``,``$entry_2``) );` |

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/creating-entries-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)