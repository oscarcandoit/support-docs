---
url: "https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/"
title: "Configuring Form Notifications - Gravity Forms Documentation"
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
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)    - [Configuring Notifications in Gravity Forms](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/ "Configuring Notifications in Gravity Forms")
    - [Notifications Settings Reference](https://docs.gravityforms.com/notifications-settings-reference/ "Notifications Settings Reference")
    - [Common Questions Regarding Notifications](https://docs.gravityforms.com/notifications/ "Common Questions Regarding Notifications")
    - [Troubleshooting Notifications](https://docs.gravityforms.com/troubleshooting-notifications/ "Troubleshooting Notifications")
    - [Resend Notifications](https://docs.gravityforms.com/resend-notifications/ "Resend Notifications")
    - [Email Routing in Gravity Forms Notifications](https://docs.gravityforms.com/email-routing-gravity-forms-notifications/ "Email Routing in Gravity Forms Notifications")
    - [Sending Notifications for Recurring Subscription Actions](https://docs.gravityforms.com/sending-notifications-subscription-actions/ "Sending Notifications for Recurring Subscription Actions")
    - [Abandoned Form Notifications](https://docs.gravityforms.com/abandoned-form-notifications/ "Abandoned Form Notifications")
    - [Gravity Forms Notification Events](https://docs.gravityforms.com/gravity-forms-notification-events/ "Gravity Forms Notification Events")
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Configuring Notifications in Gravity Forms

- [What Is A Notification?](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#h-what-is-a-notification)
- [Create a New Notification](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#h-create-a-new-notification)
- [Enter the Email Settings](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#h-enter-the-email-settings)
- [Set the Message and Subject](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#h-set-the-message-and-subject)
- [Resources](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#h-resources)
- [Settings Reference](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#h-settings-reference)
- [Creating A Customized Notification](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#h-creating-a-customized-notification)
- [Using Conditional Logic With The Notification](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/#h-using-conditional-logic-with-the-notification)

## What Is A Notification?

Notifications send information after a form submission, most commonly via email to admins, submitters, or routed recipients. Configure message content with merge tags, attach uploaded files, and add query strings or UTM parameters for analytics. See [Getting Started: Confirmations and Notifications.](https://docs.gravityforms.com/?p=45508)

## Create a New Notification

You will need to have a form created already. If you need to learn how to do so, you may review our article on [creating forms](https://docs.gravityforms.com/creating-a-form/).

1. In your WordPress Admin go to **Forms → \[Your Form\] → Form Settings → Notifications**.
2. A list of all notifications that exist for that form is displayed.

You will see the **Admin Notification** in the list. Click its name to change recipients, subject, message, or to add additional notifications.
3. To add a new notification, click the **Add New** button.
4. Pick a unique name for yourself to identify the notification. It is not displayed to the user, but for admin purposes.

**Animation showing how to access the Nonfirmations settings page for a form.**

## Enter the Email Settings

[![Notification Settings](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-22-1024x716.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-22.png)

5. **Sent To Email**.

This can be a [merge tag](https://docs.gravityforms.com/field-merge-tags/) for a field in your form: {Email:2}, a single email address, or multiple email addresses separated by a comma that all notifications for this form will be sent to, eg: `support@example.com` or `support@example.com,sales@example.com,ceo@example.com`

Refer to the [Notifications Settings Reference](https://docs.gravityforms.com/?p=45543) for more information about Send To options and configurations.
6. **From Name.**

When a notification email is sent, the **From Name** will be displayed as the sender. This can be set to a static value or dynamically generated with merge tags. In the screenshot above, the name field is populated dynamically from the form for useas the **From Name** in the notification **.** Click on **the merge tag icon {..}** to the right of the field, and click on the field that is used for the name.
The number in the merge tag is the value of the _field\_id_. Example: **{Single Line Text Field:4}** will select field ID 4. **{First Name:5.3}** will target the 3rd subfield of the field ID 5. For more information on merge tags, refer to [this article](https://docs.gravityforms.com/field-merge-tags/).

7. **From Email.**

This is the email address that is displayed as the sender when receiving the notification. It can be set to use the **{admin\_email}** (WordPress admin email) or a static email address. Always use a [valid from email](https://docs.gravityforms.com/troubleshooting-notifications/#use-a-valid-from-address) to prevent sending and deliverability issues.

## Set the Message and Subject

[![Image showing Notification Settings](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-24-1024x777.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-24.png)

8. **Subject**.

The subject defaults to the form title but can be customized. Merge tags may be inserted for dynamic content.
9. **Message**.

The message includes submitted form content by default. Users may change it and insert merge tags using the dropdown icon.

## Resources

### Settings Reference

Refer to the [Notifications Settings Reference](https://docs.gravityforms.com/?p=45543) for more information about Send To options and configurations.

### Creating A Customized Notification

See [Creating Customized Form Notification Emails](https://docs.gravityforms.com/creating-customized-form-notification-emails/)

### Using Conditional Logic With The Notification

Notifications support conditional logic, which allows specific conditions to determine whether a notification is sent. Once enabled, the conditions can be configured. For more details, see [Configuring Conditional Logic](https://docs.gravityforms.com/configuring-conditional-logic/).

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 2, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)