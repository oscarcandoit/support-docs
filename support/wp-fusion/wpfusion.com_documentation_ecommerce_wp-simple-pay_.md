---
url: "https://wpfusion.com/documentation/ecommerce/wp-simple-pay/"
title: "Connect WP Simple Pay to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/#content)

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

# WP Simple Pay

- Published onMarch 22, 2020
- Last updated on March 31, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- WP Simple Pay

### [\#](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/\#overview) Overview

WP Fusion includes an integration with [WP Simple Pay](https://wpfusion.com/go/wpsimplepay) to sync your customers to contact records in [any one of 40+ CRMs and marketing automation tools.](https://wpfusion.com/documentation/faq/crm-compatibility-table/)

You can also apply tags in your CRM based on the order form used, and changes in subscription status (with [WP Simple Pay Pro](https://wpfusion.com/go/wpsimplepay)).

### [\#](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/\#setup) Setup

To enable the integration, click the WP Fusion tab on any of your Simple Pay order forms, and check the _Enable_ box.

[![](https://wpfusion.com/wp-content/uploads/2020/03/simple-pay-1-1024x652.jpg)](https://wpfusion.com/wp-content/uploads/2020/03/simple-pay-1.jpg)

Anyone who makes a purchase with the form will be added to your selected CRM with their name and email address. You can also optionally specify tags to be applied to the new contact record.

**Note:** For tagging to work correctly with SEPA payments, you must enable the `payment_intent.processing` webhook event in your [Stripe webhooks settings](https://dashboard.stripe.com/webhooks).

#### [\#](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/\#webhooks) Webhooks

For the best reliability, you should have WP Simple Pay Pro [configured to use webhooks](https://wpsimplepay.com/doc/webhooks/) to notify your site of successful payments.

If you are using WP Simple Pay Lite, or webhooks aren’t working on your site, WP Fusion will attempt to automatically detect this, and will display a notice at the top of the payment form settings tab.

[![](https://wpfusion.com/wp-content/uploads/2020/03/simple-pay-webhooks-notice-1024x333.jpg)](https://wpfusion.com/wp-content/uploads/2020/03/simple-pay-webhooks-notice.jpg)

When in fallback mode, WP Fusion will sync data to your CRM on the Payment Confirmation page, (the page with the `[simpay_payment_receipt]` shortcode).

If the Payment Confirmation page is not configured, and webhooks aren’t enabled, no data will be synced with your CRM. For more information on configuring the Payment Confirmation page, [see the Simple Pay documentation](https://wpsimplepay.com/doc/configuring-payment-confirmation-display/).

#### [\#](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/\#subscriptions) Subscriptions

If you’re selling subscriptions with [WP Simple Pay Pro](https://wpfusion.com/go/wpsimplepay), you have a few options to apply tags based on subscription status.

- **Apply Tags – Payment Failed:** These tags will be applied in your CRM when a recurring payment fails. They will be removed automatically if a subsequent recurring payment succeeds.
- **Apply Tags – Subscription Cancelled:** These tags will be applied in your CRM when a subscription’s status in Stripe is changed to Cancelled. If you have Stripe or WP Simple Pay set to [Cancel at end of billing period](https://docs.wpsimplepay.com/articles/customers/) then the tags won’t be applied until the end of the billing period.
- **Remove Tags:** If this box is checked then the tags specified in the _Apply Tags_ setting will be removed when a subscription is cancelled. This can be used to revoke access to a course, membership, or other content protected by WP Fusion.

Note that for tagging to work correctly with the Subscription Cancelled status, your Stripe account must be configured to send the `customer.subscription.deleted` webhook. For more information on webhooks with WP Simple Pay, [see this doc](https://docs.wpsimplepay.com/articles/webhooks/).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect WP Simple Pay to ActiveCampaign](https://wpfusion.com/connect/connect-wp-simple-pay-to-activecampaign/)  \|
- [Connect WP Simple Pay to AgileCRM](https://wpfusion.com/connect/connect-wp-simple-pay-to-agilecrm/)  \|
- [Connect WP Simple Pay to Autopilot](https://wpfusion.com/connect/connect-wp-simple-pay-to-autopilot/)  \|
- [Connect WP Simple Pay to Bento](https://wpfusion.com/connect/connect-wp-simple-pay-to-bento/)  \|
- [Connect WP Simple Pay to BirdSend](https://wpfusion.com/connect/connect-wp-simple-pay-to-birdsend/)  \|
- [Connect WP Simple Pay to Brevo](https://wpfusion.com/connect/connect-wp-simple-pay-to-brevo/)  \|
- [Connect WP Simple Pay to Capsule](https://wpfusion.com/connect/connect-wp-simple-pay-to-capsule/)  \|
- [Connect WP Simple Pay to Constant Contact](https://wpfusion.com/connect/connect-wp-simple-pay-to-constant-contact/)  \|
- [Connect WP Simple Pay to ConvertKit](https://wpfusion.com/connect/connect-wp-simple-pay-to-convertkit/)  \|
- [Connect WP Simple Pay to ConvesioConvert](https://wpfusion.com/connect/connect-wp-simple-pay-to-convesioconvert/)  \|
- [Connect WP Simple Pay to Copper](https://wpfusion.com/connect/connect-wp-simple-pay-to-copper/)  \|
- [Connect WP Simple Pay to Customer.io](https://wpfusion.com/connect/connect-wp-simple-pay-to-customer-io/)  \|
- [Connect WP Simple Pay to Customerly](https://wpfusion.com/connect/connect-wp-simple-pay-to-customerly/)  \|
- [Connect WP Simple Pay to Drip](https://wpfusion.com/connect/connect-wp-simple-pay-to-drip/)  \|
- [Connect WP Simple Pay to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-wp-simple-pay-to-dynamics-365-marketing/)  \|
- [Connect WP Simple Pay to EmailOctopus](https://wpfusion.com/connect/connect-wp-simple-pay-to-emailoctopus/)  \|
- [Connect WP Simple Pay to EngageBay](https://wpfusion.com/connect/connect-wp-simple-pay-to-engagebay/)  \|
- [Connect WP Simple Pay to Flexie](https://wpfusion.com/connect/connect-wp-simple-pay-to-flexie/)  \|
- [Connect WP Simple Pay to FluentCRM](https://wpfusion.com/connect/connect-wp-simple-pay-to-fluentcrm/)  \|
- [Connect WP Simple Pay to FunnelKit](https://wpfusion.com/connect/connect-wp-simple-pay-to-funnelkit/)  \|
- [Connect WP Simple Pay to Gist](https://wpfusion.com/connect/connect-wp-simple-pay-to-gist/)  \|
- [Connect WP Simple Pay to Groundhogg](https://wpfusion.com/connect/connect-wp-simple-pay-to-groundhogg/)  \|
- [Connect WP Simple Pay to HighLevel](https://wpfusion.com/connect/connect-wp-simple-pay-to-highlevel/)  \|
- [Connect WP Simple Pay to HubSpot](https://wpfusion.com/connect/connect-wp-simple-pay-to-hubspot/)  \|
- [Connect WP Simple Pay to Infusionsoft](https://wpfusion.com/connect/connect-wp-simple-pay-to-infusionsoft/)  \|
- [Connect WP Simple Pay to Intercom](https://wpfusion.com/connect/connect-wp-simple-pay-to-intercom/)  \|
- [Connect WP Simple Pay to Jetpack CRM](https://wpfusion.com/connect/connect-wp-simple-pay-to-jetpack-crm/)  \|
- [Connect WP Simple Pay to Kartra](https://wpfusion.com/connect/connect-wp-simple-pay-to-kartra/)  \|
- [Connect WP Simple Pay to Keap](https://wpfusion.com/connect/connect-wp-simple-pay-to-keap/)  \|
- [Connect WP Simple Pay to Klaviyo](https://wpfusion.com/connect/connect-wp-simple-pay-to-klaviyo/)  \|
- [Connect WP Simple Pay to KlickTipp](https://wpfusion.com/connect/connect-wp-simple-pay-to-klicktipp/)  \|
- [Connect WP Simple Pay to Loopify](https://wpfusion.com/connect/connect-wp-simple-pay-to-loopify/)  \|
- [Connect WP Simple Pay to MailChimp](https://wpfusion.com/connect/connect-wp-simple-pay-to-mailchimp/)  \|
- [Connect WP Simple Pay to MailerLite](https://wpfusion.com/connect/connect-wp-simple-pay-to-mailerlite/)  \|
- [Connect WP Simple Pay to Mailjet](https://wpfusion.com/connect/connect-wp-simple-pay-to-mailjet/)  \|
- [Connect WP Simple Pay to MailPoet](https://wpfusion.com/connect/connect-wp-simple-pay-to-mailpoet/)  \|
- [Connect WP Simple Pay to Maropost](https://wpfusion.com/connect/connect-wp-simple-pay-to-maropost/)  \|
- [Connect WP Simple Pay to Mautic](https://wpfusion.com/connect/connect-wp-simple-pay-to-mautic/)  \|
- [Connect WP Simple Pay to NationBuilder](https://wpfusion.com/connect/connect-wp-simple-pay-to-nationbuilder/)  \|
- [Connect WP Simple Pay to Omnisend](https://wpfusion.com/connect/connect-wp-simple-pay-to-omnisend/)  \|
- [Connect WP Simple Pay to Ontraport](https://wpfusion.com/connect/connect-wp-simple-pay-to-ontraport/)  \|
- [Connect WP Simple Pay to Ortto](https://wpfusion.com/connect/connect-wp-simple-pay-to-ortto/)  \|
- [Connect WP Simple Pay to Pipedrive](https://wpfusion.com/connect/connect-wp-simple-pay-to-pipedrive/)  \|
- [Connect WP Simple Pay to Platformly](https://wpfusion.com/connect/connect-wp-simple-pay-to-platformly/)  \|
- [Connect WP Simple Pay to Quentn](https://wpfusion.com/connect/connect-wp-simple-pay-to-quentn/)  \|
- [Connect WP Simple Pay to Salesflare](https://wpfusion.com/connect/connect-wp-simple-pay-to-salesflare/)  \|
- [Connect WP Simple Pay to Salesforce](https://wpfusion.com/connect/connect-wp-simple-pay-to-salesforce/)  \|
- [Connect WP Simple Pay to Sender](https://wpfusion.com/connect/connect-wp-simple-pay-to-sender/)  \|
- [Connect WP Simple Pay to SendFox](https://wpfusion.com/connect/connect-wp-simple-pay-to-sendfox/)  \|
- [Connect WP Simple Pay to Tubular](https://wpfusion.com/connect/connect-wp-simple-pay-to-tubular/)  \|
- [Connect WP Simple Pay to User.com](https://wpfusion.com/connect/connect-wp-simple-pay-to-user-com/)  \|
- [Connect WP Simple Pay to WP ERP](https://wpfusion.com/connect/connect-wp-simple-pay-to-wp-erp/)  \|
- [Connect WP Simple Pay to Zoho](https://wpfusion.com/connect/connect-wp-simple-pay-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/#overview)
- [Setup](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/#setup)
- [Webhooks](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/#webhooks)
- [Subscriptions](https://wpfusion.com/documentation/ecommerce/wp-simple-pay/#subscriptions)

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