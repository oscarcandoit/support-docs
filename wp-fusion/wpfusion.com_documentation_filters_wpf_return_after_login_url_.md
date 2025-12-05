---
url: "https://wpfusion.com/documentation/filters/wpf_return_after_login_url/"
title: "wpf_return_after_login_url | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/#content)

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

# wpf\_return\_after\_login\_url

- Published onJune 16, 2025
- Last updated on September 8, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_return\_after\_login\_url

### [\#](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/\#overview) Overview

This filter is run when redirecting a user back to a piece of restricted content using the [Return After Login](https://wpfusion.com/documentation/getting-started/general-settings/#return-after-login) feature.

It runs after WP Fusion has already confirmed they now have access to the restricted content (to redirect the user if access is still denied, use the [wpf\_redirect\_url](https://wpfusion.com/documentation/filters/wpf_redirect_url/) filter).

To use the code examples below, add them to your active theme’s functions.php file.

#### [\#](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/\#parameters) Parameters

- `$url`: The URL that the user will be redirected to (typically the permalink of the restricted content).
- `$post_id`: The ID of the post that was originally restricted.
- `$user`: The WP\_User object of the user who has logged in.

### [\#](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/\#redirect-to-pdf-viewer-for-download-manager-files) Redirect to PDF viewer for Download Manager files

The example below will redirect users directly to the PDF viewer for Download Manager files instead of to the download page after login.

```php
function wpf_modify_return_after_login_url( $url, $post_id, $user ) {

    // Check if this is a Download Manager file
    if ( 'wpdmpro' === get_post_type( $post_id ) ) {

        // Instead of returning to the download page, go directly to the PDF viewer
        $pdf_viewer_url = home_url( '/?__wpdm_pdf_viewer=' . $post_id );

        return $pdf_viewer_url;
    }

    return $url;
}

add_filter( 'wpf_return_after_login_url', 'wpf_modify_return_after_login_url', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/\#role-based-redirect-after-login) Role-based redirect after login

Redirect users to different pages based on their WordPress user role after successfully accessing restricted content.

```php
function wpf_role_based_return_redirect( $url, $post_id, $user ) {

    // Redirect customers to their account page
    if ( in_array( 'customer', $user->roles ) ) {
        return wc_get_page_permalink( 'myaccount' );
    }

    // Redirect subscribers to a welcome page
    if ( in_array( 'subscriber', $user->roles ) ) {
        return home_url( '/welcome/' );
    }

    // Redirect administrators to the admin dashboard
    if ( in_array( 'administrator', $user->roles ) ) {
        return admin_url();
    }

    return $url;
}

add_filter( 'wpf_return_after_login_url', 'wpf_role_based_return_redirect', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/\#add-tracking-parameters-to-return-url) Add tracking parameters to return URL

Add UTM parameters or other tracking data to the return URL for analytics purposes.

```php
function wpf_add_tracking_to_return_url( $url, $post_id, $user ) {

    $tracking_params = array(
        'utm_source'   => 'wp_fusion',
        'utm_medium'   => 'return_login',
        'utm_campaign' => 'content_access',
        'user_id'      => $user->ID,
        'post_id'      => $post_id
    );

    return add_query_arg( $tracking_params, $url );
}

add_filter( 'wpf_return_after_login_url', 'wpf_add_tracking_to_return_url', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/\#redirect-to-course-overview-for-learndash-lessons) Redirect to course overview for LearnDash lessons

When users access a restricted LearnDash lesson, redirect them to the course overview page instead of the individual lesson.

```php
function wpf_learndash_course_redirect( $url, $post_id, $user ) {

    // Check if this is a LearnDash lesson
    if ( 'sfwd-lessons' === get_post_type( $post_id ) ) {

        // Get the associated course
        $course_id = learndash_get_course_id( $post_id );

        if ( $course_id ) {
            return get_permalink( $course_id );
        }
    }

    return $url;
}

add_filter( 'wpf_return_after_login_url', 'wpf_learndash_course_redirect', 10, 3 );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/#overview)
- [Parameters](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/#parameters)
- [Examples](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/#examples)
- [Redirect to PDF viewer for Download Manager files](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/#redirect-to-pdf-viewer-for-download-manager-files)
- [Role-based redirect after login](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/#role-based-redirect-after-login)
- [Add tracking parameters to return URL](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/#add-tracking-parameters-to-return-url)
- [Redirect to course overview for LearnDash lessons](https://wpfusion.com/documentation/filters/wpf_return_after_login_url/#redirect-to-course-overview-for-learndash-lessons)

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