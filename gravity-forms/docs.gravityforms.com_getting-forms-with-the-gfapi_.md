---
url: "https://docs.gravityforms.com/getting-forms-with-the-gfapi/"
title: "Getting Forms with the GFAPI - Gravity Forms Documentation"
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

# Getting Forms with the GFAPI

- [Introduction](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#h-introduction)
- [Checking if a specific form exists](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#form-id-exists)
- [Method Overview](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#form-id-exists-source-code)
- [Parameters](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#form-id-exists-parameters)
- [Returns](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#form-id-exists-returns)
- [Usage Example](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#form-id-exists-usage-example)
- [Getting a specific form](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-form)
- [Method Overview](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#h-method-overview-0)
- [Source Code](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-form-source-code)
- [Parameters](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-form-parameters)
- [Returns](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-form-returns)
- [Usage Example](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-form-usage-example)
- [Getting multiple forms](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-forms)
- [Method Overview](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#h-method-overview-1)
- [Source Code](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-forms-source-code)
- [Parameters](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-forms-parameters)
- [Returns](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-forms-returns)
- [Usage Example](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-forms-usage-example)

## Introduction

The following GFAPI methods can be used to get and check if forms exist.

## Checking if a specific form exists

The **GFAPI::form\_id\_exists()** method is used to check if a form exists with a specific ID.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **form\_id\_exists** |
| Parameters | [see below](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#form-id-exists-parameters) |
| Returns | [see below](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#form-id-exists-returns) |

### Source Code

|     |
| --- |
| `public``static``function``form_id_exists(``$form_id``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the form to check. |

### Returns

[Boolean](https://docs.gravityforms.com/boolean). True if the form exists. False if the form doesn’t exist.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::form_id_exists(``$form_id``);` |

## Getting a specific form

The **GFAPI::get\_form()** method is used to get a form by its ID.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_form** |
| Parameters | [see below](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-form-parameters) |
| Returns | [see below](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-form-returns) |

### Source Code

|     |
| --- |
| `public``static``function``get_form(``$form_id``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the form to retrieve. |

### Returns

An [array](https://docs.gravityforms.com/array) ( [Form Object](https://docs.gravityforms.com/form-object/)), if the form exists. [Boolean](https://docs.gravityforms.com/boolean), false, if an error occurs.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::get_form(``$form_id``);` |

## Getting multiple forms

The **GFAPI::get\_forms()** method is used to get all forms that match the given arguments.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_forms** |
| Parameters | [see below](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-forms-parameters) |
| Returns | [see below](https://docs.gravityforms.com/getting-forms-with-the-gfapi/#get-forms-returns) |

### Source Code

|     |
| --- |
| `public``static``function``get_forms(``$active``= true,``$trash``= false,``$sort_column``=``'id'``,``$sort_dir``=``'ASC'``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$active** | [boolean](https://docs.gravityforms.com/boolean) \| [null](https://docs.gravityforms.com/null) | `true` to only get active forms.<br>`false` to only get inactive forms.<br>`null` to ignore the form _`is_active`_ property (since v _2.5.8_).<br>Defaults to `true`. |
| **$trash** | [boolean](https://docs.gravityforms.com/boolean) \| [null](https://docs.gravityforms.com/null) | `true` to only get trashed forms.<br>`false` to only get forms not in the trash.<br>`null` to ignore the form `is_trash` property (since v _2.5.8_). <br>Defaults to `false`. |
| **$sort\_column** | [string](https://docs.gravityforms.com/string) | The column to sort the results by.<br>Accepted values: `id`, `title`, `date_created`, `is_active`, and `is_trash`.<br>Defaults to `id`.<br>Since v2.5. |
| **$sort\_dir** | [string](https://docs.gravityforms.com/string) | The direction to sort the results.<br>Accepted values: `ASC` and `DESC`.<br>Defaults to `ASC`.<br>Since v2.5. |

### Returns

An [array](https://docs.gravityforms.com/array) of forms ( [Form Object](https://docs.gravityforms.com/form-object/)) that match the given arguments or an empty array.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::get_forms();` |

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/getting-forms-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)