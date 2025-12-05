---
url: "https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup"
title: " Cold Email Inbound Setup Mailgun : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [MailGun](https://help.gohighlevel.com/support/solutions/folders/48000665892)
6. Cold Email Inbound Setup Mailgun

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

# Cold Email Inbound Setup Mailgun

Modified on: Tue, 11 Jun, 2024 at 10:13 PM

## By Default

If I mask the sender email like testing@gmail.com, the reply-to address will show as testing@ **[replies.subdomain.com](https://replies.subdomain.com/)** and there's no way to change this, replies.subdomain.com is the Mailgun subdomain you set up for the sub-account in agency Settings-> Email Services. **Only when** the contact replies to the email sent from Highlevel, the replies will show up in the Conversation tab.  If the contact initiates an email to testing@ **[replies.subdomain.com](https://replies.subdomain.com/), replies won't show up in the Conversation if the domain is set up for more than one sub-account.**

## Cold Email Inbound Setup

## **1\. Set up Mailgun**

[Check out how to set up Mailgun](https://gohighlevelassist.freshdesk.com/support/solutions/folders/48000665892)

We will set up agency.com / mg.agency.com with Mailgun

\- You can use the same Mailgun account for all sub-accounts

E.g. If you have a domain like [agency.com](https://agency.com/), you can set up a unique subdomain for each sub-account like [subaccountname.agency.com](https://locationname.agency.com/) so each Sub-Account will have its own Mailgun subdomain set up to capture all email replies.

If your clients have their own domain, you can also set up a unique domain/subdomain for them. But if their main domain is already used for another email service, we will need to use a subdomain in this case.

That way we will know which accounts to route the email to.

## **2\. Make sure the Mailgun domain is configured for ONE sub-account only**

As long as there is **only ONE sub-account** mapped to that mailgun domain you just set up, it will route all inbound emails to that sub-account.

Check Agency View > **Settings** \> **Email Services** \> **Location Settings**

![](https://i.ibb.co/6JH9FQt/2023-1-24-13-19-46.gif)

If you are using the same subdomain/domain for multiple Highlevel sub-accounts, we will not know which sub-account to route the email replies to when the lead is emailing the reply-to email address **directly** instead of replying to the email sent from Highlevel.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283740098/original/Zue4Uf00NfAud08L8JCeWNm0MGIaRlKI1A.png?1677273783)

If you only configure the domain/subdomain for one sub-account but it's still not working, check if the same domain is configured in the **Domain Services** tab as well

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283740146/original/KAfskERKjY83NkqUwNV9r9VrZyi8dy8mZQ.png?1677273819)

Please reach out to support if you recall that there might be a deleted sub-account with the same Mailgun domain selected.

## 3\. Test

If you set up [domain.com](https://domain.com/), We can then use testing@domain.com to capture incoming emails. So if the contact initiates the Conversation by sending an email to anything@domain.com, it will show up in the Conversation tab.

If you set up a subdomain like mg.domain.com, We can then use anything@mg.domain.com to capture incoming emails.

# FAQs

## Does cold inbound email work with LC email?

Yes

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

- [Mailgun - Overview](https://help.gohighlevel.com/support/solutions/articles/48000981677-mailgun-overview)
- [What will be the order of Email Provider we will use to send emails?](https://help.gohighlevel.com/support/solutions/articles/48001209681-what-will-be-the-order-of-email-provider-we-will-use-to-send-emails-)
- [Mailgun: Private API Key Setup](https://help.gohighlevel.com/support/solutions/articles/48000981682-mailgun-private-api-key-setup)
- [How to setup Replies in MailGun](https://help.gohighlevel.com/support/solutions/articles/48000987293-how-to-setup-replies-in-mailgun)
- [How to send a test email in the Conversation](https://help.gohighlevel.com/support/solutions/articles/48001208887-how-to-send-a-test-email-in-the-conversation)
- [Step-by-step guide to set up Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001219824-step-by-step-guide-to-set-up-mailgun)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup-mailgun/hit)