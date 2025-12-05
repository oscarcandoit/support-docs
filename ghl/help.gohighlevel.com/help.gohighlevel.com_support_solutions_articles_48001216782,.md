---
url: "https://help.gohighlevel.com/support/solutions/articles/48001216782,"
title: " AI Conversational Appointment Booking Workflow and Setup : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001216782,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [AI Appointment Booking Bot](https://help.gohighlevel.com/support/solutions/folders/48000685924)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001216782,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [AI Appointment Booking Bot](https://help.gohighlevel.com/support/solutions/folders/48000685924)
6. AI Conversational Appointment Booking Workflow and Setup

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

# AI Conversational Appointment Booking Workflow and Setup

Modified on: Tue, 21 Jun, 2022 at 3:38 PM

### The following is a step-by-step guide on how to set up your own AI Conversational Appointment booking bot within a workflow.

* * *

## 1\. Create Workflow

Add a trigger with customer Replied (or any other trigger)

![Create Workflow](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359047/original/9_O9O-lOgVZzMFPEhKvgEiajAtnaS18yhw.png?1655208406)

## 2\. Select the AI appointment bot in the workflow options

Create action for the appointment bot with the desired calendar

Set the "Total bot processing duration" -This is how long before the bot will time out if there are no replies from the contact.

![AI appointment bot](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359049/original/pr8zGFvRVV-AiELuKGmg8rgJOyAzi19VpQ.png?1655208407)

## 3\. The AI conversation will end in one of the three ways.

**1\. The bot successfully books the appointment**

**2\. Bot timed out:** The appointment was not booked as the lead didn't respond to the prompts by the bot.

**3.** **Appointment could not be booked for other reasons,** \- no suitable slot, the bot could not understand the query or other technical issues.

## 4\. Create a condition if the bot booked an appointment.

![Create condition if the bot booked an appointment.](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359046/original/hJxKhMj9Kpsm64xjTF7gE24n8eRgzgs72g.png?1655208406)

## 5\. Create a message or any action for the appointment booked condition

![Create message for appointment booked](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359048/original/KKvlxmWPb4Du_Qzq0o7_HgVBmsxWMJ2a3A.png?1655208406)

## 6\. Secondary condition if the appointment is not booked due to bot timeout

Here we want to know if the appointment was not booked because the bot timed out or for some other reason.

Common reasons could be that no slots were available or the bot failed to understand the conversation.

![Secondary condition if the appoitment is not booked](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359051/original/WYUwNv5-5grq9Jlo-YUcHXatsZbInn14ig.png?1655208407)

## 7\. Third Condition - Appointment not booked for any other reason.

Configure appropriate actions for bot failures for any other reason. If you have Eliza Agent Platform Subscription, you can send the lead over there to continue the lead nurture.

![Human Rollover to Eliza agent platform ( if subscribed)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48232359050/original/lbIxgrDyMUfoe8A8bvOrTM4D7YWvX1h5Mw.png?1655208407)

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

- [AI Conversational Appointment Booking Workflow and Setup](https://help.gohighlevel.com/support/solutions/articles/48001216782-ai-conversational-appointment-booking-workflow-and-setup)
- [Appointment Booking Conversation AI Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action)

## Related Articles

- [Workflow Action - Appointment Booking Conversation AI Booking Bot](https://help.gohighlevel.com/support/solutions/articles/155000003363-workflow-action-appointment-booking-conversation-ai-booking-bot)
- [Setting Up Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004401-setting-up-conversation-ai)
- [Conversation AI: Multiple Calendars Support for Appointment Booking](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking)
- [Advanced Settings Overview - Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004415-advanced-settings-overview-conversation-ai)
- [Conversation AI Post-Appointment Booking Actions](https://help.gohighlevel.com/support/solutions/articles/155000003421-conversation-ai-post-appointment-booking-actions)
- [Appointment Booking Conversation AI Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001216782,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001216782-ai-conversational-appointment-booking-workflow-and-setup/hit)