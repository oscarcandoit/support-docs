---
url: "https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/"
title: "Hubspot Enhanced Ecommerce"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#content)

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

# HubSpot Enhanced Ecommerce

- Published onDecember 24, 2018
- Last updated on August 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Enhanced Ecommerce](https://wpfusion.com/documentation/#ecommerce-tracking)
- /
- HubSpot Enhanced Ecommerce

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#overview) Overview

WP Fusion’s Enhanced Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data as Deals to your [HubSpot](https://wpfusion.com/go/hubspot) account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#getting-started) Getting started

Once you install the addon, Deals will automatically be added to Hubspot when someone makes a purchase on your site.

The deal title will be name of the order in WooCommerce (or other supported ecommerce plugin), and the deal value will be set to the total amount of the sale.

The default stage for new deals is _Sales Pipeline » Closed Won_, but you can change this via the **Enhanced Ecommerce** tab in the WP Fusion settings.

[![screenshot of the wp fusion settings interface for hubspot enhanced ecommerce. options include record type (deals or orders) and pipeline/stage selection. sync products toggle for adding purchased items to hubspot deals is shown. perfect for optimizing your seo strategy with hubspot integration.](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-1-4-1024x578.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-1-4.jpg)

If you’ve just added a new pipeline or stage, click _Resynchronize Available Lists and Fields_ on the **Setup** tab to load the latest values.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#deal-owner-new-in-v1-26-1) Deal Owner (New in v1.26.1)

You can optionally assign a default owner to all new deals created in HubSpot. This is useful if you want deals automatically assigned to a specific sales representative or team member.

To set up a default deal owner:

1. Navigate to the **Enhanced Ecommerce** tab in the WP Fusion settings
2. In the **Default Deal Owner** dropdown, select the HubSpot user you want to assign as the owner for new deals
3. Save your settings

**Note:** The Default Deal Owner setting only applies when the Record Type is set to “Deals”. It does not apply to “Orders” as the HubSpot Commerce API does not currently support owner assignment for orders.

If you’ve just added new users to HubSpot, click _Resynchronize Available Lists and Fields_ on the **Setup** tab to load the latest owners.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#products) Products

Optionally you can have WP Fusion sync products from WooCommerce (or any other supported ecommerce plugin) to HubSpot, and add those products as line items on deals.

[![](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-4-1024x649.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-4.jpg) When “Sync Products” is enabled, products are automatically synced from WordPress to HubSpot at checkout

When you’ve enabled **Sync Products**, products will automatically be created in HubSpot as people check out in WordPress.

You can also manually associate WooCommerce and other products with HubSpot product IDs. For more info [see the Enhanced Ecommerce Overview documentation](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/#supported-plugins).

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#line-items) Line items

With **Sync Products** enabled, line items will also be synced to the HubSpot deal (but not created as HubSpot products).

HubSpot supports line items for shipping, taxes, and fees. HubSpot [does not support line items for discounts](https://developers.hubspot.com/docs/api/crm/line-items#create-a-line-item).

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#deals-vs-orders) Deals vs. Orders

By default, WP Fusion creates [Deals](https://knowledge.hubspot.com/records/create-deals) in HubSpot for each purchase or transaction in WordPress.

[Orders](https://knowledge.hubspot.com/integrations/view-the-order-object) are a new feature, which work very similarly to deals at the moment, but we hope will eventually be connected to the new [HubSpot Commerce portal](https://knowledge.hubspot.com/payments/manage-payments) for enhanced reporting and inventory management.

Orders are optimized for storing ecommerce data collected by third-party platforms, like Shopify or WordPress (via WP Fusion).

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#deals) Deals

**Pros:**

- Well tested with WP Fusion, in use for many years.
- Supports assigning a default owner to deals (new in v1.26.1).

**Cons:**

- Some terminology like “Deal” and “Close date” don’t match the terminology in WordPress.
- Deals cannot be associated with Carts.
- New ecommerce reporting features in HubSpot will be created for Orders and Carts, not deals.
- No native support for tax or shipping.
- Does not support discounts at all.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#orders) Orders

**Pros:**

- Will eventually have better reporting features than Deals.
- Better optimized for ecommerce orders placed via outside systems.
- Can be associated with Carts via the Abandoned Cart Addon (work in progress).
- Native support for tax, shipping, and discounts.

**Cons:**

- Relatively untested with WP Fusion, may still be bugs.
- At the moment functionally very similar to Deals, most reporting enhancements have yet to be released.
- Does not support owner assignment.

**Which should you choose?** We recommend existing stores to stick with Deals, however if you’re setting up a new site and want to (eventually) benefit from the enhanced reporting capabilities of Orders, then give Orders a try.

[![the HubSpot Commerce hub dashboard, styled with hubspots intuitive design, showcases bar charts: top left for monthly total payment volume; top right for paying customers monthly; bottom left for quarterly payment volume; and bottom right highlights yearly trends from 2020 to 2023.](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-commerce-hub-1024x708.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-commerce-hub-scaled.jpg) The [HubSpot Commerce Hub](https://knowledge.hubspot.com/payments/manage-payments) will eventually offer improved reporting for ecommerce orders and abandoned carts, but at the moment it only works with payments charged via HubSpot’s payment platform.

You can also switch the record type from the WP Fusion settings and export your [orders in bulk](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders) to create new Orders in HubSpot for all your historical orders in WordPress, when/if you eventually decide to switch.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#how-it-works) How it works

When a customer checks out on your site, WP Fusion will create a new deal in Hubspot with the order label, date, and invoice total. This sale data will be associated with the contact record who made the purchase.

If you’ve enabled **Sync Products**, then each of the products from the order will be synced to HubSpot with their name, price, and SKU. Each product will then be associated with the deal.

If you’ve configured a **Default Deal Owner**, the deal will be automatically assigned to that HubSpot user when created.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#multi-currency) Multi-currency

If you’re selling in multiple currencies, for example using [WooCommerce Multi-Currency](https://woocommerce.com/document/multi-currency/?aff=71266), WP Fusion can sync order totals to HubSpot in the currency used at checkout.

[![](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-multi-currency-1024x578.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-multi-currency.jpg) WP Fusion can sync deals to HubSpot from WooCommerce in multiple currencies.

To set this up you will first need to [add any desired currencies to HubSpot](https://knowledge.hubspot.com/deals/add-and-edit-your-account-currencies) by going to Settings » Account Defaults » Currencies.

[![](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-manage-multiple-currencies-1024x450.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-manage-multiple-currencies.jpg) Additional currencies need to be added to HubSpot before they can be used by WP Fusion.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#how-it-looks) How it looks

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#woocommerce) WooCommerce

[![](https://wpfusion.com/wp-content/uploads/2020/07/hubspot_ecom-1024x493.png)](https://wpfusion.com/wp-content/uploads/2020/07/hubspot_ecom.png) The deal is added to HubSpot and associated with the contact record of the customer[![](https://wpfusion.com/wp-content/uploads/2018/12/Image-2020-07-07-at-10.19.30-PM.png)](https://wpfusion.com/wp-content/uploads/2018/12/Image-2020-07-07-at-10.19.30-PM.png) A note is added to the deal containing the products purchased (if “Add Note” is selected)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#event-espresso) Event Espresso

[![](https://wpfusion.com/wp-content/uploads/2018/12/event-espresso-enhanced-ecommerce-hubspot-1024x597.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/event-espresso-enhanced-ecommerce-hubspot.jpg) The Event Espresso transaction is synced to HubSpot as a deal, including the contact who made the registration, and a line item (in the right sidebar) indicating the ticket purchased.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#givewp) GiveWP

[![](https://wpfusion.com/wp-content/uploads/2018/12/give-enhanced-ecom-hubspot-1024x658.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/give-enhanced-ecom-hubspot.jpg) The WP Fusion metabox on each GiveWP payment shows the donor’s contact ID in HubSpot, as well as the deal ID for the donation.[![](https://wpfusion.com/wp-content/uploads/2018/12/givewp-enhanced-ecom-hubspot-deal-1024x598.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/givewp-enhanced-ecom-hubspot-deal-scaled.jpg) Individual deals in HubSpot include the order details, as well as line items for the donation form and amount.[![](https://wpfusion.com/wp-content/uploads/2018/12/givewp-enhanced-ecommerce-hubspot-pipelines-1024x633.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/givewp-enhanced-ecommerce-hubspot-pipelines.jpg) Visualize GiveWP donations in HubSpot, and automatically follow up with donors using pipeline automation.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#surecart) SureCart

[![screenshot](https://wpfusion.com/wp-content/uploads/2022/12/hubspot-surecart-enhanced-ecommerce-1024x501.jpg)](https://wpfusion.com/wp-content/uploads/2022/12/hubspot-surecart-enhanced-ecommerce-scaled.jpg) A SureCart order synced to HubSpot contains line items for the products purchased as well as the order title and total.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#video-enhanced-ecommerce-hubspot) Video – Enhanced Ecommerce – Hubspot

Enhanced Ecommerce - Hubspot from Very Good Plugins on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/920505162-89afd85238f1a78f018890022cf0d7a992dc5400afe4c7d8bfc376a2ef97696c-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/41604818_60x60?sig=ace69b6b1138b8ce1b943b533c22a573a68660be0cb4d8b06fa1d5d796d9e271&v=1&region=us)](https://vimeo.com/verygoodplugins?fl=pl&fe=po)

# More options

Play

00:00

01:15

SettingsPicture-in-PictureFullscreen

# Settings

QualityAuto

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#woocommerce-order-statuses) WooCommerce order statuses

If you’re using WooCommerce you can also associate WooCommerce order statuses with deal stages in HubSpot. This setting appears under the Enhanced Ecommerce tab in the WP Fusion settings.

[![WP Fusion's WooCommerce + HubSpot order status sync settings](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-3-1-1024x673.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-3-1.jpg) Map WooCommerce order statuses to HubSpot pipelines with WP Fusion.

When the order status is updated in WooCommerce, the deal stage will be updated in HubSpot.

**Warning:** It is recommended _not_ to sync **Pending payment** orders with HubSpot. When this is enabled, WP Fusion needs to create a contact record and a deal in HubSpot as soon as the pending order is created in WooCommerce, and then update it less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary. A more performant method of tracking incomplete payments is to use [Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/).

**Note:** By default, running a WooCommerce Orders (Ecommerce addon) export operation from the Advanced settings tab will only export “paid” orders (Processing or Completed). However, if you have enabled additional order statuses for sync to a HubSpot pipeline, then running the export will process those additional statuses as well.

This can be used to export refunded or cancelled orders to HubSpot in addition to the paid orders.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#modifying-the-api-data) Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to HubSpot with an ecommerce order.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#assign-a-specific-owner-to-deals) Assign a specific owner to deals

While you can set a default owner for all deals in the settings (as of v1.26.1), you can also programmatically assign owners based on custom logic using the `wpf_ecommerce_hubspot_add_deal` filter.

```php
function assign_deal_owner_by_product( $deal, $order_id ) {

	$order = wc_get_order( $order_id );

	// Example: Assign different owners based on product category
	foreach ( $order->get_items() as $item ) {
		$product = $item->get_product();

		if ( has_term( 'enterprise', 'product_cat', $product->get_id() ) ) {
			// Assign to enterprise sales rep (replace with actual HubSpot user ID)
			$deal['properties']['hubspot_owner_id'] = '12345678';
			break;
		}
	}

	return $deal;

}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'assign_deal_owner_by_product', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#ignore-free-orders) Ignore free orders

This example bypasses creating a deal for any free orders.

```php
function ignore_free_orders( $deal, $order_id ) {

	if ( empty( $deal['properties']['amount'] ) ) {
		return false;
	}

	return $deal;

}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'ignore_free_orders', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#exclude-taxes) Exclude taxes

This example subtracts the amount of tax paid (if applicable) from the deal total.

```php
function orders_tax_exclusive( $deal, $order_id ) {

	$order = wc_get_order( $order_id );

	$deal['properties']['amount'] -= $order->get_total_tax();

	return $deal;

}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'orders_tax_exclusive', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#custom-deal-fields) Custom deal fields

At the moment WP Fusion doesn’t have a visual interface for associating WordPress data with custom deal fields in HubSpot.

However you can still make this work using the `wpf_ecommerce_hubspot_add_deal` filter.

First go into the Properties editor in HubSpot and find the internal name for your property.

[![](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-deal-properties-1024x745.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-deal-properties.jpg)

In this case we’re going to update the Custom Deal Text Field field, which has an internal name of `custom_deal_text_field`, and update it with the edit link to a WooCommerce order.

```php
function my_custom_deal_properties( $deal, $order_id ) {

	/* $deal is structured like:

	$deal = array(
		'associations' => array(
			array(
				'to'    => array(
					'id' => 123, // contact ID.
				),
				'types' => array(
					array(
						'associationCategory' => 'HUBSPOT_DEFINED',
						'associationTypeId'   => 3,
					),
				),
			),
		),
		'properties'   => array(
			'deal_currency_code' => 'USD', // currency.
			'dealname'           => 'WooCommerce Order #123', // title.
			'pipeline'           => 'default', // pipeline.
			'dealstage'          => 'closedwon', // stage.
			'closedate'          => 1614617984000, // closed date - microseconds since the epoch
			'amount'             => 123.00, // total deal amount.
			'hubspot_owner_id'   => '45678', // owner ID (if set via settings or filter).
		),
	); */

	$deal['properties']['custom_deal_text_field'] = admin_url( 'post.php?post=' . $order_id . '&action=edit' ); // set the custom property.

	return $deal;

}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'my_custom_deal_properties', 10, 2 );
```

And here in HubSpot you can see that when WP Fusion creates the deal, the custom properties are automatically populated:

[![](https://wpfusion.com/wp-content/uploads/2020/09/hubspot-custom-deal-properties-1024x915.jpg)](https://wpfusion.com/wp-content/uploads/2020/09/hubspot-custom-deal-properties.jpg)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#add-the-memberpress-transaction-expiration-date-to-a-custom-deal-property) Add the MemberPress transaction expiration date to a custom deal property

```php
function wpf_add_expiration_to_deal( $deal, $transaction_id ) {

    // Get the MemberPress transaction.
    $txn = new MeprTransaction( $transaction_id );

    // Get expiration based on the membership settings
    if( $txn->expires_at && strtotime( $txn->expires_at ) > 0 ) {
       $deal['properties']['membership_expiration_date'] = $txn->expires_at;
    }

    return $deal;
}

add_filter( 'wpf_ecommerce_hubspot_add_deal', 'wpf_add_expiration_to_deal', 10, 2 );
```

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/\#customize-note-content) Customize note content

If you enable the **Add Note** options in the WP Fusion Enhanced Ecommerce settings, WP Fusion will attach a note (also known as an “engagement”) to your newly created deals containing the products purchased and line item totals.

It’s possible to override the contents of this note using the `wpf_ecommerce_hubspot_add_engagement` filter.

```php
/**
 * Add address to HubSpot note
 */
function add_address_to_note( $engagement_data, $order_id ) {

	/* $engagement_data is structured like:

	$engagement_data = array(
		'engagement'   => array(
			'type' => 'NOTE',
		),
		'associations' => array(
			'dealIds' => array( $deal_id ),
		),
		'metadata'     => array(
			'body' => $body,
		),
	); */

	$order      = wc_get_order( $order_id );
	$order_data = $order->get_data();

	$new_text = '
Address:';
	$new_text .= '';
	$new_text .= 'Address 1: ' . $order_data['billing']['address_1'] . '
';
	$new_text .= 'Address 2: ' . $order_data['billing']['address_2'] . '
';
	$new_text .= 'City: ' . $order_data['billing']['city'] . '
';
	$new_text .= 'State: ' . $order_data['billing']['state'] . '
';
	$new_text .= 'Postcode: ' . $order_data['billing']['postcode'] . '
';
	$new_text .= '';

	$engagement_data['metadata']['body'] .= $new_text;

	return $engagement_data;
}

add_filter( 'wpf_ecommerce_hubspot_add_engagement', 'add_address_to_note', 10, 2 );
```

This example appends the customer’s billing address to the contents of the note.

For more information on engagements, see [the HubSpot API documentation](https://developers.hubspot.com/docs/api/crm/notes).

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

- [Overview](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#overview)
- [Getting started](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#getting-started)
- [Deal Owner (New in v1.26.1)](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#deal-owner-new-in-v1-26-1)
- [Products](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#products)
- [Line items](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#line-items)
- [Deals vs. Orders](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#deals-vs-orders)
- [Deals](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#deals)
- [Orders](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#orders)
- [How it works](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#how-it-works)
- [Multi-currency](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#multi-currency)
- [How it looks](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#how-it-looks)
- [WooCommerce](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#woocommerce)
- [Event Espresso](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#event-espresso)
- [GiveWP](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#givewp)
- [SureCart](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#surecart)
- [Video – Enhanced Ecommerce – Hubspot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#video-enhanced-ecommerce-hubspot)
- [WooCommerce order statuses](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#woocommerce-order-statuses)
- [Modifying the API data](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#modifying-the-api-data)
- [Assign a specific owner to deals](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#assign-a-specific-owner-to-deals)
- [Ignore free orders](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#ignore-free-orders)
- [Exclude taxes](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#exclude-taxes)
- [Custom deal fields](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#custom-deal-fields)
- [Add the MemberPress transaction expiration date to a custom deal property](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#add-the-memberpress-transaction-expiration-date-to-a-custom-deal-property)
- [Customize note content](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/#customize-note-content)

### You may also like

[![2501696 hubspot integration v1 111924](https://wpfusion.com/wp-content/uploads/2024/11/2501696_Hubspot-Integration_v1_111924-300x158.jpg)](https://wpfusion.com/tutorials/hubspot-wordpress-integration/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [HubSpot-WordPress Integration: How to Connect (Step-by-Step Guide)](https://wpfusion.com/tutorials/hubspot-wordpress-integration/)

HubSpot is a full-spectrum inbound marketing and automation platform that makes it easy for businesses to execute, manage, and measure their inbound marketing efforts.

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