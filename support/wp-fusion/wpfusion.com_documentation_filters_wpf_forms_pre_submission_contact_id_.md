---
url: "https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/"
title: "wpf_forms_pre_submission_contact_id | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#content)

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

# wpf\_forms\_pre\_submission\_contact\_id

- Published onFebruary 10, 2021
- Last updated on July 21, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_forms\_pre\_submission\_contact\_id

### [\#](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/\#overview) Overview

This filter is run when WP Fusion is processing a form submission from one of our [supported form plugins](https://wpfusion.com/documentation/#lead-generation).

It is triggered after WP Fusion has attempted to locate a contact ID in the CRM for the form submission, but before a contact record is created / updated, and before any tags are applied.

To use the code examples below, add them to your active theme’s functions.php file.

#### [\#](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/\#alternate-filters) Alternate filters

For more precise targeting there are two alternate filters with the same arguments:

- `wpf_{integration slug}_pre_submission_contact_id` : Where `{integration_slug}` is the name of the form integration, for example `wpf_gform_pre_submission_contact_id```

#### [\#](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/\#parameters) Parameters

- `$contact_id` _(string\|false)_: The contact ID in the CRM to be updated, or `false` if no match found
- `$update_data` _(array)_: The data about to be synced to the CRM, in key => value pairs
- `$user_id` _(int)_: The ID of the registered user who submitted the form, or `0` for guest
- `$form_id` _(int)_: The ID of the submitted form

### [\#](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/\#force-all-form-submissions-to-create-a-new-contact-record) Force all form submissions to create a new contact record

This is a simple example that stops WP Fusion from trying update existing contact records in the CRM from form submissions. All form submissions will create a new contact.

```php
add_filter( 'wpf_forms_pre_submission_contact_id', '__return_false' );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/\#force-all-form-submissions-to-create-a-new-contact-record-by-form-id) Force all form submissions to create a new contact record by form ID

This is the same as the example above but only runs on form IDs 22 and 29

```php
function always_create_new_contacts( $contact_id, $update_data, $user_id, $form_id ) {

	if ( 22 == $form_id || 29 == $form_id ) {
		$contact_id = false;
	}

	return $contact_id;

}

add_filter( 'wpf_forms_pre_submission_contact_id', 'always_create_new_contacts', 10, 4 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/\#use-custom-lookup-logic-for-contact-records-infusionsoft) Use custom lookup logic for contact records – Infusionsoft

By default WP Fusion uses the first email address found on a submitted form when determining whether to create or update a contact record in your CRM.

In some cases you may want to use more complex rules for determining when a new record should be created.

This example for Infusionsoft attempts to match against the Email Address 2 and Email Address 3 fields in addition to the Email Address field. That means that if the form is submitted and the entered email matches the Email Address 3 field on an existing contact, that contact record will be updated (rather than a new contact record being added).

```php
function wpf_lookup_additional_emails( $contact_id, $update_data, $user_id, $form_id ) {

	if ( empty( $contact_id ) ) {

		$email = $update_data['Email'];

		wp_fusion()->crm->connect();

		$query  = array( 'EmailAddress2' => $email );
		$result = wp_fusion()->crm->app->dsQuery( 'Contact', 1, 0, $query, array( 'Id' ) );

		if ( isset( $result[0]['Id'] ) ) {

			return $result[0]['Id'];

		}

		$query  = array( 'EmailAddress3' => $email );
		$result = wp_fusion()->crm->app->dsQuery( 'Contact', 1, 0, $query, array( 'Id' ) );

		if ( isset( $result[0]['Id'] ) ) {

			return $result[0]['Id'];

		}
	}

	return $contact_id;

}

add_filter( 'wpf_forms_pre_submission_contact_id', 'wpf_lookup_additional_emails', 10, 4 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/\#use-custom-lookup-logic-for-contact-records-salesforce) Use custom lookup logic for contact records – Salesforce

This example for Salesforce only updates an existing contact record if the email address, first name, and last name match. Otherwise a new record will be created.

```php
function wpf_forms_name_lookup( $contact_id, $update_data, $user_id, $form_id ) {

	$params = wp_fusion()->crm->get_params(); // get the authentication headers and other API params

	// URL-encode the three lookup fields

	$email_address = urlencode( $update_data['Email'] );
	$first_name    = urlencode( $update_data['FirstName'] );
	$last_name     = urlencode( $update_data['LastName'] );

	// this is the SOQL, Salesforce Object Query Language:

	$query_args = array(
		'q' => "SELECT Id from {wp_fusion()->crm->object_type} WHERE Email = '{$email_address}' AND FirstName = '{$first_name}' AND LastName = '{$last_name}'",
	);

	$request  = add_query_arg( $query_args, wp_fusion()->crm->instance_url . '/services/data/v42.0/query' );
	$response = wp_remote_get( $request, $params );

	if ( is_wp_error( $response ) ) {

		// If an error was encountered, log it
		wpf_log( 'error', $user_id, 'Error looking up Salesforce contact: ' . $response->get_error_message() );
		return false;

	}

	$response = json_decode( wp_remote_retrieve_body( $response ) );

	if ( empty( $response ) || empty( $response->records ) ) {

		// If no match was found, return false so a new contact is created
		return false;

	}

	// Return the ID of the contact that matched the email, first name, and last name
	// It's this contact ID that will be updated by the form submission

	return $response->records[0]->Id;

}

add_filter( 'wpf_forms_pre_submission_contact_id', 'wpf_forms_name_lookup', 10, 4 );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#overview)
- [Alternate filters](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#alternate-filters)
- [Parameters](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#parameters)
- [Examples](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#examples)
- [Force all form submissions to create a new contact record](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#force-all-form-submissions-to-create-a-new-contact-record)
- [Force all form submissions to create a new contact record by form ID](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#force-all-form-submissions-to-create-a-new-contact-record-by-form-id)
- [Use custom lookup logic for contact records - Infusionsoft](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#use-custom-lookup-logic-for-contact-records-infusionsoft)
- [Use custom lookup logic for contact records - Salesforce](https://wpfusion.com/documentation/filters/wpf_forms_pre_submission_contact_id/#use-custom-lookup-logic-for-contact-records-salesforce)

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