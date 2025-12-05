---
url: "https://wpfusion.com/documentation/membership/ultimate-member/"
title: "Connect Ultimate Member to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/ultimate-member/#content)

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

# Ultimate Member

- Published onJanuary 28, 2016
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- Ultimate Member

### [\#](https://wpfusion.com/documentation/membership/ultimate-member/\#overview) Overview

We love [Ultimate Member](https://wordpress.org/plugins/ultimate-member/) as a great (free) solution to create beautiful login and registration pages, as well as searchable member directories.

![](https://wpfusion.com/wp-content/uploads/2016/01/um-profile-1024x743.jpg)

### [\#](https://wpfusion.com/documentation/membership/ultimate-member/\#sync-custom-fields) Sync Custom Fields

WP Fusion will automatically detect any custom fields you’ve created through Ultimate Member and allow you to sync these fields to fields in your CRM when a user registers or a profile is updated.

![](https://wpfusion.com/wp-content/uploads/2016/01/um-fields-1024x475.jpg)

Any fields you’ve added to registration or profile forms will show up under the **Ultimate Member** heading under the Contact Fields list in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/membership/ultimate-member/\#tagging) Tagging

WP Fusion adds a few options specific to Ultimate Member for tagging contact records in your CRM.

#### [\#](https://wpfusion.com/documentation/membership/ultimate-member/\#tag-users-on-registration) Tag Users on Registration

You can specify tags to be applied per registration form when a user registers, allowing you to segment users by which registration form they used.

![Screen Shot 2016-01-28 at 08.08.59](https://wpfusion.com/wp-content/uploads/2016/01/Screen-Shot-2016-01-28-at-08.08.59.png)

This setting will appear in the sidebar while editing any Ultimate Member registration form.

#### [\#](https://wpfusion.com/documentation/membership/ultimate-member/\#user-roles) User Roles

When configuring Ultimate Member user roles, WP Fusion allows you to “link” a user role to a tag. Once a role has been linked to a tag, users will automatically be granted this role when the tag is applied. If the tag is removed, the role will be removed.

![](https://wpfusion.com/wp-content/uploads/2016/01/um-link-role-with-tag-1.jpg)

This setting can be found in the sidebar when editing any Ultimate Member role.

To avoid leaving users with no role, if a linked tag is removed and the user has no other roles, WP Fusion will grant the user the Ultimate Member default registration role. This setting can be found under Ultimate Member » Settings » Appearance » Registration Form.

If the **Profile Completeness** addon is installed, you will also see a setting allowing you to specify tags to apply in your CRM when a user’s profile is completed.

### [\#](https://wpfusion.com/documentation/membership/ultimate-member/\#general-settings) General Settings

WP Fusion has a few global settings for Ultimate Member. These can be found under Settings » WP Fusion » Integrations.

[![](https://wpfusion.com/wp-content/uploads/2016/01/ultimate-member-general-1024x305.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/ultimate-member-general-scaled.jpg)

The settings are:

- **Pull:** Enabling this setting will cause WP Fusion to connect to your CRM and load the user’s latest metadata any time their Ultimate Member profile is loaded. This will slow down the load time of the profile, so the preferred way to send data back to Ultimate Member from your CRM is by setting up [a webhook](https://wpfusion.com/documentation/webhooks/).
- **Defer Until Activation:** Enabling this setting will prevent WP Fusion from sending any data to your CRM (or applying any tags) to new users until their account has been activated. This can either be via the activation email sent by Ultimate Member, or a manual activation by an admin. This is a good way to get members to verify their email addresses before any data is sent to your CRM.
- **Deactivation Tag:** This setting can be used (most commonly with membership sites) to automatically deactivate a member’s account when a tag is applied, for example in the case of a payment failure. When the tag is removed their account will be reactivated.

### [\#](https://wpfusion.com/documentation/membership/ultimate-member/\#a-note-on-webhooks) A note on webhooks

Using [webhooks from your CRM](https://wpfusion.com/documentation/webhooks/), it’s possible to automatically import CRM contacts as WordPress users.

By setting the `&role=` parameter in the webhook URL to an Ultimate Member role slug, you can automatically assign an Ultimate Member user role to the new user.

When used in conjunction with the **Require Email Activation** option on the Ultimate Member role, you can automatically send the new user an email with a link to activate their account.

[![](https://wpfusion.com/wp-content/uploads/2016/01/um-require-activation-1024x481.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/um-require-activation.jpg)

To make this work properly, _omit_ the `&send_notification=` parameter from your webhook URL.

For example:

- `https://mysite.com/?wpf_action=add&role=um_custom_role`: New user will be imported with the role UM Custom Role, and the activation email will be sent from Ultimate Member. The default WordPress welcome email will not be sent.
- `https://mysite.com/?wpf_action=add&role=um_custom_role&send_notification=false`: New user will be imported with the role UM Custom Role, and _no emails will be sent at all_.
- `https://mysite.com/?wpf_action=add&role=um_custom_role&send_notification=true`: New user will be imported with the role UM Custom Role, and _both_ the WordPress default new user welcome email and the Ultimate Member account activation email will be sent.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect Ultimate Member to ActiveCampaign](https://wpfusion.com/connect/connect-ultimate-member-to-activecampaign/)  \|
- [Connect Ultimate Member to AgileCRM](https://wpfusion.com/connect/connect-ultimate-member-to-agilecrm/)  \|
- [Connect Ultimate Member to Autopilot](https://wpfusion.com/connect/connect-ultimate-member-to-autopilot/)  \|
- [Connect Ultimate Member to Bento](https://wpfusion.com/connect/connect-ultimate-member-to-bento/)  \|
- [Connect Ultimate Member to BirdSend](https://wpfusion.com/connect/connect-ultimate-member-to-birdsend/)  \|
- [Connect Ultimate Member to Brevo](https://wpfusion.com/connect/connect-ultimate-member-to-brevo/)  \|
- [Connect Ultimate Member to Capsule](https://wpfusion.com/connect/connect-ultimate-member-to-capsule/)  \|
- [Connect Ultimate Member to Constant Contact](https://wpfusion.com/connect/connect-ultimate-member-to-constant-contact/)  \|
- [Connect Ultimate Member to ConvertKit](https://wpfusion.com/connect/connect-ultimate-member-to-convertkit/)  \|
- [Connect Ultimate Member to ConvesioConvert](https://wpfusion.com/connect/connect-ultimate-member-to-convesioconvert/)  \|
- [Connect Ultimate Member to Copper](https://wpfusion.com/connect/connect-ultimate-member-to-copper/)  \|
- [Connect Ultimate Member to Customer.io](https://wpfusion.com/connect/connect-ultimate-member-to-customer-io/)  \|
- [Connect Ultimate Member to Customerly](https://wpfusion.com/connect/connect-ultimate-member-to-customerly/)  \|
- [Connect Ultimate Member to Drip](https://wpfusion.com/connect/connect-ultimate-member-to-drip/)  \|
- [Connect Ultimate Member to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-ultimate-member-to-dynamics-365-marketing/)  \|
- [Connect Ultimate Member to EmailOctopus](https://wpfusion.com/connect/connect-ultimate-member-to-emailoctopus/)  \|
- [Connect Ultimate Member to EngageBay](https://wpfusion.com/connect/connect-ultimate-member-to-engagebay/)  \|
- [Connect Ultimate Member to Flexie](https://wpfusion.com/connect/connect-ultimate-member-to-flexie/)  \|
- [Connect Ultimate Member to FluentCRM](https://wpfusion.com/connect/connect-ultimate-member-to-fluentcrm/)  \|
- [Connect Ultimate Member to FunnelKit](https://wpfusion.com/connect/connect-ultimate-member-to-funnelkit/)  \|
- [Connect Ultimate Member to Gist](https://wpfusion.com/connect/connect-ultimate-member-to-gist/)  \|
- [Connect Ultimate Member to Groundhogg](https://wpfusion.com/connect/connect-ultimate-member-to-groundhogg/)  \|
- [Connect Ultimate Member to HighLevel](https://wpfusion.com/connect/connect-ultimate-member-to-highlevel/)  \|
- [Connect Ultimate Member to HubSpot](https://wpfusion.com/connect/connect-ultimate-member-to-hubspot/)  \|
- [Connect Ultimate Member to Infusionsoft](https://wpfusion.com/connect/connect-ultimate-member-to-infusionsoft/)  \|
- [Connect Ultimate Member to Intercom](https://wpfusion.com/connect/connect-ultimate-member-to-intercom/)  \|
- [Connect Ultimate Member to Jetpack CRM](https://wpfusion.com/connect/connect-ultimate-member-to-jetpack-crm/)  \|
- [Connect Ultimate Member to Kartra](https://wpfusion.com/connect/connect-ultimate-member-to-kartra/)  \|
- [Connect Ultimate Member to Keap](https://wpfusion.com/connect/connect-ultimate-member-to-keap/)  \|
- [Connect Ultimate Member to Klaviyo](https://wpfusion.com/connect/connect-ultimate-member-to-klaviyo/)  \|
- [Connect Ultimate Member to KlickTipp](https://wpfusion.com/connect/connect-ultimate-member-to-klicktipp/)  \|
- [Connect Ultimate Member to Loopify](https://wpfusion.com/connect/connect-ultimate-member-to-loopify/)  \|
- [Connect Ultimate Member to MailChimp](https://wpfusion.com/connect/connect-ultimate-member-to-mailchimp/)  \|
- [Connect Ultimate Member to MailerLite](https://wpfusion.com/connect/connect-ultimate-member-to-mailerlite/)  \|
- [Connect Ultimate Member to Mailjet](https://wpfusion.com/connect/connect-ultimate-member-to-mailjet/)  \|
- [Connect Ultimate Member to MailPoet](https://wpfusion.com/connect/connect-ultimate-member-to-mailpoet/)  \|
- [Connect Ultimate Member to Maropost](https://wpfusion.com/connect/connect-ultimate-member-to-maropost/)  \|
- [Connect Ultimate Member to Mautic](https://wpfusion.com/connect/connect-ultimate-member-to-mautic/)  \|
- [Connect Ultimate Member to NationBuilder](https://wpfusion.com/connect/connect-ultimate-member-to-nationbuilder/)  \|
- [Connect Ultimate Member to Omnisend](https://wpfusion.com/connect/connect-ultimate-member-to-omnisend/)  \|
- [Connect Ultimate Member to Ontraport](https://wpfusion.com/connect/connect-ultimate-member-to-ontraport/)  \|
- [Connect Ultimate Member to Ortto](https://wpfusion.com/connect/connect-ultimate-member-to-ortto/)  \|
- [Connect Ultimate Member to Pipedrive](https://wpfusion.com/connect/connect-ultimate-member-to-pipedrive/)  \|
- [Connect Ultimate Member to Platformly](https://wpfusion.com/connect/connect-ultimate-member-to-platformly/)  \|
- [Connect Ultimate Member to Quentn](https://wpfusion.com/connect/connect-ultimate-member-to-quentn/)  \|
- [Connect Ultimate Member to Salesflare](https://wpfusion.com/connect/connect-ultimate-member-to-salesflare/)  \|
- [Connect Ultimate Member to Salesforce](https://wpfusion.com/connect/connect-ultimate-member-to-salesforce/)  \|
- [Connect Ultimate Member to Sender](https://wpfusion.com/connect/connect-ultimate-member-to-sender/)  \|
- [Connect Ultimate Member to SendFox](https://wpfusion.com/connect/connect-ultimate-member-to-sendfox/)  \|
- [Connect Ultimate Member to Tubular](https://wpfusion.com/connect/connect-ultimate-member-to-tubular/)  \|
- [Connect Ultimate Member to User.com](https://wpfusion.com/connect/connect-ultimate-member-to-user-com/)  \|
- [Connect Ultimate Member to WP ERP](https://wpfusion.com/connect/connect-ultimate-member-to-wp-erp/)  \|
- [Connect Ultimate Member to Zoho](https://wpfusion.com/connect/connect-ultimate-member-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/ultimate-member/#overview)
- [Sync Custom Fields](https://wpfusion.com/documentation/membership/ultimate-member/#sync-custom-fields)
- [Tagging](https://wpfusion.com/documentation/membership/ultimate-member/#tagging)
- [Tag Users on Registration](https://wpfusion.com/documentation/membership/ultimate-member/#tag-users-on-registration)
- [User Roles](https://wpfusion.com/documentation/membership/ultimate-member/#user-roles)
- [General Settings](https://wpfusion.com/documentation/membership/ultimate-member/#general-settings)
- [A note on webhooks](https://wpfusion.com/documentation/membership/ultimate-member/#a-note-on-webhooks)

### You may also like

[![illustration of a wordpress dashboard with icons for users, wp fusion, and social sharing, highlighting website management, user registration options, and community features on a light blue background.](https://wpfusion.com/wp-content/uploads/2025/08/user-registration-wordpress-1-300x158.jpg)](https://wpfusion.com/tutorials/four-user-registration-options-in-wordpress-and-how-to-integrate-them-with-wp-fusion/)

Tutorials

![Jessica Kavalec-Miller](https://secure.gravatar.com/avatar/4e76056caa8ec553ba2fafd20efed7263899fac12dab8472f96d36043e7f225a?s=128&d=mm&r=g)

#### [Four User Registration Options in WordPress and How to Integrate them with WP Fusion](https://wpfusion.com/tutorials/four-user-registration-options-in-wordpress-and-how-to-integrate-them-with-wp-fusion/)

If you’re new to establishing your online presence with your website, having user registration capabilities is a step forward in the right direction.

In this post, we’ll go over what user registration is and its benefits, and how you can enable it on your website using no plugins or with

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