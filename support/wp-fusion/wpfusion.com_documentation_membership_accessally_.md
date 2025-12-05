---
url: "https://wpfusion.com/documentation/membership/accessally/"
title: "Connect AccessAlly to WooCommerce and the rest of WordPress"
---

[Skip to content](https://wpfusion.com/documentation/membership/accessally/#content)

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

# AccessAlly

- Published onAugust 22, 2018
- Last updated on October 5, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Membership](https://wpfusion.com/documentation/#membership)
- /
- AccessAlly

### [\#](https://wpfusion.com/documentation/membership/accessally/\#overview) Overview

While [AccessAlly and ProgressAlly](https://accessally.com/) integrate with several marketing automation systems, they do _not_ integrate with any other plugins on your site (for example WooCommerce).

This can put you [in a difficult situation](https://www.rajavanya.com/never-use-accessally-with-woocommerce-and-drip-atleast/) where you need to use a separate plugin to sync customer data to your CRM, and then a webhook to send the data back from your CRM to AccessAlly to grant access to a course or membership.

WP Fusion’s AccessAlly integration works as a “bridge” between WP Fusion’s [100+ plugin integrations](https://wpfusion.com/documentation/#integrations), and AccessAlly’s ecommerce and membership functionality:

1. **Tags applied in your CRM by WP Fusion are immediately communicated to AccessAlly** (for example after a WooCommerce checkout), without requiring a webhook.
2. **Tags applied in your CRM by AccessAlly are immediately communicated to WP Fusion** (for example [to award an achievement](https://wpfusion.com/documentation/gamification/gamipress/#achievements) or [trigger a push notification](https://wpfusion.com/documentation/membership/buddyboss/#push-notifications)), without requiring a webhook.

This opens up many possibilities for integrating AccessAlly with the rest of your site. For example you may want to:

- Sell your memberships with [WooCommerce Subscriptions](https://wpfusion.com/documentation/ecommerce/woocommerce-subscriptions/), but deliver your content with AccessAlly
- Create [a BuddyBoss app](https://wpfusion.com/go/buddyboss-app) for your members and grant access based on AccessAlly tags
- Require a [Gravity Form](https://wpfusion.com/documentation/lead-generation/gravity-forms/) survey submission to unlock the next ProgressAlly module
- Award points or badges in [Gamipress](https://wpfusion.com/documentation/other/gamipress/) when Objectives are completed in ProgressAlly
- Send data and trigger automations in another CRM in addition to AccessAlly

### [\#](https://wpfusion.com/documentation/membership/accessally/\#setup) Setup

With WP Fusion active, you’ll see a new menu option for WP Fusion under the main AccessAlly settings menu.

This page shows you a table of all your AccessAlly tags (in the left column) and available WP Fusion tags (in the right column).

![](https://wpfusion.com/wp-content/uploads/2018/08/accessally-1-1024x795.jpg)

When the “Active” box is checked, the tags become linked between WP Fusion and AccessAlly.

For example, **to sell access to a membership using WooCommerce**, you would configure the WooCommerce product to apply the tag “paid membership member”. When this product is purchased, the user will be able to access any AccessAlly content protected by the “paid membership member” tag.

If you’re selling a subscription, when the subscription is cancelled the “paid membership member” tag will be removed, and the user will no longer be able to access restricted content in AccessAlly.

#### [\#](https://wpfusion.com/documentation/membership/accessally/\#different-crms) Different CRMs

It’s also possible to have AccessAlly and WP Fusion connected to two different CRMs.

For example you could connect WP Fusion to Intercom or ConvertFox to **deliver on-site messaging when Objectives are completed in ProgressAlly**.

In that case you can configure your AccessAlly objectives to apply the tag “awesome achievement” in Ontraport when they have been completed. This tag will then be simultaneously applied in Intercom, and can trigger an on-site message congratulating the user.

### [\#](https://wpfusion.com/documentation/membership/accessally/\#accessally-managed-mode)“AccessAlly Managed” mode

Since [AccessAlly 4.0](https://accessally.com/blog/accessally-4-0/), it’s possible to use AccessAlly without a CRM. In this scenario, you can use AccessAlly as just a membership plugin, and use WP Fusion for the integration between AccessAlly in your CRM.

During setup, select **AccessAlly Managed** for your CRM.

[![](https://wpfusion.com/wp-content/uploads/2018/08/accessally-setup-managed-1024x443.jpg)](https://wpfusion.com/wp-content/uploads/2018/08/accessally-setup-managed.jpg)

After completing setup, create some tags at AccessAlly » Settings » Tags. Then head to the WP Fusion settings at AccessAlly » WP Fusion in the admin.

[![](https://wpfusion.com/wp-content/uploads/2018/08/accessally-hubspot-mapping-1024x588.jpg)](https://wpfusion.com/wp-content/uploads/2018/08/accessally-hubspot-mapping.jpg)

Here you can map your AccessAlly managed tags (i.e. local tags) with tags or lists in your connected CRM.

In this example we are using AccessAlly to sell memberships and deliver membership content, and WP Fusion is syncing the members to HubSpot and adding them to lists based on their membership level and status.

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

- [Overview](https://wpfusion.com/documentation/membership/accessally/#overview)
- [Setup](https://wpfusion.com/documentation/membership/accessally/#setup)
- [Different CRMs](https://wpfusion.com/documentation/membership/accessally/#different-crms)
- ["AccessAlly Managed" mode](https://wpfusion.com/documentation/membership/accessally/#accessally-managed-mode)

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