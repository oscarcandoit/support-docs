---
url: "https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery"
title: " Troubleshooting SMS Delivery : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Troubleshooting SMS Delivery

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

# Troubleshooting SMS Delivery

Modified on: Fri, 29 Aug, 2025 at 7:44 AM

It’s frustrating when a text never arrives—whether it’s an appointment reminder, a promotion, or a two-way chat. This guide walks you through each step of our delivery pipeline, shows you where things can go wrong, and gives you clear, actionable fixes so you can get back on track fast.

* * *

**TABLE OF CONTENTS**

- [How Message Delivery Works](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#How-Message-Delivery-Works)
- [Where to Find Error Messages in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#Where-to-Find-Error-Messages-in-HighLevel)
- [Common Reasons Why Messages Fail (And How to Fix Them?)](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#Common-Reasons-Why-Messages-Fail-(And-How-to-Fix-Them?))
  - [1\. At the High-Level Layer](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#1.-At-the-High-Level-Layer)
  - [2\. At the Twilio/LC Phone Layer](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#2.-At-the-Twilio/LC-Phone-Layer)
  - [3\. At the Sender Carrier Network Layer](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#3.-At-the-Sender-Carrier-Network-Layer)
- [Super-Quick Checklist Before You Click “Send”](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#Super-Quick-Checklist-Before-You-Click-%E2%80%9CSend%E2%80%9D)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery#Related-Articles)

* * *

## **How Message Delivery Works**

When you send a message from HighLevel, it travels through multiple layers:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047990043/original/rtRKVPSokDhZTTns4Bqu6AbZhQHdt-PEfA.jpeg?1749549338)

If the message fails at any layer, it may not be delivered to the end user. Let's look at how to spot these issues and fix them.

* * *

## **Where to Find Error Messages in HighLevel**

If your message didn’t go through, check the Conversations View. In most cases, when a message fails to send or deliver, we display an error in the conversation view that appears like this:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155052685143/original/yYUXlUZ2Nin4ZumnCdX6gbB9zHgw972n0g.jpeg?1756470598)

The error message and error code will provide you with clues about what is going wrong and how to proceed from there.

* * *

## **Common Reasons Why Messages Fail (And How to Fix Them?)**

### **1\. At the High-Level Layer**

| Issue | Cause | Fix (Help docs) |
| --- | --- | --- |
| Contact has DND (Do Not Disturb) enabled | When DND is enabled for a contact on the message channel or overall, HighLevel doesn't send the message and displays an error in the conversation screen. | Remove DND status from the contact to resume message sending.<br>➡️ [DoNotDisturb DND](https://help.gohighlevel.com/support/solutions/articles/48001214849) |
| --- | --- | --- |
| The Number Is a Landline | When number validation is enabled, the system checks if a number is message-capable (i.e., not a landline). If not, it prevents the message from being sent. | Use a mobile number instead or disable number validation if necessary.<br>➡️ [Number Intelligence](https://help.gohighlevel.com/en/support/solutions/articles/48001153968) |
| --- | --- | --- |
| Sub-Account is New and Undergoing Ramped Sending | HighLevel restricts message volume for new sub-accounts to prevent spam, gradually increasing limits over time. | Wait for limits to increase automatically, or have the agency request a lift.<br>➡️ [LC Phone Messaging Policy (check Ramp-Up Model: section)](https://help.gohighlevel.com/en/support/solutions/articles/48001213941) |
| --- | --- | --- |
| Sub-Account Has Hit Its Daily Message Limit | Each sub-account has a daily message limit set by the agency. Bulk and automated messages stop sending once this limit is hit, but individual replies can still be sent. <br>Agencies have control over these limits for each sub-account. | Adjust daily limits from the agency settings, or wait until the next day.<br>➡️ [LC Phone Messaging Policy](https://help.gohighlevel.com/en/support/solutions/articles/48001213941) |
| --- | --- | --- |
| Sub-Account Sending Suspended Due to High Errors, Opt-Outs, or Complaints | Sub-accounts exceeding spam, opt-out, or carrier complaint thresholds have message sending suspended. Attempts to send messages during suspension will be skipped and display an error. | Follow deliverability best practices and contact support if needed.<br>➡️ [Best Practices for Deliverability](https://help.gohighlevel.com/support/solutions/articles/155000000079) |

### **2\. At the Twilio/LC Phone Layer**

|     |     |     |
| --- | --- | --- |
| ? Error | Cause | Fix |
| Number is on Twilio's DND list | The number is on Twilio’s DND list due to a previous opt-out or carrier complaint. Messages will fail unless the contact opts back in. | The contact must text “START” to the same Twilio number to re-enable messaging. |
| 30001: Queue Overflow | Messages are queued based on the sender’s or account’s rate. If they stay in the queue for over 4 hours, they fail. | Reduce the Validity Period in Messaging Service settings or API requests to shorten queue time. |
| 30002: Suspended Sub-Account | The message fails if the Twilio sub-account is suspended between queuing and sending. | Contact Twilio or HighLevel Support to resolve the suspension. |

### **3\. At the Sender Carrier Network Layer**

|     |     |     |
| --- | --- | --- |
| Error | Cause | Fix |
| 30003: Unreachable Destination Handset | The recipient's phone may be off, have no signal, be a landline, or there may be a mobile carrier issue. | Retry later or verify the number is a mobile line and properly reachable. |
| 30004: Message Blocked | Possible reasons messages might not be sent or delivered to contacts include: The destination number is blocked, the device has insufficient signal or cannot receive message (e.g., landline), the number is on India's Do Not Call registry, there's a mobile carrier issue, or a US/CA toll-free number was sent to a handset that previously opted out. | Ensure the number is valid and opted in. Avoid sending to DND or blocked numbers. |
| Attachment File Too Large | The file size exceeds carrier limits for MMS. | ➡️ [File Size Limits for Attachments in SMS.](https://help.gohighlevel.com/support/solutions/articles/48001208913) |
| International Geo Permissions | Your account might not have permission to send international messages.. | Contact support. |
| Message Body Too Long | \- If you are using a trigger to send a message. Check the body of the message. Also, check to see if there is a custom value of {{message.body}}<br>\- For example, if someone replies via email and their email exceeds the limit of 1600 characters, the message will not send if you have the custom value {{message.body}}<br>![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047990631/original/PvnlWbqLsSDvP46SqUbwxdC7wgjSuYDhkQ.png?1749549640) | Trim the message manually or modify the trigger logic to exclude large custom values. |

```
Please Note: To learn more about error codes and troubleshooting, refer to Error and Warning Dictionary
```

* * *

## **Super-Quick Checklist Before You Click “Send”**

- **Check Conversations**: Note any red error badge.

- **Match Error Code**: Use the tables above to find the cause.

- **Apply Fix**: Follow the “Fix” column for that issue.

- **Retry**: Resend the message after adjustments.

- **Monitor**: Confirm delivery or note a new error code

* * *

## **Frequently Asked Questions**

**Q: Why am I getting charged for failed message messages?**Charges apply once a message is attempted—even if it fails later in the process.

**Q: How do I know exactly why a message failed?**You can check the message logs in Twilio.

➡️ [How to check Twilio logs](https://help.gohighlevel.com/en/support/solutions/articles/48001222601)

* * *

## **Related Articles**

- [Best Practices for SMS deliverability and Avoiding SMS Restrictions](https://help.gohighlevel.com/en/support/solutions/articles/155000000079)
- [LC - Phone Messaging Policy](https://help.gohighlevel.com/en/support/solutions/articles/48001213941)
- [SMS / Phone number Validation](https://help.gohighlevel.com/en/support/solutions/articles/48001153968)

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
- [How to check logs for a specific text message if you are connected to your own Twilio account](https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-check-logs-for-a-specific-text-message-if-you-are-connected-to-your-own-twilio-account)
- [Understanding Common SMS Delivery Errors](https://help.gohighlevel.com/support/solutions/articles/48001208912-understanding-common-sms-delivery-errors)
- [Send HighLevel Documents and Contracts via SMS](https://help.gohighlevel.com/support/solutions/articles/155000006280-send-highlevel-documents-and-contracts-via-sms)
- [How To Attach Files to MMS Using Custom Values](https://help.gohighlevel.com/support/solutions/articles/48001218845-how-to-attach-files-to-mms-using-custom-values)
- [How to Configure SMS Compliance Settings](https://help.gohighlevel.com/support/solutions/articles/155000004684-how-to-configure-sms-compliance-settings)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48000981696-troubleshooting-sms-delivery/hit)