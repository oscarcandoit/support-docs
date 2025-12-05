---
url: "https://docs.gravityforms.com/gform_entry_detail_content_after/"
title: "gform_entry_detail_content_after - Gravity Forms Documentation"
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
      - [Entry Detail Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-detail-actions/)        - [gform\_pre\_entry\_detail](https://docs.gravityforms.com/gform_pre_entry_detail/ "gform_pre_entry_detail")
        - [gform\_entries\_view](https://docs.gravityforms.com/gform_entries_view/ "gform_entries_view")
        - [gform\_entry\_info](https://docs.gravityforms.com/gform_entry_info/ "gform_entry_info")
        - [gform\_entry\_detail\_sidebar\_middle](https://docs.gravityforms.com/gform_entry_detail_sidebar_middle/ "gform_entry_detail_sidebar_middle")
        - [gform\_entry\_detail\_sidebar\_before](https://docs.gravityforms.com/gform_entry_detail_sidebar_before/ "gform_entry_detail_sidebar_before")
        - [gform\_entry\_detail\_sidebar\_after](https://docs.gravityforms.com/gform_entry_detail_sidebar_after/ "gform_entry_detail_sidebar_after")
        - [gform\_entry\_detail\_content\_before](https://docs.gravityforms.com/gform_entry_detail_content_before/ "gform_entry_detail_content_before")
        - [gform\_entry\_detail\_content\_after](https://docs.gravityforms.com/gform_entry_detail_content_after/ "gform_entry_detail_content_after")
        - [gform\_entry\_detail](https://docs.gravityforms.com/gform_entry_detail/ "gform_entry_detail")
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

# gform\_entry\_detail\_content\_after

- [Description](https://docs.gravityforms.com/gform_entry_detail_content_after/#h-description)
- [Usage](https://docs.gravityforms.com/gform_entry_detail_content_after/#h-usage)
- [Examples](https://docs.gravityforms.com/gform_entry_detail_content_after/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_entry_detail_content_after/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_entry_detail_content_after/#h-source-code)

## Description

Use this action hook to add extra text/sections after the main content on the Entry detail page.

## Usage

|     |     |
| --- | --- |
| 1 | `add_action( &#039;gform_entry_detail_content_after&#039;, &#039;add_main_text_after&#039;, 10, 2 );` |

## Parameters

- **$form** [Form Object](https://docs.gravityforms.com/form-object)
The form from which the entry value was submitted.

- **$entry** [Entry Object](https://docs.gravityforms.com/entry-object)

The current entry.


## Examples

This example adds a new section with a header and text.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4 | `add_action( &#039;gform_entry_detail_content_after&#039;, &#039;add_main_text_after&#039;, 10, 2 );`<br>`function``add_main_text_after(``$form``,``$entry``) {`<br>`echo``&#039;&amp;lt;table``class``=&quot;widefat fixed entry-detail-view&quot; cellspacing=&quot;0&quot;&amp;gt;&amp;lt;thead&amp;gt;&amp;lt;tr&amp;gt;&amp;lt;th&amp;gt;Main Content After&amp;lt;/th&amp;gt;&amp;lt;/tr&amp;gt;&amp;lt;/thead&amp;gt;&amp;lt;tbody&amp;gt;&amp;lt;tr&amp;gt;&amp;lt;td&amp;gt;some stuff&amp;lt;/td&amp;gt;&amp;lt;/tr&amp;gt;&amp;lt;/tbody&amp;gt;&amp;lt;/table&amp;gt;&#039;;`<br>`}` |

## Placement

This code should be placed in the [functions.php](http://codex.wordpress.org/Theme_Development#Functions_File) file of your active theme.

## Source Code

This filter is located in GFEntryDetail::lead\_detail\_page() in _entry\_detail.php_.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 8, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gform_entry_detail_content_after/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)