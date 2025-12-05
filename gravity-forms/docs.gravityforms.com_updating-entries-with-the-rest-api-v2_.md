---
url: "https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/"
title: "Updating Entries with the REST API v2 - Gravity Forms Documentation"
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

# Updating Entries with the REST API v2

- [Introduction](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#introduction)
- [Authentication](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#h-authentication)
- [Updating an Entry](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#searching-entries)
- [Method](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#search-method)
- [Path](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#search-path)
- [Required Properties](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#search-required-properties)
- [Optional Properties](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#search-optional-properties)
- [Payment Properties](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#search-optional-properties)
- [Response](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#entry-response)
- [Success](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#h-success)
- [Failure](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#h-failure)
- [Usage](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#h-usage)
- [cURL Request](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#h-curl-request)
- [Response](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/#h-response)

## Introduction

The `/entries/[ENTRY_ID]` endpoint is used to update a specific entry.

## Authentication

See [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/).

The [capability](https://docs.gravityforms.com/role-management-guide/)`gravityforms_edit_entries` is required to use `POST` requests at these endpoints.

This can be filtered using [gform\_rest\_api\_capability\_put\_entries](https://docs.gravityforms.com/gform_rest_api_capability_put_entries/).

## Updating an Entry

The `/entries/[ENTRY_ID]` endpoint is used to update a specific entry.

### Method

This endpoint accepts `PUT` requests in order to update entries.

### Path

|     |
| --- |
| `/gf/v2/entries/[ENTRY_ID]` |

### Required Properties

There are no required properties, but values not provided WILL BE BLANKED OUT.

### Optional Properties

The endpoint accepts an [Entry Object](https://docs.gravityforms.com/entry-object/) sent as JSON formatted data and can also include the following properties.

| Key | Type | Description |
| --- | --- | --- |
| **created\_by** | integer | The user ID of the entry submitter. |
| **date\_created** | string | The date the entry was created, in UTC. |
| **ip** | string | The IP address of the entry creator. |
| **is\_fulfilled** | integer | Whether the transaction has been fulfilled, if applicable. |
| **is\_read** | integer | Whether the entry has been read. |
| **is\_starred** | integer | Whether the entry is starred. |
| **source\_url** | string | The URL where the form was embedded. |
| **status** | string | The status of the entry. |
| **user\_agent** | string | The user agent string for the browser used to submit the entry. |

### Payment Properties

Payment properties only apply when payment fields are present.

| Key | Type | Description |
| --- | --- | --- |
| **payment\_amount** | string | The amount of the payment. |
| **payment\_date** | string | The date of the payment. |
| **payment\_method** | string | The payment method for the payment. |
| **payment\_status** | string | The status of the payment. |
| **transaction\_id** | string | The transaction ID for the payment. |
| **transaction\_type** | string | The type of transaction. |

### Response

#### Success

A successful response will contain a JSON object with the complete updated [Entry Object](https://docs.gravityforms.com/entry-object/).

| Key | Type | Description |
| --- | --- | --- |
| **\[entry\_property\]** | mixed | Entry properties of the [Entry Object](https://docs.gravityforms.com/entry-object/). |

#### Failure

A failed response will provide a JSON string of the error code and message.

| Key | Type | Description |
| --- | --- | --- |
| **code** | string | Error code.<br>`missing_`entry |
| **message** | string | Human-readable error message. |
| **data\[status\]** | integer | [HTTP response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) |

### Usage

#### cURL Request

|     |
| --- |
| `curl --location --request PUT``'https://rocket.test/wp-json/gf/v2/entries/159'``\`<br>```--user``'ck_5f86565df60696c43af25f9194e106800770b8e9:cs_be0190310fefc061c564168670d0a96d68873c29'``\`<br>```--header``'Content-Type: application/json'``\`<br>```--data $'{`<br>```"id"``:``"159"``,`<br>```"form_id"``:``"30"``,`<br>```"date_updated"``:``"2023-09-01 19:30:44"``,`<br>```"is_starred"``:``"0"``,`<br>```"created_by"``:``"4"``,`<br>```"source_url"``:``"https://rocket.test/wp-json/gf/v2/entries"``,`<br>```"ip"``:``"50.104.76.242"``,`<br>```"date_created"``:``"2023-09-01 19:30:44"``,`<br>```"is_read"``:``"1"``,`<br>```"user_agent"``:``"API"``,`<br>```"status"``:``"active"``,`<br>```"1.3"``:``"Neil"``,`<br>```"1.6"``:``"Armstrong"``,`<br>```"3"``:``"neil@example.com"``,`<br>```"4"``:``"One small step!"`<br>`}'` |

#### Response

|     |
| --- |
| `{`<br>```"id"``:``"159"``,`<br>```"form_id"``:``"30"``,`<br>```"post_id"``: null,`<br>```"date_created"``:``"2023-09-01 19:30:44"``,`<br>```"date_updated"``:``"2023-09-01 19:30:44"``,`<br>```"is_starred"``:``"0"``,`<br>```"is_read"``:``"1"``,`<br>```"ip"``:``"50.104.76.242"``,`<br>```"source_url"``:``"https:\/\/rocket.test\/wp-json\/gf\/v2\/entries"``,`<br>```"user_agent"``:``"API"``,`<br>```"currency"``:``"USD"``,`<br>```"payment_status"``: null,`<br>```"payment_date"``: null,`<br>```"payment_amount"``: null,`<br>```"payment_method"``:``""``,`<br>```"transaction_id"``: null,`<br>```"is_fulfilled"``: null,`<br>```"created_by"``:``"4"``,`<br>```"transaction_type"``: null,`<br>```"status"``:``"active"``,`<br>```"1.3"``:``"Neil"``,`<br>```"1.6"``:``"Armstrong"``,`<br>```"3"``:``"neil@example.com"``,`<br>```"4"``:``"One small step!"``,`<br>```"1.2"``:``""``,`<br>```"1.4"``:``""``,`<br>```"1.8"``:``""`<br>`}` |

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)