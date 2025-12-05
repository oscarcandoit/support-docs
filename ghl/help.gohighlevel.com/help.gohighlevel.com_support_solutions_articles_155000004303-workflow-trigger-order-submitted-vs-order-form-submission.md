---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission"
title: " Workflow Trigger - Order Submitted vs Order Form Submission : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Opportunity Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000001338)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Opportunity Workflow Triggers](https://help.gohighlevel.com/support/solutions/folders/155000001338)
6. Workflow Trigger - Order Submitted vs Order Form Submission

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

# Workflow Trigger - Order Submitted vs Order Form Submission

Modified on: Tue, 3 Dec, 2024 at 3:03 PM

The difference between triggers for a submitted order form and a submitted order comes down to payment. If there is an order form submission, then there is one trigger. If there is order payment, then there is another trigger. If there is an order form and also payment then both can be triggered.

Each of these triggers is useful for different stages of the sales and marketing funnel in. The order submitted trigger would typically be used after a customer completes a purchase, while the order form submission trigger would be used earlier in the process, like capturing potential leads or gathering details for follow-up.

* * *

**TABLE OF CONTENTS**

- [Where To Find These Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission#Where-To-Find-These-Triggers)
- [Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission#Trigger---Order-Submitted)
- [Trigger - Order Form Submission](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission#Trigger---Order-Form-Submission)
- [Key Differences Between Order and Order Form Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission#Key-Differences-Between-Order-and-Order-Form-Triggers)

* * *

## **Where To Find These Triggers**

The Order Form Submission and Order Submitted triggers are in the Workflow Builder under Payments.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037341103/original/rMToiDblKmlcDM7EI6xuAAcNtIpFZ8pt2g.png?1732737641)

* * *

## **Trigger - Order Submitted**

[View the Trigger - Order Submitted article for more details.](https://help.gohighlevel.com/en/support/solutions/articles/48001228664)

This trigger is fired when an _actual order payment/transaction_ is placed in your system (such as when someone purchases a product).

- **Use Case:** It is generally tied to a payment transaction. When a customer completes a purchase, this trigger can be used to automate follow-up actions like sending order confirmation emails, updating CRM records, triggering SMS notifications, initiating delivery workflows, etc.

- **Example Workflow Actions:**
  - Send a "Thank you for your purchase" email.
  - Create an invoice or process payment.
  - Trigger a shipping process or notify the fulfillment team.

* * *

## **Trigger - Order Form Submission**

[View the Trigger - Order Form Submission for more details.](https://help.gohighlevel.com/en/support/solutions/articles/155000003253)

This trigger is fired when a customer submits a form that contains order information (but may not necessarily indicate a completed transaction). It’s more about the form submission itself rather than a finalized order.

- **Use Case:** Typically, this is used for lead capture or request-for-quote (RFQ) forms, where a person fills out order-related information, but no payment is made yet. This could also include "pre-order" forms or inquiries where the user is expressing interest or providing their details before they officially make a purchase.

- **Example Workflow Actions:**
  - Send an acknowledgment email or thank you for inquiry.
  - Notify a sales rep that a lead has filled out an order form.
  - Trigger a follow-up sequence to help close the sale.

* * *

## **Key Differences Between Order and Order Form Triggers**

- **Order Submitted**: Tied to an actual purchase or completed transaction, often with a payment component. This trigger doesn't care if there was an order form or not.

- **Order Form Submission**: Triggered by submitting a form that contains order details but does not necessarily mean a transaction has been completed (e.g., lead form or quote request). This trigger doesn't care if there was payment or not.

- **Available Values:** There are values related to the Order that are only available in the workflow if the Order Submitted trigger is present.

|     |     |
| --- | --- |
| Order Form Submission | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037688583/original/35KfRaIJNLEbYoWRlOQ1Hbqp1ZJUMbtgJw.png?1733246873) |
| Order Submitted | ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037688607/original/i35Aij96u0RTH-k5jfvfu83fUfeBT79IoQ.png?1733246930) |


- **Shopping Cart:** When the Order Submitted values are available, the Shopping Cart element added in the Email Template builder will automatically populate that templatewith the item details from the order.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037688926/original/JQLNpZGa7HKoBRgFL1iBOJyhAhS2wRxoog.png?1733247406)

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

- [Workflow Trigger - Opportunity Changed](https://help.gohighlevel.com/support/solutions/articles/155000000886-workflow-trigger-opportunity-changed)
- [Workflow Triggers - Opportunity Created](https://help.gohighlevel.com/support/solutions/articles/155000000887-workflow-triggers-opportunity-created)
- [Workflow Trigger - Stale Opportunities](https://help.gohighlevel.com/support/solutions/articles/155000002492-workflow-trigger-stale-opportunities)
- [Workflow Trigger - Pipeline Stage Changed](https://help.gohighlevel.com/support/solutions/articles/155000002493-workflow-trigger-pipeline-stage-changed)
- [Workflow Trigger - Opportunity status changed](https://help.gohighlevel.com/support/solutions/articles/155000003252-workflow-trigger-opportunity-status-changed)
- [Workflow Trigger - Order Form Submission](https://help.gohighlevel.com/support/solutions/articles/155000003253-workflow-trigger-order-form-submission)

## Related Articles

- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000003535-workflow-trigger-order-submitted)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/48001228664-workflow-trigger-order-submitted)
- [Facebook Conversions API Trigger in Workflows](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows)
- [Workflow Trigger - Order Form Submission](https://help.gohighlevel.com/support/solutions/articles/155000003253-workflow-trigger-order-form-submission)
- [Workflow Trigger - Form Submitted](https://help.gohighlevel.com/support/solutions/articles/155000002550-workflow-trigger-form-submitted)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004303-workflow-trigger-order-submitted-vs-order-form-submission/hit)