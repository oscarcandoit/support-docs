---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-"
title: " How to Display Business and Client Tax IDs on Invoices? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Invoices & Estimates](https://help.gohighlevel.com/support/solutions/folders/155000000900)
6. How to Display Business and Client Tax IDs on Invoices?

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

# How to Display Business and Client Tax IDs on Invoices?

Modified on: Tue, 11 Nov, 2025 at 5:21 AM

**TABLE OF CONTENTS**

- [Create Custom Fields and Values](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-#Create-Custom-Fields-and-Values)
  - [1\. Creating custom field called Tax ID which will be available to fill against every contact.](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-#1.-Creating-custom-field-called-Tax-ID-which-will-be-available-to-fill-against-every-contact.)
  - [2\. Creating custom value called VAT ID which will be a fixed text/number that can be filled within business details of the invoice](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-#2.-Creating-custom-value-called-VAT-ID-which-will-be-a-fixed-text/number-that-can-be-filled-within-business-details-of-the-invoice)
- [Customize the Invoice Layout](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-#Customize-the-Invoice-Layout)
- [Add the Tax ID for the Invoice Recipient](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-#Once-done,-Add-the-Tax-ID-for-the-Invoice-Recipient)

**Overview**

This article outlines how to configure your system to automatically include essential **Business Tax ID under your business details section and the client's Tax ID under the contact section** on every client invoice, ensuring compliance and clarity.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078344/original/tJfyvWx779RfJ4ddb1FuJqpIuERrP63fgA.png?1762859977)

The process is broken into two main stages:

1. **Data Setup:** You must first use **Custom Fields** to store your clients' individual Tax IDs and **Custom Values** to store your agency's Tax ID. This creates the required data points in your system.
2. **Layout Implementation:** The final step involves customizing the default **Invoice Layout** in your payment settings. You map the stored data—placing your **Business Tax ID** under the business details section and the client's **Tax ID** under the contact section.

By following this setup, your invoices will automatically pull and display both required identification numbers whenever they are present against the contact and in your custom values.

### **Create Custom Fields and Values**

#### **1\. Creating custom field called Tax ID which will be available to fill against every contact.**

- Go to **Settings** in the Left Pane.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057439390/original/i3vLobT_JyK9Ay2bxbXMeN_vD9YFjytHCw.png?1762173044)

- Under "Other Settings," click on **Custom Fields** and select **+Add Field**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057442015/original/iqZp9Fb_BzjYZeQlvyB6Iwc2o17zyprM3A.png?1762174242)

- Under "Text Input," select **Single Line** and click **Next**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443081/original/nRQ_Au4UnenfK-0LyH4GB18e0htD_R1eSA.png?1762174639)

- Input the **Name** as " **Tax ID**" or anything that you want to refer it as, and select " **Contact**" from both the **Object** and **Group** dropdowns. Click **Save**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443393/original/WGAI7cxzXzlKVWQ8cV8VzuvZ9RdwJjvWCg.png?1762174797)

#### **2\. Creating custom value called VAT ID which will be a fixed text/number that can be filled within business details of the invoice**

- Go back to **Settings**. Under "Other Settings," click on **Custom Values** and select **+Custom Value**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057443595/original/oMdD_mbVPJJ6UlO0zg-52WdtmgPPs4Odew.png?1762174926)
- Enter the **Name** and **Value** for your Tax ID and click **Create**.

In this case, **VAT ID: 1234**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447315/original/FU0vkBffuh-8T5Zw1jd_T5-7tVTB_BbTXg.png?1762176710)

### **Customize the Invoice Layout**

- Go back to **Payments** and select **Settings** under "Invoices & Estimates."

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447546/original/dfpkyRPBTYVSVuzPC_WTvvxXeWOWOnALjQ.png?1762176837)

- Under "Title, Terms and Layout," scroll down to **Invoice Layout** and click on **Customize Layout**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057447952/original/kI939SCDN8RF8bRu2okxAnyDGXybqnaF4A.png?1762177067)

- **For Business Tax ID:**
  - In the Layout tab, under **Business Information**, click on **+Add Custom Value**.
  - Select " **Business Tax ID**" from the dropdown menu.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057448506/original/H2kxaj-1Dq8A5W0QnnGiERbP5JlwLdG2Qg.png?1762177267)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057448973/original/9qmi0FvMzAbJe8-pocH2i6NMHgHq-pMMLw.png?1762177506)

- **For Contact Tax ID:**
  - In the Layout tab, under **Contact Information**, click on **+Add Custom Field**.
  - Select " **Tax ID**" from the dropdown menu.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057449628/original/vGD94XvisF9AqTIC1ADgB0CD00cGNM-p-Q.png?1762177773)

- Check the preview to confirm the details are visible and click **Save changes**.

### **Once done, Add the Tax ID for the Invoice Recipient**

- Go to **Contacts,** click on **Additional info** tab.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078523/original/QAVaWYu9KIRuJL1qef79KOdv_pSwOEfN0g.png?1762860040)

- Click on **TAX ID** and enter the contact's TAX ID and **save** it.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057688782/original/TOgvhFSGkjKD69lBNM0zQTiA80kz624Asg.png?1762411604)

- Click on **Actions** drop down, select **Create Invoice** within the Payments tab of contacts or you can go to Payments -> Create Invoice directly.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057688919/original/c07SeVUgn03Ke30oFeoICkhQI4-xbByppg.png?1762411775)

- Now you can find the **TAX ID (particular to the contact)** and Business Tax ID ( **VAT ID: 1234)** present in your Invoice.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058078616/original/VBpNdg36ZXyiENBAXxB7X2_n5qgmtanrBA.png?1762860100)

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

- [Editing of Payment Schedules and Partially Paid Invoices](https://help.gohighlevel.com/support/solutions/articles/155000004960-editing-of-payment-schedules-and-partially-paid-invoices)
- [How to Setup and Use International Automatic Taxes](https://help.gohighlevel.com/support/solutions/articles/155000005563-how-to-setup-and-use-international-automatic-taxes)
- [Tax Inclusive or Exclusive Pricing](https://help.gohighlevel.com/support/solutions/articles/155000004136-tax-inclusive-or-exclusive-pricing)
- [How-to add Taxes Overview](https://help.gohighlevel.com/support/solutions/articles/48001224104-how-to-add-taxes-overview)
- [How to send your first Invoice using Highlevel?](https://help.gohighlevel.com/support/solutions/articles/155000006908-how-to-send-your-first-invoice-using-highlevel-)
- [Common uses cases for Payments and Invoices](https://help.gohighlevel.com/support/solutions/articles/48001220600-common-uses-cases-for-payments-and-invoices)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006909-how-to-display-business-and-client-tax-ids-on-invoices-/hit)