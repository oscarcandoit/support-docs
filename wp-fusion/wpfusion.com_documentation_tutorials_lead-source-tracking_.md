---
url: "https://wpfusion.com/documentation/tutorials/lead-source-tracking/"
title: "Lead Source Tracking"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#content)

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

# Lead Source Tracking

- Published onApril 8, 2017
- Last updated on September 23, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- Lead Source Tracking

### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#overview) Overview

WP Fusion includes the ability to detect lead sources in URL parameters, such as those used with Google Analytics.

The system is quite versatile. It can look for a variety of common lead source parameters passed in URLs to your site and store these as a cookie when the user first visits your site.

If a visitor then registers on your site, makes a purchase, or submits a WP Fusion enabled form, the detected lead source parameters can be synced to custom fields in [any one of WP Fusion’s 40+ supported CRMs](https://wpfusion.com/documentation/faq/crm-compatibility-table/) and marketing automation platforms.

The cookie is valid for 90 days. So even if a user leaves your site and comes back later to make a purchase, you can still capture the source that brought them to you in the first place.

#### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#google-analytics) Google Analytics

If you’re using Google Analytics’ [Campaign URL Builder](https://ga-dev-tools.appspot.com/campaign-url-builder/), Google will generate tracking links to your site that look like `https://mysite.com/?utm_source=facebook&utm_campaign=summer_ad`.

[![](https://wpfusion.com/wp-content/uploads/2017/04/leadsource-tracking-1024x349.png)](https://wpfusion.com/wp-content/uploads/2017/04/leadsource-tracking.png)

You can enable each of the various Google Analytics tracking variable for sync from the Contact Fields tab in the WP Fusion settings.

**Note:** By default WP Rocket caches URLs with Analytics leadsource variables in them. This will prevent WP Fusion’s lead source tracking from working. You can [follow this tutorial](https://docs.wp-rocket.me/article/1281-customize-query-string-caching) to exclude the Google query string parameters from WP Rocket’s cache, or enable [JS Lead Source Tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#caching) from the settings.

#### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#custom-lead-source-tracking) Custom Lead Source Tracking

![](https://wpfusion.com/wp-content/uploads/2017/04/leadsource-tracking.jpg)To enable custom lead source tracking, locate the `leadsource` field in the Contact Fields list and map it to a field in your CRM. Make sure to check the Sync box to enable the connection.

Structure the URL to your site like `https://mysite.com/?leadsource=custom_leadsource`. Anything after the `leadsource` parameter in the URL will be synced. Using this method you can set up your own lead source tracking strategy however you see fit.

#### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#referrer-landing-page-and-current-page) Referrer, Landing Page and Current Page

The fields _Original Referrer,_ _Landing Page_ and _Current Page_ are a bit different in that they don’t use a URL parameter for tracking.

- **Original Referrer:** This tracks the URL a user followed to get to your site. If this is enabled, the referrer URL will be recorded on their first visit.
- **Landing Page:** This tracks the page the visitor landed on when they came to your site for the first time.
- **Current Page:** This is the page the visitor was on when the form was submitted.

### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#how-it-works) How it works

When a visitor lands on your site with one of the tracked parameters, WP Fusion will set a cookie, either `wpf_leadsource` (for the UTM and URL parameters) or `wpf_ref` for the Original Referrer and Landing Page.

[![](https://wpfusion.com/wp-content/uploads/2017/04/lead-source-tracking-cookies-1024x382.jpg)](https://wpfusion.com/wp-content/uploads/2017/04/lead-source-tracking-cookies.jpg) You can see the cookies set by WP Fusion using your browser’s developer tools. If the cookies aren’t being set, your page is probably cached.

This cookie is valid for 90 days. If any any time during that period, a contact record is created for that visitor by WP Fusion, the tracked values will be extracted from the cookie and merged into the API data sent to create the new contact record.

This works any time WP Fusion creates a contact record— a form submission, abandoned cart, product purchase, or regular registration. It does _not_ work when a contact record is added to your CRM by another plugin, since other plugins wouldn’t know to look for cookies set by WP Fusion.

Also note that WP Fusion only sync the lead source data when a _new_ contact record is created. It won’t send the data to an existing contact record, to avoid overwriting lead source data you may have already collected for a contact. This can be considered _First Referrer_ tracking.

### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#caching) Caching

Note that the lead source tracking relies on cookies, which often aren’t compatible with caching. To get around this, WP Fusion includes an option to set the lead source tracking cookies via Javascript.

If you find that the tracking cookies aren’t being set, try enabling **JS Lead Source Tracking** from the Advanced tab in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#developers) Developers

#### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#register-additional-leadsource-variables) Register additional leadsource variables

You may want to register additional URL parameters that should be tracked as leadsource variables. You can do this using the `wpf_leadsource_vars` filter.

For example to register the URL parameter `lang`:

```php
function my_wpf_custom_leadsource_vars( $vars ) {
	$vars[] = 'lang';
	return $vars;
}

add_filter( 'wpf_leadsource_vars', 'my_wpf_custom_leadsource_vars' );
```

Once the variable is registered it will be detected in the URL when someone visits your site (for example `&lang=en`) and saved to the `wpf_contact` cookie.

Any custom leadsource fields added via the `wpf_leadsource_vars` filter will automatically show up on the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) for syncing with custom fields in your CRM:

[![](https://wpfusion.com/wp-content/uploads/2017/04/leadsource-tracking-custom-1024x414.jpg)](https://wpfusion.com/wp-content/uploads/2017/04/leadsource-tracking-custom.jpg)

Then, when WP Fusion adds a contact record to your CRM (via a registration, purchase, form submission, or any other source), the custom leadsource values will be synced to the corresponding custom fields in your CRM.

#### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#change-the-cookie-name) Change the cookie name

If needed you can change the name of the cookies that are used for WP Fusion’s lead source tracking. The two filters are `wpf_leadsource_cookie_name` and `wpf_ref_cookie_name`.

For example to prefix the two cookie names with an underscore:

```php
add_filter( 'wpf_leadsource_cookie_name', function() {
	return '_wpf_leadsource';
} );

add_filter( 'wpf_referral_cookie_name', function() {
	return '_wpf_ref';
} );
```

#### [\#](https://wpfusion.com/documentation/tutorials/lead-source-tracking/\#sync-lead-source-data-for-existing-contacts) Sync lead source data for existing contacts

By default, lead source data will only be synced when registering a new contact (to avoid potentially overwriting existing lead source data).

This snippet syncs any available lead source data whenever a contact is updated (requires WP Fusion v3.44.7 or higher).

```php
add_filter( 'wpf_api_update_contact_args', array( wp_fusion()->lead_source_tracking, 'merge_lead_source' ) );
```

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#overview)
- [Google Analytics](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#google-analytics)
- [Custom Lead Source Tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#custom-lead-source-tracking)
- [Referrer, Landing Page and Current Page](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#referrer-landing-page-and-current-page)
- [How it works](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#how-it-works)
- [Caching](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#caching)
- [Developers](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#developers)
- [Register additional leadsource variables](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#register-additional-leadsource-variables)
- [Change the cookie name](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#change-the-cookie-name)
- [Sync lead source data for existing contacts](https://wpfusion.com/documentation/tutorials/lead-source-tracking/#sync-lead-source-data-for-existing-contacts)

### In this chapter

- [Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/ "Auto Login")
- [Batch Operations / Exporting Data](https://wpfusion.com/documentation/tutorials/batch-operations/ "Batch Operations / Exporting Data")
- [Double Opt-Ins](https://wpfusion.com/documentation/tutorials/double-opt-ins/ "Double Opt-Ins")
- [Import Users](https://wpfusion.com/documentation/tutorials/import-users/ "Import Users")
- [Lead Source Tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/ "Lead Source Tracking")
- [Link Click Tracking](https://wpfusion.com/documentation/tutorials/link-click-tracking/ "Link Click Tracking")
- [Menu Item Visibility](https://wpfusion.com/documentation/tutorials/menu-item-visibility/ "Menu Item Visibility")
- [Site Tracking Scripts](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/ "Site Tracking Scripts")
- [Switching CRMs](https://wpfusion.com/documentation/tutorials/switching-crms/ "Switching CRMs")
- [Sync Users Between Sites](https://wpfusion.com/documentation/tutorials/sync-user-accounts/ "Sync Users Between Sites")
- [ThriveCart](https://wpfusion.com/documentation/tutorials/thrivecart/ "ThriveCart")

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