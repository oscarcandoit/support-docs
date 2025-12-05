---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002178,"
title: " How to Track Chat Widget Activity Using Google Analytics 4 : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002178,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Chat Widget](https://help.gohighlevel.com/support/solutions/folders/48000667019)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002178,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Chat Widget](https://help.gohighlevel.com/support/solutions/folders/48000667019)
6. Track Chat Widget Activity Using Google Analytics 4 (GA4)

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

# Track Chat Widget Activity Using Google Analytics 4 (GA4)

Modified on: Thu, 29 May, 2025 at 7:45 AM

This article provides guidance on integrating HighLevel's Chat Widget with Google Analytics 4 to monitor user interactions effectively across funnel steps, website pages, Wordpress websites and any other integration like Shopify, Wix or Squarespace.

* * *

**TABLE OF CONTENTS**

- [What is Chat Widget GA4 Tracking?](https://help.gohighlevel.com/support/solutions/articles/155000002178,#What-is-Chat-Widget-GA4-Tracking?)
- [Key Benefits of GA4 Tracking for Chat Widget](https://help.gohighlevel.com/support/solutions/articles/155000002178,#Key-Benefits-of-GA4-Tracking-for-Chat-Widget)
- [Integrate Chat Widget with GA4 Tracking](https://help.gohighlevel.com/support/solutions/articles/155000002178,#Integrate-Chat-Widget-with-GA4-Tracking)
- [GA4 Tracking Events Captured by the Chat Widget](https://help.gohighlevel.com/support/solutions/articles/155000002178,#GA4-Tracking-Events-Captured-by-the-Chat-Widget)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000002178,#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000002178,#Related-Articles)

* * *

# **What is Chat Widget GA4 Tracking?**

HighLevel's Chat Widget can be embedded across various platforms, including funnels, websites, and WordPress sites.By integrating GA4 (Google Analytics), you can track user interactions with the Chat Widget, enabling better insights into user behavior and engagement.

* * *

## **Key Benefits of GA4 Tracking for Chat Widget**

- **Enhanced User Insights**: Monitor how users interact with the Chat Widget to optimize engagement strategies.

- **Performance Monitoring**: Identify and address potential issues in the chat experience.

- **Data-Driven Decisions**: Leverage analytics to make informed decisions about chat functionalities.

- **Seamless Integration**: Combine Chat Widget and GA4 scripts without conflicts.


* * *

## **Integrate Chat Widget with GA4 Tracking**

Make sure Google Analytics 4 (GA4) is already installed on the site or funnel where your Chat Widget will appear. No additional configuration is required for the Chat Widget to send events to GA4.

- This applies to all platforms — including HighLevel sites, funnels, WordPress, Wix, Shopify, and others.

- You do not need to install GA4 separately for the widget to work.


Follow this structured setup to install GA4 tracking, embed the chat widget, and begin capturing custom analytics events related to widget usage.

### **1\. Add GA4 Global Site Tag**

Embed the following code in the <head> section of your webpage or in a GTM Custom HTML tag.

```html

```

HTML

Key Notes:

- This script loads the GA4 library and initializes it using your GA4 measurement ID: your-GA-code.

- dataLayer is used for storing events and sending them to GA4.


### **2\. Embed the Chat Widget**

Insert this snippet in the <body> section of your site to load the chat widget.

```html

```

HTML

Click on the "Get Code" button, then navigate to "Via GTM" section to find this snippet.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155047390964/original/wGXYrIMAkpOB10M7HGPU7l97_S-Zyds_4A.png?1748459488)

Attributes Breakdown:

- data-widget-id: Unique identifier for the widget.

- data-location-id: Corresponds to your business/location.


### **3\. Add GA4 Custom Event Tracking Script**

Paste this script below your chat widget embed to enable event tracking for widget interactions.

```html

```

HTML

* * *

## **Event Reference for GA4**

Understanding what each event tracks helps you validate and use the data more effectively in GA4.

|     |     |     |     |
| --- | --- | --- | --- |
| **Event Name** | **Trigger Condition** | **Category** | **Label** |
| widget-open | When the widget is opened | Live Chat | Widget Open |
| widget-close | When the widget is closed | Live Chat | Widget Close |
| form-submit | When a chat form is submitted | Live Chat | Form Submitted |

* * *

## **Testing & Debugging Tips**

Use these techniques to confirm your event tracking is correctly set up and working in real time.

1. **Google Tag Assistant Extension**: Monitor events as you interact with the widget.

2. **GA4 DebugView**: Track real-time events in your Google Analytics dashboard.

3. **Network Logs**: Use browser DevTools → Network tab to verify event payloads.

4. **Live Test**: Open, close, and submit the chat form to validate the respective events.


* * *

## **Frequently Asked Questions**

**Q:  Will this track users across all pages?**

**Yes, as long as the widget and tracking script are embedded on those pages.**

**Q: Can I customize the events tracked by the Chat Widget?**

**Currently, the Chat Widget tracks a predefined set of events. Custom event tracking is not supported.**

**Q: Where can I view the Chat Widget events in GA4?**

**Navigate to the "Events" section in your GA4 property to view the tracked Chat Widget events.**

* * *

## **Related Articles**

- **[How to Install HighLevel's Chat Widget](https://help.gohighlevel.com/en/support/solutions/articles/48000984860)**

- **[Google Analytics 4 Tracking](https://help.gohighlevel.com/en/support/solutions/articles/48001234199)**

- **[Getting Started with Chat Widget](https://help.gohighlevel.com/en/support/solutions/articles/155000004102)**


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

- [Getting Started with Chat Widget](https://help.gohighlevel.com/support/solutions/articles/155000004102-getting-started-with-chat-widget)
- [Overview of Chat Widget Customizations](https://help.gohighlevel.com/support/solutions/articles/155000002960-overview-of-chat-widget-customizations)
- [Chat Widget - Business Office Hours in Live Chat](https://help.gohighlevel.com/support/solutions/articles/155000004104-chat-widget-business-office-hours-in-live-chat)
- [Chat Widget - Send your leads to Whatsapp Chat](https://help.gohighlevel.com/support/solutions/articles/155000002269-chat-widget-send-your-leads-to-whatsapp-chat)
- [How to Install HighLevel's Chat Widget](https://help.gohighlevel.com/support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget)
- [How To Automatically Add Email Addresses & Phone Numbers From FB Chat Into Contact Record](https://help.gohighlevel.com/support/solutions/articles/48001173609-how-to-automatically-add-email-addresses-phone-numbers-from-fb-chat-into-contact-record)

## Related Articles

- [Collect Visitor Details Before Live Chat Starts](https://help.gohighlevel.com/support/solutions/articles/155000005415-collect-visitor-details-before-live-chat-starts)
- [Workflow Action - Add To Google Analytics](https://help.gohighlevel.com/support/solutions/articles/155000003367-workflow-action-add-to-google-analytics)
- [Google Analytics 4 Tracking](https://help.gohighlevel.com/support/solutions/articles/48001234199-google-analytics-4-tracking)
- [How to record Pageviews into Google Analytics for Funnels/Websites (GA4)](https://help.gohighlevel.com/support/solutions/articles/48001219725-how-to-record-pageviews-into-google-analytics-for-funnels-websites-ga4-)
- [Get Discovered: The Real Estate Agent's Guide to Dominating Google Search](https://help.gohighlevel.com/support/solutions/articles/155000005037-get-discovered-the-real-estate-agent-s-guide-to-dominating-google-search)
- [Getting Started with Chat Widget](https://help.gohighlevel.com/support/solutions/articles/155000004102-getting-started-with-chat-widget)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002178,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002178-track-chat-widget-activity-using-google-analytics-4-ga4-/hit)