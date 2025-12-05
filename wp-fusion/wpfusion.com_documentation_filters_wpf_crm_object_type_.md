---
url: "https://wpfusion.com/documentation/filters/wpf_crm_object_type/"
title: "wpf_crm_object_type"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_crm_object_type/#content)

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

# wpf\_crm\_object\_type

- Published onAugust 17, 2018
- Last updated on June 30, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_crm\_object\_type

### [\#](https://wpfusion.com/documentation/filters/wpf_crm_object_type/\#overview) Overview

By default WP Fusion interfaces with Contacts in all of our supported CRM integrations. Some platforms like Salesforce, Ontraport, and Zoho support custom object types in addition to contacts (like Leads).

You can override WP Fusion to interface with a different object type via a filter in your functions.php file.

Changing the object type will also reset the fields available for syncing. After changing the object type, please reload the available fields by going to Settings » WP Fusion » Setup and clicking the blue Resync Available Tags & Fields button.

#### [\#](https://wpfusion.com/documentation/filters/wpf_crm_object_type/\#salesforce) Salesforce

For example, to interface with Salesforce’s “leads” component, you would use the following:

```php
add_filter( 'wpf_crm_object_type', function( $object_type ) {
	return 'Lead';
});
```

**Note:** As of WP Fusion 3.41.6, it’s now possible to set the object type for Salesforce without a code snippet. The object type can be set from the Object Type dropdown on the Setup tab in the settings.

[![](https://wpfusion.com/wp-content/uploads/2018/08/salesforce-object-type-1024x458.jpg)](https://wpfusion.com/wp-content/uploads/2018/08/salesforce-object-type.jpg)

#### [\#](https://wpfusion.com/documentation/filters/wpf_crm_object_type/\#zoho) Zoho

To interface with Zoho’s “leads” component, you would use the following:

```php
add_filter( 'wpf_crm_object_type', function( $object_type ) {
	return 'Leads';
});
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_crm_object_type/\#ontraport) Ontraport

Ontraport uses numeric IDs for object types. The default type is `0` for contacts. To override that, pass the ID of your custom object into the filter.

```php
add_filter( 'wpf_crm_object_type', function( $object_type ) {
	return 8;
});
```

### [\#](https://wpfusion.com/documentation/filters/wpf_crm_object_type/\#can-wp-fusion-interface-with-multiple-object-types-at-the-same-time) Can WP Fusion interface with multiple object types at the same time?

**The short answer is no.**

That’s because WP Fusion syncs your WordPress users _bidirectionally_ with the selected object type in your CRM.

That’s usually Contacts, but could also be Leads or a custom object type.

If you take a hypothetical scenario where WP Fusion is configured to sync with both Contacts and Leads at the same time:

- A new Lead is created in Zoho CRM
- A [webhook](https://wpfusion.com/documentation/webhooks/zoho-webhooks/) syncs the Lead back to a new WordPress user account
- The user updates their profile, which creates a Contact in Zoho
- Now you have two duplicate records, one Lead and one Contact, both linked to the same WordPress user

Or

- Email address is updated on jane@doe.com’s lead record
- The changed email address is loaded to Jane’s WordPress user account
- WP Fusion syncs the changed email address to Jane’s contact record

Obviously it doesn’t do any good to have two separate CRM objects that are kept in sync with eachother, since the records will be identical.

And it will slow down your WordPress site having WP Fusion constantly connecting to your CRM to sync the objects with eachother.

#### [\#](https://wpfusion.com/documentation/filters/wpf_crm_object_type/\#conditionally-switching-object-types) Conditionally switching object types

**An exception to that is switching the object type temporarily**, just for certain operations.

For example maybe you have WP Fusion syncing your users bidirectionally with Contacts in your CRM, but you want all Gravity Form submissions to create a new Lead (with a one-way sync).

```php
function my_gform_after_submission( $entry, $form ) {

	if ( ! function_exists( 'wp_fusion' ) ) {
		return false; // Make sure WP Fusion is running
	}

	// Gets the first name and last name from field ID 5, and email from field ID 6
	$contact_data = array(
		'FirstName' => rgar( $entry, '5.3' ),
		'LastName'  => rgar( $entry, '5.6' ),
		'Email'     => rgar( $entry, '6' ),
		'Company'   => 'CompanyName',
	);

	$lead_id = wp_fusion()->crm->add_object( $contact_data, 'Lead' );
}

// Replace "1" with the ID of the form
add_action( 'gform_after_submission_1', 'my_gform_after_submission', 10, 2 );
```

This example runs after a Gravity Form has been submitted and then creates a new lead with the submitted form data, using the [add\_object() method](https://wpfusion.com/documentation/functions/add_object/).

For another example with Salesforce, see this Gist:

#### [\#](https://wpfusion.com/documentation/filters/wpf_crm_object_type/\#alternatives) Alternatives

Implementing a custom object switching solution with WP Fusion is usually a complex project.

In some cases it’s better to use a different plugin for your custom objects, and let WP Fusion focus on the bi-directional sync of your user and customer data.

- For creating or updating additional objects when Contacts are updated, we recommend using Salesforce Flows. [See the tutorial here](https://wpfusion.com/tutorials/syncing-wp-fusion-with-multiple-objects-in-salesforce-the-events-calendar-example/).
- For syncing custom post types with Salesforce objects, we recommend [Object Sync for Salesforce](https://wordpress.org/plugins/object-sync-for-salesforce/).
- For syncing WooCommerce orders with Salesforce orders, we recommend [WooCommerce Salesforce Integration by CRM Perks](https://wordpress.org/plugins/woo-salesforce-plugin-crm-perks/).
- [Gravity Forms Salesforce](https://wordpress.org/plugins/gf-salesforce-crmperks/) can be installed through the WordPress plugin directory. It is quite powerful, as it can send form submissions from your WordPress site to Salesforce as whatever object you need. It’s important to mention that this works for any form created with the [Gravity Forms](http://www.gravityforms.com/) plugin. It’s also important to mention that this does not sync data back from Salesforce into WordPress.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_crm_object_type/#overview)
- [Salesforce](https://wpfusion.com/documentation/filters/wpf_crm_object_type/#salesforce)
- [Zoho](https://wpfusion.com/documentation/filters/wpf_crm_object_type/#zoho)
- [Ontraport](https://wpfusion.com/documentation/filters/wpf_crm_object_type/#ontraport)
- [Can WP Fusion interface with multiple object types at the same time?](https://wpfusion.com/documentation/filters/wpf_crm_object_type/#can-wp-fusion-interface-with-multiple-object-types-at-the-same-time)
- [Conditionally switching object types](https://wpfusion.com/documentation/filters/wpf_crm_object_type/#conditionally-switching-object-types)
- [Alternatives](https://wpfusion.com/documentation/filters/wpf_crm_object_type/#alternatives)

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