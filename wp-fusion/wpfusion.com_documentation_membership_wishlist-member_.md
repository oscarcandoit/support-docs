---
url: "https://wpfusion.com/documentation/membership/wishlist-member/"
title: "Connect WishList Member to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/wishlist-member/#content)

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

# WishList Member

- Published onDecember 5, 2017
- Last updated on August 30, 2021

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- WishList Member

### [\#](https://wpfusion.com/documentation/membership/wishlist-member/\#overview) Overview

WP Fusion integrates with [WishList Member](https://wpfusion.com/go/wishlistmember) to bring the power of [your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) to your WordPress membership platform.

When a user checks out on your WishList Member site, their contact details will automatically be added to [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/). WP Fusion also supports detecting and syncing any custom fields you add to WishList registration  and profile forms.

### [\#](https://wpfusion.com/documentation/membership/wishlist-member/\#settings) Settings

WP Fusion adds a settings page under the main WishList Member menu in the admin, where you can configure tags for each of your membership levels.

[![](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-1-1024x430.jpg)](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-1.jpg)

For each level, there are three options:

- **Apply Tags:** When the customer purchases a membership, these tags will be applied in your CRM. This is the default behavior.
- **Link with Tag:** Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes _linked_ with the membership level. If this tag is applied to a user, for example via a webhook, they will be automatically enrolled in the membership. Likewise if this tag is removed, they will be removed from the membership. This lets you automate individual users’ membership levels using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).
- **Apply Tags – Cancelled:** These tags will be applied in your CRM when the membership is cancelled for the user.

### [\#](https://wpfusion.com/documentation/membership/wishlist-member/\#pay-per-post-tagging) Pay Per Post tagging

When editing any piece of content in the admin, WishList Member adds a metabox where you can configure [Pay Per Post settings](https://help.wishlistproducts.com/knowledge-base/pay-per-post/) for that content.

[![](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-pay-per-post-1024x301.jpg)](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-pay-per-post.jpg)

With WP Fusion active, you’ll see an additional tab with the option **Apply tags – Pay Per Post**.

Any tags specified here will be applied to the member in your connected CRM when the content is purchased via Pay Per Post.

### [\#](https://wpfusion.com/documentation/membership/wishlist-member/\#batch-operations) Batch Operations

WP Fusion includes a batch processing tool to retroactively apply tags in your CRM based on each user’s current membership level in WishList Member. This is found at Settings » WP Fusion » Advanced » Batch Tools.

[![](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-batch-operation-1024x646.jpg)](https://wpfusion.com/wp-content/uploads/2017/12/wishlist-member-batch-operation-scaled.jpg)

When you run the **WishList membership statuses** operation, WP Fusion will check the current membership level for each of your users and apply any tags configured for that membership level.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect WishList Member to ActiveCampaign](https://wpfusion.com/connect/connect-wishlist-member-to-activecampaign/)  \|
- [Connect WishList Member to AgileCRM](https://wpfusion.com/connect/connect-wishlist-member-to-agilecrm/)  \|
- [Connect WishList Member to Autopilot](https://wpfusion.com/connect/connect-wishlist-member-to-autopilot/)  \|
- [Connect WishList Member to Bento](https://wpfusion.com/connect/connect-wishlist-member-to-bento/)  \|
- [Connect WishList Member to BirdSend](https://wpfusion.com/connect/connect-wishlist-member-to-birdsend/)  \|
- [Connect WishList Member to Brevo](https://wpfusion.com/connect/connect-wishlist-member-to-brevo/)  \|
- [Connect WishList Member to Capsule](https://wpfusion.com/connect/connect-wishlist-member-to-capsule/)  \|
- [Connect WishList Member to Constant Contact](https://wpfusion.com/connect/connect-wishlist-member-to-constant-contact/)  \|
- [Connect WishList Member to ConvertKit](https://wpfusion.com/connect/connect-wishlist-member-to-convertkit/)  \|
- [Connect WishList Member to ConvesioConvert](https://wpfusion.com/connect/connect-wishlist-member-to-convesioconvert/)  \|
- [Connect WishList Member to Copper](https://wpfusion.com/connect/connect-wishlist-member-to-copper/)  \|
- [Connect WishList Member to Customer.io](https://wpfusion.com/connect/connect-wishlist-member-to-customer-io/)  \|
- [Connect WishList Member to Customerly](https://wpfusion.com/connect/connect-wishlist-member-to-customerly/)  \|
- [Connect WishList Member to Drip](https://wpfusion.com/connect/connect-wishlist-member-to-drip/)  \|
- [Connect WishList Member to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-wishlist-member-to-dynamics-365-marketing/)  \|
- [Connect WishList Member to EmailOctopus](https://wpfusion.com/connect/connect-wishlist-member-to-emailoctopus/)  \|
- [Connect WishList Member to EngageBay](https://wpfusion.com/connect/connect-wishlist-member-to-engagebay/)  \|
- [Connect WishList Member to Flexie](https://wpfusion.com/connect/connect-wishlist-member-to-flexie/)  \|
- [Connect WishList Member to FluentCRM](https://wpfusion.com/connect/connect-wishlist-member-to-fluentcrm/)  \|
- [Connect WishList Member to FunnelKit](https://wpfusion.com/connect/connect-wishlist-member-to-funnelkit/)  \|
- [Connect WishList Member to Gist](https://wpfusion.com/connect/connect-wishlist-member-to-gist/)  \|
- [Connect WishList Member to Groundhogg](https://wpfusion.com/connect/connect-wishlist-member-to-groundhogg/)  \|
- [Connect WishList Member to HighLevel](https://wpfusion.com/connect/connect-wishlist-member-to-highlevel/)  \|
- [Connect WishList Member to HubSpot](https://wpfusion.com/connect/connect-wishlist-member-to-hubspot/)  \|
- [Connect WishList Member to Infusionsoft](https://wpfusion.com/connect/connect-wishlist-member-to-infusionsoft/)  \|
- [Connect WishList Member to Intercom](https://wpfusion.com/connect/connect-wishlist-member-to-intercom/)  \|
- [Connect WishList Member to Jetpack CRM](https://wpfusion.com/connect/connect-wishlist-member-to-jetpack-crm/)  \|
- [Connect WishList Member to Kartra](https://wpfusion.com/connect/connect-wishlist-member-to-kartra/)  \|
- [Connect WishList Member to Keap](https://wpfusion.com/connect/connect-wishlist-member-to-keap/)  \|
- [Connect WishList Member to Klaviyo](https://wpfusion.com/connect/connect-wishlist-member-to-klaviyo/)  \|
- [Connect WishList Member to KlickTipp](https://wpfusion.com/connect/connect-wishlist-member-to-klicktipp/)  \|
- [Connect WishList Member to Loopify](https://wpfusion.com/connect/connect-wishlist-member-to-loopify/)  \|
- [Connect WishList Member to MailChimp](https://wpfusion.com/connect/connect-wishlist-member-to-mailchimp/)  \|
- [Connect WishList Member to MailerLite](https://wpfusion.com/connect/connect-wishlist-member-to-mailerlite/)  \|
- [Connect WishList Member to Mailjet](https://wpfusion.com/connect/connect-wishlist-member-to-mailjet/)  \|
- [Connect WishList Member to MailPoet](https://wpfusion.com/connect/connect-wishlist-member-to-mailpoet/)  \|
- [Connect WishList Member to Maropost](https://wpfusion.com/connect/connect-wishlist-member-to-maropost/)  \|
- [Connect WishList Member to Mautic](https://wpfusion.com/connect/connect-wishlist-member-to-mautic/)  \|
- [Connect WishList Member to NationBuilder](https://wpfusion.com/connect/connect-wishlist-member-to-nationbuilder/)  \|
- [Connect WishList Member to Omnisend](https://wpfusion.com/connect/connect-wishlist-member-to-omnisend/)  \|
- [Connect WishList Member to Ontraport](https://wpfusion.com/connect/connect-wishlist-member-to-ontraport/)  \|
- [Connect WishList Member to Ortto](https://wpfusion.com/connect/connect-wishlist-member-to-ortto/)  \|
- [Connect WishList Member to Pipedrive](https://wpfusion.com/connect/connect-wishlist-member-to-pipedrive/)  \|
- [Connect WishList Member to Platformly](https://wpfusion.com/connect/connect-wishlist-member-to-platformly/)  \|
- [Connect WishList Member to Quentn](https://wpfusion.com/connect/connect-wishlist-member-to-quentn/)  \|
- [Connect WishList Member to Salesflare](https://wpfusion.com/connect/connect-wishlist-member-to-salesflare/)  \|
- [Connect WishList Member to Salesforce](https://wpfusion.com/connect/connect-wishlist-member-to-salesforce/)  \|
- [Connect WishList Member to Sender](https://wpfusion.com/connect/connect-wishlist-member-to-sender/)  \|
- [Connect WishList Member to SendFox](https://wpfusion.com/connect/connect-wishlist-member-to-sendfox/)  \|
- [Connect WishList Member to Tubular](https://wpfusion.com/connect/connect-wishlist-member-to-tubular/)  \|
- [Connect WishList Member to User.com](https://wpfusion.com/connect/connect-wishlist-member-to-user-com/)  \|
- [Connect WishList Member to WP ERP](https://wpfusion.com/connect/connect-wishlist-member-to-wp-erp/)  \|
- [Connect WishList Member to Zoho](https://wpfusion.com/connect/connect-wishlist-member-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/wishlist-member/#overview)
- [Settings](https://wpfusion.com/documentation/membership/wishlist-member/#settings)
- [Pay Per Post tagging](https://wpfusion.com/documentation/membership/wishlist-member/#pay-per-post-tagging)
- [Batch Operations](https://wpfusion.com/documentation/membership/wishlist-member/#batch-operations)

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