---
url: "https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/"
title: "Gifting for WooCommerce Subscriptions"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/#content)

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

# Gifting for WooCommerce Subscriptions

- Published onApril 27, 2020
- Last updated on February 16, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- Gifting for WooCommerce Subscriptions

### [\#](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/\#overview) Overview

In addition to supporting [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/), WP Fusion also includes support for the [Gifting for WooCommerce Subscriptions](https://wpfusion.com/go/woocommerce-subscriptions-gifting) extension.

With this integration you can apply tags [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) to the recipient of a gifted WooCommerce subscription.

### [\#](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/\#tagging) Tagging

When this extension is active, additional options will appear on the WP Fusion tab when editing your subscription products.

[![](https://wpfusion.com/wp-content/uploads/2020/04/woocommerce-subscriptions-gifting-1-1024x479.jpg)](https://wpfusion.com/wp-content/uploads/2020/04/woocommerce-subscriptions-gifting-1-scaled.jpg)

These settings are:

- **Apply tags to recipient:** Any tags specified here will be applied just to the recipient of the gifted subscription.
- **Remove tags:** If selected, the _Apply tags to recipient_ tags applied at purchase will be removed when the subscription is cancelled, put on hold, expired, or is switched.
- **Remove tags from customer:** You can check this box to remove any tags specified in _Apply tags to_ _recipient_ from the customer who made the original purchase. This is useful if you’re using tags to grant access to content and only want the gift recipient to get access. Note that the tags will _not_ be removed from the customer if that customer already has a separate active subscription to the same product.

For more information on how WP Fusion handles subscription statuses see the [WooCommerce Subscriptions documentation](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#subscription-status-changes).

### [\#](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/\#usage) Usage

This integration is a complicated by the fact that a WooCommerce checkout with a gifted subscription creates two users on your site:

1. The customer who purchased the subscription, and who is responsible for managing the billing
2. The gift recipient, who receives access to the purchased product

As such, two contact records will be created in your CRM, and both of them will be tagged.

#### [\#](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/\#the-customer) The customer

[![](https://wpfusion.com/wp-content/uploads/2020/04/woocommerce-subscriptions-gifting-2-1-1024x771.jpg)](https://wpfusion.com/wp-content/uploads/2020/04/woocommerce-subscriptions-gifting-2-1-scaled.jpg) These tags are applied to the customer who made the purchase

The tags configured at the top of the settings are applied to the customer who made the purchase. If there is a payment failure on the subscription, the original customer would be tagged _Payment Failed_, and you could use that to send an email like “Your gifted subscription had a payment failure”.

#### [\#](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/\#the-gift-recipient) The gift recipient

[![](https://wpfusion.com/wp-content/uploads/2020/04/woocommerce-subscriptions-gifting-1-1024x479.jpg)](https://wpfusion.com/wp-content/uploads/2020/04/woocommerce-subscriptions-gifting-1-scaled.jpg) These are the only tags that are applied to the gift recipient

After checkout, the gift recipient will only be tagged with the tags specified in the **Apply tags to recipient** setting. The gift recipient will not be tagged based on changes in the subscription status, since they aren’t responsible for billing.

If you are granting access to content using a tag, you can check **Remove tags from customer**, this will remove any tags that were applied to the gift recipient from the customer who made the purchase.

In our screenshots above, that means the customer who made the purchase would be tagged _Subscription Purchased_ at checkout, and then this tag would be removed because the subscription was purchased as a gift. The gift recipient would then be tagged _Gift Recipient_ and _Subscription Purchased_.

You can use this to ensure that only the gift recipient gets access to the purchased content, protected in this example by the _Subscription Purchased_ tag.

#### [\#](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/\#gift-recipient-fields) Gift recipient fields

By default, the only information WooCommerce collects about the gift recipient is their email address. WP Fusion will use this email address to create a contact record in your CRM, with no name or other details.

WooCommerce then [sends the gift recipient an email](https://woocommerce.com/document/subscriptions-gifting/#section-7) asking them to complete their profile and shipping address, and WP Fusion will sync the updated profile information to the gift recipient’s contact record in your CRM at that time.

**If you’d like to collect gift recipient details at checkout**, you can prompt your customers to fill in shipping details for the gift recipient. By default this says “ _Ship to a different address?”_, but this can be customized with a [checkout editor plugin](https://wordpress.org/plugins/woo-checkout-field-editor-pro/), for example to read “ _Address of the recipient_“.

[![](https://wpfusion.com/wp-content/uploads/2020/04/wcs-subscriptions-gifting-custom-checkout-1024x853.jpeg)](https://wpfusion.com/wp-content/uploads/2020/04/wcs-subscriptions-gifting-custom-checkout-scaled.jpeg) You can use a checkout editor plugin to prompt customers to enter the gift recipient’s details in the Shipping Address part of checkout.

In this case, the name and address entered in the Shipping Details section will be synced to the gift recipient’s contact record in your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/#overview)
- [Tagging](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/#tagging)
- [Usage](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/#usage)
- [The customer](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/#the-customer)
- [The gift recipient](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/#the-gift-recipient)
- [Gift recipient fields](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/#gift-recipient-fields)

### In this chapter

- [Cancellation Survey for Woo Subscriptions](https://wpfusion.com/documentation/ecommerce/cancellation-survey-for-woocommerce-subscriptions/ "Cancellation Survey for Woo Subscriptions")
- [CartFlows](https://wpfusion.com/documentation/ecommerce/cartflows/ "CartFlows")
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/ "Easy Digital Downloads")
- [EDD Recurring Payments](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/ "EDD Recurring Payments")
- [EDD Software Licensing](https://wpfusion.com/documentation/ecommerce/edd-software-licensing/ "EDD Software Licensing")
- [FluentCart](https://wpfusion.com/documentation/ecommerce/fluentcart/ "FluentCart")
- [FunnelKit](https://wpfusion.com/documentation/ecommerce/woofunnels/ "FunnelKit")
- [Gifting for WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/gifting-for-woocommerce-subscriptions/ "Gifting for WooCommerce Subscriptions")
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/ "GiveWP")
- [LaunchFlows](https://wpfusion.com/documentation/ecommerce/launchflows/ "LaunchFlows")
- [Paymattic](https://wpfusion.com/documentation/ecommerce/paymattic/ "Paymattic")
- [Product Add-Ons for WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce-addons/ "Product Add-Ons for WooCommerce")
- [RestroPress](https://wpfusion.com/documentation/ecommerce/restropress/ "RestroPress")
- [Studiocart](https://wpfusion.com/documentation/ecommerce/studiocart/ "Studiocart")
- [Subscriptions for WooCommerce](https://wpfusion.com/documentation/ecommerce/subscriptions-for-woocommerce/ "Subscriptions for WooCommerce")
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/ "SureCart")
- [Upsell Plugin](https://wpfusion.com/documentation/ecommerce/upsell-plugin/ "Upsell Plugin")
- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/ "WooCommerce")
- [WooCommerce All Products for Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-all-products-for-subscriptions/ "WooCommerce All Products for Subscriptions")
- [WooCommerce Deposits](https://wpfusion.com/documentation/ecommerce/woocommerce-deposits/ "WooCommerce Deposits")
- [WooCommerce Gravity Forms Product Add-ons](https://wpfusion.com/documentation/ecommerce/woocommerce-gravity-forms-product-add-ons/ "WooCommerce Gravity Forms Product Add-ons")
- [WooCommerce Payment Plans](https://wpfusion.com/documentation/ecommerce/woocommerce-payment-plans/ "WooCommerce Payment Plans")
- [WooCommerce Payments](https://wpfusion.com/documentation/ecommerce/woocommerce-payments/ "WooCommerce Payments")
- [WooCommerce Product Options](https://wpfusion.com/documentation/ecommerce/woocommerce-product-options/ "WooCommerce Product Options")
- [WooCommerce Shipment Tracking](https://wpfusion.com/documentation/ecommerce/woocommerce-shipment-tracking/ "WooCommerce Shipment Tracking")
- [WooCommerce Smart Coupons](https://wpfusion.com/documentation/ecommerce/woocommerce-smart-coupons/ "WooCommerce Smart Coupons")
- [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/ "WooCommerce Subscriptions")
- [WP Crowdfunding](https://wpfusion.com/documentation/ecommerce/wp-crowdfunding/ "WP Crowdfunding")
- [WP Simple Pay](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/ "WP Simple Pay")
- [WP Software License](https://wpfusion.com/documentation/ecommerce/wp-software-license/ "WP Software License")
- [WP Ultimo](https://wpfusion.com/documentation/ecommerce/wp-ultimo/ "WP Ultimo")
- [WPPizza](https://wpfusion.com/documentation/ecommerce/wppizza/ "WPPizza")
- [YITH WooCommerce Multi Vendor](https://wpfusion.com/documentation/ecommerce/yith-woocommerce-multi-vendor/ "YITH WooCommerce Multi Vendor")

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