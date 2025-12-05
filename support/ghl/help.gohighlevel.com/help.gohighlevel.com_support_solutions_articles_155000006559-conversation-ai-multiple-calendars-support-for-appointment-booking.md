---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking"
title: " HighLevel Conversation AI Multiple Calendars for Appointment Booking : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [Conversation AI](https://help.gohighlevel.com/support/solutions/folders/155000000929)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Conversation AI](https://help.gohighlevel.com/support/solutions/folders/155000000929)
6. Conversation AI: Multiple Calendars Support for Appointme...

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

# Conversation AI: Multiple Calendars Support for Appointment Booking

Modified on: Tue, 14 Oct, 2025 at 9:40 AM

Enhance your scheduling flexibility with **HighLevel’s Conversation AI – Multiple Calendars Support**. This new capability enables AI bots to intelligently detect and book appointments across multiple calendars, simplifying multi-specialty or multi-department scheduling for your business.

* * *

## **What is Multiple Calendars Support?**

Multiple Calendars Support allows your AI Appointment Booking Bot to route booking requests to the correct calendar based on the customer’s intent. Instead of limiting your bot to a single calendar, you can now configure several calendars—each representing a service, department, or specialist—and let the AI automatically determine which one to use.

This feature is available under **Conversation AI → Appointment Booking Bot Goal** when setting up or editing an appointment booking flow.

* * *

## **Key Benefits of Multiple Calendars Support**

- **Smart Calendar Detection:** The AI automatically matches user requests to the most appropriate calendar based on descriptions and keywords.

- **Effortless Multi-Department Booking:** Manage appointments for different teams or services (e.g., Cardiology, Neurology, Physiotherapy) within one AI bot.

- **Fallback Calendar Assurance:** Ensure no booking is missed by setting a default fallback calendar for unmatched requests.

- **Seamless Workflow Integration:** Supports all previous workflow triggers (cancel, reschedule, post-booking automation) used with single-calendar booking.

- **Transparent Tracking:** Instantly view which calendar was used when reviewing appointment details in the conversation or appointment record.

* * *

## **Smart Calendar Detection**

The AI automatically detects and routes appointments to the right calendar using your configured **calendar names, descriptions, and optional keywords**. When a user types something like:

> “I want to consult a Neurologist for migraine headaches.”

The AI identifies the relevant **Neurology** calendar and retrieves available slots for booking.

**Screenshot:** Conversation view showing AI suggesting Neurology appointment slots based on user intent.

* * *

## **Fallback Calendar**

The fallback calendar acts as a safety net when none of the configured calendars match the user’s message. This ensures every appointment request is captured and booked, avoiding any lost opportunities.

- Select one of your configured calendars as the fallback option.

- If no intent matches the AI descriptions, the appointment will automatically book on this fallback calendar.


**Screenshot:** Appointment Booking configuration showing fallback calendar field.

* * *

## **How to Configure Multiple Calendars for Appointment Booking**

Follow these steps to enable and configure Multiple Calendars in your Conversation AI bot:

```
Note that the Appointment Booking option in Bot Goals has a prompt and also has details about the calendars. The calendar details are ONLY for intent classification. If you want the bot to be able to answer questions that information needs to be in the prompt (above the Appointment Booking button).

For example: if you want the bot to be able to discuss what kind of appointment to book and why, you need to duplicate that information into the prompt. The bot will not be able to discuss the details it finds in the calendar details.
```

1. Navigate to **AI Agents → Conversation AI → Bot Goals** and select **Appointment Booking**.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452724/original/ADKs-aZGBhqN-7v-7TtzmqO3GAWtFYDVqw.png?1759854653)

2. Choose the **Multiple Calendars** option at the top of the setup window.



_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452799/original/TVBNcuppvPui33rNLYt2aKmH3L-GCWse4A.png?1759854733)_

3. Under **Calendar Selection**, pick the calendars you want to include. Each calendar’s name and description are auto-fetched.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458637/original/0e3EEuOCqecPsHt0tViUWJtylV1K9rnt1A.png?1759859784)

4. Optionally, add **Additional Keywords & Descriptions** to help the AI recognize user intent. This is helpful if the calendar itself, in its calendar settings, does not have a detailed name & description. If the calendar has a detailed name & description then you don't need to put anything here.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458476/original/Ij9k6v74boU-1hwSoaLHkfX-_1texe_lmA.png?1759859603)

5. Configure a **Fallback Calendar** to handle unmatched requests. This can be unchecked to have no fallback calendar.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458890/original/3C_GDut3Q5QD9da_QPFtYOr9BsooKN6LJg.png?1759860013)

6. Proceed to **AI Configuration** and define your **AI prompt** (e.g., “Which type of consultation would you like to book?”).



_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055452947/original/y0tdQp5-yX14ncT-9GMtNbPf1bYqCYuFwA.png?1759854856)_

7. Proceed to Advanced Options

1. Pause bot response after booking

2. Trigger workflows after booking

3. Transfer employee post appointment booking

4. Allow bot to cancel the appointment

5. Allow bot to reschedule the appointmen



      ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055458984/original/taubBBqVVsTtgk5FESVJws1jx1r1fcwCvg.png?1759860118)
8. Save your configuration.

9. Bot Goals Preferences - Conversation Summary and Transcript are described in detail in this article:

[Conversation AI Summary and Transcript](https://help.gohighlevel.com/en/support/solutions/articles/155000006597).



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055460915/original/XpzPuGZEuhgJ7lqFMuczHpE8qDnh8ghnKg.png?1759862596)


Once enabled, the bot will automatically detect user intent and book appointments in the correct calendar based on conversation context.

* * *

## **AI Configuration Tips (Prompts & Keywords)**

Designing effective AI prompts and keywords helps ensure accurate routing:

- Use **clear service-based keywords** like “dentist,” “eye check,” or “consultation.”

- Write calendar descriptions in **plain language** so the AI can understand the context.

- Include **alternative phrases** for common user intents (e.g., “I need a doctor for my eyes” → Ophthalmology).

- Keep prompts concise and user-friendly: _“Which service would you like to book?”_ works better than long or complex phrasing.


**Screenshot:** AI Configuration view showing example calendar descriptions and keyword entries.

* * *

## **Viewing Booked Appointments and Calendar Details**

After an appointment is created, both the **conversation** and the **appointment detail drawer** will display which calendar was used to complete the booking.

- Open the conversation thread to see the AI’s confirmation message and slot details.

- Click **View Appointment** to open the details panel.

- The assigned calendar name (e.g., Neurology) appears clearly in the **Calendar** field.


**Screenshot:** Appointment detail view showing booked Neurology calendar.

* * *

## **Frequently Asked Questions**

**Q: Can I use both Single and Multiple Calendar modes?**

Yes. You can choose either mode based on your use case. Single Calendar works best for one service; Multiple Calendars is ideal for multi-specialty businesses.

**Q: How many calendars can I add?**

You can add multiple calendars, but it’s recommended to keep the list concise for more accurate AI matching.

**Q: What if the AI can’t identify the correct calendar?**

The fallback calendar will automatically handle such cases, ensuring every request results in a booked appointment.

**Q: Will my existing workflows still trigger?**

Yes. All previous automations and workflow triggers (such as notifications, reminders, and post-booking workflows) continue to work as before.

**Q: Can I use this feature for Voice AI calls?**

Not yet. Multiple Calendar Support currently applies to Conversation AI (chat) only. Voice AI integration is planned for a future update.

**Q: Is this feature generally available?**

This feature is currently in **Closed Beta** and available to early testers. Broader release will follow soon.

* * *

### **Related Articles**

- [How to Use Conversation AI to Book Appointments](https://help.gohighlevel.com/support/solutions/articles/155000000210-how-to-use-conversation-ai-to-book-appointments)

- [Workflow Action – Appointment Booking Conversation AI Bot](https://help.gohighlevel.com/support/solutions/articles/155000003363-workflow-action-appointment-booking-conversation-ai-booking-bot)

- [Conversation AI Post-Appointment Booking Actions](https://help.gohighlevel.com/support/solutions/articles/155000003421-conversation-ai-post-appointment-booking-actions)

- [Setting Up Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004401-setting-up-conversation-ai)


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

- [Using Conversation AI on Mobile (HighLevel & LeadConnector)](https://help.gohighlevel.com/support/solutions/articles/155000005184-using-conversation-ai-on-mobile-highlevel-leadconnector-)
- [Bot Status for Individual Contacts](https://help.gohighlevel.com/support/solutions/articles/155000004096-bot-status-for-individual-contacts)
- [Guided Form Based Setup for Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000005382-guided-form-based-setup-for-conversation-ai)
- [Conversation AI Agents Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000005427-conversation-ai-agents-dashboard)
- [Conversation AI: Snapshot Support - How to Snapshot Fully Configured Conversation AI Bots](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots)
- [Cancellation and Rescheduling of Appointments in Form Based Bots](https://help.gohighlevel.com/support/solutions/articles/155000005503-cancellation-and-rescheduling-of-appointments-in-form-based-bots)

## Related Articles

- [How to Use Conversation AI to Book Appointments](https://help.gohighlevel.com/support/solutions/articles/155000000210-how-to-use-conversation-ai-to-book-appointments)
- [Setting Up Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004401-setting-up-conversation-ai)
- [Appointment Booking for Voice AI Agents in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000005293-appointment-booking-for-voice-ai-agents-in-highlevel)
- [Appointment Booking Conversation AI Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action)
- [Listing Conversation AI and Voice AI Templates on the Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000005412-listing-conversation-ai-and-voice-ai-templates-on-the-marketplace)
- [How to use the AI Agent Marketplace Templates for Conversation AI and Voice AI Automation](https://help.gohighlevel.com/support/solutions/articles/155000005555-how-to-use-the-ai-agent-marketplace-templates-for-conversation-ai-and-voice-ai-automation)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking/hit)