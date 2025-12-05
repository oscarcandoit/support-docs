---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions"
title: " Workflow Action - Remove Contact Tag : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - Remove Contact Tag

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

# Workflow Action - Remove Contact Tag

Modified on: Wed, 18 Sep, 2024 at 2:10 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions#Example)

## Overview

The **Remove Contact Tag** action is used to remove specific tags from a contact's profile within your CRM. This action is useful for managing contact segments, updating contact status, and ensuring accurate tracking of interactions and behaviors.

## Action Name

**Remove Contact Tag**

## Action Description

This action removes the selected or all tag(s) from a contact's record. Tags are often used to categorize contacts based on their interactions, interests, or status. By removing a tag, you can alter a contact's segmentation and the workflows they may be a part of.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033057116/original/wQImrBPmuP4sN3SmiwE4HK1tW8oOoC6biw.png?1726642708)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033057217/original/GPaLbK2PrsfWH0vtgOFzs6f1h_rpmZEkcQ.png?1726642832)

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Tags | Select the tag(s) you wish to remove from the contact's profile. You can choose multiple tags. | Yes |
| Remove All Tags | Switch on the toggle if you want to remove all the tags | No |

**How to Configure the Remove Contact Tag Action**:

1. **Action Name**: Enter a meaningful name for the action. This name will help you identify the purpose of this action in the workflow.
2. **Tags**: Click on the "Select a tag" dropdown and choose the tag(s) you want to remove from the contact. You can select multiple tags if needed.
3. **Remove All Tags:** Switch on the toggle if you want all the tags to removed. When the toggle is switched on they user will not be able to access the "Tags" field.

**Suggested Triggers to Combine with This Action (But not limited to)**

1. **Customer Replied**: Use this trigger to remove a tag based on specific keywords or phrases in a customer's reply. For example, if a customer responds with "unsubscribe" or "not interested," you might remove tags like "Interested" or "Potential Lead."

2. **Appointment Status Changed**: This trigger can initiate the tag removal action if an appointment is canceled or rescheduled. You could remove tags like "Appointment Booked" to accurately reflect the contact's current status.

3. **Survey Submitted**: If a survey response indicates that a contact is no longer interested in a service or product, use this trigger to remove tags that categorize them as a potential customer.


## Example

**Configuration Example**:

You are running a campaign where contacts are tagged as "Interested" when they sign up for a webinar. If they do not attend the webinar, you want to remove this tag to avoid sending them follow-up emails intended for engaged participants.

- **Action Name**: "Remove Webinar Interested Tag"
- **Tags**: "Interested"

**Workflow Steps**:

1. **Trigger**: Webinar Not Attended - Triggers if a contact does not attend the scheduled webinar.
2. **Action**: Remove Contact Tag - Configured to remove the "Interested" tag from these contacts.
3. **Action**: Update Contact Field - Optionally, add a new tag like "Missed Webinar" to accurately segment these contacts for future follow-ups or different workflows.

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

- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/48001213546-workflow-trigger-contact-tag)
- [Workflow Action - Course Revoke Offer](https://help.gohighlevel.com/support/solutions/articles/155000003382-workflow-action-course-revoke-offer)
- [Workflow Trigger - Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000002482-workflow-trigger-contact-tag)
- [Workflow Trigger - Contact DND](https://help.gohighlevel.com/support/solutions/articles/155000002673-workflow-trigger-contact-dnd)
- [Workflow Action - AI Decision Maker](https://help.gohighlevel.com/support/solutions/articles/155000005649-workflow-action-ai-decision-maker)
- [Workflow Action - If/Else](https://help.gohighlevel.com/support/solutions/articles/155000002471-workflow-action-if-else)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003266-subscriptions)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag/hit)