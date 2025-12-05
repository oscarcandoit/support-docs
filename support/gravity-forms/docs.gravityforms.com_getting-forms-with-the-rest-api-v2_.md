---
url: "https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/"
title: "Getting Forms with the REST API v2 - Gravity Forms Documentation"
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

# Getting Forms with the REST API v2

- [Introduction](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#introduction)
- [Authentication](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#h-authentication)
- [Getting a Form](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#searching-entries)
- [Method](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#search-method)
- [Path](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#search-path)
- [Required Properties](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#search-required-properties)
- [Optional Properties](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#search-optional-properties)
- [Response](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#entry-response)
- [Success](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#h-success)
- [Failure](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#h-failure)
- [Usage](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#h-usage)
- [cURL Request](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#h-curl-request)
- [Response](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#h-response)
- [cURL Request](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#h-curl-request-0)
- [Response](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/#h-response-0)

## Introduction

The `/forms` and `forms/[FORM_ID]` endpoints can be used to get forms and form details.

## Authentication

See [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/).

The [capability](https://docs.gravityforms.com/role-management-guide/)`gravityforms_edit_forms` is required to use `GET` requests at this endpoint.

This can be filtered using [gform\_rest\_api\_capability\_get\_forms](https://docs.gravityforms.com/gform_rest_api_capability_get_forms/).

## Getting a Form

The `/forms` and `forms/[FORM_ID]` endpoints can be used to get forms and form details.

### Method

This endpoint accepts `GET` requests in order to get forms.

### Path

|     |
| --- |
| `/gf/v2/forms` |

or

|     |
| --- |
| `/gf/v2/forms/[FORM_ID]` |

### Required Properties

There are no required properties.

When passing no properties to the endpoint `/forms` a response containing basic details for all forms will be returned. This includes the properties **id**, **title**, and **entries** count.

### Optional Properties

The request URL can also include the following parameters.

| Key | Type | Description |
| --- | --- | --- |
| **include** | array | An array of forms by ID to include in the response. |

### Response

#### Success

A successful response when not specifying specific forms will contain a JSON object keyed by form ID – each with form details.

| Key | Type | Description |
| --- | --- | --- |
| **id** | string | The form ID. |
| **title** | string | The form title. |
| **entries** | string | A count of associated entries. This property is excluded when [gform\_rest\_api\_retrieve\_form\_totals](https://docs.gravityforms.com/gform_rest_api_retrieve_form_totals/) is `false`. |

.

A successful response when using the `include` parameter will contain a JSON object keyed by form ID – each with the [Form Object](https://docs.gravityforms.com/form-object/). When hitting a form-specific endpoint the response will contain a JSON object with the [Form Object](https://docs.gravityforms.com/form-object/).

| Key | Type | Description |
| --- | --- | --- |
| **\[form\_properties\]** | [Form Object](https://docs.gravityforms.com/entry-object/) | The queried form. |

#### Failure

A failed response will provide a JSON string of the error code and message.

| Key | Type | Description |
| --- | --- | --- |
| **code** | string | Error code.<br>`gf_not_found` |
| **message** | string | Human-readable error message. |
| **data\[status\]** | integer | [HTTP response status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) |

### Usage

#### cURL Request

|     |
| --- |
| `curl``"https://rocket.test/wp-json/gf/v2/forms"``\`<br>```-u``'ck_5f86565df60696c43af25f9194e106800770b8e9:cs_be0190310fefc061c564168670d0a96d68873c29'` |

#### Response

|     |
| --- |
| `{`<br>```"30"``: {`<br>```"id"``:``"30"``,`<br>```"title"``:``"API Documentation"``,`<br>```"entries"``:``"1"`<br>```},`<br>```"31"``: {`<br>```"id"``:``"31"``,`<br>```"title"``:``"Inquiry Form"``,`<br>```"entries"``:``"0"`<br>```},`<br>```"27"``: {`<br>```"id"``:``"27"``,`<br>```"title"``:``"Stripe 5.0 Testing"``,`<br>```"entries"``:``"13"`<br>```}`<br>`}` |

#### cURL Request

|     |
| --- |
| `curl``"https://rocket.test/wp-json/gf/v2/forms?include[]=31"``\`<br>```-u``'ck_5f86565df60696c43af25f9194e106800770b8e9:cs_be0190310fefc061c564168670d0a96d68873c29'` |

#### Response

|     |
| --- |
| `{`<br>```"31"``: {`<br>```"title"``:``"Inquiry Form"``,`<br>```"fields"``: [`<br>```{`<br>```"type"``:``"name"``,`<br>```"id"``: 1,`<br>```"formId"``: 31,`<br>```"label"``:``"Name A"``,`<br>```"adminLabel"``:``""``,`<br>```"isRequired"``:``false``,`<br>```"size"``:``"large"``,`<br>```"errorMessage"``:``""``,`<br>```"visibility"``:``"visible"``,`<br>```"nameFormat"``:``"advanced"``,`<br>```"inputs"``: [`<br>```{`<br>```"id"``:``"1.2"``,`<br>```"label"``:``"Prefix"``,`<br>```"name"``:``""``,`<br>```"autocompleteAttribute"``:``"honorific-prefix"``,`<br>```"choices"``: [`<br>```{`<br>```"text"``:``"Dr."``,`<br>```"value"``:``"Dr."`<br>```},`<br>```{`<br>```"text"``:``"Miss"``,`<br>```"value"``:``"Miss"`<br>```},`<br>```{`<br>```"text"``:``"Mr."``,`<br>```"value"``:``"Mr."`<br>```},`<br>```{`<br>```"text"``:``"Mrs."``,`<br>```"value"``:``"Mrs."`<br>```},`<br>```{`<br>```"text"``:``"Ms."``,`<br>```"value"``:``"Ms."`<br>```},`<br>```{`<br>```"text"``:``"Mx."``,`<br>```"value"``:``"Mx."`<br>```},`<br>```{`<br>```"text"``:``"Prof."``,`<br>```"value"``:``"Prof."`<br>```},`<br>```{`<br>```"text"``:``"Rev."``,`<br>```"value"``:``"Rev."`<br>```}`<br>```],`<br>```"isHidden"``:``true``,`<br>```"inputType"``:``"radio"`<br>```},`<br>```{`<br>```"id"``:``"1.3"``,`<br>```"label"``:``"First"``,`<br>```"name"``:``""``,`<br>```"autocompleteAttribute"``:``"given-name"`<br>```},`<br>```{`<br>```"id"``:``"1.4"``,`<br>```"label"``:``"Middle"``,`<br>```"name"``:``""``,`<br>```"autocompleteAttribute"``:``"additional-name"``,`<br>```"isHidden"``:``true`<br>```},`<br>```{`<br>```"id"``:``"1.6"``,`<br>```"label"``:``"Last"``,`<br>```"name"``:``""``,`<br>```"autocompleteAttribute"``:``"family-name"`<br>```},`<br>```{`<br>```"id"``:``"1.8"``,`<br>```"label"``:``"Suffix"``,`<br>```"name"``:``""``,`<br>```"autocompleteAttribute"``:``"honorific-suffix"``,`<br>```"isHidden"``:``true`<br>```}`<br>```],`<br>```"description"``:``""``,`<br>```"allowsPrepopulate"``:``false``,`<br>```"inputMask"``:``false``,`<br>```"inputMaskValue"``:``""``,`<br>```"inputMaskIsCustom"``:``""``,`<br>```"maxLength"``:``""``,`<br>```"inputType"``:``""``,`<br>```"labelPlacement"``:``""``,`<br>```"descriptionPlacement"``:``""``,`<br>```"subLabelPlacement"``:``""``,`<br>```"placeholder"``:``""``,`<br>```"cssClass"``:``""``,`<br>```"inputName"``:``""``,`<br>```"noDuplicates"``:``false``,`<br>```"defaultValue"``:``""``,`<br>```"enableAutocomplete"``:``false``,`<br>```"autocompleteAttribute"``:``""``,`<br>```"choices"``:``""``,`<br>```"conditionalLogic"``:``""``,`<br>```"productField"``:``""``,`<br>```"layoutGridColumnSpan"``:``""``,`<br>```"enableEnhancedUI"``: 0,`<br>```"layoutGroupId"``:``"dc68cb94"``,`<br>```"fields"``:``""``,`<br>```"pageNumber"``: 1`<br>```},`<br>```{`<br>```"type"``:``"select"``,`<br>```"id"``: 3,`<br>```"formId"``: 31,`<br>```"label"``:``"How did you hear about us?"``,`<br>```"adminLabel"``:``""``,`<br>```"isRequired"``:``false``,`<br>```"size"``:``"large"``,`<br>```"errorMessage"``:``""``,`<br>```"visibility"``:``"visible"``,`<br>```"validateState"``:``true``,`<br>```"inputs"``: null,`<br>```"choices"``: [`<br>```{`<br>```"text"``:``"Online"``,`<br>```"value"``:``"Online"``,`<br>```"isSelected"``:``false``,`<br>```"price"``:``""`<br>```},`<br>```{`<br>```"text"``:``"Friend"``,`<br>```"value"``:``"Friend"``,`<br>```"isSelected"``:``false``,`<br>```"price"``:``""`<br>```},`<br>```{`<br>```"text"``:``"Newspaper"``,`<br>```"value"``:``"Newspaper"``,`<br>```"isSelected"``:``false``,`<br>```"price"``:``""`<br>```}`<br>```],`<br>```"description"``:``""``,`<br>```"allowsPrepopulate"``:``false``,`<br>```"inputMask"``:``false``,`<br>```"inputMaskValue"``:``""``,`<br>```"inputMaskIsCustom"``:``false``,`<br>```"maxLength"``:``""``,`<br>```"inputType"``:``""``,`<br>```"labelPlacement"``:``""``,`<br>```"descriptionPlacement"``:``""``,`<br>```"subLabelPlacement"``:``""``,`<br>```"placeholder"``:``""``,`<br>```"cssClass"``:``""``,`<br>```"inputName"``:``""``,`<br>```"noDuplicates"``:``false``,`<br>```"defaultValue"``:``""``,`<br>```"enableAutocomplete"``:``false``,`<br>```"autocompleteAttribute"``:``""``,`<br>```"conditionalLogic"``:``""``,`<br>```"productField"``:``""``,`<br>```"layoutGridColumnSpan"``:``""``,`<br>```"enablePrice"``:``""``,`<br>```"enableEnhancedUI"``: 0,`<br>```"layoutGroupId"``:``"bc999d5b"``,`<br>```"multipleFiles"``:``false``,`<br>```"maxFiles"``:``""``,`<br>```"calculationFormula"``:``""``,`<br>```"calculationRounding"``:``""``,`<br>```"enableCalculation"``:``""``,`<br>```"disableQuantity"``:``false``,`<br>```"displayAllCategories"``:``false``,`<br>```"useRichTextEditor"``:``false``,`<br>```"errors"``: [],`<br>```"fields"``:``""``,`<br>```"pageNumber"``: 1`<br>```}`<br>```],`<br>```"version"``:``"2.7.13"``,`<br>```"id"``: 31,`<br>```"markupVersion"``: 2,`<br>```"notifications"``: [],`<br>```"confirmations"``: {`<br>```"64f793366215f"``: {`<br>```"id"``:``"64f793366215f"``,`<br>```"name"``:``"Default Confirmation"``,`<br>```"isDefault"``:``true``,`<br>```"type"``:``"message"``,`<br>```"message"``:``"Thanks for contacting us! We will get in touch with you shortly."``,`<br>```"url"``:``""``,`<br>```"pageId"``:``""``,`<br>```"queryString"``:``""`<br>```}`<br>```},`<br>```"nextFieldId"``: 4,`<br>```"is_active"``:``"1"``,`<br>```"date_created"``:``"2023-09-05 20:44:38"``,`<br>```"is_trash"``:``"0"`<br>```}`<br>`}` |

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)