---
url: "https://docs.gravityforms.com/gform_post_multifile_upload/"
title: "gform_post_multifile_upload - Gravity Forms Documentation"
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
      - [Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-actions/)        - [gform\_after\_delete\_field](https://docs.gravityforms.com/gform_after_delete_field/ "gform_after_delete_field")
        - [gform\_before\_delete\_field](https://docs.gravityforms.com/gform_before_delete_field/ "gform_before_delete_field")
        - [gform\_post\_multifile\_upload](https://docs.gravityforms.com/gform_post_multifile_upload/ "gform_post_multifile_upload")
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

# gform\_post\_multifile\_upload

- [Description](https://docs.gravityforms.com/gform_post_multifile_upload/#h-description)
- [Usage](https://docs.gravityforms.com/gform_post_multifile_upload/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_post_multifile_upload/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_post_multifile_upload/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_post_multifile_upload/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_post_multifile_upload/#h-source-code)

## Description

The “gform\_post\_multifile\_upload” action in Gravity Forms allows further actions to be performed after multiple files have been uploaded.

## Usage

The following would apply to all forms:

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_multifile_upload'``,``'your_function_name'``, 10, 5 );` |

To target a specific form, append the form id to the hook name. (format: gform\_post\_multifile\_upload\_FORMID)

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_multifile_upload_2'``,``'your_function_name'``, 10, 5 );` |

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object)
The form object.

- **$field** [Field Object](https://docs.gravityforms.com/field-object)

The field object.

- **$uploaded\_filename** [string](https://docs.gravityforms.com/string)

The name of the file uploaded.

- **$tmp\_file\_name** [string](https://docs.gravityforms.com/string)

The temporary name of the file while it was uploaded.

- **$file\_path** [string](https://docs.gravityforms.com/string)

The path where the file is uploaded.


## Examples

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7 | `add_action(``'gform_post_multifile_upload'``,``'upload_alert'``, 10, 5 );`<br>`function``upload_alert(``$form``,``$field``,``$uploaded_filename``,``$tmp_file_name``,``$file_path``){`<br>```$dirname``= dirname(``$file_path``);`<br>```if``(``$uploaded_filename``==``'600x500.png'``){`<br>```copy``(``$file_path``,``$dirname``.``'\backup_'``.``$uploaded_filename``);`<br>```}`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in GFAsyncUpload::upload() in _upload.php_.

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 13, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_post_multifile_upload/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)