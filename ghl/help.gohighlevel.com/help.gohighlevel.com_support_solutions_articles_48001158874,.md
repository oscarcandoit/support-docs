---
url: "https://help.gohighlevel.com/support/solutions/articles/48001158874,"
title: " Manychat to HighLevel Integration : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001158874,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Logic & Fulfillment](https://help.gohighlevel.com/support/solutions/48000452118)
4. [Logic & Fulfillment](https://help.gohighlevel.com/support/solutions/folders/48000673695)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001158874,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Logic & Fulfillment](https://help.gohighlevel.com/support/solutions/48000452118)
   - [Logic & Fulfillment](https://help.gohighlevel.com/support/solutions/folders/48000673695)
6. Manychat to HighLevel Integration

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

# Manychat to HighLevel Integration

Modified on: Thu, 7 Jul, 2022 at 4:32 PM

Manychat to GHL Integration - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[Manychat to GHL Integration](https://www.youtube.com/watch?v=a0ZPO1dqp2c)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Why am I seeing this?](https://support.google.com/youtube/answer/9004474?hl=en)

[Watch on](https://www.youtube.com/watch?v=a0ZPO1dqp2c&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 2:42
•Live

•

```
The steps in this article are for Advanced Integration and for informational purposes only.

While our support team does not currently service or support either our API or ManyChat Integration due to their complexities, we have many tools and groups to help you get started and connected! For assistance with APIs only, you can join our Developer Council Slack Community here: developers.gohighlevel.com

We also hold a Developer Council Zoom Call once a month (second to last Friday) which you can find on the Events calendar here: https://www.gohighlevel.com/events

For more information and links to our API documentation, visit our developer's website: https://developers.gohighlevel.com/
```

**Please Note:**

```
The API URL endpoints:
- Create Contact: https://api.gohighlevel.com/zapier/contact/add_update
- Add/Update Opportunity: https://api.gohighlevel.com/zapier/contact/add_update_opportunity
```

### **Data Fields**

{

“email”: “ [john@deo.com](mailto:john@deo.com)”,

“phone”: “ [+18887324197](tel:+18887324197)”,

“firstName”: “John”,

“lastName”: “Deo”,

“tags”: \[\
\
“commodo sed aliquip”,\
\
“ut exercitation sunt”\
\
\]

}

# **Troubleshooting**

#### **Q1) I'm seeing duplicate contacts coming in from Manychat ? How do I sync HighLevel with Manychat**

To avoid Manychat duplicate contacts in HighLevel, please watch the video below

**Using External Request to update contact instead of duplicating contact**

[https://www.loom.com/share/1c05ad65de8d4bbdae71e0c557e79a4d](https://www.loom.com/share/1c05ad65de8d4bbdae71e0c557e79a4d)

**Headers:**

AUTHORIZATION = Bearer APIKEY

Content-Type = application/json

**body:**

{

"first\_name": {{first\_name\|fallback:""\|to\_json:true}},

"last\_name": {{last\_name\|fallback:""\|to\_json:true}},

"email": {{email\|fallback:""\|to\_json:true}},

"phone": {{phone\|fallback:""\|to\_json:true}}

}

; [3:39](https://gohighlevel.slack.com/archives/D01M8JWS3UZ/p1619735977002200)

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

- [Triggers](https://help.gohighlevel.com/support/solutions/articles/48001157620-triggers)
- [Contact Flow](https://help.gohighlevel.com/support/solutions/articles/48001157626-contact-flow)
- [Campaigns](https://help.gohighlevel.com/support/solutions/articles/48001157629-campaigns)
- [Stale Opportunity Trigger](https://help.gohighlevel.com/support/solutions/articles/48001158482-stale-opportunity-trigger)
- [Retrieving Facebook Leads](https://help.gohighlevel.com/support/solutions/articles/48001158871-retrieving-facebook-leads)
- [Adding Custom Audience Trigger](https://help.gohighlevel.com/support/solutions/articles/48001158872-adding-custom-audience-trigger)

## Related Articles

- [Why Google Calendar Integration Breaks](https://help.gohighlevel.com/support/solutions/articles/48001204159-why-google-calendar-integration-breaks)
- [How to use WebinarKit's HighLevel Integration (Guest Tutorial)](https://help.gohighlevel.com/support/solutions/articles/48001225332-how-to-use-webinarkit-s-highlevel-integration-guest-tutorial-)
- [Integrating Outlook with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002371-integrating-outlook-with-highlevel-calendars)
- [How to Integrate Jobber with HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000005429-how-to-integrate-jobber-with-highlevel)
- [Google Drive Integration in Media Storage](https://help.gohighlevel.com/support/solutions/articles/155000004190-google-drive-integration-in-media-storage)
- [Integrating Zoom with HighLevel Calendars](https://help.gohighlevel.com/support/solutions/articles/155000002372-integrating-zoom-with-highlevel-calendars)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001158874,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001158874-manychat-to-highlevel-integration/hit)