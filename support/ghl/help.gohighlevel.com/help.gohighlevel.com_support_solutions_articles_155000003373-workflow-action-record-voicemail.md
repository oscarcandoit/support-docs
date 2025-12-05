---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail"
title: " Workflow Action - Record Voicemail : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [IVR Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000760)
6. Workflow Action - Record Voicemail

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

# Workflow Action - Record Voicemail

Modified on: Sun, 8 Sep, 2024 at 2:31 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail#Example)

## Overview

The **Record Voicemail (IVR)** action allows users to record audio messages from callers. This feature enables callers to leave voice messages during the call flow. You can also configure the message to end automatically after a period of silence, on keypress, or when the maximum time length is reached. The recorded voicemail can be accessed within the conversation section.

## Action Name

**Record Voicemail (IVR)**

## Action Description

This action allows the IVR to collect audio recordings from callers as voicemail. The action supports additional configurations such as when to stop recording based on silence, keypress, or time limit. You can also provide instructions to the caller before they start recording.

## Action Details

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032468108/original/GV9HD1jqFuQsW1h8MADN-2tzB9-6iTJGGw.png?1725823639)](https://help.gohighlevel.com/en/support/solutions/articles/155000003372-workflow-action-ivr-end-call)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032468111/original/lTXQBsegzr59AJicaT9O7cKiK50k0i07pA.png?1725823666)

### How to Configure:

1. **Action Name:** Choose a unique name for this voicemail action (e.g., "Record voicemail").
2. **Play Beep:** Optionally play a beep to indicate the recording has started.
3. **Stop Recording After (Seconds of Silence):** Define the period of silence after which recording will stop. This is set in seconds.
4. **Stop Recording on Keypress:** The caller can stop the recording by pressing a designated key on the keypad (e.g., #).
5. **Max Recording Length:** Set the maximum duration of the voicemail recording in seconds.
6. **Add Voice Instructions (Optional):** Enable this to add pre-recorded voice instructions for the caller.

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Action Name | Name of the voicemail action | Yes |
| Play Beep | Plays a beep sound indicating the recording has started | No |
| Stop Recording After | Number of seconds of silence before the recording automatically stops | Yes |
| Stop Recording on Keypress | Specific key the caller can press to stop the recording (e.g., 1-9, #, \*) | No |
| Max Recording Length | The maximum length of the voicemail in seconds | Yes |
| Add Voice Instructions | Say a message or upload a recorded message to instruct the caller | No |

## Example

Suppose you want to record a voicemail when the customer doesn’t respond to the menu. Here’s how you can configure it:

- **Action Name:** “Record Customer Voicemail”
- **Play Beep:** Yes (Enable it to play a beep)
- **Stop Recording After (Seconds of Silence):** 5 (Wait for 5 seconds of silence before stopping)
- **Stop Recording on Keypress:** # (Allow the customer to stop the recording by pressing the hash key)
- **Max Recording Length:** 360 (Record for a maximum of 6 minutes)
- **Add Voice Instructions:** "Please record your message after the beep." (Enable to give the caller this instruction)

## Additional Notes

- **Stop Recording on Silence:** This setting is useful to automatically stop the recording if the caller does not respond for a certain time.
- **Recording Keypress:** Useful for providing the caller a quick method to stop recording when they are done.
- **Max Recording Length:** Ensure that this is set according to your system requirements to avoid exceeding maximum storage limits.

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

- [Workflow Action - IVR Connect Call](https://help.gohighlevel.com/support/solutions/articles/155000003371-workflow-action-ivr-connect-call)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Phone Number Edit Configuration (Incoming Calls Settings)](https://help.gohighlevel.com/support/solutions/articles/155000006881-phone-number-edit-configuration-incoming-calls-settings-)
- [Outbound Calling Using the HighLevel Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000005543-outbound-calling-using-the-highlevel-mobile-app)
- [Physical VoIP Deskphones (SIP)](https://help.gohighlevel.com/support/solutions/articles/155000005487-physical-voip-deskphones-sip-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003373-workflow-action-record-voicemail/hit)