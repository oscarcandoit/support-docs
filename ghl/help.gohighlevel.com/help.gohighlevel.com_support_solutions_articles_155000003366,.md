---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003366,"
title: " Workflow Action - Stripe One Time Charge : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003366,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Payments Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000756)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003366,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Payments Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000756)
6. Workflow Action - Stripe One Time Charge

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

# Workflow Action - Stripe One Time Charge

Modified on: Wed, 17 Sep, 2025 at 10:40 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003366,#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003366,#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003366,#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003366,#Action-Details)
  - [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003366,#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003366,#Example)
- [Suggested Triggers](https://help.gohighlevel.com/support/solutions/articles/155000003366,#Suggested-Triggers)
- [Additional Notes](https://help.gohighlevel.com/support/solutions/articles/155000003366,#Additional-Notes)

## Overview

The " **Stripe One Time Charge**" action allows you to trigger a one-time charge in Stripe for a fixed amount to a specific customer within your Stripe account. This action is useful for collecting payments without requiring recurring subscriptions or payment plans.

## Action Name

**Stripe One Time Charge**

## Action Description

This action triggers a one-time charge in Stripe for a set amount to a designated customer. It requires a valid Stripe Customer ID, amount, description, and currency to process the charge.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467636/original/PdJCwJ8ssxtID0-al7VwSXqM7w1dC1-GtA.png?1725821253)

### How to Configure

1. **Action Name:** Set a recognizable action name, such as "Stripe One Time Charge."
2. **Stripe Customer ID:** Enter or select the Stripe Customer ID for the customer to be charged.
3. **Description:** Provide a brief description of the charge (optional).
4. **Amount:** Enter the amount to charge the customer.
5. **Currency:** Select the appropriate currency for the transaction.

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Stripe Customer ID | The unique identifier for the Stripe customer to be charged | Yes |
| Description | A description of the charge (e.g., for tracking or notes) | No |
| Amount | The amount to be charged to the customer | Yes |
| Currency | The currency in which the amount will be charged | Yes |

## Example

A business could use this action to charge a customer for a single service, such as a one-time consultation fee of $150, with USD as the currency. After the payment is triggered, the amount will be processed through Stripe and linked to the specified customer’s account.

## Suggested Triggers

Here are some suggested triggers to use with the "Stripe One Time Charge" action:

1. **Form Submission**: Automatically charge a customer when they submit a form indicating that they are ready to make a purchase or request a service.
2. **Tag Added**: Trigger a one-time charge when a specific tag (e.g., “Ready to Purchase”) is added to the customer’s profile.
3. **Appointment Confirmed**: Charge customers automatically after confirming an appointment for services.
4. **Order Completed**: Trigger a charge when an order is marked as completed within your system.
5. **Email Link Clicked**: Automatically charge customers who click a payment-related link in an email.

## Additional Notes

- Make sure you have set up Stripe integration in your system before using this action.
- Ensure the Stripe Customer ID is valid to avoid charge failures.
- Use this action for one-time payments only. For recurring payments, consider other Stripe-related actions like subscriptions.

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

- [Workflow Action - Stripe One Time Charge](https://help.gohighlevel.com/support/solutions/articles/48001202784-workflow-action-stripe-one-time-charge)
- [Workflow Action - Stripe One Time Charge](https://help.gohighlevel.com/support/solutions/articles/155000003366-workflow-action-stripe-one-time-charge)
- [Workflow Action - Send Estimate](https://help.gohighlevel.com/support/solutions/articles/155000003705-workflow-action-send-estimate)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000004877-workflow-trigger-order-submitted)
- [Send Recurring Invoice action - Setup guide](https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide)

## Related Articles

- [Workflow Action - Stripe One Time Charge](https://help.gohighlevel.com/support/solutions/articles/48001202784-workflow-action-stripe-one-time-charge)
- [Recurring Invoices in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflow Trigger - Payment Received](https://help.gohighlevel.com/support/solutions/articles/155000003534-workflow-trigger-payment-received)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [One time Stripe Charge Action](https://help.gohighlevel.com/support/solutions/articles/48001151476-one-time-stripe-charge-action)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003366,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003366-workflow-action-stripe-one-time-charge/hit)