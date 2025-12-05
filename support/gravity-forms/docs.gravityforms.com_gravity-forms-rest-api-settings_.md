---
url: "https://docs.gravityforms.com/gravity-forms-rest-api-settings/"
title: "Gravity Forms REST API Settings - Gravity Forms Documentation"
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

# Gravity Forms REST API Settings

- [Overview](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-overview)
- [Activate The REST API](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-activate-the-rest-api)
- [API version 2 authentication](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-api-version-2-authentication)
- [Add Key](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-add-key)
- [Edit Key](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-edit-key)
- [Revoke Key](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-revoke-key)
- [API version 1 authentication](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-api-version-1-authentication)
- [Public API Key](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-public-api-key)
- [Private API Key](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-private-api-key)
- [QR Code](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-qr-code)
- [Impersonate Account](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-impersonate-account)
- [WordPress Roles in the Gravity Forms REST API](https://docs.gravityforms.com/gravity-forms-rest-api-settings/#h-wordpress-roles-in-the-gravity-forms-rest-api)

## Overview

The REST API settings page allows you to set up the [Gravity Forms REST API](https://docs.gravityforms.com/category/developers/rest-api/), which can be used to integrate Gravity Forms with custom apps, remote services, and other WordPress sites.

## Activate The REST API

1. To enable the Gravity Forms REST API, navigate to Forms → Settings → REST API.

[![Image showing the Gravity Forms REST API as disabled](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-1024x252.png)](https://docs.gravityforms.com/wp-content/uploads/2024/07/image.png)

2. Check the Enabled checkbox.
3. Click on the Update button to save the settings.
4. The REST API is now enabled.

![Image showing the Gravity Forms REST API as enabled](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-6.png)

**Note:** If the Update button is not clicked, any settings created will be saved, but they will not be available for use.

## API version 2 authentication

### Add Key

[![Image showing Gravity Forms REST API Authentication (API Version 2) Keys](https://docs.gravityforms.com/wp-content/uploads/2025/11/image-4-1024x383.png)](https://docs.gravityforms.com/wp-content/uploads/2025/11/image-4.png)

1. Click on Add Key.

[![Image showing API Key settings](https://docs.gravityforms.com/wp-content/uploads/2025/11/image-5-1024x624.png)](https://docs.gravityforms.com/wp-content/uploads/2025/11/image-5.png)

2. Add a Description for your key.

The description can be used as a reminder of what this key is used for.
3. Select the user assigned to that key.
4. Select the Permissions.
5. Add the key.

**Note:** Keys you create are stored immediately, but they will not become active until you click **Update** at the bottom of the page.

[![Image showing consumer key and consumer secret](https://docs.gravityforms.com/wp-content/uploads/2025/11/image-6-1024x567.png)](https://docs.gravityforms.com/wp-content/uploads/2025/11/image-6.png)

6. Copy the Consumer Key and Secret now, as they will not be available once you leave this page.
7. After copying the keys, click the X in the upper right corner to close the dialog.

8. You will see your new key in the Authentication list

[![Image showing Gravity Forms REST API Authentication (API Version 2) Keys](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-5.png)](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-5.png)

9. Once you have copied your Consumer Key and Consumer Secret and the API key you created is listed, click the “Update” button at the bottom of the page to save the key.

### Edit Key

[![Image showing Gravity Forms REST API Authentication (API Version 2) Keys](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-7.png)](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-7.png)

1. Hover the key you want to edit. Click on Edit.
2. You can edit the key Description, User, and Permissions.
3. Click on Update to save the changes.

### Revoke Key

Revoking an API key might be necessary when an application or service using it is no longer needed, ensuring the system remains clean. Regularly rotating keys as part of best practices and revoking old ones can also help maintain an organized and efficient system.

1. Hover the key you want to edit. Click on Revoke.
2. A dialog will ask you to confirm.

![Image showin a pop up to confirm API Key deletion](https://docs.gravityforms.com/wp-content/uploads/2024/07/revoke-api-key.jpg)

**Note:** when you revoke an API Key, any services using that key will no longer be able to connect to the Gravity Forms REST API.

[Visit the documentation pages](https://docs.gravityforms.com/rest-api-v2/) for more information about the Gravity Forms API version 2.

## API version 1 authentication

This section provides information on configuring and authenticating API access to use the REST API version 1 of a given service. [Visit the documentation pages](https://docs.gravityforms.com/web-api/) for more information about the Gravity Forms API version 1.

[![Image showing Authentication settings for Gravity Forms API Version 1](https://docs.gravityforms.com/wp-content/uploads/2025/11/image-7-1024x756.png)](https://docs.gravityforms.com/wp-content/uploads/2025/11/image-7.png)

### Public API Key

The public key used for API authentication. It is typically included in API requests to identify the client making the request. Public keys are generally safe to share and can be used in client-side applications.

### Private API Key

The private key should be kept secure and not exposed publicly. It is used to authenticate and authorize API requests, providing access to the underlying resources and operations. The private key should only be used in server-side applications to prevent unauthorized access.

### QR Code

This feature allows you to generate and display a QR code, which can be scanned to configure or access the API settings quickly. The QR code can be shown or hidden as needed.

![](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-13.png)

Note: Each time the Public Key or Private Key changes, the settings must be saved, and a new QR Code will be generated.

### Impersonate Account

This option allows you to set the user the API request will use on each action.

## WordPress Roles in the Gravity Forms REST API

Gravity Forms supports authenticating REST API requests using credentials. Remember that the Gravity Forms capabilities assigned to the user authenticating the request will be honored. For example, if the user does not have the capability to edit entries (gravityforms\_edit\_entries), requests to update entries will fail. See the [Role Management](https://docs.gravityforms.com/role-management) article for details about the available capabilities and how to manage them.

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: November 13, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gravity-forms-rest-api-settings/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)