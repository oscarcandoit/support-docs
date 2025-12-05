---
url: "https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/"
title: "Ontraport Enhanced Ecommerce"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#content)

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

# Ontraport Enhanced Ecommerce

- Published onOctober 8, 2019
- Last updated on August 8, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Enhanced Ecommerce](https://wpfusion.com/documentation/#ecommerce-tracking)
- /
- Ontraport Enhanced Ecommerce

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#overview) Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) now supports sending ecommerce transaction data to your Ontraport account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#global-setup) Global Setup

There are several global settings for Enhanced Ecommerce with Ontraport. These are found within the WP Fusion settings, on the Enhanced Ecommerce tab. The default settings are appropriate for most stores, but you can change them if needed.

[![](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-global-1-1024x781.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-global-1.jpg)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#ontraport-pricing) Ontraport Pricing

WP Fusion can send product prices to Ontraport in two different ways:

- **Use product prices as set in Ontraport:** With this setting WP Fusion will just send the ID of the product that was purchased, and Ontraport will calculate the order totals based on the product price that’s set in Ontraport. This is useful if you have a multi-currency store or a store in a different currency than Ontraport supports. For example a product that sells for €100 on your site could be configured in Ontraport with a price of $111. When someone purchases the product, $111 would be recorded on the invoice in Ontraport.
- **Use product prices as paid at checkout:** This setting sends the product prices as they’re paid at checkout. With this setting a €100 purchase in WooCommerce would be recorded as a $100 purchase in Ontraport. It also works with discounts, so a $100 purchase in WooCommerce with a 20% off coupon would show as $80 in Ontraport.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#shipping-product) Shipping Product

Ontraport doesn’t currently have an API method for tracking shipping charges. To get around this, WP Fusion can create a pseudo-product named “Shipping” which is added to your invoices and includes the shipping amount paid by the customer.

[![](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-shipping-1024x538.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-shipping.jpg)

By default WP Fusion will create a new product to record shipping charges automatically during checkout. To disable this feature select _Don’t Track Shipping_ from the dropdown. You can also select a custom product to use to record shipping charges.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#taxes) Taxes

By default WP Fusion excludes taxes from product prices sent over the API. However if you sell your products tax-inclusive (for example in Australia) you can select **Include in product prices** to send the product prices tax-inclusive.

Or, optionally, you can select a pre-existing tax object in Ontraport to be used for taxes on your products.

**Note:** If you’ve just created a tax object in Ontraport, click _Resynchronize Available Tags and Fields_ from the Setup tab and reload the page to load the new tax object into the dropdowns.

[![](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-with-tax-1024x656.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecommerce-with-tax.jpg) A WooCommerce purchase synced into Ontraport using WP Fusion, using a tax object with a 10% tax rate

When a tax object is selected, WP Fusion will send your product prices to Ontraport without tax, and Ontraport will then calculate the tax on the order based on the tax rate set on your tax object.

As an example, let’s imagine that **we’re selling a Hoodie for $5, and there’s a 10% tax configured in WooCommerce**. For each of the options in WP Fusion, the data would show in Ontraport as:

**Don’t sync taxes:** Hoodie: $5

Tax: $0 ($0.50 tax is ignored)

**Include in product prices:** Hoodie: $5.50 ($5 + $0.50 tax)

Tax: $0

**Existing Ontraport tax object set to 10%:** Hoodie: $5

Tax: $0.50 (calculated by Ontraport)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#sync-attributes) Sync Attributes

Some WooCommerce extensions (like WooCommerce Product Addons) collect additional information from the customer for certain products. For example a ring could have a custom engraving, or a shirt might have a size and a color.

Enabling **Sync Attributes** will add selected attributes as separate line items to the invoice in Ontraport. It’s recommended to leave this disabled unless you need to see that data in Ontraport.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#product-setup) Product Setup

After you install the Ecommerce Addon (or update to the latest version), WP Fusion will load a list of all configured products in your Ontraport account.

When you go to configure a product in one of our supported ecommerce plugins, you’ll see a new dropdown field where you can link a product on your store with a product already in your Ontraport account.

[![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-product-config-1024x437.jpg)](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-product-config.jpg)

If you don’t already have the products created in Ontraport, don’t worry… WP Fusion will automatically create them for you at the time of checkout, based on the existing details. WP Fusion will intelligently detect variable products in WooCommerce and create additional Ontraport products based on those variations.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#how-it-works) How it Works

When a customer checks out on your site, WP Fusion will create a new transaction in Ontraport with the products purchased, the quantities, and total sale value. This sale data will be tied to the contact record who made the purchase.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#how-it-looks) How it Looks

[![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-products-1024x300.jpg)](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-products.jpg) Products dynamically added to the Ontraport products list, including variable products.[![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-purchases-1024x326.jpg)](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-purchases.jpg) Purchases will be tracked in Ontraport’s purchase logs and can be used in all reports.[![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-customer-profile-1024x410.jpg)](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-ecommerce-customer-profile.jpg) You can also view a customer’s purchase history from the Purchases tab within their contact record.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#video-enhanced-ecommerce-ontraport) Video – Enhanced Ecommerce – Ontraport

Enhanced Ecommerce - Ontraport from Very Good Plugins on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/920498600-3a8a8f956959c0d526f3fe49bbdbcd10b5251ef524d3d7a797e070af104e3b86-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/41604818_60x60?sig=ace69b6b1138b8ce1b943b533c22a573a68660be0cb4d8b06fa1d5d796d9e271&v=1&region=us)](https://vimeo.com/verygoodplugins?fl=pl&fe=po)

Play

00:00

03:14

Settings

QualityAuto

Picture-in-PictureFullscreen

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#refunds) Refunds

If you refund an order in WooCommerce, or change an order’s status to Refunded, the transaction will automatically be updated in Ontraport.

![](https://wpfusion.com/wp-content/uploads/2017/04/ontraport-order-refunded-1024x289.jpg)

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#affiliates-referral-partners) Affiliates / referral partners

WP Fusion will automatically detect Ontraport partner tracking cookies and will associate them with new orders sent over the API.

This will work as long as the `oprid` cookie is set, which requires [Ontraport site tracking](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/) to be enabled on your site.

[![](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecom-referrals-1024x304.jpg)](https://wpfusion.com/wp-content/uploads/2019/10/ontraport-ecom-referrals-scaled.jpg)

When a referral is recorded for an order it will be logged in the [WP Fusion logs](https://wpfusion.com/documentation/getting-started/activity-logs/) with a message, “Recording referral for partner ID”.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#modifying-the-api-data) Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to Ontraport with an ecommerce order. The filter is `wpf_ecommerce_ontraport_add_transaction`.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/\#custom-affiliate-logic) Custom affiliate logic

As an example, in this snippet we limit affiliate commissions based on the products in the order.

```php
/**
 * Conditionally set the affiliate ID for a transaction.
 *
 * @link https://api.ontraport.com/doc/#the-order-object
 *
 * @param array $order_data The order data.
 * @param int   $order_id   The order ID in WordPress.
 * @return array The order data.
 */
function conditionally_set_affiliate( $order_data, $order_id ) {

	/* $order_data is structured like:

		$order_data = array(
			'objectID'          => 0,
			'contact_id'        => 123,
			'chargeNow'         => 'chargeLog',
			'trans_date'        => 1686818840000,
			'invoice_template'  => 0,
			'delay'             => 0,
			'external_order_id' => 1234, // order ID in WP.
			'oprid'             => 5, // affiliate ID.
			'offer'             => array(
				'products' => array(
					array(
						'name'     => 'Product name',
						'id'       => 123,
						'quantity' => 1,
						'sku'      => 'SKU',
					),
				),
			),
		);
	*/

	// If the order contains a product named "Widget", disable affiliate referrals.

	if ( isset( $order_data['oprid'] ) ) {

		// An affiliate is set.

		foreach ( $order_data['offer']['products'] as $product ) {

			if ( 'Widget' === $product['name'] ) {
				unset( $order_data['oprid'] );
			}
		}
	}

	return $order_data;

}

add_filter( 'wpf_ecommerce_ontraport_add_transaction', 'conditionally_set_affiliate', 10, 2 );
```

In this case, if the order has an affiliate ID set, and it contains a product called “Widget”, then the affiliate ID is removed from the order data and no referral will be awarded.

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

- [Overview](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#overview)
- [Global Setup](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#global-setup)
- [Ontraport Pricing](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#ontraport-pricing)
- [Shipping Product](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#shipping-product)
- [Taxes](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#taxes)
- [Sync Attributes](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#sync-attributes)
- [Product Setup](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#product-setup)
- [How it Works](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#how-it-works)
- [How it Looks](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#how-it-looks)
- [Video - Enhanced Ecommerce - Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#video-enhanced-ecommerce-ontraport)
- [Refunds](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#refunds)
- [Affiliates / referral partners](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#affiliates-referral-partners)
- [Modifying the API data](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#modifying-the-api-data)
- [Custom affiliate logic](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/#custom-affiliate-logic)

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