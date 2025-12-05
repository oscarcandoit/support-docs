---
url: "https://wpfusion.com/documentation/membership/fluentcommunity/"
title: "Connect FluentCommunity to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/fluentcommunity/#content)

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

# FluentCommunity

- Published onDecember 31, 2024
- Last updated on July 28, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- FluentCommunity

### [\#](https://wpfusion.com/documentation/membership/fluentcommunity/\#overview) Overview

WP Fusion integrates with [FluentCommunity](https://wpfusion.com/go/fluentcommunity) to sync members with any one of  [50+ CRMs and marketing automation platforms](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they join spaces or courses, apply tags based on course progress, sync course progress with your CRM, and auto-enroll members when tags or lists are updated in your CRM.

### [\#](https://wpfusion.com/documentation/membership/fluentcommunity/\#tags-and-access-control) Tags and access control

WP Fusion adds several settings to FluentCommunity, which you can find in the WP Fusion submenu in the WordPress admin, as well as in the WP Fusion settings section when editing any Course or Space.

[![screenshot of a wordpress plugin settings page for activecampaign integration with fluentcommunity, displaying options to set required tags and a redirect url for denied access, featuring active membership tag and signup fee subscription redirect selected.](https://wpfusion.com/wp-content/uploads/2024/12/fluentcommunity-settings-1-1024x515.jpg)](https://wpfusion.com/wp-content/uploads/2024/12/fluentcommunity-settings-1.jpg)

- **Required Tags:** Here you can set one or more CRM tags that are required to access your community.
- **Redirect if Denied:** If the user does not have the required tags, they can either be redirected to a page or URL of your choosing, or you can leave the redirect setting blank to use the default access denied features configured in the [FluentCommunity settings](https://fluentcommunity.co/docs/portal-access-settings/).

#### [\#](https://wpfusion.com/documentation/membership/fluentcommunity/\#space-settings) Space settings

[![a fluentcommunity settings page displays options for uploading photos and configuring activecampaign integration, including tag application when users join or leave, plus a dropdown to link tags with user actions.](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-space-settings-1-1024x643.jpg)](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-space-settings-1.jpg)

For each of your spaces, you have three options:

- **Apply Tags:** These tags will be applied in your CRM when a user joins the space.
- **Remove Tags:** If this box is checked, the tags will automatically be removed if the user leaves the space.
- **Link with Tag:** This setting allows you to select a tag that becomes _linked_ with the space. If this tag is applied to a contact, for example via a webhook, they will be automatically added to the space. Likewise if this tag is removed, they will be removed from the space. This lets you automate individual users’ space memberships using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

If you want to create private spaces for groups of members, you can set individual spaces to Private or Secret in the [FluentCommunity space settings](https://fluentcommunity.co/docs/managing-privacy-of-spaces/). WP Fusion will then automatically add the user to the correct spaces based on their tags in your connected CRM.

#### [\#](https://wpfusion.com/documentation/membership/fluentcommunity/\#course-settings) Course settings

[![a fluentcommunity settings page displays options for uploading photos and configuring activecampaign integration, including tag application when users join or leave, plus a dropdown to link tags with user actions.](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-space-settings-1-1024x643.jpg)](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-space-settings-1.jpg)

The course settings are similar to the space settings:

- **Apply Tags:** These tags will be applied in your CRM when a user enrolls in the course.
- **Remove Tags:** If this box is checked, the tags will automatically be removed if the user leaves the course.
- **Link with Tag:** This setting allows you to select a tag that becomes _linked_ with the course. If this tag is applied to a contact, for example via a webhook, they will be automatically added to the course. Likewise if this tag is removed, they will be removed from the course. This lets you automate individual users’ course enrollments using sequences in your CRM in conjunction with [webhooks / HTTP Posts](https://wpfusion.com/documentation/#webhooks).

Likewise, if you want to create private courses for groups of members, you can set individual courses to Private or Secret in the [FluentCommunity course settings](https://fluentcommunity.co/docs/course-privacy/). WP Fusion will then automatically add the user to the correct courses based on their tags in your connected CRM.

### [\#](https://wpfusion.com/documentation/membership/fluentcommunity/\#syncing-custom-fields) Syncing custom fields

WP Fusion can sync several fields in real-time with your CRM as members interact with your community.

[![Screenshot of WP Fusion's FluentCommunity settings](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-fields-1024x303.jpg)](https://wpfusion.com/wp-content/uploads/2024/12/fluent-community-fields-scaled.jpg)

The fields are:

- **Last Space Joined:** When a member joins a space, the name of the space will be synced.
- **Last Space Joined Date:** When a member joins a space, the current date and time will be synced.
- **Last Course Enrolled:** When a student is enrolled in a course, the name of the course will be synced.
- **Last Course Enrolled Date:** When a student is enrolled in a course, the current date and time will be synced.
- **Last Course Completed:** When a course is marked complete, the name of the course will be synced.
- **Last Course Completed Date:** When a course is marked complete, the date and time will be synced.
- **Last Lesson Completed:** When a lesson is marked complete, the name of the lesson will be synced.
- **Last Lesson Completed Date:** When a lesson is marked complete, the date and time will be synced.

You can use these fields to track progress in your CRM and potentially reduce the number of tags that need to be applied to a contact.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect FluentCommunity to ActiveCampaign](https://wpfusion.com/connect/connect-fluentcommunity-to-activecampaign/)  \|
- [Connect FluentCommunity to AgileCRM](https://wpfusion.com/connect/connect-fluentcommunity-to-agilecrm/)  \|
- [Connect FluentCommunity to Autopilot](https://wpfusion.com/connect/connect-fluentcommunity-to-autopilot/)  \|
- [Connect FluentCommunity to Bento](https://wpfusion.com/connect/connect-fluentcommunity-to-bento/)  \|
- [Connect FluentCommunity to BirdSend](https://wpfusion.com/connect/connect-fluentcommunity-to-birdsend/)  \|
- [Connect FluentCommunity to Brevo](https://wpfusion.com/connect/connect-fluentcommunity-to-brevo/)  \|
- [Connect FluentCommunity to Capsule](https://wpfusion.com/connect/connect-fluentcommunity-to-capsule/)  \|
- [Connect FluentCommunity to Constant Contact](https://wpfusion.com/connect/connect-fluentcommunity-to-constant-contact/)  \|
- [Connect FluentCommunity to ConvertKit](https://wpfusion.com/connect/connect-fluentcommunity-to-convertkit/)  \|
- [Connect FluentCommunity to ConvesioConvert](https://wpfusion.com/connect/connect-fluentcommunity-to-convesioconvert/)  \|
- [Connect FluentCommunity to Copper](https://wpfusion.com/connect/connect-fluentcommunity-to-copper/)  \|
- [Connect FluentCommunity to Customer.io](https://wpfusion.com/connect/connect-fluentcommunity-to-customer-io/)  \|
- [Connect FluentCommunity to Customerly](https://wpfusion.com/connect/connect-fluentcommunity-to-customerly/)  \|
- [Connect FluentCommunity to Drip](https://wpfusion.com/connect/connect-fluentcommunity-to-drip/)  \|
- [Connect FluentCommunity to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-fluentcommunity-to-dynamics-365-marketing/)  \|
- [Connect FluentCommunity to EmailOctopus](https://wpfusion.com/connect/connect-fluentcommunity-to-emailoctopus/)  \|
- [Connect FluentCommunity to EngageBay](https://wpfusion.com/connect/connect-fluentcommunity-to-engagebay/)  \|
- [Connect FluentCommunity to Flexie](https://wpfusion.com/connect/connect-fluentcommunity-to-flexie/)  \|
- [Connect FluentCommunity to FluentCRM](https://wpfusion.com/connect/connect-fluentcommunity-to-fluentcrm/)  \|
- [Connect FluentCommunity to FunnelKit](https://wpfusion.com/connect/connect-fluentcommunity-to-funnelkit/)  \|
- [Connect FluentCommunity to Gist](https://wpfusion.com/connect/connect-fluentcommunity-to-gist/)  \|
- [Connect FluentCommunity to Groundhogg](https://wpfusion.com/connect/connect-fluentcommunity-to-groundhogg/)  \|
- [Connect FluentCommunity to HighLevel](https://wpfusion.com/connect/connect-fluentcommunity-to-highlevel/)  \|
- [Connect FluentCommunity to HubSpot](https://wpfusion.com/connect/connect-fluentcommunity-to-hubspot/)  \|
- [Connect FluentCommunity to Infusionsoft](https://wpfusion.com/connect/connect-fluentcommunity-to-infusionsoft/)  \|
- [Connect FluentCommunity to Intercom](https://wpfusion.com/connect/connect-fluentcommunity-to-intercom/)  \|
- [Connect FluentCommunity to Jetpack CRM](https://wpfusion.com/connect/connect-fluentcommunity-to-jetpack-crm/)  \|
- [Connect FluentCommunity to Kartra](https://wpfusion.com/connect/connect-fluentcommunity-to-kartra/)  \|
- [Connect FluentCommunity to Keap](https://wpfusion.com/connect/connect-fluentcommunity-to-keap/)  \|
- [Connect FluentCommunity to Klaviyo](https://wpfusion.com/connect/connect-fluentcommunity-to-klaviyo/)  \|
- [Connect FluentCommunity to KlickTipp](https://wpfusion.com/connect/connect-fluentcommunity-to-klicktipp/)  \|
- [Connect FluentCommunity to Loopify](https://wpfusion.com/connect/connect-fluentcommunity-to-loopify/)  \|
- [Connect FluentCommunity to MailChimp](https://wpfusion.com/connect/connect-fluentcommunity-to-mailchimp/)  \|
- [Connect FluentCommunity to MailerLite](https://wpfusion.com/connect/connect-fluentcommunity-to-mailerlite/)  \|
- [Connect FluentCommunity to Mailjet](https://wpfusion.com/connect/connect-fluentcommunity-to-mailjet/)  \|
- [Connect FluentCommunity to MailPoet](https://wpfusion.com/connect/connect-fluentcommunity-to-mailpoet/)  \|
- [Connect FluentCommunity to Maropost](https://wpfusion.com/connect/connect-fluentcommunity-to-maropost/)  \|
- [Connect FluentCommunity to Mautic](https://wpfusion.com/connect/connect-fluentcommunity-to-mautic/)  \|
- [Connect FluentCommunity to NationBuilder](https://wpfusion.com/connect/connect-fluentcommunity-to-nationbuilder/)  \|
- [Connect FluentCommunity to Omnisend](https://wpfusion.com/connect/connect-fluentcommunity-to-omnisend/)  \|
- [Connect FluentCommunity to Ontraport](https://wpfusion.com/connect/connect-fluentcommunity-to-ontraport/)  \|
- [Connect FluentCommunity to Ortto](https://wpfusion.com/connect/connect-fluentcommunity-to-ortto/)  \|
- [Connect FluentCommunity to Pipedrive](https://wpfusion.com/connect/connect-fluentcommunity-to-pipedrive/)  \|
- [Connect FluentCommunity to Platformly](https://wpfusion.com/connect/connect-fluentcommunity-to-platformly/)  \|
- [Connect FluentCommunity to Quentn](https://wpfusion.com/connect/connect-fluentcommunity-to-quentn/)  \|
- [Connect FluentCommunity to Salesflare](https://wpfusion.com/connect/connect-fluentcommunity-to-salesflare/)  \|
- [Connect FluentCommunity to Salesforce](https://wpfusion.com/connect/connect-fluentcommunity-to-salesforce/)  \|
- [Connect FluentCommunity to Sender](https://wpfusion.com/connect/connect-fluentcommunity-to-sender/)  \|
- [Connect FluentCommunity to SendFox](https://wpfusion.com/connect/connect-fluentcommunity-to-sendfox/)  \|
- [Connect FluentCommunity to Tubular](https://wpfusion.com/connect/connect-fluentcommunity-to-tubular/)  \|
- [Connect FluentCommunity to User.com](https://wpfusion.com/connect/connect-fluentcommunity-to-user-com/)  \|
- [Connect FluentCommunity to WP ERP](https://wpfusion.com/connect/connect-fluentcommunity-to-wp-erp/)  \|
- [Connect FluentCommunity to Zoho](https://wpfusion.com/connect/connect-fluentcommunity-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/fluentcommunity/#overview)
- [Tags and access control](https://wpfusion.com/documentation/membership/fluentcommunity/#tags-and-access-control)
- [Space settings](https://wpfusion.com/documentation/membership/fluentcommunity/#space-settings)
- [Course settings](https://wpfusion.com/documentation/membership/fluentcommunity/#course-settings)
- [Syncing custom fields](https://wpfusion.com/documentation/membership/fluentcommunity/#syncing-custom-fields)

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