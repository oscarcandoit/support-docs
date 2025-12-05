---
url: "https://wpfusion.com/documentation/forums/bbpress/"
title: "Connect bbPress to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/forums/bbpress/#content)

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

# bbPress

- Published onJanuary 28, 2016
- Last updated on February 27, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Forums](https://wpfusion.com/documentation/#forums)
- /
- bbPress

### [\#](https://wpfusion.com/documentation/forums/bbpress/\#overview) Overview

Using WP Fusion and [bbPress](https://bbpress.org/), you can restrict access to forums based on users’ tags in your CRM. If the user does not have access you can either display a restricted content message, or redirect the user to another page on your site.

### [\#](https://wpfusion.com/documentation/forums/bbpress/\#forums-access-control) Forums access control

When editing any individual forum, you can set access rules for that forum based on a logged-in user’s tags in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-meta-box.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-meta-box.jpg)

For more information on the meta box, see the [documentation on restricting access to content](https://wpfusion.com/documentation/getting-started/access-control/).

**Note:** WPF adds a class to the form, “wpf-locked”. You can use this to style the form via CSS so that you can indicate which forums are locked.

#### [\#](https://wpfusion.com/documentation/forums/bbpress/\#hiding-restricted-forums) Hiding restricted forums

If you’d like to hide restricted forums from the forums archive, you can turn on [Query Filtering](https://wpfusion.com/documentation/getting-started/basic-setup/#filter-queries) for the forums post type.

At Settings » WP Fusion » General » Content Restriction, set **Filter Queries** to Standard, and from the **Post Types** dropdown, select forum.

[![](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-hide-restricted-forums-1024x360.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-hide-restricted-forums.jpg)

Now any forums that the user doesn’t have access to will be completely hidden from the forums archive, regardless of the visibility setting of the forum.

### [\#](https://wpfusion.com/documentation/forums/bbpress/\#forums-activity-tracking) Forums activity tracking

At the bottom of the [WP Fusion meta box](https://wpfusion.com/documentation/getting-started/tracking-user-activity/) when editing any forum or topic, you will see settings for applying tags when the forum or topic is viewed, as well as when a new topic or reply is posted.

[![](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-forum-tracking-1024x675.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-forum-tracking.jpg) When editing any forum, WP Fusion allows you to select tags to apply when that forum is viewed, as well as when a new topic is posted.[![](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-discussion-tracking.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-discussion-tracking.jpg) When editing any topic (or _Discussion_ with BuddyBoss), WP Fusion allows you to select tags to apply when that topic is viewed, as well as when a new reply is posted.

### [\#](https://wpfusion.com/documentation/forums/bbpress/\#global-settings) Global settings

WP Fusion also has some global settings for bbPress, found at Settings » WP Fusion » Integrations » bbPress.

[![](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-general-1024x452.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-general.jpg)

Here you can optionally restrict access to your forums archive page, or all forums on your site, using a CRM tag.

Note that you must specify a redirect URL for forum archive protection to work.

### [\#](https://wpfusion.com/documentation/forums/bbpress/\#event-tracking) Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track bbPress (and [BuddyPress](https://wpfusion.com/documentation/membership/buddypress/) / [BuddyBoss](https://wpfusion.com/documentation/membership/buddyboss/)) forum activity as events in supported CRMs. This lets you view user forum activity in real time in your CRM’s activity feed.

Events can be configured in the global Event Tracking settings page, at Settings » Event Tracking.

[![](https://wpfusion.com/wp-content/uploads/2016/01/event-tracking-bbpress-global-1024x687.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/event-tracking-bbpress-global.jpg)

The available triggers are:

- **New Topic:** Triggered each time a single topic is created in any forum.
- **New Reply:** Triggered each time someone replies to a topic in any forum.

You can also configure event tracking on individual forums.

In this case the event tracking on the forum will take priority over any globally configured event tracking.

[![](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-forum-specific-1024x577.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-forum-specific.jpg) In this example we’ve registered a custom event specifically for when someone creates a new post in the **Introductions** forum

#### [\#](https://wpfusion.com/documentation/forums/bbpress/\#how-it-looks) How it looks

As people post topics and replies, any configured events will be synced to each user’s contact record in your CRM, in real time.

[![](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-event-tracking-activecampaign-1024x622.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/bbpress-event-tracking-activecampaign.jpg) WP Fusion’s Event Tracking addon sends events from bbPress to contact records in ActiveCampaign and other CRMs in real time.

You can use events to get a better sense of each member’s engagement with your community, to trigger automations, or as conditions (i.e. “only run this automation if contact has triggered at least one _New Topic_ event).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect bbPress to ActiveCampaign](https://wpfusion.com/connect/connect-bbpress-to-activecampaign/)  \|
- [Connect bbPress to AgileCRM](https://wpfusion.com/connect/connect-bbpress-to-agilecrm/)  \|
- [Connect bbPress to Autopilot](https://wpfusion.com/connect/connect-bbpress-to-autopilot/)  \|
- [Connect bbPress to Bento](https://wpfusion.com/connect/connect-bbpress-to-bento/)  \|
- [Connect bbPress to BirdSend](https://wpfusion.com/connect/connect-bbpress-to-birdsend/)  \|
- [Connect bbPress to Brevo](https://wpfusion.com/connect/connect-bbpress-to-brevo/)  \|
- [Connect bbPress to Capsule](https://wpfusion.com/connect/connect-bbpress-to-capsule/)  \|
- [Connect bbPress to Constant Contact](https://wpfusion.com/connect/connect-bbpress-to-constant-contact/)  \|
- [Connect bbPress to ConvertKit](https://wpfusion.com/connect/connect-bbpress-to-convertkit/)  \|
- [Connect bbPress to ConvesioConvert](https://wpfusion.com/connect/connect-bbpress-to-convesioconvert/)  \|
- [Connect bbPress to Copper](https://wpfusion.com/connect/connect-bbpress-to-copper/)  \|
- [Connect bbPress to Customer.io](https://wpfusion.com/connect/connect-bbpress-to-customer-io/)  \|
- [Connect bbPress to Customerly](https://wpfusion.com/connect/connect-bbpress-to-customerly/)  \|
- [Connect bbPress to Drip](https://wpfusion.com/connect/connect-bbpress-to-drip/)  \|
- [Connect bbPress to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-bbpress-to-dynamics-365-marketing/)  \|
- [Connect bbPress to EmailOctopus](https://wpfusion.com/connect/connect-bbpress-to-emailoctopus/)  \|
- [Connect bbPress to EngageBay](https://wpfusion.com/connect/connect-bbpress-to-engagebay/)  \|
- [Connect bbPress to Flexie](https://wpfusion.com/connect/connect-bbpress-to-flexie/)  \|
- [Connect bbPress to FluentCRM](https://wpfusion.com/connect/connect-bbpress-to-fluentcrm/)  \|
- [Connect bbPress to FunnelKit](https://wpfusion.com/connect/connect-bbpress-to-funnelkit/)  \|
- [Connect bbPress to Gist](https://wpfusion.com/connect/connect-bbpress-to-gist/)  \|
- [Connect bbPress to Groundhogg](https://wpfusion.com/connect/connect-bbpress-to-groundhogg/)  \|
- [Connect bbPress to HighLevel](https://wpfusion.com/connect/connect-bbpress-to-highlevel/)  \|
- [Connect bbPress to HubSpot](https://wpfusion.com/connect/connect-bbpress-to-hubspot/)  \|
- [Connect bbPress to Infusionsoft](https://wpfusion.com/connect/connect-bbpress-to-infusionsoft/)  \|
- [Connect bbPress to Intercom](https://wpfusion.com/connect/connect-bbpress-to-intercom/)  \|
- [Connect bbPress to Jetpack CRM](https://wpfusion.com/connect/connect-bbpress-to-jetpack-crm/)  \|
- [Connect bbPress to Kartra](https://wpfusion.com/connect/connect-bbpress-to-kartra/)  \|
- [Connect bbPress to Keap](https://wpfusion.com/connect/connect-bbpress-to-keap/)  \|
- [Connect bbPress to Klaviyo](https://wpfusion.com/connect/connect-bbpress-to-klaviyo/)  \|
- [Connect bbPress to KlickTipp](https://wpfusion.com/connect/connect-bbpress-to-klicktipp/)  \|
- [Connect bbPress to Loopify](https://wpfusion.com/connect/connect-bbpress-to-loopify/)  \|
- [Connect bbPress to MailChimp](https://wpfusion.com/connect/connect-bbpress-to-mailchimp/)  \|
- [Connect bbPress to MailerLite](https://wpfusion.com/connect/connect-bbpress-to-mailerlite/)  \|
- [Connect bbPress to Mailjet](https://wpfusion.com/connect/connect-bbpress-to-mailjet/)  \|
- [Connect bbPress to MailPoet](https://wpfusion.com/connect/connect-bbpress-to-mailpoet/)  \|
- [Connect bbPress to Maropost](https://wpfusion.com/connect/connect-bbpress-to-maropost/)  \|
- [Connect bbPress to Mautic](https://wpfusion.com/connect/connect-bbpress-to-mautic/)  \|
- [Connect bbPress to NationBuilder](https://wpfusion.com/connect/connect-bbpress-to-nationbuilder/)  \|
- [Connect bbPress to Omnisend](https://wpfusion.com/connect/connect-bbpress-to-omnisend/)  \|
- [Connect bbPress to Ontraport](https://wpfusion.com/connect/connect-bbpress-to-ontraport/)  \|
- [Connect bbPress to Ortto](https://wpfusion.com/connect/connect-bbpress-to-ortto/)  \|
- [Connect bbPress to Pipedrive](https://wpfusion.com/connect/connect-bbpress-to-pipedrive/)  \|
- [Connect bbPress to Platformly](https://wpfusion.com/connect/connect-bbpress-to-platformly/)  \|
- [Connect bbPress to Quentn](https://wpfusion.com/connect/connect-bbpress-to-quentn/)  \|
- [Connect bbPress to Salesflare](https://wpfusion.com/connect/connect-bbpress-to-salesflare/)  \|
- [Connect bbPress to Salesforce](https://wpfusion.com/connect/connect-bbpress-to-salesforce/)  \|
- [Connect bbPress to Sender](https://wpfusion.com/connect/connect-bbpress-to-sender/)  \|
- [Connect bbPress to SendFox](https://wpfusion.com/connect/connect-bbpress-to-sendfox/)  \|
- [Connect bbPress to Tubular](https://wpfusion.com/connect/connect-bbpress-to-tubular/)  \|
- [Connect bbPress to User.com](https://wpfusion.com/connect/connect-bbpress-to-user-com/)  \|
- [Connect bbPress to WP ERP](https://wpfusion.com/connect/connect-bbpress-to-wp-erp/)  \|
- [Connect bbPress to Zoho](https://wpfusion.com/connect/connect-bbpress-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/forums/bbpress/#overview)
- [Forums access control](https://wpfusion.com/documentation/forums/bbpress/#forums-access-control)
- [Hiding restricted forums](https://wpfusion.com/documentation/forums/bbpress/#hiding-restricted-forums)
- [Forums activity tracking](https://wpfusion.com/documentation/forums/bbpress/#forums-activity-tracking)
- [Global settings](https://wpfusion.com/documentation/forums/bbpress/#global-settings)
- [Event Tracking](https://wpfusion.com/documentation/forums/bbpress/#event-tracking)
- [How it looks](https://wpfusion.com/documentation/forums/bbpress/#how-it-looks)

### In this chapter

- [bbPress](https://wpfusion.com/documentation/forums/bbpress/ "bbPress")
- [wpForo](https://wpfusion.com/documentation/forums/wpforo/ "wpForo")

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