---
url: "https://wpfusion.com/documentation/downloads/web-host-compatibility/"
title: "Web Host Compatibility | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/downloads/web-host-compatibility/#content)

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

# Web Host Compatibility

- Published onDecember 5, 2019
- Last updated on July 6, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Downloads](https://wpfusion.com/documentation/#downloads)
- /
- Web Host Compatibility

### [\#](https://wpfusion.com/documentation/downloads/web-host-compatibility/\#overview) Overview

The Downloads Addon for WP Fusion works out of the box with almost all hosts running Apache servers without any extra setup or configuration.

However, due to some specific set up of certain hosting platforms, there are some considerations and configurations listed below.

#### [\#](https://wpfusion.com/documentation/downloads/web-host-compatibility/\#siteground) Siteground

There is a known issue with SiteGround static and dynamic caching:

- Protected files including documents and images will always be cached immediately upon access from an authorized WordPress user. As a result, they will then be accessible to all of your visitors, which stops our access rules from working properly.
- Static content such as documents and images cannot be excluded via the Dynamic cache exclude feature (SG Optimizer plugin). This feature allows you to exclude dynamic web pages only.

Since it’s a limitation from SiteGround affecting protection of files with WP Fusion, we recommend disabling Dynamic (and Static) cache, but keeping SiteGround Memcache enabled, and installing a good cache plugin. We recommend [Cache Enabler](https://wordpress.org/plugins/cache-enabler/).

### [\#](https://wpfusion.com/documentation/downloads/web-host-compatibility/\#nginx-hosts) NGINX Hosts

Since NGINX does not have .htaccess-type capabilities, WP Fusion and WordPress at large cannot modify and update the server configuration automatically for you.

**Note:** The Downloads Addon is no longer officially supported on NGINX hosts (like WP Engine). The guides below can be used at your own risk.

For more robust file download protection which works on NGINX hosting, we recommend [Prevent Direct Access](https://wpfusion.com/go/prevent-direct-access).

#### [\#](https://wpfusion.com/documentation/downloads/web-host-compatibility/\#wp-engine-setup) WP Engine Setup

1\. Log in to your WP Engine User Portal

![](https://wpfusion.com/wp-content/uploads/2019/12/wpengine-sites-domain-prevent-direct-access-1024x387.png)

2\. Under your website “Installs”, click on “Redirect rules” then “New redirect rule”

[![](https://wpfusion.com/wp-content/uploads/2019/12/WP-Engine-Screenshot2-1024x430-1024x430.png)](https://wpfusion.com/wp-content/uploads/2019/12/WP-Engine-Screenshot2-1024x430.png)

3\. Enter these details into the popup fields:

- **Domain**: Choose your website domain
- **Redirect name**: Downloads protection
- **Source**: wp-content/uploads(/\_wpfd/.\*\\.\\w+)$
- **Destination**: https://www.yourwebsite.com/index.php?wpfd=$1
- **Redirect type**: 301 Permanent

#### [\#](https://wpfusion.com/documentation/downloads/web-host-compatibility/\#implement-our-nginx-rewrite-rules-manually) Implement Our Nginx Rewrite Rules Manually

This is the recommended method to keep pretty permalinks for your file URLs.

1\. Find and open your website’s Nginx config file which is normally located at /etc/nginx/site-available (or /etc/nginx/conf/site-available if you’re using Arch Linux)

2\. Put inside the server block:

```php
server {

	location / {
		...
	}

	# Put WP Fusion rewrite rule here
	rewrite wp-content/uploads(/_wpfd/.*\.\w+)$ "/index.php?wpfd=$1" last;
}
```

3\. Restart your Nginx server. The WP Fusion Downloads Addon should be now working on your website.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Plus

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/downloads/web-host-compatibility/#overview)
- [Siteground](https://wpfusion.com/documentation/downloads/web-host-compatibility/#siteground)
- [NGINX Hosts](https://wpfusion.com/documentation/downloads/web-host-compatibility/#nginx-hosts)
- [WP Engine Setup](https://wpfusion.com/documentation/downloads/web-host-compatibility/#wp-engine-setup)
- [Implement Our Nginx Rewrite Rules Manually](https://wpfusion.com/documentation/downloads/web-host-compatibility/#implement-our-nginx-rewrite-rules-manually)

### In this chapter

- [Downloads Overview](https://wpfusion.com/documentation/downloads/downloads-overview/ "Downloads Overview")
- [Web Host Compatibility](https://wpfusion.com/documentation/downloads/web-host-compatibility/ "Web Host Compatibility")
- [Changelog](https://wpfusion.com/documentation/downloads/downloads-changelog/ "Changelog")

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