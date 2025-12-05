---
url: "https://docs.gravityforms.com/validating-forms-with-rest-api-v2/"
title: "Validating Forms with REST API v2 - Gravity Forms Documentation"
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

# Validating Forms with REST API v2

- [Introduction](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#h-introduction)
- [Authentication](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#authentication)
- [Method](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#h-path)
- [Content-Type](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#h-content-type)
- [Required Properties](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#h-optional-properties)
- [Response \[json\]](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#h-response-json)
- [Usage Examples](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#h-usage-examples)
- [application/json](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#example-application-json)
- [cURL Request](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#example-application-json-request)
- [Response](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#example-application-json-response)
- [multipart/form-data](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#example-multipart-form-data)
- [cURL Request](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#example-multipart-form-data-request)
- [Response](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/#example-multipart-form-data-response)

## Introduction

The form submissions/validation endpoint was added in Gravity Forms 2.6.3.2, it is used to validate the form input values.

If the form passes validation the configured anti-spam checks will also be performed.

The following features and processes are NOT supported:

- Saving progress for the save and continue feature
- Payment add-on validation
- Saving the entry
- Add-on feeds
- Notifications
- Confirmations
- Most of the filters and action hooks triggered by a regular form submission. Note: validation filters such as [gform\_pre\_validation](https://docs.gravityforms.com/gform_pre_validation/), [gform\_field\_validation](https://docs.gravityforms.com/gform_field_validation/), and [gform\_validation](https://docs.gravityforms.com/gform_validation/) will be triggered.

If you require any of the above you should use the [form submissions endpoint](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/) instead.

## Authentication

See [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/).

[Gravity Forms capabilities](https://docs.gravityforms.com/role-management-guide/) are not required to use this endpoint.

## Method

This endpoint only accepts `POST` requests.

## Path

|     |
| --- |
| `/gf/v2/forms/[FORM_ID]/submissions/validation` |

or (since v2.6.3.3)

|     |
| --- |
| `/gf/v2/forms/[FORM_ID]/submissions?_validate_only=1` |

## `Content-Type`

This endpoint supports the `application/json`, `application/x-www-form-urlencoded`, and `multipart/form-data` content types.

File uploads for single file upload type fields are only supported when using `multipart/form-data`.

## Required Properties

The request body should contain an associative array of values to be validated using the field input names (e.g. `input_1`) as the keys.

The expected input names are identical to the input names found in the form markup. If you have any doubts about the name of an input, use your browsers developer tools to inspect the inputs via the form preview page.

## Optional Properties

The request body can also include the following properties.

| Key | Type | Description |
| --- | --- | --- |
| **field\_values** | array | An array of dynamic population parameter keys with their corresponding values used to populate the fields. |
| **target\_page** | integer | Default is `0`. <br>For multi-page forms; indicates which page would be loaded next if the current page passes validation. |
| **source\_page** | integer | Default is `1`. <br>For multi-page forms; indicates which page was active when the values were submitted for validation. |

## Response _\[json\]_

The response will contain a JSON object which contains the following:

| Key | Type | Description |
| --- | --- | --- |
| **is\_valid** | bool | The form validation result. |
| **validation\_messages** | array\|object | Field IDs as keys to their validation error messages. |
| **page\_number** | integer | For multi-page forms.<br>The page that should be displayed. |
| **source\_page\_number** | integer | For multi-page forms.<br>The page that was submitted. |
| **is\_spam** | bool | Only present when `is_valid` is `true`.<br>Indicates if the submission has been identified as spam. |

## Usage Examples

### application/json

#### cURL Request

|     |
| --- |
| `curl --location --request POST``'https://example.com/wp-json/gf/v2/forms/1/submissions/validation'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-raw '{`<br>```"input_1"``:``"value"``,`<br>```"input_2"``:``"another value"`<br>`}'` |

#### Response

|     |
| --- |
| `{`<br>```"is_valid"``:``true``,`<br>```"validation_messages"``: [],`<br>```"page_number"``: 0,`<br>```"source_page_number"``: 1,`<br>```"is_spam"``:``false`<br>`}` |

### multipart/form-data

#### cURL Request

|     |
| --- |
| `curl --location --request POST``'https://example.com/wp-json/gf/v2/forms/1/submissions/validation'``\`<br>`--form``'input_1="value"'``\`<br>`--form``'input_3=@"/path/to/file.jpg"'` |

#### Response

|     |
| --- |
| `{`<br>```"is_valid"``:``false``,`<br>```"validation_messages"``: {`<br>```"3"``:``"The uploaded file type is not allowed. Must be one of the following: pdf"`<br>```},`<br>```"page_number"``: 1,`<br>```"source_page_number"``: 1`<br>`}` |

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)