---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call"
title: " Workflow Action - Log External Call : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Conversations](https://help.gohighlevel.com/support/solutions/48000449587)
4. [Conversations](https://help.gohighlevel.com/support/solutions/folders/48000666160)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Conversations](https://help.gohighlevel.com/support/solutions/48000449587)
   - [Conversations](https://help.gohighlevel.com/support/solutions/folders/48000666160)
6. Workflow Action - Log External Call

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

# Workflow Action - Log External Call

Modified on: Mon, 19 Aug, 2024 at 3:25 PM

How to Log External Calls in Your CRM with Webhooks - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[How to Log External Calls in Your CRM with Webhooks](https://www.youtube.com/watch?v=xt44bMzQyKQ)

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

[Watch on](https://www.youtube.com/watch?v=xt44bMzQyKQ&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 2:49
•Live

•

This document explains how to use the workflow action - Log External Call, to log calls from third-party calling tools into the CRM.

### **Covered in this Article:**

1. What is the Workflow Action - Log External Call?
2. How to use this action?

### **What is the Workflow Action - Log External Calls?**

Using this workflow action, you can post your external calls, that take place from third-party calling tools, to the CRM. This ensures that all your communication details are centralized within the CRM for better tracking and management. You can also pass the call recordings using this action and this will be visible on the Conversations section of contact.

### **How to use this action?**

**You can effectively use this action with the Inbound Webhook Trigger. This trigger provides you with a webhook URL that you can call to share the call details, whenever a call takes place in your calling system.**

**Configuring the Inbound Webhook Trigger: [Help Document](https://help.gohighlevel.com/a/solutions/articles/48001237383?portalId=48000045315)**

**Once the trigger is configured, add the If/Else brach with direction field to separate inbound and outbound flows.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049016/original/1ZSk4ELYuOe5RoJrZckFQ2fb0j7W29rpDw.png?1722256105)**

**Note: direction field can be accessed from Inbound Webhook Trigger option![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049335/original/i150SOLnrV0vzOpcX5AFX8GDS4qb2g5aCQ.png?1722256238)**

**After creating two branches for Inbound calls and Outbound calls, Add "Create Contact Action. This will identify the contact on which the call should be posted using the phone numbers that you pass in the webhook.**

**In Create Contact Action, map the Phone field to "From Number" in Inbound call flow and "To Number" in the Outbound call flow. This will create/identify the contact associated with the given phone number.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030049744/original/wDhFwiA4PKkIt55s5hntwRsFrKy050Hdzw.png?1722256470)**

**Post this, Add the Log External Call action.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050022/original/bCkK1GTlWcW3c87myvaFIBEXFbgOvHwyDQ.png?1722256617)**

**For each field, Direction, Date, To, From, Call Status and Attachment, update the related values by clicking on custom values icon > Inbound Webhook Trigger.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050317/original/aov6CsyaGDQwCtzXJuoISUVm-7pMvKx2eA.png?1722256777)**

**Once the workflow is published, external calls will be logged in the CRM and visible in Conversation section of the contact.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155030050720/original/NjOWrt1ItkIe7diZyhF_CwcgPJ5bdT37RQ.png?1722257002)**

Call recordings can also be passed to the CRM and will be shown within the Conversation.

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

- [Unread VS Read - Must Manually Mark as Read](https://help.gohighlevel.com/support/solutions/articles/48000980858-unread-vs-read-must-manually-mark-as-read)
- [View & Edit AI Response Info in Conversations](https://help.gohighlevel.com/support/solutions/articles/155000004183-view-edit-ai-response-info-in-conversations)
- [Overview of Conversation Filters](https://help.gohighlevel.com/support/solutions/articles/48001222121-overview-of-conversation-filters)
- [How to CC (Carbon Copy) and BCC (Blind Carbon Copy) for email composer](https://help.gohighlevel.com/support/solutions/articles/155000000444-how-to-cc-carbon-copy-and-bcc-blind-carbon-copy-for-email-composer)
- [Contact Engagement score](https://help.gohighlevel.com/support/solutions/articles/155000001251-contact-engagement-score)
- [Live Chat](https://help.gohighlevel.com/support/solutions/articles/155000001320-live-chat)

## Related Articles

- [SIM-based calling with the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000005814-sim-based-calling-with-the-mobile-app)
- [Workflow Actions - Log External Call](https://help.gohighlevel.com/support/solutions/articles/155000003460-workflow-actions-log-external-call)
- [Workflow Trigger - Call Status](https://help.gohighlevel.com/support/solutions/articles/155000002552-workflow-trigger-call-status)
- [How to Fix Bad Call Quality](https://help.gohighlevel.com/support/solutions/articles/48000981694-how-to-fix-bad-call-quality)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [Physical VoIP Deskphones (SIP)](https://help.gohighlevel.com/support/solutions/articles/155000005487-physical-voip-deskphones-sip-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002930-workflow-action-log-external-call/hit)