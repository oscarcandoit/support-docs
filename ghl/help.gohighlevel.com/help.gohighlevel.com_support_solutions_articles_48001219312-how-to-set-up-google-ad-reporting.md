---
url: "https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting"
title: " How to set up Google Ad Reporting : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
   - [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
6. How to set up Google Ad Reporting

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

# How to set up Google Ad Reporting

Modified on: Fri, 30 Sep, 2022 at 5:00 PM

Google Ad reporting provides live reporting and analysis for your client's digital ad campaigns. Here are a few must-have setup guidelines for Google Ad Reporting.

**Covered in this article:**

[**Step 1 -** Choose the correct Google Ad Account in Integrations](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting#Step-1---Choose-the-correct-Google-Ad-Account-in-Integrations)

[**Step 2 -** Select the correct MCC Account Id and Client Account ID](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting#Step-2---Select-the-correct-MCC-Account-Id-and-Client-Account-ID)

[**Step 3 -** Add the UTM Template to the Google Ad Account](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting#Step-3---Add-the-UTM-Template-to-the-Google-Ad-Account%C2%A0)

- [Example](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting#Example)

[**Step 4:** Adding Script for Precautionary Measures (See Help Doc)](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting#Step-4%3A-Adding-Script-for-Precautionary-Measures-(See-Help-Doc))

[**Here are some important things to keep in mind:**](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting#Few-Important-things%C2%A0)

* * *

## **Step 1 - Choose the correct Google Ad Account in Integrations**

The user who has the connected google account should have the maximum permissions as a user [(administrator)](https://support.google.com/admanager/answer/177403) or [google ad account manager access](https://support.google.com/google-ads/answer/6139186#MCC_invite).

## **Step 2 - Select the correct MCC Account Id and Client Account ID**

MCC account stands for My Client Centre, it is also commonly known as Google Ads Manager Account, managing multiple clients' Google Ad accounts.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241723515/original/cpKfLamkhGxOwB2benWY2aBbeModkz311w.png?1659031538)

### **MCC id is present in the top right corner.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248202783/original/2kB4rlhnXyUOvhwIOf5AADT7gZ7J91IbsQ.png?1661885519)

### **Client Account id is present on clicking the help section**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241724794/original/41FtCevRGsKvW2aJupKjPEfYRnjb_h9fcA.png?1659031996)

* * *

## **Step 3 - Add the UTM Template to the Google Ad Account**

The UTM tracking template can be added to three places. It can be added at Account Settings, Campaign Settings, or ad group level. We would recommend adding the UTM Template at Account level Settings.

### **UTM Tracking Template (Copy this)**

{lpurl}?utm\_source=adwords&utm\_medium={adname}&utm\_campaign={campaignname}&utm\_content={adgroupname}&utm\_keyword={keyword}&utm\_matchtype={matchtype}&campaign\_id={campaignid}&ad\_group\_id={adgroupid}&ad\_id={creative}

### **How it works**

Tracking templates must include a [ValueTrack parameter](https://support.google.com/google-ads/answer/6305348?hl=en#urlinsertion) that inserts your final URL, like {lpurl}.

Once your ad is clicked, these parameters will insert your final URL. If you don’t include a URL insertion parameter in your tracking template, **your landing page URL will break**.

If you want to add more than one [ValueTrack parameter](https://support.google.com/google-ads/answer/6305348?hl=en#urlinsertion) to a single URL, simply append them together in your URL using an ampersand (&), like this: **{lpurl}** **?matchtype={matchtype}&device={device}.**

Set up or edit a tracking template with ValueTrack parameters at the campaign, Ad group, and or Ads and Extension level - [Follow this article](https://support.google.com/google-ads/answer/6305348?hl=en#zippy=%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-ad-group-level%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-ads-extensions-level%2Cfinal-url-tracking-template-or-custom-parameter%2Cset-up-or-edit-a-tracking-template-with-valuetrack-parameters-at-the-sitelink-level)

## **Example**

### **Final URL:**[http://example.com](http://example.com/)

**Tracking template:**{lpurl}?utm\_source=adwords&utm\_medium={adname}&utm\_campaign={campaignname}&utm\_content={adgroupname}&utm\_keyword={keyword}&utm\_matchtype={matchtype}&campaign\_id={campaignid}&ad\_group\_id={adgroupid}&ad\_id={creative}

**Landing page URL after clicking ads:**

{lpurl}?utm\_source=adwords&utm\_medium=black\_friday&utm\_campaign=blackday10&utm\_content=marketingbanner&utm\_keyword=getdiscounteddeal&utm\_matchtype=e&campaign\_id=12345&ad\_group\_id=2394984903&ad\_id=93844980940&gclid=84843ewhfb834nedhj4u49

### Go to Your **Google Ads Account** \> **Account Settings** \> **Tracking** (See image below)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241751601/original/EXs2wVlSlNDgpnZygMVfKqT4A5Kzxz5wAw.png?1659042898)

### Paste the Tracking Template URL from above in the " **Tracking template**" field below.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241751703/original/FzN2NCdQqsIInlAJVnvV2WbbdMb1WoWbRA.png?1659042970)

**Please Note:**

```
- After adding the tracking template, please run a test and you will see that the majority of the campaigns should show that the landing page is found. If there are any errors, please rectify them if they are active campaigns.

- Earlier, UTM Source was used as Google (utm_source=google). Although it has been depreciated it is the ad blocker used to identify the URL and stripped of the UTM parameters.
```

* * *

## **Step 4: Adding Script for Precautionary Measures [(See Help Doc)](https://help.gohighlevel.com/en/support/solutions/articles/48001219356)**

The script is a simple example of how you would set up the Google AdPrecautionary tracking code. The script acts as a fail-safe if the UTM template fails in capturing the attribution data.

It will track all clicks on a particular link and send it to Google Analytics. The only thing that needs to be changed in this script is the URL for the tracking page, which should match the one used by your website.

[**How to set up Google Ad Precautionary Tracking Script**](https://help.gohighlevel.com/en/support/solutions/articles/48001219356)

* * *

## **Here are some important things to keep in mind:**

```
1. Campaign names, Ads, and Ad-set need to be unique.

2. The name parameters can’t be changed during the lifetime of the campaign / Ad-set / Ad. If the name has to be changed, then create a new campaign / Ad-set / Ad to avoid any issues.

3. If you decide to change the name of the campaign / Ad-set / Ad and choose NOT to create a new campaign, then data in the CRM will keep referring to the original/ first campaign. [Google Ad provides the old name in the parameter and skews your campaign reporting]

4. You will find an Objectives dropdown on the top left , Its purpose is to help define what objective the company had for this Ad campaign when creating it.
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

- [Troubleshoot Guide For Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219996-troubleshoot-guide-for-google-ad-reporting)
- [Understanding Attribution Source (Ad Reporting)](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-source-ad-reporting-)
- [Set Up and Manage Offline Conversion Actions for Google Ads](https://help.gohighlevel.com/support/solutions/articles/155000005530-set-up-and-manage-offline-conversion-actions-for-google-ads)
- [Reporting FAQs](https://help.gohighlevel.com/support/solutions/articles/155000002087-reporting-faqs)
- [How to set up Google Ad Conversion Actions](https://help.gohighlevel.com/support/solutions/articles/48001220947-how-to-set-up-google-ad-conversion-actions)
- [Electrician’s Guide to Maximizing Your Business with HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004571-electrician-s-guide-to-maximizing-your-business-with-highlevel)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting/hit)