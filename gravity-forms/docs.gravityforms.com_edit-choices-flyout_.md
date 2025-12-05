---
url: "https://docs.gravityforms.com/edit-choices-flyout/"
title: "Edit Choices Flyout - Gravity Forms Documentation"
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

# Edit Choices Flyout

- [Summary](https://docs.gravityforms.com/edit-choices-flyout/#h-summary)
- [Accessing the Edit Choices flyout](https://docs.gravityforms.com/edit-choices-flyout/#h-accessing-the-edit-choices-flyout)
- [Parts of the Edit Choices flyout](https://docs.gravityforms.com/edit-choices-flyout/#h-parts-of-the-edit-choices-flyout)
- [Notes](https://docs.gravityforms.com/edit-choices-flyout/#h-notes)
- [Expand/Contract Flyout Size](https://docs.gravityforms.com/edit-choices-flyout/#h-expand-contract-flyout-size)
- [Fields using the Edit Choices Flyout](https://docs.gravityforms.com/edit-choices-flyout/#h-fields-using-the-edit-choices-flyout)
- [Standard Fields](https://docs.gravityforms.com/edit-choices-flyout/#h-standard-fields)
- [Pricing Fields](https://docs.gravityforms.com/edit-choices-flyout/#h-pricing-fields)
- [Advanced Fields](https://docs.gravityforms.com/edit-choices-flyout/#h-advanced-fields)

This feature is part of Gravity Forms 2.6 and newer. See [our release post](http://www.gravityforms.com/blog/gravity-forms-2-6-beta-1-test-it-today) for more information.

## Summary

When using a multiple choice field, the management of choices offered is handled within the **Edit Choices** flyout within the [Form Editor](https://docs.gravityforms.com/form-editor/). This extended pane (called a “flyout”) provides an accessible interface for managing the multiple values. It is offered within [Drop Down](https://docs.gravityforms.com/drop-down/), [Checkbox](https://docs.gravityforms.com/checkboxes/), [Radio Buttons](https://docs.gravityforms.com/radio-buttons/), [Multiple Choice](https://docs.gravityforms.com/?p=39160) and [Image Choice](https://docs.gravityforms.com/?p=39156) and fields, and is also utilized by Pricing and other Advanced fields that also offer choices.

## Accessing the Edit Choices flyout

![Image showing Choice Flyout button](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-29.png)

When in the form editor, if you add (or select) a multiple choice field to your form, you are offered access to the **Edit Choices** option within the **Field Settings** panel. Look for it under the **General** area titled **Choices**. Click the **Edit Choices** button to open the Edit Choices flyout.

## Parts of the Edit Choices flyout

![Image showing the Multiple Choice field flyout options.](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-65.png)

**Note:** When using a choice-based field type and your choice labels contain any HTML or special characters such as ampersands, commas, pipes, hyphens, or brackets of any type, you MUST enable the show values feature and give each choice a simple and unique value **which does not contain any special characters**. Failure to configure values could cause issues for features such as calculations, conditional logic, dynamic population, and validation. **The value for each choice must be unique in any case**, even if you’re not using HTML or special characters for the choice labels.

| Setting | Description |
| --- | --- |
| **Choices** | Add Choices to this field. You can mark each choice as checked by default by using the checkbox that appears to the left of each choice. Add a new choice by clicking the PLUS (+) icon and delete a choice by clicking the DELETE (-) icon. |
| **Show Values** | Allows you to specify a value for each choice. Choice values are not displayed to the user viewing the form but are accessible to administrators when viewing the entry. |
| **Clear default choices** | Allows you to clear the choice set as default. _Only available when a choice has been selected as the default choice._ |
| **Bulk Add / Predefined Choices** | Allows you to select a category and customize the predefined choices or paste your own list to bulk add choices. See note **1.** |

### Notes

1\. See [this article](https://docs.gravityforms.com/bulk-add-predefined-choices/) for more information.

### Expand/Contract Flyout Size

Click the arrow button to expand the Edit Choices flyout to the full width of the editor window. Click it again to collapse the window to the default size.

![Imae showing the Expand Choices button](https://docs.gravityforms.com/wp-content/uploads/2024/08/image-66.png)

**Need to Close the Edit Choices flyout?** Click the Edit Choices button again to toggle the visibility of the flyout or click the \[X\] button at the top of the panel.

## Fields using the Edit Choices Flyout

The following fields make use of the Edit Choices flyout and will include details about the specific settings for each field type.

### Standard Fields

- [Drop Down](https://docs.gravityforms.com/drop-down/)
- [Checkboxes](https://docs.gravityforms.com/checkboxes/)
- [Radio Buttons](https://docs.gravityforms.com/radio-buttons/)
- [Multiple Choice](https://docs.gravityforms.com/?p=39160)
- [Image Choice](https://docs.gravityforms.com/?p=39156)

### Pricing Fields

- [Product](https://docs.gravityforms.com/product/)
- [Options](https://docs.gravityforms.com/option/)
- [Shipping](https://docs.gravityforms.com/shipping/)

### Advanced Fields

- [Multiselect](https://docs.gravityforms.com/multi-select/)
- [Quiz](https://docs.gravityforms.com/quiz-field/) (requires the Quiz Add-On)
- [Polls](https://docs.gravityforms.com/polls/) (requires the Polls Add-On)
- [Survey](https://docs.gravityforms.com/survey/) (requires the Survey Add-On)

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 22, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/edit-choices-flyout/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)