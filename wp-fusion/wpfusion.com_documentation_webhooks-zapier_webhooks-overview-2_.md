---
url: "https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/"
title: "Overview | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/#content)

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

# Overview

- Published onDecember 22, 2018
- Last updated on November 25, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Webhooks (Zapier)](https://wpfusion.com/documentation/#webhooks-zapier)
- /
- Overview

### [\#](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/\#overview) Overview

**Note:** This addon plugin is still available but is no longer being actively developed, as in most cases it’s simpler and more effective to connect your CRM or email marketing platform to Zapier or other webhook services directly.

The Webhooks addon (or “Zapier addon”) allows you to ping a third party URL when events happen in WP Fusion, similar to [WooCommerce’s webhooks](https://docs.woocommerce.com/document/webhooks/). This is advanced functionality, so if you’re not sure if you need it, you probably don’t.

We advise you to keep as much of your automation rules and sequences in your CRM as you can, but sometimes that’s not possible and in those cases this addon can fill the gap.

![](https://wpfusion.com/wp-content/uploads/2018/12/webhooks-1-1024x669.jpg)

The available triggers are:

- User registered
- Profile updated
- Tags applied (can specify which tags)
- Tags removed (can specify which tags)
- Tags modified
- Form submitted

The available fields are any fields in the `wp_usermeta` table, as well as the user’s contact ID and tags.

When using the _Form Submitted_ trigger any data submitted with the form will be included in the webhook payload.

### [\#](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/\#how-it-works) How it works

When the selected event is triggered, the enabled fields will be extracted from the database and sent to your selected webhook URL.

Note that the only data that can be synced is data attached to the current logged in user in the `wp_usermeta` table of your database.

#### [\#](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/\#how-it-works-form-submitted) How it works – Form submitted

The Form Submitted trigger is a bit different in that it pings your webhook URL with the same data that WP Fusion has just sent to your connected CRM. This is the only trigger that works with visitors who aren’t logged in to your site.

### [\#](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/\#supported-services) Supported services

#### [\#](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/\#with-zapier) With Zapier

Using this addon allows you to trigger Zaps when users register on your site, update their profile, or when a tag is applied or removed.

An example use case is someone who is using Ontraport as their primary tool for CRM and marketing automation, but wants to trigger an on-site message in Intercom when a course is completed. For a walkthrough on that scenario, check out [our Zapier guide](https://wpfusion.com/documentation/webhooks-zapier/zapier-guide/).

Because the data is sent from WordPress _to_ Zapier, the Zaps are processed instantly, which means this tool can be used effectively even with a free Zapier account.

#### [\#](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/\#with-zoho-flow) With Zoho Flow

Zoho Flow can also capture the incoming data and route it across the various Zoho apps. This lets you update invoices, companies, leads, and other objects in Zoho that would normally be inaccessible to WP Fusion.

#### [\#](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/\#with-other-services) With other services

This addon can be used with any service that can capture an incoming webhook, like [IFTTT](https://ifttt.com/), [Automate.io](https://automate.io/), or even your own custom script or application.

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

- [Overview](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/#overview)
- [How it works](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/#how-it-works)
- [How it works - Form submitted](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/#how-it-works-form-submitted)
- [Supported services](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/#supported-services)
- [With Zapier](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/#with-zapier)
- [With Zoho Flow](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/#with-zoho-flow)
- [With other services](https://wpfusion.com/documentation/webhooks-zapier/webhooks-overview-2/#with-other-services)

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