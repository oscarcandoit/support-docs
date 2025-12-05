---
url: "https://docs.gravityforms.com/sending-notifications-subscription-actions/"
title: "Notifications for Subscription Actions - Gravity"
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

# Sending Notifications for Recurring Subscription Actions

- [Requirements](https://docs.gravityforms.com/sending-notifications-subscription-actions/#h-requirements)
- [Configuring Your Subscription Notification](https://docs.gravityforms.com/sending-notifications-subscription-actions/#h-configuring-your-subscription-notification)

At times, you may want to configure notifications so that users are notified when changing their subscription. This is especially useful for sending an email to a user when they start, cancel, or renew a subscription. In this article, we will show you how to send these notifications that occur when a recurring subscription is changed.

## Requirements

- Gravity Forms 1.9.12+
- Gravity Forms Authorize.Net Add-On 2.1.4+ or Gravity Forms PayPal Standard Add-On 2.6+ or Gravity Forms Stripe Add-On 2.0+
- Knowledge of creating a notification. See the article on [creating Gravity Forms notifications](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/) for more information.

## Configuring Your Subscription Notification

1. First, access your Gravity Forms notifications for the form that creates your subscriptions. To do so:
1. Click on **Forms** on the left side navigation menu.
2. Next, click on the form that is used for subscriptions.
3. On the top of the form editor, hover over **Form Settings** and click on **Notifications**.
2. Once within your notification options, click on **Add New** to create a new notification.

**Note**: You will need a separate notification for each subscription action.
3. Now that you are within the new notification, you will notice an option labeled **Event**. Inside this drop down, you will see that you can set events for items such as subscription cancellations, failed renewals, etc. For example, if you want an email to be sent each time a payment is added to a subscription, select the _Subscription Payment Added_ option.
4. Of course, notifications won’t do any good if they’re not sent to the correct person. You should also see a **Send To** option. To configure sending the notification to the customer, select the **Select a Field** radio button.
5. Upon selecting the the _Select a Field_ option, the **Send to Field** drop down will be displayed. From here, select the field that contains the customer’s email address.
6. From here, simply continue configuring your notification just as you would any other.

Your subscription notification has now been configured. Keep in mind that you will need to configure additional notifications for each event.

[![Image showing Notification Events](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-32-1024x410.png)](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-32.png)

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 2, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/sending-notifications-subscription-actions/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)