---
url: "https://help.gohighlevel.com/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider"
title: " LC Email / Mailgun replies not working when using WIX as the domain provider : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [Troubleshooting Email](https://help.gohighlevel.com/support/solutions/folders/48000665894)
6. LC Email / Mailgun replies not working when using WIX as ...

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

# LC Email / Mailgun replies not working when using WIX as the domain provider

Modified on: Thu, 27 Jul, 2023 at 12:34 PM

Where did you get the domain for WIX?

You will need to follow this article in order to set up your nameservers so they are not managed by WIX.

[**https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix**](https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix)

**Change** the nameservers here:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619872/original/B8A4v0q6PZ5YHsAp2mzk6_scZOWKWvgpuA.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048676561/original/YR0RErgqA3H6yrlCTXhhZbT3_wiy8RMiLg.png?1594407818)

And then choose **I will use GoDaddy Nameservers**

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619871/original/leZXxFFitGVUL_wyqnukiQY8HewiiuhhkA.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048676558/original/c5-qSORu7yueJm6AQ9njZkWqb2793iw4NQ.png?1594407817)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619867/original/xZMIopePhJIuQfvyI2d-FSmtfCGhaDamag.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048676749/original/O1cQxm9xOIXkrWlOOMVa6XthQtecaZmlSQ.png?1594407903)

Go to this article and copy the record here to add to your DNS records:

[**https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix**](https://support.wix.com/en/article/dns-records-needed-to-connect-your-domain-to-wix)

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619870/original/waEl3ZyYXtpTn3z8M1YI4SxEItlWK1-Z_g.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048677097/original/Nz7A2Pc9r7o6ifdDElkaDFxYb5GenehFlg.png?1594408059)

Hit Edit pencil button on the right

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619863/original/FcRU58EGiZKcns2K8ALxLueEHPfjdvaznA.png?1594935582)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048677230/original/sF5umzyoh6KeB_H7wBc055xK-5bx8F0Fdg.png?1594408105)

Paste the A record here:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619868/original/f7c1M2IS1BJN60UZqO2J7yUctTOAlVNHcg.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048677378/original/7eVDwzLLsaC8fNs38La35DMKjtRtaGIzjQ.png?1594408151)

Edit the original CNAME record and Paste the wwwXX.wixdns.net record here:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619869/original/MouLyh5lo5A1OLCtk6GsLHRX5O-8vMfaBg.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048678085/original/NgYbOPlEF2uAanqP9y07bHcteCHXA4buxQ.png?1594408436)

Go to [https://dnschecker.org/](https://dnschecker.org/)

Put yourdomain.com (A record) and search to see if it's working:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619864/original/mb1xaCvUJdDXFgow1RF-WpnHcGJYh2aTog.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048678312/original/RgvRn40F2j_hC6LaTJrhvhm9QtA0S4cN1w.png?1594408555)

Put [www.yourdomain.com](http://www.yourdomain.com/) (CNAME record) and search to see if it's working:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619866/original/DrKok7JojxLYA6I4l4FBw6YDBT_Qt24NhA.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048678393/original/8LRWkWllhraLK1fb3e91NFVM3JV72ywzZg.png?1594408597)

Put yourdomain.com (NS record) and search to see if it's working:

[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48049619865/original/R1d1SOWBIMaa6Rb2WNTr1ifPPeHnZjxj4g.png?1594935583)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48048678590/original/vTmfShLRzSvkdM4pmRiTAIzWEU_lxcf0wg.png?1594408694)

Go to your website yourdomain.com and see if your website is working.

Now you can set up Mailgun in your domain provider's DNS records following these articles!

[Step-by-step guide to set up Mailgun](https://help.gohighlevel.com/en/support/solutions/articles/48001219824)

[How to Set Up a Dedicated Sending Domain (LC Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001226115)

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

- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [When email replies are not showing up in Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation)
- [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/support/solutions/articles/48001222501-how-to-migrate-my-agency-over-to-lc-email)
- [Cold Email Inbound Setup Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup-mailgun)
- [Google Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/48001240481-google-dedicated-sending-domain-setup-lc-email-)
- [Siteground Dedicated Sending Domain Setup (LC Email)](https://help.gohighlevel.com/support/solutions/articles/155000000568-siteground-dedicated-sending-domain-setup-lc-email-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001188738-lc-email-mailgun-replies-not-working-when-using-wix-as-the-domain-provider/hit)