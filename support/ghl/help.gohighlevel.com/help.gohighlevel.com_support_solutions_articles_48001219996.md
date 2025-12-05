---
url: "https://help.gohighlevel.com/support/solutions/articles/48001219996"
title: " Troubleshoot Guide For Google Ad Reporting : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001219996#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
4. [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001219996#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
   - [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
6. Troubleshoot Guide For Google Ad Reporting

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

# Troubleshoot Guide For Google Ad Reporting

Modified on: Mon, 5 Sep, 2022 at 9:04 AM

Google AdWords is one of the most popular advertising platforms in the world. It’s a great way to promote your business and get more traffic, but it can be difficult to track how well you are doing with this platform.

If you want to know what is going on with your ads, then you need to use Google AdWords reporting. In this guide, we will show you a few troubleshooting steps to see if your Google Ad Setup is done correctly.

* * *

#### **Covered in this article:**

#### [**How to troubleshoot your Google Ads Reporting**](https://help.gohighlevel.com/support/solutions/articles/48001219996\#How-to-troubleshoot-your-Google-Ads-Reporting)

- #### [**1.** Make sure your Google Ad Account Integration is connected to the CRM.](https://help.gohighlevel.com/support/solutions/articles/48001219996\#1.-Make-sure-your-Google-Ad-Account-Integration-is-connected-to-the-CRM.%C2%A0)

- #### [**2.** UTM Tracking template can only be added in one place, like in the Account settings, Campaign, or Ad setup;](https://help.gohighlevel.com/support/solutions/articles/48001219996\#2.-UTM-Tracking-template-can-only-be-added-in-one-place,-like-in-the-Account-settings,-Campaign,-or-Ad-setup;%C2%A0)

- #### [**3.** Google Ads, Ad-set, and Campaign names need to be unique. If the names are not unique, it will show duplicates in different Ad-set/Ads.](https://help.gohighlevel.com/support/solutions/articles/48001219996\#3.-Google-Ads,-Ad-set,-and-Campaign-names-need-to-be-unique.-If-the-names-are-not-unique,-it-will-show-duplicates-in-different-Ad-set/Ads.-For-example;) [For example;](https://help.gohighlevel.com/support/solutions/articles/48001219996\#3.-Google-Ads,-Ad-set,-and-Campaign-names-need-to-be-unique.-If-the-names-are-not-unique,-it-will-show-duplicates-in-different-Ad-set/Ads.-For-example;)

- #### [Wrong Setup (What not to do)](https://help.gohighlevel.com/support/solutions/articles/48001219996\#Wrong-Setup-(What-not-to-do)-[PLEASE-REVIEW-FOR-ACCURACY])

- #### [Correct Setup (What to do)](https://help.gohighlevel.com/support/solutions/articles/48001219996\#Correct-Setup-(What-to-do))


* * *

# **How to troubleshoot your Google Ads Reporting**

## 1\. Make sure your Google Ad Account Integration is connected to the CRM.

If the integration is connected please proceed to check if the Gmail address given on the integration is the one associated with your Google Ad account.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248432003/original/VUJN3JbEGt7osLkXqk99TOyEbrlo8bkPRA.png?1661970067)

Please make sure the email address of the user connected has the maximum amount of permissions **(admin)** in your Google Ad Account.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248432893/original/mkh9c39KkvP1v3mTsb3Fchx75i56figAeQ.png?1661970338)

**Please Note:**

```
The Gmail account which you have connected in the integration needs to be a user (User or admin) role in the Google Ad account, it can't have a manager role.
```

* * *

## 2\. UTM Tracking template can only be added in one place, like in the Account settings, Campaign, or Ad setup;

If it is added at multiple places the tracking template, it will work in the hierarchy of Account > Campaign > Ad.

**Please Note:**

```
UTM Tracking is case sensitive so it needs to follow the template EXACTLY with absolutely NO capital letters.
```

* * *

## 3\. **Google Ads, Ad-set, and Campaign names** need to be **unique**. If the names are not unique, it will show duplicates in different Ad-set/Ads. For example;

### **Wrong Setup (What not to do)**

|     |     |     |
| --- | --- | --- |
| **Campaign Name** | Winter Shoes |
| **Campaign id** | 12345 |  |
| **Ad Group** | Sport Shoes 1 |  |
| **Ad** |  | \*Nike Sport Shoes 1 |
|  | Sport Shoes 2 |  |
| **Ad** |  | \*Nike Sport Shoes 1 |

\\* Nike Sport Shoes 1 is listed and spelled the exact same way twice. These would need to be unique.

Let's say **Customer A** is created by **Paid Search.** **Customer A** will be present in the Leads column of Google Ad Reporting displayed as Nike Sports Shoes 1 in two different Ad-sets. This is because the \*Nike Sport Shoes 1 is listed in two different Ad in the table above.

https//example.com?utm\_source=adwords&utm\_medium={NikeSportShoes1}&utm\_campaign={Wintershoes}&utm\_content={sportshoes1}&utm\_keyword={sports}&utm\_matchtype={e}&campaign\_id={12345}&ad\_group\_id={123456789}&ad\_id={sportshoes}

### **Correct Setup (What to do)**

|     |     |     |
| --- | --- | --- |
| **Campaign Name** | Winter Shoes |  |
| **Campaign id** | 12345 |  |
| **Ad Group** | Sport Shoes 1 York |  |
| **Ad** |  | Nike Sport Shoes 1.1 York logo |
|  | Sport Shoes 2 John |  |
| **Ad** |  | Nike Sport Shoes 1.2 John logo |

**Please Note:**

```
If you were to change the name of your Google Ad Campaign, Ad-set, or Ad, it will not change the existing copy of your UTM parameters but it will attribute to the old parameters instead.

We recommend creating a new Campaign, Ad-set, and Ad. In the list view of Google Ad Reporting > HighLevel will update the name but the data will stop attributing sales, leads and ROI as they are picking up on the old UTM parameters.
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

- [Understanding Attribution Source (Ad Reporting)](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-source-ad-reporting-)
- [Understanding Google Ad Reporting Terminology](https://help.gohighlevel.com/support/solutions/articles/48001219241-understanding-google-ad-reporting-terminology)
- [How to set up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)
- [How to set up Google Ad Precautionary Tracking Script](https://help.gohighlevel.com/support/solutions/articles/48001219356-how-to-set-up-google-ad-precautionary-tracking-script)
- [Troubleshoot Guide For Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219996-troubleshoot-guide-for-google-ad-reporting)
- [How to record Pageviews into Google Analytics for Funnels/Websites (GA4)](https://help.gohighlevel.com/support/solutions/articles/48001219725-how-to-record-pageviews-into-google-analytics-for-funnels-websites-ga4-)

## Related Articles

- [Understanding Attribution Source (Ad Reporting)](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-source-ad-reporting-)
- [Reporting FAQs](https://help.gohighlevel.com/support/solutions/articles/155000002087-reporting-faqs)
- [Troubleshooting Facebook Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001220950-troubleshooting-facebook-ad-reporting)
- [How to set up Google Ad Conversion Actions](https://help.gohighlevel.com/support/solutions/articles/48001220947-how-to-set-up-google-ad-conversion-actions)
- [How to set up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)
- [Set Up and Manage Offline Conversion Actions for Google Ads](https://help.gohighlevel.com/support/solutions/articles/155000005530-set-up-and-manage-offline-conversion-actions-for-google-ads)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001219996)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001219996-troubleshoot-guide-for-google-ad-reporting/hit)