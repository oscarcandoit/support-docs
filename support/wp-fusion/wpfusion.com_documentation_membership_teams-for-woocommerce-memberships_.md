---
url: "https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/"
title: "Connect Teams for WooCommerce Memberships to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/#content)

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

# Teams for WooCommerce Memberships

- Published onMarch 6, 2020
- Last updated on February 3, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- Teams for WooCommerce Memberships

### [\#](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/\#overview) Overview

In addition to supporting [WooCommerce Memberships](https://woocommerce.com/products/woocommerce-memberships/), WP Fusion also includes support for the [Teams for WooCommerce Memberships](https://wpfusion.com/go/teams-woocommerce-memberships) extension.

### [\#](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/\#tagging-team-members) Tagging team members

When this extension is active, an additional **Team Membership** section will appear on the WP Fusion panel when editing your team membership products.

![](https://wpfusion.com/wp-content/uploads/2020/03/woo-memberships-teams-1.jpg)

There are three options:

- **Apply tags to team members:** These tags will be applied in your CRM when a user is added to a team and accepts the invite.
- **Remove tags:** If this option is checked, the team member tags will be removed when members are removed from the team.
- **Remove tags – Cancelled:** If this option is checked, the team member tags will be removed when the team owner’s membership is cancelled.

#### [\#](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/\#teams-auto-enrollment) Teams auto-enrollment

When editing any single team, a WP Fusion meta box will appear where you can configure team auto-enrollment.

![](https://wpfusion.com/wp-content/uploads/2020/03/Screenshot-2024-04-23-at-3.32.52-PM.png)

There is one option:

- **Link tag:** This setting allows you to link a tag with team enrollment— when the tag is applied in your CRM, the user is automatically added to the team. If the tag is removed, they will be removed from the team.

### [\#](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/\#syncing-team-membership-fields) Syncing team membership fields

WP Fusion adds a few “pseudo” fields for sync with Teams for WooCommerce Memberships. These are found at Settings » WP Fusion » Contact Fields » WooCommerce Memberships.

[![](https://wpfusion.com/wp-content/uploads/2020/03/woo-memberships-teams-fields-1024x285.jpg)](https://wpfusion.com/wp-content/uploads/2020/03/woo-memberships-teams-fields.jpg)

Those fields are:

- **Memberships for Team Role:** This will contain the role of the member on the team (for example “member” or “owner”), and will be synced when a user joins a team or when their team role is changed.
- **Memberships for Teams Team Name:** This value will be synced whenever a user joins a team, and will contain the name of that team. This can be used to create segments in your CRM based on individual team memberships.

### [\#](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/\#syncing-historical-data) Syncing historical data

WP Fusion includes two batch export tools for Teams for WooCommerce Memberships that can retroactively sync team information to your CRM and team enrollment from before you installed WP Fusion.

These can be found at Settings » WP Fusion » Advanced » Batch Operations.

Select the **WooCommerce Memberships for Teams team meta** option and click the Create Background Task button to export team data to your CRM. For each member who is part of a team, WP Fusion will sync the team name and that member’s role in the team to the corresponding custom fields in your CRM.

Select the **WooCommerce Memberships for Teams team tags** option and click the Create Background Task button to sync tags configured on your teams. For each member who is part of a team, WP Fusion will sync the tags set on the team to the user.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/#overview)
- [Tagging team members](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/#tagging-team-members)
- [Teams auto-enrollment](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/#teams-auto-enrollment)
- [Syncing team membership fields](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/#syncing-team-membership-fields)
- [Syncing historical data](https://wpfusion.com/documentation/membership/teams-for-woocommerce-memberships/#syncing-historical-data)

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