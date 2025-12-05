---
url: "https://docs.gravityforms.com/gform_print_entry_content/"
title: "gform_print_entry_content - Gravity Forms Documentation"
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

# gform\_print\_entry\_content

- [Description](https://docs.gravityforms.com/gform_print_entry_content/#h-description)
- [Usage](https://docs.gravityforms.com/gform_print_entry_content/#h-usage)
- [Examples](https://docs.gravityforms.com/gform_print_entry_content/#h-examples)
- [Example 1](https://docs.gravityforms.com/gform_print_entry_content/#h-example-1)
- [Example 2](https://docs.gravityforms.com/gform_print_entry_content/#h-example-2)
- [Placement](https://docs.gravityforms.com/gform_print_entry_content/#h-placement)
- [Since](https://docs.gravityforms.com/gform_print_entry_content/#h-since)
- [Source Code](https://docs.gravityforms.com/gform_print_entry_content/#h-source-code)

## Description

Runs when entries are being displayed and allows a custom display to be used for the entry.

## Usage

```
add_action( 'gform_print_entry_content', 'my_function', 10, 3 );
```

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object) The current form.
- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)
The current entry.

- **$entry\_ids** [array](https://docs.gravityforms.com/array)
The IDs of the entries being displayed.


## Examples

### Example 1

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25 | `add_action(``'gform_print_entry_content'``,``'gform_default_entry_content'``, 10, 3 );`<br>`function``gform_default_entry_content(``$form``,``$entry``,``$entry_ids``) {`<br>``<br>`$page_break``= rgget(``'page_break'``) ?``'print-page-break'``: false;`<br>``<br>`// Separate each entry inside a form element so radio buttons don't get treated as a single group across multiple entries.`<br>`echo``'<form>'``;`<br>``<br>`GFEntryDetail::lead_detail_grid(``$form``,``$entry``);`<br>``<br>`echo``'</form>'``;`<br>``<br>`if``( rgget(``'notes'``) ) {`<br>`$notes``= GFFormsModel::get_lead_notes(``$entry``[``'id'``] );`<br>`if``( !``empty``(``$notes``) ) {`<br>`GFEntryDetail::notes_grid(``$notes``, false );`<br>`}`<br>`}`<br>``<br>`// Output entry divider/page break.`<br>`if``(``array_search``(``$entry``[``'id'``],``$entry_ids``) <``count``(``$entry_ids``) - 1 ) {`<br>`echo``'<div class="print-hr '``.``$page_break``.``'"></div>'``;`<br>`}`<br>``<br>`}` |

### Example 2

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10 | `// Prevent the default content being output.`<br>`add_action(``'gform_print_entry_content'``,``function``() {`<br>`remove_action(``'gform_print_entry_content'``,``'gform_default_entry_content'``, 10 );`<br>`}, 1 );`<br>`// Bind our custom entry content function.`<br>`add_action(``'gform_print_entry_content'``,``'my_print_entry_content'``, 10, 3 );`<br>`function``my_print_entry_content(``$form``,``$entry``,``$entry_ids``) {`<br>`GFEntryDetail::lead_detail_grid(``$form``,``$entry``);`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Since

The filter was added in Gravity Forms version 1.9.14.16.

## Source Code

This action hook is located in _print-entry.php_.

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: July 9, 2021

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_print_entry_content/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)