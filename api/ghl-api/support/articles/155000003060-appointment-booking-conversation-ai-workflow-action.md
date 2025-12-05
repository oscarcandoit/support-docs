---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action
category: articles
type: article
scraped: 2025-10-28T16:10:24.242Z
title:  Appointment Booking Conversation AI Workflow Action : LeadConnector 
status_code: 200
---

#  Appointment Booking Conversation AI Workflow Action : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Conversation AI Bot](https://help.leadconnectorhq.com/support/solutions/155000000111) [Conversation AI](https://help.leadconnectorhq.com/support/solutions/folders/155000000765)

## Appointment Booking Conversation AI Workflow Action  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action\# "Print this Article")

Modified on: Thu, 2 Jan, 2025 at 5:03 AM

* * *

Utilize the new "Appointment Booking Conversation AI" workflow action to harness the power of AI and book appointments for you and your clients

**In This Article**

- [Components of the Workflow Action](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action#Components-of-the-Workflow-Action)
  - [Calendar](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action#Calendar)
  - [Personality and Additional Instructions](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action#Personality-and-Additional-Instructions)
  - [Maximum Messages Limit before it goes to "APPOINTMENT NOT BOOKED"](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action#Maximum-Messages-Limit-before-it-goes-to-)
  - [Time Out Value and Unit](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action#Time-Out-Value-and-Unit)
  - [Channel](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action#Channel)
  - [Don't let the bot send confirmation message](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action#Don't-let-the-bot-send-confirmation-message)

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

The conversation channel on which the AI bot will respond to the contact. Current support Channels are SMS, WhatsApp, FB and IG

## Don't let the bot send confirmation message

By default, the AI bot sends the booking confirmation message (Example: Great, you are booked for 12th August at 6pm) once an appointment is booked. Checking this box will stop the AI bot from sending the confirmation message and the contact will directly be sent down the "Appointment Booked" branch as soon as appointment is booked

```
If enabled, Dont forget to add a confirmation message in the "Appointment Booked" branch to inform the contact of the progress and keep the conversation going
```

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000003060-appointment-booking-conversation-ai-workflow-action*  
*Generated on: 2025-10-28T16:10:24.242Z*
