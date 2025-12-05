---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004887-workflow-action-send-documents-contracts"
title: " Workflow Action - Send Documents & Contracts : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004887-workflow-action-send-documents-contracts#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Documents & Contracts](https://help.gohighlevel.com/support/solutions/folders/155000001117)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004887-workflow-action-send-documents-contracts#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Documents & Contracts](https://help.gohighlevel.com/support/solutions/folders/155000001117)
6. Workflow Action - Send Documents & Contracts

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

# Workflow Action - Send Documents & Contracts

Modified on: Mon, 9 Jun, 2025 at 7:51 AM

If your organization has multiple salespeople but only one person responsible for sending out final contracts, you can now streamline the process using the **Send Documents & Contracts** action in Workflows.

By choosing to create contracts as _drafts_ rather than sending them directly, you can ensure that only the designated contract sender reviews and sends contracts.

## Why Use the “Create as Draft” Feature?

- **Centralized Review:** Only one person (or team) is responsible for reviewing and sending contracts, so you avoid confusion or accidental sends even after automated creation using templates.

- **Quality Control:** Based on a Sales staff action or end user's action such as completing a form or any other action, it would still trigger the workflow to prepare the document, but the final send occurs after a designated check from the Documents & Contracts section.


## Step-by-Step Guide

### 1\. Create or Edit Your Workflow

1. In your account, go to **Workflows** and select **New Workflow** or edit an existing one.

2. In the workflow builder, add a **Trigger**. Common triggers might include:

   - A new deal stage being reached.

   - A specific form being completed.

   - Opportunity status being updated.

### 2\. Add the “Send Documents & Contracts” Action

1. Click on **Add New Action**.

2. Select **Send Documents & Contracts** from the list of available actions.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915016/original/T6kB5IGg8ztRYsPFA_UkQlv2yUvCn0bPiw.png?1742899168)


### 3\. Configure the Action

1. **Action Name:** Give the action a meaningful name (e.g., “Draft Contract Creation”).

2. **From User:** Choose the user who will appear as the sender on the draft contract.

3. **Template:** Select the contract template you want to send to your contacts.

4. **Sending Mode:** Select **Create as Draft**. This ensures the document is generated but not immediately sent.


> **Tip:** If you have multiple salespeople creating deals, you can build your workflow to auto-generate draft contracts for each relevant contact or opportunity.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915077/original/s9YKy6McZuFUrBnHd3WhNedy0kVqb7tKMQ.png?1742899193)

### 4\. Save and Publish Your Workflow

- After configuring the details, click **Save Action**.

- Once you’re satisfied with the entire workflow, click **Publish**. Any contacts who enter this workflow will now trigger a draft contract to be created automatically.


```
Limitations & Workarounds

Workflows only evaluate the document/contract status at the moment the contact enters the workflow. If a contact enters on a trigger like “Document Sent”, and you later add a condition for “Status is Completed”, that branch logic will not update even if the document gets completed afterward.

This behavior is not dynamic — status updates outside the workflow are not tracked or re-evaluated.

If you need real-time responses based on document status, Create a second workflow triggered by events like Document Signed or Document Completed. Also, Route contacts in that second workflow using updated statuses.
```

## **Sending Out Draft Contracts**

After your workflow has created contracts in a draft state, the final sending responsibility lies with the designated person or team. Here’s how to send them:

1. **Navigate to Documents & Contracts:** In your account, go to the **Documents** or **Contracts** section.

2. **Locate Drafts:** You will see all drafted contracts.

3. **Review and Edit (If Needed):** Make any final edits or personalizations to the document.

4. **Send the Contract:** When you are ready, click **Send**. The contract will then be delivered to the contact, and you can track its status from there.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043915289/original/CsvIacGOTXHyQUbjfLVfzjbRS-fsFzmgBQ.png?1742899289)

## Frequently Asked Questions

1. **Can multiple people review draft contracts before sending?**

Yes. If you have a team approach to reviewing, any users with the necessary permissions can open and review the draft before it’s sent.

2. **Can I automate sending directly if I don’t need a review step?**

Absolutely. Under **Sending Mode**, choose “Send Directly” if you want the contract automatically sent without needing to go through the draft stage.

3. **Where can I see the status of my contracts?**

Go to **Payments >** **Documents** & **Contracts** . Each contract will show whether it is in Draft, Sent, or Completed status.


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

- [Workflow Action - Send Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000004887-workflow-action-send-documents-contracts)

## Related Articles

- [How to Create and Send Document or Contract Templates Automatically in a Workflow](https://help.gohighlevel.com/support/solutions/articles/155000001301-how-to-create-and-send-document-or-contract-templates-automatically-in-a-workflow)
- [Capture Feedback and Automate Follow-Ups With Decline Documents Feature](https://help.gohighlevel.com/support/solutions/articles/155000006304-capture-feedback-and-automate-follow-ups-with-decline-documents-feature)
- [Workflow Trigger - Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000001491-workflow-trigger-documents-contracts)
- [Documents & Contracts - Content Library](https://help.gohighlevel.com/support/solutions/articles/155000006763-documents-contracts-content-library)
- [How to automatically add an appointment date to a Contract?](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-)
- [2 in 1 Documents: Direct Invoice payments after signing](https://help.gohighlevel.com/support/solutions/articles/155000004063-2-in-1-documents-direct-invoice-payments-after-signing)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004887-workflow-action-send-documents-contracts)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004887-workflow-action-send-documents-contracts/hit)