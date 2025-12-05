---
url: "https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/"
title: "Zapier Guide | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/#content)

[![WP Fusion Logo](https://wpfusion.com/wp-content/uploads/2019/08/logo-top-svg.svg)](https://wpfusion.com/)

- [Features](https://wpfusion.com/features/)
  - [Features](https://wpfusion.com/features/)
  - [About Us](https://wpfusion.com/about-us/)
  - [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
  - [Addons](https://wpfusion.com/documentation/#addons)
  - [Enhanced Ecommerce](https://wpfusion.com/features/enhanced-ecommerce/)
  - [Event Tracking](https://wpfusion.com/features/event-tracking/)
  - [Recipes and Ideas](https://wpfusion.com/recipes-and-ideas/)
- [Pricing](https://wpfusion.com/pricing/)
  - [Pricing](https://wpfusion.com/pricing/)
  - [Lifetime Pricing](https://wpfusion.com/pricing-lifetime/)
  - [Free Download](https://wpfusion.com/free-download/)
- [Get Help](https://wpfusion.com/documentation/)
  - [Documentation](https://wpfusion.com/documentation/)
  - [Free Consultation](https://wpfusion.com/free-consultation/)
  - [Recommended Tools](https://wpfusion.com/recommends/)
  - [Videos and Demos](https://wpfusion.com/videos/)
  - [Feature Requests](https://wpfusion.com/feature-requests/)
  - [Roadmap](https://wpfusion.com/roadmap/)
  - [Contact Us](https://wpfusion.com/contact/)
  - [Find an Expert](https://wpfusion.com/experts/)
- [Blog](https://wpfusion.com/blog/)
- [Account](https://wpfusion.com/login/)

- [Features](https://wpfusion.com/features/)
  - [Features](https://wpfusion.com/features/)
  - [About Us](https://wpfusion.com/about-us/)
  - [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
  - [Addons](https://wpfusion.com/documentation/#addons)
  - [Enhanced Ecommerce](https://wpfusion.com/features/enhanced-ecommerce/)
  - [Event Tracking](https://wpfusion.com/features/event-tracking/)
  - [Recipes and Ideas](https://wpfusion.com/recipes-and-ideas/)
- [Pricing](https://wpfusion.com/pricing/)
  - [Pricing](https://wpfusion.com/pricing/)
  - [Lifetime Pricing](https://wpfusion.com/pricing-lifetime/)
  - [Free Download](https://wpfusion.com/free-download/)
- [Get Help](https://wpfusion.com/documentation/)
  - [Documentation](https://wpfusion.com/documentation/)
  - [Free Consultation](https://wpfusion.com/free-consultation/)
  - [Recommended Tools](https://wpfusion.com/recommends/)
  - [Videos and Demos](https://wpfusion.com/videos/)
  - [Feature Requests](https://wpfusion.com/feature-requests/)
  - [Roadmap](https://wpfusion.com/roadmap/)
  - [Contact Us](https://wpfusion.com/contact/)
  - [Find an Expert](https://wpfusion.com/experts/)
- [Blog](https://wpfusion.com/blog/)
- [Account](https://wpfusion.com/login/)

# Zapier Guide

- Published onDecember 22, 2018
- Last updated on December 22, 2018

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks (Zapier)](https://wpfusion.com/documentation/#webhooks-zapier)
- /
- Zapier Guide

### [\#](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/\#overview) Overview

Using this addon with Zapier allows you to trigger Zaps when users register on your site, update their profile, or when a tag is applied or removed.

For an example we’ll set up a workflow that triggers an on-site message in Intercom when someone completes a course.

### [\#](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/\#setup) Setup

Navigate to Settings » WP Fusion and click on the webhooks tab to access the webhooks list. Click “Add New” to create a new webhook.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-7-1024x773.jpg)

For the trigger select Tags Applied, and in the tag selection box select the tag that will be applied when the course is completed. For the Post Fields you’ll want to enable at least _user\_email_ so the user can be identified in Intercom.

Then head over to Zapier and create a new Zap. For the trigger select Webhooks.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-3-1024x697.jpg)

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-4-1024x706.jpg)

For the trigger type, select Catch Hook, and click Save + Continue.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-5-1024x618.jpg)

Zapier will give you a unique URL to use for your webhook. Copy this URL into the Delivery URL field in the webhook settings, and click the Send Test button. Then switch back to Zapier and click “Ok, I did this”.

On the next page you should see your incoming webhook listed, and you can expand it to see all of the data that was captured. If everything looks right, proceed to the next step.

#### [\#](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/\#actions) Actions

Now that the data is set up to be captured, you can use that data in any Zapier action. Here we’ve created a “Incoming Message” action in Intercom, which uses the data from the webhook to target the user and personalize the message.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-8-1024x677.jpg)

You can use the “Insert A Field” button to insert any dynamic data from the webhook.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-6-1024x438.jpg)

Above is another example, sending a direct message in Slack when a webhook has been received. If you use Slack to support your membership community you could use this to automatically congratulate members in a Slack channel when they reach goals on your website.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Plus

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/#overview)
- [Setup](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/#setup)
- [Actions](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/#actions)

### In this chapter

- [Overview](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/ "Overview")
- [Zapier Guide](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/ "Zapier Guide")
- [Changelog](https://wpfusion.com/documentation/webhooks-zapier/webhooks-changelog/ "Changelog")

MarkCreated with Sketch.

#### WP Fusion

[Home](https://wpfusion.com/)

[Features](https://wpfusion.com/features/)

[Pricing](https://wpfusion.com/pricing/)

[Testimonials](https://wpfusion.com/testimonials/)

[Affiliates](https://wpfusion.com/affiliate-registration/)

[Try Demo](https://wpfusion.com/demo-signup/)

#### Learn

[Blog](https://wpfusion.com/blog/)

[Getting Started](https://wpfusion.com/documentation/)

[Shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/)

[Videos and Demos](https://wpfusion.com/videos/)

[Supported CRMs](https://wpfusion.com/documentation/faq/crm-compatibility-table/)

[Plugin Integrations](https://wpfusion.com/documentation/#integrations)

#### Support

[Contact Support](https://wpfusion.com/contact/)

[Documentation](https://wpfusion.com/documentation/)

[Frequently Asked Questions](https://wpfusion.com/documentation/)

[Developers](https://wpfusion.com/documentation/#developer-guides)

[Changelog](https://wpfusion.com/documentation/faq/changelog/)

#### Company

[About Us](https://wpfusion.com/about-us/)

[Contact](https://wpfusion.com/contact/)

[Brand Assets](https://wpfusion.com/brand-assets/)

[Terms and Conditions](https://wpfusion.com/terms-conditions/)

[Privacy Policy](https://wpfusion.com/privacy-policy/)

[Information Security Policy](https://wpfusion.com/information-security-policy/)

[![Very Good Plugins LLC Logo](https://wpfusion.com/wp-content/uploads/2019/08/vgp-logo.png)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)