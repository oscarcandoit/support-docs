---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows"
title: " Automate Recurring Invoices in HighLevel Workflows : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Payments](https://help.gohighlevel.com/support/solutions/155000000067)
   - [Invoices & Estimates](https://help.gohighlevel.com/support/solutions/folders/155000000900)
6. Recurring Invoices in Workflows

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

# Recurring Invoices in Workflows

Modified on: Fri, 27 Jun, 2025 at 4:03 PM

Easily automate your recurring billing cycles in HighLevel by using the Send Recurring Invoice action in a workflow. Whether you manage memberships, agency retainers, or SaaS subscriptions, this native automation eliminates manual invoicing, keeps payments on schedule, and reduces the need for third‑party tools.

* * *

**TABLE OF CONTENTS**

- [What is Recurring Invoices in Workflows?](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#What-is-Recurring-Invoices-in-Workflows?)
- [Key Benefits of Recurring Invoices in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#Key-Benefits-of-Recurring-Invoices-in-Workflows)
- [Prerequisites](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#Prerequisites)
- [Recurring Invoice Configuration Settings](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#Recurring-Invoice-Configuration-Settings)
- [How to Set Up Recurring Invoices in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#How-to-Set-Up-Recurring-Invoices-in-Workflows)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows#Related-Articles)

* * *

# **What is Recurring Invoices in Workflows?**

Recurring Invoices in Workflows automates scheduled billing inside your workflows, allowing invoices to send automatically while you focus on customers. In the visual Workflow Builder you can set start dates, stop rules, frequencies, and Auto‑Pay—keeping cash flow predictable without manual effort.

* * *

## **Key Benefits of Recurring Invoices in Workflows**

Set up recurring invoices in just a few clicks and enjoy hands‑free billing, flexible schedules, and built‑in auto‑pay—all without 3rd party tools.

- **Time Savings:** save time by cutting out manual invoice creation and follow‑up

- **Flexible Cadence:** daily, weekly, monthly, or yearly schedules to fit any plan

- **Start‑Date Control:** begin at the contact’s trigger date or a fixed calendar date

- **Stop Rules:** choose never‑ending or end after X occurrences

- **Auto‑Pay:** charge a stored card automatically after the first successful payment

- **Error Reduction:** eliminates missed or duplicate invoices

- **Workflow Integration:** billing events stay in sync with tags, emails, and follow‑ups


* * *

## **Prerequisites**

Having the essentials in place ensures your recurring invoices run without a hitch.

- **Invoice Template:** Create at least one template in **Payments → Invoices**

- **Payment Gateway:** Connect Stripe (or another supported gateway) in **Payments → Integrations**


* * *

## **Recurring Invoice Configuration Settings**

The Send Recurring Invoice action is highly customizable. This section breaks down each option so you can tailor billing to fit any plan before you click Publish.

#### **Start Date Options**

The **Start Date** dropdown lets you choose when the schedule begins, ensuring invoices reach customers at the right moment.

- Action Date: begins the schedule as soon as the contact hits the workflow trigger (e.g., tag added or contact changed)

- Fixed Date: aligns billing with a specific calendar day (e.g., 1 July, 2025)


#### **End Criteria and Stop Rules**

The **Stop** dropdown controls when the schedule ends, preventing over‑billing or unintended charges.

- Never: continues until manually stopped

- After X Occurrences: perfect for installment plans (e.g., 12 monthly payments).


#### **Recurrence Frequencies**

The **Frequency** dropdown determines how often invoices repeat and displays extra selectors (e.g., weekday, month) based on your choice.

- Daily: every _N_ days—ideal for high‑frequency payments

- Weekly: send on a specific weekday or on the action date—great for weekly coaching

- Monthly: by date or by week (e.g., 2nd Wednesday)—common for memberships and retainers

- Yearly: choose month and day, every _N_ years—ideal for annual renewals


#### **Auto‑Pay**

Toggle **Enable Auto‑Payment** to charge it automatically after the first successful payment, streamlining collection.

- Gateway Requirement: currently supported with Stripe‑connected sub‑accounts

- First Invoice Must Succeed: card details are stored only after a successful manual payment


* * *

## **How to Set Up Recurring Invoices in Workflows**

Properly configuring the Send Recurring Invoice action takes only a few clicks. Follow the numbered steps below to automate billing without errors.

#### **Step 1:** Navigate to Workflow Builder

- From your HighLevel dashboard, navigate to **Automation → Workflows**

- Click the blue **+ Create Workflow** button in the top‑right corner to create a new workflow


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049011373/original/yFXCqMLZ1da5zLCe_gmAJVo9tSo_FkKRlA.png?1751055820)

#### **Step 2:** Add Your Workflow Trigger

- Within the Workflow Builder, click **\+ Add Trigger**.

- Choose a trigger then click **Save Trigger**.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049011420/original/SNjzL49ekAWIwxNzEbvuYxTHkNSAG8NXYA.png?1751055952)

#### **Step 3:** Insert the **Send Recurring Invoice** Action

- Click the **➕** directly beneath the trigger to add an action

- In the Action search bar, type **Send Recurring Invoice** and select it


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049011469/original/t6Imurq_oLV6Wcv2589mdSQqiAx9dkGi6Q.png?1751056024)

#### **Step 4:** Configure Action Settings

- Name the action so it’s easy to identify (e.g., “Monthly Retainer – Silver”)

- Select **From User** to choose the sender

- Pick an **Invoice Template**

- Toggle **Mode** to Test for trial runs or Live for real billing

- Under **Start Date**, choose Action Date or Fixed Date

- Under **Stop**, select Never or After X Occurrences

- Open the **Frequency** dropdown to pick Daily, Weekly, Monthly, or Yearly and adjust the interval options that appear

- Enter **Days in Advance** to send the invoice _N_ days before the due date

- Toggle **Enable Auto‑Payment** on to store the customer’s card after the first payment and charge subsequent invoices automatically


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049011721/original/RGEE_snKsuGkThmwOpDN7pP090MM6f9uAA.png?1751056997)

#### **Step 5:** Test and Publish

- Once the workflow has been setup, click the blue **Save** button in upper right corner

- At the top of the workflow, click **Test Workflow** to test the workflow

- When everything looks correct, toggle to **Publish** to activate the workflow


```
Tip: For a deeper dive into workflow navigation, see Workflow Builder Walkthrough
```

* * *

## **Frequently Asked Questions**

**Q: Do I need a payment gateway to send recurring invoices?**

Yes. Connect Stripe (or another supported gateway) before activating Auto‑Pay or sending invoices.

**Q: What happens if a customer’s card fails during Auto‑Pay?**

The invoice remains unpaid. Set up a workflow with a Payment Failed trigger to retry and notify the customer.

**Q: Will recurring invoices appear in the customer’s invoice history?**

Yes—all generated invoices are logged under the contact’s record.

**Q: Does the Live/Test toggle affect existing schedules?**

No. It only controls invoices created after the toggle change.

**Q: Can I send different templates based on contact attributes?**

Use conditional branches to add multiple Send Recurring Invoice actions with different templates.

* * *

## **Related Articles**

- [How to Create and Use Invoice Templates in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000001297)

- [Stripe Integration with HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000005073)

- [Workflow Builder Walkthrough](https://help.gohighlevel.com/en/support/solutions/articles/155000001254)

- [Triggers - Overview](https://help.gohighlevel.com/en/support/solutions/articles/48000982202)


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

- [Create invoice templates and automatically send an invoice in a workflow using templates](https://help.gohighlevel.com/support/solutions/articles/155000001297-create-invoice-templates-and-automatically-send-an-invoice-in-a-workflow-using-templates)
- [Workflow Trigger - Order Submitted](https://help.gohighlevel.com/support/solutions/articles/155000004877-workflow-trigger-order-submitted)
- [2 in 1 Documents: Direct Invoice payments after signing](https://help.gohighlevel.com/support/solutions/articles/155000004063-2-in-1-documents-direct-invoice-payments-after-signing)
- [Workflow Trigger - Payment Received](https://help.gohighlevel.com/support/solutions/articles/155000003534-workflow-trigger-payment-received)
- [Workflow Trigger - Payment received](https://help.gohighlevel.com/support/solutions/articles/48001238334-workflow-trigger-payment-received)
- [Workflow Action - Send Invoice](https://help.gohighlevel.com/support/solutions/articles/155000003494-workflow-action-send-invoice)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005627-recurring-invoices-in-workflows/hit)