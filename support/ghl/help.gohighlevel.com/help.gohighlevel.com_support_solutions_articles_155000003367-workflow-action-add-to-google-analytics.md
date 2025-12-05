---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics"
title: " Workflow Action - Add To Google Analytics : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Integrations Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000810)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Integrations Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000000810)
6. Workflow Action - Add To Google Analytics

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

# Workflow Action - Add To Google Analytics

Modified on: Mon, 24 Feb, 2025 at 10:16 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#Action-Description)
- [Action Details](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#Action-Details)
  - [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#Example)
- [Suggested Triggers](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#Suggested-Triggers)
- [Additional Notes](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics#Additional-Notes)

## Overview

The " **Google Analytics**" action allows you to fire a custom event in your Google Analytics (GA) account. This action supports Google Analytics 4 (GA4) and Universal Analytics (UA). It can be used to track specific user interactions or behaviours on your website or app in GA for better insights.

## Action Name

**Google Analytics**

## Action Description

This action enables you to send custom events directly to Google Analytics (GA4 or UA) by specifying details like the Measurement ID, Event Name, API Secret, and Event Value.

## Action Details

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032467697/original/EPGRuaUplacZu8Hmn3TIPtOaMraBVEhRcg.png?1725821507)

### How to Configure

1. **Action Name**: Set the name of the action (e.g., "Add to Google Analytics").
2. **Action Type**: Select either "Google Analytics 4" or "Universal Analytics" based on your setup.
3. **Measurement ID**: Enter the Measurement ID for your GA4 property.
4. **Event Name**: Specify the event name that will appear in GA4/UA (e.g., "purchase", "page\_view"). [Refer here for the event naming rules by google](https://support.google.com/analytics/answer/13316687?hl=en)
5. **API Secret**: Input the API secret from your GA4 setup to securely send event data.
6. **Event Value**: Optionally, pass a value related to the event, like revenue or clicks.

|     |     |     |
| --- | --- | --- |
| Field Name | Description | Mandatory |
| Measurement ID | The unique ID for your Google Analytics property in GA4 | Yes |
| Event Name | The name of the event you want to trigger in GA4 or UA | Yes |
| API Secret | A secret key generated in Google Analytics to send data securely | Yes |
| Event Value | The value or parameter you want to pass along with the event | No |

## Example

You can use this action to track when a user completes a form submission on your website by firing a "Form Submitted" event in Google Analytics. The Measurement ID will link the event to the correct property, and the API secret ensures the data is securely transmitted.

## Suggested Triggers

- **Form Submission**: Trigger this action when a form on your website is submitted, sending event data to GA.
- **Page Visit**: Trigger the event when a user visits a specific page, like a product page, to track user behavior.
- **Tag Added**: When a user tag is added (e.g., "New Lead"), this action could send an event to GA tracking that change.
- **Appointment Booked**: Fire an event when a user books an appointment to track how many appointments are made through your system.
- **Product Purchase**: Trigger this action when a product is purchased and send relevant information to Google Analytics (e.g., purchase value).

## Additional Notes

- Make sure that Google Analytics is correctly configured in your system before using this action.
- Events sent to Google Analytics can be used for reporting, segmentation, and marketing automation.
- Ensure that the Measurement ID and API secret are accurate for successful event tracking.

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

- [Workflow Action - Google Sheets](https://help.gohighlevel.com/support/solutions/articles/155000003294-workflow-action-google-sheets)
- [Workflow Action - Custom Code](https://help.gohighlevel.com/support/solutions/articles/155000003362-workflow-action-custom-code)
- [Workflow Action - Add To Google Analytics](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics)
- [Workflow Action - Add To Google AdWords](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords)

## Related Articles

- [How to send data to Google Analytics within a Workflow](https://help.gohighlevel.com/support/solutions/articles/48001223243-how-to-send-data-to-google-analytics-within-a-workflow)
- [What Are Workflow Actions? (Complete List)](https://help.gohighlevel.com/support/solutions/articles/155000002294-what-are-workflow-actions-complete-list-)
- [Workflow Action - Webhook (Outbound)](https://help.gohighlevel.com/support/solutions/articles/155000003299-workflow-action-webhook-outbound-)
- [Workflows vs Campaigns/Triggers (Deprecated features)](https://help.gohighlevel.com/support/solutions/articles/48001229927-workflows-vs-campaigns-triggers-deprecated-features-)
- [Google Analytics 4 Tracking](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking)
- [Social Planner - Discover Trends with Social Listening](https://help.gohighlevel.com/support/solutions/articles/155000006434-social-planner-discover-trends-with-social-listening)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics/hit)