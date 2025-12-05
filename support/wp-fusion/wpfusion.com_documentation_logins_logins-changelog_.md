---
url: "https://wpfusion.com/documentation/logins/logins-changelog/"
title: "Changelog | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/logins/logins-changelog/#content)

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

# Changelog

- Published onJune 12, 2018
- Last updated on June 2, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Logins](https://wpfusion.com/documentation/#logins)
- /
- Changelog

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-4-1) 1.4.1 - 1/13/2025

- ✨ New Added option to apply tags when a user registers via [BuddyBoss social login](https://www.buddyboss.com/resources/docs/components/buddyboss-social-login/)
- ⚡️ Improved If login tracking is set to "Once a day on site visit", the last login date will now also be synced for the BuddyBoss app once per day on app engagement
- 🔧 Fixed Fixed PHP warning `Attempt to read property "ID" on false` if the `wp_login` hook was fired on an invalid username

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-4-0) 1.4.0 - 7/31/2024

- ✨ New Added support for [tracking BuddyBoss App logins](https://wpfusion.com/documentation/logins/logins-buddyboss-app/)
- ✨ New Added support for login redirects with Bricks login forms
- ⚡️ Improved Some plugins sloppily trigger `wp_login` twice during a single login. The login count will now only be updated on the first time
- ⚡️ Improved Added `wpf-logins` as the source to the logs for actions triggered by user logins
- 🔧 Fixed Fixed Once A Day On Site Visit setting comparing the user's last login in GMT vs the site's current time in local time, resulting in unnecessary user meta updates
- 🛠️ Dev Added action `wpf_logins_begin_login_actions` at the start of the login process (or the once a day login tracking)
- 🛠️ Dev Last login date will now be stored in UTC instead of local time, to prevent issues with timezone conversion when syncing to the CRM

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-3-3) 1.3.3 - 10/10/2022

- 🔧 Fixed Fixed First Login tags not being applied when the user was auto-logged-in as a result of a WooCommerce checkout
- 🔧 Fixed Fixed fatal error "Argument #2 ($timestamp) must be of type int, string given" with PHP 8.1+ when an unexpected `wpf_last_login` date was displayed in the users list

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-3-2) 1.3.2 - 8/31/2022

- 🔧 Fixed Fixed login redirects running during REST API requests and breaking the BuddyBoss app login

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-3-1) 1.3.1 - 8/25/2022

- 🔧 Fixed Fixed fatal error "Argument #2 ($timestamp) must be of type int, string given" with PHP 8+

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-3-0) 1.3.0 - 8/9/2022

- ✨ New Added option to enter either a URL \*or\* page for the Login Count Redirect Rules setting
- ✨ New Added additional usermeta flag `wpf_stale_account` to prevent stale account tags being applied to all users when the Apply Tags - Stale Account setting was modified
- ⚡️ Improved The daily query for stale user accounts will now only query users whose last login was within 48 hours of the specified number of days
- 🔧 Fixed Fixed login redirects happening on WooCommerce login forms

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-2-5) 1.2.5 - 1/14/2022

- ⚡️ Improved When using "once a day on site visit" login tracking, logins will no longer be tracked if switching into another user's account using the User Switching plugin
- Removed v1.2 upgrade logic, was running repeatedly on some sites (reason unknown)

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-2-4) 1.2.4 - 4/15/2021

- Stale account tags will now be removed during "Once a day on site visit" daily check, instead of waiting for a wp\_login event
- Reduced number of database queries required displaying admin settings panel
- 🔧 Fixed Fixed login redirects running during AJAX requests
- 🔧 Fixed Fixed errors during login if WP Fusion wasn't active

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-2-3) 1.2.3 - 11/16/2020

- 🔧 Fixed Fixed login count not updating when login count method was set to "When a user actually logs in"
- "Recovered" account tags will now be removed if the account becomes stale again

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-2-2) 1.2.2 - 9/28/2020

- Updated for tags select compatibility with WP Fusion 3.35

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-2-1) 1.2.1 - 9/7/2020

- Re-enabled login redirects on WooCommerce's My Account page
- 🔧 Fixed Fixed changed date( 'z' ) to current\_time( 'z' ) for determining the current day when using Once A Day on Site Visit login tracking
- 🔧 Fixed Fixed stale account tags only being applied if the cron job was triggered by an admin
- 🔧 Fixed Fixed Uncaught ArgumentCountError during login with WooCommerce on some configs

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-2) 1.2 - 7/20/2020

- Blocked login redirects from running on WooCommerce checkout / account logins
- Moved last\_login usermeta key to wpf\_last\_login to prevent plugin conflicts
- ✨ New Added .pot file

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-1-3) 1.1.3 - 5/12/2020

- Changed time() to current\_time() to respect the site's timezone
- 🔧 Fixed Fixed login count rules not respecting required tags

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-1-2) 1.1.2 - 4/1/2020

- 🔧 Fixed Fixed login count not updating when someone logged in and count method was set to Daily

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-1-1) 1.1.1 - 3/25/2020

- Made daily login check the default
- 🔧 Fixed Fixed login daily check not updating last login date
- Removed use of transients in daily login check

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-1) 1.1 - 3/17/2020

- ✨ New Added Last Login column to users view
- ✨ New Added WooCommerce checkout redirects
- Stopped setting last\_login when users are imported

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-0-1) 1.0.1 - 8/27/2019

- 🔧 Fixed Fixed last\_login not being tracked for admins
- ✨ New Added catchall redirect

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#1-0) 1.0 - 8/6/2019

- Increased limit on number of posts shown in dropdowns
- 🔧 Fixed Fixed Stale Accounts tags not applying

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-9) 0.9 - 6/2/2019

- Prevented last\_login field from loading during a webhook

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-8) 0.8 - 5/31/2019

- ✨ New Added last login to admin user profile
- 🔧 Fixed Fix for login count field not syncing
- last\_login will now be set when a user is imported

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-7) 0.7 - 5/21/2019

- ✨ New Added recovered stale login tagging
- ✨ New Added compatibility class
- 🔧 Fixed Fixed login count rules not applying tags

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-6) 0.6 - 5/6/2019

- ⚡️ Improved Improved login redirect method to be better compatible with other plugins
- ✨ New Added login counting
- ✨ New Added login count redirect / tagging rules

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-5) 0.5 - 3/17/2019

- ✨ New Added last\_login field to be available for syncing
- PilotPress compatibility fixes

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-4) 0.4 - 12/19/2018

- Made redirects more aggressive to prevent being overruled by other plugins
- 🔧 Fixed Fix for redirects to a protected page ignoring current user's tags

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-3) 0.3 - 10/13/2018

- Compatibility fixes with Ultimate Member
- Made public class publicly accessible

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-2) 0.2 - 6/12/2018

- 🔧 Fixed Fix for incorrect update notices

#### [\#](https://wpfusion.com/documentation/logins/logins-changelog/\#0-1) 0.1 - 6/9/2018

- Initial release

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