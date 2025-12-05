---
url: "https://docs.gravityforms.com/gform_entry_created/"
title: "gform_entry_created - Gravity Forms Documentation"
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
      - [Entry Change Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-change-actions/)        - [gform\_post\_update\_entry\_property](https://docs.gravityforms.com/gform_post_update_entry_property/ "gform_post_update_entry_property")
        - [gform\_pre\_note\_deleted](https://docs.gravityforms.com/gform_pre_note_deleted/ "gform_pre_note_deleted")
        - [gform\_post\_note\_added](https://docs.gravityforms.com/gform_post_note_added/ "gform_post_note_added")
        - [gform\_delete\_entries](https://docs.gravityforms.com/gform_delete_entries/ "gform_delete_entries")
        - [gform\_post\_add\_entry](https://docs.gravityforms.com/gform_post_add_entry/ "gform_post_add_entry")
        - [gform\_post\_update\_entry](https://docs.gravityforms.com/gform_post_update_entry/ "gform_post_update_entry")
        - [gform\_entry\_created](https://docs.gravityforms.com/gform_entry_created/ "gform_entry_created")
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

# gform\_entry\_created

- [Description](https://docs.gravityforms.com/gform_entry_created/#h-description)
- [Usage](https://docs.gravityforms.com/gform_entry_created/#h-usage)
- [Parameters](https://docs.gravityforms.com/gform_entry_created/#h-parameters)
- [Examples](https://docs.gravityforms.com/gform_entry_created/#h-examples)
- [1\. Add a value to the entry meta.](https://docs.gravityforms.com/gform_entry_created/#h-1-add-a-value-to-the-entry-meta)
- [2\. Delete an entry property](https://docs.gravityforms.com/gform_entry_created/#h-2-delete-an-entry-property)
- [Source Code](https://docs.gravityforms.com/gform_entry_created/#h-source-code)

## Description

This hook fires after the lead has been created but before the post has been created, notifications have been sent, and the confirmation has been processed.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action(``'gform_entry_created'``,``'your_function_name'``, 10, 2 );` |

## Parameters

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)
The entry that was just created.

- **$form** [Form Object](https://docs.gravityforms.com/form-object)

The current form.


## Examples

### 1\. Add a value to the entry meta.

This example demonstrates how to use to the gform\_entry\_created hook to populate a value in the entry’s _entry meta_. It is possible to populate the entry meta anywhere you have the entry ID; however, let’s assume that we’re going to retrieve this entry meta and replace a [gform\_custom\_merge\_tags](https://docs.gravityforms.com/gform_custom_merge_tags).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15 | `add_action(``'gform_entry_created'``,``'generate_mergedoc'``);`<br>`function``generate_mergedoc(``$entry``,``$form``) {`<br>```$feed``= self::get_mergedoc_feeds(``$form``[``'id'``] );`<br>```if``(``empty``(``$feed``) || ! rgar(``$feed``,``'active'``) || !``$entry``)`<br>```return``;`<br>```// get download link`<br>```$download_link``= self::get_download_link(``$uid``);`<br>```// update entry meta`<br>```gform_update_meta(``$entry``[``'id'``],``'gfmergedoc_download_link'``,``$download_link``);`<br>`}` |

### 2\. Delete an entry property

The following example shows how you can delete an entry property such as the user agent from the database.

|     |     |
| --- | --- |
| 1<br>2<br>3 | `add_action(``'gform_entry_created'``,``function``(``$entry``) {`<br>```GFAPI::update_entry_property(``$entry``[``'id'``],``'user_agent'``,``''``);`<br>`} );` |

## Source Code

This filter is located in GFFormDisplay::handle\_submission() in _form\_display.php_.

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 13, 2019

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_entry_created/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)