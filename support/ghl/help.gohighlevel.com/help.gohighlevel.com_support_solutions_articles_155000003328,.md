---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003328,"
title: " Goal Event Workflow Action in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003328,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000731)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003328,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000731)
6. Workflow Action - Goal Event

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

# Workflow Action - Goal Event

Modified on: Fri, 14 Nov, 2025 at 6:57 AM

The **Goal Event Workflow Action** allows you to track specific milestones or behavioral actions that your contacts take — such as clicking a link, submitting a form, confirming an appointment, or making a payment. When a contact meets your defined goal, the system can automatically adjust their path in the workflow, making your automations more intelligent and responsive.

By using Goal Events, you can streamline complex workflows, eliminate redundant triggers, and enhance customer journey personalization within HighLevel.

* * *

## **What is the Goal Event Workflow Action?**

Goal Events enable you to set specific objectives within your workflow that automatically guide contacts toward desired outcomes. When a contact meets the goal condition (for example, clicking a link or submitting a form), the system instantly moves them to the defined goal step, regardless of where they were in the workflow.

Goal Events serve as dynamic checkpoints in your automation. Instead of waiting for a contact to move through every step, the workflow intelligently detects when key engagement actions occur and reacts accordingly — saving time and improving accuracy in lead handling and engagement.

* * *

## **Key Benefits of Goal Events**

Goal Events enhance workflow efficiency by allowing automations to respond dynamically to real-time contact actions. This ensures each contact receives contextually relevant communication and experiences a smooth, personalized journey.

- **Automation Efficiency:** Automatically skip steps or end workflows when a goal is achieved.

- **Improved Engagement:** React instantly when a contact clicks, opens, or performs a desired action.

- **Simplified Logic:** Replace multiple triggers and “If/Else” branches with a single, smart event.

- **Enhanced Tracking:** Monitor email events, link clicks, tags, appointments, payments, and more.

- **Customizable Actions:** Define exactly what happens when the goal is met—or not met.

* * *

## **Supported Goal Event Types**

Each goal type reflects a specific contact behavior or milestone. Selecting the correct goal ensures your workflow reacts to meaningful actions and aligns automation with your business processes.

### **Form Submitted**

Allows workflows to react to one or more form submissions.

**Highlights:**

- Multi-select dropdown for multiple forms.

- Goal achieved when a contact submits any selected form.


**Example Use Case:**

An agency wants to send follow-ups when a user fills out any lead form. The workflow uses “Wait until Form Submitted” with selected forms to centralize form responses.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058401814/original/eE1-hhhQc-QLPs3x6SCbHjPij7yMcHNX3w.png?1763124591)

* * *

### **Payment Received**

Triggers workflow actions based on payment events.

**Highlights:**

- Available under “Select Type of Goal → Payment Received.”

- Can filter by success or failure status and by product.


**Example Use Cases:**

- Start onboarding after the first payment.

- Send a “Thank You” email for successful transactions.

- Trigger reminders for failed or overdue payments.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058400782/original/XdS_bSkvmdwKND6TF1LcxHEUbZNTLOIpMA.jpeg?1763124403)

* * *

### **Document Status**

Tracks lifecycle events on proposals and contracts such as _Viewed_, _Signed_, _Declined_, or _Completed._

**Example Use Cases:**

- Send reminders if a document was viewed but not signed within 24 hours.

- Initiate onboarding once a contract is marked “Completed.”

- Trigger a follow-up when a document is declined.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058401519/original/9gOkwfUrZ5cHKNvcskj7qCZRteSrmMU1Uw.png?1763124532)

### **Email Events**

Detects when a contact interacts with an email — such as opening, clicking, or unsubscribing.

**Examples of Supported Events:**

- Opened

- Clicked

- Unsubscribed (Mailgun only)

- Complained

- Marked as Spam


**Example Use Cases:**

- Trigger a follow-up workflow when a contact opens or clicks a campaign email.

- Move a contact to a “Re-engagement” sequence after they unsubscribe.

- Send targeted drip emails based on engagement level.


* * *

### **Clicked a Trigger Link**

Tracks when a contact clicks a specific tracked link within your messages.

**Example Use Cases:**

- Start a nurture sequence when a contact clicks a product or demo link.

- Segment users by interests based on which content link they click.

- Initiate a follow-up email when a lead clicks an event registration link.


* * *

### **Contact Tag Added or Removed**

Reacts when specific tags are added to or removed from a contact record.

**Example Use Cases:**

- Move contacts to a new stage when the tag “Product Purchased” is added.

- Stop a nurture workflow when “Customer” tag is added.

- Trigger retention campaigns when “Unsubscribed” tag is removed.


* * *

### **Appointment Status**

Monitors when a contact’s appointment changes to a specific status such as _New_, _Confirmed_, or _Showed_.

**Example Use Cases:**

- Continue onboarding after a consultation appointment is confirmed.

- Send post-appointment surveys when the status updates to “Showed.”

- Trigger reminders or rescheduling flows for “No-show” appointments.


* * *

## **How to Set Up the Goal Event Action**

Setting up a Goal Event ensures your workflow automatically reacts to important customer actions. Correct setup guarantees that automation flows seamlessly without manual intervention.

### **Step 1: Navigate to Workflow Builder**

1. Go to **Automation → Workflows**.

2. Click **\+ Create Workflow**.

3. Choose **Start from Scratch** (or open an existing workflow).


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058401984/original/0ArelTzGBkMyvrcDiosRNvzqb8RQai0ZXQ.jpeg?1763124690)

### **Step 2: Add the Goal Event Action**

1. Click the **+** button to add a new action.

2. Under **Internal**, select **Goal Event**.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058402051/original/U90HAJj6vZhgrYnpnuXJqz4R368FfeWJ3g.png?1763124723)

### **Step 3: Configure the Goal Event**

1. Enter a descriptive **Action Name** (e.g., “Lead Conversion Goal”).

2. From **Select Type of Goal**, choose one of the supported goal types (Email, Trigger Link, Tag, Appointment, etc.).

3. Define the specific event criteria (e.g., clicked a specific trigger link, form submitted, or appointment confirmed).


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058402123/original/LM3m1zxhsa7lgOcnpcs4mdHtaJpDSEfzpQ.png?1763124765)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058402145/original/AhDmwOAn0_-onV-tKK0xoKnIrO2wd7HGrA.png?1763124788)

### **Step 4: Choose Workflow Behavior**

1. Under **If Contact Reaches This Goal Without Meeting Conditions**, select one:

   - **End this workflow**

   - **Continue anyway**

   - **Wait until the goal is met**
2. Click **Save Action** to apply.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155058402175/original/stJvS-x5WOQAfDab7oRrpjK-uyrTdCHY2A.png?1763124807)

### **Step 5: Publish the Workflow**

1. Click **Publish** in the upper right corner to activate the workflow.

2. HighLevel will now automatically listen for contacts that meet your goal event criteria.


* * *

## **Frequently Asked Questions**

**Q:** **Can one email event meet multiple Goal Events?**

Yes, a single event (like opening an email) can trigger multiple goals if the workflows are configured that way.

**Q:****Will the Goal Event trigger outside business hours?**

Yes. The system monitors events continuously, so contacts meeting the goal will trigger the event immediately.

**Q:****Can a contact meet the same goal event multiple times?**

No, once a contact meets a specific Goal Event, they won’t be evaluated for it again within that workflow.

**Q:****What if an appointment is rescheduled after meeting a Goal Event?**

The workflow only reacts to the initial event. Later changes do not reverse progress.

**Q:****Can I use multiple Goal Events in one workflow?**

Yes. Each Goal Event works independently and will trigger when its conditions are met.

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

- [Workflow Action - Goal Event](https://help.gohighlevel.com/support/solutions/articles/155000003328-workflow-action-goal-event)
- [Workflow Action - Dare/Time Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003354-workflow-action-dare-time-formatter)
- [Workflow Action - Number Formatter](https://help.gohighlevel.com/support/solutions/articles/155000003355-workflow-action-number-formatter)
- [Conversation AI Post-Appointment Booking Actions](https://help.gohighlevel.com/support/solutions/articles/155000003421-conversation-ai-post-appointment-booking-actions)
- [How to send Email using AI in Workflows](https://help.gohighlevel.com/support/solutions/articles/155000005505-how-to-send-email-using-ai-in-workflows)
- [Copy Workflow Actions Across Workflows](https://help.gohighlevel.com/support/solutions/articles/155000006081-copy-workflow-actions-across-workflows)

## Related Articles

- [Workflow Builder Walkthrough](https://help.gohighlevel.com/support/solutions/articles/155000001254-workflow-builder-walkthrough)
- [How to set up Google Ad Conversion Actions](https://help.gohighlevel.com/support/solutions/articles/48001220947-how-to-set-up-google-ad-conversion-actions)
- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/155000002471-workflow-action-if-else)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Getting Started with Workflows](https://help.gohighlevel.com/support/solutions/articles/155000002288-getting-started-with-workflows)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003328,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003328-workflow-action-goal-event/hit)