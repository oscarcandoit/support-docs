---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action
category: articles
type: article
scraped: 2025-10-28T16:23:56.459Z
title:  Transfer Bot Action : LeadConnector 
status_code: 200
---

#  Transfer Bot Action : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Conversation AI Bot](https://help.leadconnectorhq.com/support/solutions/155000000111) [Conversation AI](https://help.leadconnectorhq.com/support/solutions/folders/155000000765)

## Transfer Bot Action  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action\# "Print this Article")

Modified on: Thu, 3 Jul, 2025 at 12:05 AM

* * *

**TABLE OF CONTENTS**

- [Introduction](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Introduction)
- [Why Use This?](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Why-Use-This?)
- [Step-by-Step Guide to Configuring the Transfer Bot Action](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Step-by-Step-Guide-to-Configuring-the-Transfer-Bot-Action)
  - [Step 1: Navigate to the Bot Goals Tab](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Step-1%3A-Navigate-to-the-Bot-Goals-Tab)
  - [Step 2: Click on the "Transfer Bot" Action](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Step-2%3A-Click-on-the-)
  - [Step 3: Configure the Scenario Details](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Step-3%3A-Configure-the-Scenario-Details)
    - [Action Name](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Action-Name)
    - [Select the Trigger Condition](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Select-the-Trigger-Condition)
    - [Add Example Phrases](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Add-Example-Phrases)
    - [Select the Destination Bot](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Select-the-Destination-Bot)
- [Important Notes for Transfer Bot Conditions](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#Important-Notes-for-Transfer-Bot-Conditions)
  - [If You’re Using the Workflow Action: Update Conversation AI Bot and Status](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#%F0%9F%9B%91-If-You%E2%80%99re-Using-the-Workflow-Action%3A-Update-Conversation-AI-Bot-and-Status)
  - [? Default Transfer Behavior](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action#%F0%9F%94%84-Default-Transfer-Behavior)

## **Introduction**

The **Transfer Bot Action** allows you to automatically transfer a conversation from one AI bot to another when specific trigger conditions are met during customer interactions.

This helps you avoid building unnecessarily complex workflows by streamlining conversations based on user intent or service requirements.

## **Why Use This?**

Let’s say you're a business owner who offers multiple services—perhaps you run a clinic that offers dental, skin, and eye care. Instead of building one massive bot to handle everything, you can:

- Create a **primary or receptionist bot** that greets users and collects basic information.

- Create **individual service bots**—for example, a Dental Bot, Skin Bot, and Eye Care Bot.

- Use the Transfer Bot Action to move the conversation to the right service bot based on the customer’s response (e.g., “I want a dental checkup”).


This approach leads to:

- Simpler bot logic

- Better user experience

- Cleaner workflows


## **Step-by-Step Guide to Configuring the Transfer Bot Action**

### **Step 1: Navigate to the Bot Goals Tab**

- If you're creating a new bot, ensure you **assign or edit the bot's name** before accessing this feature.


### **Step 2: Click on the "Transfer Bot" Action**

- In the Bot Goals interface, locate and select the **Transfer Bot** action to begin configuring it.

- [![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046816599/original/k7BmecHE-UaWTb-1bQgLU0JrMLlYe0pD4g.png?1747601570)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046816599/original/k7BmecHE-UaWTb-1bQgLU0JrMLlYe0pD4g.png?1747601570)


### **Step 3: Configure the Scenario Details**

#### **Action Name**

- Assign a name that helps you identify the purpose of this scenario.

- Example: `"Transfer to Dental Bot"` or `"Transfer to AC repairing"`.

- ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046816600/original/NGwaPuWcnbSZB4VpXF8YKoZUVOcbRgHBfA.png?1747601590)


#### **Select the Trigger Condition**

- Provide a concise description of the condition that will trigger the Transfer Bot Action. This helps the AI recognize when to transfer. Examples include:

- Examples: - "The customer says AC repairing or needs AC repairing services or says he is facing issues with his AC"

  - ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046816630/original/nu_v3R57WinA1medcuyVgQOZdHAxMV6YNQ.png?1747601818)

#### **Add Example Phrases**

- Input example phrases that illustrate the trigger condition. This trains the bot to recognize specific expressions that should prompt it to transfer .Enter several sample phrases that represent what a user might say to activate the transfer.

- Example Phrases:

  - AC repairing

  - AC needs repairing

  - My AC is not working

  - [![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046816629/original/rHwvteCXv3__zb6GYlOIKqKp_fgAgQImhw.png?1747601791)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046816629/original/rHwvteCXv3__zb6GYlOIKqKp_fgAgQImhw.png?1747601791)

Instead of writing many different examples for related issues, you can use brackets `[]` to instruct the bot to recognize a broader category. This helps you:

- Avoid writing redundant examples.
- Keep prompts clean and easy to manage.
- Cover a variety of real-world phrases with fewer inputs.

### **Example:**

Suppose you're building a bot to help with **electricity-related issues**. Instead of writing examples like:

- “I need help with wiring”

- “My circuit is broken”

- “The fuse tripped”

- “Electricity isn’t working”


You can simplify it like this in the prompt:

**Prompt Instruction:**

_"I need help \[with any issue related to electricity\]"_

This allows the bot to generalize and respond to anything that fits inside that bracket—wiring, circuits, switches, etc.—without explicitly listing each one.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046884348/original/Gf2H07XhD2xvyYo4rdhJm9XpNzLH_04oKw.png?1747687869)

#### **Select the Destination Bot**

- Choose the specific bot to which the conversation should be transferred when this scenario is triggered.

- Make sure the destination bot is activated on similar channels , example if Bot A is active on live chat and it transfers the conversation to Bot B , Bot B should be active on live chat as well

- And make sure both the bots are in auto pilot mode

- ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046816639/original/aoYATBAhPbdR0iKGNB1nPKXeCJsdjkqq7Q.png?1747601861)


## **Important Notes for Transfer Bot Conditions**

### ? If You’re Using the Workflow Action: `Update Conversation AI Bot and Status`

- Make sure to **add a 'Wait' step** in your workflow before transferring.

- Without a delay, the original bot may reassign itself immediately, causing a loop that prevents the transfer bot action from working properly.

- ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155046816646/original/CgD2NaXyG5Zw9zGRMHkUZEsQ3J8Qs0K_uw.png?1747601919)


### ? Default Transfer Behavior

By default, if a **bot is assigned to a conversation** but does **not know the answer**, it will **automatically reassign the conversation to the Primary Bot** (if one is configured).

- If this default handoff is **not needed**, make sure to **turn it off** in the settings.


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005305-transfer-bot-action*  
*Generated on: 2025-10-28T16:23:56.459Z*
