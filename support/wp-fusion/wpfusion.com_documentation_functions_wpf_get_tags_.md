---
url: "https://wpfusion.com/documentation/functions/wpf_get_tags/"
title: "wpf_get_tags() | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/functions/wpf_get_tags/#content)

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

# wpf\_get\_tags()

- Published onJanuary 25, 2016
- Last updated on February 9, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Functions](https://wpfusion.com/documentation/#functions)
- /
- wpf\_get\_tags()

### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#overview) Overview

This function retrieves all CRM tags currently associated with the user.

#### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#parameters) Parameters

```php
wpf_get_tags( $user_id = false, $force = false )
```

- `$user_id` _(int) (Optional)_: The user ID to search.
- `$force` _(bool) (Optional)_: Whether to force-refresh the tags.

#### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#return) Return

_(array)_`$user_tags` The users tags in the CRM.

#### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#get-the-current-users-tags) Get the current user’s tags

```php
$tags = wpf_get_tags();
```

#### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#get-the-tags-for-a-different-user) Get the tags for a different user

```php
$tags = wpf_get_tags( $user_id );
```

#### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#force-an-update-of-the-users-tags-by-sending-an-api-call-to-your-crm) Force an update of the user’s tags by sending an API call to your CRM

In this case the updated tag list will automatically be saved to the local user meta after it’s been retrieved. This example will also force-refresh the user’s contact ID (i.e. it sends two API calls).

```php
$tags = wpf_get_tags( $user_id, true );
```

#### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#force-an-update-of-the-users-tags-without-verifying-the-contact-id) Force an update of the user’s tags without verifying the contact ID

If you’re sure the contact ID is correct, you can also force refresh the tags without looking up the contact ID first, by passing `false` as the third parameter.

```php
$tags = wpf_get_tags( $user_id, $force_refresh = true, $lookup_contact_id = false );
```

#### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#display-the-current-users-tags-in-a-list) Display the current user’s tags in a list

```php
$tags = wpf_get_tags();

echo '<ul>';
foreach ( $tags as $tag ) {
	echo '<li>' . wpf_get_tag_label( $tag ) . '</li>';
}
echo '</ul>';
```

### [\#](https://wpfusion.com/documentation/functions/wpf_get_tags/\#get-all-available-tags) Get all _available_ tags

If you want to get all available tags in your CRM, with their names and IDs, you can do so using `wpf_get_option()`

```php
$available_tags = wpf_get_option( 'available_tags' );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/functions/wpf_get_tags/#overview)
- [Parameters](https://wpfusion.com/documentation/functions/wpf_get_tags/#parameters)
- [Return](https://wpfusion.com/documentation/functions/wpf_get_tags/#return)
- [Get the current user's tags](https://wpfusion.com/documentation/functions/wpf_get_tags/#get-the-current-users-tags)
- [Get the tags for a different user](https://wpfusion.com/documentation/functions/wpf_get_tags/#get-the-tags-for-a-different-user)
- [Force an update of the user's tags by sending an API call to your CRM](https://wpfusion.com/documentation/functions/wpf_get_tags/#force-an-update-of-the-users-tags-by-sending-an-api-call-to-your-crm)
- [Force an update of the user's tags without verifying the contact ID](https://wpfusion.com/documentation/functions/wpf_get_tags/#force-an-update-of-the-users-tags-without-verifying-the-contact-id)
- [Display the current user's tags in a list](https://wpfusion.com/documentation/functions/wpf_get_tags/#display-the-current-users-tags-in-a-list)
- [Get all _available_ tags](https://wpfusion.com/documentation/functions/wpf_get_tags/#get-all-available-tags)

### In this chapter

- [add\_object()](https://wpfusion.com/documentation/functions/add_object/ "add_object()")
- [apply\_tags()](https://wpfusion.com/documentation/functions/apply_tags/ "apply_tags()")
- [doing\_wpf\_auto\_login()](https://wpfusion.com/documentation/functions/doing_wpf_auto_login/ "doing_wpf_auto_login()")
- [doing\_wpf\_webhook()](https://wpfusion.com/documentation/functions/doing_wpf_webhook/ "doing_wpf_webhook()")
- [pull\_user\_meta()](https://wpfusion.com/documentation/functions/pull_user_meta/ "pull_user_meta()")
- [push\_user\_meta()](https://wpfusion.com/documentation/functions/push_user_meta/ "push_user_meta()")
- [remove\_tags()](https://wpfusion.com/documentation/functions/remove_tags/ "remove_tags()")
- [wpf\_admin\_override()](https://wpfusion.com/documentation/functions/wpf_admin_override-2/ "wpf_admin_override()")
- [wpf\_get\_contact\_id()](https://wpfusion.com/documentation/functions/wpf_get_contact_id/ "wpf_get_contact_id()")
- [wpf\_get\_crm\_field()](https://wpfusion.com/documentation/functions/wpf_get_crm_field/ "wpf_get_crm_field()")
- [wpf\_get\_current\_user()](https://wpfusion.com/documentation/functions/wpf_get_current_user/ "wpf_get_current_user()")
- [wpf\_get\_current\_user\_email()](https://wpfusion.com/documentation/functions/wpf_get_current_user_email/ "wpf_get_current_user_email()")
- [wpf\_get\_datetime\_format()](https://wpfusion.com/documentation/functions/wpf_get_datetime_format/ "wpf_get_datetime_format()")
- [wpf\_get\_field\_type()](https://wpfusion.com/documentation/functions/wpf_get_field_type/ "wpf_get_field_type()")
- [wpf\_get\_lookup\_field()](https://wpfusion.com/documentation/functions/wpf_get_lookup_field/ "wpf_get_lookup_field()")
- [wpf\_get\_option()](https://wpfusion.com/documentation/functions/wpf_get_option/ "wpf_get_option()")
- [wpf\_get\_tags()](https://wpfusion.com/documentation/functions/wpf_get_tags/ "wpf_get_tags()")
- [wpf\_get\_tag\_id()](https://wpfusion.com/documentation/functions/wpf_get_tag_id/ "wpf_get_tag_id()")
- [wpf\_get\_tag\_label()](https://wpfusion.com/documentation/functions/wpf_get_tag_label/ "wpf_get_tag_label()")
- [wpf\_get\_users\_with\_contact\_ids()](https://wpfusion.com/documentation/functions/wpf_get_users_with_contact_ids/ "wpf_get_users_with_contact_ids()")
- [wpf\_get\_users\_with\_tag()](https://wpfusion.com/documentation/functions/wpf_get_users_with_tag/ "wpf_get_users_with_tag()")
- [wpf\_get\_user\_id()](https://wpfusion.com/documentation/functions/wpf_get_user_id/ "wpf_get_user_id()")
- [wpf\_has\_tag()](https://wpfusion.com/documentation/functions/wpf_has_tag/ "wpf_has_tag()")
- [wpf\_is\_field\_active()](https://wpfusion.com/documentation/functions/wpf_is_field_active/ "wpf_is_field_active()")
- [wpf\_is\_pseudo\_field()](https://wpfusion.com/documentation/functions/wpf_is_pseudo_field/ "wpf_is_pseudo_field()")
- [wpf\_is\_staging\_mode()](https://wpfusion.com/documentation/functions/wpf_is_staging_mode/ "wpf_is_staging_mode()")
- [wpf\_is\_user\_logged\_in()](https://wpfusion.com/documentation/functions/wpf_is_user_logged_in/ "wpf_is_user_logged_in()")
- [wpf\_user\_can\_access()](https://wpfusion.com/documentation/functions/wpf_user_can_access/ "wpf_user_can_access()")

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