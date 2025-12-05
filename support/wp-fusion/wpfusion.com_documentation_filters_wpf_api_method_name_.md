---
url: "https://wpfusion.com/documentation/filters/wpf_api_method_name/"
title: "wpf_api_{$method_name}"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_api_method_name/#content)

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

# wpf\_api\_{$method\_name}

- Published onSeptember 19, 2024
- Last updated on September 8, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_api\_{$method\_name}

### [\#](https://wpfusion.com/documentation/filters/wpf_api_method_name/\#overview) Overview

This filter allows you to override calls to any of WP Fusion’s CRM API methods. It’s inspired by the `get_{$meta_type}_metadata` filter [in WordPress core](https://developer.wordpress.org/reference/hooks/get_meta_type_metadata/).

If a non-null value is returned from this filter, it will bypass sending any API calls to your CRM, and instead use your custom function to handle the API call.

This can be used to override any of WP Fusion’s CRM API methods with your own custom functionality.

#### [\#](https://wpfusion.com/documentation/filters/wpf_api_method_name/\#available-method-names) Available method names

For more information [see the CRM API documentation](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/).

- `get_contact_id`
- `get_tags`
- `apply_tags`
- `remove_tags`
- `add_contact`
- `update_contact`
- `load_contact`
- `load_contacts`
- `track_event` (with [Event Tracking](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/))

#### [\#](https://wpfusion.com/documentation/filters/wpf_api_method_name/\#parameters) Parameters

- `$result` _(null)_: Return a non-null value to override the API call in the CRM class.
- `$args` _(array)_: The array of arguments being passed to the CRM API class. [See the CRM API documentation for reference](https://wpfusion.com/documentation/advanced-developer-tutorials/the-wp-fusion-crm-api/).

### [\#](https://wpfusion.com/documentation/filters/wpf_api_method_name/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/filters/wpf_api_method_name/\#enhanced-contact-lookup-with-name-matching) Enhanced contact lookup with name matching

This example overrides the contact ID lookup with ActiveCampaign so the ID is only returned if the email address, first name, and last name match (for registered users).

```php
/**
 * Get the Contact ID for a given email address, with an additional search by name
 * for registered users.
 *
 * @param null  $result The result. Return a non-null value to override the API call.
 * @param array $args   The arguments passed to the CRM API function.
 * @return string The Contact ID, if found.
 */
function custom_wpf_get_contact_id( $result = null, $args ) {

	// $email_address is the only parameter passed to wp_fusion()->crm->get_contact_id(), so it's stored at $args[0].
	$email_address = $args[0];

	$request_uri = wp_fusion()->crm->api_url . 'api/3/contacts?email=' . rawurlencode( $email_address );

	$user = get_user_by( 'email', $email_address );

	if ( $user ) {

		// If it's a registered user, let's also search by their name.

		$request_uri .= '&search=' . rawurlencode( $user->first_name . ' ' . $user->last_name );

	}

	// Make the API call.

	$response = wp_safe_remote_get( $request_uri, wp_fusion()->crm->get_params() );

	if ( is_wp_error( $response ) ) {
		return $response;
	}

	$response = json_decode( wp_remote_retrieve_body( $response ) );

	if ( empty( $response->contacts ) ) {
		// No matching contact found.
		return false;
	} else {
		// Return the ID of the contact.
		return $response->contacts[0]->id;
	}
}

add_filter( 'wpf_api_get_contact_id', 'custom_wpf_get_contact_id', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_api_method_name/\#cache-contact-ids-to-improve-performance) Cache contact IDs to improve performance

Cache contact ID lookups to reduce API calls and improve performance on high-traffic sites.

```php
function cache_contact_id_lookups( $result = null, $args ) {

    $email_address = $args[0];
    $cache_key = 'wpf_contact_id_' . md5( $email_address );

    // Check cache first
    $cached_id = wp_cache_get( $cache_key );
    if ( false !== $cached_id ) {
        return $cached_id;
    }

    // Let WP Fusion do the normal lookup
    return $result; // null = continue with normal process
}

// Cache the result after normal lookup
function cache_contact_id_result( $contact_id, $email ) {
    if ( $contact_id && ! is_wp_error( $contact_id ) ) {
        $cache_key = 'wpf_contact_id_' . md5( $email );
        wp_cache_set( $cache_key, $contact_id, '', HOUR_IN_SECONDS );
    }
}

add_filter( 'wpf_api_get_contact_id', 'cache_contact_id_lookups', 10, 2 );
add_action( 'wpf_got_contact_id', 'cache_contact_id_result', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_api_method_name/\#log-all-api-calls-for-debugging) Log all API calls for debugging

Override API calls to add comprehensive logging while still executing the original functionality.

```php
function log_all_api_calls( $result = null, $args ) {

    // Get the method name from the current filter
    $current_filter = current_filter();
    $method_name = str_replace( 'wpf_api_', '', $current_filter );

    // Log the API call attempt
    if ( function_exists( 'wpf_log' ) ) {
        wpf_log( 'info', 0, "API Call: {$method_name}", array(
            'meta_array' => array(
                'method' => $method_name,
                'args' => $args,
                'timestamp' => current_time( 'mysql' )
            )
        ));
    }

    // Return null to continue with normal processing
    return $result;
}

// Apply to all API methods
$api_methods = array( 'get_contact_id', 'get_tags', 'apply_tags', 'remove_tags',
                     'add_contact', 'update_contact', 'load_contact' );

foreach ( $api_methods as $method ) {
    add_filter( "wpf_api_{$method}", 'log_all_api_calls', 5, 2 );
}
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_api_method_name/\#prevent-tag-application-during-maintenance) Prevent tag application during maintenance

Temporarily disable tag applications during site maintenance or bulk operations.

```php
function prevent_tags_during_maintenance( $result = null, $args ) {

    // Check if maintenance mode is active
    if ( defined( 'WP_MAINTENANCE_MODE' ) && WP_MAINTENANCE_MODE ) {
        wpf_log( 'notice', 0, 'Tag application blocked - maintenance mode active' );
        return true; // Return success without actually applying tags
    }

    // Check for bulk operations
    if ( doing_action( 'wpf_batch_process' ) ) {
        // Allow normal processing during batch operations
        return $result;
    }

    // Check if it's during specified maintenance hours (e.g., 2-4 AM)
    $current_hour = (int) date( 'H' );
    if ( $current_hour >= 2 && $current_hour <= 4 ) {
        wpf_log( 'notice', 0, 'Tag application deferred - maintenance window' );

        // Queue the tag application for later
        wp_schedule_single_event( time() + HOUR_IN_SECONDS, 'wpf_delayed_apply_tags', $args );

        return true;
    }

    return $result;
}

add_filter( 'wpf_api_apply_tags', 'prevent_tags_during_maintenance', 10, 2 );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_api_method_name/#overview)
- [Available method names](https://wpfusion.com/documentation/filters/wpf_api_method_name/#available-method-names)
- [Parameters](https://wpfusion.com/documentation/filters/wpf_api_method_name/#parameters)
- [Examples](https://wpfusion.com/documentation/filters/wpf_api_method_name/#examples)
- [Enhanced contact lookup with name matching](https://wpfusion.com/documentation/filters/wpf_api_method_name/#enhanced-contact-lookup-with-name-matching)
- [Cache contact IDs to improve performance](https://wpfusion.com/documentation/filters/wpf_api_method_name/#cache-contact-ids-to-improve-performance)
- [Log all API calls for debugging](https://wpfusion.com/documentation/filters/wpf_api_method_name/#log-all-api-calls-for-debugging)
- [Prevent tag application during maintenance](https://wpfusion.com/documentation/filters/wpf_api_method_name/#prevent-tag-application-during-maintenance)

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