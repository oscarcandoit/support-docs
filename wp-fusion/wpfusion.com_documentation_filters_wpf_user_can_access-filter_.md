---
url: "https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/"
title: "wpf_user_can_access | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#content)

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

# wpf\_user\_can\_access

- Published onApril 25, 2016
- Last updated on October 31, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_user\_can\_access

### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#overview) Overview

This filter is run when determining whether a user can access any piece of content on your site that can be protected by WP Fusion, including:

- Posts
- Pages
- Custom post types
- [Widgets](https://wpfusion.com/documentation/getting-started/showing-and-hiding-widgets/)
- Content protected [by shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/)
- [Gutenberg Blocks](https://wpfusion.com/documentation/page-builders/gutenberg/)
- Page builder modules (like [Beaver Builder](https://wpfusion.com/documentation/page-builders/beaver-builder/), [Elementor](https://wpfusion.com/documentation/page-builders/elementor/), [Oxygen](https://wpfusion.com/documentation/page-builders/oxygen/), and [Divi](https://wpfusion.com/documentation/page-builders/divi/))

You can use this filter to create your own dynamic access rules based on criteria that aren’t available through WP Fusion’s meta boxes.

To use the code examples below, add them to your active theme’s functions.php file.

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#parameters) Parameters

- `$can_access`: This variable represents whether or not the user can access the content, as determined by your existing access rules. It will either be `true` or `false`.
- `$user_id`: ID of the current logged in user. Will be `false` if the user isn’t logged in.
- `$post_id`: Post ID for the post being requested. Will be `false` if the item isn’t a post (for example [a Gutenberg block](https://wpfusion.com/documentation/page-builders/gutenberg/))

### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#see-also) See also

- `wpf_user_can_access_post_type`: Runs on a post type, in conjunction with [`wpf_post_type_rules`](https://wpfusion.com/documentation/filters/wpf_post_type_rules/)
- `wpf_user_can_access_archive`: Runs on a taxonomy term ID instead of a post ID, determines if a user has access to a term archive
- `wpf_user_can_access_widget`: Runs on widgets
- `wpf_user_can_access_block`: Runs on Gutenberg blocks

### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#deny-access-to-posts-within-a-certain-category) Deny access to posts within a certain category

The example below will allow access to posts in the category “My Category” only to users who have the tag “Special Tag”.

```php
function restrict_post_categories( $can_access, $user_id, $post_id ) {

	if ( in_category( 'My Category', $post_id ) && ! wp_fusion()->user->has_tag( 'Special Tag', $user_id ) ) {
		return false;
	} else {
		return true;
	}

}

add_filter( 'wpf_user_can_access', 'restrict_post_categories', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#restrict-past-content-by-registration-date) Restrict past content by registration date

This example denies access to any content that was published before the user’s registration date:

```php
function disallow_before_date_published( $can_access, $user_id, $post_id ) {

	$published = get_the_date( 'U', $post_id );
	$userdata  = get_userdata( $user_id );

	if ( strtotime( $userdata->user_registered ) < $published ) {
		$can_access = false;
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'disallow_before_date_published', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#restrict-past-content-by-date-tag-applied) Restrict past content by date tag applied

As an alternative, you can track the date that a specific tag was applied (for example _Paying Member_) using the [wpf\_tags\_applied](https://wpfusion.com/documentation/actions/wpf_tags_modified/) action, and then deny access to any content published before that tag was applied.

This is similar to the functionality with the [Restrict Past Content addon by Restrict Content Pro](https://restrictcontentpro.com/downloads/restrict-past-content/).

```php
function disallow_before_date_published_alt( $can_access, $user_id, $post_id ) {

	$published = get_the_date( 'U', $post_id );
	$startdate = get_user_meta( $user_id, 'startdate', true );

	// If the content was published before the user's startdate field, deny access

	if ( empty( $startdate ) || $startdate < $published ) {
		$can_access = false;
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'disallow_before_date_published_alt', 10, 3 );

function update_tag_applied_timestamp( $user_id, $tags ) {

	// When TAGNAME is applied, save the current time to the startdate field

	if ( in_array( 'TAGNAME', $tags ) ) {
		update_user_meta( $user_id, 'startdate', time() );
	}

}

add_action( 'wpf_tags_applied', 'update_tag_applied_timestamp', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#restrict-content-by-a-users-age) Restrict content by a user’s age

In this example, any post protected by the tag _Adult_ will require the user to be 18 years old or older to view the post.

For this to work you need to collect the user’s birthday in the `date_of_birth` usermeta field.

```php
function restrict_content_by_age( $can_access, $user_id, $post_id ) {

	$settings = get_post_meta( $post_id, 'wpf-settings', true ); // Get the settings

	if ( false == $settings || empty( $settings['allow_tags'] ) ) {
		return $can_access; // Not protected by WP Fusion
	}

	$tag_to_check = wpf_get_tag_id( 'Adult' );

	if ( in_array( $tag_to_check, $settings['allow_tags'] ) ) {

		// The post is protected by the "Adult" tag, check the user's age

		$age = strtotime( get_user_meta( $user_id, 'date_of_birth', true ) );

		if ( false == $age ) {

			// The user's age is unknown, access is denied
			return false;

		} else {

			$minimum_age = strtotime( '+18 years', $age );

			if ( time() < $minimum_age ) {

				// The user is not 18 or older, access is denied
				return false;

			} else {

				// The user is old enough, access is granted
				return true;

			}
		}
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'restrict_content_by_age', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#requiring-an-onboarding-course-completion-before-accessing-the-rest-of-the-site) Requiring an onboarding course completion before accessing the rest of the site

This example uses the presence of an _Onboarded_ tag to lock all content on the site until the user has completed a LearnDash course with ID 123.

[Configure the LearnDash course](https://wpfusion.com/documentation/learning-management/learndash/) to apply the _Onboarded_ tag when it’s marked complete, and the rest of the site content will then be unlocked.

```php
function require_onboarding( $can_access, $user_id, $post_id ) {

	if ( false !== $post_id // If the content being accessed is a post...
		&& ! wpf_has_tag( 'Onboarded' ) // and the user doesn't have the tag Onboarded...
		&& 123 != learndash_get_course_id( $post_id ) // and the content isn't part of the course ID 123...
	) {
		return false; //... then access is denied.
	}

	return $can_access; // Otherwise use the default access rules

}

add_filter( 'wpf_user_can_access', 'require_onboarding', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#unlock-content-based-on-a-user-role-or-capability) Unlock content based on a user role or capability

This example unlocks all content when the user has the capability `edit_others_posts`. It can also accept a role, for example `editor`.

```php
function allow_access_for_capability( $can_access, $user_id, $post_id ) {

	if ( user_can( $user_id, 'edit_others_posts' ) ) {
		$can_access = true;
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'allow_access_for_capability', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#unlock-any-locked-content-when-visited-from-a-facebook-link) Unlock any locked content when visited from a Facebook link

This example bypasses WP Fusion’s access rules when the visitor is coming to the site from a Facebook link.

```php
function unlock_for_fb_referral( $can_access, $user_id, $post_id ) {

	if( isset( $_SERVER['HTTP_REFERER'] ) && strpos( $_SERVER['HTTP_REFERER'], 'facebook') !== false ) {
		return true; // http referrer
	} elseif ( isset( $_GET['fbclid'] ) ) {
		return true; // the ?fbclid= URL parameter
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'unlock_for_fb_referral', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#bypass-query-filtering-on-a-specific-post) Bypass query filtering on a specific post

When WP Fusion’s [query filtering](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries) is enabled, any posts that a user doesn’t have access to will be completely hidden from your site, including all listings, course grids, navigation, archives, etc.

There may be cases when you want to exclude a single post from being hidden. For example you might want to show a restricted course in your course catalog, so that when the user clicks on it they’re redirected to a sales page.

By checking if the `pre_get_posts` action is currently running, we can tell if WP Fusion is filtering the query results, and exclude specific items from being hidden. In this example the post with ID 123 is excluded if the current user has the tag “Group A”.

```php
function bypass_query_filtering( $can_access, $user_id, $post_id ) {

	if ( doing_action( 'pre_get_posts' ) || doing_action( 'the_posts' ) ) {

		if ( wpf_has_tag( 'Group A', $user_id ) && 123 == $post_id ) {
			$can_access = true;
		}
	}

	return $can_access;

}

add_filter( 'wpf_user_can_access', 'bypass_query_filtering', 10, 3 );
```

### [\#](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/\#unlock-everything) Unlock everything

Sometimes you might want to temporarily deactivate WP Fusion’s access controls, either for troubleshooting, or a special “open day” promotion. This code disables all WP Fusion access rules and grants access to everything.

```php
add_filter( 'wpf_user_can_access', '__return_true' );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#overview)
- [Parameters](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#parameters)
- [See also](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#see-also)
- [Examples](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#examples)
- [Deny access to posts within a certain category](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#deny-access-to-posts-within-a-certain-category)
- [Restrict past content by registration date](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#restrict-past-content-by-registration-date)
- [Restrict past content by date tag applied](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#restrict-past-content-by-date-tag-applied)
- [Restrict content by a user's age](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#restrict-content-by-a-users-age)
- [Requiring an onboarding course completion before accessing the rest of the site](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#requiring-an-onboarding-course-completion-before-accessing-the-rest-of-the-site)
- [Unlock content based on a user role or capability](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#unlock-content-based-on-a-user-role-or-capability)
- [Unlock any locked content when visited from a Facebook link](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#unlock-any-locked-content-when-visited-from-a-facebook-link)
- [Bypass query filtering on a specific post](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#bypass-query-filtering-on-a-specific-post)
- [Unlock everything](https://wpfusion.com/documentation/filters/wpf_user_can_access-filter/#unlock-everything)

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