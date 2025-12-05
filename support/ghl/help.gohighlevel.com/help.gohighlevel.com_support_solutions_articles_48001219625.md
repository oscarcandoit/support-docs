---
url: "https://help.gohighlevel.com/support/solutions/articles/48001219625"
title: " Auto Payments in Recurring Templates : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001219625#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
4. [Invoices & Estimates](https://help.gohighlevel.com/support/solutions/folders/155000000900)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001219625#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Invoices & Estimates](https://help.gohighlevel.com/support/solutions/folders/155000000900)
6. Auto Payments in Recurring Templates

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

# Auto Payments in Recurring Templates

Modified on: Wed, 22 Mar, 2023 at 12:02 PM

Introducing Auto Payments in Recurring Templates: A Streamlined Solution for Billing

Managing customer payments can be a daunting task, especially when it comes to recurring invoices. But worry no more! With the auto payment feature in our recurring templates, you can ensure timely payments without the hassle of waiting for your customers to take action.

This innovative feature allows you to automatically deduct the invoice amount from your customer's credit card on the due date.

#### **Covered in this article:**

#### [**What does auto payment in a recurring template mean?**](https://help.gohighlevel.com/support/solutions/articles/48001219625\#What-does-auto-payment-in-a-recurring-template-mean?)

#### **[How to automatically charge the client?](https://help.gohighlevel.com/support/solutions/articles/48001219625\#How-to-automatically-charge-the-client?)**

#### **[What does Customer Card mean here?](https://help.gohighlevel.com/support/solutions/articles/48001219625\#What-does-Customer-Card-mean-here?)**

#### **[How will I get notified of auto payments?](https://help.gohighlevel.com/support/solutions/articles/48001219625\#How-will-I-get-notified-of-auto-payments?)**

#### **[What happens if auto-payment fails?](https://help.gohighlevel.com/support/solutions/articles/48001219625\#What-happens-if-auto-payment-fails?)**

#### **[How many times will payment be retried in case of failure?](https://help.gohighlevel.com/support/solutions/articles/48001219625\#How-many-times-will-payment-be-retried-in-case-of-failure?)**

#### **[What does automatically charging a saved card mean?](https://help.gohighlevel.com/support/solutions/articles/48001219625\#What-does-automatically-charging-a-saved-card-mean?)**

#### **[What does automatically charging a new card tell?](https://help.gohighlevel.com/support/solutions/articles/48001219625\#What-does-automatically-charging-a-new-card-mean?)**

#### [**How to end auto-payments on a recurring template?**](https://help.gohighlevel.com/support/solutions/articles/48001219625\#How-to-end-auto-payments-on-a-recurring-template?)

* * *

# What does auto payment in a recurring template mean?

Auto payments in recurring templates mean you don't have to wait for the customer to pay your invoice on time. The setting automatically deducts the invoice amount on the due date using the customer's credit card.

The card which must be used to deduct the auto payments on the invoice due date can be defined as

- Customer card \- Allows to automatically charge the customer on the same card which is used to make the first payment for the recurring template

- Saved card \- If any saved cards exist for the end customer, locations can use that card to automatically charge the end customer on every due date for the recurring template

- New Card \- Locations can also enter new card details to charge the customer on that specific card whenever an invoice is due in the recurring template


# How to automatically charge the client?

- Auto payments can be enabled on the recurring template while scheduling the template, as shown below.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48242859063/original/ITni0cQc1eUZ7DTw2wRWO4Yaa7guwqmH3g.png?1659534278)

# What does Customer Card mean here?

This option allows location users to charge the end customer from the card the customer uses to make the first payment in the recurring template. This will become applicable from the immediate next occurrence of the invoice irrespective of the invoice which is paid (can be the first, second, or n-th invoice)

For reference, if the customer makes the payment for the first time on the 4th invoice without paying the first three invoices, then auto-payment using that card would start from the 5th occurrence of the recurring template(if it exists)

# How will I get notified of auto payments?

- Notification will be sent to the location user and the end customer upon every success/failure instance of a child invoice in the recurring template.
- The end customer will also be notified before deducting the charge automatically. This notification will be sent "x" days in advance, defined in the recurring setting frequency.

- The payment will not be processed automatically if any child invoice is updated before deducting the auto-charge. The location user would be informed of the same via mail, and they should share the updated invoice with the end customer to avoid any lost recurring revenue.


|     |     |
| --- | --- |
| Case | Who should receive the email? |
| Auto payment failed | Receiver |
| Auto payment failed | Sender |
| Invoice payment success | Sender |
| Invoice payment success | Receiver |
| Auto-payment information | Receiver |
| Child invoice updated | Receiver |

# What happens if auto-payment fails?

- In case of auto-payment failure from the defined card, the end customer and invoice sender would be notified via mail.
- Suppose the end customer successfully pays via the same card or a new card upon notification. In that case, the new card will be updated to deduct auto-payment for all future occurrences.

- Else the payment would be retried two more times, after 24 hours gap of each try, for attempting to process the payment for the invoice. If the payment has not been processed, no further attempt would be made for this instance automatically, and the customer would be required to pay the invoice manually.


# How many times will payment be retried in case of failure?

In case of failure in deducting the charge automatically from the defined card, two auto retry attempts would be made after 24 hrs each from the first failure. If the payment is still not processed, the end customer must pay manually for the invoice.to pay for the invoice manually

# What does automatically charging a saved card mean?

This option allows location users to charge the end customer using one of the saved cards with the location user. Starting from the first occurrence, this would deduct the invoice amount from the selected saved card starting from the first occurrence.

Any failure to charge the amount from the saved card would notify the location user and the end customer. The saved card is not authorized while scheduling the template.

# What does automatically charging a new card mean?

This option allows location users to charge the end customer using new card details entered by the location user. Starting from the first occurrence, this would deduct the invoice amount from the desired card.

Any failure to charge the amount from the selected card would notify the location user and the end customer. Any chosen new card would be authorized with the minimum charge amount in the respective currency while scheduling the template.

Any card successfully added will also be saved for future purposes for the location user.

# How to end auto-payments on a recurring template?

Auto-payments can be ended on an ongoing recurring template by selecting the Manage Auto-payments option from the invoice builder, as shown below.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48242640177/original/Ofz7DZ8pfpvGRMTZWek3tfVv1UJzoSu9qA.png?1659457401)

This will open the Auto-payment scheduling modal with the toggle turned ON and the payment option selected. The location user can turn the toggle off to disable auto-payments from the next occurrence.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48245831218/original/1D6-aru93aKFHnuedU4CVieJX5PT17utCA.png?1660737284)

Can I turn on auto payments in an ongoing recurring template?

Yes, auto-payments can be turned ON on an ongoing recurring template using the manage auto-payments option in the builder.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48242640181/original/ZHrH2tOucpRTfouEBosgRkSJRrGgALK_tA.png?1659457401)

This will open the auto-payment modal with the toggle turned off. The location user can turn the toggle on and select the desired payment option from the customer, saved or new card.

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

- [Invoices - New revamped UI](https://help.gohighlevel.com/support/solutions/articles/155000004042-invoices-new-revamped-ui)
- [Bank-Only Transfers for Invoice Payments (SEPA & ACH)](https://help.gohighlevel.com/support/solutions/articles/155000004301-bank-only-transfers-for-invoice-payments-sepa-ach-)
- [How to Edit Recurring Invoices](https://help.gohighlevel.com/support/solutions/articles/155000004403-how-to-edit-recurring-invoices)
- [How to View Invoices and Download Receipts in the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000002354-how-to-view-invoices-and-download-receipts-in-the-mobile-app)
- [Setting up QuickBooks Integration](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration)
- [Editing of Payment Schedules and Partially Paid Invoices](https://help.gohighlevel.com/support/solutions/articles/155000004960-editing-of-payment-schedules-and-partially-paid-invoices)

## Related Articles

- [ACH Debit payment method on invoices](https://help.gohighlevel.com/support/solutions/articles/155000000611-ach-debit-payment-method-on-invoices)
- [Recurring Invoices in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows)
- [How to Create Invoices in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001208702-how-to-create-invoices-in-highlevel)
- [Customize Email and SMS notifications for invoicing](https://help.gohighlevel.com/support/solutions/articles/48001236926-customize-email-and-sms-notifications-for-invoicing)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000004877-workflow-trigger-order-submitted)
- [How to Edit Recurring Invoices](https://help.gohighlevel.com/support/solutions/articles/155000004403-how-to-edit-recurring-invoices)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001219625)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001219625-auto-payments-in-recurring-templates/hit)