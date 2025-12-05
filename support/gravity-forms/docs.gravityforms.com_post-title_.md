---
url: "https://docs.gravityforms.com/post-title/"
title: "Post Title Field - Gravity Forms Documentation"
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

# Post Title

- [Summary](https://docs.gravityforms.com/post-title/#h-summary)
- [Common Settings](https://docs.gravityforms.com/post-title/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/post-title/#h-general-settings)
- [Merge Tags](https://docs.gravityforms.com/post-title/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/post-title/#h-usage)
- [Modifiers](https://docs.gravityforms.com/post-title/#h-modifiers)

**Note:** This field cannot be used with the [Advanced Post Creation Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/advanced-post-creation-add-on/). If utilizing that plugin for post creation, use a [standard field type](https://docs.gravityforms.com/category/user-guides/standard-fields/) instead.

**Note:** Using any of the [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/) in a form to collect information without configuring the field will create Untitled draft posts after the form is submitted.

## Summary

The **Post Title** field allows users to submit data that is then used to populate the title for a post. It is available under the Post Fields section within the form editor. This field works in tandem with the other Post fields to allow you to create a form that can generate post data from a user submission. The Post Title field can be formatted using the [Create Post content template](https://docs.gravityforms.com/user-guides/create-content-template/) option.

[![GForms Post Title Field Icon](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-12.21.08@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-12.21.08@2x.png)

Post Title field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![GForms Post Title Field](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-12.20.59@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-12.20.59@2x.png)

Post Title field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

## Common Settings

This field uses only common field settings for the Appearance and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find description of specialty settings that are particular to this field.

## General Settings

[![](https://docs.gravityforms.com/wp-content/uploads/2014/06/Screen-Shot-2021-05-13-at-3.31.47-PM-e1620948907312.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/Screen-Shot-2021-05-13-at-3.31.47-PM-e1620948907312.png)

| Setting | Description |
| --- | --- |
| **Post Status** | Select the post status that will be used for the post that is created by the form entry. Available options are Draft, Pending Review, and Published. |
| **Default Post Author** | Select the author that will be used for the post that is created by the form entry. |
| **Use logged in user as author** | Select the category that will be used for the post that is created by the form entry. |
| **Post Format** | Select the post format that will be used for the post that is created by the form entry. i.e. Gallery, Image, Quote |
| **Post Category** | Add a text input as the final choice of your radio button field. This allows the user to specify a value that is not a predefined choice. |
| **Create Content Template** | Check this option to format and insert form fields into the Post Title. |

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

Last modified: August 28, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/post-title/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)