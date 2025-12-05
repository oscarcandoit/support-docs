---
url: "https://docs.gravityforms.com/captcha/"
title: "CAPTCHA - Gravity Forms Documentation"
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

# CAPTCHA

- [Summary](https://docs.gravityforms.com/captcha/#h-summary)
- [Types](https://docs.gravityforms.com/captcha/#h-types)
- [Prerequisites](https://docs.gravityforms.com/captcha/#h-prerequisites)
- [Common Settings](https://docs.gravityforms.com/captcha/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/captcha/#h-general-settings)
- [Type](https://docs.gravityforms.com/captcha/#h-type)
- [Theme](https://docs.gravityforms.com/captcha/#h-theme)
- [Advanced Settings](https://docs.gravityforms.com/captcha/#h-advanced-settings)
- [Merge Tags](https://docs.gravityforms.com/captcha/#h-merge-tags)
- [How To Add a Captcha Field to your Form](https://docs.gravityforms.com/captcha/#h-how-to-add-a-captcha-field-to-your-form)

**Note:** The CAPTCHA field is a legacy field type. It uses Google’s legacy reCAPTCHA v2 (checkbox or invisible) or the third‑party [Really Simple CAPTCHA](https://wordpress.org/plugins/really-simple-captcha/) plugin, both of which have known accessibility problems. Because of this, the field is no longer recommended. For alternative approaches, see the [Fighting Spam](https://docs.gravityforms.com/spam/) article.

## Summary

The **CAPTCHA** field allows you to add a captcha field to your form, to help protect your website from spam and bot abuse by trying to determine if the form is being submitted by a human, or defeating a form submission attempt by a scripted bot. The Gravity Forms Captcha field is available under the **Advanced Fields** section within the form editor.

**Note:** This article explains the built-in **reCAPTCHA v2** functionality. For more details about the official Gravity Forms reCAPTCHA Add-On, which utilizes **reCAPTCHA v3** and includes support for setting a Score Threshold, refer to [this](https://docs.gravityforms.com/setting-up-the-recaptcha-add-on/) article.

[![GForms Captcha Field Icon](https://docs.gravityforms.com/wp-content/uploads/2021/05/CleanShot-2021-05-10-at-18.18.53@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2021/05/CleanShot-2021-05-10-at-18.18.53@2x.png)

CAPTCHA field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

[![](https://docs.gravityforms.com/wp-content/uploads/2014/06/Screenshot-2016-10-26-15.22.08.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/Screenshot-2016-10-26-15.22.08.png)

CAPTCHA field as displayed in the [Form Editor](https://docs.gravityforms.com/form-editor/#h-the-layout-space).

## Types

Gravity Forms supports Google’s free reCAPTCHA service. There are [different types of reCaptcha](https://developers.google.com/recaptcha/docs/versions), and the Gravity Forms CAPTCHA field supports:

- reCAPTCHA v2 Checkbox
- reCAPTCHA v2 Invisible (introduced in [Gravity Forms 2.4.7](https://docs.gravityforms.com/gravityforms-change-log/))

In addition to reCAPTCHA, the plugin [Really Simple CAPTCHA](https://wordpress.org/plugins/really-simple-captcha/) may also be installed and activated for use within Gravity Forms. If you have this plugin installed, you will be offered the option to use this type of captcha.

## Prerequisites

To communicate with the Google reCAPTCHA service of your choice, you will need a pair of API keys added to your settings. [Refer to this guide](https://docs.gravityforms.com/setting-up-the-recaptcha-add-on/) for help obtaining your keys and entering them into your Gravity Forms settings.

## Common Settings

This field uses only common field settings for the Appearance settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find a description of speciality settings that are particular to this field.

## General Settings

#### Type

The available choices for this setting depend on whether the Really Simple CAPTCHA plugin is active.

- reCAPTCHA
- Really Simple CAPTCHA
- Math

[![Captcha Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2021/05/CleanShot-2021-05-10-at-18.20.28@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2021/05/CleanShot-2021-05-10-at-18.20.28@2x.png)

#### Theme

This option is only available when using reCAPTCHA. Select the visual theme for the reCAPTCHA field from the Light and Dark options to better match your site design.

[![Recaptcha Light](https://docs.gravityforms.com/wp-content/uploads/2014/06/Screenshot-2016-10-26-15.22.08.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/Screenshot-2016-10-26-15.22.08.png)[![Recaptcha Dark](https://docs.gravityforms.com/wp-content/uploads/2014/06/Screenshot-2016-10-26-15.22.19.png)](https://docs.gravityforms.com/wp-content/uploads/2014/06/Screenshot-2016-10-26-15.22.19.png)

## Advanced Settings

[![Captcha Field Advanced Settings](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-18.26.23@2x.png)](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-10-at-18.26.23@2x.png)

| Setting | Description |
| --- | --- |
| **Language** | This option is only available when using reCAPTCHA. Select the language you would like to use for the reCAPTCHA display from the available options. |

## Merge Tags

This field does not have any available merge tags.

## How To Add a Captcha Field to your Form

Check out [this excellent blog post on how to add a Captcha Field to your form](https://www.gravityforms.com/add-recaptcha-to-your-forms/) and why it’s useful.

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 23, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/captcha/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)