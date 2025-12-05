---
url: "https://docs.gravityforms.com/rest-api-v2-basic-authentication/"
title: "REST API v2 Basic Authentication - Gravity Forms Documentation"
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

# REST API v2 Basic Authentication

- [Overview](https://docs.gravityforms.com/rest-api-v2-basic-authentication/#h-overview)
- [Authentication Credentials](https://docs.gravityforms.com/rest-api-v2-basic-authentication/#h-authentication-credentials)
- [Gravity Forms](https://docs.gravityforms.com/rest-api-v2-basic-authentication/#h-gravity-forms)
- [WordPress Application Passwords](https://docs.gravityforms.com/rest-api-v2-basic-authentication/#h-wordpress-application-passwords)
- [Examples](https://docs.gravityforms.com/rest-api-v2-basic-authentication/#basic-auth-examples)
- [Postman](https://docs.gravityforms.com/rest-api-v2-basic-authentication/#basic-auth-postman)
- [PHP Example](https://docs.gravityforms.com/rest-api-v2-basic-authentication/#basic-auth-php)

**Note**: OAuth 1.0a is the recommended authentication method as it offers a higher level of security. Refer to [this article](https://docs.gravityforms.com/rest-api-v2-authentication/) for more information.

## Overview

Use this guide to authenticate requests to the Gravity Forms REST API v2 with Basic Authentication. Basic Auth is supported only over HTTPS.

Requests execute with the authenticated user’s **[Gravity Forms capabilities](https://docs.gravityforms.com/role-management/)**, so ensure the user has the permissions required for each endpoint.

## Authentication Credentials

### Gravity Forms

Credentials can be created via the **Forms > Settings > REST API** page. Refer to the [documentation](https://docs.gravityforms.com/gravity-forms-rest-api-settings/) to create your API Keys.

### WordPress Application Passwords

WordPress added support for Application Passwords in version 5.6. Starting with Gravity Forms 2.4.21.4 you can use WordPress Application Passwords.

To create an Application Password with WordPress 5.6 or greater go to your profile page in the WordPress admin (/wp-admin/profile.php) and scroll towards the end of the page.

[![WordPress 5.6 Application Passwords](https://docs.gravityforms.com/wp-content/uploads/2020/11/Screenshot-2020-11-13-at-13.21.22-1024x330.png)](https://docs.gravityforms.com/wp-content/uploads/2020/11/Screenshot-2020-11-13-at-13.21.22.png)

Enter a name in the “New Application Password Name” input and then click the “Add New Application Password” button. WordPress will generate and display the password which you can use to authenticate requests to the REST API.

When using this Application Password with Basic Authentication, use your account username or email address as the username.

## Examples

The following are a few examples of requests with Basic Authentication.

### Postman

Postman is a free app that allows you to send API requests easily without writing any code. [Download it here](https://www.getpostman.com/)

![Image showing Postman settings](https://docs.gravityforms.com/wp-content/uploads/2022/04/CleanShot-2022-04-06-at-12.05.35@2x-1024x324.png)

### PHP Example

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11 | `$username``=``'ck_c8d98772e0f4db070c97416796ff251fc991f454'``;`<br>`$password``=``'cs_e0665f1acf0460581ab4fdce978404b28dab1a54'``;`<br>`$headers``=``array``(``'Authorization'``=>``'Basic '``.``base64_encode``(``"{$username}:{$password}"``) );`<br>`$response``= wp_remote_get(``'https://gravityforms.local/wp-json/gf/v2/entries/5'``,``array``(``'headers'``=>``$headers``) );`<br>`// Check the response code.`<br>`if``( wp_remote_retrieve_response_code(``$response``) != 200 || (``empty``( wp_remote_retrieve_body(``$response``) ) ) ) {`<br>```// If not a 200, HTTP request failed.`<br>```die``(``'There was an error attempting to access the API.'``);`<br>`}` |

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 26, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/rest-api-v2-basic-authentication/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)