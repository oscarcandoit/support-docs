---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-"
title: " How to automatically add an appointment date to a Contract? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Documents & Contracts](https://help.gohighlevel.com/support/solutions/48000453974)
4. [Documents and Contracts](https://help.gohighlevel.com/support/solutions/folders/155000000203)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Documents & Contracts](https://help.gohighlevel.com/support/solutions/48000453974)
   - [Documents and Contracts](https://help.gohighlevel.com/support/solutions/folders/155000000203)
6. How to automatically add an appointment date to a Contract?

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

# How to automatically add an appointment date to a Contract?

Modified on: Thu, 13 Nov, 2025 at 12:51 PM

When a client books a service (like a photography session or consultation), if sending a contract that includes the specific booking date where the client has to sign is a critical part of your process, this article explains how to automate this - whether you have a simple booking process or a more advanced opportunity pipeline.

### Objective & Challenge

**Your Goal:** You want a workflow to automatically send a contract that includes the client's specific appointment date and time as soon as they book.

**The Challenge:** You can't add an `{{appointment.start_time}}` merge tag directly into a contract template. The "Send Contract" action is designed to pull data from **Contact** or **Opportunity** fields, not directly from the appointment trigger itself.

**The Solution:** The solution is to use your workflow to **first, copy the appointment date** into a custom field (on the Contact or Opportunity), and **second, send the contract** that pulls from this new field.

### Prerequisites

Before building the workflow, you must have two things set up:

1. **A Custom Field to Store the Date:**

   - Navigate to **Settings** \> **Custom Fields**.

   - Click **Add Field** and select **Contact** (for the simple method) OR **Opportunity** (for the advanced method).

   - Set the **Field Type** to **Text**.

   - Name it clearly (e.g., " **Session Date**," " **Event Date,"** or " **Booking Date**").

   - Click **Save**.

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334458/original/2n_9jKIOgBkhoB0Mzn0d1iYyWNRKS9w8sA.png?1763055816)

     ![Select contact or opportunity](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334484/original/xEYltwdVZikd7IshUSTpm48cbM-ZcDS0kg.png?1763055844)
2. **An Updated Contract Template:**

   - Navigate to **Payments** \> **Contracts**.

   - Find and **Clone** your existing template (e.g., "Service Agreement - with Date") or Create a **New Template**.

   - Edit the template and add your new custom field variable:

     - For the Contact method: `{{contact.session_date}}`

     - For the Opportunity method: `{{opportunity.session_date}}`
   - **Save** the template.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334518/original/wQZcLx_fRh0ubqYc9mhSyY89wWtMRkJXuw.png?1763055919)





     \- Use contact custom field in the document template


     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334631/original/1_dsWBzgbpDKQE0qtcnIEFuYbkllbOu8TA.png?1763056087)

     -OR Use Opportunity custom fields \[ [Learn more](https://help.gohighlevel.com/support/solutions/articles/155000004039-documents-contracts-templates-with-opportunity-custom-values)\] if one contact can have multiple bookings

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334707/original/8e_ppnIBc1ubP87v0ayU6PqQj43wig-OXQ.png?1763056147)

### Workflow Configuration: Choose Your Method

Choose the method that best fits your business process.

### Method 1: The Simple "Contact" Workflow

This is the most direct method. It's perfect if you don't use an opportunity pipeline for your bookings and simply want to send a contract right after someone books.

1. **Set Your Trigger:**

   - Add a new workflow and select the **Customer Booked Appointment** trigger.

   - (Optional) Use the **Filters** to select the specific **In calendar** that should run this automation.

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058334985/original/DWmNdpQIEIVKOysA_cvKhqT_25FWJPuuAg.png?1763056350)
2. **Add the "Update Contact Field" Action:**

   - Click the **(+)** icon to add a new action.

   - Select **Update Contact Field**.

   - **Select Field:** Choose the **Contact** custom field you created (e.g., "Session Date").

   - **Select Value:** Click the **tag icon** and select **Appointment** \> **Start Time**. This copies the booking date into your contact's custom field.

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058335015/original/hDhXIMGYMBHgHghG-NnNVrgtfukDsrBndA.png?1763056380)
3. **Add the "Send Contract" Action:**

   - Click the **(+)** icon directly _under_ the "Update Contact Field" step.

   - Select the **Send Documents & Contracts** action.

   - In the **Template** dropdown, select the new, updated contract template you created in the "Prerequisites" step.

   - **Save** and **Publish** your workflow.

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058335021/original/6-RZG61WmSVkkfz-gPs_jAclYcYMQBPZYQ.png?1763056398)

### 4\. The sent contract will have the booking date prefilled

### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337366/original/_vuQPai2LAIbGQshgXUEvt_jzNy5pnz66g.png?1763059308)      Method 2: The Advanced "Opportunity" Workflow

This method is for businesses that already have an opportunity-based pipeline. It **finds an existing opportunity** for the contact and updates it with the booking date. You can also set up workflows where post booking, a new opportunity is created and within that information is filled.

1. **Set Your Trigger:**

   - Add the **Customer Booked Appointment** trigger, and filter for your specific **calendar**.

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337419/original/u5hswQQdTNXNSB2QKc57ZhSYbg6p81knXA.png?1763059442)
2. **Add the "Find Opportunity" Action:**

   - Click the **(+)** icon and select **Find Opportunity**.

   - Set `OPPORTUNITY TO BE FOUND` to **Most recently created opportunity**.

   - Add a **Field** filter: Select your custom field (e.g., **"Session Date"**) and set the condition to **"Is Empty"**. This ensures you only update opportunities that _need_ a date.

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337450/original/E7tIOWjVC6MUJ5nGqHf-bdsFggiQRjKd4A.png?1763059505)
3. **Add the "Update Opportunity" Action:**

   - On the **"Opportunity Found"** branch, click the **(+)** icon.

   - Select the **Update Opportunity** action.

   - **Add field** and select your **Opportunity** custom field (e.g., "Session Date").

   - For the value, click the **tag icon** and select **Appointment** \> **Start Time**.
4. **Add the "Send Contract" Action:**

   - Click the **(+)** icon directly _under_ the "Update Opportunity" step.

   - Select the **Send Documents & Contracts** action.

   - In the **Template** dropdown, select your updated **Opportunity**-based contract template.

     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337501/original/vGzr6KUhErXUipWSquvy1IbL61PtgYG6Tw.png?1763059540)
5. The sent contract will now have the booking date prefilled.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058337545/original/02Lk5tVrUuip5tokRCmxv89ExYiO_4lMeg.png?1763059627)


### Final Logic

Your workflow, whether using Method 1 or 2, must follow this logic:

1. **Trigger** (Appointment Booked)

2. **Update Field** (Contact or Opportunity)

3. **Send Contract** (Using the updated template)



**Troubleshooting Q&A:**

**-** **The contract was sent, but the date field is blank:** This could mean a few things-

1\. Your workflow order is wrong. The **Update Field** action (Contact or Opportunity) _must_ be placed **before** the **Send Contract** action.

    2\. If you are updating an opportunity then an opportunity should exist for the user who has made the booking. Else, create opportunity action should be used.



**\- The old contract was sent, without the new date field:** Go back into your **Send Contract** action and make sure you have selected your new, cloned template from the dropdown menu, not your old one.


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

- [How to use Documents & Contracts?](https://help.gohighlevel.com/support/solutions/articles/155000000594-how-to-use-documents-contracts-)
- [Documents & Contracts: Email Templates and Team Notifications Setup](https://help.gohighlevel.com/support/solutions/articles/155000001298-documents-contracts-email-templates-and-team-notifications-setup)
- [Automatically Generate Invoices from Signed Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000001299-automatically-generate-invoices-from-signed-documents-contracts)
- [Multiple recipient support on Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000001300-multiple-recipient-support-on-documents-contracts)
- [How to Create and Send Document or Contract Templates Automatically in a Workflow](https://help.gohighlevel.com/support/solutions/articles/155000001301-how-to-create-and-send-document-or-contract-templates-automatically-in-a-workflow)
- [Workflow Trigger - Documents & Contracts](https://help.gohighlevel.com/support/solutions/articles/155000001491-workflow-trigger-documents-contracts)

## Related Articles

- [Workflow Action - Set Event Start Date](https://help.gohighlevel.com/support/solutions/articles/48001202723-workflow-action-set-event-start-date)
- [Workflow Trigger – Service Booking (Services v2)](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-)
- [Workflow Action - Update Appointment Status](https://help.gohighlevel.com/support/solutions/articles/155000003364-workflow-action-update-appointment-status)
- [How to use Custom Values](https://help.gohighlevel.com/support/solutions/articles/48001161575-how-to-use-custom-values)
- [How to Create & Manage Appointment Notes & Sync them Across Records](https://help.gohighlevel.com/support/solutions/articles/155000003444-how-to-create-manage-appointment-notes-sync-them-across-records)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-/hit)