---
url: "https://wpfusion.com/documentation/gamification/gamipress/"
title: "Connect GamiPress to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/gamification/gamipress/#content)

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

# GamiPress

- Published onMarch 21, 2018
- Last updated on March 14, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Gamification](https://wpfusion.com/documentation/#gamification)
- /
- GamiPress

### [\#](https://wpfusion.com/documentation/gamification/gamipress/\#overview) Overview

[GamiPress](https://wpfusion.com/go/gamipress) lets you “gamify” your WordPress site by granting achievements based on a wide variety of triggers.

WP Fusion integrates with GamiPress to allow you to apply tags [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when achievements and ranks are earned, as well as to sync points and ranks to custom fields in your CRM, which can be used to drive your marketing campaigns.

### [\#](https://wpfusion.com/documentation/gamification/gamipress/\#achievements) Achievements

The WP Fusion settings can be found at the bottom of the Achievement Data box while editing an Achievement (note that to use achievements with GamiPress you need to first create an achievement post type at GamiPress » Achievement Types).

![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-1-1024x397.jpg)

There are two options:

- **Apply tags:** These tags will be applied in your CRM when the achievement or badge is earned.
- **Link with tag:** This allows you to automatically grant an achievement by applying a tag. The tag is “linked” to the achievement, and if the tag is removed, the achievement will likewise be revoked.

### [\#](https://wpfusion.com/documentation/gamification/gamipress/\#ranks) Ranks

WP Fusion also integrates with the Ranks system in GamiPress. The settings are found when editing any single rank.

[![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-ranks-1024x357.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-ranks.jpg)

There are two options

- **Apply tags:** The tags specified here will be applied in your CRM when a user earns this rank.
- **Link with tag:** This setting allows you to select a tag which is “linked” to the rank. The tag will be applied when the rank is earned. Likewise, if this tag is applied in your CRM the rank will be automatically granted. If this tag is removed, the rank will be revoked and the default rank will be assigned.

### [\#](https://wpfusion.com/documentation/gamification/gamipress/\#requirements) Requirements

When editing any Points Type, Achievement, or Rank, you can use tags being applied or removed in your CRM as a condition.

For example when a _Profile Complete_ tag is applied by WP Fusion, grant the user 10 points.

[![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-automatic-points-1024x358.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-automatic-points.jpg)

To set this up, in the condition dropdown under the WP Fusion header, select either _CRM tag applied_ or _CRM tag removed_. Then you will be able to select the tag from the next dropdown that appears.

When the specified tag is applied or removed, the requirement will be met, and the Points, Achievement, or Rank will be awarded.

### [\#](https://wpfusion.com/documentation/gamification/gamipress/\#syncing-points-and-ranks) Syncing points and ranks

WP Fusion also allows you to sync a user’s earned GamiPress points and ranks to your CRM.

Head to the [Contact Fields list](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/) in the WP Fusion settings, and scroll down to the GamiPress section.

[![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-points-1024x168.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-points.jpg)

For each point type and rank type on your site, you’ll be able to select a corresponding custom field in your CRM.

- When points are earned the new point value will be synced to the selected custom field in your CRM
- When a rank is earned, the title of the new rank will be synced to the selected custom field in your CRM

The sync with points and ranks is bidirectional, meaning you can update a user’s points or ranks in your CRM and the data will automatically be updated in WordPress.

This can also be used to keep GamiPress points and ranks in sync across multiple sites, as long as they are all connected to your CRM with WP Fusion.

### [\#](https://wpfusion.com/documentation/gamification/gamipress/\#event-tracking) Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track GamiPress activity as events in supported CRMs. This lets you view member activity in real time in your CRM’s activity feed.

Events can be configured in the global Event Tracking settings page, at Settings » Event Tracking.

[![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-event-tracking-global-1024x481.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-event-tracking-global.jpg)

The available triggers are:

- **Points Earned:** Triggered each time a user earns points.
- **Rank Earned:** Triggered each time a rank is earned.
- **Achievement Earned:** Triggered each time a new achievement is earned.
- **Achievement Revoked:** Triggered each time an achievement is revoked.

You can also configure event tracking on individual ranks and achievements, via the WP Fusion Event Tracking metabox.

[![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-event-tracking-single-1024x263.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-event-tracking-single.jpg)

Events configured for single ranks or achievements will take priority over any globally configured events for that trigger (i.e. achieving a rank won’t send two events simultaneously).

#### [\#](https://wpfusion.com/documentation/gamification/gamipress/\#how-it-looks) How it looks

[![](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-how-it-looks-1024x612.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/gamipress-how-it-looks.jpg) GamiPress event tracking in ActiveCampaign

As users earn points, ranks, and achievements, events will be synced to your CRM in real time. Events will appear on each contact’s activity feed, and can also be used as triggers or conditions in automations.

For more information see the [Event Tracking documentation](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect GamiPress to ActiveCampaign](https://wpfusion.com/connect/connect-gamipress-to-activecampaign/)  \|
- [Connect GamiPress to AgileCRM](https://wpfusion.com/connect/connect-gamipress-to-agilecrm/)  \|
- [Connect GamiPress to Autopilot](https://wpfusion.com/connect/connect-gamipress-to-autopilot/)  \|
- [Connect GamiPress to Bento](https://wpfusion.com/connect/connect-gamipress-to-bento/)  \|
- [Connect GamiPress to BirdSend](https://wpfusion.com/connect/connect-gamipress-to-birdsend/)  \|
- [Connect GamiPress to Brevo](https://wpfusion.com/connect/connect-gamipress-to-brevo/)  \|
- [Connect GamiPress to Capsule](https://wpfusion.com/connect/connect-gamipress-to-capsule/)  \|
- [Connect GamiPress to Constant Contact](https://wpfusion.com/connect/connect-gamipress-to-constant-contact/)  \|
- [Connect GamiPress to ConvertKit](https://wpfusion.com/connect/connect-gamipress-to-convertkit/)  \|
- [Connect GamiPress to ConvesioConvert](https://wpfusion.com/connect/connect-gamipress-to-convesioconvert/)  \|
- [Connect GamiPress to Copper](https://wpfusion.com/connect/connect-gamipress-to-copper/)  \|
- [Connect GamiPress to Customer.io](https://wpfusion.com/connect/connect-gamipress-to-customer-io/)  \|
- [Connect GamiPress to Customerly](https://wpfusion.com/connect/connect-gamipress-to-customerly/)  \|
- [Connect GamiPress to Drip](https://wpfusion.com/connect/connect-gamipress-to-drip/)  \|
- [Connect GamiPress to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-gamipress-to-dynamics-365-marketing/)  \|
- [Connect GamiPress to EmailOctopus](https://wpfusion.com/connect/connect-gamipress-to-emailoctopus/)  \|
- [Connect GamiPress to EngageBay](https://wpfusion.com/connect/connect-gamipress-to-engagebay/)  \|
- [Connect GamiPress to Flexie](https://wpfusion.com/connect/connect-gamipress-to-flexie/)  \|
- [Connect GamiPress to FluentCRM](https://wpfusion.com/connect/connect-gamipress-to-fluentcrm/)  \|
- [Connect GamiPress to FunnelKit](https://wpfusion.com/connect/connect-gamipress-to-funnelkit/)  \|
- [Connect GamiPress to Gist](https://wpfusion.com/connect/connect-gamipress-to-gist/)  \|
- [Connect GamiPress to Groundhogg](https://wpfusion.com/connect/connect-gamipress-to-groundhogg/)  \|
- [Connect GamiPress to HighLevel](https://wpfusion.com/connect/connect-gamipress-to-highlevel/)  \|
- [Connect GamiPress to HubSpot](https://wpfusion.com/connect/connect-gamipress-to-hubspot/)  \|
- [Connect GamiPress to Infusionsoft](https://wpfusion.com/connect/connect-gamipress-to-infusionsoft/)  \|
- [Connect GamiPress to Intercom](https://wpfusion.com/connect/connect-gamipress-to-intercom/)  \|
- [Connect GamiPress to Jetpack CRM](https://wpfusion.com/connect/connect-gamipress-to-jetpack-crm/)  \|
- [Connect GamiPress to Kartra](https://wpfusion.com/connect/connect-gamipress-to-kartra/)  \|
- [Connect GamiPress to Keap](https://wpfusion.com/connect/connect-gamipress-to-keap/)  \|
- [Connect GamiPress to Klaviyo](https://wpfusion.com/connect/connect-gamipress-to-klaviyo/)  \|
- [Connect GamiPress to KlickTipp](https://wpfusion.com/connect/connect-gamipress-to-klicktipp/)  \|
- [Connect GamiPress to Loopify](https://wpfusion.com/connect/connect-gamipress-to-loopify/)  \|
- [Connect GamiPress to MailChimp](https://wpfusion.com/connect/connect-gamipress-to-mailchimp/)  \|
- [Connect GamiPress to MailerLite](https://wpfusion.com/connect/connect-gamipress-to-mailerlite/)  \|
- [Connect GamiPress to Mailjet](https://wpfusion.com/connect/connect-gamipress-to-mailjet/)  \|
- [Connect GamiPress to MailPoet](https://wpfusion.com/connect/connect-gamipress-to-mailpoet/)  \|
- [Connect GamiPress to Maropost](https://wpfusion.com/connect/connect-gamipress-to-maropost/)  \|
- [Connect GamiPress to Mautic](https://wpfusion.com/connect/connect-gamipress-to-mautic/)  \|
- [Connect GamiPress to NationBuilder](https://wpfusion.com/connect/connect-gamipress-to-nationbuilder/)  \|
- [Connect GamiPress to Omnisend](https://wpfusion.com/connect/connect-gamipress-to-omnisend/)  \|
- [Connect GamiPress to Ontraport](https://wpfusion.com/connect/connect-gamipress-to-ontraport/)  \|
- [Connect GamiPress to Ortto](https://wpfusion.com/connect/connect-gamipress-to-ortto/)  \|
- [Connect GamiPress to Pipedrive](https://wpfusion.com/connect/connect-gamipress-to-pipedrive/)  \|
- [Connect GamiPress to Platformly](https://wpfusion.com/connect/connect-gamipress-to-platformly/)  \|
- [Connect GamiPress to Quentn](https://wpfusion.com/connect/connect-gamipress-to-quentn/)  \|
- [Connect GamiPress to Salesflare](https://wpfusion.com/connect/connect-gamipress-to-salesflare/)  \|
- [Connect GamiPress to Salesforce](https://wpfusion.com/connect/connect-gamipress-to-salesforce/)  \|
- [Connect GamiPress to Sender](https://wpfusion.com/connect/connect-gamipress-to-sender/)  \|
- [Connect GamiPress to SendFox](https://wpfusion.com/connect/connect-gamipress-to-sendfox/)  \|
- [Connect GamiPress to Tubular](https://wpfusion.com/connect/connect-gamipress-to-tubular/)  \|
- [Connect GamiPress to User.com](https://wpfusion.com/connect/connect-gamipress-to-user-com/)  \|
- [Connect GamiPress to WP ERP](https://wpfusion.com/connect/connect-gamipress-to-wp-erp/)  \|
- [Connect GamiPress to Zoho](https://wpfusion.com/connect/connect-gamipress-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/gamification/gamipress/#overview)
- [Achievements](https://wpfusion.com/documentation/gamification/gamipress/#achievements)
- [Ranks](https://wpfusion.com/documentation/gamification/gamipress/#ranks)
- [Requirements](https://wpfusion.com/documentation/gamification/gamipress/#requirements)
- [Syncing points and ranks](https://wpfusion.com/documentation/gamification/gamipress/#syncing-points-and-ranks)
- [Event Tracking](https://wpfusion.com/documentation/gamification/gamipress/#event-tracking)
- [How it looks](https://wpfusion.com/documentation/gamification/gamipress/#how-it-looks)

### In this chapter

- [BadgeOS](https://wpfusion.com/documentation/gamification/badgeos/ "BadgeOS")
- [GamiPress](https://wpfusion.com/documentation/gamification/gamipress/ "GamiPress")
- [myCRED](https://wpfusion.com/documentation/gamification/mycred/ "myCRED")

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