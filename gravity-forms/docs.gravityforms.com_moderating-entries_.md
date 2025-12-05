---
url: "https://docs.gravityforms.com/moderating-entries/"
title: "Moderating Entries - Gravity Forms Documentation"
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

# Moderating Entries

- [What is Entry Moderation?](https://docs.gravityforms.com/moderating-entries/#h-what-is-entry-moderation)
- [Solutions](https://docs.gravityforms.com/moderating-entries/#h-solutions)
- [Gravity Forms Moderation Add-On](https://docs.gravityforms.com/moderating-entries/#h-gravity-forms-moderation-add-on)
- [Gravity Forms User Registration Add-On](https://docs.gravityforms.com/moderating-entries/#h-gravity-forms-user-registration-add-on)
- [Gravity Flow Approval Step](https://docs.gravityforms.com/moderating-entries/#h-gravity-flow-approval-step)
- [Fighting Spam](https://docs.gravityforms.com/moderating-entries/#h-fighting-spam)
- [Third-Party Resources](https://docs.gravityforms.com/moderating-entries/#h-third-party-resources)
- [Code Snippets](https://docs.gravityforms.com/moderating-entries/#h-code-snippets)
- [Field Validation](https://docs.gravityforms.com/moderating-entries/#h-field-validation)

## What is Entry Moderation?

Moderation is the process of reviewing form submissions before they are fully processed or published. This process helps ensure that only high-quality, relevant, or reviewed data passes on to your site or process flow. There are a number of moderation-style solutions that can be utilized (and, in some cases, combined) to offer an additional control layer over the data your form is collecting.

## Solutions

### Gravity Forms Moderation Add-On

While spam technologies help in most circumstances, there are still times when entries get through those spam filters because they are valid entries. The Moderation Add-On utilizes the power of the [Perspective API](https://www.perspectiveapi.com/), provided by Jigsaw and Google, using machine learning algorithms to analyze form submissions and filter undesirable language and inputs.

Refer to this [article](https://docs.gravityforms.com/setting-up-the-moderation-add-on) for more information about the Moderation Add-On.

### Gravity Forms User Registration Add-On

The **[User Registration Add-On](https://docs.gravityforms.com/download-install-user-registration-add-on/)** can moderate user sign-ups through the “ [User Activation](https://docs.gravityforms.com/creating-feed-user-registration-add/#h-additional-options)” feature. When set to “Manually” or “By Form Notification,” administrators or assigned users can review and manually activate user accounts after reviewing the form submissions. This is ideal for managing who gets access to your platform.

### Gravity Flow Approval Step

[Gravity Flow](http://gravityflow.io/) (by Rocketgenius, the makers of Gravity Forms) is an entire product suite and framework that **[Gravity Flow (Approval Step)](http://gravityflow.io/)**. The “Approval Step” lets you set up a formal approval process for submitted entries. Each entry can be routed through multiple steps where approvers can accept, reject, or provide feedback on submissions, ensuring they meet your criteria before being fully processed.

### Fighting Spam

[This article](https://docs.gravityforms.com/spam/) provides advice and recommends some tools for automatically detecting and filtering out spam submissions before they reach your moderation queue.

### Third-Party Resources

- [Gravity Forms OpenAI](https://www.gravityforms.com/blog/gravity-forms-openai-content-moderation/) by Gravity Wiz can be used to check if content from the form submission complies with [OpenAI’s content policy](https://beta.openai.com/docs/usage-policies/content-policy). See [How to Use Gravity Forms OpenAI for Content Moderation](https://www.gravityforms.com/blog/gravity-forms-openai-content-moderation/) on our blog.
- [Entry Automation](https://www.gravityforms.com/add-ons/entry-automation/) by CosmicGiant can be used to delete entries automatically if they meet certain criteria.
- [GravityView](http://gravitykit.com/) by GravityKit. The “Entry Approval” feature allows you to review and approve or reject submissions.

_​ **Disclaimer**: Third-party se_ rvices, _plugins, or code snippets that are referenced by our Support documentation or in Support Team communications are provided as suggestions only. We do not evaluate, test or officially support third-party solutions. You are wholly responsible for determining if any suggestion given is sufficient to meet the functional, security, legal, ongoing cost and support needs of your project._

_Feedback, feature and integration requests, and other functionality ideas can be submitted on our [Gravity Forms](https://roadmap.forms.gravity.com/tabs/1-under-consideration/submit-idea), [Gravity Flow](https://roadmap.flow.gravity.com/tabs/1-under-consideration/submit-idea), or [Gravity SMTP](https://roadmap.smtp.gravity.com/tabs/15-under-consideration/submit-idea) product roadmap pages._

## Code Snippets

Code snippets can be used in the theme `functions.php` file or using some customization plugins.

### Field Validation

The [gform\_field\_validation](https://docs.gravityforms.com/gform_field_validation) and/or [gform\_validation](https://docs.gravityforms.com/gform_validation) filters can be used to perform custom validation of field values.

- [Integrate with QuickEmailVerification API](https://docs.gravityforms.com/gform_field_validation/#11-email-validation-by-third-party-api)
- [Prevent submission based on a word list](https://docs.gravityforms.com/gform_field_validation/#h-18-prevent-submission-based-on-a-word-list)
- [Prevent submission if a URL is entered into Text or Paragraph fields](https://docs.gravityforms.com/gform_field_validation/#h-20-prevent-submission-if-a-url-is-entered-into-text-or-paragraph-fields)
- [Prevent submission of Cyrillic characters](https://docs.gravityforms.com/gform_field_validation/#h-21-prevent-submission-of-cyrillic-characters)

- Facebook


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 30, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/moderating-entries/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)