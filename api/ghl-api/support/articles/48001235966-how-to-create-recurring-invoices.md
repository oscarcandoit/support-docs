---
source: https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices
category: articles
type: article
scraped: 2025-10-28T15:58:23.898Z
title:  How to create recurring Invoices : LeadConnector 
status_code: 200
---

#  How to create recurring Invoices : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Payments, Invoices & Estimates](https://help.leadconnectorhq.com/support/solutions/48000454530) [Getting Started w/ Payments](https://help.leadconnectorhq.com/support/solutions/folders/48000682655)

## How to create recurring Invoices  [Print](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\# "Print this Article")

Modified on: Wed, 22 Mar, 2023 at 12:38 PM

* * *

You may have heard of the term "recurring billing/invoicing." It is a way for your customers to pay you automatically without manually entering their payment details whenever they buy something from you.

This can be very useful if you sell products on a subscription basis; you may want to send them an invoice every month or so for the amount due in advance.

This article will show you how to set up and use a simple recurring invoice.

#### **Covered in this Article:**

#### [**What is a recurring invoice?**](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#What-is-a-recurring-invoice?)

#### **[How to create a recurring invoice?](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#How-to-create-a-recurring-invoice?)**

#### **[Understanding Setting invoice frequency.](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#Understanding-Setting-invoice-frequency.)**

#### **[Status and action types in recurring templates.](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#Status-and-action-types-in-recurring-templates.)**

#### **[View sent invoices and their payment status.](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#View-sent-invoices-and-their-payment-status.)**

#### [**FAQ**](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#FAQ)

#### [What is being shown in the list view?](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#What-is-being-shown-in-the-list-view?)

#### [How can I get notified upon receiving payment on the invoice?](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#How-can-I-get-notified-upon-receiving-payment-on-the-invoice?)

#### [How to stop sending future invoices?](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#How-to-stop-sending-future-invoices?)

#### [Can I modify the price, discount, or taxes from the following occurrence?](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#Can-I-modify-the-price,-discount,-or-taxes-from-the-following-occurrence?)

#### [Can I change the frequency setting of an ongoing recurring invoice?](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#Can-I-change-the-frequency-setting-of-an-ongoing-recurring-invoice?)

#### [Which products can I add to recurring invoices?](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices\#Which-products-can-I-add-to-recurring-invoices?)

* * *

## **What is a recurring invoice?**

A recurring invoice can be scheduled in advance to send automatically to your customers who bought a recurring service/product. You want to schedule the invoices once and forget it! You!

**Please Note:**

```
We recommend using Stripe Connect with Invoices, in the event you do not wish to use Stripe Connect payments would need to manaully record.
```

## **How to create a recurring invoice?**

- Open the " **Invoices**" tab under the payments section.
- Select " **New Recurring Template**" by clicking New on the All Invoices or Recurring Templates page.

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735907/original/QtS3wqwEHqoT_6EUu0nFpLv8IFkKBdgapw.jpeg?1679505912)

## **Understanding Setting invoice frequency.**

The below table explains different cases of setting invoice frequency:

|     |     |
| --- | --- |
| ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735857/original/ldaYQ5AyOlFmyvy3QWsskGCCuusulsqZ5g.png?1679505898) | - The first invoice will be due on July 5, 2022<br>- The second invoice will be due on July 7, 2022<br>- Invoice generation would never stop automatically |
| ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735855/original/Ly1reGbwliZZnP2PwyPVA04NV-Jj_nlMpg.png?1679505897) | - The first invoice will be due on July 5, 2022<br>- The second invoice will be due on July 7, 2022<br>- The subsequent invoices would be due on the 9th, 11th, and 13th of July |
| ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735856/original/pHafBKITBs-XJLrExrwmf8aHo3-9YIliNA.png?1679505897) | - The first invoice will be due on July 5, 2022<br>- The second invoice will be due on July 7, 2022<br>- The subsequent invoices would be due on the 9th, and 11th of July<br>- No invoice will be due on July 12 |
| ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735860/original/EdyuRUf0i8btsP1qCJuI1ILAEpskrp4lgw.png?1679505898) | - July 5, 2022, is a Tuesday for reference<br>- The first invoice will be due on July 18 but has to be sent two days in advance, i.e., July 16, 2022i.e.<br>- The second invoice will be due on August 1, 2022, but will be sent two days in advance, i.e., July 30, 2022. i.e.<br>- Had July 5 been a Monday, the first invoice would be due on the same date, i.e., July 5, 2022, and would have been sent immediately. have been<br>- The second invoice would be due on July 19 and sent out two days in advance, i.e., July 17, 2022i.e. |
| ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735894/original/vJAvw1YTHipTcMMz8nfP1Ap6lD_hup9E9A.png?1679505909) | - The first invoice will be due on September 2 and would be sent 0 days in advance, i.e., on the same date.<br>- The second invoice would be due on November 2 and sent to the customer on the same day.<br>- The scheduling will be complete after sending out three invoices to the customer as specified in the settings. |
| ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735878/original/NbDHbm_ZLP02Hr6-VOOEUOTx-OxYGDKGaA.png?1679505905) | - If, in the above example, we want to send the first invoice starting from the next month itself but at an interval of 2 months only<br>- Simply selecting the start date as August 2 would work for the required logic.<br>- The scheduling will be complete after sending out three invoices to the customer as specified in the settings. |
| ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735885/original/O98liVR2ucGPu-D5cwufGyB6Q6OQABeXog.png?1679505906) | - Settings provide a solution if we want to send out the invoice to the customer on the first Monday of every month starting from the next month.<br>- The first invoice will be due on August 1 itself, given that August 1 is the first Monday in August.<br>- The invoices will be sent one day in advance.<br>- The logic also helps us end the process after the end of the year. This means the last invoice will be due on December 5, the first Monday of December.<br>- No further invoices will be due for the customer after December 5. |
| ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735883/original/52m84BWtfqwYV842vIm64dxhljoJHGA_Ew.png?1679505906) | - This frequency setting would allow us to send an invoice to the customer on the last date of December every year, i.e., December 31<br>- Invoice scheduling will end after sending out five invoices to the customer. |

## **Status and action types in recurring templates.**

|     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- |
| **Action / Status -->** | **Draft** | **Active** | **Scheduled** | **Canceled** | **Completed** |
| **Edit** | Yes | No | No | No | No |
| **View** | No | Yes | Yes | Yes | Yes |
| **Delete** | Yes | No | Yes | No\* | No\* |
| **End** | NA | Yes | Yes | NA | NA |

**Please Note:**

```
Cancelled and Completed invoices can be deleted only if no invoice has been sent out to the customer. Deleted recurring templates are not shown in the list view.
```

* * *

## **View sent invoices and their payment status.**

Users can click on Details as shown below to know the invoices sent and their status, which will open the invoices sent and their status as shown in the right panel.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735890/original/qZQsWzG-cn5bKBA60Yjqm6_5ScTbDudsTA.png?1679505907)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735901/original/a514hV51maZ8b-v0RlYKC7V0tF-whDo22A.png?1679505911)

There can be **four types** of invoices status possible here, which will also be shown in the form of tooltips above the icons:

- **Sent**: The invoice was successfully sent to the customer
- **Overdue**: The invoice was successfully sent on time but has still not been paid by the customer
- **Paid**: The customer has paid for the invoice
- **Not** Sent: There was a system error in delivering the invoice to the customer, and the invoice needs to be sent again.


The invoice statuses can also be checked inside the invoice builder once the recurring template is **Scheduled**, which will open the right panel similarly.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735900/original/Gm1tYzRJmADihVwWTajzsJjquktVkBm5Uw.jpeg?1679505910)

# ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735903/original/lHdJD3Fo3RV9Vz1ycBwxDL_UpQM2JIC3UQ.jpeg?1679505912)

* * *

## **FAQ**

### **What is being shown in the list view?**

The list shown on the Recurring Templates page represents the recurring templates created by the user, which are creating and sending individual invoices to the defined customer as per the frequency settings defined in them individually.

For simplicity, the list shows the parent invoice creator, which creates and sends out invoices per the frequency settings and customer details specified inside them. sends

### **How can I get notified upon receiving payment on the invoice?**

The table below shows the default notifications sent to the sender and receiver. The location user can create more such automation based on the invoice status(sent/paid) using invoice triggers in workflows.

# |     |     | | --- | --- | | **Case** | **Who should receive the email?** | | Invoice payment successful | Receiver | | Invoice payment failed | Receiver | | Invoice received | Receiver | | Invoice payment successful | Sender | | Invoice payment failed | Sender |

### **How to stop sending future invoices?**

Active or Scheduled recurring invoices can be stopped from sending out any future invoices from the Recurring Templates list page. Select the End option from the Actions dropdown and confirm the same as shown below:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735905/original/dzUvqif-nG1Y40t3olEN49BSDelm7DGdFA.jpeg?1679505912)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735904/original/T6B14Odaw5VUH66ofNs8al3YAXxt8JwY9A.jpeg?1679505912)

The user also has the option to end the recurring invoice from inside the invoice builder.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735877/original/A6A7DHh9E2VyCbIM1gw3QHAtc8Pdt0pqpQ.jpeg?1679505904)

### **Can I modify the price, discount, or taxes from the following occurrence?**

No, you can't change the price, discount, or taxes after you have scheduled the recurring invoice.

Although you can individually edit the sent-out invoice and send it over again to the customer for specific instances, there is no way to change this in automation.

### **Can I change the frequency setting of an ongoing recurring invoice?**

No, you can't change the frequency settings after you have scheduled the recurring invoice.

### **Which products can I add to recurring invoices?**

Only **one-time products(NOT subscriptions)** can be added to a recurring invoice. In the case of recurring products, the frequency needs to be defined inside the invoice frequency setting.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48288735902/original/dexdkPflmTagi2VtYYDWRiyrT5Cnbk7Ztw.png?1679505911)**

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/48001235966-how-to-create-recurring-invoices*  
*Generated on: 2025-10-28T15:58:23.898Z*
