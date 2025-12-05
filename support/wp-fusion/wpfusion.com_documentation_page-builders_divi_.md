---
url: "https://wpfusion.com/documentation/page-builders/divi/"
title: "Connect Divi to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/page-builders/divi/#content)

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

# Divi

- Published onMay 19, 2018
- Last updated on March 31, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Page Builders](https://wpfusion.com/documentation/#page-builders)
- /
- Divi

### [\#](https://wpfusion.com/documentation/page-builders/divi/\#overview) Overview

WP Fusion lets you control the visibility of Divi modules based on a logged-in user’s CRM tags.

When editing a module, select the Advanced tab, and scroll down to the Visibility section.

[![user interface of a call to action settings menu. it includes options for content, design, and advanced settings. the required infusionsoft tags are member, active subscription, and the excluded tag is payment failed.](https://wpfusion.com/wp-content/uploads/2018/05/divi-visibility-settings-775x1024.jpg)](https://wpfusion.com/wp-content/uploads/2018/05/divi-visibility-settings.jpg)

There are two settings:

- **Required tags (any):** You can enter a comma-separated list of tag names or tag IDs. The user must have at least one of the listed tags to see the module.
- **Required tags (all):** The user must have _all_ of the tags listed here to see the module.
- **Required tags (not):** If the user has _any_ of the tags listed here, the module will be hidden.

#### [\#](https://wpfusion.com/documentation/page-builders/divi/\#advanced-method) Advanced method

For more advanced control, install and activate the [Content Visibility for Divi](https://wordpress.org/plugins/content-visibility-for-divi-builder/) plugin. When editing any module, you’ll now see a new setting where you can put in rules regarding when that module should be displayed.

![](https://wpfusion.com/wp-content/uploads/2018/05/divi-1024x392.jpg)

The setting accepts any PHP expression that evaluates to either “true” or “false”. Using WP Fusion’s [has\_tag() function](https://wpfusion.com/documentation/functions/has_tag/) you can create very specific rules regarding when a module should be displayed.

For example:

- Require the tag _Active Subscriber_ to view the module:

`wpf_has_tag( 'Active Subscriber' )`
- Require both the _Active Subscriber_ and _Gold Member_ tags to view the module:

`wpf_has_tag( 'Active Subscriber' ) && wpf_has_tag( 'Gold Member' )`
- Require either the _Active Subscriber_ or _Gold Member_ tags:

`wpf_has_tag( 'Active Subscriber' ) || wpf_has_tag( 'Gold Member' )`
- Only show the module if the user is logged in and does _not_ have the tag _Payment Failed:_

`! wpf_has_tag( 'Payment Failed' )`

### [\#](https://wpfusion.com/documentation/page-builders/divi/\#dynamic-css) Dynamic CSS

Divi has a feature called Dynamic CSS, which can generate a CSS file for your pages based on just the elements that are visible on the page.

This feature has been known to potentially cause problems with conditionally displaying Divi widgets (both with WP Fusion and Content Visibility).

The reason is, if a user views a page and there are hidden elements, the CSS for that page will be generated _without_ the CSS for the protected elements.

Then when another user views the page and has access to the protected elements, they will be able to view the content (the HTML), but any custom style applied to the elements will be missing, since it wasn’t generated with the dynamic CSS.

[![](https://wpfusion.com/wp-content/uploads/2018/05/divi-disable-dynamic-css-1024x633.jpg)](https://wpfusion.com/wp-content/uploads/2018/05/divi-disable-dynamic-css.jpg)

If you have issues with irregular styling using WP Fusion and Divi, it’s recommended to disable the Dynamic Module Framework and Dynamic CSS features in the Divi general settings.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Divi to ActiveCampaign](https://wpfusion.com/connect/connect-divi-to-activecampaign/)  \|
- [Connect Divi to AgileCRM](https://wpfusion.com/connect/connect-divi-to-agilecrm/)  \|
- [Connect Divi to Autopilot](https://wpfusion.com/connect/connect-divi-to-autopilot/)  \|
- [Connect Divi to Bento](https://wpfusion.com/connect/connect-divi-to-bento/)  \|
- [Connect Divi to BirdSend](https://wpfusion.com/connect/connect-divi-to-birdsend/)  \|
- [Connect Divi to Brevo](https://wpfusion.com/connect/connect-divi-to-brevo/)  \|
- [Connect Divi to Capsule](https://wpfusion.com/connect/connect-divi-to-capsule/)  \|
- [Connect Divi to Constant Contact](https://wpfusion.com/connect/connect-divi-to-constant-contact/)  \|
- [Connect Divi to ConvertKit](https://wpfusion.com/connect/connect-divi-to-convertkit/)  \|
- [Connect Divi to ConvesioConvert](https://wpfusion.com/connect/connect-divi-to-convesioconvert/)  \|
- [Connect Divi to Copper](https://wpfusion.com/connect/connect-divi-to-copper/)  \|
- [Connect Divi to Customer.io](https://wpfusion.com/connect/connect-divi-to-customer-io/)  \|
- [Connect Divi to Customerly](https://wpfusion.com/connect/connect-divi-to-customerly/)  \|
- [Connect Divi to Drip](https://wpfusion.com/connect/connect-divi-to-drip/)  \|
- [Connect Divi to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-divi-to-dynamics-365-marketing/)  \|
- [Connect Divi to EmailOctopus](https://wpfusion.com/connect/connect-divi-to-emailoctopus/)  \|
- [Connect Divi to EngageBay](https://wpfusion.com/connect/connect-divi-to-engagebay/)  \|
- [Connect Divi to Flexie](https://wpfusion.com/connect/connect-divi-to-flexie/)  \|
- [Connect Divi to FluentCRM](https://wpfusion.com/connect/connect-divi-to-fluentcrm/)  \|
- [Connect Divi to FunnelKit](https://wpfusion.com/connect/connect-divi-to-funnelkit/)  \|
- [Connect Divi to Gist](https://wpfusion.com/connect/connect-divi-to-gist/)  \|
- [Connect Divi to Groundhogg](https://wpfusion.com/connect/connect-divi-to-groundhogg/)  \|
- [Connect Divi to HighLevel](https://wpfusion.com/connect/connect-divi-to-highlevel/)  \|
- [Connect Divi to HubSpot](https://wpfusion.com/connect/connect-divi-to-hubspot/)  \|
- [Connect Divi to Infusionsoft](https://wpfusion.com/connect/connect-divi-to-infusionsoft/)  \|
- [Connect Divi to Intercom](https://wpfusion.com/connect/connect-divi-to-intercom/)  \|
- [Connect Divi to Jetpack CRM](https://wpfusion.com/connect/connect-divi-to-jetpack-crm/)  \|
- [Connect Divi to Kartra](https://wpfusion.com/connect/connect-divi-to-kartra/)  \|
- [Connect Divi to Keap](https://wpfusion.com/connect/connect-divi-to-keap/)  \|
- [Connect Divi to Klaviyo](https://wpfusion.com/connect/connect-divi-to-klaviyo/)  \|
- [Connect Divi to KlickTipp](https://wpfusion.com/connect/connect-divi-to-klicktipp/)  \|
- [Connect Divi to Loopify](https://wpfusion.com/connect/connect-divi-to-loopify/)  \|
- [Connect Divi to MailChimp](https://wpfusion.com/connect/connect-divi-to-mailchimp/)  \|
- [Connect Divi to MailerLite](https://wpfusion.com/connect/connect-divi-to-mailerlite/)  \|
- [Connect Divi to Mailjet](https://wpfusion.com/connect/connect-divi-to-mailjet/)  \|
- [Connect Divi to MailPoet](https://wpfusion.com/connect/connect-divi-to-mailpoet/)  \|
- [Connect Divi to Maropost](https://wpfusion.com/connect/connect-divi-to-maropost/)  \|
- [Connect Divi to Mautic](https://wpfusion.com/connect/connect-divi-to-mautic/)  \|
- [Connect Divi to NationBuilder](https://wpfusion.com/connect/connect-divi-to-nationbuilder/)  \|
- [Connect Divi to Omnisend](https://wpfusion.com/connect/connect-divi-to-omnisend/)  \|
- [Connect Divi to Ontraport](https://wpfusion.com/connect/connect-divi-to-ontraport/)  \|
- [Connect Divi to Ortto](https://wpfusion.com/connect/connect-divi-to-ortto/)  \|
- [Connect Divi to Pipedrive](https://wpfusion.com/connect/connect-divi-to-pipedrive/)  \|
- [Connect Divi to Platformly](https://wpfusion.com/connect/connect-divi-to-platformly/)  \|
- [Connect Divi to Quentn](https://wpfusion.com/connect/connect-divi-to-quentn/)  \|
- [Connect Divi to Salesflare](https://wpfusion.com/connect/connect-divi-to-salesflare/)  \|
- [Connect Divi to Salesforce](https://wpfusion.com/connect/connect-divi-to-salesforce/)  \|
- [Connect Divi to Sender](https://wpfusion.com/connect/connect-divi-to-sender/)  \|
- [Connect Divi to SendFox](https://wpfusion.com/connect/connect-divi-to-sendfox/)  \|
- [Connect Divi to Tubular](https://wpfusion.com/connect/connect-divi-to-tubular/)  \|
- [Connect Divi to User.com](https://wpfusion.com/connect/connect-divi-to-user-com/)  \|
- [Connect Divi to WP ERP](https://wpfusion.com/connect/connect-divi-to-wp-erp/)  \|
- [Connect Divi to Zoho](https://wpfusion.com/connect/connect-divi-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/page-builders/divi/#overview)
- [Advanced method](https://wpfusion.com/documentation/page-builders/divi/#advanced-method)
- [Dynamic CSS](https://wpfusion.com/documentation/page-builders/divi/#dynamic-css)

### You may also like

[![2516825 freemium account blog image v2 121724](https://wpfusion.com/wp-content/uploads/2024/12/2516825_Freemium-Account-Blog-Image_v2_121724-300x158.jpg)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Offer Freemium or Paywall Content/Courses in WordPress (Complete Guide)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

In this tutorial, we look at ways WP Fusion can be used to offer a mix of free and premium blog content or courses, by restricting access based on tags in your CRM to create a secure and personalized user experience.

### In this chapter

- [Beaver Builder](https://wpfusion.com/documentation/page-builders/beaver-builder/ "Beaver Builder")
- [Breakdance](https://wpfusion.com/documentation/page-builders/breakdance/ "Breakdance")
- [Bricks](https://wpfusion.com/documentation/page-builders/bricks/ "Bricks")
- [Divi](https://wpfusion.com/documentation/page-builders/divi/ "Divi")
- [Elementor](https://wpfusion.com/documentation/page-builders/elementor/ "Elementor")
- [Gutenberg](https://wpfusion.com/documentation/page-builders/gutenberg/ "Gutenberg")
- [Oxygen](https://wpfusion.com/documentation/page-builders/oxygen/ "Oxygen")
- [Thrive Architect](https://wpfusion.com/documentation/page-builders/thrive-architect/ "Thrive Architect")
- [WPBakery Page Builder](https://wpfusion.com/documentation/page-builders/wpbakery-page-builder/ "WPBakery Page Builder")

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