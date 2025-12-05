---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/"
title: "Contributing Integration Modules"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#content)

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

# Contributing integration modules

- Published onFebruary 1, 2021
- Last updated on May 9, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- Contributing integration modules

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#overview) Overview

WP Fusion includes integration modules with about [150 WordPress plugins](https://wpfusion.com/documentation/#integrations). Each module is contained in a single class.

It’s easy to create a new WP Fusion integration for your own plugin, and by doing so enable your plugin to communicate bidirectionally with over [40 CRMs and marketing automation tools](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

For a bootstrap to get you started, download this [example plugin from GitHub](https://github.com/verygoodplugins/wp-fusion-custom-integration).

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#setting-up-a-custom-integration-module) Setting up a custom integration module

First [download the starter plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration). Then do a find and replace (case sensitive) on four strings:

- “my-plugin-slug”: This is the slug used to identify your integration.
- “My\_Plugin\_Name”: This is the class name for the integration.
- “My Plugin Name”: This is the human-readable name for the plugin integration
- “My/PluginDependencyClass”: This is a class name in your plugin. WP Fusion will do a `class_exists()`on this string when determining whether or not to load the integration module.

Also make sure to rename /includes/class-my-plugin-slug.php to reflect the new slug.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#suggested-functionality) Suggested functionality

The hooks used and functionality in your integration module will depend on the type of plugin, but generally:

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#ecommerce-integrations) Ecommerce integrations

WP Fusion’s ecommerce integrations generally:

- Sync customers to the CRM at checkout, including their name, email address, billing details, and any custom fields
- Sync guest checkouts to the CRM and attach the guest’s contact ID to the order meta
- Allow the user to configure tags to be applied per product at checkout

For examples in WP Fusion see classes `WPF_EDD`, `WPF_Simple_Pay`.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#membership-integrations) Membership integrations

WP Fusion’s membership integrations:

- Detect custom fields that have been created for user registration or profiles, and make them available for sync using the `wpf_meta_fields` filter (example provided in [the sample plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration/blob/main/includes/class-example-ecommerce-integration.php#L50))
- Detect a user registration and make sure that any POST’ed custom field values are properly merged into the output from the `wpf_user_register` filter (example provided in [the sample plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration/blob/main/includes/class-example-membership-integration.php#L44))
- Detect a profile update and likewise make sure that any POST’ed custom fields are synced to the CRM with the rest of the data
- (If applicable) Apply tags in the CRM based on membership level and membership status. For example with [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/) or [WooCommerce Memberships](https://wpfusion.com/documentation/membership/woocommerce-memberships/).

For examples in WP Fusion see classes `WPF_User_Meta`, `WPF_Simple_Membership`, `WPF_Clean_Login`.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#form-integrations) Form integrations

WP Fusion’s form integrations:

- Register a field mapping interface within the form’s settings or form edit screens that allow mapping form fields with CRM fields (see for example the field mapping interfaces in [Ninja Forms](https://wpfusion.com/documentation/lead-generation/ninja-forms/#setup), [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#feed-settings), or [Formidable Forms](https://wpfusion.com/documentation/lead-generation/formidable-forms/#setup).
- Include a setting in the field mapping interface for _Apply Tags_, so the user can specify CRM tags to be applied when the form is submitted
- Detect when a form is submitted and extract the submitted values from the form, passing them to `WPF_Forms_Helper::process_form_data()` (see code examples in integrations mentioned above), and then save the new CRM contact ID to the form entry meta

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#event-integrations) Event integrations

WP Fusion’s event and booking plugin integrations:

- Detect custom fields that have been created for event registration or RSVP forms, and make them available for sync using the `wpf_meta_fields` filter (example provided in [the sample plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration/blob/main/includes/class-example-ecommerce-integration.php#L50))

  - Preferably allows syncing “pseudo” event fields such as event date and time, or venue, for example [see FooEvents](https://wpfusion.com/documentation/events/fooevents/#event-time-and-venue)
- Detect an event registration and make sure that any attendee fields and custom event fields are properly synced to the CRM (including from guest registrations)
- Add a meta box or setting input to the event or ticket editor that allows tags to be configured to be applied for event registration, and apply those tags during event registration

For examples in WP Fusion see classes `WPF_FooEvents`, `WPF_Events_Manager`, `WPF_Modern_Events_Calendar`.

**Time zones:** When passing any data to the CRM, for example via [push\_user\_meta()](https://wpfusion.com/documentation/functions/push_user_meta/), make sure your dates are in UTC and not local time. WP Fusion will automatically convert dates to local time for CRMs that require it.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#contributing-to-wp-fusion) Contributing to WP Fusion

We welcome and encourage new submissions for custom integration modules.

To do that first make a fork of the [integration boostrap plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration). Once your integration is finished, [drop us a line](https://wpfusion.com/contact/) with a link to your fork, we’ll review the integration, and (with your permission) include it in future updates of WP Fusion.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/\#some-recommendations) Some recommendations

**Minimum versions to support:**

- PHP 7.1 and up
- WordPress 5.0 and up
- WooCommerce 3.6 and up (if applicable)

**Code standards:**

- All code should follow the [WordPress PHP code standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/).
- We recommend installing phpcs and the [WordPress-Coding-Standards package](https://github.com/WordPress/WordPress-Coding-Standards) with your editor or IDE. If committed code does not pass phpcs, it will not be accepted.
- Add code must be documented following the [PHP documentation standards](https://developer.wordpress.org/coding-standards/inline-documentation-standards/php/).

For an example of a properly coded and documented integration module, see the [integration bootstrap plugin](https://github.com/verygoodplugins/wp-fusion-custom-integration),  or for a real-world example look at WP Fusion’s [YITH WooCommerce Multi Vendor integration](https://gist.github.com/verygoodplugins/b84cbd49bb0ebcf0203daa54967dc28c).

**Internationalisation:**

All strings should be translatable via gettext. The textdomain for WP Fusion is `wp-fusion`.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#overview)
- [Setting up a custom integration module](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#setting-up-a-custom-integration-module)
- [Suggested functionality](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#suggested-functionality)
- [Ecommerce integrations](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#ecommerce-integrations)
- [Membership integrations](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#membership-integrations)
- [Form integrations](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#form-integrations)
- [Event integrations](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#event-integrations)
- [Contributing to WP Fusion](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#contributing-to-wp-fusion)
- [Some recommendations](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/#some-recommendations)

### In this chapter

- [ActiveCampaign Event Tracking](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/ "ActiveCampaign Event Tracking")
- [Additional Code Examples](https://wpfusion.com/documentation/advanced-developer-tutorials/additional-code-examples/ "Additional Code Examples")
- [Applying and Removing Tags with JavaScript](https://wpfusion.com/documentation/advanced-developer-tutorials/applying-removing-tags-with-javascript/ "Applying and Removing Tags with JavaScript")
- [Connecting to two different ActiveCampaign accounts](https://wpfusion.com/documentation/advanced-developer-tutorials/connecting-to-two-different-activecampaign-accounts/ "Connecting to two different ActiveCampaign accounts")
- [Contributing integration modules](https://wpfusion.com/documentation/advanced-developer-tutorials/contributing-integration-modules/ "Contributing integration modules")
- [Creating Custom CRM Modules](https://wpfusion.com/documentation/advanced-developer-tutorials/creating-custom-crm-modules/ "Creating Custom CRM Modules")
- [Deleting Users via Webhooks](https://wpfusion.com/documentation/advanced-developer-tutorials/deleting-users-via-webhooks/ "Deleting Users via Webhooks")
- [Detecting and Syncing Additional Fields](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/ "Detecting and Syncing Additional Fields")
- [How To Submit A Job On Codeable For Custom Development](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-submit-a-job-on-codeable-for-custom-development/ "How To Submit A Job On Codeable For Custom Development")
- [How to use a custom client ID for authentication](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/ "How to use a custom client ID for authentication")
- [Registering Custom Batch Operations](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/ "Registering Custom Batch Operations")
- [Scheduled Synchronization Using Cron](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/ "Scheduled Synchronization Using Cron")
- [Sending data to two different CRMs (Intercom Example)](https://wpfusion.com/documentation/advanced-developer-tutorials/sending-data-different-crms-intercom-example/ "Sending data to two different CRMs (Intercom Example)")
- [The WP Fusion CRM API](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/ "The WP Fusion CRM API")
- [The WP Fusion User Class](https://wpfusion.com/documentation/advanced-developer-tutorials/wp-fusion-user-class/ "The WP Fusion User Class")
- [White Labelling WP Fusion](https://wpfusion.com/documentation/advanced-developer-tutorials/white-labelling-wp-fusion/ "White Labelling WP Fusion")

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