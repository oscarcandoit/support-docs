---
url: "https://wpfusion.com/documentation/actions/wpf_forms_post_submission/"
title: "wpf_forms_post_submission | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/#content)

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

# wpf\_forms\_post\_submission

- Published onNovember 2, 2021
- Last updated on September 14, 2022

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Actions](https://wpfusion.com/documentation/#actions)
- /
- wpf\_forms\_post\_submission

### [\#](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/\#overview) Overview

This action is run when WP Fusion has finished processing a form entry from one of our [supported form plugins](https://wpfusion.com/documentation/#lead-generation).

It can be used to perform additional actions with the contact ID that was created in your CRM, for example [triggering an event](https://wpfusion.com/documentation/crm-specific-docs/activecampaign-event-tracking/), or updating a note/opportunity.

To use the code examples below, add them to your active theme’s functions.php file.

#### [\#](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/\#parameters) Parameters

- `$update_data` _(array)_: This is an array of data that was synced to the CRM
- `$user_id` _(int)_: The user who submitted the form, `0` if a guest
- `$contact_id` _(string)_: The ID of the contact record created / updated by the form submission
- `$form_id` _(int)_: The ID of the submitted form

### [\#](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/\#redirect-an-elementor-forms-submission-to-an-auto-login-url-on-another-site) Redirect an Elementor forms submission to an auto-login URL on another site

This example runs when an Elementor form is submitted and overrides the form’s redirect to `https://siteb.com/?cid=X`where `X` is the ID of the contact record that was just created or updated by WP Fusion.

This redirect will then start an [auto-login session](https://wpfusion.com/documentation/tutorials/auto-login-links/) for that contact on `https://siteb.com`

```php
function wpf_custom_redirect( $update_data, $user_id, $contact_id, $form_id ) {

	if ( wp_doing_ajax() ) {

		$redirect_url = 'https://siteb.com';
		$query_args   = array( 'cid' => $contact_id );

		wp_send_json_success( [\
			'message' => 'Success!',\
			'data'    => array( 'redirect_url' => add_query_arg( $query_args, $redirect_url ) ),\
		] );
	}

}

add_action( 'wpf_forms_post_submission', 'wpf_custom_redirect', 10, 4 );
```

#### [\#](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/\#assign-points-to-the-contact-in-mautic-after-a-form-is-submitted) Assign points to the contact in Mautic after a form is submitted

This example adds 10 [points](https://docs.mautic.org/en/points) to a contact in Mautic after they submit any form configured with WP Fusion.

```php
 function add_points_in_mautic( $update_data, $user_id, $contact_id, $form_id ) {

	$points = 10;

	wp_remote_post(
		wp_fusion()->crm->url . "api/contacts/{$contact_id}/plus/{$points}",
		wp_fusion()->crm->get_params()
	);

}

add_action( 'wpf_forms_post_submission', 'add_points_in_mautic', 10, 4 );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/#overview)
- [Parameters](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/#parameters)
- [Examples](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/#examples)
- [Redirect an Elementor forms submission to an auto-login URL on another site](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/#redirect-an-elementor-forms-submission-to-an-auto-login-url-on-another-site)
- [Assign points to the contact in Mautic after a form is submitted](https://wpfusion.com/documentation/actions/wpf_forms_post_submission/#assign-points-to-the-contact-in-mautic-after-a-form-is-submitted)

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