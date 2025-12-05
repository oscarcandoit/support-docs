---
url: "https://help.gohighlevel.com/support/solutions/articles/48001225935,"
title: " Payments - What is listed on the Subscriptions page?  : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001225935,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
4. [Orders, Subscriptions, and Transactions](https://help.gohighlevel.com/support/solutions/folders/155000000902)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001225935,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Orders, Subscriptions, and Transactions](https://help.gohighlevel.com/support/solutions/folders/155000000902)
6. Payments - What is listed on the Subscriptions page?

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

# Payments - What is listed on the Subscriptions page?

Modified on: Tue, 22 Nov, 2022 at 8:19 AM

#### In this article, we will cover the subscription tab and how it works

Please head into **Payments** \> Then click on **Subscriptions**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48264662842/original/nYrVD0WunUATbEJp7ykfwC3_o7wD2W2VNA.gif?1669047414)

**Please Note:**

```
Only subscriptions created via funnel version 2 order forms are listed on the subscriptions page.

The ability to cancel subscriptions/initiate refunds will be added soon to manage subscriptions without heading to Stripe
```

* * *

#### **Covered in this article:**

- #### [What is listed on the Subscriptions page?](https://help.gohighlevel.com/support/solutions/articles/48001225935,\#What-is-listed-on-the-Subscriptions-page?%C2%A0)

- #### [What is listed in the subscription details?](https://help.gohighlevel.com/support/solutions/articles/48001225935,\#What-is-listed-in-the-subscription-details?)

- #### [What does the status of the subscription represent?](https://help.gohighlevel.com/support/solutions/articles/48001225935,\#What-does-the-status-of-the-subscription-represent?)

- #### [Will these subscription statuses remain in sync with Stripe / Paypal?](https://help.gohighlevel.com/support/solutions/articles/48001225935,\#Will-these-subscription-statuses-remain-in-sync-with-Stripe-/-Paypal?)

- #### [Will the subscriptions page contain the list of subscriptions that did not get created because of payment failure on the order form?](https://help.gohighlevel.com/support/solutions/articles/48001225935,\#Will-the-subscriptions-page-contain-the-list-of-subscriptions-that-did-not-get-created-because-of-payment-failure-on-the-order-form?)

- #### [What is not contained on the subscriptions page?](https://help.gohighlevel.com/support/solutions/articles/48001225935,\#What-is-not-contained-on-the-subscriptions-page?)


* * *

## What is listed on the Subscriptions page?

The list would contain all subscriptions created via 1-step or 2-step order forms in [**funnels version 2**](https://help.gohighlevel.com/en/support/solutions/articles/48001204903) mentioning:

- Payment Provider and Subscription id
- Customer details
- Source of subscription creation
- Date of creation
- Subscription amount
- Status of subscription

* * *

## What is listed in the subscription details?

- Payment provider details along with details of the source of subscription creation.
- Subsequent transactions happening in the subscription in case the subscription was created on Stripe

* * *

## What does the status of the subscription represent?

|     |     |     |
| --- | --- | --- |
| **Status** | **Stripe** | **Paypal** |
| Trial | trialing |  |
| Active | active | active |
| Canceled | canceled | canceled |
| Suspended |  | suspended |
| Failed | incomplete\_expired |  |
| Incomplete | incomplete, past\_due | approval pending, approved |
| Unpaid | unpaid |  |
| Expired |  | expired |

We have bucketed the status of the subscription in Stripe and Paypal according to the above mapping. Refer here to know what these status subscriptions mean in [Stripe](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses) and [Paypal](https://developer.paypal.com/docs/api/subscriptions/v1/#subscriptions_create)

* * *

## Will these subscription statuses remain in sync with Stripe / Paypal?

- **For Stripe,** the subscription status and payments received will remain in sync with what is happening in your Stripe dashboard. For example, if you cancel the subscription on Stripe, it will reflect as Canceled in your subscriptions list as well. All the upcoming payments received will also remain in sync with your Stripe dashboard.

- The subscription status will not remain in sync if the subscription was created on **Paypal.** Also, in case the subscription was created on Paypal, the subscription details will as of now not capture the upcoming payments as well. The subscription entry will get created though for you to track the subscriptions that got created via Paypal.

* * *

## Will the subscriptions page contain the list of subscriptions that did not get created because of payment failure on the order form?

No, in case the payment failed while making the first payment for the subscription while submitting the order form, it would not get registered on the subscriptions page. You can still track the contact as the contact will get created in both 1-step and 2-step order forms.

* * *

## What is not contained on the subscriptions page?

- Recurring templates created in the invoices section

- Subscriptions created inside the Memberships section

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

- [Payments - What is listed on the Subscriptions page?](https://help.gohighlevel.com/support/solutions/articles/48001225935-payments-what-is-listed-on-the-subscriptions-page-)
- [Subscription & Refund trigger for payments](https://help.gohighlevel.com/support/solutions/articles/155000002213-subscription-refund-trigger-for-payments)
- [Subscription Settings - Failed Payment Retries](https://help.gohighlevel.com/support/solutions/articles/155000004691-subscription-settings-failed-payment-retries)
- [Pause and Resume Subscriptions](https://help.gohighlevel.com/support/solutions/articles/155000004138-pause-and-resume-subscriptions)
- [Import Transactions and Orders using CSV files](https://help.gohighlevel.com/support/solutions/articles/155000005544-import-transactions-and-orders-using-csv-files)
- [How to Modify Existing Subscriptions](https://help.gohighlevel.com/support/solutions/articles/155000006066-how-to-modify-existing-subscriptions)

## Related Articles

- [What happens in case of a payment failure for a Subscription?](https://help.gohighlevel.com/support/solutions/articles/155000004507-what-happens-in-case-of-a-payment-failure-for-a-subscription-)
- [How to Create Subscriptions & Invoices from Contact's Profile](https://help.gohighlevel.com/support/solutions/articles/155000004064-how-to-create-subscriptions-invoices-from-contact-s-profile)
- [How to set up the NMI integration?](https://help.gohighlevel.com/support/solutions/articles/48001235741-how-to-set-up-the-nmi-integration-)
- [How to Manage Stripe Payment Methods inside HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000005164-how-to-manage-stripe-payment-methods-inside-highlevel)
- [Subscription Settings - Failed Payment Retries](https://help.gohighlevel.com/support/solutions/articles/155000004691-subscription-settings-failed-payment-retries)
- [Authorize.net integration for processing payments](https://help.gohighlevel.com/support/solutions/articles/48001231144-authorize-net-integration-for-processing-payments)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001225935,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001225935-payments-what-is-listed-on-the-subscriptions-page-/hit)