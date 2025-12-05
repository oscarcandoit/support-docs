---
url: "https://help.gohighlevel.com/support/solutions/articles/48001240411-action-required-uk-sms-from-international-long-codes-blocked-compliance-updates-for-2023-2024"
title: " Action Required: UK SMS from International Long Codes Blocked — Compliance Updates for 2023 & 2024 : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001240411-action-required-uk-sms-from-international-long-codes-blocked-compliance-updates-for-2023-2024#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001240411-action-required-uk-sms-from-international-long-codes-blocked-compliance-updates-for-2023-2024#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Action Required: UK SMS from International Long Codes Blo...

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

# Action Required: UK SMS from International Long Codes Blocked — Compliance Updates for 2023 & 2024

Modified on: Thu, 25 Sep, 2025 at 4:36 AM

### **Overview**

If you send SMS messages to UK mobile numbers, your deliverability and compliance are at risk unless you update your sender types. Starting **June 1, 2023**, UK carriers began **blocking international long codes** for Application-to-Person (A2P) traffic. In **2024**, further regulatory requirements have been introduced for **UK long codes themselves**.

* * *

## **What Changed in 2023**

- **Carrier Blocking of International Long Codes**

From June 1, 2023, UK network operators started blocking SMS from **non-UK long codes**. These numbers were originally designed for Person-to-Person (P2P) use, but many businesses were using them for A2P traffic, which carriers now classify as **abuse of P2P routes**.

- **Impact**: Any SMS sent to UK recipients from an international long code is likely to fail.


* * *

## **What’s Changing in 2024**

Twilio and UK regulators have layered on stricter compliance requirements:

1. **Regulatory Compliance Bundles (RC bundles)**

   - From **May 27, 2024**, all new UK long codes require an **approved RC bundle** before they can send SMS or make calls.

   - From **September 30, 2024**, _all_ UK long codes (new or old) must have an approved RC bundle.
2. **Know Your Customer (KYC)**

Businesses must provide documentation to verify their identity and intended use case before using UK long codes.

3. **Full Enforcement of Blocking**

By mid-2024, all UK carriers had aligned to enforce these rules. Traffic from international long codes is universally blocked, and unregistered UK long codes will also fail.


* * *

## **What You Need to Do**

### Step 1. Stop Using International Long Codes

- If you are still sending SMS from non-UK numbers to UK recipients, switch immediately.


### Step 2. Use Approved Sender Types

- **UK Long Code (Local Number)** — Requires KYC and regulatory approval.

- **Alphanumeric Sender ID** — For one-way traffic, brand your sender name (e.g., _YourCompany_).

- **Short Code** — For higher-volume or two-way messaging, apply for a UK short code (12–16 weeks provisioning).


### Step 3. Register Your Numbers

- Submit your **Regulatory Compliance (RC) bundle** in Twilio Console.

- Provide the necessary KYC documents (business name, address, use case, etc.).


### Step 4. Monitor Message Logs

- In Twilio Console, use **Messaging Insights** to filter:

  - “From Country ≠ UK” and “To Country = UK” → find non-compliant traffic.
- Look for blocked or undelivered messages and update routing.


* * *

## **How to Buy a UK Number in Twilio**

1. Go to: **Console → Develop → Phone Numbers → Buy a number**

2. Set **Country = UK**

3. Un-check **Voice** (if you want SMS-only)

4. Select an SMS-capable number and complete RC bundle submission


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48299015946/original/61Ie-dgMkMb4zuvGSYnz5jXrUZU-xe2wRw.png?1684910844)

* * *

## **Timeline Recap**

- **June 1, 2023** → UK carriers begin blocking international long codes.

- **May 27, 2024** → New UK long codes require RC approval.

- **July 30, 2024** → Full carrier enforcement across all networks.

- **September 30, 2024** → All UK long codes (new + existing) must have RC approval.


* * *

## **Key Takeaways**

- International long codes **cannot** be used for UK SMS.

- All UK long codes now require **KYC and regulatory compliance**.

- Alphanumeric Sender IDs and short codes remain valid alternatives.

- Act now to avoid message failures and regulatory issues.


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

- [Troubleshooting SMS Delivery](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery)
- [Incoming SMS shows up in Conversations but isn’t forwarded to the forwarding number.](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-)
- [Error: Not a Valid SMS-Capable “From” Number](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-not-a-valid-sms-capable-from-number)
- [Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)
- [Conversations Glitching? Here's What’s Going On?](https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-)
- [Twilio Error 21610 "The message from/to pair violates a blacklist rule" when sending SMS](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms)

## Related Articles

- [Know Your Customer (KYC) in the United Kingdom](https://help.gohighlevel.com/support/solutions/articles/155000002831-know-your-customer-kyc-in-the-united-kingdom)
- [Updated Messaging Guidelines for the U.S. & Canada](https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada)
- [How to Prevent SMS Filtering by Carriers: Error 30007](https://help.gohighlevel.com/support/solutions/articles/48001237726-how-to-prevent-sms-filtering-by-carriers-error-30007)
- [Understanding Common SMS Delivery Errors](https://help.gohighlevel.com/support/solutions/articles/48001208912-understanding-common-sms-delivery-errors)
- [How to Use Do Not Disturb (DND)](https://help.gohighlevel.com/support/solutions/articles/48001214849-how-to-use-do-not-disturb-dnd-)
- [Forbidden message categories for SMS and MMS in the US and Canada](https://help.gohighlevel.com/support/solutions/articles/48001219617-forbidden-message-categories-for-sms-and-mms-in-the-us-and-canada)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001240411-action-required-uk-sms-from-international-long-codes-blocked-compliance-updates-for-2023-2024)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001240411-action-required-uk-sms-from-international-long-codes-blocked-compliance-updates-for-2023-2024/hit)