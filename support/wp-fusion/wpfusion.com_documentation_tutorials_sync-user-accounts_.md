---
url: "https://wpfusion.com/documentation/tutorials/sync-user-accounts/"
title: "Sync Users Between Sites | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#content)

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

# Sync Users Between Sites

- Published onJanuary 3, 2016
- Last updated on July 2, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Sync Users Between Sites

### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#overview) Overview

If you have a sales site separate from your learning or membership site, you’ll need to keep users in sync between the two sites. You may also want to keep user passwords in sync, and enable single-sign-on, so users only have to log in once.

Because WP Fusion uses tags in your [CRM or marketing automation platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/) to grant access to content, a tag applied on Site A can unlock content on Site B (or C, D, and E).

For example, a [WooCommerce purchase](https://wpfusion.com/documentation/ecommerce/woocommerce/) applies a tag to the new customer on Site A, which then triggers an [automatic enrollment into a LearnDash course](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) on Site B.

### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#setup-and-strategy) Setup and strategy

The main concern with syncing users between sites is keeping their passwords in sync, securely. For that reason we don’t recommend using WP Fusion to sync user passwords with your CRM, since they will be synced in plain text.

[![](https://wpfusion.com/wp-content/uploads/2016/01/User-Syncing-Bad@2x-1024x347.png)](https://wpfusion.com/wp-content/uploads/2016/01/User-Syncing-Bad@2x.png) When you use your WP Fusion to sync users between sites, your user passwords end up stored in your CRM in plain text

Instead, we recommend using a plugin that allows you to sync user data _directly_ between the sites, such as [WP Remote Users Sync](https://wordpress.org/plugins/wp-remote-users-sync/) or [Uncanny Automator](https://wpfusion.com/go/automator).

[![](https://wpfusion.com/wp-content/uploads/2016/01/User-Syncing-Good@2x-1-1024x540.png)](https://wpfusion.com/wp-content/uploads/2016/01/User-Syncing-Good@2x-1.png) It’s preferable to sync user passwords directly between your sites, and then WP Fusion can sync non-sensitive data such as tags with your CRM

In that scenario, WP Fusion can still connect both sites to your CRM, but it will just be responsible for applying tags and syncing other non-sensitive information.

### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#using-wp-remote-users-sync) Using WP Remote Users Sync

Our recommended solution for syncing users between sites is with the WP Remote Users Sync plugin.

It lets you connect your sites directly to each other, so new user accounts are immediately created on your membership site when a customer registers on your sales site.

[![](https://wpfusion.com/wp-content/uploads/2016/01/screenshot-3-1024x616.png)](https://wpfusion.com/wp-content/uploads/2016/01/screenshot-3.png)

It also enables single sign on, so customers don’t need to log in a second time on your membership site.

#### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#example) Example

For example if you wanted to sell a product with WooCommerce on _Site A_, and deliver access to a course on _Site B_, you would first set up your WooCommerce product to [apply an access tag](https://wpfusion.com/documentation/ecommerce/woocommerce/#tagging-customers) via WP Fusion, and then in your course use that same tag for auto-enrollment (for example with [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment) or [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#course-auto-enrollment)).

You would then connect Site A to Site B using WP Remote Users Sync, and make sure that guest checkout is disabled in the WooCommerce settings.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-guest-checkout-disabled-1024x454.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-guest-checkout-disabled.jpg) Make sure that guest checkout is disabled in the WooCommerce settings on Site A.

Now, when the customer checks out, they will automatically be logged in to their new user account.

WP Remote Users Sync will sync the new user to Site B, along with their tags _and logged-in status_. This means the customer doesn’t have to log in again to access their course on _Site B._

[![](https://wpfusion.com/wp-content/uploads/2016/01/wp-remote-users-sync-loaded-1024x353.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/wp-remote-users-sync-loaded.jpg)

When the tags are loaded on _Site B,_ WP Fusion will automatically enroll the new user into any courses linked to those tags, and record a message [in the logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

For more information on setting up WP Remote Users Sync, [see our documentation](https://wpfusion.com/documentation/other/wp-remote-users-sync/).

### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#using-uncanny-automator) Using Uncanny Automator

[Uncanny Automator](https://wpfusion.com/go/automator) allows you to set up a webhook between two sites which automatically creates a new WordPress user. You can use this to have your checkout on one site which automatically creates a user and enrolls them into a course on a second site.

For more info on using Uncanny Automator to sync users between sites, [see this tutorial](https://automatorplugin.com/connect-multiple-wordpress-sites-together/?ref=90).

### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#using-wp-fusion) Using WP Fusion

It’s also possible to sync user accounts between multiple websites with WP Fusion, using your CRM to store the data and push it onwards to multiple sites. This method is more advanced and requires additional setup, but doesn’t require installing another plugin.

#### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#no-user-account) No user account

The simplest way to use WP Fusion to sync user data is to require guest checkout on your sales site. In this case WP Fusion syncs your customer data to your CRM, but no user account is generated on the sales site (so there’s no password that needs to be synced).

Then you can create an automation in your CRM that [sends a webhook](https://wpfusion.com/documentation/#webhooks-and-http-posts) to Site B, with `wpf_action=add` in the webhook URL. This will create a new user account, generate a random password, and enroll the new user in any purchased courses or memberships.

This is quite secure because the password is randomly generated, and relatively easy to manage because once the user account has been created, the user only exists on that one site (you’re not trying to keep passwords and other details in sync on an ongoing basis).

#### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#syncing-user-accounts) Syncing user accounts

Using WP Fusion it’s possible to sync a user’s user name and password to custom fields on their contact record in your CRM.

To do this enable the fields `user_login` and `user_pass` for sync from the Contact Fields tab in the WP Fusion settings, and select corresponding custom fields in your CRM in which to store the data.

You can then set up WP Fusion on a different WordPress site, and use WP Fusion to pull the latest user name and password from your CRM, effectively keeping your customer logins in sync across two or more WordPress sites.

[![](https://wpfusion.com/wp-content/uploads/2016/01/Sync-Users-Between-Sites@2x-1024x367.png)](https://wpfusion.com/wp-content/uploads/2016/01/Sync-Users-Between-Sites@2x.png)

#### [\#](https://wpfusion.com/documentation/tutorials/sync-user-accounts/\#setup) Setup

To set up the integration, first navigate to the Contact Fields tab and click the check boxes next to Password and Username to enable them for sync.

[![](https://wpfusion.com/wp-content/uploads/2016/01/sync-user-passwords-1024x213.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/sync-user-passwords-scaled.jpg)

Then go to the General Settings tab and make sure the checkbox next to the **Push** option is checked.

**Note:** All data is synchronized with SSL encryption but passwords are stored in your CRM application as plain text. Make sure that everyone who has access to your application is trusted before you choose to synchronize passwords.

Now, when a user creates an account or updates their information, their username and password will be synced to to your CRM. You’ll then want to [configure a webhook](https://wpfusion.com/documentation/#webhooks) to push the information to the other site(s).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#overview)
- [Setup and strategy](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#setup-and-strategy)
- [Using WP Remote Users Sync](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#using-wp-remote-users-sync)
- [Example](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#example)
- [Using Uncanny Automator](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#using-uncanny-automator)
- [Using WP Fusion](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#using-wp-fusion)
- [No user account](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#no-user-account)
- [Syncing user accounts](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#syncing-user-accounts)
- [Setup](https://wpfusion.com/documentation/tutorials/sync-user-accounts/#setup)

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