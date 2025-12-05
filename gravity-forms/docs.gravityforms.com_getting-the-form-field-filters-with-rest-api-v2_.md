---
url: "https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/"
title: "Form Field Filters & REST API v2 - Gravity"
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

# Getting the Form Field Filters with REST API v2

- [Introduction](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-introduction)
- [Authentication](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#authentication)
- [Method](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-optional-properties)
- [Response \[json\]](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-response-json)
- [Usage Examples](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-usage-examples)
- [Example 1](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-example-1)
- [Example 2](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/#h-example-2)

## Introduction

The field-filters endpoint was added in Gravity Forms 2.4.21.8, it returns the field filters for the specified form. Internally Gravity Forms uses the field filters to populate the search drop down on the entries list page and the filter condition settings on the sales/results pages. You can use the response from this endpoint to create similar features on remote sites or simply use it to help determine which keys and operators to use with the `field_filters` array of the [GET entries search property](https://docs.gravityforms.com/rest-api-v2/#get-entries).

## Authentication

See [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/).

The authenticated user requires the `gravityforms_view_entries` [Gravity Forms capability](https://docs.gravityforms.com/role-management-guide/) to use this endpoint.

## Method

This endpoint only accepts `GET` requests.

## Path

|     |
| --- |
| `/gf/v2/forms/[FORM_ID]/field-filters` |

## Required Properties

There are no required properties.

## Optional Properties

- **\_admin\_labels** – Use the value “1” to include the field admin labels in the response, if configured.

## Response _\[json\]_

The response will contain a JSON object which contains the field filters for the specified form. Examples can be found below.

## Usage Examples

### Example 1

This example shows how to get the field filters for form id 577.

Pawprint \| GF Current field filters

- [Run](paw://current.document/requests/import?pawprint_id=fDmbhOH6)
- Delete
- API
- Share
- [Account](https://paw.cloud/account/login)

- Request
- Response

**Request**

/wp-json/gf/v2/forms/577/field-filters

**GET**/wp-json/gf/v2/forms/577/field-filters

Headers

|     |     |
| --- | --- |
| Authorization: | \\*\\*\\*\\*\\* Hidden credentials \*\*\*\*\* |
| Host: | gf-current.local |
| Connection: | close |
| User-Agent: | Paw/3.2 (Macintosh; OS X/10.15.7) GCDHTTPRequest |

Raw

```
GET /wp-json/gf/v2/forms/577/field-filters HTTP/1.1
Authorization: ***** Hidden credentials *****
Host: gf-current.local
Connection: close
User-Agent: Paw/3.2 (Macintosh; OS X/10.15.7) GCDHTTPRequest
```

StripeM-Inner

### Example 2

This example shows how to get the field filters for form id 577 using the field admin labels, if configured.

Pawprint \| GF Current field filters

- [Run](paw://current.document/requests/import?pawprint_id=fDmc0njh)
- Delete
- API
- Share
- [Account](https://paw.cloud/account/login)

- Info
- Request
- Response

**Request**

https://gf-current.local/wp-json/gf/v2/forms/577/field-filters?\_admin\_labels=1

**GET** https://gf-current.local/wp-json/gf/v2/forms/577/field-filters?\_admin\_labels=1

Headers

|     |     |
| --- | --- |
| Authorization: | \\*\\*\\*\\*\\* Hidden credentials \*\*\*\*\* |
| Host: | gf-current.local |
| Connection: | close |
| User-Agent: | Paw/3.2 (Macintosh; OS X/10.15.7) GCDHTTPRequest |

Query

|     |     |
| --- | --- |
| \_admin\_labels= | 1 |

StripeM-Inner

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)