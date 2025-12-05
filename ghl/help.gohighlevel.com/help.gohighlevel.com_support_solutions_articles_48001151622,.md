---
url: "https://help.gohighlevel.com/support/solutions/articles/48001151622,"
title: " How to fix links within emails that do not open : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001151622,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001151622,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [Troubleshooting Email](https://help.gohighlevel.com/support/solutions/folders/48000665894)
6. How to fix links in the email that do not open?

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

# How to fix links in the email that do not open?

Modified on: Fri, 4 Aug, 2023 at 8:52 PM

Why are my email links changing and how to fix links in the email that do not open?

1×

5 min⚡️6 min 37 sec5 min 17 sec4 min 24 sec3 min 31 sec3 min 6 sec2 min 38 sec2 min 7 sec

![](https://cdn.loom.com/sessions/thumbnails/eab0d287dcbf4334ade625b8b5606551-00001.jpg)

Your user agent does not support the HTML5 Video element.

1×

5 min⚡️6 min 37 sec5 min 17 sec4 min 24 sec3 min 31 sec3 min 6 sec2 min 38 sec2 min 7 sec

When we open the links sent from HighLevel, it's going to email.mg.yourdomain.com, which is the Mailgun subdomain you set up for the location [here](https://gohighlevelassist.freshdesk.com/support/solutions/folders/48000665892). It is because we need to change the links in the email for tracking statistics.

The Cname record you added when you set up in the domain provider is essential for Mailgun to track the open and click tracking, and unsubscribed.

The record for [email.mg.yourdomain.com](https://email.mg.yourdomain.com/) should be pointing to Mailgun.org, that's how they are able to fetch data and show the email stats.

If you are seeing this error when clicking the link: This site can't be reached /  says [email.mg.yourdomain.com](https://email.mg.yourdomain.com/) refused to connect when you have your own Mailgun domain/subdomain set up

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195453693/original/oBuzYgtIiHU_qb8FPQDQgmjvB5mrR1_4cg.png?1646072280)

That means the CNAME record might not be set up properly.

1\. To verify that, copy the **red highlighted** in the image above ---> [**email.mg.yourdomain.com**](https://email.mg.yourdomain.com/)

Depending on the subdomain you set up with Mailgun,

For example:

If you set up **mg.companyname.com**,

You will look up the cname record for email. **[mg.companyname.com](https://mg.companyname.com/)**

If you set up **replies.companyname.com**,

You will look up the cname record for email.**[replies.companyname.com](https://replies.companyname.com/)**

If you set up **support.companyname.com**,

You will look up the cname record for email.**support.companyname.com**

**2\. Go to [MX toolbox](https://mxtoolbox.com/CnameLookup.aspx) or [Whatsmydns](https://www.whatsmydns.net/)to look up the Cname record:**

[MX toolbox](https://mxtoolbox.com/CnameLookup.aspx):

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48050724642/original/BTn6nQUwsXyVfr5LdrKHoDRoKXvOHBwaQg.png?1595545184)**

**[Whatsmydns](https://www.whatsmydns.net/):**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004442481/original/AGGXVPiBkACoy2fODeEdIQcQseLuSJDmyA.png?1691095424)**

3\. If it says DNS records not found:

    a. login to your domain provider

    b. Go to DNS records and check the CNAME record

4\. If it is already pointing to **mailgun.org:**

    a. Go to [Mailgun](https://login.mailgun.com/login/) -\> Click the **Sending** tab on the left -> **Domain Settings**

    b. **Edit the Tracking Protocol**

    c. Send the email test again from HighLevel

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48244504991/original/fM2lh_VngLqDySJf3Pv2JeBpGz8Bc4IPag.png?1660162191)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48244504976/original/J_f2ahU2CatRF9MNJEdOIugKxjpIBfvYYg.png?1660162175)

Here's [How to Enable HTTPS Tracking Links](https://help.mailgun.com/hc/en-us/articles/360011566033-How-to-Enable-HTTPS-Tracking-Links)

5\. If the info above does not help, please get in touch with the support team of your domain provider for assistance. You can show them we need to add these records here:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155004540974/original/s0puwTTcRlben7UZfFvZrWTBtd9wUhOz9w.png?1691198730)

6\. If the domain provider verified all DNS records are good to go, please [reach out to HL support](https://help.gohighlevel.com/en/support/solutions/articles/48001204857).

## **Common issues:**

1\. If The CNAME record includes the root domain, it will not work here:

If you are using GoDaddy or Namecheap, be sure to omit the root domain from the record so it is **email.mg** only

Host name:

Depending on the subdomain you are trying to set up, if you are trying to set up

mg.companyname.com The host name will be **email.mg**

replies.companyname.com The host name will be **email.replies**

support.companyname.com The host name will be **email.support**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48201410168/original/ovadh-goMeGpiYqisajhrsT40lnNsl-IPA.png?1647278164)

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

- [Guide to click tracking in email campaigns](https://help.gohighlevel.com/support/solutions/articles/155000002664-guide-to-click-tracking-in-email-campaigns)
- [Trigger Links - Overview](https://help.gohighlevel.com/support/solutions/articles/48000981404-trigger-links-overview)
- [Creating and Managing Custom Unsubscribe Links](https://help.gohighlevel.com/support/solutions/articles/155000004799-creating-and-managing-custom-unsubscribe-links)
- [Click-To-Call, Click-To-Text, and Click-To-Email Links & Buttons](https://help.gohighlevel.com/support/solutions/articles/48000980316-click-to-call-click-to-text-and-click-to-email-links-buttons)
- [Reputation Management- Adding Multiple Review Links to Emails](https://help.gohighlevel.com/support/solutions/articles/155000005906-reputation-management-adding-multiple-review-links-to-emails)
- [Workflow Action for Generating One Time Link](https://help.gohighlevel.com/support/solutions/articles/155000001711-workflow-action-for-generating-one-time-link)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001151622,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001151622-how-to-fix-links-in-the-email-that-do-not-open-/hit)