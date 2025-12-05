---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-"
title: " Domain Warmup in HighLevel: Fixed-Stage Model Guide : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Email](https://help.gohighlevel.com/support/solutions/48000449563)
4. [LC Email](https://help.gohighlevel.com/support/solutions/folders/48000686640)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Email](https://help.gohighlevel.com/support/solutions/48000449563)
   - [LC Email](https://help.gohighlevel.com/support/solutions/folders/48000686640)
6. Domain Warmup: How It Works (Fixed-Stage Model)

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

# Domain Warmup: How It Works (Fixed-Stage Model)

Modified on: Fri, 24 Oct, 2025 at 2:51 AM

This guide explains how HighLevel's domain warmup works using a fixed-stage model—helping you build sender reputation and improve email deliverability safely.

* * *

**TABLE OF CONTENTS**

- [What is Domain Warmup?](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#What-is-Domain-Warmup?)
  - [What Warmup Model Is Used?](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#What-Warmup-Model-Is-Used?)
  - [Warmup Stage Breakdown](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#Warmup-Stage-Breakdown)
  - [When Does Warmup Start?](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#When-Does-Warmup-Start?)
  - [Who Can Use Email Warmup and How to Enable It](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#Who-Can-Use-Email-Warmup-and-How-to-Enable-It)
    - [To enable warmup for an agency domain:](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#To-enable-warmup-for-an-agency-domain%3A)
    - [To enable warmup for a sub-account domain:](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#To-enable-warmup-for-a-sub-account-domain%3A)
  - [Google Postmaster Integration (Recommended)](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#Google-Postmaster-Integration-(Recommended))
  - [Best Practices for a Successful Warmup](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#Best-Practices-for-a-Successful-Warmup)
  - [When Is Warmup Complete?](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#When-Is-Warmup-Complete?)
  - [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-#Related-Articles)

* * *

# **What is Domain Warmup?**

Domain warmup is the process of gradually increasing your daily email volume to build a trusted sender reputation with inbox providers like Gmail, Outlook, and Yahoo.

Without proper warmup, new domains are more likely to:

- Be flagged as spam

- Experience high bounce or complaint rates

- Face email delivery blocks or delays

HighLevel automates this process to help you build trust and maximize email deliverability.

* * *

## **What Warmup Model Is Used?**

This system uses a fixed-stage, gradual warmup model, which means:

- Each stage has a predefined daily sending limit

- Progression only occurs when the full daily limit for the current stage is reached

- If the daily limit is not met, the domain remains in the same stage

- There are no hourly sending limits

- You must send emails through the warming domain for progress to be tracked

* * *

## **Warmup Stage Breakdown**

| Stage | Daily Limit |
| --- | --- |
| 1 | 1,000 |
| 2 | 2,500 |
| 3 | 5,000 |
| 4 | 6,500 |
| 5 | 8,000 |
| 6 | 10,000 |
| 7 | 14,000 |
| 8 | 20,000 |
| 9 | 25,000 |
| 10 | 35,000 |
| 11 | 50,000 |
| 12 | 80,000 |
| 13 | 125,000 |
| 14 | 175,000 |
| 15 | 250,000 |

Once the daily limit is reached, We will still allow email sending

* * *

## **When Does Warmup Start?**

- **For newly created domains:** Warmup is automatically enabled when the domain is created and verified. No manual action is needed.

- **For existing domains:** Warmup must be enabled manually. When you enable warmup on an existing domain, the system will automatically analyze:




  - Past email activity

  - Google Postmaster reputation data (if integrated)

Based on this, it will recommend the most suitable starting stage to ensure smooth warmup progression.

* * *

## **Who Can Use Email Warmup and How to Enable It**

Email warmup is available for both agencies and sub-accounts using dedicated domains.

### **To enable warmup for an agency domain:**

1. Go to **Agency Settings**



![](https://jumpshare.com/v/GtgLT0vlkO7SMjOvvRYy+/Screen+Shot+2025-06-04+at+9.14.57+PM.png)

2. Click **Email Services**

3. Select **SMTP Service**



![](https://jumpshare.com/v/xQYgGpfk242TigRljVHz+/Screen+Shot+2025-06-04+at+9.16.10+PM.png)

4. Go to the **Dedicated Domain and IP** tab



![](https://jumpshare.com/v/xwz98y4gphYG34N5pdkK+/Screen+Shot+2025-06-04+at+9.17.17+PM.png)

5. Choose your domain and click **Start Warmup.**

### **To enable warmup for a sub-account domain:**

1. Go to the **Sub-Account Settings**



![](https://jumpshare.com/v/4ZLaiss1CirfZ2DuEKX1+/Screen+Shot+2025-06-05+at+12.18.10+AM.png)

2. Click **Email Services**

3. Select **SMTP Service**



![](https://jumpshare.com/v/XGWQq0s9hK0ZqcF2vs0v+/Screen+Shot+2025-06-05+at+12.19.40+AM.png)

4. Go to the **Dedicated Domain and IP** tab



![](https://jumpshare.com/v/Ugpw2Wc5L460rKeL2ZEp+/Screen+Shot+2025-06-05+at+12.21.03+AM.png)

5. Choose your domain and click **Start Warmup**

* * *

## **Google Postmaster Integration (Recommended)**

Integrating your domain with Google Postmaster Tools gives you access to key deliverability data, including:

- Domain reputation (High, Medium, Low, Bad)

- Spam complaint rates

- Authentication status

- Delivery and error metrics

If Google Postmaster is not yet connected or no data is available, the domain dashboard will notify you and guide you through setup.

* * *

## **Best Practices for a Successful Warmup**

- Send emails consistently every day

- Use verified, opt-in contact lists

- Avoid sudden spikes in volume

- Avoid switching sender domains mid-campaign

- Respect daily warmup limits to avoid future enforcement blocks

* * *

## **When Is Warmup Complete?**

Your domain completes warmup when it reaches Stage 15 (250,000 emails/day). At that point, you will see a "Warmup Complete" label in the domain dashboard, and full-scale sending will be supported.

* * *

## **Related Articles**

- [Dedicated Email Sending Domains Overview & Setup](https://help.gohighlevel.com/en/support/solutions/articles/48001226115)

- [What is a dedicated IP in LC email?](https://help.gohighlevel.com/en/support/solutions/articles/155000001152)

- [What is LC Email?](https://help.gohighlevel.com/en/support/solutions/articles/48001220605)

- [How to Add a Domain and Verify DNS Record](https://help.gohighlevel.com/en/support/solutions/articles/155000002220)

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

- [What is LC Email?](https://help.gohighlevel.com/support/solutions/articles/48001220605-what-is-lc-email-)
- [How to Migrate My Agency Over to LC - Email](https://help.gohighlevel.com/support/solutions/articles/48001222501-how-to-migrate-my-agency-over-to-lc-email)
- [Managing Default Unsubscribe Links in LC Email](https://help.gohighlevel.com/support/solutions/articles/48001225534-managing-default-unsubscribe-links-in-lc-email)
- [What is email Bounce Suspension, and how to avoid it](https://help.gohighlevel.com/support/solutions/articles/48001214786-what-is-email-bounce-suspension-and-how-to-avoid-it)
- [Email Authentication - DMARC](https://help.gohighlevel.com/support/solutions/articles/48001224630-email-authentication-dmarc)
- [SSL Certificates for Dedicated LC Email Domains](https://help.gohighlevel.com/support/solutions/articles/48001227438-ssl-certificates-for-dedicated-lc-email-domains)

## Related Articles

- [What is a dedicated IP in LC email?](https://help.gohighlevel.com/support/solutions/articles/155000001152-what-is-a-dedicated-ip-in-lc-email-)
- [Google Postmaster Tools](https://help.gohighlevel.com/support/solutions/articles/155000004150-google-postmaster-tools)
- [Why Can't I use My Free Email Address As The SMTP?](https://help.gohighlevel.com/support/solutions/articles/48001063376-why-can-t-i-use-my-free-email-address-as-the-smtp-)
- [Email Sending Guide: Email Best Practices & Email Warm Up](https://help.gohighlevel.com/support/solutions/articles/155000001021-email-sending-guide-email-best-practices-email-warm-up)
- [Deleting Your LC Email Sending Domain](https://help.gohighlevel.com/support/solutions/articles/155000003212-deleting-your-lc-email-sending-domain)
- [Why Are My Emails Going To Spam?](https://help.gohighlevel.com/support/solutions/articles/48001063372-why-are-my-emails-going-to-spam-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005242-domain-warmup-how-it-works-fixed-stage-model-/hit)