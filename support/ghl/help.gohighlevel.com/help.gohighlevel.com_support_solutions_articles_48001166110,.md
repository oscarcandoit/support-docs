---
url: "https://help.gohighlevel.com/support/solutions/articles/48001166110,"
title: " Using SendGrid as the SMTP Provider in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001166110,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [SMTP Providers](https://help.gohighlevel.com/support/solutions/folders/48000689533)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001166110,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [SMTP Providers](https://help.gohighlevel.com/support/solutions/folders/48000689533)
6. Using SendGrid As The SMTP Provider

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

# Using SendGrid As The SMTP Provider

Modified on: Wed, 28 Aug, 2024 at 4:46 PM

This help article provides a guide for integrating SendGrid as your SMTP provider within the HighLevel platform. It details the necessary configurations and settings to enable seamless email delivery through SendGrid. The article covers the technical steps required to properly configure SendGrid, ensuring optimal performance and reliability of your email communications. For any advanced troubleshooting or specific queries, please refer to the detailed instructions provided within the article.

**TABLE OF CONTENTS**

- [Step 1. Sign up for SendGrid](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Step-1.-Sign-up-for-SendGrid)
- [Step 2. Go to Location Settings in your sub-account](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Step-2.-Go-to-Location-Settings-in-your-sub-account)
- [Step 3. Get your SendGrip API](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Step-3.-Get-your-SendGrip-API)
  - [Type an API Key Name](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Type-an-API-Key-Name)
  - [Copy the highlighted API Key Created](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Copy-the-highlighted-API-Key-Created)
- [Step 4. Add your API key to HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Step-4.-Add-your-API-key-to-HighLevel)
- [Step 5. Setup 2FA with SendGrid](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Step-5.-Setup-2FA-with-SendGrid)
- [Step 6: Verify SendGrid email account as a single sender](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Step-6%3A-Verify-SendGrid-email-account-as-a-single-sender)
- [Step 7: Integrate again by clicking Save again in HighLevel:](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Step-7%3A-Integrate-again-by-clicking-Save-again-in-HighLevel%3A)

- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001166110,#Related-Articles)

* * *

Using SendGrid As The SMTP Provider : HighLevel Support Portal - 8 February 2023

1×

8 min⚡️11 min8 min 29 sec7 min 4 sec5 min 39 sec4 min 59 sec4 min 14 sec3 min 23 sec

![](https://cdn.loom.com/sessions/thumbnails/85b5ce8a2ed64d38825ace6da63b9338-00001.jpg)

Your user agent does not support the HTML5 Video element.

1×

8 min⚡️11 min8 min 29 sec7 min 4 sec5 min 39 sec4 min 59 sec4 min 14 sec3 min 23 sec

## **Step 1. Sign up for SendGrid**

[https://signup.sendgrid.com/](https://signup.sendgrid.com/)

## **Step 2. Go to Location Settings in your sub-account**

Click on Email Services > Add Service > Select Sendgrid from the dropdown

If you want to integrate Sendgrid for all locations, you can set this up in the agency view:

[https://app.gohighlevel.com/settings/email\_services](https://app.gohighlevel.com/settings/email_services)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846783/original/VVFsJCextfR1_d_11XTHga9oeNKatWS0hQ.jpg?1724881299)

## **Step 3. Get your SendGrid API**

Click on Settings > API keys > create API Key

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846792/original/eUL7EU_-EOzGchxYPWL0EMk5sjACZxHEPw.jpg?1724881326)

### Type an API Key Name

Make sure API Key Permissions is **Full Access**

Click **Create & View**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846796/original/a9MrgUej0WqHziz31i8UjSTQwtbDIFmj4A.jpg?1724881352)

### Copy the highlighted API Key Created

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846806/original/vmo403We5u7Gp8bKNAXeV7jlxNY_I1Ysag.jpg?1724881381)

## **Step 4. Add your API key to HighLevel**

Username: **apikey**

Email: **Your Sendgrid Login Email**

Password: **Paste the highlighted copied API Key here**

Click **Save**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846811/original/kq58-V-iDLVwKZwNQXw_UXO2lwUUiMcY9Q.jpg?1724881409)

## **Step 5. Setup 2FA with SendGrid**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846832/original/HYY2tHoxAB-4qW-jO_raEIIxKBf7lj2QWA.jpg?1724881430)

## **Step 6: Verify SendGrid email account as a single sender**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846845/original/9ipTCXKk0sEKBCLdPOYf1kDUFCiCjpvzAw.jpg?1724881455)

Create a sender here with your **Sendgrid Login Email**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846859/original/zBMxS2C0LUORdKKq5EvXd_eDtR6jhzybiQ.jpg?1724881476)

## **Step 7: Integrate again by clicking Save again in HighLevel:**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846872/original/XR8nHLqvALSgWinGBq6BV3WYFk9rfKfzPA.jpg?1724881510)

Now you will see SendGrid as your SMTP Provider in HighLevel

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846879/original/wL9FUvg9EHRVoljO3xNEpr5RS0vzxaYFdA.jpg?1724881532)

If you are getting an error when you [send a test email in the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001208887)

click the **⚠️(red triangle) icon** to view more details about the error in the conversation

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031846886/original/q9lMrW_IBu8lblpact0WJarWC8nimrXzTw.jpg?1724881564)

550 The from address does not match a verified Sender Identity. Mail cannot be sent until this error is resolved. Visit [https://sendgrid.com/docs/for-developers/sending-email/sender-identity/](https://sendgrid.com/docs/for-developers/sending-email/sender-identity/) to see the Sender Identity requirements

When you [mask the sender email](https://help.gohighlevel.com/en/support/solutions/articles/48000979925), make sure the sender email matches with the SMTP integrated email, or make sure th sender email is verified with Sendgrid:

[https://docs.sendgrid.com/ui/sending-email/senders](https://docs.sendgrid.com/ui/sending-email/senders)

* * *

# **Frequently Asked Questions**

Currently no frequently asked questions. Submit feedback on this article to help is add questions to this section!

* * *

# **Related Articles**

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

- [Setting Up SMTP Providers](https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers)
- [Using Google/Gmail/Google Workspace as your SMTP Provider](https://help.gohighlevel.com/support/solutions/articles/48001148427-using-google-gmail-google-workspace-as-your-smtp-provider)
- [Setting alias for Google smtp](https://help.gohighlevel.com/support/solutions/articles/48001184605-setting-alias-for-google-smtp)
- [Using SendGrid As The SMTP Provider](https://help.gohighlevel.com/support/solutions/articles/48001166110-using-sendgrid-as-the-smtp-provider)
- [Using Zoho as your SMTP Provider](https://help.gohighlevel.com/support/solutions/articles/48001173743-using-zoho-as-your-smtp-provider)
- [Why Can't I use My Free Email Address As The SMTP?](https://help.gohighlevel.com/support/solutions/articles/48001063376-why-can-t-i-use-my-free-email-address-as-the-smtp-)

## Related Articles

- [Limitation of using SMTP when emails are not sending](https://help.gohighlevel.com/support/solutions/articles/48001203144-limitation-of-using-smtp-when-emails-are-not-sending)
- [Setting Up SMTP Providers](https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers)
- [Email Error Library for supported SMTPs](https://help.gohighlevel.com/support/solutions/articles/48001209322-email-error-library-for-supported-smtps)
- [How to send a test email in the Conversation](https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation)
- [Troubleshooting Email Statistics](https://help.gohighlevel.com/support/solutions/articles/48001208601-troubleshooting-email-statistics)
- [Using Zoho as your SMTP Provider](https://help.gohighlevel.com/support/solutions/articles/48001173743-using-zoho-as-your-smtp-provider)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001166110,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001166110-using-sendgrid-as-the-smtp-provider/hit)