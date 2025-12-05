---
url: "https://wpfusion.com/documentation/ecommerce/upsell-plugin/"
title: "Connect Upsell Plugin to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/upsell-plugin/#content)

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

# Upsell Plugin

- Published onJuly 11, 2021
- Last updated on July 11, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- Upsell Plugin

### [\#](https://wpfusion.com/documentation/ecommerce/upsell-plugin/\#overview) Overview

WP Fusion includes an integration with [Upsell Plugin](https://wpfusion.com/go/upsell) to sync your customers with [any one of 40+ CRMs and marketing automation tools.](https://wpfusion.com/documentation/faq/crm-compatibility-table/)

You can also apply tags in your CRM based on product purchases, coupon usage, and subscription status changes.

### [\#](https://wpfusion.com/documentation/ecommerce/upsell-plugin/\#syncing-customer-data-and-custom-fields) Syncing customer data and custom fields

By default, all new customers who purchase via Upsell will be synced to contact records in your CRM, including their name and email address.

You can enable additional Upsell fields for sync on [the Contact Fields tab](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2021/07/upsell-fields-1024x780.jpg)](https://wpfusion.com/wp-content/uploads/2021/07/upsell-fields.jpg)

In addition to the billing and shipping fields, WP Fusion also allows you to sync several pseudo fields relating to a customer’s subscription. These are:

- **Subscription ID:** The ID of the customer’s subscription.
- **Subscription Product Name:** The name of the product the customer is subscribed to.
- **Subscription Start Date:** The start date of the subscription.
- **Subscription End Date:** The end date of the subscription.
- **Next Payment Date:** The date of the next scheduled subscription payment.

### [\#](https://wpfusion.com/documentation/ecommerce/upsell-plugin/\#tagging-customers) Tagging customers

When editing any Upsell product, you can click on the WP Fusion settings tab to configure the integration with your CRM.

[![](https://wpfusion.com/wp-content/uploads/2021/07/upsell-product-settings-1015x1024.jpg)](https://wpfusion.com/wp-content/uploads/2021/07/upsell-product-settings.jpg)

The two default settings are:

- **Apply tags when purchased:** These tags will be applied in your CRM when someone purchases the product.
- **Apply tags when refunded:** These tags will be applied if the purchase is refunded. The tags specified in the **Apply tags when purchased** setting will be automatically removed in the case of a refund.

If your product is a subscription product, you will see several additional settings:

- **Apply tags – Subscription active:** These tags will be applied when someone purchases the subscription product, as well as when a subscription status changes to Active.
- **Remove tags:** By checking **Remove tags** you can remove the tags applied at purchase when a subscription is cancelled, put on hold or expires. This is useful for revoking access to [protected content](https://wpfusion.com/documentation/getting-started/meta-box/) when a subscription is cancelled.
- **Apply tags – Subscription cancelled:** These tags will be applied as soon as the subscription is cancelled. They will be removed if the subscription is later reactivated.
- **Apply tags – Subscription payment failed:** These tags will be applied when a subscription status changes to _failed_. They will be removed if the subscription is later reactivated.
- **Apply tags – Subscription expired:** These tags will be applied when a subscription status changes to _expired_. They will be removed if the subscription is later reactivated.

#### [\#](https://wpfusion.com/documentation/ecommerce/upsell-plugin/\#subscription-status-changes) Subscription status changes

WP Fusion will apply and remove tags depending on changes in a user’s subscription status. That logic works like:

- If an active subscription is either put on hold, cancelled, or expires, and _Remove Tags_ is checked the tags applied with the original purchase will be removed. The original tags will not be removed if a subscription is in the Pending Cancel status.
- If a subscription is in any status other than Active (cancelled, on-hold, etc.) and the status becomes Active again, the tags for all the other statuses will be removed. The tags applied with the original purchase will be re-applied if the user doesn’t already have those tags.
- If a subscription changes between any two statuses that aren’t Active, the tags will be applied for the new status, but no tags will be removed.

#### [\#](https://wpfusion.com/documentation/ecommerce/upsell-plugin/\#coupons) Coupons

When editing any coupon, you have the option to select tags in your CRM to be applied if the coupon is used.

[![](https://wpfusion.com/wp-content/uploads/2021/07/upsell-coupon-settings-1024x469.jpg)](https://wpfusion.com/wp-content/uploads/2021/07/upsell-coupon-settings.jpg)

### [\#](https://wpfusion.com/documentation/ecommerce/upsell-plugin/\#general-settings) General settings

WP Fusion has one general setting for Upsell, at Settings » WP Fusion » Integrations.

[![](https://wpfusion.com/wp-content/uploads/2021/07/upsell-general-settings-1024x411.jpg)](https://wpfusion.com/wp-content/uploads/2021/07/upsell-general-settings.jpg)

Any tags specified in the **Apply Tags to Customers** setting will be applied to all Upsell customers at the time of checkout.

### [\#](https://wpfusion.com/documentation/ecommerce/upsell-plugin/\#batch-operations) Batch operations

WP Fusion includes three batch operations for Upsell, these can be found under Settings » WP Fusion » Advanced » Batch Operations.

These can be used to apply tags and update custom fields in your CRM in bulk for existing customers and subscribers.

[![](https://wpfusion.com/wp-content/uploads/2021/07/upsell-batch-operations-1024x622.jpg)](https://wpfusion.com/wp-content/uploads/2021/07/upsell-batch-operations.jpg)

The options are:

- **Upsell Orders:** Finds Upsell orders that have not been processed by WP Fusion, and adds/updates contacts while applying tags based on the products purchased.
- **Upsell Subscriptions statuses:** Updates user tags for all subscriptions based on current subscription status. Does not sync any custom fields.
- **Upsell Subscriptions meta:** Syncs the subscription product name, start date, status, and next renewal dates for all subscriptions. Does not modify any tags.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Upsell Plugin to ActiveCampaign](https://wpfusion.com/connect/connect-upsell-plugin-to-activecampaign/)  \|
- [Connect Upsell Plugin to AgileCRM](https://wpfusion.com/connect/connect-upsell-plugin-to-agilecrm/)  \|
- [Connect Upsell Plugin to Autopilot](https://wpfusion.com/connect/connect-upsell-plugin-to-autopilot/)  \|
- [Connect Upsell Plugin to Bento](https://wpfusion.com/connect/connect-upsell-plugin-to-bento/)  \|
- [Connect Upsell Plugin to BirdSend](https://wpfusion.com/connect/connect-upsell-plugin-to-birdsend/)  \|
- [Connect Upsell Plugin to Brevo](https://wpfusion.com/connect/connect-upsell-plugin-to-brevo/)  \|
- [Connect Upsell Plugin to Capsule](https://wpfusion.com/connect/connect-upsell-plugin-to-capsule/)  \|
- [Connect Upsell Plugin to Constant Contact](https://wpfusion.com/connect/connect-upsell-plugin-to-constant-contact/)  \|
- [Connect Upsell Plugin to ConvertKit](https://wpfusion.com/connect/connect-upsell-plugin-to-convertkit/)  \|
- [Connect Upsell Plugin to ConvesioConvert](https://wpfusion.com/connect/connect-upsell-plugin-to-convesioconvert/)  \|
- [Connect Upsell Plugin to Copper](https://wpfusion.com/connect/connect-upsell-plugin-to-copper/)  \|
- [Connect Upsell Plugin to Customer.io](https://wpfusion.com/connect/connect-upsell-plugin-to-customer-io/)  \|
- [Connect Upsell Plugin to Customerly](https://wpfusion.com/connect/connect-upsell-plugin-to-customerly/)  \|
- [Connect Upsell Plugin to Drip](https://wpfusion.com/connect/connect-upsell-plugin-to-drip/)  \|
- [Connect Upsell Plugin to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-upsell-plugin-to-dynamics-365-marketing/)  \|
- [Connect Upsell Plugin to EmailOctopus](https://wpfusion.com/connect/connect-upsell-plugin-to-emailoctopus/)  \|
- [Connect Upsell Plugin to EngageBay](https://wpfusion.com/connect/connect-upsell-plugin-to-engagebay/)  \|
- [Connect Upsell Plugin to Flexie](https://wpfusion.com/connect/connect-upsell-plugin-to-flexie/)  \|
- [Connect Upsell Plugin to FluentCRM](https://wpfusion.com/connect/connect-upsell-plugin-to-fluentcrm/)  \|
- [Connect Upsell Plugin to FunnelKit](https://wpfusion.com/connect/connect-upsell-plugin-to-funnelkit/)  \|
- [Connect Upsell Plugin to Gist](https://wpfusion.com/connect/connect-upsell-plugin-to-gist/)  \|
- [Connect Upsell Plugin to Groundhogg](https://wpfusion.com/connect/connect-upsell-plugin-to-groundhogg/)  \|
- [Connect Upsell Plugin to HighLevel](https://wpfusion.com/connect/connect-upsell-plugin-to-highlevel/)  \|
- [Connect Upsell Plugin to HubSpot](https://wpfusion.com/connect/connect-upsell-plugin-to-hubspot/)  \|
- [Connect Upsell Plugin to Infusionsoft](https://wpfusion.com/connect/connect-upsell-plugin-to-infusionsoft/)  \|
- [Connect Upsell Plugin to Intercom](https://wpfusion.com/connect/connect-upsell-plugin-to-intercom/)  \|
- [Connect Upsell Plugin to Jetpack CRM](https://wpfusion.com/connect/connect-upsell-plugin-to-jetpack-crm/)  \|
- [Connect Upsell Plugin to Kartra](https://wpfusion.com/connect/connect-upsell-plugin-to-kartra/)  \|
- [Connect Upsell Plugin to Keap](https://wpfusion.com/connect/connect-upsell-plugin-to-keap/)  \|
- [Connect Upsell Plugin to Klaviyo](https://wpfusion.com/connect/connect-upsell-plugin-to-klaviyo/)  \|
- [Connect Upsell Plugin to KlickTipp](https://wpfusion.com/connect/connect-upsell-plugin-to-klicktipp/)  \|
- [Connect Upsell Plugin to Loopify](https://wpfusion.com/connect/connect-upsell-plugin-to-loopify/)  \|
- [Connect Upsell Plugin to MailChimp](https://wpfusion.com/connect/connect-upsell-plugin-to-mailchimp/)  \|
- [Connect Upsell Plugin to MailerLite](https://wpfusion.com/connect/connect-upsell-plugin-to-mailerlite/)  \|
- [Connect Upsell Plugin to Mailjet](https://wpfusion.com/connect/connect-upsell-plugin-to-mailjet/)  \|
- [Connect Upsell Plugin to MailPoet](https://wpfusion.com/connect/connect-upsell-plugin-to-mailpoet/)  \|
- [Connect Upsell Plugin to Maropost](https://wpfusion.com/connect/connect-upsell-plugin-to-maropost/)  \|
- [Connect Upsell Plugin to Mautic](https://wpfusion.com/connect/connect-upsell-plugin-to-mautic/)  \|
- [Connect Upsell Plugin to NationBuilder](https://wpfusion.com/connect/connect-upsell-plugin-to-nationbuilder/)  \|
- [Connect Upsell Plugin to Omnisend](https://wpfusion.com/connect/connect-upsell-plugin-to-omnisend/)  \|
- [Connect Upsell Plugin to Ontraport](https://wpfusion.com/connect/connect-upsell-plugin-to-ontraport/)  \|
- [Connect Upsell Plugin to Ortto](https://wpfusion.com/connect/connect-upsell-plugin-to-ortto/)  \|
- [Connect Upsell Plugin to Pipedrive](https://wpfusion.com/connect/connect-upsell-plugin-to-pipedrive/)  \|
- [Connect Upsell Plugin to Platformly](https://wpfusion.com/connect/connect-upsell-plugin-to-platformly/)  \|
- [Connect Upsell Plugin to Quentn](https://wpfusion.com/connect/connect-upsell-plugin-to-quentn/)  \|
- [Connect Upsell Plugin to Salesflare](https://wpfusion.com/connect/connect-upsell-plugin-to-salesflare/)  \|
- [Connect Upsell Plugin to Salesforce](https://wpfusion.com/connect/connect-upsell-plugin-to-salesforce/)  \|
- [Connect Upsell Plugin to Sender](https://wpfusion.com/connect/connect-upsell-plugin-to-sender/)  \|
- [Connect Upsell Plugin to SendFox](https://wpfusion.com/connect/connect-upsell-plugin-to-sendfox/)  \|
- [Connect Upsell Plugin to Tubular](https://wpfusion.com/connect/connect-upsell-plugin-to-tubular/)  \|
- [Connect Upsell Plugin to User.com](https://wpfusion.com/connect/connect-upsell-plugin-to-user-com/)  \|
- [Connect Upsell Plugin to WP ERP](https://wpfusion.com/connect/connect-upsell-plugin-to-wp-erp/)  \|
- [Connect Upsell Plugin to Zoho](https://wpfusion.com/connect/connect-upsell-plugin-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/upsell-plugin/#overview)
- [Syncing customer data and custom fields](https://wpfusion.com/documentation/ecommerce/upsell-plugin/#syncing-customer-data-and-custom-fields)
- [Tagging customers](https://wpfusion.com/documentation/ecommerce/upsell-plugin/#tagging-customers)
- [Subscription status changes](https://wpfusion.com/documentation/ecommerce/upsell-plugin/#subscription-status-changes)
- [Coupons](https://wpfusion.com/documentation/ecommerce/upsell-plugin/#coupons)
- [General settings](https://wpfusion.com/documentation/ecommerce/upsell-plugin/#general-settings)
- [Batch operations](https://wpfusion.com/documentation/ecommerce/upsell-plugin/#batch-operations)

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