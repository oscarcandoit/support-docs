---
url: "https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting"
title: " How to set up Facebook Ad Reporting : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
   - [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
6. How to set up Facebook Ad Reporting

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

# How to set up Facebook Ad Reporting

Modified on: Mon, 7 Nov, 2022 at 8:32 AM

When running Facebook Ads the system try its best to attribute the ad and ad-sets where the lead was driven from. For better reporting and help identifying your winning campaigns we recommend using Facebook UTM parameters, Facebooks pixel and Conversion API in Workflows.

* * *

**Covered in this article:**

[**Before we get started, please review the notes below:**](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Before-we-get-started,-please-review-the-notes-below%3A)

[Entry Points:](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Entry-Points%3A-)

[The following UTM tracking parameters are available on the contact level within the system:](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#The-following-UTM-tracking-parameters-are-available-on-the-contact-level-within-the-system%3A)

[**How to label your campaigns within Facebook to ensure accurate reporting**](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#How-to-label-your-campaigns-within-Facebook-to-ensure-accurate-reporting)

**[How to add UTM Parameters in Facebook Ads Manager](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#How-to-add-UTM-Parameters-in-Facebook-Ads-Manager)**

[**Attribution Reporting**](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Attribution-Reporting)

[**Troubleshooting**](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Troubleshooting)

- [Q1: When previewing my Ad in FB I do not see the UTM parameters?](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Q1%3A-When-previewing-my-Ad-in-FB-I-do-not-see-the-UTM-parameters?)
- [Q2: I'm not seeing first attribution data from contacts?](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Q2%3A-I'm-not-seeing-first-attribution-data-from-contacts?)
- [Q3: I changed something in my Ad, Ad-set, or campaign and now my reporting is off?](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Q3%3A-I-changed-something-in-my-Ad,-Ad-set,-or-campaign-and-now-my-reporting-is-off?)
- [Q4: I do not have a Facebook Business Account or Ads manager?](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Q4%3A-I-do-not-have-a-Facebook-Business-Account-or-Ads-manager?)
- [Q5: I'm using Facebook Lead-gen Ads do I still need to use UTM parameters](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Q5%3A%C2%A0I'm-using-Facebook-Lead-gen-Ads-do-I-still-need-to-use-UTM-parameters)
- [Q6: Where should we add UTM parameters in tracking or destination url?](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Q6%3A-Where-should-we-add-UTM-parameters-in-tracking-or-destination-url?)
- [Q7: What is the Objectives drop down for?](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#Q7%3A-What-is-the-Objectives-drop-down-for?)

* * *

## **Before we get started, please review the notes below:**

- If you are running traffic to a landing page make sure you setup your Facebook pixel and Facebook Conversion API in Workflows
- Facebook will not add the UTM parameters to your links when you are viewing your ad as a preview
- Don't use any special characters or emojis in the UTM parameters or any parameter that needs to be tracked
- First ad attribution data will be recorded for contacts coming from the following "entry points" listed below, in other cases, the first attribution data will be empty.

### **Entry Points:**

- Form submissions
- Survey submissions
- Calendar
- Directly coming from Facebook Lead From
- Two step order form
- Chat widget
- Inbounding Calls (won't work if leads call the number pool directly, but only for the click-to-call scenarios)

### **The following UTM tracking parameters are available on the contact level within the system:**

- **Source** [(Click here to check out this table - "How are sources classified" for the logic to determine how the source is assigned on the contact level)](https://docs.google.com/spreadsheets/d/1XwGUuc_YhW4Qd-acn64XV_fPfgQuhf10DcF1OWFj5A0/edit?usp=sharing)
- **Campaign Name:-** {{contact.attributionSource.utmCampaign}}
- **Adset Name:-** {{contact.attributionSource.utmMedium}}
- **Ad Name:-** {{contact.attributionSource.utmContent}}
- **Campaign Id:-** {{contact.attributionSource.campaignId}}
- **fbclid-** {{contact.attributionSource.fbclid}}
- **gclid** \- {{contact.attributionSource.gclid}}
- **Referrer** \- {{contact.attributionSource.referrer}}

# **How to label your campaigns within Facebook to ensure accurate reporting**

**Please Note:**

```
Campaign name, Ads and Ad-set's need to be unique.(see "CORRECT SETUP Example" below)

The name parameters can’t be changed during the lifetime of the campaign / Ad-set / Ad. If the name has to be changed, then create a different campaign / Ad-set / Ad.

If you decided to change the campaign / Ad-set / Ad and do NOT create a new campaign, then data in the CRM system will keep referring to the original/ first campaign.
```

**CORRECT SETUP Example:**

Campaign Name:

Campaign - Happy Teeth

Ad-set:

Campaign#1 - Happy Teeth - Audience #1 (San Rafael, Ca 20 mile radius - M&F)

Ads: (Unique)

- Ad#1: Happy teeth - Carousel Ad - Audience #1
- Ad#2: Happy teeth - Video Ad - Audience #1
- Ad#3: Happy teeth - Image Ad - Audience #1

# ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48174032213/original/hVPHGvoqrEy9CYuqFgMbYs6P-yeUmZfrkQ.png?1640630395)

# **How to add UTM Parameters in Facebook Ads Manager**

**1.** [Click here to be taken to your Ads Manager](https://business.facebook.com/adsmanager/manage/ads/)

Once you are in your ads manager select the campaign you wish to add UTM parameters to then head over -> Manage ads -> Ads -> Edit.

**2.** Scroll down to the section that says "Tracking"

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48173301734/original/RKnA2Zuqw5UV4fyM_U3CSt4L6gkkNmCJHw.png?1640200443)**

**3.** Click on "Build a URL parameter"

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48173302000/original/8k3ZCXCI4EFBApZuGGjGeuZJELLj7tpjoQ.png?1640200552)**

**4.** Complete the 7 steps below URL parameters

1. Click on "Campaign Source" and type "fb\_ad" into the field
2. Click on "Campaign Medium" and select {{adset.name}} from the dropdown
3. Click on "Campaign Name" and select {{campaign.name}} from the dropdown
4. Click on "Campaign Content" and select {{ad.name}} from the dropdown
5. Click on "Add Parameter" button
6. Enter "campaign\_id" as the "Parameter name" and for the "Value" please select "{{campaign.id}}" from the dropdown menu
7. Hit "Apply" to save changes

****![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48261752780/original/KL8jbKqo5KzHh_3uSbiTvx0kcQ6nTuYmrQ.png?1667831557)****

**Please Note:**

```
Facebook will take sometime to verify and approve your ads. Once approved your Ads will start running and tracking via UTM Parameters within the system.

Don't use any special characters or emojis in the UTM parameters or any parameter that needs to be tracked

When testing Facebook will not add the UTM parameters to your links when you are viewing your ad as a preview.
```

# **Attribution Reporting**

For more info regarding campaign and source/ attribution reporting please click here: [**Attribution**](https://help.gohighlevel.com/en/support/solutions/articles/48001142194)

# **Troubleshooting**

### **Q1: When previewing my Ad in FB I do not see the UTM parameters?**

Facebook will not add the UTM parameters to your links when you are viewing your ad as a preview

### **Q2: I'm not seeing first attribution data from contacts?**

First ad attribution data will be recorded for contacts coming from following entry points listed below, in other cases, the first attribution data will be empty.

Entry Points:

- Form submissions
- Survey submissions
- Calendar
- Directly coming from Facebook Lead From
- Two step order form
- Chat widget
- Inbounding Calls (won't work if leads call the number pool directly, but only for the click-to-call scenarios)

### **Q3: I changed something in my Ad, Ad-set, or campaign and now my reporting is off?**

- Campaign name, Ads and Ad-set's need to be unique (see " [CORRECT SETUP Example](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#How-to-label-your-campaigns-within-Facebook-to-ensure-accurate-reporting)" above)
- The name parameters can’t be changed during the lifetime of the campaign / Ad-set / Ad. If the name has to be changed, then create a different campaign / Ad-set / Ad.
- If you decided to change the campaign / Ad-set / Ad and do NOT create a new campaign, then data in the CRM system will keep referring to the original/ first campaign.

### **Q4: I do not have a Facebook Business Account or Ads manager?**

[Facebook's Ad Manager](https://www.facebook.com/business/learn/facebook-ads-reporting-performance/) is a sophisticated dashboard that provides users with an overview of all their paid campaigns. If you have NOT created a Business and Ad account please check out the resources below:

- [How to create a Facebook Business Manager](https://www.facebook.com/business/help/1710077379203657?id=180505742745347)
- [How to create a Facebook Ad account](https://www.facebook.com/business/help/407323696966570?id=649869995454285)

### **Q5:** **I'm** **using Facebook Lead-gen Ads do I still need to use UTM parameters**

Yes, when running FB lead-gen ads we do recommend using UTM parameters for improved reporting. You can achieve this by adding UTM parameters as [mentioned in this article](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting#How-to-add-UTM-Parameters-in-Facebook-Ads-Manager).

### **Q6: Where should we add UTM parameters in tracking or destination url?**

UTM Parameter needs to be added in tracking to track each link clicks or page visits consisting of unique fbclicks.

### **Q7: What is the Objectives drop down for?**

You will find an Objectives dropdown on the top left in the Ad Report , Its purpose is to help define what objective the company had for this Ad campaign when creating it. ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48249254559/original/cJ-u1hcrxPrPlaVnZk6ukVNXKqTEeySGaA.png?1662397101)

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
- [Troubleshoot Guide For Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219996-troubleshoot-guide-for-google-ad-reporting)
- [How to send data to Google Analytics within a Workflow](https://help.gohighlevel.com/support/solutions/articles/48001223243-how-to-send-data-to-google-analytics-within-a-workflow)
- [How to set up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001204042-how-to-set-up-facebook-ad-reporting/hit)