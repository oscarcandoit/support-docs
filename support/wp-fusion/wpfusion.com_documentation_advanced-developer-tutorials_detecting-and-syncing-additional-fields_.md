---
url: "https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/"
title: "Detecting and Syncing Additional Fields | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#content)

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

# Detecting and Syncing Additional Fields

- Published onDecember 11, 2020
- Last updated on November 4, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Advanced Developer Tutorials](https://wpfusion.com/documentation/#advanced-developer-tutorials)
- /
- Detecting and Syncing Additional Fields

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#overview) Overview

If you’re reading this page then you’re probably trying to sync a field value with your CRM that isn’t currently supported by WP Fusion.

While WP Fusion can sync any data from WordPress to contact records in your CRM, it does not work “auto-magically” with every piece of data you see in your WordPress admin. That has to do with where your field data is stored.

**We can break the kinds of data that WP Fusion syncs into three categories:**

1. Data from the normal user tables – Works great with no extra setup
2. User data that’s in a different table – Requires some work
3. Data that’s calculated or not related to a specific user – Can be difficult

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#normal-tables) Normal tables

WP Fusion can automatically detect and sync any data found in the `wp_users` and `wp_usermeta` database tables bidirectionally with any fields in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2020/12/Works-Well@2x-1-1024x310.png)](https://wpfusion.com/wp-content/uploads/2020/12/Works-Well@2x-1.png) Syncing data between just two tables (your users and your CRM) is automatic and requires no extra setup

These tables are the standard place where most plugins store data relating to a specific user. So even if WP Fusion doesn’t have a specific integration with a plugin, it’s likely the fields from that plugin will still show up under [the Additional Fields section](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#additional-fields) in the Contact Fields settings, and can be synced with your CRM without any extra work.

**Note:** To build the list of Additional Fields, for performance reasons WP Fusion only scans the usermeta of your own admin user. If you’ve just added a new field and it’s not showing, try saving some data in that field for your own admin user.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#user-data-thats-in-a-different-table) User data that’s in a different table

Some plugins, like BuddyPress, store user profile data in different database tables.

When we talk about WP Fusion having an “integration” with a membership plugin (like [the ones listed here](https://wpfusion.com/documentation/membership/)), that means WP Fusion has additional code to:

- Detect the available fields from that plugin’s custom tables, and list them in the Contact Fields in the settings
- Extract the data from the custom tables and sync it to your CRM
- Detect when data has been loaded from your CRM, and if that data belongs in a custom table, store it there

For example with BuddyPress, let’s say we have a custom XProfile field for _Favorite Color,_ in the `wp_bp_xprofile_data` table. How that sync looks visually is something like:

[![](https://wpfusion.com/wp-content/uploads/2020/12/Multiple-Tables@2x-1024x557.png)](https://wpfusion.com/wp-content/uploads/2020/12/Multiple-Tables@2x.png) Syncing data between your CRM and multiple WordPress tables can require some extra attention if using a non-supported plugin

And then in the code, that requires three functions:

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#detect-the-custom-fields-and-list-them-for-sync) Detect the custom fields and list them for sync

Step one is figuring out which fields are available, and using the [wpf\_meta\_fields](https://wpfusion.com/documentation/filters/wpf_meta_fields/) filter to register them as available for sync.

With BuddyPress we make use of the `bp_xprofile_get_groups()` function, like

```php
function example_prepare_buddypress_fields( $meta_fields ) {

	// Get the field groups

	$groups = bp_xprofile_get_groups( array(
		'fetch_fields' => true,
	) );

	foreach ( $groups as $group ) {

		foreach ( $group->fields as $field ) {

			// Register the field in the list using the ID and label

			$key = 'bbp_field_' . $field->id;

			$meta_fields[ $key ] = array(
				'label' => $field->name,
				'type'  => $field->type,
			);

		}
	}

	return $meta_fields;

}

add_filter( 'wpf_meta_fields', 'example_prepare_buddypress_fields' );
```

Which makes the fields show up for sync in the settings like this:

[![](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-fields-1024x356.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/buddypress-fields-scaled.jpg)

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#extract-the-data-from-the-custom-table-and-sync-it-to-the-crm) Extract the data from the custom table and sync it to the CRM

When a user registers or a [Push User Meta operation](https://wpfusion.com/documentation/tutorials/batch-operations/#push-user-meta) is run, WP Fusion tries to get all of the data it can out of the database for that user.

That data is then passed through the [wpf\_get\_user\_meta](https://wpfusion.com/documentation/filters/wpf_get_user_meta/) filter, which allows us to merge in data from different sources.

For example the code to load and sync the XProfile data would look like:

```php
function example_get_buddypress_fields( $user_meta, $user_id ) {

	$profile_data = BP_XProfile_ProfileData::get_all_for_user( $user_id );

	// Get the profile data and merge it into the user_meta

	foreach ( $profile_data as $field ) {
		$key               = 'bbp_field_' . $field['field_id'];
		$user_meta[ $key ] = $field['field_data'];
	}

	return $user_meta;

}

add_filter( 'wpf_get_user_meta', 'example_get_buddypress_fields', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#load-data-from-the-crm-into-the-custom-tables) Load data from the CRM into the custom tables

Then, going the other direction, we want to make sure that data loaded from the CRM is properly stored in the custom database table, not the `wp_usermeta` table.

For that we make use of the `wpf_set_user_meta` filter. For example with BuddyPress, that code looks like:

```php
function example_set_buddypress_fields( $user_meta, $user_id ) {

	foreach ( $user_meta as $key => $value ) {

		if ( strpos( $key, 'bbp_field_' ) === 0 ) { // If the field key starts with bbp_field_

			$field_id = str_replace( 'bbp_field_', '', $key );

			$field        = new BP_XProfile_ProfileData( $field_id, $user_id );
			$field->value = $value;
			$field->save(); // Save the field to the wp_bp_xprofile_data table

			unset( $user_meta[ $key ] ); // unset() the value so it's not saved to wp_usermeta

		}
	}

	return $user_meta;

}

add_filter( 'wpf_set_user_meta', 'example_set_buddypress_fields', 10, 2 );
```

And there you have it. With those three code snippets, you can register and bidirectionally sync a user meta field from a custom database table.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#data-thats-not-in-a-table) Data that’s not in a table

There may be some things you’d like to sync with your CRM that _aren’t actually stored in any one place_. Some examples:

- Customer lifetime value
- Most recently commented post
- Most recent quiz score
- Subscription renewal date

With things like this, they aren’t actually stored in any one place in the database that can be directly synced with your CRM, you’d have to write the code to calculate the values.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#register-the-field) Register the field

For example, let’s say you want to sync a WooCommerce customer’s lifetime value with your CRM. First register the field in the WP Fusion settings.

```php
function example_prepare_ltv_field( $meta_fields ) {

	$meta_fields['lifetime_value'] = array(
		'label'  => 'Lifetime Value',
		'group'  => 'woocommerce',
		'pseudo' => true,
	);

	return $meta_fields;

}

add_filter( 'wpf_meta_fields', 'example_prepare_ltv_field' );
```

In this example we’ve set `pseudo` to `true` to indicate that the field doesn’t really exist. This is optional but it stops WP Fusion from loading the value back from your CRM, and filling up your database with unnecessary meta values.

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#calculate-and-sync-the-data) Calculate and sync the data

Similar to the BuddyPress example, we’ll use the `wpf_get_user_meta` filter to merge the custom value into the data that’s being sent to the CRM.

```php
function example_sync_lifetime_value( $user_meta, $user_id ) {

	$user_meta['lifetime_value'] = 0;

	$customer_orders = get_posts( array(
		'posts_per_page' => -1,
		'post_type'      => 'shop_order',
		'post_status'    => wc_get_is_paid_statuses(),
		'meta_key'       => '_billing_email',
		'meta_value'     => $user_meta['billing_email'],
		'orderby'        => 'ID',
		'order'          => 'DESC',
	));

	if ( ! empty( $customer_orders ) ) {

		foreach ( $customer_orders as $order_id ) {

			$order = wc_get_order( $order_id );

			$order_total = $order->get_total();

			$user_meta['lifetime_value'] += floatval( $order_total );

		}
	}

	return $user_meta;

}

add_filter( 'wpf_get_user_meta', 'example_sync_lifetime_value', 10, 2 );
```

In this case, the code is quite a bit more complicated, since we’re not just pulling the data out from another part of the database. To calculate the lifetime value you first need to search for all orders placed by that customer, and then for each order increment the lifetime value field by that order’s total.

This also can introduce performance problems on stores with a large number of orders. In those cases you might want to cache the value using a transient, or create a separate meta key that tracks the customer’s LTV and is incremented with each new order.

### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#sync-booking-dates-from-multiple-fooevents-products-to-different-date-fields-in-the-crm) Sync booking dates from multiple FooEvents products to different date fields in the CRM

#### [\#](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/\#sync-subscription-fields-from-multiple-subscription-products-to-their-own-fields) Sync subscription fields from multiple subscription products to their own fields

This example works with WooCommerce subscriptions, it registers each of your subscription products as a separate field on the contact fields list. For each you can sync the renewal date, status, and start date to a separate custom field in your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#overview)
- [Normal tables](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#normal-tables)
- [User data that's in a different table](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#user-data-thats-in-a-different-table)
- [Detect the custom fields and list them for sync](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#detect-the-custom-fields-and-list-them-for-sync)
- [Extract the data from the custom table and sync it to the CRM](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#extract-the-data-from-the-custom-table-and-sync-it-to-the-crm)
- [Load data from the CRM into the custom tables](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#load-data-from-the-crm-into-the-custom-tables)
- [Data that's not in a table](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#data-thats-not-in-a-table)
- [Register the field](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#register-the-field)
- [Calculate and sync the data](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#calculate-and-sync-the-data)
- [Examples](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#examples)
- [Sync booking dates from multiple FooEvents products to different date fields in the CRM](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#sync-booking-dates-from-multiple-fooevents-products-to-different-date-fields-in-the-crm)
- [Sync subscription fields from multiple subscription products to their own fields](https://wpfusion.com/documentation/advanced-developer-tutorials/detecting-and-syncing-additional-fields/#sync-subscription-fields-from-multiple-subscription-products-to-their-own-fields)

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