---
url: "https://wpfusion.com/documentation/filters/wpf_format_field_value/"
title: "wpf_format_field_value"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_format_field_value/#content)

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

# wpf\_format\_field\_value

- Published onApril 15, 2020
- Last updated on July 1, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_format\_field\_value

### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#overview) Overview

Most of WP Fusion’s supported CRMs support different custom field types in addition to text fields, for example dates, picklists, dropdowns, and radios.

The `wpf_format_field_value` filter is run on each field value before it’s synced to your CRM, to convert WordPress formatted data into the appropriate format in your CRM.

#### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#parameters) Parameters

- `$value`: _(mixed)_ The field value that will be synced to the CRM
- `$field_type`: _(string)_ The field type as shown on the Contact Fields list in the WP Fusion settings
- `$field`: _(string)_ The field’s API name in your CRM

### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#how-it-works-in-wp-fusion) How it works in WP Fusion

This happens in two places, at two priorities. In the class `WPF_CRM_Base` there is a `format_field_value()` function attached to priority 5 that does some standardized formatting for all CRMs:

- Dates are converted into Unix timestamps
- Array values (like multiselects) are combined into a comma-separated string
- Checkbox values are converted to `1` if they are checked or `null` if they are un-checked.

Then in each CRM integration module there is a format\_field\_value() function attached to priority 10, which does additional formatting based on that CRM’s API. For example:

- With ActiveCampaign, multiselect values are separated with pipes \|\| to properly update multiselect fields
- With Infusionsoft dates are converted from their UNIX timestamps into ISO 8601 dates
- With Mautic states and countries are converted into Mautic-compatible state and country abbreviation codes

### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#examples) Examples

You may sometimes need to change the way field values are formatted before being synced to your CRM in addition to WP Fusion’s default formatting. To use the code examples below, add them to your active theme’s functions.php file.

#### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#convert-yes-no-strings-to-checkbox-values) Convert Yes / No strings to checkbox values

This example converts “Yes” and “No” values submitted on a form to boolean values, for updating checkbox-type fields in your CRM.

```php
function custom_format_checkbox( $value, $field_type, $field ) {

	if ( 'Yes' == $value ) {
		$value = true;
	} elseif ( 'No' == $value ) {
		$value = null;
	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_checkbox', 20, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#convert-checkbox-values-to-strings) Convert checkbox values to strings

WP Fusion syncs checkbox values to your CRM as boolean `true` and `null`, which is the most compatible with updating checkbox and radio type custom fields in your CRM.

However, you may want to see the actual text “Yes” and “No” in your CRM. This example converts those boolean values back to strings.

```php
function custom_format_checkbox( $value, $field_type, $field ) {

	if ( 'checkbox' == $field_type ) {

		if ( ! empty( filter_var( $value, FILTER_VALIDATE_BOOLEAN ) ) ) {
			$value = 'Yes';
		} else {
			$value = 'No';
		}
	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_checkbox', 20, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#prepend-a-1-to-phone-numbers) Prepend a 1 to phone numbers

If your CRM has a phone-type field that enforces a certain length, you may need to prepend a country code to the number for it to sync properly.

```php
function custom_format_phone( $value, $field_type, $field ) {

	if ( 'phone' == $field && strlen( (string) $value ) <= 10 ) {

		$value = '1' . $value;

	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_phone', 20, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#custom-formatting-for-dates) Custom formatting for dates

You may want to store a date in a text field in a different format from the default for your CRM.

```php
function custom_format_date( $value, $field_type, $field ) {

	if ( $field_type == 'datepicker' || $field_type == 'date' ) {

		$value = date( 'Y-m-d', strtotime( $value ) );

	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_date', 20, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_format_field_value/\#force-an-empty-value) Force an empty value

By default WP Fusion won’t sync an empty text value to your CRM, to avoid overwriting existing data. You can override this by setting the field’s value to `null`.

In this example we’ll set WP Fusion to always send a `null` value any time data isn’t specified for the CRM field with key `mycrmfieldkey`:

```php
function custom_format_empty_fields( $value, $field_type, $field ) {

	if ( 'mycrmfieldkey' == $field && empty( $value ) ) {

		$value = null;

	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_empty_fields', 4, 3 );
```

Or, to target based on field type:

```php
function custom_format_empty_dates( $value, $field_type, $field ) {

	if ( 'date' === $field_type && empty( $value ) ) {

		$value = null;

	}

	return $value;

}

add_filter( 'wpf_format_field_value', 'custom_format_empty_dates', 4, 3 );
```

Note that the priority on the filters is 4, so it runs before WP Fusion has done any other formatting on the field value.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_format_field_value/#overview)
- [Parameters](https://wpfusion.com/documentation/filters/wpf_format_field_value/#parameters)
- [How it works in WP Fusion](https://wpfusion.com/documentation/filters/wpf_format_field_value/#how-it-works-in-wp-fusion)
- [Examples](https://wpfusion.com/documentation/filters/wpf_format_field_value/#examples)
- [Convert Yes / No strings to checkbox values](https://wpfusion.com/documentation/filters/wpf_format_field_value/#convert-yes-no-strings-to-checkbox-values)
- [Convert checkbox values to strings](https://wpfusion.com/documentation/filters/wpf_format_field_value/#convert-checkbox-values-to-strings)
- [Prepend a 1 to phone numbers](https://wpfusion.com/documentation/filters/wpf_format_field_value/#prepend-a-1-to-phone-numbers)
- [Custom formatting for dates](https://wpfusion.com/documentation/filters/wpf_format_field_value/#custom-formatting-for-dates)
- [Force an empty value](https://wpfusion.com/documentation/filters/wpf_format_field_value/#force-an-empty-value)

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