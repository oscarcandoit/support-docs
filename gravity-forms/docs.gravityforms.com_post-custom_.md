---
url: "https://docs.gravityforms.com/post-custom/"
title: "Post Custom Field - Gravity Forms Documentation"
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
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)    - [Post Body](https://docs.gravityforms.com/post-body/ "Post Body")
    - [Post Category](https://docs.gravityforms.com/post-category/ "Post Category")
    - [Post Custom Field](https://docs.gravityforms.com/post-custom/ "Post Custom Field")
    - [Post Excerpt](https://docs.gravityforms.com/post-excerpt/ "Post Excerpt")
    - [Post Image](https://docs.gravityforms.com/post-image/ "Post Image")
    - [Post Tags](https://docs.gravityforms.com/post-tags/ "Post Tags")
    - [Post Title](https://docs.gravityforms.com/post-title/ "Post Title")
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

# Post Custom Field

- [Summary](https://docs.gravityforms.com/post-custom/#h-summary)
- [Common Settings](https://docs.gravityforms.com/post-custom/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/post-custom/#h-general-settings)
- [Notes](https://docs.gravityforms.com/post-custom/#h-notes)
- [Input Mask](https://docs.gravityforms.com/post-custom/#h-input-mask)
- [Merge Tags](https://docs.gravityforms.com/post-custom/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/post-custom/#h-usage)
- [Modifiers](https://docs.gravityforms.com/post-custom/#h-modifiers)

**Note:** This field cannot be used with the [Advanced Post Creation Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/advanced-post-creation-add-on/). If utilizing that plugin for post creation, use a [standard field type](https://docs.gravityforms.com/category/user-guides/standard-fields/) instead.

**Note:** Using any of the [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/) in a form to collect information without configuring the field will create Untitled draft posts after the form is submitted.

## Summary

The **Post Custom Field** allows users to submit data that is then used to populate a custom field value for a post. This field works in tandem with the other Post fields to allow you to create a form that can generate post data from a user submission. It is available under the Post Fields section within the form editor.

[![GForms Post Custom Field Icon](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-11.38.03@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-11.38.03@2x.png)

Post Custom field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![GForms Post Custom Field](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-11.38.27@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-11.38.27@2x.png)

Post Custom field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

## Common Settings

This field uses only common field settings for the Appearance and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find description of specialty settings that are particular to this field.

## General Settings

[![GForms Post Custom Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-11.38.51@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-11.38.51@2x.png)

| Setting | Description |
| --- | --- |
| **Field Type** | Select the field type you wish for this Post Custom Field to behave as. See note **1.** |
| **Custom Field Name** | Choose from available existing custom fields, or enter a new custom field name. |
| **Create Content Template** | Use merge tags to define the content of this field. See [this article](https://docs.gravityforms.com/create-content-template/) for more information. |

### Notes

1\. The _Post Custom Field_ will assume the properties and options of the selected field type. For example, if [Single Line Text](https://docs.gravityforms.com/single-line-text) is selected, the **Maximum Characters** and **Enable Password Input** options would become available for this field.

## Input Mask

[Single Line Text](https://docs.gravityforms.com/single-line-text/) and Post Custom Field are the only fields that have the Input Mask setting. You can learn more about input masks in this [article](https://docs.gravityforms.com/input-mask/).

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Field Name:2}
```

### Modifiers

This merge tag does not have any modifiers.

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 28, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/post-custom/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)