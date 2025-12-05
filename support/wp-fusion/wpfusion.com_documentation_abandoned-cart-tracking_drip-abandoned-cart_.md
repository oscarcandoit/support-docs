---
url: "https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/"
title: "Drip Abandoned Cart Tracking"
---

[Skip to content](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#content)

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

# Drip Abandoned Cart Tracking

- Published onJanuary 18, 2018
- Last updated on July 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Abandoned Cart Tracking](https://wpfusion.com/documentation/#abandoned-cart-tracking)
- /
- Drip Abandoned Cart Tracking

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#overview) Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in Drip.

WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)

After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to Drip (even if they don’t complete the checkout).

You can then use workflows in Drip to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#setup-in-wordpress) Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

[![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#syncing-cart-fields) Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in Drip. These fields can then be added to cart recovery emails using [merge tags](https://help.drip.com/hc/en-us/articles/6419179169165-Pre-Defined-Merge-Tags).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping.jpg)

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#recovery-urls) Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in Drip.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in Drip.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs.jpg) The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.

You can then use a merge field in the email editor in Drip to include the unique recovery URL.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#setup-in-drip) Setup in Drip

In Drip, create a workflow that is triggered when the Abandoned Cart tag is applied, and connect it to one or more cart recovery emails.

[![drip abandoned cart workflow01](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow01.png)](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow01.png)

In your email, you can dynamically include the cart recovery URL by inserting the merge tag using the merge tag editor.

[![drip abandoned cart workflow email](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow-email.png)](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow-email.png)

Publish the workflow to make it live.

### Shopper Activity API [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#shopper-activity-api-new) New

The [Shopper Activity API](https://help.drip.com/hc/en-us/articles/360022922031-Install-a-Cart-Abandonment-Workflow-Using-the-Shopper-Activity-API) supports syncing the full cart contents to Drip when a customer updates their cart in WooCommerce.

To enable this feature check the box for _Sync Carts_ from the Addons tab in the WP Fusion settings.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart.png)

You can also specify the page the customer should be taken to when they click on the cart recovery link. The _Current Page_ option can be used if you have multiple checkout pages (for example with CartFlows).

**Note:** With this method enabled it’s not necessary to use tags for tracking cart abandonment, and it’s not necessary to use a custom field for the recovery URL.

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#setup-in-drip) Setup in Drip

When a customer begins checking out a new cart will be created in Drip, which will trigger the “Created a cart” action. When a customer adds something new to their cart it will trigger the “Updated a cart” action. You can use these actions as an entry point for your workflows.

[![drip abandoned cart workflow2](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow2.png)](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-workflow2.png)

**Update:** You can use the “Cart Abandonment” Block to merge the abandoned cart contents into your email.

[![](https://wpfusion.com/wp-content/uploads/2018/01/cart-abandonedment.png)](https://wpfusion.com/wp-content/uploads/2018/01/cart-abandonedment.png)

Alternatively, for additional control over the layout, consider using Liquid code. Below is an example Liquid template:

```
{% for item in event.items %}

<table style="width: 100%;">

<tbody>

<tr>

<td width="50%"><img src="{{ item.image_url }}" style="width:100%;display:inline-block;" /></td>

<td style="padding-left:24px; vertical-align: top;" width="50%">

<h2 style="margin-top:0;margin-bottom:12px;"><span style="font-size:28px">{{ item.name }}</span></h2>

<span style="font-size:16px">Price: ${{ item.price }}</span><br />

<span style="font-size:16px">Quantity: {{ item.quantity }}</span><br />

<a href="{{ item.product_url }}" style="background:#000000; padding:6px 12px; margin-top:12px;color:#fff;border-radius:6px;display:inline-block;">View Product</a></td>

</tr>

</tbody>
</table>
{% endfor %}
```

To edit the Liquid code in your Drip emails, click on any text area and switch over into Source mode by clicking the **<>** icon, then paste in the code above.

[![](https://wpfusion.com/wp-content/uploads/2018/01/drip-code-mode.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/drip-code-mode.jpg)

Your email should then look something like this:

[![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-7-1024x926.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-7.jpg)

See [the Drip documentation](https://help.drip.com/hc/en-us/articles/360025224972-Order-Activity#h_72636af6-7738-44f6-9325-4af4025a104b) for more info on the syntax for Liquid tags.

The cart recovery link can be added by creating a button with the URL `{{ event.cart_url }}`.

[![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-6.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-6.jpg)

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#how-it-looks) How it looks

Your customer’s cart contents will be merged into the email, including product names, prices, and images.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-4-1024x1004.jpg)

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#testing) Testing

To test your abandoned cart workflow, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in Drip, the tag will be applied, and the email will be sent.

[![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs.jpg) The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to Drip.

You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#troubleshooting) Troubleshooting

When a customer begins to check out you should see an entry appear (within a couple of minutes) on their activity stream in Drip with the cart contents.

[![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-8-1024x619.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-8.jpg)

If this entry doesn’t appear or you experience other unexpected behavior with abandoned cart tracking, please first turn on WP Fusion’s [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) and begin a test checkout to trigger the abandoned cart actions.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-5-1024x439.jpg)

The Abandoned Cart Addon will write detailed information to the logs, which you can include in [your support ticket](https://wpfusion.com/support/contact/).

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/\#further-reading) Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in Drip, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

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

- [Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#overview)
- [Setup in WordPress](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#setup-in-wordpress)
- [Syncing cart fields](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#syncing-cart-fields)
- [Recovery URLs](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#recovery-urls)
- [Setup in Drip](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#setup-in-drip)
- [Shopper Activity API New](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#shopper-activity-api-new)
- [Setup in Drip](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#setup-in-drip)
- [How it looks](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#how-it-looks)
- [Testing](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#testing)
- [Troubleshooting](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#troubleshooting)
- [Further reading](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/#further-reading)

### In this chapter

- [Abandoned Cart Tracking Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/ "Abandoned Cart Tracking Overview")
- [ActiveCampaign Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/ "ActiveCampaign Abandoned Cart Tracking")
- [AgileCRM Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/agilecrm-abandoned-cart/ "AgileCRM Abandoned Cart Tracking")
- [Automatic Discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/ "Automatic Discounts")
- [Brevo Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/brevo-abandoned-cart/ "Brevo Abandoned Cart Tracking")
- [ConvertKit Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/convertkit-abandoned-cart/ "ConvertKit Abandoned Cart Tracking")
- [Drip Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/drip-abandoned-cart/ "Drip Abandoned Cart Tracking")
- [FluentCRM Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/fluentcrm-abandoned-cart-tracking/ "FluentCRM Abandoned Cart Tracking")
- [HighLevel Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/highlevel-abandoned-cart-tracking/ "HighLevel Abandoned Cart Tracking")
- [HubSpot Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/hubspot-abandoned-cart/ "HubSpot Abandoned Cart Tracking")
- [Infusionsoft / Keap Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/infusionsoft-abandoned-cart/ "Infusionsoft / Keap Abandoned Cart Tracking")
- [Mautic Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/mautic-abandoned-cart/ "Mautic Abandoned Cart Tracking")
- [Ontraport Abandoned Cart Tracking](https://wpfusion.com/documentation/abandoned-cart-tracking/ontraport-abandoned-cart/ "Ontraport Abandoned Cart Tracking")
- [Other CRMs](https://wpfusion.com/documentation/abandoned-cart-tracking/other-crms/ "Other CRMs")
- [Abandoned Cart Tracking Changelog](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-tracking-changelog/ "Abandoned Cart Tracking Changelog")

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