---
url: "https://docs.gravityforms.com/number/"
title: "Number - Gravity Forms Documentation"
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
- [User Guides](https://docs.gravityforms.com/category/user-guides/)  - [Standard Fields](https://docs.gravityforms.com/category/user-guides/standard-fields/)    - [Checkboxes](https://docs.gravityforms.com/checkboxes/ "Checkboxes")
    - [Drop Down](https://docs.gravityforms.com/drop-down/ "Drop Down")
    - [Hidden](https://docs.gravityforms.com/hidden/ "Hidden")
    - [HTML](https://docs.gravityforms.com/html/ "HTML")
    - [Image Choice Field](https://docs.gravityforms.com/image-choice-field/ "Image Choice Field")
    - [Multiple Choice Field](https://docs.gravityforms.com/multiple-choice-field/ "Multiple Choice Field")
    - [Number](https://docs.gravityforms.com/number/ "Number")
    - [Page Break](https://docs.gravityforms.com/page-break/ "Page Break")
    - [Paragraph Text](https://docs.gravityforms.com/paragraph-text/ "Paragraph Text")
    - [Radio Buttons](https://docs.gravityforms.com/radio-buttons/ "Radio Buttons")
    - [Section Break](https://docs.gravityforms.com/section-break/ "Section Break")
    - [Single Line Text](https://docs.gravityforms.com/single-line-text/ "Single Line Text")
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
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

# Number

- [Summary](https://docs.gravityforms.com/number/#h-summary)
- [Common Settings](https://docs.gravityforms.com/number/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/number/#h-general-settings)
- [Notes](https://docs.gravityforms.com/number/#h-notes)
- [Merge Tags](https://docs.gravityforms.com/number/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/number/#h-usage)
- [Modifiers](https://docs.gravityforms.com/number/#h-modifiers)

## Summary

The **Number** field allows you to capture numeric values. If you configure the range settings, the field will validate that the entered value is within that range. It is available under the Standard Fields section within the form editor.

[![GForms Number Field Icon](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-16.18.15@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-16.18.15@2x.png)

Number field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![GForms Number Field](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-11-at-22.30.31@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-11-at-22.30.31@2x.png)

Number field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

## Common Settings

This field uses only common field settings for the Appearance and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find a description of speciality settings that are particular to this field.

## General Settings

[![Number Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-16.21.31@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-16.21.31@2x.png)

| Setting | Description |
| --- | --- |
| **Number Format** | Select the format of numbers that are allowed in this field. You have the option to use a comma or a dot as the decimal separator. |
| **Range** | Enter the minimum and maximum values for this form field. This will require that the value entered by the user must fall within this range. |
| **Enable Calculation** | Enabling calculations will allow the value of this field to be dynamically calculated based on a mathematical formula. See note **1.** |

### Notes

1\. See [this article](https://docs.gravityforms.com/using-calculations/) for an example and the rules on using numbers in calculations.

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Field Name:2:modifier}
```

### Modifiers

| Modifier | Description |
| --- | --- |
| **:value** | Tells the merge tag to not use a thousands separator, and instead use the numeric value of the field. Not applicable to currency values. |

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: January 10, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/number/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)