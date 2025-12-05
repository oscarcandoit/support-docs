---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003371"
title: " Workflow Action - IVR Connect Call : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003371#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003371#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [IVR Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000760)
6. Workflow Action - IVR Connect Call

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

# Workflow Action - IVR Connect Call

Modified on: Sun, 8 Sep, 2024 at 2:17 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003371#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003371#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003371#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003371#Action-Details)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003371#Example)

## Overview

The **Connect Call (IVR)** action allows you to transfer an ongoing call to another phone number, user, or agent. This can be useful for routing calls to specific departments, agents, or external phone numbers in a call center or IVR system. Additionally, the action allows advanced settings like voicemail detection, call recording, timeout, and time limits for connected calls.

## Action Name

**Connect Call (IVR)**

## Action Description

The **Connect Call (IVR)** action provides functionality to transfer an ongoing call from the IVR system to another phone number or user. You can choose multiple users to call in parallel and set custom numbers. This action also supports advanced features such as detecting voicemail, recording calls, and setting timeout and time limits for the connected call.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467994/original/yEZzn_vVkBxvrg-S8UQGevn5_pVJTB-qqg.png?1725822997)

### **How to Configure:**

1. **Action Name**: Provide a name for the action, such as "Transfer to Agent" or "Connect to Sales Department".

2. **Connect Call To**: Specify the user or custom phone numbers where the call should be transferred. You can select up to 10 users to call simultaneously.

3. **Advanced Settings**:

   - **Detect Voicemail**: Enable this feature if you want to detect if the call goes to voicemail. Enabling this option may introduce a small delay.
   - **Record Call**: Toggle this setting to record the transferred call for later review.
   - **Timeout (Seconds)**: Set the number of seconds to wait for the called party to answer the call (e.g., 30 seconds).
   - **Time Limit (Seconds)**: Set the maximum duration of the connected call. For example, if you want the call to automatically disconnect after 1 hour, you would set this to 3600 seconds.

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Action Name | Provide a name for the action. | Yes |
| Connect Call To | Specify the phone numbers or users to connect the call to. | Yes |
| Select Users | Choose from existing users or add custom numbers to transfer the call to. | Yes |
| Detect Voicemail | Toggle to enable voicemail detection for the call. | No |
| Record Call | Enable to record the transferred call for quality or compliance purposes. | No |
| Timeout (Seconds) | Set the maximum time in seconds to wait for the called party to answer. | Yes |
| Time Limit (Seconds) | Set the maximum duration for the connected call in seconds (up to 24 hours). | No |

## Example

**Scenario**: A customer calls the sales department through the IVR system, and the system automatically transfers the call to an available sales agent.

- **Action Name**: "Transfer call to Sales Agent"
- **Connect Call To**: Select the sales agent’s phone number or custom numbers.
- **Advanced Settings**: Enable call recording, set timeout to 30 seconds, and set a time limit of 1 hour for the call duration.

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
- [Workflow Action - IVR Gather Input On Call](https://help.gohighlevel.com/support/solutions/articles/155000003370-workflow-action-ivr-gather-input-on-call)
- [Using Call Connect to Ensure Accurate Call Status Tracking](https://help.gohighlevel.com/support/solutions/articles/48001181825-using-call-connect-to-ensure-accurate-call-status-tracking)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [How to Enable Call Transcriptions for Recorded Calls](https://help.gohighlevel.com/support/solutions/articles/155000002841-how-to-enable-call-transcriptions-for-recorded-calls)
- [Physical VoIP Deskphones (SIP)](https://help.gohighlevel.com/support/solutions/articles/155000005487-physical-voip-deskphones-sip-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003371)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003371-workflow-action-ivr-connect-call/hit)