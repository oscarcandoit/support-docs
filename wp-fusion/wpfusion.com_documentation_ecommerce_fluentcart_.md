---
url: "https://wpfusion.com/documentation/ecommerce/fluentcart/"
title: "FluentCart | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/fluentcart/#content)

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

# FluentCart

- Published onOctober 14, 2025
- Last updated on November 13, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- FluentCart

## Overview

WP Fusion’s FluentCart integration connects FluentCart orders, customers, and subscriptions to your CRM/marketing automation tool. It lets you:

- **Apply or remove tags** in your CRM when FluentCart events occur (e.g. order paid, refunded, subscription cancelled).
- **Create or update contacts** in your CRM when customers check out, even if they don’t have a WordPress account.
- **Sync order and customer meta** (billing/shipping details, totals, payment info) into **WP Fusion fields** and onward into your CRM.
- **Sync subscription meta** (status, next billing date, recurring amount) to your CRM.
- **Batch export** historical FluentCart orders to your CRM (backfill).
- **Manually reprocess** a specific order from the FluentCart admin screen if needed.

> At a glance: You’ll configure product‑level “feeds” in FluentCart to define which **events** trigger which **tags** and (optionally) **custom‑field sync** via WP Fusion.

## Requirements

- WordPress + FluentCart active.
- WP Fusion **3.47.0+** (integration introduced in October 2025).
- Your CRM connection is configured in **WP Fusion → Settings → Setup**.

> Tip: Keep all plugins updated for best compatibility and performance.

## How it works

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#3-1-product%e2%80%91level-feeds-in-fluentcart) 3.1 Product‑level feeds in FluentCart

The integration registers **WP Fusion** as a FluentCart **product‑level integration**. For each product you can create one or more **feeds**:

- **Feed Title** — your internal label (e.g. “Apply tags on Purchase”).
- **Apply Tags** — tags to add in your CRM when selected events occur.
- **Remove Tags** — tags to remove when selected events occur (useful for state changes, e.g. cancelled/refunded).
- **Sync Custom Fields** — toggle to push order/customer meta to CRM when the feed runs.

> Scope: The integration is restricted to **product** scope in FluentCart. Global‑level actions are intentionally disabled — manage strategy per product for precision.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#events-triggers) Events (triggers)

WP Fusion reads FluentCart’s **event triggers** list and exposes them in the feed UI. Common examples include:

- Order created / **order paid**
- Order status changes (e.g. **completed**, **refunded**, **failed**, **cancelled**)
- Subscription created / **renewed** / **expired** / **cancelled**

> Note: The exact event names shown come from FluentCart’s internal trigger list. Choose the ones that match your automation needs.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#contact-handling) Contact handling

When an event fires for an order, WP Fusion will:

1. **Find the contact** by WordPress user ID (if present) or by order email.
2. **Create the contact** if none exists (email, first name, last name), then continue.
3. **Apply/Remove tags** as configured in the feed.
4. If **Sync Custom Fields = Yes**, push the mapped order/customer fields (see §4) to the contact.

“Revoke” events (refunds/cancellations) trigger tag **removals** as configured in the feed.

## Field mapping (what data can sync)

The integration registers a **FluentCart** field group in WP Fusion so you can map these to CRM fields. Highlights include:

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#customer-billing-shipping) Customer, billing & shipping

- `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_country`, `billing_postcode`
- `shipping_address_1`, `shipping_address_2`, `shipping_city`, `shipping_state`, `shipping_country`, `shipping_postcode`
- `phone`

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#order-payment-meta) Order & payment meta

- `customer_id` (FluentCart customer record ID)
- `order_date`
- `payment_method`, `payment_method_title`, `payment_status`
- `order_status`, `order_type`
- `subtotal`, `discount_total`, `tax_total`, `shipping_total`, `shipping_tax`, `discount_tax`
- `manual_discount_total`, `coupon_discount_total`
- `total_amount`, `total_paid`, `total_refund`
- `receipt_number`, `invoice_no`
- `mode` (test/live)

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#fulfillment-shipping) Fulfillment & shipping

- `fulfillment_type`, `shipping_status`, `shipping_required`
- `shipping_method`

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#subscription-meta-if-enabled-in-fluentcart) Subscription meta (if enabled in FluentCart)

- `subscription_status`
- `next_billing_date`
- `recurring_amount`

> Notes
>
> - Some entries are marked “pseudo” in WP Fusion (calculated/derived values) but still sync to CRM as simple text/number fields.
> - Subscription **tagging** is handled by the main integration feeds; the **subscription meta** above is synced via a subscription‑specific helper for field updates.

## Setup — step by step

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#step-1-connect-your-crm-in-wp-fusion) Step 1: Connect your CRM in WP Fusion

WP Fusion → **Settings → Setup**. Authenticate your CRM and confirm tags are loading in **Available Tags**.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#step-2-enable-the-fluentcart-integration) Step 2: Enable the FluentCart integration

WP Fusion → **Settings → Integrations** → enable **FluentCart**. Save.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#step-3-map-fields-optional-but-recommended) Step 3: Map fields (optional but recommended)

WP Fusion → **Contact Fields**. Locate the **FluentCart** field group and map any fields you want to store in your CRM (e.g. `total_amount` → “Last Order Total”). Save.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#step-4-create-product%e2%80%91level-feeds-in-fluentcart) Step 4: Create product‑level feeds in FluentCart

FluentCart → **Products → (Edit a product) → Integrations (WP Fusion)**:

1. **Add Feed**
2. Set **Feed Title** (e.g. “Apply tags on Order Paid”).
3. Choose your **Events** (e.g. _Order Paid_ and _Order Completed_).
4. Select **Apply Tags** (e.g. `Purchased • {Product}`) and optional **Remove Tags**.
5. Toggle **Sync Custom Fields** = **Yes** to push order/customer meta when this feed runs.
6. Save. Repeat per product as needed.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#step-5-test) Step 5: Test

- Place a test order (use your gateway’s sandbox).
- In WP Fusion **Logs**, confirm the event, tags applied/removed, and any field sync.
- In your CRM, verify the contact, tags, and mapped fields.

## Recipes (common automations)

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#a-first%e2%80%91purchase-onboarding) A) First‑purchase onboarding

- **Event:** Order Paid
- **Apply Tags:**`Customer`, `Purchased • {Product}`
- **Automation:** CRM sends onboarding + request for review after 7 days.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#b-refund-cancellation-clean%e2%80%91up) B) Refund / cancellation clean‑up

- **Event:** Order Refunded / Cancelled (revoke)
- **Remove Tags:**`Active Customer`, `Purchased • {Product}`
- **Apply Tags:**`Refunded`
- **Automation:** CRM triggers re‑engagement sequence.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#c-subscription-lifecycle) C) Subscription lifecycle

- **Event:** Subscription Renewed
- **Apply Tags:**`Subscription • Active`
- **Fields:**`subscription_status = active`, `next_billing_date` updated
- **Automation:** CRM postpones renewal reminders, sends usage tips.

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#d-vip-high%e2%80%91value-segmentation) D) VIP / high‑value segmentation

- **Event:** Order Paid (field sync on)
- **Fields:** Update `total_amount`, increment `total_paid`, maintain `lifetime_spend` (in CRM logic)
- **Automation:** When lifetime spend > threshold → apply `VIP` tag.

## Admin tools

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#7-1-manual-reprocess-single-order) 7.1 Manual reprocess (single order)

From the FluentCart order admin screen, use **WP Fusion → Reprocess** to re‑run the integration for that order (helpful after changing tag rules or field mappings).

### [\#](https://wpfusion.com/documentation/ecommerce/fluentcart/\#7-2-batch-export-historical-backfill) 7.2 Batch export (historical backfill)

Use WP Fusion’s **FluentCart Batch** tool to process past orders and send data to your CRM. Recommended before going live so segments are accurate from day one.

## Troubleshooting

**Tags not applied**

- Ensure the product has at least one **WP Fusion feed** with the relevant **event** selected.
- Confirm the CRM connection status in WP Fusion settings.
- Check **WP Fusion → Logs** for the corresponding order event.

**Fields didn’t sync**

- In the product feed, set **Sync Custom Fields = Yes**.
- Verify field mappings in **WP Fusion → Contact Fields**.
- Confirm the order actually contains the data (e.g. shipping not present for digital goods).

**Wrong contact matched**

- WP Fusion prefers WordPress user → else looks up by email. Ensure emails are unique and consistent across orders and CRM.

**Subscription tags OK, but fields aren’t updating**

- Tagging is event‑based (feeds). Subscription **fields** (`subscription_status`, `next_billing_date`, `recurring_amount`) are synced by a separate subscription updater; confirm subscriptions are enabled and events are firing.

**Need to remove tags on refund**

- Add a feed on the same product for **Refunded/Cancelled** events and configure **Remove Tags** accordingly.

## Reference — available fields

> Map these in **WP Fusion → Contact Fields** under the **FluentCart** group.

**Customer & contact**

`customer_id`, `phone`

**Billing**

`billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_country`, `billing_postcode`

**Shipping**

`shipping_address_1`, `shipping_address_2`, `shipping_city`, `shipping_state`, `shipping_country`, `shipping_postcode`, `shipping_required`, `shipping_status`, `shipping_method`, `fulfillment_type`

**Order & payment**

`order_date`, `order_type`, `order_status`, `payment_status`, `payment_method`, `payment_method_title`, `mode`, `receipt_number`, `invoice_no`

**Totals**

`subtotal`, `discount_total`, `manual_discount_total`, `coupon_discount_total`, `tax_total`, `shipping_total`, `shipping_tax`, `discount_tax`, `total_amount`, `total_paid`, `total_refund`

**Subscriptions**

`subscription_status`, `next_billing_date`, `recurring_amount`

## FAQ

**Q: Where do I configure when tags apply?**

A: Per‑product, in FluentCart’s Integrations (WP Fusion) tab. Create one or more feeds and select the event(s) that should trigger tagging and (optionally) field sync.

**Q: Can I run actions globally across all products?**

A: The integration is designed for product scope (more control). Create feeds on the specific products you want to automate.

**Q: Can WP Fusion create contacts for guest checkouts?**

A: Yes. If no WordPress user is found, WP Fusion will create a new contact by order email and name.

**Q: Does it support refunds/cancellations?**

A: Yes. Configure a feed for the appropriate revoke events and use **Remove Tags** and/or alternate **Apply Tags** like `Refunded`.

**Q: Which subscription fields are available?**

A: `subscription_status`, `next_billing_date`, and `recurring_amount`. Tagging for subscription start/renewal/cancel is handled by your feeds.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/fluentcart/#overview)
- [Requirements](https://wpfusion.com/documentation/ecommerce/fluentcart/#requirements)
- [How it works](https://wpfusion.com/documentation/ecommerce/fluentcart/#how-it-works)
- [3.1 Product‑level feeds in FluentCart](https://wpfusion.com/documentation/ecommerce/fluentcart/#3-1-product%e2%80%91level-feeds-in-fluentcart)
- [Events (triggers)](https://wpfusion.com/documentation/ecommerce/fluentcart/#events-triggers)
- [Contact handling](https://wpfusion.com/documentation/ecommerce/fluentcart/#contact-handling)
- [Field mapping (what data can sync)](https://wpfusion.com/documentation/ecommerce/fluentcart/#field-mapping-what-data-can-sync)
- [Customer, billing & shipping](https://wpfusion.com/documentation/ecommerce/fluentcart/#customer-billing-shipping)
- [Order & payment meta](https://wpfusion.com/documentation/ecommerce/fluentcart/#order-payment-meta)
- [Fulfillment & shipping](https://wpfusion.com/documentation/ecommerce/fluentcart/#fulfillment-shipping)
- [Subscription meta (if enabled in FluentCart)](https://wpfusion.com/documentation/ecommerce/fluentcart/#subscription-meta-if-enabled-in-fluentcart)
- [Setup — step by step](https://wpfusion.com/documentation/ecommerce/fluentcart/#setup-step-by-step)
- [Step 1: Connect your CRM in WP Fusion](https://wpfusion.com/documentation/ecommerce/fluentcart/#step-1-connect-your-crm-in-wp-fusion)
- [Step 2: Enable the FluentCart integration](https://wpfusion.com/documentation/ecommerce/fluentcart/#step-2-enable-the-fluentcart-integration)
- [Step 3: Map fields (optional but recommended)](https://wpfusion.com/documentation/ecommerce/fluentcart/#step-3-map-fields-optional-but-recommended)
- [Step 4: Create product‑level feeds in FluentCart](https://wpfusion.com/documentation/ecommerce/fluentcart/#step-4-create-product%e2%80%91level-feeds-in-fluentcart)
- [Step 5: Test](https://wpfusion.com/documentation/ecommerce/fluentcart/#step-5-test)
- [Recipes (common automations)](https://wpfusion.com/documentation/ecommerce/fluentcart/#recipes-common-automations)
- [A) First‑purchase onboarding](https://wpfusion.com/documentation/ecommerce/fluentcart/#a-first%e2%80%91purchase-onboarding)
- [B) Refund / cancellation clean‑up](https://wpfusion.com/documentation/ecommerce/fluentcart/#b-refund-cancellation-clean%e2%80%91up)
- [C) Subscription lifecycle](https://wpfusion.com/documentation/ecommerce/fluentcart/#c-subscription-lifecycle)
- [D) VIP / high‑value segmentation](https://wpfusion.com/documentation/ecommerce/fluentcart/#d-vip-high%e2%80%91value-segmentation)
- [Admin tools](https://wpfusion.com/documentation/ecommerce/fluentcart/#admin-tools)
- [7.1 Manual reprocess (single order)](https://wpfusion.com/documentation/ecommerce/fluentcart/#7-1-manual-reprocess-single-order)
- [7.2 Batch export (historical backfill)](https://wpfusion.com/documentation/ecommerce/fluentcart/#7-2-batch-export-historical-backfill)
- [Troubleshooting](https://wpfusion.com/documentation/ecommerce/fluentcart/#troubleshooting)
- [Reference — available fields](https://wpfusion.com/documentation/ecommerce/fluentcart/#reference-available-fields)
- [FAQ](https://wpfusion.com/documentation/ecommerce/fluentcart/#faq)

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