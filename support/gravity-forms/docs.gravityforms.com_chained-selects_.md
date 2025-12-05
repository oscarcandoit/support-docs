---
url: "https://docs.gravityforms.com/chained-selects/"
title: "Chained Selects Field - Gravity Forms Documentation"
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
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)    - [Address](https://docs.gravityforms.com/address-field/ "Address")
    - [CAPTCHA](https://docs.gravityforms.com/captcha/ "CAPTCHA")
    - [Chained Selects Field](https://docs.gravityforms.com/chained-selects/ "Chained Selects Field")
    - [Consent Field](https://docs.gravityforms.com/consent/ "Consent Field")
    - [Date](https://docs.gravityforms.com/date/ "Date")
    - [Email](https://docs.gravityforms.com/email/ "Email")
    - [File Upload](https://docs.gravityforms.com/file-upload/ "File Upload")
    - [List](https://docs.gravityforms.com/list/ "List")
    - [Multi Select](https://docs.gravityforms.com/multi-select/ "Multi Select")
    - [Name](https://docs.gravityforms.com/name/ "Name")
    - [Password](https://docs.gravityforms.com/password/ "Password")
    - [Phone](https://docs.gravityforms.com/phone/ "Phone")
    - [Pipe](https://docs.gravityforms.com/pipe-recorder-field/ "Pipe")
    - [Poll](https://docs.gravityforms.com/polls/ "Poll")
    - [Quiz](https://docs.gravityforms.com/quiz-field/ "Quiz")
    - [Repeater (beta)](https://docs.gravityforms.com/repeater-fields/ "Repeater (beta)")
    - [Signature](https://docs.gravityforms.com/signature/ "Signature")
    - [Survey](https://docs.gravityforms.com/survey/ "Survey")
    - [Time](https://docs.gravityforms.com/time/ "Time")
    - [Username](https://docs.gravityforms.com/username/ "Username")
    - [Website](https://docs.gravityforms.com/website/ "Website")
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

# Chained Selects Field

- [Summary](https://docs.gravityforms.com/chained-selects/#h-summary)
- [Common Settings](https://docs.gravityforms.com/chained-selects/#h-common-settings)
- [Appearance](https://docs.gravityforms.com/chained-selects/#h-appearance)
- [More Information](https://docs.gravityforms.com/chained-selects/#h-more-information)
- [Merge Tags](https://docs.gravityforms.com/chained-selects/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/chained-selects/#h-usage)
- [Modifiers](https://docs.gravityforms.com/chained-selects/#h-modifiers)

## Summary

The Chained Selects field is available when using the [Chained Selects Add-On](https://docs.gravityforms.com/chained-selects/). With the proper setup, this field will allow you to create selection fields that will dynamically change based on the previous selection, this creating a cascade of dependent field choices.

[![](https://docs.gravityforms.com/wp-content/uploads/2021/08/image-2-1.png)](https://docs.gravityforms.com/wp-content/uploads/2021/08/image-2-1.png)

Chained Select field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

![Screenshot of Chained Select in Form Editor](https://docs.gravityforms.com/wp-content/uploads/2017/05/CleanShot-2021-08-07-at-14.38.10.png)Example view in the Form Editor

![](https://docs.gravityforms.com/wp-content/uploads/2017/05/CleanShot-2021-08-07-at-14.37.34.png)How it would look in Form Preview

## Common Settings

This field uses mostly common field settings for the General, Appearance, and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find descriptions of specialty settings that are particular to this field.

## Appearance

![](https://docs.gravityforms.com/wp-content/uploads/2021/07/CleanShot-2021-07-26-at-15.00.07.png)

| Setting | Description |
| --- | --- |
| **Drop Down Alignment** | Sets the alignment of how the chained selects will be displayed (horizontally or vertically). |
| **Drop Down Display** | Allows the hiding of inactive dropdowns. If this option is enabled, dropdowns in subsequent steps will only be shown if the prior step has been selected. |

## More Information

For the process of creating and populating the data for a chained select field, refer to this [help guide](https://docs.gravityforms.com/creating-chained-selects/).

## Merge Tags

### Usage

```
{Field Name:2}
```

**Notes**:

- The first of the merge tag parameters above, **Field Name,** is optional and is simply the field name for easier identification.
- The second parameter defines the field ID within the form. In the example above, it would be field ID **2**.
- If accessing a specific option within the field, it can be accessed by separating the values with a period. For example, **2.3** would be the value of the 3rd choice from field ID 2.

### Modifiers

This field does not have any modifiers.

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 23, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/chained-selects/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)