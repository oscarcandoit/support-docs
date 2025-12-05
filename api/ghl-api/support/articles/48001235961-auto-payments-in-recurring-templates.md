---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates
category: articles
type: article
scraped: 2025-10-28T15:58:21.445Z
title:  Auto Payments in Recurring Templates : LeadConnector 
status_code: 200
---

#  Auto Payments in Recurring Templates : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Payments, Invoices & Estimates](https://help.leadconnectorhq.com/support/solutions/48000454530) [Getting Started w/ Payments](https://help.leadconnectorhq.com/support/solutions/folders/48000682655)

## Auto Payments in Recurring Templates  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\# "Print this Article")

Modified on: Wed, 22 Mar, 2023 at 12:00 PM

* * *

Introducing Auto Payments in Recurring Templates: A Streamlined Solution for Billing

Managing customer payments can be a daunting task, especially when it comes to recurring invoices. But worry no more! With the auto payment feature in our recurring templates, you can ensure timely payments without the hassle of waiting for your customers to take action.

This innovative feature allows you to automatically deduct the invoice amount from your customer's credit card on the due date.

#### **Covered in this Article**

#### [**What does auto payment in a recurring template mean?**](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#What-does-auto-payment-in-a-recurring-template-mean?)

#### **[How to automatically charge the client?](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#How-to-automatically-charge-the-client?)**

#### **[What does Customer Card mean here?](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#What-does-Customer-Card-mean-here?)**

#### **[How will I get notified of auto payments?](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#How-will-I-get-notified-of-auto-payments?)**

#### **[What happens if auto-payment fails?](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#What-happens-if-auto-payment-fails?)**

#### **[How many times will payment be retried in case of failure?](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#How-many-times-will-payment-be-retried-in-case-of-failure?)**

#### **[What does automatically charging a saved card mean?](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#What-does-automatically-charging-a-saved-card-mean?)**

#### **[What does automatically charging a new card mean?](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#What-does-automatically-charging-a-new-card-mean?)**

#### [**How to end auto-payments on a recurring template?**](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates\#How-to-end-auto-payments-on-a-recurring-template?)

* * *

# What does auto payment in a recurring template mean?

Auto payments in recurring templates mean you don't have to wait for the customer to pay your invoice on time. The setting automatically deducts the invoice amount on the due date using the customer's credit card.

The card which must be used to deduct the auto payments on the invoice due date can be defined as

- Customer card \- Allows to automatically charge the customer on the same card used to make the first payment for the recurring template.

- Saved card \- If any saved cards exist for the end customer, locations can use that card to automatically charge the end customer on every due date for the recurring template.

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

Any failure to charge the amount from the selected card would notify the location user and the end customer. Any new card selected would be authorized with the minimum charge amount in the respective currency while scheduling the template.

Any card successfully added will also be saved for future purposes for the location user.

# How to end auto-payments on a recurring template?

Auto-payments can be ended on an ongoing recurring template by selecting the Manage Auto-payments option from the invoice builder, as shown below.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48242640177/original/Ofz7DZ8pfpvGRMTZWek3tfVv1UJzoSu9qA.png?1659457401)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48242640177/original/Ofz7DZ8pfpvGRMTZWek3tfVv1UJzoSu9qA.png?1659457401)

This will open the Auto-payment scheduling modal with the toggle turned ON and the payment option selected. The location user can turn the toggle off to disable auto-payments from the next occurrence.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48245831218/original/1D6-aru93aKFHnuedU4CVieJX5PT17utCA.png?1660737284)

Can I turn on auto payments in an ongoing recurring template?

Yes, auto-payments can be turned ON on an ongoing recurring template using the manage auto-payments option in the builder.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48242640181/original/ZHrH2tOucpRTfouEBosgRkSJRrGgALK_tA.png?1659457401)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48242640181/original/ZHrH2tOucpRTfouEBosgRkSJRrGgALK_tA.png?1659457401)

This will open the auto-payment modal with the toggle turned off. The location user can turn the toggle on and select the desired payment option from the customer, saved or new card.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001235961-auto-payments-in-recurring-templates*  
*Generated on: 2025-10-28T15:58:21.445Z*
