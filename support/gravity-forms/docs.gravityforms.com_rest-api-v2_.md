---
url: "https://docs.gravityforms.com/rest-api-v2/"
title: "REST API v2 Guide - Gravity Forms Documentation"
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
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)    - [Endpoints](https://docs.gravityforms.com/category/developers/rest-api/rest-api-endpoints/)
    - [REST API v2 Basic Authentication](https://docs.gravityforms.com/rest-api-v2-basic-authentication/ "REST API v2 Basic Authentication")
    - [REST API v2 Guide](https://docs.gravityforms.com/rest-api-v2/ "REST API v2 Guide")
    - [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/ "REST API v2 Authentication")
    - [Gravity Forms REST API Settings](https://docs.gravityforms.com/gravity-forms-rest-api-settings/ "Gravity Forms REST API Settings")
    - [REST API v1 Guide](https://docs.gravityforms.com/web-api/ "REST API v1 Guide")
    - [v1 Examples](https://docs.gravityforms.com/web-api-examples/ "v1 Examples")
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# REST API v2 Guide

- [Introduction](https://docs.gravityforms.com/rest-api-v2/#h-introduction)
- [Upgrading to Version 2](https://docs.gravityforms.com/rest-api-v2/#h-upgrading-to-version-2)
- [Authentication](https://docs.gravityforms.com/rest-api-v2/#h-authentication)
- [Specify the Content Type when appropriate](https://docs.gravityforms.com/rest-api-v2/#h-specify-the-content-type-when-appropriate)
- [Example](https://docs.gravityforms.com/rest-api-v2/#h-example)
- [No Response Envelope](https://docs.gravityforms.com/rest-api-v2/#h-no-response-envelope)
- [Example](https://docs.gravityforms.com/rest-api-v2/#h-example-1)
- [Form Submissions](https://docs.gravityforms.com/rest-api-v2/#h-form-submissions)
- [Example](https://docs.gravityforms.com/rest-api-v2/#h-example-2)
- [POST Single Resources](https://docs.gravityforms.com/rest-api-v2/#h-post-single-resources)
- [DELETE now trashes](https://docs.gravityforms.com/rest-api-v2/#h-delete-now-trashes)
- [DELETE, POST and PUT responses](https://docs.gravityforms.com/rest-api-v2/#h-delete-post-and-put-responses)
- [Unit Tests](https://docs.gravityforms.com/rest-api-v2/#h-unit-tests)
- [API Documentation](https://docs.gravityforms.com/rest-api-v2/#h-api-documentation)
- [Authentication](https://docs.gravityforms.com/rest-api-v2/#h-authentication-1)
- [API Path](https://docs.gravityforms.com/rest-api-v2/#h-api-path)
- [Sending Requests](https://docs.gravityforms.com/rest-api-v2/#h-sending-requests)
- [PHP](https://docs.gravityforms.com/rest-api-v2/#h-php)
- [Endpoints](https://docs.gravityforms.com/rest-api-v2/#h-endpoints)
- [Forms](https://docs.gravityforms.com/rest-api-v2/#h-forms)
- [Notifications](https://docs.gravityforms.com/rest-api-v2/#h-notifications)
- [Feeds](https://docs.gravityforms.com/rest-api-v2/#h-feeds)
- [Fields](https://docs.gravityforms.com/rest-api-v2/#h-fields)
- [Entries](https://docs.gravityforms.com/rest-api-v2/#h-entries)
- [Results](https://docs.gravityforms.com/rest-api-v2/#h-results)

## Introduction

The REST API v2 add-on (which was released as a beta initially back in late 2016) was incorporated into Gravity Forms core from Gravity Forms 2.4, released in the Fall of 2018. The original Web API functionality supported by previous releases of Gravity Forms is now renamed to **REST API Version 1**. This document describes some of the changes between the two API versions as well as a full description on all REST API Version 2 endpoints.

If you need information on version 1 of the REST API, see the [REST API v1 documentation](https://docs.gravityforms.com/web-api/)

## Upgrading to Version 2

The API is intended to feel as familiar as possible to developers who have worked with the WordPress REST API while

maintaining as much functionality as possible as version 1. The endpoints are largely the same as version 1, however,

the responses are slightly different and authentication has changed.

The following breaking changes are required by clients to consume version 2:

### Authentication

The REST API version 2 now supports Basic Authentication as well as OAuth 1.0a Authentication. In order to use the new version 2 endpoints, users will first need to create API Keys on the REST API setting page, then configure Basic or OAuth 1.0a Authentication. For more information, see the [Authentication](https://docs.gravityforms.com/rest-api-v2/#authentication-2) section below.

### Specify the Content Type when appropriate

The content-type application/json must be specified when sending JSON.

#### Example

|     |     |
| --- | --- |
| 1 | `curl --data [EXAMPLE_DATA] --header``"Content-Type: application/json"``https:``//localhost/wp-json/gf/v2` |

### No Response Envelope

The response will not be enveloped by default. This means that the response will not be a JSON string containing the

“status” and “response” – the body will contain the response and the HTTP code will contain the status.

The WP-API will envelope the response if the \_envelope param is included in the request.

#### Example

**Standard response:**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22 | `{`<br>`"3"``:``"Drop Down First Choice"``,`<br>`"created_by"``:``"1"``,`<br>`"currency"``:``"USD"``,`<br>`"date_created"``:``"2016-10-10 18:06:12"``,`<br>`"form_id"``:``"1"``,`<br>`"id"``:``"1"``,`<br>`"ip"``:``"127.0.0.1"``,`<br>`"is_fulfilled"``:     null,`<br>`"is_read"``:          0,`<br>`"is_starred"``:       0,`<br>`"payment_amount"``:   null,`<br>`"payment_date"``:     null,`<br>`"payment_method"``:   null,`<br>`"payment_status"``:   null,`<br>`"post_id"``:          null,`<br>`"source_url"``:``"http://localhost?gf_page=preview&amp;id=1"``,`<br>`"status"``:``"active"``,`<br>`"transaction_id"``:   null,`<br>`"transaction_type"``: null,`<br>`"user_agent"``:``"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36"`<br>`}` |

**Response with \_envelope parameter:**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28 | `{`<br>`"body"``: {`<br>`"3"``:``"Drop Down First Choice"``,`<br>`"created_by"``:``"1"``,`<br>`"currency"``:``"USD"``,`<br>`"date_created"``:``"2016-10-10 18:06:12"``,`<br>`"form_id"``:``"1"``,`<br>`"id"``:``"1"``,`<br>`"ip"``:``"127.0.0.1"``,`<br>`"is_fulfilled"``:     null,`<br>`"is_read"``:          0,`<br>`"is_starred"``:       0,`<br>`"payment_amount"``:   null,`<br>`"payment_date"``:     null,`<br>`"payment_method"``:   null,`<br>`"payment_status"``:   null,`<br>`"post_id"``:          null,`<br>`"source_url"``:``"http://localhost?gf_page=preview&amp;id=1"``,`<br>`"status"``:``"active"``,`<br>`"transaction_id"``:   null,`<br>`"transaction_type"``: null,`<br>`"user_agent"``:``"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36"`<br>`},`<br>`"headers"``: {`<br>`"Allow"``:``"GET, POST, PUT, PATCH, DELETE"`<br>`},`<br>`"status"``: 200`<br>`}` |

### Form Submissions

The Form Submissions endpoint now accepts application/json, application/x-www-form-urlencoded and multipart/form-data

content types. With the introduction of support for multipart/form-data now files can be sent to single file upload fields.

Request values should be sent all together instead of in separate elements for input\_values, field\_values, target\_page

and source\_page.

#### Example

**Example body of a JSON request:**

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `{`<br>`"input_1"``:``"test"``,`<br>`"field_values"``:``""``,`<br>`"source_page"``:  1,`<br>`"target_page"``:  0`<br>`}` |

### POST Single Resources

In order to maintain consistency with the WP API, the POST /entries and POST /forms endpoints no longer accept

collections. This means that it’s no longer possible to create multiple entries or forms in a single request.

### DELETE now trashes

Sending DELETE requests will send the resource to the trash instead of deleting it permanently.

Repeating the DELETE request will not delete the resource permanently but it will generate a 401 (Gone) response code.

Use the ‘force’ parameter to delete the entry or form permanently.

### DELETE, POST and PUT responses

Successful DELETE, POST and PUT requests now return the deleted, updated or created entry or form instead of a confirmation message.

## Unit Tests

The unit tests can be installed from the terminal using:

|     |     |
| --- | --- |
| 1 | `bash``tests``/bin/install``.sh [DB_NAME] [DB_USER] [DB_PASSWORD] [DB_HOST]` |

If you’re using [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV) you can use this command:

|     |     |
| --- | --- |
| 1 | `bash``tests``/bin/install``.sh wordpress_unit_tests root root localhost` |

## API Documentation

### Authentication

See the [Rest API V2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication) article.

## API Path

The API can be accessed as route from the WordPress REST API. This should look something like this:

|     |     |
| --- | --- |
| 1 | `https://localhost/wp-json/gf/v2/` |

For example, to obtain the Gravity Forms entry with ID 5, your request would be made to the following:

|     |     |
| --- | --- |
| 1 | `https://localhost/wp-json/gf/v2/entries/5` |

## Sending Requests

### PHP

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29 | `<?php`<br>`// Define the URL that will be accessed.`<br>`$url``= rest_url(``'gf/v2/entries'``);`<br>`// Example using Basic Authentication`<br>`$args``=``array``(`<br>```'Authorization'``=>``'Basic '``.``base64_encode``(``'admin'``.``':'``.``'12345'``),`<br>```'headers'``=>``array``(``'Content-type'``=>``'application/json'``),`<br>`);`<br>`// Make the request to the API.`<br>`$response``= wp_remote_get(``$url``,``$args``);`<br>`// Check the response code.`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ){`<br>```// If not a 200, HTTP request failed.`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}`<br>`// Result is in the response body and is json encoded.`<br>`$body``= json_decode( wp_remote_retrieve_body(``$response``), true );`<br>`// Check the response body.`<br>`if``(``$body``[``'status'``] > 202 ){`<br>```die``(``"Could not retrieve forms."``);`<br>`}`<br>`// Entries retrieved successfully.`<br>`$entries``=``$body``[``'response'``];` |

In this example, the _$entries_ variable contains the response from the API request.

## Endpoints

See the following articles:

### Forms

- [Creating Forms with the REST API v2](https://docs.gravityforms.com/creating-forms-with-the-rest-api-v2/)
- [Getting Forms with the REST API v2](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/)
- [Updating Forms with the REST API v2](https://docs.gravityforms.com/updating-forms-with-the-rest-api-v2/)
- [Submitting Forms with REST API v2](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/)
- [Validating Forms with REST API v2](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/)
- [Deleting Forms with the REST API v2](https://docs.gravityforms.com/deleting-forms-with-the-rest-api-v2/)

### Notifications

- [Sending Notifications with the REST API v2](https://docs.gravityforms.com/sending-notifications-with-the-rest-api-v2/)

### Feeds

- [Managing Add-On Feeds with REST API v2](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/)

### Fields

- [Getting the Form Field Filters with REST API v2](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/)

### Entries

- [Creating Entries with the REST API v2](https://docs.gravityforms.com/creating-entries-with-the-rest-api-v2/)
- [Searching and Getting Entries with the REST API v2](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/)
- [Updating Entries with the REST API v2](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/)
- [Deleting Entries with the REST API v2](https://docs.gravityforms.com/deleting-entries-with-the-rest-api-v2/)

### Results

- [Getting Results with REST API v2](https://docs.gravityforms.com/getting-results-with-rest-api-v2/)

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 28, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)