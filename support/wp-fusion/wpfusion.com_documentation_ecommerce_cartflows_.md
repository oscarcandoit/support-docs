---
url: "https://wpfusion.com/documentation/ecommerce/cartflows/"
title: "Connect CartFlows to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/cartflows/#content)

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

# CartFlows

- Published onJune 4, 2019
- Last updated on March 14, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- CartFlows

### [\#](https://wpfusion.com/documentation/ecommerce/cartflows/\#overview) Overview

WP Fusion integrates with [CartFlows](https://wpfusion.com/go/cartflows) for syncing your customers with [any one of 50+ supported CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/), as well as applying tags based on product purchases, and responses to upsell offers.

Because CartFlows uses WooCommerce for checkout, all of WP Fusion’s [WooCommerce features](https://wpfusion.com/documentation/ecommerce/woocommerce/) work automatically with CartFlows.

You can also use WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) to track and recover abandoned carts in CartFlows.

### [\#](https://wpfusion.com/documentation/ecommerce/cartflows/\#checkouts) Checkouts

In addition to WP Fusion’s [normal features for tagging customers at checkout](https://wpfusion.com/documentation/ecommerce/woocommerce/#tagging-customers), you can also configure tags on individual checkout steps in your CartFlows flows.

[![](https://wpfusion.com/wp-content/uploads/2019/06/cartflows-apply-tag-checkout-1024x521.jpg)](https://wpfusion.com/wp-content/uploads/2019/06/cartflows-apply-tag-checkout.jpg)

This is found at Checkout » Settings » WP Fusion. A tag specified here will be applied to customers when they check out using this checkout step. It can be used to track the effectiveness of your flows and checkout layouts.

### [\#](https://wpfusion.com/documentation/ecommerce/cartflows/\#upsells) Upsells

WP Fusion allows you to apply tags in your CRM when an upsell is either accepted or rejected by a customer.

[![](https://wpfusion.com/wp-content/uploads/2019/06/cartflows-new-ui-1024x565.jpg)](https://wpfusion.com/wp-content/uploads/2019/06/cartflows-new-ui.jpg) The WP Fusion settings appear on each step’s Settings panel in the new CartFlows UI

These settings can be found on the **WP Fusion** tab while editing any offer.

### [\#](https://wpfusion.com/documentation/ecommerce/cartflows/\#custom-fields) Custom Fields

WP Fusion will automatically detect any custom fields added to the CartFlows checkouts or optin forms.

These will appear under the **WooCommerce** header in Settings » WP Fusion » [Contact Fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/). You can enable any CartFlows custom fields for sync to a custom field in your CRM.

### [\#](https://wpfusion.com/documentation/ecommerce/cartflows/\#general-settings) General Settings

WP Fusion has one global setting for CartFlows, found at Settings » WP Fusion » Integrations » CartFlows.

[![](https://wpfusion.com/wp-content/uploads/2019/06/cartflows-general-1024x447.jpg)](https://wpfusion.com/wp-content/uploads/2019/06/cartflows-general.jpg)

When you enable **Run on Main Order Accepted**, WP Fusion will kick in and send data to your CRM when the WooCommerce order status becomes _Main Order Accepted_ instead of waiting for the _Completed_ status.

To figure out whether or not you need this enabled, some context:

- By default WP Fusion doesn’t send any data to your CRM until an order status is _Processing_ or _Completed_ in WooCommerce.
- With CartFlows, if you have an upsell, the order status is set to a custom _“Main Order Accepted”_ status while the upsell is shown to the customer.
- If the customer either accepts or rejects the upsell, the order status is set to Completed, and WP Fusion will run.
- However, if the customer leaves the upsell page, the order status stays as _Main Order Accepted_ for 15 minutes until it automatically converts to Completed.
- This could result in WP Fusion not sending any data to your CRM for 15 minutes while CartFlows waits for a response to the upsell. Enabling **Run on Main Order Accepted** helps make sure that the data is sent to your CRM regardless of whether or not the customer responds to the upsell.

If you need to enable **Run on Main Order Accepted**, we recommend running a test checkout to make sure it works properly with your setup.

Due to trying to sync the order details and the upsell details in two stages, it may result in tags being applied twice, which (depending on your CRM) could trigger duplicate emails.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect CartFlows to ActiveCampaign](https://wpfusion.com/connect/connect-cartflows-to-activecampaign/)  \|
- [Connect CartFlows to AgileCRM](https://wpfusion.com/connect/connect-cartflows-to-agilecrm/)  \|
- [Connect CartFlows to Autopilot](https://wpfusion.com/connect/connect-cartflows-to-autopilot/)  \|
- [Connect CartFlows to Bento](https://wpfusion.com/connect/connect-cartflows-to-bento/)  \|
- [Connect CartFlows to BirdSend](https://wpfusion.com/connect/connect-cartflows-to-birdsend/)  \|
- [Connect CartFlows to Brevo](https://wpfusion.com/connect/connect-cartflows-to-brevo/)  \|
- [Connect CartFlows to Capsule](https://wpfusion.com/connect/connect-cartflows-to-capsule/)  \|
- [Connect CartFlows to Constant Contact](https://wpfusion.com/connect/connect-cartflows-to-constant-contact/)  \|
- [Connect CartFlows to ConvertKit](https://wpfusion.com/connect/connect-cartflows-to-convertkit/)  \|
- [Connect CartFlows to ConvesioConvert](https://wpfusion.com/connect/connect-cartflows-to-convesioconvert/)  \|
- [Connect CartFlows to Copper](https://wpfusion.com/connect/connect-cartflows-to-copper/)  \|
- [Connect CartFlows to Customer.io](https://wpfusion.com/connect/connect-cartflows-to-customer-io/)  \|
- [Connect CartFlows to Customerly](https://wpfusion.com/connect/connect-cartflows-to-customerly/)  \|
- [Connect CartFlows to Drip](https://wpfusion.com/connect/connect-cartflows-to-drip/)  \|
- [Connect CartFlows to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-cartflows-to-dynamics-365-marketing/)  \|
- [Connect CartFlows to EmailOctopus](https://wpfusion.com/connect/connect-cartflows-to-emailoctopus/)  \|
- [Connect CartFlows to EngageBay](https://wpfusion.com/connect/connect-cartflows-to-engagebay/)  \|
- [Connect CartFlows to Flexie](https://wpfusion.com/connect/connect-cartflows-to-flexie/)  \|
- [Connect CartFlows to FluentCRM](https://wpfusion.com/connect/connect-cartflows-to-fluentcrm/)  \|
- [Connect CartFlows to FunnelKit](https://wpfusion.com/connect/connect-cartflows-to-funnelkit/)  \|
- [Connect CartFlows to Gist](https://wpfusion.com/connect/connect-cartflows-to-gist/)  \|
- [Connect CartFlows to Groundhogg](https://wpfusion.com/connect/connect-cartflows-to-groundhogg/)  \|
- [Connect CartFlows to HighLevel](https://wpfusion.com/connect/connect-cartflows-to-highlevel/)  \|
- [Connect CartFlows to HubSpot](https://wpfusion.com/connect/connect-cartflows-to-hubspot/)  \|
- [Connect CartFlows to Infusionsoft](https://wpfusion.com/connect/connect-cartflows-to-infusionsoft/)  \|
- [Connect CartFlows to Intercom](https://wpfusion.com/connect/connect-cartflows-to-intercom/)  \|
- [Connect CartFlows to Jetpack CRM](https://wpfusion.com/connect/connect-cartflows-to-jetpack-crm/)  \|
- [Connect CartFlows to Kartra](https://wpfusion.com/connect/connect-cartflows-to-kartra/)  \|
- [Connect CartFlows to Keap](https://wpfusion.com/connect/connect-cartflows-to-keap/)  \|
- [Connect CartFlows to Klaviyo](https://wpfusion.com/connect/connect-cartflows-to-klaviyo/)  \|
- [Connect CartFlows to KlickTipp](https://wpfusion.com/connect/connect-cartflows-to-klicktipp/)  \|
- [Connect CartFlows to Loopify](https://wpfusion.com/connect/connect-cartflows-to-loopify/)  \|
- [Connect CartFlows to MailChimp](https://wpfusion.com/connect/connect-cartflows-to-mailchimp/)  \|
- [Connect CartFlows to MailerLite](https://wpfusion.com/connect/connect-cartflows-to-mailerlite/)  \|
- [Connect CartFlows to Mailjet](https://wpfusion.com/connect/connect-cartflows-to-mailjet/)  \|
- [Connect CartFlows to MailPoet](https://wpfusion.com/connect/connect-cartflows-to-mailpoet/)  \|
- [Connect CartFlows to Maropost](https://wpfusion.com/connect/connect-cartflows-to-maropost/)  \|
- [Connect CartFlows to Mautic](https://wpfusion.com/connect/connect-cartflows-to-mautic/)  \|
- [Connect CartFlows to NationBuilder](https://wpfusion.com/connect/connect-cartflows-to-nationbuilder/)  \|
- [Connect CartFlows to Omnisend](https://wpfusion.com/connect/connect-cartflows-to-omnisend/)  \|
- [Connect CartFlows to Ontraport](https://wpfusion.com/connect/connect-cartflows-to-ontraport/)  \|
- [Connect CartFlows to Ortto](https://wpfusion.com/connect/connect-cartflows-to-ortto/)  \|
- [Connect CartFlows to Pipedrive](https://wpfusion.com/connect/connect-cartflows-to-pipedrive/)  \|
- [Connect CartFlows to Platformly](https://wpfusion.com/connect/connect-cartflows-to-platformly/)  \|
- [Connect CartFlows to Quentn](https://wpfusion.com/connect/connect-cartflows-to-quentn/)  \|
- [Connect CartFlows to Salesflare](https://wpfusion.com/connect/connect-cartflows-to-salesflare/)  \|
- [Connect CartFlows to Salesforce](https://wpfusion.com/connect/connect-cartflows-to-salesforce/)  \|
- [Connect CartFlows to Sender](https://wpfusion.com/connect/connect-cartflows-to-sender/)  \|
- [Connect CartFlows to SendFox](https://wpfusion.com/connect/connect-cartflows-to-sendfox/)  \|
- [Connect CartFlows to Tubular](https://wpfusion.com/connect/connect-cartflows-to-tubular/)  \|
- [Connect CartFlows to User.com](https://wpfusion.com/connect/connect-cartflows-to-user-com/)  \|
- [Connect CartFlows to WP ERP](https://wpfusion.com/connect/connect-cartflows-to-wp-erp/)  \|
- [Connect CartFlows to Zoho](https://wpfusion.com/connect/connect-cartflows-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/cartflows/#overview)
- [Checkouts](https://wpfusion.com/documentation/ecommerce/cartflows/#checkouts)
- [Upsells](https://wpfusion.com/documentation/ecommerce/cartflows/#upsells)
- [Custom Fields](https://wpfusion.com/documentation/ecommerce/cartflows/#custom-fields)
- [General Settings](https://wpfusion.com/documentation/ecommerce/cartflows/#general-settings)

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