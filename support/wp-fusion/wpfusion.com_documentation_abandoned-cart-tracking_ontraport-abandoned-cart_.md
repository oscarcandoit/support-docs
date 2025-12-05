---
url: "https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/"
title: "Ontraport Abandoned Cart Tracking"
---

[Skip to content](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/#content)

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

# Ontraport Abandoned Cart Tracking

- Published onJanuary 18, 2018
- Last updated on July 8, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Abandoned Cart Tracking](https://wpfusion.com/documentation/#abandoned-cart-tracking)
- /
- Ontraport Abandoned Cart Tracking

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/\#overview) Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in Ontraport.

WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)

After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to Ontraport (even if they don’t complete the checkout).

You can then use automations in Ontraport to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/\#setup-in-wordpress) Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

[![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/\#syncing-cart-fields) Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in Ontraport. These fields can then be added to cart recovery emails using [merge fields](https://ontraport.com/university/Ontraport-for-marketing/Pages/Personalizing-with-merge-fields).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping.jpg)

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/\#recovery-urls) Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in Ontraport.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in Ontraport.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs.jpg) The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.

You can then use a merge field in the email editor in Ontraport to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/\#setup-in-ontraport) Setup in Ontraport

In Ontraport, create an automation that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

[![ontarport abandoned cart tracking automation trigger](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-automation-trigger-1024x276.png)](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-automation-trigger.png)

[![ontarport abandoned cart tracking automation](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-automation.png)](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-automation.png)

In your email, you can dynamically include the cart recovery URL by inserting the merge fied using the merge field editor.

[![ontarport abandoned cart tracking email](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-email.png)](https://wpfusion.com/wp-content/uploads/2018/01/ontarport-abandoned-cart-tracking-email.png)

Publish the automation to make it live.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/\#testing) Testing

To test your abandoned cart automation, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in Ontraport, the tag will be applied, and the email will be sent.

[![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs.jpg) The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to Ontraport.

You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/\#further-reading) Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in Ontraport, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

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

- [Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/#overview)
- [Setup in WordPress](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/#setup-in-wordpress)
- [Syncing cart fields](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/#syncing-cart-fields)
- [Recovery URLs](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/#recovery-urls)
- [Setup in Ontraport](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/#setup-in-ontraport)
- [Testing](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/#testing)
- [Further reading](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/#further-reading)

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