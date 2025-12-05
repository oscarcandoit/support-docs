---
url: "https://docs.gravityforms.com/reviewing-spam-submissions/"
title: "Reviewing Spam Submissions - Gravity Forms Documentation"
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

# Reviewing Spam Submissions

- [Summary](https://docs.gravityforms.com/reviewing-spam-submissions/#h-summary)
- [Entries Page](https://docs.gravityforms.com/reviewing-spam-submissions/#h-entries-page)
- [Entries Filter](https://docs.gravityforms.com/reviewing-spam-submissions/#h-entries-filter)
- [Quick Action](https://docs.gravityforms.com/reviewing-spam-submissions/#h-quick-action)
- [Bulk Action](https://docs.gravityforms.com/reviewing-spam-submissions/#h-bulk-action)
- [Submission Speed](https://docs.gravityforms.com/reviewing-spam-submissions/#h-submission-speed)
- [Entry Detail Page](https://docs.gravityforms.com/reviewing-spam-submissions/#h-entry-detail-page)
- [Spam Filter Entry Note](https://docs.gravityforms.com/reviewing-spam-submissions/#h-spam-filter-entry-note)
- [Submission Speed Metabox](https://docs.gravityforms.com/reviewing-spam-submissions/#h-submission-speed-metabox)
- [What Happens After An Entry Is Marked As Spam](https://docs.gravityforms.com/reviewing-spam-submissions/#h-what-happens-after-an-entry-is-marked-as-spam)
- [What Happens After An Entry Is Marked As Not Spam](https://docs.gravityforms.com/reviewing-spam-submissions/#h-what-happens-after-an-entry-is-marked-as-not-spam)
- [Third-Party Anti-Spam Services](https://docs.gravityforms.com/reviewing-spam-submissions/#h-third-party-anti-spam-services)

## Summary

The following features are available on the [Entries List](https://docs.gravityforms.com/entries/) and [Entry Detail](https://docs.gravityforms.com/entry-detail/) pages. For information on combating spam, refer to this [Fighting Spam](https://docs.gravityforms.com/spam/) article.

## Entries Page

### Entries Filter

A **Spam** link, with entry count, appears above the entries list table. This link allows you to view entries which have been marked as spam. This is where you will most likely find missing submissions.

[![Image showing Spam link](https://docs.gravityforms.com/wp-content/uploads/2024/09/image-51.png)](https://docs.gravityforms.com/wp-content/uploads/2024/09/image-51.png)

### Quick Action

When hovering over each entry in the entries list table, a **Spam** or **Not Spam** link will appear as a quick action.

If the Entry is in the “All” entries view, clicking the **Spam** link changes the entry status property to spam, moving it from the “All” entries view and into the “Spam” filter view.

[![Image showing the Entries list for All entries.](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-47-1024x280.png)](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-47.png) Image showing the Entries list for All entries.

If the Entry was _marked_ as spam by a compatible [anti-spam method](https://docs.gravityforms.com/spam/), clicking the **Not Spam** link changes the entry status property to active, moving it back into the “All” entries view.

[![Image showing the Entries list for Spam entries.](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-48-1024x280.png)](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-48.png) Image showing the Entries list for Spam entries.

**Note:** Clicking the **Spam** or **Not Spam** links will only update the Entry status. It doesn’t block emails, users, IPs, keywords, etc. Those settings should be managed by your preferred compatible [anti-spam method](https://docs.gravityforms.com/spam/).

### Bulk Action

Multiple entries can be selected and marked as spam or not spam using the bulk action drop down, located above and below the entries list table.

### Submission Speed

The value displayed in the column will be a single time (e.g., 1978) or a range (e.g., 1755 – 3856) in milliseconds.

[![Image showing the Submission Speed column in the entries list.](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-46-1024x173.png)](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-46.png) Image showing the Submission Speed column in the entries list.

## Entry Detail Page

**Mark as Spam** or **Not Spam** links appear in the sidebar at the bottom of the entry info meta box.

Entry with Active status

[![Image showing an entry marked as Not Spam](https://docs.gravityforms.com/wp-content/uploads/2024/09/image-60.png)](https://docs.gravityforms.com/wp-content/uploads/2024/09/image-60.png)

Entry with Spam status

[![Image showing an entry marked as Spam](https://docs.gravityforms.com/wp-content/uploads/2024/09/image-59.png)](https://docs.gravityforms.com/wp-content/uploads/2024/09/image-59.png)

### Spam Filter Entry Note

When an entry is flagged as spam, an entry note is added identifying the filter that detected it. The header will appear as **“Spam Filter”** or with the specific detection method name, such as **[Honeypot Spam Filter](https://docs.gravityforms.com/tag/honeypot/)** or **[Akismet Spam Filter](https://docs.gravityforms.com/tag/akismet/)**. Some notes also include a reason.

**Possible Honeypot Reasons**

| **Reason** |
| --- |
| Failed Honeypot Validation |
| The honeypot input is not empty |
| The version\_hash was not included in the submission |
| The wrong value was submitted for the version\_hash |
| The gform\_submission\_speeds input is empty or invalid |
| \[number\] of \[total\] submissions met the [speed check threshold](https://docs.gravityforms.com/form-settings/) (\[threshold\] ms). Min required: \[number: 1 or total depending on mode\]. All speeds (ms): \[all the recorded speeds\] |

[![Image showing Entry Notes with Speed Submission check and Honeypot Spam Filter validation.](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-51-1024x617.png)](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-51.png) Image showing Entry Notes with Speed Submission check and Honeypot Spam Filter validation.

### **Submission Speed Metabox**

If submission speed data is saved, a metabox labelled “Submission Speed” appears in the Entry Detail sidebar. It can be shown or hidden using the **Screen Options** tab.

[![Image showing Submission Speed metabox in the entry detail](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-50.png)](https://docs.gravityforms.com/wp-content/uploads/2025/10/image-50.png)

## What Happens After An Entry Is Marked As Spam

When an entry is marked as **Spam** during form submission by a compatible [anti-spam method](https://docs.gravityforms.com/spam/), configured feeds, notifications, and confirmations will not be processed.

[GF Spam Notification](https://gravitywiz.com/gravity-forms-spam-notification/), a free plugin by [certified developer](https://www.gravityforms.com/certified-developers-and-add-ons/) Gravity Wiz, can be used to send notifications for entries marked as spam during form submission.

[GF Feed Forge](https://gravitywiz.com/gravity-forms-spam-notification/), another free plugin by Gravity Wiz, can be used to manually trigger feed processing.

[Entry Automation](https://cosmicgiant.com/plugins/entry-automation/) by [certified developer](https://www.gravityforms.com/certified-developers-and-add-ons/) Cosmic Giant can be used to automatically send notifications or delete spam entries.

When an entry is manually marked as **Spam** from the [Entries List](https://docs.gravityforms.com/entries/) or [Entry Detail](https://docs.gravityforms.com/entry-detail/) pages, any feeds or notifications that were not _already processed won’t be triggered, since it_ is now a Spam entry.

## What Happens After An Entry Is Marked As Not Spam

When an Entry is marked as **Not Spam**:

- Add-on feeds (excluding Payment add-on feeds) **will** be processed.
- Payment add-on feeds **will not** be processed.
- **Notifications:** will not be processed. You can manually trigger them using the resend notifications feature on the [Entry Detail](https://docs.gravityforms.com/entry-detail/) page or in the bulk actions drop down on the [Entries](https://docs.gravityforms.com/entries/) page.

## Third-Party Anti-Spam Services

If the **Akismet** or **reCAPTCHA** add-ons are active, the connected service is notified whenever an entry is marked as Spam or Not Spam. This feedback helps train and improve the service’s detection filters.

* * *

_​ **Disclaimer**: Third-party se_ rvices, _plugins, or code snippets that are referenced by our Support documentation or in Support Team communications are provided as suggestions only. We do not evaluate, test or officially support third-party solutions. You are wholly responsible for determining if any suggestion given is sufficient to meet the functional, security, legal, ongoing cost and support needs of your project._

_Feedback, feature and integration requests, and other functionality ideas can be submitted on our [Gravity Forms](https://roadmap.forms.gravity.com/tabs/1-under-consideration/submit-idea), [Gravity Flow](https://roadmap.flow.gravity.com/tabs/1-under-consideration/submit-idea), or [Gravity SMTP](https://roadmap.smtp.gravity.com/tabs/15-under-consideration/submit-idea) product roadmap pages._

- Phone


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: November 5, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/reviewing-spam-submissions/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)