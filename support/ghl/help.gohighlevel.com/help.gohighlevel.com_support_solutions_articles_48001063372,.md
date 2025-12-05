---
url: "https://help.gohighlevel.com/support/solutions/articles/48001063372,"
title: " Why Your Emails Go to Spam and How to Fix It in HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001063372,#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001063372,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [Deliverability](https://help.gohighlevel.com/support/solutions/folders/48000665893)
6. Why Are My Emails Going To Spam?

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

# Why Are My Emails Going To Spam?

Modified on: Wed, 24 Sep, 2025 at 6:03 AM

The article addresses common reasons why emails sent through HighLevel might end up in spam folders. It highlights factors such as poor sender reputation, lack of proper authentication (like SPF and DKIM), and content issues (like spammy keywords or formatting). The article provides actionable tips to improve email deliverability, including verifying domain settings, maintaining a clean email list, and monitoring engagement metrics. By following these guidelines, users can enhance their email marketing effectiveness and reduce the chances of their emails being marked as spam.

* * *

**TABLE OF CONTENTS**

- [Sending From a Public Domain](https://help.gohighlevel.com/support/solutions/articles/48001063372,#Sending-From-a-Public-Domain)
- [DMARC](https://help.gohighlevel.com/support/solutions/articles/48001063372,#DMARC)
- [List Health & List Collection](https://help.gohighlevel.com/support/solutions/articles/48001063372,#List-Health-&-List-Collection)
- [Sending Internal Mail](https://help.gohighlevel.com/support/solutions/articles/48001063372,#Sending-Internal-Mail)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48001063372,#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001063372,#Related-Articles)

* * *

There are many reasons that mailbox providers could flag your email as spam. Here are the most common reasons we see and how to fix them!

## **Sending From a Public Domain**

If you are sending messages from a free domain like gmail.com, yahoo.com, etc., your messages will likely go to the spam folder. You'll want to be sure to send mail from a domain that you own and that matches your branding.

```
Check out our guide on - Dedicated Email Sending Domains Overview & Setup
```

* * *

## **DMARC**

If the domain you use to send mail has a DMARC policy but you haven't verified the domain in with your SMTP provider, your messages will likely go to spam. Check with your SMTP provider for instructions on how to ensure your HighLevel messages pass DMARC.

* * *

## **List Health & List Collection**

If all of the technical pieces above are covered, list health and list collection are the next most important factors to determine deliverability. Be sure that:

- Everyone on your list gave direct consent to receive email marketing from you
- Your cold subscribers are cleaned from your list regularly
- Your forms are secured with double opt-in

To learn more about why messages go to the inbox or spam folder, check out our [Introduction To Email Deliverability](https://help.gohighlevel.com/en/support/solutions/articles/48001063371) article.

* * *

## **Sending Internal Mail**

Are you sending messages to the same domain that the message is coming from? For example, sending from info@exampledomain.com to suan@exampledomain.com. If so, it's common for these internal messages to go to spam. This is because your mailbox sees that it's receiving a message from itself, but it knows that it didn't send the message (HighLevel did). This makes your mailbox think it's being spoofed, and it sends the message to spam.

If you're just sending internal mail to test your messages, we recommend using a free email like gmail.com. If you need to send mail internally outside of testing, you'll want to have the person who manages mail for your domain whitelist the IP address of your SMTP provider.

## **Sending Volume or Frequency Issues**

Mailbox providers monitor how often and how many emails you send. A sudden spike in sending volume may raise red flags.

**How to fix it:**

- Warm up your sending domain gradually by increasing volume over time.

- Maintain a consistent sending schedule.

- Avoid sending long periods of silence followed by massive blasts.


## **Content Triggers Spam Filters**

Even if your authentication is correct, the **content** of your email can trigger spam filters.

**Things that may cause issues:**

- Overuse of promotional words (e.g., “Free $$$,” “Act Now,” “Limited Time”)

- Too many images with very little text

- Using link shorteners (like bit.ly)

- Attachments with large files or unsupported formats


**How to fix it:**

- Write in a **clear, conversational tone**.

- Balance **images and text**.

- Always link directly to your website instead of using link shorteners.


* * *

## **Frequently Asked Questions**

**Q: How can I test if my emails are going to spam before sending them to my list?**

You can use email testing tools that analyze your email content and sender reputation. Additionally, consider sending test emails to different email providers (like Gmail, Yahoo, etc.) to see where they land.

**Q: What steps can I take if my domain has a poor sender reputation?**

Improving your domain's sender reputation involves several strategies, including gradually increasing your email sending volume, regularly cleaning your email list, and actively engaging with your audience to boost open rates.

**Q: How often should I clean my email list to avoid spam issues?**

It's recommended to clean your email list every 6 to 12 months. Regularly remove inactive subscribers and those who haven't engaged with your emails to maintain a healthy list and improve deliverability.

* * *

## **Related Articles**

- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/en/support/solutions/articles/155000001021)

- [What is LC Email?](https://help.gohighlevel.com/en/support/solutions/articles/48001220605)

- [What is a dedicated IP in LC email?](https://help.gohighlevel.com/en/support/solutions/articles/155000001152)

- [An Introduction To Email Deliverability](https://help.gohighlevel.com/en/support/solutions/articles/48001063371)

- [How to use the Email Risk Assessment Tool for LC Email](https://help.gohighlevel.com/en/support/solutions/articles/155000000577)

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

- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)
- [Deleting Your LC Email Sending Domain](https://help.gohighlevel.com/support/solutions/articles/155000003212-deleting-your-lc-email-sending-domain)
- [An Introduction To Email Deliverability](https://help.gohighlevel.com/support/solutions/articles/48001063371-an-introduction-to-email-deliverability)
- [Google Postmaster Tools](https://help.gohighlevel.com/support/solutions/articles/155000004150-google-postmaster-tools)
- [What is LC Email?](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-)
- [What is a dedicated IP in LC email?](https://help.gohighlevel.com/support/solutions/articles/155000001152-what-is-a-dedicated-ip-in-lc-email-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001063372,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001063372-why-are-my-emails-going-to-spam-/hit)