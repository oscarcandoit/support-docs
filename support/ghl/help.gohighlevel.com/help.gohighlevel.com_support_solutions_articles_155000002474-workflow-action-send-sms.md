---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms"
title: " Workflow Action - Send SMS : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Communication Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000749)
6. Workflow Action - Send SMS

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

# Workflow Action - Send SMS

Modified on: Tue, 8 Apr, 2025 at 3:58 PM

The Send SMS action enables direct communication with your contacts through text messages. This guide provides step-by-step instructions for configuring the action, along with real-life examples demonstrating its benefits for appointment reminders, promotional campaigns, and more.

* * *

**TABLE OF CONTENTS**

    1\.    What Is the “Send SMS” Action?

    2\.    When Should You Use the “Send SMS” Action?

    3\.    Step-by-Step: Configuring the “Send SMS” Action

    4\.    Real-Life Examples of the “Send SMS” Action.

* * *

# **What Is the “Send SMS” Action?**

The Send SMS action is a powerful tool that allows you to send personalized text messages as part of an automated workflow. This feature helps ensure timely communication by triggering messages based on conditions, triggers, or schedules. You can customize SMS content with dynamic fields like contact names and even include attachments via URLs for enhanced communication.

* * *

## **When Should You Use the “Send SMS” Action?**

The Send SMS action is perfect for scenarios requiring timely and targeted communication, such as:

**•    Appointment Reminders:** Minimize no-shows with automated reminders.

**•    Promotional Campaigns:** Inform customers about offers directly on their phones.

**•    Order Updates:** Notify customers when their orders are shipped.

**•    Event Notifications:** Update attendees about changes or cancellations.

* * *

## **Step-by-Step: Configuring the “Send SMS” Action**

**Step 1: Add the “Send SMS” Action**

    1\.    Open the workflow editor. You can create a new workflow or select the existing workflow for the purpose of understanding.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717482/original/P3-hyXNpkiRB39FUnx2QwQd-wmjTFBmbgw.png?1733302478)

    2\.    Drag and drop the “Send SMS” action into the workflow after the desired trigger or condition.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717484/original/8S5CFrbAzmyxz1YN9Wt4QLIwyVsBvHeUyg.png?1733302492)

**Step 2: Name the Action**

    •    Assign a descriptive name, like “Appointment Reminder SMS,” to identify it easily in your workflow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717512/original/m7ce-UIp_VUuhzge0y9nX7fL870VCyEsnA.png?1733302519)

**Step 3: Compose the Message**

    •   **Message:** Write the content of your SMS. Use dynamic fields like {{contact.first\_name}} for personalization.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717520/original/4HaY46EhBTWCmgtwkDOviN3Wg1j-g96ZGA.png?1733302544)

    •    **Templates:** Select pre-designed templates, if available, to save time.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717749/original/XInvYP3fZNNF1mDamdkOrbhDjU1l4TEpQw.png?1733302717)

**Step 4: Add Attachments (Optional)**

    •    Attach files or resources using URLs (e.g., maps, tickets, or instructions).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717564/original/kEC9Ya3v5wlKY_JgiNfgxjRYREl82TPgHA.png?1733302566)

**Step 5: Test the SMS**

    •    Use the “Test Phone Number” field to preview and test the message.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717593/original/xUFXgIMGpNH7I4diECA_RXcSXsGD-Be5Pw.png?1733302585)

**Step 6: Save and Test the Workflow**

    •    Save the workflow and ensure the SMS triggers as expected by testing with sample data.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037717636/original/MhyfQA1O-cBNHGsREX8QLgHsHiXIiAKatg.png?1733302611)

* * *

## **Real-Life Example of the “Send SMS” Action**

**Multi-Stage Appointment Reminder**

**Scenario:** Reduce appointment no-shows with reminders.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720188/original/IupbkZVZZnwlVj79eRr6EgHdqO95uVN8YA.png?1733304377)

**Workflow:**

    1\.   **Trigger:** Customer booked an appointment

    2\.    **Action 1:** Wait 24 hours before the appointment.

    3\.    **Action 2:** Send reminder SMS 24 hours in advance.

    •    **Message:**

Hi {{contact.first\_name}}, this is a reminder for your appointment tomorrow at {{appointment.start\_time}}. Looking forward to seeing you!

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720211/original/IMO9U8SvgmQjahCbhZfEcElJjFBb0dkcaA.png?1733304392)

    4\.    **Action 3:** Wait 1 hour before the appointment.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037720224/original/4w617tEuBrSk6w_d_R2iHdaSg3o0_lQ23A.png?1733304411)

    5\.    **Action 4:** Send another SMS reminder 1 hour before the appointment.

    •    **Message:**

Hi {{contact.first\_name}}, your appointment is in an hour at {{appointment.start\_time}}. See you soon!

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

- [Getting Started - Launch an SMS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000005065-getting-started-launch-an-sms-campaign)
- [Getting Started - Automatic Email and SMS Followup](https://help.gohighlevel.com/support/solutions/articles/155000005060-getting-started-automatic-email-and-sms-followup)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Incoming SMS shows up in Conversations but isn’t forwarded to the forwarding number.](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-)
- [Workflow Action - Send Invoice](https://help.gohighlevel.com/support/solutions/articles/155000003494-workflow-action-send-invoice)
- [Workflow Action - Manual SMS](https://help.gohighlevel.com/support/solutions/articles/155000003289-workflow-action-manual-sms)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms/hit)