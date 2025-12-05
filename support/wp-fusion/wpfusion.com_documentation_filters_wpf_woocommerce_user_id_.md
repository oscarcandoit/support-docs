---
url: "https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/"
title: "wpf_woocommerce_user_id | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/#content)

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

# wpf\_woocommerce\_user\_id

- Published onApril 16, 2020
- Last updated on April 16, 2020

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_woocommerce\_user\_id

### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/\#overview) Overview

When WP Fusion processes a WooCommerce checkout for a registered user, it uses the current user’s ID to determine the user’s contact record in your CRM.

That way if a user checks out with a different billing email, their original contact record is properly updated— instead of creating a new contact record and fragmenting your data.

Generally this is desirable, but there may be situations where you don’t want orders to be associated with the current user. For example if your WooCommerce checkouts are being made by agents who are purchasing on behalf of their customers. In that case you would want a new contact record to be created for the customer, rather than updating the contact record of the agent.

The `wpf_woocommerce_user_id` filter allows you to modify the user ID that WP Fusion uses to determine which user should be associated with the checkout. Returning `false` from the filter will tell WP Fusion to treat the checkout as a guest checkout.

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/\#parameters) Parameters

- `$user_id` _(int)_: The user ID to be used for the checkout
- `$order` (object): The WooCommerce order object

### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/\#treat-all-checkouts-as-guest-checkouts) Treat all checkouts as guest checkouts

```php
add_filter( 'wpf_woocommerce_user_id', function( $user_id, $order ) {
	return false;
}, 10, 2 );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/#overview)
- [Parameters](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/#parameters)
- [Examples](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/#examples)
- [Treat all checkouts as guest checkouts](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/#treat-all-checkouts-as-guest-checkouts)

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