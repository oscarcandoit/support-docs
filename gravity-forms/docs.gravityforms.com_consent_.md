---
url: "https://docs.gravityforms.com/consent/"
title: "Consent Field - Gravity Forms Documentation"
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

# Consent Field

- [Summary](https://docs.gravityforms.com/consent/#h-summary)
- [Common Settings](https://docs.gravityforms.com/consent/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/consent/#h-general-settings)
- [Details](https://docs.gravityforms.com/consent/#h-details)
- [Entry Management](https://docs.gravityforms.com/consent/#h-entry-management)
- [Form Revisions](https://docs.gravityforms.com/consent/#h-form-revisions)
- [Related Filters](https://docs.gravityforms.com/consent/#h-related-filters)

## Summary

The **Consent** field allows you to offer a “yes/no” consent checkbox and a detailed description of what is being consented to. It is available under the Advanced Fields section within the form editor.

[![GForms Consent Field Icon](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-11-at-09.25.26@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-11-at-09.25.26@2x.png)

Consent field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![GForms Consent Field](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-11-at-09.20.53.png)](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-11-at-09.20.53.png)

Consent field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

When an entry is submitted, the consent field will record the status of the consent checkbox, and if it was checked (consent was provided), then the consent title and description (as presented at the time of submission) will also be recorded. See the [Entry Management](https://docs.gravityforms.com/consent-field#Entry%40Management) section below.

This field type was introduced in Gravity Forms 2.4.

## Common Settings

This field uses only common field settings for the Appearance and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find a description of speciality settings that are particular to this field.

## General Settings

[![](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-11-at-09.28.39@2x-300x79.png)](https://docs.gravityforms.com/wp-content/uploads/2018/10/CleanShot-2021-05-11-at-09.28.39@2x.png)

| Setting | Description |
| --- | --- |
| **Checkbox Label** | This option allows you to specify the text the user will see next to the consent checkbox. |

**Note:** Do not use HTML or other special characters (e.g. ampersands, commas, pipes, hyphens, brackets etc.) in the Checkbox Label setting. The submitted value, the checkbox label, is sanitized on submission, which removes HTML and special characters that WordPress considers unsafe. This can result in the submitted value not matching the expected value, so the field can fail validation.

## Details

- HTML can be included in the consent description.
- The value of the consent description will **not** be displayed with the {all\_fields} merge tag, but can be accessed by specifying the full input ID (i.e. {Consent:3.3}).

## Entry Management

When processing an entry, the consent field will record the state of the consent checkbox (checked or not checked). If the consent checkbox was checked, then the entry will also record the consent title and description, as was displayed at the time of form submission.

This allows you to modify the form and the details of consent, without affecting the historical record of exactly what previous submissions agreed to.

When displaying the entry detail, the entire consent description will be shown.

## Form Revisions

Consent detail is recorded with an entry by storing the revision ID of the form that was consented to. This saves space in the entry table by reducing duplication. When displaying the entry detail though, Gravity Forms will show the entire consent description.

If you delete the form, all revision data is also deleted (along with all the entries, which is normal behavior).

## Related Filters

The following filters were added to Gravity Forms in support of the consent field:

- [gform\_consent\_checked\_indicator](https://docs.gravityforms.com/gform_consent_checked_indicator)
- [gform\_consent\_checked\_indicator\_markup](https://docs.gravityforms.com/gform_consent_checked_indicator_markup/)

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: December 2, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/consent/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)