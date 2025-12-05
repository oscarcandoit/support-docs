---
url: "https://wpfusion.com/documentation/membership/restrict-content-pro/"
title: "Connect Restrict Content Pro to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/restrict-content-pro/#content)

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

# Restrict Content Pro

- Published onSeptember 15, 2016
- Last updated on March 14, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- Restrict Content Pro

### [\#](https://wpfusion.com/documentation/membership/restrict-content-pro/\#overview) Overview

WP Fusion works with [Restrict Content Pro](https://wpfusion.com/go/restrict-content-pro) to sync customers with [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register or purchase a subscription.

You can sync data collected on your registration form to custom fields in your CRM, and apply tags based on membership level and subscription status.

You can also automatically add users to membership levels by applying “linked tags” in your CRM.

### [\#](https://wpfusion.com/documentation/membership/restrict-content-pro/\#membership-tagging) Membership Tagging

You can apply tags in your CRM based on the RCP membership level purchased, and automatically grant membership levels to users by linking membership levels with a CRM tag.

[![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-membership-level-2-1024x351.jpg)](https://wpfusion.com/wp-content/uploads/2016/09/rcp-membership-level-2-scaled.jpg)

There are three options:

- **Apply Tags:** When the customer purchases a membership, these tags will be applied in your CRM. This is the default behavior.
- **Remove Tags:** When this box is checked, the tags applied at checkout will be removed when a membership expires.
- **Link with Tag:** Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes _linked_ with the membership level. If this tag is applied to a user, for example via a webhook, they will be automatically enrolled in the membership. Likewise if this tag is removed, they will be removed from the membership. This lets you automate individual users’ membership levels using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

#### [\#](https://wpfusion.com/documentation/membership/restrict-content-pro/\#additional-status-tagging) Additional status tagging

WP Fusion also supports applying tags based on specific statuses of memberships. This is in addition to the more general _Apply Tags_ setting, and can be used to trigger emails from your CRM based on changes in a member’s status.

![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-status-tagging-1024x839.jpg)

The status tags will generally not be removed, _unless_ a member’s status changes back to Active. For example:

- If a customer has a failed renewal payment, and then cancels their membership, they will be tagged with both _Payment Failed_ and _Membership Cancelled_
- If a customer has a failed renewal payment, but then has a successful payment and their status comes back to Active again, the _Payment Failed_ tag will be removed, and they will only be tagged as _Membership Active_
- If a customer cancels their membership but then resumes it again, the _Membership Cancelled_ tag will be removed, and they will only be tagged as _Membership Active_

### [\#](https://wpfusion.com/documentation/membership/restrict-content-pro/\#syncing-meta-fields) Syncing meta fields

WP Fusion makes several meta fields related to Restrict Content Pro memberships available for syncing with your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-fields-1024x363.jpg)](https://wpfusion.com/wp-content/uploads/2016/09/rcp-fields.jpg)

You can find these fields and enable them for sync from the Contact Fields tab in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/membership/restrict-content-pro/\#groups) Groups

Using the Restrict Content Pro [Group Accounts add-on](https://restrictcontentpro.com/downloads/group-accounts/) unlocks additional options for tagging your group members in your CRM.

[![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-groups-1024x409.jpg)](https://wpfusion.com/wp-content/uploads/2016/09/rcp-groups-scaled.jpg)

When a member is added to a group, they will be automatically synced to a contact record in your CRM.

When editing a group, there are two options for tagging group members:

- **Apply Tags:** When a user is enrolled in the group, these tags will be applied in your CRM. This is the default behavior.
- **Link with Tag:** Most sites won’t require this, but it is available as an option for those that need it. This setting allows you to select a tag that becomes _linked_ with the group enrollment. If this tag is applied to a user, for example via a webhook, they will be automatically enrolled in the group. Likewise if this tag is removed, they will be removed from the membership. This lets you automate individual users’ group enrollments using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

#### [\#](https://wpfusion.com/documentation/membership/restrict-content-pro/\#group-meta-fields) Group meta fields

WP Fusion adds two additional fields for sync when the Groups Accounts addon is active, Group Leader Email and Group Name.

[![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-group-fields-1024x423.jpg)](https://wpfusion.com/wp-content/uploads/2016/09/rcp-group-fields.jpg)

These fields will be synced to your CRM when a user is added to a group:

- **Group Leader Email:** This field will be set to the email address of the group leader.
- **Group Name:** This field will be set to the name of the group.

### [\#](https://wpfusion.com/documentation/membership/restrict-content-pro/\#exporting-member-data) Exporting member data

WP Fusion includes an export utility that can export historical member data to your CRM (for example from before you installed WP Fusion).

[![](https://wpfusion.com/wp-content/uploads/2016/09/rcp-export-1024x468.jpg)](https://wpfusion.com/wp-content/uploads/2016/09/rcp-export.jpg)

This can be found under the Batch Operations heading on the Advanced tab of the WP Fusion settings.

When you run the **Restrict Content Pro members** operation all members will be tagged based on the tag settings for their current membership level. Any custom fields related to their membership and membership status will also be synced to your CRM.

#### [\#](https://wpfusion.com/documentation/membership/restrict-content-pro/\#groups) Groups

If the Group Accounts addon is active, you will also see a **Restrict Content Pro group memberships** batch operation. Running this operation will apply the configured tags to every user based on their current group enrollments.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Restrict Content Pro to ActiveCampaign](https://wpfusion.com/connect/connect-restrict-content-pro-to-activecampaign/)  \|
- [Connect Restrict Content Pro to AgileCRM](https://wpfusion.com/connect/connect-restrict-content-pro-to-agilecrm/)  \|
- [Connect Restrict Content Pro to Autopilot](https://wpfusion.com/connect/connect-restrict-content-pro-to-autopilot/)  \|
- [Connect Restrict Content Pro to Bento](https://wpfusion.com/connect/connect-restrict-content-pro-to-bento/)  \|
- [Connect Restrict Content Pro to BirdSend](https://wpfusion.com/connect/connect-restrict-content-pro-to-birdsend/)  \|
- [Connect Restrict Content Pro to Brevo](https://wpfusion.com/connect/connect-restrict-content-pro-to-brevo/)  \|
- [Connect Restrict Content Pro to Capsule](https://wpfusion.com/connect/connect-restrict-content-pro-to-capsule/)  \|
- [Connect Restrict Content Pro to Constant Contact](https://wpfusion.com/connect/connect-restrict-content-pro-to-constant-contact/)  \|
- [Connect Restrict Content Pro to ConvertKit](https://wpfusion.com/connect/connect-restrict-content-pro-to-convertkit/)  \|
- [Connect Restrict Content Pro to ConvesioConvert](https://wpfusion.com/connect/connect-restrict-content-pro-to-convesioconvert/)  \|
- [Connect Restrict Content Pro to Copper](https://wpfusion.com/connect/connect-restrict-content-pro-to-copper/)  \|
- [Connect Restrict Content Pro to Customer.io](https://wpfusion.com/connect/connect-restrict-content-pro-to-customer-io/)  \|
- [Connect Restrict Content Pro to Customerly](https://wpfusion.com/connect/connect-restrict-content-pro-to-customerly/)  \|
- [Connect Restrict Content Pro to Drip](https://wpfusion.com/connect/connect-restrict-content-pro-to-drip/)  \|
- [Connect Restrict Content Pro to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-restrict-content-pro-to-dynamics-365-marketing/)  \|
- [Connect Restrict Content Pro to EmailOctopus](https://wpfusion.com/connect/connect-restrict-content-pro-to-emailoctopus/)  \|
- [Connect Restrict Content Pro to EngageBay](https://wpfusion.com/connect/connect-restrict-content-pro-to-engagebay/)  \|
- [Connect Restrict Content Pro to Flexie](https://wpfusion.com/connect/connect-restrict-content-pro-to-flexie/)  \|
- [Connect Restrict Content Pro to FluentCRM](https://wpfusion.com/connect/connect-restrict-content-pro-to-fluentcrm/)  \|
- [Connect Restrict Content Pro to FunnelKit](https://wpfusion.com/connect/connect-restrict-content-pro-to-funnelkit/)  \|
- [Connect Restrict Content Pro to Gist](https://wpfusion.com/connect/connect-restrict-content-pro-to-gist/)  \|
- [Connect Restrict Content Pro to Groundhogg](https://wpfusion.com/connect/connect-restrict-content-pro-to-groundhogg/)  \|
- [Connect Restrict Content Pro to HighLevel](https://wpfusion.com/connect/connect-restrict-content-pro-to-highlevel/)  \|
- [Connect Restrict Content Pro to HubSpot](https://wpfusion.com/connect/connect-restrict-content-pro-to-hubspot/)  \|
- [Connect Restrict Content Pro to Infusionsoft](https://wpfusion.com/connect/connect-restrict-content-pro-to-infusionsoft/)  \|
- [Connect Restrict Content Pro to Intercom](https://wpfusion.com/connect/connect-restrict-content-pro-to-intercom/)  \|
- [Connect Restrict Content Pro to Jetpack CRM](https://wpfusion.com/connect/connect-restrict-content-pro-to-jetpack-crm/)  \|
- [Connect Restrict Content Pro to Kartra](https://wpfusion.com/connect/connect-restrict-content-pro-to-kartra/)  \|
- [Connect Restrict Content Pro to Keap](https://wpfusion.com/connect/connect-restrict-content-pro-to-keap/)  \|
- [Connect Restrict Content Pro to Klaviyo](https://wpfusion.com/connect/connect-restrict-content-pro-to-klaviyo/)  \|
- [Connect Restrict Content Pro to KlickTipp](https://wpfusion.com/connect/connect-restrict-content-pro-to-klicktipp/)  \|
- [Connect Restrict Content Pro to Loopify](https://wpfusion.com/connect/connect-restrict-content-pro-to-loopify/)  \|
- [Connect Restrict Content Pro to MailChimp](https://wpfusion.com/connect/connect-restrict-content-pro-to-mailchimp/)  \|
- [Connect Restrict Content Pro to MailerLite](https://wpfusion.com/connect/connect-restrict-content-pro-to-mailerlite/)  \|
- [Connect Restrict Content Pro to Mailjet](https://wpfusion.com/connect/connect-restrict-content-pro-to-mailjet/)  \|
- [Connect Restrict Content Pro to MailPoet](https://wpfusion.com/connect/connect-restrict-content-pro-to-mailpoet/)  \|
- [Connect Restrict Content Pro to Maropost](https://wpfusion.com/connect/connect-restrict-content-pro-to-maropost/)  \|
- [Connect Restrict Content Pro to Mautic](https://wpfusion.com/connect/connect-restrict-content-pro-to-mautic/)  \|
- [Connect Restrict Content Pro to NationBuilder](https://wpfusion.com/connect/connect-restrict-content-pro-to-nationbuilder/)  \|
- [Connect Restrict Content Pro to Omnisend](https://wpfusion.com/connect/connect-restrict-content-pro-to-omnisend/)  \|
- [Connect Restrict Content Pro to Ontraport](https://wpfusion.com/connect/connect-restrict-content-pro-to-ontraport/)  \|
- [Connect Restrict Content Pro to Ortto](https://wpfusion.com/connect/connect-restrict-content-pro-to-ortto/)  \|
- [Connect Restrict Content Pro to Pipedrive](https://wpfusion.com/connect/connect-restrict-content-pro-to-pipedrive/)  \|
- [Connect Restrict Content Pro to Platformly](https://wpfusion.com/connect/connect-restrict-content-pro-to-platformly/)  \|
- [Connect Restrict Content Pro to Quentn](https://wpfusion.com/connect/connect-restrict-content-pro-to-quentn/)  \|
- [Connect Restrict Content Pro to Salesflare](https://wpfusion.com/connect/connect-restrict-content-pro-to-salesflare/)  \|
- [Connect Restrict Content Pro to Salesforce](https://wpfusion.com/connect/connect-restrict-content-pro-to-salesforce/)  \|
- [Connect Restrict Content Pro to Sender](https://wpfusion.com/connect/connect-restrict-content-pro-to-sender/)  \|
- [Connect Restrict Content Pro to SendFox](https://wpfusion.com/connect/connect-restrict-content-pro-to-sendfox/)  \|
- [Connect Restrict Content Pro to Tubular](https://wpfusion.com/connect/connect-restrict-content-pro-to-tubular/)  \|
- [Connect Restrict Content Pro to User.com](https://wpfusion.com/connect/connect-restrict-content-pro-to-user-com/)  \|
- [Connect Restrict Content Pro to WP ERP](https://wpfusion.com/connect/connect-restrict-content-pro-to-wp-erp/)  \|
- [Connect Restrict Content Pro to Zoho](https://wpfusion.com/connect/connect-restrict-content-pro-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/restrict-content-pro/#overview)
- [Membership Tagging](https://wpfusion.com/documentation/membership/restrict-content-pro/#membership-tagging)
- [Additional status tagging](https://wpfusion.com/documentation/membership/restrict-content-pro/#additional-status-tagging)
- [Syncing meta fields](https://wpfusion.com/documentation/membership/restrict-content-pro/#syncing-meta-fields)
- [Groups](https://wpfusion.com/documentation/membership/restrict-content-pro/#groups)
- [Group meta fields](https://wpfusion.com/documentation/membership/restrict-content-pro/#group-meta-fields)
- [Exporting member data](https://wpfusion.com/documentation/membership/restrict-content-pro/#exporting-member-data)
- [Groups](https://wpfusion.com/documentation/membership/restrict-content-pro/#groups)

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