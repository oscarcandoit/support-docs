---
url: "https://wpfusion.com/documentation/ecommerce/woofunnels/"
title: "Connect FunnelKit to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/woofunnels/#content)

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

# FunnelKit

- Published onMay 5, 2021
- Last updated on January 10, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- FunnelKit

### [\#](https://wpfusion.com/documentation/ecommerce/woofunnels/\#overview) Overview

WP Fusion includes an integration with [FunnelKit](https://wpfusion.com/go/woofunnels) to sync your optins and customers to contact records in [any one of 50+ CRMs and marketing automation tools.](https://wpfusion.com/documentation/faq/crm-compatibility-table/)

You can also apply tags in your CRM based on the optin form that was submitted, as well as acceptance or rejection of an upsell.

Because FunnelKit uses WooCommerce for checkout, all of WP Fusion’s [WooCommerce features](https://wpfusion.com/documentation/ecommerce/woocommerce/) work automatically with FunnelKit.

You can also use WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) to track and recover carts abandoned from FunnelKit checkout pages.

### [\#](https://wpfusion.com/documentation/ecommerce/woofunnels/\#custom-checkout-fields) Custom Checkout Fields

Any custom fields you’ve added to your FunnelKit checkout pages can be mapped to custom fields in your CRM via the [Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) on the WP Fusion settings page.

[![](https://wpfusion.com/wp-content/uploads/2021/05/woofunnels-fields-1024x423.jpg)](https://wpfusion.com/wp-content/uploads/2021/05/woofunnels-fields.jpg)

The fields will appear beneath the rest of the WooCommerce fields, under the FunnelKit header.

When a customer makes a purchase, any enabled fields will be synced to their corresponding custom fields in your CRM.

### [\#](https://wpfusion.com/documentation/ecommerce/woofunnels/\#optins) Optins

To enable the integration, click the WP Fusion tab under the Actions menu on your FunnelKit optin, and select _Yes_ for **Enable Integration.**

[![](https://wpfusion.com/wp-content/uploads/2021/05/woofunnels-optin-1024x571.jpg)](https://wpfusion.com/wp-content/uploads/2021/05/woofunnels-optin.jpg)

When the optin form is filled out, a contact record will be added to your connected CRM. You can also optionally apply tags to the contact.

### [\#](https://wpfusion.com/documentation/ecommerce/woofunnels/\#upsells) Upsells

When configuring your FunnelKit upsells, you have the option to apply tags in your connected CRM when an upsell is accepted or rejected.

[![](https://wpfusion.com/wp-content/uploads/2021/05/woofunnels-upsell-1024x653.jpg)](https://wpfusion.com/wp-content/uploads/2021/05/woofunnels-upsell.jpg)

These two settings can be found beneath each Offer item when editing any Upsell step in your funnel.

### [\#](https://wpfusion.com/documentation/ecommerce/woofunnels/\#general-settings) General Settings

WP Fusion has one general setting for FunnelKit, at Settings » WP Fusion » Integrations.

[![](https://wpfusion.com/wp-content/uploads/2021/05/woofunnels-general-1024x379.jpg)](https://wpfusion.com/wp-content/uploads/2021/05/woofunnels-general.jpg)

When you enable **Run on Primary Order Accepted**, WP Fusion will kick in and send data to your CRM when the WooCommerce order status becomes _Primary Order Accepted_ instead of waiting for the _Completed_ status.

To figure out whether or not you need this enabled, some context:

- By default WP Fusion doesn’t send any data to your CRM until an order status is _Processing_ or _Completed_ in WooCommerce.
- With FunnelKit, if you have an upsell, the order status is set to a custom _“Primary Order Accepted”_ status while the upsell is shown to the customer.
- If the customer either accepts or rejects the upsell, the order status is set to Completed, and WP Fusion will run.
- However, if the customer leaves the upsell page, the order status stays as _Primary Order Accepted_ for 15 minutes until it automatically converts to Completed.
- This could result in WP Fusion not sending any data to your CRM for 15 minutes while FunnelKit waits for a response to the upsell. Enabling **Run on Primary Order Accepted** helps make sure that the data is sent to your CRM regardless of whether or not the customer responds to the upsell.

If you need to enable **Run on Primary Order Accepted**, we recommend running a test checkout to make sure it works properly with your setup.

**Note:** If **Run on Primary Order Accepted** is enabled, tags configured on upsell products will not be applied (since the order has already been synced and marked complete).

If you need to apply tags based on upsell products, either leave the **Run on Primary Order Accepted** setting off, or configure the tags directly on the funnel steps using the _Apply Tags – Offer Accepted_ setting ( [see above](https://wpfusion.com/documentation/ecommerce/woofunnels/#upsells)).

[![](https://wpfusion.com/wp-content/uploads/2021/05/order-statuses-forcefully-switch-global-settings-upsell-1536x1034-1-1024x689.png)](https://wpfusion.com/wp-content/uploads/2021/05/order-statuses-forcefully-switch-global-settings-upsell-1536x1034-1.png)

Another option is to shorten the amount of time FunnelKit takes to mark the order complete. You can manage this time interval from Global Settings > One Click Upsells > Order Statuses.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect FunnelKit to ActiveCampaign](https://wpfusion.com/connect/connect-funnelkit-to-activecampaign/)  \|
- [Connect FunnelKit to AgileCRM](https://wpfusion.com/connect/connect-funnelkit-to-agilecrm/)  \|
- [Connect FunnelKit to Autopilot](https://wpfusion.com/connect/connect-funnelkit-to-autopilot/)  \|
- [Connect FunnelKit to Bento](https://wpfusion.com/connect/connect-funnelkit-to-bento/)  \|
- [Connect FunnelKit to BirdSend](https://wpfusion.com/connect/connect-funnelkit-to-birdsend/)  \|
- [Connect FunnelKit to Brevo](https://wpfusion.com/connect/connect-funnelkit-to-brevo/)  \|
- [Connect FunnelKit to Capsule](https://wpfusion.com/connect/connect-funnelkit-to-capsule/)  \|
- [Connect FunnelKit to Constant Contact](https://wpfusion.com/connect/connect-funnelkit-to-constant-contact/)  \|
- [Connect FunnelKit to ConvertKit](https://wpfusion.com/connect/connect-funnelkit-to-convertkit/)  \|
- [Connect FunnelKit to ConvesioConvert](https://wpfusion.com/connect/connect-funnelkit-to-convesioconvert/)  \|
- [Connect FunnelKit to Copper](https://wpfusion.com/connect/connect-funnelkit-to-copper/)  \|
- [Connect FunnelKit to Customer.io](https://wpfusion.com/connect/connect-funnelkit-to-customer-io/)  \|
- [Connect FunnelKit to Customerly](https://wpfusion.com/connect/connect-funnelkit-to-customerly/)  \|
- [Connect FunnelKit to Drip](https://wpfusion.com/connect/connect-funnelkit-to-drip/)  \|
- [Connect FunnelKit to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-funnelkit-to-dynamics-365-marketing/)  \|
- [Connect FunnelKit to EmailOctopus](https://wpfusion.com/connect/connect-funnelkit-to-emailoctopus/)  \|
- [Connect FunnelKit to EngageBay](https://wpfusion.com/connect/connect-funnelkit-to-engagebay/)  \|
- [Connect FunnelKit to Flexie](https://wpfusion.com/connect/connect-funnelkit-to-flexie/)  \|
- [Connect FunnelKit to FluentCRM](https://wpfusion.com/connect/connect-funnelkit-to-fluentcrm/)  \|
- [Connect FunnelKit to FunnelKit](https://wpfusion.com/connect/connect-funnelkit-to-funnelkit/)  \|
- [Connect FunnelKit to Gist](https://wpfusion.com/connect/connect-funnelkit-to-gist/)  \|
- [Connect FunnelKit to Groundhogg](https://wpfusion.com/connect/connect-funnelkit-to-groundhogg/)  \|
- [Connect FunnelKit to HighLevel](https://wpfusion.com/connect/connect-funnelkit-to-highlevel/)  \|
- [Connect FunnelKit to HubSpot](https://wpfusion.com/connect/connect-funnelkit-to-hubspot/)  \|
- [Connect FunnelKit to Infusionsoft](https://wpfusion.com/connect/connect-funnelkit-to-infusionsoft/)  \|
- [Connect FunnelKit to Intercom](https://wpfusion.com/connect/connect-funnelkit-to-intercom/)  \|
- [Connect FunnelKit to Jetpack CRM](https://wpfusion.com/connect/connect-funnelkit-to-jetpack-crm/)  \|
- [Connect FunnelKit to Kartra](https://wpfusion.com/connect/connect-funnelkit-to-kartra/)  \|
- [Connect FunnelKit to Keap](https://wpfusion.com/connect/connect-funnelkit-to-keap/)  \|
- [Connect FunnelKit to Klaviyo](https://wpfusion.com/connect/connect-funnelkit-to-klaviyo/)  \|
- [Connect FunnelKit to KlickTipp](https://wpfusion.com/connect/connect-funnelkit-to-klicktipp/)  \|
- [Connect FunnelKit to Loopify](https://wpfusion.com/connect/connect-funnelkit-to-loopify/)  \|
- [Connect FunnelKit to MailChimp](https://wpfusion.com/connect/connect-funnelkit-to-mailchimp/)  \|
- [Connect FunnelKit to MailerLite](https://wpfusion.com/connect/connect-funnelkit-to-mailerlite/)  \|
- [Connect FunnelKit to Mailjet](https://wpfusion.com/connect/connect-funnelkit-to-mailjet/)  \|
- [Connect FunnelKit to MailPoet](https://wpfusion.com/connect/connect-funnelkit-to-mailpoet/)  \|
- [Connect FunnelKit to Maropost](https://wpfusion.com/connect/connect-funnelkit-to-maropost/)  \|
- [Connect FunnelKit to Mautic](https://wpfusion.com/connect/connect-funnelkit-to-mautic/)  \|
- [Connect FunnelKit to NationBuilder](https://wpfusion.com/connect/connect-funnelkit-to-nationbuilder/)  \|
- [Connect FunnelKit to Omnisend](https://wpfusion.com/connect/connect-funnelkit-to-omnisend/)  \|
- [Connect FunnelKit to Ontraport](https://wpfusion.com/connect/connect-funnelkit-to-ontraport/)  \|
- [Connect FunnelKit to Ortto](https://wpfusion.com/connect/connect-funnelkit-to-ortto/)  \|
- [Connect FunnelKit to Pipedrive](https://wpfusion.com/connect/connect-funnelkit-to-pipedrive/)  \|
- [Connect FunnelKit to Platformly](https://wpfusion.com/connect/connect-funnelkit-to-platformly/)  \|
- [Connect FunnelKit to Quentn](https://wpfusion.com/connect/connect-funnelkit-to-quentn/)  \|
- [Connect FunnelKit to Salesflare](https://wpfusion.com/connect/connect-funnelkit-to-salesflare/)  \|
- [Connect FunnelKit to Salesforce](https://wpfusion.com/connect/connect-funnelkit-to-salesforce/)  \|
- [Connect FunnelKit to Sender](https://wpfusion.com/connect/connect-funnelkit-to-sender/)  \|
- [Connect FunnelKit to SendFox](https://wpfusion.com/connect/connect-funnelkit-to-sendfox/)  \|
- [Connect FunnelKit to Tubular](https://wpfusion.com/connect/connect-funnelkit-to-tubular/)  \|
- [Connect FunnelKit to User.com](https://wpfusion.com/connect/connect-funnelkit-to-user-com/)  \|
- [Connect FunnelKit to WP ERP](https://wpfusion.com/connect/connect-funnelkit-to-wp-erp/)  \|
- [Connect FunnelKit to Zoho](https://wpfusion.com/connect/connect-funnelkit-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/woofunnels/#overview)
- [Custom Checkout Fields](https://wpfusion.com/documentation/ecommerce/woofunnels/#custom-checkout-fields)
- [Optins](https://wpfusion.com/documentation/ecommerce/woofunnels/#optins)
- [Upsells](https://wpfusion.com/documentation/ecommerce/woofunnels/#upsells)
- [General Settings](https://wpfusion.com/documentation/ecommerce/woofunnels/#general-settings)

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