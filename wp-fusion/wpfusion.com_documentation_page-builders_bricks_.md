---
url: "https://wpfusion.com/documentation/page-builders/bricks/"
title: "Connect Bricks to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/page-builders/bricks/#content)

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

# Bricks

- Published onJune 22, 2022
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Page Builders](https://wpfusion.com/documentation/#page-builders)
- /
- Bricks

### [\#](https://wpfusion.com/documentation/page-builders/bricks/\#overview) Overview

WP Fusion includes an integration with the [Bricks visual site builder](https://bricksbuilder.io/) to let you control visibility of page elements based on a user’s tags or lists in [your CRM or marketing automation platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

### [\#](https://wpfusion.com/documentation/page-builders/bricks/\#access-control) Access Control

To set up access rules on Bricks elements, open the settings for any widget, and click on the WP Fusion control group at the bottom of the Content tab.

[![](https://wpfusion.com/wp-content/uploads/2022/06/bricks-widget-settings.jpg)](https://wpfusion.com/wp-content/uploads/2022/06/bricks-widget-settings.jpg) WP Fusion’s Brick’s integration settings can be found on the Content tab when editing any element.

The **Visibility** dropdown sets the default visibility for the widget. The options are:

- **Everyone:** The widget will be visible to everyone regardless of whether they’re logged in or not (this is the default)
- **Logged in users:** The widget will only be visible to logged in users
- **Logged out users:** The widget will only be visible to guests on your site
- **Users who can access the post:** Visibility will be determined based on the access rules configured on the underlying post ( [see below](https://wpfusion.com/documentation/page-builders/bricks/#inherting-access-rules-from-posts))
- **Users who cannot access post:** Users who _cannot_ access the post, based on the access rules configured on the post

Depending on the visibility mode you’ve selected, there will be additional options

- **Required Tags (any):** The element will only be shown if the user is logged in and has at least one of the specified tags
- **Required Tags (all):** The element will only be shown if the user is logged in and has _all_ of the specified tags
- **Required Tags (not):** If the Visibility mode is set to _Everyone_, the element will be shown to guests, and hidden from logged in users if they _have_ any of the specified tags. If the visibility mode is set to _Logged In Users_, the element will be hidden from guests, and hidden from logged in users if they _have_ any of the specified tags

#### [\#](https://wpfusion.com/documentation/page-builders/bricks/\#visibility-indicator) Visibility indicator

When editing content with Bricks, widgets that are protected by WP Fusion access rules will be displayed with an orange dotted line.

[![screenshot](https://wpfusion.com/wp-content/uploads/2022/06/bricks-visibility-indicator-1024x418.jpg)](https://wpfusion.com/wp-content/uploads/2022/06/bricks-visibility-indicator-scaled.jpg) Elements protected by WP Fusion access rules are displayed with an orange visibility indicator in the Bricks editor.

Note that the visibility indicator style is applied when the editor is loaded, so after making changes to an element’s visibility you will need to save and reload the editor to see the indicator.

#### [\#](https://wpfusion.com/documentation/page-builders/bricks/\#inheriting-access-rules-from-posts) Inheriting access rules from posts

Bricks includes a [powerful template builder](https://academy.bricksbuilder.io/article/an-intro-to-templates/) that allows you to create templates for specific post types, grids, and archives.

WP Fusion supports the template builder by allowing you to set the visibility of an element based on the rules [configured in the WP Fusion meta box](https://wpfusion.com/documentation/getting-started/access-control/) on the underlying post.

To use this feature, select any element, and set the WP Fusion _Visibility_ dropdown to either **Users who can access the post** or **Users who cannot access the post**.

[![screenshot](https://wpfusion.com/wp-content/uploads/2022/06/bricks-builder-inherit-access-rules.jpg)](https://wpfusion.com/wp-content/uploads/2022/06/bricks-builder-inherit-access-rules.jpg)

In this example, we’ve built a course grid where the buttons are shown dynamically based on the user’s tags in your CRM, and the [access rules](https://wpfusion.com/documentation/getting-started/access-control/) configured on the underlying course.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/07/elementor-inherit-access-rules-courses-1024x601.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-inherit-access-rules-courses.jpg) The buttons in the course catalog are displayed dynamically based on the user’s CRM tags.

The _Take This Course_ button is set to **Users who can access the post**, the _Upgrade to unlock_ button is set to **Users who cannot access the post**.

When the course grid is displayed, the buttons are shown dynamically based on the current user’s tags and the access rules configured on each course.

### [\#](https://wpfusion.com/documentation/page-builders/bricks/\#filter-queries) Filter Queries

WP Fusion adds an option to the Posts widgets which allows you to filter the displayed results using WP Fusion’s access rules.

To turn this on enable the setting for **Filter Queries** in the _WP Fusion_ control group (beneath the access settings).

[![](https://wpfusion.com/wp-content/uploads/2022/06/bricks-posts-widget-filter-queries.jpg)](https://wpfusion.com/wp-content/uploads/2022/06/bricks-posts-widget-filter-queries.jpg)

With this setting on, any posts the user doesn’t have access to will be removed from the results.

You can use this to create personalized post listings, for example of courses or media items.

This is the same as enabling [Filter Queries](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries) in the main WP Fusion settings, but it applies only to a single posts list at a time (which is better for performance).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Bricks to ActiveCampaign](https://wpfusion.com/connect/connect-bricks-to-activecampaign/)  \|
- [Connect Bricks to AgileCRM](https://wpfusion.com/connect/connect-bricks-to-agilecrm/)  \|
- [Connect Bricks to Autopilot](https://wpfusion.com/connect/connect-bricks-to-autopilot/)  \|
- [Connect Bricks to Bento](https://wpfusion.com/connect/connect-bricks-to-bento/)  \|
- [Connect Bricks to BirdSend](https://wpfusion.com/connect/connect-bricks-to-birdsend/)  \|
- [Connect Bricks to Brevo](https://wpfusion.com/connect/connect-bricks-to-brevo/)  \|
- [Connect Bricks to Capsule](https://wpfusion.com/connect/connect-bricks-to-capsule/)  \|
- [Connect Bricks to Constant Contact](https://wpfusion.com/connect/connect-bricks-to-constant-contact/)  \|
- [Connect Bricks to ConvertKit](https://wpfusion.com/connect/connect-bricks-to-convertkit/)  \|
- [Connect Bricks to ConvesioConvert](https://wpfusion.com/connect/connect-bricks-to-convesioconvert/)  \|
- [Connect Bricks to Copper](https://wpfusion.com/connect/connect-bricks-to-copper/)  \|
- [Connect Bricks to Customer.io](https://wpfusion.com/connect/connect-bricks-to-customer-io/)  \|
- [Connect Bricks to Customerly](https://wpfusion.com/connect/connect-bricks-to-customerly/)  \|
- [Connect Bricks to Drip](https://wpfusion.com/connect/connect-bricks-to-drip/)  \|
- [Connect Bricks to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-bricks-to-dynamics-365-marketing/)  \|
- [Connect Bricks to EmailOctopus](https://wpfusion.com/connect/connect-bricks-to-emailoctopus/)  \|
- [Connect Bricks to EngageBay](https://wpfusion.com/connect/connect-bricks-to-engagebay/)  \|
- [Connect Bricks to Flexie](https://wpfusion.com/connect/connect-bricks-to-flexie/)  \|
- [Connect Bricks to FluentCRM](https://wpfusion.com/connect/connect-bricks-to-fluentcrm/)  \|
- [Connect Bricks to FunnelKit](https://wpfusion.com/connect/connect-bricks-to-funnelkit/)  \|
- [Connect Bricks to Gist](https://wpfusion.com/connect/connect-bricks-to-gist/)  \|
- [Connect Bricks to Groundhogg](https://wpfusion.com/connect/connect-bricks-to-groundhogg/)  \|
- [Connect Bricks to HighLevel](https://wpfusion.com/connect/connect-bricks-to-highlevel/)  \|
- [Connect Bricks to HubSpot](https://wpfusion.com/connect/connect-bricks-to-hubspot/)  \|
- [Connect Bricks to Infusionsoft](https://wpfusion.com/connect/connect-bricks-to-infusionsoft/)  \|
- [Connect Bricks to Intercom](https://wpfusion.com/connect/connect-bricks-to-intercom/)  \|
- [Connect Bricks to Jetpack CRM](https://wpfusion.com/connect/connect-bricks-to-jetpack-crm/)  \|
- [Connect Bricks to Kartra](https://wpfusion.com/connect/connect-bricks-to-kartra/)  \|
- [Connect Bricks to Keap](https://wpfusion.com/connect/connect-bricks-to-keap/)  \|
- [Connect Bricks to Klaviyo](https://wpfusion.com/connect/connect-bricks-to-klaviyo/)  \|
- [Connect Bricks to KlickTipp](https://wpfusion.com/connect/connect-bricks-to-klicktipp/)  \|
- [Connect Bricks to Loopify](https://wpfusion.com/connect/connect-bricks-to-loopify/)  \|
- [Connect Bricks to MailChimp](https://wpfusion.com/connect/connect-bricks-to-mailchimp/)  \|
- [Connect Bricks to MailerLite](https://wpfusion.com/connect/connect-bricks-to-mailerlite/)  \|
- [Connect Bricks to Mailjet](https://wpfusion.com/connect/connect-bricks-to-mailjet/)  \|
- [Connect Bricks to MailPoet](https://wpfusion.com/connect/connect-bricks-to-mailpoet/)  \|
- [Connect Bricks to Maropost](https://wpfusion.com/connect/connect-bricks-to-maropost/)  \|
- [Connect Bricks to Mautic](https://wpfusion.com/connect/connect-bricks-to-mautic/)  \|
- [Connect Bricks to NationBuilder](https://wpfusion.com/connect/connect-bricks-to-nationbuilder/)  \|
- [Connect Bricks to Omnisend](https://wpfusion.com/connect/connect-bricks-to-omnisend/)  \|
- [Connect Bricks to Ontraport](https://wpfusion.com/connect/connect-bricks-to-ontraport/)  \|
- [Connect Bricks to Ortto](https://wpfusion.com/connect/connect-bricks-to-ortto/)  \|
- [Connect Bricks to Pipedrive](https://wpfusion.com/connect/connect-bricks-to-pipedrive/)  \|
- [Connect Bricks to Platformly](https://wpfusion.com/connect/connect-bricks-to-platformly/)  \|
- [Connect Bricks to Quentn](https://wpfusion.com/connect/connect-bricks-to-quentn/)  \|
- [Connect Bricks to Salesflare](https://wpfusion.com/connect/connect-bricks-to-salesflare/)  \|
- [Connect Bricks to Salesforce](https://wpfusion.com/connect/connect-bricks-to-salesforce/)  \|
- [Connect Bricks to Sender](https://wpfusion.com/connect/connect-bricks-to-sender/)  \|
- [Connect Bricks to SendFox](https://wpfusion.com/connect/connect-bricks-to-sendfox/)  \|
- [Connect Bricks to Tubular](https://wpfusion.com/connect/connect-bricks-to-tubular/)  \|
- [Connect Bricks to User.com](https://wpfusion.com/connect/connect-bricks-to-user-com/)  \|
- [Connect Bricks to WP ERP](https://wpfusion.com/connect/connect-bricks-to-wp-erp/)  \|
- [Connect Bricks to Zoho](https://wpfusion.com/connect/connect-bricks-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/page-builders/bricks/#overview)
- [Access Control](https://wpfusion.com/documentation/page-builders/bricks/#access-control)
- [Visibility indicator](https://wpfusion.com/documentation/page-builders/bricks/#visibility-indicator)
- [Inheriting access rules from posts](https://wpfusion.com/documentation/page-builders/bricks/#inheriting-access-rules-from-posts)
- [Filter Queries](https://wpfusion.com/documentation/page-builders/bricks/#filter-queries)

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