---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user"
title: " Workflow Action - Assign User : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - Assign User

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

# Workflow Action - Assign User

Modified on: Tue, 15 Oct, 2024 at 5:45 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user#Example)

## Overview

The **Assign User** action allows you to allocate specific contacts to designated users. This action is essential for managing workflows and ensuring that contacts are assigned to the right team members, either directly or using a round-robin assignment. This feature helps streamline tasks and maintain an organized approach to customer relationship management.

## Action Name

**Assign User**

## Action Description

This action assigns a contact to a specific user or multiple users within the system. You can assign contacts to users based on your organisational needs or use the round-robin method to distribute contacts evenly among multiple users. There's also an option to apply this action only to unassigned contacts, ensuring that reassignment doesn't occur unnecessarily.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032055778/original/xTYatckBkze-E3_JAgViaNy5iWKLwJv75w.png?1725268527)

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Action Name | Enter a name for this action. This helps you identify the purpose of the action in your workflow. | Yes |
| Users | Select one or more users to whom the contact should be assigned. For round-robin, select multiple users. | Yes |
| Only Apply to Unassigned Contacts | Toggle this option to ensure that only unassigned contacts are assigned. If switched off, all contacts can be reassigned. | No |

**How to Configure the Assign User Action**:

1. **Action Name**: Provide a descriptive name for the action, such as "Assign to Sales Rep" or "Round Robin Assignment."
2. **Users**: Click on the dropdown and select one or more users from the list. If you want to use round-robin assignment, choose multiple users.
3. **Only Apply to Unassigned Contacts**: Toggle this option on to restrict the action to only unassigned contacts. This helps in preventing overwriting existing user assignments.

**Note :** A dropdown option in users option section allows users to select between a standard value or a custom value picker.

- Standard Values: Users can input data based on the field type (e.g., date, dropdown, tag).
- Custom Value Picker: Users can input data from custom fields, such as values from an inbound webhook trigger or other custom fields.

**Some Triggers to Combine with This Action (But not limited to)**

1. **New Lead Created**: When a new lead is created, use this trigger to automatically assign the lead to a sales representative.

2. **Contact Changed**: Use this trigger to reassign a contact if certain conditions change, such as a contact's tag or status update indicating they need more personalized attention.

3. **Form Submitted**: Trigger this action when a specific form is submitted, ensuring that the contact is immediately assigned to a user for follow-up.


## Example

**Configuration Example**:

You have a workflow where new contacts from your website's lead form need to be distributed among your sales team for follow-up.

- **Action Name**: "Assign New Lead"
- **Users**: Select all the sales team members (e.g., "John Doe," "Jane Smith," "Alex Johnson").
- **Only Apply to Unassigned Contacts**: Toggle this option on to ensure only new, unassigned contacts are distributed.

**Workflow Steps**:

1. **Trigger**: Form Submitted - This trigger activates when a new lead submits a form on your website.
2. **Action**: Assign User - Configured to distribute the new lead to one of the selected sales team members using round-robin.
3. **Action**: Send Notification - Optionally, send a notification email or SMS to the assigned sales rep to inform them of the new lead.

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

- [Workflow Action - Assign To User](https://help.gohighlevel.com/support/solutions/articles/155000003300-workflow-action-assign-to-user)
- [Workflow Action - Add Owner to Opportunity](https://help.gohighlevel.com/support/solutions/articles/155000004754-workflow-action-add-owner-to-opportunity)
- [How To Add a Manual Call Action to a Workflow](https://help.gohighlevel.com/support/solutions/articles/48000979920-how-to-add-a-manual-call-action-to-a-workflow)
- [Workflow Action - Task Notification](https://help.gohighlevel.com/support/solutions/articles/155000003375-workflow-action-task-notification)
- [Workflow Action - Remove Assigned User](https://help.gohighlevel.com/support/solutions/articles/155000003268-workflow-action-remove-assigned-user)
- [How To Setup Automatic Calls and Voicemail Drops](https://help.gohighlevel.com/support/solutions/articles/48000981430-how-to-setup-automatic-calls-and-voicemail-drops)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003267-workflow-action-assign-user/hit)