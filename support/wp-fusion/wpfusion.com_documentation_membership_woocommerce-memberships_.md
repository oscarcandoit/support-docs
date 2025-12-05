---
url: "https://wpfusion.com/documentation/membership/woocommerce-memberships/"
title: "Connect WooCommerce Memberships to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/woocommerce-memberships/#content)

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

# WooCommerce Memberships

- Published onAugust 16, 2017
- Last updated on June 24, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- WooCommerce Memberships

### [\#](https://wpfusion.com/documentation/membership/woocommerce-memberships/\#overview) Overview

Using WP Fusion with [WooCommerce Memberships](https://wpfusion.com/go/woocommerce-memberships), you can apply tags in your CRM based on the status of a user’s membership, as well as automate membership level enrollments by applying a tag in your CRM.

**Note:** If you’re using WooCommerce Memberships in conjunction with [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/), and you’ve already configured tags for the subscription product, then there is no need to specify additional tags on the membership plan, and it may result in unexpected behavior.

### [\#](https://wpfusion.com/documentation/membership/woocommerce-memberships/\#settings) Settings

To configure the settings, navigate to WooCommerce » Memberships » Membership Plans, click Edit on any membership plan, and select the WP Fusion settings panel.

[![](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-3-966x1024.jpg)](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-3-scaled.jpg)

#### [\#](https://wpfusion.com/documentation/membership/woocommerce-memberships/\#automated-enrollment) Automated enrollment

You can automate enrollments in a membership level by specifying a “linked tag” in the **Link with tag** box.

If this tag is applied to a user, they will automatically be enrolled in the membership. Likewise, if this tag is removed, their membership status will be paused.

When a user is given this membership level, either via a WooCommerce purchase or manual assignment, the selected tag will also be applied.

**Note:** This is only necessary if you are selling membership access via an outside system (like ThriveCart) and wish to automatically set and pause membership levels. If you’re selling access via WooCommerce it’s preferable to configure any tags to be applied via [the WooCommerce product](https://wpfusion.com/documentation/ecommerce/woocommerce/).

#### [\#](https://wpfusion.com/documentation/membership/woocommerce-memberships/\#active-memberships) Active memberships

Any tags specified in the **Apply tags** setting will be applied to the user when a new membership is created, or a membership status is changed to active (either a status of Active, Free Trial, or Complimentary).

[![](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-active-1-1024x208.jpg)](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-active-1-scaled.jpg)

Optionally you can check the box for **Remove tags** to automatically remove those tags when a membership is paused, expires, or is fully cancelled.

#### [\#](https://wpfusion.com/documentation/membership/woocommerce-memberships/\#additional-statuses) Additional statuses

Here you can configure additional tags to be applied based on specific membership statuses. For more details on the meanings of the statuses see [this documentation from WooCommerce](https://docs.woocommerce.com/document/woocommerce-memberships-user-memberships/#section-4).

If a user was tagged as either Cancelled, Expired, or Paused, and their membership is reactivated, the tags for the previous status will be removed.

### [\#](https://wpfusion.com/documentation/membership/woocommerce-memberships/\#syncing-membership-fields) Syncing membership fields

WP Fusion also supports syncing a member’s expiration date and current membership status to a custom fields in your CRM.

To set this up go to Settings » WP Fusion » Contact Fields and enable the fields under the **WooCommerce Memberships** header for sync.

[![](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-fields-1-1024x390.jpg)](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-fields-1-scaled.jpg)

- **Membership Status:** When a membership is purchased, manually edited, or the membership status changes the status will be synced to your CRM
- **Membership Expiration Date:** For membership plans with a fixed expiration date, this field will sync the expiration date to your CRM. Note that this is not the member’s next payment date, for syncing the next payment date, enable the [Next Payment Date field](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/#syncing-subscription-fields) in the WooCommerce Subscriptions integration.

If you’ve created custom [membership profile fields](https://woocommerce.com/document/woocommerce-memberships-profile-fields/), you can also map them with CRM fields here. They will be synced whenever the member’s profile is updated.

#### [\#](https://wpfusion.com/documentation/membership/woocommerce-memberships/\#plan-specific-field-mapping) Plan-specific field mapping

Membership fields can also be enabled for sync on a per-plan basis. This lets you sync the status and expiration date to separate custom fields in your CRM for situations where members have multiple concurrent memberships.

[![screenshot](https://wpfusion.com/wp-content/uploads/2017/08/woocommerce-memberships-plan-fields-1024x215.jpg)](https://wpfusion.com/wp-content/uploads/2017/08/woocommerce-memberships-plan-fields.jpg) Membership fields can be enabled for sync on a per-plan basis by selecting custom fields in your CRM when editing any membership plan.

Membership fields can be enabled for sync on a per-plan basis by selecting custom fields in your CRM at the bottom of the WP Fusion settings panel when editing any membership plan.

### [\#](https://wpfusion.com/documentation/membership/woocommerce-memberships/\#batch-operations) Batch operations

WP Fusion includes two batch processing tool for WooCommerce memberships, under Settings » WP Fusion » Advanced » Batch Operations.

These can be used to sync data to your CRM from before you installed WP Fusion, or to bulk-update tags after you’ve changed the WP Fusion settings on your membership plans.

[![](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-batch-operation-1024x549.jpg)](https://wpfusion.com/wp-content/uploads/2017/08/woo-memberships-batch-operation-scaled.jpg)

The two operations are:

- **WooCommerce Memberships statuses:** For each user membership, WP Fusion apply tags in your CRM based on the membership plan and status, using the settings configured on the membership. This does not create any contact records or sync any fields.
- **WooCommerce Memberships meta:** For each user membership, WP Fusion will sync the membership name, status and expiration date (if applicable) to the selected custom fields in your CRM. This does not create any contact records, or apply any tags.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect WooCommerce Memberships to ActiveCampaign](https://wpfusion.com/connect/connect-woocommerce-memberships-to-activecampaign/)  \|
- [Connect WooCommerce Memberships to AgileCRM](https://wpfusion.com/connect/connect-woocommerce-memberships-to-agilecrm/)  \|
- [Connect WooCommerce Memberships to Autopilot](https://wpfusion.com/connect/connect-woocommerce-memberships-to-autopilot/)  \|
- [Connect WooCommerce Memberships to Bento](https://wpfusion.com/connect/connect-woocommerce-memberships-to-bento/)  \|
- [Connect WooCommerce Memberships to BirdSend](https://wpfusion.com/connect/connect-woocommerce-memberships-to-birdsend/)  \|
- [Connect WooCommerce Memberships to Brevo](https://wpfusion.com/connect/connect-woocommerce-memberships-to-brevo/)  \|
- [Connect WooCommerce Memberships to Capsule](https://wpfusion.com/connect/connect-woocommerce-memberships-to-capsule/)  \|
- [Connect WooCommerce Memberships to Constant Contact](https://wpfusion.com/connect/connect-woocommerce-memberships-to-constant-contact/)  \|
- [Connect WooCommerce Memberships to ConvertKit](https://wpfusion.com/connect/connect-woocommerce-memberships-to-convertkit/)  \|
- [Connect WooCommerce Memberships to ConvesioConvert](https://wpfusion.com/connect/connect-woocommerce-memberships-to-convesioconvert/)  \|
- [Connect WooCommerce Memberships to Copper](https://wpfusion.com/connect/connect-woocommerce-memberships-to-copper/)  \|
- [Connect WooCommerce Memberships to Customer.io](https://wpfusion.com/connect/connect-woocommerce-memberships-to-customer-io/)  \|
- [Connect WooCommerce Memberships to Customerly](https://wpfusion.com/connect/connect-woocommerce-memberships-to-customerly/)  \|
- [Connect WooCommerce Memberships to Drip](https://wpfusion.com/connect/connect-woocommerce-memberships-to-drip/)  \|
- [Connect WooCommerce Memberships to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-woocommerce-memberships-to-dynamics-365-marketing/)  \|
- [Connect WooCommerce Memberships to EmailOctopus](https://wpfusion.com/connect/connect-woocommerce-memberships-to-emailoctopus/)  \|
- [Connect WooCommerce Memberships to EngageBay](https://wpfusion.com/connect/connect-woocommerce-memberships-to-engagebay/)  \|
- [Connect WooCommerce Memberships to Flexie](https://wpfusion.com/connect/connect-woocommerce-memberships-to-flexie/)  \|
- [Connect WooCommerce Memberships to FluentCRM](https://wpfusion.com/connect/connect-woocommerce-memberships-to-fluentcrm/)  \|
- [Connect WooCommerce Memberships to FunnelKit](https://wpfusion.com/connect/connect-woocommerce-memberships-to-funnelkit/)  \|
- [Connect WooCommerce Memberships to Gist](https://wpfusion.com/connect/connect-woocommerce-memberships-to-gist/)  \|
- [Connect WooCommerce Memberships to Groundhogg](https://wpfusion.com/connect/connect-woocommerce-memberships-to-groundhogg/)  \|
- [Connect WooCommerce Memberships to HighLevel](https://wpfusion.com/connect/connect-woocommerce-memberships-to-highlevel/)  \|
- [Connect WooCommerce Memberships to HubSpot](https://wpfusion.com/connect/connect-woocommerce-memberships-to-hubspot/)  \|
- [Connect WooCommerce Memberships to Infusionsoft](https://wpfusion.com/connect/connect-woocommerce-memberships-to-infusionsoft/)  \|
- [Connect WooCommerce Memberships to Intercom](https://wpfusion.com/connect/connect-woocommerce-memberships-to-intercom/)  \|
- [Connect WooCommerce Memberships to Jetpack CRM](https://wpfusion.com/connect/connect-woocommerce-memberships-to-jetpack-crm/)  \|
- [Connect WooCommerce Memberships to Kartra](https://wpfusion.com/connect/connect-woocommerce-memberships-to-kartra/)  \|
- [Connect WooCommerce Memberships to Keap](https://wpfusion.com/connect/connect-woocommerce-memberships-to-keap/)  \|
- [Connect WooCommerce Memberships to Klaviyo](https://wpfusion.com/connect/connect-woocommerce-memberships-to-klaviyo/)  \|
- [Connect WooCommerce Memberships to KlickTipp](https://wpfusion.com/connect/connect-woocommerce-memberships-to-klicktipp/)  \|
- [Connect WooCommerce Memberships to Loopify](https://wpfusion.com/connect/connect-woocommerce-memberships-to-loopify/)  \|
- [Connect WooCommerce Memberships to MailChimp](https://wpfusion.com/connect/connect-woocommerce-memberships-to-mailchimp/)  \|
- [Connect WooCommerce Memberships to MailerLite](https://wpfusion.com/connect/connect-woocommerce-memberships-to-mailerlite/)  \|
- [Connect WooCommerce Memberships to Mailjet](https://wpfusion.com/connect/connect-woocommerce-memberships-to-mailjet/)  \|
- [Connect WooCommerce Memberships to MailPoet](https://wpfusion.com/connect/connect-woocommerce-memberships-to-mailpoet/)  \|
- [Connect WooCommerce Memberships to Maropost](https://wpfusion.com/connect/connect-woocommerce-memberships-to-maropost/)  \|
- [Connect WooCommerce Memberships to Mautic](https://wpfusion.com/connect/connect-woocommerce-memberships-to-mautic/)  \|
- [Connect WooCommerce Memberships to NationBuilder](https://wpfusion.com/connect/connect-woocommerce-memberships-to-nationbuilder/)  \|
- [Connect WooCommerce Memberships to Omnisend](https://wpfusion.com/connect/connect-woocommerce-memberships-to-omnisend/)  \|
- [Connect WooCommerce Memberships to Ontraport](https://wpfusion.com/connect/connect-woocommerce-memberships-to-ontraport/)  \|
- [Connect WooCommerce Memberships to Ortto](https://wpfusion.com/connect/connect-woocommerce-memberships-to-ortto/)  \|
- [Connect WooCommerce Memberships to Pipedrive](https://wpfusion.com/connect/connect-woocommerce-memberships-to-pipedrive/)  \|
- [Connect WooCommerce Memberships to Platformly](https://wpfusion.com/connect/connect-woocommerce-memberships-to-platformly/)  \|
- [Connect WooCommerce Memberships to Quentn](https://wpfusion.com/connect/connect-woocommerce-memberships-to-quentn/)  \|
- [Connect WooCommerce Memberships to Salesflare](https://wpfusion.com/connect/connect-woocommerce-memberships-to-salesflare/)  \|
- [Connect WooCommerce Memberships to Salesforce](https://wpfusion.com/connect/connect-woocommerce-memberships-to-salesforce/)  \|
- [Connect WooCommerce Memberships to Sender](https://wpfusion.com/connect/connect-woocommerce-memberships-to-sender/)  \|
- [Connect WooCommerce Memberships to SendFox](https://wpfusion.com/connect/connect-woocommerce-memberships-to-sendfox/)  \|
- [Connect WooCommerce Memberships to Tubular](https://wpfusion.com/connect/connect-woocommerce-memberships-to-tubular/)  \|
- [Connect WooCommerce Memberships to User.com](https://wpfusion.com/connect/connect-woocommerce-memberships-to-user-com/)  \|
- [Connect WooCommerce Memberships to WP ERP](https://wpfusion.com/connect/connect-woocommerce-memberships-to-wp-erp/)  \|
- [Connect WooCommerce Memberships to Zoho](https://wpfusion.com/connect/connect-woocommerce-memberships-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/woocommerce-memberships/#overview)
- [Settings](https://wpfusion.com/documentation/membership/woocommerce-memberships/#settings)
- [Automated enrollment](https://wpfusion.com/documentation/membership/woocommerce-memberships/#automated-enrollment)
- [Active memberships](https://wpfusion.com/documentation/membership/woocommerce-memberships/#active-memberships)
- [Additional statuses](https://wpfusion.com/documentation/membership/woocommerce-memberships/#additional-statuses)
- [Syncing membership fields](https://wpfusion.com/documentation/membership/woocommerce-memberships/#syncing-membership-fields)
- [Plan-specific field mapping](https://wpfusion.com/documentation/membership/woocommerce-memberships/#plan-specific-field-mapping)
- [Batch operations](https://wpfusion.com/documentation/membership/woocommerce-memberships/#batch-operations)

### You may also like

[![blue background with an orange logo on the left. white text reads 2024 in review with a party popper emoji beside it. the logo, featuring a white connected plus symbol, adds a touch of transparency. orange dotted lines and abstract shapes decorate the scene.](https://wpfusion.com/wp-content/uploads/2025/02/wp-fusion-year-review-2024-featured-image-300x158.jpg)](https://wpfusion.com/news/2024-in-review-and-transparency-report/)

Business

![Jack Arturo](https://secure.gravatar.com/avatar/684f089f623c6e008dec48b6e7bda186b448dc9668090c83d2a81b60a263bdc7?s=128&d=mm&r=g)

#### [2024 in Review and Transparency Report](https://wpfusion.com/news/2024-in-review-and-transparency-report/)

In this post, we look back at everything that happened with WP Fusion in 2024. What we’ve been working on, usage insights, revenue and support metrics, challenges, wins, fails, and what’s coming in the next year.

### In this chapter

- [AccessAlly](https://wpfusion.com/documentation/membership/accessally/ "AccessAlly")
- [ARMember](https://wpfusion.com/documentation/membership/armember/ "ARMember")
- [Blockli Streamer](https://wpfusion.com/documentation/membership/blockli-streamer/ "Blockli Streamer")
- [BuddyBoss](https://wpfusion.com/documentation/membership/buddyboss/ "BuddyBoss")
- [BuddyPress](https://wpfusion.com/documentation/membership/buddypress/ "BuddyPress")
- [Content Control](https://wpfusion.com/documentation/membership/content-control/ "Content Control")
- [FluentCommunity](https://wpfusion.com/documentation/membership/fluentcommunity/ "FluentCommunity")
- [MemberDash](https://wpfusion.com/documentation/membership/memberdash/ "MemberDash")
- [MemberMouse](https://wpfusion.com/documentation/membership/membermouse/ "MemberMouse")
- [MemberPress](https://wpfusion.com/documentation/membership/memberpress/ "MemberPress")
- [Members](https://wpfusion.com/documentation/membership/members/ "Members")
- [Paid Memberships Pro](https://wpfusion.com/documentation/membership/paid-memberships-pro/ "Paid Memberships Pro")
- [PeepSo](https://wpfusion.com/documentation/membership/peepso/ "PeepSo")
- [PilotPress](https://wpfusion.com/documentation/membership/pilotpress/ "PilotPress")
- [Profile Builder Pro](https://wpfusion.com/documentation/membership/profile-builder-pro/ "Profile Builder Pro")
- [ProfilePress](https://wpfusion.com/documentation/membership/profilepress/ "ProfilePress")
- [Restrict Content Pro](https://wpfusion.com/documentation/membership/restrict-content-pro/ "Restrict Content Pro")
- [s2Member](https://wpfusion.com/documentation/integrations/s2member/ "s2Member")
- [Simple Membership](https://wpfusion.com/documentation/membership/simple-membership/ "Simple Membership")
- [SureMembers](https://wpfusion.com/documentation/membership/suremembers/ "SureMembers")
- [Teams for WooCommerce Memberships](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/ "Teams for WooCommerce Memberships")
- [Toolset User Forms](https://wpfusion.com/documentation/membership/toolset-user-forms/ "Toolset User Forms")
- [Ultimate Member](https://wpfusion.com/documentation/membership/ultimate-member/ "Ultimate Member")
- [User Meta](https://wpfusion.com/documentation/membership/user-meta/ "User Meta")
- [UserPro](https://wpfusion.com/documentation/membership/userpro/ "UserPro")
- [Users Insights](https://wpfusion.com/documentation/membership/users-insights/ "Users Insights")
- [UsersWP](https://wpfusion.com/documentation/membership/userswp/ "UsersWP")
- [WishList Member](https://wpfusion.com/documentation/membership/wishlist-member/ "WishList Member")
- [WooCommerce Memberships](https://wpfusion.com/documentation/membership/woocommerce-memberships/ "WooCommerce Memberships")
- [WP User Manager](https://wpfusion.com/documentation/membership/wp-user-manager/ "WP User Manager")
- [WP-Members](https://wpfusion.com/documentation/membership/wp-members/ "WP-Members")

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