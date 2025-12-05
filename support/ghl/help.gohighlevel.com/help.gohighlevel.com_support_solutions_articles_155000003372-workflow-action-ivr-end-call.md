---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call"
title: " Workflow Action - IVR End Call : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [IVR Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000760)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [IVR Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000760)
6. Workflow Action - IVR End Call

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

# Workflow Action - IVR End Call

Modified on: Sun, 8 Sep, 2024 at 2:25 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call#Example)

## Overview

The **End Call (IVR)** action allows the IVR system to immediately disconnect a call. Alternatively, you can choose to play a final message or custom audio before ending the call. This is useful when you want to wrap up an IVR interaction or provide an informational message before disconnecting.

## Action Name

**End Call**

## Action Description

The **End Call (IVR)** action disconnects a call immediately. Optionally, users can configure a custom message or audio to be played before ending the call. This feature is useful for delivering a final message or confirmation to the caller before disconnection.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032468051/original/hx11NzrEWZfe8i3H0wvJPK-ZU8cUKqRhNw.png?1725823415)

### How to Configure

1. **Action Name**: Set a name for this action to identify it within your workflow.
2. **Add Voice Instructions**: Enable this toggle if you want to provide a final message before the call ends. Otherwise, the call will disconnect immediately.
3. **Say or Play Message**: Select whether to use a text-to-speech message ("Say a message") or an uploaded audio file ("Play audio file").
4. **Text to Say**: If "Say a message" is selected, enter the text to be spoken to the caller.
5. **Language**: Choose the language for the text-to-speech message.
6. **Message Voice**: Select the voice type (Man or Woman) for the text-to-speech message.
7. **Number of Loops**: Specify how many times the message should be repeated (default is 1).

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Action Name | Name for this action in the workflow | Yes |
| Add Voice Instructions | Toggle to enable or disable adding a final message before ending the call | No |
| Say or Play Message | Choose between "Say a message" or "Play audio file" to deliver the final message | No |
| Text to Say | Input the text that will be converted to speech and played to the caller | No |
| Language | Select the language of the text-to-speech voice | No |
| Message Voice | Choose between "Man" or "Woman" for the text-to-speech voice | No |
| Number of Loops | Number of times to loop the final message (Default is 1) | No |

## Example

**Scenario**: At the end of a customer service call, you want to confirm that the system is going to disconnect and thank the customer for their call.

- **Action Name**: End IVR Call
- **Add Voice Instructions**: Enabled
- **Say or Play Message**: Say a message
- **Text to Say**: "Thank you for calling ABC Services. Your call will now end."
- **Language**: English (US)
- **Message Voice**: Woman
- **Number of Loops**: 1

When configured, the system will play the message and then disconnect the call automatically.

## Additional Notes:

- If **Add Voice Instructions** is disabled, the call will end immediately without any final message.
- Using text-to-speech can be effective for providing dynamic, real-time information before ending a call.

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

- [Workflow Action - IVR Say/Play](https://help.gohighlevel.com/support/solutions/articles/155000003369-workflow-action-ivr-say-play)
- [Workflow Action - IVR Gather Input On Call](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call)
- [Workflow Action - IVR Connect Call](https://help.gohighlevel.com/support/solutions/articles/155000003371-workflow-action-ivr-connect-call)
- [Workflow Action - IVR End Call](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call)
- [Workflow Action - Record Voicemail](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail)

## Related Articles

- [Workflow Action - End IVR call](https://help.gohighlevel.com/support/solutions/articles/155000002285-workflow-action-end-ivr-call)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)
- [Workflow Action - Record Voicemail](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflow Trigger - Start IVR Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003203-workflow-trigger-start-ivr-trigger)
- [A2P 10DLC Campaign Approval Best Practices](https://help.gohighlevel.com/support/solutions/articles/48001229784-a2p-10dlc-campaign-approval-best-practices)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call/hit)