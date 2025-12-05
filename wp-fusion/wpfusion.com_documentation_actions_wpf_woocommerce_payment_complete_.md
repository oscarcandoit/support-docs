---
url: "https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/"
title: "wpf_woocommerce_payment_complete | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/#content)

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

# wpf\_woocommerce\_payment\_complete

- Published onMay 8, 2020
- Last updated on June 24, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Actions](https://wpfusion.com/documentation/#actions)
- /
- wpf\_woocommerce\_payment\_complete

### [\#](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/\#overview) Overview

This action is triggered whenever WP Fusion has completed processing a WooCommerce order

#### [\#](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/\#parameters) Parameters

- `$order_id`: _(int)_ The order ID
- `$contact_id`: ( _string)_ The contact ID that was created or updated at checkout

### [\#](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/\#send-a-custom-field-to-your-crm) Send a custom field to your CRM

The example below will update a custom field in the CRM (with key `order_total`) with the order total after an order has been placed.

```php
function my_woo_payment_complete( $order_id, $contact_id ) {

	$order = wc_get_order( $order_id );

	$update_data = array( 'order_total' => $order->get_total() );

	wp_fusion()->crm->update_contact( $contact_id, $update_data, false );


}

add_action( 'wpf_woocommerce_payment_complete', 'my_woo_payment_complete', 10, 2 );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/#overview)
- [Parameters](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/#parameters)
- [Examples](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/#examples)
- [Send a custom field to your CRM](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/#send-a-custom-field-to-your-crm)

### In this chapter

- [wpf\_forms\_post\_submission](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/ "wpf_forms_post_submission")
- [wpf\_pushed\_user\_meta](https://wpfusion.com/documentation/actions/wpf_pushed_user_meta/ "wpf_pushed_user_meta")
- [wpf\_tags\_modified](https://wpfusion.com/documentation/actions/wpf_tags_modified/ "wpf_tags_modified")
- [wpf\_user\_created](https://wpfusion.com/documentation/actions/wpf_user_created/ "wpf_user_created")
- [wpf\_user\_imported](https://wpfusion.com/documentation/actions/wpf_user_imported/ "wpf_user_imported")
- [wpf\_user\_updated](https://wpfusion.com/documentation/actions/wpf_user_updated/ "wpf_user_updated")
- [wpf\_woocommerce\_payment\_complete](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/ "wpf_woocommerce_payment_complete")
- [wp\_fusion\_init](https://wpfusion.com/documentation/actions/wp_fusion_init/ "wp_fusion_init")
- [wp\_fusion\_init\_crm](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/ "wp_fusion_init_crm")

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