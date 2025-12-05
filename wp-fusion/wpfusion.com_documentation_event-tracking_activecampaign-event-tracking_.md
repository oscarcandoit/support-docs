---
url: "https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/"
title: "ActiveCampaign Event Tracking | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/#content)

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

# ActiveCampaign Event Tracking

- Published onDecember 1, 2021
- Last updated on August 8, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Event Tracking](https://wpfusion.com/documentation/#event-tracking)
- /
- ActiveCampaign Event Tracking

### [\#](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/\#overview) Overview

Using WP Fusion you can track events from supported plugins in [ActiveCampaign](https://wpfusion.com/go/activecampaign).

For an overview of event tracking in ActiveCampaign in general, see [this link](https://www.activecampaign.com/marketing-automation/site-event-tracking).

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

### [\#](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/\#setup) Setup

To use event tracking in ActiveCampaign, it must first be [enabled in your account](https://help.activecampaign.com/hc/en-us/articles/221870128-An-overview-of-Event-Tracking#turning-event-tracking-on).

[![Enable event tracking in ActiveCampaign](https://wpfusion.com/wp-content/uploads/2021/12/event-tracking-enable-in-ac-1024x591.png)](https://wpfusion.com/wp-content/uploads/2021/12/event-tracking-enable-in-ac.png) Event tracking in ActiveCampaign must be enabled before it can be used.

Head to Settings » Tracking, and click the toggle next to Event Tracking to enable it.

**Note:** After enabling Event Tracking, ActiveCampaign will display your Event Key. You don’t need this for WP Fusion, it’s only used when tracking events using custom code.

### [\#](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/\#how-it-works) How it works

When an event is tracked in a supported plugin, it will be recorded to the [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/), and sent to the corresponding person’s contact record in ActiveCampaign.

Tracked events will then show up in that contact’s Activity timeline, on the right side of their contact record.

**Heads up:** ActiveCampaign only accepts alphanumeric characters, spaces, dashes, and underscores in event names. Any other special characters will be removed automatically by WP Fusion.

As an example:

- _Purchase – Membership_ = Good ✅
- _Purchase: Membership (Gold)_ = Will be changed to _Purchase Membership Gold_

### [\#](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/\#how-it-looks) How it looks

Events are displayed on the Recent Activities timeline on the right side of the contact record.

[![ActiveCampaign event tracking](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-gravity-forms-entries-activecampaign-1024x689.png)](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-gravity-forms-entries-activecampaign.png) Events tracked by WP Fusion show up in the Activity timeline to the right of the contact record. In this case, we see two Gravity Form submissions.[![Event Tracking Course Progress](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-activecampaign-1024x662.jpg)](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-activecampaign.jpg) In this example we can see course progress from a LearnDash course being tracked via events.

Events can also trigger automations. In this case we have an automation that’s triggered when a quiz is passed with a grade of 75% or higher.

[![](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-ac-triggers-1024x667.jpg)](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-ac-triggers.jpg) Events can be used as automation triggers, optionally with event values

And events can be used as conditions in automations. This is especially powerful because you can perform logic on how many _times_ the event has happened for that contact.

[![](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-conditions-1024x571.jpg)](https://wpfusion.com/wp-content/uploads/2021/11/event-tracking-conditions.jpg) Events can be used in conditions in automations

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

- [Overview](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/#overview)
- [Setup](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/#setup)
- [How it works](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/#how-it-works)
- [How it looks](https://wpfusion.com/documentation/event-tracking/activecampaign-event-tracking/#how-it-looks)

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

[![Very Good Plugins LLC Logo](https://wpfusion.com/wp-content/uploads/2019/08/vgp-logo.png)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)