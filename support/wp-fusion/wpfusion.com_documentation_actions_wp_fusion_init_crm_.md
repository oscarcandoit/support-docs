---
url: "https://wpfusion.com/documentation/actions/wp_fusion_init_crm/"
title: "wp_fusion_init_crm | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/#content)

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

# wp\_fusion\_init\_crm

- Published onApril 20, 2022
- Last updated on December 14, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Actions](https://wpfusion.com/documentation/#actions)
- /
- wp\_fusion\_init\_crm

### [\#](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/\#overview) Overview

This action is triggered after WP Fusion has loaded the CRM integration module for the active CRM, but before WP Fusion has fully loaded.

It passes the active CRM by reference and allows you to modify properties of the active CRM.

**Note:** This action will not fire if WP Fusion is not connected to a CRM.

### [\#](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/\#whitelabel-the-crm) Whitelabel the CRM

This example renames the active CRM to a custom label.

```php
function wpf_whitelabel_crm( &$crm ) {
	$crm->name = 'Custom Name';
}

add_action( 'wp_fusion_init_crm', 'wpf_whitelabel_crm' );
```

#### [\#](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/\#change-the-view-in-crm-links) Change the View in CRM links

This example changes the _View in CRM_ links across the WP Fusion UI. The `%s` will be replaced by the contact ID of the relevant contact.

```php
function wpf_rewrite_view_in_crm_links( &$crm ) {
	$crm->edit_url = 'https://app.mybrand.com/v2/location/' . $crm->location_id . '/contacts/detail/%s';
}
add_action( 'wp_fusion_init_crm', 'wpf_rewrite_view_in_crm_links' );
```

#### [\#](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/\#use-a-custom-oauth-app) Use a custom OAuth app

For swapping out WP Fusion’s built in OAuth client IDs in order to connect to your own OAuth app, [see this tutorial](https://wpfusion.com/documentation/advanced-developer-tutorials/how-to-use-a-custom-client-id-for-authentication/).

```php
function set_custom_zoho_app( &$crm ) {

	$crm->client_id        = '1000.XXXXXXXXXXXXXXXXXXXXX';
	$crm->client_secret_us = '08dccXXXXXXXXXXXXXXXXXXXXX';

}

add_action( 'wp_fusion_init_crm', 'set_custom_zoho_app' );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/#overview)
- [Examples](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/#examples)
- [Whitelabel the CRM](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/#whitelabel-the-crm)
- [Change the View in CRM links](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/#change-the-view-in-crm-links)
- [Use a custom OAuth app](https://wpfusion.com/documentation/actions/wp_fusion_init_crm/#use-a-custom-oauth-app)

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