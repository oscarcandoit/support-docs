---
url: "https://docs.gravityforms.com/square-field/"
title: "Square Field - Gravity Forms Documentation"
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

# Square Field

- [Pre-Requisites](https://docs.gravityforms.com/square-field/#h-pre-requisites)
- [About](https://docs.gravityforms.com/square-field/#h-about)
- [General Settings](https://docs.gravityforms.com/square-field/#h-general-settings)
- [Sub-Labels](https://docs.gravityforms.com/square-field/#h-sub-labels)
- [Appearance Settings](https://docs.gravityforms.com/square-field/#h-appearance-settings)
- [Placeholders](https://docs.gravityforms.com/square-field/#h-placeholders)
- [Notes](https://docs.gravityforms.com/square-field/#h-notes)

## Pre-Requisites

This field is **only available** in the Form Editor if you have installed the official Gravity Forms [Square Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/square-add-on/)

## About

The Square field provides Credit Card and Cardholder input fields as provided by the Square payment service.

It can be found in the **Pricing Fields** section of the Field Chooser sidebar.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/04/Sqaure-Add-On-Pricing-Fields.png)](https://docs.gravityforms.com/wp-content/uploads/2021/04/Sqaure-Add-On-Pricing-Fields.png)

This field will add inputs for card details (card number, expiration date, CVC, and zip code) and Cardholder Name. Those fields are actually provided by Square and hosted on Square’s servers for end-to-end security of payment information.

![Square Credit Card Field in the Gravity Forms Visual Editor showing the Cardholder Name input and the Credit Card Number combined field with Card Number, Expiration Date, CVD and Postal Code](https://docs.gravityforms.com/wp-content/uploads/2022/05/Square-Card-Field-Visual-Editor-1024x383.jpg)Square Card Field in the Visual Editor

## General Settings

### Sub-Labels

You can set a custom sub-label for the available input fields by modifying the label in this section. The Square Credit Card field only has a Custom Sub-Label for the Cardholder Name.

![](https://docs.gravityforms.com/wp-content/uploads/2022/05/square-card-field-general-field-settings.jpg)

## Appearance Settings

### Placeholders

You can set add placeholders for the Cardholder Name and Card Details. You can not override the placeholder for the expiration date, CVC or Postal Code placeholders.

![Placeholder Settings for the Square Credit Card field, allowing override of the Cardholder Name and Card Details.](https://docs.gravityforms.com/wp-content/uploads/2022/05/square-credit-card-field-placeholders.jpg)

**Note**: _Appearance > Field Styles_ options have been removed from the Square Credit Card Field as of version 1.7 of the Square Add-On as the Square SDK it relied upon is being sunset. The “Traditional” field style has been removed, and the previous “Simplified” card appearance is now used for all front-end display.

## Notes

See also the article [creating a Square compatible form](https://docs.gravityforms.com/setting-up-square-compatible-form/).

- Note that both Credit Card Details and Cardholder Name are required fields for the Square field.
- When using Page fields to create a multi-page form, the Square field should be located on the **last** page of the form.
- If you delete the Square field from your form, the Square feeds will automatically deactivate. This prevents the feeds from running during form submission and generating a validation error due to missing Square fields.
- Your [Gravity Forms Currency Settings](https://docs.gravityforms.com/settings-page/#general-settings) **must match** the Currency Settings in your Square account.
- If you have another Payment Gateway add-on installed and active, other card fields may be available. To allow users to choose from multiple payment processors, conditional logic can be used to show/hide the Credit Card field depending on the payment processor selection.

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 31, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/square-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)