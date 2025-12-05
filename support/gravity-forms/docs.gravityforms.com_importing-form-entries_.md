---
url: "https://docs.gravityforms.com/importing-form-entries/"
title: "Importing Form Entries - Gravity Forms Documentation"
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

# Importing Form Entries

- [Summary](https://docs.gravityforms.com/importing-form-entries/#h-summary)
- [Importing Entries With A Database Migration](https://docs.gravityforms.com/importing-form-entries/#h-importing-entries-with-a-database-migration)
- [Importing Entries With The WP-CLI Gravity Forms Add-On](https://docs.gravityforms.com/importing-form-entries/#h-importing-entries-with-the-wp-cli-gravity-forms-add-on)
- [Importing Entries With Third-Party Plugins](https://docs.gravityforms.com/importing-form-entries/#h-importing-entries-with-third-party-plugins)
- [GravityImport](https://docs.gravityforms.com/importing-form-entries/#h-gravityimport)
- [Import Entries Add-On](https://docs.gravityforms.com/importing-form-entries/#h-import-entries-add-on)

## Summary

Gravity Forms does not include a feature for importing entries. This article will discuss several methods for importing entries into Gravity Forms, including database migrations, WP-CLI commands, and third-party plugins.

**Note:** When importing entries, ensure that the imported data matches the structure of your existing form fields. If the data structure does not align correctly, the entries may be incomplete or contain incorrect values.

## Importing Entries With A Database Migration

For users comfortable working directly with databases, you can perform a database migration to import entries. Gravity Forms stores form entries in multiple database tables within the WordPress database, which include:

- **`wp_gf_entry`**: Stores the general entry data.
- **`wp_gf_entry_meta`**: Stores the metadata associated with the entries.
- **`wp_gf_entry_notes`**: Stores any notes related to the entries.

To import entries manually, you need to export the relevant rows from these tables in your source environment and import them into your target environment. This process requires a thorough understanding of the [Gravity Forms database](https://docs.gravityforms.com/database-storage-structure-reference/) structure and can be risky if done incorrectly. Always ensure you have a full database backup before attempting this method.

## Importing Entries With The WP-CLI Gravity Forms Add-On

WP-CLI is a command-line interface for managing WordPress installations. The **[Gravity Forms WP-CLI Add-On](https://docs.gravityforms.com/wp-cli-tools/)** provides powerful tools for managing your forms, including the capability to import and export entries.

This method requires some knowledge of working with the command line, but it can be particularly useful for advanced users who need to perform batch imports quickly.

Refer to this [article](https://docs.gravityforms.com/managing-entries/#h-importing-entries) for more information about importing entries with WP-CLI.

## Importing Entries With Third-Party Plugins

### GravityImport

**GravityKit** offers an add-on called **[GravityImport](https://www.gravityforms.com/add-ons/gravity-forms-import-entries/)**, which simplifies the process of importing entries.

With the **GravityImport** add-on, you can:

- Import entries from a CSV file into your Gravity Forms.
- Map CSV columns to Gravity Forms fields, ensuring data consistency.
- Handle various field types, including dropdowns, text, dates, and more.

This plugin provides a user-friendly interface and is ideal for users who prefer a guided process without dealing with database-level operations.

Learn more about [GravityImport](https://www.gravityforms.com/add-ons/gravity-forms-import-entries/) add-on in [this](https://www.gravityforms.com/add-ons/gravity-forms-import-entries/) article.

### Import Entries Add-On

Import Entries In Gravity Forms allows the admin to import data from a CSV file to the entries section of the Gravity Form.

The admin will also be able to update existing entries by selecting the fields (from the CSV file) that match the Entry ID.

You can easily import digitally captured signatures, coupon details, and survey data from your Gravity Forms. Just map the fields and view your entries in the entries section.

Learn more about [Import Entries](https://www.gravityforms.com/add-ons/import-entries-in-gravity-forms/) add-on in [this](https://www.gravityforms.com/add-ons/import-entries-in-gravity-forms/) article.

_​ **Disclaimer**: Third-party se_ rvices, _plugins, or code snippets that are referenced by our Support documentation or in Support Team communications are provided as suggestions only. We do not evaluate, test or officially support third-party solutions. You are wholly responsible for determining if any suggestion given is sufficient to meet the functional, security, legal, ongoing cost and support needs of your project._

_Feedback, feature and integration requests, and other functionality ideas can be submitted on our [Gravity Forms](https://roadmap.forms.gravity.com/tabs/1-under-consideration/submit-idea), [Gravity Flow](https://roadmap.flow.gravity.com/tabs/1-under-consideration/submit-idea), or [Gravity SMTP](https://roadmap.smtp.gravity.com/tabs/15-under-consideration/submit-idea) product roadmap pages._

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 9, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/importing-form-entries/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)