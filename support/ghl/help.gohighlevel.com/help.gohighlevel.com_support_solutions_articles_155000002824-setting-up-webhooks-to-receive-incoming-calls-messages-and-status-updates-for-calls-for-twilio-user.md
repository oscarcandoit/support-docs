---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user"
title: " Setting up webhooks to receive incoming calls, messages and status updates for calls (for Twilio users) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [General](https://help.gohighlevel.com/support/solutions/folders/48000665896)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [General](https://help.gohighlevel.com/support/solutions/folders/48000665896)
6. Setting up webhooks to receive incoming calls, messages a...

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

# Setting up webhooks to receive incoming calls, messages and status updates for calls (for Twilio users)

Modified on: Tue, 14 Oct, 2025 at 8:04 AM

**TABLE OF CONTENTS**

- [Step 1: Login to your Twilio account and click on the URL to view phone numbers:](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#Step-1%3A-Login-to-your-Twilio-account-and-click-on-the-URL-to-view-phone-numbers%3A)
- [Step 2: Click on a phone number to edit the configuration](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#Step-2%3A-Click-on-a-phone-number-to-edit-the-configuration)
- [Step 3: Set the Routing region to ‘US1’ if not done already.](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#Step-3%3A-Set-the-Routing-region-to-%E2%80%98US1%E2%80%99-if-not-done-already.%C2%A0)
- [Step 4: Under 'Voice Configuration' set it to:](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#Step-4%3A-Under-'Voice-Configuration'-set-it-to%3A)
- [Step 5: Under 'Messaging Service' set it to Routing region to ‘US1’ if not done already.](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#Step-5%3A-Under-'Messaging-Service'-set-it-to-Routing-region-to-%E2%80%98US1%E2%80%99-if-not-done-already.-%C2%A0)
- [Step 6: Messaging service: No input/change needed](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#Step-6%3A-Messaging-service%3A-No-input/change-needed%C2%A0)
- [If your number is connected to a Messaging Service](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#If-your-number-is-connected-to-a-Messaging-Service)
  - [1\. Click on Active numbers](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#1.-Click-on-Active-numbers)
  - [2\. Click on the linked Messaging Service](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#2.-Click-on-the-linked-Messaging-Service)
  - [3\. Click on Integration](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#3.-Click-on-Integration)
  - [4\. Select "Send a webhook"](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#4.-Select-)
  - [5\. Click on Save](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#5.-Click-on-Save)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user#Frequently-Asked-Questions)

If you use Twilio and not LC phone directly, you need to setup webhooks to be able to receive incoming calls, messages and call status updates. In this article, we will help you learn how to do that in your Twilio console.

**Why should we setup webhooks?**

For you to receive calls, messages or status updates on our platform, Twilio needs to communicate with our system: send the incoming call, message or status update to us. Webhooks allow us to do that.

Please follow the below steps to setup webhooks on Twilio (for incoming calls, incoming messages and call status updates):

# **Step 1: Login to [your Twilio account](https://console.twilio.com/us1/develop/phone-numbers/manage/incoming) and click on the URL to view phone numbers:**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029960826/original/IZ7yENfP_hQPi6ZixShX8idVcNClaP-ADg.jpg?1722004804)

# **Step 2: Click on a phone number to edit the configuration**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029960924/original/5hdNuHihO0Bn1Zs85z92bDr0JuQoEXYsOA.jpg?1722004841)

# **Step 3: Set the Routing region to ‘US1’ if not done already.**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961064/original/R_E313n-15o49amF5BgCVQHTQ_4k1_Lhyw.jpg?1722004928)

# **Step 4: Under 'Voice Configuration' set it to:**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961145/original/5YoMJcESIuUpyhmxjqxQBVtQ9VPkgtQ6EA.jpg?1722004991)

- Configure with: Webhook, TwiML Bin, Function, Studio Flow, Proxy Service
- A call comes in: Webhook
- Use the following URL

[https://services.leadconnectorhq.com/phone-system/voice-call/inbound](https://staging.services.leadconnectorhq.com/phone-system/voice-call/inbound)
- HTTP: HTTP POST
- Primary handler fails: No changes needed
- Call status changes > URL:

[https://services.leadconnectorhq.com/appengine/twilio/incoming\_call\_status](https://services.leadconnectorhq.com/appengine/twilio/incoming_call_status)
- HTTP: HTTP POST
- Caller Name Lookup: Your choice, we recommend keeping this 'Enabled' to use lookup
- Click on the save configuration button

# **Step 5: Under 'Messaging Service' set it to Routing region to ‘US1’ if not done already.**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961258/original/9T8Q6PHmgecj9Grpd_PjC990gM-p2iaMlw.jpg?1722005052)

# **Step 6: Messaging service: No input/change needed**    ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155029961331/original/BouCDaftFsJpbqCW0FAO9fRcce4KS06oRw.jpg?1722005087)

- Configure with: Webhook, TwiML Bin, Function, Studio Flow, Proxy Service
- A message comes in: Webhook
- Use the following URL

[https://services.leadconnectorhq.com/appengine/twilio/incoming\_message](https://services.leadconnectorhq.com/appengine/twilio/incoming_message)
- HTTP: HTTP POST
- Primary handler fails: No input/change needed
- Click on the save configuration button

# If your number is connected to a Messaging Service

## 1\. Click on Active numbers

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055960979/original/1b8SARZz963zGQflfuSy8HrQIf8ooUkkpQ.png?1760446722)

## 2\. Click on the linked Messaging Service

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961029/original/Y1JYNjrWiWqlSvGEDjcE348tk5qMSFOy-g.png?1760446771)

## 3\. Click on Integration

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961125/original/oTd4EfMYxjFzHFNvyyOLMgtciJiNqYVvzw.png?1760446819)

## 4\. Select "Send a webhook"

Make sure to use the following webhooks

Request URL: [https://services.leadconnectorhq.com/appengine/twilio/incoming\_message](https://services.leadconnectorhq.com/appengine/twilio/incoming_message)

Fallback URL: [https://services.leadconnectorhq.com/appengine/twilio/incoming\_message](https://services.leadconnectorhq.com/appengine/twilio/incoming_message)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961193/original/QGoIkSOcuVqVjOBW6NltefAE5svQinu4Ow.png?1760446869)

## 5\. Click on Save

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055961518/original/_dZHEODhUGJ4cganEb31DFjDRTag52pBqg.png?1760446957)

* * *

# **Frequently Asked Questions**

Currently no frequently asked questions. Submit feedback on this article to help is add questions to this section!

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

- [Number Intelligence - Number Validation, Spam Detection, and Unknown Caller](https://help.gohighlevel.com/support/solutions/articles/48001153968-number-intelligence-number-validation-spam-detection-and-unknown-caller)
- [How to use Custom CSS to hide the Twilio error banner](https://help.gohighlevel.com/support/solutions/articles/48001232032-how-to-use-custom-css-to-hide-the-twilio-error-banner)
- [Setting up webhooks to receive incoming calls, messages and status updates for calls (for Twilio users)](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user)
- [Call Forwarding to Your HighLevel Phone Number](https://help.gohighlevel.com/support/solutions/articles/155000004201-call-forwarding-to-your-highlevel-phone-number)
- [Understanding Default Phone Preferences for New Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000004593-understanding-default-phone-preferences-for-new-sub-accounts)
- [How to Create and Use Call Scripts in Web & App Dialers](https://help.gohighlevel.com/support/solutions/articles/155000004935-how-to-create-and-use-call-scripts-in-web-app-dialers)

## Related Articles

- [What is LC (Lead Connector) Phone System?](https://help.gohighlevel.com/support/solutions/articles/48001223546-what-is-lc-lead-connector-phone-system-)
- [Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)
- [Overview of Phone Number Configuration Options](https://help.gohighlevel.com/support/solutions/articles/48001229976-overview-of-phone-number-configuration-options)
- [LC Phone Pricing & Billing Guide](https://help.gohighlevel.com/support/solutions/articles/48001223556-lc-phone-pricing-billing-guide)
- [AI Voice Agents Overview](https://help.gohighlevel.com/support/solutions/articles/155000003911-ai-voice-agents-overview)
- [Twilio Error 21610 "The message from/to pair violates a blacklist rule" when sending SMS](https://help.gohighlevel.com/support/solutions/articles/48001186075-twilio-error-21610-the-message-from-to-pair-violates-a-blacklist-rule-when-sending-sms)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002824-setting-up-webhooks-to-receive-incoming-calls-messages-and-status-updates-for-calls-for-twilio-user/hit)