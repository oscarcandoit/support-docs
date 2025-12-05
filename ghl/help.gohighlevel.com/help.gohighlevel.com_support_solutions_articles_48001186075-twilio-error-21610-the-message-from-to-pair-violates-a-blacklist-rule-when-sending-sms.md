---
url: "https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms"
title: " Twilio Error 21610 \"The message from/to pair violates a blacklist rule\" when sending SMS : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Twilio Error 21610 "The message from/to pair violate...

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

# Twilio Error 21610 "The message from/to pair violates a blacklist rule" when sending SMS

Modified on: Tue, 23 Sep, 2025 at 3:59 AM

# **Overview**

When sending SMS/MMS through Twilio (or integrated platforms), you may encounter cases where your message cannot be delivered because the recipient has **opted out** or enabled **Do Not Disturb (DND)**. This is enforced to honor user preferences and maintain compliance with messaging regulations.

* * *

## **Description**

The person you are trying to message has opted out of receiving messages from:

- Your phone number,

- Your Channels sender, or

- Your Messaging Service.


Alternatively, the contact may have **DND (Do Not Disturb)** status enabled in their contact profile.

If a recipient has previously replied with **“STOP”** to one of your messages, you will not be able to send to them again until they respond with **“START.”**

* * *

## **Possible Causes**

1. The recipient’s handset replied with **STOP** or another opt-out keyword.

2. The phone number may have been **reassigned** to a new user who never opted in.

3. The contact has enabled **DND** for SMS, calls, or all communication types.

4. The platform blocks outgoing messages to respect regulatory and compliance requirements.


* * *

## **Possible Solutions**

- **Remove unsubscribed numbers** from your contact list.

- **Ask the recipient to re-subscribe** by texting **“START”** (or another opt-in keyword) to your number.

- **Verify consent** before sending — ensure recipients have explicitly opted in to receive your messages.


* * *

## **Twilio-Specific Opt-Out Behavior**

If you attempt to send a message to a recipient who has opted out, the **Twilio API** will return an error, and the message will not be sent. You will not be charged for the attempt.

### Opt-Out Keywords (unsubscribe)

Messages will be blocked if the recipient replied with any of these:

- STOP

- STOPALL

- UNSUBSCRIBE

- CANCEL

- END

- QUIT


### Opt-In Keywords (resubscribe)

To resume receiving your messages, recipients must reply with:

- START

- YES


* * *

## **Important Notice**

- If a user opts out of a **Messaging Service number**, the opt-out applies to **all messages** sent from that service.

- This ensures subscribers are fully protected from unwanted communication.


* * *

**Key Takeaway:** Always secure **proper opt-in consent**, and respect opt-out requests. If someone has opted out, they must **manually opt back in** before you can send them messages again.

Reference-  [https://support.twilio.com/hc/en-us/articles/223133627-Error-21610-The-message-From-To-pair-violates-when-sending-SMS](https://support.twilio.com/hc/en-us/articles/223133627-Error-21610-The-message-From-To-pair-violates-when-sending-SMS)

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
- [Understanding Common SMS Delivery Errors](https://help.gohighlevel.com/support/solutions/articles/48001208912-understanding-common-sms-delivery-errors)
- [Troubleshooting SMS Delivery](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery)
- [Which Twilio phone number will the leads be getting the SMS from?](https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-)
- [How to Prevent SMS Filtering by Carriers: Error 30007](https://help.gohighlevel.com/support/solutions/articles/48001237726-how-to-prevent-sms-filtering-by-carriers-error-30007)
- [How to check logs for a specific text message if you are connected to your own Twilio account](https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-check-logs-for-a-specific-text-message-if-you-are-connected-to-your-own-twilio-account)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms/hit)