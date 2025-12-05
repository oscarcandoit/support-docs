---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003289"
title: " Workflow Action - Manual SMS : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003289#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003289#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Communication Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000749)
6. Workflow Action - Manual SMS

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

# Workflow Action - Manual SMS

Modified on: Wed, 4 Sep, 2024 at 4:39 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003289#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003289#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003289#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003289#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003289#Example)

## Overview

The **Manual SMS** action allows you to create a task for a user to manually send an SMS to a contact. This is useful when you want a personalized message sent that requires human intervention. The task created will appear in the Conversations > Manual Actions tab.

## Action Name

**Manual SMS**

## Action Description

This action generates a manual task to send an SMS message to a specific contact. The task requires user intervention to finalise and send the message. Users can select a template, add custom values, include trigger links, and test the message before sending.

## Action Details

|     |     |     |
| --- | --- | --- |
| Field | Description | Mandatory |
| Action Name | Name of the action to identify it in the workflow. | Yes |
| Templates | Select an SMS template from the pre-defined templates available. | No |
| Message | The message body to be sent. This field supports custom values and trigger links. | Yes |
| Custom Values | Custom values available for personalising the message. Examples include contact name, appointment details, etc. | No |
| Add Attachment | Option to add attachments to the SMS message via URL. | No |
| Test Phone Number | A phone number to send a test SMS. Include country code. | No |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032219728/original/HpUKp_V3W_snYFG_RxXyaNZTC1EIGGN-qg.png?1725442538)

### **How to Configure**

1. **Select Template**: Choose a pre-defined SMS template if applicable. This populates the message field with the template content.
2. **Enter Message**: Write the message you want to send. Use the custom values dropdown to insert placeholders for dynamic data (e.g., contact name, appointment details).
3. **Add Attachment**: If needed, add files by entering the URL.
4. **Test SMS**: Enter a phone number to test how the SMS will appear when received.

### **Custom Values and Trigger Links**

The Manual SMS action supports custom values as well as Trigger links in the body of the message.

Such as joining a calendar community or filling out a custom form. These links are clickable and can direct the contact to specific actions.

## Example

- **Trigger**: When a lead fills out a form on the website.
- **Action**: Create a Manual SMS task for the assigned user to send a follow-up SMS.
- **Message**: "Hi {{Contact Name}}, thank you for filling out our form. Click here to schedule an appointment: \[Calendar Link\]."
- **Test Phone Number**: +11234567890 (for testing the SMS)

In this example, when a lead submits a form, a manual task is created to send a personalised SMS with a link to book an appointment. The message uses custom values to personalise the text and a trigger link for scheduling.

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
- [How to Send Review Requests](https://help.gohighlevel.com/support/solutions/articles/48001222668-how-to-send-review-requests)
- [Update Conversation AI Bot and Status - Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003821-update-conversation-ai-bot-and-status-workflow-action)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Workflow AI Builder](https://help.gohighlevel.com/support/solutions/articles/155000006100-workflow-ai-builder)
- [Workflow Action - DND Contact](https://help.gohighlevel.com/support/solutions/articles/155000003270-workflow-action-dnd-contact)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003289)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003289-workflow-action-manual-sms/hit)