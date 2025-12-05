---
url: "https://wpfusion.com/documentation/faq/staging-sites/"
title: "Staging Sites | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/faq/staging-sites/#content)

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
- [FAQ](https://wpfusion.com/documentation/#faq)
- /
- Staging Sites

### [\#](https://wpfusion.com/documentation/faq/staging-sites/\#overview) Overview

WP Fusion has a few options for working with staging sites.

Generally speaking, on staging sites you would want WP Fusion to be active (so you can set up content rules and test access), but _not_ syncing any data with your CRM.

The reason is, for example, if a WooCommerce subscription goes on hold on the staging site (because a payment was skipped), this could remove a tag that would then revoke access to the user on your live site.

### [\#](https://wpfusion.com/documentation/faq/staging-sites/\#manually-enabling-or-disabling-staging-mode) Manually enabling or disabling staging mode

Staging mode can also be manually enabled or disabled from the Advanced tab in the WP Fusion settings.

Check the box for **Staging Mode** under System Settings.

[![](https://wpfusion.com/wp-content/uploads/2022/02/advanced-settings-staging-mode-1024x730.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/advanced-settings-staging-mode.jpg) Staging mode can be enabled from the Advanced settings tab.

#### [\#](https://wpfusion.com/documentation/faq/staging-sites/\#via-wp-config-php) Via wp-config.php

If you want to ensure your staging site is always in staging mode (without having to update the WP Fusion settings each time), the simplest solution is to add a line to the wp-config.php file on your staging site:

`define( 'WPF_STAGING_MODE', true );`

Add this line above the line `/* That's all, stop editing! Happy publishing. */`, and the site will stay permanently in staging mode.

### [\#](https://wpfusion.com/documentation/faq/staging-sites/\#automatic-staging-site-detection) Automatic staging site detection

Similar to [WooCommerce Subscriptions](https://woocommerce.com/document/subscriptions-handles-staging-sites/), WP Fusion will detect when your site URL changes, and if the site URL is different from the URL where WP Fusion was installed, staging mode will automatically be activated.

When staging mode has been activated due to a site URL change, a notice will be displayed at the top of the admin.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20224'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2022/02/staging-mode-notice.jpg)

- To keep WP Fusion in staging mode, click the X or the blue **Quit nagging me (but keep staging mode enabled)** button.
- To disable staging mode and make the current site URL the “main” install URL, click **Disable staging mode**

WP Fusion will also always display a notice across the top WP Fusion settings page whenever staging mode is enabled.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20380'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2022/02/staging-mode-wpf-settings.jpg)

If staging mode was activated due to a site URL change, it can be disabled here as well.``

### [\#](https://wpfusion.com/documentation/faq/staging-sites/\#how-staging-mode-works) How staging mode works

When staging mode is enabled, all normal WP Fusion features will be available, but no data will be sent to (or loaded from) your CRM.

In order to properly simulate access controls via tags, WP Fusion will save any tag changes to a `staging_tags` meta key on each user’s profile, as a cache.

New users who register will also be given a randomly generated `staging_contact_id` .

This means you can test the process of registering new users, applying tags, and using those tags to unlock content— without syncing any data with your CRM.

When staging mode is deactivated, the cache of tags will be removed (no changes will be synced to your CRM), and your users’ access levels will revert to what they were before staging mode was activated.

**Note:** Automatic enrollments into course or groups via linked tags are not supported in staging mode. This is to avoid altering the real enrollments of your real users when the staging site is copied back to the live site.

### [\#](https://wpfusion.com/documentation/faq/staging-sites/\#automatic-updates-on-staging-sites) Automatic updates on staging sites

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

- [Overview](https://wpfusion.com/documentation/faq/staging-sites/#overview)
- [Manually enabling or disabling staging mode](https://wpfusion.com/documentation/faq/staging-sites/#manually-enabling-or-disabling-staging-mode)
- [Via wp-config.php](https://wpfusion.com/documentation/faq/staging-sites/#via-wp-config-php)
- [Automatic staging site detection](https://wpfusion.com/documentation/faq/staging-sites/#automatic-staging-site-detection)
- [How staging mode works](https://wpfusion.com/documentation/faq/staging-sites/#how-staging-mode-works)
- [Automatic updates on staging sites](https://wpfusion.com/documentation/faq/staging-sites/#automatic-updates-on-staging-sites)

### In this chapter

- [Caching](https://wpfusion.com/documentation/faq/caching/ "Caching")
- [CRM Compatibility](https://wpfusion.com/documentation/faq/crm-compatibility-table/ "CRM Compatibility")
- [For plugin developers](https://wpfusion.com/documentation/faq/for-plugin-developers/ "For plugin developers")
- [How does licensing work?](https://wpfusion.com/documentation/faq/how-does-licensing-work/ "How does licensing work?")
- [Is WP Fusion hard to use?](https://wpfusion.com/documentation/faq/is-wp-fusion-hard-to-use/ "Is WP Fusion hard to use?")
- [Misc. FAQ](https://wpfusion.com/documentation/faq/misc-faq/ "Misc. FAQ")
- [Multisite](https://wpfusion.com/documentation/faq/multisite/ "Multisite")
- [Performance](https://wpfusion.com/documentation/faq/performance/ "Performance")
- [Staging Sites](https://wpfusion.com/documentation/faq/staging-sites/ "Staging Sites")
- [What can I do with it?](https://wpfusion.com/documentation/faq/what-can-i-do-with-it/ "What can I do with it?")
- [Who is it for?](https://wpfusion.com/documentation/faq/who-is-it-for/ "Who is it for?")
- [WP Fusion vs....](https://wpfusion.com/documentation/faq/how-are-we-different/ "WP Fusion vs....")
- [Changelog](https://wpfusion.com/documentation/faq/changelog/ "Changelog")

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