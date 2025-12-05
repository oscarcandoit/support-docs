---
url: "https://docs.gravityforms.com/gform_print_entry_disable_auto_print/"
title: "gform_print_entry_disable_auto_print - Gravity Forms Documentation"
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
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)      - [Add-On Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/addon-framework-actions/)
      - [Confirmations Actions](https://docs.gravityforms.com/category/developers/hooks/actions/confirmations-actions/)
      - [Editor Actions](https://docs.gravityforms.com/category/developers/hooks/actions/editor-actions/)
      - [Email Actions](https://docs.gravityforms.com/category/developers/hooks/actions/email-actions/)
      - [Entry Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-actions/)
      - [Entry Change Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-change-actions/)
      - [Entry Detail Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-detail-actions/)
      - [Entry List Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-list-actions/)
      - [Entry Printing Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-printing-actions/)        - [gform\_print\_entry\_content](https://docs.gravityforms.com/gform_print_entry_content/ "gform_print_entry_content")
        - [gform\_print\_entry\_disable\_auto\_print](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/ "gform_print_entry_disable_auto_print")
        - [gform\_print\_entry\_footer](https://docs.gravityforms.com/gform_print_entry_footer/ "gform_print_entry_footer")
        - [gform\_print\_entry\_header](https://docs.gravityforms.com/gform_print_entry_header/ "gform_print_entry_header")
        - [gform\_print\_styles](https://docs.gravityforms.com/gform_print_styles/ "gform_print_styles")
      - [Field Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-framework-actions/)
      - [Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-actions/)
      - [Gravity Forms Core Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-core-actions/)
      - [Gravity Forms Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-settings-actions/)
      - [Form Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-actions/)
      - [Form Activity Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-activity-actions/)
      - [Form Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-settings-actions/)
      - [Import/Export Actions](https://docs.gravityforms.com/category/developers/hooks/actions/importexport-actions/)
      - [Notifications Actions](https://docs.gravityforms.com/category/developers/hooks/actions/notifications-actions/)
      - [Payment Actions](https://docs.gravityforms.com/category/developers/hooks/actions/payment-actions/)
      - [Post Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/post-fields-actions/)
      - [Script/Style Actions](https://docs.gravityforms.com/category/developers/hooks/actions/scriptstyle-actions/)
      - [Submission Actions](https://docs.gravityforms.com/category/developers/hooks/actions/submission-actions/)
      - [System Status Actions](https://docs.gravityforms.com/category/developers/hooks/actions/system-status-actions/)
    - [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)
    - [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
    - [Deprecated](https://docs.gravityforms.com/category/developers/hooks/deprecated/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_print\_entry\_disable\_auto\_print

- [Description](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/#h-description)
- [Usage](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/#h-parameters)
- [Example](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/#h-example)
- [Placement](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/#h-placement)
- [Since](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/#h-source-code)

## Description

Disable auto-print when the Print Entry view has fully loaded.

## Usage

The following would apply to all forms.

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_print_entry_disable_auto_print'``,``'your_function_name'``, 10, 2 );` |

To target a specific form, append the form id to the hook name. (format: gform\_print\_entry\_disable\_auto\_print\_FORMID)

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_print_entry_disable_auto_print_1'``,``'your_function_name'``, 10, 2 );` |

## Parameters

- **false** [bool](https://docs.gravityforms.com/bool) Auto print is enabled by default. Set to true to disable.
- **$form** [Form Object](https://docs.gravityforms.com/form-object)
Current form object.


## Example

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_print_entry_disable_auto_print'``,``'__return_true'``, 10, 2 );` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Since

This filter was added in Gravity Forms version 1.9.14.16.

## Source Code

This filter is located in _print-entry.php_.

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: June 9, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_print_entry_disable_auto_print/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)