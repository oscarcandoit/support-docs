---
url: "https://docs.gravityforms.com/feed-object/"
title: "Feed Object - Gravity Forms Documentation"
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
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)      - [Classes](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/classes/)
      - [Settings API](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/settings-api/)
      - [Data Objects](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/add-on-data-objects/)        - [Feed Object](https://docs.gravityforms.com/feed-object/ "Feed Object")
        - [Submission Data Object](https://docs.gravityforms.com/submission-data-object/ "Submission Data Object")
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Feed Object

- [Introduction](https://docs.gravityforms.com/feed-object/#h-introduction)
- [Usage](https://docs.gravityforms.com/feed-object/#h-usage)
- [Properties](https://docs.gravityforms.com/feed-object/#h-properties)
- [Add-On Articles](https://docs.gravityforms.com/feed-object/#h-add-on-articles)

## Introduction

The Feed Object ($feed) is an associative array containing all the properties which determine if and how the form submission is processed by an add-on. For example, the feed for a payment add-on determines the type of payment transaction which occurs and what values are sent to the payment gateway.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `$feed``=``array``(`<br>```'id'``=> 5,`<br>```'form_id'``=> 10,`<br>```'is_active'``=> true,`<br>```'meta'``=>``array``(),`<br>```'addon_slug'``=>``'gravityformsslack'``,`<br>`);` |

## Usage

We recommend accessing the $feed properties using the [rgar()](https://docs.gravityforms.com/rgar/) or [rgars()](https://docs.gravityforms.com/rgars/) functions e.g.

|     |     |
| --- | --- |
| 1<br>2 | `$meta``= rgar(``$feed``,``'meta'``);`<br>`$conditional_logic_enabled``= rgars(``$feed``,``'meta/feed_condition_conditional_logic'``);` |

## Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | [integer](https://docs.gravityforms.com/integer/) | The feed ID. |
| **form\_id** | [integer](https://docs.gravityforms.com/integer/) | The form ID this feed was created for. An ID of 0 indicates the feed applies to ALL forms. |
| **is\_active** | [boolean](https://docs.gravityforms.com/boolean/) | Is the feed active or inactive. Default is true. |
| **feed\_order** | [integer](https://docs.gravityforms.com/integer/) | The order the feed will be displayed in the feeds list for the form. Also applies to submission time feed processing. Not all add-ons support feed ordering. |
| **meta** | [array](https://docs.gravityforms.com/array/) | Feed meta is an associative array. The available properties vary from add-on to add-on. Please see the **Add-on Articles** below for the individual properties |
| **addon\_slug** | [string](https://docs.gravityforms.com/string/) | The slug belonging to the add-on used to create the feed, including the **gravityforms** prefix. See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs/) article for a list of possible slugs. |
| **event\_type** | [string](https://docs.gravityforms.com/string/) | For future usage. |
|  |  |  |

### Add-On Articles

**GF Feed Add-Ons**

- #### [2Checkout Feed Meta](https://docs.gravityforms.com/2checkout-feed-meta/)

- #### [ActiveCampaign Feed Meta](https://docs.gravityforms.com/activecampaign-feed-meta/)

- #### [Advanced Post Creation Feed Meta](https://docs.gravityforms.com/advanced-post-creation-feed-meta/)

- #### [Agile CRM Feed Meta](https://docs.gravityforms.com/agile-crm-feed-meta/)

- #### [AWeber Feed Meta](https://docs.gravityforms.com/aweber-feed-meta/)

- #### [Breeze Feed Meta](https://docs.gravityforms.com/breeze-feed-meta/)

- #### [Campaign Monitor Feed Meta](https://docs.gravityforms.com/campaign-monitor-feed-meta/)

- #### [Capsule CRM Feed Meta](https://docs.gravityforms.com/capsule-crm-feed-meta/)

- #### [CleverReach Feed Meta](https://docs.gravityforms.com/cleverreach-feed-meta/)

- #### [Constant Contact Feed Meta](https://docs.gravityforms.com/constant-contact-feed-meta/)

- #### [Coupons Feed Meta](https://docs.gravityforms.com/coupons-feed-meta/)

- #### [Dropbox Feed Meta](https://docs.gravityforms.com/dropbox-feed-meta/)

- #### [EmailOctopus Feed Meta](https://docs.gravityforms.com/email-octopus-feed-meta/)

- #### [Freshbooks Feed Meta](https://docs.gravityforms.com/freshbooks-feed-meta/)

- #### [GetResponse Feed Meta](https://docs.gravityforms.com/getresponse-feed-meta/)

- #### [Google Analytics Feed Meta](https://docs.gravityforms.com/google-analytics-feed-meta/)

- #### [Help Scout Feed Meta](https://docs.gravityforms.com/help-scout-feed-meta/)

- #### [Hubspot Feed Meta](https://docs.gravityforms.com/hubspot-feed-meta/)

- #### [iContact Feed Meta](https://docs.gravityforms.com/icontact-feed-meta/)

- #### [Kit Feed Meta](https://docs.gravityforms.com/kit-feed-meta/)

- #### [Mailchimp Feed Meta](https://docs.gravityforms.com/mailchimp-feed-meta/)

- #### [MailerLite Feed Meta](https://docs.gravityforms.com/mailerlite-feed-meta/)

- #### [Salesforce Feed Meta](https://docs.gravityforms.com/salesforce-feed-meta/)

- #### [Slack Feed Meta](https://docs.gravityforms.com/slack-feed-meta/)

- #### [Trello Feed Meta](https://docs.gravityforms.com/trello-feed-meta/)

- #### [Twilio Feed Meta](https://docs.gravityforms.com/twilio-feed-meta/)

- #### [User Registration Feed Meta](https://docs.gravityforms.com/user-registration-feed-meta/)

- #### [Webhooks Feed Meta](https://docs.gravityforms.com/webhooks-feed-meta/)

- #### [Zapier Feed Meta](https://docs.gravityforms.com/zapier-feed-meta/)

- #### [Zoho CRM Feed Meta](https://docs.gravityforms.com/zoho-crm-feed-meta/)


**GF Payment Add-Ons**

- #### [Authorize.Net Feed Meta](https://docs.gravityforms.com/authorize-net-feed-meta/)

- #### [Mollie Feed Meta](https://docs.gravityforms.com/mollie-feed-meta/)

- #### [PayPal Checkout Feed Meta](https://docs.gravityforms.com/paypal-checkout-feed-meta/)

- #### [PayPal Payments Pro Feed Meta](https://docs.gravityforms.com/paypal-payments-pro-feed-meta/)

- #### [PayPal Standard Feed Meta](https://docs.gravityforms.com/paypal-standard-feed-meta/)

- #### [Square Feed Meta](https://docs.gravityforms.com/square-feed-meta/)

- #### [Stripe Feed Meta](https://docs.gravityforms.com/stripe-feed-meta/)


- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: January 7, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/feed-object/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)