---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect"
title: " Workflow Setting Stop On Response & Call Action Disable Voicemail Detect : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Workflow Builder](https://help.gohighlevel.com/support/solutions/folders/48000678544)
6. Workflow Setting Stop On Response & Call Action Disab...

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

# Workflow Setting Stop On Response & Call Action Disable Voicemail Detect

Modified on: Tue, 4 Nov, 2025 at 4:06 PM

This article explains the important interaction between the workflow's "Stop on Response" setting and the "Disable Voicemail Detect" setting within the Call action.

These two settings control how your workflow reacts when an automated phone call is made to a contact. They allow you to decide whether the workflow should prioritize accuracy by distinguishing a human from a voicemail, or prioritize speed for faster call connections.

The main [Workflow Settings - Overview](https://help.gohighlevel.com/en/support/solutions/articles/48001239875) article is here.

```
Note that what the Business does in the Call action is irrelevant to Stop on Response. The Business will be called first; if the Business doesn't answer, the workflow will continue, if the Business does answer, and the Contact then doesn't answer, the workflow will continue. Only the Contact (or the Contact's voicemail) is relevant to Stop on Response.
```

* * *

## **Stop on Response**

This is a general setting for your entire workflow. When enabled, it automatically removes a contact from the workflow if they respond to any communication sent from it, including SMS, emails, or calls. This prevents you from sending more automated messages to a lead who is already engaged.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056954910/original/ExA6xUTEZTcK0JLbf1jsuHXFp7yL2rBvPg.png?1761609860)

* * *

## **Disable Voicemail Detect**

This is an advanced setting found specifically within the "Call" action. Its job is to control whether the system attempts to identify if a call was answered by a person or an answering machine.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056954924/original/iFgpTL5EKEjFsCvGfpReEPw1rPfH3D3g5g.png?1761609939)

* * *

## **Combinations**

Understanding how to configure these settings depends on your goal. Do you want to ensure the workflow never stops for a voicemail, or do you want the fastest possible call connection time?

|     |     |     |
| --- | --- | --- |
| Stop On Response is | Disable Voicemail Detect is | Therefore |
| ON | ON | The workflow will stop if the contact's voicemail answers.<br>Set the call timeout to less than 20 seconds to ensure the call will not go to voicemail. |
| ON | OFF | The workflow will detect voicemail, so calls that go to voicemail will not activate Stop On Response, the contact will continue in the workflow. |
| OFF | OFF | The workflow will continue regardless of contact responses or voicemail.<br>This will be a little slower since voicemail detection is enabled by default. |
| OFF | ON | The workflow will continue regardless of contact responses or voicemail.<br>This will be a little faster since voicemail detect is disabled. |

* * *

## **Frequently Asked Questions**

**Q: Why is my workflow stopping after a call even if the person didn't answer?**

A: This typically happens when you have "Stop on Response" enabled for the workflow and "Disable Voicemail Detect" enabled on the Call action. If the call goes to voicemail, the system sees it as a response and stops the workflow. To prevent this, set the "Call Timeout" on that action to 20 seconds or less.

**Q: What causes the delay when voicemail detection is enabled?**

A: When voicemail detection is on (the default setting), the system pauses for a few seconds after the call is answered to analyze the audio. It is listening for indicators of a live person versus a pre-recorded voicemail greeting. This analysis causes the short delay before the call is fully connected.

**Q: What is the recommended 'Call Timeout' to avoid triggering voicemail?**

A: A timeout of 20 seconds is generally recommended. Most phone services and mobile carriers will ring for more than 20 seconds before forwarding the call to a voicemail service.

**Q: Does 'Stop on Response' apply to manual calls I make from the Conversations tab?**

A: No. The "Stop on Response" setting only applies to automated actions sent from within that specific workflow. Manual communications or communications from other workflows will not affect it.

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

- [Workflow Action - Call](https://help.gohighlevel.com/support/solutions/articles/155000003274-workflow-action-call)
- [Workflow Settings - Overview](https://help.gohighlevel.com/support/solutions/articles/48001239875-workflow-settings-overview)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)
- [Workflow Action - IVR Connect Call](https://help.gohighlevel.com/support/solutions/articles/155000003371-workflow-action-ivr-connect-call)
- [Workflow Action - Record Voicemail](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail)
- [How To Setup Automatic Calls and Voicemail Drops](https://help.gohighlevel.com/support/solutions/articles/48000981430-how-to-setup-automatic-calls-and-voicemail-drops)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006910-workflow-setting-stop-on-response-call-action-disable-voicemail-detect/hit)