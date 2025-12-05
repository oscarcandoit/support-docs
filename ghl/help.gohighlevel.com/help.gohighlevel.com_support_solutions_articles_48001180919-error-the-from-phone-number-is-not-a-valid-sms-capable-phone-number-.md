---
url: "https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-"
title: " Error: Not a Valid SMS-Capable “From” Number : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Error: Not a Valid SMS-Capable “From” Number

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

# Error: Not a Valid SMS-Capable “From” Number

Modified on: Thu, 2 Oct, 2025 at 5:08 PM

Seeing **‘The From phone number is not a valid SMS-capable phone number’**? This guide explains why it happens and how to fix it, capabilities, ownership, A2P (US), and formatting.

* * *

**TABLE OF CONTENTS**

- [What is the Error: Not a Valid SMS-Capable “From” Number](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#What-is-the-Error%3A-Not-a-Valid-SMS-Capable-%E2%80%9CFrom%E2%80%9D-Number)
- [Quick Fix Checklist](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#Quick-Fix-Checklist)
- [Common Causes & How to Resolve](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#Common-Causes-&-How-to-Resolve)
  - [1\. Phone Number is not SMS‑capable](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#1.-Phone-Number-is-not-SMS%E2%80%91capable)
  - [2\. The number isn’t valid for your account/destination](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#2.-The-number-isn%E2%80%99t-valid-for-your-account/destination)
  - [3\. A2P 10DLC (US) configuration missing or wrong](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#3.-A2P-10DLC-(US)-configuration-missing-or-wrong)
  - [4\. Formatting or sender type issues](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#4.-Formatting-or-sender-type-issues)
  - [5\. Number recently moved or not in this Location](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#5.-Number-recently-moved-or-not-in-this-Location)
- [Special Cases](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#Special-Cases)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-#Frequently-Asked-Questions)

* * *

## **What is the Error: Not a Valid SMS-Capable “From” Number**

This error appears when an outbound SMS/MMS is attempted from a number that isn’t eligible to send SMS for the selected destination, account, or configuration. The most common root causes are: the number isn’t SMS‑capable, it’s not on your account/location, it’s not linked to an approved A2P campaign (US 10DLC), or the From value is misconfigured (e.g., invalid format or incompatible sender type).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055133965/original/cwT8geyOu63XnfbhYlkIu9TUlgZk1eSAmA.png?1759442816)

* * *

## **Quick Fix Checklist**

- Verify the **From number** belongs to this sub‑account/location and is SMS‑capable.

- Use E.164 format in the From field (e.g., +15551234567).

- For **US 10DLC**, make sure the number is attached to an approved A2P campaign (Messaging Service → attached numbers).

- If using a Short Code, the To and From must be in the **same country**.

- If using an Alphanumeric Sender ID, confirm the destination country supports it.

- If you manage numbers in **Twilio Console**, ensure the number is capable and owned by your account (not another Master account).

```
Tip: If this error started after a recent move or configuration change, re‑check number ownership (agency vs. sub‑account), campaign assignments, and any Messaging Service changes.
```

* * *

## **Common Causes & How to Resolve**

### **1\. Phone Number is not SMS‑capable**

Some phone numbers are voice‑only or don’t support SMS in certain countries.

- **LC Phone:** Go to **Settings → Phone Numbers**, open the number, and confirm **Messaging** is enabled.

- **Twilio:** In Console, open the number and verify that **Capabilities** include **SMS**.

- **Fix:** Use an SMS‑capable number or purchase/assign one that supports messaging.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055133988/original/b9UogWLOJbT-yTuqQM8pRVkWLbH9JhLXhQ.png?1759442856)

```
Tip: For using the Phone Number Assignment Feature, refer to: How to use this phone assignment feature for SMS/Voice capable only.
```

### **2\. The number isn’t valid for your account/destination**

The **From** must be a number **owned by (or hosted to)** your account and valid for the target country.

- **Short Codes:** Must be in the **same country** as the destination.

- **Hosted/Trial/other account numbers:** Not valid until fully owned and SMS‑enabled on your account.

- **Fix:** Send from a number on your account that’s allowed for the destination.


### **3\. A2P 10DLC (US) configuration missing or wrong**

US local 10DLC numbers must be tied to an **approved A2P campaign**.

- **LC Phone:** Confirm the number is linked to your approved **Brand/Campaign**.

- **Twilio:** Attach the number to the correct **Messaging Service** that’s tied to the approved campaign.

- **Fix:** Complete A2P registration and link the number; retry after approval.


### **4\. Formatting or sender type issues**

- **E.164 required:** Use `+` and country code.

- **Alphanumeric Sender ID:** Only supported in specific countries (not US/CA person‑to‑person).

- **Fix:** Correct the **From** format or choose a supported sender type for the destination.


### **5\. Number recently moved or not in this Location**

If the number was **moved between sub‑accounts** or providers, the **From** selector or automations may still reference the old number.

**Fix:** Re‑select the active number in **Conversations**, **Campaigns/Workflows**, and **Messaging settings**.

* * *

## **Special Cases**

- **Toll‑Free (US/CA):** Requires **Toll‑Free Verification** for reliable delivery. If unverified, messages may fail or be filtered.

- **International:** Some countries block A2P from long codes; use **Alphanumeric Sender ID** (if supported) or an approved sender per country rules.

- **Different Master Twilio account:** If your number lives under a different **Master** account, it isn’t valid for this account’s sends. Move it first or send from a number on this account.


* * *

## **Frequently Asked Questions**

**Q. Does this error mean the number is suspended?**

Not necessarily. It usually means the number cannot send SMS for the current configuration. Check capability, ownership, and A2P linking.

**Q. Can I send from a short code to another country?**

No. Short codes are **country‑specific**; use a local short code for the destination country or another supported sender type.

**Q. We just ported/added a number and still see this error—why?**

Provisioning or campaign linking can take time. Confirm SMS capability and, for the US, that the number is attached to your approved campaign.

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

- [What is LC (Lead Connector) Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-lead-connector-phone-system-)
- [LC Phone System - Error Code and Warning Dictionary](https://help.gohighlevel.com/support/solutions/articles/155000005526-lc-phone-system-error-code-and-warning-dictionary)
- [Workflow Trigger - Messaging Error Code - SMS](https://help.gohighlevel.com/support/solutions/articles/155000003201-workflow-trigger-messaging-error-code-sms)
- [Understanding Common SMS Delivery Errors](https://help.gohighlevel.com/support/solutions/articles/48001208912-understanding-common-sms-delivery-errors)
- [LC Phone Pricing & Billing Guide](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-billing-guide)
- [Troubleshooting SMS Delivery](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-the-from-phone-number-is-not-a-valid-sms-capable-phone-number-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001180919-error-not-a-valid-sms-capable-from-number/hit)