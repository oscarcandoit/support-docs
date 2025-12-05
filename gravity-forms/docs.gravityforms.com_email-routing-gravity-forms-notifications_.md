---
url: "https://docs.gravityforms.com/email-routing-gravity-forms-notifications/"
title: "Email Routing in Form Notifications - Gravity Forms Documentation"
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

# Email Routing in Gravity Forms Notifications

- [Introduction](https://docs.gravityforms.com/email-routing-gravity-forms-notifications/#h-introduction)
- [Configuration](https://docs.gravityforms.com/email-routing-gravity-forms-notifications/#h-configuration)
- [Troubleshooting](https://docs.gravityforms.com/email-routing-gravity-forms-notifications/#h-troubleshooting)

## Introduction

Within each Gravity Forms notification, you have the option of configuring additional routing. This is similar to conditional logic, in that different events can cause the notification to go to a different recipient. But unlike conditional logic, Routing can’t prevent the notification processing, it only provides the email address to be used for the Send To setting, therefore it’s important to make sure your routing rules will cover all the possible user choices to prevent scenarios where your routing setup doesn’t provide any email address and therefore the notification is processed with an empty value for the Send To.

In this article, we will show you how to configure routing options within your notification.

## Configuration

This short animation shows how to access and modify Notifications for a form.

1. First, start by accessing the notification that you want to configure additional routing for. This can be done by accessing the form associated with the notification, hovering over **Settings**, clicking on **Notifications**, and then accessing the notification you want to manage. If you want to create a new notification, simply click the **Add New** button.
2. Within the settings for your notification, you will see an option labeled **Send To**. If you select **Configure Routing**, additional options similar to conditional logic will appear.
3. Inside the routing configuration, the first thing you will need to do is determine where the notification will be sent if the routing condition is met. Simply enter the email address of the user that you want to send the notification.
4. Next, you’ll need to configure the field that the routing condition will use. To do so, use the dropdown box to select the field that the condition will be based on.
5. Now that the field is selected, you’ll need to set the operator used to compare the field and value. For example, if you only want to send this notification if a particular radio button is checked, you would select _is_ within the operator dropdown. Conversely, if you do not want a notification to be sent when that radio button field is selected, you would use **is not**.
6. Finally, you’ll need to set the value that will be used to compare against the field submission result. If using pre-selected options, this will appear as a dropdown. If the field is something like a text field where the user will enter their own value, the condition value will appear as a text box. Within the condition value, enter the value to compare with the submission.
7. If you want to add additional conditions or remove a condition, use the _+_ and _–_ icons to the right of the condition item to either add or remove it.

You can now continue configuring your notification as seen fit.

## Troubleshooting

If Routing rules are not working as you expected there is a high likelihood that you’re facing one of the following:

[![Email Routing in Gravity Forms Notifications - Errors](https://docs.gravityforms.com/wp-content/uploads/2021/06/CleanShot-2021-06-02-at-17.51.20.png)](https://docs.gravityforms.com/wp-content/uploads/2021/06/CleanShot-2021-06-02-at-17.51.20.png)

1. **You added or modified field values after configuring Routing**. Routing rules are based on existing values when you saved them, if you use a choices field like a Drop Down for your Routing rules, and you change any of these field choices after configuring Routing, you need to update your Routing rules to select the new or modified choice(s) and save your notification settings. It doesn’t matter if you just changed a single character, any change done to choices used in your Routing rules matters. The following screenshot shows an example of an outdated Routing rule, when it was configured the choice selected was **Jim**, but currently, that choice no longer exists, the Drop Down was edited and Jim was replaced by **Samuel,** therefore, the Routing rule will not work.
2. **Your routing rules are not covering all the possible user selection**. If your Routing rules are based on a drop down that has three choices, but you only have Routing rules added for two of the choices, the notification will fail when the user selects the third choice without a matching Routing rule.


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

[Algolia](https://docs.gravityforms.com/email-routing-gravity-forms-notifications/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)