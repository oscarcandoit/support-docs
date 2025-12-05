---
url: "https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/"
title: "wpf_query_filter_cache_time | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#content)

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

# wpf\_query\_filter\_cache\_time

- Published onDecember 11, 2024
- Last updated on September 8, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Filters](https://wpfusion.com/documentation/#filters)
- /
- wpf\_query\_filter\_cache\_time

### [\#](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/\#overview) Overview

WP Fusion’s [Filter Queries option](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries) allows you to modify the results of database queries to exclude content that a user can’t access (based on WP Fusion’s access rules).

When used in Advanced mode, Filter Queries will build up a list of posts a user has access to before the main query is run, and add it to the main query via the `post__not_in` parameter (in order to exclude any restricted posts).

That list of post IDs is then cached for the current user and post type, to avoid running the same query multiple times in quick succession (which can be quite slow).

This uses `wp_cache_set()` with a default expiration time of one minute. This can work in two ways depending on your server setup:

1. **No object caching:** If you are not using any object or memory caching (like Redis), the cache will last for the current page load. That means the same query will run at most once per page load.
2. **Object caching:** If you use Redis, Memcached, or another object caching solution (we use [Redis Object Cache](https://wordpress.org/plugins/redis-cache/)), the list of restricted post IDs will be cached in memory for one minute, even across page views.

The `wpf_query_filter_cache_time` filter lets you modify the length of time until the cache expires

#### [\#](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/\#parameters) Parameters

- `$seconds` _(int)_: The number of seconds until the cache expires. Default 60.
- `$user_id` (int): The user ID for whom the posts are being cached
- `$post_types` (array): The post types used in the query. The first post type is used in the cache key.

### [\#](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/\#examples) Examples

#### [\#](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/\#extend-the-cache-time) Extend the cache time

This example extends the cache time to one hour. It will result in fewer slow database queries, but it means that if new content becomes unlocked for a user, it could take up to an hour for it to become visible.

```php
function extend_query_filter_cache_time( $time ) {
	return HOUR_IN_SECONDS;
}

add_filter( 'wpf_query_filter_cache_time', 'extend_query_filter_cache_time' );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/\#disable-caching-entirely) Disable caching entirely

This example disables caching completely, ensuring that access rules are checked in real-time for every query. Use with caution as this can impact performance.

```php
function disable_query_filter_cache( $time ) {
	return 0;
}

add_filter( 'wpf_query_filter_cache_time', 'disable_query_filter_cache' );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/\#user-specific-cache-times) User-specific cache times

Set different cache times based on user roles or specific users. VIP users get real-time updates, while regular users get longer cache times.

```php
function user_specific_cache_time( $time, $user_id, $post_types ) {

    $user = get_user_by( 'id', $user_id );

    if ( ! $user ) {
        return $time;
    }

    // VIP users get real-time access updates
    if ( in_array( 'vip', $user->roles ) ) {
        return 0;
    }

    // Premium users get 30-second cache
    if ( in_array( 'premium_member', $user->roles ) ) {
        return 30;
    }

    // Regular users get 5-minute cache
    return 5 * MINUTE_IN_SECONDS;
}

add_filter( 'wpf_query_filter_cache_time', 'user_specific_cache_time', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/\#post-type-specific-cache-times) Post type specific cache times

Set different cache durations based on the content type being queried. Critical content gets shorter cache times.

```php
function post_type_specific_cache_time( $time, $user_id, $post_types ) {

    $post_type = $post_types[0] ?? '';

    switch ( $post_type ) {
        case 'sfwd-courses':
        case 'sfwd-lessons':
            // LearnDash content - 30 seconds
            return 30;

        case 'product':
            // WooCommerce products - 2 minutes
            return 2 * MINUTE_IN_SECONDS;

        case 'download':
            // EDD downloads - 5 minutes
            return 5 * MINUTE_IN_SECONDS;

        default:
            // Default for other content
            return MINUTE_IN_SECONDS;
    }
}

add_filter( 'wpf_query_filter_cache_time', 'post_type_specific_cache_time', 10, 3 );
```

#### [\#](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/\#environment-based-cache-times) Environment-based cache times

Use different cache durations for development, staging, and production environments.

```php
function environment_based_cache_time( $time ) {

    if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
        // Development - no caching for immediate testing
        return 0;
    }

    if ( defined( 'WP_ENVIRONMENT_TYPE' ) ) {
        switch ( WP_ENVIRONMENT_TYPE ) {
            case 'staging':
                // Staging - short cache
                return 30;

            case 'production':
                // Production - longer cache for performance
                return 10 * MINUTE_IN_SECONDS;
        }
    }

    return $time;
}

add_filter( 'wpf_query_filter_cache_time', 'environment_based_cache_time' );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#overview)
- [Parameters](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#parameters)
- [Examples](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#examples)
- [Extend the cache time](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#extend-the-cache-time)
- [Disable caching entirely](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#disable-caching-entirely)
- [User-specific cache times](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#user-specific-cache-times)
- [Post type specific cache times](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#post-type-specific-cache-times)
- [Environment-based cache times](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/#environment-based-cache-times)

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

[![Very Good Plugins LLC Logo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3C/svg%3E)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)