---
url: "https://wpfusion.com/documentation/page-builders/beaver-builder/"
title: "Connect Beaver Builder to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/page-builders/beaver-builder/#content)

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

# Beaver Builder

- Published onMay 19, 2018
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Page Builders](https://wpfusion.com/documentation/#page-builders)
- /
- Beaver Builder

### [\#](https://wpfusion.com/documentation/page-builders/beaver-builder/\#overview) Overview

WP Fusion includes an integration with [Beaver Builder](https://www.wpbeaverbuilder.com/) to let you control visibility of modules based on a logged in user’s tags in your CRM. You can also personalize post grids in Beaver Builder based on a user’s access permissions.

### [\#](https://wpfusion.com/documentation/page-builders/beaver-builder/\#module-visibility) Module Visibility

To set this up, open the settings for any row or module, and click on the Advanced tab. Under the Visibility section, you will see two options in the dropdown: “User Tags (any)”, and “User Tags (not).”

[![](https://wpfusion.com/wp-content/uploads/2018/05/beaver-builder-1-1024x422.jpg)](https://wpfusion.com/wp-content/uploads/2018/05/beaver-builder-1.jpg)

In the select box, you can select any number of tags that are required to display that element.

- **User Tags (any):** If tags are specified, the element will be hidden from logged out users, and will only be displayed for users who have at least one of the selected tags.
- **User Tags (not):** The element will _not be shown_ to users who have any of the specified tags.

The second method is useful for hiding content like popups and lead forms from subscribers or paying members.

If you select “User Tags (not)”, an additional option will appear: **Logged Out Behavior**. This has two options:

- **Default (hidden):** The element will not be shown to users who have any of the specified tags, and will _not be shown to guests_.
- **Display:** The element will not be shown to users who have any of the specified tags, but _will be shown to guests_.

### [\#](https://wpfusion.com/documentation/page-builders/beaver-builder/\#filter-queries) Filter Queries

In the WP Fusion general settings there is a [Filter Queries setting](https://wpfusion.com/documentation/getting-started/meta-box/#filter-queries) that lets you hide all posts on your site if a user doesn’t have the right access permissions to access that post.

This works with the Beaver Builder Posts module as well, but there may be situations where you need to leave that option turned off globally, but do want to enable query filtering on a single Beaver Builder posts list. For example to show a personalized list of courses or products that are available to that user.

To enable this on a single Posts module, set the _Source_ to Custom Query, and at the bottom of the Content tab, set _Filter Queries_ to Yes.

[![](https://wpfusion.com/wp-content/uploads/2018/05/beaver-builder-filter-queries.jpg)](https://wpfusion.com/wp-content/uploads/2018/05/beaver-builder-filter-queries.jpg)

With this enabled any posts that the user doesn’t have the correct tags to access will be removed from the posts listing.

### [\#](https://wpfusion.com/documentation/page-builders/beaver-builder/\#beaver-themer) Beaver Themer

With the [Beaver Themer](https://www.wpbeaverbuilder.com/beaver-themer/) plugin installed, WP Fusion registers additional options in [the conditional logic editor](https://kb.wpbeaverbuilder.com/article/674-beaver-themer-conditional-logic). These can be used to create display rules based on a user’s CRM tags that are more complex than the options available when using Beaver Builder alone.

[![](https://wpfusion.com/wp-content/uploads/2018/05/beaver-themer-1024x785.jpg)](https://wpfusion.com/wp-content/uploads/2018/05/beaver-themer-scaled.jpg)

From the conditions dropdown, select **User’s CRM Tags** and then you can select either **contains** or **does not contain**, and select a CRM tag.

The rules will be calculated when a page is displayed and the element will be hidden or shown based on the current user’s tags in your CRM.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Beaver Builder to ActiveCampaign](https://wpfusion.com/connect/connect-beaver-builder-to-activecampaign/)  \|
- [Connect Beaver Builder to AgileCRM](https://wpfusion.com/connect/connect-beaver-builder-to-agilecrm/)  \|
- [Connect Beaver Builder to Autopilot](https://wpfusion.com/connect/connect-beaver-builder-to-autopilot/)  \|
- [Connect Beaver Builder to Bento](https://wpfusion.com/connect/connect-beaver-builder-to-bento/)  \|
- [Connect Beaver Builder to BirdSend](https://wpfusion.com/connect/connect-beaver-builder-to-birdsend/)  \|
- [Connect Beaver Builder to Brevo](https://wpfusion.com/connect/connect-beaver-builder-to-brevo/)  \|
- [Connect Beaver Builder to Capsule](https://wpfusion.com/connect/connect-beaver-builder-to-capsule/)  \|
- [Connect Beaver Builder to Constant Contact](https://wpfusion.com/connect/connect-beaver-builder-to-constant-contact/)  \|
- [Connect Beaver Builder to ConvertKit](https://wpfusion.com/connect/connect-beaver-builder-to-convertkit/)  \|
- [Connect Beaver Builder to ConvesioConvert](https://wpfusion.com/connect/connect-beaver-builder-to-convesioconvert/)  \|
- [Connect Beaver Builder to Copper](https://wpfusion.com/connect/connect-beaver-builder-to-copper/)  \|
- [Connect Beaver Builder to Customer.io](https://wpfusion.com/connect/connect-beaver-builder-to-customer-io/)  \|
- [Connect Beaver Builder to Customerly](https://wpfusion.com/connect/connect-beaver-builder-to-customerly/)  \|
- [Connect Beaver Builder to Drip](https://wpfusion.com/connect/connect-beaver-builder-to-drip/)  \|
- [Connect Beaver Builder to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-beaver-builder-to-dynamics-365-marketing/)  \|
- [Connect Beaver Builder to EmailOctopus](https://wpfusion.com/connect/connect-beaver-builder-to-emailoctopus/)  \|
- [Connect Beaver Builder to EngageBay](https://wpfusion.com/connect/connect-beaver-builder-to-engagebay/)  \|
- [Connect Beaver Builder to Flexie](https://wpfusion.com/connect/connect-beaver-builder-to-flexie/)  \|
- [Connect Beaver Builder to FluentCRM](https://wpfusion.com/connect/connect-beaver-builder-to-fluentcrm/)  \|
- [Connect Beaver Builder to FunnelKit](https://wpfusion.com/connect/connect-beaver-builder-to-funnelkit/)  \|
- [Connect Beaver Builder to Gist](https://wpfusion.com/connect/connect-beaver-builder-to-gist/)  \|
- [Connect Beaver Builder to Groundhogg](https://wpfusion.com/connect/connect-beaver-builder-to-groundhogg/)  \|
- [Connect Beaver Builder to HighLevel](https://wpfusion.com/connect/connect-beaver-builder-to-highlevel/)  \|
- [Connect Beaver Builder to HubSpot](https://wpfusion.com/connect/connect-beaver-builder-to-hubspot/)  \|
- [Connect Beaver Builder to Infusionsoft](https://wpfusion.com/connect/connect-beaver-builder-to-infusionsoft/)  \|
- [Connect Beaver Builder to Intercom](https://wpfusion.com/connect/connect-beaver-builder-to-intercom/)  \|
- [Connect Beaver Builder to Jetpack CRM](https://wpfusion.com/connect/connect-beaver-builder-to-jetpack-crm/)  \|
- [Connect Beaver Builder to Kartra](https://wpfusion.com/connect/connect-beaver-builder-to-kartra/)  \|
- [Connect Beaver Builder to Keap](https://wpfusion.com/connect/connect-beaver-builder-to-keap/)  \|
- [Connect Beaver Builder to Klaviyo](https://wpfusion.com/connect/connect-beaver-builder-to-klaviyo/)  \|
- [Connect Beaver Builder to KlickTipp](https://wpfusion.com/connect/connect-beaver-builder-to-klicktipp/)  \|
- [Connect Beaver Builder to Loopify](https://wpfusion.com/connect/connect-beaver-builder-to-loopify/)  \|
- [Connect Beaver Builder to MailChimp](https://wpfusion.com/connect/connect-beaver-builder-to-mailchimp/)  \|
- [Connect Beaver Builder to MailerLite](https://wpfusion.com/connect/connect-beaver-builder-to-mailerlite/)  \|
- [Connect Beaver Builder to Mailjet](https://wpfusion.com/connect/connect-beaver-builder-to-mailjet/)  \|
- [Connect Beaver Builder to MailPoet](https://wpfusion.com/connect/connect-beaver-builder-to-mailpoet/)  \|
- [Connect Beaver Builder to Maropost](https://wpfusion.com/connect/connect-beaver-builder-to-maropost/)  \|
- [Connect Beaver Builder to Mautic](https://wpfusion.com/connect/connect-beaver-builder-to-mautic/)  \|
- [Connect Beaver Builder to NationBuilder](https://wpfusion.com/connect/connect-beaver-builder-to-nationbuilder/)  \|
- [Connect Beaver Builder to Omnisend](https://wpfusion.com/connect/connect-beaver-builder-to-omnisend/)  \|
- [Connect Beaver Builder to Ontraport](https://wpfusion.com/connect/connect-beaver-builder-to-ontraport/)  \|
- [Connect Beaver Builder to Ortto](https://wpfusion.com/connect/connect-beaver-builder-to-ortto/)  \|
- [Connect Beaver Builder to Pipedrive](https://wpfusion.com/connect/connect-beaver-builder-to-pipedrive/)  \|
- [Connect Beaver Builder to Platformly](https://wpfusion.com/connect/connect-beaver-builder-to-platformly/)  \|
- [Connect Beaver Builder to Quentn](https://wpfusion.com/connect/connect-beaver-builder-to-quentn/)  \|
- [Connect Beaver Builder to Salesflare](https://wpfusion.com/connect/connect-beaver-builder-to-salesflare/)  \|
- [Connect Beaver Builder to Salesforce](https://wpfusion.com/connect/connect-beaver-builder-to-salesforce/)  \|
- [Connect Beaver Builder to Sender](https://wpfusion.com/connect/connect-beaver-builder-to-sender/)  \|
- [Connect Beaver Builder to SendFox](https://wpfusion.com/connect/connect-beaver-builder-to-sendfox/)  \|
- [Connect Beaver Builder to Tubular](https://wpfusion.com/connect/connect-beaver-builder-to-tubular/)  \|
- [Connect Beaver Builder to User.com](https://wpfusion.com/connect/connect-beaver-builder-to-user-com/)  \|
- [Connect Beaver Builder to WP ERP](https://wpfusion.com/connect/connect-beaver-builder-to-wp-erp/)  \|
- [Connect Beaver Builder to Zoho](https://wpfusion.com/connect/connect-beaver-builder-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/page-builders/beaver-builder/#overview)
- [Module Visibility](https://wpfusion.com/documentation/page-builders/beaver-builder/#module-visibility)
- [Filter Queries](https://wpfusion.com/documentation/page-builders/beaver-builder/#filter-queries)
- [Beaver Themer](https://wpfusion.com/documentation/page-builders/beaver-builder/#beaver-themer)

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