---
url: "https://docs.gravityforms.com/quantity/"
title: "Quantity - Gravity Forms Documentation"
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

# Quantity

- [Summary](https://docs.gravityforms.com/quantity/#h-summary)
- [Common Settings](https://docs.gravityforms.com/quantity/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/quantity/#h-general-settings)
- [Merge Tags](https://docs.gravityforms.com/quantity/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/quantity/#h-usage)
- [Modifiers](https://docs.gravityforms.com/quantity/#h-modifiers)
- [Decimal Quantity](https://docs.gravityforms.com/quantity/#h-decimal-quantity)

## Summary

The **Quantity** field allows a quantity to be specified for [Product](https://docs.gravityforms.com/product). It is available under the Pricing Fields section within the form editor.

[![GForms Quantity Field Icon](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.48.03@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.48.03@2x.png)

Quantity field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![GForms Quantity Field](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.48.14@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.48.14@2x.png)

Quantity field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

## Common Settings

This field uses only common field settings for the Appearance and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find description of specialty settings that are particular to this field.

## General Settings

[![GForms Quantity Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.48.27@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.48.27@2x.png)

| Setting | Description |
| --- | --- |
| **Product Field Mapping** | Select which product this field is tied to. This option is only available when there are two or more products. When only one product exists, [Option](https://docs.gravityforms.com/option) and Quantity will automatically apply to that product. |
| **Field Type** | Select the type of field from the available form fields. <br>For **Field Types** see note **1.** |
| **Number Format** | Select the format of the numbers that are allowed in this field. You have the option to use a comma or a dot as the decimal separator. |
| **Range** | Enter the minimum and maximum values for this form field. This will require that the value entered by the user must fall within this range. See note **2.** |

**Note**: A Quantity field can be mapped to **only one Product field**. Mapping a single Quantity field to multiple Product fields is **not supported**.

1. **Field Types**
   - **Number**

     The Number field type will display as a [Number](https://docs.gravityforms.com/number) on your form. This option also enables the **Number Range** property.
   - **Drop Down**

     The Drop Down field type will display as a drop down field on your form. When this option is selected, the General tab will refresh with options to specify multiple quantity choices.
   - **Hidden**

     The Hidden field type will display as a hidden field on your form. This field type is useful when wishing to set a quantity without that quantity being visible or editable by the user.
2. This option is only available when the **Number** field type is selected.

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Field Name:2}
```

### Modifiers

This merge tag does not have any modifiers.

## Decimal Quantity

Allowing the user to type decimal values in the quantity input field is not supported. However, there is a third-party script that you can use to override this limitation: [Enable Decimal Values in Quantity Fields](http://gravitywiz.com/enable-decimal-values-in-quantity-fields/)

Decimal values are supported by default when the field is set to Drop Down type. If you’re going to use this field type in a calculation formula, please check the [Number Formatting Rules](https://docs.gravityforms.com/using-calculations/#number-formatting-rules) in the Calculations doc page.

- LinkedIn


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 8, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/quantity/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)