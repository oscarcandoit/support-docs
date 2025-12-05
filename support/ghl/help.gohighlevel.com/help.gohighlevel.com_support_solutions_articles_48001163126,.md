---
url: "https://help.gohighlevel.com/support/solutions/articles/48001163126,"
title: " How to Set Up Affiliate Webhooks to Run Automations : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001163126,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [HighLevel Affiliates Program](https://help.gohighlevel.com/support/solutions/48000449591)
4. [Affiliates Program](https://help.gohighlevel.com/support/solutions/folders/48000666024)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001163126,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [HighLevel Affiliates Program](https://help.gohighlevel.com/support/solutions/48000449591)
   - [Affiliates Program](https://help.gohighlevel.com/support/solutions/folders/48000666024)
6. How to Set Up Affiliate Program Webhooks to Run Automatio...

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

# How to Set Up Affiliate Program Webhooks to Run Automations (First Promoter)

Modified on: Mon, 9 Sep, 2024 at 1:37 PM

In this article, we will cover how to set up webhooks for your affiliate links so that you can run automation off sales when someone signs up using your affiliate link.

**NOTE:**

```
This Article is for the HighLevel Affiliate Program, NOT Affiliate Manager Feature found in your sub-accounts.

As an affiliate, you can enroll in any HighLevel Plan. If you want to track your referrals for HighLevel Starter Plan ($97/month) or HighLevel Agency Unlimited ($297/month) using webhooks, please contact the support team.

Request to set up your "HighLevel General Affiliate Campaign" webhooks, as shown in the video below.

If you want to track your referrals for HighLevel Agency Pro ($497/month) with webhooks, request to set up your "Supercharged SaaS Program" webhooks, which are the same as the ones shown in the video below.

Please follow the general process outlined below. Also, inform the support team if you want the webhooks you submitted to apply to referrals for the Supercharged SaaS Program ($497/month).
```

How to Run Automations of Your Affiliate Webhooks

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[How to Run Automations of Your Affiliate Webhooks](https://www.loom.com/share/0526b6bfc9d7498cb0327f6704859a53 "How to Run Automations of Your Affiliate Webhooks")

10 min

2.23K views

0

[Open video in Loom](https://www.loom.com/share/0526b6bfc9d7498cb0327f6704859a53 "Open video in Loom")

1.2×

10 min⚡️13 min10 min8 min 36 sec6 min 53 sec6 min 4 sec5 min 9 sec4 min 7 sec

![](https://cdn.loom.com/sessions/thumbnails/0526b6bfc9d7498cb0327f6704859a53-1692284606472.jpg)

Your user agent does not support the HTML5 Video element.

![](https://cdn.loom.com/avatars/1107763_cc7c9c6e81d508bef5a933c2ad26ace5_192.jpg)

[How to Run Automations of Your Affiliate Webhooks](https://www.loom.com/share/0526b6bfc9d7498cb0327f6704859a53 "How to Run Automations of Your Affiliate Webhooks")

10 min

2.23K views

0

[Open video in Loom](https://www.loom.com/share/0526b6bfc9d7498cb0327f6704859a53 "Open video in Loom")

1.2×

10 min⚡️13 min10 min8 min 36 sec6 min 53 sec6 min 4 sec5 min 9 sec4 min 7 sec

#### **M** **entioned Documentation:**

[How to use the Inbound Webhook Workflow Premium Trigger?](https://help.gohighlevel.com/en/support/solutions/articles/48001237383)

[How to enable and rebill LC Premium Triggers & Actions for Workflows](https://help.gohighlevel.com/en/support/solutions/articles/48001231559)

You can sign up for Postman for free by [clicking on this link:](https://www.postman.com/)

```
Once you have setup and tested all 5 steps, add the corresponding Webhooks for each, then copy and paste this into a seperate doc to be shared with support (See example below).

Example of what to send to support:

I would like webhooks activated for my affiliate link: [Insert Affiliate Link]

Step 1: lead_subscribed on – [Insert inbound Webhook URL]
Step 2: lead_signup on – [Insert inbound Webhook URL]
Step 3: lead_becomes_referral on – [Insert inbound Webhook URL]
Step 4: reward_created on – [Insert inbound Webhook URL]
Step 5: lead_cancelled on – [Insert inbound Webhook URL]
___
```

## Paste this webhook sample into [Postman:](https://www.postman.com/)

```html

```

HTML

* * *

# **Step-by-step guide on setting up affiliate program webhooks.**

The Webhooks that we have on FirstPromoter are as follows:

- Lead Subscribed - Step one of the two-step sign-up form (if you want to nurture leads that have not signed up for a trial)
- Lead Signup -  Step two of the two-step Sign up form (Nurture leads that started a trial)
- Lead Converted to Customer (they made their first payment)
- Reward Generated (Anytime they make a qualifying payment)
- Lead Canceled (lead or customer has no more active subscriptions on their account)

### **1\. Head into your Sub-account > Click on the Automation tab > Create New Workflow**

Proceed to create your first Workflow: " **Step 1:** lead\_subscribed on."

This will be the webhook that fires whenever someone fills out Step one of the two-step sign-up form (if you want to nurture leads that have not signed up for a trial)

### 2\. **Create an inbound webhook trigger > Copy the inbound webhook URL string**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005472156/original/D8K4WoHieDpsboJJ6NiauGwe2UxCeiyF6A.gif?1692302700)

### 3\. Open up [Postman](https://www.postman.com/) and follow the steps below:

1. Use HTTP Request Method
2. Select "Post"
3. Paste the webhook URL (The one you copied from the workflow in the step above)
4. Select " **Body**" then " **Raw**" & select " **JSON"** as the text file
5. Copy the First Promoter Sample data given above into the Body (should be blue)
6. Hit "Send"
7. Please ensure that you receive a successful response, or kindly begin from the beginning.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005472107/original/fehetlVYShwoPGCqVMrbGJvw4IdADgr2ew.gif?1692302530)

### 4\. Return to your Workflow and hit the " **fetch sample**" button within the trigger.

Grab and select the sample, then proceed to map out the action fields:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005471669/original/mXv0wktff8D09tbw0WMec1lBCSOw4JiPkQ.gif?1692301604)

### 5\. Map out the fields using the data from the inbound webhook

- Full name
- Email
- Phone

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155005471714/original/UnO476vTu9l0HV4IIy5LhnN4Ad9bZaJbNg.png?1692301737)

### 6\. Repeat this process four more times for the remaining webhooks

1. Clone workflow
2. Open and grab the webhook
3. Head back into Postman
4. Paste Code in Postman, and on the doc, you will be sent to support
5. Hit "send" in Postman
6. After success request, jump back into your workflow
7. Hit "fetch samples" and select the new data
8. Repeat until you have completed all 5 webhooks

### 7. Open a live chat with support via the icon in the Agency View of your account

> ### I would like webhooks activated for my affiliate link: \[Insert Affiliate Link\]

> **My New Lead webhook is:**
>
> **Step 1:** lead\_subscribed on – \[Insert inbound Webhook URL\]
>
> **Step 2:** lead\_signup on – \[Insert inbound Webhook URL\]
>
> **Step 3:** lead\_becomes\_referral on – \[Insert inbound Webhook URL\]
>
> **Step 4:** reward\_created on – \[Insert inbound Webhook URL\]
>
> **Step 5:** lead\_cancelled on – \[Insert inbound Webhook URL\]

**Note:**

```
For the Pro 497 Plan. Webhooks can only be made for
- Lead Converted to Customer (they made their first payment)
- Reward Generated (Anytime they make a qualifying payment)
- Lead Canceled (lead or customer has no more active subscriptions on their account)
-
```

For Lead sign-up and Lead Subscribed, you only need to create one webhook to catch all HighLevel Plans.

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

- [Become A HighLevel Affiliate](https://help.gohighlevel.com/support/solutions/articles/48000980325-become-a-highlevel-affiliate)
- [Promoting HighLevel As An Affiliate](https://help.gohighlevel.com/support/solutions/articles/48000980326-promoting-highlevel-as-an-affiliate)
- [How to Set Up Affiliate Program Webhooks to Run Automations (First Promoter)](https://help.gohighlevel.com/support/solutions/articles/48001163126-how-to-set-up-affiliate-program-webhooks-to-run-automations-first-promoter-)
- [5 Ways To Get Your First 5 Affiliates](https://help.gohighlevel.com/support/solutions/articles/48001174612-5-ways-to-get-your-first-5-affiliates)
- [First Steps to be a Successful HighLevel Affiliate](https://help.gohighlevel.com/support/solutions/articles/48001182420-first-steps-to-be-a-successful-highlevel-affiliate)
- [How to use Affiliate Portal](https://help.gohighlevel.com/support/solutions/articles/48001202637-how-to-use-affiliate-portal)

## Related Articles

- [Why Use Affiliate Automations?](https://help.gohighlevel.com/support/solutions/articles/155000003662-why-use-affiliate-automations-)
- [Glossary](https://help.gohighlevel.com/support/solutions/articles/155000003633-glossary)
- [How to add Manual Sales](https://help.gohighlevel.com/support/solutions/articles/155000003651-how-to-add-manual-sales)
- [How to use Affiliate Portal](https://help.gohighlevel.com/support/solutions/articles/48001202637-how-to-use-affiliate-portal)
- [Getting started with Affiliate Automations](https://help.gohighlevel.com/support/solutions/articles/155000003663-getting-started-with-affiliate-automations)
- [Automate Affiliate Sales Follow-Ups with the “New Affiliate Sale” Trigger](https://help.gohighlevel.com/support/solutions/articles/155000003664-automate-affiliate-sales-follow-ups-with-the-new-affiliate-sale-trigger)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001163126,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001163126-how-to-set-up-affiliate-program-webhooks-to-run-automations-first-promoter-/hit)