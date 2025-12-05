---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003376"
title: " Workflow Action - Manual Call : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003376#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Communication Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000749)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003376#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Communication Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000749)
6. Workflow Action - Manual Call

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

# Workflow Action - Manual Call

Modified on: Wed, 14 May, 2025 at 5:29 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003376#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003376#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003376#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003376#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003376#Example)

## Overview

The **Manual Call** action allows you to create a call task for a user to manually send an call the contact. This is useful when you want a manual intervention for the call. This action is useful for ensuring timely follow-ups, reaching out to leads, or conducting scheduled calls manually. The task created will appear in the Conversations > Manual Actions tab.

## Action Name

Manual Call

## Action Description

The Manual Call Action creates a task in Conversations > Manual Actions tab for a call to a contact manually. The task requires user intervention to call the contact. Once the task is deleted from the actions tab, the contact will move to the next action in the workflow.

## Action Details

### **Step-by-Step Guide**

1. **Choose the Action Type:**

1. Navigate to your workflow and select "Manual Call" from the list of available actions.
2. **Name Your Action:**

   - Enter a descriptive name for the action, such as "Follow-Up Call."
3. **Go to Converastions > Manual actions tab**
   - View your task
   - Delete the task once completed.

##### ****Execution Logs:****

- The action logs will show a manual call action with a message "Manual Call added to the manual queue". This helps in tracking the of your call.

```
Important:

The Manual Call action only progresses the workflow when the task is explicitly deleted from the Manual Actions tab. Simply calling the contact from the Contacts page or any other area will not complete the task or move the workflow forward.
```

## **Example**

**Scenario:** A business wants to ensure that a sales representative follows up with every new lead within 24 hours of their initial inquiry. Once the call is complated, delete the task to move to next step in workflow.

**Workflow Setup:**

- **Trigger:** New Contact Created
- **Action:** Manual Call
  - **Name:**"Lead Follow-Up Call"

**Outcome:** The sales team member receives a task to call the new lead, ensuring a timely follow-up, which can significantly increase the chances of conversion.

* * *

## **Frequently Asked Questions**

**Q: Can I manually delete the Manual Call task?**

Yes! You must manually delete the task in the **Conversations > Manual Actions** tab after completing the call. This step tells the system to move the contact to the next action in the workflow.

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

- [Workflow Action - Send Email](https://help.gohighlevel.com/support/solutions/articles/155000002472-workflow-action-send-email)
- [Workflow Action - Send SMS](https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms)
- [Workflow Action - Internal Notification](https://help.gohighlevel.com/support/solutions/articles/155000003202-workflow-action-internal-notification)
- [Workflow Action - Edit Conversation](https://help.gohighlevel.com/support/solutions/articles/155000003269-workflow-action-edit-conversation)
- [Workflow Action - Slack Message](https://help.gohighlevel.com/support/solutions/articles/155000003273-workflow-action-slack-message)
- [Workflow Action - Call](https://help.gohighlevel.com/support/solutions/articles/155000003274-workflow-action-call)

## Related Articles

- [How To Add a Manual Call Action to a Workflow](https://help.gohighlevel.com/support/solutions/articles/48000979920-how-to-add-a-manual-call-action-to-a-workflow)
- [SIM-based calling with the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000005814-sim-based-calling-with-the-mobile-app)
- [Workflow Setting Stop On Response & Call Action Disable Voicemail Detect](https://help.gohighlevel.com/support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)
- [Workflow Trigger - Call Status](https://help.gohighlevel.com/support/solutions/articles/155000002552-workflow-trigger-call-status)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003376)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003376-workflow-action-manual-call/hit)