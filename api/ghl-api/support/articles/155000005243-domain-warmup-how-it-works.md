---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works
category: articles
type: article
scraped: 2025-10-28T16:23:45.192Z
title:  Domain Warmup: How It Works : LeadConnector 
status_code: 200
---

#  Domain Warmup: How It Works : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Email](https://help.leadconnectorhq.com/support/solutions/48000454677) [LeadConnector Email](https://help.leadconnectorhq.com/support/solutions/folders/48000687936)

## Domain Warmup: How It Works  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works\# "Print this Article")

Modified on: Wed, 14 May, 2025 at 8:51 AM

* * *

**TABLE OF CONTENTS**

- [What is Domain Warmup?](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#What-is-Domain-Warmup?)
- [What Warmup Model Is Used?](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#What-Warmup-Model-Is-Used?)
- [Warmup Stage Breakdown](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#Warmup-Stage-Breakdown)
- [When Does Warmup Start?](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#When-Does-Warmup-Start?)
  - [For newly created domains:](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#For-newly-created-domains%3A)
  - [For existing domains:](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#For-existing-domains%3A)
- [How to Start Warmup for an Existing Domain:](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#How-to-Start-Warmup-for-an-Existing-Domain%3A)
- [Who Can Use Email Warmup and How to Enable It](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#Who-Can-Use-Email-Warmup-and-How-to-Enable-It)
  - [Google Postmaster Integration (Recommended)](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#Google-Postmaster-Integration-(Recommended))
- [Best Practices for a Successful Warmup](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#Best-Practices-for-a-Successful-Warmup)
- [When Is Warmup Complete?](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works#When-Is-Warmup-Complete?)

## **What is Domain Warmup?**

Domain warmup is the process of gradually increasing your daily email volume to build a trusted sender reputation with inbox providers like Gmail, Outlook, and Yahoo.

Without proper warmup, new domains are more likely to:

- Be flagged as spam
- Experience high bounce or complaint rates
- Face email delivery blocks or delays

We automates this process to help you build trust and maximize email deliverability.

## **What Warmup Model Is Used?**

This system uses a fixed-stage, gradual warmup model, which means:

- Each stage has a predefined daily sending limit
- Progression only occurs when the full daily limit for the current stage is reached
- If the daily limit is not met, the domain remains in the same stage
- There are no hourly sending limits
- You must send emails through the warming domain for progress to be tracked

```
Important: Sending beyond the daily limit is allowed and emails will not be blocked.
```

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

Once the daily limit is reached, the system pauses additional sending from that domain until 12:00 AM UTC the next day. The next stage will automatically begin if the full daily limit was reached.

## **When Does Warmup Start?**

### For newly created domains:

Warmup is automatically enabled when the domain is created and verified. No manual action is needed.

### For existing domains:

Warmup must be enabled manually. When you enable warmup on an existing domain, the system will automatically analyze:

- Past email activity
- Google Postmaster reputation data (if integrated)

Based on this, it will recommend the most suitable starting stage to ensure smooth warmup progression.

## **How to Start Warmup for an Existing Domain:**

1. Navigate to the domain in your Email Setup screen
2. Click Start Warmup
3. Begin sending emails using that domain

Sending activity is required for the system to track warmup progress.

## **Who Can Use Email Warmup and How to Enable It**

Email warmup is available for both agencies and sub-accounts using dedicated domains.

To enable warmup for an agency domain:

1. Go to Agency Settings
2. Click Email Services
3. Select SMTP Service
4. Go to the Dedicated Domain and IP tab
5. Choose your domain and click Start Warmup

To enable warmup for a sub-account domain:

1. Go to the Sub-Account Settings
2. Click Email Services
3. Select SMTP Service
4. Go to the Dedicated Domain and IP tab
5. Choose your domain and click Start Warmup

### **Google Postmaster Integration (Recommended)**

Integrating your domain with Google Postmaster Tools gives you access to key deliverability data, including:

- Domain reputation (High, Medium, Low, Bad)
- Spam complaint rates
- Authentication status
- Delivery and error metrics

If Google Postmaster is not yet connected or no data is available, the domain dashboard will notify you and guide you through setup.

## **Best Practices for a Successful Warmup**

- Send emails consistently every day
- Use verified, opt-in contact lists
- Avoid sudden spikes in volume
- Avoid switching sender domains mid-campaign
- Respect daily warmup limits to avoid future enforcement blocks

## **When Is Warmup Complete?**

Your domain completes warmup when it reaches Stage 15 (250,000 emails/day). At that point, you will see a "Warmup Complete" label in the domain dashboard, and full-scale sending will be supported.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005243-domain-warmup-how-it-works*  
*Generated on: 2025-10-28T16:23:45.192Z*
