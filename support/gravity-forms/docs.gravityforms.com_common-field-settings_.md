---
url: "https://docs.gravityforms.com/common-field-settings/"
title: "Common Field Settings - Gravity Forms Documentation"
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

# Common Field Settings

- [Summary](https://docs.gravityforms.com/common-field-settings/#h-summary)
- [General Settings Section](https://docs.gravityforms.com/common-field-settings/#h-general-settings-section)
- [Appearance Settings Section](https://docs.gravityforms.com/common-field-settings/#h-appearance-settings-section)
- [Advanced Settings Section](https://docs.gravityforms.com/common-field-settings/#h-advanced-settings-section)
- [Conditional Logic Fly-out](https://docs.gravityforms.com/common-field-settings/#h-conditional-logic-fly-out)

## Summary

When editing a form, many fields offer the same group of settings. This article helps explain the most common ones. If the setting you are interested in is not listed here, refer to the more specific user guide documentation for the [Field Type](https://docs.gravityforms.com/field-types/) you are using.

## General Settings Section

| Setting | Description |
| --- | --- |
| **Field Label** | The name by which this field is displayed. It appears on the front-end (when users fill out your embedded form) and within admin interfaces where the field must be selected (e.g., conditional logic, merge tags, Entries list). |
| **Description** | An extended text area for annotating the field’s purpose or providing instructions. If filled out, it will display beneath the field on the form. |
| **Input Mask** | Available for [Single Line Text](https://docs.gravityforms.com/single-line-text/) fields and [Post Custom](https://docs.gravityforms.com/post-custom/) fields only.<br>When enabled, admins can choose or define a specific format to guide user input and enforce it during validation. [Learn more about input masks](https://docs.gravityforms.com/input-masks/). |
| **Maximum Characters** | Specifies the maximum number of characters a user can enter. This is ideal for longer text fields (e.g., Paragraph Text). |
| **Required** | When enabled, users must complete this field before the form can be submitted. |
| **No Duplicates** | Prevents submission of a value that already exists in another entry for the same field, ensuring each entry is unique (e.g., email or username). |

[![Image showing General Settings Section](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-27-613x1024.png)](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-27.png)

## Appearance Settings Section

| Setting | Description |
| --- | --- |
| **Placeholder** | Text displayed inside the blank field to guide the user on what is expected. If the field is left empty upon submission, the placeholder is not saved with the entry. The field will appear blank in the Entries table. |
| **Field Label Visibility** | Select whether the field label is shown on the form. Label placement follows the setting specified in Form Settings.<br>**Note:** Hiding the label may reduce accessibility. If you hide it, a warning appears. [See this accessibility article for more details.](https://docs.gravityforms.com/accessibility/) |
| **Description Placement** | Determines where the field description appears in relation to the input field. |
| **Custom Validation Message** | Define a custom error message that appears below the field in red when validation fails. All fields have a default error message; use this to override it.<br>[Example of a custom validation message](https://docs.gravityforms.com/custom-validation-message/). |
| **Custom CSS Class** | Add a custom CSS class to the field to apply specific styles and override default appearance. |
| **Field Size** | Choose between small, medium, or large. This controls the input area’s width for most fields, and the height for paragraph fields. Default is large. |

[![Image showing Appearance Settings Section](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-28-613x1024.png)](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-28.png)[![Shows validation message on email field.](https://docs.gravityforms.com/wp-content/uploads/2019/01/field-email-validation-1024x252.png)](https://docs.gravityforms.com/wp-content/uploads/2019/01/field-email-validation.png) Example of a custom validation message for an Email field.

## Advanced Settings Section

| Setting | Description |
| --- | --- |
| **Admin Field Label** | The label that is displayed in administrative interfaces. It does not affect what is shown to users filling out the form. |
| **Default Value** | Pre-populates the field when the form is initially loaded. If unchanged during submission, it will be saved with the entry. Merge tags can be used here via the merge tag marker. |
| **Enable Autocomplete** | Select this setting to let browsers help a user fill in a field with autocomplete. You can enter a single autocomplete attribute or multiple attributes separated with a space. Only use valid attributes: invalid attributes will not be saved. Learn more about autocomplete in the [accessibility documentation](https://docs.gravityforms.com/accessibility-for-developers/#h-autocomplete). |
| **Enable Password Input** | When enabled, text entered in this field will be obscured using the default “•” character for privacy and security. |
| **Visibility** | Controls how the field appears to the user:<br>– **Visible**: Default; the field is shown normally.<br>– **Hidden**: The field is hidden but still functions (useful for capturing hidden data or applying conditional logic).<br>**– Administrative**: Not visible and adds no user-facing functionality, but still captures data for entries (e.g., from default values). |
| **Allow field to be populated dynamically** | **Allow the field to be populated dynamically** |

[![Image showing Advanced Settings Section](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-29.png)](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-29.png)

## Conditional Logic Fly-out

Open the conditional logic fly-out and click the toggle **Enable Conditional Logic** to turn on conditional logic. The logic rules added here will control whether this field is shown or hidden. If disabled, this field will be shown by default. See [this article](https://docs.gravityforms.com/enable-conditional-logic/) for more information. This fly-out will only be available when fields that support conditional logic exist on the form.

[![](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-30-1024x769.png)](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-30.png)

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 28, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/common-field-settings/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)