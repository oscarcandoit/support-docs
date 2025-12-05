---
url: "https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio"
title: " How to check logs for a specific Call in Twilio : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
4. [Calling](https://help.gohighlevel.com/support/solutions/folders/48000665895)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Calling](https://help.gohighlevel.com/support/solutions/folders/48000665895)
6. How to check logs for a specific Call in Twilio

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

# How to check logs for a specific Call in Twilio

Modified on: Fri, 19 May, 2023 at 5:01 AM

Twilio offers several tools for investigating the interaction between Twilio and your application. If a Call fails to go through, is delayed, or otherwise behaves unexpectedly, these tools should be your first stops for debugging.

* * *

## How to navigate to the Call Logs and how to use them?

You can view the error logs for your Twilio account by going to the Twilio Console. You can use this log to get an idea of which Twilio resources may be affected and who was responsible for them.

1\. Log on to Twilio [https://console.twilio.com/](https://console.twilio.com/)

2\. Go to the top right -> Click **Account** -\> Click **Subaccounts**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331048/original/tKKQGCoc0KwVVECepLM-u6_le6WDb30LrA.jpeg?1673655495)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954716/original/xU1ASMn2bOtT6Y1BdbfgUAYu3F-UlqKoNQ.jpeg?1643126214)

3\. If there are too many subaccounts inside Twilio, you can go back to HL and copy the Account SIN for that location to search in Twilio:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331050/original/F1w4q9sNHfd2rFix5SIbGIWkFrJG7CYyhA.png?1673655496)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48243463531/original/HGHMrQLG8UVwaBtM03YuuaWZaffth7TEfg.png?1659711416)

4\. Now go back to Twilio with the copied Account SID

Search based on the Twilio Subaccount SID in agency level settings -> Twilio

Paste the Account SID here and click on it:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331045/original/3VBRH3JZhS8yXCHdp4JaSshLMhTpXUM8zA.png?1673655495)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954706/original/TaZM1HBRp-VAFwRC5VUjjoQfYNndbVXXeQ.png?1643126214)

5\. Click into the subaccount so you will see there's an orange text on the top left:

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48206739357/original/89Q8Rpsbb4Jw6U_0n-R2myOb5EKTcWU0Ew.png?1648158152)**

Once you are in the subaccount inside Twilio:

### 6\. First, let's make sure the Twilio number is voice-capable:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291056571/original/XA1mgNJH9hU_ISW_9uZwQKMxlemdO-pIqw.jpeg?1680624454)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48182954714/original/upUE1TjZVCDpol7AORlv2jGlHDK5qCPJRg.jpeg?1643126214)

### Click on **Phone numbers**:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291057314/original/kvs-zd_5XOXt5ABtGuKQ5uc94zyex7jVDg.jpeg?1680624625)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48282353637/original/UuPrOZYjpEbL77yl8Mf1o-wEwddnsT-x9g.png?1676661628)

### Check if it is showing the phone icon for the Twilio number:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48291056995/original/0BbgQN6wxDQGajmzMTWpzOo6u98R93KTXw.png?1680624553)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48282353849/original/XX7YyfGy4J3Gb7PbKgDidBzLeG-9eTNk-w.png?1676661731)

7\. Head to the Left panel, Click **Monitor** \> **Logs** \> **Calls**

Put the contact's phone number (remove all phone format) in the FROM / TO field:

**FROM** field: Plug Contact's phone in the to field to check for incoming calls

Paste the contact number who called your twilio number in the From field

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283208691/original/GBzcBgBGw-9kH79nUBfnalpNgvMiuMWqVg.png?1677088149)

We can refer to the first record as that's when we route the call to the forwarding number

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283209009/original/3iL12ECP4ej4b3unl9kF6xEOp6ZdMa70Fg.png?1677088204)

TO field: Plug the Contact's phone in the TO field to check for outbound calls

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283208577/original/otx5gV4kidnMdARoACo39JxcwbD_IhKTxw.png?1677088138)

8\. From there, look for the Call where the problem happened. Click the hyperlinked dates to go deeper into the details for each call.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331233/original/xh0Wss_7g38SY0XN-_ylhUwS-046Btwueg.png?1673655790)

8\. Grab this Call SID and [Create a support ticket with Twilio support](https://support.twilio.com/hc/en-us/articles/360048500694-Contacting-Twilio-Support) to learn further

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48275331221/original/U9T9uUAhi3o8Dudn_ZMBi5P_OoWIdxPh3w.png?1673655762)

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

- [Call Events Not Working for Twilio](https://help.gohighlevel.com/support/solutions/articles/48000981465-call-events-not-working-for-twilio)
- [Geo Permissions - Voice](https://help.gohighlevel.com/support/solutions/articles/48000981435-geo-permissions-voice)
- [How To Fix - Phone Call Redirect Loop](https://help.gohighlevel.com/support/solutions/articles/48001076653-how-to-fix-phone-call-redirect-loop)
- [Using Call Connect to Ensure Accurate Call Status Tracking](https://help.gohighlevel.com/support/solutions/articles/48001181825-using-call-connect-to-ensure-accurate-call-status-tracking)
- [How to check logs for a specific Call in Twilio](https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio)
- [How to Set Up Call Tracking (Number Pool)](https://help.gohighlevel.com/support/solutions/articles/48000981393-how-to-set-up-call-tracking-number-pool-)

## Related Articles

- [Inbound Call Routing - Explained](https://help.gohighlevel.com/support/solutions/articles/48000981432-inbound-call-routing-explained)
- [How to Fix Bad Call Quality](https://help.gohighlevel.com/support/solutions/articles/48000981694-how-to-fix-bad-call-quality)
- [Porting your phone number (non-Twilio number) to a location/subaccount](https://help.gohighlevel.com/support/solutions/articles/48001211919-porting-your-phone-number-non-twilio-number-to-a-location-subaccount)
- [How to check logs for a specific text message if you are connected to your own Twilio account](https://help.gohighlevel.com/support/solutions/articles/48001222601-how-to-check-logs-for-a-specific-text-message-if-you-are-connected-to-your-own-twilio-account)
- [Troubleshooting: Inbound SMS Showing as Calls or Not Appearing at all.](https://help.gohighlevel.com/support/solutions/articles/48001181601-troubleshooting-inbound-sms-showing-as-calls-or-not-appearing-at-all-)
- [Voicemail For Company And For Users](https://help.gohighlevel.com/support/solutions/articles/48001146671-voicemail-for-company-and-for-users)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001229978-how-to-check-logs-for-a-specific-call-in-twilio/hit)