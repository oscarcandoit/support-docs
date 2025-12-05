---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action
category: articles
type: article
scraped: 2025-10-28T16:17:33.165Z
title:  Update Conversation AI Bot and Status - Workflow Action : LeadConnector 
status_code: 200
---

#  Update Conversation AI Bot and Status - Workflow Action : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Conversation AI Bot](https://help.leadconnectorhq.com/support/solutions/155000000111) [Conversation AI](https://help.leadconnectorhq.com/support/solutions/folders/155000000765)

## Update Conversation AI Bot and Status - Workflow Action  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action\# "Print this Article")

Modified on: Tue, 7 Jan, 2025 at 6:36 AM

* * *

**TABLE OF CONTENTS**

- [Overview](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Overview)
- [Action Name](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Action-Name)
- [Action Description](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Action-Description)
- [Action Use Cases](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Action-Use-Cases)
- [Key Notes](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Key-Notes)
- [Action Details](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Action-Details)
- [Example & Scenarios](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Example-&-Scenarios%C2%A0)
  - [Example 1: Dedicated Bot for Each Communication Channel](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Example-1%3A-Dedicated-Bot-for-Each-Communication-Channel)
  - [Example 2: Assigning Bots Based on Tags](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Example-2%3A-Assigning-Bots-Based-on-Tags)
  - [Example 3: Bot Activation Based on Payment Status](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action#Example-3%3A-Bot-Activation-Based-on-Payment-Status)

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

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039400699/original/XzVqnF6J2FGt9kpsMaIQZB5Bo8ZufUB4ZQ.png?1736253312)

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

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039388861/original/Zjr-8LUJ-PdtjUUASzDyDqNKAPAiNgP2Vg.png?1736245289)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039388861/original/Zjr-8LUJ-PdtjUUASzDyDqNKAPAiNgP2Vg.png?1736245289)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039389991/original/l8B_mJvS6Ldh0pTzV5J4r-lvOylLZ3A0nQ.png?1736245989)

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

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039390806/original/zIgZc6pOZiAp1yOsh30rH5ysLgIM21dOcQ.png?1736246509)

**Example 2:  Dedicated bot for each live chat channel**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039391051/original/8NJOgQgNAdq21THlAK7q3ll8XmQErOW3ng.png?1736246671)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039391082/original/XkD6CiOgFvVLDd2KEErnXU9EcfOFjiPc8w.png?1736246685)

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

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039391440/original/bSHBXTYMm5mcZKPGyUDVVavNX8nNLzICjg.png?1736246935)

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

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039388862/original/2DdJtXyq-WP7oIRTClUKIKr8oArgYTx4Pg.png?1736245289)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039388862/original/2DdJtXyq-WP7oIRTClUKIKr8oArgYTx4Pg.png?1736245289)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155039390240/original/PuM6iBPtBCxWVwbbltuD01fQ0o7Umyao8A.png?1736246152)

### **Additional Notes:**

- You can assign multiple bots for different live chat channels, with each bot dedicated to a specific channel.
- Bots can be dynamically updated based on evolving criteria or workflows, allowing for greater customization and control.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004431-update-conversation-ai-bot-and-status-workflow-action*  
*Generated on: 2025-10-28T16:17:33.165Z*
