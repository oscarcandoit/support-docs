---
url: "https://wpfusion.com/documentation/tutorials/thrivecart/"
title: "ThriveCart | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/tutorials/thrivecart/#content)

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

# ThriveCart

- Published onMay 30, 2019
- Last updated on July 16, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Tutorials](https://wpfusion.com/documentation/#tutorials)
- /
- ThriveCart

### [\#](https://wpfusion.com/documentation/tutorials/thrivecart/\#overview) Overview

Using WP Fusion with ThriveCart you can create a success URL pointed at your site that will create a new WordPress user and log them in so they can access their purchased content.

**Heads up!** This is an advanced feature. It is one of the more difficult things to set up with WP Fusion. It often requires extra configuration time and doesn’t work reliably on all hosts. If you’re not comfortable debugging webhooks and running multiple tests, then consider selling your products with [WooCommerce](https://wpfusion.com/documentation/ecommerce/woocommerce/).

#### [\#](https://wpfusion.com/documentation/tutorials/thrivecart/\#setup) Setup

First enable the setting for **ThriveCart Auto Login** from the Advanced settings tab in WP Fusion.

[![](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-1-1024x90.jpg)](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-1.jpg)

Then in ThriveCart on the Fulfillment tab for your product, choose **Send them to a URL** for the _What should happen after purchase?_ setting.

[![](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-2-1024x638.jpg)](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-2.jpg)

An example URL will look like `https://mysite.com/?wpf_action=thrivecart&access_key=KEY&apply_tags=Membership%20Tag`.

There are a few parts to this

- `https://mysite.com`: This is the URL to your website. It can be the home page or any other page on your site.
- `?wpf_action=thrivecart`: This tells WP Fusion to receive the data from ThriveCart, create a new user, and log them in.
- `&access_key=`: This is the access key from the bottom of the General settings tab in WP Fusion.
- `&apply_tags=`: Here you can optionally specify tags to be applied for the new user, for example to unlock content or trigger an automated enrollment.
- You can use either tag IDs or tag names, separated by commas. The tags must be URL encoded. You can use [urlencoder.org](https://urlencoder.org/) to encode your tags. For example `&apply_tags=Tag%20One%2CTag%20Two`

For more information on how to use success URLs in ThriveCart, [see this article](https://support.thrivecart.com/help/your-thank-you-success-page/).

#### [\#](https://wpfusion.com/documentation/tutorials/thrivecart/\#how-it-works) How it works

When a customer checks out they’ll click the access link to be taken to your site. When WP Fusion detects the ThriveCart link it will create a new user based on the details provided at checkout.

[![](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-access-link-1024x726.jpg)](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-access-link.jpg) The customer must click the **_Click Here to Access_** link after checkout, or else no data will be synced.

The new user will be added to your active CRM, and any tags you’ve specified will be applied.

The new user will automatically be logged in and able to access their purchased content.

If a user already exists with the same email then the new tags will be applied and the existing user will be logged in.

**Note:** No data is sent to your site until the customer clicks the access link on the order confirmed page. If the customer doesn’t click the link, they won’t receive a new user account. For that reason it’s recommended to also connect ThriveCart to your CRM [via a behavior rule](https://support.thrivecart.com/help/connecting-an-autoresponder/), and [use a webhook](https://wpfusion.com/documentation/#webhooks) to ensure a user account is always created.

#### [\#](https://wpfusion.com/documentation/tutorials/thrivecart/\#passwords) Passwords

A random password will be generated for the new user.

[![](https://wpfusion.com/wp-content/uploads/2016/01/password-1024x208.png)](https://wpfusion.com/wp-content/uploads/2016/01/password.png)

If you’ve enabled the setting for **Return Password** from the WP Fusion settings then this password will be sent back to the specified custom field in your CRM.

You can then send the user a welcome email containing their password.

#### [\#](https://wpfusion.com/documentation/tutorials/thrivecart/\#welcome-email) Welcome email

For the best deliverability it’s recommended to send the welcome email containing the new user’s password from your CRM. However if you would prefer WordPress to send the welcome email, you can append `&send_notification=true` to your success URL.

WordPress will then send out the default welcome email inviting the new user to set their password.

#### [\#](https://wpfusion.com/documentation/tutorials/thrivecart/\#cancelations) Cancelations

ThriveCart does not communicate subscription cancelations or payment failures to WP Fusion. To remove a tag when someone cancels, you will need to [connect ThriveCart to your CRM using a behavior rule](https://support.thrivecart.com/help/adding-customers-to-your-autoresponder/).

#### [\#](https://wpfusion.com/documentation/tutorials/thrivecart/\#troubleshooting) Troubleshooting

The first step in troubleshooting the ThriveCart user creation is to enable the WP Fusion [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/). When a customer lands on the success URL, the logs will show the data that’s received from ThriveCart.

[![](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-logs-1024x497.jpg)](https://wpfusion.com/wp-content/uploads/2019/05/thrivecart-logs.jpg)

You will see a message _ThriveCart user creation triggered,_ followed by the data that was loaded from ThriveCart. The logs will also show the password that was generated, and any tags that were applied.

If you’re having trouble with ThriveCart success URLs, please [contact our support](https://wpfusion.com/contact/).

#### [\#](https://wpfusion.com/documentation/tutorials/thrivecart/\#video-thrivecart) Video – ThriveCart

ThriveCart from Very Good Plugins on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/943953754-20a5f4808e618e03cca0f8d43e43d194e2f4cde60e9fc9aa47a10d17dcca8745-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/41604818_60x60?sig=ace69b6b1138b8ce1b943b533c22a573a68660be0cb4d8b06fa1d5d796d9e271&v=1&region=us)](https://vimeo.com/verygoodplugins?fl=pl&fe=po)

Play

00:00

01:09

Settings

QualityAuto

Picture-in-PictureFullscreen

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/tutorials/thrivecart/#overview)
- [Setup](https://wpfusion.com/documentation/tutorials/thrivecart/#setup)
- [How it works](https://wpfusion.com/documentation/tutorials/thrivecart/#how-it-works)
- [Passwords](https://wpfusion.com/documentation/tutorials/thrivecart/#passwords)
- [Welcome email](https://wpfusion.com/documentation/tutorials/thrivecart/#welcome-email)
- [Cancelations](https://wpfusion.com/documentation/tutorials/thrivecart/#cancelations)
- [Troubleshooting](https://wpfusion.com/documentation/tutorials/thrivecart/#troubleshooting)
- [Video - ThriveCart](https://wpfusion.com/documentation/tutorials/thrivecart/#video-thrivecart)

### In this chapter

- [Auto Login](https://wpfusion.com/documentation/tutorials/auto-login-links/ "Auto Login")
- [Batch Operations / Exporting Data](https://wpfusion.com/documentation/tutorials/batch-operations/ "Batch Operations / Exporting Data")
- [Double Opt-Ins](https://wpfusion.com/documentation/tutorials/double-opt-ins/ "Double Opt-Ins")
- [Import Users](https://wpfusion.com/documentation/tutorials/import-users/ "Import Users")
- [Lead Source Tracking](https://wpfusion.com/documentation/tutorials/lead-source-tracking/ "Lead Source Tracking")
- [Link Click Tracking](https://wpfusion.com/documentation/tutorials/link-click-tracking/ "Link Click Tracking")
- [Menu Item Visibility](https://wpfusion.com/documentation/tutorials/menu-item-visibility/ "Menu Item Visibility")
- [Site Tracking Scripts](https://wpfusion.com/documentation/tutorials/site-tracking-scripts/ "Site Tracking Scripts")
- [Switching CRMs](https://wpfusion.com/documentation/tutorials/switching-crms/ "Switching CRMs")
- [Sync Users Between Sites](https://wpfusion.com/documentation/tutorials/sync-user-accounts/ "Sync Users Between Sites")
- [ThriveCart](https://wpfusion.com/documentation/tutorials/thrivecart/ "ThriveCart")

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