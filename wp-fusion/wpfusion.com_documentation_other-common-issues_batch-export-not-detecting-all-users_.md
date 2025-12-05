---
url: "https://wpfusion.com/documentation/other-common-issues/batch-export-not-detecting-all-users/"
title: "Troubleshooting - Export Not Detecting All Users"
---

[Skip to content](https://wpfusion.com/documentation/other-common-issues/batch-export-not-detecting-all-users/#content)

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

# Batch Export Not Detecting All Users

- Published onMarch 27, 2018
- Last updated on March 27, 2018

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Common Issues](https://wpfusion.com/documentation/#other-common-issues)
- /
- Batch Export Not Detecting All Users

Under Settings >> WP Fusion >> Advanced, you’ll find a few batch operation tools that allow you to perform a variety of operations on all users on your site (the options available will depend on the supported plugins you have active).

The **Export user** **s** operation will create new contacts in your CRM from your WordPress users. This works by checking for any WordPress users who don’t currently have a CRM contact ID stored locally.

In most situations, this tool won’t give you any issues. However, if you’ve removed contacts from your CRM, WP Fusion may still think that a contact exists, and won’t include them in the export.

#### [\#](https://wpfusion.com/documentation/other-common-issues/batch-export-not-detecting-all-users/\#resolution) Resolution

To fix this, first run a **Resync tags** batch operation. This will check every WordPress user to make sure their contact ID is still valid. If the contact has been deleted, WP Fusion will remove the locally stored contact ID.

![](https://wpfusion.com/wp-content/uploads/2018/03/batch-tools-export-1024x371.jpg)

Then you can run the **Export users** operation again and all users will be properly exported as new contacts to your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Resolution](https://wpfusion.com/documentation/other-common-issues/batch-export-not-detecting-all-users/#resolution)

### In this chapter

- [Batch Export Not Detecting All Users](https://wpfusion.com/documentation/other-common-issues/batch-export-not-detecting-all-users/ "Batch Export Not Detecting All Users")
- [Settings Page Not Saving Fully](https://wpfusion.com/documentation/other-common-issues/settings-page-not-saving-fully/ "Settings Page Not Saving Fully")
- [Webhooks not being received by WP Fusion](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/ "Webhooks not being received by WP Fusion")
- [WooCommerce Troubleshooting](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting/ "WooCommerce Troubleshooting")
- [WooCommerce Troubleshooting](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/ "WooCommerce Troubleshooting")

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