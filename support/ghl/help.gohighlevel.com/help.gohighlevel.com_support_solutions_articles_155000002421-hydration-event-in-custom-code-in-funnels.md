---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002421-hydration-event-in-custom-code-in-funnels"
title: " Hydration event in custom code in Funnels : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002421-hydration-event-in-custom-code-in-funnels#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Funnels and Websites](https://help.gohighlevel.com/support/solutions/folders/48000666011)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002421-hydration-event-in-custom-code-in-funnels#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Funnels and Websites](https://help.gohighlevel.com/support/solutions/folders/48000666011)
6. Hydration event in custom code in Funnels

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

# Hydration event in custom code in Funnels

Modified on: Wed, 15 May, 2024 at 9:13 AM

A new custom event `hydrationDone` has been introduced in the preview. This event will be dispatched when the funnel/website preview has completed its hydration so a user can run specific custom code post hydration.

**Why this is needed?**

Previously, users might have faced issues where their custom scripts would execute before our preview hydration had completed. This timing mismatch could lead to incorrect execution flow and hinder the intended functionality of their custom code.

**How did we solve this?**

1. By dispatching the 'hydrationDone' event after complete hydration of the preview is completed, we've effectively eliminated this source of contention.
2. Users can add an event listener on the `hydrationDone` event and execute their following code. This is especially useful if they are trying to manipulate DOM content.

**How to use?**

- Add a code element in the builder
- Listen the `hydrationDone` event like below

```
 document.addEventListener(
  "hydrationDone",
  () => {
     // Add custom javascript here
})
```

- Once the preview DOM content is loaded and hydration event is received, the custom code will run without any issue or race condition.

**_Note_** _: Optimise javascript may need to be disabled if user's custom code is critical on page load, as it delays the hydration event if there is no user interaction._

_This is how your custom Javascript/ HTML should look like:_

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155026075581/original/JUAS8WOxjL8rYexXLNPsz4ITdqJTBToK8A.png?1715782328)_

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

- [Two-Step Order Form (Step 2: Adding An Up-Sell Product)](https://help.gohighlevel.com/support/solutions/articles/48000980306-two-step-order-form-step-2-adding-an-up-sell-product-)
- [Two-Step Order Form (Step 1)](https://help.gohighlevel.com/support/solutions/articles/48000980307-two-step-order-form-step-1-)
- [Style the Funnel](https://help.gohighlevel.com/support/solutions/articles/48000980309-style-the-funnel)
- [Desktop View VS Mobile View (Funnels)](https://help.gohighlevel.com/support/solutions/articles/48000980310-desktop-view-vs-mobile-view-funnels-)
- [Tracking Scripts/Pixel Code](https://help.gohighlevel.com/support/solutions/articles/48000980311-tracking-scripts-pixel-code)
- [SEO Meta Data](https://help.gohighlevel.com/support/solutions/articles/48000980312-seo-meta-data)

## Related Articles

- [FAQs, Basic Troubleshooting - Funnels, Websites, Webinars](https://help.gohighlevel.com/support/solutions/articles/155000004983-faqs-basic-troubleshooting-funnels-websites-webinars)
- [Track Chat Widget Activity Using Google Analytics 4 (GA4)](https://help.gohighlevel.com/support/solutions/articles/155000002178-track-chat-widget-activity-using-google-analytics-4-ga4-)
- [Developer Guide for selling Web-Widgets on the App Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000003915-developer-guide-for-selling-web-widgets-on-the-app-marketplace)
- [Adding Custom CSS/JS in community group](https://help.gohighlevel.com/support/solutions/articles/155000002165-adding-custom-css-js-in-community-group)
- [CRM Loading States: Troubleshooting lags and Impact of Custom CSS and JS](https://help.gohighlevel.com/support/solutions/articles/48001176375-crm-loading-states-troubleshooting-lags-and-impact-of-custom-css-and-js)
- [Unlocking Customization: Enhancing Marketplace Apps with Custom JavaScript](https://help.gohighlevel.com/support/solutions/articles/155000003278-unlocking-customization-enhancing-marketplace-apps-with-custom-javascript)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002421-hydration-event-in-custom-code-in-funnels)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002421-hydration-event-in-custom-code-in-funnels/hit)