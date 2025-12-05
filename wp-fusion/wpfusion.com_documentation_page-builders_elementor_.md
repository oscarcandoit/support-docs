---
url: "https://wpfusion.com/documentation/page-builders/elementor/"
title: "Connect Elementor to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/page-builders/elementor/#content)

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

# Elementor

- Published onJuly 23, 2018
- Last updated on March 31, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Page Builders](https://wpfusion.com/documentation/#page-builders)
- /
- Elementor

### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#overview) Overview

WP Fusion includes an integration with [Elementor](https://wpfusion.com/go/elementor) to let you control visibility of page elements based on a user’s tags in your [CRM or marketing automation platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

WP Fusion also supports syncing Elementor Forms entries to your CRM. For more info on that, [see this page](https://wpfusion.com/documentation/lead-generation/elementor-forms/).

### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#access-control) Access Control

To set up access rules on Elementor elements, open the settings for any widget, and click on the Advanced tab. Under the WP Fusion section, you will see several settings.

[![](https://wpfusion.com/wp-content/uploads/2018/07/elementor-1.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-1.jpg)

The **Visibility** dropdown sets the default visibility for the widget. The options are:

- **Everyone:** The widget will be visible to everyone regardless of whether they’re logged in or not (this is the default)
- **Logged in users:** The widget will only be visible to logged in users
- **Logged out users:** The widget will only be visible to guests on your site
- **Users who can access the post:** Visibility will be determined based on the access rules configured on the underlying post ( [see below](https://wpfusion.com/documentation/page-builders/elementor/#inherting-access-rules-from-posts))
- **Users who cannot access post:** Users who _cannot_ access the post, based on the access rules configured on the post

Depending on the visibility mode you’ve selected, there will be additional options

- **Required Tags (any):** The element will only be shown if the user is logged in and has at least one of the specified tags
- **Required Tags (all):** The element will only be shown if the user is logged in and has _all_ of the specified tags
- **Required Tags (not):** If the Visibility mode is set to _Everyone_, the element will be shown to guests, and hidden from logged in users if they _have_ any of the specified tags. If the visibility mode is set to _Logged In Users_, the element will be hidden from guests, and hidden from logged in users if they _have_ any of the specified tags

#### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#visibility-indicator) Visibility indicator

When editing content with Elementor, widgets that are protected by WP Fusion access rules will be displayed with an orange dotted line.

[![](https://wpfusion.com/wp-content/uploads/2018/07/elementor-visibility-indicator-1024x444.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-visibility-indicator.jpg)

#### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#display-conditions) Display conditions

WP Fusion also supports [display conditions](https://elementor.com/help/show-and-hide-elements-on-a-page-display-conditions/) with Elementor Pro.

This allows you to combine tag-based access rules with other criteria such as the user’s role, the date, custom fields, and more.

[![screenshot of a display conditions editor for a webpage element. it displays three conditions based on infusionsoft tags and login status, using dropdown menus for options like is not and logged in. a button to add condition groups is visible.](https://wpfusion.com/wp-content/uploads/2018/07/elementor-visibility-conditions-1024x810.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-visibility-conditions.jpg)

#### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#inheriting-access-rules-from-posts) Inheriting access rules from posts

The [Loop Builder](https://elementor.com/blog/introducing-the-loop-builder/) is a powerful feature in Elementor that allows you to create custom “loops” (i.e. post grids) of other posts on your site. WP Fusion supports the loop builder by allowing you to set the visibility of an element based on the rules [configured in the WP Fusion meta box](https://wpfusion.com/documentation/getting-started/access-control/) on the underlying post.

To use this feature, select any element in a loop builder template, and set the WP Fusion _Visibility_ dropdown to either **Users who can access the post** or **Users who cannot access the post**.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/07/elementor-inherit-access-rules-1024x671.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-inherit-access-rules.jpg)

In this example, we’ve built a course grid where the buttons are shown dynamically based on the user’s tags in your CRM, and the [access rules](https://wpfusion.com/documentation/getting-started/access-control/) configured on the underlying post.

The _Take This Course_ button is set to **Users who can access the post**, the _Upgrade to unlock_ button is set to **Users who cannot access the post**.

When the course grid is displayed, the buttons are shown dynamically based on the current user’s tags and the access rules configured on each course.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/07/elementor-inherit-access-rules-courses-1024x601.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-inherit-access-rules-courses.jpg) The buttons in the course catalog are displayed dynamically based on the user’s CRM tags.

**Note:** to use this feature, you must set the _Cache Settings_ to “Inactive” under Advanced » Layout » Display Conditions for any widgets you’d like to be conditionally displayed.

[![screenshot](https://wpfusion.com/wp-content/uploads/2018/07/elementor-inherit-access-rules-cache-settings-1024x590.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-inherit-access-rules-cache-settings.jpg) The Cache Settings for the widget must be set to _Inactive_ to display the widget conditionally based on tags.

### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#hotspots) Hotspots

WP Fusion supports the [Hotspot Widget](https://elementor.com/help/hotspot-widget-pro/) with Elementor Pro, allowing you to conditionally display hotspots on images based on a user’s tags or lists in your connected CRM.

[![a colorful infographic with five sections: orange, purple, blue, and green zones labeled with course topics like welcome to the course, virtual currency, and paths & journeys. a sidebar shows hotspot settings and image editing options.](https://wpfusion.com/wp-content/uploads/2018/07/elementor-hotspots-1024x704.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-hotspots.jpg)

A great use case for this is creating interactive diagrams or maps that unlock new steps as users progress through course content on your site.

When editing any hotspot, you can select one or more required tags in your CRM from the “Required tags” dropdown. If set, the hotspot will only be shown to users who are logged in and have at least one of the specified tags.

**Heads up:** WP Fusion’s hotspot integration is not compatible with Elementor’s element caching. You will need to disable caching on the Hotspot widget by clicking on the widget, and going to Advanced » Layout » Cache Settings. Set the cache to _Inactive_.

### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#elementor-popups) Elementor Popups

With Elementor Pro, WP Fusion also adds the ability to control the display of popups based on a user’s tags. To set this up, first create your popup, and then open the Advanced Rules window.

[![](https://wpfusion.com/wp-content/uploads/2018/07/elementor-popups-1024x726.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-popups.jpg)

Click the toggle switch to turn on the WP Fusion condition. There are two options:

- **Show:** The popup will only be shown to logged in users who have at least one of the specified tags.
- **Hide:** The popup will be hidden from logged in users who have at least one of the specified tags.

### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#filter-queries) Filter Queries

WP Fusion adds an option to the Posts and Portfolio widgets in Elementor Pro which allows you to filter the displayed results using WP Fusion’s access rules.

To turn this on enable the setting for **Filter Queries** in the _Query_ tab of the widget settings.

[![](https://wpfusion.com/wp-content/uploads/2018/07/elementor-filter-queries.jpg)](https://wpfusion.com/wp-content/uploads/2018/07/elementor-filter-queries.jpg)

With this setting on, any posts the user doesn’t have access to will be removed from the results.

You can use this to create personalized post listings, for example of courses or media items.

Filter Queries is also supported with [Jet Engine’s Listing Grid widget](https://crocoblock.com/plugins/jetengine_wp/).

### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#tracking-clicks) Tracking clicks

WP Fusion can track clicks on Elementor buttons and elements by applying tags in your CRM. For more info see the bottom of [Link Click Tracking](https://wpfusion.com/documentation/tutorials/link-click-tracking/).

### [\#](https://wpfusion.com/documentation/page-builders/elementor/\#developers) Developers

WP Fusion includes one filter for Elementor which allows you to create more advanced visibility rules than are possible via the UI. You can learn more and find examples under [wpf\_elementor\_can\_access](https://wpfusion.com/documentation/filters/wpf_elementor_can_access/).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Elementor to ActiveCampaign](https://wpfusion.com/connect/connect-elementor-to-activecampaign/)  \|
- [Connect Elementor to AgileCRM](https://wpfusion.com/connect/connect-elementor-to-agilecrm/)  \|
- [Connect Elementor to Autopilot](https://wpfusion.com/connect/connect-elementor-to-autopilot/)  \|
- [Connect Elementor to Bento](https://wpfusion.com/connect/connect-elementor-to-bento/)  \|
- [Connect Elementor to BirdSend](https://wpfusion.com/connect/connect-elementor-to-birdsend/)  \|
- [Connect Elementor to Brevo](https://wpfusion.com/connect/connect-elementor-to-brevo/)  \|
- [Connect Elementor to Capsule](https://wpfusion.com/connect/connect-elementor-to-capsule/)  \|
- [Connect Elementor to Constant Contact](https://wpfusion.com/connect/connect-elementor-to-constant-contact/)  \|
- [Connect Elementor to ConvertKit](https://wpfusion.com/connect/connect-elementor-to-convertkit/)  \|
- [Connect Elementor to ConvesioConvert](https://wpfusion.com/connect/connect-elementor-to-convesioconvert/)  \|
- [Connect Elementor to Copper](https://wpfusion.com/connect/connect-elementor-to-copper/)  \|
- [Connect Elementor to Customer.io](https://wpfusion.com/connect/connect-elementor-to-customer-io/)  \|
- [Connect Elementor to Customerly](https://wpfusion.com/connect/connect-elementor-to-customerly/)  \|
- [Connect Elementor to Drip](https://wpfusion.com/connect/connect-elementor-to-drip/)  \|
- [Connect Elementor to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-elementor-to-dynamics-365-marketing/)  \|
- [Connect Elementor to EmailOctopus](https://wpfusion.com/connect/connect-elementor-to-emailoctopus/)  \|
- [Connect Elementor to EngageBay](https://wpfusion.com/connect/connect-elementor-to-engagebay/)  \|
- [Connect Elementor to Flexie](https://wpfusion.com/connect/connect-elementor-to-flexie/)  \|
- [Connect Elementor to FluentCRM](https://wpfusion.com/connect/connect-elementor-to-fluentcrm/)  \|
- [Connect Elementor to FunnelKit](https://wpfusion.com/connect/connect-elementor-to-funnelkit/)  \|
- [Connect Elementor to Gist](https://wpfusion.com/connect/connect-elementor-to-gist/)  \|
- [Connect Elementor to Groundhogg](https://wpfusion.com/connect/connect-elementor-to-groundhogg/)  \|
- [Connect Elementor to HighLevel](https://wpfusion.com/connect/connect-elementor-to-highlevel/)  \|
- [Connect Elementor to HubSpot](https://wpfusion.com/connect/connect-elementor-to-hubspot/)  \|
- [Connect Elementor to Infusionsoft](https://wpfusion.com/connect/connect-elementor-to-infusionsoft/)  \|
- [Connect Elementor to Intercom](https://wpfusion.com/connect/connect-elementor-to-intercom/)  \|
- [Connect Elementor to Jetpack CRM](https://wpfusion.com/connect/connect-elementor-to-jetpack-crm/)  \|
- [Connect Elementor to Kartra](https://wpfusion.com/connect/connect-elementor-to-kartra/)  \|
- [Connect Elementor to Keap](https://wpfusion.com/connect/connect-elementor-to-keap/)  \|
- [Connect Elementor to Klaviyo](https://wpfusion.com/connect/connect-elementor-to-klaviyo/)  \|
- [Connect Elementor to KlickTipp](https://wpfusion.com/connect/connect-elementor-to-klicktipp/)  \|
- [Connect Elementor to Loopify](https://wpfusion.com/connect/connect-elementor-to-loopify/)  \|
- [Connect Elementor to MailChimp](https://wpfusion.com/connect/connect-elementor-to-mailchimp/)  \|
- [Connect Elementor to MailerLite](https://wpfusion.com/connect/connect-elementor-to-mailerlite/)  \|
- [Connect Elementor to Mailjet](https://wpfusion.com/connect/connect-elementor-to-mailjet/)  \|
- [Connect Elementor to MailPoet](https://wpfusion.com/connect/connect-elementor-to-mailpoet/)  \|
- [Connect Elementor to Maropost](https://wpfusion.com/connect/connect-elementor-to-maropost/)  \|
- [Connect Elementor to Mautic](https://wpfusion.com/connect/connect-elementor-to-mautic/)  \|
- [Connect Elementor to NationBuilder](https://wpfusion.com/connect/connect-elementor-to-nationbuilder/)  \|
- [Connect Elementor to Omnisend](https://wpfusion.com/connect/connect-elementor-to-omnisend/)  \|
- [Connect Elementor to Ontraport](https://wpfusion.com/connect/connect-elementor-to-ontraport/)  \|
- [Connect Elementor to Ortto](https://wpfusion.com/connect/connect-elementor-to-ortto/)  \|
- [Connect Elementor to Pipedrive](https://wpfusion.com/connect/connect-elementor-to-pipedrive/)  \|
- [Connect Elementor to Platformly](https://wpfusion.com/connect/connect-elementor-to-platformly/)  \|
- [Connect Elementor to Quentn](https://wpfusion.com/connect/connect-elementor-to-quentn/)  \|
- [Connect Elementor to Salesflare](https://wpfusion.com/connect/connect-elementor-to-salesflare/)  \|
- [Connect Elementor to Salesforce](https://wpfusion.com/connect/connect-elementor-to-salesforce/)  \|
- [Connect Elementor to Sender](https://wpfusion.com/connect/connect-elementor-to-sender/)  \|
- [Connect Elementor to SendFox](https://wpfusion.com/connect/connect-elementor-to-sendfox/)  \|
- [Connect Elementor to Tubular](https://wpfusion.com/connect/connect-elementor-to-tubular/)  \|
- [Connect Elementor to User.com](https://wpfusion.com/connect/connect-elementor-to-user-com/)  \|
- [Connect Elementor to WP ERP](https://wpfusion.com/connect/connect-elementor-to-wp-erp/)  \|
- [Connect Elementor to Zoho](https://wpfusion.com/connect/connect-elementor-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/page-builders/elementor/#overview)
- [Access Control](https://wpfusion.com/documentation/page-builders/elementor/#access-control)
- [Visibility indicator](https://wpfusion.com/documentation/page-builders/elementor/#visibility-indicator)
- [Display conditions](https://wpfusion.com/documentation/page-builders/elementor/#display-conditions)
- [Inheriting access rules from posts](https://wpfusion.com/documentation/page-builders/elementor/#inheriting-access-rules-from-posts)
- [Hotspots](https://wpfusion.com/documentation/page-builders/elementor/#hotspots)
- [Elementor Popups](https://wpfusion.com/documentation/page-builders/elementor/#elementor-popups)
- [Filter Queries](https://wpfusion.com/documentation/page-builders/elementor/#filter-queries)
- [Tracking clicks](https://wpfusion.com/documentation/page-builders/elementor/#tracking-clicks)
- [Developers](https://wpfusion.com/documentation/page-builders/elementor/#developers)

### You may also like

[![2516825 freemium account blog image v2 121724](https://wpfusion.com/wp-content/uploads/2024/12/2516825_Freemium-Account-Blog-Image_v2_121724-300x158.jpg)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Offer Freemium or Paywall Content/Courses in WordPress (Complete Guide)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

In this tutorial, we look at ways WP Fusion can be used to offer a mix of free and premium blog content or courses, by restricting access based on tags in your CRM to create a secure and personalized user experience.

[![a person with long, curly hair is pointing to a tablet displaying the text members only! with the wpfusion logo visible in the corner. the rooms decor hints at exclusivity, much like paywall content often seen on wordpress sites.](https://wpfusion.com/wp-content/uploads/2025/02/Screenshot-2025-02-04-at-15.04.42-300x167.png)](https://wpfusion.com/videos/tutorials/freemium-or-paywall-content-in-wordpress/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [Freemium or Paywall Content in WordPress](https://wpfusion.com/videos/tutorials/freemium-or-paywall-content-in-wordpress/)

Create a Freemium Blog with paywall content! Emily uses Elementor to set up a template and shows us how to create an archive of paid content with WP Fusion. 🧡

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