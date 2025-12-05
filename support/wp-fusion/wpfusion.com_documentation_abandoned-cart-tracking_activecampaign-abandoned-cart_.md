---
url: "https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/"
title: "ActiveCampaign Abandoned Cart Tracking"
---

[Skip to content](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#content)

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

# ActiveCampaign Abandoned Cart Tracking

- Published onJanuary 19, 2018
- Last updated on July 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Abandoned Cart Tracking](https://wpfusion.com/documentation/#abandoned-cart-tracking)
- /
- ActiveCampaign Abandoned Cart Tracking

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#overview) Overview

Using WP Fusion’s Abandoned Cart addon (available to [Plus and Professional license holders](https://wpfusion.com/pricing/)), you can track and follow up on abandoned carts from popular WordPress plugins in ActiveCampaign.

WP Fusion’s Abandoned Cart addon works with the following plugins:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#abandoned-cart-tracking)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#abandoned-cart-tracking)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/)
- [MemberPress](https://wpfusion.com/documentation/ecommerce/memberpress/#abandoned-cart-tracking)
- and [Paid Memberships Pro](https://wpfusion.com/documentation/ecommerce/paid-memberships-pro/#abandoned-cart-tracking)

After the customer’s name and email have been entered on the checkout form, the customer is added as a contact to ActiveCampaign (even if they don’t complete the checkout).

You can then use automations in ActiveCampaign to follow up with customers who don’t complete checkout within a specified period of time, including sending a cart recovery URL, and issuing [automatic discounts](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/) based on tags.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#setup-in-wordpress) Setup in WordPress

Download the WP Fusion – Abandoned Cart Addon plugin file from [your account](https://wpfusion.com/account/) and install it on your WordPress site.

The Abandoned Cart settings are found at Settings » WP Fusion » Addons.

[![screenshot](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings-1024x645.jpg)](https://wpfusion.com/wp-content/uploads/2024/07/abandoned-cart-settings.jpg)

There are two important settings:

1. In the **Apply Tags** setting, select a tag to use for tracking abandoned carts. This tag will be applied when a cart is abandoned, and automatically removed once a customer completes checkout.
2. In the **Abandoned Cart Delay** setting, select how long (in minutes) WP Fusion should wait after the customer begins to checks out before applying the abandoned cart tags.

Other settings may be shown based on your installed plugins. For more information, see the tooltips or visit the [Abandoned Cart Tracking Overview documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#syncing-cart-fields) Syncing cart fields

WP Fusion has the ability to sync details about the abandoned cart to custom fields on contact records in ActiveCampaign. These fields can then be added to cart recovery emails using [merge tags](https://help.activecampaign.com/hc/en-us/articles/220709307-Personalization-Tags#h_01HP55MYTZDYVR2T18HP4X3J00).

To enable these fields, head to Settings » WP Fusion » Contact Fields » WP Fusion Abandoned Cart.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping-1024x472.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-field-mapping.jpg)

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#recovery-urls) Recovery URLs

With WooCommerce and Easy Digital Downloads, WP Fusion has the ability to generate a cart recovery URL and sync it to a custom field in ActiveCampaign.

This can be enabled by enabling the Recovery URL field for sync from the Contact Fields list (see above).

When a customer begins to check out (or their cart contents are updated), the cart contents will be saved into a cache in your database, and the recovery URL will be synced to the selected custom field in ActiveCampaign.

[![](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs-1024x460.jpg)](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-logs.jpg) The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show the cart data being synced to the CRM once a customer has entered their email address on the checkout page.

You can then use a merge field in the email editor in ActiveCampaign to include the unique recovery URL.

**Heads up:** If you are using the recovery URL field in a button in an ActiveCampaign email, it’s recommended to turn _off_ Google Analytics tracking on the email.

The reason is that the UTM parameters can get appended to the contact ID in the button, which causes the cart recovery not to work.

When the recovery URL is visited the customer’s cart contents will be restored, and the checkout fields will be pre-filled using the information that was entered in the initial abandoned checkout session.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#deep-data-api) Deep Data API

The [Deep Data API](https://help.activecampaign.com/hc/en-us/articles/360001046024-How-do-I-create-an-abandoned-cart-automation-Deep-Data-integration-) supports syncing the full cart contents to ActiveCampaign when a customer updates their cart in WooCommerce or Easy Digital Downloads.

To enable this feature check the box for _Sync Carts_ from the Addons tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-3-1024x442.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-3.jpg)

You can also specify the page the customer should be taken to when they click on the cart recovery link. The _Current Page_ option can be used if you have multiple checkout pages (for example with CartFlows).

**Note:** With this method enabled it’s not necessary to use tags for tracking cart abandonment, and it’s not necessary to use a custom field for the recovery URL.

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#setup-in-activecampaign) Setup in ActiveCampaign

When a customer begins checking out a new cart will be created in ActiveCampaign, which will trigger an abandoned cart action. You can use this action as an entry point for your automation.

[![](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-5-1024x617.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-5.jpg)

After the trigger, you can send the abandoned cart followup email. Here’s the full automation:

[![activecampaign abandonedcart deepdata](https://wpfusion.com/wp-content/uploads/2018/01/activecampaign-abandonedcart-deepdata.png)](https://wpfusion.com/wp-content/uploads/2018/01/activecampaign-abandonedcart-deepdata.png)

ActiveCampaign includes a pre-built abandoned cart recovery email which is compatible with WP Fusion. You can also create your own email from scratch by adding an Abandoned Cart block to any email.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#how-it-looks) How it looks

Your carts will automatically be synced to the associated contact in ActiveCampaign, and will appear in the WP Fusion Deep Data section on the contact record, with a status _Abandoned_.

[![](https://wpfusion.com/wp-content/uploads/2018/01/ac-abandoned-cart-recovered-1024x603.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/ac-abandoned-cart-recovered-scaled.jpg)

If you’re using WP Fusion’s [Enhanced Ecommerce Addon](https://wpfusion.com/documentation/ecommerce-tracking/activecampaign-ecommerce/), carts will automatically be marked as _Completed_ once the order is completed.

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#in-emails) In emails

The customer’s cart contents will be merged into the recovery email, including product names, prices, and images.

[![](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-2-881x1024.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-2.jpg)

When the customer clicks the **Return to Checkout** link they will be taken back to the checkout and their cart contents will be restored.

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#troubleshooting) Troubleshooting

When a customer begins to check out you should see an entry appear on their activity stream in ActiveCampaign with the cart contents. This will appear on the sidebar when viewing the contact record.

[![](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-1-1024x978.jpg)](https://wpfusion.com/wp-content/uploads/2018/01/abandoned-cart-ac-1.jpg)

If this entry doesn’t appear or you experience other unexpected behavior with abandoned cart tracking, please first turn on WP Fusion’s [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) and begin a test checkout to trigger the abandoned cart actions.

![](https://wpfusion.com/wp-content/uploads/2018/01/drip-abandoned-cart-5-1024x439.jpg)

The Abandoned Cart Addon will write detailed information to the logs, which you can include in [your support ticket](https://wpfusion.com/support/contact/).

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#tag-based-method) Tag based method

This method is available for people who don’t want to use the Deep Data API or don’t have an ActiveCampaign Plus plan.

Check out how we use tag-based abandoned cart tracking with ActiveCampaign [in this blog post](https://wpfusion.com/tutorials/abandoned-cart-recovery-with-easy-digital-downloads-wp-fusion-and-your-marketing-automation-tool/).

#### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#setup-in-wordpress) Setup in WordPress

First, go to the Addons tab under the WP Fusion settings and select a tag to be used for abandoned cart tracking. You use an existing tag, or type a new one into the box.

![abandoned-cart-config](https://wpfusion.com/wp-content/uploads/2016/06/abandoned-cart-config-1024x243.jpg)

WP Fusion will automatically apply this tag to the user when checkout is begun, and the tag will be removed if checkout is completed successfully.

Next, log into your ActiveCamaign account and create a new Automation. The automation should be triggered when the “Abandoned Cart” tag is added and you can send an email, and/or create an internal task for further followup. See the image below for an overview of the entire automation.

[![activecampaign abandonedcart tag based](https://wpfusion.com/wp-content/uploads/2018/01/activecampaign-abandonedcart-tag-based.png)](https://wpfusion.com/wp-content/uploads/2018/01/activecampaign-abandonedcart-tag-based.png)

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#testing) Testing

To test your abandoned cart automation, set the **Abandoned Cart Delay** setting to 0 to disable the delay. Open a new private browser window and add a product to your cart.

On the checkout screen, enter at least your name and email address. Once your focus leaves the email address field (either by clicking out of the field, or entering text into the next field), a contact will be created in ActiveCampaign, the tagwill be applied, and the email will be sent.

[![](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs-1024x550.jpg)](https://wpfusion.com/wp-content/uploads/2021/08/hubspot-abandoned-cart-logs.jpg) The [WP Fusion activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/) show any data being sent to ActiveCampaign.

You can click the cart recovery link in the email to confirm the customer details and cart contents are successfully restored.

### [\#](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/\#further-reading) Further reading

For more information on abandoned cart tracking with WP Fusion, see the [Abandoned Cart Tracking overview](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-overview/).

To automatically apply discounts in WooCommerce based on a contact’s tags in ActiveCampaign, see the [Automatic Discounts documentation](https://wpfusion.com/documentation/abandoned-cart-tracking/abandoned-cart-auto-discounts/).

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

- [Overview](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#overview)
- [Setup in WordPress](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#setup-in-wordpress)
- [Syncing cart fields](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#syncing-cart-fields)
- [Recovery URLs](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#recovery-urls)
- [Deep Data API](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#deep-data-api)
- [Setup in ActiveCampaign](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#setup-in-activecampaign)
- [How it looks](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#how-it-looks)
- [In emails](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#in-emails)
- [Troubleshooting](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#troubleshooting)
- [Tag based method](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#tag-based-method)
- [Setup in WordPress](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#setup-in-wordpress)
- [Testing](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#testing)
- [Further reading](https://wpfusion.com/documentation/abandoned-cart-tracking/activecampaign-abandoned-cart/#further-reading)

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