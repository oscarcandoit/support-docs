---
url: "https://docs.gravityforms.com/using-calculations/"
title: "Using Calculations - Gravity Forms Documentation"
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
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)    - [Common Field Settings](https://docs.gravityforms.com/common-field-settings/ "Common Field Settings")
    - [Using Calculations](https://docs.gravityforms.com/using-calculations/ "Using Calculations")
    - [Input Mask](https://docs.gravityforms.com/input-mask/ "Input Mask")
    - [Allow Field to be Populated Dynamically](https://docs.gravityforms.com/allow-field-to-be-populated-dynamically/ "Allow Field to be Populated Dynamically")
    - [Create Content Template](https://docs.gravityforms.com/create-content-template/ "Create Content Template")
    - [Bulk Add / Predefined Choices](https://docs.gravityforms.com/bulk-add-predefined-choices/ "Bulk Add / Predefined Choices")
    - [Edit Choices Flyout](https://docs.gravityforms.com/edit-choices-flyout/ "Edit Choices Flyout")
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

# Using Calculations

- [Introduction](https://docs.gravityforms.com/using-calculations/#h-introduction)
- [Creating a calculation formula](https://docs.gravityforms.com/using-calculations/#h-creating-a-calculation-formula)
- [Number Formatting Rules](https://docs.gravityforms.com/using-calculations/#h-number-formatting-rules)
- [Terminology](https://docs.gravityforms.com/using-calculations/#h-terminology)
- [Rules](https://docs.gravityforms.com/using-calculations/#h-rules)
- [Limitations](https://docs.gravityforms.com/using-calculations/#h-limitations)
- [Incorrect Entry Result](https://docs.gravityforms.com/using-calculations/#h-incorrect-entry-result)

## Introduction

Calculations are available within a field when using a Number field with calculation enabled or a Product field set to the Field Type of Calculation. In this article, we will show you how to set up a calculation in a Number field, as well as go over some important rules on using number fields in calculations as well as the rules supporting different decimal formats.

**Supported field types**: text, number, drop down, checkbox, radio, hidden, single product, price, hidden product, calculation, and single shipping.

**Note**: The _[Total](https://docs.gravityforms.com/total/)_ field type cannot be used within calculations. Within this article, only _Number_ fields are used.

You perform all the following steps from within the [Form Editor](https://docs.gravityforms.com/form-editor/).

## Creating a calculation formula

We will generate a simple example of a calculation using two Number fields.

01. Add 2 different number fields and name them **First Number** and **Second Number**.
02. **Save your form**, it is important to do this so the newly added fields are available when setting up the calculation formula in later steps.
03. Add a third **Number** field which will handle the result of the calculation. Name it **Total**.  Ensure that this field is positioned _after_ the first two Number fields.
04. Access the field settings of the **Total** field.
05. Select the **Enable Calculation** checkbox to enable this field to be populated based on a calculation result. Once the _Enable Calculation_ checkbox is selected, additional options will appear below it. _See image (A) below._
06. Access the field settings of the **Total** field. Click the button **Insert Merge Tag** and select your first field in the calculation. Note that **only fields valid for use in calculations** will be listed. _See image (B) below._
07. Add a mathematical operator. In this case, simple addition (+).
08. Insert the **Second Number** field to complete the calculation.
09. Check the calculation by clicking **Validate Formula**. If it says that your calculation is invalid, go back and take another look. _See image (C) below._
10. Your calculation is all set. Be sure you **Save** your form.

[![Screenshot of Number Field Settings](https://docs.gravityforms.com/wp-content/uploads/2024/01/Screenshot-on-2024-01-23-at-154403.png)](https://docs.gravityforms.com/wp-content/uploads/2024/01/Screenshot-on-2024-01-23-at-154403.png)(A) Enabling calculations within your Number field titled “Total”.

[![ Screenshot of Calculation Merge Tags](https://docs.gravityforms.com/wp-content/uploads/2024/01/Screenshot-on-2024-01-23-at-155121.png)](https://docs.gravityforms.com/wp-content/uploads/2024/01/Screenshot-on-2024-01-23-at-155121.png)(B) Using the merge tag selector to insert your operands.

[![Screenshot of Final Calculation ](https://docs.gravityforms.com/wp-content/uploads/2024/01/Markup-2024-01-23-at-15.54.19.png)](https://docs.gravityforms.com/wp-content/uploads/2024/01/Markup-2024-01-23-at-15.54.19.png)(C) Final formula

## Number Formatting Rules

This section explains how to format numbers properly for product pricing and calculations.

### Terminology

**Decimal dot format**: Number format where a dot is used as the decimal separator. Example: 5.20

**Decimal comma format**: Number format where a comma is used as a decimal separator. Example: 5,20

### Rules

- When creating a calculation formula, **all numbers manually entered in the formula must**:

  - Be entered in **decimal dot format**\*\*, and
  - **Use a preceding 0 if required**. Example: 0.2 is valid, 0,2 is not valid, .2 is not valid.
- When entering number fields on a form on the front end of the site, users must enter the format configured for that number field, even if that field is being used in a calculation that uses a different number format.
- When using drop down or checkbox field types in a formula, the values must be formatted with the same format as the field containing the formula.

For example, if you have a _calculated_ number field in decimal comma format (i.e. 9.999,99) that has calculation formula that references a drop down field, the values of the drop down field must also be in decimal comma format.
- If the number field is configured with a **“Currency” Number Format**, the drop down values must be **formatted with the same decimal separator as the currency**.
- When using a quantity drop down field to specify fractional values (i.e. 5.5), those numbers must be formatted with the same decimal separator as the site’s currency.
- ​​​​​​Fields referenced in a calculation formula (1) must be positioned **before the calculation field**, and (2) must **not be hidden by logic**. This is because calculations are rerun during submission using saved values, and if the field hasn’t been saved yet or has been ignored due to logic at form submission, it won’t have a value available for the calculation, leaving the result either incorrect or empty.

## Limitations

- Certain special field types, like Survey, Quiz, Polls, or Coupons fields, are not supported for calculations.
- Total type fields are always the last to be saved, so they can’t be used in calculations.

## Incorrect Entry Result

Please see the [Troubleshooting Issues with Calculation Results](https://docs.gravityforms.com/troubleshooting-issues-with-calculation-results/) article.

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 18, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/using-calculations/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)