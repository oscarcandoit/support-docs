---
url: "https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/"
title: "Abandoned Cart Automatic Discounts"
---

[Skip to content](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/#content)

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

# Automatic Discounts

- Published onJune 12, 2019
- Last updated on November 28, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Abandoned Cart Tracking](https://wpfusion.com/documentation/#abandoned-cart-tracking)
- /
- Automatic Discounts

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/\#overview) Overview

WP Fusion’s [WooCommerce integration](https://wpfusion.com/documentation/ecommerce/woocommerce/#auto-discounts) has the ability to automatically apply a discount based on a contact’s tags in your CRM.

This can be used in conjunction with the Abandoned Cart addon to automatically give a discount to customers who abandon their carts.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/\#setup) Setup

First create a coupon in WooCommerce. In this example we’ve created a coupon called Recovered Cart Discount with a 10% discount.

[![](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-1-1024x593.jpg)](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-1.jpg)

Then click on the WP Fusion tab, and select a tag that should trigger the discount.

[![](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-2-1024x550.jpg)](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-2.jpg)

In this example we’re using the _Abandoned Cart_ tag. You can also make product specific coupons and use product specific tags to trigger them.

You can optionally override the discount label and discount message, or leave them at their defaults.

Then head over to Settings » WP Fusion » Addons and configure the same tag to be applied when a cart is abandoned.

[![](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-3-1024x633.jpg)](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-3.jpg)

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/\#how-it-works) How it works

When a customer begins checkout a contact record will be created and the _Abandoned Cart_ tag will be applied.

If you’re using [Drip](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/) or [ActiveCampaign](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/) the recovery URL will be sent along with the rest of the cart details, and can be merged into an email sent to the customer.

For other CRMs, the cart recovery URL will be synced to the custom field specified in the **Recovery URL** setting. This will look like `https://mysite.com/cart/?wpfrc=xxxxxxxxx`.

**Heads up:** If you are using a Recovery URL custom field in your CRM as the parameter for a button or link in an email, it’s recommended to turn _off_ Google Analytics tracking on that link.

The reason is that the UTM parameters can get appended to the contact ID, which causes the cart recovery not to work.

When the customer follows this link they’ll be taken back to your site, their cart contents will be restored, and their information will be pre-filled on the checkout form.

[![](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-4-1024x776.jpg)](https://wpfusion.com/wp-content/uploads/2019/06/abandoned-cart-auto-discounts-4.jpg)

WP Fusion will load the contact’s tags, and when it detects the _Abandoned Cart_ tag it will automatically apply the associated discount.

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

- [Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/#overview)
- [Setup](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/#setup)
- [How it works](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/#how-it-works)

### In this chapter

- [Abandoned Cart Tracking Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/ "Abandoned Cart Tracking Overview")
- [ActiveCampaign Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/ "ActiveCampaign Abandoned Cart Tracking")
- [AgileCRM Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/agilecrm-abandoned-cart/ "AgileCRM Abandoned Cart Tracking")
- [Automatic Discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/ "Automatic Discounts")
- [Brevo Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/brevo-abandoned-cart/ "Brevo Abandoned Cart Tracking")
- [ConvertKit Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/convertkit-abandoned-cart/ "ConvertKit Abandoned Cart Tracking")
- [Drip Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/ "Drip Abandoned Cart Tracking")
- [FluentCRM Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/fluentcrm-abandoned-cart-tracking/ "FluentCRM Abandoned Cart Tracking")
- [HighLevel Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/highlevel-abandoned-cart-tracking/ "HighLevel Abandoned Cart Tracking")
- [HubSpot Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/ "HubSpot Abandoned Cart Tracking")
- [Infusionsoft / Keap Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/infusionsoft-abandoned-cart/ "Infusionsoft / Keap Abandoned Cart Tracking")
- [Mautic Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/mautic-abandoned-cart/ "Mautic Abandoned Cart Tracking")
- [Ontraport Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/ "Ontraport Abandoned Cart Tracking")
- [Other CRMs](https://wpfusion.com/documentation/abandoned-cart-tracking/other-crms/ "Other CRMs")
- [Abandoned Cart Tracking Changelog](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/ "Abandoned Cart Tracking Changelog")

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