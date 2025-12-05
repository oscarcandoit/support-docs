---
url: "https://wpfusion.com/documentation/faq/multisite/"
title: "Multisite"
---

[Skip to content](https://wpfusion.com/documentation/faq/multisite/#content)

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

# Multisite

- Published onMarch 8, 2023
- Last updated on March 14, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [FAQ](https://wpfusion.com/documentation/#faq)
- /
- Multisite

### [\#](https://wpfusion.com/documentation/faq/multisite/\#overview) Overview

It’s possible to use WP Fusion with [WordPress multisite](https://wordpress.org/documentation/article/create-a-network/), for example on a network of client sites, or as a WaaS ( [WordPress as a Service](https://blog.runcloud.io/wordpress-multisite-waas/)).

WP Fusion can be either network activated, or activated on individual sites.

_However_, WP Fusion is not network configured. Each site must be set up with its own CRM credentials and settings configuration.

### [\#](https://wpfusion.com/documentation/faq/multisite/\#users-and-access) Users and access

With Multisite, the users and usermeta database tables are shared across all sites on the network.

In the context of WP Fusion, this also means their CRM contact ID and tags are shared across all sites.

This means that if a user has an account on _Site A_ and _Site B_, and their ActiveCampaign tags are updated on _Site A_, the new tags are loaded into the `activecampaign_tags` usermeta key.

[![](https://wpfusion.com/wp-content/uploads/2023/03/multisite-shared-tags-1024x372.jpg)](https://wpfusion.com/wp-content/uploads/2023/03/multisite-shared-tags.jpg) With WordPress Multisite, CRM contact IDs and tags are shared across every site where the user has an account.

This data is shared with _Site B_, so that when the user logs in, they will have access to any content protected by those tags (i.e. it’s not necessary to sync data between the sites [using WP Remote Users Sync](https://wpfusion.com/documentation/tutorials/sync-user-accounts/)).

**_However_, there is one exception to this—**

Because the Site A tags are simply being _read_ by Site B, this does not trigger a _change_ in tags on Site B, which means automated enrollments (for example into courses or memberships) will not be triggered on Site B.

If you need to trigger automated enrollments on one site, from tags that were loaded onto a different site in the network, you will need to [force a refresh of the user’s tags](https://wpfusion.com/documentation/getting-started/working-with-tags/#syncing-tags) on the site where the enrollment takes place.

#### [\#](https://wpfusion.com/documentation/faq/multisite/\#multisite-blog-prefix) Multisite blog prefix

There are some scenarios where sharing the user’s contact ID and tags is undesirable.

For example, imagine you have two separate clients on your network, and each are connected to their own separate ActiveCampaign accounts.

A customer, jane@gmail.com signs up for _Client A’s_ course, and then later purchases a membership from _Client B._

The tags loaded from ActiveCampaign Account B, on _Site B_, will replace the tags the client had in ActiveCampaign Account A, on _Site A_ (because the `activecampaign_tags` usermeta key is shared).

[![](https://wpfusion.com/wp-content/uploads/2023/03/multisite-blog-prefix-1024x248.jpg)](https://wpfusion.com/wp-content/uploads/2023/03/multisite-blog-prefix.jpg)

To fix this, you can enable the setting for **Multisite – Blog Prefix** at Settings » WP Fusion » Advanced.

With this enabled, any WP Fusion usermeta keys will be prefixed by the current blog ID, for example `wp_1_activecampaign_tags`, `wp_2_activecampaign_contact_id`, etc.

This allows each site to have their own separate cache of contact IDs and tags.

This can also be enabled network wide by adding the following to your wp-config.php file:

```
define( 'WPF_MULTISITE_PREFIX_KEYS', true );
```

### [\#](https://wpfusion.com/documentation/faq/multisite/\#white-labelling) White labelling

You can also [white label WP Fusion](https://wpfusion.com/documentation/advanced-developer-tutorials/white-labelling-wp-fusion/), so it can be renamed to match your brand.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/faq/multisite/#overview)
- [Users and access](https://wpfusion.com/documentation/faq/multisite/#users-and-access)
- [Multisite blog prefix](https://wpfusion.com/documentation/faq/multisite/#multisite-blog-prefix)
- [White labelling](https://wpfusion.com/documentation/faq/multisite/#white-labelling)

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