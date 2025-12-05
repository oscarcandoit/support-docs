---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check"
title: " Workflow Action - WhatsApp Customer Service Window Check : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Communication Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000749)
6. Workflow Action - WhatsApp Customer Service Window Check

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

# Workflow Action - WhatsApp Customer Service Window Check

Modified on: Tue, 8 Apr, 2025 at 4:00 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check#Example)

## Overview

The WhatsApp Customer Service Window Check action allows you to check if a customer service window is open before sending free-form messages. When the window is open, businesses can send unlimited free-form messages for the first 1,000 service conversations each month at no additional cost. This feature ensures that you're utilizing the open window to communicate with customers effectively, avoiding additional costs.

## Action Name

WhatsApp Customer Service Window Check

## Action Description

The **WhatsApp Customer Service Window Check** action determines whether an active customer service window exists between your business and a customer. A customer service window is triggered when a customer sends a message to your business, lasting 24 hours. During this time, you can send unlimited free-form messages. If the window is closed, only pre-approved WhatsApp templates can be used to initiate a new conversation.

**Key Features:**

- Automatically checks if the 24-hour customer service window is open.
- Allows sending free-form messages when the window is open.
- Uses pre-approved templates to initiate conversations if the window is closed.
- Saves messaging costs by leveraging the 1,000 free service conversations per month.

## Action Details

##### **Step-by-Step Guide**

1. **Prerequisites:**

   - Ensure WhatsApp is enabled on your HighLevel subaccount. If you want to send business-initiated messages, you must have an approved WhatsApp template. Follow the [WhatsApp Subaccount Setup](https://help.gohighlevel.com/a/solutions/articles/155000001980) and [How to Create a WhatsApp Template](https://help.gohighlevel.com/support/solutions/articles/155000000861-how-to-create-a-whatsapp-template) guides.
2. **Add the WhatsApp Customer Service Window Check:**

   - Navigate to **Automations > Workflows > Create Workflow > Start from Scratch**.
   - Add the **WhatsApp: Customer Service Window Check** action. This will create two branches: "Open" and "Closed."
3. **Configure the Open Branch:**

   - Under the **Open** branch, select the **WhatsApp Send Message** action and choose **None - Free Form Message**.
   - If the window is open, you can send free-form messages without any restrictions, taking advantage of the free tier of 1,000 conversations per month.
4. **Configure the Closed Branch:**

   - Under the **Closed** branch, select the **WhatsApp Send Message** action and choose an approved **Marketing/Utility Template**.
   - If the customer service window is closed (i.e., no customer response in the last 24 hours), you can only send pre-approved template messages to initiate a new conversation.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033163427/original/YyPked92VwzcTG2sEIAJF121V1XIj0zMTg.png?1726743482)

## Example

**Scenario:** A business wants to follow up with a customer 24 hours after an appointment to check if they need further assistance.

**Workflow Setup:**

- **Trigger:** Customer Appointment booked
- **Action:** WhatsApp Customer Service Window Check.
  - **Open Branch:** Send a free-form follow-up message asking the customer if they need any help.
  - **Closed Branch:** Send a pre-approved WhatsApp template message to re-initiate the conversation.

**Outcome:** If the customer service window is open, the customer will receive a personalized message at no additional cost. If the window is closed, a template message will be sent to re-engage the customer.

#### **FAQs**

**1\. What is the difference between "None - Free Form Message" and selecting a template?**

"None - Free Form Message" allows you to send messages within the 24-hour customer service window. Templates are used outside of the window for specific purposes like marketing or utility messages.

**2\. How can I check my free tier conversation count?**

You can view your free tier conversation count in Facebook Business Manager under **Account Tools > Insights**.

**3\. Can I use WhatsApp automation outside the 24-hour window?**

Yes, you can use pre-approved WhatsApp templates to send messages once the customer service window closes.

**4\. What is a Free Entry Point Conversation?**

Triggered when a customer engages through a "Click to WhatsApp" ad or CTA button, lasting 72 hours, allowing both free-form and template messages.

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

- [WhatsApp: Customer Service Window Check](https://help.gohighlevel.com/support/solutions/articles/155000003235-whatsapp-customer-service-window-check)
- [WhatsApp Flows: In app Appointment Booking](https://help.gohighlevel.com/support/solutions/articles/155000003720-whatsapp-flows-in-app-appointment-booking)
- [WhatsApp: Send Message Templates (Snippets)](https://help.gohighlevel.com/support/solutions/articles/155000003069-whatsapp-send-message-templates-snippets-)
- [How to send Images, Video, Audio and Document via WhatsApp](https://help.gohighlevel.com/support/solutions/articles/155000005142-how-to-send-images-video-audio-and-document-via-whatsapp)
- [Interactive WhatsApp Messages](https://help.gohighlevel.com/support/solutions/articles/155000006082-interactive-whatsapp-messages)
- [Workflow Action - WhatsApp](https://help.gohighlevel.com/support/solutions/articles/155000003531-workflow-action-whatsapp)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003533-workflow-action-whatsapp-customer-service-window-check/hit)