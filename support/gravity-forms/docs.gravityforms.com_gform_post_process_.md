---
url: "https://docs.gravityforms.com/gform_post_process/"
title: "gform_post_process - Gravity Forms Documentation"
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

# gform\_post\_process

- [Description](https://docs.gravityforms.com/gform_post_process/#h-description)
- [Usage](https://docs.gravityforms.com/gform_post_process/#h-usage)
- [Example](https://docs.gravityforms.com/gform_post_process/#h-example)
- [Placement](https://docs.gravityforms.com/gform_post_process/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_post_process/#h-source-code)

## Description

This action fires after the form processing is completed, allowing further actions to be performed. Form processing happens when submitting a page on a multi-page form (i.e., going to the “Next” or “Previous” page) or when submitting a single-page form.

## Usage

The following would apply to all forms:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_process'``,``'your_function_name'``, 10, 3 );` |

To target a specific form, append the form id to the hook name. (format: gform\_post\_process\_FORMID)

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_process_1'``,``'your_function_name'``, 10, 3 );` |

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The form object.
- **$page\_number** [int](https://docs.gravityforms.com/int)

In a multi-page form, this variable contains the current page number.
- **$source\_page\_number** [int](https://docs.gravityforms.com/int)

In a multi-page form, this parameter contains the number of the page from which the submission came.

## Example

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9 | `add_action(``'gform_post_process'``,``'post_process_actions'``, 10, 3 );`<br>`function``post_process_actions(``$form``,``$page_number``,``$source_page_number``){`<br>```// read the $_POST to obtain values present in the submission`<br>```$field_1_value``= rgpost(``'input_1'``);`<br>```// do something`<br>```if``(``$page_number``>= 1 &&``$field_1_value``==``'Contact'``){`<br>```echo``'multi-page contact'``;`<br>```}`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This filter is located in GFFormDisplay::process\_form() in _form\_display.php_.

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 13, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_post_process/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)