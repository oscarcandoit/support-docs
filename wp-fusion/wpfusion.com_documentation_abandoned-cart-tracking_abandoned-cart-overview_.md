---
url: "https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/"
title: "Abandoned Cart Tracking"
---

[Skip to content](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#content)

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

# Abandoned Cart Tracking Overview

- Published onJune 26, 2016
- Last updated on August 26, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Abandoned Cart Tracking](https://wpfusion.com/documentation/#abandoned-cart-tracking)
- /
- Abandoned Cart Tracking Overview

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#overview) Overview

WP Fusion’s Abandoned Cart addon works with:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)

to sync customer data and apply tags in your CRM when customers fail to finish checking out on your store or membership website.

After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to your CRM (even if they don’t complete the checkout).

You can then use automations in your CRM to follow up with customers who don’t complete checkout within a specified period of time.

The Abandoned Cart addon is available with Plus and Professional licenses.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#general-settings) General settings

[![WP Fusion's abandoned cart addon configuration](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-config-3-2-1024x972.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-config-3-2.jpg) WP Fusion provides a variety of settings for tracking and following up with abandoned carts on your WordPress website.

This addon has several general settings, which are found at Settings » WP Fusion » Addons » Abandoned Cart Tracking.

Depending on your connected CRM, different options will appear. The available settings are:

- **Sync Carts:** Both [ActiveCampaign](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/) and [Drip](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/) have the ability to sync entire cart contents over their APIs, including the cart products, prices, categories, product images, and applied discounts. If you’re connected to ActiveCampaign or Drip, you can enable this “enhanced” cart functionality by checking the box for **Sync Carts**. For more details see [ActiveCampaign Abandoned Cart Guide](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/) and [Drip Abandoned Cart Guide](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/).
- **Cart Items Image Size:** This setting appears when **Sync Carts** is enabled and lets you specify the product cart image size that should be synced into your CRM. Larger images will display more clearly in cart recovery emails, but will make the emails slower to load.
- **Product Categories:** This setting appears when **Sync Carts** is enabled and lets you select how product categories should be treated in ActiveCampaign or Drip. When “ _categories_” is selected the product categories will be synced, when “ _attributes_” is selected, the selected product attributes will be synced (for example “Large”, “Blue”)
- **Recovery URL Destination:** When using recovery URLs (see below), you can select where the URL should take the returning customer. _Current Page_  works best with plugins like CartFlows, WooFunnels, or LaunchFlows where different products have different checkout pages.
- **Apply Tags** **:** You can specify tags to be applied to the customer, which can trigger sequences in your CRM to follow up with customers who didn’t complete a purchase. Tags can also be configured for specific products while editing each product (see Plugin Integrations below). After a successful checkout any abandoned cart tags will be automatically removed.
- **Abandoned Cart Delay:** Normally WP Fusion sends customer data to your CRM immediately after they’ve entered their details on the checkout screen. Using this feature, you can delay sending any data to your CRM unless the customer hasn’t completed checkout within the specified time (in minutes). Using this setting simplifies the [automation strategy](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#strategy) in your CRM since you no longer need to add a wait and condition to see if the cart is still abandoned.
- **Trigger on Add to Cart:** This lets you start the abandoned cart process for logged in users when they add a product to the cart (instead of at checkout).

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#syncing-cart-fields) Syncing Cart Fields

With all CRMs, WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in the CRM. These fields can then be added to cart recovery emails using merge tags.

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping.jpg)

The available fields are:

- **Recovery URL:** This will be a one-click recovery URL to restore the customer’s cart, for example `https://mysite.com/checkout/?wpfrc=123`.
- **Cart Value:** The total value of the cart contents.
- **Cart Discount Code:** The discount code (if any) applied when the cart was abandoned.
- **Cart Discount Amount:** The discount amount (if any) applied when the cart was abandoned.
- **Cart Product Name(s):** The name of the product in the abandoned cart. If multiple products were in the cart, they will be comma-separated.

Any enabled fields will be synced to the corresponding custom fields in your CRM whenever a cart is updated (currently limited to WooCommerce and Easy Digital Downloads).

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#recovery-urls) Recovery URLs

WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in your CRM.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs.jpg) The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.

You can then use a merge field in the email editor in your CRM to include the unique recovery URL.

**Heads up:** If you are using a Recovery URL custom field in your CRM as the parameter for a button or link in an email, it’s recommended to turn _off_ Google Analytics tracking on that link.

The reason is that the UTM parameters can get appended to the contact ID, which causes the cart recovery not to work.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#event-tracking) Event Tracking

Only [ActiveCampaign](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/) and [Drip](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/) have dedicated APIs for abandoned cart data, with other CRMs you typically need to use a combination of a tag and custom field to trigger abandoned cart emails and send recovery URLs.

This is effective for triggering an email, but doesn’t give a full picture of your customers’ activity over time.

Thankfully, the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/) also includes an integration with the Abandoned Cart addon, allowing you to track cart activity as events in [15+ CRMs and marketing automation systems](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/#overview).

After installing the Event Tracking addon, head to the Event Tracking settings page, and add a new trigger for Abandoned Cart Created.

[![screenshot](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-event-tracking-1024x644.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-event-tracking.jpg) WP Fusion’s [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/) has been extended to support syncing cart data from the Abandoned Cart addon.

Create a title for your event, and include any relevant properties, such as the cart value, recovery URL, currency, and the user’s current page on your site.

When WP Fusion sends abandoned cart data to your CRM (either immediately, or [after a delay](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#general-settings)), the event will be triggered and appear on the contact’s timeline. When combined with the event [tracking features for WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#event-tracking) this helps you visualize customer behavior on your checkout in real time.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#plugin-integrations) Plugin integrations

WP Fusion’s abandoned cart addon can track abandoned carts in [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking), [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking), [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#abandoned-cart-tracking), [MemberPress](https://wpfusion.com/documentation/membership/memberpress/#abandoned-cart-tracking), and [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/#abandoned-cart-tracking).

In addition to the global settings, you can also track individual products by specifying tags to be applied in your CRM when a specific product or membership is in an abandoned cart.

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#woocommerce) WooCommerce

With [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking) you can specify product-specific abandoned cart tags from the WP Fusion panel while editing any product.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-woo-1024x573.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-woo-scaled.jpg)

You can also specify variation-specific tags when editing any variation.

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#easy-digital-downloads) Easy Digital Downloads

With [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking) cart abandonment tags can be set on the [main WP Fusion meta box](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/) for each download.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-edd-1024x442.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-edd-scaled.jpg)

You can also specify cart abandonment tags for individual price IDs when editing a price ID.

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#lifterlms) LifterLMS

With [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#abandoned-cart-tracking), cart abandonment tags can be set up specific to each access plan.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-llms-1024x527.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-llms-scaled.jpg)

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#memberpress) MemberPress

With [MemberPress](https://wpfusion.com/documentation/membership/memberpress/#abandoned-cart-tracking), cart abandonment tags can be set on the WP Fusion tab when editing any membership level.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-memberpress-1024x634.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-memberpress-scaled.jpg)

**General settings**

With MemberPress you also have the option to delay WP Fusion’s abandoned cart actions until after the first step of the checkout has been submitted.

This can be enabled by selecting **Trigger on Submit** at Settings » WP Fusion » Addons » Abandoned Cart Tracking.

[![](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-abandoned-cart-general-settings-1024x203.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/memberpress-abandoned-cart-general-settings.jpg)

This is designed to fix situations where a user’s browser might autofill an incorrect email address on the checkout, which then triggers the abandoned cart actions.

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#paid-memberships-pro) Paid Memberships Pro

With [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/#abandoned-cart-tracking), in addition to the global abandoned cart tags, membership-specific abandoned cart tags can be configured while editing any membership level.

[![screenshot](https://wpfusion.com/wp-content/uploads/2016/06/pmpro-abandoned-cart-tracking-1024x379.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/pmpro-abandoned-cart-tracking.jpg)

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/\#strategy) Strategy

The general strategy for tracking abandoned carts in your CRM with WP Fusion is to set it to apply tags when a checkout has started.

Because the addon will remove those tags when checkout is completed, you can user timers and logic in your CRM to identify customers who started checkout but haven’t yet completed it.

[![](https://wpfusion.com/wp-content/uploads/2016/06/MailChimp-Before@2x-796x1024.png)](https://wpfusion.com/wp-content/uploads/2016/06/MailChimp-Before@2x.png)

**The Abandoned Cart addon works with all of our CRM integrations.** See the other articles in this section for more specific strategies for tracking abandoned carts for specific CRMs.

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

- [Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#overview)
- [General settings](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#general-settings)
- [Syncing Cart Fields](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#syncing-cart-fields)
- [Recovery URLs](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#recovery-urls)
- [Event Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#event-tracking)
- [Plugin integrations](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#plugin-integrations)
- [WooCommerce](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#woocommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#easy-digital-downloads)
- [LifterLMS](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#lifterlms)
- [MemberPress](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#memberpress)
- [Paid Memberships Pro](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#paid-memberships-pro)
- [Strategy](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/#strategy)

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