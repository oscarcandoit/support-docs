---
url: "https://wpfusion.com/documentation/actions/wpf_tags_modified/"
title: "wpf_tags_modified | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/actions/wpf_tags_modified/#content)

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

# wpf\_tags\_modified

- Published onNovember 27, 2016
- Last updated on January 31, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Actions](https://wpfusion.com/documentation/#actions)
- /
- wpf\_tags\_modified

### [\#](https://wpfusion.com/documentation/actions/wpf_tags_modified/\#overview) Overview

This action is triggered whenever a user’s tags are modified.

#### [\#](https://wpfusion.com/documentation/actions/wpf_tags_modified/\#parameters) Parameters

- `$user_id`: The user ID
- `$user_tags`: An array of all of the user’s current tags

### [\#](https://wpfusion.com/documentation/actions/wpf_tags_modified/\#see-also) See also

- `wpf_tags_applied`: Triggered whenever tags are added to a user
- `wpf_tags_removed`: Triggered whenever tags are removed from a user

### [\#](https://wpfusion.com/documentation/actions/wpf_tags_modified/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/actions/wpf_tags_modified/\#remove-a-tag-when-another-tag-is-applied) Remove a tag when another tag is applied

WP Fusion includes a lot of interfaces for applying tags, but because removing tags is less common most of our integrations don’t include options for removing tags.

This example removes the tag _Pending Signup_ when the tag _Profile Complete_ is applied.

```php
function remove_pending_signup_tag( $user_id, $tags_applied ) {

	$tag_to_check  = wpf_get_tag_id( 'Profile Complete' );
	$tag_to_remove = wpf_get_tag_id( 'Pending Signup' );

	if ( in_array( $tag_to_check, $tags_applied ) ) {
		wp_fusion()->user->remove_tags( array( $tag_to_remove ), $user_id );
	}

}

add_action( 'wpf_tags_applied', 'remove_pending_signup_tag', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/actions/wpf_tags_modified/\#debug-a-tag-change) Debug a tag change

This example writes a backtrace to the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/) to figure out where a tag change came from.

It can be especially helpful when using a CRM on the same site like FluentCRM or Groundhogg, as you can see what page or automation triggered the tag change.

```php
function debug_tags_modified( $user_id, $user_tags ) {

	if ( user_can( $user_id, 'manage_options' ) ) {
		wpf_log( 'notice', $user_id, '<pre>' . print_r( debug_backtrace( DEBUG_BACKTRACE_IGNORE_ARGS, 50 ), true ) . '</pre>' );
	}

}

add_action( 'wpf_tags_modified', 'debug_tags_modified', 10, 2 );
```

This example limits the logging to administrators (users with the `manage_options` capability), but it could also be adjusted to look for specific user IDs, contact IDs, or tag IDs.

[![](https://wpfusion.com/wp-content/uploads/2016/11/tags-modified-debug-backtrace-1024x494.jpeg)](https://wpfusion.com/wp-content/uploads/2016/11/tags-modified-debug-backtrace-scaled.jpeg)

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/actions/wpf_tags_modified/#overview)
- [Parameters](https://wpfusion.com/documentation/actions/wpf_tags_modified/#parameters)
- [See also](https://wpfusion.com/documentation/actions/wpf_tags_modified/#see-also)
- [Examples](https://wpfusion.com/documentation/actions/wpf_tags_modified/#examples)
- [Remove a tag when another tag is applied](https://wpfusion.com/documentation/actions/wpf_tags_modified/#remove-a-tag-when-another-tag-is-applied)
- [Debug a tag change](https://wpfusion.com/documentation/actions/wpf_tags_modified/#debug-a-tag-change)

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