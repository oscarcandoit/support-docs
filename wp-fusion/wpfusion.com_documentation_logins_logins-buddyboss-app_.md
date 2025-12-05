---
url: "https://wpfusion.com/documentation/logins/logins-buddyboss-app/"
title: "BuddyBoss Logins | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/logins/logins-buddyboss-app/#content)

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

# BuddyBoss Logins

- Published onJuly 31, 2024
- Last updated on January 13, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Logins](https://wpfusion.com/documentation/#logins)
- /
- BuddyBoss Logins

### [\#](https://wpfusion.com/documentation/logins/logins-buddyboss-app/\#overview) Overview

WP Fusion’s [Logins Addon](https://wpfusion.com/documentation/logins/overview/) includes additional login tracking features specific to [BuddyBoss](https://wpfusion.com/documentation/membership/buddyboss/) and the [BuddyBoss App](https://wpfusion.com/documentation/membership/buddyboss/).

You can apply tags when users first log in to your BuddyBoss app, apply tags when they create an account via [Social Login](https://www.buddyboss.com/resources/docs/components/buddyboss-social-login/), as well as track the last date they logged in to the app in your CRM.

[![Screenshot of WP Fusion's Logins addon BuddyBoss settings](https://wpfusion.com/wp-content/uploads/2024/07/logins-buddyboss-integration-1024x419.jpg)](https://wpfusion.com/wp-content/uploads/2024/07/logins-buddyboss-integration.jpg) WP Fusion’s [Logins Addon](https://wpfusion.com/documentation/logins/overview/) can apply tags in your CRM when users log in to the BuddyBoss app for the first time.

The **First Login to BuddyBoss App** and **BuddyBoss Social Login Registration** settings are found at the bottom of the Logins tab in the WP Fusion settings.

[![screenshot](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-login-tracking-1024x370.jpg)](https://wpfusion.com/wp-content/uploads/2021/02/buddyboss-app-login-tracking.jpg)

By enabling the **Last Login – BuddyBoss App** field for sync from the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), you can track the last time users logged into the app in your CRM. This is a great way to get a sense of your most active app users.

### [\#](https://wpfusion.com/documentation/logins/logins-buddyboss-app/\#how-it-works) How it works

App login tracking can work two ways, depending on if you’ve selected to track logins “When a user actually logs in” vs. “Once a day on site visit”. For more information see the [Login Count Method](https://wpfusion.com/documentation/logins/overview/#login-count-method).

If set to **Once a day on site visit** WP Fusion will track each user’s interactions with the BuddyBoss app. If there has been no activity on the current day, then the timestamp will be saved to the database, and the last login date will be synced. When the user returns the next day (or any other day), WP Fusion compares the current date to the saved value and only syncs the time to your CRM if it’s a different date.

If set to **When a user logs in**, WP Fusion will track BuddyBoss app logins by looking at each user’s `_bbapp_jwt_jti` meta key, which BuddyBoss uses to track user logins and devices using the app.

When the user’s login date is updated, indicating a new login, WP Fusion will sync the date and time to your CRM.

WP Fusion will only apply the “First Login” tags when the app usermeta key is created for a user the first time, which means you can safely activate the addon on sites with existing BuddyBoss app users, and only new users will be tagged with their first login.

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

- [Overview](https://wpfusion.com/documentation/logins/logins-buddyboss-app/#overview)
- [How it works](https://wpfusion.com/documentation/logins/logins-buddyboss-app/#how-it-works)

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