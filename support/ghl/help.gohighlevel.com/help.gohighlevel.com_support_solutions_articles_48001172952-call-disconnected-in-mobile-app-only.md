---
url: "https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only"
title: " Call disconnected in mobile app only : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Phone System](https://help.gohighlevel.com/support/solutions/48000415161)
   - [Calling](https://help.gohighlevel.com/support/solutions/folders/48000665895)
6. Call disconnected in mobile app only

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

# Call disconnected in mobile app only

Modified on: Wed, 23 Feb, 2022 at 12:56 PM

**TABLE OF CONTENTS**

- [1\. Check if the Twilio Account SID is a master account or a sub-account](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only#1.-Check-if-the-Twilio-Account-SID-is-a-master-account-or-a-sub-account)
  - [For locations that will be using the agency's Twilio account](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only#For-locations-that-will-be-using-the-agency's-Twilio-account)
  - [For locations that will be using your client's own Twilio account](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only#For-locations-that-will-be-using-your-client's-own-Twilio-account)
    - [1st method: Create a subaccount in the client's Twilio account -> Move numbers -> Update in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only#1st-method%3A-Create-a-subaccount-in-the-client's-Twilio-account--%3E-Move-numbers--%3E-Update-in-HighLevel)
    - [2nd method: Use Highlevel to create a subaccount based on the client's Twilio account SID](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only#2nd-method%3A-Use-Highlevel-to-create-a-subaccount-based-on-the-client's-Twilio-account-SID)
- [2\. Check if the TwiML app's location ID is correct if the location is already using a Twilio subaccount SID](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only#2.-Check-if-the-TwiML-app's-location-ID-is-correct-if-the-location-is-already-using-a-Twilio-subaccount-SID)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193769029/original/qvN3uv1Qy6IphW_prHfWQ7gQ48LpcfWq9g.png?1645642281)

If calling works for desktop dialer here, but it failed using the mobile app only:

# 1\. Check if the Twilio Account SID is a master account or a sub-account

Once you are in the agency view, Click on Settings

Or simply go to [https://app.gohighlevel.com/settings/twilio](https://app.gohighlevel.com/settings/twilio)

![Click on Settings](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193766094/original/v8jRqFgJBH6dZndEelQjitEdOVZStDn0og.png?1645641856)

Click on Twilio

![Click on Twilio](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193743370/original/fr-YyReni5qJ3fMABhpRIFX38Sf9VMYD4g.png?1645638435)

Depending on which location you are having this issue, make sure the sub-account SID **is different from** the master Account SID on top.

We always need to use a Twilio sub-account SID to configure for the locations to call properly using the mobile app.

Another common case is that the location user would provide their own Twilio SID, which might be a Master Account SID that won't work with the mobile app.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193744893/original/9YvHbpL2nMCF0EZD2i6IsU1h2ovZUcVENw.png?1645638697)

## For locations that will be using the agency's Twilio account

Here are the steps to fix it if the location is currently using the Master Account SID:

click **Update Credentials** by clicking the three dots on the right to delete the connection

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193750196/original/RIr9cQe_EwSd8PVSJZviO6XiLoC5JrzzJg.png?1645639356)

Click **D** **elete connection** here

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193753994/original/vlXBAq5UlsRIXn31zQ1pKseNpJacXNXRsA.png?1645639751)

Click **Create Sub-Account** so a Twilio sub-account will be created based on your **agency** Twilio master account configured on top

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193754153/original/mqtzEHrAKKYJeUBTFzX4P5yl15ZCHtVvzg.png?1645639793)

Once the sub-account is created, click Move numbers to move the numbers from the client's master account to its sub-account.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193755160/original/pUMRKPR0sra_x4gteUL208R-2KzX8RLC4w.png?1645639828)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189715891/original/zya6cg1qyaeT5Y3-Ev1vfFpf_yFjyyE-Mw.png?1644719954)

If the move number tool is showing an error, please reach out to Twilio support to help move the numbers:

[https://help.gohighlevel.com/support/solutions/articles/48001203968-move-number-not-working-showing-error-request-failed-with-status-code](https://help.gohighlevel.com/support/solutions/articles/48001203968-move-number-not-working-showing-error-request-failed-with-status-code)

## For locations that will be using **your client's own** Twilio account

There are two ways to fix it if the location is currently using your client's Master Account SID:

### 1st method: Create a subaccount in the client's Twilio account -> Move numbers -> Update in HighLevel

**[How to Create a new subaccount in Twilio from Console](https://support.twilio.com/hc/en-us/articles/360011348693-View-and-Create-New-Twilio-Subaccounts)**

1. Access the [**Subaccounts** page in Console](https://www.twilio.com/console/project/subaccounts).
2. Click **Create new Subaccount**, or the ![Icon_New.png](https://support.twilio.com/hc/article_attachments/360017865213/Icon_New.png) icon.
3. Enter the desired subaccount name, and then click **Create**.

![Sub_04.png](https://support.twilio.com/hc/article_attachments/360017137614/Sub_04.png)
4. Once it is created, click into the subaccount and **copy the Account SID and auth token**

The client can open a ticket with Twilio to move the numbers from the master account to the subaccount by [following the instructions here](https://support.twilio.com/hc/en-us/articles/223135327-Moving-Twilio-Phone-Numbers-to-another-Twilio-project).

Click Update Credentials by clicking the three dots on the right

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193757188/original/CbsOWPRhyWrRJ-vTnHy9wLe0JmUMb9EtCg.png?1645640092)

Paste the copied account SID and auth token here and click **Save**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193761766/original/VO6G43kHENBRGI1uOezafSIZJiSf7eqjyw.png?1645641065)

### 2nd method: Use Highlevel to create a subaccount based on the client's Twilio account SID

Click **Update Credentials** by clicking the three dots on the right

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193757188/original/CbsOWPRhyWrRJ-vTnHy9wLe0JmUMb9EtCg.png?1645640092)

Click **D** **elete connection** here

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193753994/original/vlXBAq5UlsRIXn31zQ1pKseNpJacXNXRsA.png?1645639751)

Once it's blank, scroll up and replace your master Account SID and auth token with your **client's own** Twilio master account SID and auth token.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763658/original/YhjuNkYLzEfthQcuB5wyEByVq3ycqohmAA.jpeg?1645641433)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189715751/original/dqXg7vzw4IvGxkx_suVdV10izjR9iex4XQ.png?1644719669)

Click **Create subaccount** so a Twilio subaccount will be created based on your **client's** Twilio master account.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763652/original/2kHzrthL5WyW2SmqztwqzCUAZx24GPebOA.png?1645641433)

Once the subaccount is created, click Move numbers to move the numbers from the client's master account to its subaccount.

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193763653/original/TNDnfgwHJRYByOWF4yTqAw-diFgIB0MmrQ.png?1645641433)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189715891/original/zya6cg1qyaeT5Y3-Ev1vfFpf_yFjyyE-Mw.png?1644719954)

If the move number tool is showing an error, please reach out to Twilio support to help move the numbers:

[https://help.gohighlevel.com/support/solutions/articles/48001203968-move-number-not-working-showing-error-request-failed-with-status-code](https://help.gohighlevel.com/support/solutions/articles/48001203968-move-number-not-working-showing-error-request-failed-with-status-code)

Once those numbers are showing up in the location, you can switch back to your master Account SID and auth token here

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48193764669/original/dF0znroKFFPSS8BLBAQqnwBIMfcfphjS8Q.png?1645641529)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48189715934/original/VxJW8FheH1rqKFH05tpei6ITYaGBwLYTBw.jpeg?1644720020)

# **2\. Check if the TwiML app's location ID is correct** if the location is already using a Twilio subaccount SID

Call disconnected in mobile app only Part 2

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Call disconnected in mobile app only Part 2](https://www.loom.com/share/9b36ef93e95c4737a9f082df8cf2a3b1 "Call disconnected in mobile app only Part 2")

4 min

961 views

2

[Open video in Loom](https://www.loom.com/share/9b36ef93e95c4737a9f082df8cf2a3b1 "Open video in Loom")

1.2×

4 min⚡️4 min 22 sec3 min 30 sec2 min 55 sec2 min 20 sec2 min 3 sec1 min 45 sec1 min 24 sec

![](https://cdn.loom.com/sessions/thumbnails/9b36ef93e95c4737a9f082df8cf2a3b1-00001.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[Call disconnected in mobile app only Part 2](https://www.loom.com/share/9b36ef93e95c4737a9f082df8cf2a3b1 "Call disconnected in mobile app only Part 2")

4 min

961 views

2

[Open video in Loom](https://www.loom.com/share/9b36ef93e95c4737a9f082df8cf2a3b1 "Open video in Loom")

1.2×

4 min⚡️4 min 22 sec3 min 30 sec2 min 55 sec2 min 20 sec2 min 3 sec1 min 45 sec1 min 24 sec

Link to enter:

[https://api.gohighlevel.com/twilio/create\_application/ **<location\_id>**](https://api.gohighlevel.com/twilio/create_application/%3Clocation_id%3E)

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

- [In app call for IVR](https://help.gohighlevel.com/support/solutions/articles/155000002456-in-app-call-for-ivr)
- [How To Forward Inbound Calls to Mobile App](https://help.gohighlevel.com/support/solutions/articles/48001224659-how-to-forward-inbound-calls-to-mobile-app)
- [Multi-Location Incoming Calls on the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000006710-multi-location-incoming-calls-on-the-mobile-app)
- [How to Use Mobile App DND in Contacts](https://help.gohighlevel.com/support/solutions/articles/155000005437-how-to-use-mobile-app-dnd-in-contacts)
- [Local Presence Dialing in the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000006736-local-presence-dialing-in-the-mobile-app)
- [Spam Tagging on Mobile](https://help.gohighlevel.com/support/solutions/articles/155000005215-spam-tagging-on-mobile)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001172952-call-disconnected-in-mobile-app-only/hit)