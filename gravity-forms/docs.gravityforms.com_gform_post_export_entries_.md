---
url: "https://docs.gravityforms.com/gform_post_export_entries/"
title: "gform_post_export_entries - Gravity Forms Documentation"
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
      - [Import/Export Actions](https://docs.gravityforms.com/category/developers/hooks/actions/importexport-actions/)        - [gform\_export\_page\_VIEW](https://docs.gravityforms.com/gform_export_page_view/ "gform_export_page_VIEW")
        - [gform\_forms\_post\_import](https://docs.gravityforms.com/gform_forms_post_import/ "gform_forms_post_import")
        - [gform\_post\_export\_entries](https://docs.gravityforms.com/gform_post_export_entries/ "gform_post_export_entries")
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

# gform\_post\_export\_entries

- [Description](https://docs.gravityforms.com/gform_post_export_entries/#h-description)
- [Usage](https://docs.gravityforms.com/gform_post_export_entries/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_post_export_entries/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_post_export_entries/#h-examples)
- [1\. Basic usage](https://docs.gravityforms.com/gform_post_export_entries/#h-1-basic-usage)
- [2\. Append additional entries](https://docs.gravityforms.com/gform_post_export_entries/#h-2-append-additional-entries)
- [Since](https://docs.gravityforms.com/gform_post_export_entries/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_post_export_entries/#h-source-code)

## Description

Triggered after exporting entries from a form, allowing further actions to be performed.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_post_export_entries'``,``'my_function'``, 10, 5 );` |

## Parameters

- **$form** [array](https://docs.gravityforms.com/array)
The form object to get the entries from.

- **$start\_date** [string](https://docs.gravityforms.com/string)

The start date from where the entries exported will begin.

- **$end\_date** [string](https://docs.gravityforms.com/string)

The end date on which the entry export will stop.

- **$array** [array](https://docs.gravityforms.com/array)

The field IDs from which entries are being exported.

- **$export\_id** [string](https://docs.gravityforms.com/string)

The unique ID for the export. Since version 2.4.6.


## Examples

### 1\. Basic usage

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `function``my_function() {`<br>```//Do something here`<br>`}`<br>`add_action(``'gform_post_export_entries'``,``'my_function'``, 10, 5 );` |

### 2\. Append additional entries

The following shows how additional entries can be appended to the entry export when using Gravity Forms 2.4.6 or greater.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16 | `add_action(``'gform_post_export_entries'``,``function``(``$form``,``$start_date``,``$end_date``,``$fields``,``$export_id``) {`<br>```$entries``=``array``();``// Define or get the additional entries here.`<br>```$lines``=``''``;`<br>```foreach``(``$entries``as``$entry``) {`<br>```$lines``.= GFExport::get_entry_export_line(``$entry``,``$form``,``$fields``,``array``(),``','``);`<br>```$lines``.=``"\n"``;`<br>```}`<br>```if``( ! seems_utf8(``$lines``) ) {`<br>```$lines``= utf8_encode(``$lines``);`<br>```}`<br>```GFExport::write_file(``$lines``,``$export_id``);`<br>`}, 10, 5 );` |

## Since

This filter was added in Gravity Forms version 1.9.3.

Added the “export\_id” parameter in version 2.4.6.

## Source Code

This action hook is located in _export.php_.

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

[Algolia](https://docs.gravityforms.com/gform_post_export_entries/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)