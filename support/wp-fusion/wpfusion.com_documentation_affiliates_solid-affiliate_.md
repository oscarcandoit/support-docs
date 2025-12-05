---
url: "https://wpfusion.com/documentation/affiliates/solid-affiliate/"
title: "Connect Solid Affiliate to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/affiliates/solid-affiliate/#content)

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

# Solid Affiliate

- Published onFebruary 7, 2022
- Last updated on November 6, 2023

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Affiliates](https://wpfusion.com/documentation/#affiliates)
- /
- Solid Affiliate

### [\#](https://wpfusion.com/documentation/affiliates/solid-affiliate/\#overview) Overview

WP Fusion integrates with [Solid Affiliate](https://wpfusion.com/go/solid-affiliate) to add affiliates to your [CRM or marketing automation platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register on your site or update their affiliate profiles.

You can also tag customers when they make a purchase via an affiliate link, and sync referrer metadata to custom fields on customer contact records.

#### [\#](https://wpfusion.com/documentation/affiliates/solid-affiliate/\#syncing-affiliate-meta-fields) Syncing affiliate meta fields

In addition to the normal signup fields, you’ll also see several new Solid Affiliate specific fields added to the Contact Fields tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-affiliate-fields-1024x377.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-affiliate-fields.jpg)

These fields are **related to the affiliate**, and will be synced when an affiliate registers or updates their profile.

#### [\#](https://wpfusion.com/documentation/affiliates/solid-affiliate/\#syncing-referrer-meta-fields) Syncing referrer meta fields

WP Fusion also supports synchronizing details about an affiliate to a customer’s contact record when they make a purchase using an affiliate link.

[![](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-referrer-fields-1024x216.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-referrer-fields.jpg)

You can use these fields to personalize the marketing sent to a customer based on the affiliate who referred them.

At the moment syncing referrer meta fields is only supported for referrals recorded via WooCommerce.

### [\#](https://wpfusion.com/documentation/affiliates/solid-affiliate/\#applying-tags-to-affiliates) Applying tags to affiliates

You can also specify tags to be applied when new affiliates register on your site. This can be found under the Integrations tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-general-settings-1024x540.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-general-settings.jpg)

The available options are:

- **Apply Tags – Affiliate Registration:** These tags will be applied when someone registers to be an affiliate, regardless of their approval status.
- **Apply Tags – Approved:** If you’re requiring manual approval of affiliates you can also specify additional tags to be applied when an affiliate has been approved.
- **Apply Tags – Rejected:** These tags will be applied if a pending affiliate is rejected.
- **Apply Tags – Customers:** This option will appear if WooCommerce is active and lets you specify tags to be applied to _customers_ that make a purchase via an affiliate link (for example a tag like “Referred by Affiliate”).
- **Link with Tag – Affiliate Activation:** This allows you to select a tag that becomes linked to an affiliate’s account activation. When the tag is applied to a user, an affiliate account will be created and activated. If the tag is removed (or a user doesn’t have the tag) their affiliate account will be deleted. _Use with caution._

### [\#](https://wpfusion.com/documentation/affiliates/solid-affiliate/\#linking-tags-to-groups) Linking tags to groups

In addition to applying tags to affiliates and WooCommerce customers, you can also specify a _linked_ tag for each Solid Affiliate group.

When an affiliate joins the group, the linked tag will be automatically applied. When they leave the group, the linked tag will be removed.

Likewise, if the linked tag is applied in your CRM, this will automatically enroll the user into the group. If the user is not already an affiliate, they will be added as a new affiliate at the default rate. If the linked tag is removed, the user will be removed from the group.

This can be used to automatically create and group affiliates using automations in your connected CRM.

![](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-group-docs-1.jpg)

The group linking settings can be found with the rest of the WP Fusion integration settings for Solid Affiliate under the Integrations tab in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/affiliates/solid-affiliate/\#export-options) Export options

WP Fusion includes an export tool for Solid Affiliate affiliates. Head to Settings » WP Fusion » Advanced and select the **Solid Affiliate Affiliates** option from the Batch Operations list:

[![](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-batch-operations-1024x528.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/solid-affiliate-batch-operations.jpg)

Then click Create Background Task to start the process.

Each of your approved affiliates will be updated in your connected CRM with any enabled custom fields. They will also be tagged with any tags you’ve selected to be applied to approved affiliates.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Solid Affiliate to ActiveCampaign](https://wpfusion.com/connect/connect-solid-affiliate-to-activecampaign/)  \|
- [Connect Solid Affiliate to AgileCRM](https://wpfusion.com/connect/connect-solid-affiliate-to-agilecrm/)  \|
- [Connect Solid Affiliate to Autopilot](https://wpfusion.com/connect/connect-solid-affiliate-to-autopilot/)  \|
- [Connect Solid Affiliate to Bento](https://wpfusion.com/connect/connect-solid-affiliate-to-bento/)  \|
- [Connect Solid Affiliate to BirdSend](https://wpfusion.com/connect/connect-solid-affiliate-to-birdsend/)  \|
- [Connect Solid Affiliate to Brevo](https://wpfusion.com/connect/connect-solid-affiliate-to-brevo/)  \|
- [Connect Solid Affiliate to Capsule](https://wpfusion.com/connect/connect-solid-affiliate-to-capsule/)  \|
- [Connect Solid Affiliate to Constant Contact](https://wpfusion.com/connect/connect-solid-affiliate-to-constant-contact/)  \|
- [Connect Solid Affiliate to ConvertKit](https://wpfusion.com/connect/connect-solid-affiliate-to-convertkit/)  \|
- [Connect Solid Affiliate to ConvesioConvert](https://wpfusion.com/connect/connect-solid-affiliate-to-convesioconvert/)  \|
- [Connect Solid Affiliate to Copper](https://wpfusion.com/connect/connect-solid-affiliate-to-copper/)  \|
- [Connect Solid Affiliate to Customer.io](https://wpfusion.com/connect/connect-solid-affiliate-to-customer-io/)  \|
- [Connect Solid Affiliate to Customerly](https://wpfusion.com/connect/connect-solid-affiliate-to-customerly/)  \|
- [Connect Solid Affiliate to Drip](https://wpfusion.com/connect/connect-solid-affiliate-to-drip/)  \|
- [Connect Solid Affiliate to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-solid-affiliate-to-dynamics-365-marketing/)  \|
- [Connect Solid Affiliate to EmailOctopus](https://wpfusion.com/connect/connect-solid-affiliate-to-emailoctopus/)  \|
- [Connect Solid Affiliate to EngageBay](https://wpfusion.com/connect/connect-solid-affiliate-to-engagebay/)  \|
- [Connect Solid Affiliate to Flexie](https://wpfusion.com/connect/connect-solid-affiliate-to-flexie/)  \|
- [Connect Solid Affiliate to FluentCRM](https://wpfusion.com/connect/connect-solid-affiliate-to-fluentcrm/)  \|
- [Connect Solid Affiliate to FunnelKit](https://wpfusion.com/connect/connect-solid-affiliate-to-funnelkit/)  \|
- [Connect Solid Affiliate to Gist](https://wpfusion.com/connect/connect-solid-affiliate-to-gist/)  \|
- [Connect Solid Affiliate to Groundhogg](https://wpfusion.com/connect/connect-solid-affiliate-to-groundhogg/)  \|
- [Connect Solid Affiliate to HighLevel](https://wpfusion.com/connect/connect-solid-affiliate-to-highlevel/)  \|
- [Connect Solid Affiliate to HubSpot](https://wpfusion.com/connect/connect-solid-affiliate-to-hubspot/)  \|
- [Connect Solid Affiliate to Infusionsoft](https://wpfusion.com/connect/connect-solid-affiliate-to-infusionsoft/)  \|
- [Connect Solid Affiliate to Intercom](https://wpfusion.com/connect/connect-solid-affiliate-to-intercom/)  \|
- [Connect Solid Affiliate to Jetpack CRM](https://wpfusion.com/connect/connect-solid-affiliate-to-jetpack-crm/)  \|
- [Connect Solid Affiliate to Kartra](https://wpfusion.com/connect/connect-solid-affiliate-to-kartra/)  \|
- [Connect Solid Affiliate to Keap](https://wpfusion.com/connect/connect-solid-affiliate-to-keap/)  \|
- [Connect Solid Affiliate to Klaviyo](https://wpfusion.com/connect/connect-solid-affiliate-to-klaviyo/)  \|
- [Connect Solid Affiliate to KlickTipp](https://wpfusion.com/connect/connect-solid-affiliate-to-klicktipp/)  \|
- [Connect Solid Affiliate to Loopify](https://wpfusion.com/connect/connect-solid-affiliate-to-loopify/)  \|
- [Connect Solid Affiliate to MailChimp](https://wpfusion.com/connect/connect-solid-affiliate-to-mailchimp/)  \|
- [Connect Solid Affiliate to MailerLite](https://wpfusion.com/connect/connect-solid-affiliate-to-mailerlite/)  \|
- [Connect Solid Affiliate to Mailjet](https://wpfusion.com/connect/connect-solid-affiliate-to-mailjet/)  \|
- [Connect Solid Affiliate to MailPoet](https://wpfusion.com/connect/connect-solid-affiliate-to-mailpoet/)  \|
- [Connect Solid Affiliate to Maropost](https://wpfusion.com/connect/connect-solid-affiliate-to-maropost/)  \|
- [Connect Solid Affiliate to Mautic](https://wpfusion.com/connect/connect-solid-affiliate-to-mautic/)  \|
- [Connect Solid Affiliate to NationBuilder](https://wpfusion.com/connect/connect-solid-affiliate-to-nationbuilder/)  \|
- [Connect Solid Affiliate to Omnisend](https://wpfusion.com/connect/connect-solid-affiliate-to-omnisend/)  \|
- [Connect Solid Affiliate to Ontraport](https://wpfusion.com/connect/connect-solid-affiliate-to-ontraport/)  \|
- [Connect Solid Affiliate to Ortto](https://wpfusion.com/connect/connect-solid-affiliate-to-ortto/)  \|
- [Connect Solid Affiliate to Pipedrive](https://wpfusion.com/connect/connect-solid-affiliate-to-pipedrive/)  \|
- [Connect Solid Affiliate to Platformly](https://wpfusion.com/connect/connect-solid-affiliate-to-platformly/)  \|
- [Connect Solid Affiliate to Quentn](https://wpfusion.com/connect/connect-solid-affiliate-to-quentn/)  \|
- [Connect Solid Affiliate to Salesflare](https://wpfusion.com/connect/connect-solid-affiliate-to-salesflare/)  \|
- [Connect Solid Affiliate to Salesforce](https://wpfusion.com/connect/connect-solid-affiliate-to-salesforce/)  \|
- [Connect Solid Affiliate to Sender](https://wpfusion.com/connect/connect-solid-affiliate-to-sender/)  \|
- [Connect Solid Affiliate to SendFox](https://wpfusion.com/connect/connect-solid-affiliate-to-sendfox/)  \|
- [Connect Solid Affiliate to Tubular](https://wpfusion.com/connect/connect-solid-affiliate-to-tubular/)  \|
- [Connect Solid Affiliate to User.com](https://wpfusion.com/connect/connect-solid-affiliate-to-user-com/)  \|
- [Connect Solid Affiliate to WP ERP](https://wpfusion.com/connect/connect-solid-affiliate-to-wp-erp/)  \|
- [Connect Solid Affiliate to Zoho](https://wpfusion.com/connect/connect-solid-affiliate-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/affiliates/solid-affiliate/#overview)
- [Syncing affiliate meta fields](https://wpfusion.com/documentation/affiliates/solid-affiliate/#syncing-affiliate-meta-fields)
- [Syncing referrer meta fields](https://wpfusion.com/documentation/affiliates/solid-affiliate/#syncing-referrer-meta-fields)
- [Applying tags to affiliates](https://wpfusion.com/documentation/affiliates/solid-affiliate/#applying-tags-to-affiliates)
- [Linking tags to groups](https://wpfusion.com/documentation/affiliates/solid-affiliate/#linking-tags-to-groups)
- [Export options](https://wpfusion.com/documentation/affiliates/solid-affiliate/#export-options)

### In this chapter

- [AffiliateWP](https://wpfusion.com/documentation/affiliates/affiliatewp/ "AffiliateWP")
- [ClickWhale](https://wpfusion.com/documentation/affiliates/clickwhale/ "ClickWhale")
- [Pretty Links](https://wpfusion.com/documentation/affiliates/pretty-links/ "Pretty Links")
- [SliceWP](https://wpfusion.com/documentation/affiliates/slicewp/ "SliceWP")
- [Solid Affiliate](https://wpfusion.com/documentation/affiliates/solid-affiliate/ "Solid Affiliate")
- [ThirstyAffiliates](https://wpfusion.com/documentation/affiliates/thirstyaffiliates/ "ThirstyAffiliates")
- [WP Affiliate Manager](https://wpfusion.com/documentation/affiliates/wp-affiliate-manager/ "WP Affiliate Manager")

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