---
url: "https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/"
title: "EDD Recurring Payments"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#content)

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

# EDD Recurring Payments

- Published onJune 17, 2018
- Last updated on August 1, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- EDD Recurring Payments

### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#overview) Overview

If you’re using the [EDD Recurring Payments](https://wpfusion.com/go/easy-digital-downloads-recurring-payments/) extension, WP Fusion provides additional options for applying tags based on changes in a user’s subscription status.

You can then use these tags to trigger automation sequences in your CRM to remind users to update their credit card information, offer discounts on subscription renewals, or anything else you like.

This functionality is in addition to the main [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/) integration.

### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#product-setup) Product setup

WP Fusion adds a new settings metabox to all Easy Digital Downloads products where you can configure tags to be applied at purchase and based on subscription status.

[![screenshot of the wp fusion plugin settings page, displaying configuration options for download, subscription payments, and edd recurring payments—such as applying or removing lists based on user or subscription status in easy digital downloads.](https://wpfusion.com/wp-content/uploads/2018/06/edd-recurring-payments-settings-1024x890.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/edd-recurring-payments-settings.jpg) WP Fusion provides several options for tracking and engaging with recurring payments subscribers in your CRM.

The tags specified in the **Apply Tags** setting will be applied when someone purchases the subscription product, as well as when a subscription status changes to Active.

By checking **Remove Tags** you can remove the tags applied at purchase when a subscription is cancelled, completed, or expired. This is useful for revoking access to [protected content](https://wpfusion.com/documentation/getting-started/meta-box/) when a subscription is cancelled.

If you allow free trials, the tags specified in **Subscription in Trial** will be applied when a new trial is created, in addition to the **Apply Tags** tags. If the subscription later converts to a paid subscription (the status changes from `trialling` to `active`) the tags specified in **Trial Converted** will be applied.

You can also apply additional tags based on a change in the subscription status, allowing you to trigger followup sequences in your CRM when customers’ subscriptions are cancelled, put on hold, or expire:

- **Subscription Completed:** These tags will be applied when a recurring subscription is “completed”, i.e. the number of payments matches the Times field.
- **Subscription Failing:** These tags will be applied when a subscription has a failed payment. They will automatically be removed again once a payment is successful.
- **Subscription Expired:** These tags will be applied when a subscription status changes to Expired: either due to multiple failed payments, when it’s manually marked expired, or when a cancelled subscription reaches its expiration date.
- **Subscription Cancelled:** These tags will be applied immediately when a subscription is cancelled, either by an admin or a user.

#### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#tags-for-price-variations) Tags for price variations

For more granular control, WP Fusion also lets you apply tags when a subscription status changes for a specific price variation. See the screenshot below for an example.

[![screenshot of the Easy Digital Downloads plugin settings page displaying edd recurring payments options, including price, free trial, payment frequency, wp fusion tags, and subscription status triggers.](https://wpfusion.com/wp-content/uploads/2018/06/edd-3-0-variable-pricing-1024x983.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/edd-3-0-variable-pricing.jpg)

### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#syncing-subscription-fields) Syncing subscription fields

WP Fusion also lets you sync certain details about a customer’s active subscription to custom fields on their contact record.

This can be configured globally (i.e. a single set of fields for all products) at Settings » WP Fusion » Contact Fields.

[![](https://wpfusion.com/wp-content/uploads/2018/06/edd-recurring-fields-1024x368.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/edd-recurring-fields.jpg) WP Fusion can sync data from EDD subscriptions to custom fields or properties on contact records in your CRM

This can also be configured on individual downloads, for example if your customers have multiple concurrent subscriptions and you need to track the details in different custom fields.

[![](https://wpfusion.com/wp-content/uploads/2018/06/edd-recurring-single-download-fields-1024x611.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/edd-recurring-single-download-fields.jpg) When editing any recurring download product in EDD, you can map subscription details with custom fields in your CRM.

Those settings are visible in the WP Fusion meta box when editing any recurring download product.

The available fields are:

- **Subscription ID:** The ID of the subscription
- **Subscription Status:** The [status of the subscription](https://docs.woocommerce.com/document/subscriptions/statuses/) (‘pending’, ‘active’, ‘expired’, or ‘cancelled’)
- **Subscription Download Name:** The name of the product the customer has subscribed to (in cases of multiple products it will be the first product on the order)
- **Subscription Start Date:** The date the subscription started
- **Subscription End Date:** The date the subscription will end
- **Subscription Trial End Date:** The date the subscription’s trial period is scheduled to end (if applicable)
- **Next Payment Date:** The date of the next scheduled renewal payment (will be updated with each successful renewal)

Any enabled fields will be synced to your CRM when a subscription is created, or a subscription status changes.

If the **Next Payment Date** or **Order Date** are enabled, these will also be synced with each renewal payment.

### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#cancellation-surveys) Cancellation surveys

The [EDD Cancellation Survey](https://wpfusion.com/go/edd-cancellation-survey/) plugin allows you to collect additional information from your customers when they cancel their subscription.

[![](https://wpfusion.com/wp-content/uploads/2018/06/edd-cancellation-reason-frontend-1024x499.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/edd-cancellation-reason-frontend.jpg)

WP Fusion can sync the cancellation reasons to the customer’s contact record in your CRM, so you can run reports or trigger additional automations (such as offering a reactivation discount, or notifying an admin).

[![](https://wpfusion.com/wp-content/uploads/2018/06/edd-cancellation-reason-1024x178.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/edd-cancellation-reason.jpg)

To enable, simply enable the **Cancellation Reason** field for sync from the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#how-it-works) How it works

#### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#subscription-status-changes) Subscription status changes

WP Fusion will apply and remove tags depending on changes in a user’s subscription status. That logic works like:

- If an active subscription is either set to Completed, Failing, or Expired, and _Remove Tags_ is checked, the tags applied with the original purchase will be removed. This includes the tags applied for the price ID (if applicable).
- If a subscription is in any non-active status (Completed, Failing, Expired etc.) and the status becomes Active again, the tags for all the other statuses will be removed. The tags applied with the original purchase will be re-applied if the user doesn’t already have those tags.
- If a subscription changes between any two statuses that aren’t Active, the tags will be applied for the new status, but no tags will be removed.

#### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#tracking-cancellations) Tracking cancellations

Unlike [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#subscription-status-changes), Easy Digital Downloads does not have a specific status for _pending cancellation_ (i.e. a customer has cancelled their subscription, but still has time left before the next scheduled renewal).

WP Fusion’s functionality with subscription cancellations works as follows:

- When a customer cancels their subscription, the tags specified for Subscription Cancelled will be applied _immediately_.

  - If _Remove Tags_ is checked, the tags applied at checkout will _not_ be removed.
- Once the subscription’s next scheduled payment date passes (i.e. the subscription is fully cancelled and expired), the Subscription Expired tags will be applied.
  - If _Remove Tags_ is checked, the tags applied at checkout will also be removed at this time.

This way you can use WP Fusion’s EDD Recurring Payments integration to grant access to [content protected by CRM tags](https://wpfusion.com/documentation/getting-started/access-control/), without revoking access as soon as a customer cancels their subscription.

### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#batch-operations) Batch operations

WP Fusion includes two batch operations for EDD Recurring Payments, these can be found under Settings » WP Fusion » Advanced » Batch Operations.

These can be used to apply tags and update custom fields in your CRM in bulk for existing subscribers.

[![](https://wpfusion.com/wp-content/uploads/2018/06/edd-recurring-batch-operations-1024x547.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/edd-recurring-batch-operations.jpg)

There are two options:

- **EDD Recurring Payments statuses:** This operation applies tags in your CRM for every subscriber based on the tags configured for your download products, and the customer’s current subscription status. It does not sync any fields.
- **EDD Recurring Payments meta:** Syncs the subscription product name, start date, status, and next renewal dates for all subscriptions. Does not modify any tags.

### [\#](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/\#event-tracking) Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track Easy Digital Downloads product purchases and subscription status changes as events in supported CRMs.

Events can be configured in two places. On an individual download, in the WP Fusion metabox:

[![](https://wpfusion.com/wp-content/uploads/2018/06/event-tracking-edd-recurring-1024x532.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/event-tracking-edd-recurring.jpg)

Or in the Event Tracking global settings:

[![](https://wpfusion.com/wp-content/uploads/2018/06/event-tracking-edd-recurring-global-1024x395.jpg)](https://wpfusion.com/wp-content/uploads/2018/06/event-tracking-edd-recurring-global.jpg)

The available triggers for [event tracking with Easy Download Digitals](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#event-tracking) are:

- **Purchased Download:** Triggered each time a single download is purchased.
- **Downloaded Download:** Triggered whenever a file from this download is downloaded.

When Recurring Payments is active, an additional trigger is available:

- **Subscription Status Changed:** Triggered when a customer’s subscription status changes.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect EDD Recurring Payments to ActiveCampaign](https://wpfusion.com/connect/connect-edd-recurring-payments-to-activecampaign/)  \|
- [Connect EDD Recurring Payments to AgileCRM](https://wpfusion.com/connect/connect-edd-recurring-payments-to-agilecrm/)  \|
- [Connect EDD Recurring Payments to Autopilot](https://wpfusion.com/connect/connect-edd-recurring-payments-to-autopilot/)  \|
- [Connect EDD Recurring Payments to Bento](https://wpfusion.com/connect/connect-edd-recurring-payments-to-bento/)  \|
- [Connect EDD Recurring Payments to BirdSend](https://wpfusion.com/connect/connect-edd-recurring-payments-to-birdsend/)  \|
- [Connect EDD Recurring Payments to Brevo](https://wpfusion.com/connect/connect-edd-recurring-payments-to-brevo/)  \|
- [Connect EDD Recurring Payments to Capsule](https://wpfusion.com/connect/connect-edd-recurring-payments-to-capsule/)  \|
- [Connect EDD Recurring Payments to Constant Contact](https://wpfusion.com/connect/connect-edd-recurring-payments-to-constant-contact/)  \|
- [Connect EDD Recurring Payments to ConvertKit](https://wpfusion.com/connect/connect-edd-recurring-payments-to-convertkit/)  \|
- [Connect EDD Recurring Payments to ConvesioConvert](https://wpfusion.com/connect/connect-edd-recurring-payments-to-convesioconvert/)  \|
- [Connect EDD Recurring Payments to Copper](https://wpfusion.com/connect/connect-edd-recurring-payments-to-copper/)  \|
- [Connect EDD Recurring Payments to Customer.io](https://wpfusion.com/connect/connect-edd-recurring-payments-to-customer-io/)  \|
- [Connect EDD Recurring Payments to Customerly](https://wpfusion.com/connect/connect-edd-recurring-payments-to-customerly/)  \|
- [Connect EDD Recurring Payments to Drip](https://wpfusion.com/connect/connect-edd-recurring-payments-to-drip/)  \|
- [Connect EDD Recurring Payments to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-edd-recurring-payments-to-dynamics-365-marketing/)  \|
- [Connect EDD Recurring Payments to EmailOctopus](https://wpfusion.com/connect/connect-edd-recurring-payments-to-emailoctopus/)  \|
- [Connect EDD Recurring Payments to EngageBay](https://wpfusion.com/connect/connect-edd-recurring-payments-to-engagebay/)  \|
- [Connect EDD Recurring Payments to Flexie](https://wpfusion.com/connect/connect-edd-recurring-payments-to-flexie/)  \|
- [Connect EDD Recurring Payments to FluentCRM](https://wpfusion.com/connect/connect-edd-recurring-payments-to-fluentcrm/)  \|
- [Connect EDD Recurring Payments to FunnelKit](https://wpfusion.com/connect/connect-edd-recurring-payments-to-funnelkit/)  \|
- [Connect EDD Recurring Payments to Gist](https://wpfusion.com/connect/connect-edd-recurring-payments-to-gist/)  \|
- [Connect EDD Recurring Payments to Groundhogg](https://wpfusion.com/connect/connect-edd-recurring-payments-to-groundhogg/)  \|
- [Connect EDD Recurring Payments to HighLevel](https://wpfusion.com/connect/connect-edd-recurring-payments-to-highlevel/)  \|
- [Connect EDD Recurring Payments to HubSpot](https://wpfusion.com/connect/connect-edd-recurring-payments-to-hubspot/)  \|
- [Connect EDD Recurring Payments to Infusionsoft](https://wpfusion.com/connect/connect-edd-recurring-payments-to-infusionsoft/)  \|
- [Connect EDD Recurring Payments to Intercom](https://wpfusion.com/connect/connect-edd-recurring-payments-to-intercom/)  \|
- [Connect EDD Recurring Payments to Jetpack CRM](https://wpfusion.com/connect/connect-edd-recurring-payments-to-jetpack-crm/)  \|
- [Connect EDD Recurring Payments to Kartra](https://wpfusion.com/connect/connect-edd-recurring-payments-to-kartra/)  \|
- [Connect EDD Recurring Payments to Keap](https://wpfusion.com/connect/connect-edd-recurring-payments-to-keap/)  \|
- [Connect EDD Recurring Payments to Klaviyo](https://wpfusion.com/connect/connect-edd-recurring-payments-to-klaviyo/)  \|
- [Connect EDD Recurring Payments to KlickTipp](https://wpfusion.com/connect/connect-edd-recurring-payments-to-klicktipp/)  \|
- [Connect EDD Recurring Payments to Loopify](https://wpfusion.com/connect/connect-edd-recurring-payments-to-loopify/)  \|
- [Connect EDD Recurring Payments to MailChimp](https://wpfusion.com/connect/connect-edd-recurring-payments-to-mailchimp/)  \|
- [Connect EDD Recurring Payments to MailerLite](https://wpfusion.com/connect/connect-edd-recurring-payments-to-mailerlite/)  \|
- [Connect EDD Recurring Payments to Mailjet](https://wpfusion.com/connect/connect-edd-recurring-payments-to-mailjet/)  \|
- [Connect EDD Recurring Payments to MailPoet](https://wpfusion.com/connect/connect-edd-recurring-payments-to-mailpoet/)  \|
- [Connect EDD Recurring Payments to Maropost](https://wpfusion.com/connect/connect-edd-recurring-payments-to-maropost/)  \|
- [Connect EDD Recurring Payments to Mautic](https://wpfusion.com/connect/connect-edd-recurring-payments-to-mautic/)  \|
- [Connect EDD Recurring Payments to NationBuilder](https://wpfusion.com/connect/connect-edd-recurring-payments-to-nationbuilder/)  \|
- [Connect EDD Recurring Payments to Omnisend](https://wpfusion.com/connect/connect-edd-recurring-payments-to-omnisend/)  \|
- [Connect EDD Recurring Payments to Ontraport](https://wpfusion.com/connect/connect-edd-recurring-payments-to-ontraport/)  \|
- [Connect EDD Recurring Payments to Ortto](https://wpfusion.com/connect/connect-edd-recurring-payments-to-ortto/)  \|
- [Connect EDD Recurring Payments to Pipedrive](https://wpfusion.com/connect/connect-edd-recurring-payments-to-pipedrive/)  \|
- [Connect EDD Recurring Payments to Platformly](https://wpfusion.com/connect/connect-edd-recurring-payments-to-platformly/)  \|
- [Connect EDD Recurring Payments to Quentn](https://wpfusion.com/connect/connect-edd-recurring-payments-to-quentn/)  \|
- [Connect EDD Recurring Payments to Salesflare](https://wpfusion.com/connect/connect-edd-recurring-payments-to-salesflare/)  \|
- [Connect EDD Recurring Payments to Salesforce](https://wpfusion.com/connect/connect-edd-recurring-payments-to-salesforce/)  \|
- [Connect EDD Recurring Payments to Sender](https://wpfusion.com/connect/connect-edd-recurring-payments-to-sender/)  \|
- [Connect EDD Recurring Payments to SendFox](https://wpfusion.com/connect/connect-edd-recurring-payments-to-sendfox/)  \|
- [Connect EDD Recurring Payments to Tubular](https://wpfusion.com/connect/connect-edd-recurring-payments-to-tubular/)  \|
- [Connect EDD Recurring Payments to User.com](https://wpfusion.com/connect/connect-edd-recurring-payments-to-user-com/)  \|
- [Connect EDD Recurring Payments to WP ERP](https://wpfusion.com/connect/connect-edd-recurring-payments-to-wp-erp/)  \|
- [Connect EDD Recurring Payments to Zoho](https://wpfusion.com/connect/connect-edd-recurring-payments-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#overview)
- [Product setup](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#product-setup)
- [Tags for price variations](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#tags-for-price-variations)
- [Syncing subscription fields](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#syncing-subscription-fields)
- [Cancellation surveys](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#cancellation-surveys)
- [How it works](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#how-it-works)
- [Subscription status changes](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#subscription-status-changes)
- [Tracking cancellations](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#tracking-cancellations)
- [Batch operations](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#batch-operations)
- [Event Tracking](https://wpfusion.com/documentation/ecommerce/edd-recurring-payments/#event-tracking)

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