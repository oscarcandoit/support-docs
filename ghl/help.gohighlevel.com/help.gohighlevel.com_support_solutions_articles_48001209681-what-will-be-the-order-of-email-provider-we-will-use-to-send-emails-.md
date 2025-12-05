---
url: "https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-"
title: " What will be the order of Email Provider we will use to send emails? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [MailGun](https://help.gohighlevel.com/support/solutions/folders/48000665892)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [MailGun](https://help.gohighlevel.com/support/solutions/folders/48000665892)
6. What will be the order of Email Provider we will use to s...

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

# What will be the order of Email Provider we will use to send emails?

Modified on: Wed, 26 Jul, 2023 at 5:36 PM

# The order of Email Provider we will use to send emails:

# 1\. Sub-account Default Provider (Sub-account view)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279982731/original/zbPvxMEXm3pq7JIa2cM_0D5R-KAY4xq9XQ.png?1675707794)

2\. Email Settings for Locations (Agency view)

If no default provider is selected at the location level, it will be using the provider configured in Agency View.

[https://app.gohighlevel.com/settings/email\_services](https://app.gohighlevel.com/settings/email_services)

Setting up Mailgun for Locations:

- You can configure each location with your client's own Mailgun or your mailgun
- We can use the same Mailgun API and the same domain/subdomain for multiple locations
- We can use the same Mailgun API and different domains/subdomains for multiple locations
- We can use the different Mailgun API anddomain/subdomain for multiple locations
- You can also set up a unique domain/subdomain for each location to capture cold inbound emails. [Learn more about Cold Email Inbound Setup here](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup).

Setting up LC email for Locations:

- If you add the custom domain at the agency level, it will be used for all sub-accounts until you set up a custom domain at the subaccount level. In that case, it will use the subaccount one as the priority.
- [What is LC - Email? I want to know more](https://help.gohighlevel.com/en/support/solutions/articles/48001220605)
- [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/en/support/solutions/articles/48001222501)
- [How to Set Up a Dedicated Sending Domain (LC Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001226115)
- [How to set up a Dedicated Sending Domain using GoDaddy (LC Email)](https://help.gohighlevel.com/en/support/solutions/articles/48001237513)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279982772/original/VaHl4lAMpUxjgcZsYcWwp920XsXHSheaUA.png?1675707822)

We have a new download feature for email service settings. This option is especially beneficial for users managing high volume accounts, providing an easier way to handle your email settings:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155003776772/original/DCVsZICi-ulERP-6Euya18IckqdaGaEGBQ.png?1690410906)

3\. Agency Default provider in Email Services tab (Agency view)

[https://app.gohighlevel.com/settings/email\_services](https://app.gohighlevel.com/settings/email_services)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48279983260/original/wnB4delmXyXEl7HCwnIUbAzHqc7AHcj6gg.png?1675708045)

- Each new location will inherit the settings based on this configured Mailgun API key.
- We will also use it to send the **email verification code**

4\. LeadConnector Email

If nothing is set up, We will use something similar to this subdomain to send and receive emails.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48190650236/original/d1nUQfQzUpkJ6yrUxRHE-kMy5QxGulcFcQ.png?1644970144)

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

- [Mailgun - Overview](https://help.gohighlevel.com/support/solutions/articles/48000981677-mailgun-overview)
- [Step-by-step guide to set up Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001219824-step-by-step-guide-to-set-up-mailgun)
- [Mailgun Setup - GoDaddy Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981678-mailgun-setup-godaddy-domain-setup)
- [MailGun Setup - HostGator Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981679-mailgun-setup-hostgator-domain-setup)
- [Mailgun Setup - Namecheap Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981680-mailgun-setup-namecheap-domain-setup)
- [Mailgun Setup - CloudFlare Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48001064413-mailgun-setup-cloudflare-domain-setup)

## Related Articles

- [Email Tracking for LC Email](https://help.gohighlevel.com/support/solutions/articles/155000003213-email-tracking-for-lc-email)
- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)
- [Setting Up SMTP Providers](https://help.gohighlevel.com/support/solutions/articles/48001059689-setting-up-smtp-providers)
- [New UI for Email creation via Bulk action in Contacts](https://help.gohighlevel.com/support/solutions/articles/155000006551-new-ui-for-email-creation-via-bulk-action-in-contacts)
- [How To Send New Membership Users Custom Emails With Their Login Information](https://help.gohighlevel.com/support/solutions/articles/48001147956-how-to-send-new-membership-users-custom-emails-with-their-login-information)
- [Limitation of using SMTP when emails are not sending](https://help.gohighlevel.com/support/solutions/articles/48001203144-limitation-of-using-smtp-when-emails-are-not-sending)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-/hit)