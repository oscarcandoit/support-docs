---
url: "https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration"
title: " Setting up QuickBooks Integration : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Invoices & Estimates](https://help.gohighlevel.com/support/solutions/folders/155000000900)
6. Setting up QuickBooks Integration

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

# Setting up QuickBooks Integration

Modified on: Thu, 24 Jul, 2025 at 8:51 PM

### Learn how to use the 2-way integration between HighLevel and QuickBooks.     **TABLE OF CONTENTS**    - [More Tutorials From the Community](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration\#More-Tutorials-From-the-Community)    - [What does the QuickBooks integration do?](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration\#What-does-the-QuickBooks-integration-do?)    - [HighLevel -> QuickBooks](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration\#HighLevel--%3E-QuickBooks)   - [QuickBooks -> HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration\#QuickBooks--%3E-HighLevel) - [Integrate QuickBooks](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration\#Integrate-QuickBooks) - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration\#Frequently-Asked-Questions)

## How To Sync HighLevel With Quickbooks - YouTube                    [Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)       HighLevel    82K subscribers            [How To Sync HighLevel With Quickbooks](https://www.youtube.com/watch?v=C2z3lyalT1E)              HighLevel           Search    Watch later    Share    Copy link          Info    Shopping                          Tap to unmute                                               If playback doesn't begin shortly, try restarting your device.                                                                                                                                                                        More videos    \#\# More videos                                                                                                                                                                                                                                                                                                                    You're signed out    Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.    CancelConfirm                                Share  Include playlist                                  An error occurred while retrieving sharing information. Please try again later.                                          [Why am I seeing this?](https://support.google.com/youtube/answer/9004474?hl=en)                                [Watch on](https://www.youtube.com/watch?v=C2z3lyalT1E&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)                                                                                                       0:00                                                   0:00 / 1:27 •Live    •                    **More Tutorials From the Community**

[https://www.youtube.com/watch?v=\_\_c0gDVBLs0](https://www.youtube.com/watch?v=__c0gDVBLs0)

[https://www.youtube.com/watch?v=4QXRl3mArfY&feature=youtu.be](https://www.youtube.com/watch?v=4QXRl3mArfY&feature=youtu.be)

[https://www.youtube.com/watch?v=QKgJcLx5Q-A](https://www.youtube.com/watch?v=QKgJcLx5Q-A)

[https://www.youtube.com/watch?v=d1eLzPdUlYo](https://www.youtube.com/watch?v=d1eLzPdUlYo)

* * *

## **What does the QuickBooks integration do?**

### **HighLevel -> QuickBooks**

- Create customers in QB if they have activity in HL.

- When a payment is made inside HL (order form, subscriptions, membership checkouts, calendar payments), register sales receipts in QB (matches on contact email).

- When an invoice is marked as sent in HL, create an invoice in QB, also continue to sync updates from HL to QB
  - Invoice Number
  - Status (paid, voided, etc)
  - Issue Date
  - Due date
  - Contact (created in QBO if it's not already there)
  - Billing Email
  - Invoice Total Value
  - Invoice Amount Paid
  - Line item name
  - Discount and Taxes are adjusted against item price if its a US subaccount. For rest of regions, the get synced too.
- WILL NOT sync existing invoices, only new invoices created after the integration.

### **QuickBooks -> HighLevel**

- Brings existing contacts from QB to HL and continues to sync new contacts from QB to HL (can take up to 5 min).

- When QB shows a contact's 1st invoice paid in full (balance = $0), Send Review Request from HL ( [this can be turned on/off on the integration card](https://help.gohighlevel.com/en/support/solutions/articles/155000004140)).

- Import old invoices from QB to HL (if enabled during the initial connection). NOTE that changes made to those invoices in HL will NOT sync back into QB, also this WILL NOT create a loop where invoices imported from HL to QB get reimported back from QB to HL. No worries!

* * *

## **Integrate QuickBooks**

Navigate into your **settings > integrations >** Click on the **"QB Connect"** button > **Toggle** Import invoices to import previously created invoices -> Enable review automation if needed -> Connect & Login with your Quickbooks credentials. Make sure to accept all permissions.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205794/original/t-NSCN24iTBAxJtKp7bdSiPhYPuTGz2IUw.png?1740486845)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205847/original/kgVEp9J2EMkYJdBXGUnpPBrxCEzQbg4j0w.png?1740486899)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155042205863/original/69qmHXoZhm-QwkeZEWRWXswkurKTYuoI5w.png?1740486917)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48246309641/original/infKtXR42wNzjuuWi9H6fKN-cv9wk2pqEw.gif?1660914333)

### [![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053002807/original/5gWi-uatnXtrTwN_fTNrkaY3qZdIFwiSfA.png?1596831109)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48051767771/original/AjUCbIiZ8jyTm8yzWMSAh4PuJo6LzEPgnA.png?1596153551)

* * *

## **Frequently Asked Questions**

****Q: What does the QuickBooks integration do?****

The integration syncs all existing and new contacts created in QuickBooks into your CRM. It automatically sends a review request when a contact's first invoice is fully paid in QuickBooks (optional and can be toggled off). It registers sales receipts in QuickBooks for payments made in your CRM (e.g., order forms, subscriptions, membership checkouts, and calendar payments). Additionally, it creates and updates invoices in QuickBooks whenever an invoice is sent or updated in your CRM, ensuring seamless synchronization.

****Q: Will the integration sync existing QuickBooks invoices to my CRM?****

Yes—if you enable the “Import Invoices” toggle during the initial connection, all previously created QuickBooks invoices will be imported into your CRM. Please note: Any changes made to these imported invoices from Quickbooks within your CRM do not sync back to QuickBooks and vice versa.

If you do not enable it, the system only syncs new invoices created in your CRM to Quickbooks after the integration.

****Q: How does the integration handle customers that already exist in QuickBooks?****

If a customer already exists in QuickBooks with the same email address as used in the transaction, the integration updates the existing customer’s record. For sales receipts, it associates the transaction with the corresponding customer. If no matching email exists, a new customer record will be created in QuickBooks.

****Q: Are taxes and discounts included in synced invoices?****

Yes, the integration ensures that all synced invoices include total amounts, taxes, and discounts, providing seamless accounting synchronization.

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

- [How to Integrate Jobber with HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000005429-how-to-integrate-jobber-with-highlevel)
- [Automatic Review Request When Invoice Paid in Quickbooks](https://help.gohighlevel.com/support/solutions/articles/155000004140-automatic-review-request-when-invoice-paid-in-quickbooks)
- [Glossary](https://help.gohighlevel.com/support/solutions/articles/48001231169-glossary)
- [Shipping: How to Connect a Shippo Integration?](https://help.gohighlevel.com/support/solutions/articles/155000003109-shipping-how-to-connect-a-shippo-integration-)
- [Integrating Zoom with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002372-integrating-zoom-with-highlevel-calendars)
- [Reserve with Google Integration - Local Services Ads (LSA)](https://help.gohighlevel.com/support/solutions/articles/48001217374-reserve-with-google-integration-local-services-ads-lsa-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001153903-setting-up-quickbooks-integration/hit)