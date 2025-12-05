---
url: "https://docs.gravityforms.com/mollie-field/"
title: "Mollie Field - Gravity Forms Documentation"
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

# Mollie Field

- [Pre-Requisites](https://docs.gravityforms.com/mollie-field/#h-pre-requisites)
- [Introduction](https://docs.gravityforms.com/mollie-field/#h-introduction)
- [Notes](https://docs.gravityforms.com/mollie-field/#h-notes)
- [Automatic Feed creation](https://docs.gravityforms.com/mollie-field/#h-automatic-feed-creation)
- [Gravity Forms Credit Card Field](https://docs.gravityforms.com/mollie-field/#h-gravity-forms-credit-card-field)
- [Common Settings](https://docs.gravityforms.com/mollie-field/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/mollie-field/#h-general-settings)
- [Default Payment Methods](https://docs.gravityforms.com/mollie-field/#h-default-payment-methods)
- [Sub-Labels](https://docs.gravityforms.com/mollie-field/#h-sub-labels)
- [Supported Credit Cards](https://docs.gravityforms.com/mollie-field/#h-supported-credit-cards)
- [Appearance Settings](https://docs.gravityforms.com/mollie-field/#h-appearance-settings)
- [Advanced Settings](https://docs.gravityforms.com/mollie-field/#h-advanced-settings)
- [Force SSL](https://docs.gravityforms.com/mollie-field/#h-force-ssl)

## Pre-Requisites

This field is **only available** as a Pricing Field in the Form Editor if you have installed the official Gravity Forms [Mollie Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/mollie-add-on/).

## Introduction

The Mollie field provides Credit Card and Cardholder input fields tied to the Mollie payment service integration.

![Mollie field listed under Add Fields sub tab Pricing Fields](https://docs.gravityforms.com/wp-content/uploads/2021/08/mollie-add-field.png)

This field will add the Card Number, Expiration Date, Security Code and Cardholder Name inputs. Further configuration of this form is handled in General Settings and Appearance as noted below. This Credit Card field will only be available if the [Payment Methods](https://docs.gravityforms.com/mollie-field/#h-default-payment-methods) allow Credit Card as a choice.

![Mollie field preview in the form editor](https://docs.gravityforms.com/wp-content/uploads/2021/08/mollie-field-preview-1024x517.png)

## Notes

### **Automatic Feed creation**

A pre-configured [Mollie feed](https://docs.gravityforms.com/creating-feed-for-mollie-add-on/) will be created in the _Form Settings > Mollie_ area when a form containing a Mollie Field is saved, and a feed does not already exist.

### **Gravity Forms Credit Card Field**

If you have another payment gateway add-on installed and active, the Gravity Forms Credit Card Field is still made available, but is not for use with the Mollie Add-On. This can support conditional logic scenarios where you allowing users to choose from a list of payment processors, such as Authorize.Net, where the standard Credit Card field is needed

## Common Settings

For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find descriptions of specialty settings that are particular to this field.

## General Settings

The General settings for the Mollie Field allow you to configure the **Field Label**, **Description**, **Default Payment Method**, **Sub Labels**, **Supported Credit Cards**, and whether or not the field is **Required**.

### Default Payment Methods

![Selection of default payment method in field settings](https://docs.gravityforms.com/wp-content/uploads/2021/08/mollie-default-payment-method.png)

The Default Payment Methods setting allows you to set the default option in the payment method drop down when the field is displayed. The supported payment methods are in sync with your Mollie account and match the [Gravity Forms Currency Setting](https://docs.gravityforms.com/settings-page/). As an example, for US Dollars ($USD), the following payment methods are accepted:

- Credit Card
- PayPal

Your [Gravity Forms Currency Settings](https://docs.gravityforms.com/settings-page/#general-settings) **must match** the Currency Settings in your Mollie account or you will get an error message upon adding the Mollie field that your Mollie account doesn’t have any payment methods that match the currency settings on your form.

![If you add a Mollie Field and your Gravity Forms Currency Settings do not match the Payment Methods for that Currency in your Mollie account, you will receive an error message about that.](https://docs.gravityforms.com/wp-content/uploads/2020/04/mollie-field-mismatched-currency-error-message.png)

### Sub-Labels

![Custom sub-label field settings](https://docs.gravityforms.com/wp-content/uploads/2021/08/mollie-sub-labels.png)

The Sub-Labels settings are displayed when the Credit Card payment method is selected; they allow you to define custom sub-labels for the credit card inputs.

### Supported Credit Cards

![Supported Credit Cards in field settings](https://docs.gravityforms.com/wp-content/uploads/2021/08/mollie-supported-credit-cards.png)

The Supported Credit Cards settings are displayed when the Credit Card payment method is selected; this provides a visual indicator to your credit card fields when users are filling in their payment details. You can select from:

- American Express
- MasterCard
- Visa
- Maestro

## Appearance Settings

The Appearance settings for the Mollie Field allow you to configure the **Field Label Visibility**, **Description Placement**, **Sub-Label Placement**, **Custom Validation Message**, and the **Custom CSS Class**.

## Advanced Settings

The Advanced settings for the PayPal Field allow you to configure the **Admin Field Label**, **Force SSL**, and **Conditional Logic**.

### Force SSL

When enabled and the form is displayed on an insecure (non-https) page the field will attempt to redirect the user to the https version of the page. Your site will need an SSL certificate for this to function correctly. Contact your web host if you need assistance purchasing and configuring an SSL certificate.

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 11, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/mollie-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)