---
url: "https://docs.gravityforms.com/stripe-field/"
title: "Stripe Field - Gravity Forms Documentation"
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

# Stripe Field

- [Pre-Requisites](https://docs.gravityforms.com/stripe-field/#h-pre-requisites)
- [Summary](https://docs.gravityforms.com/stripe-field/#h-summary)
- [General Settings](https://docs.gravityforms.com/stripe-field/#h-general-settings)
- [Stripe Payment Element vs. Stripe Card Element](https://docs.gravityforms.com/stripe-field/#h-stripe-payment-element-vs-stripe-card-element)
- [Stripe Payment Element](https://docs.gravityforms.com/stripe-field/#h-stripe-payment-element)
- [Stripe Card Element](https://docs.gravityforms.com/stripe-field/#h-stripe-card-element)
- [Notes](https://docs.gravityforms.com/stripe-field/#h-notes)

## Pre-Requisites

This field is only available in the Form Editor if you have installed the official Gravity Forms [Stripe Add-on](https://www.gravityforms.com/add-ons/stripe/).

If you drag the Stripe field onto your form without having completed your Stripe setup, you will get a warning message that either setup or a feed is required. Refer to [our user guides for the Stripe Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/stripe-add-on/stripe-user-guides/) for assistance there.

## Summary

The Stripe field provides **credit card** input fields tied directly to the Stripe payment service. it is one of two different payment collection options that can be used when integrating the Stripe service. This field is required when choosing the Stripe Field (called _Elements_ by Stripe) payment collection option. Refer to [this article](https://docs.gravityforms.com/stripe-payment-collection-methods/) for more information on both Stripe payment collection choices.

[![Stripe Field](https://docs.gravityforms.com/wp-content/uploads/2022/08/Stripe-Field.png)](https://docs.gravityforms.com/wp-content/uploads/2022/08/Stripe-Field.png)

Stripe field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

**_Example of the Stripe field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space)._**

[![An example of the Stripe field as displayed in the Form Editor.](https://docs.gravityforms.com/wp-content/uploads/2023/04/Stripe-Field-%E2%80%A2-Editor-Display-of-Additional-Inputs-1024x370.png)](https://docs.gravityforms.com/wp-content/uploads/2023/04/Stripe-Field-%E2%80%A2-Editor-Display-of-Additional-Inputs.png)

This field will add the **credit card** inputs for Stripe, as securely hosted by the Stripe service. The input block collects the **Card Number**, **Expiration Date**, and **Security Code**. A **Cardholder Name** field will also be displayed if the setting “Use Stripe’s Payment Element” is unchecked.

You can modify the Field Label and the Description for this field. Additional payment options (e.g. “bank account”) may also be offered in the top right of the field, depending on settings .

## General Settings

_**Screenshot of the General Field Settings for the Stripe field.**_

[![Stripe Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2025/08/stripe-general-settings.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/stripe-general-settings.png)

The following settings are available under the **General** tab of the Field Settings area. For information on other common field settings, refer to [this article](https://docs.gravityforms.com/common-field-settings/).

| Setting | Description |
| --- | --- |
| **Field Label** | Set the label that will be used for this field. |
| **Description** | Set a description for this field. |
| **Use Stripe’s Payment Element** | Enables the **Stripe Payment Element** which includes support for a wider range of payment methods than just credit cards to be displayed in the Stripe field element (when appropriate). These methods are controlled via the settings of the connected [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods); additional details can be found [here](https://docs.gravityforms.com/how-stripe-chooses-which-payment-methods-to-show/). Enabling this option will disable AJAX embed for the form.<br>If unchecked, the **Stripe Card Element** will load instead which provides one field for the Credit Card, Expiration Date, CVV and Postal Code and a Cardholder Name field. |
| **Link Email Field** | Identifies the form field that will be used to determine if a match exists for the Stripe Link service. Refer to [this article for more information on Link](https://docs.gravityforms.com/about-stripe-link/). |

## Stripe Payment Element vs. Stripe Card Element

**Note:** In versions prior to Stripe 6.0, the Stripe Field was called _Payment Methods_ and included the “Enable additional payment methods” setting. This setting was renamed in 6.0 because it controls more than just additional payment methods — it determines whether the Payment Element or the Card Element is displayed. The differences between these two elements are outlined below.

### Stripe Payment Element

This will load the most current payment widget from Stripe, which includes additional payment methods as defined in [this article](https://docs.gravityforms.com/stripe-payment-methods/). This element will show when “Use Stripe’s Payment Element” is checked.

[![Stripe Payment Element example showing Credit Card input and Apple Pay.](https://docs.gravityforms.com/wp-content/uploads/2025/08/stripe-payment-element-example-1024x293.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/stripe-payment-element-example.png) Stripe Payment Element example showing Credit Card and Apple Pay

The general settings for the Stripe Field will change when the Payment Element is enabled as it will show the email connection for the Link field as detailed above.

### Stripe Card Element

This will load the older Card Elements payment widget from Stripe which includes a field for Credit Card input and the Cardholder Name. This element will show when “Use Stripe’s Payment Element” is unchecked.

[![Stripe Card Element Example showing Credit Card Input and Cardholder Name.](https://docs.gravityforms.com/wp-content/uploads/2025/08/stripe-card-elements-example-1024x259.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/stripe-card-elements-example.png) Stripe Card Element example.

When the Card Element is used an additional setting for Sub-labels displays:

[![](https://docs.gravityforms.com/wp-content/uploads/2025/08/stripe-card-elements-sub-labels-300x123.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/stripe-card-elements-sub-labels.png)

| Setting | Description |
| --- | --- |
| **Card Details** | Used for the input of the Credit Card details, e.g. Credit Card Number, Expiration Date, CVV and Postal Code. You can override the sub-label using the ‘Custom Sub-Label’ input |
| **Cardholder Name** | Used for the input of the Cardholder Name. You can override the sub-label using the Custom Sub-Label input or hide the field entirely by clicking the **Show** toggle to off. |

## Notes

- When using the [Page Break field](https://docs.gravityforms.com/page-break/) to create a multi-page form, the Stripe field should be located on the last page of the form.
- Refer to [this guide](https://docs.gravityforms.com/stripe-payment-collection-methods/) for more info on the Stripe payment collection methods.
- Use of the generic Gravity Forms [Credit Card Field](https://docs.gravityforms.com/deprecation-of-the-gravity-forms-credit-card-field/) with Stripe has been deprecated. You may still see the Gravity Forms [Credit Card Field](https://docs.gravityforms.com/deprecation-of-the-gravity-forms-credit-card-field/) as available within your Form Editor if another Payment Gateway add-on is installed and active, such as Authorize.Net. In that case, you can allow users to choose from a list of payment processors, and utilize field conditional logic to show the Stripe field and hide the Credit Card field when Stripe is chosen.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 22, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/stripe-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)