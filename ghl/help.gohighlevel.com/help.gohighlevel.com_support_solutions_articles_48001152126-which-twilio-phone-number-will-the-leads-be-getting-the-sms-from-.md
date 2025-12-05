---
url: "https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-"
title: " Which Twilio phone number will the leads be getting the SMS from? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Which Twilio phone number will the leads be getting the S...

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

# Which Twilio phone number will the leads be getting the SMS from?

Modified on: Wed, 17 Sep, 2025 at 8:39 AM

**Overview**

When sending SMS through HighLevel, the system follows a set of rules to determine which Twilio phone number is used as the sender. This ensures messages are sent from the most appropriate number, maintaining consistency and compliance.

* * *

**TABLE OF CONTENTS**

- [Workflow Settings Option](https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-#Workflow-Settings-Option)
- [Fallback Rules (When No User Number Exists)](https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-#Fallback-Rules-(When-No-User-Number-Exists))
- [Checking Which Number Was Used](https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-#Checking-Which-Number-Was-Used)

* * *

**Primary Rule**

1.If the staff member sending the SMS is listed under the sub-account’s **My Staff** tab **and** has a **dedicated Twilio number assigned**:

➝ The lead will receive the SMS from that assigned Twilio number.(It can be changed manually)

2.**Exception:** If the assigned Twilio number is SMS-incompatible, the system will fall back to the **default outbound number**.

3.If user is selecting the number from which he wants to send the messages manually,the system will display the **last used number next time.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053960857/original/fAxL4sKwzS_4yVbv2xvI4Ern0QSl-kiZuA.png?1758116362)**

* * *

**How to Assign Twilio Numbers to Users**

1\. Go to **Sub-Account Settings > My Staff**.

2\. **Edit** the User.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959012/original/47E8wtytoJnuER0WSD4SpA2bNZ_p10Zfsw.png?1758115345)

3\. Expand the **Call & Voicemail Settings**.

4\. Assign a Twilio phone number to the User.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959210/original/ep5Tz931DpRQ7_j_Y5rXUwa9HDFnMJE8Bw.png?1758115465)

Learn more about [Phone numbers for users / Assign Twilio Numbers to Users](https://help.gohighlevel.com/en/support/solutions/articles/48001152124)

* * *

## **Workflow Settings Option**

Inside the **Workflow builder**, you can also **manually choose which number to send SMS from**.

- When configuring a **“Send SMS” step**, you’ll see a dropdown for **“From Number.”**


This is useful when you want workflows to always send from a particular number, regardless of staff assignment or channel number.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053959845/original/qlUVFLyfTCV5zYbFAhz3SS187jq-AOvDzg.png?1758115796)

* * *

## **Fallback Rules (When No User Number Exists)**

If the User logged into HighLevel is **not listed in the sub-account**, or **doesn’t have a LC number assigned**, the system will try the following in order:

1. **Channel Number** – the **first LC number ever used with that contact**.

   - This maintains conversation continuity.
2. **Default Outbound Number** – if the channel number has been removed, the system will use the **default Twilio number** set at the account level.


* * *

## **Checking Which Number Was Used**

To confirm the exact Twilio number used in a conversation:

- Hover over the **SMS message** in the conversation view.

- Click the **three dots (…) > Details**.

- This will show the **Twilio number** used to send that SMS.


![](https://i.ibb.co/YjHc479/chrome-capture-2023-1-20.gif)

* * *

**Related article**

[SMS still coming from old Twilio number when I got a new one?](https://help.gohighlevel.com/en/support/solutions/articles/48001152123)

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
- [Conversations Glitching? Here's What’s Going On?](https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-)
- [How to Purchase a Phone Number in a Sub-Account](https://help.gohighlevel.com/support/solutions/articles/155000003226-how-to-purchase-a-phone-number-in-a-sub-account)
- [LC Phone Pricing & Billing Guide](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-billing-guide)
- [Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)
- [How to Restore a Deleted Phone Number](https://help.gohighlevel.com/support/solutions/articles/48001232056-how-to-restore-a-deleted-phone-number)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001152126-which-twilio-phone-number-will-the-leads-be-getting-the-sms-from-/hit)