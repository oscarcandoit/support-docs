---
url: "https://docs.gravityforms.com/rest-api-v2-authentication/"
title: "REST API v2 Authentication - Gravity Forms Documentation"
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

# REST API v2 Authentication

- [Overview](https://docs.gravityforms.com/rest-api-v2-authentication/#h-overview)
- [Authentication Credentials](https://docs.gravityforms.com/rest-api-v2-authentication/#h-authentication-credentials)
- [Authentication Methods](https://docs.gravityforms.com/rest-api-v2-authentication/#h-authentication-methods)
- [OAuth 1.0a Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/#h-oauth-1-0a-authentication)
- [Examples](https://docs.gravityforms.com/rest-api-v2-authentication/#oauth-examples)
- [Postman](https://docs.gravityforms.com/rest-api-v2-authentication/#oauth-postman)
- [PHP Example](https://docs.gravityforms.com/rest-api-v2-authentication/#oauth-php)
- [Basic Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/#h-basic-authentication)
- [WordPress Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/#h-wordpress-authentication)
- [Troubleshooting](https://docs.gravityforms.com/rest-api-v2-authentication/#h-troubleshooting)
- [Example Logging Statements](https://docs.gravityforms.com/rest-api-v2-authentication/#h-example-logging-statements)
- [Successful Basic Authentication using Gravity Forms Credentials](https://docs.gravityforms.com/rest-api-v2-authentication/#h-successful-basic-authentication-using-gravity-forms-credentials)
- [Successful Basic Authentication using WordPress Application Password](https://docs.gravityforms.com/rest-api-v2-authentication/#h-successful-basic-authentication-using-wordpress-application-password)
- [Successful OAuth 1.0a Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/#h-successful-oauth-1-0a-authentication)
- [Other Logging Statements](https://docs.gravityforms.com/rest-api-v2-authentication/#h-other-logging-statements)
- [Possible Error Logging Statements](https://docs.gravityforms.com/rest-api-v2-authentication/#h-possible-error-logging-statements)
- [Unable to authenticate using Basic Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/#h-unable-to-authenticate-using-basic-authentication)

## Overview

The Gravity Forms [REST API version 2](https://docs.gravityforms.com/rest-api-v2/) can be used to integrate Gravity Forms with custom apps, remote services, and other WordPress sites. For authentication to succeed, you must ensure the REST API is enabled on the **Forms > Settings > REST API** page.

## Authentication Credentials

Gravity Forms supports authenticating REST API requests using credentials created by Gravity Forms or WordPress.

Whichever credentials you choose to use, please remember that the Gravity Forms capabilities assigned to the user authenticating the request will be honored. For example, if the user does not have the capability to edit entries (gravityforms\_edit\_entries), requests to update entries will fail. See the [Role Management](https://docs.gravityforms.com/role-management) article for details about the available capabilities and how to manage them.

When creating your credentials, make sure to copy them as they will only be displayed once.

Credentials can be created via the **Forms > Settings > REST API** page. Refer to the [documentation](https://docs.gravityforms.com/gravity-forms-rest-api-settings/) to create your API Keys.

## Authentication Methods

Gravity Forms supports 2 built-in methods of authentication OAuth 1.0a Authentication and Basic Authentication.

### OAuth 1.0a Authentication

OAuth 1.0a is the recommended authentication method as it offers a higher level of security.

Note that array parameters must be indexed in order for the signature to validate correctly. For example use `form_ids[0]=1&form_ids[1]=2` instead of `form_ids[]=1&form_ids[]=2`.

#### Examples

Following are a few examples of requests with OAuth 1.0a Authentication:

#### Postman

Postman is a free app that allows you to easily send API requests without having to write any code. [Download it here](https://www.getpostman.com/)

[![](https://docs.gravityforms.com/wp-content/uploads/2020/11/Screenshot-2020-11-27-at-17.48.52-1024x435.png)](https://docs.gravityforms.com/wp-content/uploads/2020/11/Screenshot-2020-11-27-at-17.48.52.png)

#### PHP Example

This example requires an OAuth helper class that can be [downloaded here](https://docs.gravityforms.com/wp-content/uploads/2017/01/class-oauth-request.php_.zip).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28 | `$consumer_key``=``'ck_c8d98772e0f4db070c97416796ff251fc991f454'``;`<br>`$consumer_secret``=``'cs_e0665f1acf0460581ab4fdce978404b28dab1a54'``;`<br>`$url``=``'https://gravityforms.local/wp-json/gf/v2/forms'``;`<br>`$method``=``'POST'``;`<br>`$args``=``array``();`<br>`// Use helper to get oAuth authentication parameters in URL.`<br>`// Download helper library from: https://docs.gravityforms.com/wp-content/uploads/2017/01/class-oauth-request.php_.zip`<br>`require_once``(``'class-oauth-request.php'``);`<br>`$oauth``=``new``OAuth_Request(``$url``,``$consumer_key``,``$consumer_secret``,``$method``,``$args``);`<br>`// Form to be created.`<br>`$form``=``array``(``'title'``=>``'Form title'``);`<br>`// Send request.`<br>`$response``= wp_remote_request(``$oauth``->get_url(),`<br>```array``(`<br>```'method'``=>``$method``,`<br>```'body'``=> json_encode(``$form``),`<br>```'headers'``=>``array``(``'Content-type'``=>``'application/json'``),`<br>```)`<br>`);`<br>`// Check the response code.`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ) {`<br>```// If not a 200, HTTP request failed.`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}` |

### Basic Authentication

Basic Authentication is supported **only over HTTPS**. For non-HTTPS (HTTP) requests, use **OAuth 1.0a**. See the **[Basic Authentication](https://docs.gravityforms.com/?p=45467)** article.

### WordPress Authentication

In addition to the authentication methods provided by Gravity Forms (described above), the REST API version 2 also supports any WordPress specific authentication, including cookie authentication and any of the authentication plugins. Here are some more information about those authentication methods:

- [WordPress REST API authentication documentation](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/#cookie-authentication)
- [WP REST API: Setting Up and Using Basic Authentication](https://code.tutsplus.com/tutorials/wp-rest-api-setting-up-and-using-basic-authentication--cms-24762)
- [WP REST API: Setting Up and Using OAuth 1.0a Authentication](https://code.tutsplus.com/tutorials/wp-rest-api-setting-up-and-using-oauth-10a-authentication--cms-24797)

## Troubleshooting

Begin troubleshooting by:

- Enable logging on the **Forms > Settings** page
- On the **Forms > Settings > Logging** page, ensure that Gravity Forms API is enabled and set to **log all messages**.

[Check our logging and debugging documentation](https://docs.gravityforms.com/logging-and-debugging/) for additional help.

As logging statements are only recorded when the functions they are contained within are run, perform the steps needed to replicate the issue such as connecting the integration or performing a request.

### Example Logging Statements

#### Successful Basic Authentication using Gravity Forms Credentials

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6 | `DEBUG --> GF_REST_Authentication::authenticate(): Running.`<br>`DEBUG --> GF_REST_Authentication::perform_basic_authentication(): Running.`<br>`DEBUG --> GF_REST_Authentication::perform_basic_authentication(): Valid.`<br>`DEBUG --> GF_REST_Authentication::check_user_permissions(): Running for user #1.`<br>`DEBUG --> GF_REST_Authentication::check_user_permissions(): Permissions valid.`<br>`DEBUG --> GF_REST_Controller::current_user_can_any(): method: GET; route: /gf/v2/forms; capability: "gravityforms_edit_forms"; result: true.` |

#### Successful Basic Authentication using WordPress Application Password

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8 | `DEBUG --> GF_REST_Authentication::authenticate(): Running.`<br>`DEBUG --> GF_REST_Authentication::perform_basic_authentication(): Running.`<br>`ERROR --> GF_REST_Authentication::perform_basic_authentication(): Aborting; user not found.`<br>`DEBUG --> GF_REST_Authentication::perform_application_password_authentication(): Running.`<br>`DEBUG --> GF_REST_Authentication::perform_application_password_authentication(): Valid.`<br>`DEBUG --> GF_REST_Authentication::check_user_permissions(): Running for user #1.`<br>`DEBUG --> GF_REST_Authentication::check_user_permissions(): Permissions valid.`<br>`DEBUG --> GF_REST_Controller::current_user_can_any(): method: GET; route: /gf/v2/forms; capability: "gravityforms_edit_forms"; result: true.` |

#### Successful OAuth 1.0a Authentication

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10 | `DEBUG --> GF_REST_Authentication::authenticate(): Running.`<br>`DEBUG --> GF_REST_Authentication::perform_basic_authentication(): Running.`<br>`ERROR --> GF_REST_Authentication::perform_basic_authentication(): Aborting; credentials not found.`<br>`DEBUG --> GF_REST_Authentication::perform_application_password_authentication(): Running.`<br>`ERROR --> GF_REST_Authentication::perform_application_password_authentication(): Aborting; user not found.`<br>`DEBUG --> GF_REST_Authentication::perform_oauth_authentication(): Running.`<br>`DEBUG --> GF_REST_Authentication::perform_oauth_authentication(): Valid.`<br>`DEBUG --> GF_REST_Authentication::check_user_permissions(): Running for user #1.`<br>`DEBUG --> GF_REST_Authentication::check_user_permissions(): Permissions valid.`<br>`DEBUG --> GF_REST_Controller::current_user_can_any(): method: GET; route: /gf/v2/forms; capability: "gravityforms_edit_forms"; result: true.` |

#### Other Logging Statements

|     |     |
| --- | --- |
| 1<br>2<br>3 | `DEBUG --> GF_REST_Authentication::is_request_to_rest_api(): Executing functions hooked to gform_is_request_to_rest_api.`<br>`DEBUG --> GF_REST_Authentication::authentication_fallback(): Running.`<br>`DEBUG --> GF_REST_Authentication::authenticate(): User #1 already authenticated.` |

#### Possible Error Logging Statements

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::perform_basic_authentication(): Aborting; credentials not found.` |

This is used when the username (consumer key) and/or password (consumer secret) are not found in the request.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::perform_basic_authentication(): Aborting; user not found.` |

This is used when credentials are found in the request but a user could not be found for the username (consumer key).

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Consumer secret is invalid."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the basic auth username (consumer key) is valid and the password (consumer secret) is invalid.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::perform_application_password_authentication(): Aborting; user not found.` |

This is used when WordPress was not able to authenticate the request using an Application Password.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Unknown email address. Check again or try your username."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the WordPress Application Password validation fails.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::perform_oauth_authentication(): Aborting; OAuth parameters not found.` |

This is used when the OAuth parameters such as the consumer key, timestamp, nonce, signature, or signature method are not found in the request.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Consumer key is invalid."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when a user could not be found for the consumer key included in the OAuth request.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Invalid signature - failed to sort parameters."]},"error_data": {"gform_rest_authentication_error":{"status":401}}}` |

This is used when a user was found for the consumer key in the OAuth request but the request parameters could not be sorted into the correct order.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Invalid signature - signature method is invalid."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the OAuth request signature method is not HMAC-SHA1 or HMAC-SHA256.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Invalid signature - provided signature does not match."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the OAuth request signature does not match the expected signature for the request being performed.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Invalid timestamp."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the OAuth request timestamp does not match the current timestamp plus or minus a small window.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Invalid nonce - nonce has already been used."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the OAuth nonce has already been used by a previous request.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["The API key provided does not have read permissions."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the Gravity Forms credentials are valid but the user does not have permission to perform GET or HEAD requests.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["The API key provided does not have write permissions."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the Gravity Forms credentials are valid but the user does not have permission to perform POST, PUT, PATCH, or DELETE requests.

|     |     |
| --- | --- |
| 1 | `ERROR --> GF_REST_Authentication::set_error(): {"errors":{"gform_rest_authentication_error":["Unknown request method."]},"error_data":{"gform_rest_authentication_error":{"status":401}}}` |

This is used when the Gravity Forms credentials are valid but an unknown request method is being used. Known request methods are HEAD, GET, POST, PUT, PATCH, DELETE, and OPTIONS.

### Unable to authenticate using Basic Authentication

Some hosting environments, usually Apache based, aren’t configured to pass the basic authentication headers from incoming requests to PHP so they are not present when the WordPress and Gravity Forms APIs attempt to authenticate requests, which can result in authentication errors.

WordPress had a number of reports of issues like this during the development of their REST API. An engineer at WPEngine [investigated and confirmed](https://github.com/WP-API/WP-API/issues/2512#issuecomment-280539514) it is a hosting issue which hosts can resolve by making a change to the Apache configuration on the server hosting the site.

Please contact your web host and ask them to ensure the [CGIPassAuth](https://httpd.apache.org/docs/current/en/mod/core.html#cgipassauth) directive is enabled on the server hosting your site.

The [WordPress REST API FAQ](https://developer.wordpress.org/rest-api/frequently-asked-questions/#why-is-authentication-not-working) also includes additional solutions for this issue.

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 26, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/rest-api-v2-authentication/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)