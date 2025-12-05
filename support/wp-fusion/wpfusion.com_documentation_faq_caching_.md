---
url: "https://wpfusion.com/documentation/faq/caching/"
title: "Caching | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/faq/caching/#content)

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

# Caching

- Published onMarch 23, 2020
- Last updated on January 14, 2022

- [Documentation](https://wpfusion.com/documentation/)
- /
- [FAQ](https://wpfusion.com/documentation/#faq)
- /
- Caching

### [\#](https://wpfusion.com/documentation/faq/caching/\#overview) Overview

WP Fusion generally works well with caching and cache plugins, because most of its functionality is tied to logged in users, and logged in users (normally) aren’t cached. But there are some exceptions:

### [\#](https://wpfusion.com/documentation/faq/caching/\#auto-login) Auto login

If you’re using [auto-login links](https://wpfusion.com/documentation/tutorials/auto-login-links/) to unlock content for contacts who follow a tracking link, you’ll need to make sure that any dynamic pages are excluded from caching. Or you can create a cache rule to bypass caching when the auto-login cookie is set. That cookie is named `wpf_contact`.

### [\#](https://wpfusion.com/documentation/faq/caching/\#lead-source-tracking) Lead source tracking

WP Fusion’s [lead source tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/) uses cookies to keep track of a visitor’s UTM variables and referrer. If the visitor later registers an account or makes a purchase, these values are sent to your CRM along with the contact data.

Because many cache plugins prevent cookies from being set, you’ll need to create a cache exclusion for these cookies. The two cookies are `wpf_leadsource` and `wpf_ref`.

### [\#](https://wpfusion.com/documentation/faq/caching/\#return-after-login) Return after login

WP Fusion includes a setting that can track when a user gets redirected away from a restricted page, and [redirect them back to that page after they’ve logged in](https://wpfusion.com/documentation/getting-started/general-settings/#return-after-login).

To do that it sets a cookie, which can be blocked by caching. If you have trouble with _Return After Login,_ try adding a cache exclusion for the `wpf_return_to` cookie.

### [\#](https://wpfusion.com/documentation/faq/caching/\#all-cookies) All cookies

A simple solution is to just bypass caching whenever any WP Fusion cookies are set. You can either add a wildcard, like `wpf*`, or add cache exclusions for them one by one:

- `wpf_contact`: Used with auto-login.
- `wpf_guest`: Used with identifying guest form submissions to [the tracking scripts](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/).
- `wpf_leadsource`: Used with [lead source tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/).
- `wpf_ref`: Used with [lead source tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/).
- `wpf_return_to`: Used with [return after login](https://wpfusion.com/documentation/getting-started/general-settings/#return-after-login).
- `wpfrc`: Used with [abandoned cart recovery](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/faq/caching/#overview)
- [Auto login](https://wpfusion.com/documentation/faq/caching/#auto-login)
- [Lead source tracking](https://wpfusion.com/documentation/faq/caching/#lead-source-tracking)
- [Return after login](https://wpfusion.com/documentation/faq/caching/#return-after-login)
- [All cookies](https://wpfusion.com/documentation/faq/caching/#all-cookies)

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