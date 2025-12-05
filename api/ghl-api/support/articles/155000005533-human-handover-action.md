---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action
category: articles
type: article
scraped: 2025-10-28T16:25:40.412Z
title:  Human Handover Action : LeadConnector 
status_code: 200
---

#  Human Handover Action : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Conversation AI Bot](https://help.leadconnectorhq.com/support/solutions/155000000111) [Conversation AI](https://help.leadconnectorhq.com/support/solutions/folders/155000000765)

## Human Handover Action  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action\# "Print this Article")

Modified on: Thu, 19 Jun, 2025 at 9:48 AM

* * *

**TABLE OF CONTENTS**

- [Introduction](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action#Introduction)
- [Why Use This?](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action#Why-Use-This?)
- [Step-by-Step Guide to Configuring Human Handover](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action#Step-by-Step-Guide-to-Configuring-Human-Handover)
  - [Step 1: Enable Human Handover ToggleNavigate to the Bot Goals interface. Select Human Handover and toggle it ON to configure conditions for handover.](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action#Step-1%3A-Enable-Human-Handover-ToggleNavigate-to-the-Bot-Goals-interface.-Select-Human-Handover-and-toggle-it-ON-to-configure-conditions-for-handover.)
  - [Step 2: Select a Prebuilt ScenarioChoose from predefined conditions under which the bot will trigger a handover:](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action#Step-2%3A-Select-a-Prebuilt-ScenarioChoose-from-predefined-conditions-under-which-the-bot-will-trigger-a-handover%3A)
  - [Step 3: Configure Post-Handover Actions](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action#Step-3%3A-Configure-Post-Handover-Actions%C2%A0)
  - [Important Notes:](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action#Important-notes:)

### **Introduction**

The **Human Handover** feature allows your AI bot to automatically transfer a conversation to a human agent when it detects that the bot is no longer the best resource to assist the user.

This ensures your customer conversations stay helpful and frustration-free by escalating issues to a person when AI reaches its limits—whether due to knowledge gaps, repeated failures to. resolve complex issues, or user preference - like " I want to talk to a human "

### **Why Use This?**

Let’s say you run a marketing agency or a service-based business and use AI bots to handle incoming leads, book appointments, or answer FAQs. While the AI handles most conversations efficiently, some scenarios require human judgment—such as when a customer asks about a discount, reports a system failure, or simply says, “Can I speak to someone?”

With Human Handover, you can:

- Define scenarios when the bot should automatically hand over to a human.

- Ensure complex queries are escalated without delay.

- Maintain a high-quality user experience even when AI can’t help.


This approach leads to:

- Higher user satisfaction

- Seamless bot-to-human transitions


## **Step-by-Step Guide to Configuring Human Handover**

### **Step 1: Enable Human Handover Toggle**  Navigate to the Bot Goals interface. Select **Human Handover** and toggle it ON to configure conditions for handover.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048556319/original/iAgEfKr9jpQdZApR2pj02Hx0F8c26eiFDw.png?1750341918)

### **Step 2: Select a Prebuilt Scenario**  Choose from predefined conditions under which the bot will trigger a handover:

1. **Contact Request** (User wants to speak to a human)

   - _Trigger:_ User explicitly asks to speak with a human.

   - _Example Phrases:_

     - I want to talk to a human

     - Can someone real help me?

     - Connect me to a person
   - ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048557213/original/epRLoDHgH7l7qIny5Aj2pvtc-R4rodWjmA.png?1750342413)
2. **Lack of Information**

   - Triggered when AI does not know the answer or lacks relevant knowledge.

   - **No custom examples needed.**

   - **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048556907/original/yPSGgIfLPmzs8jSaVt49BlccAaeN-HLPDQ.png?1750342237)**
3. **Failed to Resolve Issue**

   - Triggered after multiple unsuccessful attempts by the bot to resolve the same issue. **Max retires - 2**

   - **No examples required**.

   - ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048556950/original/pUU_uAfWbJVQU-i8Cx8MdRP_ApmixgiDSg.png?1750342250)

### **Step 3: Configure Post-Handover Actions**

Customise what happens once the bot hands over the conversation:

- **Assign Conversation to a User**

  - Choose a specific user to assign the conversation

  - Optional: Skip assignment if the contact already has an assigned user.

  - ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048557180/original/uLJCMrwMIwUYDSeeefpSjQlU4wmzZ3qVfA.png?1750342389)
- **Create a Task**

  - Checkbox option to create a task for the selected user.

  - _Default task description:_ "will be created by AI"

  - _Due date:_ 24 hours from trigger.
- **Notification Management for Assigned user**

  - Go to **Settings > My Staff**.

  - Choose the staff member who will receive the notification.

  - Navigate to **Notification Settings**.

  - **Enable:**

  - **When a conversation gets assigned to me**

  - **When a task gets assigned to me**
- **![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048557514/original/C-y6q16U5yqrL2r7JAn5Uda9Jo84f8ZTpQ.png?1750342609)**

- **Send a Closing Message**

  - Default message: "Thank you! Someone from the team will get back to you."
- ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048557632/original/Q7Ez5Ymlw_aK9-ATnUJT0NjMtISSG-WSXg.png?1750342690)

- **Bot Pause Behaviour**

  - Put the bot to sleep for a specific duration after handover.
- ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048560966/original/DwPs-IaArLARf3qFjQLauVx8qzaP_de6sQ.png?1750344499)

- **Create Tags**

  - Default tag: `human_handover`

  - ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048560929/original/mzQBGvIQgQTA6Cv-W0MUV0zKqBk6NPQ4bQ.png?1750344480)

### **Important Notes:**

- You can configure a maximum of **3 handover actions** per bot.


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005533-human-handover-action*  
*Generated on: 2025-10-28T16:25:40.412Z*
