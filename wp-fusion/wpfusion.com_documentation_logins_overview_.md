---
url: "https://wpfusion.com/documentation/logins/overview/"
title: "Logins Overview | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/logins/overview/#content)

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

# Logins Overview

- Published onJune 9, 2018
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Logins](https://wpfusion.com/documentation/#logins)
- /
- Logins Overview

### [\#](https://wpfusion.com/documentation/logins/overview/\#overview) Overview

The Logins addon for WP Fusion gives you tools for tracking user logins on your site, and performing actions if users meet certain criteria.

You can apply tags when a user first logs in, when a user hasn’t logged in for a certain period of time, and perform login redirects based on a user’s tags.

These features give you a better sense of how your users are interacting with your site, and more options for increasing engagement and retaining members and customers.

### [\#](https://wpfusion.com/documentation/logins/overview/\#general-settings) General settings

The Logins Addon adds a new Logins tab to the main WP Fusion settings where you will find several options.

[![](https://wpfusion.com/wp-content/uploads/2018/06/logins-addon-settings-1-1024x840.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/logins-addon-settings-1.jpg)

#### [\#](https://wpfusion.com/documentation/logins/overview/\#first-login-stale-accounts) First Login / Stale Accounts

There are four options here for tracking first logins and ongoing engagement with your site:

- **Apply Tags – First Login:** These tags will be applied to a user when they log into your site for the first time. This works for all users who log in for the first time _after_ you’ve installed the Logins Addon. WP Fusion won’t apply these tags to existing users.
- **Apply Tags – Stale Accounts:** WP Fusion can track how long it’s been since a user last logged in, and apply tags if they’ve been gone for longer than the specified period. If they log in again after the specified time has passed, the selected tags will be removed.
- **Number of Days:** This is the number of days before an account will be considered “stale”.
- **Apply Tags – Recovered Accounts:** These tags will be applied if someone logs in to an account that was considered “stale”. If the account becomes stale again, these tags will be removed.

**Note:** If you’re using stale account tracking, it’s best to set the **Login Count Method** to **Once a day on site visit**.

By default WordPress will keep a user logged in for two weeks, so even if someone is visiting the site every day, they might only “log in” once every two weeks, which could cause their account to get tagged as stale if you’re only counting logins as **When a user actually logs in**

#### [\#](https://wpfusion.com/documentation/logins/overview/\#login-count-method) Login Count Method

The Logins Addon includes two options for how to qualify a login:

- **Once a day on site visit:**(Default) This will update the user’s last login date and login count once a day when they visit your site.
- **When a user actually logs in:** This will update the user’s last login date and login count when they actually submit a login form with a username and password and log in to your site.

While **When a user actually logs in** is a more accurate measure of how often people are logging in to your site, it will update less frequently as WordPress sets a cookie for logged in users for two weeks, meaning they may visit the site multiple times during that period even though they only “logged in” once.

#### [\#](https://wpfusion.com/documentation/logins/overview/\#login-count-rules) Login Count Rules

[![](https://wpfusion.com/wp-content/uploads/2018/06/logins-count-1024x222.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/logins-count.jpg)

Here you can specify rules based on the number of times someone has logged in.

- **On / Every:** Choose “On the Nth login” to have the rule run just once when the number of logins has been reached. Choose “Every N logins” to run the rule each time the number has been reached.
- **Required tags:** You can make the rule only run if the user has the specified tags.
- **Page:** This is the page the user will be redirected to on login.
- **Apply tags:** You can specify any tags to be applied to the user when the condition has been met.
- **Login Count Method:** Here you can specify how logins should be counted: either when a login form has been submitted, or once a day on site visit.

#### [\#](https://wpfusion.com/documentation/logins/overview/\#login-redirect-rules) Login Redirect Rules

Here you can specify redirects on login based on a user’s tags.

[![](https://wpfusion.com/wp-content/uploads/2018/06/logins-redirects-1-1024x172.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/logins-redirects-1.jpg)

Rules are prioritized from the top down. For each rule, select one or more tags as a trigger. In the redirect dropdown you can either type the name of a page on your site, or enter an external URL.

### [\#](https://wpfusion.com/documentation/logins/overview/\#syncing-meta-fields) Syncing meta fields

The Logins Addon also adds a new section to the field mapping list under the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2018/06/logins-fields-1024x168.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/logins-fields-scaled.jpg)

Here you can specify custom fields in your CRM to store the **Last Login** and **Login Count** fields. These values will be updated in your CRM each time someone logs in.

**Note:** The “Login count” and “Last login date” can only be synced to the CRM and cannot be loaded back. This is to avoid accidentally erasing the login count or loading it from another site.

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

- [Overview](https://wpfusion.com/documentation/logins/overview/#overview)
- [General settings](https://wpfusion.com/documentation/logins/overview/#general-settings)
- [First Login / Stale Accounts](https://wpfusion.com/documentation/logins/overview/#first-login-stale-accounts)
- [Login Count Method](https://wpfusion.com/documentation/logins/overview/#login-count-method)
- [Login Count Rules](https://wpfusion.com/documentation/logins/overview/#login-count-rules)
- [Login Redirect Rules](https://wpfusion.com/documentation/logins/overview/#login-redirect-rules)
- [Syncing meta fields](https://wpfusion.com/documentation/logins/overview/#syncing-meta-fields)

### You may also like

[![a person with long brown hair is smiling and wearing a red wpfusion t shirt. the text beside them reads: best way to login redirect by tag in wordpress! on a white background with red and black accents.](https://wpfusion.com/wp-content/uploads/2025/02/maxresdefault-4-300x169.jpg)](https://wpfusion.com/videos/tutorials/wordpress-login-redirect-based-on-tags/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [WordPress Login Redirect Based on Tags](https://wpfusion.com/videos/tutorials/wordpress-login-redirect-based-on-tags/)

Learn how to create a login redirect based on a tag with WP Fusion!

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