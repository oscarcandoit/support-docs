---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002377"
title: " Manage payment methods displayed with Stripe integration : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002377#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
4. [Getting Started w/ Payments](https://help.gohighlevel.com/support/solutions/folders/48000682654)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002377#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Getting Started w/ Payments](https://help.gohighlevel.com/support/solutions/folders/48000682654)
6. Manage payment methods displayed with Stripe integration

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

# Manage payment methods displayed with Stripe integration

Modified on: Wed, 26 Feb, 2025 at 4:18 AM

LeadConnector displays payment methods dynamically if business users have Stripe connected as their default payment provider for processing payments across the system.

The following payment methods are supported as of today

01. Cards
02. Apple Pay (requires registered domains)
03. Google Pay
04. ACH Direct Debit
05. Affirm (requires shipping address)
06. Klarna (requires shipping address)
07. AfterPay (requires shipping address)
08. Bancontact
09. Ideal
10. Sepa Direct Debit
11. Link (requires registered domains)
12. Amazon Pay
13. Revolut Pay - Popular in UK
14. CashApp
15. GrabPay - Popular in Malaysia
16. Zip - Popular in Australia
17. BACS Direct Debit - Popular in UK
18. BECS Direct Debit (AU) - Popular in Australia
19. FPX - Popular in Malaysia

We use different configurations with Stripe to display payment methods across different channels. And since there are more payment methods to be added here continuously, this help document outlines the steps to turn on/off specific payment methods as per use cases.

Sub-account users need to navigate to their Stripe dashboard for specifically turning on/off payment methods to display. Navigate to **Settings -> Connect -> Payment methods -> Your account** to see the list of payment methods activated by LeadConnector.

Remember to select LeadConnector configurations in the dropdown here since there can be more platforms your Stripe account is connected to. Refer to the image below

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025575985/original/Y7OzZ5caCjV5-gjd_uzyskEOA7oO3bNMyQ.png?1715000142)

Now, there will be 4 configurations available with LeadConnector here. This basically allows managing payment methods for 4 different kinds of channels that we provide on our end

1. **Invoice** \- Used for one time invoices or recurring invoices with auto payments turned off and Text2Pay links - **Cards, Apple Pay, Google Pay, ACH Direct Debit, Affirm, Klarna,AfterPay, Link, Amazon Pay and Revolut Pay turned on by default**
2. **InvoiceWithAutopayment** \- Used for recurring invoices with auto-payments enabled - **Cards, Apple Pay, Google Pay and ACH Direct Debit turned on by default**
3. **Store** \- Used for payment methods on online stores on websites - **Cards, Apple Pay, Google Pay, Affirm, Klarna, AfterPay, Link, Amazon Pay and Revolut Pay turned on by default**
4. **Default** \- Used everywhere else like 1-step and 2-step order forms, payment links, memberships and communities - **Cards, Apple Pay, Google Pay, **Link, Amazon Pay and Revolut Pay** turned on by default**

How to Configure BNPL for Invoices - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[How to Configure BNPL for Invoices](https://www.youtube.com/watch?v=uhOcZBriDa8)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=uhOcZBriDa8&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 1:44
•Live

•

Business users will be able to select a configuration and turn on/off specific payment methods from the list above. To turn off a specific payment method, select the right configuration followed by selecting the payment method and you will be seeing an option to turn it off

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155025607719/original/6YCi0V4l2LP-hbwcm77tUnWeNskDd9wcrA.png?1715062639)

How to Add New Payment Methods to Your Stripe Checkout - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[How to Add New Payment Methods to Your Stripe Checkout](https://www.youtube.com/watch?v=jJycB1uTAcI)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=jJycB1uTAcI&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 2:47
•Live

•

Keep a check on this help article to see the further updates for configurations and payment methods in each configuration. Some of the payment methods will be seen as blocked since those payment methods are yet to be enabled on our end to support in all connected accounts.

**Recurring Payments/Subscriptions**:

For viewing a particular payment method for Subscriptions, it should also be enabled in the

**Stripe Settings -> Payment Methods -> Billing Payment Methods** along with enabling them inside LeadConnector.

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038919075/original/idaHuzjpE5wT_30NFdU5wgl00T7vsuKO-A.png?1735220064)**

Business users are now able to offer additional payment methods across different channels like order forms, forms, invoices, payment links, online stores to customers.

This is available only for businesses using Stripe as a payment provider.

This helps in increasing conversions by offering payment flexibility to end customers across different geographies:

- IDeal - popular in Netherlands
- Bancontact - common payment method in Belgium
- Sepa Direct Debit - common payment method in European Union

All order and transaction details will be registered under the Payments menu as for a credit card payment. This includes the functioning of the existing Order Submitted and Payment received triggers, as well. This is a migratory change from Stripe's end and requires changes to propagate to all accounts over few days. So this might be already available for some accounts and in progress for others.

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913189/original/ZdFdxODhueL3GJ4rdLCQX6IrVVcGPIAgwA.jpeg?1735211541)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913187/original/mGJtDMETGdHwtu6OF-r4-tZyQIyxhUQYVQ.jpeg?1735211541)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913188/original/TlXQxpPWsrN2uGh5y6umtmbQohb_LbqUtA.jpeg?1735211541)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913190/original/1Go3DHoB3fE3AGNGGwrARSOYUtaFbT95Nw.jpeg?1735211541)

![image](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038913186/original/jOJjeD8jhUEUmyqqloDyQha_dGDOU0xGyQ.jpeg?1735211541)

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

- [How-to add Taxes Overview](https://help.gohighlevel.com/support/solutions/articles/48001224104-how-to-add-taxes-overview)
- [Using Apple Pay and Google Pay in order forms](https://help.gohighlevel.com/support/solutions/articles/48001229200-using-apple-pay-and-google-pay-in-order-forms)
- [Customize Email and SMS notifications for invoicing](https://help.gohighlevel.com/support/solutions/articles/48001236926-customize-email-and-sms-notifications-for-invoicing)
- [How to manage Refunds within the CRM?](https://help.gohighlevel.com/support/solutions/articles/48001238332-how-to-manage-refunds-within-the-crm-)
- [How to enable Sales Receipts for Order Form, Calendar and Invoice payments](https://help.gohighlevel.com/support/solutions/articles/155000000261-how-to-enable-sales-receipts-for-order-form-calendar-and-invoice-payments)
- [Selling products on order forms with available payment providers](https://help.gohighlevel.com/support/solutions/articles/155000000559-selling-products-on-order-forms-with-available-payment-providers)

## Related Articles

- [How to Use BNPL in Order Forms and Payment Links](https://help.gohighlevel.com/support/solutions/articles/155000003224-how-to-use-bnpl-in-order-forms-and-payment-links)
- [Supported Payment Providers & Methods by Product Area (What Works Where)](https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-)
- [Selling products on order forms with available payment providers](https://help.gohighlevel.com/support/solutions/articles/155000000559-selling-products-on-order-forms-with-available-payment-providers)
- [How to Manage Stripe Payment Methods inside HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000005164-how-to-manage-stripe-payment-methods-inside-highlevel)
- [ACH Debit payment method on invoices](https://help.gohighlevel.com/support/solutions/articles/155000000611-ach-debit-payment-method-on-invoices)
- [Bank-Only Transfers for Invoice Payments (SEPA & ACH)](https://help.gohighlevel.com/support/solutions/articles/155000004301-bank-only-transfers-for-invoice-payments-sepa-ach-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002377)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002377-manage-payment-methods-displayed-with-stripe-integration/hit)