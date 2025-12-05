---
url: "https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/"
title: "HubSpot Custom Objects | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/#content)

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

# HubSpot Custom Objects

- Published onDecember 15, 2021
- Last updated on May 7, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [CRM Specific Docs](https://wpfusion.com/documentation/#crm-specific-docs)
- /
- HubSpot Custom Objects

### [\#](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/\#overview) Overview

In addition to supporting custom objects with Zoho, Salesforce, and Ontraport via the [`wpf_crm_object_type` filter](https://wpfusion.com/documentation/filters/wpf_crm_object_type/) and the [`add_object()` method](https://wpfusion.com/documentation/functions/add_object/), WP Fusion supports adding and updating custom objects with HubSpot.

For a video walkthrough of custom objects, check out [Data in HubSpot: Custom Objects and Other Tools](https://academy.hubspot.com/lessons/custom-objects) in HubSpot’s Academy.

For additional information and examples please review HubSpot’s [CRM Custom Objects documentation](https://developers.hubspot.com/docs/api/crm/crm-custom-objects).

The examples below assume you have already [created a custom object schema](https://developers.hubspot.com/docs/api/crm/crm-custom-objects) and know the object type ID as well as any association type IDs (if you plan to associate your objects with other objects).

### [\#](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/\#methods) Methods

The methods are basically the same as those with [other CRMs](https://wpfusion.com/documentation/functions/add_object/), those are:

- `add_object( $properties, $object_type_id )`
- `update_object( $object_id, $properties, $object_type_id )`
- `load_object( $object_id, $object_type_id )`

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/\#add_object) add\_object()

This method creates a new object of the specified object type ID. Following the [HubSpot custom objects walkthrough](https://developers.hubspot.com/docs/api/crm/crm-custom-objects), we have created a new Car custom object, with an `objectTypeId` of `2-4370788`.

```php
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
```

Now we have an `$object_id` with the ID of the new object. This can then be used for additional operations.

For example to associate the new object with a contact ID `101`, we can make a `PUT` request against the [associations API](https://developers.hubspot.com/docs/api/crm/associations):

```php
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

Then the new object is associated with the contact, like so:

[![](https://wpfusion.com/wp-content/uploads/2021/12/hubspot-custom-objects-1024x497.jpg)](https://wpfusion.com/wp-content/uploads/2021/12/hubspot-custom-objects.jpg)

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/\#update_object) update\_object()

This method allows you to update an existing object. For example to change our Nissan Frontier with ID `599237525` into a Ford Ranger:

```php
$properties = array(
	'make'  => 'Ford',
	'model' => 'Ranger',
);

$object_id      = '599237525';
$object_type_id = '2-4370788';

$response = wp_fusion()->crm->update_object( $object_id, $properties, $object_type_id );

if ( is_wp_error( $response ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error updating object: ' . $response->get_error_message() );
	return false;
}
```

#### [\#](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/\#load_object) load\_object()

This method loads an object by ID and returns its properties. Note that unlike other CRMs, you must specify the properties you want returned.

Using our Car example from above, we can request the Condition, Year, Make, and Model:

```php
$object_id      = '599237525';
$object_type_id = '2-4370788';
$properties     = array( 'condition', 'year', 'make', 'model' );

$response = wp_fusion()->crm->load_object( $object_id, $object_type_id, $properties );

if ( is_wp_error( $response ) ) {
	wpf_log( 'error', wpf_get_current_user_id(), 'Error loading object: ' . $response->get_error_message() );
	return false;
}

print_r( $response );

/*

Array
(
	[id] => 599237525
	[properties] => Array
		(
			[condition] => used
			[hs_createdate] => 2021-12-15T09:41:24.159Z
			[hs_lastmodifieddate] => 2021-12-15T10:10:22.801Z
			[hs_object_id] => 599237525
			[make] => Ford
			[model] => Ranger
			[year] => 2014
		)

	[createdAt] => 2021-12-15T09:41:24.159Z
	[updatedAt] => 2021-12-15T10:10:22.801Z
	[archived] =>
)

*/
```

### [\#](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/\#companies) Companies

Companies in HubSpot are special in that they are not considered a custom object type, but instead have [their own API](https://developers.hubspot.com/docs/api/crm/companies) (accessible at `https://api.hubapi.com/crm/v3/objects/companies`). The example below runs when a new user registers, or an existing user updates their profile, and syncs any configured fields to the user’s associated HubSpot company. If a company does not exist yet for the user, one will be created.

This is a very simple example and would need additional logic to handle situations where a new user is joining an existing company, and for allowing changing a user’s company, but we hope it’s useful as a starting place.

You may also want to look into [automatically creating and associating companies with contacts](https://knowledge.hubspot.com/object-settings/automatically-create-and-associate-companies-with-contacts).

```php

/**
 * Create or update a HubSpot company for a user.
 *
 * @param int    $user_id     The user ID.
 * @param string $contact_id  The contact ID.
 * @param array  $user_meta   The user meta.
 * @return int|false The company ID, or false if the company could not be created.
 */
function create_or_update_hubspot_company( $user_id, $contact_id, $user_meta ) {

	// The static data to update, or pull it from $user_meta.

	$company_data = array(
		'name'         => 'Company Name',
		'domain'       => 'company.com',
		// 'property_one' => 'Value one',
		// 'property_two' => 'Value two',
		// 'property_three' => $user_meta['user_custom_field'],
	);

	$update_data = array(
		'properties'   => $company_data,
		'associations' => array(
			array(
				'to' => array(
					'id' => $contact_id,
				),
				'types' => array(
					array(
						'associationCategory' => 'HUBSPOT_DEFINED',
						'associationTypeId'   => 280, // "Company to Contact".
					),
				),
			),
		),
	);

	// Get the authorization headers from WP Fusion.
	$params           = wp_fusion()->crm->get_params();
	$params['body']   = wp_json_encode( $update_data );

	// See if we have a company ID already.
	$company_id = get_user_meta( $user_id, 'hubspot_company_id', true );

	if ( empty( $company_id ) ) {
		// New company.
		$request = 'https://api.hubapi.com/crm/v3/objects/companies';
	} else {
		// Update existing company.
		$request = 'https://api.hubapi.com/crm/v3/objects/companies/' . $company_id;
		$params['method'] = 'PUT';
	}

	// Send the API call.
	$response = wp_remote_post( $request, $params );

	if ( is_wp_error( $response ) ) {
		wpf_log( 'error', $user_id, 'Error adding company to HubSpot: ' . $response->get_error_message() );
		return;
	}

	$response = json_decode( wp_remote_retrieve_body( $response ) );

	// Save the company ID to the user meta.
	update_user_meta( $user_id, 'hubspot_company_id', $response->id );

	return $response->id;

}

add_action( 'wpf_pushed_user_meta', 'create_or_update_hubspot_company', 10, 3 );
add_action( 'wpf_user_created', 'create_or_update_hubspot_company', 10, 3 );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/#overview)
- [Methods](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/#methods)
- [add\_object()](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/#add_object)
- [update\_object()](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/#update_object)
- [load\_object()](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/#load_object)
- [Companies](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/#companies)

### In this chapter

- [ActiveCampaign Accounts](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-accounts/ "ActiveCampaign Accounts")
- [ActiveCampaign Event Tracking](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking-via-code/ "ActiveCampaign Event Tracking")
- [ConvertKit Unsubscribes](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unsubscribe-notifications/ "ConvertKit Unsubscribes")
- [Custom fields not loading with AgileCRM](https://wpfusion.com/documentation/crm-specific-docs/custom-fields-not-loading-with-agilecrm/ "Custom fields not loading with AgileCRM")
- [Dynamics 365 - Associating entities](https://wpfusion.com/documentation/crm-specific-docs/dynamics-365-associating-entities/ "Dynamics 365 - Associating entities")
- [HighLevel white-labelled accounts](https://wpfusion.com/documentation/crm-specific-docs/highlevel-white-labelled-accounts/ "HighLevel white-labelled accounts")
- [HubSpot - How to use lists](https://wpfusion.com/documentation/crm-specific-docs/how-lists-work-with-hubspot/ "HubSpot - How to use lists")
- [HubSpot Custom Objects](https://wpfusion.com/documentation/crm-specific-docs/custom-objects-with-hubspot/ "HubSpot Custom Objects")
- [Inactive / Unsubscribed People in Drip](https://wpfusion.com/documentation/crm-specific-docs/inactive-people-in-drip/ "Inactive / Unsubscribed People in Drip")
- [Infusionsoft API Goals](https://wpfusion.com/documentation/crm-specific-docs/infusionsoft-api-goals/ "Infusionsoft API Goals")
- [Klaviyo marketing consent](https://wpfusion.com/documentation/crm-specific-docs/klaviyo-marketing-consent/ "Klaviyo marketing consent")
- [MailerLite double opt-ins](https://wpfusion.com/documentation/crm-specific-docs/mailerlite-double-opt-ins/ "MailerLite double opt-ins")
- [MailerLite email address changes](https://wpfusion.com/documentation/crm-specific-docs/email-address-changes-with-mailerlite/ "MailerLite email address changes")
- [Mautic Points](https://wpfusion.com/documentation/crm-specific-docs/mautic-points/ "Mautic Points")
- [Pipedrive Labels](https://wpfusion.com/documentation/crm-specific-docs/pipedrive-labels/ "Pipedrive Labels")
- [Salesforce Sandbox Accounts](https://wpfusion.com/documentation/crm-specific-docs/salesforce-sandboxes/ "Salesforce Sandbox Accounts")
- [Salesforce Tags](https://wpfusion.com/documentation/crm-specific-docs/salesforce-tags/ "Salesforce Tags")
- [Unexpected Tags with ConvertKit](https://wpfusion.com/documentation/crm-specific-docs/convertkit-unexpected-tags/ "Unexpected Tags with ConvertKit")
- [Updating Leads with ConvertFox, Intercom, and Zoho](https://wpfusion.com/documentation/crm-specific-docs/updating-leads/ "Updating Leads with ConvertFox, Intercom, and Zoho")
- [Zoho Tags](https://wpfusion.com/documentation/crm-specific-docs/zoho-tags/ "Zoho Tags")

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