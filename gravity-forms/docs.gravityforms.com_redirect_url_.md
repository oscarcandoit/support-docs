---
url: "https://docs.gravityforms.com/redirect_url/"
title: "$redirect_url - Gravity Forms Documentation"
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
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)      - [Classes](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/classes/)        - [GFAddOn](https://docs.gravityforms.com/gfaddon/ "GFAddOn")
        - [GFFeedAddOn](https://docs.gravityforms.com/gffeedaddon/ "GFFeedAddOn")
        - [GFPaymentAddOn](https://docs.gravityforms.com/gfpaymentaddon/ "GFPaymentAddOn")
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# $redirect\_url

- [Description](https://docs.gravityforms.com/redirect_url/#h-description)
- [Properties](https://docs.gravityforms.com/redirect_url/#h-properties)
- [Usage](https://docs.gravityforms.com/redirect_url/#h-usage)
- [Location](https://docs.gravityforms.com/redirect_url/#h-location)
- [Used By](https://docs.gravityforms.com/redirect_url/#h-used-by)

## Description

The _$redirect\_url_ property defines the URL that a user is redirected to upon submitting the form. This value is typically the location of a payment gateway to complete payment.

If left as an empty string, the redirect URL is ignored, and the user is not redirected after submission.

## Properties

**Class**: GFPaymentAddOn

**Access**: protected

**Type**: boolean

**Defaults to**: false

## Usage

|     |     |
| --- | --- |
| 1<br>2<br>3 | `class``ExamplePaymentAddOn``extends``GFPaymentAddOn {`<br>```protected``$redirect_url``=``'https://gravityforms.com'``;`<br>`}` |

## Location

includes/addon/class-gf-payment-addon.php

## Used By

GFPaymentAddOn::entry\_post\_save()

GFPaymentAddOn::validation()

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 9, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/redirect_url/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)