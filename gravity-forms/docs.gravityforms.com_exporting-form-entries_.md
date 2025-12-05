---
url: "https://docs.gravityforms.com/exporting-form-entries/"
title: "Exporting Form Entries - Gravity Forms Documentation"
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
- [User Guides](https://docs.gravityforms.com/category/user-guides/)  - [Standard Fields](https://docs.gravityforms.com/category/user-guides/standard-fields/)
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)    - [Entry List Page](https://docs.gravityforms.com/entries/ "Entry List Page")
    - [Reviewing Spam Submissions](https://docs.gravityforms.com/reviewing-spam-submissions/ "Reviewing Spam Submissions")
    - [Fighting Spam](https://docs.gravityforms.com/spam/ "Fighting Spam")
    - [Entry Detail](https://docs.gravityforms.com/entry-detail/ "Entry Detail")
    - [Reviewing Entries (Form Submissions)](https://docs.gravityforms.com/reviewing-form-submissions/ "Reviewing Entries (Form Submissions)")
    - [Importing Form Entries](https://docs.gravityforms.com/importing-form-entries/ "Importing Form Entries")
    - [Exporting Form Entries](https://docs.gravityforms.com/exporting-form-entries/ "Exporting Form Entries")
    - [Entry Trash](https://docs.gravityforms.com/trash/ "Entry Trash")
    - [Printing an Entry](https://docs.gravityforms.com/print/ "Printing an Entry")
    - [Bulk Print Multiple Entries](https://docs.gravityforms.com/bulk-print/ "Bulk Print Multiple Entries")
    - [Moderating Entries](https://docs.gravityforms.com/moderating-entries/ "Moderating Entries")
    - [Akismet Anti-Spam](https://docs.gravityforms.com/akismet-anti-spam/ "Akismet Anti-Spam")
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Exporting Form Entries

- [Introduction](https://docs.gravityforms.com/exporting-form-entries/#h-introduction)
- [How To Export Entries](https://docs.gravityforms.com/exporting-form-entries/#h-how-to-export-entries)
- [How To Modify Exported Dates](https://docs.gravityforms.com/exporting-form-entries/#h-how-to-modify-exported-dates)

## Introduction

In this article, we will show you how to export all of your form entries (submissions) to enable further analysis or manipulation in external tools.

## How To Export Entries

1. First, log into your WordPress admin dashboard.
2. From within inside your WordPress admin, hover over **Forms** and click on **Import/Export**.

[![Gravity Forms Menu Import Export](https://docs.gravityforms.com/wp-content/uploads/2021/07/CleanShot-2021-07-01-at-18.14.22.png)](https://docs.gravityforms.com/wp-content/uploads/2021/07/CleanShot-2021-07-01-at-18.14.22.png)

3. You should be immediately prompted with the **Export Entries** tab. Within here, select the form that you want to export the entries for in the dropdown.
4. Once the form to export entries from is selected, additional options will be shown. The first of these settings is the **Select Fields** option. This will allow you to specifically select the form fields you want to export. Simply select the checkboxes next to each form field that you want to export.

[![Gravity Forms Export Entries Select Fields](https://docs.gravityforms.com/wp-content/uploads/2021/07/image-2.png)](https://docs.gravityforms.com/wp-content/uploads/2021/07/image-2.png)

5. The next available option is **Conditional Logic**. Here, you are able to export only fields that contain specific information.
6. Lastly, you may also select a date range for the field submissions that are exported. If you leave this blank, all entries will be exported.
7. Once all options are appropriately selected according to your needs, click the **Download Export File** button. Depending on the amount of information you have within your export it may take some time to download the .csv file.

[![Export Entries Settings](https://docs.gravityforms.com/wp-content/uploads/2021/07/image-3.png)](https://docs.gravityforms.com/wp-content/uploads/2021/07/image-3.png)

You have now exported your form entries. From here, what you do with this information is all up to you. This feature is great for backing up your data, as well as generating an offline copy of submissions for further investigation.

**Note:** entries flagged as Spam won’t be included in the exported file.

![Image showing entries flagged as spam.](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-65.png)

## How To Modify Exported Dates

Modifying the exported data is an advanced feature intended for developers and is not required if you simply want to export entries. The available filters to modify exported data are:

- [gform\_export\_field\_value](https://docs.gravityforms.com/gform_export_field_value/#h-4-format-date-field-value): Use this filter to override the field value before it is included in the CSV export.
- [gform\_export\_fields](https://docs.gravityforms.com/gform_export_fields): Use this filter to add/remove fields in conjunction with the filter [gform\_export\_field\_value](https://docs.gravityforms.com/gform_export_field_value/#h-4-format-date-field-value).
- [gform\_leads\_before\_export](https://docs.gravityforms.com/gform_leads_before_export/): Allows entries to be changed before export is executed.

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 7, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/exporting-form-entries/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)