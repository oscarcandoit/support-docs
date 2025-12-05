---
url: "https://wpfusion.com/documentation/other/wp-remote-users-sync/"
title: "WP Remote Users Sync Integration"
---

[Skip to content](https://wpfusion.com/documentation/other/wp-remote-users-sync/#content)

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

# WP Remote Users Sync

- Published onNovember 13, 2020
- Last updated on February 3, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Other](https://wpfusion.com/documentation/#other)
- /
- WP Remote Users Sync

### [\#](https://wpfusion.com/documentation/other/wp-remote-users-sync/\#overview) Overview

[WP Remote Users Sync](https://wordpress.org/plugins/wp-remote-users-sync/) is a free plugin that allows you to synchronize WordPress users, user passwords, and login sessions securely between sites.

It is currently [our recommended solution](https://wpfusion.com/documentation/tutorials/sync-user-accounts/) for synchronizing WordPress user accounts.

Using WP Fusion with WP Remote Users sync, your users’ CRM contact IDs and tags are synced directly between any configured sites. In many cases this can reduce the number of webhooks you need to configure in your CRM.

### [\#](https://wpfusion.com/documentation/other/wp-remote-users-sync/\#setup) Setup

WP Fusion automatically configures itself for WP Remote Users sync, and there’s no extra setup required to have users’ contact IDs and CRM tags synced automatically between your connected sites.

[![](https://wpfusion.com/wp-content/uploads/2020/11/wprus-config-1024x657.jpg)](https://wpfusion.com/wp-content/uploads/2020/11/wprus-config.jpg)

In the screenshot above, “ _Site B_” at https://test.verygoodplugins.com is configured to connect to “ _Site A_” at https://dev.local.

It’s configured to both accept and send actions for Login, Logout, Create, and Update.

### [\#](https://wpfusion.com/documentation/other/wp-remote-users-sync/\#behavior) Behavior

When a new user registers on _Site A_, or their profile is updated, WP Remote Users Sync will sync their profile data directly to _Site B_.

When that happens, the WP Fusion logs on _Site A_ will show the user’s CRM tags being synced to _Site B_ as well. The “Source” column will say wp-remote-users-sync.

[![](https://wpfusion.com/wp-content/uploads/2020/11/wprus-outgoing-1024x384.jpg)](https://wpfusion.com/wp-content/uploads/2020/11/wprus-outgoing.jpg)

Meanwhile on _Site B_, when the _Site A_ data is loaded by WP Remote Users Sync, WP Fusion will record a message in the logs indicating the tags that were loaded:

[![](https://wpfusion.com/wp-content/uploads/2020/11/wprus-incoming-1024x431.jpg)](https://wpfusion.com/wp-content/uploads/2020/11/wprus-incoming.jpg)

#### [\#](https://wpfusion.com/documentation/other/wp-remote-users-sync/\#why-use-wp-remote-users-sync) Why use WP Remote Users Sync

If all this sounds complicated, don’t worry, it should all happen automatically without any extra configuration. As long as WP Remote Users Sync is communicating properly between your sites, WP Fusion will as well.

The benefit of using WP Remote Users Sync is that it removes a lot of the friction that comes from having the customer experience split across two websites.

**Without WPRUS:**

- WooCommerce purchase on _Site A_ applies a tag in your CRM via WP Fusion
- The tag triggers an automation which sends a webhook to _Site B_
- The webhook creates a new user, loads their tags, and generates a password
- A welcome email is sent from the CRM with a link to log in to _Site B_

This takes around 5 minutes and there’s a lot of opportunity for a webhook to fail or an email to land in spam.

**With WP Remote Users Sync and WP Fusion:**

- WooCommerce purchase on _Site A_ applies a tag in your CRM via WP Fusion
- Simultaneously, WPRUS has created the new user on _Site B_ and set the correct login cookies
- The customer clicks a link on the Order Received page and is taken to _Site B,_ without having to log in
- The tags applied by WooCommerce in step one are already available, so the customer can immediately access their purchased content

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/other/wp-remote-users-sync/#overview)
- [Setup](https://wpfusion.com/documentation/other/wp-remote-users-sync/#setup)
- [Behavior](https://wpfusion.com/documentation/other/wp-remote-users-sync/#behavior)
- [Why use WP Remote Users Sync](https://wpfusion.com/documentation/other/wp-remote-users-sync/#why-use-wp-remote-users-sync)

### In this chapter

- [Advanced Ads](https://wpfusion.com/documentation/other/advanced-ads/ "Advanced Ads")
- [Ahoy](https://wpfusion.com/documentation/other/ahoy/ "Ahoy")
- [GeoDirectory](https://wpfusion.com/documentation/other/geodirectory/ "GeoDirectory")
- [HollerBox](https://wpfusion.com/documentation/other/hollerbox/ "HollerBox")
- [Object Sync for Salesforce](https://wpfusion.com/documentation/other/object-sync-for-salesforce/ "Object Sync for Salesforce")
- [Popup Maker](https://wpfusion.com/documentation/other/popup-maker/ "Popup Maker")
- [Presto Player](https://wpfusion.com/documentation/other/presto-player/ "Presto Player")
- [Share Logins Pro](https://wpfusion.com/documentation/other/share-logins-pro/ "Share Logins Pro")
- [WP E Signature](https://wpfusion.com/documentation/other/e-signature/ "WP E Signature")
- [WP Job Manager](https://wpfusion.com/documentation/other/wp-job-manager/ "WP Job Manager")
- [WP Remote Users Sync](https://wpfusion.com/documentation/other/wp-remote-users-sync/ "WP Remote Users Sync")

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