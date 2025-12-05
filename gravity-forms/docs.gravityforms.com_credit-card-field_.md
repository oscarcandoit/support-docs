---
url: "https://docs.gravityforms.com/credit-card-field/"
title: "Credit Card - Gravity Forms Documentation"
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

# Credit Card

- [Summary](https://docs.gravityforms.com/credit-card-field/#h-summary)
- [Common Settings](https://docs.gravityforms.com/credit-card-field/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/credit-card-field/#h-general-settings)
- [Appearance Settings](https://docs.gravityforms.com/credit-card-field/#h-appearance-settings)
- [Advanced Settings](https://docs.gravityforms.com/credit-card-field/#h-advanced-settings)
- [Merge Tags](https://docs.gravityforms.com/credit-card-field/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/credit-card-field/#h-usage)
- [Modifiers](https://docs.gravityforms.com/credit-card-field/#h-modifiers)

**Important:** The Credit Card field is deprecated. If you are currently using an add-on that relies on it, such as Authorize.net, PayPal Pro, or PayPal Payments Pro, we strongly recommend transitioning to an alternative payment add-on. Consider using [Stripe](https://docs.gravityforms.com/category/add-ons-gravity-forms/stripe-add-on/), [PayPal Checkout](https://docs.gravityforms.com/category/add-ons-gravity-forms/paypal-add-ons/paypal-checkout-add-on/), [Square](https://docs.gravityforms.com/category/add-ons-gravity-forms/square-add-on/), or [Mollie](https://docs.gravityforms.com/category/add-ons-gravity-forms/mollie-add-on/), and utilize the respective fields provided with these add-ons.

## Summary

Some legacy payment add-ons enable the **Credit Card** field in Gravity Forms. This field appears in the Pricing Fields panel of the Form Editor. This field type makes it easy to capture credit card information. It includes integrated card type detection, so the user does not have to pick which type of card they are using, and it also has built in validation to validate that the card format is correct.

**Note**: many Gravity Forms payment add-ons use custom credit card fields that meet their individual security and payment flow criteria. Only use this generic credit card field if you have no brand-specific card field option.

[![GForms Credit Card Field Icon](https://docs.gravityforms.com/wp-content/uploads/2015/12/CleanShot-2021-05-13-at-19.55.04@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2015/12/CleanShot-2021-05-13-at-19.55.04@2x.png)

Credit Card field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![GForms Credit Card Field](https://docs.gravityforms.com/wp-content/uploads/2015/12/CleanShot-2021-05-13-at-19.49.23.png)](https://docs.gravityforms.com/wp-content/uploads/2015/12/CleanShot-2021-05-13-at-19.49.23.png)

Credit Card field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

This field does not actually store any of the personal information entered, to be compliant with PCI standard, only the card type and last four digits of the card are stored. The full card data is available as part of the initial form submission strictly as part of integration with the Authorize.Net add-on and other payment gateway add-ons. This data will not be stored as part of the form entry and is not retained by your site, server, or database.

If you preview or view your form on a page that is not secure, it will be obvious, both to you and your users, if you do not properly secure the page. If the page is unsecured, the Credit Card field will be highlighted with a red warning. This warning will not be displayed if the page displaying the form is loaded via https with a valid SSL certificate.

**Note**: When using Page fields to create a multipage form, the Credit Card field must be located on the last page of the form.

## Common Settings

For a description of each of the most common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/).

## General Settings

[![GForms Credit Card Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2015/12/CleanShot-2021-05-13-at-19.52.17.png)](https://docs.gravityforms.com/wp-content/uploads/2015/12/CleanShot-2021-05-13-at-19.52.17.png)

| Setting | Description |
| --- | --- |
| **Sub-Labels** | This option allows you to override the default sub-labels for each field. |
| **Supported Credit Cards** | Use this setting to enable or disable individual credit card types. |

## Appearance Settings

| Setting | Description |
| --- | --- |
| **Sub-Label Placement** | Similar to the Description Placement, but affects the sub-label placement instead. |

## Advanced Settings

| Setting | Description |
| --- | --- |
| **Admin Field Label** | This is the field label that will be shown within the administrative interfaces. It does not affect what a form visitor will see. |
| **Force SSL** | Check this box to prevent the field from being displayed on insecure (non-https) pages. |

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Field Name:2}
```

### Modifiers

This merge tag does not have any modifiers.

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 27, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/credit-card-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)