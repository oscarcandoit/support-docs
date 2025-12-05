---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/"
title: "Scheduled Synchronization Using Cron | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#content)

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

# Scheduled Synchronization Using Cron

- Published onJanuary 5, 2021
- Last updated on May 16, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- Scheduled Synchronization Using Cron

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#preface) Preface

**If you’re reading this page and you’re new to WP Fusion, then you’ve come to the wrong place.**

WP Fusion can automatically sync data bidirectionally with your CRM _without the use of cron jobs_.

That’s achieved by [setting up webhooks](https://wpfusion.com/documentation/#webhooks) in your CRM, so your CRM notifies WP Fusion when a record has been modified, and the updated data is loaded into WordPress at that time.

Webhooks are way more efficient than loading data using a cron job or scheduled action.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#overview) Overview

There may be some scenarios where you need to re-sync or import data on a schedule, outside of webhooks.

For example maybe your CRM doesn’t support webhooks for the trigger you need, or your site is hosted on an internal network and can’t receive data from outside systems.

In that case you can schedule any one of WP Fusion’s [batch operations](https://wpfusion.com/documentation/tutorials/batch-operations/) using WordPress’ cron system.

To do so, you make a call to `wp_fusion()->batch->batch_init( $method );` in your scheduled event callback, where `$method` is the name of the operation you’d like to perform.

You can see the internal batch operation names by inspecting the HTML radio values for the various batch operations on the Advanced tab in the WP Fusion settings.

The operation name will be the `value` parameter on the `<input type="radio">` element.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#import-every-contact-with-a-specific-tag-daily) Import every contact with a specific tag, daily

This snippet imports every new contact with tag ID 123, once daily.

```php
function do_wpf_daily_import() {

	$args = array(
		'tag'    => 123, // The tag ID or list ID (with HubSpot) to import
		'role'   => 'subscriber',
		'notify' => false, // Set to true to send a welcome email
	);

	wp_fusion()->batch->batch_init( 'import_users', $args );

}

add_action( 'wpf_daily_import', 'do_wpf_daily_import' );

if ( ! wp_next_scheduled( 'wpf_daily_import' ) ) {
	wp_schedule_event( time(), 'daily', 'wpf_daily_import' );
}
```

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#resync-tags-for-all-users-every-friday) Resync tags for all users every Friday

This snippet runs a [Resync Tags operation](https://wpfusion.com/documentation/tutorials/batch-operations/#resync-tags) every Friday.

```php
function do_wpf_update_tags() {

	if ( date ('l') !== 'Friday' ) {
		return;
	}

	wp_fusion()->batch->batch_init( 'users_tags_sync' );

}

add_action( 'wpf_update_tags_weekly', 'do_wpf_update_tags' );

if ( ! wp_next_scheduled( 'wpf_update_tags_weekly' ) ) {
	wp_schedule_event( time(), 'daily', 'wpf_update_tags_weekly' );
}
```

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#load-metadata-for-all-users-daily) Load metadata for all users, daily

This snippet runs a [Pull User Meta operation](https://wpfusion.com/documentation/tutorials/batch-operations/#pull-user-meta) daily at 5pm UTC.

```php
function do_wpf_pull_meta() {

	wp_fusion()->batch->batch_init( 'pull_users_meta' );

}

add_action( 'wpf_pull_meta_daily', 'do_wpf_pull_meta' );

if ( ! wp_next_scheduled( 'wpf_update_tags_daily' ) ) {
	wp_schedule_event( strtotime( '5pm' ), 'daily', 'wpf_pull_meta_daily' );
}
```

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#sync-woocommerce-orders-daily) Sync WooCommerce orders daily

This operation runs daily at mightnight and syncs any WooCommerce orders to your CRM that haven’t yet been synced.

```php
function do_wpf_orders_sync() {
	wp_fusion()->batch->batch_init( 'woocommerce', array( 'skip_processed' => true ) );
}

add_action( 'wpf_daily_order_sync', 'do_wpf_orders_sync' );

if ( ! wp_next_scheduled( 'wpf_daily_order_sync' ) ) {
	wp_schedule_event( strtotime( '12am' ), 'daily', 'wpf_daily_order_sync' );
}
```

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#tips) Tips

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#monitoring) Monitoring

We’d recommend using a cron management plugin like [Advanced Cron Manager](https://wordpress.org/plugins/advanced-cron-manager/) or [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/) to ensure that the event has been scheduled, and to test the task.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/\#performance) Performance

The background processes works through records sequentially (there are no parallel threads), and is designed to use no more than 80% of your site’s available memory. Generally speaking, the background process should not be able to take your site offline.

However, it can make your site noticeably slower.

**As a rule of thumb, assume that every user / record to be synced requires 5 seconds of processing time.**

That means if you’re running a _Resync Tags_ operation on 1,000 users daily, your site will be slowed down for about 80 minutes every day. That’s not the end of the world if you schedule the operation during the middle of the night.

However, if you have 10,000 users, the operation would be running for 13 hours of every day… which would likely cause a noticeable performance decrease. In that case it would be preferable to set the cron schedule so the task only runs once a week instead of once a day.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Preface](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#preface)
- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#overview)
- [Examples](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#examples)
- [Import every contact with a specific tag, daily](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#import-every-contact-with-a-specific-tag-daily)
- [Resync tags for all users every Friday](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#resync-tags-for-all-users-every-friday)
- [Load metadata for all users, daily](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#load-metadata-for-all-users-daily)
- [Sync WooCommerce orders daily](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#sync-woocommerce-orders-daily)
- [Tips](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#tips)
- [Monitoring](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#monitoring)
- [Performance](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#performance)

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