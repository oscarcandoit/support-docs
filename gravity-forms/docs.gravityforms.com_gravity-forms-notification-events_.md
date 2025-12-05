---
url: "https://docs.gravityforms.com/gravity-forms-notification-events/"
title: "Gravity Forms Notification Events - Gravity Forms Documentation"
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

# Gravity Forms Notification Events

- [What Are Notification Events?](https://docs.gravityforms.com/gravity-forms-notification-events/#h-what-are-notification-events)
- [Where Can I Find Notifications Events?](https://docs.gravityforms.com/gravity-forms-notification-events/#h-where-can-i-find-notifications-events)
- [Gravity Forms Notifications Events](https://docs.gravityforms.com/gravity-forms-notification-events/#h-gravity-forms-notifications-events)
- [Payment Add-On Events](https://docs.gravityforms.com/gravity-forms-notification-events/#h-payment-add-on-events)
- [Payment Authorized](https://docs.gravityforms.com/gravity-forms-notification-events/#h-payment-authorized)
- [Payment Completed](https://docs.gravityforms.com/gravity-forms-notification-events/#h-payment-completed)
- [Payment Refunded](https://docs.gravityforms.com/gravity-forms-notification-events/#h-payment-refunded)
- [Payment Failed](https://docs.gravityforms.com/gravity-forms-notification-events/#h-payment-failed)
- [Payment Pending](https://docs.gravityforms.com/gravity-forms-notification-events/#h-payment-pending)
- [Authorization Voided](https://docs.gravityforms.com/gravity-forms-notification-events/#h-authorization-voided)
- [Subscription Created](https://docs.gravityforms.com/gravity-forms-notification-events/#h-subscription-created)
- [Subscription Canceled](https://docs.gravityforms.com/gravity-forms-notification-events/#h-subscription-canceled)
- [Subscription Expired](https://docs.gravityforms.com/gravity-forms-notification-events/#h-subscription-expired)
- [Subscription Payment Added](https://docs.gravityforms.com/gravity-forms-notification-events/#h-subscription-payment-added)
- [Subscription Payment Failed](https://docs.gravityforms.com/gravity-forms-notification-events/#h-subscription-payment-failed)
- [Help Scout Add-On](https://docs.gravityforms.com/gravity-forms-notification-events/#h-help-scout-add-on)
- [Partial Entries Add-On](https://docs.gravityforms.com/gravity-forms-notification-events/#h-partial-entries-add-on)
- [Note](https://docs.gravityforms.com/gravity-forms-notification-events/#h-note)
- [User Registration Add-On](https://docs.gravityforms.com/gravity-forms-notification-events/#h-user-registration-add-on)
- [Creating Custom Notification Events](https://docs.gravityforms.com/gravity-forms-notification-events/#h-creating-custom-notification-events)
- [Salesforce Add-On](https://docs.gravityforms.com/gravity-forms-notification-events/#h-salesforce-add-on)

## What Are Notification Events?

Notification Events determine the specific conditions or triggers that activate a notification. These events are tied to key points in the form submission and entry processing lifecycle. When an event occurs, the associated notification is triggered.

## Where Can I Find Notifications Events?

When you create a Notification and your form is using features that add Events, you will find an Event drop-down with all the events enabled in your installation. Notification events can be added by add-ons or custom code, so your event options may differ from those shown here. Refer to [this](https://docs.gravityforms.com/category/getting-started/notifications-getting-started/) article for more information about creating Notifications.

[![Image showing available Notification events.](https://docs.gravityforms.com/wp-content/uploads/2024/11/image-30-1024x438.png)](https://docs.gravityforms.com/wp-content/uploads/2024/11/image-30.png)

## Gravity Forms Notifications Events

Several notification events are available within Gravity Forms and additional add-ons. In this article, we will outline the notification events that are available to you.

| Event | Description |
| --- | --- |
| **Form is submitted** | The **Form is submitted** notification event does exactly what it says – sends a notification when a form is submitted. This is the default notification sent if you do not have any selections available within your installed add-ons. |
| **Form is saved** | When using the _Save and Continue_ functionality on your form, this event becomes available. By using this event type, a notification will be sent any time a form is saved to be continued later. |
| **Save and continue email is requested** | This notification is sent each time an email containing the save and continue link is requested. Upon enabling _Save and Continue_ within your form settings, a notification for this event is automatically created. |
|  |  |

## Payment Add-On Events

### Payment Authorized

- PayPal Checkout Add-On
- Square Add-On
- Stripe Add-On

### Payment Completed

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- PayPal Payments Pro Add-On
- Square Add-On
- Stripe Add-On
- Authorize.Net Add-On
- Mollie Add-On

The **Payment Completed** notification event will send the notification when a **product and services** payment has successfully been completed.

This is not to be confused with the _Subscription Created_ event which will occur when a new subscription is created.

### Payment Refunded

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- Square Add-On
- Stripe Add-On
- Mollie Add-On

When a payment is refunded the **Payment Refunded** event will trigger a notification.

### Payment Failed

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- Square Add-On
- Stripe Add-On
- Mollie Add-On

If a payment fails after the entry creation, and the payment gateway reports the status change to your site, any notifications configured for the **Payment Failed** event will be triggered.

### Payment Pending

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- Stripe Add-On

If a payment is pending, a notification will be sent to notifications with the **Payment Pending** event type.

Remember that this notification only fires if you have your PayPal IPN correctly configured.

### Authorization Voided

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On

When a prior authorization has been voided, a notification will be sent to the notification methods with the **Authorization Voided** event type.

### Subscription Created

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- PayPal Payments Pro Add-On
- Stripe Add-On
- Authorize.Net Add-On

If you have a subscription configured, use the **Subscription Created** event type to send notifications when a **new subscription** is created.

### Subscription Canceled

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- PayPal Payments Pro Add-On
- Square Add-On
- Stripe Add-On
- Authorize.Net Add-On

If a subscription is canceled, notifications with the **Subscription Canceled** event type will be sent.

### Subscription Expired

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- PayPal Payments Pro Add-On
- Stripe Add-On
- Authorize.Net Add-On

If a subscription becomes expired, a notification will fire to any notifications with the **Subscription Expired** event type.

### Subscription Payment Added

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- PayPal Payments Pro Add-On
- Stripe Add-On
- Authorize.Net Add-On

Each time a payment is made **within a subscription**, the **Subscription Payment Added** notification event will be triggered.

### Subscription Payment Failed

**Available in:**

- PayPal Checkout Add-On
- PayPal Standard Add-On
- Stripe Add-On
- Authorize.Net Add-On

If an existing subscription payment fails, the **Subscription Payment Failed** notification will be sent.

## Help Scout Add-On

| Event | Description |
| --- | --- |
| **Conversation is created** | The **Help Scout Conversation Created** notification event will send a notification when a Help Scout conversation is created. |

## Partial Entries Add-On

| Event | Description |
| --- | --- |
| **Saved** | The **Saved** notification event will send a notification when a partial entry is saved for the first time. See note **1.** |
| **Updated** | The **Updated** event will send the notification when an update request for an existing partial entry is received. See note **2.** |

### Note

1. Note that this is different from the _Form is submitted_ event, or the **Updated** event in which the notification will fire for every partial entry update request.
2. Bear in mind that many update requests can happen until the user submits the form or leaves the page, and they are fired by the Heartbeat API even if there’s not any new data in the form fields, therefore **using this event can lead to multiple emails being sent**.

## User Registration Add-On

The following are the various notification events that are available when the User Registation add-on is being used.

| Event | Description |
| --- | --- |
| **Site is created** | The **Site is created** event will send a notification when a new site is created within a WordPress multisite installation. |
| **User is pending activation** | When a user is pending activation, the **User is pending activation** event can be used to send notifications when a user is added to the activation queue. |
| **User is activated** | The **User is activated** event is used to send notifications when a new user is activated on the site. |
| **User is registered** | Sends the notification when a user is registered on the site with the User Registration Add-On. |
| **User is updated** | Sends the notification when the user is updated with an “ **Update User**” User Registration Add-On feed. |
| **User pending activation deleted** | Sends the notification when the pending activation is deleted without being activated. Available with User Registration v4.4.4 and greater. |

## Creating Custom Notification Events

In addition to the default notification events, developers can create their own custom notification events using the [gform\_notification\_events](https://docs.gravityforms.com/gform_notification_events/) filter. Refer to [this](https://docs.gravityforms.com/gform_notification_events/) article for more information about using the filter.

## Salesforce Add-On

| Event | Description |
| --- | --- |
| **Salesforce Feed Failure** | The **Salesforce Feed Failure** notification event will send a notification when a Salesforce feed fails. |

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 2, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gravity-forms-notification-events/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)