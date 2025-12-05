---
url: "https://docs.gravityforms.com/confirmations-and-notifications/"
title: "Confirmations and Notifications - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)  - [First Steps](https://docs.gravityforms.com/category/getting-started/first-steps/)
  - [Creating A Form](https://docs.gravityforms.com/category/getting-started/creating-a-form/)    - [Confirmations and Notifications](https://docs.gravityforms.com/confirmations-and-notifications/ "Confirmations and Notifications")
    - [Create a New Form](https://docs.gravityforms.com/create-a-new-form/ "Create a New Form")
    - [Fields Available for Forms](https://docs.gravityforms.com/form-fields/ "Fields Available for Forms")
    - [Using the Gravity Forms Template Library](https://docs.gravityforms.com/using-the-gravity-forms-template-library/ "Using the Gravity Forms Template Library")
    - [The Form Editor](https://docs.gravityforms.com/form-editor/ "The Form Editor")
    - [Form List Page](https://docs.gravityforms.com/edit-forms/ "Form List Page")
    - [Importing a Form](https://docs.gravityforms.com/importing-a-form-into-gravity-forms/ "Importing a Form")
    - [Access Your Form Settings](https://docs.gravityforms.com/access-your-form-settings/ "Access Your Form Settings")
    - [Exporting a Form](https://docs.gravityforms.com/exporting-a-form-from-gravity-forms/ "Exporting a Form")
  - [Adding A Form To Your Site](https://docs.gravityforms.com/category/getting-started/add-form-to-site/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Confirmations and Notifications

- [Overview](https://docs.gravityforms.com/confirmations-and-notifications/#h-overview)
- [Confirmations](https://docs.gravityforms.com/confirmations-and-notifications/#h-confirmations)
- [Default Confirmation](https://docs.gravityforms.com/confirmations-and-notifications/#h-default-confirmation)
- [Notifications](https://docs.gravityforms.com/confirmations-and-notifications/#h-notifications)
- [Default Notification](https://docs.gravityforms.com/confirmations-and-notifications/#h-default-notification)

## Overview

This article defines [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/) and [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/), compares use cases, and shows where to configure them.

## Confirmations

Confirmations define the response shown immediately after a successful form submission. Use them to show an on-page message, send the submitter to a WordPress page, or redirect to any URL (for thank you pages, tracking, or passing query strings).

Confirmations support merge tags for personalization and can use conditional logic so different users see different outcomes based on submitted values. Typical uses include showing a tailored success message, routing sales leads to product specific pages, or prepopulating a follow-up form via query strings.

### Default Confirmation

Every new form includes one default confirmation named **Default Confirmation**. After a successful submission, it shows a simple on-page success message. It always runs if no other confirmation conditions match and cannot be deleted or disabled. Conditional logic is not available by default.

In your WordPress Admin go to **Forms → \[Your Form\] → Form Settings → Confirmations**. The **Default Confirmation** will be in the list. Click its title to edit the message or switch to a Page/Redirect type.

**Default Confirmation in the Confirmations List.**

[![Image showing Gravity Forms Default Confirmation](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-11-1024x768.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-11.png)

**Edit Default Confirmation screen.**

[![Image showing Gravity Forms Default Confirmation](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-10-1024x768.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-10.png)

See the [Confirmations guides](https://docs.gravityforms.com/category/user-guides/confirmations/) and references for setup fundamentals, advanced options, and conditional routing.

- [Configuring Confirmations in Gravity Forms](https://docs.gravityforms.com/confirmation-type-page/)
- [Confirmations List Page](https://docs.gravityforms.com/confirmations-listing/)
- [Confirmations Settings Reference](https://docs.gravityforms.com/confirmations-settings-reference/)

## Notifications

Notifications send information after a form submission, most commonly via email to admins, submitters, or routed recipients. Configure message content with merge tags, attach uploaded files, and add query strings or UTM parameters for analytics.

Conditional logic lets you send different notifications (or none) based on submission data; email routing targets recipients by field values. Typical uses include admin alerts, user receipts, and payment lifecycle notices.

### Default Notification

New forms include a single **Admin Notification** that emails the WordPress admin address when submitting an entry. Its default is a subject: “New submission from {form\_title}” and a body containing the submitted fields via {all\_fields}. You can edit or replace it, or even disable it.

In your WordPress Admin go to **Forms → \[Your Form\] → Form Settings → Notifications**. You will see the **Admin Notification** in the list. Click its name to change recipients, subject, message, or to add additional notifications.

[![Default Notification in the Notifications List.](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-12-1024x768.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-12.png)

For step by step configuration, settings reference, and conditional logic examples, see the [Notifications documentation](https://docs.gravityforms.com/category/user-guides/notifications/).

- [Abandoned Form Notifications](https://docs.gravityforms.com/abandoned-form-notifications/)
- [Common Questions Regarding Notifications](https://docs.gravityforms.com/notifications/)
- [Configuring Notifications in Gravity Forms](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/)
- [Email Routing in Gravity Forms Notifications](https://docs.gravityforms.com/email-routing-gravity-forms-notifications/)
- [Gravity Forms Notification Events](https://docs.gravityforms.com/gravity-forms-notification-events/)

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 31, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/confirmations-and-notifications/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)