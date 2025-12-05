---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003821,"
title: " Update Conversation AI Bot and Status - Workflow Action : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003821,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [Conversation AI + Workflows](https://help.gohighlevel.com/support/solutions/folders/155000001043)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003821,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Conversation AI + Workflows](https://help.gohighlevel.com/support/solutions/folders/155000001043)
6. Update Conversation AI Bot and Status - Workflow Action

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

# Update Conversation AI Bot and Status - Workflow Action

Modified on: Tue, 7 Jan, 2025 at 10:52 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Action-Description)
- [Action Use Cases](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Action-Use-Cases)
- [Key Notes](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Key-Notes)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Action-Details)
- [Example & Scenarios](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Example-&-Scenarios%C2%A0)
  - [Example 1: Dedicated Bot for Each Communication Channel](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Example-1%3A-Dedicated-Bot-for-Each-Communication-Channel)
  - [Example 2: Assigning Bots Based on Tags](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Example-2%3A-Assigning-Bots-Based-on-Tags)
  - [Example 3: Bot Activation Based on Payment Status](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Example-3%3A-Bot-Activation-Based-on-Payment-Status)
  - [Additional Notes:](https://help.gohighlevel.com/support/solutions/articles/155000003821,#Additional-notes:)

## **Overview**

The **"Update Conversation AI Bot and Status"** action enables users to assign a specific Conversation AI bot to a contact and automatically update its status (Active or Inactive). This action streamlines the management of Conversation AI bots for individual contacts, ensuring efficient interactions based on their journey, specific triggers, or customized criteria.

By automating bot assignments and status changes, this feature eliminates the need for manual updates, saving time and improving workflow efficiency.

## **Action Name**

**Update Conversation AI Bot and Status**

## **Action Description**

The **"Update Conversation AI Bot and Status"** action allows users to:

- Select a Conversation AI bot for a contact.
- Update the bot’s status to **Active** or **Inactive** based on workflows or triggers.

This provides precise control over how and when the Conversation AI bot interacts with contacts at an individual level.

## **Action Use Cases**

1. Assigning bots to individual communication channels.
2. Assigning bots to customized trigger conditions, such as:
   - **Appointments booked**
   - **Payments received**
   - **Forms submitted**
3. Assigning bots based on custom tags.
4. Assigning bots using specific filter criteria or conditional logic (e.g., If-Else conditions).
5. Assigning dedicated bots for specific live chat channels.

After a bot is assigned you can see the assigned bot to contact in conversation tab

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439234/original/P6e5zIpQKOaedbrSxyONATMtzwnBRaiJoQ.png?1736311939)

## **Key Notes**

```
Channel Compatibility:
Ensure the bot assigned has the corresponding channel enabled. For example, if you assign a bot to handle Facebook interactions, verify that the Facebook channel is enabled for that bot.
```

```
Branching Logic:
This action assigns a bot to a contact and immediately branches out based on the workflow logic. It does not wait for the entire conversation to complete before branching out
```

## **Action Details**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439231/original/DHnyM_Uw84RZBJ0GcZlEmmwYvNvEI_H9YQ.png?1736311939)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439232/original/4YeIqz5JVSF58O0dzuUDaTmZTyAnzm6CbA.png?1736311939)

```
Keep Same: Keep same essentially means nothing changes and the existing bot will apply
```

## **Example & Scenarios**

### **Example 1: Dedicated Bot for Each Communication Channel**

**Scenario:**

You want to assign a dedicated bot for a specific channel, such as SMS.

**Solution:**

1. **Pre-requisite:** Create a workflow.
2. Select the trigger, e.g., **Customer replied via SMS**.
3. Add the action: **Update Conversation AI Bot and Status**.
4. Choose the bot from the dropdown (e.g., **SMS Bot**).
5. Set the bot’s status to **Active**.
6. Publish the workflow.

This setup ensures that the SMS bot is assigned specifically to handle SMS-related interactions, creating a seamless experience for contacts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439236/original/yFJ9XtcbRC_Us0v8M0j63B5qMIi5RJbd6g.jpeg?1736311939)

**Example 2:  Dedicated bot for each live chat channel**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439237/original/hwj1XZjbrENdZmlwSvu3p4TNPyGNOUw5Uw.jpeg?1736311939)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439238/original/9JENTQMCn3DopAPPeGXQhfQP5YsJCt2PFw.jpeg?1736311939)

### **Example 2: Assigning Bots Based on Tags**

**Scenario:**

You want a bot to interact only with contacts that have a specific tag (e.g., “”Call Booked").

**Solution:**

1. **Pre-requisite:** Create a workflow.
2. Select the trigger, e.g., **Contact added with Tag: Call Booked**.
3. Add the action: **Update Conversation AI Bot and Status**.
4. Select the bot to assign.
5. Set the bot’s status to **Active**.
6. Publish the workflow.

This ensures personalised bot interactions based on the tags assigned to your contacts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439235/original/9E7hRSaHQ6BKTkHTgw0eM526T0kgxWgeZg.jpeg?1736311939)

### **Example 3: Bot Activation Based on Payment Status**

**Scenario:**

You want the Conversation AI bot to interact only with contacts who have completed a payment.

**Solution:**

1. **Pre-requisite:** Create a workflow.
2. Add the trigger, e.g., **Payment Received**.
3. Add the action: **Update Conversation AI Bot and Status**.
4. Select the bot, such as **Sales Bot**.
5. Set the bot’s status to **Active**.
6. Publish the workflow.

This setup ensures that only paying customers receive communications from the Sales Bot, enhancing relevance and efficiency.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439233/original/C1N3OruegVvuNzY85W7x_agf0KawQJ-hEA.png?1736311939)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039439230/original/kdoSUvtbwwJU9ga1rOxu2lF2k0RT3D-y-A.png?1736311939)

### **Additional Notes:**

- You can assign multiple bots for different live chat channels, with each bot dedicated to a specific channel.
- Bots can be dynamically updated based on evolving criteria or workflows, allowing for greater customization and control.

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

- [Conversation AI Bot - Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000001358-conversation-ai-bot-workflow-action)
- [Conversation AI: Live Chat Channel in Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003216-conversation-ai-live-chat-channel-in-workflow-action)
- [Update Conversation AI Bot and Status - Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003821-update-conversation-ai-bot-and-status-workflow-action)
- [Trigger a Workflow within Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004098-trigger-a-workflow-within-conversation-ai)

## Related Articles

- [Conversation AI Flow Builder](https://help.gohighlevel.com/support/solutions/articles/155000006515-conversation-ai-flow-builder)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [Workflow Trigger – Service Booking (Services v2)](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-)
- [Trigger a Workflow within Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004098-trigger-a-workflow-within-conversation-ai)
- [Conversation AI Bot - Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000001358-conversation-ai-bot-workflow-action)
- [AI Action Logging & Filtering in Conversations](https://help.gohighlevel.com/support/solutions/articles/155000005004-ai-action-logging-filtering-in-conversations)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003821,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003821-update-conversation-ai-bot-and-status-workflow-action/hit)