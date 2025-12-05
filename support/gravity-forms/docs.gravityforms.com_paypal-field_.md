---
url: "https://docs.gravityforms.com/paypal-field/"
title: "PayPal Field - Gravity Forms Documentation"
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
- [User Guides](https://docs.gravityforms.com/category/user-guides/)  - [Standard Fields](https://docs.gravityforms.com/category/user-guides/standard-fields/)
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)    - [2Checkout Field](https://docs.gravityforms.com/2checkout-field/ "2Checkout Field")
    - [Coupon Field](https://docs.gravityforms.com/coupon-field/ "Coupon Field")
    - [Credit Card](https://docs.gravityforms.com/credit-card-field/ "Credit Card")
    - [Mollie Field](https://docs.gravityforms.com/mollie-field/ "Mollie Field")
    - [Option](https://docs.gravityforms.com/option/ "Option")
    - [PayPal Field](https://docs.gravityforms.com/paypal-field/ "PayPal Field")
    - [Product](https://docs.gravityforms.com/product/ "Product")
    - [Quantity](https://docs.gravityforms.com/quantity/ "Quantity")
    - [Shipping](https://docs.gravityforms.com/shipping/ "Shipping")
    - [Square Field](https://docs.gravityforms.com/square-field/ "Square Field")
    - [Stripe Field](https://docs.gravityforms.com/stripe-field/ "Stripe Field")
    - [Total](https://docs.gravityforms.com/total/ "Total")
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# PayPal Field

- [Introduction](https://docs.gravityforms.com/paypal-field/#h-introduction)
- [Common Settings](https://docs.gravityforms.com/paypal-field/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/paypal-field/#h-general-settings)
- [Supported Payment Methods](https://docs.gravityforms.com/paypal-field/#h-supported-payment-methods)
- [Default Payment Method](https://docs.gravityforms.com/paypal-field/#h-default-payment-method)
- [Sub-Labels](https://docs.gravityforms.com/paypal-field/#h-sub-labels)
- [Supported Credit Cards](https://docs.gravityforms.com/paypal-field/#h-supported-credit-cards)
- [Card Icon Style](https://docs.gravityforms.com/paypal-field/#h-card-icon-style)
- [Appearance Settings](https://docs.gravityforms.com/paypal-field/#h-appearance-settings)
- [PayPal Smart Payment Buttons](https://docs.gravityforms.com/paypal-field/#h-paypal-smart-payment-buttons)
- [PayPal Credit Messages](https://docs.gravityforms.com/paypal-field/#h-paypal-credit-messages)
- [Advanced Settings](https://docs.gravityforms.com/paypal-field/#h-advanced-settings)
- [Force SSL](https://docs.gravityforms.com/paypal-field/#h-force-ssl)

## Introduction

The PayPal Field will appear in the Pricing Fields group, in the Form Editor, when the **[Gravity Forms PayPal Checkout Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/paypal-add-ons/paypal-checkout-add-on/)** is installed and active.

Note that a pre-configured [feed](https://docs.gravityforms.com/configuring-a-feed-for-the-paypal-commerce-platform-add-on/) will be created in the _Form Settings > PayPal Checkout_ area when a form containing a PayPal Field is saved, and a feed does not already exist.

## Common Settings

For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find descriptions of specialty settings that are particular to this field.

## General Settings

The General settings for the PayPal Field allow you to configure the **Field Label**, **Description**, **Supported Payment Methods**, and if the field is **Required**.

### Supported Payment Methods

![](https://docs.gravityforms.com/wp-content/uploads/2022/03/PayPal-Field-%E2%80%A2-Supported-Payment-Methods.png)

The PayPal Field supports the following payment methods:

| Payment Method | Notes |
| --- | --- |
| **PayPal Checkout** | If selected, additional options may be enabled. Refer to the Appearance section below. |
| **Display Other Payment Buttons** | This option will only appear if you have selected PayPal checkout. If selected, it will allow PayPal to offer additional payment methods it deems appropriate for your customer. Refer to [this guide](https://docs.gravityforms.com/additional-paypal-checkout-payment-buttons/) for detailed information. <br>(option introduced in PayPal Checkout v2.3.3) |
| **Credit Card** | This payment method is in limited release with PayPal, and not available in all markets. [Refer to this document](https://docs.gravityforms.com/setting-up-the-paypal-checkout-add-on/#h-credit-card-field-support) for some additional detail, and check with PayPal for the most up-to-date information. |

### Default Payment Method

[![PayPal Field Default Payment Method Setting](https://docs.gravityforms.com/wp-content/uploads/2020/03/default-payment-method-300x101.png)](https://docs.gravityforms.com/wp-content/uploads/2020/03/default-payment-method.png)

The Default Payment Method setting is displayed when both payment methods are selected. It allows you to set the default option in the payment method drop down when the field is displayed.

### Sub-Labels

[![PayPal Field Sub-Labels Settings](https://docs.gravityforms.com/wp-content/uploads/2020/03/ppcp-field-sub-labels-300x187.png)](https://docs.gravityforms.com/wp-content/uploads/2020/03/ppcp-field-sub-labels.png)

The Sub-Labels settings are displayed when the Credit Card payment method is selected; they allow you to define custom sub-labels for the credit card inputs. You can also hide the Cardholder Name input.

### Supported Credit Cards

[![PayPal Field Supported Credit Cards Setting](https://docs.gravityforms.com/wp-content/uploads/2020/03/ppcp-field-supported-credit-cards-e1585551687424.png)](https://docs.gravityforms.com/wp-content/uploads/2020/03/ppcp-field-supported-credit-cards-e1585551687424.png)

The Supported Credit Cards settings are displayed when the Credit Card payment method is selected; this provides a visual indicator to your credit card fields when users are filling in their payment details. You can select from:

American Express **\***; Discover; MasterCard; Visa; Maestro.

_(\*) PayPal Checkout only supports American Express and Discover for accounts registered in the U.S. and accepting U.S. Dollars._

### Card Icon Style

[![PayPal Field Card Icon Style Setting](https://docs.gravityforms.com/wp-content/uploads/2020/03/ppcp-field-card-icon-style.png)](https://docs.gravityforms.com/wp-content/uploads/2020/03/ppcp-field-card-icon-style.png)

The Card Icon Style setting is displayed when the Credit Card payment method is selected; it controls which style of credit card icons will be used, standard or 3D.

## Appearance Settings

### PayPal Smart Payment Buttons

When using the PayPal Checkout payment method and enabling the “Other payment buttons” PayPal may display Smart Payment Buttons for additional funding sources. For example, _Venmo; SEPA-Lastschrift; Bancontact;_ or _giropay._

Whether these are presented as payment options to a customer is determined by PayPal at the time of presentation. Refer to [this guide](https://docs.gravityforms.com/additional-paypal-checkout-payment-buttons/) for detailed information.

Specific funding sources can be removed from being offered using the [gform\_ppcp\_disable\_funding](https://docs.gravityforms.com/gform_ppcp_disable_funding) filter.

[![PayPal Field Smart Buttons Settings](https://docs.gravityforms.com/wp-content/uploads/2020/03/ppcp-field-smart-payment-buttons-300x217.png)](https://docs.gravityforms.com/wp-content/uploads/2020/03/ppcp-field-smart-payment-buttons.png)

Using the following settings you can customize the appearance of the Smart Payment Buttons using the following settings:

| Setting | Options |
| --- | --- |
| **Layout** | Vertical or Horizontal |
| **Size** | Small (1/3 form width), Medium (2/3), Large & Responsive (full form width).<br>Defines the size of the container holding all the buttons to be displayed, relative to the form width. Note that the preview provided here may not always reflect the display on your form (e.g. you may see more buttons on the front-end) due to differences in form theme and PayPal’s choice of style sheet. |
| **Shape** | Rectangle or Pill |
| **Color** | Gold, Blue, Silver, White, or Black |

### PayPal Credit Messages

[![PayPal Credit Messages Setting for the Appearance section of the PayPal Field. ](https://docs.gravityforms.com/wp-content/uploads/2021/09/PayPal-Field-PayPal-Credit-Messages-Setting.png)](https://docs.gravityforms.com/wp-content/uploads/2021/09/PayPal-Field-PayPal-Credit-Messages-Setting.png)

Enabling this setting allows PayPal to present Pay Later offer messages to your customers, that may provide alternative payment arrangements. What is offered in those messages is determined by PayPal, and based on factors they evaluate such as account terms, region of customer and merchant etc. See [this PayPal document](https://developer.paypal.com/docs/business/pay-later/us/) for information, and contact PayPal with any questions.

This setting is only offered if PayPal Checkout was enabled.

## Advanced Settings

The Advanced settings for the PayPal Field allow you to configure the **Admin Field Label**, **Force SSL**, and **Conditional Logic**.

### Force SSL

When enabled and the form is displayed on an insecure (non-https) page the field will attempt to redirect the user to the https version of the page. Your site will need an SSL certificate for this to function correctly. Contact your web host if you need assistance purchasing and configuring an SSL certificate.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 7, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/paypal-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)