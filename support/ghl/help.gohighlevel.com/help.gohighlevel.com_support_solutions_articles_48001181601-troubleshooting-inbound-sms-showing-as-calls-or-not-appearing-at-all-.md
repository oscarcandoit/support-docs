---
url: "https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-"
title: " Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all. : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Troubleshooting: Inbound SMS Showing as Calls or Not Appe...

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

# Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.

Modified on: Wed, 24 Sep, 2025 at 6:35 AM

If you're not seeing incoming SMS messages in HighLevel—or they’re showing up as calls instead—this guide walks you through how to troubleshoot and resolve the issue based on whether you're using Twilio or LC Phone.

* * *

**TABLE OF CONTENTS**

- [How to fix this (At a Glance)](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#How-to-fix-this-(At-a-Glance))
  - [✅ For LC Phone Users](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#%E2%9C%85-For-LC-Phone-Users)
  - [✅ For Twilio Users (Non-LC Phone)](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#%E2%9C%85-For-Twilio-Users-(Non-LC-Phone))
- [Step-by-Step Fix (for Twilio Users)](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#Step-by-Step-Fix-(for-Twilio-Users))
  - [Step 1: Log in to Twilio.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#Step-1%3A-Log-in-to-Twilio.)
  - [Step 2: Find the Correct Twilio Number](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#Step-2%3A-Find-the-Correct-Twilio-Number)
  - [Step 3: Confirm Webhook Configuration](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#Step-3%3A-Confirm-Webhook-Configuration)
- [Check SMS Capability](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#Check-SMS-Capability)
- [Review Message Logs](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-#Review-Message-Logs)

* * *

# **How to fix this (At a Glance)**

## **✅ For LC Phone Users**

- Contact [HighLevel Support](https://help.gohighlevel.com/support/tickets/new) for resolution.

## **✅ For Twilio Users (Non-LC Phone)**

- Check Twilio Number Configuration
  - Number is SMS/MMS-capable
  - Webhook URL is correctly set for messaging?
- Check If Messaging Services Are Enabled ?
- Review Message Logs
- If issue still persist contact [Twilio support.](https://support.twilio.com/)

* * *

# **Step-by-Step Fix (for Twilio Users)**

## **Step 1: Log in to Twilio.**

- Go to [twilio.com/login](https://www.twilio.com/login) and **Sign in.**
- In the top-left drop-down, Click **Account Name** \> **View Subaccounts.** _(Refer screen-shot below)_


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048323954/original/vSEfQvPJiGA_zCYQVSYDBuW57Nd8YiVNrw.png?1750080048)

```
If you have multiple Subaccounts and can't find the right one, go to your HighLevel Agency View > Settings > Phone Integration > Sub-Account Settings
Search for Account you are troubleshooting and copy the Account SID as shown in Screenshot 2.0 below.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048325672/original/qGhVCcYLVbwLO1VN4X0Xpn3w8q35BA32yA.png?1750081121)

Screenshot 2.0

## **Step 2: Find the Correct Twilio Number**

- In Subaccounts, paste the Account SID into the search bar to find the matching subaccount. _(refer screenshot 3.0)_
- Click on Sub Account you were looking for.
- Go to **Phone Numbers > Manage > Active Numbers** _(screenshot 3.1)_

- Click the phone number in question.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048326658/original/wfGuy2jN0edS5KwbyvRVA0mOpKVvm0t0sg.png?1750081679)

Screenshot 3.0

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048327877/original/_D4Wur5uDAlf_h1E3_d7NGARNhx25WrDYA.png?1750082372)

Screenshot 3.1

## **Step 3: Confirm Webhook Configuration**

- Scroll down and check the **Messaging webhook settings**.
- If it’s missing or incorrect, update it according (Screenshot 3.2 and 3.3)
- Click Save.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048362616/original/2ntLPpZIJdr7VF4u9xmzO-7KppYrsCYUyQ.png?1750139542)

Screenshot 3.2

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048362676/original/1DQr6QHWJDF3N6X0Dg1dY6R8xfOOb_ydtg.png?1750139698)

Screenshot 3.3

Now test to see **if inbound messages are appearing correctly.**

# **Check SMS Capability**

Look for this (icon: **†**)next to the number—it means the number **can send/receive SMS only within the country.** _(screenshot 3.4)_

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048330328/original/NZze8-m4RTxheJoX6VOiTVKmwDY7auuZLA.png?1750083890)

Screenshot 3.4

# **Review Message Logs**

- In the left sidebar, **Click Monitor > Logs > Messaging.**
- Enter the lead’s phone number in the To field (numbers only—no spaces, dashes, or parentheses). _(screenshot 4.0)_
- Review the message status.
- Click the Date to view message details.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048331030/original/ViTgBcW-gKaOnr8ozV98rbF4K16o2ZsVYQ.png?1750084349)

Screenshot 4.0

```
If the message status is “Delivered” but nothing shows in HighLevel, copy the Message SID and open a ticket with Twilio Support.
```

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

- [LC Phone Pricing & Billing Guide](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-billing-guide)
- [Agency Rolled-up Reporting](https://help.gohighlevel.com/support/solutions/articles/48001224166-agency-rolled-up-reporting)
- [How To Forward Inbound Calls to Mobile App](https://help.gohighlevel.com/support/solutions/articles/48001224659-how-to-forward-inbound-calls-to-mobile-app)
- [How to Use Do Not Disturb (DND)](https://help.gohighlevel.com/support/solutions/articles/48001214849-how-to-use-do-not-disturb-dnd-)
- [Conversations Glitching? Here's What’s Going On?](https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-)
- [Inbound Call Routing - Explained](https://help.gohighlevel.com/support/solutions/articles/48000981432-inbound-call-routing-explained)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-/hit)