---
url: "https://help.gohighlevel.com/support/solutions/articles/155000000611,"
title: " ACH Debit payment method on invoices : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000000611,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000000611,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Invoices & Estimates](https://help.gohighlevel.com/support/solutions/folders/155000000900)
6. ACH Debit payment method on invoices

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

# ACH Debit payment method on invoices

Modified on: Fri, 16 May, 2025 at 6:39 AM

ACH Direct Debit is now available as a payment method on invoices. This supports one-time invoices, Text2Pay links, and recurring invoices along with auto-payments

* * *

**TABLE OF CONTENTS**

- [What is the ACH Debit Payment Method on Invoices?](https://help.gohighlevel.com/support/solutions/articles/155000000611,#What-is-the-ACH-Debit-Payment-Method-on-Invoices?)
- [Key Benefits of the ACH Debit Payment Method on Invoices](https://help.gohighlevel.com/support/solutions/articles/155000000611,#Key-Benefits-of-the-ACH-Debit-Payment-Method-on-Invoices)
- [How to Set Up the ACH Debit Payment Method on Invoices](https://help.gohighlevel.com/support/solutions/articles/155000000611,#How-to-Set-Up-the-ACH-Debit-Payment-Method-on-Invoices)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000000611,#Frequently-Asked-Questions)

* * *

# **What is the ACH Debit Payment Method on Invoices?**

The ACH Debit Payment Method allows businesses to accept payments directly from customers' bank accounts through ACH (Automated Clearing House) transfers. This feature provides a seamless, cost-effective alternative to traditional credit card payments, especially for larger transactions. By integrating with Stripe, this payment method is available for invoices generated within your platform, enabling a streamlined payment experience for you and your customers.

With ACH Direct Debit, customers can authorize one-time or recurring payments directly from their bank accounts, ensuring reliable cash flow and reducing the dependency on manual payment reminders.

* * *

## **Key Benefits of the ACH Debit Payment Method on Invoices**

1. **Cost-Effective Payment Solution**: ACH transactions typically incur lower processing fees compared to credit card payments, helping businesses save on transaction costs.

2. **Enhanced Convenience for Customers**: Customers can make payments directly from their bank accounts without needing to use credit or debit cards, improving their payment experience.

3. **Seamless Integration with Stripe**: The integration ensures secure and compliant payment processing while enabling businesses to manage transactions and payment methods directly from their Stripe dashboard.

4. **Supports Large Transactions**: ACH payments are ideal for high-value transactions, as they bypass credit card limits and provide a secure mechanism for larger payments.

5. **Auto-Payment for Recurring Invoices**: Businesses can enable auto-payments for recurring invoices, ensuring timely payments without manual intervention.


* * *

## **How to Set Up the ACH Debit Payment Method on Invoices**

1. **Enable ACH Direct Debit in Stripe**:

   - Log in to your Stripe account.
   - Navigate to **Settings > Payment Methods** and ensure that ACH Direct Debit is enabled for your account.
2. **Integrate Stripe with Your Platform**:

   - In your platform, go to **Settings > Integrations**.
   - Click on the **Connect Stripe** button and follow the prompts to log in and link your Stripe account.
3. **Configure Payment Options for Invoices**:

   - When creating an invoice, select ACH Direct Debit as a payment method option.
   - If applicable, enable the **Auto-Payment** feature for recurring invoices.
4. **Send Invoices to Customers**:

   - Once the setup is complete, customers will see the ACH Debit option when viewing their invoices.
   - They can input their bank account details to authorize payments securely.
5. **Monitor Payments in Stripe**:

   - Use your Stripe dashboard to track ACH payments, resolve any failed transactions, and update customer payment details as needed.

* * *

## **Frequently Asked Questions**

**Q:****Are there any fees associated with accepting ACH Direct Debit payments through Stripe?**

Yes, Stripe applies specific fees for processing ACH Direct Debit payments, which differ from standard card transaction fees. For the most current pricing details, please refer to Stripe's official pricing page.

****Q: Can I use ACH Direct Debit for recurring invoices with auto-payments enabled?****

Yes, ACH Direct Debit can be used for recurring invoices with auto-payments enabled. When setting up a recurring invoice, you can enable auto-payments by toggling the auto-pay option during the invoice sending process. This allows subsequent payments to be automatically charged on scheduled payment dates.

****Q: How can I manage which payment methods are displayed to my customers on invoices?****

You can manage the payment methods displayed to your customers by configuring settings in your Stripe dashboard. Navigate to Settings > Connect > Payment Methods in Stripe, select the appropriate configuration (e.g., Invoice, InvoiceWithAutopayment), and enable or disable specific payment methods as desired.

****Q: What should I do if an ACH Direct Debit payment fails due to insufficient funds or other reasons?****

If an ACH Direct Debit payment fails, Stripe will notify you of the failure reason, such as insufficient funds or an invalid account number. It's advisable to contact the customer to resolve the issue, which may involve updating their bank account information or selecting an alternative payment method.

**Q: How can I save a customer’s ACH bank account for future payments?**

When a customer pays an invoice using ACH Direct Debit and selects auto-pay (if available), Stripe will securely store the bank account as a payment method on file for future use.

If auto-pay is not selected, you’ll need to use Stripe’s customer management features to manually save the bank account for reuse. You can also ask the customer to make a payment using a payment link that saves their bank account by default (e.g., recurring payment setup).

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

- [Manage payment methods displayed with Stripe integration](https://help.gohighlevel.com/support/solutions/articles/155000002377-manage-payment-methods-displayed-with-stripe-integration)
- [Bank-Only Transfers for Invoice Payments (SEPA & ACH)](https://help.gohighlevel.com/support/solutions/articles/155000004301-bank-only-transfers-for-invoice-payments-sepa-ach-)
- [Supported Payment Providers & Methods by Product Area (What Works Where)](https://help.gohighlevel.com/support/solutions/articles/155000006075-supported-payment-providers-methods-by-product-area-what-works-where-)
- [Common uses cases for Payments and Invoices](https://help.gohighlevel.com/support/solutions/articles/48001220600-common-uses-cases-for-payments-and-invoices)
- [Adding Processing Charges or Additional Fees to Customer Payments](https://help.gohighlevel.com/support/solutions/articles/155000005519-adding-processing-charges-or-additional-fees-to-customer-payments)
- [Apple Pay and Google Pay in invoices and Text2Pay links](https://help.gohighlevel.com/support/solutions/articles/155000000080-apple-pay-and-google-pay-in-invoices-and-text2pay-links)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000000611,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000000611-ach-debit-payment-method-on-invoices/hit)