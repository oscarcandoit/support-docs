---
url: "https://wpfusion.com/documentation/ecommerce/paymattic/"
title: "Connect Paymattic to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/paymattic/#content)

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

# Paymattic

- Published onApril 11, 2022
- Last updated on October 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- Paymattic

### [\#](https://wpfusion.com/documentation/ecommerce/paymattic/\#overview) Overview

WP Fusion includes an integration with [Paymattic](https://wpfusion.com/go/wppayform) to sync your customers with contact records in [any one of 50+ CRMs and marketing automation tools.](https://wpfusion.com/documentation/faq/crm-compatibility-table/)

You can also apply tags in your CRM based on the payment form used, as well as payment status and subscription cancellations. (with [Paymattic Pro](https://wpfusion.com/go/wppayform)).

### [\#](https://wpfusion.com/documentation/ecommerce/paymattic/\#setup) Setup

To enable the integration, first head to Paymattic » Settings » Integrations and enable the toggle for WP Fusion.

[![](https://wpfusion.com/wp-content/uploads/2022/04/wppayform-integration-settings-1024x597.jpg)](https://wpfusion.com/wp-content/uploads/2022/04/wppayform-integration-settings.jpg)

There is nothing else to configure in the global settings— WP Fusion will use your API credentials you entered during the [setup process](https://wpfusion.com/documentation/getting-started/installation-guide/).

#### [\#](https://wpfusion.com/documentation/ecommerce/paymattic/\#feed-setup) Feed setup

To enable WP Fusion on a single payment form, first add some fields to your form, and then click on the **Form Integrations** tab.

Click **Add New Integration**, and select WP Fusion from the dropdown. A WP Fusion feed will be added to your form.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20797'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2022/04/wppayform-feed-settings.jpg)

The default feed settings are:

- **Map Fields:** For each field on your form, select a corresponding custom field in your CRM to store the data.
- **Apply Tags – Form Submission:** These tags will be applied in your CRM whenever anyone submits the form.

If your form has a payment field, two additional options will appear:

- **Apply Tags – Payment Received:** These tags will be applied when a payment is successfully processed for the form.
- **Apply Tags – Payment Failed:** These tags will be applied when a payment fails for the form. If you’re selling subscriptions, these tags will also be applied when a scheduled renewal payment fails.

If you’re selling subscriptions with [Paymattic Pro](https://wpfusion.com/go/wppayform), an additional option will appear:

- **Apply Tags – Subscription Cancelled:** These tags will be applied in your CRM when a subscription is cancelled.

Note that for tagging to work correctly with the Subscription Cancelled status, your Stripe account must be configured to send the `customer.subscription.deleted` webhook. For more information on webhooks with Paymattic Pro, [see this doc](https://wpmanageninja.com/docs/wppayform/getting-started-with-wppayform/configure-payment-methods-and-currency/).

### [\#](https://wpfusion.com/documentation/ecommerce/paymattic/\#how-it-works) How it works

When a customer submits a Paymattic form, any configured WP Fusion feeds will run.

A contact record will be created or updated (based on email address) in your connected CRM, including any custom fields.

The tags specified for the **Form Submission** setting will be applied right away.

Then, based on the result of the payment (if it’s a payment form), the **Payment Received** or **Payment Failed** tags will be applied.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20445'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2022/04/wppayform-logs.jpg) The WP Fusion logs show Paymattic submissions being synced with your CRM, and any tags that are applied.

You can view the data being synced to your CRM in [the WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/). If there are any errors or issues with the sync, they will also be recorded in the logs.

After the submission has been processed, a note will be added to the entry containing a link to the customer’s contact record in your CRM.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20647'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2022/04/wppayform-entry-notes.jpg) The Paymattic entry notes show the contact ID that was created, with a link to view the contact in your CRM.

If there are any errors with the sync with your CRM, they will also be added as a note to the entry (in addition to the WP Fusion logs).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Paymattic to ActiveCampaign](https://wpfusion.com/connect/connect-paymattic-to-activecampaign/)  \|
- [Connect Paymattic to AgileCRM](https://wpfusion.com/connect/connect-paymattic-to-agilecrm/)  \|
- [Connect Paymattic to Autopilot](https://wpfusion.com/connect/connect-paymattic-to-autopilot/)  \|
- [Connect Paymattic to Bento](https://wpfusion.com/connect/connect-paymattic-to-bento/)  \|
- [Connect Paymattic to BirdSend](https://wpfusion.com/connect/connect-paymattic-to-birdsend/)  \|
- [Connect Paymattic to Brevo](https://wpfusion.com/connect/connect-paymattic-to-brevo/)  \|
- [Connect Paymattic to Capsule](https://wpfusion.com/connect/connect-paymattic-to-capsule/)  \|
- [Connect Paymattic to Constant Contact](https://wpfusion.com/connect/connect-paymattic-to-constant-contact/)  \|
- [Connect Paymattic to ConvertKit](https://wpfusion.com/connect/connect-paymattic-to-convertkit/)  \|
- [Connect Paymattic to ConvesioConvert](https://wpfusion.com/connect/connect-paymattic-to-convesioconvert/)  \|
- [Connect Paymattic to Copper](https://wpfusion.com/connect/connect-paymattic-to-copper/)  \|
- [Connect Paymattic to Customer.io](https://wpfusion.com/connect/connect-paymattic-to-customer-io/)  \|
- [Connect Paymattic to Customerly](https://wpfusion.com/connect/connect-paymattic-to-customerly/)  \|
- [Connect Paymattic to Drip](https://wpfusion.com/connect/connect-paymattic-to-drip/)  \|
- [Connect Paymattic to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-paymattic-to-dynamics-365-marketing/)  \|
- [Connect Paymattic to EmailOctopus](https://wpfusion.com/connect/connect-paymattic-to-emailoctopus/)  \|
- [Connect Paymattic to EngageBay](https://wpfusion.com/connect/connect-paymattic-to-engagebay/)  \|
- [Connect Paymattic to Flexie](https://wpfusion.com/connect/connect-paymattic-to-flexie/)  \|
- [Connect Paymattic to FluentCRM](https://wpfusion.com/connect/connect-paymattic-to-fluentcrm/)  \|
- [Connect Paymattic to FunnelKit](https://wpfusion.com/connect/connect-paymattic-to-funnelkit/)  \|
- [Connect Paymattic to Gist](https://wpfusion.com/connect/connect-paymattic-to-gist/)  \|
- [Connect Paymattic to Groundhogg](https://wpfusion.com/connect/connect-paymattic-to-groundhogg/)  \|
- [Connect Paymattic to HighLevel](https://wpfusion.com/connect/connect-paymattic-to-highlevel/)  \|
- [Connect Paymattic to HubSpot](https://wpfusion.com/connect/connect-paymattic-to-hubspot/)  \|
- [Connect Paymattic to Infusionsoft](https://wpfusion.com/connect/connect-paymattic-to-infusionsoft/)  \|
- [Connect Paymattic to Intercom](https://wpfusion.com/connect/connect-paymattic-to-intercom/)  \|
- [Connect Paymattic to Jetpack CRM](https://wpfusion.com/connect/connect-paymattic-to-jetpack-crm/)  \|
- [Connect Paymattic to Kartra](https://wpfusion.com/connect/connect-paymattic-to-kartra/)  \|
- [Connect Paymattic to Keap](https://wpfusion.com/connect/connect-paymattic-to-keap/)  \|
- [Connect Paymattic to Klaviyo](https://wpfusion.com/connect/connect-paymattic-to-klaviyo/)  \|
- [Connect Paymattic to KlickTipp](https://wpfusion.com/connect/connect-paymattic-to-klicktipp/)  \|
- [Connect Paymattic to Loopify](https://wpfusion.com/connect/connect-paymattic-to-loopify/)  \|
- [Connect Paymattic to MailChimp](https://wpfusion.com/connect/connect-paymattic-to-mailchimp/)  \|
- [Connect Paymattic to MailerLite](https://wpfusion.com/connect/connect-paymattic-to-mailerlite/)  \|
- [Connect Paymattic to Mailjet](https://wpfusion.com/connect/connect-paymattic-to-mailjet/)  \|
- [Connect Paymattic to MailPoet](https://wpfusion.com/connect/connect-paymattic-to-mailpoet/)  \|
- [Connect Paymattic to Maropost](https://wpfusion.com/connect/connect-paymattic-to-maropost/)  \|
- [Connect Paymattic to Mautic](https://wpfusion.com/connect/connect-paymattic-to-mautic/)  \|
- [Connect Paymattic to NationBuilder](https://wpfusion.com/connect/connect-paymattic-to-nationbuilder/)  \|
- [Connect Paymattic to Omnisend](https://wpfusion.com/connect/connect-paymattic-to-omnisend/)  \|
- [Connect Paymattic to Ontraport](https://wpfusion.com/connect/connect-paymattic-to-ontraport/)  \|
- [Connect Paymattic to Ortto](https://wpfusion.com/connect/connect-paymattic-to-ortto/)  \|
- [Connect Paymattic to Pipedrive](https://wpfusion.com/connect/connect-paymattic-to-pipedrive/)  \|
- [Connect Paymattic to Platformly](https://wpfusion.com/connect/connect-paymattic-to-platformly/)  \|
- [Connect Paymattic to Quentn](https://wpfusion.com/connect/connect-paymattic-to-quentn/)  \|
- [Connect Paymattic to Salesflare](https://wpfusion.com/connect/connect-paymattic-to-salesflare/)  \|
- [Connect Paymattic to Salesforce](https://wpfusion.com/connect/connect-paymattic-to-salesforce/)  \|
- [Connect Paymattic to Sender](https://wpfusion.com/connect/connect-paymattic-to-sender/)  \|
- [Connect Paymattic to SendFox](https://wpfusion.com/connect/connect-paymattic-to-sendfox/)  \|
- [Connect Paymattic to Tubular](https://wpfusion.com/connect/connect-paymattic-to-tubular/)  \|
- [Connect Paymattic to User.com](https://wpfusion.com/connect/connect-paymattic-to-user-com/)  \|
- [Connect Paymattic to WP ERP](https://wpfusion.com/connect/connect-paymattic-to-wp-erp/)  \|
- [Connect Paymattic to Zoho](https://wpfusion.com/connect/connect-paymattic-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/paymattic/#overview)
- [Setup](https://wpfusion.com/documentation/ecommerce/paymattic/#setup)
- [Feed setup](https://wpfusion.com/documentation/ecommerce/paymattic/#feed-setup)
- [How it works](https://wpfusion.com/documentation/ecommerce/paymattic/#how-it-works)

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

[![Very Good Plugins LLC Logo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3C/svg%3E)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)