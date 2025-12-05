---
url: "https://wpfusion.com/documentation/tutorials/staging-sites/"
title: "Staging Sites | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/staging-sites/#content)

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

# Staging Sites

- Published onFebruary 7, 2022
- Last updated on May 30, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Staging Sites

### [\#](https://wpfusion.com/documentation/tutorials/staging-sites/\#overview) Overview

WP Fusion has a few options for working with staging sites.

Generally speaking, on staging sites you would want WP Fusion to be active (so you can set up content rules and test access), but _not_ syncing any data with your CRM.

The reason is, for example, if a WooCommerce subscription goes on hold on the staging site (because a payment was skipped), this could remove a tag that would then revoke access to the user on your live site.

### [\#](https://wpfusion.com/documentation/tutorials/staging-sites/\#manually-enabling-or-disabling-staging-mode) Manually enabling or disabling staging mode

Staging mode can also be manually enabled or disabled from the Advanced tab in the WP Fusion settings.

Check the box for **Staging Mode** under System Settings.

[![](https://wpfusion.com/wp-content/uploads/2022/02/advanced-settings-staging-mode-1024x730.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/advanced-settings-staging-mode.jpg) Staging mode can be enabled from the Advanced settings tab.

#### [\#](https://wpfusion.com/documentation/tutorials/staging-sites/\#via-wp-config-php) Via wp-config.php

If you want to ensure your staging site is always in staging mode (without having to update the WP Fusion settings each time), the simplest solution is to add a line to the wp-config.php file on your staging site:

`define( 'WPF_STAGING_MODE', true );`

Add this line above the line `/* That's all, stop editing! Happy publishing. */`, and the site will stay permanently in staging mode.

### [\#](https://wpfusion.com/documentation/tutorials/staging-sites/\#automatic-staging-site-detection) Automatic staging site detection

Similar to [WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions-handles-staging-sites/), WP Fusion will detect when your site URL changes, and if the site URL is different from the URL where WP Fusion was installed, staging mode will automatically be activated.

When staging mode has been activated due to a site URL change, a notice will be displayed at the top of the admin.

[![](https://wpfusion.com/wp-content/uploads/2022/02/staging-mode-notice-1024x224.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/staging-mode-notice.jpg)

- To keep WP Fusion in staging mode, click the X or the blue **Quit nagging me (but keep staging mode enabled)** button.
- To disable staging mode and make the current site URL the “main” install URL, click **Disable staging mode**

WP Fusion will also always display a notice across the top WP Fusion settings page whenever staging mode is enabled.

[![](https://wpfusion.com/wp-content/uploads/2022/02/staging-mode-wpf-settings-1024x380.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/staging-mode-wpf-settings.jpg)

If staging mode was activated due to a site URL change, it can be disabled here as well.``

### [\#](https://wpfusion.com/documentation/tutorials/staging-sites/\#how-staging-mode-works) How staging mode works

When staging mode is enabled, all normal WP Fusion features will be available, but no data will be sent to (or loaded from) your CRM.

In order to properly simulate access controls via tags, WP Fusion will save any tag changes to a `staging_tags` meta key on each user’s profile, as a cache.

New users who register will also be given a randomly generated `staging_contact_id` .

This means you can test the process of registering new users, applying tags, and using those tags to unlock content— without syncing any data with your CRM.

When staging mode is deactivated, the cache of tags will be removed (no changes will be synced to your CRM), and your users’ access levels will revert to what they were before staging mode was activated.

**Note:** Automatic enrollments into course or groups via linked tags are not supported in staging mode. This is to avoid altering the real enrollments of your real users when the staging site is copied back to the live site.

### [\#](https://wpfusion.com/documentation/tutorials/staging-sites/\#automatic-updates-on-staging-sites) Automatic updates on staging sites

WP Fusion is fully functional without an active license. It won’t receive automatic updates on your staging environment, but otherwise it will function normally.

If you need to get automatic updates on your staging site, the license system will automatically allow activation on any URL that matches one of these:

- localhost
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16
- \*.dev
- .\*local
- dev.\*
- staging.\*
- test.\*
- \*.wpengine.com

If you need to receive automatic updates on different staging or test URL, [contact our support](https://wpfusion.com/support/contact/) with the URL you’d like enabled and we can manually put in an exception for you

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/staging-sites/#overview)
- [Manually enabling or disabling staging mode](https://wpfusion.com/documentation/tutorials/staging-sites/#manually-enabling-or-disabling-staging-mode)
- [Via wp-config.php](https://wpfusion.com/documentation/tutorials/staging-sites/#via-wp-config-php)
- [Automatic staging site detection](https://wpfusion.com/documentation/tutorials/staging-sites/#automatic-staging-site-detection)
- [How staging mode works](https://wpfusion.com/documentation/tutorials/staging-sites/#how-staging-mode-works)
- [Automatic updates on staging sites](https://wpfusion.com/documentation/tutorials/staging-sites/#automatic-updates-on-staging-sites)

### In this chapter

- [Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/ "Auto Login")
- [Batch Operations / Exporting Data](https://wpfusion.com/documentation/tutorials/batch-operations/ "Batch Operations / Exporting Data")
- [Double Opt-Ins](https://wpfusion.com/documentation/tutorials/double-opt-ins/ "Double Opt-Ins")
- [Import Users](https://wpfusion.com/documentation/tutorials/import-users/ "Import Users")
- [Lead Source Tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/ "Lead Source Tracking")
- [Link Click Tracking](https://wpfusion.com/documentation/tutorials/link-click-tracking/ "Link Click Tracking")
- [Menu Item Visibility](https://wpfusion.com/documentation/tutorials/menu-item-visibility/ "Menu Item Visibility")
- [Site Tracking Scripts](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/ "Site Tracking Scripts")
- [Switching CRMs](https://wpfusion.com/documentation/tutorials/switching-crms/ "Switching CRMs")
- [Sync Users Between Sites](https://wpfusion.com/documentation/tutorials/sync-user-accounts/ "Sync Users Between Sites")
- [ThriveCart](https://wpfusion.com/documentation/tutorials/thrivecart/ "ThriveCart")

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

Message us ··· Chatra


Message us



J


![](https://ucarecdn.com/fafe0fbc-7534-4e06-8c45-fc4190c6dc9c/-/crop/570x571/382,215/-/preview/-/resize/200x200/)

Jack


A


![](https://ucarecdn.com/bbbe6782-c9b6-4419-b40d-eb09b0641bde/-/resize/200x200/)

Ace


Active less than an hour ago


Ask us anything – we’ll get back to you here or by email.




More...




[We run on\\
Chatra](https://chatra.com/?utm_source=logo_p&utm_campaign=PE_wpfusion.com&utm_medium=selfie_en_get)

[We run on\\
Chatra](https://chatra.com/?utm_source=logo_p&utm_campaign=PE_wpfusion.com&utm_medium=selfie_en_get)

StripeM-Inner