---
url: "https://docs.gravityforms.com/website/"
title: "Website - Gravity Forms Documentation"
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

# Website

- [Summary](https://docs.gravityforms.com/website/#h-summary)
- [Common Settings](https://docs.gravityforms.com/website/#h-common-settings)
- [Merge Tags](https://docs.gravityforms.com/website/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/website/#h-usage)
- [Modifiers](https://docs.gravityforms.com/website/#h-modifiers)
- [Validation](https://docs.gravityforms.com/website/#h-validation)

## Summary

The **Website** field allows users to enter a website URL. This field automatically validates that the information entered was formatted correctly. It is available under the Advanced Fields section within the form editor.

[![GForms Website Field Icon](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.21.15@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.21.15@2x.png)

Website field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![GForms Website Field](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.21.24@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/CleanShot-2021-05-12-at-08.21.24@2x.png)

Website field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

## Common Settings

This field uses only common field settings for the General, Appearance, and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find description of specialty settings that are particular to this field.

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Field Name:2}
```

**Notes**:

- The first of these merge tag parameters is optional and is simply the field name for easier identification.
- The second parameter defines the field ID within the form. In the example above, it would be field ID 2.

### Modifiers

This field does not have any modifiers.

## Validation

URLs submitted through this field are validated by GFCommon::is\_valid\_url(). For more information on how URLs are validated, and overriding them, take a look at the article on [URL validation in Gravity Forms](https://docs.gravityforms.com/url-validation-gravity-forms/).

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 18, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/website/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)