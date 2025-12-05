---
url: "https://help.gohighlevel.com/support/solutions/articles/48001183074-when-contact-detail-page-is-missing-activity"
title: " When contact detail page is Missing Activity : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001183074-when-contact-detail-page-is-missing-activity#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
4. [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001183074-when-contact-detail-page-is-missing-activity#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
   - [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
6. When contact detail page is Missing Activity

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

# When contact detail page is Missing Activity

Modified on: Thu, 6 May, 2021 at 6:17 PM

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48102407459/original/ivyljfwjRUuiUZ_imGedAavptkRZ_mdh8Q.png?1620342991)

Our developer, Malde dives deep into this and added more logs to troubleshoot further to find the following reasons:

One reason why attribution activity is missing from the contact details might be because the lead fills out the form using iPhone/safari. And this issue happened because the User turns on the option to block all the cookies when form submission happens.

Here is the reference link: [https://support.apple.com/en-in/guide/safari/sfri11471/mac](https://support.apple.com/en-in/guide/safari/sfri11471/mac)

And one other case where we can't track activity, If

?notrack=true

params are present on the URL. ex:

[https://test.com/?notrack=true](https://test.com/?notrack=true)

Cookies and local storage permissions are required. We are storing user's activity and server session-id on the browser's local storage. If session-id does not store on their local storage or if we can't access it, we can't store contact activity.

For the notes: we are storing every activity but not assign them to contact if the session is not stored or access.

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

- [Understanding Attribution Source (Ad Reporting)](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-source-ad-reporting-)
- [Understanding Google Ad Reporting Terminology](https://help.gohighlevel.com/support/solutions/articles/48001219241-understanding-google-ad-reporting-terminology)
- [How to set up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)
- [How to set up Google Ad Precautionary Tracking Script](https://help.gohighlevel.com/support/solutions/articles/48001219356-how-to-set-up-google-ad-precautionary-tracking-script)
- [Troubleshoot Guide For Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219996-troubleshoot-guide-for-google-ad-reporting)
- [How to record Pageviews into Google Analytics for Funnels/Websites (GA4)](https://help.gohighlevel.com/support/solutions/articles/48001219725-how-to-record-pageviews-into-google-analytics-for-funnels-websites-ga4-)

## Related Articles

- [Domains - Transfer-In Process](https://help.gohighlevel.com/support/solutions/articles/155000006329-domains-transfer-in-process)
- [Chat Widget Attribution](https://help.gohighlevel.com/support/solutions/articles/48001175057-chat-widget-attribution)
- [The All-New Contact Detail Page](https://help.gohighlevel.com/support/solutions/articles/155000006651-the-all-new-contact-detail-page)
- [Activity Section Upgrade](https://help.gohighlevel.com/support/solutions/articles/155000005155-activity-section-upgrade)
- [Tracking External Forms with GoHighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel)
- [Trigger Links - Overview](https://help.gohighlevel.com/support/solutions/articles/48000981404-trigger-links-overview)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001183074-when-contact-detail-page-is-missing-activity)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001183074-when-contact-detail-page-is-missing-activity/hit)