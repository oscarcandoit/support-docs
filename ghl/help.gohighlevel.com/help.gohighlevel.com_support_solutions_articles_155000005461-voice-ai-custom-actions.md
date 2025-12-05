---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions"
title: " Voice AI Custom Actions : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [Voice AI](https://help.gohighlevel.com/support/solutions/folders/155000000930)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Voice AI](https://help.gohighlevel.com/support/solutions/folders/155000000930)
6. Voice AI Custom Actions

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

# Voice AI Custom Actions

Modified on: Fri, 10 Oct, 2025 at 5:50 PM

This article will show you how to use Voice AI Custom Actions to enable real-time webhook integrations during live calls. This powerful feature allows your AI agents to interact with external systems mid-conversation—pulling data, executing processes, and improving automation without waiting until after the call ends.

* * *

**TABLE OF CONTENTS**

- [What are Voice AI Custom Actions?](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#What-are-Voice-AI-Custom-Actions?)
- [Key Benefits of Voice AI Custom Actions](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Key-Benefits-of-Voice-AI-Custom-Actions)
- [Voice AI Conversation Triggers](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Voice-AI%C2%A0Conversation-Triggers)
- [Webhook Custom Action](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Webhook-Custom-Action)
- [Dynamic Parameter Collection](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Dynamic-Parameter-Collection)
- [How to Set Up Voice AI Custom Actions](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#How-to-Set-Up-Voice-AI-Custom-Actions)
  - [Step 1: Navigate to your Voice AI Agent](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Step-1%3A%C2%A0Navigate-to-your-Voice-AI-Agent)
  - [Step 2: Create Custom Action](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Step-2%3A-Create-Custom-Action)
  - [Step 3: Configure Custom Action](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Step-3%3A%C2%A0Configure-Custom-Action)
- [Voice AI - Real-time Testing](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Voice-AI--%C2%A0Real-time-Testing)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions#Related-Articles)

* * *

# **What are Voice AI Custom Actions?**

Voice AI Custom Actions allow AI agents to trigger custom POST webhook calls to external APIs during a live conversation. These actions can include authentication, headers, and dynamic parameters collected in real-time from the call. This enables agents to retrieve or send information instantly based on what the caller says.

* * *

## **Key Benefits of Voice AI Custom Actions**

Voice AI Custom Actions enable seamless integrations with external systems directly within a live call. This enhances the agent’s ability to personalize and resolve issues faster.

- Perform real-time API calls triggered by conversation cues.

- Automate data lookups or submissions mid-call.

  - **For example:** If a customer asks, “What’s the status of my recent order?”, the AI can instantly call your order management system and retrieve the real-time status—without putting the caller on hold.
- Configure POST requests with authentication and headers.

- Dynamically pass call data, like phone numbers or order IDs.

- Test webhook responses before going live.

- Reduce follow-up tasks by resolving needs during the call.


* * *

## **Voice AI** **Conversation Triggers**

Triggers define the conditions under which a Custom Action is executed during the call. You can create simple phrase-based triggers or configure more complex logic. Triggers can also be layered with **conditions** like “only run if parameter X is present.”

**Example triggers:**

- When a user says: “I want to check my appointment.”

- When an email is mentioned.

- When a string of digits (e.g., order number) is spoken.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755629/original/vgHTKbSkl3-K92KksuOOFk68vYIqwNYOkw.png?1760133377)

* * *

## **Webhook Custom Action**

Webhook integration is the core of Voice AI Custom Actions. It allows your agents to interact with any external system that supports APIs—CRM, scheduling tools, databases, and more.

**Each Custom Action is defined by a POST request, which may include:**

- A webhook endpoint URL.

- Headers (e.g., API keys, tokens).

- A request body with dynamic parameters.

- Authentication (Bearer token, Basic Auth, etc.).


**Example:** If you’re integrating with a CRM like Salesforce, your webhook URL might target an endpoint like /api/v1/lookupContact and include parameters like the contact’s email or phone number.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755818/original/0AnIb0Kcut2JhaBPtg13Hc2HJYhgfZpu7A.png?1760134023)

* * *

## **Dynamic Parameter Collection**

Voice AI can extract and label relevant data in real time during conversations. These values are automatically assigned to parameters used in the webhook request. This is useful when, for example, the AI needs to extract both an order number and an email address before triggering a shipping status lookup. You can assign these extracted values to your webhook payload, ensuring the integration is context-aware and personalized.

**Supported data types:**

- Text (String)

- Number (Numeric)

- Email

- Phone Number

- Date


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755787/original/ce1pQwudBZ1h7MA3OKbJUXB1XQna-sm0fA.png?1760133816)

* * *

## **How to Set Up Voice AI Custom Actions**

Voice AI Custom Actions can be configured from the Voice AI Agent interface with just a few steps. Here’s how to get started:

### **Step 1:** Navigate to your Voice AI Agent

Navigate to **Voice AI > Agent Goals > Switch to Advanced Mode ( _If not already enabled_) \> Custom Actions**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756037/original/ZDxjDk2l3UtR29agJ99VMgLzn8fPCh3gSg.gif?1760134862)

### **Step 2:** Create Custom Action

Click **\+ New Action** to open the custom action configuration window.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055755970/original/L86KAuL1cDyz8H2y8lY-p93YQNZgVNIgQw.jpeg?1760134618)

### **Step 3:** Configure Custom Action

Enter all necessary custom action details. Not all are required.

1. Name

2. Set **conversation trigger conditions**

   - **_For example:_** _If a user asks, “check my account balance”, you can set a trigger with the phrase "check my balance" and define a parameter for their phone number to pass into your banking API._
3. Add your **Webhook URL** and select **POST** as the method.

4. Add any custom **headers** as needed.

5. Enter any required **authentication** details (e.g., Bearer token).

6. Define **parameters** dynamically pulled from the conversation.

7. Use the **Test Webhook** feature to validate the setup.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756544/original/nF_csn19zfxSMnNRhz8aoPEHn3sVJIkc_Q.jpeg?1760136422)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756461/original/QakH6lkuv8dghp6PziRjzkrBE7VA8QnEpw.png?1760135971)

* * *

## **Voice AI -** **Real-time Testing**

Before saving a Custom Action, you can use the built-in **Test Webhook** tool. This allows you to simulate a call scenario, pass test data, and view the response from your external system in real time. You can use the test tool to mimic a customer asking to “reschedule an appointment” and check whether the webhook correctly pulls and sends the provided date and time to your calendar system.

**You’ll be able to:**

- See the full request (headers + body).

- View the raw response (200 OK, 404 Not Found, etc.). Example, If your webhook response includes an estimated delivery date, your AI agent can immediately inform the caller: “Your package is expected to arrive by Thursday.”

- Identify and fix misconfigurations before saving.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756518/original/QnD2obzf89LBLKjkEbmtslKhe45Euau57g.png?1760136257)

* * *

## **Frequently Asked Questions**

**Q: Can I use GET or other request types?**

No, only POST requests are currently supported for Custom Actions.

**Q: Where do I access Voice AI Custom Actions?**

You can access it under **Voice AI > Agent Goals > Switch to Advanced Mode ( _If not already enabled_) \> Custom Actions**.

**Q: Is authentication supported in webhooks?**

Yes, you can use Bearer tokens, Basic Auth, or pass keys in headers.

**Q: What if my webhook fails during the call?**

The system logs the failure, and fallback behavior can be defined if no data is returned or the webhook times out.

**Q: Can I trigger multiple webhooks during a single call?**

Yes. Each Custom Action can be triggered independently based on its own conditions.

**Q: Do I need a developer to set up these actions?**

Not necessarily. As long as you have access to the API documentation for the external system, you can set this up with minimal technical skills.

* * *

### **Related Articles**

- [AI Voice Agents Overview](https://help.gohighlevel.com/en/support/solutions/articles/155000003911)

- [Creating Voice AI Agents](https://help.gohighlevel.com/en/support/solutions/articles/155000004107)

- [Working Hours for AI Employee](https://help.gohighlevel.com/en/support/solutions/articles/155000004139)

- [Inbound Call Flow for Voice AI](https://help.gohighlevel.com/en/support/solutions/articles/155000003431)

- [Voice AI Custom Actions](https://help.gohighlevel.com/en/support/solutions/articles/155000005461)

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

- [AI Voice Agents Overview](https://help.gohighlevel.com/support/solutions/articles/155000003911-ai-voice-agents-overview)
- [Creating Voice AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000004107-creating-voice-ai-agents)
- [Testing Voice AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000004108-testing-voice-ai-agents)
- [Inbound Call Flow for Voice AI calls](https://help.gohighlevel.com/support/solutions/articles/155000003431-inbound-call-flow-for-voice-ai-calls)
- [Working hours for AI Employee](https://help.gohighlevel.com/support/solutions/articles/155000004139-working-hours-for-ai-employee)
- [Voice AI: Multi-Language Support](https://help.gohighlevel.com/support/solutions/articles/155000004683-voice-ai-multi-language-support)

## Related Articles

- [Voice AI Configuration Support for Snapshots](https://help.gohighlevel.com/support/solutions/articles/155000005151-voice-ai-configuration-support-for-snapshots)
- [Creating Voice AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000004107-creating-voice-ai-agents)
- [How to Edit a Voice AI Agent’s Voice (200 + English Voices)](https://help.gohighlevel.com/support/solutions/articles/155000005874-how-to-edit-a-voice-ai-agent-s-voice-200-english-voices-)
- [Appointment Booking for Voice AI Agents in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000005293-appointment-booking-for-voice-ai-agents-in-highlevel)
- [Listing Conversation AI and Voice AI Templates on the Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000005412-listing-conversation-ai-and-voice-ai-templates-on-the-marketplace)
- [Voice AI Outbound Calling](https://help.gohighlevel.com/support/solutions/articles/155000006598-voice-ai-outbound-calling)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions/hit)