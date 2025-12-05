---
url: "https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/"
title: "Submitting Forms with REST API v2 - Gravity Forms Documentation"
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

# Submitting Forms with REST API v2

- [Introduction](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#h-introduction)
- [Authentication](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#authentication)
- [Method](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#h-path)
- [Content-Type](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#h-content-type)
- [Required Properties](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#h-optional-properties)
- [Response \[json\]](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#h-response-json)
- [Usage Examples](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#h-usage-examples)
- [application/json](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#example-application-json)
- [cURL Request](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#example-application-json-request)
- [Response](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#example-application-json-response)
- [multipart/form-data](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#example-multipart-form-data)
- [cURL Request](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#example-multipart-form-data-request)
- [Response](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/#example-multipart-form-data-response)

## Introduction

The form submissions endpoint was added in Gravity Forms 2.4, it is used to create an entry by sending input values through the complete form submission process.

This includes the following features and processes:

- Saving progress for the save and continue feature
- Validation
- Configured anti-spam checks e.g. honeypot, captcha, Akismet etc.
- Saving the entry to the database
- Add-on feeds
- Notifications
- Confirmations
- All the filters and action hooks triggered by a regular form submission

If you only want to validate submission values, without performing the other processes above, see [Validating Forms with REST API v2](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/).

## Authentication

See [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/).

[Gravity Forms capabilities](https://docs.gravityforms.com/role-management-guide/) are not required to use this endpoint.

## Method

This endpoint only accepts `POST` requests.

## Path

|     |
| --- |
| `/gf/v2/forms/[FORM_ID]/submissions` |

## `Content-Type`

This endpoint supports the `application/json`, `application/x-www-form-urlencoded`, and `multipart/form-data` content types.

File uploads for single file upload type fields are only supported when using `multipart/form-data`.

## Required Properties

The request body should contain the submitted values using the field input names (e.g. `input_1`) as the keys.

The expected input names are identical to the input names found in the form markup. If you have any doubts about the name of an input, use your browsers developer tools to inspect the inputs via the form preview page.

When using file upload fields with the multi-file feature enabled, append \[\] to the end of the input name. This indicates that multiple files may be submitted for the same field.

## Optional Properties

The request body can also include the following properties.

| Key | Type | Description |
| --- | --- | --- |
| **field\_values** | array | An array of dynamic population parameter keys with their corresponding values used to populate the fields. Useful for evaluating conditional logic rules to determine which fields should be validated and saved. |
| **target\_page** | integer | Default is `0`. <br>For multi-page forms; indicates which page would be loaded next if the current page passes validation. |
| **source\_page** | integer | Default is `1`. <br>For multi-page forms; indicates which page was active when the values were submitted for validation. |

## Response _\[json\]_

The response will contain a JSON object which contains the following:

| Key | Type | Description |
| --- | --- | --- |
| **is\_valid** | bool | The form validation result. |
| **validation\_messages** | array\|object | Only present when `is_valid` is `false`. <br>An array of validation messages for the fields that failed validation. |
| **page\_number** | integer | For multi-page forms.<br>The page that should be displayed. |
| **source\_page\_number** | integer | For multi-page forms.<br>The page that was submitted. |
| **confirmation\_message** | string | Only present when `is_valid` is `true`.<br>The resume or confirmation message. |
| **confirmation\_type** | string | Only present when `is_valid` is `true`.<br>The type of confirmation being used for the current submission.<br>`message` or `redirect` |
| **confirmation\_redirect** | string | Only present when `is_valid` is `true` and the `confirmation_type` is `redirect`.<br>The URL the submission should redirect to. |
| **entry\_id** | integer | Only present when `is_valid` is `true` and the user authenticating the request has permission to view or edit entries.<br>The ID of the entry created by the submission. |
| **resume\_token** | string | Only present if the value of the `gform_save` input in the request body was `true`.<br>The token that can be used to repopulate the embedded form with the saved values. |

**Important:** When the `confirmation_type` is set to `redirect`, the URL specified in `confirmation_redirect` will be included in the response’s `Location` header. Certain REST clients will automatically follow this header, resulting in a redirection to the specified URL instead of displaying or using the JSON response. If you are unable to prevent your REST client from automatically following redirects, you can utilize the `rest_post_dispatch` filter to remove the `Location` header from the response. The filter can be used in the theme functions.php file, a custom functions plugin, or a code snippets plugin.\`

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15 | `add_filter(``'rest_post_dispatch'``,``function``(``$response``,``$server``,``$request``) {`<br>```if``(``$response``->get_status() !== 200`<br>```||``$request``->get_method() !==``'POST'`<br>```||``empty``(``$request``[``'form_id'``] )`<br>```||``$request``->get_route() !==``"/gf/v2/forms/{$request['form_id']}/submissions"`<br>```) {`<br>```return``$response``;`<br>```}`<br>```$headers``=``$response``->get_headers();`<br>```unset(``$headers``[``'Location'``] );`<br>```$response``->set_headers(``$headers``);`<br>```return``$response``;`<br>`}, 10, 3 );` |

## Usage Examples

### application/json

#### cURL Request

|     |
| --- |
| `curl --location --request POST``'https://example.com/wp-json/gf/v2/forms/1/submissions'``\`<br>`--header``'Content-Type: application/json'``\`<br>`--data-raw '{`<br>```"input_1"``:``"value"``,`<br>```"input_2"``:``"another value"``,`<br>```"input_4_3"``:``"first"``,`<br>```"input_4_6"``:``"last"`<br>`}'` |

#### Response

|     |
| --- |
| `{`<br>```"is_valid"``:``true``,`<br>```"page_number"``: 0,`<br>```"source_page_number"``: 1,`<br>```"confirmation_message"``:``"<div id='gform_confirmation_wrapper_1' class='gform_confirmation_wrapper '><div id='gform_confirmation_message_1' class='gform_confirmation_message_1 gform_confirmation_message'>Thanks for contacting us! We will get in touch with you shortly.</div></div>"``,`<br>```"confirmation_type"``:``"message"`<br>`}` |

### multipart/form-data

#### cURL Request

|     |
| --- |
| `curl --location --request POST``'https://example.com/wp-json/gf/v2/forms/1/submissions'``\`<br>`--form``'input_1="value"'``\`<br>`--form``'input_3=@"/path/to/file.jpg"'` |

#### Response

|     |
| --- |
| `{`<br>```"is_valid"``:``false``,`<br>```"validation_messages"``: {`<br>```"3"``:``"The uploaded file type is not allowed. Must be one of the following: pdf"`<br>```},`<br>```"page_number"``: 1,`<br>```"source_page_number"``: 1`<br>`}` |

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)