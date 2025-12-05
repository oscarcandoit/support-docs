---
url: "https://help.gohighlevel.com/support/solutions/articles/48001175336,"
title: " Mailgun Setup Checklist : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001175336,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001175336,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [MailGun](https://help.gohighlevel.com/support/solutions/folders/48000665892)
6. Mailgun Setup Checklist

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

# Mailgun Setup Checklist

Modified on: Tue, 27 Sep, 2022 at 10:58 AM

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48090709611/original/uaJosVlH8fiE2DXTf5Iiw8nzsmhvPbfspg.jpg?1614896124)

# **Quick Setup/Troubleshooting Checklist For Mailgun + HighLevel**

A Guest-Tutorial From Krystin Ruschman of [Email-2-Inbox](https://help.email-2-inbox.com/calendar-chat)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48090705299/original/f-gBcDYyWzqNUi6WK3v-QFbdytgFC44JdQ.png?1614894400)

* * *

## **Are You Signed Up For The Right Mailgun Account?**

- Foundation 50k is the minimum plan level necessary (Flex “Pay as you Grow” plan does not include Replies)


## **Have You Configured Your Sending Subdomain Correctly In Mailgun?**

- Create a subdomain from your chosen root domain (ex: reply.yourdomain.com)

- Add the DNS records provided by Mailgun into your domain settings

- Verify the DNS records in Mailgun (give time for your DNS records to propagate)

- Under Sending > Domains, verify “green checkmark” shows next to the subdomain

- Under Sending > Domain Settings, turn on Click Tracking and Open Tracking; Turn on Unsubscribes, if desired

- Update **Tracking Protocol** to HTTPS (this creates an SSL certificate for your subdomain, so if your root domain SSL is expired or compromised in some way, the links in your emails will still work)

- Under Receiving, ensure a Catch-All Route is configured with the HighLevel webhook (Note: This route should auto-create once your Mailgun API key and subdomain are configured inside HighLevel)


## **Is Your Sending Subdomain Set Up In HighLevel Correctly?**

- Under Agency View > Settings > Mailgun, ensure the API key and subdomain are associated with the desired sub-account

- Switch to a **Sub-Account** \> Head in the **Sub-Account**Settings,\> Click on the SMTP and Mailgun Service, ensure the desired subdomain is showing and defaulted as the Default Provider

- BCC Emails field – only if you want ALL OUTGOING emails from HighLevel to also go to an outside account

- Forwarding Address – only if you want ALL INCOMING replies to also go to an outside account

- Forward to Assigned User – only if assigning Users to Contacts and/or Campaigns and want ALL INCOMING replies to also go to an outside account


**NOTE:**

```
For BCC and Forwarding actions, please note that using an outside account to interact with HighLevel emails will break the Reply Route, so NO further email replies will show in HighLevel Conversations for that email chain. If you want all email communication to show in HighLevel make sure you/your clients are not interacting with them from an outside account.
```

## **Have You Configured Your "From Name" and "From Email"?**

- HighLevel needs to know the Name and Email Address of who your emails should be from. Below is the hierarchy of how HighLevel looks for that information. Once it finds a value, it will stop looking and use the value it found:


1. Contacts > Bulk Request > “Send Email” icon > From Name and From Email (if applicable)

2. Workflow > Individual Email (or Campaign Configuration if using Campaigns) > From Name and From Email
3. Workflow > Settings > From Name and From Email

4. Assigned User
1. If using Campaigns, HL looks to Campaign Configuration > Assigned User first (will use the Name and Email address associated with their user profile)
2. If not using Campaigns, HL looks to Contact > Assigned User (will use the Name and Email address associated with their user profile)
5. Company Name and Company Email address


## **It's Still Not Fixed!**

- Aside from the basic setup, there are countless factors that play into email deliverability, making it virtually impossible to troubleshoot from a checklist.


- If you’ve gone through each step above and are still experiencing issues, please book a call with Krystin at Email-2-Inbox [by clicking here](https://help.email-2-inbox.com/calendar-chat).

\\* This checklist may not be an inclusive list and is intended for educational purposes only

\\* Correct configuration of email setup in HighLevel, MailGun, and DNS is the sole responsibility of the account owner, and should be validated through thorough testing

\\* Setup according to this strategy is at the sole discretion of the account owner

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

- [How to setup Replies in MailGun](https://help.gohighlevel.com/support/solutions/articles/48000987293-how-to-setup-replies-in-mailgun)
- [Mailgun: Private API Key Setup](https://help.gohighlevel.com/support/solutions/articles/48000981682-mailgun-private-api-key-setup)
- [When email replies are not showing up in Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation)
- [Step-by-step guide to set up Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001219824-step-by-step-guide-to-set-up-mailgun)
- [Mailgun - Overview](https://help.gohighlevel.com/support/solutions/articles/48000981677-mailgun-overview)
- [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/support/solutions/articles/48001222501-how-to-migrate-my-agency-over-to-lc-email)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001175336,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001175336-mailgun-setup-checklist/hit)