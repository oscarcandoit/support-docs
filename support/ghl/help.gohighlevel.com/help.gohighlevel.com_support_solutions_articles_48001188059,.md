---
url: "https://help.gohighlevel.com/support/solutions/articles/48001188059,"
title: " How to check logs for a specific email in Mailgun : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001188059,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [Troubleshooting Email](https://help.gohighlevel.com/support/solutions/folders/48000665894)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001188059,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [Troubleshooting Email](https://help.gohighlevel.com/support/solutions/folders/48000665894)
6. How to check logs for a specific email in Mailgun

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

# How to check logs for a specific email in Mailgun

Modified on: Mon, 6 Mar, 2023 at 2:27 PM

**TABLE OF CONTENTS**

- [Mailgun Sending Logs](https://help.gohighlevel.com/support/solutions/articles/48001188059,#Mailgun-Sending-Logs)
  - [Analyzing the results](https://help.gohighlevel.com/support/solutions/articles/48001188059,#Analyzing-the-results)
  - [Common errors](https://help.gohighlevel.com/support/solutions/articles/48001188059,#Common-errors)
    - [Not Delivering to Previously Bounced Address](https://help.gohighlevel.com/support/solutions/articles/48001188059,#Not-Delivering-to-Previously-Bounced-Address)
    - [If the recipient unsubscribes accidentally](https://help.gohighlevel.com/support/solutions/articles/48001188059,#If-the-recipient-unsubscribes-accidentally)
    - [Unauthenticated email from xxxxxxxxxxxx.com](https://help.gohighlevel.com/support/solutions/articles/48001188059,#Unauthenticated-email-from%C2%A0xxxxxxxxxxxx.com)
    - [Unauthenticated email from yahoo.com / hotmail.com / aol.com / outlook.com](https://help.gohighlevel.com/support/solutions/articles/48001188059,#Unauthenticated-email-from-yahoo.com-/-hotmail.com-/-aol.com-/-outlook.com)

# Mailgun Sending Logs

1\. Log in to [https://app.mailgun.com/app/dashboard](https://app.mailgun.com/app/dashboard)

2\. Click **Sending**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160535/original/JVr72sqsbd8goiu1yWyP9X8LxzQIFiymnA.png?1625007552)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053522532/original/r4hpkoE_IuaSf5q6VLc8d4dmkiNqM6eZwQ.png?1597181005)

3\. Click **Logs**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160533/original/jMWfS1lnuChsOsRrZdbYVxkKEj_FwXl5Ww.png?1625007551)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053522561/original/kA-lpxxJ5iMh8wS7dR20-Gu61SKFZP-hUw.png?1597181031)

4\. Make sure the correct domain is selected

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48116160536/original/4gc_ywO8KMIJ2gmt_r41V-pqblZouLsulA.png?1625007552)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48053522629/original/oy-58G570I2gA2z2qCM-UD0zKoISnvSgAA.png?1597181069)

5\. Click on Add Filter

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695181/original/_cN2JqLI_-4mgq52yjw5XkN8wD6j70j-fw.png?1644453931)

6\. Select Recipient from the dropdown list and paste the email you are trying to get the delivery status for:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695195/original/4e5JP7AlzSsBZYZOUHSn2mk7YQ0gtx0EAA.png?1644453944)

7\. Click on Filter

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695270/original/5B1sUhnEpr9-WLqcHMifkVuz0WUuxtyCsQ.png?1644454025)

## Analyzing the results

Click the gear ⚙️ icon on the right once you locate the email

Select **Quick view**

It will show you a preview of the email

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695369/original/C19SliRpd7Pl_5q67zgT2hTAWFXDSR3jrg.png?1644454139)

If it says delivered, please check the spam folder or reach out to Mailgun support to see if the email provider is blocking the email on their end.

## Common errors

### **Not Delivering to Previously Bounced Address**

Solution:

1\. Click Sending -> Suppressions

2\. Choose the domain on top

3\. Search for the recipient's email

4\. Select the recipient and click the trash icon on the right to remove the contact email from the Bounces tab.

### **If the recipient unsubscribes accidentally**

Switch to the **Unsubscribes** tab and remove the email from there.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48188695886/original/EgH5LxHkk9DeQiKIUhWyFYFOyklyac8D7Q.png?1644454582)

### **Unauthenticated email from** [**xxxxxxxxxxxx.com**](https://xxxxxxxxxxxx.com/)

Solution: Set DMARC to none for the custom domain.

If you are using Gsuite email, you can [configure set DMARC to none here](https://support.google.com/a/answer/10032169?hl=en).

### **Unauthenticated email from [yahoo.com](https://yahoo.com/) / [hotmail.com](https://hotmail.com/) / [aol.com](https://aol.com/) / [outlook.com](https://outlook.com/)**

Quick workaround: switch the sender email from yahoo.com / aol.com / any other domain to your own domain/gmail.com

e.g. switch [name@yahoo.com](mailto:name@yahoo.com) to [name@gmail.com](mailto:name@gmail.com) or name@your\_domain.com

[Learn where to configure the sender's email address here](https://gohighlevelassist.freshdesk.com/support/solutions/articles/48000979925-masking-campaign-emails-from-name-address).

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

- [Email Error Library for supported SMTPs](https://help.gohighlevel.com/support/solutions/articles/48001209322-email-error-library-for-supported-smtps)
- [How to check logs for a specific email in Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun)
- [How to fix links in the email that do not open?](https://help.gohighlevel.com/support/solutions/articles/48001151622-how-to-fix-links-in-the-email-that-do-not-open-)
- [When email replies are not showing up in Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation)
- [LC Email / Mailgun replies not working when using WIX as the domain provider](https://help.gohighlevel.com/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider)
- [Troubleshooting Warning: Please contact your agency to change email settings](https://help.gohighlevel.com/support/solutions/articles/48001207525-troubleshooting-warning-please-contact-your-agency-to-change-email-settings)

## Related Articles

- [How to setup Replies in MailGun](https://help.gohighlevel.com/support/solutions/articles/48000987293-how-to-setup-replies-in-mailgun)
- [Troubleshooting Login issues](https://help.gohighlevel.com/support/solutions/articles/48001207047-troubleshooting-login-issues)
- [When email replies are not showing up in Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation)
- [How to send a test email in the Conversation](https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation)
- [Troubleshooting Email Statistics](https://help.gohighlevel.com/support/solutions/articles/48001208601-troubleshooting-email-statistics)
- [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/support/solutions/articles/48001222501-how-to-migrate-my-agency-over-to-lc-email)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001188059,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001188059-how-to-check-logs-for-a-specific-email-in-mailgun/hit)