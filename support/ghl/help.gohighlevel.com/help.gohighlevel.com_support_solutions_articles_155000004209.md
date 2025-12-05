---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004209"
title: " Book Appointment Action in Workflows : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004209#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004209#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Calendars & Appointments](https://help.gohighlevel.com/support/solutions/48000449585)
   - [Scheduling Appointments](https://help.gohighlevel.com/support/solutions/folders/155000000678)
6. Workflow Action: Book Appointment

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

# Workflow Action: Book Appointment

Modified on: Thu, 28 Aug, 2025 at 8:06 AM

The Book Appointment workflow action lets your workflow automatically create an appointment on a selected calendar when a trigger fires. It’s designed for teams that want to auto‑schedule follow‑ups from events like form submissions, inbound webhooks, or CRM updates—without manual effort.

## **What is the Book Appointment Workflow Action?**

The Book Appointment action enables the creation of new appointments based on specified times and in specified calendars. Users can now configure a Book Appointment action through workflows, which allows appointments to be created based on trigger events. This is ideal for businesses looking to automate appointment bookings through specific triggers.

**Some key points:**

- You must choose a Calendar to receive the booking.

- Team members can be set to Calendar Default (e.g., round robin) or a specific member.

- Dynamic time can be mapped from trigger data (e.g., webhook payloads or form fields). If the incoming format doesn’t match supported patterns, use Date Time Formatter.

- If no one is available (and override is off), the appointment won’t be created.

```
Limitation: Calendars that have 'Recurring' enabled cannot be selected for the 'Book Appointment' action.
```

* * *

## **Key Benefits of using Book Appointment Workflow Action**

Trigger‑driven scheduling that respects real availability, reduces manual work, and cleanly branches next steps based on success/failure.

- **Efficient follow‑ups** — Auto‑book from forms, chat, or webhooks.

- **Higher conversion** — Lock in time while intent is fresh.

- **Flexible assignment** — Use calendar defaults (e.g., round robin) or pick a specific team member.

- **Reliable logic** — Branch on **Appointment booked successfully** for confirmations, nudges, or fallback actions.


* * *

## **Setting up the Book Appointment Workflow Action**

Creating a Book Appointment step links your workflow to a target calendar and defines when/with whom the appointment will be created.

### **Step 1:** Go to Automations

Navigate to Automations → Create New Workflow → Start From Scratch. Then add a trigger. Examples: **Form Submitted**, **Inbound Webhook**, or other relevant triggers.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052586842/original/0riEYOvbFN-W1cUn2lcfd4jm7A_8xWP-NA.gif?1756384342)

### **Step 2:** Add the action

Click **Add Action → Book Appointment** and give it a clear **Action name** (e.g., “Book demo with Sales”).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052587208/original/PlSK-h6vSCDjLAUPpKBZr9mgvrSW9O0V5Q.png?1756384481)

### **Step 3:** Choose a Calendar, Team Member, and Set Appointment Date & Time

**Calendar**: Select the target calendar that will receive bookings.

**Team member**:

- **Calendar Default** — follows calendar assignment rules (e.g., round robin).

- **Specific member** — explicitly route to one person.


**Set Appointment Date & Time:**

For dynamic start dates and times, ensure your format is compatible. Use the Date Time Formatter action to convert the date and time format if necessary.

- **Standard** — Fixed date/time for all bookings created by this workflow.

- **Dynamic** — Map date/time from trigger data (e.g., webhook payload, form field, or custom value).

- **Supported formats (examples):**

  - MM-DD-YYYY HH:MM → 12-21-2021 08:30 AM

  - DD-MMM-YYYY HH:MM → 21-OCT-2021 08:30 AM



    If your input doesn’t match a supported format, insert a **Date Time Formatter** step before Book Appointment to reformat.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052589247/original/kB3ftIpttgUl3WnvXJc-OGTR13VAvEksbQ.png?1756385194)

```
IMPORTANT: Override availability —

1. Off: system checks availability before booking.

2. On: book without availability checks (use sparingly).

(Optional) Add Action Description or internal notes if your template includes them.
```

* * *

## **Frequently Asked Questions**

**Q. Will the action respect calendar availability?**

Yes, unless you enable **Override availability**.

**Q. Can I branch logic based on success/failure?**

Yes—add **If/Else** and use **Appointment booked successfully** (True/False) to route outcomes.

**Q. Which date/time formats are supported for Dynamic?**

See the formats under **Step 5**. If needed, add a **Date Time Formatter** step.

**Q. Can I assign bookings via round robin?**

Yes—choose **Calendar Default** to follow the calendar’s assignment rules.

**Q. What if the booking fails?**

Use the False branch to notify the team, create a task, or try an alternate time.

**Q. Any limitations with the Book Appointment Workflow Action?**

Calendars with **Recurring** enabled cannot be selected in the Book Appointment action.

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

- [Conversation AI: Multiple Calendars Support for Appointment Booking](https://help.gohighlevel.com/support/solutions/articles/155000006559-conversation-ai-multiple-calendars-support-for-appointment-booking)
- [Appointment Booking for Voice AI Agents in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000005293-appointment-booking-for-voice-ai-agents-in-highlevel)
- [Workflow Trigger - Customer Booked Appointment](https://help.gohighlevel.com/support/solutions/articles/155000002675-workflow-trigger-customer-booked-appointment)
- [How to automatically add an appointment date to a Contract?](https://help.gohighlevel.com/support/solutions/articles/155000006959-how-to-automatically-add-an-appointment-date-to-a-contract-)
- [Manually Booking Calendar Appointments](https://help.gohighlevel.com/support/solutions/articles/48001209829-manually-booking-calendar-appointments)
- [Workflow Trigger – Service Booking (Services v2)](https://help.gohighlevel.com/support/solutions/articles/155000006140-workflow-trigger-service-booking-services-v2-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004209)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004209-workflow-action-book-appointment/hit)