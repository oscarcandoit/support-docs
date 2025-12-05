---
url: "https://wpfusion.com/documentation/functions/add_object/"
title: "add_object() | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/functions/add_object/#content)

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

# add\_object()

- Published onJune 24, 2021
- Last updated on December 15, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Functions](https://wpfusion.com/documentation/#functions)
- /
- add\_object()

### [\#](https://wpfusion.com/documentation/functions/add_object/\#overview) Overview

This helper function is available with Ontraport, Zoho, Salesforce, HubSpot, and other CRMs which use custom objects.

It’s a shortcut / alternative to using the [wpf\_crm\_object\_type filter](https://wpfusion.com/documentation/filters/wpf_crm_object_type/), for cases where you just need to add a custom object one time, without changing the object type used for WP Fusion globally.

### [\#](https://wpfusion.com/documentation/functions/add_object/\#parameters) Parameters

- `$data`: _(array)_ An associative array of data to sync to the CRM, using CRM field IDs for the keys
- `$object_type`: _(string)_ The object type you wish to update

### [\#](https://wpfusion.com/documentation/functions/add_object/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/functions/add_object/\#create-a-new-lead-in-salesforce) Create a new Lead in Salesforce

```php
$data = array(
	'Email'     => 'lead@example.com',
	'FirstName' => 'Jane',
	'LastName'  => 'Doe',
);

$lead_id = wp_fusion()->crm->add_object( $data, 'Lead' );
```

#### [\#](https://wpfusion.com/documentation/functions/add_object/\#update-an-event-object-in-zoho-when-an-event-post-type-is-updated-in-wordpress) Update an Event object in Zoho when an Event post type is updated in WordPress

```php
// Runs on any post with post type "event" and updates the "Event" custom object with values Title and EventDate

function create_update_event_object( $post_id, $post, $update ) {

	// Don't run if WP Fusion isn't active, otherwise you'll get an error

	if ( ! function_exists( 'wp_fusion' ) ) {
		return;
	}

	// This is the data to be sent to the CRM

	$event_data = array(
		'Title'     => $post->post_title,
		'EventDate' => get_post_meta( $post_id, 'event_date', true )
	);

	// See if this object has already been synced

	$object_id = get_post_meta( $post_id, wp_fusion()->crm->slug . '_event_id', true );

	if ( empty( $object_id ) {

		// New event

		$object_id = wp_fusion()->crm->add_object( $event_data, 'Event' );

		if ( ! is_wp_error( $object_id ) ) {

			// Save the ID of the new record for future updates.

			update_post_meta( $post_id, wp_fusion()->crm->slug . '_event_id', $object_id );

		} else {

			// Error, log it.

			wpf_log( 'error', 0, 'Error creating event:' . $object_id->get_error_message() );

		}

	} else {

		// Existing event

		wp_fusion()->crm->update_object( $object_id, $event_data, 'Event' );

	}

}

// save_post_event runs whenever an "event" post type is created or updated (see https://developer.wordpress.org/reference/hooks/save_post_post-post_type/)

add_action( 'save_post_event', 'create_update_event_object', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/functions/add_object/\#create-a-custom-car-object-in-hubspot-and-associate-it-with-a-contact) Create a custom Car object in HubSpot and associate it with a contact

For more information on working with custom objects in HubSpot, see [Custom Objects with HubSpot](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/).

```php
define( 'HUBSPOT_API_KEY', 'xx599590-7888-43ed-a896-5abbc2ef9aa2' );

$properties = array(
	'condition'     => 'used',
	'date_received' => '1582416000000',
	'year'          => '2014',
	'make'          => 'Nissan',
	'model'         => 'Frontier',
	'vin'           => '4Y1SL65848Z411439',
	'color'         => 'White',
	'mileage'       => '80000',
	'price'         => '12000',
	'notes'         => 'Excellent condition. No accidents.',
);

$object_type_id = '2-4370788';

$object_id = wp_fusion()->crm->add_object( $properties, $object_type_id );

if ( is_wp_error( $object_id ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error adding object: ' . $object_id->get_error_message() );
	return false;
}

// Do what you want with $object_id here.

// For example to associate it with a contact (https://developers.hubspot.com/docs/api/crm/crm-custom-objects).

$contact_id          = '101';
$association_type_id = '3';

$request = "https://api.hubapi.com/crm/v3/objects/{$object_type_id}/{$object_id}/associations/contacts/{$contact_id}/{$association_type_id}/?hapikey=" . HUBSPOT_API_KEY;

$params   = array( 'method' => 'PUT' );
$response = wp_safe_remote_request( $request, $params );

if ( is_wp_error( $response ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error associating object with contact: ' . $response->get_error_message() );
	return false;
}
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/functions/add_object/#overview)
- [Parameters](https://wpfusion.com/documentation/functions/add_object/#parameters)
- [Examples](https://wpfusion.com/documentation/functions/add_object/#examples)
- [Create a new Lead in Salesforce](https://wpfusion.com/documentation/functions/add_object/#create-a-new-lead-in-salesforce)
- [Update an Event object in Zoho when an Event post type is updated in WordPress](https://wpfusion.com/documentation/functions/add_object/#update-an-event-object-in-zoho-when-an-event-post-type-is-updated-in-wordpress)
- [Create a custom Car object in HubSpot and associate it with a contact](https://wpfusion.com/documentation/functions/add_object/#create-a-custom-car-object-in-hubspot-and-associate-it-with-a-contact)

### In this chapter

- [add\_object()](https://wpfusion.com/documentation/functions/add_object/ "add_object()")
- [apply\_tags()](https://wpfusion.com/documentation/functions/apply_tags/ "apply_tags()")
- [doing\_wpf\_auto\_login()](https://wpfusion.com/documentation/functions/doing_wpf_auto_login/ "doing_wpf_auto_login()")
- [doing\_wpf\_webhook()](https://wpfusion.com/documentation/functions/doing_wpf_webhook/ "doing_wpf_webhook()")
- [pull\_user\_meta()](https://wpfusion.com/documentation/functions/pull_user_meta/ "pull_user_meta()")
- [push\_user\_meta()](https://wpfusion.com/documentation/functions/push_user_meta/ "push_user_meta()")
- [remove\_tags()](https://wpfusion.com/documentation/functions/remove_tags/ "remove_tags()")
- [wpf\_admin\_override()](https://wpfusion.com/documentation/functions/wpf_admin_override-2/ "wpf_admin_override()")
- [wpf\_get\_contact\_id()](https://wpfusion.com/documentation/functions/wpf_get_contact_id/ "wpf_get_contact_id()")
- [wpf\_get\_crm\_field()](https://wpfusion.com/documentation/functions/wpf_get_crm_field/ "wpf_get_crm_field()")
- [wpf\_get\_current\_user()](https://wpfusion.com/documentation/functions/wpf_get_current_user/ "wpf_get_current_user()")
- [wpf\_get\_current\_user\_email()](https://wpfusion.com/documentation/functions/wpf_get_current_user_email/ "wpf_get_current_user_email()")
- [wpf\_get\_datetime\_format()](https://wpfusion.com/documentation/functions/wpf_get_datetime_format/ "wpf_get_datetime_format()")
- [wpf\_get\_field\_type()](https://wpfusion.com/documentation/functions/wpf_get_field_type/ "wpf_get_field_type()")
- [wpf\_get\_lookup\_field()](https://wpfusion.com/documentation/functions/wpf_get_lookup_field/ "wpf_get_lookup_field()")
- [wpf\_get\_option()](https://wpfusion.com/documentation/functions/wpf_get_option/ "wpf_get_option()")
- [wpf\_get\_tags()](https://wpfusion.com/documentation/functions/wpf_get_tags/ "wpf_get_tags()")
- [wpf\_get\_tag\_id()](https://wpfusion.com/documentation/functions/wpf_get_tag_id/ "wpf_get_tag_id()")
- [wpf\_get\_tag\_label()](https://wpfusion.com/documentation/functions/wpf_get_tag_label/ "wpf_get_tag_label()")
- [wpf\_get\_users\_with\_contact\_ids()](https://wpfusion.com/documentation/functions/wpf_get_users_with_contact_ids/ "wpf_get_users_with_contact_ids()")
- [wpf\_get\_users\_with\_tag()](https://wpfusion.com/documentation/functions/wpf_get_users_with_tag/ "wpf_get_users_with_tag()")
- [wpf\_get\_user\_id()](https://wpfusion.com/documentation/functions/wpf_get_user_id/ "wpf_get_user_id()")
- [wpf\_has\_tag()](https://wpfusion.com/documentation/functions/wpf_has_tag/ "wpf_has_tag()")
- [wpf\_is\_field\_active()](https://wpfusion.com/documentation/functions/wpf_is_field_active/ "wpf_is_field_active()")
- [wpf\_is\_pseudo\_field()](https://wpfusion.com/documentation/functions/wpf_is_pseudo_field/ "wpf_is_pseudo_field()")
- [wpf\_is\_staging\_mode()](https://wpfusion.com/documentation/functions/wpf_is_staging_mode/ "wpf_is_staging_mode()")
- [wpf\_is\_user\_logged\_in()](https://wpfusion.com/documentation/functions/wpf_is_user_logged_in/ "wpf_is_user_logged_in()")
- [wpf\_user\_can\_access()](https://wpfusion.com/documentation/functions/wpf_user_can_access/ "wpf_user_can_access()")

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

[![Very Good Plugins LLC Logo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3C/svg%3E)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)