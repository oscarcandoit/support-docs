---
url: "https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-"
title: " RSS Email Body showing HTML tags? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [RSS Guide](https://help.gohighlevel.com/support/solutions/folders/155000001358)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [RSS Guide](https://help.gohighlevel.com/support/solutions/folders/155000001358)
6. RSS Email Body showing HTML tags?

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

# RSS Email Body showing HTML tags?

Modified on: Sat, 13 Nov, 2021 at 1:04 PM

RSS Email Troubleshooting \| How to fix HTML tags being shown in the email body

1.2×

2 min 6 sec⚡️2 min 37 sec2 min 6 sec1 min 45 sec1 min 24 sec1 min 14 sec1 min 3 sec50 sec

![](https://cdn.loom.com/sessions/thumbnails/8d14a13e8a104df7bee354c23fc6f224-00001.jpg)

Your user agent does not support the HTML5 Video element.

1.2×

2 min 6 sec⚡️2 min 37 sec2 min 6 sec1 min 45 sec1 min 24 sec1 min 14 sec1 min 3 sec50 sec

**Issue:** RSS Email body shows html tags like this <p>

**Fix:** Need to use Custom RSS Item element in the email builder, and instead of using {{rss\_item.content}} use {{{rss\_item.content}}}

## HTML Based RSS Feed

The values returned by the RSS-based custom variable `{{rss_item.title}}` are HTML-escaped. For example, if the expression contains `&`, then the returned HTML-escaped output is generated as `&amp;` or if your RSS Feed has HTML-based text instead of plain text then it will be rendered as plain text.

If you don't want it to escape a value, use the "triple-stash", `{{{`:

Eg: if your RSS feed source is something like this

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158897350/original/jh0m8OZsy48DpFj0I-j42H8lVgfzmFB7Yg.png?1636829726)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855360/original/uPxMn189zEmr7WCh_6qYv6DAQ_WrxdccDA.png?1636131880)

without "triple-stash" it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158897349/original/WrYKfyhcJ5DK5j0lLKBZhA2VMTG80JaNkw.png?1636829725)

once you will use "triple-stash" `{{{rss_item.content}}}` it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48158897351/original/rxmtzjEm8PqMouDcAVPjKT1IJ7DnYuLEfA.png?1636829727)

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

- [RSS Blocks In Email Builder](https://help.gohighlevel.com/support/solutions/articles/48001201780-rss-blocks-in-email-builder)
- [RSS Email Body showing HTML tags?](https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-)
- [How-to Send RSS Email Campaign(s)](https://help.gohighlevel.com/support/solutions/articles/48001215372-how-to-send-rss-email-campaign-s-)
- [A basic guide of RSS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000004928-a-basic-guide-of-rss-campaign)
- [Resend to Unopened for RSS and Batch Scheduled Emails](https://help.gohighlevel.com/support/solutions/articles/155000005570-resend-to-unopened-for-rss-and-batch-scheduled-emails)

## Related Articles

- [RSS Feed for Blogs](https://help.gohighlevel.com/support/solutions/articles/48001231723-rss-feed-for-blogs)
- [RSS Blocks In Email Builder](https://help.gohighlevel.com/support/solutions/articles/48001201780-rss-blocks-in-email-builder)
- [A basic guide of RSS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000004928-a-basic-guide-of-rss-campaign)
- [Different elements in email builder](https://help.gohighlevel.com/support/solutions/articles/155000006657-different-elements-in-email-builder)
- [How-to Send RSS Email Campaign(s)](https://help.gohighlevel.com/support/solutions/articles/48001215372-how-to-send-rss-email-campaign-s-)
- [Different Email Sending/ Delivery Method(s) - Send Now, Schedule, Batch, RSS Schedule](https://help.gohighlevel.com/support/solutions/articles/48001215384-different-email-sending-delivery-method-s-send-now-schedule-batch-rss-schedule)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-/hit)