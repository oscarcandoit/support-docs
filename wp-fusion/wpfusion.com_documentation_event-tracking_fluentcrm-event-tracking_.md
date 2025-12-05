---
url: "https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/"
title: "FluentCRM Event Tracking | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/#content)

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

# FluentCRM Event Tracking

- Published onNovember 20, 2023
- Last updated on August 8, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Event Tracking](https://wpfusion.com/documentation/#event-tracking)
- /
- FluentCRM Event Tracking

### [\#](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/\#overview) Overview

Using WP Fusion you can track events from supported plugins in [FluentCRM](https://wpfusion.com/go/fluentcrm), either on the same site, or on a remote site [over the REST API](https://wpfusion.com/plugin-updates/introducing-fluentcrm-rest-api/).

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

### [\#](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/\#how-it-works) How it works

When an event is tracked in a supported plugin, it will be recorded to the [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/), and sent to the corresponding person’s contact record in Fluent CRM.

Tracked events will then show up in that contact’s Activity timeline, under the WP Fusion activity type.

#### [\#](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/\#how-it-looks) How it looks

Events are displayed on the Activity timeline on FluentCRM contact records.

[![](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-event-tracking-new-1024x675.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-event-tracking-new-scaled.jpg) Events tracked by WP Fusion are displayed on the subscriber’s activity feed in FluentCRM.

Events can also be used as triggers for automations, including the number of times the event was performed.

[![](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-event-trigger-count-1024x634.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-event-trigger-count-scaled.jpg) This automation is triggered once the `logged-in` event has fired three times.

[This makes events ideal](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/#what-are-events) for tracking things that can happen multiple times, or over time, such as site logins, course progress, quiz attempts, and subscription status changes.

#### [\#](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/\#event-names) Event names

FluentCRM only stores the latest event for events with the same name. This is a clever implementation that reduces the size of your database for events where you only need to track the most recent activity.

For example if your event was called “User Login”, then each time a user logs in, the event will be updated in FluentCRM and appear at the top of the contact’s timeline, with their most recent login date. Previous logins will not be recorded or displayed.

[![screenshot](https://wpfusion.com/wp-content/uploads/2023/11/fcrm-event-tracking-unique-event-name-1024x576.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fcrm-event-tracking-unique-event-name.jpg) Adding a unique identifier to the event name will make FluentCRM record a new event every time it’s triggered by WP Fusion.

For example here, we’ve set the event name to `Placed order #{order:id}`. This will create a new event in FluentCRM for every order, and you will see the customer’s full order history in their event timeline.

[![screenshot](https://wpfusion.com/wp-content/uploads/2023/11/fcrm-non-unique-event-name-1024x472.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fcrm-non-unique-event-name.jpg) Using a non-unique event name will cause FluentCRM to only record the details from the most recent event.

But for order status changes, we don’t necessarily need to see every time it’s changed in the past, we just need the status change from the most recent order to trigger automations. By setting the event name to `Order Status Changed`, only the most recent event will be displayed on the contact’s activity timeline.

This reduces the size of your FluentCRM database and makes it easier to find important events in your contacts’ activity timeline.

### [\#](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/\#setup) Setup

To use event tracking, it first needs to be enabled in FluentCRM under the Addons tab. Event tracking is supported in the [free FluentCRM](https://wordpress.org/plugins/fluent-crm/) as well as [FluentCRM Pro](https://wpfusion.com/go/fluentcrm).

[![](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-enable-event-tracking-1024x603.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-enable-event-tracking.jpg)

Once event tracking is enabled, events are configured in WP Fusion. Events can be configured [either globally or on specific posts](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/#how-to-configure-events) (products, courses, etc).

Each event requires a title, and (optionally) one or more values. Events in FluentCRM are handled slightly differently depending on the number of key/value pairs they have.

#### [\#](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/\#single-key-events) Single key events

[![](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-single-key-event-1024x280.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-single-key-event.jpg)

In this example we’ve configured an event for [whenever a LearnDash quiz is completed](https://wpfusion.com/documentation/learning-management/learndash/#event-tracking). When only a single key is specified, the “key” will be omitted and only the value will be sent. This appears in FluentCRM like this:

[![](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-single-key-event-in-timeline.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-single-key-event-in-timeline.jpg)

The event value can then **be used as a condition in automation triggers**.

[![](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-event-tracking-trigger-1024x733.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-event-tracking-trigger-scaled.jpg)

In this example the automation is triggered when the `quiz-attempt` event is triggered, _if_ the quiz points are higher than 8.

#### [\#](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/\#multi-key-events) Multi-key events

You can send more data about your events by using multiple keys.

[![](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-multi-key-event-1024x794.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-multi-key-event.jpg)

In this example a WooCommerce order is configured to send an event with the order total, payment method, status, and customer note.

[![](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-multi-key-event-in-timeline.jpg)](https://wpfusion.com/wp-content/uploads/2023/11/fluentcrm-multi-key-event-in-timeline.jpg)

With multi-key events, the event details will be sent to FluentCRM JSON-encoded. At the moment, this means you can use the event as an automation trigger, but **you can not use the event _properties_ in conditions** (i.e. “if total > 100”).

We hope this will be added in a future FluentCRM update.

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

- [Overview](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/#overview)
- [How it works](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/#how-it-works)
- [How it looks](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/#how-it-looks)
- [Event names](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/#event-names)
- [Setup](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/#setup)
- [Single key events](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/#single-key-events)
- [Multi-key events](https://wpfusion.com/documentation/event-tracking/fluentcrm-event-tracking/#multi-key-events)

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