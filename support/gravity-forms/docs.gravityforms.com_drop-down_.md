---
url: "https://docs.gravityforms.com/drop-down/"
title: "Drop Down - Gravity Forms Documentation"
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

# Drop Down

- [Summary](https://docs.gravityforms.com/drop-down/#h-summary)
- [Common Settings](https://docs.gravityforms.com/drop-down/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/drop-down/#h-general-settings)
- [Appearance Settings](https://docs.gravityforms.com/drop-down/#h-appearance-settings)
- [Advanced Settings](https://docs.gravityforms.com/drop-down/#h-advanced-settings)
- [Merge Tags](https://docs.gravityforms.com/drop-down/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/drop-down/#h-usage)
- [Modifiers](https://docs.gravityforms.com/drop-down/#h-modifiers)
- [Calculations](https://docs.gravityforms.com/drop-down/#h-calculations)

## Summary

The **Drop Down** field allows users to select one option from a list. It is available under the Standard Fields section within the form editor.

[![Dropdown Widget Selector](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-15.41.06@2x-e1620676279368.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-15.41.06@2x-e1620676279368.png)

Drop Down field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![Drop Down Field](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-15.39.18@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-15.39.18@2x.png)

Drop Down field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

**Important:** If your choice labels contain any HTML or special characters such as ampersands, commas, pipes, hyphens or brackets of any type, you **MUST** enable the show values feature and give each choice a simple and **unique** value which does not contain any special characters. Failure to configure values could cause issues for features such as calculations, conditional logic, dynamic population, and validation.

**The value for each choice must be unique in any case**, even if you’re not using HTML or special characters for the choice labels.

## Common Settings

This field uses only common field settings for the Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find description of specialty settings that are particular to this field.

## General Settings

![](https://docs.gravityforms.com/wp-content/uploads/2022/03/choices-edit-choices-button-1024x242.png)

Click the **Edit Choices button** under **Choices** to open the [Edit Choices flyout](https://docs.gravityforms.com/edit-choices-flyout/).

![Image showing the Multiple Choice field flyout options.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-65.png)

| Setting | Description |
| --- | --- |
| **Choices** | Add Choices to this field. You can mark each choice as checked by default by using the checkbox that appears to the left of each choice. Add a new choice by clicking the PLUS (+) icon and delete a choice by clicking the DELETE (-) icon. |
| **Clear default choices** | Allows you to clear the choice set as default. _Only available when a choice has been selected as the default choice._ |
| **Show Values** | Checking this option will allow you to specify a value for each choice. Choice values are not displayed to the user viewing the form but are accessible to administrators when viewing the entry. |
| **Bulk Add / Predefined Choices** | Allows you to select a category and customize the predefined choices or paste your own list to bulk add choices. See note **1.** |

## Appearance Settings

| Setting | Description |
| --- | --- |
| **Placeholder** | The Placeholder will not be submitted along with the form. You can use the Placeholder to require the user to select any of choices. |
| **Enable enhanced user interface** | By selecting this option, the chosen jQuery script will be applied to this field, enabling search capabilities to Drop Down fields and a more user-friendly interface for Multi Select fields. |

## Advanced Settings

| Setting | Description |
| --- | --- |
| **Default Value** | Pre-populates the value of the Drop Down field. Enter the choice you would like to display. |

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Field Name:2:modifier}
```

### Modifiers

| Modifier | Description |
| --- | --- |
| **:value** | Outputs the value of the field instead of the choice label. |
| **:currency** | Converts the value to a currency value. |
| **:price** | Same as _:currency_. |

## Calculations

If you’re going to use this field type in a calculation formula, please check [Number Formatting Rules](https://docs.gravityforms.com/using-calculations/#number-formatting-rules) in the Calculations doc page.

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 22, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/drop-down/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)