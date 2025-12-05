---
url: "https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/"
title: "wpf_woocommerce_customer_data | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#content)

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

# wpf\_woocommerce\_customer\_data

- Published onDecember 26, 2019
- Last updated on October 1, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_woocommerce\_customer\_data

### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#overview) Overview

This filter is run during a WooCommerce checkout, after WP Fusion has extracted the customer data from the order object. It can be used to sync additional data from a WooCommerce order to custom fields in your CRM.

To use the code examples below, add them to your active theme’s functions.php file.

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#parameters) Parameters

- `$customer_data`: This is an array of key value pairs representing WordPress meta fields and their corresponding values.
- `$order`: The WooCommerce order object

### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#sync-the-woocommerce-total-order-value-to-a-custom-field) Sync the WooCommerce total order value to a custom field

```php
function get_order_total( $customer_data, $order ) {

	$customer_data['order_total'] = $order->get_total();

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'get_order_total', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#sync-the-coupon-code-used-on-an-order-to-a-custom-field) Sync the coupon code used on an order to a custom field

```php
// Add the coupon field as available for sync on the Contact Field tab in the WPF settings

function wpf_coupon_meta_fields( $fields ) {

	$fields['wc_coupon'] = array( 'label' => 'Coupon', 'type' => 'text', 'group' => 'woocommerce' );

	return $fields;

}

add_filter( 'wpf_meta_fields', 'wpf_coupon_meta_fields' );

// Get the coupon code of the first coupon used on the order and add it to the order data

function wpf_sync_coupon( $customer_data, $order ) {

	$coupons = $order->get_coupon_codes();

	if( ! empty( $coupons ) ) {
		$customer_data['wc_coupon'] = $coupons[0];
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'wpf_sync_coupon', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#get-a-custom-date-field-off-an-order-product-and-sync-it-to-the-contact-record) Get a custom date field off an order product and sync it to the contact record

```php
// Add the date field as available for sync on the Contact Field tab in the WPF settings

function wpf_product_meta_fields( $fields ) {

	$fields['course_date'] = array( 'label' => 'Course Date', 'type' => 'date', 'group' => 'woocommerce' );

	return $fields;

}

add_filter( 'wpf_meta_fields', 'wpf_product_meta_fields' );

// Get the date field off the product and merge it into the customer data

function get_product_data( $customer_data, $order ) {

	foreach ( $order->get_items() as $item ) {

		$product_id = $item->get_product_id();

		$meta_value = get_post_meta( $product_id, 'course_date_field_key', true );

		if ( ! empty( $meta_value ) ) {
			$customer_data['course_date'] = $meta_value;
		}
	}

	return $customer_data;

}
add_filter( 'wpf_woocommerce_customer_data', 'get_product_data', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#sync-the-quantity-of-a-specific-order-item-to-a-custom-field) Sync the quantity of a specific order item to a custom field

```php
// Add the field as available for sync on the Contact Field tab in the WPF settings

function wpf_product_meta_fields( $fields ) {

	$fields['item_quantity'] = array( 'label' => 'Item Quantity', 'type' => 'int', 'group' => 'woocommerce' );

	return $fields;

}

add_filter( 'wpf_meta_fields', 'wpf_product_meta_fields' );

// Get the quantity from the order item with product ID 123 and merge it into the customer data

function get_product_data( $customer_data, $order ) {

	foreach ( $order->get_items() as $item ) {

		if ( 123 === $item->get_product_id() ) {
			$customer_data['item_quantity'] = $item->get_quantity();
		}
	}

	return $customer_data;

}
add_filter( 'wpf_woocommerce_customer_data', 'get_product_data', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#sync-the-customers-lifetime-value-to-a-custom-field) Sync the customer’s lifetime value to a custom field

```php
function wp_fusion_sync_lifetime_value_with_order( $customer_data, $order ) {
    // Fetch orders with WooCommerce HPOS compatibility
    $args = array(
        'limit'    => -1,
        'customer' => $customer_data['billing_email'],
        'status'   => wc_get_is_paid_statuses(),
        'orderby'  => 'ID',
        'order'    => 'DESC',
    );

    // Query orders using wc_get_orders (compatible with HPOS)
    $customer_orders = wc_get_orders( $args );

    // Initialize lifetime value
    $customer_data['lifetime_value'] = 0;

    if ( ! empty( $customer_orders ) ) {
        foreach ( $customer_orders as $customer_order ) {
            // Get the total order amount
            $order_total = $customer_order->get_total();
            $customer_data['lifetime_value'] += floatval( $order_total );
        }
    }

    return $customer_data;
}

add_filter( 'wpf_woocommerce_customer_data', 'wp_fusion_sync_lifetime_value_with_order', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#ignore-an-order) Ignore an order

You can return an empty value from the `wpf_woocommerce_customer_data` filter in order to have WP Fusion ignore a WooCommerce order. In this example we’re going to ignore orders unless their status is `completed`:

```php
function wpf_only_allow_completed( $customer_data, $order ) {

	if ( 'completed' !== $order->get_status() ) {
		return null;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'wpf_only_allow_completed', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#dont-process-orders-in-real-time) Don’t process orders in real time

In this example, we will _not_ sync any orders in real time as customers check out on your store.

This can be used in combination with a [scheduled batch operation](https://wpfusion.com/documentation/advanced-developer-tutorials/scheduled-synchronization-using-cron/#sync-woocommerce-orders-daily) to sync orders later, when there are more resources available on the site.

```php
function wpf_dont_process_orders_in_real_time( $customer_data ) {

	if ( did_action( 'woocommerce_checkout_process' ) ) {
		return null;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'wpf_dont_process_orders_in_real_time' );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#only-sync-existing-customers) Only sync existing customers

This example will only sync the order data to your CRM if the customer is a registered WordPress user and already has a CRM contact record. If it’s a new customer or existing user without a CRM contact ID, they will not be synced.

```php
function only_sync_existing_contacts( $customer_data, $order ) {

	if ( empty( wpf_get_contact_id( $order->get_user_id() ) ) ) {
		return false;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'only_sync_existing_contacts', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/\#only-sync-customers-who-opt-in-to-marketing) Only sync customers who opt in to marketing

Because WP Fusion uses tags applied at checkout to [unlock content](https://wpfusion.com/documentation/getting-started/access-control/), [enroll users into courses](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment), and otherwise deliver access to purchased products— all customers will be synced with your CRM, regardless of whether or not they’ve consented to marketing.

It’s then up to you to use the tag and/or custom field value in your campaigns and automations to exclude contacts from marketing if they haven’t opted in.

On some simple stores, you may want to completely disable the sync of customers with your CRM if they haven’t [opted in to marketing](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins). This can be achieved with the following filter, added to your functions.php file:

```php
function do_not_sync_unconfirmed_customers( $customer_data ) {

	if ( empty( $customer_data['email_optin'] ) ) {
		return false;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'do_not_sync_unconfirmed_customers' );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#overview)
- [Parameters](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#parameters)
- [Examples](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#examples)
- [Sync the WooCommerce total order value to a custom field](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#sync-the-woocommerce-total-order-value-to-a-custom-field)
- [Sync the coupon code used on an order to a custom field](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#sync-the-coupon-code-used-on-an-order-to-a-custom-field)
- [Get a custom date field off an order product and sync it to the contact record](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#get-a-custom-date-field-off-an-order-product-and-sync-it-to-the-contact-record)
- [Sync the quantity of a specific order item to a custom field](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#sync-the-quantity-of-a-specific-order-item-to-a-custom-field)
- [Sync the customer's lifetime value to a custom field](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#sync-the-customers-lifetime-value-to-a-custom-field)
- [Ignore an order](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#ignore-an-order)
- [Don't process orders in real time](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#dont-process-orders-in-real-time)
- [Only sync existing customers](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#only-sync-existing-customers)
- [Only sync customers who opt in to marketing](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/#only-sync-customers-who-opt-in-to-marketing)

### In this chapter

- [wpf\_admin\_override](https://wpfusion.com/documentation/filters/wpf_admin_override/ "wpf_admin_override")
- [wpf\_api\_update\_contact\_args](https://wpfusion.com/documentation/filters/wpf_api_update_contact_args/ "wpf_api_update_contact_args")
- [wpf\_api\_{$method\_name}](https://wpfusion.com/documentation/filters/wpf_api_method_name/ "wpf_api_{$method_name}")
- [wpf\_crm\_object\_type](https://wpfusion.com/documentation/filters/wpf_crm_object_type/ "wpf_crm_object_type")
- [wpf\_ecommerce\_order\_args](https://wpfusion.com/documentation/filters/wpf_ecommerce_order_args/ "wpf_ecommerce_order_args")
- [wpf\_elementor\_can\_access](https://wpfusion.com/documentation/filters/wpf_elementor_can_access/ "wpf_elementor_can_access")
- [wpf\_event\_espresso\_customer\_data](https://wpfusion.com/documentation/filters/wpf_event_espresso_customer_data/ "wpf_event_espresso_customer_data")
- [wpf\_event\_tickets\_apply\_tags](https://wpfusion.com/documentation/filters/wpf_event_tickets_apply_tags/ "wpf_event_tickets_apply_tags")
- [wpf\_event\_tickets\_attendee\_data](https://wpfusion.com/documentation/filters/wpf_event_tickets_attendee_data/ "wpf_event_tickets_attendee_data")
- [wpf\_format\_field\_value](https://wpfusion.com/documentation/filters/wpf_format_field_value/ "wpf_format_field_value")
- [wpf\_forms\_apply\_tags](https://wpfusion.com/documentation/filters/wpf_forms_apply_tags/ "wpf_forms_apply_tags")
- [wpf\_forms\_pre\_submission](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission/ "wpf_forms_pre_submission")
- [wpf\_forms\_pre\_submission\_contact\_id](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/ "wpf_forms_pre_submission_contact_id")
- [wpf\_get\_user\_id](https://wpfusion.com/documentation/filters/wpf_get_user_id_filter/ "wpf_get_user_id")
- [wpf\_get\_user\_meta](https://wpfusion.com/documentation/filters/wpf_get_user_meta/ "wpf_get_user_meta")
- [wpf\_import\_user](https://wpfusion.com/documentation/filters/wpf_import_user/ "wpf_import_user")
- [wpf\_meta\_fields](https://wpfusion.com/documentation/filters/wpf_meta_fields/ "wpf_meta_fields")
- [wpf\_post\_type\_rules](https://wpfusion.com/documentation/filters/wpf_post_type_rules/ "wpf_post_type_rules")
- [wpf\_pulled\_user\_meta](https://wpfusion.com/documentation/filters/wpf_pulled_user_meta/ "wpf_pulled_user_meta")
- [wpf\_query\_filter\_cache\_time](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/ "wpf_query_filter_cache_time")
- [wpf\_query\_filter\_get\_posts\_args](https://wpfusion.com/documentation/filters/wpf_query_filter_get_posts_args/ "wpf_query_filter_get_posts_args")
- [wpf\_redirect\_url](https://wpfusion.com/documentation/filters/wpf_redirect_url/ "wpf_redirect_url")
- [wpf\_return\_after\_login\_url](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/ "wpf_return_after_login_url")
- [wpf\_salesforce\_query\_args](https://wpfusion.com/documentation/filters/wpf_salesforce_query_args/ "wpf_salesforce_query_args")
- [wpf\_should\_filter\_query](https://wpfusion.com/documentation/filters/wpf_should_filter_query/ "wpf_should_filter_query")
- [wpf\_user\_can\_access](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/ "wpf_user_can_access")
- [wpf\_user\_register](https://wpfusion.com/documentation/filters/wpf_user_register/ "wpf_user_register")
- [wpf\_user\_update](https://wpfusion.com/documentation/filters/wpf_user_update/ "wpf_user_update")
- [wpf\_watched\_meta\_fields](https://wpfusion.com/documentation/filters/wpf_watched_meta_fields/ "wpf_watched_meta_fields")
- [wpf\_woocommerce\_apply\_tags\_checkout](https://wpfusion.com/documentation/filters/wpf_woocommerce_apply_tags_checkout/ "wpf_woocommerce_apply_tags_checkout")
- [wpf\_woocommerce\_attendee\_data](https://wpfusion.com/documentation/filters/wpf_woocommerce_attendee_data/ "wpf_woocommerce_attendee_data")
- [wpf\_woocommerce\_customer\_data](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/ "wpf_woocommerce_customer_data")
- [wpf\_woocommerce\_subscription\_status\_apply\_tags](https://wpfusion.com/documentation/filters/wpf_woocommerce_subscription_status_apply_tags/ "wpf_woocommerce_subscription_status_apply_tags")
- [wpf\_woocommerce\_subscription\_sync\_fields](https://wpfusion.com/documentation/filters/wpf_woocommerce_subscription_sync_fields/ "wpf_woocommerce_subscription_sync_fields")
- [wpf\_woocommerce\_user\_id](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/ "wpf_woocommerce_user_id")

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