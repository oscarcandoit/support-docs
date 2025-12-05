---
url: "https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/"
title: "Searching Entries with GFAPI - Gravity Guide"
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

# Searching and Getting Entries with the GFAPI

- [Introduction](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#h-introduction)
- [Checking if a specific entry exists](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#entry-exists)
- [Method Overview](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#entry-exists-source-code)
- [Parameters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#entry-exists-parameters)
- [Returns](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#entry-exists-returns)
- [Usage Example](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#entry-exists-usage-example)
- [Getting a specific entry](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#get-entry)
- [Method Overview](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#h-method-overview-0)
- [Source Code](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#get-entry-source-code)
- [Parameters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#get-entry-parameters)
- [Returns](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#get-entry-returns)
- [Usage Example](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#get-entry-usage-example)
- [Searching entries](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#searching-entries)
- [Method Overview](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#h-method-overview-1)
- [Source Code](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#searching-entries-source-code)
- [Parameters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#searching-entries-parameters)
- [Returns](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#searching-entries-returns)
- [Usage Examples](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#searching-entries-usage-examples)
- [Basic usage](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-entries-basic-usage)
- [Two field filters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-entries-two-field-filters)
- [Sorting](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-entries-sorting)
- [Paging](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-entries-paging)
- [Getting the total count](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-entries-total-count)
- [Getting entries from the last 30 days](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-entries-last-30-days)
- [Counting entries](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#count-entries)
- [Method Overview](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#h-method-overview-2)
- [Source Code](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#count-entries-source-code)
- [Parameters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#count-entries-parameters)
- [Returns](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#count-entries-returns)
- [Usage Example](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#count-entries-usage-example)
- [Common Parameters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#h-common-parameters)
- [Search Arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-arguments)
- [Field Filters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#field-filters)
- [Sorting Arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#sorting-arguments)
- [Paging Arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#paging-arguments)

## Introduction

The **GFAPI::entry\_exists()**, **GFAPI::get\_entry()**, **GFAPI::get\_entries()**, **GFAPI::get\_entry\_ids()**, and **GFAPI::count\_entries()** methods are used to search, count, get, and check if entries exist.

## Checking if a specific entry exists

The **GFAPI::entry\_exists()** method is used to check if an entry exists with a specific ID.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **entry\_exists** |
| Parameters | [see below](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#entry-exists-parameters) |
| Returns | [see below](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#entry-exists-returns) |

### Source Code

|     |
| --- |
| `public``static``function``entry_exists(``$entry_id``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry to check. |

### Returns

[Boolean](https://docs.gravityforms.com/boolean). `true` if the entry exists. `false` if the entry doesn’t exist.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::entry_exists(``$entry_id``);` |

## Getting a specific entry

The **GFAPI::get\_entry()** method is used to get an entry by it’s ID.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_entry** |
| Parameters | [see below](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#get-entry-parameters) |
| Returns | [see below](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#get-entry-returns) |

### Source Code

|     |
| --- |
| `public``static``function``get_entry(``$entry_id``) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry to retrieve. |

### Returns

An [array](https://docs.gravityforms.com/array) ( [Entry Object](https://docs.gravityforms.com/entry-object/)), if the entry exists. [WP\_Error](https://developer.wordpress.org/reference/classes/wp_error/), if the entry does not exist.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::get_entry(``$entry_id``);` |

## Searching entries

The **GFAPI::get\_entries()** and **GFAPI::get\_entry\_ids()** methods are used to find entries that match the given arguments.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_entries**<br>**get\_entry\_ids** |
| Parameters | [see below](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#searching-entries-parameters) |
| Returns | [see below](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#searching-entries-returns) |

### Source Code

|     |
| --- |
| `public``static``function``get_entries(``$form_ids``,``$search_criteria``=``array``(),``$sorting``= null,``$paging``= null, &``$total_count``= null ) {}` |

|     |
| --- |
| `public``static``function``get_entry_ids(``$form_ids``,``$search_criteria``=``array``(),``$sorting``= null,``$paging``= null, &``$total_count``= null ) {}` |

These method are located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_ids** | [integer](https://docs.gravityforms.com/integer) \| [array](https://docs.gravityforms.com/array) | `0` to search all forms or a form ID to search a specific form or an array of form IDs to search only the specified forms. |
| **$search\_criteria** | [array](https://docs.gravityforms.com/array) | Optional.<br>An associative array containing the [search arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-arguments). |
| **$sorting** | [array](https://docs.gravityforms.com/array) | Optional.<br>An associative array containing the [sorting arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#sorting-arguments). |
| **$paging** | [null](https://docs.gravityforms.com/null) \| [array](https://docs.gravityforms.com/array) | Optional.<br>An associative array containing the [paging arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#paging-arguments).<br>IMPORTANT TIP: use paging to limit the number of entries otherwise you may find the database times out. |
| **&$total\_count** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) | Optional.<br>An output parameter containing the total number of entries found to match the given arguments.<br>Pass a non-`null` value, such as `0`, to get the total count. |

### Returns

**GFAPI::get\_entries()** returns an [array](https://docs.gravityforms.com/array) of entries ( [Entry Object](https://docs.gravityforms.com/entry-object/) s) that match the given arguments or an empty array.

**GFAPI::get\_entry\_ids()** returns an [array](https://docs.gravityforms.com/array) of IDs ( [integers](https://docs.gravityforms.com/entry-object/)) that match the given arguments or an empty array.

### Usage Examples

#### Basic usage

This example shows how to find the 20 most recent entries for a specific form.

|     |
| --- |
| `// Getting the entries`<br>`$result``= GFAPI::get_entries(``$form_id``);`<br>`// Getting just the IDs`<br>`$result``= GFAPI::get_entry_ids(``$form_id``);` |

#### Two field filters

This example shows how to get the 20 most recent entries for a specific form that match at least one of two field filters.

|     |
| --- |
| `$search_criteria``=``array``(`<br>```'status'``=>``'active'``,`<br>```'field_filters'``=>``array``(`<br>```'mode'``=>``'any'``,`<br>```array``(`<br>```'key'``=>``'1'``,`<br>```'value'``=>``'Second Choice'`<br>```),`<br>```array``(`<br>```'key'``=>``'5'``,`<br>```'value'``=>``'My text'`<br>```)`<br>```)`<br>`);`<br>`// Getting the entries`<br>`$result``= GFAPI::get_entries(``$form_id``,``$search_criteria``);`<br>`// Getting just the IDs`<br>`$result``= GFAPI::get_entry_ids(``$form_id``,``$search_criteria``);` |

#### Sorting

This example shows how to sort the found entries by a specific field.

|     |
| --- |
| `$search_criteria``=``array``();`<br>`$sorting``=``array``(``'key'``=>``'5'``,``'direction'``=>``'ASC'``);`<br>`$results``= GFAPI::get_entries(``$form_id``,``$search_criteria``,``$sorting``);` |

#### Paging

This example shows how to increase the page size.

|     |
| --- |
| `$search_criteria``=``array``();`<br>`$sorting``=``array``();`<br>`$paging``=``array``(``'offset'``=> 0,``'page_size'``=> 25 );`<br>`$results``= GFAPI::get_entries(``$form_id``,``$search_criteria``,``$sorting``,``$paging``);` |

#### Getting the total count

This example shows how to get the total number of entries that match the given criteria.

|     |
| --- |
| `$search_criteria``=``array``();`<br>`$sorting``=``array``();`<br>`$paging``=``array``(``'offset'``=> 0,``'page_size'``=> 25 );`<br>`$total_count``= 0;`<br>`$results``= GFAPI::get_entries(``$form_id``,``$search_criteria``,``$sorting``,``$paging``,``$total_count``);` |

When the found entries are returned, up to the page size, the `$total_count` is populated with the total number of found entries. If the total exceeds the number of returned entries you’ll know you need to make further requests adjusting the `offset` property of the `$paging` argument.

#### Getting entries from the last 30 days

This example shows how to get 20 entries submitted in the last 30 days.

|     |
| --- |
| `$search_criteria``=``array``();`<br>`$form_id``= 4;`<br>`$start_date``=``date``(``'Y-m-d'``,``strtotime``(``'-30 days'``) );`<br>`$end_date``=``date``(``'Y-m-d'``, time() );`<br>`$search_criteria``[``'start_date'``] =``$start_date``;`<br>`$search_criteria``[``'end_date'``]   =``$end_date``;`<br>``<br>`$results``= GFAPI::get_entries(``$form_id``,``$search_criteria``);` |

## Counting entries

The **GFAPI::count\_entries()** method is used to get a count of all entries that match the given arguments.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **count\_entries** |
| Parameters | [see below](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#update-form-parameters) |
| Returns | [see below](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#update-form-returns) |

### Source Code

|     |
| --- |
| `public``static``function``count_entries(``$form_ids``,``$search_criteria``=``array``() ) {}` |

This method is located in /includes/ _api.php_.

### Parameters

| Param | Type | Description |
| --- | --- | --- |
| **$form\_ids** | [integer](https://docs.gravityforms.com/integer) \| [array](https://docs.gravityforms.com/array) | `0` to search all forms.<br>A form ID to search a specific form.<br>An array of form IDs to search only the specified forms. |
| **$search\_criteria** | [array](https://docs.gravityforms.com/array) | Optional.<br>An associative array containing the [search arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#search-arguments). |

### Returns

An [integer](https://docs.gravityforms.com/array), the total number of entries that match the given arguments.

### Usage Example

|     |
| --- |
| `$result``= GFAPI::count_entries(``$form_ids``,``$search_criteria``);` |

## Common Parameters

### Search Arguments

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **status** | [string](https://docs.gravityforms.com/string) | The entry status property.<br>Possible values: `active`, `spam`, or `trash` |
| **start\_date** | [string](https://docs.gravityforms.com/string) | Optional.<br>Recommended format: Y-m-d H:i:s<br>The date of the oldest entry.<br>Compared with the entry date\_created property.<br>The time defaults to `00:00:00` if not included. |
| **end\_date** | [string](https://docs.gravityforms.com/string) | Optional.<br>Recommended format: Y-m-d H:i:s<br>The end date to be compared with the entry date\_created property.<br>The time defaults to `23:59:59` if not included. |
| **field\_filters** | [array](https://docs.gravityforms.com/array) | Optional.<br>See [Field Filters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#field-filters) |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11 | `$search_criteria``=``array``();`<br>`// Filtering by status.`<br>`$search_criteria``[``'status'``] =``'active'``;`<br>`// Filtering by entry properties, meta, and/or field values.`<br>`$search_criteria``[``'field_filters'``] =``array``();`<br>`// Filtering by date range.`<br>`$search_criteria``[``'start_date'``] =``$start_date``;`<br>`$search_criteria``[``'end_date'``] =``$end_date``;` |

#### Field Filters

| Prop | Type | Description |
| --- | --- | --- |
|  | [array](https://docs.gravityforms.com/array) | One or more associative arrays. See [Field Filter](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/#field-filter). |
| **mode** | [string](https://docs.gravityforms.com/string) | Optional.<br>Defaults to `all`.<br>Possible values: `all` or `any`.<br>Determines if the found entries have to match all the field filters or any. |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `$search_criteria``[``'field_filters'``] =``array``();`<br>`// Filtering by entry properties, meta, and/or field values.`<br>`$search_criteria``[``'field_filters'``][] =``$filter``;`<br>`// Changing the mode.`<br>`$search_criteria``[``'field_filters'``][``'mode'``] =``'any'``;` |

##### Field Filter

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **key** | [string](https://docs.gravityforms.com/string) | The field ID, entry property, or entry meta key. |
| **value** | [string](https://docs.gravityforms.com/string) \| [integer](https://docs.gravityforms.com/integer) \| [float](https://docs.gravityforms.com/float) \| [array](https://docs.gravityforms.com/array) | The value to find for the specified `key`. |
| **operator** | [string](https://docs.gravityforms.com/string) | Optional.<br>Defaults to `=`.<br>Possible values: `=`, `IS`, `CONTAINS`, `IS NOT`, `ISNOT`, `<>`, `LIKE`, `NOT IN`, `NOTIN`, or `IN`.<br>Lowercase is also supported. |
| **is\_numeric** | [boolean](https://docs.gravityforms.com/boolean) | Optional.<br>Indicates if the values of the specified `key` are numeric. |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34 | `// Filtering by entry properties.`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'currency'``,``'value'``=>``'USD'``);`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'is_read'``,``'value'``=> true );`<br>`​``$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'created_by'``,``'value'``=> get_current_user_id() );`<br>`// Filtering by field values.`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'1'``,``'value'``=>``'gquiz159982170'``);`<br>`// Supported operators for scalar values: is/=, isnot, contains.`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'1'``,``'operator'``=>``'contains'``,``'value'``=>``'Steve'``);`<br>`// Supported operators for array values: in/=, not in/!=`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'1'``,``'operator'``=>``'not in'``,``'value'``=>``array``(``'Alex'``,``'David'``,``'Dana'``) );`<br>`// Filter by a checkbox value (not recommended).`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'2.2'``,``'value'``=>``'gquiz246fec995'``);`<br>`// Notes`<br>`// Using input IDs as search keys will work for checkboxes but it won't work if the checkboxes have been re-ordered since the first submission.`<br>`// The 'not in' operator is not currently supported for checkbox values.`<br>`// Filter by a checkbox value (recommended).`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'2'``,``'value'``=>``'gquiz246fec995'``);`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'2'``,``'operator'``=>``'in'``,``'value'``=>``array``(``'First Choice'``,``'Third Choice'``) );`<br>`// Note`<br>`// Neither 'not in' nor '' operators are not currently supported for checkboxes using field IDs as search keys.`<br>`// Filter by a global/free-form search of values of any form field.`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'value'``=>``$search_value``);`<br>`// OR`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=> 0,``'value'``=>``$search_value``);`<br>`// Filter entries by Entry meta (added using the gform_entry_meta hook).`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'gquiz_score'``,``'value'``=>``'1'``);`<br>`$search_criteria``[``'field_filters'``][] =``array``(``'key'``=>``'gquiz_is_pass'``,``'value'``=>``'1'``);` |

### Sorting Arguments

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **key** | [string](https://docs.gravityforms.com/string) | Optional.<br>The field ID, entry property, or entry meta key to sort the results.<br>Default: `id` |
| **direction** | [string](https://docs.gravityforms.com/string) | Optional.<br>The direction to sort the results.<br>Accepted values: `ASC`, `DESC`, or `RAND`.<br>Default: `DESC` |
| **is\_numeric** | [boolean](https://docs.gravityforms.com/boolean) | Optional.<br>Indicates if the values of the specified `key` are numeric. |

|     |
| --- |
| `$sorting``=``array``(``'key'``=>``$sort_field``,``'direction'``=>``'ASC'``,``'is_numeric'``=> true );` |

### Paging Arguments

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **offset** | [integer](https://docs.gravityforms.com/integer) | Optional.<br>The row to start from when retreiving the results.<br>Default: `0` |
| **page\_size** | [integer](https://docs.gravityforms.com/integer) | Optional.<br>The maximum number of results to return.<br>Default: `20` |

|     |
| --- |
| `$paging``=``array``(``'offset'``=> 0,``'page_size'``=> 30 );` |

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)