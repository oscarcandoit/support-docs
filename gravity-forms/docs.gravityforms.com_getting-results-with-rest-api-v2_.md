---
url: "https://docs.gravityforms.com/getting-results-with-rest-api-v2/"
title: "Getting Results with REST API v2 - Gravity Forms Documentation"
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

# Getting Results with REST API v2

- [Introduction](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#introduction)
- [Authentication](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#h-authentication)
- [Getting Results](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#searching-entries)
- [Method](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#search-method)
- [Path](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#search-path)
- [Required Properties](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#search-required-properties)
- [Optional Properties](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#search-optional-properties)
- [Search Arguments](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#search-arguments)
- [Field Filters](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#field-filters)
- [Response](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#entry-response)
- [Success](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#h-success)
- [Usage](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#h-usage)
- [cURL Request](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#h-curl-request)
- [Response](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#h-response)

## Introduction

The `forms/[FORM_ID]/results` endpoint can be used to get form results related to the [Quiz Add-On](https://www.gravityforms.com/add-ons/quiz/), [Polls Add-On](https://www.gravityforms.com/add-ons/polls/), and [Survey Add-On](https://www.gravityforms.com/add-ons/survey/).

## Authentication

See [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/).

The [capability](https://docs.gravityforms.com/role-management-guide/)`gravityforms_view_entries` is required to use `GET` requests at this endpoint.

This can be filtered using [gform\_rest\_api\_capability\_get\_results](https://docs.gravityforms.com/gform_rest_api_capability_get_results/).

## Getting Results

The `forms/[FORM_ID]/results` endpoints can be used to get results.

### Method

This endpoint accepts `GET` requests in order to get results.

### Path

|     |
| --- |
| `/gf/v2/forms/[FORM_ID]/results` |

### Required Properties

There are no required properties.

### Optional Properties

The request URL can also include the following parameters.

| Key | Type | Description |
| --- | --- | --- |
| **search** | array | Optional.<br>An associative array containing the [search arguments](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#search-arguments).<br>It is expected that `search` will be provided as JSON. |

#### Search Arguments

An associative array supporting the following properties. Must be provided in request as JSON.

| Prop | Type | Description |
| --- | --- | --- |
| **status** | string | Default is **active**.<br>The status of the entry. Possible values are **active**, **spam**, **trash**. |
| **field\_filters** | array | See [Field Filters](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#field-filters) |

#### Field Filters

| Prop | Type | Description |
| --- | --- | --- |
|  | [array](https://docs.gravityforms.com/array) | One or more associative arrays. See [Field Filter](https://docs.gravityforms.com/getting-results-with-rest-api-v2/#field-filter). |
| **mode** | [string](https://docs.gravityforms.com/string) | Optional.<br>Defaults to `all`.<br>Possible values: `all` or `any`.<br>Determines if the found entries have to match all the field filters or any. |

##### Field Filter

An associative array supporting the following properties.

| Prop | Type | Description |
| --- | --- | --- |
| **key** | [string](https://docs.gravityforms.com/string) | The field ID, entry property, or entry meta key. |
| **value** | [string](https://docs.gravityforms.com/string) \| [integer](https://docs.gravityforms.com/integer) \| [float](https://docs.gravityforms.com/float) \| [array](https://docs.gravityforms.com/array) | The value to find for the specified `key`. |
| **operator** | [string](https://docs.gravityforms.com/string) | Optional.<br>Defaults to `=`.<br>Possible values: `=`, `IS`, `CONTAINS`, `IS NOT`, `ISNOT`, `<>`, `LIKE`, `NOT IN`, `NOTIN`, or `IN`.<br>Lowercase is also supported. |
| **is\_numeric** | [boolean](https://docs.gravityforms.com/boolean) | Optional.<br>Indicates if the values of the specified `key` are numeric. |

### Response

#### Success

A successful response will contain a JSON object with the following data This may vary slightly based on the add-on for which results are being retrieved.

| Key | Type | Description |
| --- | --- | --- |
| **entry\_count** | string | The number of entries included in the results. |
| **field\_data** | object | Results for each field, keyed by field ID and including each choice value and total _(grade or score)_. |
| **status** | string | Whether or not the request includes complete results. Returns `complete` or `incomplete`. |
| **timestamp** | integer | Timestamp indicating when the last cron task was run to calculate results. |
| **labels** | object | Labels for each field, keyed by field ID and including field label and choice values with associated labels. |

.

### Usage

#### cURL Request

|     |
| --- |
| `curl``"https://rocket.test/wp-json/gf/v2/forms/46/results"``\`<br>```-u``'ck_5f86565df60696c43af25f9194e106800770b8e9:cs_be0190310fefc061c564168670d0a96d68873c29'` |

#### Response

|     |
| --- |
| `{`<br>```"entry_count"``: 3,`<br>```"field_data"``: {`<br>```"1"``: {`<br>```"glikertcol1307d0217"``: 1,`<br>```"glikertcol16fe62d85"``: 0,`<br>```"glikertcol1abdff2ca"``: 1,`<br>```"glikertcol1734f064a"``: 1,`<br>```"glikertcol162d7d431"``: 0`<br>```},`<br>```"3"``: {`<br>```"grank3552035c7"``: 12,`<br>```"grank30f9c9492"``: 8,`<br>```"grank353117d68"``: 11,`<br>```"grank33a45d22c"``: 10,`<br>```"grank384c3da75"``: 4`<br>```},`<br>```"4"``: {`<br>```"grating448a9311f"``: 0,`<br>```"grating4bd2f576a"``: 1,`<br>```"grating4d20d7980"``: 0,`<br>```"grating407965b55"``: 1,`<br>```"grating451a23053"``: 1`<br>```},`<br>```"5"``: {`<br>```"gsurvey542f6dec1"``: 0,`<br>```"gsurvey517188a2a"``: 1,`<br>```"gsurvey550a16b4c"``: 2`<br>```}`<br>```},`<br>```"status"``:``"complete"``,`<br>```"timestamp"``: 1718995135,`<br>```"labels"``: {`<br>```"1"``: {`<br>```"label"``:``"Untitled Survey Field"``,`<br>```"choices"``: {`<br>```"glikertcol1307d0217"``:``"Strongly disagree"``,`<br>```"glikertcol16fe62d85"``:``"Disagree"``,`<br>```"glikertcol1abdff2ca"``:``"Neutral"``,`<br>```"glikertcol1734f064a"``:``"Agree"``,`<br>```"glikertcol162d7d431"``:``"Strongly agree"`<br>```}`<br>```},`<br>```"3"``: {`<br>```"label"``:``"Untitled Survey Field"``,`<br>```"choices"``: {`<br>```"grank3552035c7"``:``"First Choice"``,`<br>```"grank30f9c9492"``:``"Second Choice"``,`<br>```"grank353117d68"``:``"Third Choice"``,`<br>```"grank33a45d22c"``:``"Fourth Choice"``,`<br>```"grank384c3da75"``:``"Fifth Choice"`<br>```}`<br>```},`<br>```"4"``: {`<br>```"label"``:``"Untitled Survey Field"``,`<br>```"choices"``: {`<br>```"grating448a9311f"``:``"Terrible"``,`<br>```"grating4bd2f576a"``:``"Not so great"``,`<br>```"grating4d20d7980"``:``"Neutral"``,`<br>```"grating407965b55"``:``"Pretty good"``,`<br>```"grating451a23053"``:``"Excellent"`<br>```}`<br>```},`<br>```"5"``: {`<br>```"label"``:``"Untitled Survey Field"``,`<br>```"choices"``: {`<br>```"gsurvey542f6dec1"``:``"First Choice"``,`<br>```"gsurvey517188a2a"``:``"Second Choice"``,`<br>```"gsurvey550a16b4c"``:``"Third Choice"`<br>```}`<br>```}`<br>```}`<br>`}` |

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

[Algolia](https://docs.gravityforms.com/getting-results-with-rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)