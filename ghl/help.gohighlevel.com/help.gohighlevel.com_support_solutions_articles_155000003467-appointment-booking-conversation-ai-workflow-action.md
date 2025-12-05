---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action"
title: " Appointment Booking Conversation AI Workflow Action : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [AI Appointment Booking Bot](https://help.gohighlevel.com/support/solutions/folders/48000685924)
6. Appointment Booking Conversation AI Workflow Action

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

# Appointment Booking Conversation AI Workflow Action

Modified on: Tue, 17 Sep, 2024 at 9:29 AM

How to Use Conversation AI Workflow to Book Appointments in GoHighLevel - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[How to Use Conversation AI Workflow to Book Appointments in GoHighLevel](https://www.youtube.com/watch?v=3V9j32z61Gg)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=3V9j32z61Gg&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 5:47
•Live

•

Utilize the new "Appointment Booking Conversation AI" workflow action to harness the power of AI and book appointments for you and your clients

**TABLE OF CONTENTS**

- [Components of the Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#Components-of-the-Workflow-Action)
  - [Calendar](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#Calendar)
  - [Personality and Additional Instructions](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#Personality-and-Additional-Instructions)
  - [Maximum Messages Limit before it goes to "APPOINTMENT NOT BOOKED"](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#Maximum-Messages-Limit-before-it-goes-to-)
  - [Time Out Value and Unit](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#Time-Out-Value-and-Unit)
  - [Channel](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#Channel)
  - [Don't let the bot send confirmation message](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action#Don't-let-the-bot-send-confirmation-message)

* * *

Understand the components of the Workflow Action to configure the AI bot as per your needs

# Components of the Workflow Action

## Calendar

This Calendar will be used to fetch available slots and suggest them to the contact and once selected by the contact, the appointment will be booked on this calendar.

```
Recurring calendars are not supported
```

## Personality and Additional Instructions

Use these prompt boxes to add personality and instructions to the AI to best suit your brand voice and increase the probability of getting the appointment booked

## Maximum Messages Limit before it goes to "APPOINTMENT NOT BOOKED"

This is the maximum number of messages within which the AI bot will try to book an appointment and it it fails, it will send the contact down the "Appointment not Booked" branch.

```
Maximum limit is 25 and minimum is 5. Recomended value for this field is 15
```

## Time Out Value and Unit

The time for which the AI bot waits for the contact to respond back to its answer. If the contact doesn't respond in the specified time, the contact is sent down the "Time Out" branch.

```
Use "GoTo" action in the Time Out branch and send the contact back to the same action to make the AI bot followup with the contact
```

## Channel

The conversation channel on which the AI bot will respond to the contact. Current support Channels are SMS, FB and IG

## Don't let the bot send confirmation message

By default, the AI bot sends the booking confirmation message (Example: Great, you are booked for 12th August at 6pm) once an appointment is booked. Checking this box will stop the AI bot from sending the confirmation message and the contact will directly be sent down the "Appointment Booked" branch as soon as appointment is booked

```
If enabled, Dont forget to add a confirmation message in the "Appointment Booked" branch to inform the contact of the progress and keep the conversation going
```

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

- [Conversation AI: Multiple Calendars Support for Appointment Booking](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking)
- [Workflow Action - Appointment Booking Conversation AI Booking Bot](https://help.gohighlevel.com/support/solutions/articles/155000003363-workflow-action-appointment-booking-conversation-ai-booking-bot)
- [AI Conversational Appointment Booking Workflow and Setup](https://help.gohighlevel.com/support/solutions/articles/48001216782-ai-conversational-appointment-booking-workflow-and-setup)
- [Conversation AI Flow Builder](https://help.gohighlevel.com/support/solutions/articles/155000006515-conversation-ai-flow-builder)
- [Conversation AI Bot - Explained](https://help.gohighlevel.com/support/solutions/articles/155000001335-conversation-ai-bot-explained)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003467-appointment-booking-conversation-ai-workflow-action/hit)