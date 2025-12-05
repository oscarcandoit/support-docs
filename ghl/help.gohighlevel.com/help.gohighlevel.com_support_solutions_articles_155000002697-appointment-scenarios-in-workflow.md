---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow"
title: " Appointment scenarios in Workflow : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Appointment scenarios in Workflow

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

# Appointment scenarios in Workflow

Modified on: Mon, 21 Apr, 2025 at 10:57 AM

There can be multiple scenarios when a customer is booking an appointment. This document outlines the scenarios, how the workflow will behave in each case and what will be the contact's journey.

* * *

**TABLE OF CONTENTS**

- [Scenario 1 - Re-entry of a contact in workflows](https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow#Scenario-1---Re-entry-of-a-contact-in-workflows)
- [Scenario 2 - Appointment cancellation](https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow#Scenario-2---Appointment-cancellation)
- [Scenario 3 - Reschedule to a later date](https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow#Scenario-3---Reschedule-to-a-later-date)
- [Scenario 4 - Recurring appointments](https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow#Scenario-4---Recurring-appointments)

* * *

### **Scenario 1 - Re-entry of a contact when appointment is booked**

A customer can book multiple appointments at once. For Appointment trigger, a contact can enter the workflow multiple times even if the contact is already present in the workflow.

A contact can book multiple appointments so the contact should be able to enter the workflow multiple times irrespective of Allow Re-entry or it being already present in the workflow.

For the remaining scenarios we will be using the below mentioned example

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155028142590/original/NzSiC9Gn4xhkokwGJlPz1TcTvvoZXY2ziA.png?1719296925)

* * *

### **Scenario 2 - Appointment cancellation**

**Example:**

- **Current Date:** June 20
- **Appointment Date:** June 25
- **Workflow Step:** The contact is at the "Wait for 5 days" step.

**Change:** The customer cancels the appointment.

**When the appointment is treated as "Cancelled"**\- If the appointment status is changed from New/Confirmed/Show to Cancel/Invalid/No Show then the appointment is treated as "Cancelled"

**Result:** The customer will be pulled out of the workflow, and no further actions will occur.

**Why -** As the contact has cancelled the appointment no further actions should be performed.

* * *

### **Scenario 3 - Reschedule to a later date**

**Example:**

- **Current Date:** June 20
- **Original Appointment Date:** June 25
- **New Appointment Date:** June 30
- **Workflow Step:** The contact is at the "Wait for 5 days" step.

**Change:** The customer reschedules the appointment to June 30.

**When the appointment is treated as "Rescheduled"**\- When there are changes in the "Start time" and "End time" of an appointment then it is treated as "Rescheduled"

**Result:** The contact will be pulled out of the workflow. If the workflow has a trigger set to fire on _Appointment Status = Rescheduled_, and the rescheduled appointment matches all trigger filter conditions (e.g., correct calendar, assigned user), the contact will re-enter the workflow — _but only if the “Allow Re-entry” setting is enabled in the workflow’s settings._

**Why** \- When an appointment is rescheduled (i.e., start and/or end time changes), it updates the appointment status. If this updated status matches the criteria of a workflow trigger with “Allow Re-entry” enabled, the contact can re-enter and continue receiving communication relevant to the new appointment time. If the conditions aren't met, the contact will not re-enter the workflow.

* * *

### **Scenario 4 - Recurring appointments**

**Explanation:** Recurring appointments will not trigger entry through the "Customer Booked Appointment" trigger.

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

- [Create Task Event In Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001147413-create-task-event-in-campaigns)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/48001213546-workflow-trigger-contact-tag)
- [Workflow Action - Edit Conversation](https://help.gohighlevel.com/support/solutions/articles/48001214153-workflow-action-edit-conversation)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/48001214441-workflow-action-update-contact-field)
- [Workflow Action - Update Contact Field - Date type field](https://help.gohighlevel.com/support/solutions/articles/48001216170-workflow-action-update-contact-field-date-type-field)
- [Workflow Action - Math Operation](https://help.gohighlevel.com/support/solutions/articles/48001216182-workflow-action-math-operation)

## Related Articles

- [Workflow Action - Send SMS](https://help.gohighlevel.com/support/solutions/articles/155000002474-workflow-action-send-sms)
- [If/Else Workflow Action - Appointment Filter Options](https://help.gohighlevel.com/support/solutions/articles/155000004050-if-else-workflow-action-appointment-filter-options)
- [Workflows Landing Page](https://help.gohighlevel.com/support/solutions/articles/155000004871-workflows-landing-page)
- [Advanced Settings Overview - Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000004415-advanced-settings-overview-conversation-ai)
- [Workflow Action - Update Custom Values](https://help.gohighlevel.com/support/solutions/articles/155000003353-workflow-action-update-custom-values)
- [Workflow AI Builder](https://help.gohighlevel.com/support/solutions/articles/155000006100-workflow-ai-builder)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002697-appointment-scenarios-in-workflow/hit)