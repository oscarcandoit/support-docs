---
url: "https://wpfusion.com/documentation/affiliates/affiliatewp/"
title: "Connect AffiliateWP to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/affiliates/affiliatewp/#content)

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

# AffiliateWP

- Published onFebruary 23, 2017
- Last updated on October 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Affiliates](https://wpfusion.com/documentation/#affiliates)
- /
- AffiliateWP

### [\#](https://wpfusion.com/documentation/affiliates/affiliatewp/\#overview) Overview

WP Fusion integrates with [AffiliateWP](https://wpfusion.com/go/affiliatewp) to sync affiliates with [your CRM or marketing automation tool](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register on your site or update their affiliate profiles, and tag affiliates based on status changes.

You can also tag customers when they make a purchase via an affiliate link, and sync referrer metadata to customer contact records in your CRM.

#### [\#](https://wpfusion.com/documentation/affiliates/affiliatewp/\#syncing-affiliate-meta-fields) Syncing affiliate meta fields

In addition to the normal signup fields, you’ll also see several new AffiliateWP-specific fields added to the Contact Fields tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-1-2-1024x242.jpg)](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-1-2.jpg)

These fields are **related to the affiliate**, and will be synced when an affiliate registers or updates their profile.

#### [\#](https://wpfusion.com/documentation/affiliates/affiliatewp/\#syncing-referrer-meta-fields) Syncing referrer meta fields

WP Fusion also supports synchronizing details about an affiliate to a customer’s contact record when they make a purchase using an affiliate link.

[![](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-4-1024x241.jpg)](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-4.jpg)

You can use these fields to personalize the marketing sent to a customer based on the affiliate who referred them, as well as their landing page and referring URL.

At the moment syncing referrer meta fields is supported for referrals recorded via:

- WooCommerce purchase
- Gravity Forms submission
- Ultimate Member signup

### [\#](https://wpfusion.com/documentation/affiliates/affiliatewp/\#applying-tags) Applying tags

You can also specify tags to be applied when new affiliates register on your site, or based on affiliate status changes. This can be found under the Integrations tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-settings-889x1024.jpg)](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-settings.jpg)

The available options are:

- **Apply Tags – Affiliate Registration:** These tags will be applied when someone registers to be an affiliate, regardless of their approval status.
- **Apply Tags – First Referral:** These tags will be applied to the affiliate the first time they earn a referral.
- **Apply Tags – Customers:** This option will appear if WooCommerce is active and lets you specify tags to be applied to _customers_ that make a purchase via an affiliate link (for example a tag like “Referred by Affiliate”).
- **Apply Tags – Active:** If you require manual approval of affiliates you can also specify additional tags to be applied when an affiliate has been approved.
- **Apply Tags – Inactive:** These tags will be applied when an affiliate’s status is changed to Inactive.
- **Apply Tags – Pending:** These tags will be applied when a Pending affiliate is created.
- **Apply Tags – Rejected:** These tags will be applied to the affiliate when their application is rejected.
- **Apply Tags – Deleted:** These tags will be applied when an affiliate’s account is deleted
- **Link Tag – Affiliate Activation:** This setting allows you to link a tag with affiliate activation— when the tag is applied in your CRM, an affiliate account will be created for the user and activated. If the user was already an affiliate, they will be activated. If the tag is removed (or if any affiliate does not have the tag), they will be deactivated. **Use with caution.**

#### [\#](https://wpfusion.com/documentation/affiliates/affiliatewp/\#applying-tags-to-woocommerce-customers) Applying tags to WooCommerce customers

You can specify tags to be applied to WooCommerce customers when they make a purchase after following a referral URL. This is configured from the Integrations tab in the WP Fusion settings (above), using the **Apply Tags – Customers** setting.

While editing any affiliate you can also specify tags to be applied to the WooCommerce customer if they purchase from that specific affiliate’s link.

[![](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-3-1024x355.jpg)](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-3.jpg)

#### [\#](https://wpfusion.com/documentation/affiliates/affiliatewp/\#linking-tags-to-groups) Linking tags to groups

In addition to applying tags to affiliates and WooCommerce customers, you can also specify a _linked_ tag for each AffiliateWP group.

When an affiliate joins the group, the linked tag will be automatically applied. When they leave the group, the linked tag will be removed.

Likewise, if the linked tag is applied in your CRM, this will automatically enroll the user into the group. If the user is not already an affiliate, they will be added as a new affiliate at the default rate. If the linked tag is removed, the user will be removed from the group.

This can be used to automatically create and group affiliates using automations in your connected CRM.

![](https://wpfusion.com/wp-content/uploads/2017/02/affiliatewp-group-doc-1-e1698416273496.jpg)

The group linking settings can be found with the rest of the WP Fusion integration settings for AffiliateWP under the Integrations tab in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/affiliates/affiliatewp/\#event-tracking) Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track AffiliateWP registrations, status changes, visits, and referrals as real-time events in supported CRMs.

Events can be configured in the main Event Tracking settings page.

[![screenshot](https://wpfusion.com/wp-content/uploads/2017/02/affiliate-wp-event-tracking-982x1024.jpg)](https://wpfusion.com/wp-content/uploads/2017/02/affiliate-wp-event-tracking.jpg) WP Fusion’s event tracking features for AffiliateWP let you track affiliate events in real time in your CRM or email marketing system.

The available triggers for event tracking with AffiliateWP are:

- **Affiliate Registration:** Triggered when a new affiliate registers on your site.
- **Affiliate Status Updated:** Triggered when an affiliate’s status changes (for example from Pending to Active).
- **New Visit:** Triggered each time someone visits the affiliate’s referral link.
- **Referral Earned:** Triggered when an affiliate earns a referral.

For more information on event tracking and the supported platforms, see the [Event Tracking Overview](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/).

### [\#](https://wpfusion.com/documentation/affiliates/affiliatewp/\#export-options) Export options

WP Fusion includes two export / batch processing tools for AffiliateWP. Head to Settings » WP Fusion » Advanced and scroll down to the Batch Operations section to see the available options.

[![](https://wpfusion.com/wp-content/uploads/2017/02/affiliate-wp-export-1024x366.jpg)](https://wpfusion.com/wp-content/uploads/2017/02/affiliate-wp-export.jpg)

With AffiliateWP there are two available operations:

- **AffiliateWP affiliate data:** Syncs any enabled “AffiliateWP – Affiliate” fields to your CRM for each affiliate, and applies any tags related to that affiliate’s status.
- **AffiliateWP referrals:** Processes all Accepted or Paid referrals as if they had just been accepted: syncs any enabled “AffiliateWP – Referral” fields to your CRM, and applies any configured tags, such as First Referral Accepted and/or any affiliate tags applied to WooCommerce customers.

After selecting an operation, click Create Background Task to start the process. A progress indicator will appear at the top of the page.

For more information on exporting data, see the [Batch Operations documentation](https://wpfusion.com/documentation/tutorials/batch-operations/).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect AffiliateWP to ActiveCampaign](https://wpfusion.com/connect/connect-affiliatewp-to-activecampaign/)  \|
- [Connect AffiliateWP to AgileCRM](https://wpfusion.com/connect/connect-affiliatewp-to-agilecrm/)  \|
- [Connect AffiliateWP to Autopilot](https://wpfusion.com/connect/connect-affiliatewp-to-autopilot/)  \|
- [Connect AffiliateWP to Bento](https://wpfusion.com/connect/connect-affiliatewp-to-bento/)  \|
- [Connect AffiliateWP to BirdSend](https://wpfusion.com/connect/connect-affiliatewp-to-birdsend/)  \|
- [Connect AffiliateWP to Brevo](https://wpfusion.com/connect/connect-affiliatewp-to-brevo/)  \|
- [Connect AffiliateWP to Capsule](https://wpfusion.com/connect/connect-affiliatewp-to-capsule/)  \|
- [Connect AffiliateWP to Constant Contact](https://wpfusion.com/connect/connect-affiliatewp-to-constant-contact/)  \|
- [Connect AffiliateWP to ConvertKit](https://wpfusion.com/connect/connect-affiliatewp-to-convertkit/)  \|
- [Connect AffiliateWP to ConvesioConvert](https://wpfusion.com/connect/connect-affiliatewp-to-convesioconvert/)  \|
- [Connect AffiliateWP to Copper](https://wpfusion.com/connect/connect-affiliatewp-to-copper/)  \|
- [Connect AffiliateWP to Customer.io](https://wpfusion.com/connect/connect-affiliatewp-to-customer-io/)  \|
- [Connect AffiliateWP to Customerly](https://wpfusion.com/connect/connect-affiliatewp-to-customerly/)  \|
- [Connect AffiliateWP to Drip](https://wpfusion.com/connect/connect-affiliatewp-to-drip/)  \|
- [Connect AffiliateWP to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-affiliatewp-to-dynamics-365-marketing/)  \|
- [Connect AffiliateWP to EmailOctopus](https://wpfusion.com/connect/connect-affiliatewp-to-emailoctopus/)  \|
- [Connect AffiliateWP to EngageBay](https://wpfusion.com/connect/connect-affiliatewp-to-engagebay/)  \|
- [Connect AffiliateWP to Flexie](https://wpfusion.com/connect/connect-affiliatewp-to-flexie/)  \|
- [Connect AffiliateWP to FluentCRM](https://wpfusion.com/connect/connect-affiliatewp-to-fluentcrm/)  \|
- [Connect AffiliateWP to FunnelKit](https://wpfusion.com/connect/connect-affiliatewp-to-funnelkit/)  \|
- [Connect AffiliateWP to Gist](https://wpfusion.com/connect/connect-affiliatewp-to-gist/)  \|
- [Connect AffiliateWP to Groundhogg](https://wpfusion.com/connect/connect-affiliatewp-to-groundhogg/)  \|
- [Connect AffiliateWP to HighLevel](https://wpfusion.com/connect/connect-affiliatewp-to-highlevel/)  \|
- [Connect AffiliateWP to HubSpot](https://wpfusion.com/connect/connect-affiliatewp-to-hubspot/)  \|
- [Connect AffiliateWP to Infusionsoft](https://wpfusion.com/connect/connect-affiliatewp-to-infusionsoft/)  \|
- [Connect AffiliateWP to Intercom](https://wpfusion.com/connect/connect-affiliatewp-to-intercom/)  \|
- [Connect AffiliateWP to Jetpack CRM](https://wpfusion.com/connect/connect-affiliatewp-to-jetpack-crm/)  \|
- [Connect AffiliateWP to Kartra](https://wpfusion.com/connect/connect-affiliatewp-to-kartra/)  \|
- [Connect AffiliateWP to Keap](https://wpfusion.com/connect/connect-affiliatewp-to-keap/)  \|
- [Connect AffiliateWP to Klaviyo](https://wpfusion.com/connect/connect-affiliatewp-to-klaviyo/)  \|
- [Connect AffiliateWP to KlickTipp](https://wpfusion.com/connect/connect-affiliatewp-to-klicktipp/)  \|
- [Connect AffiliateWP to Loopify](https://wpfusion.com/connect/connect-affiliatewp-to-loopify/)  \|
- [Connect AffiliateWP to MailChimp](https://wpfusion.com/connect/connect-affiliatewp-to-mailchimp/)  \|
- [Connect AffiliateWP to MailerLite](https://wpfusion.com/connect/connect-affiliatewp-to-mailerlite/)  \|
- [Connect AffiliateWP to Mailjet](https://wpfusion.com/connect/connect-affiliatewp-to-mailjet/)  \|
- [Connect AffiliateWP to MailPoet](https://wpfusion.com/connect/connect-affiliatewp-to-mailpoet/)  \|
- [Connect AffiliateWP to Maropost](https://wpfusion.com/connect/connect-affiliatewp-to-maropost/)  \|
- [Connect AffiliateWP to Mautic](https://wpfusion.com/connect/connect-affiliatewp-to-mautic/)  \|
- [Connect AffiliateWP to NationBuilder](https://wpfusion.com/connect/connect-affiliatewp-to-nationbuilder/)  \|
- [Connect AffiliateWP to Omnisend](https://wpfusion.com/connect/connect-affiliatewp-to-omnisend/)  \|
- [Connect AffiliateWP to Ontraport](https://wpfusion.com/connect/connect-affiliatewp-to-ontraport/)  \|
- [Connect AffiliateWP to Ortto](https://wpfusion.com/connect/connect-affiliatewp-to-ortto/)  \|
- [Connect AffiliateWP to Pipedrive](https://wpfusion.com/connect/connect-affiliatewp-to-pipedrive/)  \|
- [Connect AffiliateWP to Platformly](https://wpfusion.com/connect/connect-affiliatewp-to-platformly/)  \|
- [Connect AffiliateWP to Quentn](https://wpfusion.com/connect/connect-affiliatewp-to-quentn/)  \|
- [Connect AffiliateWP to Salesflare](https://wpfusion.com/connect/connect-affiliatewp-to-salesflare/)  \|
- [Connect AffiliateWP to Salesforce](https://wpfusion.com/connect/connect-affiliatewp-to-salesforce/)  \|
- [Connect AffiliateWP to Sender](https://wpfusion.com/connect/connect-affiliatewp-to-sender/)  \|
- [Connect AffiliateWP to SendFox](https://wpfusion.com/connect/connect-affiliatewp-to-sendfox/)  \|
- [Connect AffiliateWP to Tubular](https://wpfusion.com/connect/connect-affiliatewp-to-tubular/)  \|
- [Connect AffiliateWP to User.com](https://wpfusion.com/connect/connect-affiliatewp-to-user-com/)  \|
- [Connect AffiliateWP to WP ERP](https://wpfusion.com/connect/connect-affiliatewp-to-wp-erp/)  \|
- [Connect AffiliateWP to Zoho](https://wpfusion.com/connect/connect-affiliatewp-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/affiliates/affiliatewp/#overview)
- [Syncing affiliate meta fields](https://wpfusion.com/documentation/affiliates/affiliatewp/#syncing-affiliate-meta-fields)
- [Syncing referrer meta fields](https://wpfusion.com/documentation/affiliates/affiliatewp/#syncing-referrer-meta-fields)
- [Applying tags](https://wpfusion.com/documentation/affiliates/affiliatewp/#applying-tags)
- [Applying tags to WooCommerce customers](https://wpfusion.com/documentation/affiliates/affiliatewp/#applying-tags-to-woocommerce-customers)
- [Linking tags to groups](https://wpfusion.com/documentation/affiliates/affiliatewp/#linking-tags-to-groups)
- [Event Tracking](https://wpfusion.com/documentation/affiliates/affiliatewp/#event-tracking)
- [Export options](https://wpfusion.com/documentation/affiliates/affiliatewp/#export-options)

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