---
url: "https://wpfusion.com/documentation/ecommerce/restropress/"
title: "Connect RestroPress to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/restropress/#content)

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

# RestroPress

- Published onAugust 9, 2021
- Last updated on August 9, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- RestroPress

### [\#](https://wpfusion.com/documentation/ecommerce/restropress/\#overview) Overview

WP Fusion integrates with the [RestroPress food ordering plugin](https://wpfusion.com/go/restropress) to sync customers with any one of [40+ supported CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/), and apply tags based on the products purchased.

### [\#](https://wpfusion.com/documentation/ecommerce/restropress/\#syncing-customers) Syncing customers

By default, when a customer checks out in RestroPress, they will be synced to your connected CRM with their name and email address.

You can configure the field mapping between additional RestroPress customer fields and custom fields in your CRM in WP Fusion’s [Contact Fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

[![](https://wpfusion.com/wp-content/uploads/2021/08/restropress-fields-1024x532.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/restropress-fields.jpg)

In addition to the phone and address fields, there are several “pseudo” fields that can be used to sync details about a customer’s most recent order with your CRM:

- **Order Date:** The date of the customer’s most recent order
- **Order ID:** The ID of the customer’s most recent order.
- **Order Total:** The total amount of the customer’s most recent order.
- **Order Notes:** The delivery notes from the customer’s most recent order.
- **Order Discount Value:** The total discount value of the customer’s most recent order (if applicable).

### [\#](https://wpfusion.com/documentation/ecommerce/restropress/\#product-settings) Product settings

When editing any RestroPress food item, you can click on the WP Fusion settings panel to access WP Fusion’s product options.

[![](https://wpfusion.com/wp-content/uploads/2021/08/restropress-product-settings-1024x300.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/restropress-product-settings.jpg)

Any tags specified in the **Apply Tags** settings will be applied to the customer’s contact record in your CRM when this food item is purchased.

### [\#](https://wpfusion.com/documentation/ecommerce/restropress/\#general-settings) General settings

WP Fusion includes one global setting for RestroPress, at Settings » WP Fusion » Integrations » RestroPress.

[![](https://wpfusion.com/wp-content/uploads/2021/08/restropress-general-1024x515.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/restropress-general.jpg)

Any tags specified in the **Apply Tags to Customers** setting will be applied to all RestroPress customers after their purchase is complete.

### [\#](https://wpfusion.com/documentation/ecommerce/restropress/\#syncing-historical-orders) Syncing historical orders

If you already have an existing RestroPress store, you can use WP Fusion to sync all historical orders to your CRM.

First configure your products with any tags you’d like to be applied when purchased. Then navigate to Settings » WP Fusion » Advanced and scroll down to the **Batch Operations** section.

[![](https://wpfusion.com/wp-content/uploads/2021/08/restropress-batch-ops-1024x575.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/restropress-batch-ops.jpg)

Select “RestroPress Orders” from the list of options, and click **Create Background Task.**

WP Fusion will go through all of your orders, adding / updating contacts as necessary in your CRM, and tagging them based on the products purchased. A status bar will appear at the top of the page indicating the progress.

After each order is processed it will be locked by WP Fusion so it can’t be exported again, to prevent duplicate data from going to your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect RestroPress to ActiveCampaign](https://wpfusion.com/connect/connect-restropress-to-activecampaign/)  \|
- [Connect RestroPress to AgileCRM](https://wpfusion.com/connect/connect-restropress-to-agilecrm/)  \|
- [Connect RestroPress to Autopilot](https://wpfusion.com/connect/connect-restropress-to-autopilot/)  \|
- [Connect RestroPress to Bento](https://wpfusion.com/connect/connect-restropress-to-bento/)  \|
- [Connect RestroPress to BirdSend](https://wpfusion.com/connect/connect-restropress-to-birdsend/)  \|
- [Connect RestroPress to Brevo](https://wpfusion.com/connect/connect-restropress-to-brevo/)  \|
- [Connect RestroPress to Capsule](https://wpfusion.com/connect/connect-restropress-to-capsule/)  \|
- [Connect RestroPress to Constant Contact](https://wpfusion.com/connect/connect-restropress-to-constant-contact/)  \|
- [Connect RestroPress to ConvertKit](https://wpfusion.com/connect/connect-restropress-to-convertkit/)  \|
- [Connect RestroPress to ConvesioConvert](https://wpfusion.com/connect/connect-restropress-to-convesioconvert/)  \|
- [Connect RestroPress to Copper](https://wpfusion.com/connect/connect-restropress-to-copper/)  \|
- [Connect RestroPress to Customer.io](https://wpfusion.com/connect/connect-restropress-to-customer-io/)  \|
- [Connect RestroPress to Customerly](https://wpfusion.com/connect/connect-restropress-to-customerly/)  \|
- [Connect RestroPress to Drip](https://wpfusion.com/connect/connect-restropress-to-drip/)  \|
- [Connect RestroPress to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-restropress-to-dynamics-365-marketing/)  \|
- [Connect RestroPress to EmailOctopus](https://wpfusion.com/connect/connect-restropress-to-emailoctopus/)  \|
- [Connect RestroPress to EngageBay](https://wpfusion.com/connect/connect-restropress-to-engagebay/)  \|
- [Connect RestroPress to Flexie](https://wpfusion.com/connect/connect-restropress-to-flexie/)  \|
- [Connect RestroPress to FluentCRM](https://wpfusion.com/connect/connect-restropress-to-fluentcrm/)  \|
- [Connect RestroPress to FunnelKit](https://wpfusion.com/connect/connect-restropress-to-funnelkit/)  \|
- [Connect RestroPress to Gist](https://wpfusion.com/connect/connect-restropress-to-gist/)  \|
- [Connect RestroPress to Groundhogg](https://wpfusion.com/connect/connect-restropress-to-groundhogg/)  \|
- [Connect RestroPress to HighLevel](https://wpfusion.com/connect/connect-restropress-to-highlevel/)  \|
- [Connect RestroPress to HubSpot](https://wpfusion.com/connect/connect-restropress-to-hubspot/)  \|
- [Connect RestroPress to Infusionsoft](https://wpfusion.com/connect/connect-restropress-to-infusionsoft/)  \|
- [Connect RestroPress to Intercom](https://wpfusion.com/connect/connect-restropress-to-intercom/)  \|
- [Connect RestroPress to Jetpack CRM](https://wpfusion.com/connect/connect-restropress-to-jetpack-crm/)  \|
- [Connect RestroPress to Kartra](https://wpfusion.com/connect/connect-restropress-to-kartra/)  \|
- [Connect RestroPress to Keap](https://wpfusion.com/connect/connect-restropress-to-keap/)  \|
- [Connect RestroPress to Klaviyo](https://wpfusion.com/connect/connect-restropress-to-klaviyo/)  \|
- [Connect RestroPress to KlickTipp](https://wpfusion.com/connect/connect-restropress-to-klicktipp/)  \|
- [Connect RestroPress to Loopify](https://wpfusion.com/connect/connect-restropress-to-loopify/)  \|
- [Connect RestroPress to MailChimp](https://wpfusion.com/connect/connect-restropress-to-mailchimp/)  \|
- [Connect RestroPress to MailerLite](https://wpfusion.com/connect/connect-restropress-to-mailerlite/)  \|
- [Connect RestroPress to Mailjet](https://wpfusion.com/connect/connect-restropress-to-mailjet/)  \|
- [Connect RestroPress to MailPoet](https://wpfusion.com/connect/connect-restropress-to-mailpoet/)  \|
- [Connect RestroPress to Maropost](https://wpfusion.com/connect/connect-restropress-to-maropost/)  \|
- [Connect RestroPress to Mautic](https://wpfusion.com/connect/connect-restropress-to-mautic/)  \|
- [Connect RestroPress to NationBuilder](https://wpfusion.com/connect/connect-restropress-to-nationbuilder/)  \|
- [Connect RestroPress to Omnisend](https://wpfusion.com/connect/connect-restropress-to-omnisend/)  \|
- [Connect RestroPress to Ontraport](https://wpfusion.com/connect/connect-restropress-to-ontraport/)  \|
- [Connect RestroPress to Ortto](https://wpfusion.com/connect/connect-restropress-to-ortto/)  \|
- [Connect RestroPress to Pipedrive](https://wpfusion.com/connect/connect-restropress-to-pipedrive/)  \|
- [Connect RestroPress to Platformly](https://wpfusion.com/connect/connect-restropress-to-platformly/)  \|
- [Connect RestroPress to Quentn](https://wpfusion.com/connect/connect-restropress-to-quentn/)  \|
- [Connect RestroPress to Salesflare](https://wpfusion.com/connect/connect-restropress-to-salesflare/)  \|
- [Connect RestroPress to Salesforce](https://wpfusion.com/connect/connect-restropress-to-salesforce/)  \|
- [Connect RestroPress to Sender](https://wpfusion.com/connect/connect-restropress-to-sender/)  \|
- [Connect RestroPress to SendFox](https://wpfusion.com/connect/connect-restropress-to-sendfox/)  \|
- [Connect RestroPress to Tubular](https://wpfusion.com/connect/connect-restropress-to-tubular/)  \|
- [Connect RestroPress to User.com](https://wpfusion.com/connect/connect-restropress-to-user-com/)  \|
- [Connect RestroPress to WP ERP](https://wpfusion.com/connect/connect-restropress-to-wp-erp/)  \|
- [Connect RestroPress to Zoho](https://wpfusion.com/connect/connect-restropress-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/restropress/#overview)
- [Syncing customers](https://wpfusion.com/documentation/ecommerce/restropress/#syncing-customers)
- [Product settings](https://wpfusion.com/documentation/ecommerce/restropress/#product-settings)
- [General settings](https://wpfusion.com/documentation/ecommerce/restropress/#general-settings)
- [Syncing historical orders](https://wpfusion.com/documentation/ecommerce/restropress/#syncing-historical-orders)

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