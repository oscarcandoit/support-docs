---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-"
title: " How to send a Meta Conversion API action for Ad Manager? : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [Facebook Conversion API (CAPI)](https://help.gohighlevel.com/support/solutions/folders/155000001015)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [Facebook Conversion API (CAPI)](https://help.gohighlevel.com/support/solutions/folders/155000001015)
6. How to send a Meta Conversion API action for Ad Manager?

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

# How to send a Meta Conversion API action for Ad Manager?

Modified on: Mon, 18 Aug, 2025 at 1:17 AM

In this article we will be talking about the process of creating a workflow for sending back Conversion API action to Meta and the newly added ad manager radio button under Meta Conversion API action in workflows and what value does it add to the user.

* * *

## **TABLE OF CONTENTS**

- [Why do I need to create a CAPI action workflow after creating an ad campaign and conversion dataset?](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-#Why-do-I-need-to-create-a-CAPI-action-workflow-after-creating-an-ad-campaign-and-conversion-dataset?)
- [Which workflow triggers can be used with Meta Conversion API action?](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-#Which-workflow-triggers-can-be-used-with-Meta-Conversion-API-action?)
- [How is Ad Manager radio button different from Integrations radio button in the Meta Conversion API action?](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-#How-is-Ad-Manager-radio-button-different-from-Integrations-radio-button-in-the-Meta-Conversion-API-action?)
- [Can I use the offline events with trigger names like 'Call', 'opportunity change status', 'tag', etc. with Meta Conversion API action?](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-#Can-I-use-the-offline-events-with-trigger-names-like-'Call',-'opportunity-change-status',-'tag',-etc.-with-Meta-Conversion-API-action?)

* * *

## **Why do I need to create a CAPI action workflow after creating an ad campaign and conversion dataset?**

Creating and sending **CAPI (Conversions API)** events to Meta after setting up your ad and dataset is important for enhancing the accuracy, reliability, and effectiveness of your Meta advertising campaigns. Here’s why you need to use the CAPI in addition to the standard Meta dataset:

- **Improved Accuracy**: CAPI sends data directly from your server, bypassing issues like browser restrictions, ad blockers, and cookie limitations, ensuring more reliable tracking of user actions.
- **Better Attribution**: It tracks conversions across devices and platforms (including users who block cookies), providing more complete data for campaign optimisation therefore accurate reporting.
- **Fills Pixel Gaps**: When pixel data is blocked or missed (e.g., due to slow load times or privacy settings), CAPI ensures those conversions are still recorded.
- **Enhanced Optimisation**: More granular, server-side data helps Meta improve ad targeting and performance.
- **Privacy Compliance**: CAPI is better suited for privacy regulations as it reduces reliance on client-side cookies.
- **Efficient Budget Spend**: More accurate data allows Meta to optimise your ad spend and improve return on investment (ROI).

In summary, sending back **CAPI events** to Meta after creating your pixel is essential to improve the **accuracy** of your tracking, **optimise** your ads more effectively, and **enhance attribution** across devices and browsers. It fills in gaps left by browser-based pixel tracking and helps ensure that your ad campaigns are working as efficiently as possible, even with increasing privacy concerns and browser restrictions.

* * *

## **Which workflow triggers can be used with Meta Conversion API action?**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037638079/original/CL4W8FAhtV-LjEKe9VfqBVqFAUa_pIhS0A.png?1733217275)

In workflows, if your action is Meta Conversion API, the triggers which can be used depend on the **Event Type** that you will be using in the FB CAPI action. All the eligible triggers for both lead and funnel events are listed as under:

1. For **Funnel events** in Meta conversion API action, you can use the following triggers; Form Submitted, Survey Submitted, Customer Booked Appointment, and Order Form Submission.

(For an appointment, it will only work with "Customer Booked appointment," not with "appointment," as appointments are the general triggers and "Customer Booked appointment" is the trigger for the widget)
2. For **Lead events** in Meta conversion API action, you can only use the trigger "Facebook Lead Form Submission" and "Pipeline Stage Change"(This will work if your contact is coming from a Facebook lead form).
3. For **Instagram DM** events in Meta conversion API action, you can use any trigger that results in contact creation in the CRM.

* * *

## **How is Ad Manager radio button different from Integrations radio button in the Meta Conversion API action?**

During the creation of conversion API action under workflows, we see two connection type option:

- Integrations
- Ad Manager

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770657/original/XpDYkAD5lt1XxfNmsbndb6Ais472qqwOuw.png?1755497368)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770608/original/MsYr_VqK6pzvkMnj27jUWl_oLbHT_0pitw.png?1755497312)

```
Note: All the information with respect to the Integration connection type and the details of what each field under it means can be understood in detail by following the below two articles:
Meta conversion leads walkthrough
Setup a funnel event for Meta conversion API
```

The addition of Ad Manager option as the connection type is mainly to ease the user flow and save the hassle of constant to and fro from Meta to workflows. Below are the enlisted points on what efforts are minimised with the addition of it.

1. You can select the event type based on the campaign you want to send back CAPI to Meta. If your campaign objective is 'Website traffic' send a funnel event and if it's 'Lead generation' then send a lead event and for Click to direct ads select Instagram DM.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155051770827/original/rHgIqdAq4nGMsHDtrRcIuYzZueL9DcnATw.png?1755497695)
2. All the pixels that are part of Ad Manager will be pre-populated as the dropdown items giving you an option to select one from it. This saves you from the hassle of going back to Meta and copy/paste the Pixel ID.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155037642910/original/r6PKw2USmYvjpzah_TJZiuYisNbIbeB78w.png?1733220060)
3. There is no need to generate and then add the access token to CAPI action when under Ad Manager connection type, we take care of it to again help you with the to and fro.
4. Stage name in a Lead Event refers to: It should accurately represent your Pipeline and Pipeline Stage name for better reporting. Select it using the tag icon at the end to add the custom value of the opportunity pipeline and stages.

* * *

## **Can I use the offline events with trigger names like 'Call', 'opportunity change status', 'tag', etc. with Meta Conversion API action?**

Yes, it is possible to do so and we will be using the last possible pixel data to send this event. Basically, if the fbclid id is found, the data will be sent to conversion API. It can be best explained by the following examples:

**Example 1:**

Contact created Facebook form submission, thus first attribution source will be Paid Social (Facebook).  If you use workflow with Facebook form submitted trigger, the contact will have fbclid and workflow will send data to conversion API (CAPI).

Additional Behaviour -

After sometime that contact got converted to opportunity with add/update opportunity trigger addition, you use opportunity status trigger in workflow to send the data to conversion api as contact from Facebook form submitted will pass fbclid.

**Example 2:**

Contact created google ad, organic google search or direct traffic,, thus first attribution source will be Paid Search (Google) or Direct Traffic. If the contact after certain time interacted with Facebook form and they fill the form, the latest attribution will be Paid Social(Facebook) with contact having fbclid. Now, if the agency runs workflow with Facebook form submitted > Meta conversion API, it will send the data to conversion API with fbclid.

Additional Behaviour -

After sometime that contact got converted to opportunity with add/update opportunity trigger addition, you use opportunity status trigger in workflow to send the data to conversion api as contact from Facebook form submitted will pass fbclid.

* * *

**Please Note:**

**Addition of Custom Values -**

Similar to Google Ads, we are now allowing custom mapping for Facebook Ads conversion tracking parameters.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043836459/original/gFVWuYxc77LoQwMEWkY0p_spdSoyA3QWZQ.jpeg?1742815441)

**How It Works:**

By default, custom mapping is disabled.

Users can toggle it on to enable custom mapping.

When enabled, users can map:

1\. FBCLID for funnel events.

2\. Facebook Lead ID for lead events.

3\. If custom mapping fields are provided, they will take priority over system defaults.

4\. If left empty, the system will continue using its default internal values.

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

- [How to send the Conversion data to Ad Manager?](https://help.gohighlevel.com/support/solutions/articles/155000002478-how-to-send-the-conversion-data-to-ad-manager-)
- [How to send a Meta Conversion API action for Ad Manager?](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-)

## Related Articles

- [Facebook Conversion Leads Walkthrough](https://help.gohighlevel.com/support/solutions/articles/48001233833-facebook-conversion-leads-walkthrough)
- [How to send the Conversion data to Ad Manager?](https://help.gohighlevel.com/support/solutions/articles/155000002478-how-to-send-the-conversion-data-to-ad-manager-)
- [How to set up a Funnel Event Pixel for Facebook Conversion API?](https://help.gohighlevel.com/support/solutions/articles/48001236281-how-to-set-up-a-funnel-event-pixel-for-facebook-conversion-api-)
- [How to Create a Meta Click to Direct(CTX )Ad for Engagement](https://help.gohighlevel.com/support/solutions/articles/155000004717-how-to-create-a-meta-click-to-direct-ctx-ad-for-engagement)
- [Facebook Conversions API Trigger in Workflows](https://help.gohighlevel.com/support/solutions/articles/48001185099-facebook-conversions-api-trigger-in-workflows)
- [Overview of Ad Manager Settings](https://help.gohighlevel.com/support/solutions/articles/155000003051-overview-of-ad-manager-settings)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003691-how-to-send-a-meta-conversion-api-action-for-ad-manager-/hit)