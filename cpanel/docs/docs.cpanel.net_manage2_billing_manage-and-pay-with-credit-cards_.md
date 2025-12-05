---
url: "https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/"
title: "Manage and Pay with Credit Cards | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Manage2](https://docs.cpanel.net/manage2/)
3. [Billing](https://docs.cpanel.net/manage2/billing/)
4. Manage and Pay with Credit Cards


[manage2](https://docs.cpanel.net/tags/manage2/) [billing](https://docs.cpanel.net/tags/billing/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#overview)

* * *

[Add a new card](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#add-a-new-card)

* * *

[Update or delete a card](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#update-or-delete-a-card)

* * *

[Make an immediate payment](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#make-an-immediate-payment)

* * *

[Setup an automatic recurring payment](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#setup-an-automatic-recurring-payment)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#overview)

* * *

[Add a new card](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#add-a-new-card)

* * *

[Update or delete a card](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#update-or-delete-a-card)

* * *

[Make an immediate payment](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#make-an-immediate-payment)

* * *

[Setup an automatic recurring payment](https://docs.cpanel.net/manage2/billing/manage-and-pay-with-credit-cards/#setup-an-automatic-recurring-payment)

* * *

## Manage and Pay with Credit Cards

Last modified: _2022 November 29_

* * *

## Overview

The _Manage and Pay with Credit Cards_ interface allows you to update an existing credit card, add new credit cards, modify recurring payments, or make an immediate payment.

Important:

- When you add a new credit card, Manage2 does **not** automatically initiate a card payment or configure automatic payments.
- Changes to your credit card configuration **only** take effect during the next monthly billing cycle.
- If you make changes to your credit card configuration **after** your monthly billing cycle date, you must initiate a one time payment.

## Add a new card

To add a new credit card, click _Add a New Card_ and enter the following information:

- _Card Name_ — The name for the new credit card. Use a name that allows you to easily identify the card.

- _Cardholder Name_ — The name of the cardholder, as it appears on the credit card.






Warning:




Do not enter the company’s name unless it also appears as the billing name on the credit card.


- _Card Number_ — The credit card’s number.

- _Expiration Date_ — The month and year of the credit card’s expiration date.

- _Billing Address_ — The card’s registered billing address. Manage2 uses your company billing address for each credit card by default.






Note:




To modify the billing address for the new card, click _Update Address_ and enter the information in the provided fields.



After you enter the new card information, click _Add Card_.

Important:

After you click _Add Card_, the _Add a New Card_ interface displays an error message window if there are any issues with the provided information.


## Update or delete a card

Note:

When a credit card listed on your account nears its expiration date, Manage2 will send an email that reminds you to update the credit card’s expiration date.


To update a card’s expiration date, billing address, or to delete the card, perform the following steps:

1. Click _Manage Card_ under the card’s expiration date.

2. Perform one of the following actions:
   - To update the expiration date, select a new date from the menus.
   - To delete the card, click _Delete Card_.





     Note:




     Manage2 will ask you to confirm that you want to delete the card before you can continue.


   - To update the billing address, click _Update Address_.
3. Click _Save Changes_.


## Make an immediate payment

Important:

Manage2 applies payments to your oldest invoice.


After you add a credit card to your account, perform the following steps to make a one-time payment:

1. Click _Make Immediate Payment_.

2. In the text box, enter the amount that you wish to pay.

3. If the listed billing address is incorrect, click on the _Update Address_ link to update the address before you make a payment.

4. Click _Submit Payment_.


## Setup an automatic recurring payment

Note:

Manage2 applies payments to your oldest invoice.


To configure an automatic payment, perform the following steps:

1. Click _Add New_ under the _Make Immediate Payment_ button.

2. Select the options for your new recurring payment with the following menus:
   - _When_ — Select the number of days before an invoice is due that you want the payment to occur from the menu.






     Note:




     We recommend that you select _3 days_ before the invoice due date. This allows you additional time to make a payment if the card does not process successfully.


   - _What_ — Select the type of charges that you want the payment to cover from the menu:
     - _All Charges_ — This includes the total balance due.
     - _Current Charges_ — This only includes the monthly service invoice and any other charges made since the last monthly service invoice.
     - _Past Due Charges_ — This only includes charges that are past due.
   - _Condition_ — Select what condition that will trigger the automatic payment to occur from the menu:
     - _monthly invoice is due_
     - _any invoice is due_


       Important:




       The _any invoice is due_ option activates the automatic payment even when reactivation fees or yearly licenses are due.
   - _How Much_ — Select the percentage of the invoice that you want to pay from the menu.

   - _Card Order_ — Specify the order in which the system will charge the credit card. A lower number represents a higher priority.






     Note:





- If the full balance is paid by a card with a lower priority number, then the higher-numbered card will not be charged.
- For example, Manage2 will not make any charges on a card with a priority of 2 if a card with a priority of 1 pays the full balance. If the card with a priority of 1 does not pay the full balance, Manage2 will charge the specified percentage of the amount that remains to the card with a priority of 2.
3. After you select the options for your new recurring payment, click _Add Recurring Payment_.


After you add a recurring payment you can view the payment schedule of the card with the _Show_ option. This displays the payment options, the next scheduled charge date, the invoice amount, and the option to modify or delete the recurring payment.

#### Additional Documentation

* * *

- [Account History](https://docs.cpanel.net/manage2/billing/account-history/)
- [Account History Tracker](https://docs.cpanel.net/manage2/billing/account-history-tracker/)
- [Make a PayPal Payment](https://docs.cpanel.net/manage2/billing/make-a-paypal-payment/)
- [Setup Automatic ACH Payment](https://docs.cpanel.net/manage2/billing/setup-automatic-ach-payment/)
- [Upload Forms](https://docs.cpanel.net/manage2/billing/upload-forms/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×