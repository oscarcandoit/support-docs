---
url: "https://docs.gravityforms.com/managing-notes-with-the-gfapi/"
title: "Managing Notes with the GFAPI - Gravity Forms Documentation"
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

# Managing Notes with the GFAPI

- [Introduction](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-introduction)
- [get\_notes](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-get-notes)
- [Method Overview](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-source-code)
- [Parameters](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#get-notes-parameters)
- [Search Arguments](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#search-arguments)
- [Sorting Arguments](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#sorting-arguments)
- [Returns](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#get-notes-returns)
- [Usage Example](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-usage-example)
- [Getting all notes for the specified entry](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-getting-all-notes-for-the-specified-entry)
- [get\_note](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-get-note)
- [Method Overview](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-method-overview-0)
- [Source Code](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-source-code-0)
- [Parameters](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#get-note-parameters)
- [Returns](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#get-note-returns)
- [Usage Example](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-usage-example-0)
- [add\_note](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-add-note)
- [Method Overview](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-method-overview-1)
- [Source Code](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-source-code-1)
- [Parameters](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#add-note-parameters)
- [Returns](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#add-note-returns)
- [Usage Example](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-usage-example-1)
- [Adding a user note](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-adding-a-user-note)
- [Adding a Success note for a Notification](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-adding-a-success-note-for-a-notification)
- [delete\_note](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-delete-note)
- [Method Overview](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-method-overview-2)
- [Source Code](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-source-code-2)
- [Parameters](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#delete-note-parameters)
- [Returns](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#delete-note-returns)
- [Usage Example](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-usage-example-2)
- [update\_note](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-update-note)
- [Method Overview](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-method-overview-3)
- [Parameters](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-parameters-3)
- [Note Properties](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#note-properties)
- [Returns](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-returns-3)
- [Usage Example](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-usage-example-3)
- [Updating the note content](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#h-updating-the-note-content)

## Introduction

The GFAPI methods for managing notes were added in Gravity Forms 2.4.18.

See the [GFAPI article](https://docs.gravityforms.com/api-functions/) for other available methods.

## get\_notes

Returns the notes for the given search criteria.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_notes** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#get-notes-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#get-notes-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``get_notes(``$search_criteria``=``array``(),``$sorting``= null ) {}` |

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$search\_criteria** | [array](https://docs.gravityforms.com/array) | Optional.<br>An associative array containing the [search arguments](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#search-arguments). |
| **$sorting** | [array](https://docs.gravityforms.com/array) | Optional.<br>An associative array containing the [sorting arguments](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#sorting-arguments). |

#### Search Arguments

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **id** | [integer](https://docs.gravityforms.com/integer) | The ID of the note to be retrieved. |
| **entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry the notes are to be retrieved for. |
| **user\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the user the notes are to be retrieved for. |
| **user\_name** | [string](https://docs.gravityforms.com/array) | The user\_name of the user the notes are to be retrieved for. |
| **note\_type** | [string](https://docs.gravityforms.com/string) | The type of note to be retrieved. If the note is triggered by a Notification the note\_type will be “notification”, if it is triggered by an add-on it will use that add-on slug, for GravityFlow it will be “gravityflow”. |
| **sub\_type** | [string](https://docs.gravityforms.com/string) | The sub type of note to be retrieved. The Sub Type indicates the status which can be: success, warning, error, etc. |
| **start\_date** | [string](https://docs.gravityforms.com/string) | Retrieves notes created on or after the date and time specified in the Y-m-d H:i:s format. |
| **end\_date** | [string](https://docs.gravityforms.com/string) | Retrieves notes created before the date and time specified in the Y-m-d H:i:s format. |

#### Sorting Arguments

An optional associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **key** | [string](https://docs.gravityforms.com/string) | The column to sort by. See the [gf\_entry\_notes database table columns](https://docs.gravityforms.com/database-storage-structure-reference/#wp-gf-entry-notes). Defaults to `id`. |
| **direction** | [string](https://docs.gravityforms.com/string) | The direction to sort by: **ASC** or **DESC**. Defaults to **ASC**. |

### Returns

- **$result** [bool](https://docs.gravityforms.com/bool) \| [array](https://docs.gravityforms.com/array)

False, or an array of note objects containing the [gf\_entry\_notes database table columns](https://docs.gravityforms.com/database-storage-structure-reference/#wp-gf-entry-notes) as properties.

### Usage Example

#### Getting all notes for the specified entry

|     |     |
| --- | --- |
| 1<br>2 | `$search_criteria``=``array``(``'entry_id'``=>``$entry_id``);`<br>`$result``= GFAPI::get_notes(``$search_criteria``);` |

## get\_note

Returns the specified note.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_note** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#get-note-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#get-note-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``get_note(``$note_id``) {}` |

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$note\_id** | [integer](https://docs.gravityforms.com/array) | The ID of the note to be retrieved. |

### Returns

- **$result** [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) \| [object](https://docs.gravityforms.com/object)

A WP\_Error if the note was not found, or the note object containing the [gf\_entry\_notes database table columns](https://docs.gravityforms.com/database-storage-structure-reference/#wp-gf-entry-notes) as properties.

### Usage Example

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::get_note(``$note_id``);` |

## add\_note

Adds a note to the specified entry.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **add\_note** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#add-note-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#add-note-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``add_note(``$entry_id``,``$user_id``,``$user_name``,``$note``,``$note_type``=``'user'``,``$sub_type``= null ) {}` |

### Parameters

| Prop | Type | Description |
| --- | --- | --- |
| **entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry the note is being added to. |
| **user\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the user adding the note. |
| **user\_name** | [string](https://docs.gravityforms.com/array) | The user\_name of the user adding the note. |
| **note** | [string](https://docs.gravityforms.com/array) | The content of the note being added. |
| **note\_type** | [string](https://docs.gravityforms.com/string) | Optional. The type of note being added. If the note is triggered by a Notification the note\_type will be “notification”, if it is triggered by an add-on it will use that add-on slug. For example, for Gravity Flow it will be “gravityflow”. |
| **sub\_type** | [string](https://docs.gravityforms.com/string) | Optional. The subtype of note being added. The @sub\_type indicates the status, which can be success, warning, error, etc. |

### Returns

- **$result** [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) \| [int](https://docs.gravityforms.com/int)

A WP\_Error if an error occurs, or the ID of the note returned by the database upon success.

### Usage Example

#### Adding a user note

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::add_note(``$entry_id``,``$user_id``,``$user_name``,``'this is a test note'``);` |

#### Adding a Success note for a Notification

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::add_note(``$entry_id``,``$user_id``,``$user_name``,``'This is a success note for Notification'``,``'notification'``,``'success'``);` |

## delete\_note

Deletes the specified note.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **delete\_note** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#delete-note-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#delete-note-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``delete_note(``$note_id``) {}` |

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$note\_id** | [integer](https://docs.gravityforms.com/array) | The ID of the note to be deleted. |

### Returns

- **$result** [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) \| [bool](https://docs.gravityforms.com/bool)

A WP\_Error if an error occurs, or true on success.

### Usage Example

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::delete_note(``$note_id``);` |

## update\_note

Updates the specified note.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_note** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#update-note-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#update-note-returns) |

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$note** | [array](https://docs.gravityforms.com/array) | An associative array containing the [note properties](https://docs.gravityforms.com/managing-notes-with-the-gfapi/#search-arguments). |
| **$note\_id** | [integer](https://docs.gravityforms.com/array) | Optional. The ID of the note to be updated when not included in the **$note** array. |

#### Note Properties

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **id** | [integer](https://docs.gravityforms.com/integer) | The ID of the note to be updated. |
| **entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry the note is for. |
| **user\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the user the note was added by. |
| **user\_name** | [string](https://docs.gravityforms.com/array) | The user\_name of the user the note was added by. |
| **date\_created** | [string](https://docs.gravityforms.com/array) | The date the note was created in the Y-m-d H:i:s format. |
| **value** | [string](https://docs.gravityforms.com/array) | The content of the note. |
| **note\_type** | [string](https://docs.gravityforms.com/string) | The note type. |
| **sub\_type** | [string](https://docs.gravityforms.com/string) | The note sub type. |

### Returns

- **$result** [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/) \| [bool](https://docs.gravityforms.com/bool)

A WP\_Error if an error occurs, or true on success.

### Usage Example

#### Updating the note content

|     |     |
| --- | --- |
| 1<br>2 | `$note``=``array``(``'value'``=>``'the updated note'``);`<br>`$result``= GFAPI::update_note(``$note``,``$note_id``);` |

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 22, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/managing-notes-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)