---
url: "https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/"
title: "Drip Enhanced Ecommerce"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#content)

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

# Drip Enhanced Ecommerce

- Published onNovember 24, 2017
- Last updated on August 8, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Enhanced Ecommerce](https://wpfusion.com/documentation/#ecommerce-tracking)
- /
- Drip Enhanced Ecommerce

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#overview) Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data to your Drip account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#getting-started) Getting Started

Install and activate the Ecommerce Addon, and then navigate to the Enhanced Ecommerce tab of the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2017/11/drip-enhanced-ecommerce-settings-1024x778.jpg)](https://wpfusion.com/wp-content/uploads/2017/11/drip-enhanced-ecommerce-settings.jpg)

The **Orders** setting is enabled by default— as long as this is checked, WP Fusion will automatically sync order data to Drip from any of the supported ecommerce plugins (above).

There are two additional settings:

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#sync-attributes) Sync attributes

If you’re using a WooCommerce extension which attaches additional metadata to orders (i.e. [WooCommerce Product Addons](https://wpfusion.com/documentation/ecommerce/woocommerce-addons/)) and you wish to see this data in Drip, check the box for **Sync Attributes**.

Each product attribute or variation will be sent to Drip as a separate line item.

[![](https://wpfusion.com/wp-content/uploads/2017/11/drip-sync-attributes-1024x610.jpg)](https://wpfusion.com/wp-content/uploads/2017/11/drip-sync-attributes.jpg) When Sync Attributes is enabled in the WP Fusion settings, each selected product attribute is set to Drip as a line item on the order.

This can be used to trigger workflows based on specific variation purchases, or custom field values collected at checkout.

For example you could use [WooCommerce Gravity Forms Product Addons](https://wpfusion.com/documentation/ecommerce/woocommerce-gravity-forms-product-add-ons/) to ask the customer if their gift needs personalizing, and then use this value as a condition in your Drip workflows.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#sync-product-edits) Sync product edits

By default, WP Fusion syncs your products with Drip as customers check out on your store. However, this means that you can only use a [Product Content Block](https://help.drip.com/hc/en-us/articles/4424695627277-Product-Content-Block) in an email with products that have already been purchased.

By enabling **Sync Product Edits**(with WooCommerce), WP Fusion will create and update products in Drip as they are published and edited in WooCommerce.

**Note:** Products created in WooCommerce don’t show up in Drip right away. In our experience it can take about an hour for Drip to process the new product data and make it available for the Product Content Block.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#how-it-works) How it works

When a customer checks out on your site, WP Fusion will create a new order in Drip with the products purchased, the quantities, and total sale value. This sale data will be tied to the contact record who made the purchase. The contact’s Lifetime Value will also be updated.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#variable-products) Variable products

If you’re selling variable products with WooCommerce, WP Fusion will update the _Product Variant ID_ property in Drip with the ID of the product variation.

[![](https://wpfusion.com/wp-content/uploads/2017/11/drip-variation-trigger-1024x694.jpg)](https://wpfusion.com/wp-content/uploads/2017/11/drip-variation-trigger.jpg) WP Fusion updates the Product Variant ID field in Drip with a variable product’s ID, and this can be used in triggers and conditions.

This can be used to trigger workflows based on a specific product variation purchase— for example a monthly vs annual subscription.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#how-it-looks) How it looks

[![](https://wpfusion.com/wp-content/uploads/2017/11/drip-orders-v3-1-1024x386.jpg)](https://wpfusion.com/wp-content/uploads/2017/11/drip-orders-v3-1-scaled.jpg) Orders are shown in the subscriber’s orders feed[![](https://wpfusion.com/wp-content/uploads/2017/11/drip-orders-v3-2-1024x460.jpg)](https://wpfusion.com/wp-content/uploads/2017/11/drip-orders-v3-2-scaled.jpg) Order details are stored including products purchased, images, taxes, discounts, and shipping![](https://wpfusion.com/wp-content/uploads/2017/11/drip-ecommerce-2-1024x163.jpg)Lifetime values are updated automatically

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#video-enhanced-ecommerce-drip) Video – Enhanced Ecommerce – Drip

Enhanced Ecommerce - Drip from Very Good Plugins on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/920480356-d8ae9c592744e7f8dd728e2433783d2e5bbd727497a0d7ef939e2c2b32c4426b-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/41604818_60x60?sig=ace69b6b1138b8ce1b943b533c22a573a68660be0cb4d8b06fa1d5d796d9e271&v=1&region=us)](https://vimeo.com/verygoodplugins?fl=pl&fe=po)

Play

00:00

01:11

Settings

QualityAuto

Picture-in-PictureFullscreen

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/\#order-status-changes) Order status changes

With WooCommerce, when an order status is updated, WP Fusion will automatically sync the status to Drip.

- When an order is marked **Processing**, the status in Drip will be updated to Placed
- When an order is marked **Completed**, the status in Drip will be updated to Fulfilled
- When an order is marked **Cancelled**, the status in Drip will be updated to Cancelled
- When an order is **Refunded**, the status in Drip will be updated to Refunded and the order total will be set to 0

[![](https://wpfusion.com/wp-content/uploads/2017/11/drip-ecom-order-refunded-1024x657.jpg)](https://wpfusion.com/wp-content/uploads/2017/11/drip-ecom-order-refunded-scaled.jpg) A cancelled order in WooCommerce is updated in Drip

Note that the status shown in the Drip Orders list doesn’t fully indicate the status of the order:

- Both Placed and Fulfilled orders appear exactly the same, with a green badge and the total amount paid.
- Refunded orders show a green badge but a $0.00 total order amount.
- Cancelled orders show a red “Cancelled” badge.

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

- [Overview](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#overview)
- [Getting Started](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#getting-started)
- [Sync attributes](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#sync-attributes)
- [Sync product edits](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#sync-product-edits)
- [How it works](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#how-it-works)
- [Variable products](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#variable-products)
- [How it looks](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#how-it-looks)
- [Video - Enhanced Ecommerce - Drip](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#video-enhanced-ecommerce-drip)
- [Order status changes](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/#order-status-changes)

### In this chapter

- [Ecommerce Tracking Overview](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/ "Ecommerce Tracking Overview")
- [ActiveCampaign Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/ "ActiveCampaign Enhanced Ecommerce")
- [AgileCRM Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/ "AgileCRM Enhanced Ecommerce")
- [Brevo Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/ "Brevo Enhanced Ecommerce")
- [Drip Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/ "Drip Enhanced Ecommerce")
- [Groundhogg Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/ "Groundhogg Enhanced Ecommerce")
- [HighLevel Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/ "HighLevel Enhanced Ecommerce")
- [HubSpot Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/ "HubSpot Enhanced Ecommerce")
- [Infusionsoft / Keap Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/ "Infusionsoft / Keap Enhanced Ecommerce")
- [MailerLite Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/ "MailerLite Enhanced Ecommerce")
- [NationBuilder Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/ "NationBuilder Enhanced Ecommerce")
- [Ontraport Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/ "Ontraport Enhanced Ecommerce")
- [Salesforce Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/ "Salesforce Enhanced Ecommerce")
- [Zoho Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/zoho-ecommerce/ "Zoho Enhanced Ecommerce")
- [Enhanced Ecommerce Changelog](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/ "Enhanced Ecommerce Changelog")

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