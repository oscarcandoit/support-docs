---
url: "https://docs.gravityforms.com/gform_entries_column/"
title: "gform_entries_column - Gravity Forms Documentation"
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
      - [Entry Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-actions/)        - [gform\_update\_status](https://docs.gravityforms.com/gform_update_status-dynamic/ "gform_update_status")
        - [gform\_delete\_entry](https://docs.gravityforms.com/gform_delete_entry/ "gform_delete_entry")
        - [gform\_post\_send\_entry\_note](https://docs.gravityforms.com/gform_post_send_entry_note/ "gform_post_send_entry_note")
        - [gform\_update\_PROPERTY\_NAME](https://docs.gravityforms.com/gform_update_status/ "gform_update_PROPERTY_NAME")
        - [gform\_entries\_column](https://docs.gravityforms.com/gform_entries_column/ "gform_entries_column")
        - [gform\_after\_update\_entry](https://docs.gravityforms.com/gform_after_update_entry/ "gform_after_update_entry")
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

# gform\_entries\_column

- [Description](https://docs.gravityforms.com/gform_entries_column/#h-description)
- [Usage](https://docs.gravityforms.com/gform_entries_column/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_entries_column/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_entries_column/#h-examples)
- [Append an icon to the column depending on the text being displayed in the cell.](https://docs.gravityforms.com/gform_entries_column/#h-append-an-icon-to-the-column-depending-on-the-text-being-displayed-in-the-cell)
- [Placement](https://docs.gravityforms.com/gform_entries_column/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_entries_column/#h-source-code)

## Description

Use this action to inject markup to any non-first column of every entry in the entry list grid.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_entries_column'``,``'add_icon'``, 10, 5 );` |

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | ID of the current form. |
| **$field\_id** | [integer](https://docs.gravityforms.com/integer) | ID of the field that this column applies to. |
| **$value** | [string](https://docs.gravityforms.com/string) | Current value that will be displayed in this cell. |
| **$entry** | [Entry Object](https://docs.gravityforms.com/entry-object) | Current entry object. |
| **$query\_string** | [string](https://docs.gravityforms.com/string) | Current page query string with search and pagination state. |

## Examples

### Append an icon to the column depending on the text being displayed in the cell.

**Note:** This example assumes that field with ID 5 is NOT placed in the first column on the entry grid. This hook does not fire for the first column in the grid. Look at [gform\_entries\_first\_column](https://docs.gravityforms.com/gform_entries_first_column) to add content to the first column.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19 | `add_action(``'gform_entries_column'``,``'add_icon'``, 10, 5 );`<br>`function``add_icon(``$form_id``,``$field_id``,``$value``,``$entry``,``$query_string``) {`<br>```// Targeting form 190 only.`<br>```if``(``$form_id``!= 190 ) {`<br>```return``;`<br>```}`<br>```// Targeting field 5 only.`<br>```if``(``$field_id``!= 5 ) {`<br>```return``;`<br>```}`<br>```if``(``$value``==``'yes'``) {`<br>```echo``"&nbsp;<img src='"``. GFCommon::get_base_url() .``"/images/tick.png' />"``;`<br>```}``elseif``(``$value``==``'no'``) {`<br>```echo``"&nbsp;<img src='"``. GFCommon::get_base_url() .``"/images/stop.png' />"``;`<br>```}`<br>`}` |

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This action hook is located in GFEntryList::leads\_page() in _entry\_list.php_.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_entries_column/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)