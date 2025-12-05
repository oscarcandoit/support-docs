---
url: "https://docs.gravityforms.com/file-upload/"
title: "File Upload - Gravity Forms Documentation"
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
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)    - [Address](https://docs.gravityforms.com/address-field/ "Address")
    - [CAPTCHA](https://docs.gravityforms.com/captcha/ "CAPTCHA")
    - [Chained Selects Field](https://docs.gravityforms.com/chained-selects/ "Chained Selects Field")
    - [Consent Field](https://docs.gravityforms.com/consent/ "Consent Field")
    - [Date](https://docs.gravityforms.com/date/ "Date")
    - [Email](https://docs.gravityforms.com/email/ "Email")
    - [File Upload](https://docs.gravityforms.com/file-upload/ "File Upload")
    - [List](https://docs.gravityforms.com/list/ "List")
    - [Multi Select](https://docs.gravityforms.com/multi-select/ "Multi Select")
    - [Name](https://docs.gravityforms.com/name/ "Name")
    - [Password](https://docs.gravityforms.com/password/ "Password")
    - [Phone](https://docs.gravityforms.com/phone/ "Phone")
    - [Pipe](https://docs.gravityforms.com/pipe-recorder-field/ "Pipe")
    - [Poll](https://docs.gravityforms.com/polls/ "Poll")
    - [Quiz](https://docs.gravityforms.com/quiz-field/ "Quiz")
    - [Repeater (beta)](https://docs.gravityforms.com/repeater-fields/ "Repeater (beta)")
    - [Signature](https://docs.gravityforms.com/signature/ "Signature")
    - [Survey](https://docs.gravityforms.com/survey/ "Survey")
    - [Time](https://docs.gravityforms.com/time/ "Time")
    - [Username](https://docs.gravityforms.com/username/ "Username")
    - [Website](https://docs.gravityforms.com/website/ "Website")
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
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

# File Upload

- [Summary](https://docs.gravityforms.com/file-upload/#h-summary)
- [Common Settings](https://docs.gravityforms.com/file-upload/#h-common-settings)
- [General Settings](https://docs.gravityforms.com/file-upload/#h-general-settings)
- [Notes](https://docs.gravityforms.com/file-upload/#h-notes)
- [Merge Tags](https://docs.gravityforms.com/file-upload/#h-merge-tags)
- [Usage](https://docs.gravityforms.com/file-upload/#h-usage)
- [Modifiers](https://docs.gravityforms.com/file-upload/#h-modifiers)
- [Frequently Asked Questions](https://docs.gravityforms.com/file-upload/#h-frequently-asked-questions)
- [How do I access uploaded files?](https://docs.gravityforms.com/file-upload/#h-how-do-i-access-uploaded-files)
- [Is there a difference between the File Upload Field and the Post Image field?](https://docs.gravityforms.com/file-upload/#h-is-there-a-difference-between-the-file-upload-field-and-the-post-image-field)
- [What happens to the files if the entry is trashed or deleted?](https://docs.gravityforms.com/file-upload/#h-what-happens-to-the-files-if-the-entry-is-trashed-or-deleted)
- [Where are the files uploaded and stored?](https://docs.gravityforms.com/file-upload/#h-where-are-the-files-uploaded-and-stored)

## Summary

The **File Upload** field allows users to upload a file with their form submission. You may limit which filetypes a user may upload via the properties tab. It is available under the Advanced Fields section within the form editor.

![File Upload Field](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-11-at-09.44.34@2x-150x150.png)

File Upload field as displayed in the [Field Library](https://docs.gravityforms.com/form-editor/#h-the-field-library)

![File Upload Field](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-11-at-09.49.56@2x-300x86.png)

File Upload field as displayed in the [Form editor](https://docs.gravityforms.com/form-editor/#h-the-field-library)

## Common Settings

This field uses only common field settings for the Appearance and Advanced settings. For a description of each of the common field settings, [refer to this article](https://docs.gravityforms.com/common-field-settings/). Below you will find description of specialty settings that are particular to this field.

## General Settings

![File Upload Field General Settings](https://docs.gravityforms.com/wp-content/uploads/2014/05/CleanShot-2021-05-11-at-09.48.20@2x-300x230.png)

| Settings | Description |
| --- | --- |
| **Allowed file extensions** | Enter the allowed file extensions for file uploads. This will limit what type of files a user may upload. See note **1**. |
| **Enable Multi-File Upload** | If checked, this option allows the user to upload multiple files. If unchecked (default state), the upload will accept only a single file. See note **2**. |
| **Maximum File Size** | Use this to specify the maximum size in megabytes allowed for each of the files. |

### Notes

1\. See [this article](https://docs.gravityforms.com/permitted-file-types-for-uploading/) for important notes on WordPress permitted file types.

2\. Once an entry has been submitted using this field, this option will no longer be editable. That is, you cannot switch a file upload field from from single file to multi-file once an entry with a file has been submitted.

## Merge Tags

For more information on the use of merge tags, refer to [these articles](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/).

### Usage

```
{Field Name:2:modifier}
```

### Modifiers

| Modifiers | Description |
| --- | --- |
| **:download** | Denotes that the link created for the download should force the download when accessed. |

## Frequently Asked Questions

### How do I access uploaded files?

You can access uploaded files from the [Entry Detail](https://docs.gravityforms.com/entry-detail/) screen or browse the uploads directory. For more information, refer to this [article](https://docs.gravityforms.com/security/#h-the-gravity-forms-uploads-folder).

### Is there a difference between the File Upload Field and the Post Image field?

Yes. The File Upload field allows you to upload files and link them to the entry without creating a post. Using any [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/) in a form to collect information without configuring the field will create Untitled draft posts after the form is submitted. Refer to this [article](https://docs.gravityforms.com/post-image/) about the Post Image field for more information.

### What happens to the files if the entry is trashed or deleted?

- When an entry is sent to Trash, the file will be kept.
- When an entry is Deleted Permanently, the file will be deleted.
- When an entry is sent to Spam, the file will be kept.

### Where are the files uploaded and stored?

Refer to this [article](https://docs.gravityforms.com/security/#h-file-upload-security) for more information about uploaded files location and storage.

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 19, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/file-upload/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)