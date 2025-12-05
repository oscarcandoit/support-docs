---
url: "https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/"
title: "WooCommerce Subscriptions | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#content)

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

# WooCommerce Subscriptions

- Published onJanuary 28, 2016
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- WooCommerce Subscriptions

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#overview) Overview

WP Fusion works with [WooCommerce subscriptions](https://wpfusion.com/go/woocommerce-subscriptions) to allow you to automatically tag customers [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) at purchase, and based on changes in their subscription status.

WP Fusion can also update custom fields on contact records in your CRM with details from their active subscriptions, such as product name, subscription start date, and renewal date.

For more information about the options available with WooCommerce in general, see the [WooCommerce documentation](https://wpfusion.com/documentation/ecommerce/woocommerce/).

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#product-setup) Product setup

WP Fusion adds a new settings panel to all WooCommerce products where you can configure tags to be applied at purchase and based on subscription status:

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscription-product-setup-1.png)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscription-product-setup-1.png)

The tags specified in the **Apply tags when purchased** setting will be applied when someone purchases the subscription product, as well as when a subscription status changes to Active.

By checking **Remove tags** you can remove the tags applied at purchase when a subscription is cancelled, put on hold, expires, or is switched. This is useful for revoking access to [protected content](https://wpfusion.com/documentation/getting-started/meta-box/) when a subscription is cancelled.

You can also apply additional tags based on a change in the subscription state, allowing you to trigger followup sequences in your CRM when customers’ subscriptions are cancelled, put on hold, or expire.

**Note:** For tracking failed payments it’s preferable to use the “Payment Failed” setting instead of “Put on hold”, since subscriptions will temporarily be put on hold as part of the renewal process.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#variable-subscriptions) Variable Subscriptions

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-variation-settings-1-1024x580.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-variation-settings-1.jpg)

The **Apply tags when purchased** setting [on product variations](https://wpfusion.com/documentation/ecommerce/woocommerce/#variable-products) mirrors the behavior of the **Apply tags when purchased** setting on the main WP Fusion tab:

- Any tags specified in that setting will be applied when the product is purchased, as well as when a subscription status changes to active.
- If **Remove tags** is enabled on the main settings tab, then the subscription variation tags will also be removed when the subscription is cancelled, put on hold, expires, or is switched.

[![](https://wpfusion.com/wp-content/uploads/2016/01/remove-tags-1024x617.png)](https://wpfusion.com/wp-content/uploads/2016/01/remove-tags.png)

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#subscription-status-changes) Subscription status changes

WP Fusion will apply and remove tags depending on changes in a user’s subscription status. That logic works like:

- If a subscription is put on hold as [part of an automatic renewal](https://docs.woocommerce.com/document/subscriptions/renewal-process/#section-5), and the renewal payment is successful, WP Fusion will _not_ modify any tags.
- If an active subscription is either put on hold, cancelled, or expires, and _Remove Tags_ is checked the tags applied with the original purchase will be removed. The original tags will not be removed if a subscription is in the Pending Cancel status.
- If a subscription is cancelled by the user and still has time left on it, the _Pending Cancel_ tags will be applied. When the term of the subscription is over and the subscription status changes to Cancelled, the _Cancelled_ tags will be applied. If _Remove Tags_ is checked, then the original tags applied at purchase will be removed at this time (once the subscription is fully cancelled).
- If a subscription is in any status other than Active (cancelled, on-hold, etc.) and the status becomes Active again, the tags for all the other statuses will be removed. The tags applied with the original purchase will be re-applied if the user doesn’t already have those tags.
- If a subscription renewal payment fails, the Payment Failed tags will be applied. These tags will be removed if a subsequent retry payment succeeds.
- If a subscription changes between any two statuses that aren’t Active, the tags will be applied for the new status, but no tags will be removed.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#concurrent-subscriptions) Concurrent subscriptions

To prevent a customer from potentially losing access to purchased products, WP Fusion handles concurrent subscriptions in two ways:

1. If a customer’s subscription is canceled, put on hold, or expired, and they still have another active subscription to the same product, the status change will be ignored.
2. If a customer’s subscription is canceled, put on hold, or expired, and **Remove Tags** is checked on the subscription product, WP Fusion will first check their other active subscription products to see if they apply the same tags. Any tags applied by products where the customer still has an active subscription will not be removed.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-active-subscription-to-other-product-1024x168.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-active-subscription-to-other-product.jpg) If a customer’s subscription is put on hold and they still have another active subscription to a product which applies the same tags, those tags will not be removed.

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#syncing-subscription-fields) Syncing subscription fields

WP Fusion also lets you sync certain details about a customer’s active subscription to custom fields on their contact record.

This can be configured globally (i.e. a single set of fields for all products) at Settings » WP Fusion » Contact Fields.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-meta-fields-1-1024x412.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-meta-fields-1.jpg) WP Fusion can sync data from WooCommerce subscriptions to custom fields or properties on contact records in your CRM

This can also be configured on individual subscription products, for example if your customers have multiple concurrent subscriptions and you need to track the details in different custom fields.

[![WooCommerce subscriptions single product field settings](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-fields-1024x459.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-fields.jpg) When editing any subscription product in WooCommerce, you can map subscription details with custom fields in your CRM.

Those settings are visible on the WP Fusion tab when editing any subscription product.

The available fields are:

- **Subscription ID:** The ID of the subscription
- **Subscription Status:** The [status of the subscription](https://docs.woocommerce.com/document/subscriptions/statuses/) (‘pending’, ‘active’, ‘on-hold’, ‘expired’, ‘cancelled’, or ‘pending-cancel’)
- **Product Name(s):** The name or names of the products the customer has subscribed to. By default this is sent as a comma-separated string, but you can [change the field type](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#field-types) to _multiselect_ to populate a picklist or other multiselect compatible CRM field.
- **Product SKU(s):** The SKUs of the products the customer has subscribed to. As with Product Name this can be sent as text or multiselect.
- **Subscription Start Date:** The date the subscription started
- **Subscription End Date:** The date the subscription will end
- **Subscription Trial End Date:** The date the subscription’s trial period is scheduled to end (if applicable)
- **Next Payment Date:** The date of the next scheduled renewal payment (will be updated with each successful renewal)
- **Next Payment Value:** The amount the customer will be charged for their next subscription payment
- **Last Order Type:** This will either be `normal`, `parent`, `renewal`, or `resubscribe` depending on the status of the order

Any enabled fields will be synced to your CRM when a subscription is created, or a subscription status changes.

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#subscription-management) Subscription management

When editing any WooCommerce subscription in the admin, you will see a meta box indicating that subscription’s status with WP Fusion.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-status-metabox-1024x624.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-status-metabox.jpg)

The meta box will show whether or not the subscription’s parent order was processed by WP Fusion, and if so, include a link to view the customer’s contact record in your CRM.

You can click the **Process WP Fusion actions again** button to manually trigger WP Fusion to process the subscription. This will sync any enabled subscription fields to your CRM, as well as apply any tags you’ve configured based on the current subscription status.

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#event-tracking) Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track subscription activity as events in supported CRMs. This lets you view customer activity in real time in your CRM’s activity feed.

Events can be configured in the global Event Tracking settings page, at Settings » Event Tracking.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-event-tracking-global-1024x379.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-event-tracking-global.jpg)

The available triggers are:

- **Renewal Payment Received:** Triggered each time a renewal payment is received.
- **Subscription Status Changed:** Triggered each time a subscription status changes.

You can also configure event tracking on individual subscription products. These settings are found at the bottom of [the WP Fusion settings panel](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#product-setup) when editing any subscription product.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-event-tracking-product-panel-1024x367.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-event-tracking-product-panel.jpg)

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#batch-operations) Batch operations

WP Fusion includes two batch operations for WooCommerce Subscriptions, these can be found under Settings » WP Fusion » Advanced » Batch Operations.

These can be used to apply tags and update custom fields in your CRM in bulk for existing subscribers.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-batch-operation-1024x487.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-subscriptions-batch-operation-scaled.jpg)

There are two options:

- **WooCommerce Subscriptions statuses:** This operation applies tags in your CRM for every subscriber based on the tags configured for your subscription products, and the customer’s current subscription status. It does not sync any fields.
- **WooCommerce Subscriptions meta:** Syncs the subscription product name, start date, status, and next renewal dates for all subscriptions. Does not modify any tags.

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#developers) Developers

WP Fusion’s WooCommerce integration is very developer friendly. If you open the integration file in `/wp-fusion/includes/integrations/class-woocommerce-subscriptions.php` you’ll find several actions and filters that allow you to modify what data is synced with your CRM (and when).

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#actions) Actions

WP Fusion includes the following action hooks for WooCommerce Subscriptions:

- `wpf_woocommerce_product_subscription_inactive`
- `wpf_woocommerce_product_subscription_active`

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/\#filters) Filters

WP Fusion includes the following filter hooks for WooCommerce Subscriptions:

- `wpf_woocommerce_subscription_status_apply_tags`
- `wpf_woocommerce_subscription_status_remove_tags`
- `wpf_woocommerce_subscription_sync_fields`

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect WooCommerce Subscriptions to ActiveCampaign](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-activecampaign/)  \|
- [Connect WooCommerce Subscriptions to AgileCRM](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-agilecrm/)  \|
- [Connect WooCommerce Subscriptions to Autopilot](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-autopilot/)  \|
- [Connect WooCommerce Subscriptions to Bento](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-bento/)  \|
- [Connect WooCommerce Subscriptions to BirdSend](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-birdsend/)  \|
- [Connect WooCommerce Subscriptions to Brevo](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-brevo/)  \|
- [Connect WooCommerce Subscriptions to Capsule](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-capsule/)  \|
- [Connect WooCommerce Subscriptions to Constant Contact](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-constant-contact/)  \|
- [Connect WooCommerce Subscriptions to ConvertKit](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-convertkit/)  \|
- [Connect WooCommerce Subscriptions to ConvesioConvert](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-convesioconvert/)  \|
- [Connect WooCommerce Subscriptions to Copper](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-copper/)  \|
- [Connect WooCommerce Subscriptions to Customer.io](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-customer-io/)  \|
- [Connect WooCommerce Subscriptions to Customerly](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-customerly/)  \|
- [Connect WooCommerce Subscriptions to Drip](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-drip/)  \|
- [Connect WooCommerce Subscriptions to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-dynamics-365-marketing/)  \|
- [Connect WooCommerce Subscriptions to EmailOctopus](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-emailoctopus/)  \|
- [Connect WooCommerce Subscriptions to EngageBay](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-engagebay/)  \|
- [Connect WooCommerce Subscriptions to Flexie](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-flexie/)  \|
- [Connect WooCommerce Subscriptions to FluentCRM](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-fluentcrm/)  \|
- [Connect WooCommerce Subscriptions to FunnelKit](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-funnelkit/)  \|
- [Connect WooCommerce Subscriptions to Gist](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-gist/)  \|
- [Connect WooCommerce Subscriptions to Groundhogg](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-groundhogg/)  \|
- [Connect WooCommerce Subscriptions to HighLevel](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-highlevel/)  \|
- [Connect WooCommerce Subscriptions to HubSpot](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-hubspot/)  \|
- [Connect WooCommerce Subscriptions to Infusionsoft](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-infusionsoft/)  \|
- [Connect WooCommerce Subscriptions to Intercom](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-intercom/)  \|
- [Connect WooCommerce Subscriptions to Jetpack CRM](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-jetpack-crm/)  \|
- [Connect WooCommerce Subscriptions to Kartra](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-kartra/)  \|
- [Connect WooCommerce Subscriptions to Keap](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-keap/)  \|
- [Connect WooCommerce Subscriptions to Klaviyo](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-klaviyo/)  \|
- [Connect WooCommerce Subscriptions to KlickTipp](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-klicktipp/)  \|
- [Connect WooCommerce Subscriptions to Loopify](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-loopify/)  \|
- [Connect WooCommerce Subscriptions to MailChimp](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-mailchimp/)  \|
- [Connect WooCommerce Subscriptions to MailerLite](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-mailerlite/)  \|
- [Connect WooCommerce Subscriptions to Mailjet](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-mailjet/)  \|
- [Connect WooCommerce Subscriptions to MailPoet](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-mailpoet/)  \|
- [Connect WooCommerce Subscriptions to Maropost](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-maropost/)  \|
- [Connect WooCommerce Subscriptions to Mautic](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-mautic/)  \|
- [Connect WooCommerce Subscriptions to NationBuilder](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-nationbuilder/)  \|
- [Connect WooCommerce Subscriptions to Omnisend](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-omnisend/)  \|
- [Connect WooCommerce Subscriptions to Ontraport](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-ontraport/)  \|
- [Connect WooCommerce Subscriptions to Ortto](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-ortto/)  \|
- [Connect WooCommerce Subscriptions to Pipedrive](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-pipedrive/)  \|
- [Connect WooCommerce Subscriptions to Platformly](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-platformly/)  \|
- [Connect WooCommerce Subscriptions to Quentn](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-quentn/)  \|
- [Connect WooCommerce Subscriptions to Salesflare](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-salesflare/)  \|
- [Connect WooCommerce Subscriptions to Salesforce](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-salesforce/)  \|
- [Connect WooCommerce Subscriptions to Sender](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-sender/)  \|
- [Connect WooCommerce Subscriptions to SendFox](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-sendfox/)  \|
- [Connect WooCommerce Subscriptions to Tubular](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-tubular/)  \|
- [Connect WooCommerce Subscriptions to User.com](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-user-com/)  \|
- [Connect WooCommerce Subscriptions to WP ERP](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-wp-erp/)  \|
- [Connect WooCommerce Subscriptions to Zoho](https://wpfusion.com/connect/connect-woocommerce-subscriptions-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#overview)
- [Product setup](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#product-setup)
- [Variable Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#variable-subscriptions)
- [Subscription status changes](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#subscription-status-changes)
- [Concurrent subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#concurrent-subscriptions)
- [Syncing subscription fields](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#syncing-subscription-fields)
- [Subscription management](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#subscription-management)
- [Event Tracking](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#event-tracking)
- [Batch operations](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#batch-operations)
- [Developers](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#developers)
- [Actions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#actions)
- [Filters](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#filters)

### You may also like

[![a graphic of a web browser window with a rising bar graph, upward arrow, woocommerce logo, and dollar sign above the text tracking woocommerce revenue attribution with wp fusion on a blue background.](https://wpfusion.com/wp-content/uploads/2025/08/woocommerce-revenue-attribution-300x158.jpg)](https://wpfusion.com/tutorials/how-to-track-woocommerce-revenue-attribution-with-wp-fusion/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [WooCommerce Revenue Attribution: How to Track Which Campaigns Drive Sales (With WP Fusion)](https://wpfusion.com/tutorials/how-to-track-woocommerce-revenue-attribution-with-wp-fusion/)

Let’s explore a practical way to connect WooCommerce sales to campaign data inside your CRM, allowing you to make smarter marketing decisions.

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