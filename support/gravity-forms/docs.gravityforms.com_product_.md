---
url: "https://docs.gravityforms.com/product/"
title: "Product - Gravity Forms Documentation"
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

# Product

- [Summary](https://docs.gravityforms.com/product/#h-summary)
- [Common Settings](https://docs.gravityforms.com/product/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/product/#h-general-settings)
- [Field Type](https://docs.gravityforms.com/product/#h-field-type)
- [Price](https://docs.gravityforms.com/product/#h-price)
- [Disable Quantity Field](https://docs.gravityforms.com/product/#h-disable-quantity-field)
- [Choices](https://docs.gravityforms.com/product/#h-choices)
- [Notes](https://docs.gravityforms.com/product/#h-notes)
- [Merge Tags](https://docs.gravityforms.com/product/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/product/#h-usage)
- [Modifiers](https://docs.gravityforms.com/product/#h-modifiers)

## Summary

The **Product** field allows the creation of products in the form. There are several options for the type of field that should be used for the Product Field: Single Product, Drop Down, Radio Buttons, and User Defined Price. It is available under the Pricing Fields section within the form editor.

[![GForms Product Field Icon](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.41.29@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.41.29@2x.png)

Product field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

![Image showing a Product field in the form editor.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-23.png)

Product field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

**Important:** If you use a choice based field type and your choice labels contain any HTML or special characters such as ampersands, commas, hyphens or brackets of any type, you **MUST** enable the show values feature and give each choice a simple and unique value which does not contain any special characters. Failure to configure values could cause issues for features such as calculations, conditional logic, dynamic population, and validation.

## Common Settings

This field uses only common field settings for the Appearance and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find description of specialty settings that are particular to this field.

## General Settings

[![GForms Product Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.41.44@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.41.44@2x.png)

### Field Type

Select the type of field from the available form fields.

| Field | Description |
| --- | --- |
| **Single Product** | The Single Product field type will display the price and a quantity field by default. |
| **Drop Down** | The Drop Down field type will display as a drop down field on your form. When this option is selected, the General tab will refresh with options to specify multiple products. [See Choices](https://docs.gravityforms.com/product/#h-choices). |
| **Radio Buttons** | Similar to the Drop Down option, but radio buttons instead. [See Choices](https://docs.gravityforms.com/product/#h-choices). |
| **User Defined Price** | The User Defined Price field type will display as a single line input on your form. |
| **Hidden** | If set to Hidden, the product field will not be shown, but will still be processed upon submission. |
| **Calculation** | Generates product information based on calculations. <br>See [this article](https://docs.gravityforms.com/using-calculations/) for an example and the rules on using calculations. |

### Price

Enter the base price for this product.

### Disable Quantity Field

Disables the quantity field. A quantity of 1 will be assumed or you can add a Quantity field to your form from the Pricing Fields.

### Choices

For Product fields set to Drop Down or Radio Buttons field type you would see the Edit Choices button which would allow you to edit the Label, Value and Price for each choice.

![](https://docs.gravityforms.com/wp-content/uploads/2022/03/choices-edit-choices-button-1024x242.png)

Click the **Edit Choices button** under **Choices** to open the [Edit Choices flyout](https://docs.gravityforms.com/edit-choices-flyout/).

![Image showing choice for the Product field with a default choice selected](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-62-1024x1024.png)

| Setting | Description |
| --- | --- |
| **Choices** | Add Choices to this field. You can mark each choice as checked by default by using the checkbox that appears to the left of each choice. Add a new choice by clicking the PLUS (+) icon and delete a choice by clicking the DELETE (-) icon. |
| **Show Values** | Allows you to specify a value for each choice. Choice values are not displayed to the user viewing the form but are accessible to administrators when viewing the entry. |
| **Clear default choices** | Allows you to clear the choice set as default. _Only available when a choice has been selected as the default choice._ |
| **Bulk Add / Predefined Choices** | Allows you to select a category and customize the predefined choices or paste your own list to bulk add choices. See note **1.** |

### Notes

1\. See [this article](https://docs.gravityforms.com/bulk-add-predefined-choices/) for more information on bulk loading choices.

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Product Name A (Name):1.1}
{Product Name A (Price):1.2}
{Product Name A (Quantity):1.3}
```

### Modifiers

This merge tag does not have any modifiers.

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 22, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/product/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)