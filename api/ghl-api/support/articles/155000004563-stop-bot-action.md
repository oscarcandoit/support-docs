---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action
category: articles
type: article
scraped: 2025-10-28T16:17:57.553Z
title:  Stop Bot Action : LeadConnector 
status_code: 200
---

#  Stop Bot Action : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Conversation AI Bot](https://help.leadconnectorhq.com/support/solutions/155000000111) [Conversation AI](https://help.leadconnectorhq.com/support/solutions/folders/155000000765)

## Stop Bot Action  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action\# "Print this Article")

Modified on: Thu, 13 Feb, 2025 at 9:27 AM

* * *

**TABLE OF CONTENTS**

- [Introduction](https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action#Introduction)
- [Step-by-Step Guide to Configuring the Stop Bot Action:](https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action#Step-by-Step-Guide-to-Configuring-the-Stop-Bot-Action%3A)
  - [Step 1: Navigate to the Bot Goals tab.](https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action#Step-1%3A-Navigate-to-the-Bot-Goals-tab.)
  - [Step 2: Click on the Stop Bot button to explore the details.](https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action#Step-2%3A-Click-on-the-Stop-Bot-button-to-explore-the-details.)
  - [Step 3: Configure the required details as follows:](https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action#Step-3%3A-Configure-the-required-details-as-follows%3A)
- [Important Notes for Stop Bot Conditions](https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action#Important-Notes-for-Stop-Bot-Conditions)

## Introduction

The **Stop Bot Action** feature allows you to automatically halt the AI bot's responses when specific trigger conditions are met during customer interactions. This prevents unnecessary back-and-forth messaging between the bot and the contact, enhancing the user experience.

For instance, if a user says "goodbye" and the bot continues to respond with farewell messages, this action will stop the bot when the trigger condition is met. Similarly, if a customer is not interested in your product, you can configure this action to cease the bot's replies under such circumstances.

## **Step-by-Step Guide to Configuring the Stop Bot Action:**

### **Step 1:** Navigate to the **Bot Goals** tab.

- If you're creating a new bot, ensure you assign or edit the bot's name before accessing this feature.

### **Step 2:** Click on the **Stop Bot** button to explore the details.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041269490/original/dApxGlrdaeKddu11nn3OgwsDtJJvYx7d1w.png?1739140389)

### **Step 3:** Configure the required details as follows:

1. **Scenario Name:** Assign a name to the scenario to easily identify the condition under which the bot should stop. For example, "Customer Not Interested Scenario."



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041269538/original/ZdY7Z8GxtfnoUhEum1nuth99AMr3mz2Rug.png?1739140734)

2. **Enable Scenario Toggle:** Activate this toggle to enable the scenario. If the toggle is off, the action will not be active, even if the scenario is configured. Ensure it's turned on to activate the action.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041269516/original/uhnf3RCdOszeANAMp8rzsl2i1smt7d3wUQ.png?1739140501)

3. **Select the Trigger Condition:** Provide a concise description of the condition that will trigger the Stop Bot Action. This helps the AI recognize when to halt its responses. Examples include:



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041269562/original/5tknJLVZtCptbfoygWQtApn_HZUGCHG2tg.png?1739140964)

   - "Customer not interested in the product."

   - "User says goodbye."
4. **Add Examples:** Input example phrases that illustrate the trigger condition. This trains the bot to recognize specific expressions that should prompt it to stop replying. Reviewing the examples set for the default "Goodbye" action configuration can provide guidance.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041269549/original/Uo3oWkqEGdE0P70Iw57FI0dfFf5nkFPwVg.png?1739140871)

5. **Final Message:** Compose the mandatory message that the bot will send before going inactive. This ensures a smooth conclusion to the conversation rather than an abrupt end. For instance, "Thank you for your time. If you have any other questions, feel free to ask."



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041269584/original/OS5Wv4lUE8GjTgkCkEm-It4xnHLijM96gA.png?1739141114)

6. **Reactivate Bot Timer:** Set the duration after which you want the bot to reactivate for that particular contact. If you uncheck the checkbox, the bot will remain inactive indefinitely. You can specify a custom time for reactivation based on your requirements


```
To ensure the bot can promptly re-engage with contacts who return after a brief period, set the Reactivate Bot Timer to 5–10 minutes instead of the default 24 hours. This adjustment allows the bot to resume interactions shortly after a conversation ends,
```




![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041269595/original/L636MqxjrqxhXssjNkhiMZUl63Xfsrd6-A.png?1739141172)

7. **Add Custom Tag:** Optionally, assign a custom tag to the contact when the Stop Bot Action is triggered. This tag can be used to configure workflows for follow-up actions. For example, you might want to follow up with contacts who have been assigned specific tags indicating their disinterest. By default, a "Stop Bot" tag will be shown; you can save this default tag or delete it and add one of your choice.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041269614/original/nlAFdbMXwDhW3-DtFK7H48HvFhcamCL4Jw.png?1739141267)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041561949/original/33rbyiP7fKSgltFcK6HYnM_u8KMCh49gPg.png?1739460373)


## **Important Notes for Stop Bot Conditions**

By following these steps, the bot will automatically Stop its responses whenever the defined condition arises, ensuring more efficient and context-appropriate customer interactions.

**Important Considerations:**

- **Crafting Effective Trigger Conditions:** Ensure the trigger conditions are specific and clearly defined to prevent the bot from stopping in unintended scenarios.

- **Testing:** After configuration, thoroughly test the scenarios to confirm that the bot stops responding as intended when the trigger conditions are met.


By carefully setting up the Stop Bot Action, you can enhance the efficiency of your AI interactions, ensuring the bot remains responsive only when appropriate and stops communication when necessary.

Example

```
If a customer is not interested in your product, the bot can still nurture the contact and collect details if specified in the prompt. Configuring the Stop Bot action in such cases may prematurely halt the conversation, potentially resulting in a lost opportunity to engage with the contact.
```

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004563-stop-bot-action*  
*Generated on: 2025-10-28T16:17:57.553Z*
