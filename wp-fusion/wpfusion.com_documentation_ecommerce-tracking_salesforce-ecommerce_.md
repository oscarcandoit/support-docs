---
url: "https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/"
title: "Salesforce Enhanced Ecommerce"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#content)

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

# Salesforce Enhanced Ecommerce

- Published onJuly 24, 2023
- Last updated on July 1, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Enhanced Ecommerce](https://wpfusion.com/documentation/#ecommerce-tracking)
- /
- Salesforce Enhanced Ecommerce

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#overview) Overview

WP Fusion’s Enhanced Ecommerce Addon (available for Plus and Professional license holders) supports sending ecommerce transaction data as [Orders](https://help.salesforce.com/s/articleView?id=sf.order_overview.htm&type=5) to your Salesforce account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#getting-started) Getting started

Once you install the addon, the Enhanced Ecommerce tab will appear in the WP Fusion settings. To begin syncing orders with Salesforce, you must set an account ID for all orders.

[![](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-account-id-setting-1024x383.jpg)](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-account-id-setting.jpg)

Once this is set, your new orders will begin syncing into Salesforce automatically.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#how-it-works) How it works

When a customer checks out on your site, WP Fusion will create a new order in Salesforce with the order label, date, and total.

The products purchased will be added to the order as items, including their individual prices and quantities.

This order will be associated with the contact record who made the purchase.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#associating-products-with-salesforce-products) Associating products with Salesforce products

When editing any product, download, plan, or membership level in any of the [supported Enhanced Ecommerce plugins](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/#supported-plugins), you will see a dropdown where you can select an associated Salesforce product.

[![](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-woo-product-setup-1024x494.jpg)](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-woo-product-setup.jpg)

If the product you’re looking for doesn’t appear, click the Refresh Available Tags and Fields button in the WP Fusion settings to update the list.

If you don’t select a product, then at checkout WP Fusion will:

1. Attempt to find a product in Salesforce by searching its name and SKU
2. If no match is found, a new product will be created based on the product details in WordPress

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#how-it-looks) How it looks

[![](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-orders-1024x788.jpg)](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-orders.jpg) Orders appear in Salesforce with their details and order items.[![](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-order-item-1024x594.jpg)](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-order-item.jpg) Order items are associated with the order and the corresponding pricebook entry.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#known-limitations) Known limitations

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#accounts) Accounts

Salesforce requires an Account for all new orders. At the moment, WP Fusion associates all orders with a single account ID (set in the WP Fusion settings). We are exploring options for automatically creating Accounts based on customer data, and this will be included in a future release.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#custom-fields) Custom fields

The integration does not currently support updating custom fields on orders or products (though it is supported via filters, see below). We will make it a priority to find a solution for this in upcoming updates.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#pricebooks) Pricebooks

At the moment WP Fusion just interfaces with the [standard pricebook](https://help.salesforce.com/s/articleView?id=sf.pricebooks_landing_page.htm&type=5). We will look into adding support for multiple pricebooks in a future update.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#field-security) Field security

[![a screenshot of the wp fusion activity log shows error messages related to a salesforce api call, highlighting an invalid field error and processing halted due to a previous unsuccessful operation. filters and log options are visible at the top.](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-field-errors-1024x451.jpg)](https://wpfusion.com/wp-content/uploads/2023/07/salesforce-ecommerce-field-errors.jpg)

Salesforce uses a system of **field-level security** to control which profiles can view or edit specific fields on objects. Even if the `Name` field exists on the `Order` object, if the user profile associated with the connected Salesforce API user does not have access to it, Salesforce responds as if the field does not exist at all.

This results in WP Fusion logging an `INVALID_FIELD` error, and potentially halting further processing due to `PROCESSING_HALTED`.

To resolve this error:

1. Log in to Salesforce with an account that has administrative privileges.

2. Go to **Setup** → **Object Manager** → **Order**.

3. Under the Order object, click on **Fields & Relationships**.

4. Click on the **Name** field.

5. Click on **Set Field-Level Security**.

6. Ensure that the field is **visible** to the profile(s) used by your Salesforce integration (e.g., “API User”).

7. Save changes.


### [\#](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/\#modifying-the-api-data) Modifying the API data

WP Fusion supports using [filters](https://developer.wordpress.org/plugins/hooks/filters/) to modify the data sent to Salesforce with an ecommerce order.

The order data can be modified using the `wpf_ecommerce_salesforce_add_deal` filter.

In this example, we overwrite the order title to use a custom title, _My custom order title_, with the order number.

```php
function my_custom_deal_properties( $deal, $order_id ) {

	/* $deal is structured like:

        $deal['compositeRequest'] = array(
            '0' => array(
                    'method' => 'POST',
                    'url' => '/services/data/v57.0/sobjects/Order',
                    'referenceId' => 'orderRef',
                    'body' => array(,
                        'AccountId' => '0013u00001AD9OzAAL',
                        'Name' => 'WooCommerce Order #1989',
                        'EffectiveDate' => '2023-06-06',
                        'Status' => 'Draft',
                        'Pricebook2Id' => '01s6A000001rZ0EQAU',
                        'ShipToContactId' => '0036A0000078r6QQAQ',
                        'BillToContactId' => '0036A0000078r6QQAQ',
                        'CustomerAuthorizedById' => '0036A0000078r6QQAQ',
                    ),
                ),
            '1' => array(
                    'method' => 'POST',
                    'url' => '/services/data/v57.0/sobjects/OrderItem',
                    'referenceId' => 'orderItemRef0',
                    'body' => array(,
                        'OrderId' => '@{orderRef.id}',
                        'PricebookEntryId' => '01u3u00000CGLymAAH',
                        'Quantity' => '1',
                        'UnitPrice' => '99.00',
                    ),
                )
            )
        ); */

	$deal['compositeRequest'][0]['body']['Name'] = 'My custom order title #' . $order_id;

	return $deal;

}

add_filter( 'wpf_ecommerce_salesforce_add_deal', 'my_custom_deal_properties', 10, 2 );
```

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

- [Overview](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#overview)
- [Getting started](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#getting-started)
- [How it works](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#how-it-works)
- [Associating products with Salesforce products](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#associating-products-with-salesforce-products)
- [How it looks](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#how-it-looks)
- [Known limitations](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#known-limitations)
- [Accounts](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#accounts)
- [Custom fields](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#custom-fields)
- [Pricebooks](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#pricebooks)
- [Field security](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#field-security)
- [Modifying the API data](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/#modifying-the-api-data)

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