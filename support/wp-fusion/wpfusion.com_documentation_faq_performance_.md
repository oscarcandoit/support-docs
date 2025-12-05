---
url: "https://wpfusion.com/documentation/faq/performance/"
title: "Performance | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/faq/performance/#content)

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

# Performance

- Published onMay 4, 2019
- Last updated on July 6, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [FAQ](https://wpfusion.com/documentation/#faq)
- /
- Performance

### [\#](https://wpfusion.com/documentation/faq/performance/\#the-basics) The basics

**WP Fusion was designed with performance in mind**, and is used on sites with hundreds of thousands of users, and stores processing thousands of transactions a day.

Unlike some other membership plugins with CRM integrations, **WP Fusion will only connect to your CRM as a direct result of user action.** For example:

- Updating a profile
- Making a purchase
- Completing a course

WP Fusion **does not connect to your CRM to authenticate user logins**, and it **does not run any background synchronization processes**.

Another benefit of this is that even if your CRM’s API is offline or unreachable, your users will still be able to log in and access their content.

### [\#](https://wpfusion.com/documentation/faq/performance/\#general-tips) General tips

On a fresh install WP Fusion will have no noticeable impact on your site’s speed at all. However there are some steps you can take to maintain optimal performance on your WP Fusion powered site.

#### [\#](https://wpfusion.com/documentation/faq/performance/\#use-webhooks) Use webhooks

WP Fusion includes the option to load your user’s latest tags and meta data from your CRM on login.

[![](https://wpfusion.com/wp-content/uploads/2019/05/settings-tags-sync-1024x187.jpg)](https://wpfusion.com/wp-content/uploads/2019/05/settings-tags-sync.jpg)

While this is an easy way to make sure their data is always up to date, **this will slow down the login process** while the various API calls are made.

Instead, set up [webhooks](https://wpfusion.com/documentation/#webhooks) from your CRM to WP Fusion. You can trigger a webhook only when something has modified and needs to be updated in WordPress. Since webhooks run in the background, your users’ updated tags and meta data will already be available when they log in.

#### [\#](https://wpfusion.com/documentation/faq/performance/\#keep-push-all-turned-off) Keep “Push All” turned off

WP Fusion has a setting that will sync data to your CRM whenever any field in your database is modified.

[![](https://wpfusion.com/wp-content/uploads/2019/05/settings-push-all-1024x119.jpg)](https://wpfusion.com/wp-content/uploads/2019/05/settings-push-all.jpg)

This setting is intended for people using plugins or custom code that isn’t supported by WP Fusion, **but shouldn’t be necessary on normal sites**. Leaving this setting on may result in unnecessary API calls being sent.

#### [\#](https://wpfusion.com/documentation/faq/performance/\#be-careful-with-linked-tags) Be careful with “Linked” tags

WP Fusion includes a powerful feature called “Link with tag”, which allows you to automate enrollment into courses, groups, and membership levels when a tag is applied.

[![](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-meta-box-membership-1-1024x554.jpg)](https://wpfusion.com/wp-content/uploads/2016/09/lifterlms-meta-box-membership-1.jpg)

As a general rule, **only specify a linked tag if you’re trying to trigger an automated enrollment via an outside trigger**. For example a product purchase in an outside shopping cart, or using a drip sequence in your CRM.

If you are using linked tags, avoid overlapping their functionality. For example if you have a linked tag that enrolls someone into a membership, and that membership includes bundled courses, it’s not necessary to set a linked tag on each of the courses as well. This can create a chaining situation which can slow down your site.

### [\#](https://wpfusion.com/documentation/faq/performance/\#the-technical-stuff) The technical stuff

WP Fusion includes a few technologies to keep your site running fast.

#### [\#](https://wpfusion.com/documentation/faq/performance/\#asynchronous-webhooks) Asynchronous webhooks

By default incoming webhooks are processed in real time. When the webhook is received WP Fusion connects to your CRM and loads the relevant data. This generally works well, but if many webhooks are received at once (i.e. several hundred), this could cause your server to get overloaded and some webhooks may be ignored.

You can get around this by appending `&async=true` to the end of your webhook URL. This will cause WP Fusion to put your incoming webhooks into a queue and work through them as server resources allow, usually within a minute or two. While this does slow down the amount of time to process a single webhook, it allows WP Fusion to receive and act on more incoming webhooks simultaneously.

#### [\#](https://wpfusion.com/documentation/faq/performance/\#the-api-queue) The API queue

The API queue is enabled by default, though it can be turned off for troubleshooting purposes. The setting is under the Advanced tab.

[![](https://wpfusion.com/wp-content/uploads/2019/05/settings-api-queue-1024x120.jpg)](https://wpfusion.com/wp-content/uploads/2019/05/settings-api-queue.jpg)

With the API queue on, WP Fusion puts all API calls into a buffer and executes them during PHP’s shutdown function.

This means that **any delay introduced by API calls will happen in the footer of the page**, after the page has already loaded for the site visitor.

The queue also combines redundant calls into a single API call. For example

```php
wp_fusion()->user->push_user_meta( $user_id, array( 'first_name' => 'John' ) );

wp_fusion()->user->push_user_meta( $user_id, array( 'user_email' => 'john@doe.com' ) );
```

With the API queue off these two function calls would trigger two API calls. **With the queue on it will just send a single API call.**

The queue combines calls that:

- Apply tags
- Remove tags
- Update contacts

#### [\#](https://wpfusion.com/documentation/faq/performance/\#asynchronous-checkout) Asynchronous checkout

Depending on the addons you have installed, a checkout can take a lot of time to process— adding a contact, applying tags, adding products, [adding an invoice](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/), and removing [abandoned cart](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) tags.

To speed this up, WP Fusion has an option for **Asynchronous Checkout** with WooCommerce and Easy Digital Downloads. This setting is enabled by default and can be found on the Integrations tab.

With async checkout enabled, WP Fusion will send a non-blocking POST request to a background worker on your server. **This lets WP Fusion process all the API calls in the background without delaying the checkout.**

#### [\#](https://wpfusion.com/documentation/faq/performance/\#the-background-process-worker) The background process worker

WP Fusion includes a background worker which can export users, membership statuses, order details, and more to your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-batch-process-1024x433.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-batch-process.jpg)

This background worker is based on the [WP Background Processing](https://github.com/deliciousbrains/wp-background-processing/) library. Items to be processed are added to a queue and are worked through sequentially, taking into account the server’s available memory and max execution time.

**Using the background worker we have processed up to 300,000 WooCommerce orders in a single go.**

The background process can run for up to 24 hours. This can be extended if needed by using the `'nonce_life'` filter.

### [\#](https://wpfusion.com/documentation/faq/performance/\#admin-performance) Admin performance

If you have a lot of tags and/or custom fields in your CRM (i.e. 1,000+ options), the WP Fusion interfaces can be slow to load in the admin.

To avoid this, WP Fusion has two built in thresholds:

1. If there are more than 300 custom fields available for sync on the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), the field select dropdown will revert to a standard HTML dropdown instead of the searchable select2 dropdown.
2. If there are more than 1,000 total tags in your CRM, the _Select Tag(s)_ dropdown will lazy load the tags instead of trying to display all the options at once. After you’ve entered the first three characters of your tag name, WP Fusion will search the database and return the results.

There are three filters you can use to further customize the display of the tags and CRM fields dropdowns:

```php
add_filter( 'wpf_disable_tag_multiselect', '__return_true' );
```

Completely disables the _Select Tag(s)_ select box. It will not be output on the page at all.

```php
add_filter( 'wpf_disable_tag_select4', '__return_true' );
```

Disables the enhanced interface on the _Select Tag(s)_ select box. It will be displayed as a normal select input.

```php
add_filter( 'wpf_disable_crm_field_select4', '__return_true' );
```

Disables the enhanced interface on the _Select A CRM Field_ select box. It will be displayed as a normal select input.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [The basics](https://wpfusion.com/documentation/faq/performance/#the-basics)
- [General tips](https://wpfusion.com/documentation/faq/performance/#general-tips)
- [Use webhooks](https://wpfusion.com/documentation/faq/performance/#use-webhooks)
- [Keep "Push All" turned off](https://wpfusion.com/documentation/faq/performance/#keep-push-all-turned-off)
- [Be careful with "Linked" tags](https://wpfusion.com/documentation/faq/performance/#be-careful-with-linked-tags)
- [The technical stuff](https://wpfusion.com/documentation/faq/performance/#the-technical-stuff)
- [Asynchronous webhooks](https://wpfusion.com/documentation/faq/performance/#asynchronous-webhooks)
- [The API queue](https://wpfusion.com/documentation/faq/performance/#the-api-queue)
- [Asynchronous checkout](https://wpfusion.com/documentation/faq/performance/#asynchronous-checkout)
- [The background process worker](https://wpfusion.com/documentation/faq/performance/#the-background-process-worker)
- [Admin performance](https://wpfusion.com/documentation/faq/performance/#admin-performance)

### In this chapter

- [Caching](https://wpfusion.com/documentation/faq/caching/ "Caching")
- [CRM Compatibility](https://wpfusion.com/documentation/faq/crm-compatibility-table/ "CRM Compatibility")
- [For plugin developers](https://wpfusion.com/documentation/faq/for-plugin-developers/ "For plugin developers")
- [How does licensing work?](https://wpfusion.com/documentation/faq/how-does-licensing-work/ "How does licensing work?")
- [Is WP Fusion hard to use?](https://wpfusion.com/documentation/faq/is-wp-fusion-hard-to-use/ "Is WP Fusion hard to use?")
- [Misc. FAQ](https://wpfusion.com/documentation/faq/misc-faq/ "Misc. FAQ")
- [Multisite](https://wpfusion.com/documentation/faq/multisite/ "Multisite")
- [Performance](https://wpfusion.com/documentation/faq/performance/ "Performance")
- [Staging Sites](https://wpfusion.com/documentation/faq/staging-sites/ "Staging Sites")
- [What can I do with it?](https://wpfusion.com/documentation/faq/what-can-i-do-with-it/ "What can I do with it?")
- [Who is it for?](https://wpfusion.com/documentation/faq/who-is-it-for/ "Who is it for?")
- [WP Fusion vs....](https://wpfusion.com/documentation/faq/how-are-we-different/ "WP Fusion vs....")
- [Changelog](https://wpfusion.com/documentation/faq/changelog/ "Changelog")

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