---
url: "https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking"
title: " Google Analytics 4 Tracking : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
   - [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
6. Google Analytics 4 Tracking

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

# Google Analytics 4 Tracking

Modified on: Mon, 24 Feb, 2025 at 10:16 PM

Google Analytics 4 (GA4) is the latest version of the Google Analytics platform that provides a more advanced and comprehensive view of user behavior across different platforms and devices. It offers cross-device tracking, machine learning-powered insights, and enhanced event-tracking capabilities.

Concerning our CRM, the recent enhancement to track GA4 events with the measurement-id and API secret means that users of our CRM can now easily use GA4 tracking with their CRM accounts. This will allow them to track and analyze user behavior and engagement across different channels, including their website, mobile app, and social media platforms.

#### **Covered in this Article:**

#### [**Steps to set up Google Analytics 4 in Workflows**](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking\#Steps-to-set-up-Google-Analytics-4-in-Workflows)

#### [Create or use an existing Google Analytics Workflow](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking\#Create-or-use-an-existing-Google-Analytics-Workflow)

#### [Get a Measurement ID from your Google Analytics Data Stream](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking\#Get-a-Measurement-ID-from-your-Google-Analytics-Data-Stream)

#### [Create a Google Analytics event that you want to track](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking\#Create-a-Google-Analytics-event-that-you-want-to-track)

#### [Get an API Secret Value from your Data Stream](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking\#Get-an-API-Secret-Value-from-your-Data-Stream)

**Please Note:**

```
After the workflow execution is completed it will take 24 to 48hrs for the data to reflect in the Google Analytics platform
```

* * *

## **Steps to set up Google Analytics 4 in Workflows**

The existing workflow action for Google Analytics in the CRM includes both Google Analytics 4 and Universal Analytics, which means that users can choose to use either platform or both to track their marketing campaigns and website traffic. This provides a more flexible and integrated approach to tracking and analyzing user behavior, which can help businesses make data-driven decisions to improve their marketing strategies and user experience.

### **Create or use an existing Google Analytics Workflow**

In your Google Analytics Workflow, select the action 'Add to Google Analytics.'

A new dropdown value under 'Action Type' has been introduced by the name 'Google Analytics 4'; select this from the dropdown.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284543581/original/pSCnn00j0xET-5lNoI-oIuQK7DxHSPkhpA.png?1677682870)

### **Get a Measurement ID from your Google Analytics Data Stream**

Go to your [Google Analytics account](https://analytics.google.com/analytics/web/provision/#/provision) and fetch the measurement-id from **Admin ➝ Account Settings ➝ Data Stream ➝ Select the Data Stream.**(Please refer to Google help documentation on [how to Set up Google Analytics](https://support.google.com/analytics/answer/9304153?hl=en) if you do not have it set up.)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284545161/original/08UB2GMF7fnHHaSVr9VRErWGBJ-iQhLxDA.png?1677683155)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284546818/original/qZwT3a5g1F-XxBJUp_06x55GF6qp13aTZw.png?1677683421)

Copy the Measurement ID for your desired Data Stream:

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284547151/original/YLT7YvK3x0sL9v2IyoBSApaho0IP9X41qQ.png?1677683498)

Paste the Measurement ID in the Measurement ID field of your Google Analytics Action in your workflow.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284556825/original/B3TyroHXE8UMwXdxdRAZiRxGvXI_atNKGw.png?1677685097)

### **Create a Google Analytics event that you want to track**

You can Add the event name that you wish to track. This event name will show up under the Google Analytics dashboard along with other standard events that are set up. [Refer here for the event naming rules by google](https://support.google.com/analytics/answer/13316687?hl=en)

### **Get an API Secret Value from your Data Stream**

Add the API secret by navigating to your Google Analytics account **Admin ➝ Account Settings ➝ Data Stream ➝ Select the Data Stream ➝ Measurement Protocol API secrets.**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551270/original/-kJ4WRBEGU3sSkAAzvvkLOz5da1zIV9hFg.png?1677684347)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551356/original/eeK0BIZ9tHMSteAND_IiSV_-_RryKxsoZA.png?1677684372)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284551672/original/RlIdIXYuRah3mSzkcUirhp5v8yNAiKkydQ.png?1677684443)

**Please Note:**

```
Before an API Secret can be created you need to acknowledge that you have read and understood Google's privacy disclosures regarding the collection of user data.
```

Then click on Create if no API Secret has already been created.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552756/original/GCizmLZKJZvyE_dtxsvG9DPl0srgm95okw.png?1677684693)

Name your API secret and then hit **Create,** and a Secret Value will be generated for it automatically.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284552953/original/wQYzdtSU5MCvI9B01CmM0Y11ABmU91vmiw.png?1677684726)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284553558/original/kZiSvw1Lr4RYkWZumT7ns-UxF-0bOEUdAg.png?1677684780)

Copy the Secret Value from here and paste it into the API Secret field in the Google Analytics action in your Workflow.

**Please Note:**

```
Make sure there is no space before or after when you paste your API Secret value into the workflow's field or your Google Analytics action will fail.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48284555569/original/5Ia3Grxv11-cxX_Rb6BZniRX8wseLXOIIQ.png?1677684919)

**Save Action** and then **Save the Workflow**. **Publish** if you are ready to use it.

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

- [Workflow Action - Add To Google Analytics](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics)
- [How to send data to Google Analytics within a Workflow](https://help.gohighlevel.com/support/solutions/articles/48001223243-how-to-send-data-to-google-analytics-within-a-workflow)
- [Track Chat Widget Activity Using Google Analytics 4 (GA4)](https://help.gohighlevel.com/support/solutions/articles/155000002178-track-chat-widget-activity-using-google-analytics-4-ga4-)
- [How to record Pageviews into Google Analytics for Funnels/Websites (GA4)](https://help.gohighlevel.com/support/solutions/articles/48001219725-how-to-record-pageviews-into-google-analytics-for-funnels-websites-ga4-)
- [Technostack Analysis: Understanding the Digital Marketing Ecosystem of Your Prospects](https://help.gohighlevel.com/support/solutions/articles/155000004045-technostack-analysis-understanding-the-digital-marketing-ecosystem-of-your-prospects)
- [Reporting FAQs](https://help.gohighlevel.com/support/solutions/articles/155000002087-reporting-faqs)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking/hit)