---
url: "https://docs.gravityforms.com/bulk-add-predefined-choices/"
title: "Bulk Add / Predefined Choices - Gravity Forms Documentation"
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

# Bulk Add / Predefined Choices

- [Custom Choices](https://docs.gravityforms.com/bulk-add-predefined-choices/#h-custom-choices)
- [Choices with Label and Value](https://docs.gravityforms.com/bulk-add-predefined-choices/#h-choices-with-label-and-value)
- [Predefined Choices](https://docs.gravityforms.com/bulk-add-predefined-choices/#h-predefined-choices)

When using a field with Choices (Drop Down, Multi Select, Checkboxes, or Radio Buttons) clicking the **Bulk Add / Predefined Choices** in **General Settings** allows you to select a category and customize the predefined choices or paste your own list to bulk add choices. Choices must be separated by a single line break.

[![GForms Bulk Add Choices](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-12-at-15.43.18@2x-1024x934.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-12-at-15.43.18@2x.png)

## Custom Choices

With GF v1.6, it is now possible to create a set of choices and save them as a **Custom Choices** option.

**Note:** Custom Choices are saved per form and are not available across the entire site.

1. Enter your custom choices in the writable textarea in the Bulk Add modal window.
2. When your custom choices are complete, click the “Save as new custom choice” text below the writable textarea.
3. An input will slide down. Use this input to specify a name for your custom choice and click the “Save” button.

You can update your custom choice by selecting your custom choice from the “Custom Choices” list above the “Predefined Choices” list. Make any modifications to the options and then click the “Update” button. To delete your custom choice, follow the same steps but instead of clicking “Update”, click “Delete”.

[![Using Calculations - GIF](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-12-at-16.55.43.gif)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-12-at-16.55.43.gif)

### Choices with Label and Value

When creating custom choices, you can save options with labels and values by using the pipe character ( \| ) to separate them.

- **Label\|Value**

If the “show values” setting is enabled on the field and the choices will have values that are different from the label, define each choice label and value pair using the pipe character as the separator, e.g. First\|1.
- **Label\|Value\|:$Price**

If it is a pricing field and you want to define the choice label, value, and price, use the pipe to separate the label and value and then a pipe and colon to separate the value and price, e.g. First\|1\|:$20.00.

[![GForms Use Calculations - Label/Value Image](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-12-at-17.03.13@2x-300x275.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-12-at-17.03.13@2x.png)

## Predefined Choices

- Countries
- U.S. States
- Canadian Province/Territory
- Continents
- Gender
- Age
- Marital Status
- Employment
- Job Type
- Industry
- Income
- Education
- Days of the Week
- Months of the Year
- How Often
- How Long
- Satisfaction
- Importance
- Agreement
- Comparison
- Would You
- Size

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 18, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/bulk-add-predefined-choices/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)