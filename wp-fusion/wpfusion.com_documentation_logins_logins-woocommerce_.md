---
url: "https://wpfusion.com/documentation/logins/logins-woocommerce/"
title: "WooCommerce Post-Purchase Redirects | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/logins/logins-woocommerce/#content)

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

# WooCommerce Post-Purchase Redirects

- Published onMarch 3, 2020
- Last updated on July 31, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Logins](https://wpfusion.com/documentation/#logins)
- /
- WooCommerce Post-Purchase Redirects

### [\#](https://wpfusion.com/documentation/logins/logins-woocommerce/\#overview) Overview

When WooCommerce is active, the Logins addon will bypass any login redirects on the My Account and Checkout pages. This is to prevent people from getting redirected when they’re trying to complete a purchase or update their billing information.

### [\#](https://wpfusion.com/documentation/logins/logins-woocommerce/\#order-received-page-redirects) Order received page redirects

In addition, there is an option added to the Logins tab in the WP Fusion settings for **WooCommerce Redirects.** When enabled, this allows you to run login redirect rules on the Order Received page after someone has finished checking out in your store.

[![](https://wpfusion.com/wp-content/uploads/2020/03/logins-woocommerce-1024x242.jpg)](https://wpfusion.com/wp-content/uploads/2020/03/logins-woocommerce-scaled.jpg)

Using this option you can redirect customers to custom pages based on tags applied at checkout.

**Note:** For best results it’s recommended to turn off _Asynchronous Checkout_ from the Integrations tab in the WP Fusion settings, so that all tags have been applied by the time any redirects are triggered.

#### [\#](https://wpfusion.com/documentation/logins/logins-woocommerce/\#example) Example

Here’s one example configuration, using the login redirect rules editor.

[![](https://wpfusion.com/wp-content/uploads/2020/03/logins-woocommerce-example-1024x285.jpg)](https://wpfusion.com/wp-content/uploads/2020/03/logins-woocommerce-example-scaled.jpg)

In this example:

- If someone has purchased from you and is logged in for the first time, and the _General Membership_ tag was applied, they will be redirected to the New Member Welcome page.
- If someone was tagged with _Event Purchaser_ they will be redirected to the Event Details page.
- If someone is tagged with _Profile Incomplete_ they will be redirected to the Edit Your Profile page.

#### [\#](https://wpfusion.com/documentation/logins/logins-woocommerce/\#a-warning) A warning

Note that because the redirect happens before the order received page loads, this will prevent any other plugins or scripts from running on the order received page.

If you’re using Google Analytics or the Facebook pixel to track conversions, you should not redirect people away from the order received page.

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

- [Overview](https://wpfusion.com/documentation/logins/logins-woocommerce/#overview)
- [Order received page redirects](https://wpfusion.com/documentation/logins/logins-woocommerce/#order-received-page-redirects)
- [Example](https://wpfusion.com/documentation/logins/logins-woocommerce/#example)
- [A warning](https://wpfusion.com/documentation/logins/logins-woocommerce/#a-warning)

### In this chapter

- [Logins Overview](https://wpfusion.com/documentation/logins/overview/ "Logins Overview")
- [BuddyBoss Logins](https://wpfusion.com/documentation/logins/logins-buddyboss-app/ "BuddyBoss Logins")
- [WooCommerce Post-Purchase Redirects](https://wpfusion.com/documentation/logins/logins-woocommerce/ "WooCommerce Post-Purchase Redirects")
- [Changelog](https://wpfusion.com/documentation/logins/logins-changelog/ "Changelog")

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