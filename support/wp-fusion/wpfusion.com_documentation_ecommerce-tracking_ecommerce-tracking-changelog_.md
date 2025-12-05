---
url: "https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/"
title: "Enhanced Ecommerce Changelog | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/#content)

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

# Enhanced Ecommerce Changelog

- Published onJune 12, 2018
- Last updated on June 19, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Enhanced Ecommerce](https://wpfusion.com/documentation/#ecommerce-tracking)
- /
- Enhanced Ecommerce Changelog

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-26-2) 1.26.2 - 10/7/2025

- ✨ New Added - Ontraport invoice template setting to configure which invoice template to use when creating transactions
- ⚡️ Improved Stopped syncing the product name and description to HubSpot line items that already have a HubSpot product ID (was taking precedence over the HS product name and breaking reports)
- ⚡️ Improved Improved HubSpot logging
- 🔧 Fixed Fixed - Ontraport coupons now distribute discounts proportionally based on product prices instead of equally by quantity (prevents negative prices on free or discounted products)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-26-1) 1.26.1 - 8/7/2025

- ✨ New Added a dropdown for default owner for HubSpot deals
- ✨ New Added translations for Spanish, French, German, Italian, Portuguese (Brazil), Dutch, Russian, Japanese, Chinese (Simplified), and Korean
- ⚡️ Improved Keap / Infusionsoft affiliate ID will now be saved to pending orders so it can be synced during iFrame or offsite checkouts
- 🔧 Fixed Fixed LifterLMS orders not syncing when a manual gateway recurring payment had its status set to active in the admin
- 🔧 Fixed Fixed fatal error with Groundhogg integration when the Groundhogg - Sales Pipeline plugin was not active
- 🔧 Fixed Fixed WooCommerce order dates not being consistently synced as UTC
- 🔧 Fixed Fixed error "The url field must be a string" when creating new CartFlows products with MailerLite

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-26-0) 1.26.0 - 3/10/2025

- ✨ New Added support for [Brevo E-commerce](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/#orders)
- ✨ New Added support for the [HubSpot Commerce API](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#deals-vs-orders)
- ✨ New Added support for updating existing products with Zoho
- ✨ New Added support for syncing SKUs to Zoho products
- ✨ New Added support for syncing to Sales Orders with Zoho as an alternative to Deals
- ✨ New Added option to ignore free transactions with MemberPress
- ⚡️ Improved WooCommerce customer notes will now be added to Infusionsoft / Keap orders as notes
- ⚡️ Improved Bulk order status changes with WooCommerce are now processed in a background job (no longer limited to 20 orders)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-25-1) 1.25.1 - 10/3/2024

- ✨ New Added support for syncing line items (shipping, taxes, fees) with HubSpot
- ✨ New Added support for syncing partial refunds with SureCart
- ✨ New Added support for syncing variation images with SureCart
- ✨ New Added support for updating existing deals with Zoho
- ⚡️ Improved With Ontraport, if a refunded WooCommerce order is changed back to processing or complete, the Ontraport order will be marked as paid
- 🔧 Fixed Fixed SureCart integration not creating a new contact record for existing users who did not already have a contact record
- 🔧 Fixed Fixed missing order label in SureCart error message
- 🔧 Fixed Fixed undefined offset warnings in SureCart integration when no customer last name is provided
- 🔧 Fixed Fixed duplicate deals being created in Zoho when the Pending Payment order status in WooCommerce was mapped to a pipeline stage
- 🔧 Fixed Fixed unhandled error looking up existing products in the CRM when the Sync Product Edits setting is enabled
- 🔧 Fixed Fixed Drip integration syncing the `occurred_at` field in local time, not UTC
- 🔧 Fixed Fixed incorrect invoice ID being saved from Infusionsoft / Keap orders with the new API
- 🛠️ Dev Added `wpf_ecommerce_hubspot_refund_deal` filter

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-25-0) 1.25.0 - 8/7/2024

- ✨ New Added a [SureCart integration](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- ✨ New Added a [Groundhogg Enhanced Ecommerce integration](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- ✨ New Added support for updating existing deals in HighLevel
- ⚡️ Improved Declared compatibility with the WooCommerce block-based checkout to avoid "Incompatible plugin" notices in the admin
- ⚡️ Improved When editing a pending WooCommerce order, updated data will only be synced to the CRM if the order total changes
- ⚡️ Improved Improved Drip error handling
- 🔧 Fixed Fixed WooCommerce orders being synced without line items when the Pending Payment order status was mapped to a deal stage
- 🔧 Fixed Fixed division by zero error when syncing WooCommerce orders to Ontraport with a discount, when all order items had been refunded
- 🔧 Fixed Fixed pending WooCommerce subscriptions getting synced as 0 value orders/deals when the Pending Payment order status was mapped to a deal stage
- 🔧 Fixed Fixed error "Uncaught Error: Undefined constant 'result'" when submitting a recurring payment with Gravity Forms and Ontraport
- 🔧 Fixed Fixed missing error handling for failed API call to create a new Infusionsoft product

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-24-1) 1.24.1 - 5/15/2024

- 🔧 Fixed Fixed invalid Brevo stage ID error when adding deals without specifying a pipeline, since 1.24.0

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-24-0) 1.24.0 - 5/10/2024

- ✨ New Added support for syncing deals with multiple pipelines in Brevo
- ⚡️ Improved With Infusionsoft and Keap, if an order is processed again, it will now delete the old invoice and create a new one (to avoid duplicates)
- 🔧 Fixed Fixed bug whereby sometimes EDD would have an empty `_edd_completed_date` meta key and this would set the order date to the epoch (now uses the )
- 🔧 Fixed Fixed - With WooCommerce, pending orders that transitioned to failed were not moving deals to the correct pipeline stage
- 🔧 Fixed Fixed HighLevel integration syncing pipelines on every page load for accounts with no pipelines
- 🔧 Fixed Fixed - Removed "Draft" from available order statuses with WooCommerce. Causes errors since the customer email hasn't been saved to the order yet
- 🛠️ Dev Added `wpf_ecommerce_hubspot_add_product` filter
- 🛠️ Dev CRMs that require an ISO8601 date for the order date will now use the new `wpf_get_iso8601_date()` function (standardizes order date formatting and timezone handling across the integtrations)
- Updated required WP Fusion version to 3.43.6

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-23-5) 1.23.5 - 2/20/2024

- ✨ New Added Requires Plugins header for WordPress 6.5
- ⚡️ Improved Updated order total calculation method in Zoho integration to get around rounding errors when `serialize_precision` wasn't set correctly on the server
- ⚡️ Improved`wpf_ec_complete` meta key with MemberPress is now set to the current time instead of `true`
- 🔧 Fixed Fixed broken "Gravity Forms Entries (Ecommerce addon)" batch operation
- 🔧 Fixed Fixed missing enhanced ecommerce settings on Gravity Forms feeds since WP Fusion 3.42.7
- 🔧 Fixed Fixed HubSpot getting existing invoice IDs from the MakeWebBetter plugin for non-WooCommerce orders
- 🔧 Fixed Fixed missing logging for associating HubSpot line items with deals
- 🔧 Fixed Fixed missing warning notice when using the Enhanced Ecommerce plugin with an unsupported CRM

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-23-4-2) 1.23.4.2 - 1/29/2024

- 🔧 Fixed Fixed a fatal error when syncing pending orders with the CRM and a pending order was created with an empty shipping method, since 1.23.4

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-23-4-1) 1.23.4.1 - 1/26/2024

- Re-added the `CustomerAuthorizedById` field that was removed from the Salesforce integration in 1.23.4

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-23-4) 1.23.4 - 1/24/2024

- ✨ New Added support for syncing HighLevel opportunities to different statuses in addition to pipelines and stages
- ✨ New Added option (under Advanced) to delete the ActiveCampaign Deep Data connection without opening a new one
- ⚡️ Improved Removed the `CustomerAuthorizedById` from Salesforce order data. It's not a required field and was causing validation issues on some accounts
- ⚡️ Improved Synced shipping methods will now include the shipping method title instead of just "Shipping"
- ⚡️ Improved The Ontraport integration will always search for a product by name before creating a new one (to avoid creating duplicate products)
- ⚡️ Improved [Shipping products with Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#shipping-product) will be created based on the shipping method title, instead of just "Shipping"
- ⚡️ Improved If pending orders are enabled for sync with WooCommerce, creating a pending order in the admin will create a corresponding contact record and deal
- ⚡️ Improved If a pending order is edited in the admin, the deal will automatically be updated in the CRM without having to click Process WP Fusion Actions Again
- 🔧 Fixed Fixed undefined index warnings when editing a Gravity Forms feed for a form that includes payments

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-23-3-11-10-2023) 1.23.3 = 11/10/2023

- 🔧 Fixed Fixed `Error: Call to undefined function wc_get_order()` when syncing non-WooCommerce orders to Drip since 1.23.2
- ✨ New Added support for syncing the checkout URL to Drip with EDD

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-23-2) 1.23.2 - 11/8/2023

- ✨ New Added support for [syncing MemberPress transaction status changes with sales pipelines](https://wpfusion.com/documentation/membership/memberpress/#sales-pipelines) in Brevo, HighLevel HubSpot, and Zoho
- ✨ New Added support for syncing the checkout URL to Drip with WooCommerce, CartFlows, and FunnelKit
- ✨ New Added support for updating existing deals with Brevo
- ✨ New Added a warning when the Reepay payment gateway is configured in a way that will send duplicate data to the CRM
- ⚡️ Improved When "Skip already processed" is un-checked during the WooCommerce Products batch operation, the cached CRM product ID will be cleared out and looked up again via API call
- ⚡️ Improved Improved error handling with ActiveCampaign
- 🔧 Fixed Fixed the WooCommerce Products batch operation not working unless Sync Product Edits was enabled in the Enhanced Ecommerce settings
- 🔧 Fixed Fixed PHP warning `Undefined array key "sku"` in Salesforce integration when creating a new product without an SKU
- 🔧 Fixed Fixed PHP warning `Unknown property: name` when syncing MemberPress transactions from the `manual` gateway
- 🔧 Fixed Fixed a bug with WooCommerce Discount Rules Pro where cart-based discounts were being synced without a title
- 🔧 Fixed Fixed Ontraport integration not syncing partially refunded orders where a single item's quantity was refunded to zero
- 🔧 Fixed Fixed fatal error adding new WooCommerce products with Drip, MailerLite, and Zoho when Sync Product Edits was enabled in the WP Fusion settings
- 🔧 Fixed Fixed PHP warning performing initial sync with HubSpot when no products existed in HubSpot

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-23-1) 1.23.1 - 8/17/2023

- ⚡️ Improved If you are running a WooCommerce Orders batch operation via the core plugin, and the orders have already been processed by Enhanced Ecommerce, they will be skipped (and a notice will be logged)
- 🔧 Fixed Fixed Cancelled WooCommerce orders not updating the order total to 0 in ActiveCampaign
- 🔧 Fixed Fixed HighLevel integration only adding opportunities to the first pipeline (requires Refresh Tags and Fields and selecting a pipeline again in the setup)
- 🔧 Fixed Fixed Brevo integration recording orders as successfully synced even when a deal stage hadn't been selected in the settings
- 🔧 Fixed Fixed MemberPress integration not syncing transactions that had already been synced, despite "Skip already processed" being un-checked
- 🔧 Fixed Fixed MemberPress Transactions export operation picking up fallback and subscription\_confirmation transactions
- PHP 8.2.8 compatibility

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-23-0) 1.23.0 - 7/24/2023

- ✨ New Added [Salesforce integration](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)
- ⚡️ Improved If a deal is deleted in HubSpot, and updating the deal fails, WP Fusion will clear the cached deal ID and create a new deal
- 🔧 Fixed Fixed MailerLite integration not handling errors related to looking up a shop ID or creating a new shop
- 🔧 Fixed Fixed CRMs with products (AgileCRM, Infusionsoft, Ontraport, Zoho) updating the product name in the CRM based on the WordPress product name even when Sync Product Edits was disabled
- 🔧 Fixed Fixed free MemberPress transactions not being synced

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-22-0) 1.22.0 - 6/19/2023

- ✨ New Added [MailerLite integration](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)
- 🔧 Fixed Fixed - v1.20.0 added WooCommerce HPOS support, but forgot to declare the compatibility. The plugin now shows up as compatible with HPOS

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-21-1) 1.21.1 - 6/5/2023

- ✨ New Added filter `wpf_ecommerce_nationbuilder_add_donation`
- ⚡️ Improved Custom HubSpot deal properties added using the `wpf_ecommerce_hubspot_add_deal` for the v1 HubSpot API will now automatically be fixed to be compatible with the v3 API
- 🔧 Fixed Fixed WooCommerce Susbcriptions signup fees getting synced twice since 1.21.0
- Removed the deprecated option to add a note to HubSpot deals, for new WP Fusion installs

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-21-0) 1.21.0 - 5/24/2023

- ✨ New Added [HighLevel integration](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- ✨ New Added filter `wpf_ecommerce_brevo_add_deal` (alias of `wpf_ecommerce_sendinblue_add_deal`)
- Updated Sendinblue integration to Brevo
- Updated HubSpot integration to use new v3 API
- 🔧 Fixed Fixed an issue with WooCommerce refunds whereby if you did a partial refund on an order, and then subsequently fully refunded the order, the amount of the initial partial refund would be synced twice (causing a negative balance)
- 🔧 Fixed Fixed WooCommerce refunds being synced to Drip twice
- 🔧 Fixed Fixed signup fees getting synced as line items with every WooCommerce subscriptions renewal order
- 🔧 Fixed Fixed duplicate transaction data being sent when using the Memberpress WooCommerce Plus plugin

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-20-3) 1.20.3 - 3/28/2023

- 🔧 Fixed Fixed signup fees not being synced with WooCommerce Subscriptions
- 🔧 Fixed Fixed variation names missing from product names since 1.20.0
- 🔧 Fixed Fixed prices for variable products not syncing correctly at checkout since 1.20.0
- 🔧 Fixed Fixed PHP warnings updating existing products with Ontraport

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-20-2) 1.20.2 - 3/22/2023

- ⚡️ Improved Calling wp\_fusion\_ecommerce()->woocommerce->send\_order\_data() will now always sync the order, regardless of its status (fixes an issue with FunnelKit and the Run on Primary Order Accepted setting)
- ⚡️ Improved Infusionsoft / Keap refunds will now be [synced with a credit note](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#refunds) to prevent the order from displaying as having a balance due
- 🔧 Fixed Fixed fatal error `Call to a member function get_name() on bool` when trying to export WooCommerce orders that contained deleted products, since 1.20.0
- 🔧 Fixed Fixed error `Unsupported operand types: string * int` when syncing products that have no value (like Gift Cards) with ActiveCampaign

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-20-1) 1.20.1 - 3/2/2023

- 🔧 Fixed Fixed fatal error (missing second argument) running the "WooCommerce Products (Ecommerce addon)" batch operation since 1.20.0

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-20-0) 1.20.0 - 2/27/2023

- ✨ New Added - With CRMs that support products (AgileCRM, Drip, HubSpot, Keap / Infusionsoft, Ontraport, and Zoho), you can now sync products when they are created or updated in WooCommerce, instead of when the order is placed
- ✨ New Added support for [WooCommerce High Performance Order Storage](https://developer.woocommerce.com/2022/09/14/high-performance-order-storage-progress-report/)
- ⚡️ Improved When looking up an Infusionsoft product, if a match isn't found by name, an additional search will be performed by SKU before creating a new product
- ⚡️ Improved The HubSpot integration can now update deals created by the MakeWebBetter HubSpot for WooCommerce plugin
- 🔧 Fixed Fixed broken link to Give payments in ActiveCampaign (and other CRMs with payment links)
- 🔧 Fixed Fixed `Undefined variable $payment` in LifterLMS integration

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-19-3) 1.19.3 - 12/6/2022

- ✨ New Added multi-currency support to Zoho integration
- ✨ New Added option to reset the ActiveCampaign Deep Data connection ID and open a new connection
- ⚡️ Improved Variable WooCommerce products will now be synced to Drip with their variation ID for the `product_variant_id` parameter
- ⚡️ Improved Clicking Process WP Fusion Actions Again on a WooCommerce order will now trigger the Enhanced Ecommerce addon to re-sync the invoice as well
- 🔧 Fixed Fixed Completed WooCommerce orders being exported to Drip as Fulfilled, which didn't correctly set the order date
- 🔧 Fixed Fixed "Invalid data passed for field" error updating deal stages with Zoho

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-19-2) 1.19.2 - 10/26/2022

- 🔧 Fixed Fixed fatal error refunding MemberPress transactions with ActiveCampaign since 1.19.0

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-19-1) 1.19.1 - 10/11/2022

- ⚡️ Improved Refunded item quantities will now be synced with Drip, and trigger an order refunded event
- ⚡️ Improved Removed legacy Orders API and Events API integrations with Drip in favor of the Shopper Activity API
- ⚡️ Improved New Completed WooCommerce orders will be sent to Drip as "fulfilled" instead of being synced as "placed" and then updated to "fulfilled" a moment later
- 🔧 Fixed Fixed the Record a Converson Event option not working with Drip and the Shopper Activity API
- 🔧 Fixed Fixed multiple partial refunds on WooCommerce orders not correctly being synced with Drip (only the most recent refund was synced)
- 🔧 Fixed Fixed partial refund amounts not being rounded to two decimal places

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-19-0) 1.19.0 - 8/29/2022

- Addded [Sendinblue integration](https://wpfusion.com/documentation/ecommerce-tracking/sendinblue-enhanced-ecommerce/)
- ✨ New Added [Gravity Forms integration](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/#gravity-forms)
- ✨ New Added support for WooCommerce refunds and partial refunds with ActiveCampaign, AgileCRM, HubSpot, NationBuilder, and Zoho
- ✨ New Added custom Drip properties for payment method and discount code
- ⚡️ Improved Improved Zoho error handling for creating products and linking them with deals
- ⚡️ Improved Improved / Fixed - Refunds will be synced to Drip with the date of the refund as the `occurred_at` parameter, in order to trigger the Refunded An Order workflow trigger
- 🔧 Fixed Fixed Zoho integration not correctly detecting when the Products module was unavailable on the account
- 🔧 Fixed Fixed MemberPress integration syncing confirmation transactions with PayPal (Standard)
- 🛠️ Dev Moved EDD Recurring Payments `edd_recurring_add_subscription_payment` hook from priority 10 to 20 so it runs after the renewal meta keys have been set for the order by EDD

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-18-6) 1.18.6 - 4/20/2022

- ⚡️ Improved the WooCommerce Orders (Ecommerce Addon) batch operation no longer requires the orders to be processed by the core plugin first
- ⚡️ Improved If a non-paid order status (i.e. Pending, Failed) is linked to a pipeline in Zoho or HubSpot, then it will be exported when running a WooCommerce Orders batch operation
- 🔧 Fixed Fixed PHP warning loading ActiveCampaign deal stages if no deal stages exist
- 🔧 Fixed Fixed fatal error in ActiveCampaign integration if someone checked out and their existing contact record had been deleted

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-18-5) 1.18.5 - 3/8/2022

- 🔧 Fixed Fixed fatal error changing WooCommerce order statuses when WooCommerce Subscriptions wasn't active, since 1.18.4

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-18-4) 1.18.4 - 3/8/2022

- ✨ New Added option to re-process already exported orders using the batch operations with WooCommerce, EDD, MemberPress, and GiveWP
- ⚡️ Improved Sync Products with HubSpot will now be enabled by default
- ⚡️ Improved Sync Orders with Drip will now be enabled by default
- ⚡️ Improved If a WooCommerce order is marked completed, the `date_completed` will be synced for the order date instead of the `date_paid`
- ⚡️ Improved If a customer checks out with a different email from their AC Deep Data customer email, and this results in an error, WP Fusion will re-send the order data with the email from their contact record
- ⚡️ Improved ActiveCampaign Deep Data connection will no longer be deleted when disabling Deep Data

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-18-3) 1.18.3 - 12/28/2021

- ✨ New Added warning about syncing Pending Payment orders with HubSpot and Zoho
- ✨ New Added `wpf_ecommerce_ontraport_add_product` filter
- ✨ New Added SKU field to Ontraport products
- ⚡️ Improved Improved support for taxes with Ontraport — Only order items that have tax will be markd `taxable`
- ⚡️ Improved If WooCommerce Subscriptions is active and the site is a staging site, order status changes will not be synced to the CRM
- ⚡️ Improved Improved ActiveCampaign error handling so that it now looks at the response code instead of message (some errors were not being caught properly with non-English accounts)
- 🔧 Fixed Fixed incorrect totals when syncing Ontraport product prices tax-inclusive when some cart items were tax exempt
- 🔧 Fixed Fixed free shipping showing up in Infusionsoft as a $0 order adjustment

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-18-2) 1.18.2 - 11/1/2021

- 🔧 Fixed Fixed coupons / discounts getting synced twice since 1.18.1

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-18-1) 1.18.1 - 10/19/2021

- ✨ New Added support for product discounts added as adjustments to individual line items for manually created WooCommerce orders
- ⚡️ Improved When bulk-editing the status for more than 20 WooCommerce orders, status changes will not be synced to the CRM (to prevent a gateway timeout)
- 🔧 Fixed Fixed duplicate record error syncing products with HubSpot that have no SKU
- 🔧 Fixed Fixed EDD discount code not syncing with ActiveCampaign Deep Data

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-18-0) 1.18.0 - 8/20/2021

- ✨ New Added support for coupons with ActiveCampaign Deep Data connections
- ✨ New Added support for exporting non-paid order statuses with HubSpot and Zoho
- ⚡️ Improved If a deal ID is saved for a HubSpot deal, the existing deal will be updated rather than create a duplicate
- ⚡️ Improved When a MemberPress transaction is refunded, the corresponding deal/invoice will be marked refunded in the CRM
- ✨ New Added wpf\_ecommerce\_ontraport\_add\_transaction filter
- 🔧 Fixed Fixed PHP warnings during initial Zoho sync if there were no Accounts in Zoho

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-10) 1.17.10 - 7/1/2021

- ✨ New Added third parameter $order\_id to wpf\_ecommerce\_hubspot\_add\_line\_item filter
- ⚡️ Improved Cancelled WooCommerce orders will now update their ActiveCampaign Deep Data total to $0.00
- Updated for compatibility with Abandoned Cart Addon v1.7.0

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-9) 1.17.9 - 5/31/2021

- ✨ New Added "MemberPress transactions (Ecommerce addon)" batch operation
- 🔧 Fixed Fixed MemberPress integration trying to sync transactions for users with no contact record
- 🔧 Fixed Fixed errors when WP Fusion wasn't connected to a CRM
- 🔧 Fixed Fixed Ontraport tax object options not populating in dropdowns
- ✨ New Added wpf\_ecommerce\_activecampaign\_add\_deal\_note filer
- ✨ New Added wpf\_ecommerce\_hubspot\_add\_line\_item filter
- ✨ New Added wpf\_ecommerce\_hubspot\_change\_deal\_stage filter

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-8) 1.17.8 - 3/23/2021

- ✨ New Added wpf\_ecommerce\_zoho\_add\_product filter
- ✨ New Added wpf\_ecommerce\_zoho\_add\_deal filter
- ✨ New Added wpf\_ecommerce\_activecampaign\_add\_deep\_data
- ✨ New Added note to the settings about WP Fusion-customer tag being applied with ActiveCampaign
- ✨ New Added note to the logs when an EDD order was blocked from being synced due to the payment gateway not being enabled
- 🔧 Fixed Fixed ActiveCampaign Deep Data not respecting Staging Mode

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-7) 1.17.7 - 2/15/2021

- ⚡️ Improved Improved handling for duplicate SKUs with HubSpot
- 🔧 Fixed Fixed HubSpot not loading more than 100 products

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-6) 1.17.6 - 2/10/2021

- ✨ New Added tracking code slug setting for NationBuilder
- 🔧 Fixed Fixed PHP warning loading tax rates from Ontraport when there are no tax rates in the account
- 🔧 Fixed Fixed PHP warning loading available products from HubSpot

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-5) 1.17.5 - 1/12/2021

- 🔧 Fixed Fixed error updating WP Fusion and the Ecommerce Addon simultaneously
- 🔧 Fixed Fixed error activating the Enhanced Ecommerce addon with WP Fusion Lite

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-4) 1.17.4 - 1/8/2021

- ✨ New Added download image URL to ecommerce data with Easy Digital Downloads
- ✨ New Added download description to ecommerce data with Easy Digital Downloads and supported CRMs
- ⚡️ Improved You can now prevent an order from being synced to the CRM by returning false from the wpf\_ecommerce\_order\_args filter
- 🔧 Fixed Fixed HubSpot not loading more than 10 products

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-3) 1.17.3 - 12/31/2020

- ✨ New Added super secret debug tool to clear \_wpf\_ec\_complete flag from Give donations
- ✨ New Added wpf\_ecommerce\_order\_args filter
- ⚡️ Improved ActiveCampaign integration will now give a registered user's email address priority over the billing email
- ActiveCampaign module will now record a warning if a transaction comes through but neither Deep Data nor Deals are enabled
- 🔧 Fixed Fixed Give export operation ignoring renewal orders
- 🔧 Fixed Fixed Drip invoice ID not being saved correctly after logging a new order

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-2) 1.17.2 - 11/30/2020

- 🔧 Fixed Fixed uncaught error when registering a new product with HubSpot failed
- 🔧 Fixed Fixed PHP notices when syncing ActiveCampaign deal owners

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17-1) 1.17.1 - 11/30/2020

- ⚡️ Improved When ActiveCampaign gives a "The ecomOrder already exists in the system." error, WP Fusion will try and update the existing order
- ⚡️ Improved Disabled the Total Revenue field when ActiveCampaign Deep Data or Drip Shopper Activity was in use
- 🔧 Fixed Fixed "Sync Attributes" in WooCommerce being enabled despite being un-checked

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-17) 1.17 - 11/23/2020

- ✨ New Added support for products and line items with HubSpot

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-16-2) 1.16.2 - 11/19/2020

- ✨ New Added support for tax objects with Ontraport
- ✨ New Added option to send product prices tax-inclusive with Ontraport
- ✨ New Added Fees support to Infusionsoft integration
- ✨ New Added Give Donations (Ecommerce addon) batch operation
- ⚡️ Improved Improved logging for deal status changes

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-16-1) 1.16.1 - 8/25/2020

- ✨ New Added Drip for WooCommerce compatibility notice
- 🔧 Fixed Fixed "The ecomOrder currency was not provided" errors with ActiveCampaign and free EDD orders
- 🔧 Fixed Fixed order totals not syncing correctly with Infusionsoft
- 🔧 Fixed Fixed product prices not syncing correctly when prices included tax

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-16) 1.16 - 6/24/2020

- ✨ New Added batch operation for EDD orders
- ✨ New Added compatibility notices when other CRM ecommerce plugins are detected
- Refactored ActiveCampaign integration
- ⚡️ Improved Improved error handling for ActiveCampaign Deep Data and Customer IDs

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-15-1) 1.15.1 - 5/2/2020

- 🔧 Fixed Fixed "No method matching arguments" error recording payments in Infusionsoft

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-15) 1.15 - 4/27/2020

- Order status changes in WooCommerce will now update order statuses in Drip
- ✨ New Added wpf\_ecommerce\_hubspot\_add\_engagement filter
- ✨ New Added wpf\_ecommerce\_hubspot\_add\_deal filter
- 🔧 Fixed Fixed MemberPress free trials with 0 Net creating orders
- Restrict Content Pro integration bugfixes

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-14-3) 1.14.3 - 3/26/2020

- ✨ New Added support for syncing product addons with Ontraport
- ActiveCampaign integration will now mark carts as recovered if a pending cart is found
- 🔧 Fixed Fixed syncing WooCommerce order fees with negative values to Drip

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-14-2-2-11-2020) 1.14.2 = 2/11/2020

- 🔧 Fixed Fixed crash created while logging error from a failed API call to register a product in Zoho

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-14-1-2-3-2020) 1.14.1 = 2/3/2020

- 🔧 Fixed Fixed "Invalid data for Amount" error with Zoho

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-14) 1.14 - 1/31/2020

- ✨ New Added MemberPress support
- ✨ New Added support for Products with Zoho
- ✨ New Added support for assigning a default owner to new ActiveCampaign deals
- ActiveCampaign pipelines / stages are no longer limited to 20
- WooCommerce integration will now inherit store settings regarding product prices being inclusive vs exclusive of tax

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-13-6) 1.13.6 - 1/6/2020

- ✨ New Added shipping support to Ontraport integration
- Zoho integration will now attempt to assign a new deal to the account of an existing contact
- Removed taxes, shipping, and discounts as separate products from ActiveCampaign Deep Data orders
- 🔧 Fixed Fixed error caused with WooCommerce Dynamic Pricing and Drip's Shopper Activity API
- 🔧 Fixed Fixed time zone offset calculation with ActiveCampaign

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-13-5) 1.13.5 - 11/25/2019

- 🔧 Fixed Fixes for line items and fees causing problems with missing product titles in Drip and ActiveCampaign

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-13-4) 1.13.4 - 11/21/2019

- WooCommerce variation images will now be sent in detailed order data
- ✨ New Added option to disable syncing product attributes with WooCommerce

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-13-3) 1.13.3 - 11/18/2019

- 🔧 Fixed Fixed bug with ActiveCampaign rejecting orders with incomplete tax data

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-13-2) 1.13.2 - 10/21/2019

- ✨ New Added support for Fees with WooCommerce
- ⚡️ Improved Improved discounts and shipping support for ActiveCampaign
- 🔧 Fixed Fixed conflict with Event Espresso Stripe gateway

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-13-1-10-9-2019) 1.13.1 = 10/9/2019

- 🔧 Fixed Fixed UTC+0 timezone causing errors with Drip and NationBuilder

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-13) 1.13 - 10/8/2019

- ✨ New Added NationBuilder integration
- 🔧 Fixed Fixed time zone calculation for occurred\_at with Drip

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-12) 1.12 - 9/18/2019

- ✨ New Added refund support to ActiveCampaign
- ✨ New Added Give (donations) support
- ✨ New Added batch tool for resyncing AC customer IDs
- Increased product image size sent to Drip and ActiveCampaign
- ⚡️ Improved Improved logging
- 🔧 Fixed Fixed error in Drip with line item descriptions longer than 255 characters

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-11) 1.11 - 8/26/2019

- ✨ New Added Zoho integration
- ✨ New Added product price re-calculation for Ontraport when discounts are used
- ✨ New Added support for custom WooCommerce order numbers with ActiveCampaign

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-10) 1.10 - 8/7/2019

- ✨ New Added Event Espresso support
- 🔧 Fixed Fixes for deleted products in WooCommerce

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-9-3) 1.9.3 - 7/28/2019

- ✨ New Added support for sale prices on products with Ontraport
- 🔧 Fixed Fixed additional "Properties Value is not an integer" warnings with Drip Events

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-9-2) 1.9.2 - 7/8/2019

- ✨ New Added refund support for Infusionsoft
- ✨ New Added option to send product prices tax-inclusive
- ✨ New Added product image to ActiveCampaign order payload
- ✨ New Added product categories to Drip Shopper Activity data
- ✨ New Added product image to Drip order payload
- ✨ New Added support for free trials in Woo Subscriptions

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-9-1) 1.9.1 - 5/17/2019

- AgileCRM performance improvements
- Updated Drip with option for newer v3 API
- 🔧 Fixed Fixed "Properties value is not an integer" error in Drip

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-9) 1.9 - 4/12/2019

- ✨ New Added LifterLMS support

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-8-2) 1.8.2 - 4/8/2019

- AgileCRM bugfixes

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-8-1) 1.8.1 - 4/6/2019

- Order date tweaks in WooCommerce
- Better date handling for orders with AgileCRM
- 🔧 Fixed Fix for variation product IDs not saving

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-8) 1.8 - 2/15/2019

- ✨ New Added refunds support to Ontraport
- ✨ New Added option to update deal stages in HubSpot when WooCommerce order status is changed

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-7-3) 1.7.3 - 2/5/2019

- ✨ New Added tax line item support with Drip
- Drip now receives proper order date (and time zone)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-7-2) 1.7.2 - 1/25/2019

- Error handling for WooCommerce order meta data that is not a meta object

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-7-1) 1.7.1 - 1/23/2019

- Option for turning off Conversion tracking with Drip
- ✨ New Added product ID into product dropdowns for Infusionsoft / Ontraport
- Integration classes can now be accessed via wp\_fusion\_ecommerce()->integrations->woocommerce (etc)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-7) 1.7 - 12/24/2018

- Hubspot integration
- Restrict Content Pro integration
- Error handling for "The integration already exists in the system." message with ActiveCampaign
- ✨ New Added EDD payment gateway selector
- ✨ New Added SKU to Ontraport product data

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-6-2) 1.6.2 - 11/11/2018

- ✨ New Added bulk processing tool for WooCommerce orders
- 🔧 Fixed Fix for & symbols in product names causing errors with Infusionsoft
- ✨ New Added support for EDD Discounts Pro

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-6-1) 1.6.1 - 10/23/2018

- Bugfixes for addons / variations handling with Infusionsoft

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-6) 1.6 - 9/13/2018

- ✨ New Added support for WooCommerce Addons in ecommerce data
- Improvements to support changes in Drip's ecommerce functionality
- Amounts less than a dollar now syncing correctly with ActiveCampaign's Deep Data

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-5-1) 1.5.1 - 2/26/2018

- AgileCRM bugfixes
- 🔧 Fixed Fixed product lookup issues for Infusionsoft products with ampersands in the title

= 1.5 - 2/3/2018 =

- ✨ New Added AgileCRM ecommerce support
- Addded Ontraport referral tracking

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-4) 1.4

- ✨ New Added Drip ecommerce support
- 🔧 Fixed Fixed GMT offset issues with Infusionsoft

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-3-5) 1.3.5

- Order dates now use the date from the order instead of the current time
- Ontraport bugfixes

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-3-4) 1.3.4

- Russian character encoding fixes
- ✨ New Added admin tools for resetting wpf\_ec\_complete hooks on WooCommerce / EDD orders
- Prevent duplicate orders being sent on WooCommerce subscription auto-renewals

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-3-3) 1.3.3

- Disabled invoices being sent by Ontraport
- ✨ New Added backwards compatibility support for WC < 3.0
- Integrated WPF logging tools
- AC Deep Data integrations now triggers the "Makes A Purchase" action
- ✨ New Added error handling and logging for API failures

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-3-2) 1.3.2

- Misc. ActiveCampaign improvements
- 🔧 Fixed Fixed Infusionsoft affiliate cookie expiration

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-3-1) 1.3.1

- Bugfixes for WooCommerce 3.0.3

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-3) 1.3

- ✨ New Added Ontraport ecommerce integration
- Updated to support WooCommerce 3.0

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-2) 1.2

- ✨ New Added ActiveCampaign Deep Data Integration
- Better support for coupons using Easy Digital Downloads
- ✨ New Added support for Infusionsoft referral partner links

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-1) 1.1

- ✨ New Added support for EDD Recurring Payments

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#1-0) 1.0

- Further fixes to Asian character encodings

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-9) 0.9

- Updates for Woo Subscriptions 2.x

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-8) 0.8

- Support for Infusionsoft products with special character encodings

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-7) 0.7

- Support for WooCommerce variations
- Ability to manually associate WooCommerce products with Infusionsoft products
- Speed improvements for ActiveCampaign users with no configured sales pipelines

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-6) 0.6

- Pull revenue field before calculating if local record is empty
- Better handling for batch processing of old orders

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-5) 0.5

- 🔧 Fixed Fix for special characters in product names in Infusionsoft

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-4) 0.4

- Bugfixes

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-3) 0.3

- ✨ New Added ActiveCampaign integration

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-2) 0.2

- ✨ New Added Woo Subscriptions support

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-tracking-changelog/\#0-1) 0.1

- Initial release

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