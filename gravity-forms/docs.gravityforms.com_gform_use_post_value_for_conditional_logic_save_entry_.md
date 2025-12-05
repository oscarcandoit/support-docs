---
url: "https://docs.gravityforms.com/gform_use_post_value_for_conditional_logic_save_entry/"
title: "gform_use_post_value_for_conditional_logic_save_entry - Gravity Forms"
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
      - [Entry Printing Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-printing-actions/)
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
      - [Submission Actions](https://docs.gravityforms.com/category/developers/hooks/actions/submission-actions/)        - [gform\_after\_submission](https://docs.gravityforms.com/gform_after_submission/ "gform_after_submission")
        - [gform\_incomplete\_submission\_post\_save](https://docs.gravityforms.com/gform_incomplete_submission_post_save/ "gform_incomplete_submission_post_save")
        - [gform\_post\_process](https://docs.gravityforms.com/gform_post_process/ "gform_post_process")
        - [gform\_pre\_submission](https://docs.gravityforms.com/gform_pre_submission/ "gform_pre_submission")
        - [gform\_use\_post\_value\_for\_conditional\_logic\_save\_entry](https://docs.gravityforms.com/gform_use_post_value_for_conditional_logic_save_entry/ "gform_use_post_value_for_conditional_logic_save_entry")
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

# gform\_use\_post\_value\_for\_conditional\_logic\_save\_entry

- [Description](https://docs.gravityforms.com/gform_use_post_value_for_conditional_logic_save_entry/#h-description)
- [Usage](https://docs.gravityforms.com/gform_use_post_value_for_conditional_logic_save_entry/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_use_post_value_for_conditional_logic_save_entry/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_use_post_value_for_conditional_logic_save_entry/#h-examples)

## Description

The “gform\_use\_post\_value\_for\_conditional\_logic\_save\_entry” filter in Gravity Forms specifies whether to fetch values from the $\_POST when evaluating a field’s conditional logic. Defaults to true for new entries and false for existing entries.

## Usage

The following would apply to all forms.

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_use_post_value_for_conditional_logic_save_entry'``,``'your_function_name'``, 10, 3 );` |

To limit the scope of your function to a specific form, append the form ID to the end of the hook name.

Format: `gform_use_post_value_for_conditional_logic_save_entry_FORMID`

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_use_post_value_for_conditional_logic_save_entry_6'``,``'your_function_name'``, 10, 3 );` |

## Parameters

- **$read\_value\_from\_post** [array](https://docs.gravityforms.com/array)
Should the value be fetched from the $\_POST?

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The current form object.

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The current entry object.


## Examples

Enable fetching from post by default:

|     |     |
| --- | --- |
| 1 | `add_filter(``'gform_use_post_value_for_conditional_logic_save_entry'``,``'__return_true'``);` |

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 13, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_use_post_value_for_conditional_logic_save_entry/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)