---
url: "https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-check-logs-for-a-specific-text-message-if-you-are-connected-to-your-own-twilio-account"
title: " How to check logs for a specific text message in Twilio : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-check-logs-for-a-specific-text-message-if-you-are-connected-to-your-own-twilio-account#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-check-logs-for-a-specific-text-message-if-you-are-connected-to-your-own-twilio-account#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. How to check logs for a specific text message if you are ...

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

# How to check logs for a specific text message if you are connected to your own Twilio account

Modified on: Tue, 23 Sep, 2025 at 3:28 AM

**Overview**

Twilio provides tools to investigate messaging activity between Twilio and your application. If a message fails to go through, is delayed, or behaves unexpectedly, reviewing the **Messaging Logs** in Twilio should be your first step. These logs help you confirm delivery status, identify errors, and gather details for further troubleshooting.

How to check logs for a specific text message in Twilio

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[How to check logs for a specific text message in Twilio](https://www.loom.com/share/ba9ff256297346eba0cd88e26f1d29e3?source=embed_watch_on_loom_cta "How to check logs for a specific text message in Twilio")

6 min

572 views

1

[Open video in Loom](https://www.loom.com/share/ba9ff256297346eba0cd88e26f1d29e3?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

6 min⚡️8 min 6 sec6 min 29 sec5 min 24 sec4 min 19 sec3 min 48 sec3 min 14 sec2 min 35 sec

😍

Automize Growth

![](https://cdn.loom.com/avatars/42855522_c9bc8e7bb1e043c2b71e8a2b5666bcef_192.jpg)

Thank you, Support! 🙏

![](https://cdn.loom.com/sessions/thumbnails/ba9ff256297346eba0cd88e26f1d29e3-1676920048164.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[How to check logs for a specific text message in Twilio](https://www.loom.com/share/ba9ff256297346eba0cd88e26f1d29e3?source=embed_watch_on_loom_cta "How to check logs for a specific text message in Twilio")

6 min

572 views

1

[Open video in Loom](https://www.loom.com/share/ba9ff256297346eba0cd88e26f1d29e3?source=embed_watch_on_loom_cta "Open video in Loom")

1.2×

6 min⚡️8 min 6 sec6 min 29 sec5 min 24 sec4 min 19 sec3 min 48 sec3 min 14 sec2 min 35 sec

😍

Automize Growth

![](https://cdn.loom.com/avatars/42855522_c9bc8e7bb1e043c2b71e8a2b5666bcef_192.jpg)

Thank you, Support! 🙏

* * *

## **How to navigate to the Messaging Logs and how to use them?**

**Step-by-Step Guide-**

### 1\. Log in to Twilio

- Go to: [https://console.twilio.com/](https://console.twilio.com/)


### 2\. Access Subaccounts

- Click **Account** (in the middle of screen) → **Subaccounts**.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054353513/original/hSe8ljpyqWr2eDO_n_WGaDvcS4qRmpeIMg.png?1758614833)


If there are too many subaccounts, go back to **HighLevel (HL)** and copy the **Account SID** for the location.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354205/original/ts0DBJbV4wnlvI5iNQzp8xPOGBiWQk_YKg.png?1758615109)

In Twilio, search for that **Subaccount SID** and open it.

Search based on the Twilio Subaccount SID in agency level settings -> Twilio

Paste the Account SID here and click on it:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354374/original/VHVGUsFKO3DJlYn0Ck4P0VA5tbMPZLXcVA.png?1758615216)

### 3\. Navigate to Messaging Logs

- In the left panel: **Monitor > Logs > Messaging**.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354516/original/AAyXbBPdklR9Yw5VdG-9MDJqcNosJD3-CA.png?1758615322)

### 4\. Search for Messages

- Use the contact’s phone number (without formatting) in the search fields:

  - **FROM field** → Incoming SMS (contact sent a text to Twilio).

  - **TO field** → Outgoing SMS (Twilio sent a text to the contact).

Put the lead's phone number (remove all phone format) in the TO field:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054354685/original/2anbBrzTG7ygEalA4ntfEiKjy_svyXWVaA.png?1758615461)

### 5\. Review Log Entries

- Each log line shows:

  - **Message SID** (unique identifier).

  - **TO and FROM numbers**.

  - **Status** (accepted, delivered, failed, etc.).

  - **Segments** (number of parts if the SMS was split).

  - **Media** (if MMS was attached).
- Logs highlight issues:

  - **Yellow or red rows** indicate failed or problematic messages.

  - **Green (200 status)** indicates success.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112140/original/HG-uDhFau7lI9zalH2jAjoyI1Wn1LRShEg.png?1665511651)

If it says delivered but the contact is not receiving it, grab this Message SID and [Create a support ticket with Twilio support](https://support.twilio.com/hc/en-us/articles/360048500694-Contacting-Twilio-Support)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48255067362/original/PkEVsPA-qqdDHczBrU2y2-69K8ibOYCgsg.png?1665005446)

### 6\. View Message Details

- Click the **hyperlinked date** to see full details, including:

  - **Delivery Steps**: request creation, queue time, carrier handoff.

  - **Request Inspector**: requests/responses between Twilio and your app.

  - **Errors**: color-coded statuses (e.g., `404` if a webhook endpoint is missing).
- Hovering over records will preview message content.


In the detailed view of the message log, you can find the Message SID (Twilio's unique identifier for this message), as well as the time the resource was created, TO and FROM numbers, Delivery Steps, and the Request Inspector.

The Delivery Steps section of this log will show you when the request was created, how long it was queued on Twilio's platform, and when it was sent out to our carrier partner for delivery. These factors can help you determine where an undelivered message failed, or investigate latency issues.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112783/original/WKv65dNug5qnNnCBuYlnyM7Qo-0b7Qu-fg.png?1665511884)

The request inspector shows all requests and responses made when sending or receiving this message. You can easily see errors on requests by the color-coded status on the right of a request.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48256112967/original/8E4xL8VIshdTc_94LgGdLOJIcrm2tKZ_0g.png?1665511956)

In the above response, we can see that we received a 404 response because Twilio was unable to find the tunnel for the webhook we set up for messages.

**Check MMS Capability of Twilio Number**

**1\. Go to Explore Products → Scroll down → Phone Numbers.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054355509/original/4g6kVsCZCG_ApP7idceL7nCpGKvUo9bGZA.png?1758616003)**

**2\. Check if the number has MMS capabilities, or if the number can send/receive SMS to domestic numbers only**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054355682/original/hbDywsEaC75SG6Fv7ZeswatMCaTsZg3E-A.png?1758616108)**

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

- [Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)
- [Troubleshooting SMS Delivery](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery)
- [How to check logs for a specific Call in Twilio](https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio)
- [Action Required: UK SMS from International Long Codes Blocked — Compliance Updates for 2023 & 2024](https://help.gohighlevel.com/support/solutions/articles/48001240411-action-required-uk-sms-from-international-long-codes-blocked-compliance-updates-for-2023-2024)
- [Understanding Common SMS Delivery Errors](https://help.gohighlevel.com/support/solutions/articles/48001208912-understanding-common-sms-delivery-errors)
- [What is LC (Lead Connector) Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-lead-connector-phone-system-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-check-logs-for-a-specific-text-message-if-you-are-connected-to-your-own-twilio-account)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-check-logs-for-a-specific-text-message-if-you-are-connected-to-your-own-twilio-account/hit)