---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action"
title: " Create Appointment Note - Workflow Action : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
4. [Scheduling Appointments](https://help.gohighlevel.com/support/solutions/folders/155000000678)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
   - [Scheduling Appointments](https://help.gohighlevel.com/support/solutions/folders/155000000678)
6. Create Appointment Note - Workflow Action

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

# Create Appointment Note - Workflow Action

Modified on: Wed, 5 Feb, 2025 at 1:52 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action#Overview)
- [Inputs](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action#Inputs)
- [How It Works](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action#How-It-Works)
- [How to Set Up](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action#How-to-Set-Up)
- [Important Considerations](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action#Important-Considerations)

* * *

## Overview

We have introduced a new action under the **Appointments** category called **Create Appointment Note**. This action allows you to add notes to an appointment through a workflow.

* * *

## Inputs

- **appointmentId** (string) – Required when using inbound webhook trigger.

- **body** (string, max length: 5000 characters) – The content of the appointment note.


* * *

## How It Works

- If you are using any **appointment-based trigger** (e.g., Appointment Status, Customer Booked Appointment), **the appointment ID is not required**. The note will be added to the appointment enrolled in the workflow.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041031684/original/eYU7rtJBrAfU-VyxQwoF7gfm3GvRZGPYrw.png?1738741881)

- If you are using an **Inbound Webhook trigger**, you must **pass the appointment ID** to ensure the note is added to the correct appointment.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021416/original/--VuVUw7nr3ibUlOnp2uwplE_Ch5mbJ8rA.png?1738724824)

* * *

## How to Set Up

### **Action Name: Create Appointment Note**

### **Steps to Use This Action**

1. **Navigate to:**`Automations > Create New Workflow > Start From Scratch`

2. **Add a Trigger:**

   - Choose a trigger such as **Inbound Webhook, Appointment Status, or Customer Booked Appointment**.
3. **Add an Action:**

   - Select **Add Action > Create Appointment Note**.

   - Enter an action name.

* * *

### **Configuring Inputs**

#### If using an **Inbound Webhook trigger**:

- **Appointment ID:** Add the appointment ID using this custom value:


```
{{inboundWebhookRequest.appointmentId}}
```

- **Note Body:** Use the following custom value to add the note content:


```
{{inboundWebhookRequest.body}}
```


#### ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155041021460/original/ZhNR2bzmR0UTPtSsgcdxbRzU9HcET3HrTw.png?1738724940)

#### If using an **Appointment-based trigger** (Appointment Status or Customer Booked Appointment):

- **Appointment ID is not required**.

- **Note Body:** You can manually enter a custom note of your choice.


* * *

## Important Considerations

- If using **Inbound Webhooks**, ensure that the webhook payload includes both **appointmentId** and **body** for seamless functionality.

- The **body field** has a maximum limit of **5000 characters**.


This feature allows businesses to efficiently log appointment-related notes directly through workflow automation, reducing manual effort and improving organization.

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

- [Manually Booking Calendar Appointments](https://help.gohighlevel.com/support/solutions/articles/48001209829-manually-booking-calendar-appointments)
- [How to Create & Manage Appointment Notes & Sync them Across Records](https://help.gohighlevel.com/support/solutions/articles/155000003444-how-to-create-manage-appointment-notes-sync-them-across-records)
- [Appointment List View in Calendars (Smart List)](https://help.gohighlevel.com/support/solutions/articles/155000003447-appointment-list-view-in-calendars-smart-list-)
- [Workflow Action: Book Appointment](https://help.gohighlevel.com/support/solutions/articles/155000004209-workflow-action-book-appointment)
- [Create Appointment Note - Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action)
- [View Custom Form Submissions (Appointment Side Drawer)](https://help.gohighlevel.com/support/solutions/articles/155000004992-view-custom-form-submissions-appointment-side-drawer-)

## Related Articles

- [If/Else Workflow Action - Appointment Filter Options](https://help.gohighlevel.com/support/solutions/articles/155000004050-if-else-workflow-action-appointment-filter-options)
- [Workflow Action - Create/Update Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000002476-workflow-action-create-update-opportunity)
- [Action - Add to Workflow -> Workflow Action - Add to Workflow](https://help.gohighlevel.com/support/solutions/articles/155000002554-action-add-to-workflow-workflow-action-add-to-workflow)
- [Conversation AI Flow Builder](https://help.gohighlevel.com/support/solutions/articles/155000006515-conversation-ai-flow-builder)
- [Workflow Action - Set Event Start Date](https://help.gohighlevel.com/support/solutions/articles/48001202723-workflow-action-set-event-start-date)
- [WhatsApp Flows: In app Appointment Booking](https://help.gohighlevel.com/support/solutions/articles/155000003720-whatsapp-flows-in-app-appointment-booking)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004580-create-appointment-note-workflow-action/hit)