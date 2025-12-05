---
url: "https://help.gohighlevel.com/support/solutions/articles/48001198783,"
title: " What is Email Deliverability? - A Guest-Tutorial From Krystin Ruschman of Email-2-Inbox : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001198783,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [Deliverability](https://help.gohighlevel.com/support/solutions/folders/48000665893)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001198783,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [Deliverability](https://help.gohighlevel.com/support/solutions/folders/48000665893)
6. What is Email Deliverability? - A Guest-Tutorial From Kry...

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

# What is Email Deliverability? - A Guest-Tutorial From Krystin Ruschman of Email-2-Inbox

Modified on: Tue, 28 Feb, 2023 at 10:45 PM

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48146642843/original/VznCObDVAa4l0JXlCvXrzP8OgNT_RhQwlg.png?1633527869)

## What is Email Deliverability?

A Guest-Tutorial From Krystin Ruschman of [Email-2-Inbox](https://help.email-2-inbox.com/calendar-chat)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48146643430/original/w38n9VFNm3fPyE8mbVChqjQW8GyMYuPOFA.png?1633527939)

“I think my deliverability is ok…”

What does that mean? Where do we see Deliverability?

First, let’s make sure we’re on the same page regarding the difference between “Delivered” and “Deliverability” because they are very different!

\*DELIVERED\*

This is the stat you see in your SMTP dashboard or in your Highlevel email stats (along with opens, replies, clicks, bounces, complaints, etc.)

Examples:

\[Mailgun Dashboard\]

\[Highlevel Campaign\]

**Delivery** just means the email **got to the recipient mail server** – somewhere – could be the inbox, spam, promotions, updates – who freaking knows where it landed??? It’s also possible the mail server will choose not to hand it off to the email account, but that’s not as likely since most mail servers would prefer to outright reject the email and provide that feedback to the sender.

... You know... like when the postal carrier marks your package as "delivered" in their system, but it's nowhere to be found in your mailbox so you start hunting around your doorstep and asking neighbors if they got it by mistake, but it’s nowhere to be found ? (sorry... went off on a tangent there!)

**A good Delivery rate is 98%+**

Because – what’s the alternative?

The opposite of Delivered is Undelivered… meaning it didn’t get delivered AT ALL. It failed or bounced or got rejected by the receiving mail server – none of those are what we want.

**NOTE: Delivered is a stat MOST email marketing tools DO NOT share with you!** Why? Because they’d have to answer to it.  Instead, they show how many people went into a campaign or automation, then skip right over Delivered and just show the Open rate.

For those using Mailgun with Highlevel, every stat is visible. So, unlike other email tools, Highlevel lets you have full visibility into your delivery rates, and direct communication with your own SMTP provider, which means the power is entirely in your hands to get the best possible results from your email marketing efforts. THIS is why I love the Highlevel/Mailgun combination so much! No other email toolset gives this much opportunity for excellent deliverability.

**\*DELIVERABILITY\***

Unlike Delivery, Deliverability is a stat you don’t see anywhere.

Deliverability = Inbox Placement… in other words your Inboxing Rate – how much of your email hits the Inbox vs. other folders (like Spam or Junk or Promotions…) or not delivering at all.

Email Service Providers do not provide this level of detail in their feedback loops, so we don’t actually see stats related to which folders our email is landing in - only if it was delivered.

**A Good Deliverability rate would obviously be** ? **%**

Although, there’s no such thing as 100% to the inbox, every time, it’s important to understand some of the factors that play into it, so we can come as close to 100% as possible.

Things like:

- IP and domain reputation

  - Reputation is KEY! Many, many things affect reputation, but there are 2 main categories that weigh heavily… Volume and Consistency, and the almighty Engagement (opens, clicks, replies, bounces, complaints, unsubscribes). For more information on stats, check out “What Email Deliverability Stats Should I Look For?”.
- Individual Email Service Provider (ESP) filtering preferences

  - Google, Yahoo!, Outlook, etc. - they don’t all filter exactly the same… There are 100s of things that play into email deliverability, but none of these companies provide a whitepaper with their filtering logic
- Authentication

  - Those pesky DNS records - the SPFs, DKIMs, and DMARCs of the world. And don’t forget your MX records… if those aren’t configured correctly that could also land you in spam or even prevent delivery.
- Domain age

  - Whether it’s a root domain or a subdomain, age factors into warm-up considerations. Treat your new domain like a first date… the goal being to get a second date. When you show up at the door with a new domain, you have no history and no reputation, so make sure to start sending slow and don’t rush things. A good reputation can overcome a young domain age.
- Domain suffix

  - Some of them have a bad rep from the start! The most trustworthy domain suffixes are .com, .co, .net, and .org (.edu and .gov for those who can use them) There are others that work well and some that can send you directly to the spam folder. See how your domain suffix rates [here](https://www.spamhaus.org/statistics/tlds/).
- Subject line and body copy

  - What you say, matters. One time I took the word FREE out of a subject line, and that alone improved Deliverability by 7%! Stay away from known spammy words/phrases like “click here”, “opportunity”, “free”, “100%”, etc.
- Blacklistings

  - The dreaded “Black Spot”. There are actually different types of blacklists and different reasons for ending up on one. Some cause huge problems, and some are just temporary. Check to see if your domain or IP is blacklisted [here](https://mxtoolbox.com/blacklists.aspx).
- Link types, link length, number of links, link reputation

  - Even a simple signature tool can have a dramatic effect on deliverability. Keep in mind, having a link in your email that’s associated with a blacklist or has a bad reputation makes your email “guilty by association”, so make sure any links used inside your email are ones you trust and/or control.
- Text to HTML ratio

  - There’s a time and a place for “fancy” email templates. The general rule is 60:40, leaning heavy on the text side. The audience know/like/trust factor and previous engagement can weigh in on how much HTML you can get away with. Also, it’s important to test. It may be that the heavier HTML, even though decreasing deliverability, may still win on conversions.
- Volume and consistency

  - How much you send, how fast you send it, and how often you send... All of these factors can affect your domain or IP reputation, which can then affect your deliverability. Think of what a “spammer” would do… sends a lot, all at once, more interested in just shoving the email out than concerning themselves with nurturing the recipient relationship. Don’t be like a spammer. (see Domain Age)
- Recipient email behavior

  - Believe it or not, how the user interacts with their own email account factors into how your email might be directed. Learning to factor recipient behavior into your deliverability strategy will take you much further than most marketers.
- And many others...


We don’t have control over every factor that plays into Deliverability, but it’s important to isolate the things we CAN control - even if just a little bit, and then just do everything we can to control them entirely.

\*Look for more detailed articles on some of these factors coming soon!

Need Some Help?

- This article touches on a handful of things that affect whether or not your email gets delivered to the Inbox, but there are 100s of things that play into deliverability, and every situation is unique.


- Proper setup/configuration is necessary to get you TO the inbox, but it’s the behavioral stuff that ensures you STAY there.


- It’s virtually impossible to troubleshoot email deliverability issues over a Facebook post, helpdesk chat, or ticket. Troubleshooting properly requires an understanding of all the factors and thorough analysis in order to properly troubleshoot.


If you’re struggling to get your emails to the inbox, or even if you just want to look at ways to turn your email marketing up a notch, please [book a call with Krystin](https://help.email-2-inbox.com/calendar-chat)at Email2Inbox

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

- [An Introduction To Email Deliverability](https://help.gohighlevel.com/support/solutions/articles/48001063371-an-introduction-to-email-deliverability)
- [Workflow Action based on Email Event Clicked/Opened](https://help.gohighlevel.com/support/solutions/articles/48001208599-workflow-action-based-on-email-event-clicked-opened)
- [Why Are My Emails Going To Spam?](https://help.gohighlevel.com/support/solutions/articles/48001063372-why-are-my-emails-going-to-spam-)
- [What is Email Deliverability? - A Guest-Tutorial From Krystin Ruschman of Email-2-Inbox](https://help.gohighlevel.com/support/solutions/articles/48001198783-what-is-email-deliverability-a-guest-tutorial-from-krystin-ruschman-of-email-2-inbox)
- [Guest Tutorial: Deliverability Masterclass for HighLevel by Seven Figure Agency](https://help.gohighlevel.com/support/solutions/articles/48001198000-guest-tutorial-deliverability-masterclass-for-highlevel-by-seven-figure-agency)
- [How List-Unsubscribe helps email deliverability](https://help.gohighlevel.com/support/solutions/articles/48001234940-how-list-unsubscribe-helps-email-deliverability)

## Related Articles

- [Mailgun Setup Checklist](https://help.gohighlevel.com/support/solutions/articles/48001175336-mailgun-setup-checklist)
- [An Introduction To Email Deliverability](https://help.gohighlevel.com/support/solutions/articles/48001063371-an-introduction-to-email-deliverability)
- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)
- [How to Enable and Rebill LC Email Verification](https://help.gohighlevel.com/support/solutions/articles/48001235221-how-to-enable-and-rebill-lc-email-verification)
- [Google Postmaster Tools](https://help.gohighlevel.com/support/solutions/articles/155000004150-google-postmaster-tools)
- [Why Are My Emails Going To Spam?](https://help.gohighlevel.com/support/solutions/articles/48001063372-why-are-my-emails-going-to-spam-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001198783,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001198783-what-is-email-deliverability-a-guest-tutorial-from-krystin-ruschman-of-email-2-inbox/hit)