---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call"
title: " Workflow Actions - Log External Calls in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Actions - Log External Call

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

# Workflow Actions - Log External Call

Modified on: Tue, 17 Sep, 2024 at 4:06 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call#Action-Description)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call#How-to-Configure)

## Overview

Using this workflow action, you can post your external calls, that take place from third-party calling tools, to the CRM. This ensures that all your communication details are centralized within the CRM for better tracking and management. You can also pass the call recordings using this action and this will be visible on the Conversations section of contact.

## Action Name

Log External Call

## Action Description

This action is essential for maintaining accurate records of communication, tracking interactions, and ensuring that all team members are informed about the status of customer relationships. By using this action, businesses can enhance their customer relationship management (CRM) efforts and improve overall communication strategies.

## How to Configure

**You can effectively use this action with the Inbound Webhook Trigger. This trigger provides you with a webhook URL that you can call to share the call details, whenever a call takes place in your calling system.**

**Configuring the Inbound Webhook Trigger: [Help Document](https://help.gohighlevel.com/a/solutions/articles/48001237383?portalId=48000045315)**

**Once the trigger is configured, add the If/Else brach with direction field to separate inbound and outbound flows.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991613/original/24LrQDtH5ygw9I_ZcbbhTvV06Dx1LMXJrQ.jpeg?1726563970)**

**Note: direction field can be accessed from Inbound Webhook Trigger option![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991607/original/9993xT0LYviYnfBNoc19VQhWgDIbcBec5A.png?1726563969)**

**After creating two branches for Inbound calls and Outbound calls, Add "Create Contact Action. This will identify the contact on which the call should be posted using the phone numbers that you pass in the webhook.**

**In Create Contact Action, map the Phone field to "From Number" in Inbound call flow and "To Number" in the Outbound call flow. This will create/identify the contact associated with the given phone number.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991610/original/RZWcAM1IHNjcp_ZQUg7ePzD7zzINYFUSZA.png?1726563970)**

**Post this, Add the Log External Call action.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991614/original/U0E3hTX1vSzhRyybhI8Ch4MQIRxYiVZXwQ.jpeg?1726563970)**

**For each field, Direction, Date, To, From, Call Status and Attachment, update the related values by clicking on custom values icon > Inbound Webhook Trigger.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991609/original/qPGcACU6zpiSZjFADSXRRLWRHWyOn12x-A.png?1726563970)**

**Once the workflow is published, external calls will be logged in the CRM and visible in Conversation section of the contact.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032991611/original/3rKb5m94uSvBK4htvBkU8CSlfk8w7hRMUw.jpeg?1726563970)**

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

- [Workflow Action - Log External Call](https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call)
- [SIM-based calling with the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000005814-sim-based-calling-with-the-mobile-app)
- [Workflow Trigger - Call Status](https://help.gohighlevel.com/support/solutions/articles/155000002552-workflow-trigger-call-status)
- [How To Add a Manual Call Action to a Workflow](https://help.gohighlevel.com/support/solutions/articles/48000979920-how-to-add-a-manual-call-action-to-a-workflow)
- [Workflow Action - Manual Call](https://help.gohighlevel.com/support/solutions/articles/155000003376-workflow-action-manual-call)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call/hit)