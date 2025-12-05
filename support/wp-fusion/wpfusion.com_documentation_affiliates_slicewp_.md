---
url: "https://wpfusion.com/documentation/affiliates/slicewp/"
title: "Connect SliceWP to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/affiliates/slicewp/#content)

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

# SliceWP

- Published onFebruary 21, 2022
- Last updated on October 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Affiliates](https://wpfusion.com/documentation/#affiliates)
- /
- SliceWP

### [\#](https://wpfusion.com/documentation/affiliates/slicewp/\#overview) Overview

WP Fusion integrates with [SliceWP](https://wpfusion.com/go/slicewp) to sync affiliates with [your CRM or marketing automation tool](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register on your site or update their affiliate profiles, and tag affiliates based on status changes.

You can also tag customers when they make a purchase via an affiliate link, and sync referrer metadata to customer contact records in your CRM.

### [\#](https://wpfusion.com/documentation/affiliates/slicewp/\#syncing-affiliate-and-referrer-data) Syncing affiliate and referrer data

#### [\#](https://wpfusion.com/documentation/affiliates/slicewp/\#syncing-affiliate-meta-fields) Syncing affiliate meta fields

In addition to the standard user fields, you’ll also see several SliceWP-specific fields available for sync under the SliceWP – Affiliate heading in WP Fusion’s [contact fields settings](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/).

[![](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-affiliate-fields-1024x474.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-affiliate-fields.jpg)

These fields are **related to the affiliate**, and will be synced when an affiliate registers or updates their profile.

The fields _Affiliate’s Total Earnings_ and _Affiliate’s Total Referrals_ will also be synced each time a commission is recorded for the affiliate, if they are enabled.

#### [\#](https://wpfusion.com/documentation/affiliates/slicewp/\#syncing-referrer-meta-fields) Syncing referrer meta fields

WP Fusion also supports synchronizing details about an affiliate to a customer’s contact record when they make a purchase using an affiliate link.

These fields are available for mapping under the SliceWP – Referrer Fields heading in the contact fields list.

[![](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-referrer-fields-1024x251.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-referrer-fields.jpg)

You can use these fields to personalize the marketing sent to a customer based on the affiliate who referred them.

At the moment syncing referrer meta fields is only supported for referrals recorded via WooCommerce.

### [\#](https://wpfusion.com/documentation/affiliates/slicewp/\#applying-tags-to-affiliates) Applying tags to affiliates

You can also specify tags to be applied when new affiliates register on your site. This can be found under the Integrations tab in the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-general-settings-1024x697.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-general-settings.jpg)

The available options are:

- **Apply Tags – Registration:** These tags will be applied when someone registers to be an affiliate, regardless of their approval status.
- **Apply Tags – Affiliate Approval:** If you’re requiring manual approval of affiliates you can also specify additional tags to be applied when an affiliate has been approved.
- **Apply Tags – Affiliate Rejected:** These tags will be applied if a pending affiliate is rejected.
- **Apply Tags – First Referral:** These tags will be applied to the affiliate the first time they earn a referral.
- **Apply Tags – Customers:** This option will appear if WooCommerce is active and lets you specify tags to be applied to _customers_ that make a purchase via an affiliate link (for example a tag like “Referred by Affiliate”).

#### [\#](https://wpfusion.com/documentation/affiliates/slicewp/\#applying-tags-to-woocommerce-customers) Applying tags to WooCommerce customers

You can specify tags to be applied to WooCommerce customers when they make a purchase after following a referral URL.

This is configured from the Integrations tab in the WP Fusion settings (described above), via the **Apply Tags – Customers** setting.

While editing any affiliate you can also specify tags to be applied to the WooCommerce customer if they purchase from that specific affiliate’s link.

[![](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-affiliate-settings-1024x367.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-affiliate-settings.jpg)

### [\#](https://wpfusion.com/documentation/affiliates/slicewp/\#export-options) Export options

WP Fusion includes an export / batch processing tool for SliceWP affiliates.

Head to Settings » WP Fusion » Advanced and select the **SliceWP Affiliates** option from the Batch Operations list:

[![](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-export-options-1024x540.jpg)](https://wpfusion.com/wp-content/uploads/2022/02/slicewp-export-options.jpg)

Then click Create Background Task to start the process.

Each of your affiliates will be updated in your connected CRM with any enabled custom fields. They will also be tagged with any tags you’ve selected to be applied to affiliates based on their current status.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect SliceWP to ActiveCampaign](https://wpfusion.com/connect/connect-slicewp-to-activecampaign/)  \|
- [Connect SliceWP to AgileCRM](https://wpfusion.com/connect/connect-slicewp-to-agilecrm/)  \|
- [Connect SliceWP to Autopilot](https://wpfusion.com/connect/connect-slicewp-to-autopilot/)  \|
- [Connect SliceWP to Bento](https://wpfusion.com/connect/connect-slicewp-to-bento/)  \|
- [Connect SliceWP to BirdSend](https://wpfusion.com/connect/connect-slicewp-to-birdsend/)  \|
- [Connect SliceWP to Brevo](https://wpfusion.com/connect/connect-slicewp-to-brevo/)  \|
- [Connect SliceWP to Capsule](https://wpfusion.com/connect/connect-slicewp-to-capsule/)  \|
- [Connect SliceWP to Constant Contact](https://wpfusion.com/connect/connect-slicewp-to-constant-contact/)  \|
- [Connect SliceWP to ConvertKit](https://wpfusion.com/connect/connect-slicewp-to-convertkit/)  \|
- [Connect SliceWP to ConvesioConvert](https://wpfusion.com/connect/connect-slicewp-to-convesioconvert/)  \|
- [Connect SliceWP to Copper](https://wpfusion.com/connect/connect-slicewp-to-copper/)  \|
- [Connect SliceWP to Customer.io](https://wpfusion.com/connect/connect-slicewp-to-customer-io/)  \|
- [Connect SliceWP to Customerly](https://wpfusion.com/connect/connect-slicewp-to-customerly/)  \|
- [Connect SliceWP to Drip](https://wpfusion.com/connect/connect-slicewp-to-drip/)  \|
- [Connect SliceWP to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-slicewp-to-dynamics-365-marketing/)  \|
- [Connect SliceWP to EmailOctopus](https://wpfusion.com/connect/connect-slicewp-to-emailoctopus/)  \|
- [Connect SliceWP to EngageBay](https://wpfusion.com/connect/connect-slicewp-to-engagebay/)  \|
- [Connect SliceWP to Flexie](https://wpfusion.com/connect/connect-slicewp-to-flexie/)  \|
- [Connect SliceWP to FluentCRM](https://wpfusion.com/connect/connect-slicewp-to-fluentcrm/)  \|
- [Connect SliceWP to FunnelKit](https://wpfusion.com/connect/connect-slicewp-to-funnelkit/)  \|
- [Connect SliceWP to Gist](https://wpfusion.com/connect/connect-slicewp-to-gist/)  \|
- [Connect SliceWP to Groundhogg](https://wpfusion.com/connect/connect-slicewp-to-groundhogg/)  \|
- [Connect SliceWP to HighLevel](https://wpfusion.com/connect/connect-slicewp-to-highlevel/)  \|
- [Connect SliceWP to HubSpot](https://wpfusion.com/connect/connect-slicewp-to-hubspot/)  \|
- [Connect SliceWP to Infusionsoft](https://wpfusion.com/connect/connect-slicewp-to-infusionsoft/)  \|
- [Connect SliceWP to Intercom](https://wpfusion.com/connect/connect-slicewp-to-intercom/)  \|
- [Connect SliceWP to Jetpack CRM](https://wpfusion.com/connect/connect-slicewp-to-jetpack-crm/)  \|
- [Connect SliceWP to Kartra](https://wpfusion.com/connect/connect-slicewp-to-kartra/)  \|
- [Connect SliceWP to Keap](https://wpfusion.com/connect/connect-slicewp-to-keap/)  \|
- [Connect SliceWP to Klaviyo](https://wpfusion.com/connect/connect-slicewp-to-klaviyo/)  \|
- [Connect SliceWP to KlickTipp](https://wpfusion.com/connect/connect-slicewp-to-klicktipp/)  \|
- [Connect SliceWP to Loopify](https://wpfusion.com/connect/connect-slicewp-to-loopify/)  \|
- [Connect SliceWP to MailChimp](https://wpfusion.com/connect/connect-slicewp-to-mailchimp/)  \|
- [Connect SliceWP to MailerLite](https://wpfusion.com/connect/connect-slicewp-to-mailerlite/)  \|
- [Connect SliceWP to Mailjet](https://wpfusion.com/connect/connect-slicewp-to-mailjet/)  \|
- [Connect SliceWP to MailPoet](https://wpfusion.com/connect/connect-slicewp-to-mailpoet/)  \|
- [Connect SliceWP to Maropost](https://wpfusion.com/connect/connect-slicewp-to-maropost/)  \|
- [Connect SliceWP to Mautic](https://wpfusion.com/connect/connect-slicewp-to-mautic/)  \|
- [Connect SliceWP to NationBuilder](https://wpfusion.com/connect/connect-slicewp-to-nationbuilder/)  \|
- [Connect SliceWP to Omnisend](https://wpfusion.com/connect/connect-slicewp-to-omnisend/)  \|
- [Connect SliceWP to Ontraport](https://wpfusion.com/connect/connect-slicewp-to-ontraport/)  \|
- [Connect SliceWP to Ortto](https://wpfusion.com/connect/connect-slicewp-to-ortto/)  \|
- [Connect SliceWP to Pipedrive](https://wpfusion.com/connect/connect-slicewp-to-pipedrive/)  \|
- [Connect SliceWP to Platformly](https://wpfusion.com/connect/connect-slicewp-to-platformly/)  \|
- [Connect SliceWP to Quentn](https://wpfusion.com/connect/connect-slicewp-to-quentn/)  \|
- [Connect SliceWP to Salesflare](https://wpfusion.com/connect/connect-slicewp-to-salesflare/)  \|
- [Connect SliceWP to Salesforce](https://wpfusion.com/connect/connect-slicewp-to-salesforce/)  \|
- [Connect SliceWP to Sender](https://wpfusion.com/connect/connect-slicewp-to-sender/)  \|
- [Connect SliceWP to SendFox](https://wpfusion.com/connect/connect-slicewp-to-sendfox/)  \|
- [Connect SliceWP to Tubular](https://wpfusion.com/connect/connect-slicewp-to-tubular/)  \|
- [Connect SliceWP to User.com](https://wpfusion.com/connect/connect-slicewp-to-user-com/)  \|
- [Connect SliceWP to WP ERP](https://wpfusion.com/connect/connect-slicewp-to-wp-erp/)  \|
- [Connect SliceWP to Zoho](https://wpfusion.com/connect/connect-slicewp-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/affiliates/slicewp/#overview)
- [Syncing affiliate and referrer data](https://wpfusion.com/documentation/affiliates/slicewp/#syncing-affiliate-and-referrer-data)
- [Syncing affiliate meta fields](https://wpfusion.com/documentation/affiliates/slicewp/#syncing-affiliate-meta-fields)
- [Syncing referrer meta fields](https://wpfusion.com/documentation/affiliates/slicewp/#syncing-referrer-meta-fields)
- [Applying tags to affiliates](https://wpfusion.com/documentation/affiliates/slicewp/#applying-tags-to-affiliates)
- [Applying tags to WooCommerce customers](https://wpfusion.com/documentation/affiliates/slicewp/#applying-tags-to-woocommerce-customers)
- [Export options](https://wpfusion.com/documentation/affiliates/slicewp/#export-options)

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