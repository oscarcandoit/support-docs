---
url: "https://help.gohighlevel.com/support/solutions/articles/48001208601"
title: " Troubleshooting Email Statistics : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001208601#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001208601#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [Troubleshooting Email](https://help.gohighlevel.com/support/solutions/folders/48000665894)
6. Troubleshooting Email Statistics

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

# Troubleshooting Email Statistics

Modified on: Thu, 30 Jan, 2025 at 3:28 PM

**TABLE OF CONTENTS**

- [Why Email statistics are not showing](https://help.gohighlevel.com/support/solutions/articles/48001208601#Why-Email-statistics-are-not-showing)
  - [1\. Check how the user is sending the emails. Are they sending through email builder bulk action, or from smartlist, workflow or campaigns?](https://help.gohighlevel.com/support/solutions/articles/48001208601#1.-Check-how-the-user-is-sending-the-emails.-Are-they-sending-through-email-builder-bulk-action,-or-from-smartlist,-workflow-or-campaigns?)
  - [2\. Using the SMTP provider, we will not be able to fetch delivered/bounced stats to display them. SMTP integration will show opened and clicked only. Only mailgun will be able to show full stats.](https://help.gohighlevel.com/support/solutions/articles/48001208601#2.-Using-the-SMTP-provider,-we-will-not-be-able-to-fetch-delivered/bounced-stats-to-display-them.-SMTP-integration-will-show-opened-and-clicked-only.-Only-mailgun-will-be-able-to-show-full-stats.-%C2%A0)
- [Try to reset Mailgun API key](https://help.gohighlevel.com/support/solutions/articles/48001208601#Try-to-reset-Mailgun-API-key)
- [Double-check Cname record](https://help.gohighlevel.com/support/solutions/articles/48001208601#Double-check-Cname-record)
- [Double-check Mailgun webhooks](https://help.gohighlevel.com/support/solutions/articles/48001208601#Double-check-Mailgun-webhooks)

## Why Email statistics are not showing

### 1\. Check how the user is sending the emails. Are they sending through email builder bulk action, or from smartlist, workflow or campaigns?

Each method will contain its own section of email statistics depending on how the user is sending that email. Check out [Where will email statistics show for every email activity?](https://help.gohighlevel.com/support/solutions/articles/48001215386-email-statistics#Where-will-email-statistics-show-for-every-email-activity?)

When email stats are missing here once we click on the email template

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48186969567/original/o7R9Zujq1hhYNwlXiBhBsGPczF6JdpTt5w.png?1644017728)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48105694228/original/us0Et6NNs0kmZQMBZxOu-cGdjfuzGDgnEw.png?1621978068)

Only when we send emails through here then it will show the stats in the Email builder

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48186969568/original/8Grr4aFjwLE_qLJVsbh9xC4OHu8gAFhbYw.jpeg?1644017728)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48105694180/original/tk4r8eC7gTwEJIr0hLLTbI8wv8-Hg8n3Ew.png?1621978034)

### 2\. Using the SMTP provider, we will not be able to fetch delivered/bounced stats to display them. SMTP integration will show opened and clicked only. Only mailgun will be able to show full stats.

We highly recommend setting up Mailgun or LC Email for accurate statistics.

If the sub-account uses SMTP provider before, and the workflow contains SMTP statistics from the smtp provider, it won’t show the statistics properly. Please duplicate the workflow and start sending emails again from there to see if the statistics will show up properly.

## **Try to reset Mailgun API key**

Agency view > **Settings** \> **Email Services** \> **Location Settings** \> Edit the Mailgun API integration for the sub-account > type **Delete**

And then re-integrate again: **[Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)**

![](https://i.ibb.co/1TVG21t/2023-1-24-11-12-42.gif)

## **Double-check Cname record**

Because the Cname record is essential for Mailgun to track the open and click tracking, and unsubscribes. The fix will be the same with links do not open/track:

[Why are my email links changing and how to fix links in the email that do not open?](https://help.gohighlevel.com/en/support/solutions/articles/48001151622)

## **Double-check Mailgun webhooks**

1\. Click on **Sending**

2\. Click on **Webhooks**

3\. Make sure the right Domain is selected based on which domain/subdomain is configured for your sub-account

4\. All webhooks should be configured in the screenshot below

5\. If not, click on **Add Webhook** for every Event type

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283724301/original/XuGLhQDfmu5CAwRdHREf2Ak9-qX5s6R9gg.png?1677265427)**

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

- [Email Statistics](https://help.gohighlevel.com/support/solutions/articles/48001215386-email-statistics)
- [Setting Up SMTP Providers](https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers)
- [ClickFunnels to HighLevel (Migration Guide)](https://help.gohighlevel.com/support/solutions/articles/155000003389-clickfunnels-to-highlevel-migration-guide-)
- [Email Campaign Agent (Beta)](https://help.gohighlevel.com/support/solutions/articles/155000006670-email-campaign-agent-beta-)
- [Workflow Builder Walkthrough](https://help.gohighlevel.com/support/solutions/articles/155000001254-workflow-builder-walkthrough)
- [How to analyze workflow campaigns?](https://help.gohighlevel.com/support/solutions/articles/155000003902-how-to-analyze-workflow-campaigns-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001208601)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001208601-troubleshooting-email-statistics/hit)