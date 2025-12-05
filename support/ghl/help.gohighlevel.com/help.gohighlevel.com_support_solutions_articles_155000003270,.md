---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003270,"
title: " Workflow Action - DND Contact : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003270,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003270,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - DND Contact

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

# Workflow Action - DND Contact

Modified on: Mon, 2 Sep, 2024 at 4:46 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003270,#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003270,#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003270,#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003270,#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003270,#Example)

## Overview

The " **DND Contact**" action allows you to manage the Do-Not-Disturb (DND) settings for a contact. This action can enable or disable DND across all communication channels or specific ones. It’s useful for ensuring that contacts are not disturbed by automated messages when they have requested not to be contacted.

## Action Name

**DND Contact**

## Action Description

The "DND Contact" action provides options to:

1. Enable DND for all channels.
2. Enable DND for specific channels.
3. Disable DND for all channels.
4. Disable DND for specific channels.

By using this action, you can control the flow of communication based on the preferences or requirements of your contacts.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032057519/original/ccfN0F513a9XKNHYHa2bJlZkR397BBEuqQ.png?1725269343)

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Mark as Read or Unread | Choose to mark the conversation as either read or unread. Options include: None. Mark as Read. Mark as Unread | No |

#### **How to Configure**

1. **Action Name:** Enter a name for this action, such as "Enable DND for All Channels."
2. **DND:** Choose from the dropdown menu to either enable or disable DND, and specify whether it applies to all channels or only specific ones.

#### **Some Triggers which can be used with the action (But not limited to)**

- **Appointment Status Changed:**

  - **Trigger:** Use the "Appointment Status Changed" trigger.
  - **Configuration:** Set a filter for the appointment status to be "Completed" or "Showed" (depending on the terminology used in your system).
  - **Action:** Add the "DND Contact" action to disable DND, indicating that the contact can now receive communications.
- **Appointment Scheduled:**

  - **Trigger:** Use the "Appointment Scheduled" trigger.
  - **Configuration:** Add a condition to wait for a specific period after the appointment time (e.g., 1 hour after the scheduled end time).
  - **Action:** After the waiting period, add the "DND Contact" action to disable DND, assuming the appointment has been completed.
- **Task Completed:**

  - **Trigger:** Use the "Task Completed" trigger associated with appointment follow-up tasks.
  - **Configuration:** Link the task to follow-up actions post-appointment, such as sending a thank you email or a survey.
  - **Action:** Once the task is marked as completed, add the "DND Contact" action to disable DND, allowing communication to resume.
- **Custom Field Update:**

  - **Trigger:** Use a "Custom Field Update" trigger where a field is updated to indicate the appointment's completion.
  - **Configuration:** Create a custom field that is marked when the appointment is considered completed (manually or via another process).
  - **Action:** When this field is updated, use the "DND Contact" action to disable DND.
- **Manual Trigger via Internal Notification:**

  - **Trigger:** Set up a process where team members manually update a contact's record or status after verifying appointment completion.
  - **Configuration:** Use an internal notification or task completion as a trigger.
  - **Action:** Use the "DND Contact" action to disable DND for the contact.

## Example

**Scenario:** A customer has opted out of receiving promotional SMS but wants to stay updated via email.

1. Set up a workflow trigger when a contact opts out of SMS communication.
2. Add the "DND Contact" action.
3. Configure it to enable DND for SMS only while keeping other channels active.
4. This setup ensures the contact will not receive SMS notifications but can still receive updates via email or other preferred channels.

This approach respects customer preferences and helps maintain a positive relationship by avoiding unwanted communications.

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

- [Workflow Action - Create Contact](https://help.gohighlevel.com/support/solutions/articles/155000002685-workflow-action-create-contact)
- [Workflow Action - Find Contact](https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/155000002688-workflow-action-update-contact-field)
- [Workflow Action - Add Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003111-workflow-action-add-contact-tag)
- [Workflow Action - Add to Notes](https://help.gohighlevel.com/support/solutions/articles/155000003143-workflow-action-add-to-notes)
- [Workflow Action - Remove Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag)

## Related Articles

- [Workflow Trigger - Contact DND](https://help.gohighlevel.com/support/solutions/articles/155000002673-workflow-trigger-contact-dnd)
- [WhatsApp - Workflow Integration](https://help.gohighlevel.com/support/solutions/articles/155000001624-whatsapp-workflow-integration)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/155000002688-workflow-action-update-contact-field)
- [Workflow Action - WhatsApp](https://help.gohighlevel.com/support/solutions/articles/155000003531-workflow-action-whatsapp)
- [Workflow Trigger - Contact Changed](https://help.gohighlevel.com/support/solutions/articles/155000002477-workflow-trigger-contact-changed)
- [LC - Phone Messaging Policy](https://help.gohighlevel.com/support/solutions/articles/48001213941-lc-phone-messaging-policy)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003270,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003270-workflow-action-dnd-contact/hit)