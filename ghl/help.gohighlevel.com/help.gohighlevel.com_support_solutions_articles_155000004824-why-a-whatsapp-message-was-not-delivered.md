---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004824-why-a-whatsapp-message-was-not-delivered"
title: " Why a WhatsApp Message Was Not Delivered : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004824-why-a-whatsapp-message-was-not-delivered#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Reselling Products](https://help.gohighlevel.com/support/solutions/48000454568)
4. [WhatsApp](https://help.gohighlevel.com/support/solutions/folders/48000683465)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004824-why-a-whatsapp-message-was-not-delivered#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reselling Products](https://help.gohighlevel.com/support/solutions/48000454568)
   - [WhatsApp](https://help.gohighlevel.com/support/solutions/folders/48000683465)
6. Why a WhatsApp Message Was Not Delivered

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

# Why a WhatsApp Message Was Not Delivered

Modified on: Fri, 21 Mar, 2025 at 6:19 AM

**TABLE OF CONTENTS**

- [Why a WhatsApp Message Was Not Delivered](https://help.gohighlevel.com/support/solutions/articles/155000004824-why-a-whatsapp-message-was-not-delivered#Why-a-WhatsApp-Message-Was-Not-Delivered)
- [FAQ](https://help.gohighlevel.com/support/solutions/articles/155000004824-why-a-whatsapp-message-was-not-delivered#FAQ)

# **Why a WhatsApp Message Was Not Delivered**

When sending a message using the WhatsApp Business API, it may show as “sent” but not “delivered.” Below are the common reasons this can happen, along with guidance on how to identify and resolve the issue.

* * *

**Common Reasons for Undelivered Messages**

    1\.    **User Was Offline for More Than 30 Days**

WhatsApp stores messages for offline users for up to 30 days. If the recipient does not come online within that window, the message will not be delivered.

    2\.    **User Has Blocked Your Number**

If the recipient has blocked your business number (or another business number under your account), messages will not be delivered.

    3\.    **Geographic Restrictions**

WhatsApp Business Platform is not available for users or businesses in:

    •    Cuba

    •    Iran

    •    North Korea

    •    Syria

    •    Crimea, Donetsk, and Luhansk (Ukraine)

Note: As of May 15, 2024, Türkiye is supported for Cloud API messaging.

    4\.    **Outdated App Version or Terms Not Accepted**

Messages may fail if the customer:

    •    Is using an outdated WhatsApp version.

    •    Has not accepted the latest Terms of Service.

To resolve this, ask the user to update their app and accept the latest Terms via this link: [https://wa.me/tos/20210210](https://wa.me/tos/20210210)

    5\.    **High-Quality Messaging Restrictions**

WhatsApp enforces limits on how many marketing messages a user can receive to maintain message quality. If a user receives too many marketing messages (typically 5–6 in a day), further marketing messages may be temporarily blocked.

    6\.    **Invalid or Unregistered Phone Number**

If the phone number is not registered with WhatsApp or entered incorrectly, the message will not be delivered.

    7\.    **API Errors or Invalid Parameters**

If your API request has missing or incorrect fields, such as improperly formatted variables, it may be rejected.

    8\.    **Conflicting Delivery Status**

A message might show both “delivered” and “failed” statuses due to the user being logged into WhatsApp on multiple devices. If a message is delivered to at least one device, it is considered successfully delivered.

* * *

**What You Can Ask the Customer to Do**

If the reason for the failed delivery is unclear, the following steps can help identify or resolve the issue:

    •    Confirm that the customer has not blocked your WhatsApp number.

    •    Ask them to send a message to your business first (this reopens the 24-hour customer service window).

    •    Ensure they have accepted WhatsApp’s latest Terms of Service.

    •    Have them update to the latest version of WhatsApp based on their device.

    •    Verify that they are not using a restricted version or unsupported region.

* * *

**Technical Issues and How to Resolve Them**

**Authentication and Authorization Errors**

These errors occur when your access token is invalid or missing required permissions.

**Resolution:**

    •    Use the [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) to verify token permissions.

    •    Ensure the token has the following scopes:

    •    whatsapp\_business\_management

    •    whatsapp\_business\_messaging

    •    If not, regenerate the token with the correct permissions.

* * *

**Meta API Downtime (Error Code 2)**

When Meta updates its API, brief outages (up to 5 minutes) may occur.

**Resolution:**

    •    Wait five minutes and retry the API call.

* * *

# **FAQ**

**1\. Why was my WhatsApp message marked as sent but not delivered?**

There are several possible reasons:

    •    The recipient has been offline for over 30 days.

    •    The recipient has blocked your number.

    •    The recipient hasn’t accepted the latest WhatsApp Terms of Service.

    •    The recipient is using an outdated version of WhatsApp.

    •    The recipient’s number is invalid or not connected to WhatsApp.

    •    Your message was flagged due to quality limits on marketing messages.

    •    The recipient is located in a region where WhatsApp Business Platform is restricted.

* * *

**2\. What does “Message Undeliverable” mean?**

This typically means the message was sent from your system but could not be delivered to the recipient’s device. Reasons include the recipient blocking your number, being offline too long, or technical/policy restrictions on Meta’s end.

* * *

**3\. How can I check if the recipient blocked my number?**

You won’t be notified directly due to privacy policies. However, if other messages are delivered to the same recipient or they are unresponsive over a long period, they may have blocked you.

* * *

**4\. What is the 24-hour Customer Service Window?**

Once a user sends a message to your business, you have 24 hours to respond using free-form messages. After that, only pre-approved templates can be used to re-initiate the conversation.

* * *

**5\. What is the “High-Quality User Experience” error?**

If a user receives too many marketing messages (e.g., 5–6 per day), WhatsApp may restrict further marketing messages to maintain quality. Utility templates are not affected by this restriction.

* * *

**6\. How can I resolve the “High-Quality User Experience” delivery issue?**

Try these steps:

    •    Ask the customer to send you a message first (this opens the 24-hour window again).

    •    Use a **Utility Template** instead of a Marketing Template.

    •    Wait and retry the message after some time.

* * *

**7\. How do I know if a user’s WhatsApp version is outdated?**

Ask the user to update WhatsApp to the following or newer versions:

    •    Android: 2.21.15.15+

    •    iOS: 2.21.170.4+

    •    Web: 2.2132.6+

Older versions may not support newer API features and may block message delivery.

* * *

**8\. Can users in all countries receive WhatsApp Business messages?**

No. The WhatsApp Business Platform is restricted in certain countries, including:

    •    Cuba

    •    Iran

    •    North Korea

    •    Syria

    •    Crimea, Donetsk, and Luhansk (Ukraine)

* * *

**9\. What does it mean if I see both “delivered” and “failed” statuses for the same message?**

This can happen if the user is logged in on multiple devices. The message was delivered to at least one device but may have failed on another.

* * *

**10\. What should I do if I get authentication or permission errors when sending messages?**

    •    Use the [Meta Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) to validate your token.

    •    Ensure the token includes these permissions:

    •    whatsapp\_business\_management

    •    whatsapp\_business\_messaging

If not, regenerate your access token with the correct permissions.

* * *

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

- [WhatsApp Full Setup Guide for Agency](https://help.gohighlevel.com/support/solutions/articles/48001206216-whatsapp-full-setup-guide-for-agency)
- [WhatsApp - Messaging Limits](https://help.gohighlevel.com/support/solutions/articles/155000001637-whatsapp-messaging-limits)
- [How to Set Up WhatsApp for a Sub-Account](https://help.gohighlevel.com/support/solutions/articles/155000001980-how-to-set-up-whatsapp-for-a-sub-account)
- [WhatsApp Pricing, Billing, and Rebilling Guide](https://help.gohighlevel.com/support/solutions/articles/155000001428-whatsapp-pricing-billing-and-rebilling-guide)
- [WhatsApp Template Statuses and Best Practice](https://help.gohighlevel.com/support/solutions/articles/155000001623-whatsapp-template-statuses-and-best-practice)
- [How to create a WhatsApp Template?](https://help.gohighlevel.com/support/solutions/articles/155000000861-how-to-create-a-whatsapp-template-)

## Related Articles

- [WhatsApp Messages Errors: Meta Chose Not to Deliver and Message Undeliverable](https://help.gohighlevel.com/support/solutions/articles/155000004310-whatsapp-messages-errors-meta-chose-not-to-deliver-and-message-undeliverable)
- [Per-User Marketing Template Message Limits](https://help.gohighlevel.com/support/solutions/articles/155000004311-per-user-marketing-template-message-limits)
- [How to Add a Countdown Timer in WhatsApp Templates](https://help.gohighlevel.com/support/solutions/articles/155000006819-how-to-add-a-countdown-timer-in-whatsapp-templates)
- [WhatsApp Error: "In order to maintain a healthy ecosystem engagement, the message failed to be delivered"](https://help.gohighlevel.com/support/solutions/articles/155000006956-whatsapp-error-in-order-to-maintain-a-healthy-ecosystem-engagement-the-message-failed-to-be-delive)
- [Important Update: : WhatsApp Marketing Messages to U.S. Numbers Paused Starting April 1, 2025](https://help.gohighlevel.com/support/solutions/articles/155000004720-important-update-whatsapp-marketing-messages-to-u-s-numbers-paused-starting-april-1-2025)
- [WhatsApp Settings](https://help.gohighlevel.com/support/solutions/articles/155000006911-whatsapp-settings)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004824-why-a-whatsapp-message-was-not-delivered)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004824-why-a-whatsapp-message-was-not-delivered/hit)