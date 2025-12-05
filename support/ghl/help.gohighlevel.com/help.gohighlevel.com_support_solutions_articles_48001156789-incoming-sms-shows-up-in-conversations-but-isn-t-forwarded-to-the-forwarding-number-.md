---
url: "https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-"
title: " Incoming SMS only shows up in Conversation for HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Messaging](https://help.gohighlevel.com/support/solutions/folders/48000690075)
6. Incoming SMS shows up in Conversations but isn’t forwarde...

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

# Incoming SMS shows up in Conversations but isn’t forwarded to the forwarding number.

Modified on: Fri, 19 Sep, 2025 at 6:04 AM

**Overview**

HighLevel’s mobile and web apps are built to receive inbound SMS messages directly within the Conversations tab. However, by configuring a workflow with custom triggers and notifications, you can also forward these incoming messages notifications—though this will result in additional charges.

If you’d like incoming SMS messages to appear in the Conversations tab _and_ be automatically forwarded to a designated number as a notification, this guide will walk you through the process. By following the troubleshooting steps provided, you can ensure that every incoming message is successfully redirected to your chosen forwarding number.

**TABLE OF CONTENTS**

- [Step 1: Create a Workflow](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-1%3A-Create-a-Workflow)
- [Step 2: Start from Scratch](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-2%3A-Start-from-Scratch)
- [Step 3: Add a Workflow Trigger](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-3%3A-Add-a-Workflow-Trigger)
- [Step 4: Select “Customer Replied”](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-4%3A-Select-%E2%80%9CCustomer-Replied%E2%80%9D)
- [Step 5: Add Filters](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-5%3A-Add-Filters)
- [Step 6: Select Reply Channel](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-6%3A-Select-Reply-Channel)
- [Step 7: Choose SMS](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-7%3A-Choose-SMS)
- [Step 8: Click on Save Trigger](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-8%3A-Click-on-Save-Trigger)
- [Step 9: Add an Action – Send Internal Notification](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-9%3A-Add-an-Action-%E2%80%93-Send-Internal-Notification)
- [Step 10: Add Custom Values – Message Body](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-10%3A-Add-Custom-Values-%E2%80%93-Message-Body)
- [Step 11: Add Custom Values – Contact First Name](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Step-11%3A-Add-Custom-Values-%E2%80%93-Contact-First-Name)

- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-#Related-Articles)

* * *

Incoming SMS only shows up in Conversation / not forwarding to the forwarding number : HighLevel Support Portal - 17 February 2023

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Incoming SMS only shows up in Conversation / not forwarding to the forwarding number : HighLevel Support Portal - 17 February 2023](https://www.loom.com/share/9719819679ba49ac9e92607df78bdff4 "Incoming SMS only shows up in Conversation / not forwarding to the forwarding number : HighLevel Support Portal - 17 February 2023")

3 min

1.16K views

0

[Open video in Loom](https://www.loom.com/share/9719819679ba49ac9e92607df78bdff4 "Open video in Loom")

1.2×

3 min⚡️3 min 46 sec3 min 1 sec2 min 31 sec2 min1 min 46 sec1 min 30 sec1 min 12 sec

![](https://cdn.loom.com/sessions/thumbnails/9719819679ba49ac9e92607df78bdff4-00001.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Incoming SMS only shows up in Conversation / not forwarding to the forwarding number : HighLevel Support Portal - 17 February 2023](https://www.loom.com/share/9719819679ba49ac9e92607df78bdff4 "Incoming SMS only shows up in Conversation / not forwarding to the forwarding number : HighLevel Support Portal - 17 February 2023")

3 min

1.16K views

0

[Open video in Loom](https://www.loom.com/share/9719819679ba49ac9e92607df78bdff4 "Open video in Loom")

1.2×

3 min⚡️3 min 46 sec3 min 1 sec2 min 31 sec2 min1 min 46 sec1 min 30 sec1 min 12 sec

We will only receive the inbound messages in the Conversation tab using Highlevel's mobile app and web app.

Incoming SMS will not be forwarded to the forwarding number

You set up a **Customer replied** workflow trigger like this with the Custom Value **{{message.body}}**

**Steps to create a workflow-**

## **Step 1: Create a Workflow**

Navigate to **Automation > Workflows > Create Workflow**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054130737/original/95tUaOX4SPgqFWq8o42zKkLBOrb3tjWtdA.png?1758279172)

## **Step 2: Start from Scratch**

Click **Start from Scratch** and then select **Create New Workflow**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054130880/original/H-26rH1GF0MkZOOQL1iKd1V_1tzRhIcl5g.png?1758279262)

## **Step 3: Add a Workflow Trigger**

Click **Add New Workflow Trigger**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131077/original/HOq864JsX-wWx1cruXGdObKDsvKSPJ05FA.png?1758279349)

## **Step 4: Select “Customer Replied”**

Choose **Customer Replied** as the workflow trigger.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131310/original/51XMxxiWX-u4o-Kl0w4oApwzqZDavHBnqw.png?1758279423)

## **Step 5: Add Filters**

Click **Add Filters**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131335/original/0fpNZPq7R2UlUM6JFbgvlu_PAdMnq6j2fQ.png?1758279461)

## **Step 6: Select Reply Channel**

In the filter options, select **Reply Channel**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131523/original/6qbjI1i223rfhQpNppjcwA_F6uARI6fPHw.png?1758279519)**

## **Step 7: Choose SMS**

From the reply channel dropdown, choose **SMS**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131571/original/g_oLzHXTS11l9bLBtjbxWzvvLXFKS_yKLw.png?1758279548)

## **Step 8: Click on Save Trigger**

Click on Please select action

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131595/original/o3pLYwY_EgdHXo0ZNMn7dVP5B-N8olGW_Q.png?1758279574)

## **Step 9: Add an Action – Send Internal Notification**

Choose **Send Internal Notification**.

⚠ **Note:** SMS notifications will generate charges for each SMS sent.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131685/original/AUl9fAcdFRTqir3wrdvPRqlqpK14SQ55gg.png?1758279623)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131784/original/mK9gRU0NiByWvt9VPG3n_e-oUo4dLNKwFQ.png?1758279666)

## **Step 10: Add Custom Values – Message Body**

Navigate to **Custom Values > Message > Message Body**.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054131877/original/fUx-zzkaWf67vLqw4LGymFTCmAxkow8q8Q.png?1758279735)

## **Step 11: Add Custom Values – Contact First Name**

Navigate to **Contact > First Name** to include personalization.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054132059/original/CfQHim1rFFEmNoNrFnjOC4B78pxkyUJtrg.png?1758279821)

* * *

# **Frequently Asked Questions**

Currently no frequently asked questions. Submit feedback on this article to help is add questions to this section!

* * *

# **Related Articles**

- [Workflow - Send SMS Actions](https://help.gohighlevel.com/a/solutions/articles/155000002474?portalId=48000045315)

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

- [Inbound Call Routing - Explained](https://help.gohighlevel.com/support/solutions/articles/48000981432-inbound-call-routing-explained)
- [How To Fix - Phone Call Redirect Loop](https://help.gohighlevel.com/support/solutions/articles/48001076653-how-to-fix-phone-call-redirect-loop)
- [Conversations - How to Setup & Track SLAs](https://help.gohighlevel.com/support/solutions/articles/155000006745-conversations-how-to-setup-track-slas)
- [Conversations Glitching? Here's What’s Going On?](https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-)
- [Getting Started - Setup Email, Phone, and SMS](https://help.gohighlevel.com/support/solutions/articles/155000005058-getting-started-setup-email-phone-and-sms)
- [Number Intelligence - Number Validation, Spam Detection, and Unknown Caller](https://help.gohighlevel.com/support/solutions/articles/48001153968-number-intelligence-number-validation-spam-detection-and-unknown-caller)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001156789-incoming-sms-shows-up-in-conversations-but-isn-t-forwarded-to-the-forwarding-number-/hit)