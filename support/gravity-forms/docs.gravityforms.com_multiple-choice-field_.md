---
url: "https://docs.gravityforms.com/multiple-choice-field/"
title: "Multiple Choice Field - Gravity Forms Documentation"
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

# Multiple Choice Field

- [Summary](https://docs.gravityforms.com/multiple-choice-field/#h-summary)
- [Benefits Of The Multiple Choice Field](https://docs.gravityforms.com/multiple-choice-field/#h-benefits-of-the-multiple-choice-field)
- [Common Settings](https://docs.gravityforms.com/multiple-choice-field/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/multiple-choice-field/#h-general-settings)
- [Notes](https://docs.gravityforms.com/multiple-choice-field/#h-notes)
- [Selections](https://docs.gravityforms.com/multiple-choice-field/#h-selections)
- [Examples](https://docs.gravityforms.com/multiple-choice-field/#h-examples)
- [Enable "Other" choice](https://docs.gravityforms.com/multiple-choice-field/#h-enable-other-choice)
- [Enable "Select All" choice](https://docs.gravityforms.com/multiple-choice-field/#h-enable-select-all-choice)
- [Appearance Settings](https://docs.gravityforms.com/multiple-choice-field/#h-appearance-settings)
- [Choice Alignment](https://docs.gravityforms.com/multiple-choice-field/#h-choice-alignment)
- [Merge Tags](https://docs.gravityforms.com/multiple-choice-field/#h-merge-tags)
- [Calculations](https://docs.gravityforms.com/multiple-choice-field/#h-calculations)

## Summary

The Multiple Choice field combines the functionality of the checkbox and radio button fields into one. The [Selection](https://docs.gravityforms.com/multiple-choice-field/#h-number-of-selections) option offers the flexibility to turn the single-choice field into a multiple-choice field.

![Image showing the Multiple Choice field as displayed in the Field Library.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-27.png)

Multiple Choice field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

![Multiple Choice field as displayed in the Form Editor.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-46.png)

Multiple Choice field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

**Note:** When using a choice-based field type and your choice labels contain any HTML or special characters such as ampersands, commas, pipes, hyphens, or brackets of any type, you MUST enable the show values feature and give each choice a simple and unique value **which does not contain any special characters**. Failure to configure values could cause issues for features such as calculations, conditional logic, dynamic population, and validation. **The value for each choice must be unique in any case**, even if you’re not using HTML or special characters for the choice labels.

## Benefits Of The Multiple Choice Field

The Multiple Choice field is an improved alternative to the [Radio Buttons](https://docs.gravityforms.com/radio-buttons/) and [Checkbox](https://docs.gravityforms.com/checkbox-field/) fields. Its key advantage is that **it preserves existing entry data when you add, remove, or reorder choices.** This makes it ideal for forms where fields need frequent updates or modifications, ensuring data integrity is preserved.

The Multiple Choice field supports both single and multiple selection types. If you initially set the field to “Select One” but later need it to allow multiple selections (or vice-versa), you can change the selection option without creating a new field.

While Radio and Checkbox fields are still fully supported, the Multiple Choice field provides a more flexible and reliable option for managing choice-based inputs.

## Common Settings

This field uses common field settings for the Appearance and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). A description of the specialty settings that are particular to this fieldare listed below.

## General Settings

![](https://docs.gravityforms.com/wp-content/uploads/2022/03/choices-edit-choices-button-1024x242.png)

Click the **Edit Choices button** under **Choices** to open the [Edit Choices flyout](https://docs.gravityforms.com/edit-choices-flyout/).

![Image showing the Multiple Choice field flyout options.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-65.png)

| Setting | Description |
| --- | --- |
| **Choices** | Add Choices to this field. You can mark each choice as checked by default by using the checkbox that appears to the left of each choice. Add a new choice by clicking the PLUS (+) icon and delete a choice by clicking the DELETE (-) icon. |
| **Show Values** | Allows you to specify a value for each choice. Choice values are not displayed to the user viewing the form but are accessible to administrators when viewing the entry. |
| **Clear default choices** | Allows you to clear all the choices set as default. This means that the field will not contain a default selection when a user visits the form. |
| **Bulk Add / Predefined Choices** | Allows you to select a category and customize the predefined choices or paste your own list to bulk add choices. See note **1.** |

### Notes

1\. See [this article](https://docs.gravityforms.com/bulk-add-predefined-choices/) for more information on bulk loading choices.

### Selections

| **Selection Options** | Description | **Field Displays As** |
| --- | --- | --- |
| **Select One** | A user can select one choice only. | Radio Buttons |
| **Select Multiple** | A user can select any number of choices. | Checkboxes |
| **Select Exact Number** | A user must select the specified number of choices. When selected, an additional setting field is offered to input the desired number of choice selections. This setting must be a valid number and does not accept calculations or merge tags. See example 1. | Checkboxes |
| **Select a Range** | A user must select a number of choices between the minimum and the maximum setting defined. When selected, two additional fields are offered to specify the minimum and maximum number of choice selections that will be permitted. These settings must be a valid number and do not accept calculations or merge tags. See **example 2.** | Checkboxes |

List of _available options for the Selection setting_

### Examples

**Example 1**

The image below shows the settings inputs and the form field front-end for the option “Select Exact Number”.

![Settings inputs and the form field front-end for the option “Select Exact Number”.](https://docs.gravityforms.com/wp-content/uploads/2024/10/image-22.png)

![Image showing Multiple Choice field allowing to choose exactly one choice.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-41.png)

**Example 2**

The image below shows the settings inputs and the form field front-end for the option “Select a Range”

![Settings inputs and the form field front-end for the option “Select a Range”](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-60.png)

![Image showing Multiple Choice field allowing to choose between 1 and 2 choices.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-42.png)

### Enable “Other” choice

This option will present an “Other” choice option at the end of the defined list. It will also add a text box below it such that a user can input a custom answer.

**Note:** This setting is only available when the [Number of selections](https://docs.gravityforms.com/multiple-choice-field/#h-selections) is Single.

![Image showing Enable other choice](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-21.png)

![Image showing Other choice option enabled.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-44.png)

### Enable “Select All” choice

Enable this option to add a control at the top of the field that will select all choices in the Multiple Choice field.

**Note:** This setting is only available when the [Number of selections](https://docs.gravityforms.com/multiple-choice-field/#h-selections) is Multiple or Range.

![Image showing the Select All text for the Multilple Choice field.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-79.png)

## Appearance Settings

### Choice Alignment

Display choices aligned vertically or horizontally.

![Image showing the vertical aligment option.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-37.png)

![Image showing choices vertically aligned.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-40.png)

![Image showing the horizontal aligment option.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-38.png)

![Image showing choices horizontally aligned.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-39.png)

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

```
{Field Name:2.1:modifier}
```

| Modifier | Description |
| --- | --- |
| **:value** | Outputs the value of the field instead of the normal choice text. |
| **:currency** | Converts the value to a currency value. |
| **:price** | Same as _:currency_. |

### Calculations

If you’re going to use this field type in a calculation formula, please check [Number Formatting Rules](https://docs.gravityforms.com/using-calculations/#number-formatting-rules) in the Calculations doc page.

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: January 9, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/multiple-choice-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)