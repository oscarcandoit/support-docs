---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada"
title: " Updated Messaging Guidelines for the U.S. & Canada : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Updated Messaging Guidelines for the U.S. & Canada

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

# Updated Messaging Guidelines for the U.S. & Canada

Modified on: Fri, 14 Nov, 2025 at 8:20 AM

**Good news!**

We’ve simplified A2P (Application-to-Person) requirements to make messaging across the **United States, Canada, and Puerto Rico** more consistent, reliable, and compliant — all while keeping things easy for you.

**OVERVIEW**

This guide explains the messaging requirements and error codes related to **A2P (Application-to-Person)** registration and Persona verification for both **domestic** and **international** routes. Understanding these rules helps ensure that messages are delivered successfully and that compliance issues are avoided.

### **1\. Domestic Messaging (Within the US and Canada)**

When sending messages within the United States, Canada, or Puerto Rico, **A2P (Application-to-Person) registration is mandatory**.

**What This Means**

Any messages sent between domestic numbers—such as **US → US**, **US → CA**, or **CA → US/PR**—must originate from a registered A2P number. This requirement ensures compliance with carrier regulations aimed at preventing spam and unauthorized messaging.

**If A2P Registration Is Missing**

Messages sent without A2P registration will fail and return the following error:

> **Error 30034** – Number not A2P compliant. Please register for A2P.

**Example Scenarios**

- A message from a U.S. business number to a U.S. customer → **A2P required**

- A message from a U.S. number to a Canadian number (or vice versa) → **A2P required**


### Rule for CA → CA Messaging

#### For Numbers Purchased **Before March 26, 2025**

- **A2P registration not required**

- Messaging continues as usual


#### For Numbers Purchased **On or After March 26, 2025**

- Messages can be sent **with or without A2P registration**

- If A2P registration is not completed, you only need to complete persona verification.


**In summary:**

All domestic messaging routes require an approved A2P registration for proper delivery— **except for CA → CA**, where older numbers are exempt and new numbers require either A2P registration or Persona verification.

### **2\. International Messaging (From US or Canada to Other Countries)**

For messages sent from the **US or Canada** to international destinations, A2P registration is **not required**. Just Persona verification is needed for these messages to be delivered successfully.

- **What This Means:**

International messaging relies on the sender’s verified identity rather than A2P registration. Persona verification confirms that the sender’s details have been authenticated and approved.

- **Message Behavior:**

  - If the sender’s persona is verified, the message will be delivered normally. A2p verification would not be required in this case.

  - However if there is **no A2P registration** and **no persona verification**, the system will block the message and return the following error:

    **Error 1002 – Message blocked. A2P or persona verification needed.**
- **Example Scenarios:**

  - Sending from a US number to a customer in France → Allowed (Just Persona verification required)

  - Sending from a Canadian number to a customer in Australia → Allowed (Just Persona verification required)

  - Sending without persona verification → Blocked with Error 1002

Essentially, **international messages from US/CA numbers only require Persona verification**, **not A2P.**

### **3\. Exception: Messaging to the United Kingdom (UK)**

The **UK** is a special case in international routing rules.

- **Messages from the US to the UK** are **not allowed** and will fail automatically.

- The system returns the following error when this route is attempted:

**Error 21612 –** **Message cannot be sent with the current combination of "To" and/or "From" parameters.**


However, **UK-to-UK** messaging is permitted.

**4\. Key Takeaways**

- **Domestic (US/CA/PR):** Always requires A2P registration.

- **International (US/CA → Other Countries):** Requires Persona verification only.

- **No A2P or Persona:** Results in blocked messages with Error 1002.

- **US → UK:** Not supported; Error 21612 returned.


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

- [A2P Standard Brand Registration for 10DLC](https://help.gohighlevel.com/support/solutions/articles/48001225526-a2p-standard-brand-registration-for-10dlc)
- [What is A2P 10 DLC- Brand and Campaign Registration](https://help.gohighlevel.com/support/solutions/articles/155000002380-what-is-a2p-10-dlc-brand-and-campaign-registration)
- [Updated Messaging Policies for Canadian 10DLC Numbers: A2P Registration Requirements](https://help.gohighlevel.com/support/solutions/articles/155000004915-updated-messaging-policies-for-canadian-10dlc-numbers-a2p-registration-requirements)
- [Forbidden message categories for SMS and MMS in the US and Canada](https://help.gohighlevel.com/support/solutions/articles/48001219617-forbidden-message-categories-for-sms-and-mms-in-the-us-and-canada)
- [How to Prevent SMS Filtering by Carriers: Error 30007](https://help.gohighlevel.com/support/solutions/articles/48001237726-how-to-prevent-sms-filtering-by-carriers-error-30007)
- [Unregistered 10DLC Message Fees Will Increase; Register Numbers by June 1, 2023 to Avoid Higher Unregistered Messaging Fees](https://help.gohighlevel.com/support/solutions/articles/48001238099-unregistered-10dlc-message-fees-will-increase-register-numbers-by-june-1-2023-to-avoid-higher-unreg)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006960-updated-messaging-guidelines-for-the-u-s-canada/hit)