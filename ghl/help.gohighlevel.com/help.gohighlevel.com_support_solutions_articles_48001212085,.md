---
url: "https://help.gohighlevel.com/support/solutions/articles/48001212085,"
title: " How to Use Webhook.site to Troubleshoot your API Requests : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001212085,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Developer Resources](https://help.gohighlevel.com/support/solutions/48000450445)
4. [Developer Resources](https://help.gohighlevel.com/support/solutions/folders/48000668553)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001212085,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Developer Resources](https://help.gohighlevel.com/support/solutions/48000450445)
   - [Developer Resources](https://help.gohighlevel.com/support/solutions/folders/48000668553)
6. How to Use Webhook.site to Troubleshoot your API Requests

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

# How to Use Webhook.site to Troubleshoot your API Requests

Modified on: Thu, 23 Jun, 2022 at 11:19 AM

How to Use Webhook.site to Troubleshoot your API Requests

1.2×

7 min⚡️9 min 18 sec7 min 27 sec6 min 12 sec4 min 58 sec4 min 22 sec3 min 43 sec2 min 58 sec

![](https://cdn.loom.com/sessions/thumbnails/98a4404158934515a67062bf4ac70222-00001.jpg)

Your user agent does not support the HTML5 Video element.

1.2×

7 min⚡️9 min 18 sec7 min 27 sec6 min 12 sec4 min 58 sec4 min 22 sec3 min 43 sec2 min 58 sec

## Things To Note:

```
The steps in this article are for Advanced Integration and for informational purposes only.

While we do not currently service or support either the Basic or Advanced API due to their complexities, we have many tools and groups to help you get started and connected! For assistance with APIs, you can join our Developer Council Slack Community here: https://www.gohighlevel.com/dev-slack

We also hold a Developer Council Zoom Call once a month (second to last Friday) which you can find on the Events calendar here: https://www.gohighlevel.com/events

For more information and links to our API documentation, visit our developer's website: https://developers.gohighlevel.com/
```

## STEPS:

* * *

### 1\. [Go to Webhook.site](https://webhook.site/\#!/8d254d9f-2bad-4959-b3e2-e3a262d06c76)

### **2\. Click on "Copy to clipboard" next to your unique Testing Webhook on the homepage**

![Click on "Copy to clipboard" next to your unique Testing Webhook on the homepage](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558661/original/AMwU34bm7Qtr34Kv-qg5tlrcbmjHLwVPEg.png?1647882452)

### **3\. Go to Your Custom Integration like Zapier or other third-party solution**

For this example, we are using Zapier, and to use Webook.site to test you will need to click "Set Up Action"

![Go to Your Custom Integration like Zapier, or other third-party solution](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558665/original/y413VeWzjcuvSTcRG3D7Qr0i-WG1OsdbRg.png?1647882452)

### **4\. Replace the HighLevel API URL with the Webhook.site testing URL**

Temporarily swap out the HighLevel API URL for the Webhook.site URL for testing purposes. You'll follow a similar process for any other custom integration that is POSTING data into HighLevel.

![Replace the HighLevel API URL with the Webhook.site testing URL](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204558659/original/u3eeM4pSIkQSw2ivNF_WpkezIC7Rrd2j4Q.png?1647882452)

### **5\. Save your updates**

Make sure to save your changes, then run whatever flow you have in place that would normally execute the webhook. If your tool or integration (like Zapier, Integromat, etc.) has a built-in testing tool, don't utilize this. Instead, use a real-world example. If the webhook is triggered when a form is submitted, go to the form and submit a test. If the automation fires when an action is performed in an external system, perform said action.

This will provide you and your developers with the most accurate information, and will be incredibly valuable when troubleshooting advanced API-related issues.

### **6\. Review Payload Data**

Next, you'll be presented with the raw data being received by HighLevel anytime the webhook is executed. You can compare this with the information available on our API documentation websites to test your configuration.

![Review Payload Data](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204626853/original/rZKm85AvhyACSqZ3wxKtgoFf4Zkh8lDLMQ.png?1647895301)

### **7\. Click Copy**

Click Copy in the Upper Right of the Raw Data input box to copy the entire Payload. Save this for troubleshooting with your developers, or with the HighLevel team.

![Click Copy](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48204626854/original/KfqMVOZpTrJV0t0LHq6GHcGcIK1t1AR3oQ.png?1647895301)

## Related Articles:

[HighLevel API](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api)

[Creating Subaccounts Using Zapier](https://help.gohighlevel.com/support/solutions/articles/48001207048-creating-subaccounts-using-zapier)

* * *

# **Troubleshooting:**

**For more information and links to our API documentation, visit our developer's website:****[https://developers.gohighlevel.com/](https://developers.gohighlevel.com/)**

```
The steps in this article are for Advanced Integration and for informational purposes only.

While we do not currently service or support either the Basic or Advanced API due to their complexities, we have many tools and groups to help you get started and connected! For assistance with APIs, you can join our Developer Council Slack Community here: https://www.gohighlevel.com/dev-slack

We also hold a Developer Council Zoom Call once a month (second to last Friday) which you can find on the Events calendar here: https://www.gohighlevel.com/events

For more information and links to our API documentation, visit our developer's website: https://developers.gohighlevel.com/
```

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

- [HighLevel API](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api)
- [How to Use Webhook.site to Troubleshoot your API Requests](https://help.gohighlevel.com/support/solutions/articles/48001212085-how-to-use-webhook-site-to-troubleshoot-your-api-requests)
- [How to get started with the Developer's Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000000136-how-to-get-started-with-the-developer-s-marketplace)
- [Set Up Your App Pricing](https://help.gohighlevel.com/support/solutions/articles/155000001217-set-up-your-app-pricing)
- [Configure Marketplace App Listing Type](https://help.gohighlevel.com/support/solutions/articles/155000001559-configure-marketplace-app-listing-type)
- [Marketplace App Distribution Type](https://help.gohighlevel.com/support/solutions/articles/155000002141-marketplace-app-distribution-type)

## Related Articles

- [Creating Sub-Accounts using Zapier](https://help.gohighlevel.com/support/solutions/articles/48001207048-creating-sub-accounts-using-zapier)
- [How to Use Webhooks in HighLevel (Zapier)](https://help.gohighlevel.com/support/solutions/articles/155000001183-how-to-use-webhooks-in-highlevel-zapier-)
- [How to get started with the Developer's Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000000136-how-to-get-started-with-the-developer-s-marketplace)
- [Voice AI Public APIs](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis)
- [How to setup Replies in MailGun](https://help.gohighlevel.com/support/solutions/articles/48000987293-how-to-setup-replies-in-mailgun)
- [Manychat to HighLevel Integration](https://help.gohighlevel.com/support/solutions/articles/48001158874-manychat-to-highlevel-integration)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001212085,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001212085-how-to-use-webhook-site-to-troubleshoot-your-api-requests/hit)