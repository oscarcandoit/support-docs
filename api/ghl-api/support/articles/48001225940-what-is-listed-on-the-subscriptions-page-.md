---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-
category: articles
type: article
scraped: 2025-10-28T15:57:46.670Z
title:  What is listed on the Subscriptions page? : LeadConnector 
status_code: 200
---

#  What is listed on the Subscriptions page? : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Payments, Invoices & Estimates](https://help.leadconnectorhq.com/support/solutions/48000454530) [Getting Started w/ Payments](https://help.leadconnectorhq.com/support/solutions/folders/48000682655)

## What is listed on the Subscriptions page?  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-\# "Print this Article")

Modified on: Tue, 22 Nov, 2022 at 8:18 AM

* * *

#### In this article, we will cover the subscription tab and how it works

Please head into **Payments** \> Then click on **Subscriptions**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48264672103/original/PM-Q1tEfaYOeSAG1SbNKL11NCEdQ7XmTkw.gif?1669049272)

**Please Note:**

```
Only subscriptions created via funnel version 2 order forms are listed on the subscriptions page.
The ability to cancel subscriptions/initiate refunds will be added soon to manage subscriptions without heading to Stripe
```

* * *

#### **Covered in this article:**

- #### [What is listed on the Subscriptions page?](https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-\#What-is-listed-on-the-Subscriptions-page?%C2%A0)

- #### [What is listed in the subscription details?](https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-\#What-is-listed-in-the-subscription-details?)

- #### [What does the status of the subscription represent?](https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-\#What-does-the-status-of-the-subscription-represent?)

- #### [Will these subscription statuses remain in sync with Stripe / Paypal?](https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-\#Will-these-subscription-statuses-remain-in-sync-with-Stripe-/-Paypal?)

- #### [Will the subscriptions page contain the list of subscriptions that did not get created because of payment failure on the order form?](https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-\#Will-the-subscriptions-page-contain-the-list-of-subscriptions-that-did-not-get-created-because-of-payment-failure-on-the-order-form?)

- #### [What is not contained on the subscriptions page?](https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-\#What-is-not-contained-on-the-subscriptions-page?)


* * *

## What is listed on the Subscriptions page?

The list would contain all subscriptions created via 1-step or 2-step order forms in **funnels version 2** mentioning:

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

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001225940-what-is-listed-on-the-subscriptions-page-*  
*Generated on: 2025-10-28T15:57:46.670Z*
