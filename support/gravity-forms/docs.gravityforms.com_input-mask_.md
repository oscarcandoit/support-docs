---
url: "https://docs.gravityforms.com/input-mask/"
title: "Input Mask - Gravity Forms Documentation"
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

# Input Mask

- [Standard Input Masks](https://docs.gravityforms.com/input-mask/#h-standard-input-masks)
- [Custom Input Masks](https://docs.gravityforms.com/input-mask/#h-custom-input-masks)
- [Accepted Input Mask Characters](https://docs.gravityforms.com/input-mask/#h-accepted-input-mask-characters)
- [Notes](https://docs.gravityforms.com/input-mask/#h-notes)
- [Examples](https://docs.gravityforms.com/input-mask/#h-examples)

[![Screenshot of Standard Input Mask setting - unchecked](https://docs.gravityforms.com/wp-content/uploads/2021/07/Gravity-Forms-_-Input-Mask-Option.png)](https://docs.gravityforms.com/wp-content/uploads/2021/07/Gravity-Forms-_-Input-Mask-Option.png)

Input Mask options are available under the General Settings panel, and only for the [Single Line Text field](https://docs.gravityforms.com/single-line-text/) and the [Post Custom Field](https://docs.gravityforms.com/post-custom/). They can provide more granular control over the permitted entry formats than the standard fields such as Phone Number or Address Postal Code.

## Standard Input Masks

[![Screenshot of Standard Input Mask setting](https://docs.gravityforms.com/wp-content/uploads/2021/07/CleanShot-2021-07-25-at-17.08.44.png)](https://docs.gravityforms.com/wp-content/uploads/2021/07/CleanShot-2021-07-25-at-17.08.44.png)

Standard input masks provide a variety of common United States input formats to choose from. The choices are offered as standard are listed below. In all cases, any non-numeric digits are auto-inserted (e.g. the spaces, parentheses, dashes, etc.)

| Standard Option | Pattern Offered |
| --- | --- |
| US Phone | Standard US formatted phone number. <br>(###) ###-#### |
| US Phone + Ext | Standard US formatted phone number with business style extension of up to 5 digits. <br>(###) ###-#### x##### |
| Date | US style mm/dd/yyyy numeric date format. <br>##/##/#### |
| Tax ID | US style tax identification number.<br>##-####### |
| SSN | US style special security number.<br>###-##-##### |
| Zip Code | US style zip code format<br>##### |
| Full Zip Code | US style zip+4 format. <br>#####-#### |

## Custom Input Masks

[![Screenshot of Custom Input Mask setting](https://docs.gravityforms.com/wp-content/uploads/2021/07/CleanShot-2021-07-25-at-17.01.07.png)](https://docs.gravityforms.com/wp-content/uploads/2021/07/CleanShot-2021-07-25-at-17.01.07.png)

Input masks provide a visual guide allowing users to more easily enter data in a specific format such as dates and phone numbers. The input mask in the image above allows the user to add two digits for the month, two digits for the day, and four digits for the year. No letters or any other characters will work, only numbers.

## Accepted Input Mask Characters

The following symbols are accepted as placeholders in input masks and provide some basic pattern matching.

| Symbol | Meaning |
| --- | --- |
| 9 | Accepts any numeric character |
| a | Accepts any alphabetic character (must be lower case) |
| \* | Accepts any single alphanumeric character. |
| ? | Indicates that all characters defined by the mask after the question mark are optional. |
| any other | All other characters are literal values and will be displayed as is. |

## Notes

- A customer will only see underscores when they enter the field, which identifies the quantity of characters the field expects, but not their type. We recommend you provide additional visual help for complicated masks, such as a [field description](https://docs.gravityforms.com/common-field-settings/#general-settings-tab) or a [placeholder](https://docs.gravityforms.com/common-field-settings/#h-placeholder) example.
- If the “Enable password input” advanced property is checked, it will override the input mask functionality.
- To create your own custom input mask to be used repeatedly, you can use the [gform\_input\_masks](https://docs.gravityforms.com/gform_input_masks/) filter.

## Examples

Here are some sample masks, and what an accepted input would be.

**Date mask**: `99/99/9999` → would accept `05/21/2011` or `21/05/2011`, but not `05/21/11` and not `5/21/2011`

**Social security mask**: `999-99-9999` → would accept `987-65-4329` but not `800-555-FORM`

**Code mask**: `aaa 999` → would accept `BIO 101` but not `B1O 5F0`

**Key mask**: `***-***-***` → would accept `a9a-f0c-28Q`

**US Zipcode+4 mask**: `99999?-9999` → would accept `23462` or `23462-4062`

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: March 15, 2022

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/input-mask/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)