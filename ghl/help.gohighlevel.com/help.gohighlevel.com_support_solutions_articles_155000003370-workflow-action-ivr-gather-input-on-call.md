---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call"
title: " Workflow Action - IVR Gather Input On Call : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [IVR Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000760)
6. Workflow Action - IVR Gather Input On Call

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

# Workflow Action - IVR Gather Input On Call

Modified on: Sun, 8 Sep, 2024 at 2:12 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call#Example)

## Overview

The **Gather Input On Call** action enables users to gather inputs via keypad from the caller. This can be used in IVR systems where the caller is prompted to press certain keys to make a selection (e.g., "Press 1 to speak to support, Press 2 to leave a message"). This action helps automate responses and proceed based on the inputs from the user.

## Action Name

**Gather Input On Call**

## Action Description

The **Gather Input On Call (IVR)** action collects information from the caller through DTMF (Dual Tone Multi-Frequency) inputs. It is typically used in IVR flows, where the user interacts with the system by pressing keys on their phone. Based on the keypress, different branches can be defined, allowing for customized flows depending on the input.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467893/original/UcwBIizZxLaiHIF6_C7pXEdsTOKADGR4dg.png?1725822507)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467902/original/GGJsEM9GZ_TeC1H01k3e01ossdpOH4BbWA.png?1725822537)

### **How to Configure:**

1. **Action Name**: Set a relevant name for this IVR input gathering action.

2. **Say or Play Message**: Choose between "Say a message" (text-to-speech) or uploading a pre-recorded audio file.

3. **Text to Say**: If "Say a message" is chosen, provide the message that will be played (e.g., "Press 1 for support").

4. **Language**: Select the language for the text-to-speech.

5. **Message Voice**: Select whether you want a "Man" or "Woman" voice for the text-to-speech message.

6. **Number of Loops**: Define how many times the message will be repeated before proceeding.

7. **Advanced Settings**: Set a timeout (in seconds) after which input gathering stops and optionally stop the input gathering when the user presses a key.

8. **Match Conditions**: Use this feature to create branches based on the caller’s input. For example:

   - Branch 1: Press "1" for Support
   - Branch 2: Press "2" for Sales

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Action Name | Provide the name of the action. | Yes |
| Say or Play Message | Choose whether to say a message or play a pre-recorded audio file. | Yes |
| Text to Say | If "Say a message" is selected, input the text to be said to the caller. | Yes |
| Language | Select the language in which the message should be spoken. | Yes |
| Message Voice | Choose between male or female voice. | Yes |
| Number of Loops | Select the number of times the message should be played or repeated. | Yes |
| Stop Gathering After (Seconds) | Set the duration (in seconds) after which the gathering stops. | Yes |
| Stop Gathering After (Digits) | Specify how many digits to collect before stopping input collection. | No |
| Stop Gathering on Key Press | Enable this to stop gathering input once a key is pressed. | No |
| Match Conditions | Option to define branches based on key press values. | Yes |

## Example

**Scenario**: Collecting input from a caller for a bank's IVR system.

**Message**: "Press 1 to hear your bank statement, Press 2 to connect with an agent, or Press 3 to exit."

**Key Presses**:

- Pressing "1" directs the user to a branch that reads their bank statement.
- Pressing "2" directs the caller to a customer support agent.
- Pressing "3" terminates the call after thanking the customer.

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

- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflow Action - End IVR call](https://help.gohighlevel.com/support/solutions/articles/155000002285-workflow-action-end-ivr-call)
- [Workflow Action - IVR End Call](https://help.gohighlevel.com/support/solutions/articles/155000003372-workflow-action-ivr-end-call)
- [Workflow Trigger - Start IVR Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003203-workflow-trigger-start-ivr-trigger)
- [Workflow Action - IVR Connect Call](https://help.gohighlevel.com/support/solutions/articles/155000003371-workflow-action-ivr-connect-call)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call/hit)