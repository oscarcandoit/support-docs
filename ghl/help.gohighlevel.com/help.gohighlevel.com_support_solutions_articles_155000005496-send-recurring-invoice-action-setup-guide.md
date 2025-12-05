---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide"
title: " Send Recurring Invoice action - Setup guide : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Payments Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000756)
6. Send Recurring Invoice action - Setup guide

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

# Send Recurring Invoice action - Setup guide

Modified on: Thu, 24 Jul, 2025 at 6:07 AM

Automate your billing by embedding a Send Recurring Invoice action into any workflow.

Below is a step-by-step guide —to configure every detail, including Action Date behavior, start/stop rules, frequency, and auto-payment.

## Prerequisites

- You’ve created at least one Invoice Template in your Invoices area.

- A payment gateway (Stripe, PayPal, etc.) is configured.


## How to use?

## 1\. Add the “Send Recurring Invoice” Action

1. In the Workflow Builder, click the “+” connector where you’d like invoices to begin.

2. In the Actions sidebar, search for invoice.

3. Select Send Recurring Invoice.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398092/original/B5OJ-XQo28oPGlSzqkjeIjIcN3IaaZtyIA.png?1750162732)

## 2\. Configure Basic Settings

|     |     |
| --- | --- |
| Field | Description |
| Action Name | Rename from “Send Recurring Invoice” to something descriptive (e.g. “Monthly Membership”). |
| From User | Choose which user/profile the invoice is sent “from.” |
| Invoice Template | Pick your pre-built template. |
| Payment Mode | Toggle Live (real charges) or Test (sandbox mode). |
| Channel | Select the Channel (Email, SMS, or Email & SMS) for delivery of the Invoice |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398090/original/PzWKoNnro5Erbw67F_3zVWwMZKpIGtFK-A.png?1750162731)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050367029/original/1JNRaYEEEDfschid7uCtCF2chiXqm7v5oA.png?1753355239)

## 3\. Start Date Options

### A. Action Date

- Definition: Uses the date when the contact enters this step (e.g. Contact Created, Form Submitted, Birthday Reminder). This sets the Recurring schedule's start date. The first Invoice can be sent immediately if Action Date is selected in all further settings.

- Behavior:

  - First invoice fires immediately (at enrollment) or on the next business cycle depending on your frequency.

  - Subsequent invoices follow the same calendar offset.

  - Note: Once start date is selected as Action Date -> Make sure to select Action Date in all further frequency settings like date, day of the week etc.
- Use When: You want each contact’s billing cadence tied to their trigger event (e.g. user signs up on June 5 → bills on the 5th of each subsequent month).


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398341/original/kwXclAMTFBhBSbEovC7U1ZmMryQOl2crIw.png?1750162864)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398091/original/rCXzMO0L4BF5Vnp0BhQpuzRpd2cliagMig.png?1750162732)

### B. Fixed Date

- Definition: Uses a specific calendar date you select (e.g. July 1, 2025).

- Behavior:

  - The Invoice schedule's start date is the chosen date, regardless of when the contact enters the workflow.

  - Contacts enrolled after the fixed date will receive their first invoice on the next scheduled run.
- Use When: You need everyone billed on a universal date (e.g. 1st of each month) and don’t care about individual signup dates.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398094/original/OzGZMmkZmkVPC3L7KKoMD0fqFsyNyKMj7Q.png?1750162732)

## 4\. End Criteria

|     |     |     |
| --- | --- | --- |
| Option | Configuration | Example |
| Never | Runs indefinitely until manually stopped. | Ongoing subscriptions. |
| After X Occurrences | Enter the total number of invoices to send (e.g. 12). | A 12-month course billing plan. |

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398093/original/yG_AXzM1WMxryG5eRM-aDehyOhWrIPyioQ.png?1750162732)

## 5\. Recurrence Frequency

1. Under How Often?, choose one of:

   - Daily

   - Weekly

   - Monthly

   - Yearly
2. Configure each frequency as follows:


### Daily

- Every X Day(s): e.g. every 4 days → enter “4.”


### Weekly

- Select Day of Week:

  - Action Date → the weekday of the trigger (e.g. if enrolled on a Tuesday → bills every Tuesday).

  - Specific Day → pick Monday, Tuesday, etc.
- Every X Week(s): e.g. every 2 weeks.


### Monthly

- Select Week of Month + Day of Week:

  - e.g. Second Wednesday of each month.
- OrAction Date → same day-of-month as enrollment (e.g. 15th).

- Every X Month(s): e.g. every 1 month.


### Yearly

- Select Month + Day: e.g. July 1.

- Every X Year(s): e.g. 1 (annual billing).


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398102/original/npHprZub6XACVulhAKepOYGKTIb7qpINuw.png?1750162733)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398098/original/ahKeP8uBEa5FEcBgGYeN4LJLV5vtNdyzHQ.png?1750162733)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398101/original/0i8VvrLbemxjRtaW_mPpDs47avQJ9-VM3Q.png?1750162733)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398105/original/FKuiiG8ebpdu7py4y2lDNZW05IxPHKeNOg.png?1750162734)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398103/original/HDXv1onzXt1KCybckF3i-9aHft-ZSkuV6A.png?1750162734)

## 6\. Enable Auto-Payment (Optional)

Toggle Enable Auto-Payment on if you want to automatically charge the customer’s saved card after the first successful payment. This is ideal for multi-payment subscriptions.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048398104/original/57DmYl0o-8LMKW0H64YfQJ9UN7YYBGRqQg.png?1750162734)

* * *

## 7\. Save, Test & Publish

1. Click Save in the upper-right corner.

2. Use Test Workflow to simulate enrollment and verify invoice timing.

3. Toggle Publish to activate.


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

- [Recurring Invoices in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows)
- [2 in 1 Documents: Direct Invoice payments after signing](https://help.gohighlevel.com/support/solutions/articles/155000004063-2-in-1-documents-direct-invoice-payments-after-signing)
- [Invoices - New revamped UI](https://help.gohighlevel.com/support/solutions/articles/155000004042-invoices-new-revamped-ui)
- [Create invoice templates and automatically send an invoice in a workflow using templates](https://help.gohighlevel.com/support/solutions/articles/155000001297-create-invoice-templates-and-automatically-send-an-invoice-in-a-workflow-using-templates)
- [How to Create Subscriptions & Invoices from Contact's Profile](https://help.gohighlevel.com/support/solutions/articles/155000004064-how-to-create-subscriptions-invoices-from-contact-s-profile)
- [Mobile: AutoPayment in Recurring Invoices](https://help.gohighlevel.com/support/solutions/articles/155000006095-mobile-autopayment-in-recurring-invoices)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005496-send-recurring-invoice-action-setup-guide/hit)