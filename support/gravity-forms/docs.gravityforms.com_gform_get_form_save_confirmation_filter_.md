---
url: "https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/"
title: "Understanding Gform Save Confirmation Filter"
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
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)
    - [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)      - [Add-On Framework Filters](https://docs.gravityforms.com/category/developers/hooks/filters/addon-framework-filters/)
      - [Add-On Filters](https://docs.gravityforms.com/category/developers/hooks/filters/filters-addons/)
      - [Admin Dashboard Filters](https://docs.gravityforms.com/category/developers/hooks/filters/admin-dashboard-filters/)
      - [Calculation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/calculation-filters/)
      - [Conditional Logic Filters](https://docs.gravityforms.com/category/developers/hooks/filters/conditional-logic-filters/)
      - [Confirmation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/confirmation-filters/)
      - [Editor Filters](https://docs.gravityforms.com/category/developers/hooks/filters/editor-filters/)
      - [Entry List Filters](https://docs.gravityforms.com/category/developers/hooks/filters/entry-list-filters/)
      - [Entry Filters](https://docs.gravityforms.com/category/developers/hooks/filters/entry-filters/)
      - [Field Filters](https://docs.gravityforms.com/category/developers/hooks/filters/field-filters/)
      - [Field Framework Filters](https://docs.gravityforms.com/category/developers/hooks/filters/field-framework-filters/)
      - [Form Component Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-component-filters/)
      - [Form List Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-list/)
      - [Form Object Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-object/)
      - [Form Settings Filters](https://docs.gravityforms.com/category/developers/hooks/filters/form-settings-filters/)
      - [Import/Export Filters](https://docs.gravityforms.com/category/developers/hooks/filters/importexport-filters/)
      - [Logging Filters](https://docs.gravityforms.com/category/developers/hooks/filters/logging/)
      - [Merge Tag Filters](https://docs.gravityforms.com/category/developers/hooks/filters/merge-tags/)
      - [Notification Filters](https://docs.gravityforms.com/category/developers/hooks/filters/notification-filters/)
      - [Payment Filters](https://docs.gravityforms.com/category/developers/hooks/filters/payment/)
      - [Post Creation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/post-creation/)
      - [REST API v1 Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rest-api-v1/)
      - [REST API v2 Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rest-api-v2/)
      - [Rich Text Editor Filters](https://docs.gravityforms.com/category/developers/hooks/filters/rich-text-editor/)
      - [Save and Continue Filters](https://docs.gravityforms.com/category/developers/hooks/filters/save-and-continue/)        - [gform\_get\_form\_save\_confirmation\_filter](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/ "gform_get_form_save_confirmation_filter")
        - [gform\_get\_form\_save\_email\_confirmation\_filter](https://docs.gravityforms.com/gform_get_form_save_email_confirmation_filter/ "gform_get_form_save_email_confirmation_filter")
        - [gform\_incomplete\_submission\_post\_get](https://docs.gravityforms.com/gform_incomplete_submission_post_get/ "gform_incomplete_submission_post_get")
        - [gform\_incomplete\_submission\_pre\_save](https://docs.gravityforms.com/gform_incomplete_submission_pre_save/ "gform_incomplete_submission_pre_save")
        - [gform\_save\_and\_continue\_resume\_url](https://docs.gravityforms.com/gform_save_and_continue_resume_url/ "gform_save_and_continue_resume_url")
        - [gform\_savecontinue\_expired\_message](https://docs.gravityforms.com/gform_savecontinue_expired_message/ "gform_savecontinue_expired_message")
        - [gform\_savecontinue\_link](https://docs.gravityforms.com/gform_savecontinue_link/ "gform_savecontinue_link")
      - [Script Filters](https://docs.gravityforms.com/category/developers/hooks/filters/script-filters/)
      - [Styling/Theme/CSS Filters](https://docs.gravityforms.com/category/developers/hooks/filters/styling-filters/)
      - [System Status Filters](https://docs.gravityforms.com/category/developers/hooks/filters/system-status/)
      - [Upload Filters](https://docs.gravityforms.com/category/developers/hooks/filters/upload-filters/)
      - [Validation Filters](https://docs.gravityforms.com/category/developers/hooks/filters/validation/)
    - [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
    - [Deprecated](https://docs.gravityforms.com/category/developers/hooks/deprecated/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_get\_form\_save\_confirmation\_filter

- [Description](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/#h-description)
- [Usage](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/#h-placement)
- [Since](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/#h-source-code)

## Description

This filter allows the form save confirmation text to be programmatically changed before it is rendered to the page.

## Usage

Applies to all forms:

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_get_form_save_confirmation_filter'``,``'your_function_name'``, 10, 2 );` |

To target a specific form append the form id to the hook name. (format: gform\_get\_form\_save\_confirmation\_filter\_FORMID)

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_get_form_save_confirmation_filter_10'``,``'your_function_name'``, 10, 2 );` |

## Parameters

- **$confirmation\_message** [string](https://docs.gravityforms.com/string)

The confirmation text.
- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The form currently being processed.

## Examples

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `add_filter(``'gform_get_form_save_confirmation_filter_10'``,``'add_note_to_save_confirmation'``, 10, 2 );`<br>`function``add_note_to_save_confirmation(``$confirmation_message``,``$form``) {`<br>```$confirmation_message``.=``"Please call us to 555-0100 if you need help."``;`<br>```return``$confirmation_message``;`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Since

This filter was added in Gravity Forms v2.7

## Source Code

This filter is located in the GFFormDisplay::handle\_save\_confirmation() in _form\_display.php_

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 25, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_get_form_save_confirmation_filter/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)