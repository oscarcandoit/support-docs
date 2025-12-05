---
url: "https://help.gohighlevel.com/support/solutions/articles/48000987293"
title: " How to setup Replies in MailGun : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48000987293#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48000987293#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [MailGun](https://help.gohighlevel.com/support/solutions/folders/48000665892)
6. How to setup Replies in MailGun

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

# How to setup Replies in MailGun

Modified on: Fri, 27 Sep, 2024 at 12:47 PM

In this article, "How to Setup Replies in Mailgun," you'll learn how to configure Mailgun in HighLevel to effectively manage email replies. The guide walks you through the essential steps for setting up webhooks, ensuring that replies to your messages are captured accurately. Additionally, it highlights the importance of domain authentication and offers troubleshooting tips to help you resolve common issues, allowing you to enhance your email communication and engagement.

**TABLE OF CONTENTS**

- [Check Receiving Routes in Mailgun](https://help.gohighlevel.com/support/solutions/articles/48000987293#Check-Receiving-Routes-in-Mailgun)
- [Resetting the Mailgun API key](https://help.gohighlevel.com/support/solutions/articles/48000987293#Resetting-the-Mailgun-API-key)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48000987293#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48000987293#Related-Articles)

* * *

# **Check Receiving Routes in Mailgun**

1\. Once you log on to Mailgun, Click on [Receiving](https://app.mailgun.com/app/receiving/routes) tab and see if the webhook matches the screenshot below:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707593/original/fd0wTZ07sBwMIEdtEVdYcbE0SeDDcznShw.jpg?1727459035)

2\. If the agency had the client get their own Mailgun account and the forward link needs to be **white-labeled**, they can use the webhook in the screenshot below:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707619/original/kbUNBKsda7HGIPWZ1KrvV9YRJUceB_LH5A.jpg?1727459077)

3\. If there are **other webhooks that do not match the one in the screenshot, try removing them** and see if it will fix the issue.

4\. If there is no webhook there (should look like what's below), click on **Create Route**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707623/original/fb0gf-ysONRhDiyVPaI5cxaWQ5jnM-kIDQ.jpg?1727459100)

5\. Configure the following:

- Expression Type: Catch All
- Enable Forward: Paste this "[https://services.l\*e\*a\*d\*connectorhq.com/conversations/providers/mailgun/webhook/inbound](https://services.l*e*a*d*connectorhq.com/conversations/providers/mailgun/webhook/inbound)" in the Forward section and REMOVE the \*\*\*\* in the URL
- Priority = 99
- Description: HighLevel Route

- Click Save

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48283735295/original/izEVoHQUsSJAduHwz4KHvgtWutiAmiOuTw.png?1677270953)**

# **Resetting the Mailgun API key**

Agency view > Settings > Email Services > Location Settings > Edit the Mailgun API integration for the sub-account > type Delete

And then re-integrate again: [Mailgun API Key - Where to Find in Mailgun & Put in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/48000981682)

Once it's done, refresh the Receiving page in Mailgun to see if the hook was created

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155033707818/original/WLRTYVcc530QbHLxarAZTpxkutOxTfMcNA.jpg?1727459208)**

* * *

# **Frequently Asked Questions**

**1\. What is the difference between Mailgun replies and regular email replies?** Mailgun replies are specifically managed through the Mailgun API and are designed to streamline email handling for applications. Regular email replies are handled through standard email clients without the automation features offered by Mailgun.

**2\. Can I set up automatic responses for specific types of replies?** Yes, you can configure automatic responses in your Mailgun settings based on specific triggers or keywords in the replies. This feature can help manage customer inquiries more efficiently.

**3\. How do I troubleshoot issues with email replies not appearing in Mailgun?** If email replies are not appearing, first check your Mailgun configuration settings, ensure your webhooks are set up correctly, and verify that your domain is properly authenticated. You can also review your logs for any errors.

**4\. Are there any limits on the number of replies I can receive through Mailgun?** Mailgun has usage limits based on your subscription plan. Be sure to check your plan details to understand any restrictions on the number of replies or messages you can handle.

**5\. How can I ensure my replies are secure and compliant with email regulations?** To maintain security and compliance, make sure you follow best practices for email authentication (like SPF and DKIM) and monitor your email activity. Familiarize yourself with regulations such as GDPR or CAN-SPAM to ensure your processes align with legal requirements.

* * *

# **Related Articles**

- [When email replies are not coming back to the Conversation](https://help.gohighlevel.com/en/support/solutions/articles/48001185819)

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

- [When email replies are not showing up in Conversation](https://help.gohighlevel.com/support/solutions/articles/48001185819-when-email-replies-are-not-showing-up-in-conversation)
- [Mailgun Setup - Google Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48001155148-mailgun-setup-google-domain-setup)
- [Cold Email Inbound Setup Mailgun](https://help.gohighlevel.com/support/solutions/articles/48001185801-cold-email-inbound-setup-mailgun)
- [Mailgun Setup - Namecheap Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981680-mailgun-setup-namecheap-domain-setup)
- [Mailgun Setup - Siteground Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48000981685-mailgun-setup-siteground-domain-setup)
- [Mailgun Setup - CloudFlare Domain Setup](https://help.gohighlevel.com/support/solutions/articles/48001064413-mailgun-setup-cloudflare-domain-setup)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48000987293)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48000987293-how-to-setup-replies-in-mailgun/hit)