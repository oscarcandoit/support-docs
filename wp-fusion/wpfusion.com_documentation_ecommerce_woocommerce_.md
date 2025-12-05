---
url: "https://wpfusion.com/documentation/ecommerce/woocommerce/"
title: "Connect WooCommerce to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce/woocommerce/#content)

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

# WooCommerce

- Published onJanuary 28, 2016
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Ecommerce](https://wpfusion.com/documentation/#ecommerce)
- /
- WooCommerce

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#overview) Overview

WP Fusion integrates with [WooCommerce](https://wpfusion.com/go/woocommerce) to add customers [to your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they make a purchase on your site, and tag them based on products purchased.

You can also use WP Fusion to restrict access to products and product variations, as well as track coupon usage, and auto-apply coupons based on CRM tags.

With supported platforms, WP Fusion’s [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) can also sync revenue data, deals, and/or invoices from WooCommerce to your CRM’s ecommerce system.

And WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) can track abandoned WooCommerce carts, allowing you to follow up with customers using automated sequences in your CRM.

Having trouble with WP Fusion’s WooCommerce integration? Check out our [troubleshooting guide](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubelshooting/).

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#syncing-customer-data-and-custom-fields) Syncing customer data and custom fields

By default, when a customer checks out on your store, a new contact will be created in your CRM with their first name, last name, and email.

You can enable additional fields for sync from the Contact Fields tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-fields-1024x513.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-fields.jpg)

By default all of the billing and shipping fields will be available for sync. If you’re using a custom checkout field editor plugin such as [WooCommerce Checkout Field Editor](https://wordpress.org/plugins/woo-checkout-field-editor-pro/), those fields will also be displayed.

There are three special fields at the end of the list:

- **Email Optin:** If you are using WP Fusion’s [email optin feature](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins) to collect marketing consent at checkout, this will sync the value of the checkbox to a custom field as `true` or `false`, for updating checkbox and boolean fields in your CRM. You can optionally [change the field type](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/#field-types) to `date` to sync the date and time that the customer gave marketing consent.
- **Total Order Count:** This will be updated each time a customer places an order, it will reflect the total count of orders for that customer on your store.
- **Total Lifetime Value:** This will be updated each time a customer places an order, with their total lifetime value (i.e. the total of all their non-refunded orders) on your store.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#order-fields) Order fields

WP Fusion has the ability to sync some details about the customer’s most recent order to custom fields in your CRM. Those can be enabled under the **WooCommerce Order** heading in the contact fields list.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-order-meta-fields-1024x318.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-order-meta-fields.jpg) WP Fusion supports syncing details about a customer’s most recent order to custom fields or properties in your CRM

The available fields are:

- **Last Order Total:** The total order value
- **Order Notes:** Any notes added by the customer to the order at checkout
- **Last Order Date:** The date of the customer’s most recent order
- **Last Coupon Used:** The coupon code used at checkout
- **Last Order ID:** The ID of the order
- **Last Order Status:** The order status, for example `processing` or `refunded`. Note: the `pending` status will not be synced to avoid duplicate order syncs at checkout
- **Last Order Payment Method:** The title of the payment method used, for example “Stripe”, “PayPal”
- **Last Order Shipping Method:** The title of the shipping method used, for example “Flat Rate”, “UPS Express”, etc

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#attribute-fields) Attribute fields

If you’re selling variable products, WP Fusion also supports syncing selected attributes to custom fields in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-attributes-1024x309.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-attributes.jpg)

Under the **WooCommerce Attributes** header you’ll see all of the available attributes from your products. When a customer checks out the selected attribute will be stored in the corresponding custom field.

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#general-settings) General settings

WP Fusion has some general settings for WooCommerce. These can be found on the Integrations tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-general-settings-1024x657.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-general-settings.jpg)

Those options are:

- **Apply Tags to Customers:** The tags specified here will be applied to all WooCommerce customers, when an order is placed.
- **Hide Restricted Products:** If you’ve configured access rules on an individual product, turning on this option lets you completely hide products from your store if the user doesn’t have the required tags.
- **Restricted Product Error Message:** The message here will be displayed when someone tries to add a restricted product to their cart.
- **Asynchronous Checkout:** When this is enabled WP Fusion runs WooCommerce order actions in the background, after the checkout has completed. This makes the checkout process faster, but it can sometimes have problems with caching or security plugins.
- **Hide Coupon Field:** If you’re using [automatic discounts](https://wpfusion.com/documentation/ecommerce/woocommerce/#auto-discounts), enabling this option lets you hide the coupon input field on the checkout.
- **Apply Tags – Left Review:** The tags specified here will be applied when a user leaves a review on a product.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#automatic-tagging) Automatic tagging

With some CRMs WP Fusion supports automatically generating and applying tags based on certain variables when someone makes a purchase in WooCommerce.

If your CRM supports this feature, these settings will appear on the Integrations tab in the WP Fusion settings:

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-automatic-tagging-1024x421.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-automatic-tagging.jpg)

The **Tag Prefix** will be appended to any of the automatically generated tags. This field also accepts the shortcode `[status]` to dynamically insert the status of the order.

For example if someone purchases a product _Widget_ and the order status is Processing, you could set the Tag Prefix field to

Purchased – \[status\] –

This would apply the tag **Purchased – Processing – Widget**.

Automatic tags will be applied when an order is originally placed, but unlike tags [configured on individual products](https://wpfusion.com/documentation/ecommerce/woocommerce/#product-setup), they will not be removed if the order is later refunded or cancelled, or if a subscription is cancelled. They are only applied, not removed.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#order-status-tagging) Order status tagging

WP Fusion also includes an option where you can apply tags to a customer in your CRM when their order status changes in WooCommerce. For example if you manually mark an order as “Shipped”, an automated email could be sent through your CRM to customers.

The tags in this section will be applied to the customer when their order status is changed. These tags are _not_ automatically removed. For example the tags for **On Hold** will not be removed if the order is later changed to **Completed**.

If you’d like to remove the tags you can do so via an automation in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-order-status-tagging-1024x490.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-order-status-tagging.jpg)

**Warning:** It is recommended _not_ to sync **Pending payment** customers with your CRM. When this is enabled, WP Fusion needs to create a contact record and apply a tag as soon as the pending order is created in WooCommerce, and then update it and apply additional tags less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary.

A more performant method of tracking incomplete payments is to use [Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#email-optins) Email Optins

WP Fusion includes an option to add an email optin checkbox to the WooCommerce checkout.

**Note:** The email opt-in checkbox is not compatible with [the new WooCommerce checkout block](https://woo.com/document/cart-checkout-blocks-status/#section-6). To collect email optin consent via WP Fusion you will need to use the `[woocommerce_checkout]` [shortcode](https://woo.com/document/woocommerce-shortcodes/#checkout).

This can be enabled by checking the box for **Email Optin** in the main WP Fusion settings, under the Integrations tab.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin-settings-1-1024x451.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin-settings-1.jpg)

The settings are:

- **Email Optin:** This enables the email optin checkbox on the checkout form.
- **Hide If Consented:** When this is checked, the email optin checkbox will be hidden from any customers who have already consented to marketing.
- **Email Optin Message:** This is the message displayed with the email optin checkbox.
- **Email Optin Default:** Whether the optin checkbox defaults to Checked or Un-checked.
- **Email Optin Tags:** You can select one or more tags to be applied in your CRM when the email optin box is checked.

As an alternative to applying tags, you can also sync the value of the optin checkbox to a custom field in your CRM, by enabling the `email_optin` field for sync at Settings » WP Fusion » Contact Fields » WooCommerce Customer.

When enabled the optin checkbox will be displayed next to the Place Order button on the checkout.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin-1024x615.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-email-optin.jpg)

In the [Contact Fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/), you can set the field type for the email optin field to either `checkbox` or `date`. The default is `checkbox`.

When set to `checkbox`, if the optin checkbox is checked, it will sync a `true` value to your CRM (works best with checkboxes or email consent fields, but can be used in text fields as well).

If the field format is set to `date`, it will sync the current date and time to your CRM. This works best with date or datetime fields.

**Note:** If the opt-in checkbox is _unchecked_, it will be saved to the order record, but **nothing will be synced**, and customers will not be unsubscribed from marketing.

This is by design and relates to the EU GDPR’s position that inaction should not be seen as a conscious decision.

For more control over the checkout fields, we recommend [WooCommerce Checkout Field Editor](https://wordpress.org/plugins/woo-checkout-field-editor-pro/).

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#only-sync-confirmed-customers) Only sync confirmed customers

Because WP Fusion uses tags applied at checkout to [unlock content](https://wpfusion.com/documentation/getting-started/access-control/), [enroll users into courses](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment), and otherwise deliver access to purchased products— all customers will be synced with your CRM, regardless of whether or not they’ve consented to marketing.

It’s then up to you to use the tag and/or custom field value in your campaigns and automations to exclude contacts from marketing if they haven’t opted in.

On some simple stores, you may want to completely disable the sync of customers with your CRM if they haven’t opted in to marketing. This can be achieved with the following filter, added to your functions.php file:

```php
function do_not_sync_unconfirmed_customers( $customer_data ) {

	if ( empty( $customer_data['email_optin'] ) ) {
		return false;
	}

	return $customer_data;

}

add_filter( 'wpf_woocommerce_customer_data', 'do_not_sync_unconfirmed_customers' );
```

In this case no data will be sent to your CRM unless the customer opts in to marketing on the checkout form. You will not be able to apply tags to them, and they will not be able to access any content protected by WP Fusion.

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#order-management) Order management

When editing any WooCommerce order in the admin, you will see a meta box indicating that order’s status with WP Fusion.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-order-management-1024x610.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-order-management.jpg)

The meta box will show whether or not the order was processed by WP Fusion, and the customer’s contact ID in your CRM.

If you have [email optins](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-options) enabled, the customer’s optin status will be shown.

If you’re using the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) you will also see the corresponding invoice ID (or order ID) in your CRM’s sales pipeline.

To manually process an order again (for example to fix an invalid field value), click the **Process WP Fusion actions again** button.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#order-notes) Order notes

The order notes in the order sidebar will show when an order was processed by WP Fusion, and also any corresponding invoices created by the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/). In cases where there were errors during checkout, these will also be recorded to the order notes, as well as the [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#order-status-column) Order status column

WP Fusion adds a status column to the main WooCommerce orders table. Hovering over the icon will display a tooltip which tells you when the order was processed by WP Fusion, and also gives you a link to view the customer’s contact record in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woocommerce-order-table-status-icon-1024x405.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woocommerce-order-table-status-icon.jpg)

The icon can change colors depending on the status of the sync with your CRM:

- If the icon is orange, the order was fully processed by WP Fusion.
- If the icon is grey, the order was not processed by WP Fusion
- If the icon is half-filled, this means that a contact record was created, but the [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) didn’t successfully process the order.

If you don’t want to see order sync statuses in the orders table, you can disable it by un-checking the **WP Fusion Status** checkbox in the Screen Options menu at the top of the page.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#process-orders-in-bulk) Process orders in bulk

WP Fusion’s [batch operations for WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders) allow you to export all of your historical orders to your CRM at once.

For syncing individual orders in bulk, you can select orders using the checkboxes on the Orders list, and select _Process with WP Fusion_ from the bulk actions dropdown.

[![screenshot](https://wpfusion.com/wp-content/uploads/2016/01/process-woo-orders-bulk-1024x474.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/process-woo-orders-bulk-scaled.jpg)

A status indicator will appear at the top of the page showing the progress. WP Fusion will work through the selected orders one at a time, creating and updating contacts in your CRM, and applying any configured tags.

If you are using [Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce), invoices will also be created (or updated) for the selected orders.

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#tagging-customers) Tagging customers

WP Fusion gives you a variety of ways to tag your WooCommerce customers in your CRM. The simplest method is to tag based on the product purchased, but you can also apply tags to all customers as a global setting, or based on product categories.

**Note:** Most CRMs that WP Fusion supports use “tags” to segment contact records, but the interfaces may vary depending on what your platform uses for segments. For example with HubSpot and Brevo you’ll see “lists”, or with MailerLite you’ll see “groups”. This is just a label difference and the end functionality is the same.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#product-setup) Product setup

When WP Fusion is active, you’ll see a new tab on the WooCommerce product settings where you can specify tags to be applied when that product is purchased, refunded, or when an initial transaction fails.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-setup-1-1024x597.jpg)

The standard settings are:

- **Apply tags when purchased:** These tags will be applied in the CRM when the product is purchased. They will be removed automatically if the order is refunded or cancelled.
- **Apply tags when refunded:** These tags will be applied in the CRM when an order is refunded.
- **Apply tags when transaction failed:** These tags will be applied when an initial payment fails, or when an order status changes to Failed. They will be removed when a successful payment is received.

You may see additional fields for [Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/) or [Deposits](https://wpfusion.com/documentation/ecommerce/woocommerce-deposits/) if you are using those plugins.

If the [Abandoned Cart Addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) is active you can also configure tags to be applied when the product is left in an abandoned cart.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#variable-products) Variable products

If you’re using variable products, you can also specify tags to be applied at purchase per-variation. These are visible when editing the variation, alongside the price and other details.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-variations-1024x491.jpg)

WP Fusion also gives you the option to only show specific variations to users based on their tags. This can be used to offer special products or pricing to existing members.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#category-tagging) Category tagging

You can also specify tags to be applied at the category level. To do this click Edit on any product category, and you’ll see a setting where you can specify tags to be applied.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-product-cat-tagging-1024x224.jpg)

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#bulk-editing) Bulk editing

There may be situations where you need to bulk edit the tags that are configured on your WooCommerce products. For bulk editing, we recommend [Setary](https://wpfusion.com/go/setary).

How to Bulk Edit WP Fusion WooCommerce Product Tags - YouTube

[Photo image of Setary — Bulk Product Editor for WooCommerce](https://www.youtube.com/channel/UCkXsg1-e3XoZccWFXImT-6Q?embeds_referring_euri=https%3A%2F%2Fwpfusion.com%2F)

Setary — Bulk Product Editor for WooCommerce

6 subscribers

[How to Bulk Edit WP Fusion WooCommerce Product Tags](https://www.youtube.com/watch?v=qT4xF1QDdqU)

Setary — Bulk Product Editor for WooCommerce

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=qT4xF1QDdqU&embeds_referring_euri=https%3A%2F%2Fwpfusion.com%2F)

0:00

0:00 / 0:49

•Live

•

Setary connects to your WooCommerce store (or multiple stores) and allows you to edit WooCommerce product details in bulk, in an intuitive spreadsheet interface.

Setary’s WP Fusion integration allows you to configure the settings for **Apply Tags,** **Apply Tags – Refunded**, and **Apply Tags – Failed** for all of your products.

![Edit WP Fusion tags in bulk](https://setary.com/wp-content/uploads/2023/08/setary-wp-fusion-columns-1024x250.png)Setary’s WP Fusion integration lets you configure tags for your products in bulk, even across multiple WooCommerce stores.

For more information, see [the Setary documentation](https://setary.com/docs/how-to-bulk-edit-wp-fusion-woocommerce-product-tags/ref/14/).

As an alternative to Setary, WPSheetEditor also provides a free WP Fusion addon to customers of their [WooCommerce Products Spreadsheet plugin](https://wpfusion.com/go/wpsheeteditor-woocommerce).

[![](https://wpfusion.com/wp-content/uploads/2016/01/wpsheeteditor-product-config-1024x498.png)](https://wpfusion.com/wp-content/uploads/2016/01/wpsheeteditor-product-config.png) Quickly set up WP Fusion for many products using WPSheetEditor

You can [read a tutorial on bulk editing WP Fusion tag rules with WPSheetEditor here](https://wpfusion.com/go/wpsheeteditor).

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#refunds) Refunds

If an order is marked _Refunded_ or _Cancelled_ in WooCommerce, the tags specified in **Apply tags when purchased** will automatically be removed. You can also optionally specify tags to be applied when an order is refunded using the **Apply tags when refunded** setting.

If there are tags you do not want removed during a refund, you can include these tags in the **Apply tags when refunded** setting. In this case a notice will show in the logs when the refund is processed, and the tags will not be modified.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-tags-not-removed-due-to-refund-1024x164.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-tags-not-removed-due-to-refund.jpg) You can prevent tags from being removed during a refund by adding them to the _Apply tags when refunded_ setting.

Note that if you refund a [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/) renewal payment and the user’s subscription is still active, no tags will be modified. This is to help in cases where a user might have signed up or been charged twice and you need to refund the duplicate order, without revoking access.

If you want access to be revoked when refunding a renewal payment, it’s best to cancel the subscription first. You can also automatically remove tags when a subscription is cancelled by checking the _Remove Tags_ box. For more information see the [WooCommerce Subscriptions documentation](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/).

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#coupons-and-discounts) Coupons and Discounts

While editing any coupon, you can specify tags to be applied to the customer if the coupon is used.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#restricting-access-to-coupons) Restricting access to coupons

You can require a user to be logged in and to have a specific tag to use a coupon code. This can be set from the _Required Tags_ setting on the Usage Restriction tab in the coupon settings.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-coupon-access-restriction-1024x459.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-coupon-access-restriction.jpg) Using WP Fusion you can restrict access to coupons based on a user’s tags in your CRM.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#auto-applying-discounts) Auto-applying discounts

You can also automatically grant coupons to customers based on their tags in your CRM.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-coupons-1024x581.jpg)

If the user has any one of the specified tags, the discount will be applied when they add a product to their cart. This feature also works with our [auto-login links](https://wpfusion.com/documentation/tutorials/auto-login-links/).

In cases where the user has more than one tag linked to a discount, the discount with the highest amount will be applied first. If the cart value has already been discounted to zero, no additional automatic discounts will be applied.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#discount-labels) Discount labels

You can optionally override the coupon labels shown on the cart and at checkout. The _Discount label_ is displayed in the order summary.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-coupons-discount-label-300x204.jpg)Custom discount label in the order summary.

By default this will be the coupon code of the applied coupon, but here we’ve overridden it to say “Discount”. You could set this to say something like “Member Discount” or “Loyalty Program”.

The _Discount message_ is shown at the top of the cart or checkout when the coupon is applied.

![](https://wpfusion.com/wp-content/uploads/2016/01/woo-coupons-success-msg-1024x368.jpg)

By default this will say “Coupon code applied successfully.” Here we’ve overridden it to say “You received a discount!”

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#product-availability) Product Availability

You have the option to restrict access to a product unless a user has a certain tag applied to their account.

This is a great way to offer up-sell products or add-ons for your existing users. For more information on restricting content, see the [documentation on meta box setup](https://wpfusion.com/documentation/getting-started/meta-box/).

[![](https://wpfusion.com/wp-content/uploads/2016/01/woocommerce-product-availability-1024x547.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woocommerce-product-availability.jpg) You can restrict access to WooCommerce products using tags or lists in your connected CRM.

If you specify a redirect in the WP Fusion meta box, customers who attempt to view the product will be redirected to the page or URL you’ve specified.

If you don’t specify a redirect, the product will be visible, but the Add To Cart button will be disabled. Customers who attempt to add the product to the cart will be shown the message set [in the General settings](https://wpfusion.com/documentation/ecommerce/woocommerce/#general-settings) in the **Restricted Product Error Message** option.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woocommerce-product-disabled-1024x585.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woocommerce-product-disabled.jpg) If a WooCommerce product is protected by a tag and no redirect is set, the Add To Cart button will be disabled.

You can similarly restrict access just to individual product variations via [the variation settings](https://wpfusion.com/documentation/ecommerce/woocommerce/#variable-products).

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#abandoned-cart-tracking) Abandoned cart tracking

WP Fusion’s [Abandoned Cart addon](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/) (available to Plus and Professional license holders) can capture customer details on the WooCommerce checkout form and sync them to your CRM before checkout has been completed.

For logged-in users or identified visitors, the addon can even trigger abandoned cart sequences when a product is added to the cart, even if the customer never visits the checkout.

You can then use tags and automations in your connected CRM to follow up with customers who started but didn’t complete checkout.

With WooCommerce you can specify product-specific abandoned cart tags from the WP Fusion panel while editing any product.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-woo-1024x573.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-woo-scaled.jpg) WP Fusion allows you to apply tags in your CRM when a customer begins to check out with any WooCommerce product or variation.

You can also specify variation-specific tags when editing any variation.

For more information on tracking abandoned carts with WooCommerce, see the [Abandoned Cart Tracking Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#enhanced-ecommerce) Enhanced Ecommerce

WP Fusion’s [Enhanced Ecommerce addon](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) (available to Plus and Professional license holders) can sync WooCommerce orders to supported CRMs and email marketing platforms.

[![](https://wpfusion.com/wp-content/uploads/2016/07/ac-deep-data-5-1024x875.jpg)](https://wpfusion.com/wp-content/uploads/2016/07/ac-deep-data-5.jpg) Deep Data from WooCommerce showing on the contact record in ActiveCampaign

With WooCommerce, the Ecommerce Addon will send enhanced ecommerce data for all orders, including support for products, variations, quantities, discounts, shipping, and taxes.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#products) Products

In CRMs that have Products as separate entities from Orders, you can associate your WooCommerce products with CRM products by selecting them from the product dropdowns.

![](https://wpfusion.com/wp-content/uploads/2016/06/woo-ecommerce-product-select-1024x582.jpg)

Variable products can be associated within the individual variations.

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#sales-pipelines) Sales pipelines

With CRMs that support sales pipelines, like Brevo, HighLevel, HubSpot and Zoho, you can also map WooCommerce order statuses with individual pipelines and stages.

This can be found under the [Enhanced Ecommerce settings](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/).

[![WP Fusion's WooCommerce + HubSpot order status sync settings](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-3-1-1024x673.jpg)](https://wpfusion.com/wp-content/uploads/2018/12/hubspot-ecom-3-1.jpg) Map WooCommerce order statuses to HubSpot pipelines with WP Fusion.

When the order status is updated in WooCommerce, the deal stage will be updated in your CRM.

**Warning:** It is recommended _not_ to sync **Pending payment** orders with your CRM. When this is enabled, WP Fusion needs to create a contact record and a deal in the CRM as soon as the pending order is created in WooCommerce, and then update it less than a second later when the payment is processed.

This slows down your checkout with many duplicate API calls and in most cases isn’t necessary. A more performant method of tracking incomplete payments is to use [Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/).

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#supported-platforms) Supported platforms

The CRMs supported by Enhanced Ecommerce are listed below. Click on each to learn more about the capabilities of the integration.

- [ActiveCampaign](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/)
- [AgileCRM](https://wpfusion.com/documentation/ecommerce-tracking/agilecrm-ecommerce/)
- [Brevo](https://wpfusion.com/documentation/ecommerce-tracking/brevo-enhanced-ecommerce/)
- [Drip](https://wpfusion.com/documentation/ecommerce-tracking/drip-ecommerce/)
- [Groundhogg](https://wpfusion.com/documentation/ecommerce-tracking/groundhogg-ecommerce/)
- [HighLevel](https://wpfusion.com/documentation/ecommerce-tracking/highlevel-ecommerce/)
- [HubSpot](https://wpfusion.com/documentation/ecommerce-tracking/hubspot-ecommerce/)
- [Infusionsoft / Keap](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/)
- [MailerLite](https://wpfusion.com/documentation/ecommerce-tracking/mailerlite-ecommerce/)
- [NationBuilder](https://wpfusion.com/documentation/ecommerce-tracking/nationbuilder-ecommerce/)
- [Ontraport](https://wpfusion.com/documentation/ecommerce-tracking/ontraport-ecommerce/)
- [Salesforce](https://wpfusion.com/documentation/ecommerce-tracking/salesforce-ecommerce/)

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#event-tracking) Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track WooCommerce product purchases as events in supported CRMs.

Events can be configured in two places. On an individual product, on the WP Fusion settings tab:

[![Event tracking single product settings](https://wpfusion.com/wp-content/uploads/2016/01/event-tracking-woocommerce-1024x346.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/event-tracking-woocommerce.jpg) Event tracking can be configured on the WP Fusion tab when editing any WooCommerce product.

Or in the Event Tracking global settings:

[![Event tracking global settings](https://wpfusion.com/wp-content/uploads/2016/01/event-tracking-woo-global-1024x630.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/event-tracking-woo-global.jpg) Event tracking can also be configured globally at Settings » Event Tracking.

The available triggers for event tracking with WooCommerce are:

**Purchased Product**

Triggered each time a single product is purchased. If the customer’s order has multiple products, it will sync individual events for each product, regardless of the quantity. For example, if a customer purchases 2 items of _Product1_ and 3 items of _Product2_, only one event per product (Product1 and Product2) will be synced.

This trigger is used for tracking the performance of individual products, since the product details aren’t available in the _Order Placed_ trigger.

**Order Placed**

Triggered each time a WooCommerce order is placed. This event is triggered each time a WooCommerce order is placed, but only for orders with a status of “ _completed_” or “ _processing_“.

**Order Status Changed**

Triggered when a WooCommerce order status changes. This event is triggered whenever the status of a WooCommerce order is changed. By default, WooCommerce sets the initial order status to “ _pending_” and then will change it to “ _processing_“, “ _completed_“, or “ _failed_“. This status change will trigger this event.

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#syncing-historical-orders) Syncing historical orders

If you already have an existing WooCommerce store, you can use WP Fusion to sync all historical orders to your CRM.

First configure your products with any tags you’d like to be applied when purchased. Then navigate to Settings » WP Fusion » Advanced and scroll down to the **Batch Operations** section.

[![](https://wpfusion.com/wp-content/uploads/2016/01/woo-batch-process-1-1024x590.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/woo-batch-process-1.jpg)

Select “WooCommerce orders” from the list of options, and click **Create Background Task.**

WP Fusion will go through all of your orders (from oldest to newest), adding or updating contacts in your CRM as necessary, and tagging them based on the products purchased. A status bar will appear at the top of the page indicating the progress.

By default, WP Fusion will only export orders that weren’t already successfully processed by WP Fusion.

If you un-check _Skip already processed orders_, WP Fusion will export all of the orders on your site, regardless of whether they’ve already been synced.

In the case of refunded or cancelled orders, any tags configured in the [Apply tags when refunded setting](https://wpfusion.com/documentation/ecommerce/woocommerce/#product-setup) will be applied.

If you want to customize the export, such as limiting it to a certain date range or order status, see the documentation and example for the [wpf\_batch\_woocommerce\_init action](https://wpfusion.com/documentation/advanced-developer-tutorials/registering-custom-batch-operations/#limit-the-woocommerce-orders-export-by-date).

### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#developers) Developers

WP Fusion’s WooCommerce integration is very developer friendly. If you open the integration file in `/wp-fusion/includes/integrations/class-woocommerce.php` you’ll find many actions and filters that allow you to modify what data is synced with your CRM (and when).

Some general notes:

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#hpos) HPOS

WP Fusion and the [Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/ecommerce-overview/) addon both support WooCommerce [High Performance Order Storage](https://woo.com/document/high-performance-order-storage/).

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#order-statuses) Order statuses

By default WP Fusion processes a WooCommerce order when its status is changed to either _processing_ or _completed_. When an order is “processed”, a contact record is created in your CRM, and any tags configured on the products (and elsewhere) are applied.

There may be situations in which you need to process an order at a different status. For example maybe you want to apply tags that grant access to content while an order is still in _pending_ status (i.e. before a payment has been received).

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#register-additional-statuses-for-sync) Register additional statuses for sync

You can register additional statuses by hooking into the `woocommerce_order_status_{$status}` action and calling `wp_fusion()->integrations->woocommerce->process_order( $order_id )`.

```php
function wpf_add_custom_order_status() {

	// Process "pending" status orders
	add_action( 'woocommerce_order_status_pending', array( wp_fusion()->integrations->woocommerce, 'process_order' ) );

	// OR, alternatively, on a custom order status "tbh-unpaid"
	// add_action( 'woocommerce_order_status_tbh-unpaid', array( wp_fusion()->integrations->woocommerce, 'process_order' ) );

}

add_action( 'wp_fusion_init', 'wpf_add_custom_order_status' );
```

Note that the `woocommerce_order_status_*` hooks are triggered when an order status is _changed_ to that status.

If you wish to register additional orders for export (using the order exporter), you can use the `wpf_order_statuses` filter:

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#register-additional-order-statuses-for-export) Register additional order statuses for export

This example causes WP Fusion to treat the _pending_ and _failed_ order statuses as valid for export by the [WooCommerce Orders batch operation](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders).

```php
add_filter( 'wpf_woocommerce_order_statuses', function( $statuses ) {

	$statuses[] = 'pending';
	$statuses[] = 'failed';

	return $statuses;

} );
```

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#exclude-order-statuses-from-syncing) Exclude order statuses from syncing

Or, maybe you want to _prevent_ WP Fusion from running on a particular status. This example causes WP Fusion to ignore the _processing_ status and only run on the _completed_ status.

```php
add_filter( 'wpf_woocommerce_order_statuses', function( $statuses ) {

	$ignore_statuses = array( 'processing' );
	return array_diff( $statuses, $ignore_statuses );

} );
```

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#actions) Actions

WP Fusion includes the following action hooks for WooCommerce:

- `wpf_guest_contact_created`
- `wpf_guest_contact_updated`
- [wpf\_woocommerce\_payment\_complete](https://wpfusion.com/documentation/actions/wpf_woocommerce_payment_complete/)
- `wpf_woocommerce_panel`
- `wpf_woocommerce_variation_panel`
- ` wpf_woocommerce_coupon_panel`

#### [\#](https://wpfusion.com/documentation/ecommerce/woocommerce/\#filters) Filters

WP Fusion includes the following filter hooks for WooCommerce:

- [wpf\_woocommerce\_customer\_data](https://wpfusion.com/documentation/filters/wpf_woocommerce_customer_data/)
- `wpf_woocommerce_order_statuses`
- `wpf_woocommerce_billing_email`
- [wpf\_woocommerce\_user\_id](https://wpfusion.com/documentation/filters/wpf_woocommerce_user_id/)
- [wpf\_woocommerce\_apply\_tags\_checkout](https://wpfusion.com/documentation/filters/wpf_woocommerce_apply_tags_checkout/)
- `wpf_auto_apply_coupon_for_user`

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect WooCommerce to ActiveCampaign](https://wpfusion.com/connect/connect-woocommerce-to-activecampaign/)  \|
- [Connect WooCommerce to AgileCRM](https://wpfusion.com/connect/connect-woocommerce-to-agilecrm/)  \|
- [Connect WooCommerce to Autopilot](https://wpfusion.com/connect/connect-woocommerce-to-autopilot/)  \|
- [Connect WooCommerce to Bento](https://wpfusion.com/connect/connect-woocommerce-to-bento/)  \|
- [Connect WooCommerce to BirdSend](https://wpfusion.com/connect/connect-woocommerce-to-birdsend/)  \|
- [Connect WooCommerce to Brevo](https://wpfusion.com/connect/connect-woocommerce-to-brevo/)  \|
- [Connect WooCommerce to Capsule](https://wpfusion.com/connect/connect-woocommerce-to-capsule/)  \|
- [Connect WooCommerce to Constant Contact](https://wpfusion.com/connect/connect-woocommerce-to-constant-contact/)  \|
- [Connect WooCommerce to ConvertKit](https://wpfusion.com/connect/connect-woocommerce-to-convertkit/)  \|
- [Connect WooCommerce to ConvesioConvert](https://wpfusion.com/connect/connect-woocommerce-to-convesioconvert/)  \|
- [Connect WooCommerce to Copper](https://wpfusion.com/connect/connect-woocommerce-to-copper/)  \|
- [Connect WooCommerce to Customer.io](https://wpfusion.com/connect/connect-woocommerce-to-customer-io/)  \|
- [Connect WooCommerce to Customerly](https://wpfusion.com/connect/connect-woocommerce-to-customerly/)  \|
- [Connect WooCommerce to Drip](https://wpfusion.com/connect/connect-woocommerce-to-drip/)  \|
- [Connect WooCommerce to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-woocommerce-to-dynamics-365-marketing/)  \|
- [Connect WooCommerce to EmailOctopus](https://wpfusion.com/connect/connect-woocommerce-to-emailoctopus/)  \|
- [Connect WooCommerce to EngageBay](https://wpfusion.com/connect/connect-woocommerce-to-engagebay/)  \|
- [Connect WooCommerce to Flexie](https://wpfusion.com/connect/connect-woocommerce-to-flexie/)  \|
- [Connect WooCommerce to FluentCRM](https://wpfusion.com/connect/connect-woocommerce-to-fluentcrm/)  \|
- [Connect WooCommerce to FunnelKit](https://wpfusion.com/connect/connect-woocommerce-to-funnelkit/)  \|
- [Connect WooCommerce to Gist](https://wpfusion.com/connect/connect-woocommerce-to-gist/)  \|
- [Connect WooCommerce to Groundhogg](https://wpfusion.com/connect/connect-woocommerce-to-groundhogg/)  \|
- [Connect WooCommerce to HighLevel](https://wpfusion.com/connect/connect-woocommerce-to-highlevel/)  \|
- [Connect WooCommerce to HubSpot](https://wpfusion.com/connect/connect-woocommerce-to-hubspot/)  \|
- [Connect WooCommerce to Infusionsoft](https://wpfusion.com/connect/connect-woocommerce-to-infusionsoft/)  \|
- [Connect WooCommerce to Intercom](https://wpfusion.com/connect/connect-woocommerce-to-intercom/)  \|
- [Connect WooCommerce to Jetpack CRM](https://wpfusion.com/connect/connect-woocommerce-to-jetpack-crm/)  \|
- [Connect WooCommerce to Kartra](https://wpfusion.com/connect/connect-woocommerce-to-kartra/)  \|
- [Connect WooCommerce to Keap](https://wpfusion.com/connect/connect-woocommerce-to-keap/)  \|
- [Connect WooCommerce to Klaviyo](https://wpfusion.com/connect/connect-woocommerce-to-klaviyo/)  \|
- [Connect WooCommerce to KlickTipp](https://wpfusion.com/connect/connect-woocommerce-to-klicktipp/)  \|
- [Connect WooCommerce to Loopify](https://wpfusion.com/connect/connect-woocommerce-to-loopify/)  \|
- [Connect WooCommerce to MailChimp](https://wpfusion.com/connect/connect-woocommerce-to-mailchimp/)  \|
- [Connect WooCommerce to MailerLite](https://wpfusion.com/connect/connect-woocommerce-to-mailerlite/)  \|
- [Connect WooCommerce to Mailjet](https://wpfusion.com/connect/connect-woocommerce-to-mailjet/)  \|
- [Connect WooCommerce to MailPoet](https://wpfusion.com/connect/connect-woocommerce-to-mailpoet/)  \|
- [Connect WooCommerce to Maropost](https://wpfusion.com/connect/connect-woocommerce-to-maropost/)  \|
- [Connect WooCommerce to Mautic](https://wpfusion.com/connect/connect-woocommerce-to-mautic/)  \|
- [Connect WooCommerce to NationBuilder](https://wpfusion.com/connect/connect-woocommerce-to-nationbuilder/)  \|
- [Connect WooCommerce to Omnisend](https://wpfusion.com/connect/connect-woocommerce-to-omnisend/)  \|
- [Connect WooCommerce to Ontraport](https://wpfusion.com/connect/connect-woocommerce-to-ontraport/)  \|
- [Connect WooCommerce to Ortto](https://wpfusion.com/connect/connect-woocommerce-to-ortto/)  \|
- [Connect WooCommerce to Pipedrive](https://wpfusion.com/connect/connect-woocommerce-to-pipedrive/)  \|
- [Connect WooCommerce to Platformly](https://wpfusion.com/connect/connect-woocommerce-to-platformly/)  \|
- [Connect WooCommerce to Quentn](https://wpfusion.com/connect/connect-woocommerce-to-quentn/)  \|
- [Connect WooCommerce to Salesflare](https://wpfusion.com/connect/connect-woocommerce-to-salesflare/)  \|
- [Connect WooCommerce to Salesforce](https://wpfusion.com/connect/connect-woocommerce-to-salesforce/)  \|
- [Connect WooCommerce to Sender](https://wpfusion.com/connect/connect-woocommerce-to-sender/)  \|
- [Connect WooCommerce to SendFox](https://wpfusion.com/connect/connect-woocommerce-to-sendfox/)  \|
- [Connect WooCommerce to Tubular](https://wpfusion.com/connect/connect-woocommerce-to-tubular/)  \|
- [Connect WooCommerce to User.com](https://wpfusion.com/connect/connect-woocommerce-to-user-com/)  \|
- [Connect WooCommerce to WP ERP](https://wpfusion.com/connect/connect-woocommerce-to-wp-erp/)  \|
- [Connect WooCommerce to Zoho](https://wpfusion.com/connect/connect-woocommerce-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/ecommerce/woocommerce/#overview)
- [Syncing customer data and custom fields](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-customer-data-and-custom-fields)
- [Order fields](https://wpfusion.com/documentation/ecommerce/woocommerce/#order-fields)
- [Attribute fields](https://wpfusion.com/documentation/ecommerce/woocommerce/#attribute-fields)
- [General settings](https://wpfusion.com/documentation/ecommerce/woocommerce/#general-settings)
- [Automatic tagging](https://wpfusion.com/documentation/ecommerce/woocommerce/#automatic-tagging)
- [Order status tagging](https://wpfusion.com/documentation/ecommerce/woocommerce/#order-status-tagging)
- [Email Optins](https://wpfusion.com/documentation/ecommerce/woocommerce/#email-optins)
- [Only sync confirmed customers](https://wpfusion.com/documentation/ecommerce/woocommerce/#only-sync-confirmed-customers)
- [Order management](https://wpfusion.com/documentation/ecommerce/woocommerce/#order-management)
- [Order notes](https://wpfusion.com/documentation/ecommerce/woocommerce/#order-notes)
- [Order status column](https://wpfusion.com/documentation/ecommerce/woocommerce/#order-status-column)
- [Process orders in bulk](https://wpfusion.com/documentation/ecommerce/woocommerce/#process-orders-in-bulk)
- [Tagging customers](https://wpfusion.com/documentation/ecommerce/woocommerce/#tagging-customers)
- [Product setup](https://wpfusion.com/documentation/ecommerce/woocommerce/#product-setup)
- [Variable products](https://wpfusion.com/documentation/ecommerce/woocommerce/#variable-products)
- [Category tagging](https://wpfusion.com/documentation/ecommerce/woocommerce/#category-tagging)
- [Bulk editing](https://wpfusion.com/documentation/ecommerce/woocommerce/#bulk-editing)
- [Refunds](https://wpfusion.com/documentation/ecommerce/woocommerce/#refunds)
- [Coupons and Discounts](https://wpfusion.com/documentation/ecommerce/woocommerce/#coupons-and-discounts)
- [Restricting access to coupons](https://wpfusion.com/documentation/ecommerce/woocommerce/#restricting-access-to-coupons)
- [Auto-applying discounts](https://wpfusion.com/documentation/ecommerce/woocommerce/#auto-applying-discounts)
- [Discount labels](https://wpfusion.com/documentation/ecommerce/woocommerce/#discount-labels)
- [Product Availability](https://wpfusion.com/documentation/ecommerce/woocommerce/#product-availability)
- [Abandoned cart tracking](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Products](https://wpfusion.com/documentation/ecommerce/woocommerce/#products)
- [Sales pipelines](https://wpfusion.com/documentation/ecommerce/woocommerce/#sales-pipelines)
- [Supported platforms](https://wpfusion.com/documentation/ecommerce/woocommerce/#supported-platforms)
- [Event Tracking](https://wpfusion.com/documentation/ecommerce/woocommerce/#event-tracking)
- [Syncing historical orders](https://wpfusion.com/documentation/ecommerce/woocommerce/#syncing-historical-orders)
- [Developers](https://wpfusion.com/documentation/ecommerce/woocommerce/#developers)
- [HPOS](https://wpfusion.com/documentation/ecommerce/woocommerce/#hpos)
- [Order statuses](https://wpfusion.com/documentation/ecommerce/woocommerce/#order-statuses)
- [Register additional statuses for sync](https://wpfusion.com/documentation/ecommerce/woocommerce/#register-additional-statuses-for-sync)
- [Register additional order statuses for export](https://wpfusion.com/documentation/ecommerce/woocommerce/#register-additional-order-statuses-for-export)
- [Exclude order statuses from syncing](https://wpfusion.com/documentation/ecommerce/woocommerce/#exclude-order-statuses-from-syncing)
- [Actions](https://wpfusion.com/documentation/ecommerce/woocommerce/#actions)
- [Filters](https://wpfusion.com/documentation/ecommerce/woocommerce/#filters)

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