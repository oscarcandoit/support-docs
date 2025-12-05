---
url: "https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/"
title: "Infusionsoft / Keap Enhanced Ecommerce"
---

[Skip to content](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#content)

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

# Infusionsoft / Keap Enhanced Ecommerce

- Published onJuly 13, 2016
- Last updated on October 3, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Enhanced Ecommerce](https://wpfusion.com/documentation/#ecommerce-tracking)
- /
- Infusionsoft / Keap Enhanced Ecommerce

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#overview) Overview

WP Fusion’s Ecommerce Addon (available for Plus and Professional license holders) supports sending order data to your Infusionsoft (or Keap) account for sales made in:

- [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/#enhanced-ecommerce)
- [Easy Digital Downloads](https://wpfusion.com/documentation/ecommerce/easy-digital-downloads/#enhanced-ecommerce)
- [Event Espresso](https://wpfusion.com/documentation/events/event-espresso/#enhanced-ecommerce)
- [GiveWP](https://wpfusion.com/documentation/ecommerce/give/#enhanced-ecommerce)
- [SureCart](https://wpfusion.com/documentation/ecommerce/surecart/#enhanced-ecommerce)
- [Gravity Forms](https://wpfusion.com/documentation/lead-generation/gravity-forms/#enhanced-ecommerce)
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/#enhanced-ecommerce)
- [MemberPress](https://wpfusion.com/documentation/integrations/memberpress/#enhanced-ecommerce)
- and [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/#enhanced-ecommerce)

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#getting-started) Getting Started

After you install the Ecommerce Addon (or update to the latest version), WP Fusion will load a list of all configured products in your Infusionsoft account, and attempt to match them up with existing products in your store.

When you go to configure a product in one of our supported plugins, you’ll see a new dropdown field where you can link a product on your store with a product already in your Infusionsoft account.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20449'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-ecommerce-product-config.jpg)

If you don’t already have the products created in Infusionsoft, don’t worry… WP Fusion will automatically create them for you at the time of checkout, based on the existing product details.

WP Fusion will intelligently detect variable products in WooCommerce and create additional products in Infusionsoft based on those variations.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#how-it-works) How it Works

When a customer checks out on your site, WP Fusion will create a new order in Infusionsoft with the products purchased, quantities, and total sale value.

WP Fusion will also add line items to the order for additional line items such as taxes, shipping, and any coupons used. This sale data will be tied to the contact record who made the purchase.

Any recurring payments, such as from WooCommerce subscriptions, will also automatically be added once the automatic payment has completed successfully.

**Note:** It is currently [not possible to refund an order over the Infusionsoft / Keap API](https://developer.infusionsoft.com/faqs/add-refund-order-api/). If you refund an order in WordPress it will still show as paid in Infusionsoft. The WP Fusion logs and WooCommerce order notes will include a link to the order in Infusionsoft so you can log in and manually mark it refunded.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#how-it-looks) How it Looks

[![is-orders-overview](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20116'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2016/07/is-orders-overview.jpg) Orders will be displayed under the orders tab for each contact record.[![is-ss](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20460'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2016/07/is-ss.jpg) Clicking on an order will give you the full details of the order, including the products purchased, payment type, and any additional line items.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#affiliate-tracking) Affiliate Tracking

The Ecommerce Addon can detect affiliate links and referral partner links generated through Infusionsoft’s referral partner center.

Sales generated via a referral link will set the Sale Referral Partner on the order and any applicable commissions will be credited.

**Note:** For the best results with referral partner tracking, it’s recommended to enable the Infusionsoft tracking script. It can be [enabled in the WP Fusion settings](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/), or you can embed it yourself following the [instructions from Infusionsoft](https://help.infusionsoft.com/help/embed-tracking-code-into-your-website).

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20996%20906'%3E%3C/svg%3E)

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#modified-redirect-url) Modified redirect URL

To use referral links with WP Fusion, you’ll need to [modify your tracking links](https://help.infusionsoft.com/help/track-referral-activity-via-the-api) so they can pass data to outside services. This allows the tracking link to pass the affiliate ID to WP Fusion, so it can be synced back to Infusionsoft after someone makes a purchase.

There are two ways to do this:

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#using-the-referral-partner-code) Using the referral partner code

Each referral partner has a unique code. You can see this in the Referral Partners list in Infusionsoft.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20483'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-referral-partner-code.png)

You can manually create a tracking link by appending `?aff=CODE` to any link to your site.

For example if we wanted to give the partner Dwight (from the screenshot above), a link to our sales page, the URL could look like `https://mysite.com/sales-page/?aff=dwight`

This is a quick way to generate a tracking link for a specific partner.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#via-the-referral-partner-center) Via the Referral Partner Center

If you want your partners to generate their own links, you will need to use the [modified tracking link](https://help.infusionsoft.com/userguides/referral-partners/set-up-a-referral-partner-program/manage-referral-tracking-links-using-the-api).

Head to Referral Partners » Referral tracking links » Add a Referral Tracking link.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20549'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-referral-tracking-links.jpg)

Instead of entering the direct URL to your site, enter `https://appName.infusionsoft.com/aff.html?to=`, followed by the URL to your site. For example `https://APPNAME.infusionsoft.com/aff.html?to=https://mysite.com/` where `APPNAME` is the name of your Infusionsoft or Keap app.

The link will show up in the partner center for all your partners. When the link is clicked, Infusionsoft will append a `&affiliate=` parameter to the end of the URL which contains the ID of the tracked affiliate. WP Fusion will then use this to award the sale to the correct referral partner.

For more information, see [Standard referral tracking link modification](https://help.infusionsoft.com/help/track-referral-activity-via-the-api) in the Infusionsoft documentation.

#### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#testing) Testing

You can test the referral link tracking by following a tracking link and doing a test order. The WP Fusion logs will show a message indicating which referral partner ID is being credited with the sale.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20504'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-referral-logs.png) The WP Fusion activity logs show when a sale is being credited to a referral partner.

You can also confirm that the visitor is being tracked by following a tracking link and looking at your cookies in your browser’s developer tools.

[![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20289'%3E%3C/svg%3E)](https://wpfusion.com/wp-content/uploads/2016/07/infusionsoft-affiliate-cookies-scaled.jpg)

The referral partner ID will be indicated by the `is_aff` cookie.

### [\#](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/\#video-infusionsoft-enhanced-ecommerce) Video – Infusionsoft Enhanced Ecommerce

Here’s a video demo showing WP Fusion’s Enhanced Ecommerce integration in action (with WooCmmerce).

Enhanced Ecommerce - Infusionsoft from Very Good Plugins on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/920487274-aeac288f7f80f328183c707c085ae642ac0c05263b13b91a72e1cdbb4d0a3a21-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/41604818_60x60?sig=ace69b6b1138b8ce1b943b533c22a573a68660be0cb4d8b06fa1d5d796d9e271&v=1&region=us)](https://vimeo.com/verygoodplugins?fl=pl&fe=po)

Play

00:00

01:34

Settings

QualityAuto

Picture-in-PictureFullscreen

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

- [Overview](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#overview)
- [Getting Started](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#getting-started)
- [How it Works](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#how-it-works)
- [How it Looks](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#how-it-looks)
- [Affiliate Tracking](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#affiliate-tracking)
- [Modified redirect URL](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#modified-redirect-url)
- [Using the referral partner code](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#using-the-referral-partner-code)
- [Via the Referral Partner Center](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#via-the-referral-partner-center)
- [Testing](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#testing)
- [Video - Infusionsoft Enhanced Ecommerce](https://wpfusion.com/documentation/ecommerce-tracking/infusionsoft-ecommerce/#video-infusionsoft-enhanced-ecommerce)

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

[![Very Good Plugins LLC Logo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%3E%3C/svg%3E)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)