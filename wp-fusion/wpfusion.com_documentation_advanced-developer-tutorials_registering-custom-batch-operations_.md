---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/"
title: "Registering Custom Batch Operations | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#content)

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

# Registering Custom Batch Operations

- Published onJanuary 28, 2021
- Last updated on February 24, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- Registering Custom Batch Operations

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/\#overview) Overview

WP Fusion includes several [batch tools](https://wpfusion.com/documentation/tutorials/batch-operations/) that allow you to perform operations in bulk, such as importing users, exporting user meta data, and [syncing historical WooCommerce orders](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders) to your CRM.

The batch system is based on [WP Background Processing](https://github.com/deliciousbrains/wp-background-processing), and it can be modified or extended via the use of filters.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/\#how-it-works) How it works

The batch system makes use of three filters:

- **wpf\_export\_options:** Registers the operation title and slug, and adds it to the list of available batch tools on the Advanced settings tab
- **wpf\_batch\_{slug}\_init:** Queries the objects IDs (user IDs, post IDs, etc) to be processed and returns them as an array
- **wpf\_batch\_{slug}:** Is called on each record in the queue

[![](https://wpfusion.com/wp-content/uploads/2021/01/batch-operations-mix-1024x856.jpg)](https://wpfusion.com/wp-content/uploads/2021/01/batch-operations-mix.jpg) The available batch operations will vary depending on which plugins are active. It’s also possible to register your own batch operations.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/\#limit-the-woocommerce-orders-export-by-date) Limit the WooCommerce orders export by date

By default the [WooCommerce orders export](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders) will query all orders that have yet to be processed by WP Fusion (indicated by the `wpf_complete` postmeta value).

This filter runs on the same operation slug (`woocommerce`), but at priority 20. This overrides WP Fusion’s built in query, and does a new query only on orders placed since March 1st 2020.

```php
function my_custom_export( $order_ids ) {

	$args = array(
		'numberposts' => - 1,
		'post_type'   => 'shop_order',
		'post_status' => array( 'wc-processing', 'wc-completed' ),
		'fields'      => 'ids',
		'order'       => 'ASC',
		'meta_query'  => array(
			array(
				'key'     => 'wpf_complete',
				'compare' => 'NOT EXISTS',
			),
		),
		'date_query'  => array(
			'after' => 'March 1 2020',
		),
	);

	return get_posts( $args );

}

add_filter( 'wpf_batch_woocommerce_init', 'my_custom_export', 20 );
```

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/\#export-easy-digital-downloads-order-date-by-month) Export Easy Digital Downloads order date by month

Syncs the order date and time to the connected CRM for all non-recurring EDD payments made in November of the current year.

```php
/**
 * Register the export option.
 *
 * @return array Options
 */
function edd_export_options( $options ) {

	$options['edd_orderdate'] = array(
		'label'   => __( 'EDD Order Date', 'wp-fusion' ),
		'title'   => __( 'Orders', 'wp-fusion' ), //
		'tooltip' => __( 'Custom: Sync order dates for non-recurring orders in the month of November.', 'wp-fusion' ),
	);

	return $options;

}

add_filter( 'wpf_export_options', 'edd_export_options' );

/**
 * Query the payment IDs to be processed.
 *
 * @return array Payment IDs
 */

function edd_batch_init() {

	$args = array(
		'number'      => -1,
		'fields'      => 'ids',
		'monthnum'    => 11,
		'year'        => date( 'Y' ),
		'post_status' => 'publish',
	);

	$payments = edd_get_payments( $args );

	return $payments;

}

add_filter( 'wpf_batch_edd_orderdate_init', 'edd_batch_init' );

/**
 * Sync the order date for each payment
 */

function edd_batch_step( $payment_id ) {

	$payment = new EDD_Payment( $payment_id );

	$update_data = array(
		'order_date' => $payment->get_meta( '_edd_completed_date' ),
	);

	wp_fusion()->user->push_user_meta( $payment->user_id, $update_data );

}

add_action( 'wpf_batch_edd_orderdate', 'edd_batch_step' );
```

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/\#pull-user-meta-for-users-who-registered-before-a-specific-date) Pull user meta for users who registered before a specific date

This example limits the Pull User Meta operation just to users who registered after January 1st 2019.

```php
function limit_by_user_registered( $user_ids ) {

	// At this point $user_ids is all users with a CRM contact ID

	foreach ( $user_ids as $i => $user_id ) {

		$user = get_userdata( $user_id );

		if ( strtotime( $user->user_registered ) < strtotime( '2019-1-1' ) ) {
			unset( $user_ids[ $i ] );
		}
	}

	// Now all users who registered before 2019 are excluded

	return $user_ids;

}

add_filter( 'wpf_batch_pull_users_meta_init', 'limit_by_user_registered', 20 );
```

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/\#resync-tags-no-contact-id) Resync tags (No Contact ID)

This example resyncs the contact ID and tags only for users that don’t already have one stored in WordPress.

```php

/**
 * Adds "No Contact ID" option to batch operations
 *
 * @return array Options
 */

function no_cid_export_options( $options ) {

	$options['no_cid'] = array(
		'label'   => 'Resync Tags (No Contact ID)',
		'title'   => 'Users',
		'tooltip' => 'Resyncs the contact ID and tags just for users that don\'t have a stored contact ID.',
	);

	return $options;

}

add_filter( 'wpf_export_options', 'no_cid_export_options' );

/**
 * No contact ID batch init
 *
 * @return array Users
 */

function no_cid_init() {

	$args = array(
		'fields'     => 'ID',
		'meta_query' => array(
			'relation' => 'OR',
			array(
				'key'     => wp_fusion()->crm->slug . '_contact_id',
				'compare' => 'NOT EXISTS',
			),
			array(
				'key'   => wp_fusion()->crm->slug . '_contact_id',
				'value' => false,
			),
		),
	);

	$users = get_users( $args );

	return $users;

}

add_action( 'wpf_batch_no_cid_init', 'no_cid_init' );

/**
 * No contact ID batch - single step
 *
 * @return void
 */

function no_cid_step( $user_id ) {

	wp_fusion()->user->get_tags( $user_id, true );

}

add_action( 'wpf_batch_no_cid', 'no_cid_step' );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#overview)
- [How it works](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#how-it-works)
- [Examples](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#examples)
- [Limit the WooCommerce orders export by date](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#limit-the-woocommerce-orders-export-by-date)
- [Export Easy Digital Downloads order date by month](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#export-easy-digital-downloads-order-date-by-month)
- [Pull user meta for users who registered before a specific date](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#pull-user-meta-for-users-who-registered-before-a-specific-date)
- [Resync tags (No Contact ID)](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#resync-tags-no-contact-id)

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