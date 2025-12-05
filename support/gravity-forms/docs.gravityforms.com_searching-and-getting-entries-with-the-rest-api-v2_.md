---
url: "https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/"
title: "Searching and Getting Entries with the REST API v2 - Gravity Forms Documentation"
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
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)    - [Endpoints](https://docs.gravityforms.com/category/developers/rest-api/rest-api-endpoints/)      - [Submitting Forms with REST API v2](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/ "Submitting Forms with REST API v2")
      - [Searching and Getting Entries with the REST API v2](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/ "Searching and Getting Entries with the REST API v2")
      - [Creating Entries with the REST API v2](https://docs.gravityforms.com/creating-entries-with-the-rest-api-v2/ "Creating Entries with the REST API v2")
      - [Updating Entries with the REST API v2](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/ "Updating Entries with the REST API v2")
      - [Deleting Entries with the REST API v2](https://docs.gravityforms.com/deleting-entries-with-the-rest-api-v2/ "Deleting Entries with the REST API v2")
      - [Getting Forms with the REST API v2](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/ "Getting Forms with the REST API v2")
      - [Creating Forms with the REST API v2](https://docs.gravityforms.com/creating-forms-with-the-rest-api-v2/ "Creating Forms with the REST API v2")
      - [Updating Forms with the REST API v2](https://docs.gravityforms.com/updating-forms-with-the-rest-api-v2/ "Updating Forms with the REST API v2")
      - [Validating Forms with REST API v2](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/ "Validating Forms with REST API v2")
      - [Getting the Form Field Filters with REST API v2](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/ "Getting the Form Field Filters with REST API v2")
      - [Deleting Forms with the REST API v2](https://docs.gravityforms.com/deleting-forms-with-the-rest-api-v2/ "Deleting Forms with the REST API v2")
      - [Sending Notifications with the REST API v2](https://docs.gravityforms.com/sending-notifications-with-the-rest-api-v2/ "Sending Notifications with the REST API v2")
      - [Getting Results with REST API v2](https://docs.gravityforms.com/getting-results-with-rest-api-v2/ "Getting Results with REST API v2")
      - [Managing Add-On Feeds with REST API v2](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/ "Managing Add-On Feeds with REST API v2")
    - [REST API v2 Basic Authentication](https://docs.gravityforms.com/rest-api-v2-basic-authentication/ "REST API v2 Basic Authentication")
    - [REST API v2 Guide](https://docs.gravityforms.com/rest-api-v2/ "REST API v2 Guide")
    - [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/ "REST API v2 Authentication")
    - [Gravity Forms REST API Settings](https://docs.gravityforms.com/gravity-forms-rest-api-settings/ "Gravity Forms REST API Settings")
    - [REST API v1 Guide](https://docs.gravityforms.com/web-api/ "REST API v1 Guide")
    - [v1 Examples](https://docs.gravityforms.com/web-api-examples/ "v1 Examples")
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Searching and Getting Entries with the REST API v2

- [Introduction](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#introduction)
- [Authentication](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#authentication)
- [Getting a Specific Entry](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#getting-a-specific-entry)
- [Method](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-method)
- [Path](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-path)
- [Required Properties](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-required-properties)
- [Optional Properties](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-optional-properties)
- [Response](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-response)
- [Success](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#h-success)
- [Failure](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#h-failure)
- [Usage Examples](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-usage-example)
- [cURL Request](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-curl-request)
- [Response](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-response)
- [cURL Request](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-curl-request)
- [Response](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#entry-response)
- [Searching Entries](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#searching-entries)
- [Method](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-method)
- [Path](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-path)
- [Required Properties](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-required-properties)
- [Optional Properties](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-optional-properties)
- [Search Arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-arguments)
- [Field Filters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#field-filters)
- [Sorting Arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#sorting-arguments)
- [Paging Arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#paging-arguments)
- [Response \[json\]](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-response)
- [Usage Examples](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-usage-examples)
- [Retrieve specific entry](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#retrieve-specific-entry)
- [Retrieve specific fields](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#retrieve-specific-fields)
- [Include specific forms](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#include-specific-forms)
- [Include specific entries](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#include-specific-entries)
- [Use paging](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#use-paging)
- [Use sorting](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#use-sorting)
- [Search entries](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-entries)

## Introduction

The `/entries`, `/forms/[FORM_ID]/entries`, and `/entries/[ENTRY_ID]` endpoints are used to search and get entries.

## Authentication

See [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/).

The [capability](https://docs.gravityforms.com/role-management-guide/)`gravityforms_view_entries` is required to use `GET` requests at these endpoints.

This can be filtered using [gform\_rest\_api\_capability\_get\_entries](https://docs.gravityforms.com/gform_rest_api_capability_get_entries/).

## Getting a Specific Entry

The `/entries/[ENTRY_ID]` endpoint is used to get an entry by it’s ID.

### Method

This endpoint accepts `GET` requests in order to retrieve an entry.

### Path

|     |
| --- |
| `/gf/v2/entries/1` |

### Required Properties

There are no required properties.

### Optional Properties

The request URL can also include the following parameters.

| Key | Type | Description |
| --- | --- | --- |
| **\_field\_ids** | string | A comma separated list of fields to include in the response. When including this property, only the explicitly requested entry properties will be included in the response. |
| **\_labels** | integer | Default is `0`. <br>Indicates whether to enable the inclusion of field labels in the results. |

### Response

#### Success

A successful response will contain a JSON object with the entry details.

| Key | Type | Description |
| --- | --- | --- |
| **\[entry\_property\]** | mixed | Entry properties of the [Entry Object](https://docs.gravityforms.com/entry-object/). |
| **\[input\_id\]** | string | Submission values of each form field input for the entry. |
| **\_labels** | JSON object | Only present when `_labels` is `1` in request.<br>Contains field input and labels pairing for the form. |

#### Failure

A failed response will provide a JSON string of the error code and message.

| Key | Type | Description |
| --- | --- | --- |
| **code** | string | Error code.<br>`gf_entry_invalid_id` |
| **message** | string | Human-readable error message. |
| **data\[status\]** | integer | [HTTP response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) |

### Usage Examples

#### cURL Request

|     |
| --- |
| `curl``"https://rocket.test/wp-json/gf/v2/entries/159?_labels=1"``\`<br>```-u``'ck_5f86565df60696c43af25f9194e106800770b8e9:cs_be0190310fefc061c564168670d0a96d68873c29'` |

#### **Response**

|     |
| --- |
| `{`<br>```"id"``:``"159"``,`<br>```"form_id"``:``"30"``,`<br>```"post_id"``: null,`<br>```"date_created"``:``"2023-09-01 19:30:44"``,`<br>```"date_updated"``:``"2023-09-01 19:30:44"``,`<br>```"is_starred"``:``"0"``,`<br>```"is_read"``:``"1"``,`<br>```"ip"``:``"50.104.76.242"``,`<br>```"source_url"``:``"https:\/\/rocket.twhl.dev\/wp-json\/gf\/v2\/entries"``,`<br>```"user_agent"``:``"API"``,`<br>```"currency"``:``"USD"``,`<br>```"payment_status"``: null,`<br>```"payment_date"``: null,`<br>```"payment_amount"``: null,`<br>```"payment_method"``:``""``,`<br>```"transaction_id"``: null,`<br>```"is_fulfilled"``: null,`<br>```"created_by"``:``"4"``,`<br>```"transaction_type"``: null,`<br>```"status"``:``"active"``,`<br>```"1.3"``:``"Neil"``,`<br>```"1.6"``:``"Armstrong"``,`<br>```"3"``:``"neil@example.com"``,`<br>```"4"``:``"To the moon!"``,`<br>```"1.2"``:``""``,`<br>```"1.4"``:``""``,`<br>```"1.8"``:``""``,`<br>```"_labels"``: {`<br>```"1"``: {`<br>```"1"``:``"Name"``,`<br>```"1.2"``:``"Prefix"``,`<br>```"1.3"``:``"First"``,`<br>```"1.4"``:``"Middle"``,`<br>```"1.6"``:``"Last"``,`<br>```"1.8"``:``"Suffix"`<br>```},`<br>```"3"``:``"Email"``,`<br>```"4"``:``"Message"`<br>```}`<br>`}` |

#### cURL Request

|     |
| --- |
| `curl``"https://rocket.test/wp-json/gf/v2/entries/159?_field_ids=1.6,4"``\`<br>```-u``'ck_5f86565df60696c43af25f9194e106800770b8e9:cs_be0190310fefc061c564168670d0a96d68873c29'` |

#### **Response**

|     |
| --- |
| `{`<br>```"date_created"``:``"2023-09-01 19:30:44"``,`<br>```"1.6"``:``"Armstrong"``,`<br>```"4"``:``"To the moon!"`<br>`}` |

## Searching Entries

The `/entries` endpoint is used to get all entries or all entries matching specific search parameters

### Method

These endpoints accept `GET` requests in order to retrieve entries.

### Path

|     |
| --- |
| `/gf/v2/entries` |

or

|     |
| --- |
| `/gf/v2/forms/[FORM_ID]/entries` |

### Required Properties

There are no required properties.

### Optional Properties

The request URL can also include the following parameters.

| Key | Type | Description |
| --- | --- | --- |
| **\_field\_ids** | string | A comma separated list of fields to include in the response. When including this property, only the explicitly requested entry properties will be included in the response. |
| **\_labels** | integer | Default is `0`. <br>Indicates whether to enable the inclusion of field labels in the results. |
| **form\_ids** | array | An array of forms for which entries should be included.<br>Only available when using the endpoint `/gf/v2/entries`. |
| **include** | array | An array of entries to include in the response. If an included entry id is not found in the database, no error is thrown. |
| **search** | array | Optional.<br>An associative array containing the [search arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#search-arguments).<br>It is expected that `search` will be provided as JSON. |
| **sorting** | array | Optional.<br>An associative array containing the [sorting arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#sorting-arguments). |
| **paging** | null\|array | Optional.<br>An associative array containing the [paging arguments](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#paging-arguments).<br>IMPORTANT TIP: use paging to limit the number of entries otherwise you may find the database times out. |

#### Search Arguments

An associative array supporting the following properties. Must be provided in request as JSON.

| Prop | Type | Description |
| --- | --- | --- |
| **status** | string | Default is **active**.<br>The status of the entry. Possible values are **active**, **spam**, **trash**. |
| **field\_filters** | array | See [Field Filters](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#field-filters) |

#### Field Filters

| Prop | Type | Description |
| --- | --- | --- |
|  | [array](https://docs.gravityforms.com/array) | One or more associative arrays. See [Field Filter](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/#field-filter). |
| **mode** | [string](https://docs.gravityforms.com/string) | Optional.<br>Defaults to `all`.<br>Possible values: `all` or `any`.<br>Determines if the found entries have to match all the field filters or any. |

##### Field Filter

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **key** | [string](https://docs.gravityforms.com/string) | The field ID, entry property, or entry meta key. |
| **value** | [string](https://docs.gravityforms.com/string) \| [integer](https://docs.gravityforms.com/integer) \| [float](https://docs.gravityforms.com/float) \| [array](https://docs.gravityforms.com/array) | The value to find for the specified `key`. |
| **operator** | [string](https://docs.gravityforms.com/string) | Optional.<br>Defaults to `=`.<br>Possible values: `=`, `IS`, `CONTAINS`, `IS NOT`, `ISNOT`, `<>`, `LIKE`, `NOT IN`, `NOTIN`, or `IN`.<br>Lowercase is also supported. |
| **is\_numeric** | [boolean](https://docs.gravityforms.com/boolean) | Optional.<br>Indicates if the values of the specified `key` are numeric. |

#### Sorting Arguments

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **key** | string\|integer | Default is entry **id**. The database field by which to sort. See the database structure for the [wp\_gf\_entry](https://docs.gravityforms.com/database-storage-structure-reference/#wp-gf-entry) table for fields that may be used. |
| **direction** | string | Default is **DESC**.<br>The direction of sorting. Either **ASC**, **DESC**, or **RAND** (random order). |
| **is\_numeric** | boolean | Default is **false** when `sorting[key]` is specified.<br>Indicates if the key is numeric. |

#### Paging Arguments

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **page\_size** | integer | The number of results per page. |
| **current\_page** | integer | The current page from which to pull details. |
| **offset** | integer | The record number on which to start retrieving data. It is zero-based. If the `current_page` property is specified, then `offset` is not used. |

### Response _\[json\]_

A successful response will contain a JSON object with matching entries.

| Key | Type | Description |
| --- | --- | --- |
| **total\_count** | integer | A count of all matching entries. |
| **entries** | array | An array of matching entry objects. |

### Usage Examples

#### Retrieve specific entry

|     |
| --- |
| `curl --location --request GET``'https://example.com/wp-json/gf/v2/entries/112'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'` |

#### Retrieve specific fields

This example shows how to retrieve values of field IDs 1, 6.1, 6.2, 6.3 and date\_created for entries on Form ID 112 while including field labels.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/forms/112/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'_field_ids=1,6.1,6.2,6.3,date_created'``\`<br>`--data-urlencode``'_labels=1'` |

#### Include specific forms

This example shows how to get all entries from Form ID 1 and Form ID 30.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'form_ids[]=1'``\`<br>`--data-urlencode``'form_ids[]=30'` |

#### Include specific entries

This example shows how to get multiple specific entries by entry ID using the `include` property.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'include[]=12'``\`<br>`--data-urlencode``'include[]=45'``\`<br>`--data-urlencode``'include[]=51'` |

#### Use paging

This example shows how to retrieve 20 results per page.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'paging[page_size]=20'` |

This example shows how to retrieve 20 results per page.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'paging[page_size]=20'` |

This example shows how to retrieve 20 results per page starting with the 16th row (offset starts at 0)

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'paging[page_size]=20'``\`<br>`--data-urlencode``'paging[offset]=15'` |

This example shows how to retrieve 5 results per page starting with the second page

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'paging[page_size]=5'``\`<br>`--data-urlencode``'paging[current_page]=2'` |

#### Use sorting

This example shows how to sort results ASCending by `id`

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'sorting[key]=id'``\`<br>`--data-urlencode``'sorting[direction]=ASC'``\`<br>`--data-urlencode``'sorting[is_numeric]=true'` |

This example shows how to sort results DESCending by `date_created`

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'sorting[key]=date_created'``\`<br>`--data-urlencode``'sorting[direction]=DESC'` |

This example shows how to sort results randomly when retrieving all enries for Form ID 19

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/forms/19/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'sorting[direction]=RAND'` |

This example shows how to sort results by Field ID 2

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'sorting[key]=2'` |

#### Search entries

This example shows how to retrieve entries where Field ID 2 contains the text **test**.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'search={"field_filters":[{"key":2,"value":"test","operator":"contains"}]}'` |

This example shows how to retrieve entries where Field ID 2 **and** Field ID 1.3 contains the text **squiffy**. Note that since search mode is not specified `all` is used for the `mode`.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'search={"field_filters":[{"key":2,"value":"squiffy","operator":"contains"},{"key":1.3,"value":"squiffy","operator":"contains"}]}'` |

This example performs the same search as above, but sets `mode` to match against `any` of the provided field filters.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'search={"field_filters":["mode":"any","0":{"key":2,"value":"squiffy","operator":"contains"},"1":{"key":1.3,"value":"squiffy","operator":"contains"}]}'` |

This example retrieve entries created on a specific day (i.e. September 10, 2019) by filtering on the `date_created` property of the entry.

|     |
| --- |
| `curl --location --request GET -G``'https://example.com/wp-json/gf/v2/entries'``\`<br>`--user``'alisha:XnVO ccCg lt3X W3Wa AlQQ mf0R'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-urlencode``'search={"field_filters":[{"key":"date_created","value":"09/10/2019","operator":"is"}]}'` |

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)