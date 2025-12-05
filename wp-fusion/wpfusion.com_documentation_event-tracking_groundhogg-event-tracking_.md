---
url: "https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/"
title: "Groundhogg Event Tracking | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/#content)

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

# Groundhogg Event Tracking

- Published onNovember 22, 2021
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Event Tracking](https://wpfusion.com/documentation/#event-tracking)
- /
- Groundhogg Event Tracking

### [\#](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/\#overview) Overview

Using WP Fusion you can track events from supported plugins in [Groundhogg](https://wpfusion.com/go/groundhogg), either on the same site, or on a remote site [over the REST API](https://wpfusion.com/documentation/installation-guides/how-to-connect-groundhogg-rest-api-to-wordpress/).

The Event Tracking addon currently supports the following plugins:

- [AffiliateWP](https://wpfusion.com/documentation/affiliates/affiliate-wp/#event-tracking)
- [bbPress (and BuddyBoss / BuddyPress forums)](https://wpfusion.com/documentation/forums/bbpress/#event-tracking)
- [BuddyPress / BuddyBoss](https://wpfusion.com/documentation/membership/buddypress/#event-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#event-tracking)
- [EDD Software Licensing](https://wpfusion.com/documentation/ecommerce/edd-software-licensing/#event-tracking)
- [Gamipress](https://wpfusion.com/documentation/gamification/gamipress#event-tracking)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#event-tracking)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#event-tracking)
- [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#event-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#event-tracking)
- [Presto Player](https://wpfusion.com/documentation/other/presto-player#event-tracking)
- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#event-tracking)
- [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#event-tracking)
- [WP Fusion’s Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#event-tracking)

### [\#](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/\#how-it-works) How it works

When an event is tracked in a supported plugin, it will be recorded to the [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/), and sent to the corresponding person’s contact record in Groundhogg CRM.

Tracked events will then show up in that contact’s Activity timeline, under the WP Fusion activity type.

#### [\#](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/\#using-events-in-benchmarks) Using events in benchmarks

Using the [Advanced Features addon for Groundhogg](https://wpfusion.com/go/groundhogg-advanced-features), you can trigger benchmarks based on custom events sent by WP Fusion. To set this up, first add a Custom Activity benchmark to your funnel.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20515'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2021/11/groundhogg-custom-activity-trigger-scaled.jpg)

For the type of activity, enter `wp_fusion`.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20325'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2021/11/groundhogg-event-trigger-benchmark.jpg)

You can optionally filter the trigger by the `event_name` and `event_value` parameters. These will match the Event Name and Event Values you set when configuring your events [in the WP Fusion settings](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/).

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20304'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2021/11/groundhogg-custom-activity-in-timeline-scaled.jpg) Custom activity benchmarks triggered by WP Fusion will be displayed in the contact’s timeline.

Using events in benchmarks from Very Good Plugins on Vimeo

### [\#](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/\#how-it-looks) How it looks

Events are displayed on the Activity timeline on Groundhogg contact records.

[![Groundhogg event tracking](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20516'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-groundhogg.png) Events tracked by WP Fusion are shown on the Activity timeline on each person’s Groundhogg contact record.

Events can also be used as benchmarks or conditions, including the number of times the event happened, and the time period.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20455'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-groundhogg-2.png)

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

- [Overview](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/#overview)
- [How it works](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/#how-it-works)
- [Using events in benchmarks](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/#using-events-in-benchmarks)
- [How it looks](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/#how-it-looks)

### You may also like

[![2527747 groundhoggreviewcopy 011425](https://wpfusion.com/wp-content/uploads/2024/12/2527747_GroundhoggReviewCopy_011425-300x158.jpg)](https://wpfusion.com/reviews/groundhogg-crm-marketing-automation-review/)

Reviews

![Sufia Banu](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3E%3C/svg%3E)

#### [Groundhogg Review: Is this the Best CRM & Marketing Automation For WordPress? (Find Out)](https://wpfusion.com/reviews/groundhogg-crm-marketing-automation-review/)

Groundhogg stands out as a top-tier CRM and marketing automation tool for WordPress. Learn about its robust set of features, pricing, and how its seamless WP Fusion integration can transform your WordPress site’s marketing capabilities.

### In this chapter

- [Event Tracking Overview](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/ "Event Tracking Overview")
- [ActiveCampaign Event Tracking](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/ "ActiveCampaign Event Tracking")
- [Bento Event Tracking](https://wpfusion.com/documentation/event-tracking/bento-event-tracking/ "Bento Event Tracking")
- [Brevo Event Tracking](https://wpfusion.com/documentation/event-tracking/brevo-event-tracking/ "Brevo Event Tracking")
- [Customer.io Event Tracking](https://wpfusion.com/documentation/event-tracking/customer-io-event-tracking/ "Customer.io Event Tracking")
- [Drip Event Tracking](https://wpfusion.com/documentation/event-tracking/drip-event-tracking/ "Drip Event Tracking")
- [Encharge Event Tracking](https://wpfusion.com/documentation/event-tracking/encharge-event-tracking/ "Encharge Event Tracking")
- [FluentCRM Event Tracking](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/ "FluentCRM Event Tracking")
- [Gist Event Tracking](https://wpfusion.com/documentation/event-tracking/gist-event-tracking/ "Gist Event Tracking")
- [Groundhogg Event Tracking](https://wpfusion.com/documentation/event-tracking/groundhogg-event-tracking/ "Groundhogg Event Tracking")
- [HubSpot Event Tracking](https://wpfusion.com/documentation/event-tracking/hubspot-event-tracking/ "HubSpot Event Tracking")
- [Intercom Event Tracking](https://wpfusion.com/documentation/event-tracking/intercom-event-tracking/ "Intercom Event Tracking")
- [Klaviyo Event Tracking](https://wpfusion.com/documentation/event-tracking/klaviyo-event-tracking/ "Klaviyo Event Tracking")
- [Mailchimp Event Tracking](https://wpfusion.com/documentation/event-tracking/mailchimp-event-tracking/ "Mailchimp Event Tracking")
- [Omnisend Event Tracking](https://wpfusion.com/documentation/event-tracking/omnisend-event-tracking/ "Omnisend Event Tracking")
- [Event Tracking Changelog](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/ "Event Tracking Changelog")

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

[![Very Good Plugins LLC Logo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3C/svg%3E)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)