---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005314-understanding-leadconnector-inbound-call-rate-limits"
title: " Understanding LeadConnector Inbound Call Rate Limits : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005314-understanding-leadconnector-inbound-call-rate-limits#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [Calling](https://help.gohighlevel.com/support/solutions/folders/48000665895)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005314-understanding-leadconnector-inbound-call-rate-limits#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Calling](https://help.gohighlevel.com/support/solutions/folders/48000665895)
6. Understanding LeadConnector Inbound Call Rate Limits

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

# Understanding LeadConnector Inbound Call Rate Limits

Modified on: Tue, 20 May, 2025 at 11:23 PM

To maintain the reliability and performance of our voice infrastructure, LeadConnector enforces inbound call rate limits across different types of phone numbers. These safeguards are essential to prevent spam, abuse, and system overloads, ensuring a high-quality experience for all users.

This article outlines how rate limits work for **IVR-connected numbers**, **Voice AI-connected numbers**, and **regular numbers**.

### 1\. **IVR-Connected Numbers**

- **No restrictions apply.**

- These numbers are designed to handle high volumes and are not subject to inbound call rate limiting.


* * *

### 2\. **Voice AI-Connected Numbers**

Voice AI numbers are designed for intelligent call handling through automation. Due to their potential for high concurrency, they are subject to stricter rate controls.

#### ? Violations and Limits:

| Condition | Threshold | Result |
| --- | --- | --- |
| **From a number:** | >200 calls per minute | 1 violation (current call is blocked) |
| **To a number:** | >200 calls per minute | 1 violation (current call is blocked) |
| **Violation cap:** | >5 violations per hour | All inbound calls for the account are blocked |

* * *

### 3\. **Regular Numbers**

Standard phone numbers (not connected to IVR or Voice AI) have more conservative rate limits to avoid potential misuse or system degradation.

#### ? Violations and Limits:

| Condition | Threshold | Result |
| --- | --- | --- |
| **From a number:** | >10 calls per minute | 1 violation (current call is blocked) |
| **To a number:** | >15 calls per minute | 1 violation (current call is blocked) |
| **Violation cap:** | >5 violations per hour | All inbound calls for the account are blocked |

## **What Happens When the Violation Cap is Reached?**

If your account incurs more than 5 violations within an hour, all inbound calls will be permanently blocked for both Voice AI and regular numbers. To restore access, P **lease contact GHL support for assistance**.

## **Best Practices to Avoid Rate Limits**

- **Use IVR for High Volume**: If you anticipate heavy inbound traffic, connect your numbers to an IVR system where possible.

- **Distribute Call Volume**: Avoid routing excessive traffic through a single number. Use multiple numbers to balance load.


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

- [Call Events Not Working for Twilio](https://help.gohighlevel.com/support/solutions/articles/48000981465-call-events-not-working-for-twilio)
- [Geo Permissions - Voice](https://help.gohighlevel.com/support/solutions/articles/48000981435-geo-permissions-voice)
- [How To Fix - Phone Call Redirect Loop](https://help.gohighlevel.com/support/solutions/articles/48001076653-how-to-fix-phone-call-redirect-loop)
- [Using Call Connect to Ensure Accurate Call Status Tracking](https://help.gohighlevel.com/support/solutions/articles/48001181825-using-call-connect-to-ensure-accurate-call-status-tracking)
- [How to check logs for a specific Call in Twilio](https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio)
- [How to Set Up Call Tracking (Number Pool)](https://help.gohighlevel.com/support/solutions/articles/48000981393-how-to-set-up-call-tracking-number-pool-)

## Related Articles

- [How to Set Up WhatsApp for a Sub-Account](https://help.gohighlevel.com/support/solutions/articles/155000001980-how-to-set-up-whatsapp-for-a-sub-account)
- [Mobile App - Inbound Call Transfer](https://help.gohighlevel.com/support/solutions/articles/155000005438-mobile-app-inbound-call-transfer)
- [Voice AI Outbound Calling](https://help.gohighlevel.com/support/solutions/articles/155000006598-voice-ai-outbound-calling)
- [Understanding A2P 10DLC Messaging Fees: Registration, Monthly, and Carrier Costs](https://help.gohighlevel.com/support/solutions/articles/155000005200-understanding-a2p-10dlc-messaging-fees-registration-monthly-and-carrier-costs)
- [Voice AI Outbound Calling Compliance Checks](https://help.gohighlevel.com/support/solutions/articles/155000006679-voice-ai-outbound-calling-compliance-checks)
- [HighLevel API](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005314-understanding-leadconnector-inbound-call-rate-limits)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005314-understanding-leadconnector-inbound-call-rate-limits/hit)