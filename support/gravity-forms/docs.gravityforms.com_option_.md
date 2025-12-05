---
url: "https://docs.gravityforms.com/option/"
title: "Option - Gravity Forms Documentation"
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

# Option

- [Summary](https://docs.gravityforms.com/option/#h-summary)
- [Common Settings](https://docs.gravityforms.com/option/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/option/#h-general-settings)
- [Choices](https://docs.gravityforms.com/option/#h-choices)
- [Option Field Type](https://docs.gravityforms.com/option/#h-option-field-type)
- [Modifying Checkbox Choices After Form Submissions](https://docs.gravityforms.com/option/#h-modifying-checkbox-choices-after-form-submissions)
- [Appearance Settings](https://docs.gravityforms.com/option/#h-appearance-settings)
- [Merge Tags](https://docs.gravityforms.com/option/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/option/#h-usage)
- [Modifiers](https://docs.gravityforms.com/option/#h-modifiers)

## Summary

The **Option** field allows the creation of options for products created by a [Product](https://docs.gravityforms.com/product). Option fields have special functionality which displays how much selecting the option will add (or subtract) from the total. It is available under the Pricing Fields section within the form editor.

[![GForms Option Field Icon](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.29.35@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.29.35@2x.png)

Option field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

![Image showing the Option field in the form editor.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-24.png)

Option field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

**Important:** If your choice labels contain any HTML or special characters such as ampersands, commas, hyphens or brackets of any type, you **MUST** enable the show values feature and give each choice a simple and unique value which does not contain any special characters. Failure to configure values could cause issues for features such as calculations, conditional logic, dynamic population, and validation.

## Common Settings

This field uses only common field settings for the Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find description of specialty settings that are particular to this field.

## General Settings

![GForms Option Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-25.png)

| Setting | Description |
| --- | --- |
| **Product Field Mapping** | Select which product this field is tied to. This option is only available when there are two or more products. When only one product exists, Option and [Quantity](https://docs.gravityforms.com/quantity) will automatically apply to that product. |
| **Field Type** | Select the type of field from the available form fields. See **Field Types** **Options** below. |

### Choices

The Edit Choices button allows you to edit the Label, Value and Price for each choice.

![](https://docs.gravityforms.com/wp-content/uploads/2022/03/choices-edit-choices-button-1024x242.png)

Click the **Edit Choices button** under **Choices** to open the [Edit Choices flyout](https://docs.gravityforms.com/edit-choices-flyout/).

![Image showing choice for the Option field with a default choice selected](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-62-1024x1024.png)

| Setting | Description |
| --- | --- |
| **Choices** | Add Choices to this field. You can mark each choice as checked by default by using the checkbox that appears to the left of each choice. Add a new choice by clicking the PLUS (+) icon and delete a choice by clicking the DELETE (-) icon. |
| **Show Values** | Allows you to specify a value for each choice. Choice values are not displayed to the user viewing the form but are accessible to administrators when viewing the entry. |
| **Clear default choices** | Allows you to clear the choice set as default. _Only available when a choice has been selected as the default choice._ |
| **Bulk Add / Predefined Choices** | Allows you to select a category and customize the predefined choices or paste your own list to bulk add choices. See [this article](https://docs.gravityforms.com/bulk-add-predefined-choices/) for more information on bulk loading choices. |

### Option Field Type

This table lists the options available for displaying your quiz field to a user.

**Note:** When using a choice-based field type and your choice labels contain any HTML or special characters such as ampersands, commas, pipes, hyphens, or brackets of any type, you MUST enable the show values feature and give each choice a simple and unique value **which does not contain any special characters**. Failure to configure values could cause issues for features such as calculations, conditional logic, dynamic population, and validation. **The value for each choice must be unique in any case**, even if you’re not using HTML or special characters for the choice labels.

| Option | Method of Choosing |
| --- | --- |
| **Checkboxes** | Select one or multiple choices using checkboxes. ( [Note](https://docs.gravityforms.com/option/#h-modifying-checkbox-choices-after-form-submissions) )<br>**Enable “Select All”** creates a choice for the user to select all other choices. |
| **Drop Down** | Display choices in a dropdown box. Users can only select one. |
| **Radio Buttons** | Select one choice only by clicking a radio button. |

### Modifying Checkbox Choices After Form Submissions

After a form has collected entries, you should avoid changing checkbox choices. Modifying the choices, such as **adding**, **removing**, **reordering**, or **renaming** them, will change the input IDs associated with each option. This may break the link between stored entry data and the original choices, potentially preventing the data from being exported correctly.

## Appearance Settings

| Setting | Description |
| --- | --- |
| **Enable enhanced user interface** | By selecting this option, the Chose jQuery library will become active, allowing drop downs to be searched. |

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Field Name:2}
```

### Modifiers

This merge tag does not have any modifiers.

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: June 24, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/option/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)