---
url: "https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/"
title: "Event Tracking Changelog | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/#content)

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

# Event Tracking Changelog

- Published onNovember 30, 2021
- Last updated on November 30, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Event Tracking](https://wpfusion.com/documentation/#event-tracking)
- /
- Event Tracking Changelog

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-6-5) 1.6.5 - 11/5/2025

- ✨ New Added support for default event templates for each trigger
- ✨ New Added validation on the main settings page save to make sure no event keys are empty
- 🔧 Fixed Fixed custom event key formats not being respected (since 1.6.4)
- 🔧 Fixed Fixed deprecated jQuery methods in jquery.repeater library causing console warnings

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-6-4) 1.6.4 - 11/4/2025

- ✨ New Added dropdown for default owner for HubSpot notes
- ✨ New Added support for flexible event key formatting depending on the CRM (for example Drip allows spaces in event keys)
- 🔧 Fixed Fixed PHP warning when logging in with a username that doesn't exist
- 🔧 Fixed Fixed undefined array key warning when syncing the license details with EDD Software Licensing
- 🔧 Fixed Fixed events being tracked when users are registered or auto-logged in by WP Remote Users Sync
- 🔧 Fixed Fixed user login events being tracked during WP-Cron

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-6-3) 1.6.3 - 3/10/2025

- 🔧 Fixed Fixed PHP warning `Undefined array key "user_id"` in LearnDash Course Started event

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-6-2) 1.6.2 - 1/22/2025

- 🔧 Fixed Fixed missing EDD download merge tags in EDD Recurring integration
- 🔧 Fixed Fixed fatal error loading the Presto Player integration with WP Fusion core 3.44.23

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-6-1) 1.6.1 - 10/4/2024

- 🔧 Fixed Fixed WooCommerce order total not rounded to two digits when discounts were applied
- 🔧 Fixed Fixed LearnDash Course Progress trigger not firing when a course was completed by submitting a quiz
- 🔧 Fixed Fixed errors with the LearnDash Quiz Completed trigger when grading courses in the admin

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-6-0) 1.6.0 - 8/14/2024

- ✨ New Added an [AffiliateWP integration](https://wpfusion.com/documentation/affiliates/affiliate-wp/#event-tracking)
- ✨ New Added a [GiveWP integration](https://wpfusion.com/documentation/ecommerce/give/#event-tracking)
- ✨ New Added a [WP Fusion Abandoned Cart addon integration](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#event-tracking)
- 🔧 Fixed Fixed Add Trigger button not working on the global events configuration page with CRMs that don't support multi-key event tracking, since 1.5.1
- 🔧 Fixed Fixed missing list of events configured on single posts in the global settings, since 1.5.0
- 🔧 Fixed Fixed login events not working with WishList Member (moved `wp_login` priority from 10 to 5)
- 🔧 Fixed Fixed PHP warnings when tracking events after switching from a multi-key to non-multi-key CRM

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-5-1) 1.5.1 - 6/21/2024

- ⚡️ Improved Event tracking scripts and styles will now only be loaded on admin pages with event tracking settings on them
- ⚡️ Improved With the Gravity Forms integration, when using the `{form:all_fields}` merge tag, the event value will now be an array of all the form fields when using multi-key event tracking
- ⚡️ Improved Added a link back to the main settings page from the event tracking settings page
- 🔧 Fixed Fixed misaligned label on WooCommerce product settings
- 🔧 Fixed Fixed missing field label on WooCommerce Subscriptions subscription product events configuration
- 🔧 Fixed Fixed missing event preview on WooCommerce product settings with multi-key event tracking
- 🔧 Fixed Fixed JavaScript conflict with GravityPerks Limit Dates addon
- 🔧 Fixed Fixed global Gravity Forms events running on spam submissions
- 🔧 Fixed Fixed events configured on individual Gravity Forms being triggered twice
- 🔧 Fixed Fixed PHP warning "Attempt to read property "discount" on bool" when editing EDD downloads
- 🛠️ Dev added action `wpf_event_tracking_track_event` to allow passing events to other services

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-5-0) 1.5.0 - 3/26/2024

- ✨ New Added WooCommerce Order Status Changed event
- ✨ New Added subscription ID and parent order ID to WooCommerce Subscriptions events
- 🔧 Fixed Fixed fatal error when replacing merge tags on the User event type, when the user had array values in their meta
- 🔧 Fixed Fixed event test button trimming the last character off the event value
- 🔧 Fixed Fixed empty events sometimes getting sent and creating API errors
- 🔧 Fixed Fixed WooCommerce Subscriptions events syncing the parent order ID and parent order total rather than renewal payment ID and renewal payment total
- 🔧 Fixed Fixed empty event data getting saved to BuddyPress / BuddyBoss groups and blocking global events on those groups

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-4-3) 1.4.3 - 11/29/2023

- ✨ New Added payment fields with Easy Digital Downloads
- ✨ New Added overview text to global options page
- 🔧 Fixed Fixed multi-key previews getting appended to every event editor on the page when editing a single post or product
- 🔧 Fixed Fixed "Installed Update" event with Easy Digital Downloads recording the site URL of the last activated site, not necessarily the site where the update was installed

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-4-2) 1.4.2 - 10/24/2023

- ✨ New Added Send Test button to event editor
- Refactored admin JavaScript
- 🔧 Fixed Fixed fatal error replacing merge tags with Bento and PHP 8+

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-4-1) 1.4.1 - 9/8/2023

- ⚡️ Improved Improved event editor layout on single WooCommerce products
- 🔧 Fixed Fixed missing "Order" event tags on WooCommerce product purchase triggers
- 🔧 Fixed Fixed global Purchased Product trigger (WooCommerce) not working
- 🔧 Fixed Fixed empty multi-key events getting saved to postmeta and showing up under Configured On in the global settings

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-4-0) 1.4.0 - 7/31/2023

- ✨ New Added [multi-key/value event tracking](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/#multi-key-events) to supported CRMs (Bento, Brevo, Engage, Gist, Groundhogg, Intercom, Klaviyo, and Mailchimp)
- ✨ New Added [Course Start trigger for LearnDash](https://wpfusion.com/documentation/learning-management/learndash/#event-tracking)
- ✨ New Added course progress (percentage) merge field for LearnDash
- ✨ New Added [Course Start trigger for LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#event-tracking)
- ✨ New Added course progress (percentage) merge field for LifterLMS
- ✨ New Added helper function `wpf_track_event( $event_name, $event_data, $email_address );`
- ✨ New Added Order Subtotal field with WooCommerce
- ⚡️ Improved Prices synced to Bento will now be multiplied by 100 to properly update lifetime values
- 🔧 Fixed Fixed LifterLMS lesson complete tracking not working
- 🔧 Fixed Fixed fatal error tracking Gamipress "Achievement earned" event

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-3-1) 1.3.1 - 12/2/2022

- 🔧 Fixed Fixed PHP warning tracking the EDD subscription status for new customers
- 🔧 Fixed Fixed `{download:title}` tag not working with EDD

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-3-0) 1.3.0 - 11/30/2022

- ✨ New Added [EDD Recurring Payments integration](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#event-tracking)
- ⚡️ Improved Added limit of 30 characters to Mailchimp event title field
- ⚡️ Improved Added link to event tracking settings from main WP Fusion settings page
- 🔧 Fixed Fixed LearnDash Course Progress event not firing when a course was completed

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-2-6) 1.2.6 - 8/25/2022

- 🔧 Fixed Fixed JavaScript error in the admin "wpfEventData is not defined"

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-2-5) 1.2.5 - 8/23/2022

- ✨ New Added a notice when the Event Name with ActiveCampaign exceeds 40 characters
- 🔧 Fixed Fixed fatal error loading settings page if no WP Fusion Gravity Forms feeds had been configured
- 🔧 Fixed Fixed fatal error on PHP 8+ when adding a new Gravity Forms feed
- 🔧 Fixed Fixed special characters being synced as HTML encoded with LearnDash course, lesson, and quiz titles

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-2-4) 1.2.4 - 4/7/2022

- ⚡️ Improved Will no longer trigger multiple events for a single LearnDash course progression (fixes issues with Uncanny autocomplete lesson and autocomplete course functionality)
- 🔧 Fixed Fixed fatal error in Presto Player integration (`WPF_ET_Presto_Player does not have a method "add_meta_box()"`)

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-2-3) 1.2.3 - 3/8/2022

- 🔧 Fixed Fixed global events not firing if a post had an empty single event configured since 1.2.0
- 🔧 Fixed Fixed missing settings on EDD Downloads when EDD Software Licensing was active since 1.2.0

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-2-1) 1.2.1 - 3/8/2022

- 🔧 Fixed Fixed BuddyBoss profile completion widget not showing progress since 1.2.0

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-2-0) 1.2.0 - 3/7/2022

- ✨ New Added [Gamipress integration](https://wpfusion.com/documentation/gamification/gamipress/#event-tracking)
- ✨ New Added [BuddyPress / BuddyBoss integration](https://wpfusion.com/documentation/ecommerce/buddypress/#event-tracking)
- ✨ New Added [WooCommerce Subscriptions integration](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#event-tracking)
- ✨ New Added [bbPress integration](https://wpfusion.com/documentation/forums/bbpress/#event-tracking)
- ✨ New Added [Presto Player integration](https://wpfusion.com/documentation/other/presto-player/#event-tracking)
- ⚡️ Improved If a trigger has an event configured on a single post as well as globally, only the event for the single post will fire (prevents duplicate events)

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-1-2) 1.1.2 - 1/19/2022

- ⚡️ Improved Made WooCommerce Purchased Product trigger available globally
- 🔧 Fixed Fixed global events not firing when there were single events bound to the same trigger
- 🔧 Fixed Fixed "Configured On" in global triggers not showing correct posts
- 🛠️ Dev Developers - All merge tags are now passed to the event editor via JavaScript

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-1-1) 1.1.1 - 1/5/2022

- UX improvements to the global settings editor
- 🔧 Fixed Fixed `current_url` and `referer` fields not syncing
- 🔧 Fixed Fixed first option in global settings dropdown not selectable
- 🔧 Fixed Fixed Uncaught Error: Call to undefined method WPF\_ET\_WooCommerce::get\_user\_vars()
- 🛠️ Dev Developers - Refactored the way options (merge tags) are declared for each integration

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-1-0) 1.1.0 - 12/31/2021

- Add User integration with Logged In trigger
- ✨ New Added current user merge tags to all triggers
- ✨ New Added global settings for Gravity Forms integration
- ✨ New Added `{file:file}` merge tag for EDD
- ⚡️ Improved Improved LearnDash progress tracking — no longer running on `learndash_update_user_activity` hook (was triggering duplicate events)
- ⚡️ Improved Moved LearnDash course settings to new WP Fusion settings tab
- Removed quiz "score" in favor of "percentage" with LearnDash
- 🔧 Fixed Fixed fatal error adding new WooCommerce product
- 🔧 Fixed Fixed occasional empty duplicate events
- 🔧 Fixed Fixed EDD `{file:name}` merge tag not working
- 🔧 Fixed Fixed Downloaded Download trigger not showing in global settings

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-0-1) 1.0.1 - 12/2/2021

- ✨ New Added user merge tags to single course and product settings
- ✨ New Added descriptions beneath each trigger in the global settings
- 🔧 Fixed Fixed previews not loading when editing a single product
- 🔧 Fixed Fixed settings not showing on LifterLMS courses
- 🔧 Fixed Fixed dropdown options getting added multiple times on global settings when changing trigger

#### [\#](https://wpfusion.com/documentation/event-tracking/event-tracking-changelog/\#1-0-0-beta1) 1.0.0-beta1 - 11/30/2021

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