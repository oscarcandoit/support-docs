---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003536,"
title: " Workflow Trigger - Subscription : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003536,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Payments Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000000742)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003536,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Payments Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000000742)
6. Workflow Trigger - Subscription

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# Workflow Trigger - Subscription

Modified on: Thu, 19 Jun, 2025 at 2:44 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003536,#Overview)
- [Trigger Name](https://help.gohighlevel.com/support/solutions/articles/155000003536,#Trigger-Name)
- [Trigger Description](https://help.gohighlevel.com/support/solutions/articles/155000003536,#Trigger-Description)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003536,#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003536,#Example)

* * *

## Overview

The Subscription Trigger in GoHighLevel automates processes related to subscription status changes, enhancing workflow efficiency for businesses. This feature allows users to respond to key events in the subscription lifecycle.

* * *

## Trigger Name

Subscription

## Trigger Description

The Subscription Trigger activates workflows based on specific events such as:

- Creation of a new subscription for a customer.
- Transition of a subscription from trial to active status.
- Cancellation of a subscription.

This trigger enables businesses to set conditions based on subscription status changes or associated products, utilizing custom values from the Payments section for tailored automation.

* * *

## **How to Configure**

### **Access Triggers**

Navigate to the Automations section in your GoHighLevel dashboard. Once you are inside the workflow builder, Click on **"Add Trigger**. **"**

### **Select “Subscription” Trigger**

Under the Payments section, choose the Subscription trigger. This trigger allows you to run automation when a contact’s subscription status changes or when a new subscription is created through your payment platform.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047575727/original/oEAqDx5y42GtEH8tHiNCaKMl-vkFcmP4ww.png?1748856588)

### **Add Filters**

Use the Add filters option to apply conditions that narrow down which subscriptions should trigger the workflow. Filters help you specify criteria such as the product purchased or the status of the subscription (e.g., active, failed, trial). This is useful when you want the workflow to run only under certain circumstances rather than for all subscriptions.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047575769/original/Y4FVhl7-oiXSMpzlufHJQg6Eq0MxQkUxsA.png?1748856610)

### **Filter Options: Standard & Custom Fields**

This dropdown allows you to add conditional filters to refine when the Subscription trigger should activate. You can choose from two types of fields:

- **Standard Fields:** These are built-in options such as Global Products (the product associated with the subscription) and Status (e.g., Active, Expired, Failed). Filtering by these fields ensures that the workflow only runs when specific system-level conditions are met.

- **Custom Fields:** These are personalized fields that you or your team may have added to track specific details related to the subscription (e.g., membership tier, customer segment). Using custom fields allows for more tailored automation based on your unique business logic.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047575812/original/qa2p25hNspPq5WPkzyIHMTUe19uFdlZ39g.png?1748856630)

### **Global Products Filter**

The **Global Products** filter helps you trigger workflows based on the specific product tied to a subscription. You can choose from options like **Is**, **Is not**, **Is empty**, and **Is not empty** to include or exclude products. After selecting this filter, you’ll see a searchable dropdown to pick one or more products—ensuring the workflow runs only for those selected items. This allows for precise, product-specific automation.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047579165/original/AiNVjOdvjmtoIY9CGWnTVz7xbVF_y1NBtw.png?1748858448)

### **Status Filter**

The Status filter allows you to trigger workflows based on the current lifecycle stage of a contact’s subscription. This is useful for sending targeted emails, reminders, or internal alerts based on changes in payment or access status. You can apply logic using options like Is or Is not to either include or exclude subscriptions in certain states. This ensures workflows only execute when a subscription reaches the exact condition you define. Below are the available options in status filter :

- **Active:** The subscription is live and billing successfully. Workflows using this status typically handle fulfillment, onboarding, or access logic.

- **Canceled:** The subscription was manually or automatically canceled. This is ideal for triggering re-engagement campaigns or internal follow-up actions.

- **Expired:** The subscription ended at the completion of its billing term (not due to cancellation or failure). Useful for renewals or feedback collection.

- **Failed:** A payment attempt for the subscription failed. You might use this to trigger billing reminder emails or assign a task to your billing team. This is applicable in case of first payment failure for a subscription i.e. the subscription could not start or become Active even once.

- **Incomplete:** The user started the subscription process but didn’t complete it (e.g., abandoned cart during checkout). This is great for follow-up nudges or recovery flows.

- **Overdue:** Payment is past due, but the subscription is still technically active. Ideal for grace-period messaging or alerts. This is applicable in case of payments for a subscription that became 'Active' at least once i.e. the subscription's first payment was successful. This status is used when the 2nd or later payments for a subscription fail.

- **Scheduled:** A future-dated subscription that hasn’t started billing yet. Can be used to send onboarding or prep emails before activation.

- **Trial:** The subscription is currently in a trial phase. This is useful for sending nurture sequences or reminders before the trial ends.

- **Unpaid:** The subscription is active but has pending/missed payments. Use this to flag internal teams or prompt the user to update their payment method.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047575881/original/XYshklrHst1LzMBsVS_lCqJ-YJSMZSwI_g.png?1748856681)

### **Customize Actions**

Choose actions that should follow the trigger activation, such as sending emails, updating records, or notifying team members.

### **Save and Activate**

Once configured, save the trigger and ensure it is activated for it to function as intended.

* * *

## Example

A common use case for the Subscription Trigger is automating customer communication. For instance, when a customer’s subscription transitions from trial to active, an automated welcome email can be sent to enhance customer engagement and satisfaction. Similarly, if a subscription is cancelled, a follow-up email can be triggered to gather feedback or offer re-engagement incentives.

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [Workflow Trigger - Invoice](https://help.gohighlevel.com/support/solutions/articles/155000002835-workflow-trigger-invoice)
- [Workflow Trigger - Product Access Granted](https://help.gohighlevel.com/support/solutions/articles/155000003256-workflow-trigger-product-access-granted)
- [Workflow Trigger - Product Access Removed](https://help.gohighlevel.com/support/solutions/articles/155000003257-workflow-trigger-product-access-removed)
- [Workflow Trigger - Payment Received](https://help.gohighlevel.com/support/solutions/articles/155000003534-workflow-trigger-payment-received)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted)
- [Workflow Trigger - Subscription](https://help.gohighlevel.com/support/solutions/articles/155000003536-workflow-trigger-subscription)

## Related Articles

- [Workflow Trigger - Payment received](https://help.gohighlevel.com/support/solutions/articles/48001238334-workflow-trigger-payment-received)
- [Workflow Trigger - Product Access Removed](https://help.gohighlevel.com/support/solutions/articles/155000003257-workflow-trigger-product-access-removed)
- [Workflow Trigger - Product Completed](https://help.gohighlevel.com/support/solutions/articles/155000003258-workflow-trigger-product-completed)
- [Workflow Trigger - Payment Received](https://help.gohighlevel.com/support/solutions/articles/155000003534-workflow-trigger-payment-received)
- [Workflow Trigger - Custom Date Remimder](https://help.gohighlevel.com/support/solutions/articles/155000002674-workflow-trigger-custom-date-remimder)
- [Workflow Trigger - Coupon Code Expired](https://help.gohighlevel.com/support/solutions/articles/155000005661-workflow-trigger-coupon-code-expired)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003536,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003536-workflow-trigger-subscription/hit)